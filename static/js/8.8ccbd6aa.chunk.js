(this["webpackJsonpjunior-react"]=this["webpackJsonpjunior-react"]||[]).push([[8],{309:function(e,t,a){},316:function(e,t,a){},735:function(e,t,a){"use strict";a.r(t);var n=a(304),l=a(0),r=a.n(l),c=(a(309),a(733)),i=a(725),u=a(741),s=a(742),m=(a(310),a(737)),o=function(){var e=Object(m.a)(),t=e.t,a=e.i18n,o=Object(l.useState)(localStorage.getItem("i18nextLng")),b=Object(n.a)(o,2),E=b[0],h=b[1];function p(e){h(e),a.changeLanguage(e)}function d(e){return E===e?"text-white my-n1 py-0 text-danger":"text-white my-n1 py-0"}return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(s.a,{span:24,className:"bg-dark text-white ",style:{textAlign:"center"}},r.a.createElement(u.a,null,r.a.createElement(s.a,{span:23},r.a.createElement("h3",{className:" mt-2 text-white"}," ",t("head_page")," ")),r.a.createElement(s.a,{span:1},r.a.createElement(i.a,{disableRipple:!0,orientation:"vertical",size:"small",variant:"text"},r.a.createElement(c.a,{className:d("en"),disableRipple:!0,onClick:function(){return p("en")}},"en"),r.a.createElement(c.a,{className:d("ru"),disableRipple:!0,onClick:function(){return p("ru")}},"ru"),r.a.createElement(c.a,{className:d("uz"),disableRipple:!0,onClick:function(){return p("uz")}},"uz")))))))},b=a(316),E=a.n(b),h=a(44),p=a(2),d=a(250),g=a(27),f=a(14),y=Object(p.g)(Object(g.b)((function(e){return{isAuth:e.Auth.isAuth}}),{signOutThunk:f.e})((function(e){var t=Object(m.a)().t,a=[{name:t("home"),page:"/home"},{name:t("anketa"),page:"/anketa"}];return r.a.createElement("div",{className:"bg-secondary text-white col-2 p-0"},r.a.createElement("div",{id:"sidebar",className:" bg-secondary text-white"},r.a.createElement("ul",{className:"list-group"},a.map((function(e,t){return r.a.createElement("li",{className:"list-group-item bg-secondary",key:t},r.a.createElement(h.b,{to:e.page,className:E.a.active},e.name))})),r.a.createElement("li",{className:"list-group-item bg-secondary"},r.a.createElement(d.Button,{type:"text",className:"text-danger",onClick:function(){e.signOutThunk(),e.isAuth||e.history.push("/login")}},t("logOut"))))))}))),N=(a(561),Object(l.lazy)((function(){return Promise.all([a.e(3),a.e(12)]).then(a.bind(null,738))}))),O=Object(l.lazy)((function(){return a.e(10).then(a.bind(null,727))})),j=Object(l.lazy)((function(){return a.e(13).then(a.t.bind(null,728,7))})),x=Object(l.lazy)((function(){return a.e(9).then(a.bind(null,729))}));t.default=function(e){var t=Object(l.useState)({}),a=Object(n.a)(t,2),c=a[0],i=a[1];return r.a.createElement(h.a,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(y,{name:"asosiy"}),r.a.createElement("div",{className:"col-10"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/"},r.a.createElement(p.a,{to:"/home"})),r.a.createElement(p.b,{exact:!0,path:"/home",render:function(){return r.a.createElement(N,{changeClient:i})}}),r.a.createElement(p.b,{path:"/anketa/:userId?",render:function(){return r.a.createElement(O,{client:c})}}),r.a.createElement(p.b,{path:"/tgbot",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(p.b,{render:function(){return r.a.createElement(x,null)}}))))))}}}]);
//# sourceMappingURL=8.8ccbd6aa.chunk.js.map