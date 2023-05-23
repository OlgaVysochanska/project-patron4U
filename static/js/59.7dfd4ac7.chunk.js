"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[59],{501:function(e,t,a){var n=a(1413),i=(a(2791),a(184));t.Z=function(e){return(0,i.jsx)("svg",(0,n.Z)((0,n.Z)({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,i.jsx)("path",{d:"M9.764 5.295A8.618 8.618 0 0112 5c6.364 0 10 7 10 7s-.829 1.596-2.388 3.264M4.349 8.777C2.815 10.431 2 12 2 12s3.636 7 10 7a8.62 8.62 0 002.274-.306M11.5 14.96A3.004 3.004 0 019.17 13m3.33-3.959a3.002 3.002 0 012.459 2.459M3 3l18 18",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})}))}},8059:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(1087),i=a(9434),r=a(7689),s=a(1676),l=a(4289),o=a(3541),c=a(3583),d=a(1413),u=a(9439),p=a(2791),h=a(7570),f=a(2718),m=a(158),g=a(501),x={email:{type:"email",name:"email",required:!0,placeholder:"Email"},password:{name:"password",required:!0,placeholder:"Password"}},_={email:"",password:""},v="RegisterForm_form__12+Np",b="RegisterForm_inputWrapper__UYWn6",j="RegisterForm_eyeIcon__IqyrN",Z="RegisterForm_inputCustomSettings__4uKd6",w="RegisterForm_differentPassords__bD9Rt",y=a(184),C=function(e){var t=e.onSubmit,a=(0,m.Z)({initialState:_,onSubmit:t}),n=a.state,i=a.handleChange,r=a.handleSubmit,s=n.email,l=n.password,o=(0,p.useState)(""),c=(0,u.Z)(o,2),C=c[0],S=c[1],k=(0,p.useState)(!1),F=(0,u.Z)(k,2),N=F[0],E=F[1],O=(0,p.useState)(!0),P=(0,u.Z)(O,2),R=P[0],I=P[1],L=(0,p.useState)(!0),V=(0,u.Z)(L,2),z=V[0],A=V[1],M=(0,p.useState)(!0),W=(0,u.Z)(M,2),D=W[0],T=W[1],q=(0,p.useState)(!0),B=(0,u.Z)(q,2),G=B[0],H=B[1],K=function(){E(!N)};return(0,p.useEffect)((function(){l===C&&H(!1),l!==C&&H(!0)}),[l,C,H]),(0,y.jsxs)("form",{onSubmit:function(e){r(e),S("")},autoComplete:"off",className:v,children:[(0,y.jsx)("div",{className:b,children:(0,y.jsx)(h.Z,(0,d.Z)((0,d.Z)({id:"email",value:s,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",title:"Enter a valid Email",style:{border:R?"1px solid #54adff":"1px solid #F43F5E"},aditionalClass:R?Z:"",handleChange:function(e){i(e),I(e.target.checkValidity())}},x.email),{},{isValid:R}))}),(0,y.jsxs)("div",{className:b,children:[(0,y.jsx)(h.Z,(0,d.Z)((0,d.Z)({id:"password",type:N?"text":"password",pattern:".{6,}",title:"Password must be at least 6 characters long",style:{border:z?"1px solid #54adff":"1px solid #F43F5E"},aditionalClass:z?Z:"",value:l,handleChange:function(e){i(e),A(e.target.checkValidity())}},x.password),{},{isValid:z})),(0,y.jsx)(g.Z,{className:j,onClick:K})]}),(0,y.jsxs)("div",{className:b,children:[(0,y.jsx)(h.Z,{id:"confirm",placeholder:"Confirm password",type:N?"text":"password",style:{border:D?"1px solid #54adff":"1px solid #F43F5E"},aditionalClass:D?Z:"",pattern:".{6,}",title:"Password must be at least 6 characters long",value:C,handleChange:function(e){!function(e){var t=e.target.value;S(t)}(e),T(e.target.checkValidity())},isValid:D}),(0,y.jsx)(g.Z,{className:j,onClick:K}),G&&(0,y.jsx)("p",{className:w,children:"Passwords must match"})]}),(0,y.jsx)(f.Z,{disabled:G,children:"Registration"})]})},S=a(3656),k="RegisterPage_container__1TYXg",F="RegisterPage_redirectLink__acKlH",N="RegisterPage_navlink__6oS31",E=function(){var e=(0,i.v9)(l.y6),t=(0,i.I0)();t((0,o.b)(!1));return e?(0,y.jsx)(r.Fg,{to:"/user"}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c.Z,{}),(0,y.jsxs)("div",{className:k,children:[(0,y.jsx)(S.Z,{text:"Registration"}),(0,y.jsx)(C,{onSubmit:function(e){t((0,s.z2)(e)).then((function(){t((0,o.b)(!0))}))}}),(0,y.jsx)("div",{children:(0,y.jsxs)("p",{className:F,children:["Already have an account?"," ",(0,y.jsxs)(n.OL,{to:"/login",className:N,children:["Login"," "]}),(0,y.jsx)(n.OL,{to:"/user",className:N,children:"user"})," ","or use"," ",(0,y.jsx)("a",{href:"https://patron-back.onrender.com/api/auth/google",className:N,children:"Google authenticate"})]})})]})]})}},2718:function(e,t,a){a.d(t,{Z:function(){return r}});var n="AuthButton_btn__1hGFQ",i=a(184),r=function(e){var t=e.children,a=e.type,r=void 0===a?"submit":a,s=e.disabled,l=void 0===s||s;return(0,i.jsx)("button",{type:r,className:n,disabled:l,children:t})}},3656:function(e,t,a){a.d(t,{Z:function(){return r}});var n="AuthTitle_title__O6EPv",i=a(184),r=function(e){var t=e.text;return(0,i.jsx)("h2",{className:n,children:t})}},3583:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(9439),i=a(2791),r="Background_bg__5OCUB",s=a(4812),l=a(6050),o=a(5535),c=a(184),d=function(){var e=(0,i.useState)(window.innerWidth),t=(0,n.Z)(e,2),a=t[0],d=t[1];(0,i.useEffect)((function(){function e(){d(window.innerWidth)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("img",{className:r,src:a<768?s:a>=768&&a<1280?l:o,alt:"back ground",loading:"lazy"})})}},7570:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(1413);function i(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r="Input_input__CEEIe",s="Input_invalid__pATaS",l="Input_errorMessage__PDHTe",o=a(184),c=["label","type","id","placeholder","pattern","title","value","handleChange","isValid","aditionalClass"],d=function(e){var t=e.label,a=e.type,d=e.id,u=e.placeholder,p=e.pattern,h=e.title,f=e.value,m=e.handleChange,g=e.isValid,x=e.aditionalClass,_=i(e,c);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",{htmlFor:a,children:t}),(0,o.jsx)("input",(0,n.Z)({type:a,name:a,id:d,placeholder:u,pattern:p,title:h,value:f,onChange:m,className:"".concat(r," ").concat(g?"":s," ").concat(x)},_)),!g&&(0,o.jsx)("p",{className:l,children:h})]})}},158:function(e,t,a){var n=a(4942),i=a(1413),r=a(9439),s=a(2791);t.Z=function(e){var t=e.initialState,a=e.onSubmit,l=(0,s.useState)((0,i.Z)({},t)),o=(0,r.Z)(l,2),c=o[0],d=o[1],u=(0,s.useCallback)((function(e){var t=e.target,a=t.name,r=t.value;d((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,n.Z)({},a,r))}))}),[d]);return{state:c,setState:d,handleChange:u,handleSubmit:function(e){e.preventDefault(),a((0,i.Z)({},c)),d((0,i.Z)({},t))}}}},5535:function(e,t,a){e.exports=a.p+"static/media/bg_1280x770(708).7cb9d2b64e384133ce1a.png"},4812:function(e,t,a){e.exports=a.p+"static/media/bg_320x601(543).0eb271a668fb36a34c53.png"},6050:function(e,t,a){e.exports=a.p+"static/media/bg_768x1193(1125).f1592d664e48e6beb06c.png"}}]);
//# sourceMappingURL=59.7dfd4ac7.chunk.js.map