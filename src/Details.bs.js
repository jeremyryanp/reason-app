// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var RemoteData = require("remotedata-re/src/RemoteData.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var API$ReasonReactRealworldExampleApp = require("./API.bs.js");
var Img$ReasonReactRealworldExampleApp = require("./Img.bs.js");
var Utils$ReasonReactRealworldExampleApp = require("./Utils.bs.js");
var Decoder$ReasonReactRealworldExampleApp = require("./Decoder.bs.js");

function redirectToLoginPage() {
  return ReasonReact.Router[/* push */0]("/#/login");
}

function isAuthor(user, article) {
  if (typeof user === "number" || !(user.tag === 1 && !(typeof article === "number" || article.tag !== 1))) {
    return false;
  } else {
    return article[0][/* author */9][/* username */0] === user[0][/* username */4];
  }
}

var component = ReasonReact.statelessComponent("FavoriteOrDeleteButton");

function make($staropt$star, user, article, $staropt$star$1, $staropt$star$2, _) {
  var disabled = $staropt$star !== undefined ? $staropt$star : false;
  var onFavoriteClick = $staropt$star$1 !== undefined ? $staropt$star$1 : (function () {
        return /* () */0;
      });
  var onDeleteClick = $staropt$star$2 !== undefined ? $staropt$star$2 : (function () {
        return /* () */0;
      });
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var isLogon = RemoteData.isSuccess(user);
              var isAuthor$1 = isAuthor(user, article);
              var match;
              if (typeof article === "number" || article.tag !== 1) {
                match = /* tuple */[
                  0,
                  false
                ];
              } else {
                var match$1 = article[0];
                match = /* tuple */[
                  match$1[/* favoritesCount */8],
                  match$1[/* favorited */7]
                ];
              }
              var favorited = match[1];
              return React.createElement("button", {
                          className: isAuthor$1 ? "btn btn-sm btn-outline-danger" : "btn btn-sm " + (
                              favorited ? "btn-primary" : "btn-outline-primary"
                            ),
                          disabled: disabled,
                          onClick: disabled ? (function () {
                                return /* () */0;
                              }) : (
                              isLogon ? (
                                  isAuthor$1 ? onDeleteClick : onFavoriteClick
                                ) : redirectToLoginPage
                            )
                        }, React.createElement("i", {
                              className: isAuthor$1 ? "ion-trash-a" : "ion-heart"
                            }), Utils$ReasonReactRealworldExampleApp.strEl(isAuthor$1 ? " Delete Article " : (
                                favorited ? " Unfavorite Post " : " Favorite Post "
                              )), isAuthor$1 ? Utils$ReasonReactRealworldExampleApp.nullEl : React.createElement("span", {
                                className: "counter"
                              }, Utils$ReasonReactRealworldExampleApp.strEl(" (" + (String(match[0]) + ")"))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var FavoriteOrDeleteButton = /* module */[
  /* component */component,
  /* make */make
];

var component$1 = ReasonReact.statelessComponent("FollowOrEditButton");

function make$1($staropt$star, user, article, $staropt$star$1, $staropt$star$2, _) {
  var disabled = $staropt$star !== undefined ? $staropt$star : false;
  var onFollowClick = $staropt$star$1 !== undefined ? $staropt$star$1 : (function () {
        return /* () */0;
      });
  var onEditClick = $staropt$star$2 !== undefined ? $staropt$star$2 : (function () {
        return /* () */0;
      });
  return /* record */[
          /* debugName */component$1[/* debugName */0],
          /* reactClassInternal */component$1[/* reactClassInternal */1],
          /* handedOffState */component$1[/* handedOffState */2],
          /* willReceiveProps */component$1[/* willReceiveProps */3],
          /* didMount */component$1[/* didMount */4],
          /* didUpdate */component$1[/* didUpdate */5],
          /* willUnmount */component$1[/* willUnmount */6],
          /* willUpdate */component$1[/* willUpdate */7],
          /* shouldUpdate */component$1[/* shouldUpdate */8],
          /* render */(function () {
              var isLogon = RemoteData.isSuccess(user);
              var isAuthor$1 = isAuthor(user, article);
              var match;
              if (typeof article === "number" || article.tag !== 1) {
                match = /* tuple */[
                  "",
                  false
                ];
              } else {
                var match$1 = article[0][/* author */9];
                match = /* tuple */[
                  match$1[/* username */0],
                  match$1[/* following */3]
                ];
              }
              var following = match[1];
              return React.createElement("button", {
                          className: isAuthor$1 ? "btn btn-sm btn-outline-secondary" : "btn btn-sm " + (
                              following ? "btn-secondary" : "btn-outline-secondary"
                            ),
                          disabled: disabled,
                          onClick: disabled ? (function () {
                                return /* () */0;
                              }) : (
                              isLogon ? (
                                  isAuthor$1 ? onEditClick : onFollowClick
                                ) : redirectToLoginPage
                            )
                        }, React.createElement("i", {
                              className: isAuthor$1 ? "ion-edit" : "ion-plus-round"
                            }), Utils$ReasonReactRealworldExampleApp.strEl(isAuthor$1 ? " Edit Article " : (
                                following ? " Unfollow " : " Follow "
                              ) + match[0]));
            }),
          /* initialState */component$1[/* initialState */10],
          /* retainedProps */component$1[/* retainedProps */11],
          /* reducer */component$1[/* reducer */12],
          /* jsElementWrapped */component$1[/* jsElementWrapped */13]
        ];
}

var FollowOrEditButton = /* module */[
  /* component */component$1,
  /* make */make$1
];

var component$2 = ReasonReact.statelessComponent("CommentCard");

function make$2($staropt$star, onDeleteClick, data, user, _) {
  var hideDeleteIcon = $staropt$star !== undefined ? $staropt$star : false;
  return /* record */[
          /* debugName */component$2[/* debugName */0],
          /* reactClassInternal */component$2[/* reactClassInternal */1],
          /* handedOffState */component$2[/* handedOffState */2],
          /* willReceiveProps */component$2[/* willReceiveProps */3],
          /* didMount */component$2[/* didMount */4],
          /* didUpdate */component$2[/* didUpdate */5],
          /* willUnmount */component$2[/* willUnmount */6],
          /* willUpdate */component$2[/* willUpdate */7],
          /* shouldUpdate */component$2[/* shouldUpdate */8],
          /* render */(function () {
              var author = data[/* author */4];
              var tmp;
              tmp = typeof user === "number" || !(user.tag === 1 && user[0][/* username */4] === author[/* username */0] && !hideDeleteIcon) ? Utils$ReasonReactRealworldExampleApp.nullEl : React.createElement("span", {
                      className: "mod-options"
                    }, React.createElement("i", {
                          className: "ion-trash-a",
                          onClick: onDeleteClick
                        }));
              return React.createElement("div", {
                          className: "card"
                        }, React.createElement("div", {
                              className: "card-block"
                            }, React.createElement("p", {
                                  className: "card-text"
                                }, Utils$ReasonReactRealworldExampleApp.strEl(data[/* body */3]))), React.createElement("div", {
                              className: "card-footer"
                            }, React.createElement("a", {
                                  className: "comment-author",
                                  href: "/#/profile/" + author[/* username */0]
                                }, ReasonReact.element(undefined, undefined, Img$ReasonReactRealworldExampleApp.make(Js_primitive.some(author[/* image */2]), undefined, undefined, "comment-author-img", /* array */[]))), Utils$ReasonReactRealworldExampleApp.strEl(" "), React.createElement("a", {
                                  className: "comment-author",
                                  href: "/#/profile/" + author[/* username */0]
                                }, Utils$ReasonReactRealworldExampleApp.strEl(author[/* username */0])), React.createElement("span", {
                                  className: "date-posted"
                                }, Utils$ReasonReactRealworldExampleApp.strEl(data[/* createdAt */1].toISOString())), tmp));
            }),
          /* initialState */component$2[/* initialState */10],
          /* retainedProps */component$2[/* retainedProps */11],
          /* reducer */component$2[/* reducer */12],
          /* jsElementWrapped */component$2[/* jsElementWrapped */13]
        ];
}

var CommentCard = /* module */[
  /* component */component$2,
  /* make */make$2
];

function loadArticle(slug, param) {
  var send = param[/* send */3];
  API$ReasonReactRealworldExampleApp.getArticle(slug, /* () */0).then((function (result) {
            if (result.tag) {
              Curry._1(send, /* UpdateArticle */Block.__(8, [/* Failure */Block.__(0, ["failed to fetch file"])]));
            } else {
              var article = Json_decode.field("article", Decoder$ReasonReactRealworldExampleApp.article, result[0]);
              Curry._1(send, /* UpdateArticle */Block.__(8, [/* Success */Block.__(1, [article])]));
            }
            return Promise.resolve(/* () */0);
          })).catch((function () {
          Curry._1(send, /* UpdateArticle */Block.__(8, [/* Failure */Block.__(0, ["failed to fetch file"])]));
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function loadComments(slug, param) {
  var send = param[/* send */3];
  API$ReasonReactRealworldExampleApp.comments(slug, /* () */0).then((function (result) {
            if (result.tag) {
              Curry._1(send, /* UpdateComments */Block.__(7, [/* Failure */Block.__(0, ["failed to fetch list of commnets"])]));
            } else {
              var comments = Belt_List.fromArray(Json_decode.field("comments", (function (param) {
                          return Json_decode.array(Decoder$ReasonReactRealworldExampleApp.comment, param);
                        }), result[0]));
              Curry._1(send, /* UpdateComments */Block.__(7, [/* Success */Block.__(1, [comments])]));
            }
            return Promise.resolve(/* () */0);
          })).catch((function () {
          Curry._1(send, /* UpdateComments */Block.__(7, [/* Failure */Block.__(0, ["failed to fetch list of commnets"])]));
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function favoriteArticle(article, _, param) {
  var send = param[/* send */3];
  if (typeof article === "number" || article.tag !== 1) {
    return /* () */0;
  } else {
    var match = article[0];
    var slug = match[/* slug */0];
    Curry._1(send, /* UpdateFavoriteAction */Block.__(3, [/* Loading */1]));
    (
          match[/* favorited */7] ? API$ReasonReactRealworldExampleApp.unfavoriteArticle(slug, /* () */0) : API$ReasonReactRealworldExampleApp.favoriteArticle(slug, /* () */0)
        ).then((function (result) {
              if (result.tag) {
                console.log("failed to favorite article", result[0]);
              } else {
                var match = Json_decode.field("article", Decoder$ReasonReactRealworldExampleApp.article, result[0]);
                Curry._1(send, /* ToggleArticleFavorite */Block.__(1, [match[/* favorited */7]]));
              }
              Curry._1(send, /* UpdateFavoriteAction */Block.__(3, [/* NotAsked */0]));
              return Promise.resolve(/* () */0);
            })).catch((function (error) {
            console.log("failed to favorite article", error);
            Curry._1(send, /* UpdateFavoriteAction */Block.__(3, [/* NotAsked */0]));
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  }
}

function deleteArticle(article, _, _$1) {
  if (typeof article !== "number") {
    if (article.tag === 1) {
      API$ReasonReactRealworldExampleApp.deleteArticle(article[0][/* slug */0], /* () */0).then((function (result) {
              if (result.tag) {
                console.log(result[0]);
              } else {
                ReasonReact.Router[/* push */0]("/#/");
              }
              return Promise.resolve(/* () */0);
            }));
    }
    
  }
  return /* () */0;
}

function redirectToEditorPage(article, _, _$1) {
  if (typeof article === "number" || article.tag !== 1) {
    return /* () */0;
  } else {
    return ReasonReact.Router[/* push */0]("/#/editor/" + article[0][/* slug */0]);
  }
}

function followUser(article, _, param) {
  var send = param[/* send */3];
  if (typeof article === "number" || article.tag !== 1) {
    return /* () */0;
  } else {
    var match = article[0][/* author */9];
    var username = match[/* username */0];
    Curry._1(send, /* UpdateFollowAction */Block.__(2, [/* Loading */1]));
    (
          match[/* following */3] ? API$ReasonReactRealworldExampleApp.unfollowUser(username, /* () */0) : API$ReasonReactRealworldExampleApp.followUser(username, /* () */0)
        ).then((function (result) {
              if (result.tag) {
                console.log("failed to follow user", result[0]);
              } else {
                var match = Json_decode.field("profile", Decoder$ReasonReactRealworldExampleApp.profile, result[0]);
                Curry._1(send, /* ToggleArticleAuthorFollowing */Block.__(0, [match[/* following */3]]));
              }
              Curry._1(send, /* UpdateFollowAction */Block.__(2, [/* NotAsked */0]));
              return Promise.resolve(/* () */0);
            })).catch((function (error) {
            console.log("failed to follow user", error);
            Curry._1(send, /* UpdateFollowAction */Block.__(2, [/* NotAsked */0]));
            return Promise.resolve(/* () */0);
          }));
    return /* () */0;
  }
}

function addComments(slug, submissionCallbacks, state, param) {
  var reset = submissionCallbacks[/* reset */2];
  var notifyOnFailure = submissionCallbacks[/* notifyOnFailure */1];
  var notifyOnSuccess = submissionCallbacks[/* notifyOnSuccess */0];
  var send = param[/* send */3];
  API$ReasonReactRealworldExampleApp.addCommentsToAnArticle(slug, state, /* () */0).then((function (result) {
            if (result.tag) {
              var errors = Json_decode.field("errors", (function (param) {
                      return Json_decode.dict((function (param) {
                                    return Json_decode.array(Json_decode.string, param);
                                  }), param);
                    }), result[0]);
              var fieldErrors = Belt_List.keepMapU(/* :: */[
                    Utils$ReasonReactRealworldExampleApp.getFirstError(/* Body */0, "Comment", Js_primitive.undefined_to_opt(errors["body"])),
                    /* [] */0
                  ], (function (opt) {
                      return opt;
                    }));
              Curry._2(notifyOnFailure, fieldErrors, undefined);
            } else {
              var comment = Json_decode.field("comment", Decoder$ReasonReactRealworldExampleApp.comment, result[0]);
              Curry._1(notifyOnSuccess, undefined);
              Curry._1(reset, /* () */0);
              Curry._1(send, /* PrependNewComment */Block.__(6, [comment]));
            }
            return Promise.resolve(/* () */0);
          })).catch((function (error) {
          console.log("There has been a problem with fetch operation: ", error);
          Curry._2(notifyOnFailure, /* [] */0, "failed to add comment to article");
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function deleteComment(slug, id, _, param) {
  var send = param[/* send */3];
  Curry._1(send, /* AddHidingDeleteIcon */Block.__(5, [id]));
  API$ReasonReactRealworldExampleApp.deleteComment(slug, id, /* () */0).then((function (result) {
            if (result.tag) {
              console.log("failed to delete comment", result[0]);
            } else {
              Curry._1(send, /* RemoveComment */Block.__(4, [id]));
            }
            return Promise.resolve(/* () */0);
          })).catch((function (error) {
          console.log("There has been a problem with fetch operation: ", error);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

var component$3 = ReasonReact.reducerComponent("Details");

function make$3(guid, _) {
  return /* record */[
          /* debugName */component$3[/* debugName */0],
          /* reactClassInternal */component$3[/* reactClassInternal */1],
          /* handedOffState */component$3[/* handedOffState */2],
          /* willReceiveProps */component$3[/* willReceiveProps */3],
          /* didMount */(function (param) {
              var handle = param[/* handle */0];
              Curry._2(handle, loadArticle, guid);
              return Curry._2(handle, loadComments, guid);
            }),
          /* didUpdate */component$3[/* didUpdate */5],
          /* willUnmount */component$3[/* willUnmount */6],
          /* willUpdate */component$3[/* willUpdate */7],
          /* shouldUpdate */component$3[/* shouldUpdate */8],
          /* render */(function (param) {
              var article = param[/* state */1][/* article */2];
              var tmp;
              tmp = typeof article === "number" ? (
                  article === 0 ? Utils$ReasonReactRealworldExampleApp.nullEl : Utils$ReasonReactRealworldExampleApp.strEl("...")
                ) : (
                  article.tag ? Utils$ReasonReactRealworldExampleApp.strEl(article[0][/* title */1]) : Utils$ReasonReactRealworldExampleApp.nullEl
                );
              var tmp$1;
              tmp$1 = typeof article === "number" || !article.tag ? "" : "/#/profile/" + article[0][/* author */9][/* username */0];
              var tmp$2;
              var exit = 0;
              if (typeof article === "number") {
                exit = 1;
              } else {
                tmp$2 = article.tag ? ReasonReact.element(undefined, undefined, Img$ReasonReactRealworldExampleApp.make(Js_primitive.some(article[0][/* author */9][/* image */2]), undefined, undefined, undefined, /* array */[])) : ReasonReact.element(undefined, undefined, Img$ReasonReactRealworldExampleApp.make(undefined, undefined, undefined, undefined, /* array */[]));
              }
              if (exit === 1) {
                tmp$2 = ReasonReact.element(undefined, undefined, Img$ReasonReactRealworldExampleApp.make(undefined, undefined, undefined, undefined, /* array */[]));
              }
              var tmp$3;
              tmp$3 = typeof article === "number" || !article.tag ? "" : "/#/profile/" + article[0][/* author */9][/* username */0];
              var tmp$4;
              tmp$4 = typeof article === "number" || !article.tag ? "" : article[0][/* author */9][/* username */0];
              var tmp$5;
              tmp$5 = typeof article === "number" || !article.tag ? Utils$ReasonReactRealworldExampleApp.nullEl : Utils$ReasonReactRealworldExampleApp.strEl(article[0][/* updatedAt */6].toISOString());
              return React.createElement("div", {
                          className: "article-page"
                        }, React.createElement("div", {
                              className: "banner"
                            }, React.createElement("div", {
                                  className: "container"
                                }, React.createElement("h1", undefined, tmp), React.createElement("div", {
                                      className: "article-meta"
                                    }, React.createElement("a", {
                                          href: tmp$1
                                        }, tmp$2), React.createElement("div", {
                                          className: "info"
                                        }, React.createElement("a", {
                                              className: "author",
                                              href: tmp$3
                                            }, Utils$ReasonReactRealworldExampleApp.strEl(tmp$4)), React.createElement("span", {
                                              className: "date"
                                            }, tmp$5))))));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* followAction : NotAsked */0,
                      /* favoriteAction : NotAsked */0,
                      /* article : NotAsked */0,
                      /* comments : NotAsked */0,
                      /* hidingDeleteIcons : [] */0
                    ];
            }),
          /* retainedProps */component$3[/* retainedProps */11],
          /* reducer */(function (action, state) {
              switch (action.tag | 0) {
                case 0 : 
                    var following = action[0];
                    return /* Update */Block.__(0, [/* record */[
                                /* followAction */state[/* followAction */0],
                                /* favoriteAction */state[/* favoriteAction */1],
                                /* article */RemoteData.map((function (article) {
                                        var author = article[/* author */9];
                                        return /* record */[
                                                /* slug */article[/* slug */0],
                                                /* title */article[/* title */1],
                                                /* description */article[/* description */2],
                                                /* body */article[/* body */3],
                                                /* tagList */article[/* tagList */4],
                                                /* createdAt */article[/* createdAt */5],
                                                /* updatedAt */article[/* updatedAt */6],
                                                /* favorited */article[/* favorited */7],
                                                /* favoritesCount */article[/* favoritesCount */8],
                                                /* author : record */[
                                                  /* username */author[/* username */0],
                                                  /* bio */author[/* bio */1],
                                                  /* image */author[/* image */2],
                                                  /* following */following
                                                ]
                                              ];
                                      }), state[/* article */2]),
                                /* comments */state[/* comments */3],
                                /* hidingDeleteIcons */state[/* hidingDeleteIcons */4]
                              ]]);
                case 1 : 
                    var favorited = action[0];
                    return /* Update */Block.__(0, [/* record */[
                                /* followAction */state[/* followAction */0],
                                /* favoriteAction */state[/* favoriteAction */1],
                                /* article */RemoteData.map((function (article) {
                                        return /* record */[
                                                /* slug */article[/* slug */0],
                                                /* title */article[/* title */1],
                                                /* description */article[/* description */2],
                                                /* body */article[/* body */3],
                                                /* tagList */article[/* tagList */4],
                                                /* createdAt */article[/* createdAt */5],
                                                /* updatedAt */article[/* updatedAt */6],
                                                /* favorited */favorited,
                                                /* favoritesCount */favorited ? article[/* favoritesCount */8] + 1 | 0 : article[/* favoritesCount */8] - 1 | 0,
                                                /* author */article[/* author */9]
                                              ];
                                      }), state[/* article */2]),
                                /* comments */state[/* comments */3],
                                /* hidingDeleteIcons */state[/* hidingDeleteIcons */4]
                              ]]);
                case 2 : 
                    return /* Update */Block.__(0, [/* record */[
                                /* followAction */action[0],
                                /* favoriteAction */state[/* favoriteAction */1],
                                /* article */state[/* article */2],
                                /* comments */state[/* comments */3],
                                /* hidingDeleteIcons */state[/* hidingDeleteIcons */4]
                              ]]);
                case 3 : 
                    return /* Update */Block.__(0, [/* record */[
                                /* followAction */state[/* followAction */0],
                                /* favoriteAction */action[0],
                                /* article */state[/* article */2],
                                /* comments */state[/* comments */3],
                                /* hidingDeleteIcons */state[/* hidingDeleteIcons */4]
                              ]]);
                case 4 : 
                    var id = action[0];
                    var match = state[/* comments */3];
                    var comments;
                    comments = typeof match === "number" || match.tag !== 1 ? state[/* comments */3] : /* Success */Block.__(1, [Belt_List.keep(match[0], (function (x) {
                                  return x[/* id */0] !== id;
                                }))]);
                    return /* Update */Block.__(0, [/* record */[
                                /* followAction */state[/* followAction */0],
                                /* favoriteAction */state[/* favoriteAction */1],
                                /* article */state[/* article */2],
                                /* comments */comments,
                                /* hidingDeleteIcons */state[/* hidingDeleteIcons */4]
                              ]]);
                case 5 : 
                    return /* Update */Block.__(0, [/* record */[
                                /* followAction */state[/* followAction */0],
                                /* favoriteAction */state[/* favoriteAction */1],
                                /* article */state[/* article */2],
                                /* comments */state[/* comments */3],
                                /* hidingDeleteIcons : :: */[
                                  action[0],
                                  state[/* hidingDeleteIcons */4]
                                ]
                              ]]);
                case 6 : 
                    var match$1 = state[/* comments */3];
                    var comments$1;
                    comments$1 = typeof match$1 === "number" || match$1.tag !== 1 ? state[/* comments */3] : /* Success */Block.__(1, [/* :: */[
                            action[0],
                            match$1[0]
                          ]]);
                    return /* Update */Block.__(0, [/* record */[
                                /* followAction */state[/* followAction */0],
                                /* favoriteAction */state[/* favoriteAction */1],
                                /* article */state[/* article */2],
                                /* comments */comments$1,
                                /* hidingDeleteIcons */state[/* hidingDeleteIcons */4]
                              ]]);
                case 7 : 
                    return /* Update */Block.__(0, [/* record */[
                                /* followAction */state[/* followAction */0],
                                /* favoriteAction */state[/* favoriteAction */1],
                                /* article */state[/* article */2],
                                /* comments */action[0],
                                /* hidingDeleteIcons */state[/* hidingDeleteIcons */4]
                              ]]);
                case 8 : 
                    return /* Update */Block.__(0, [/* record */[
                                /* followAction */state[/* followAction */0],
                                /* favoriteAction */state[/* favoriteAction */1],
                                /* article */action[0],
                                /* comments */state[/* comments */3],
                                /* hidingDeleteIcons */state[/* hidingDeleteIcons */4]
                              ]]);
                
              }
            }),
          /* jsElementWrapped */component$3[/* jsElementWrapped */13]
        ];
}

exports.redirectToLoginPage = redirectToLoginPage;
exports.isAuthor = isAuthor;
exports.FavoriteOrDeleteButton = FavoriteOrDeleteButton;
exports.FollowOrEditButton = FollowOrEditButton;
exports.CommentCard = CommentCard;
exports.loadArticle = loadArticle;
exports.loadComments = loadComments;
exports.favoriteArticle = favoriteArticle;
exports.deleteArticle = deleteArticle;
exports.redirectToEditorPage = redirectToEditorPage;
exports.followUser = followUser;
exports.addComments = addComments;
exports.deleteComment = deleteComment;
exports.component = component$3;
exports.make = make$3;
/* component Not a pure module */