open Utils;

[@bs.val] external alert: string => unit = "alert";

type feed =
  | Tag(string)
  | Global
  | Your;

type action =
  | ToggleFavorite(string, Types.remoteAction)
  | ChangeFeed(feed, int)
  | UpdateTags(Types.remoteTags)
  | UpdateArticle(string, Types.article)
  | UpdateArticles((Types.remoteArticles, float, int))
  | UpdateFile(string, Types.file)
  | UpdateFiles((Types.remoteFiles, float, int));

type state = {
  articles: Types.remoteArticles,
  files: Types.remoteFiles,
  tags: Types.remoteTags,
  articlesCount: float,
  filesCount: float,
  currentPage: int,
  feed,
  togglingFavorites: Belt.Map.String.t(Types.remoteAction),
};

let pageNum = 10.;

let loadGlobalFeed = (~tag=?, ~page=1, _payload, {ReasonReact.send, handle}) => {
  open Js.Promise;
  let limit = pageNum |> int_of_float;
  let offset = (float_of_int(page) -. 1.) *. pageNum |> int_of_float;
  send(UpdateFiles((RemoteData.Loading, 0., page)));
  API.listFiles(~offset, ~limit, ())
  |> then_(result => {
       switch (result) {
       | Belt.Result.Ok(json) =>
         let files =
           json
           |> Json.Decode.(field("files", array(Decoder.file)))
           |> Belt.List.fromArray;

         /*
          let filesCount = 1.
              json
              |> Json.Decode.(field("filesCount", Json.Decode.float));

              alert("got filesCount!!!");
          */
         send(UpdateFiles((RemoteData.Success(files), 10., page)));
       | Error(_) =>
         send(
           UpdateFiles((
             RemoteData.Failure("failed to fetch list of files"),
             0.,
             1,
           )),
         )
       };
       ignore() |> resolve;
     })
  |> catch(_error =>
       send(
         UpdateFiles((
           RemoteData.Failure("failed to fetch list of files!"),
           0.,
           1,
         )),
       )
       |> resolve
     )
  |> ignore;
};

let onYourFeedClick = (~feed, event, {ReasonReact.send}) => {
  event->ReactEvent.Mouse.preventDefault;
  switch (feed) {
  | Your => ignore()
  | Tag(_)
  | Global => send(ChangeFeed(Your, 1))
  };
};

let onGlobalFeedClick = (~feed, event, {ReasonReact.send}) => {
  event->ReactEvent.Mouse.preventDefault;
  switch (feed) {
  | Global => ignore()
  | Tag(_)
  | Your => send(ChangeFeed(Global, 1))
  };
};

let initialData = (~user, _payload, {ReasonReact.state, send}) => {
  let {files} = state;
  switch (files, user) {
  | (NotAsked, RemoteData.Success(_)) => send(ChangeFeed(Global, 1))
  | (NotAsked, Failure(_)) => send(ChangeFeed(Global, 1))
  | (NotAsked, NotAsked | Loading)
  | (
      Loading | Success(_) | Failure(_),
      NotAsked | Loading | Success(_) | Failure(_),
    ) =>
    ignore()
  };
};

let favoriteArticle = (~user, (slug, favorited), {ReasonReact.send}) =>
  Js.Promise.(
    switch (user) {
    | RemoteData.NotAsked
    | Loading
    | Failure(_) => ReasonReact.Router.push("/#/login")
    | Success(_) =>
      send(ToggleFavorite(slug, RemoteData.Loading));
      (
        favorited ?
          API.favoriteArticle(~slug, ()) : API.unfavoriteArticle(~slug, ())
      )
      |> then_(result => {
           switch (result) {
           | Belt.Result.Ok(json) =>
             let article =
               json |> Json.Decode.field("article", Decoder.article);
             send(UpdateArticle(slug, article));
           | Error(error) =>
             Js.log2("failed to toggle favorite article: ", error)
           };
           send(ToggleFavorite(slug, RemoteData.NotAsked));
           ignore() |> resolve;
         })
      |> catch(error => {
           Js.log2("failed to toggle favorite article: ", error);
           send(ToggleFavorite(slug, RemoteData.NotAsked));
           ignore() |> resolve;
         })
      |> ignore;
    }
  );

let component = ReasonReact.reducerComponent("Home");

