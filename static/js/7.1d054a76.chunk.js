(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{225:function(e,t,n){e.exports={formControl:"FormControllers_formControl__27bVB",error:"FormControllers_error__3ZDvI",formSummaryError:"FormControllers_formSummaryError__2bRMd"}},226:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},227:function(e,t,n){"use strict";n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}));var r=n(229),a=n(0),o=n.n(a),u=n(225),c=n.n(u),l=n(107),i=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return o.a.createElement("div",{className:c.a.formControl+" "+(u?c.a.error:"")},o.a.createElement("div",null,a),u&&o.a.createElement("span",null," ",r," "))},m=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(i,e,o.a.createElement("textarea",Object.assign({},n,t))," ")},s=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(i,e,o.a.createElement("input",Object.assign({},n,t))," ")},f=function(e,t,n,r,a,u){return o.a.createElement("div",null,o.a.createElement(l.a,Object.assign({placeholder:e,component:t,name:n,validate:r},a))," ",u)}},297:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(108),u=n(227),c=n(226),l=n(22),i=n(25),m=n(6),s=n(225),f=n.n(s),b=Object(o.a)({form:"Login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(u.a)("Email",u.b,"email",[c.b],null),Object(u.a)("Password",u.b,"password",[c.b],{type:"password"}),Object(u.a)(null,u.b,"rememberMe",null,{type:"checkbox"},"remember Me"),a.a.createElement("div",null,n&&a.a.createElement("div",{className:f.a.formSummaryError}," ",n," ")),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}));t.default=Object(l.b)((function(e){return{isAuth:e.auth.isAuth}}),{LoginThunk:i.b,LogOutThunk:i.a})((function(e){return e.isAuth?a.a.createElement(m.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null," Login "),a.a.createElement(b,{onSubmit:function(t){e.LoginThunk(t)}}))}))}}]);
//# sourceMappingURL=7.1d054a76.chunk.js.map