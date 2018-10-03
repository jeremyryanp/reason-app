open Utils;

let component = ReasonReact.statelessComponent("FileItem");

let make = (~value, _children) => {
  ...component,
  render: _self => {
    let {
      Types.createDate,
      createUser,
      fileSize,
      folder,
      guid,
      name,
      sortOrder,
      storedFileName,
      updateDate,
    } = value;
    <div className="file-preview">
      <div className="file-meta">
        /*
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
         */

          <a href={"/#/details/" ++ guid} className="preview-link">
            <p> {folder |> strEl} {name |> strEl} </p>
          </a>
        </div>
    </div>;
  },
};
