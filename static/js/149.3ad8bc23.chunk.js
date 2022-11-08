"use strict";(self.webpackChunkdiz=self.webpackChunkdiz||[]).push([[149],{7149:function(s,e,t){t.r(e),t.d(e,{default:function(){return P}});var a=t(1413),i=t(74165),r=t(15861),n=t(70885),o=t(72791),c=t(81724),l=t(55705),d=t(52797),m=t(4565),u=t(94162),f=t(17205),x=t(34175),h=t(58901),p=t(16871),g=t(46997),Z=t(6747),w=t(42198),b=t(78615),j=t(17878),y=t(56975),v=t(1026),k=t(59434),N=t(91411),C=t(77981),R=t(80184),T=c.Ry({password:c.Z_("Enter your Password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,"Enter a password of minimum 8 and maximum 12 characters with a combination of capital letters, small letters, symbols, and numbers.").required("Password is requried").trim(),reConfirmPassword:c.Z_().oneOf([c.iH("password"),null],"Password must match").required("Retype Password is requried").trim()});function P(){var s=(0,p.UO)(),e=(0,p.s0)(),t=(0,k.I0)(),c=(0,o.useRef)(),P=(0,d.Z)("(max-width:1000px)"),S=(0,o.useState)(!1),z=(0,n.Z)(S,2),I=z[0],H=z[1],B=(0,o.useState)(!1),O=(0,n.Z)(B,2),L=O[0],V=O[1],q=(0,o.useState)({password:"",reConfirmPassword:""}),W=(0,n.Z)(q,2),E=W[0],F=(W[1],(0,o.useState)({status:"",msg:""})),K=(0,n.Z)(F,2),$=K[0],A=K[1],D=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(a){var r,n,o,c;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={params:{verificationToken:s.verificationToken}},n={password:a.password},t.next=4,x.R.post("/auth/reset-password",n,r);case 4:(o=t.sent).ok?"success"===(c=o.data).status?((0,h.k)(c.message),e("/login")):(0,h.k)(c.message,2e3,"error"):(0,h.k)("Something Went Wrong!",2e3,"error");case 6:case"end":return t.stop()}}),t)})));return function(s){return t.apply(this,arguments)}}(),G=function(){return e("/login")},M=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var a,r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((0,N.K4)(!0)),a={params:{verificationToken:s.verificationToken}},e.next=4,x.R.post("/auth/verifyResetToken",{},a);case 4:(r=e.sent).ok?(n=r.data,t((0,N.K4)(!1)),A({status:n.status,msg:n.message})):t((0,N.K4)(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){M()}),[]);var _=function(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(m.Z,{className:"fw-bold ff-Roboto createHeading",color:Z.O.primaryTxt,children:" Reset your Password "}),(0,R.jsx)(l.J9,{innerRef:c,enableReinitialize:!0,initialValues:{password:(null===E||void 0===E?void 0:E.password)||"",reConfirmPassword:null===E||void 0===E?void 0:E.reConfirmPassword},validationSchema:T,onSubmit:function(s){return D(s)},children:function(s){s.handleSubmit,s.values,s.handleChange,s.errors,s.touched,s.handleBlur;var e=s.isValid,t=s.dirty;return(0,R.jsxs)(l.l0,{style:{minHeight:"484px"},noValidate:!0,autoComplete:"off",children:[(0,R.jsx)(u.Z,{flex:1,className:"mt-9",children:(0,R.jsx)(C.Z,{label:"Password",name:"password",type:"password",sx:{mb:0},visibility:I,setVisibility:function(s){return H(s)}})}),(0,R.jsx)(u.Z,{flex:1,className:"mt-9",children:(0,R.jsx)(C.Z,{label:"Retype Password",name:"reConfirmPassword",type:"password",sx:{mb:0},visibility:L,setVisibility:function(s){return V(s)}})}),(0,R.jsx)(f.Z,{sx:(0,a.Z)((0,a.Z)({},g.c1),{},{marginBottom:"0",width:"100%"}),disabled:!(t&&e),type:"submit",children:"Reset"})]})}})]})};return(0,R.jsxs)("div",{className:"resetConfirmContainer",style:{padding:P?"16px":"0",minHeight:P?"auto":"100vh"},children:[P?(0,R.jsx)("div",{className:"mobileViewContainer",style:{minHeight:"calc(100vh - 32px)"},children:(0,R.jsxs)("div",{style:{backgroundImage:"url(".concat(w.Z,")"),minHeight:"calc(100vh - 32px)",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"},children:[(0,R.jsx)("div",{className:"logoImg",style:{marginLeft:"8px"},children:(0,R.jsx)("img",{alt:"dizLogo",src:v.Z})}),$.status&&"success"!==$.status?(0,R.jsx)("div",{className:"innerContainer",style:{marginTop:"240px"},children:(0,R.jsxs)(u.Z,{children:[(0,R.jsxs)(m.Z,{className:"fw-bold ff-Roboto createHeading",color:Z.O.primaryTxt,children:[" ",$.status?"success"===$.status?"Successful!":"Failed!":""," "]}),(0,R.jsx)(m.Z,{className:"fs-12 ff-Roboto fw-regular",color:Z.O.blackMain,style:{marginBottom:"6px"},children:$.msg}),(0,R.jsx)(f.Z,{sx:(0,a.Z)((0,a.Z)({},g.c1),{},{textTransform:"capitalize",marginBottom:"0"}),onClick:G,type:"submit",children:"Go Back To Login"})]})}):(0,R.jsx)("div",{className:"innerContainer",style:{marginTop:"136px"},children:_()})]})}):(0,R.jsx)(u.Z,{style:{maxWidth:"1368px",margin:"auto",minHeight:"758.64px"},direction:"row",justifyContent:"space-between",children:(0,R.jsxs)(u.Z,{className:"leftStack",style:{width:"100%"},children:[(0,R.jsx)("div",{className:"logoImg",children:(0,R.jsx)("img",{style:{visibility:"hidden"},alt:"dizLogo",src:b.Z})}),(0,R.jsx)("div",{className:"detailContainer",style:{backgroundImage:"url(".concat(j.Z,")")}}),(0,R.jsxs)(u.Z,{className:"formSubmittedStyle",children:[(0,R.jsx)("div",{className:"logoImg",children:(0,R.jsx)("img",{alt:"dizLogo",src:b.Z})}),$.status&&"success"!==$.status?(0,R.jsx)("div",{style:{marginTop:"22.916666666667vh"},children:(0,R.jsxs)(u.Z,{children:[(0,R.jsxs)(m.Z,{className:"fw-bold ff-Roboto createHeading",color:Z.O.primaryTxt,children:[" ",$.status?"success"===$.status?"Successful!":"Failed!":""," "]}),(0,R.jsx)(m.Z,{className:"fs-12 ff-Roboto fw-regular",color:Z.O.blackMain,style:{marginBottom:"6px"},children:$.msg}),(0,R.jsx)(f.Z,{sx:(0,a.Z)((0,a.Z)({},g.c1),{},{textTransform:"capitalize",marginBottom:"0"}),onClick:G,type:"submit",children:"Go Back To Login"})]})}):(0,R.jsx)("div",{style:{marginTop:"5.2083333333333vh"},children:_()})]})]})}),P?(0,R.jsxs)(u.Z,{className:"footer",direction:"row",justifyContent:"space-between",children:[(0,R.jsx)(u.Z,{className:"socialContainer",direction:"row",children:(0,R.jsx)(y.Z,{})}),(0,R.jsx)(m.Z,{className:"fs-10 ff-Roboto fw-medium black dizcopyrights",children:"\xa9 2022 Do It Zero Inc."})]}):(0,R.jsxs)(u.Z,{className:"footerWeb",children:[(0,R.jsx)(u.Z,{className:"socialContainer flex-justifycenter",style:{margin:"3.125vh auto 3.125vh"},direction:"row",children:(0,R.jsx)(y.Z,{})}),(0,R.jsx)(m.Z,{className:"fs-10 ff-Roboto fw-medium black dizcopyrights",children:"\xa9 2022 Do It Zero Inc."})]})]})}}}]);
//# sourceMappingURL=149.3ad8bc23.chunk.js.map