let make = (~user, _children) => {
  ...component,
  initialState: () => {
    articles: RemoteData.NotAsked,
    files: RemoteData.NotAsked,
    tags: RemoteData.NotAsked,
    articlesCount: 0.,
    filesCount: 0.,
    currentPage: 1,
    feed: Global,
    togglingFavorites: Belt.Map.String.empty,
  },
  reducer: (action, state) =>
    switch (action) {
    | ToggleFavorite(slug, value) =>
      let togglingFavorites =
        state.togglingFavorites
        ->(Belt.Map.String.update(slug, _previous => Some(value)));
      ReasonReact.Update({...state, togglingFavorites});
    | ChangeFeed(feed, page) =>
      ReasonReact.UpdateWithSideEffects(
        {...state, feed, currentPage: page},
        (
          ({handle}) => {
            switch (feed) {
            | Global => handle(loadGlobalFeed(~page), ())
            | Your => handle(loadGlobalFeed(~page), ())
            | Tag(tag) => handle(loadGlobalFeed(~page), ())
            };
            ignore();
          }
        ),
      )
    | UpdateTags(tags) => ReasonReact.Update({...state, tags})
    | UpdateArticle(slug, article) =>
      let articles =
        state.articles
        |> RemoteData.map(articles =>
             articles
             ->(
                 Belt.List.map((x: Types.article) =>
                   x.slug === slug ? article : x
                 )
               )
           );
      ReasonReact.Update({...state, articles});
    | UpdateArticles((articles, articlesCount, currentPage)) =>
      ReasonReact.Update({...state, articles, articlesCount, currentPage})
    | UpdateFile(guid, file) =>
      let files =
        state.files
        |> RemoteData.map(files =>
             files
             ->(Belt.List.map((x: Types.file) => x.guid === guid ? file : x))
           );
      ReasonReact.Update({...state, files});
    | UpdateFiles((files, filesCount, currentPage)) =>
      ReasonReact.Update({...state, files, filesCount, currentPage})
    },
  didMount: ({handle}) => handle(initialData(~user), ()),
  didUpdate: ({newSelf}) => newSelf.handle(initialData(~user), ()),
  render: ({state, handle, send}) => {
    let {
      articles,
      files,
      tags,
      articlesCount,
      filesCount,
      currentPage,
      feed,
      togglingFavorites,
    } = state;
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font"> {"content" |> strEl} </h1>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {
                  switch (user) {
                  | NotAsked
                  | Loading
                  | Failure(_) => nullEl
                  | Success(_) =>
                    <li className="nav-item">
                      <a
                        href="#"
                        className={
                          "nav-link" ++ (feed === Your ? " active" : "")
                        }
                        onClick={handle(onYourFeedClick(~feed))}>
                        {"Your Feed" |> strEl}
                      </a>
                    </li>
                  }
                }
                <li className="nav-item">
                  <a
                    href="#"
                    className={
                      "nav-link" ++ (feed === Global ? " active" : "")
                    }
                    onClick={handle(onGlobalFeedClick(~feed))}>
                    {"Global Feed" |> strEl}
                  </a>
                </li>
                {
                  switch (feed) {
                  | Tag(tag) =>
                    <li className="nav-item">
                      <a className="nav-link active">
                        {"#" ++ tag |> strEl}
                      </a>
                    </li>
                  | Your
                  | Global => nullEl
                  }
                }
              </ul>
            </div>
            {
              switch (files) {
              | NotAsked =>
                <div className="article-preview">
                  {"Initializing..." |> strEl}
                </div>
              | Loading =>
                <div className="article-preview">
                  {"Loading..." |> strEl}
                </div>
              | Failure(error) =>
                <div className="article-preview">
                  {"ERROR: " ++ error |> strEl}
                </div>
              | Success(data) =>
                data
                ->(
                    Belt.List.mapU((. value: Types.file) =>
                      <FileItem
                        key={value.guid}
                        value
                        /*
                         onFavoriteClick={handle(favoriteArticle(~user))}
                         favoriteDisabled={
                           togglingFavorites
                           ->(
                               Belt.Map.String.getWithDefault(
                                 value.slug,
                                 RemoteData.NotAsked,
                               )
                             )
                           === RemoteData.Loading
                         }
                         */
                      />
                    )
                  )
                |> Belt.List.toArray
                |> arrayEl
              }
            }
            {
              switch (files) {
              | NotAsked
              | Loading
              | Failure(_) => nullEl
              | Success(_) =>
                <Pagination
                  totalCount=filesCount
                  perPage=pageNum
                  onPageClick=(page => send(ChangeFeed(feed, page)))
                  currentPage
                />
              }
            }
          </div>
        </div>
      </div>
    </div>;
  },
};
