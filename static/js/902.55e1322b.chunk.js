"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[902],{501:function(e,t,n){var a=n(1413),i=(n(2791),n(184));t.Z=function(e){return(0,i.jsx)("svg",(0,a.Z)((0,a.Z)({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,i.jsx)("path",{d:"M9.764 5.295A8.618 8.618 0 0112 5c6.364 0 10 7 10 7s-.829 1.596-2.388 3.264M4.349 8.777C2.815 10.431 2 12 2 12s3.636 7 10 7a8.62 8.62 0 002.274-.306M11.5 14.96A3.004 3.004 0 019.17 13m3.33-3.959a3.002 3.002 0 012.459 2.459M3 3l18 18",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})}))}},5117:function(e,t,n){var a=n(1413),i=(n(2791),n(184));t.Z=function(e){return(0,i.jsxs)("svg",(0,a.Z)((0,a.Z)({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,i.jsx)("path",{d:"M2 12s3.636-7 10-7 10 7 10 7-3.636 7-10 7-10-7-10-7z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})]}))}},1902:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(1087),i=n(9434),s=n(7689),r=n(1676),o=n(4289),l=n(3541),u=n(175),c=JSON.parse('{"l9":{"eng":"Registration","ua":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"},"Hm":{"eng":"Already have an account?","ua":"\u0412\u0436\u0435 \u043c\u0430\u0454\u0442\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 ?"},"x4":{"eng":"Login ","ua":"\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044c"},"EA":{"eng":"user","ua":"\u044f\u043a \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447"},"SH":{"eng":"or use","ua":"\u0430\u0431\u043e \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435\u0441\u044c"},"lk":{"eng":"Google authenticate","ua":"\u0430\u0432\u0442\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0454\u044e Google"}}'),d=n(3583),h=n(1413),p=n(9439),g=n(2791),f=n(7570),m=n(2718),x=n(158),v=n(5505),_=n(501),b=n(5117),j={email:{type:"email",name:"email",required:!0},password:{name:"password",required:!0}},Z={email:"",password:""},w="RegisterForm_form__12+Np",k="RegisterForm_inputWrapper__UYWn6",S="RegisterForm_eyeIcon__IqyrN",y="RegisterForm_inputCustomSettings__4uKd6",C="RegisterForm_differentPassords__bD9Rt",N=n(184),F=function(e){var t=e.onSubmit,n=(0,u.Z)().lang,a=(0,x.Z)({initialState:Z,onSubmit:t}),i=a.state,s=a.handleChange,r=a.handleSubmit,o=i.email,l=i.password,c=(0,g.useState)(""),d=(0,p.Z)(c,2),F=d[0],E=d[1],O=(0,g.useState)(!1),L=(0,p.Z)(O,2),P=L[0],A=L[1],R=(0,g.useState)(!1),z=(0,p.Z)(R,2),D=z[0],I=z[1],V=(0,g.useState)(!0),M=(0,p.Z)(V,2),W=M[0],H=M[1],T=(0,g.useState)(!0),B=(0,p.Z)(T,2),q=B[0],G=B[1],$=(0,g.useState)(!0),J=(0,p.Z)($,2),K=J[0],U=J[1],Y=v.l9[n],Q=v.Do[n],X=v.Bj[n],ee=v.Zb[n],te=v.u$[n],ne=v.TN[n],ae=(0,g.useState)(!0),ie=(0,p.Z)(ae,2),se=ie[0],re=ie[1],oe=function(){A(!P)},le=function(){I(!D)};return(0,g.useEffect)((function(){l===F&&re(!1),l!==F&&re(!0)}),[l,F,re]),(0,N.jsxs)("form",{onSubmit:function(e){r(e),E("")},autoComplete:"off",className:w,children:[(0,N.jsx)("div",{className:k,children:(0,N.jsx)(f.Z,(0,h.Z)((0,h.Z)({id:"email",value:o,placeholder:Q,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",title:te,style:{border:W?"1px solid #54adff":"1px solid #F43F5E"},aditionalClass:W?y:"",handleChange:function(e){s(e),H(e.target.checkValidity())}},j.email),{},{isValid:W}))}),(0,N.jsxs)("div",{className:k,children:[(0,N.jsx)(f.Z,(0,h.Z)((0,h.Z)({id:"password",type:P?"text":"password",placeholder:X,pattern:".{6,}",title:ne,style:{border:q?"1px solid #54adff":"1px solid #F43F5E"},aditionalClass:q?y:"",value:l,handleChange:function(e){s(e),G(e.target.checkValidity())}},j.password),{},{isValid:q})),P?(0,N.jsx)(_.Z,{className:S,onClick:oe}):(0,N.jsx)(b.Z,{className:S,onClick:oe})]}),(0,N.jsxs)("div",{className:k,children:[(0,N.jsx)(f.Z,{id:"confirm",type:D?"text":"password",placeholder:ee,style:{border:K?"1px solid #54adff":"1px solid #F43F5E"},aditionalClass:K?y:"",pattern:".{6,}",title:"Password must be at least 6 characters long",value:F,handleChange:function(e){!function(e){var t=e.target.value;E(t)}(e),U(e.target.checkValidity())},isValid:K}),D?(0,N.jsx)(_.Z,{className:S,onClick:le}):(0,N.jsx)(b.Z,{className:S,onClick:le}),se&&(0,N.jsx)("p",{className:C,children:"Passwords must match"})]}),(0,N.jsx)(m.Z,{disabled:se,children:Y})]})},E=n(3656),O="RegisterPage_container__1TYXg",L="RegisterPage_redirectLink__acKlH",P="RegisterPage_navlink__6oS31",A=function(){var e=(0,u.Z)().lang,t=(0,i.v9)(o.y6),n=c.l9[e],h=c.Hm[e],p=c.x4[e],g=c.EA[e],f=c.SH[e],m=c.lk[e],x=(0,i.I0)();x((0,l.b)(!1));return t?(0,N.jsx)(s.Fg,{to:"/user"}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d.Z,{}),(0,N.jsxs)("div",{className:O,children:[(0,N.jsx)(E.Z,{text:n}),(0,N.jsx)(F,{onSubmit:function(e){x((0,r.z2)(e)).then((function(){x((0,l.b)(!0))}))}}),(0,N.jsx)("div",{children:(0,N.jsxs)("p",{className:L,children:[h," ",(0,N.jsxs)(a.OL,{to:"/login",className:P,children:[p," "]}),(0,N.jsx)(a.OL,{to:"/user",className:P,children:g})," ",f," ",(0,N.jsx)("a",{href:"https://patron-back.onrender.com/api/auth/google",className:P,children:m})]})})]})]})}},2718:function(e,t,n){n.d(t,{Z:function(){return s}});var a="AuthButton_btn__1hGFQ",i=n(184),s=function(e){var t=e.children,n=e.type,s=void 0===n?"submit":n,r=e.disabled,o=void 0===r||r;return(0,i.jsx)("button",{type:s,className:a,disabled:o,children:t})}},3656:function(e,t,n){n.d(t,{Z:function(){return s}});var a="AuthTitle_title__O6EPv",i=n(184),s=function(e){var t=e.text;return(0,i.jsx)("h2",{className:a,children:t})}},3583:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(9439),i=n(2791),s="Background_bg__5OCUB",r=n(4812),o=n(6050),l=n(5535),u=n(184),c=function(){var e=(0,i.useState)(window.innerWidth),t=(0,a.Z)(e,2),n=t[0],c=t[1];(0,i.useEffect)((function(){function e(){c(window.innerWidth)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("img",{className:s,src:n<768?r:n>=768&&n<1280?o:l,alt:"back ground",loading:"lazy"})})}},7570:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(1413);function i(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s="Input_input__CEEIe",r="Input_invalid__pATaS",o="Input_errorMessage__PDHTe",l=n(184),u=["label","type","id","placeholder","pattern","title","value","handleChange","isValid","aditionalClass"],c=function(e){var t=e.label,n=e.type,c=e.id,d=e.placeholder,h=e.pattern,p=e.title,g=e.value,f=e.handleChange,m=e.isValid,x=e.aditionalClass,v=i(e,u);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("label",{htmlFor:n,children:t}),(0,l.jsx)("input",(0,a.Z)({type:n,name:n,id:c,placeholder:d,pattern:h,title:p,value:g,onChange:f,className:"".concat(s," ").concat(m?"":r," ").concat(x)},v)),!m&&(0,l.jsx)("p",{className:o,children:p})]})}},158:function(e,t,n){var a=n(4942),i=n(1413),s=n(9439),r=n(2791);t.Z=function(e){var t=e.initialState,n=e.onSubmit,o=(0,r.useState)((0,i.Z)({},t)),l=(0,s.Z)(o,2),u=l[0],c=l[1],d=(0,r.useCallback)((function(e){var t=e.target,n=t.name,s=t.value;c((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,a.Z)({},n,s))}))}),[c]);return{state:u,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),n((0,i.Z)({},u)),c((0,i.Z)({},t))}}}},5535:function(e,t,n){e.exports=n.p+"static/media/bg_1280x770(708).7cb9d2b64e384133ce1a.png"},4812:function(e,t,n){e.exports=n.p+"static/media/bg_320x601(543).0eb271a668fb36a34c53.png"},6050:function(e,t,n){e.exports=n.p+"static/media/bg_768x1193(1125).f1592d664e48e6beb06c.png"},5505:function(e){e.exports=JSON.parse('{"l9":{"eng":"Registration","ua":"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c"},"x4":{"eng":"Login","ua":"\u0423\u0432\u0456\u0439\u0442\u0438"},"Do":{"eng":"Email","ua":" \u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430"},"Bj":{"eng":"Password","ua":"\u041f\u0430\u0440\u043e\u043b\u044c"},"Zb":{"eng":"Confirm password","ua":"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"},"u$":{"eng":"Enter a valid Email","ua":"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u043b\u0456\u0434\u043d\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0457 \u043f\u043e\u0448\u0442\u0438"},"TN":{"eng":"Password must be at least 6 characters long","ua":"\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0449\u043e\u043d\u0430\u0439\u043c\u0435\u043d\u0448\u0435 6 \u0441\u0438\u043c\u043e\u043b\u0456\u0432"}}')}}]);
//# sourceMappingURL=902.55e1322b.chunk.js.map