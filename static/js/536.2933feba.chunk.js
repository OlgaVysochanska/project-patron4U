"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[536],{7066:function(e,t,a){var n=a(1413),r=(a(2791),a(184));t.Z=function(e){return(0,r.jsx)("svg",(0,n.Z)((0,n.Z)({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,r.jsx)("path",{d:"M4 12h16M4 12l6-6m-6 6l6 6",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})}))}},5536:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(2904),r=a(3433),i=a(5861),s=a(9439),c=a(4687),o=a.n(c),l=a(2791),u=a(4471),_=a(1702),h=a(175),d=a(1704),m=JSON.parse('{"y":{"eng":"Read more","ua":"\u0427\u0438\u0442\u0430\u0442\u0438 \u0434\u0430\u043b\u0456"}}'),g="NewsPageListItem_listItem__xICLg",f="NewsPageListItem_container__0qKme",p="NewsPageListItem_containerDark__7VIrJ",x="NewsPageListItem_image__tJ3wk",v="NewsPageListItem_contentWrapper__0L-56",w="NewsPageListItem_title__pF2gb",Z="NewsPageListItem_titleDark__wWVvC",j="NewsPageListItem_text__ixrS1",S="NewsPageListItem_textDark__4aGGA",k="NewsPageListItem_wrapper__4kYuV",N="NewsPageListItem_date__6wqL+",b="NewsPageListItem_dateDark__N2b96",P="NewsPageListItem_link__jvrXX",L=a(184),C=function(e){var t=e.imgUrl,a=e.title,n=e.text,r=e.formattedDate,i=e.url,s=(0,h.Z)().lang,c=(0,d.Z)().theme,o=m.y[s],l="light"===c?f:"".concat(f," + ").concat(p),u="light"===c?w:"".concat(w," + ").concat(Z),_="light"===c?j:"".concat(j," + ").concat(S),C="light"===c?N:"".concat(N," + ").concat(b);return(0,L.jsx)("li",{className:g,children:(0,L.jsxs)("div",{className:l,children:[(0,L.jsx)("img",{className:x,src:t,alt:""}),(0,L.jsxs)("div",{className:v,children:[(0,L.jsx)("p",{className:u,children:a}),(0,L.jsx)("p",{className:_,children:n})]}),(0,L.jsxs)("div",{className:k,children:[(0,L.jsx)("p",{className:C,children:r}),(0,L.jsx)("a",{target:"blank",className:P,href:i,children:o})]})]})})},I="NewsPageList_list__zpKW1",y=a(9551),D=function(e){var t=e.items,a=e.loading;return(0,L.jsx)(L.Fragment,{children:a?(0,L.jsx)(y.Z,{}):(0,L.jsx)("ul",{className:I,children:t.map((function(e){var t=e.imgUrl,a=e.title,n=e.text,r=e.date,i=e.url,s=e._id,c=new Date(r).toLocaleDateString("en-GB");return(0,L.jsx)(C,{imgUrl:t,title:a,text:n,formattedDate:c,url:i},s)}))})})},B=a(3229),T=a(1095),z=function(){var e=(0,i.Z)(o().mark((function e(t){var a,n,r,i=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,T.Z.get("/news/search?search=".concat(t,"&page=").concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=(0,i.Z)(o().mark((function e(){var t,a,n,r=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,T.Z.get("/news",{params:{page:t}});case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,l.useState)(""),t=(0,s.Z)(e,2),a=t[0],n=t[1],c=(0,l.useState)([]),h=(0,s.Z)(c,2),d=h[0],m=h[1],g=(0,l.useState)(!1),f=(0,s.Z)(g,2),p=f[0],x=f[1],v=(0,l.useState)(1),w=(0,s.Z)(v,2),Z=w[0],j=w[1],S=(0,l.useState)(1),k=(0,s.Z)(S,2),N=k[0],b=k[1],P=(0,l.useState)(!1),C=(0,s.Z)(P,2),I=C[0],T=C[1],G=(0,l.useCallback)((0,i.Z)(o().mark((function e(){var t,n,i,s,c,l,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,x(!0),t=[],a){e.next=13;break}return e.next=6,M(Z);case 6:n=e.sent,i=n.data,s=n.totalPages,t=i,b(s),e.next=20;break;case 13:return e.next=15,z(a,Z);case 15:c=e.sent,l=c.data,u=c.totalPages,t=l,b(u);case 20:m(I?function(e){var a=[].concat((0,r.Z)(e),(0,r.Z)(t));return Array.from(new Set(a.map((function(e){return e.id})))).map((function(e){return a.find((function(t){return t.id===e}))}))}:t),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.log(e.t0.message);case 26:return e.prev=26,x(!1),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[0,23,26,29]])}))),[a,Z,I]);(0,l.useEffect)((function(){G()}),[a,G]),(0,l.useEffect)((function(){var e=function(){T(window.innerWidth<=768),j(1)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var R=(0,l.useCallback)((function(e){var t=e.search;n(t),j(1),m([])}),[]),V=(0,l.useCallback)((function(){j((function(e){return e+1}))}),[]);return I?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(u.Z,{onSubmit:R}),(0,L.jsx)(D,{items:d}),!p&&(0,L.jsx)(B.Z,{onClick:V,loading:p})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(u.Z,{onSubmit:R}),p?(0,L.jsx)(y.Z,{}):(0,L.jsx)(D,{items:d,loading:p}),!p&&(0,L.jsx)(_.Z,{totalPages:N,onPageChange:function(e){j(e)},page:Z})]})},R=JSON.parse('{"T":{"eng":"News","ua":"\u041d\u043e\u0432\u0438\u043d\u0438"}}'),V="NewsPage_container__O-sSa",E=function(){var e=(0,h.Z)().lang,t=R.T[e];return(0,L.jsxs)("div",{className:V,children:[(0,L.jsx)(n.Z,{children:t}),(0,L.jsx)(G,{})]})}},2329:function(e,t,a){var n=a(1413),r=a(184);t.Z=function(e){var t=e.onClick,a=e.label,i=e.className,s=e.type,c=e.SVGComponent,o=e.showLabelFirst,l=void 0===o||o,u=e.buttonStyle,_=e.disabled,h=void 0!==_&&_,d=(0,n.Z)({},u);return(0,r.jsxs)("button",{onClick:t,className:i,type:s,style:d,disabled:h,children:[l&&a,c&&(0,r.jsx)(c,{}),!l&&a,e.children]})}},4302:function(e,t,a){a.d(t,{Z:function(){return n.Z}});var n=a(2329)},3229:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(2791),r=a(4302),i="LoadMore_loadMore__ygAde",s=a(184),c=function(e){var t=e.onClick,a=e.loading,c=(0,n.useCallback)((function(){"function"===typeof t&&t()}),[t]);return(0,s.jsx)(r.Z,{onClick:c,type:"button",className:i,label:"Load More",disabled:a})}},1702:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(9439),r=a(2791),i={listItem:"Pagination_listItem__R5JVt",listItemDark:"Pagination_listItemDark__lI+uI",active:"Pagination_active__zPSlx",container:"Pagination_container__SBpXG",containerDark:"Pagination_containerDark__VK4Jm",pagination:"Pagination_pagination__CKAsM",arrowLeft:"Pagination_arrowLeft__aSD0b",arrowRight:"Pagination_arrowRight__+jSQG",arrowRight__disabled:"Pagination_arrowRight__disabled__aOoOp",arrowLeft__disabled:"Pagination_arrowLeft__disabled__gtGPE"},s=a(7066),c=a(1704),o=a(184),l=function(e){var t=e.totalPages,a=e.onPageChange,l=e.page,u=(0,r.useState)([]),_=(0,n.Z)(u,2),h=_[0],d=_[1],m=(0,c.Z)().theme,g=(0,r.useCallback)((function(e){var a=Array.from({length:t},(function(e,t){return t+1})),n=Math.max(e-2,1),r=Math.min(n+4,t);d(a.slice(n-1,r))}),[t]);(0,r.useEffect)((function(){g(l)}),[l,g]);var f="light"===m?i.container:"".concat(i.container," + ").concat(i.containerDark);return(0,o.jsx)("div",{className:f,children:(0,o.jsxs)("ul",{className:i.pagination,children:[(0,o.jsx)("li",{onClick:function(){if(l>1){var e=l-1;a(e),g(e)}},className:"".concat(i.listItem," ").concat(1===l?i.disabled:""," "),children:(0,o.jsx)("span",{className:1===l?"".concat(i.arrowLeft," ").concat(i.arrowLeft__disabled):i.arrowLeft,children:(0,o.jsx)(s.Z,{})})}),h.map((function(e){return(0,o.jsx)("li",{className:"".concat(i.listItem," ").concat(l===e?i.active:""),onClick:function(){return function(e){a(e),g(e)}(e)},children:e},e)})),(0,o.jsx)("li",{onClick:function(){if(l<t){var e=l+1;a(e),g(e)}},className:"".concat(i.listItem," ").concat(l===t?i.disabled:""),children:(0,o.jsx)("span",{className:l===t?"".concat(i.arrowRight," ").concat(i.arrowRight__disabled):i.arrowRight,children:(0,o.jsx)(s.Z,{})})})]})})}},4471:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(2329),r=a(1413),i=(a(2791),a(184));var s=function(e){return(0,i.jsx)("svg",(0,r.Z)((0,r.Z)({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,i.jsx)("path",{d:"M19.47 20.53a.75.75 0 101.06-1.06l-1.06 1.06zM17.25 10.5a6.75 6.75 0 01-6.75 6.75v1.5a8.25 8.25 0 008.25-8.25h-1.5zm-6.75 6.75a6.75 6.75 0 01-6.75-6.75h-1.5a8.25 8.25 0 008.25 8.25v-1.5zM3.75 10.5a6.75 6.75 0 016.75-6.75v-1.5a8.25 8.25 0 00-8.25 8.25h1.5zm6.75-6.75a6.75 6.75 0 016.75 6.75h1.5a8.25 8.25 0 00-8.25-8.25v1.5zm10.03 15.72l-4.187-4.188-1.06 1.06 4.187 4.188 1.06-1.06z"})}))},c=a(910),o=a(158),l={search:""},u=a(175),_=a(1704),h=JSON.parse('{"T":{"eng":"Search","ua":"\u041f\u043e\u0448\u0443\u043a"}}'),d="SearchBar_searchForm__xPw5s",m="SearchBar_container__EpSSz",g="SearchBar_searchInput__155Nk",f="SearchBar_disabled__-kywJ",p="SearchBar_active__CeksW",x="SearchBar_crossBtn__Bxm+v",v="SearchBar_searchInputDark__2ysBg",w=function(e){var t=e.onSubmit,a=(0,o.Z)({initialState:l,onSubmit:t}),r=a.state,w=a.setState,Z=a.handleChange,j=a.handleSubmitSearch,S=(0,_.Z)().theme,k=(0,u.Z)().lang,N=h.T[k],b=r.search,P=b?p:f,L="light"===S?g:"".concat(g," + ").concat(v);return(0,i.jsx)("form",{className:d,onSubmit:j,children:(0,i.jsxs)("div",{className:m,children:[(0,i.jsx)("label",{children:(0,i.jsx)("input",{className:L,type:"text",name:"search",value:b,onChange:Z,placeholder:N,required:!0})}),(0,i.jsx)(n.Z,{type:"submit",className:P,SVGComponent:s}),b&&(0,i.jsx)(n.Z,{type:"button",className:x,SVGComponent:c.Z,onClick:function(){w({search:""})}})]})})}},2904:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(1704),r="Title_mainPageTitle__gclES",i="Title_mainPageTitleDark__pbxZg",s="Title_pageTitle__SVAUC",c="Title_pageTitleDark__ye5pn",o=a(184);function l(e){var t=e.main,a=e.children,l=(0,n.Z)().theme,u="light"===l?r:"".concat(r," + ").concat(i),_="light"===l?s:"".concat(s," + ").concat(c);return(0,o.jsxs)(o.Fragment,{children:[t&&(0,o.jsx)("h1",{className:u,children:a}),!t&&(0,o.jsx)("h2",{className:_,children:a})]})}},158:function(e,t,a){var n=a(4942),r=a(1413),i=a(9439),s=a(2791);t.Z=function(e){var t=e.initialState,a=e.onSubmit,c=(0,s.useState)((0,r.Z)({},t)),o=(0,i.Z)(c,2),l=o[0],u=o[1],_=(0,s.useCallback)((function(e){var t=e.target,a=t.name,i=t.value;u((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,n.Z)({},a,i))}))}),[u]);return{state:l,setState:u,handleChange:_,handleSubmit:function(e){e.preventDefault(),a((0,r.Z)({},l)),u((0,r.Z)({},t))},handleSubmitSearch:function(e){e.preventDefault(),a((0,r.Z)({},l))}}}}}]);
//# sourceMappingURL=536.2933feba.chunk.js.map