open Utils;

let component = ReasonReact.statelessComponent("ArticleItem");

let make = (~value, ~onFavoriteClick, ~favoriteDisabled=false, _children) => {
  ...component,
  render: _self => {
    let {
      Types.title,
      description,
      slug,
      createdAt,
      author,
      favoritesCount,
      favorited,
    } = value;
    <div className="article-preview">
      <div className="article-meta">
        <a href=("/#/profile/" ++ author.username)>
          <img src=author.image />
        </a>
        <div className="info">
          <a href=("/#/profile/" ++ author.username) className="author">
            (author.username |> strEl)
          </a>
          <span className="date">
            (createdAt |> Js.Date.toUTCString |> strEl)
          </span>
        </div>
        <button
          className=(
            "btn  btn-sm pull-xs-right "
            ++ (favorited ? "btn-primary" : "btn-outline-primary")
          )
          onClick=(
            _event =>
              favoriteDisabled ?
                ignore() : onFavoriteClick((slug, !favorited))
          )
          disabled=favoriteDisabled>
          <i className="ion-heart" />
          (" " ++ (favoritesCount |> string_of_int) |> strEl)
        </button>
      </div>
      <a href=("/#/article/" ++ slug) className="preview-link">
        <h1> (title |> strEl) </h1>
        <p> (description |> strEl) </p>
        <span> ("Read more..." |> strEl) </span>
      </a>
    </div>;
  },
};
