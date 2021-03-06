// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Formality__Form = require("re-formality/src/Formality__Form.bs.js");
var Formality__Validation = require("re-formality/src/Formality__Validation.bs.js");
var Formality__PublicHelpers = require("re-formality/src/Formality__PublicHelpers.bs.js");
var API$ReasonReactRealworldExampleApp = require("./API.bs.js");
var Regex$ReasonReactRealworldExampleApp = require("./Regex.bs.js");
var Utils$ReasonReactRealworldExampleApp = require("./Utils.bs.js");
var Errors$ReasonReactRealworldExampleApp = require("./Errors.bs.js");

function get(field, state) {
  switch (field) {
    case 0 : 
        return state[/* image */0];
    case 1 : 
        return state[/* username */1];
    case 2 : 
        return state[/* password */2];
    case 3 : 
        return state[/* email */3];
    case 4 : 
        return state[/* bio */4];
    
  }
}

function update(param, state) {
  var value = param[1];
  switch (param[0]) {
    case 0 : 
        return /* record */[
                /* image */value,
                /* username */state[/* username */1],
                /* password */state[/* password */2],
                /* email */state[/* email */3],
                /* bio */state[/* bio */4]
              ];
    case 1 : 
        return /* record */[
                /* image */state[/* image */0],
                /* username */value,
                /* password */state[/* password */2],
                /* email */state[/* email */3],
                /* bio */state[/* bio */4]
              ];
    case 2 : 
        return /* record */[
                /* image */state[/* image */0],
                /* username */state[/* username */1],
                /* password */value,
                /* email */state[/* email */3],
                /* bio */state[/* bio */4]
              ];
    case 3 : 
        return /* record */[
                /* image */state[/* image */0],
                /* username */state[/* username */1],
                /* password */state[/* password */2],
                /* email */value,
                /* bio */state[/* bio */4]
              ];
    case 4 : 
        return /* record */[
                /* image */state[/* image */0],
                /* username */state[/* username */1],
                /* password */state[/* password */2],
                /* email */state[/* email */3],
                /* bio */value
              ];
    
  }
}

function valueEmpty(value) {
  return value === "";
}

var Validators = Formality__Validation.MakeValidators(/* module */[]);

var validators = Curry._3(Validators[/* add */3], /* Bio */4, /* record */[
      /* strategy : OnFirstSuccessOrFirstBlur */3,
      /* dependents */undefined,
      /* validate */(function (_, _$1) {
          return /* Valid */0;
        })
    ], Curry._3(Validators[/* add */3], /* Email */3, /* record */[
          /* strategy : OnFirstSuccessOrFirstBlur */3,
          /* dependents */undefined,
          /* validate */(function (value, _) {
              if (value === "") {
                return /* Invalid */["Email is empty"];
              } else if (Regex$ReasonReactRealworldExampleApp.validEmail.test(value)) {
                return /* Valid */0;
              } else {
                return /* Invalid */["Email is invalid"];
              }
            })
        ], Curry._3(Validators[/* add */3], /* Password */2, /* record */[
              /* strategy : OnFirstSuccessOrFirstBlur */3,
              /* dependents */undefined,
              /* validate */(function (value, _) {
                  if (value === "") {
                    return /* Invalid */["Password is empty"];
                  } else if (value.length > 0 && value.length < 8) {
                    return /* Invalid */["Password is too short (minimum is " + (String(8) + "+ characters)")];
                  } else {
                    return /* Valid */0;
                  }
                })
            ], Curry._3(Validators[/* add */3], /* Username */1, /* record */[
                  /* strategy : OnFirstSuccessOrFirstBlur */3,
                  /* dependents */undefined,
                  /* validate */(function (value, _) {
                      if (value === "") {
                        return /* Invalid */["Username is empty"];
                      } else {
                        return /* Valid */0;
                      }
                    })
                ], Curry._3(Validators[/* add */3], /* Image */0, /* record */[
                      /* strategy : OnFirstSuccessOrFirstBlur */3,
                      /* dependents */undefined,
                      /* validate */(function (value, _) {
                          if (value !== "" && !value.startsWith("http")) {
                            return /* Invalid */["Image URL didn't starts with 'http'"];
                          } else {
                            return /* Valid */0;
                          }
                        })
                    ], Validators[/* empty */0])))));

var Form = /* module */[
  /* get */get,
  /* update */update,
  /* valueEmpty */valueEmpty,
  /* strategy : OnFirstSuccessOrFirstBlur */3,
  /* Validators */Validators,
  /* validators */validators
];

var FormContainer = Formality__Form.Make([
      get,
      update,
      valueEmpty,
      validators,
      [
        Validators[21],
        Validators[10]
      ]
    ]);

var component = ReasonReact.statelessComponent("Placeholder");

