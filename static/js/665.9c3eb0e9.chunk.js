"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[665],{9551:function(e,t,a){a.d(t,{Z:function(){return i}});var n="spiner_paw__AkiFZ";a(2791);var r=a.p+"static/media/spiner_paw.08d378cbd5f336ed2ad73270367aeb4b.svg",s=a(184),i=function(){return(0,s.jsx)("div",{className:n,children:(0,s.jsx)("img",{src:r,alt:"Your paw"})})}},1665:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var n=a(2904),r=a(5861),s=a(9439),i=a(4687),c=a.n(i),l=a(6434),o=a(2791),u={listItem:"Pagination_listItem__R5JVt",active:"Pagination_active__zPSlx",container:"Pagination_container__SBpXG",pagination:"Pagination_pagination__CKAsM",arrowLeft:"Pagination_arrowLeft__aSD0b",arrowRight:"Pagination_arrowRight__+jSQG",arrowRight__disabled:"Pagination_arrowRight__disabled__aOoOp",arrowLeft__disabled:"Pagination_arrowLeft__disabled__gtGPE"},h=a(1413),_=a(184);var d=function(e){return(0,_.jsx)("svg",(0,h.Z)((0,h.Z)({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,_.jsx)("path",{d:"M4 12h16M4 12l6-6m-6 6l6 6",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})}))},m=function(e){var t=e.totalPages,a=e.onPageChange,n=e.page,r=(0,o.useState)([]),i=(0,s.Z)(r,2),c=i[0],l=i[1],h=(0,o.useCallback)((function(e){var a=Array.from({length:t},(function(e,t){return t+1})),n=Math.max(e-2,1),r=Math.min(n+4,t);l(a.slice(n-1,r))}),[t]);(0,o.useEffect)((function(){h(n)}),[n,h]);return(0,_.jsx)("div",{className:u.container,children:(0,_.jsxs)("ul",{className:u.pagination,children:[(0,_.jsx)("li",{onClick:function(){if(n>1){var e=n-1;a(e),h(e)}},className:"".concat(u.listItem," ").concat(1===n?u.disabled:""),children:(0,_.jsx)("span",{className:1===n?"".concat(u.arrowLeft," ").concat(u.arrowLeft__disabled):u.arrowLeft,children:(0,_.jsx)(d,{})})}),c.map((function(e){return(0,_.jsx)("li",{className:"".concat(u.listItem," ").concat(n===e?u.active:""),onClick:function(){return function(e){a(e),h(e)}(e)},children:e},e)})),(0,_.jsx)("li",{onClick:function(){if(n<t){var e=n+1;a(e),h(e)}},className:"".concat(u.listItem," ").concat(n===t?u.disabled:""),children:(0,_.jsx)("span",{className:n===t?"".concat(u.arrowRight," ").concat(u.arrowRight__disabled):u.arrowRight,children:(0,_.jsx)(d,{})})})]})})},g=a(9551),f="NewsPageListItem_listItem__xICLg",p="NewsPageListItem_container__0qKme",x="NewsPageListItem_image__tJ3wk",v="NewsPageListItem_contentWrapper__0L-56",w="NewsPageListItem_title__pF2gb",j="NewsPageListItem_text__ixrS1",N="NewsPageListItem_wrapper__4kYuV",S="NewsPageListItem_date__6wqL+",b="NewsPageListItem_link__jvrXX",Z=function(e){var t=e.imgUrl,a=e.title,n=e.text,r=e.formattedDate,s=e.url;return(0,_.jsx)("li",{className:f,children:(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("img",{className:x,src:t,alt:""}),(0,_.jsxs)("div",{className:v,children:[(0,_.jsx)("p",{className:w,children:a}),(0,_.jsx)("p",{className:j,children:n})]}),(0,_.jsxs)("div",{className:N,children:[(0,_.jsx)("p",{className:S,children:r}),(0,_.jsx)("a",{target:"blank",className:b,href:s,children:"Read more"})]})]})})},k="NewsPageList_list__zpKW1",P=function(e){var t=e.items,a=e.loading;return(0,_.jsx)(_.Fragment,{children:a?(0,_.jsx)(g.Z,{}):(0,_.jsx)("ul",{className:k,children:t.map((function(e){var t=e.imgUrl,a=e.title,n=e.text,r=e.date,s=e.url,i=e._id,c=new Date(r).toLocaleDateString("en-GB");return(0,_.jsx)(Z,{imgUrl:t,title:a,text:n,formattedDate:c,url:s},i)}))})})},L=a(1095),C=function(){var e=(0,r.Z)(c().mark((function e(t){var a,n,r,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,L.Z.get("/news/search?search=".concat(t,"&page=").concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=(0,r.Z)(c().mark((function e(){var t,a,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,L.Z.get("/news",{params:{page:t}});case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=a(1087),B=function(){var e=(0,y.lr)(),t=(0,s.Z)(e,2),a=t[0],n=t[1],i=(0,o.useState)(""),u=(0,s.Z)(i,2),h=u[0],d=u[1],g=(0,o.useState)([]),f=(0,s.Z)(g,2),p=f[0],x=f[1],v=(0,o.useState)(!1),w=(0,s.Z)(v,2),j=w[0],N=w[1],S=(0,o.useState)(null),b=(0,s.Z)(S,2),Z=b[0],k=b[1],L=(0,o.useState)(1),B=(0,s.Z)(L,2),R=B[0],z=B[1],M=(0,o.useState)(""),F=(0,s.Z)(M,2),G=F[0],D=F[1],V=a.get("search");(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,a,n,r,s,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,N(!0),!h){e.next=11;break}return e.next=5,C(V,R);case 5:return t=e.sent,a=t.data,n=t.totalPages,x(a),D(n),e.abrupt("return");case 11:return e.next=13,I(R);case 13:r=e.sent,s=r.data,i=r.totalPages,x(s),D(i),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),k(e.t0.message),console.log(Z);case 24:return e.prev=24,N(!1),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[0,20,24,27]])})));return function(){return e.apply(this,arguments)}}();e()}),[x,z,Z,N,D,R,V,h,G]);var E=(0,o.useCallback)((function(e){var t=e.search;d(t),n({search:"".concat(t)}),x([]),z(1)}),[n,d,x,z]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l.Z,{onSubmit:E}),(0,_.jsx)(P,{items:p,loading:j}),!j&&(0,_.jsx)(m,{totalPages:G,onPageChange:function(e){z(e)},page:R})]})},R="NewsPage_container__O-sSa",z=function(){return(0,_.jsxs)("div",{className:R,children:[(0,_.jsx)(n.Z,{children:"News"}),(0,_.jsx)(B,{})]})}},2329:function(e,t,a){var n=a(184);t.Z=function(e){var t=e.onClick,a=e.label,r=e.className,s=e.type,i=e.SVGComponent,c=e.showLabelFirst,l=void 0===c||c;return(0,n.jsxs)("button",{onClick:t,className:r,type:s,children:[l&&a,i&&(0,n.jsx)(i,{}),!l&&a,e.children]})}},6434:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(2329),r=a(1413),s=(a(2791),a(184));var i=function(e){return(0,s.jsx)("svg",(0,r.Z)((0,r.Z)({width:24,height:24,xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,s.jsx)("path",{d:"M19.47 20.53a.75.75 0 101.06-1.06l-1.06 1.06zM17.25 10.5a6.75 6.75 0 01-6.75 6.75v1.5a8.25 8.25 0 008.25-8.25h-1.5zm-6.75 6.75a6.75 6.75 0 01-6.75-6.75h-1.5a8.25 8.25 0 008.25 8.25v-1.5zM3.75 10.5a6.75 6.75 0 016.75-6.75v-1.5a8.25 8.25 0 00-8.25 8.25h1.5zm6.75-6.75a6.75 6.75 0 016.75 6.75h1.5a8.25 8.25 0 00-8.25-8.25v1.5zm10.03 15.72l-4.187-4.188-1.06 1.06 4.187 4.188 1.06-1.06z"})}))},c=a(910),l=a(158),o={search:""},u="SearchBar_searchForm__xPw5s",h="SearchBar_container__EpSSz",_="SearchBar_searchInput__155Nk",d="SearchBar_disabled__-kywJ",m="SearchBar_active__CeksW",g="SearchBar_crossBtn__Bxm+v",f=function(e){var t=e.onSubmit,a=(0,l.Z)({initialState:o,onSubmit:t}),r=a.state,f=a.setState,p=a.handleChange,x=a.handleSubmit;console.log("Render form");var v=r.search,w=v?m:d;return(0,s.jsx)("form",{className:u,onSubmit:x,children:(0,s.jsxs)("div",{className:h,children:[(0,s.jsx)("label",{children:(0,s.jsx)("input",{className:_,type:"text",name:"search",value:v,onChange:p,placeholder:"Search",required:!0})}),(0,s.jsx)(n.Z,{type:"submit",className:w,SVGComponent:i}),v&&(0,s.jsx)(n.Z,{type:"button",className:g,SVGComponent:c.Z,onClick:function(){f({search:""})}})]})})}},2904:function(e,t,a){a.d(t,{Z:function(){return i}});var n="Title_mainPageTitle__gclES",r="Title_pageTitle__SVAUC",s=a(184);function i(e){var t=e.main,a=e.children;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)("h1",{className:n,children:a}),!t&&(0,s.jsx)("h2",{className:r,children:a})]})}},158:function(e,t,a){var n=a(4942),r=a(1413),s=a(9439),i=a(2791);t.Z=function(e){var t=e.initialState,a=e.onSubmit,c=(0,i.useState)((0,r.Z)({},t)),l=(0,s.Z)(c,2),o=l[0],u=l[1],h=(0,i.useCallback)((function(e){var t=e.target,a=t.name,s=t.value;u((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,n.Z)({},a,s))}))}),[u]);return{state:o,setState:u,handleChange:h,handleSubmit:function(e){e.preventDefault(),a((0,r.Z)({},o)),u((0,r.Z)({},t))}}}}}]);
//# sourceMappingURL=665.9c3eb0e9.chunk.js.map