function make($staropt$star, _) {
  var message = $staropt$star !== undefined ? $staropt$star : "Loading...";
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
              return React.createElement("div", {
                          className: "settings-page"
                        }, React.createElement("div", {
                              className: "container page"
                            }, React.createElement("div", {
                                  className: "row"
                                }, React.createElement("div", {
                                      className: "col-md-6 offset-md-3 col-xs-12"
                                    }, Utils$ReasonReactRealworldExampleApp.strEl(message)))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var Placeholder = /* module */[
  /* component */component,
  /* make */make
];

var component$1 = ReasonReact.statelessComponent("Settings");

function make$1(onLogoutClick, user, _) {
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
              return ReasonReact.element(undefined, undefined, Curry._3(FormContainer[/* make */8], /* record */[
                              /* image */Belt_Option.getWithDefault(user[/* image */2], ""),
                              /* username */user[/* username */4],
                              /* password */"",
                              /* email */user[/* email */1],
                              /* bio */Belt_Option.getWithDefault(user[/* bio */0], "")
                            ], (function (state, param) {
                                var username = state[/* username */1];
                                var reset = param[/* reset */2];
                                var notifyOnFailure = param[/* notifyOnFailure */1];
                                var notifyOnSuccess = param[/* notifyOnSuccess */0];
                                API$ReasonReactRealworldExampleApp.updateUser(state[/* email */3], username, state[/* password */2], state[/* image */0], state[/* bio */4], /* () */0).then((function (result) {
                                          if (result.tag) {
                                            var errors = Json_decode.field("errors", (function (param) {
                                                    return Json_decode.dict((function (param) {
                                                                  return Json_decode.array(Json_decode.string, param);
                                                                }), param);
                                                  }), result[0]);
                                            var fieldErrors = Belt_List.keepMapU(/* :: */[
                                                  Utils$ReasonReactRealworldExampleApp.getFirstError(/* Email */3, "Email", Js_primitive.undefined_to_opt(errors["email"])),
                                                  /* :: */[
                                                    Utils$ReasonReactRealworldExampleApp.getFirstError(/* Username */1, "Username", Js_primitive.undefined_to_opt(errors["username"])),
                                                    /* :: */[
                                                      Utils$ReasonReactRealworldExampleApp.getFirstError(/* Password */2, "Password", Js_primitive.undefined_to_opt(errors["password"])),
                                                      /* :: */[
                                                        Utils$ReasonReactRealworldExampleApp.getFirstError(/* Image */0, "Image", Js_primitive.undefined_to_opt(errors["image"])),
                                                        /* :: */[
                                                          Utils$ReasonReactRealworldExampleApp.getFirstError(/* Bio */4, "Bio", Js_primitive.undefined_to_opt(errors["bio"])),
                                                          /* [] */0
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ], (function (opt) {
                                                    return opt;
                                                  }));
                                            Curry._2(notifyOnFailure, fieldErrors, undefined);
                                          } else {
                                            Curry._1(notifyOnSuccess, undefined);
                                            Curry._1(reset, /* () */0);
                                            ReasonReact.Router[/* push */0]("/#/profile/" + username);
                                          }
                                          return Promise.resolve(/* () */0);
                                        })).catch((function (error) {
                                        console.log("There has been a problem with fetch operation: ", error);
                                        Curry._2(notifyOnFailure, /* [] */0, "failed to update account settings");
                                        return Promise.resolve(/* () */0);
                                      }));
                                return /* () */0;
                              }), (function (form) {
                                var match = form[/* status */1];
                                var errors;
                                if (typeof match === "number") {
                                  errors = match !== 0 ? undefined : Utils$ReasonReactRealworldExampleApp.getSomeErrors(form[/* results */2], /* :: */[
                                          /* Image */0,
                                          /* :: */[
                                            /* Username */1,
                                            /* :: */[
                                              /* Password */2,
                                              /* :: */[
                                                /* Email */3,
                                                /* :: */[
                                                  /* Bio */4,
                                                  /* [] */0
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]);
                                } else {
                                  var match$1 = match[1];
                                  var fieldErrors = match[0];
                                  errors = match$1 !== undefined ? Belt_List.concat(Belt_List.mapU(fieldErrors, (function (param) {
                                                return param[1];
                                              })), /* :: */[
                                          match$1,
                                          /* [] */0
                                        ]) : Belt_List.mapU(fieldErrors, (function (param) {
                                            return param[1];
                                          }));
                                }
                                var partial_arg = form[/* submit */6];
                                var partial_arg$1 = Formality__PublicHelpers.Dom[/* preventDefault */4];
                                return React.createElement("div", {
                                            className: "settings-page"
                                          }, React.createElement("div", {
                                                className: "container page"
                                              }, React.createElement("div", {
                                                    className: "row"
                                                  }, React.createElement("div", {
                                                        className: "col-md-6 offset-md-3 col-xs-12"
                                                      }, React.createElement("h1", {
                                                            className: "text-xs-center"
                                                          }, Utils$ReasonReactRealworldExampleApp.strEl("Your Settings")), ReasonReact.element(undefined, undefined, Errors$ReasonReactRealworldExampleApp.make(errors, /* array */[])), React.createElement("form", {
                                                            onSubmit: (function (param) {
                                                                return partial_arg$1(partial_arg, param);
                                                              })
                                                          }, React.createElement("fieldset", undefined, React.createElement("fieldset", {
                                                                    className: "form-group"
                                                                  }, React.createElement("input", {
                                                                        className: "form-control",
                                                                        disabled: form[/* submitting */3],
                                                                        placeholder: "URL of profile picture",
                                                                        type: "text",
                                                                        value: form[/* state */0][/* image */0],
                                                                        onBlur: (function ($$event) {
                                                                            return Curry._2(form[/* change */4], /* Image */0, Formality__PublicHelpers.Dom[/* toValueOnBlur */1]($$event));
                                                                          }),
                                                                        onChange: (function ($$event) {
                                                                            return Curry._2(form[/* change */4], /* Image */0, Formality__PublicHelpers.Dom[/* toValueOnChange */0]($$event));
                                                                          })
                                                                      })), React.createElement("fieldset", {
                                                                    className: "form-group"
                                                                  }, React.createElement("input", {
                                                                        className: "form-control form-control-lg",
                                                                        disabled: form[/* submitting */3],
                                                                        placeholder: "Your Name",
                                                                        type: "text",
                                                                        value: form[/* state */0][/* username */1],
                                                                        onBlur: (function ($$event) {
                                                                            return Curry._2(form[/* change */4], /* Username */1, Formality__PublicHelpers.Dom[/* toValueOnBlur */1]($$event));
                                                                          }),
                                                                        onChange: (function ($$event) {
                                                                            return Curry._2(form[/* change */4], /* Username */1, Formality__PublicHelpers.Dom[/* toValueOnChange */0]($$event));
                                                                          })
                                                                      })), React.createElement("fieldset", {
                                                                    className: "form-group"
                                                                  }, React.createElement("textarea", {
                                                                        className: "form-control form-control-lg",
                                                                        disabled: form[/* submitting */3],
                                                                        placeholder: "Short bio about you",
                                                                        rows: 8,
                                                                        value: form[/* state */0][/* bio */4],
                                                                        onBlur: (function ($$event) {
                                                                            return Curry._2(form[/* change */4], /* Bio */4, Formality__PublicHelpers.Dom[/* toValueOnBlur */1]($$event));
                                                                          }),
                                                                        onChange: (function ($$event) {
                                                                            return Curry._2(form[/* change */4], /* Bio */4, Formality__PublicHelpers.Dom[/* toValueOnChange */0]($$event));
                                                                          })
                                                                      })), React.createElement("fieldset", {
                                                                    className: "form-group"
                                                                  }, React.createElement("input", {
                                                                        className: "form-control form-control-lg",
                                                                        disabled: form[/* submitting */3],
                                                                        placeholder: "Email",
                                                                        type: "text",
                                                                        value: form[/* state */0][/* email */3],
                                                                        onBlur: (function ($$event) {
                                                                            return Curry._2(form[/* change */4], /* Email */3, Formality__PublicHelpers.Dom[/* toValueOnBlur */1]($$event));
                                                                          }),
                                                                        onChange: (function ($$event) {
                                                                            return Curry._2(form[/* change */4], /* Email */3, Formality__PublicHelpers.Dom[/* toValueOnChange */0]($$event));
                                                                          })
                                                                      })), React.createElement("fieldset", {
                                                                    className: "form-group"
                                                                  }, React.createElement("input", {
                                                                        className: "form-control form-control-lg",
                                                                        disabled: form[/* submitting */3],
                                                                        placeholder: "Password",
                                                                        type: "password",
                                                                        value: form[/* state */0][/* password */2],
                                                                        onBlur: (function ($$event) {
                                                                            return Curry._2(form[/* change */4], /* Password */2, Formality__PublicHelpers.Dom[/* toValueOnBlur */1]($$event));
                                                                          }),
                                                                        onChange: (function ($$event) {
                                                                            return Curry._2(form[/* change */4], /* Password */2, Formality__PublicHelpers.Dom[/* toValueOnChange */0]($$event));
                                                                          })
                                                                      })), React.createElement("button", {
                                                                    className: "btn btn-lg btn-primary pull-xs-right"
                                                                  }, Utils$ReasonReactRealworldExampleApp.strEl("Update Settings")))), React.createElement("hr", undefined), React.createElement("button", {
                                                            className: "btn btn-outline-danger",
                                                            onClick: onLogoutClick
                                                          }, Utils$ReasonReactRealworldExampleApp.strEl("Or click here to logout."))))));
                              })));
            }),
          /* initialState */component$1[/* initialState */10],
          /* retainedProps */component$1[/* retainedProps */11],
          /* reducer */component$1[/* reducer */12],
          /* jsElementWrapped */component$1[/* jsElementWrapped */13]
        ];
}

exports.Form = Form;
exports.FormContainer = FormContainer;
exports.Placeholder = Placeholder;
exports.component = component$1;
exports.make = make$1;
/* Validators Not a pure module */
