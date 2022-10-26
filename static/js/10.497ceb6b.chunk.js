"use strict";(self.webpackChunkdiz=self.webpackChunkdiz||[]).push([[10],{83:function(e,t,n){var i=n(2791);t.Z=function(e,t){(0,i.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}))}},2010:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var i=n(1413),a=n(2982),s=n(4165),o=n(5861),r=n(885),l=n(2791),c=n(2797),d=n(9827),u=n(807),f=n(4390),h=n(4565),m=n(4162),x=n(7205),p=n(643),v=n(3811),g=n(9963),y=n(1680),Z=n(9773),j=n(4533),b=n(6747),w=n(8061),C=n(6997),k=n(4175),N=n(9434),A=n(1411),S=n(8901),I=n(2426),P=n.n(I),R=n(4558),D=n(7247),O=n(194),M=n(5399),K=n(7323),H=n(184),B={"& .MuiDialog-container":{alignItems:"center"},"& .MuiPaper-root":{width:"400px",minHeight:"160px",padding:"24px 16px 16px 16px",borderRadius:"4px"}};function L(e){var t=e.open,n=e.enterpriseUser,i=e.payload,a=e.onHandleDeleteClose,r=e.type,l=(0,N.I0)(),c=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var t,o,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l((0,A.K4)(!0)),t={enterpriseId:null===n||void 0===n?void 0:n.enterpriseId,integrationId:null===i||void 0===i?void 0:i.integrationId},"delete"!==r){e.next=8;break}return e.next=5,k.R.delete("/integration/".concat(null===n||void 0===n?void 0:n.enterpriseId,"/").concat(null===i||void 0===i?void 0:i.integrationId),t);case 5:o=e.sent,e.next=11;break;case 8:return e.next=10,k.R.put("/integration/".concat(null===n||void 0===n?void 0:n.enterpriseId,"/deactivate/").concat(null===i||void 0===i?void 0:i.integrationId),{},t);case 10:o=e.sent;case 11:o.ok?(l((0,A.K4)(!1)),"success"===(c=o.data).status?((0,S.k)("".concat("delete"===r?"Deleted":"Deactivated"," Successfully!!")),a(!1,r)):(0,S.k)(c.message,3e3,"error")):(l((0,A.K4)(!1)),(0,S.k)("Something Went Wrong!",3e3,"error"));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,H.jsxs)(M.Z,{sx:B,open:t,onClose:function(e,t){t&&"backdropClick"===t||a(!0,r)},className:"AddUserContainer",children:[(0,H.jsx)(m.Z,{direction:"row",children:(0,H.jsxs)(m.Z,{style:{width:"100%"},children:[(0,H.jsxs)(h.Z,{style:{color:b.O.dangerDark,marginBottom:"12px"},className:"ff-Seigo fw-semibold wordBreak",children:["delete"===r?"Delete":"Deactivate"," API KEY"]}),(0,H.jsxs)(h.Z,{style:{color:b.O.blackMain},className:"ff-Seigo fw-regular fs-12 wordBreak",children:["Are you sure you want to permanently ","delete"===r?"delete":"deactivate"," your api-key ? This is not a reversible action."]})]})}),(0,H.jsxs)(K.Z,{style:{height:"66px",padding:"0",marginTop:"20px",width:"100%"},children:[(0,H.jsx)(x.Z,{sx:C.nR,style:{width:"128px"},variant:"outlined",onClick:function(){return a(!0,r)},children:"Cancel"}),(0,H.jsx)(x.Z,{sx:C.A9,style:{width:"136px",marginLeft:"24px",background:"#C71212"},onClick:c,variant:"contained",children:"delete"===r?"Delete":"Deactivate"})]})]})}var T=n(9417),E=n(5130),z=n(4929),F=n(5705),U=z.Ry({label:z.Z_("Enter your Label").required("Label is Required").max(50,"Name must maximum of 50 characters").trim()});function W(e){var t=e.open,n=e.onHandleAddClose,a=e.enterpriseUser,c=(0,N.I0)(),d=(0,l.useState)({label:""}),u=(0,r.Z)(d,2),f=u[0],p=u[1],g=(0,F.TA)({enableReinitialize:!0,initialValues:f,validationSchema:U,validateOnBlur:!0,validateOnChange:!0,onSubmit:function(e){D(e)}}),y=g.handleSubmit,Z=g.values,j=g.handleChange,w=g.handleBlur,I=g.isValid,P=g.dirty,R=g.resetForm,D=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){var n,i,o,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c((0,A.K4)(!0)),n={enterpriseId:a.enterpriseId},i={label:t.label,createdBy:null===a||void 0===a?void 0:a.name},e.next=5,k.R.post("/integration/".concat(a.enterpriseId),i,n);case 5:(o=e.sent).ok?(c((0,A.K4)(!1)),"success"===(r=o.data).status?(O(!1),R(),(0,S.k)(r.message)):(0,S.k)(r.message,3e3,"error")):(c((0,A.K4)(!1)),(0,S.k)("Something Went Wrong!",3e3,"error"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){p({label:""}),Z.label="",R(),n(e)};return(0,H.jsxs)(M.Z,{sx:{"& .MuiDialog-container":{alignItems:"center"},"& .MuiPaper-root":{width:"400px",minHeight:"160px",padding:"16px",borderRadius:"4px"}},open:t,onClose:function(e,t){R(),t&&"backdropClick"===t||O(!0)},className:"AddUserContainer",children:[(0,H.jsxs)(m.Z,{style:{paddingBottom:"10px",marginBottom:"16px",position:"sticky",top:"0",zIndex:"99",background:"#FFF"},direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,H.jsx)("div",{className:"flex",children:(0,H.jsx)(h.Z,{style:{color:b.O.blackMain},className:"fw-bold fs-14 ff-Seigo",children:"CREATE API KEY"})}),(0,H.jsx)("div",{children:(0,H.jsx)(v.Z,{style:{padding:"0"},onClick:function(){return O(!0)},children:(0,H.jsx)(E.Z,{style:{color:b.O.blackMain,transform:"scale(1.143)"}})})})]}),(0,H.jsx)("form",{onSubmit:y,className:"editContainer",children:(0,H.jsxs)(m.Z,{children:[(0,H.jsxs)(m.Z,{children:[(0,H.jsx)(h.Z,{className:"fs-14 ff-Roboto fw-medium mb-7",color:b.O.blackMain,children:"Label"}),(0,H.jsx)(T.Z,{fullWidth:!0,id:"label",name:"label",value:Z.label,onChange:j,onBlur:w,onKeyPress:function(e){13===e.which&&e.preventDefault()},autoComplete:"off"})]}),(0,H.jsx)(x.Z,{sx:(0,i.Z)((0,i.Z)({},C.mK),{},{width:"100%",marginTop:"36px"}),disabled:!(P&&I),type:"submit",variant:"contained",children:"Done"})]})})]})}var V=n.p+"static/media/integrationLock.ee35f58ac6927d025a3bb76cc680f9a7.svg",q=n(6015),Y=n(5452),G=n(4020),_=n(2898);function J(e){var t=e.payload,n=e.onClickCopy,i=e.onHandleAction,a=(0,l.useState)(!1),s=(0,r.Z)(a,2),o=s[0],c=s[1],d=Boolean(o),u=function(e){e.stopPropagation(),c(null)},f=function(e,t,n){u(e),e.stopPropagation(),i(t,n)};return(0,H.jsxs)(q.Z,{className:"integrationCard",children:[(0,H.jsxs)(m.Z,{direction:"row",alignItems:"flex-start",justifyContent:"space-between",children:[(0,H.jsxs)(m.Z,{style:{width:"91%"},children:[(0,H.jsx)(h.Z,{className:"fs-12 ff-Roboto fw-medium",style:{color:"0"===(null===t||void 0===t?void 0:t.isActiveStatus)?"#AAA":b.O.primaryHover,marginBottom:"4px"},children:null===t||void 0===t?void 0:t.label}),(0,H.jsx)(h.Z,{className:"ellipseStyle fs-14 ff-Roboto fw-regular",style:{color:"0"===(null===t||void 0===t?void 0:t.isActiveStatus)?"#AAA":"#000",width:"99%"},children:t.isClicked?(0,H.jsx)(H.Fragment,{children:t.apiKey}):(0,H.jsx)(H.Fragment,{children:"*****************************************"})})]}),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(v.Z,{id:"resource-button",onClick:function(e){e.stopPropagation(),c(e.currentTarget)},"aria-controls":d?"resource-menu":void 0,"aria-haspopup":"true","aria-expanded":d?"true":void 0,style:{padding:"0"},children:(0,H.jsx)(_.Z,{style:{color:"#A4AFB9"}})}),(0,H.jsxs)(Y.Z,{PaperProps:{sx:{width:"128px","& .MuiList-root":{padding:"0"}}},className:"appbar",id:"resource-menu",anchorEl:o,open:d,MenuListProps:{"aria-labelledby":"resource-button"},onClose:u,children:[(0,H.jsx)(G.Z,{onClick:function(e){return f(e,t,"delete")},className:"ff-Roboto fs-12",onClose:u,children:(0,H.jsxs)(m.Z,{direction:"row",alignItems:"center",children:[(0,H.jsx)(D.Z,{style:{color:b.O.blackMain,transform:"scale(0.8888)"}}),(0,H.jsx)(h.Z,{className:"ff-roboto fs-12 fw-semibold",style:{paddingLeft:"16px"},children:"Delete"})]})}),(0,H.jsx)(G.Z,{disabled:"0"===(null===t||void 0===t?void 0:t.isActiveStatus),onClick:function(e){return f(e,t,"deactivate")},className:"ff-Roboto fs-12",onClose:u,children:(0,H.jsxs)(m.Z,{direction:"row",alignItems:"center",children:[(0,H.jsx)(R.Z,{style:{color:b.O.blackMain,transform:"scale(0.7276)"}}),(0,H.jsx)(h.Z,{className:"ff-roboto fs-12 fw-semibold",style:{paddingLeft:"16px"},children:"Deactivate"})]})})]})]})]}),(0,H.jsxs)(m.Z,{style:{marginTop:"23px"},direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,H.jsx)(m.Z,{style:{width:"91%"},children:(0,H.jsx)(h.Z,{className:"fs-12 ff-Roboto fw-regular",style:{color:"0"===(null===t||void 0===t?void 0:t.isActiveStatus)?"#AAA":"#000"},children:P()(t.createdAt).format("DD MMM, yyyy")})}),"0"===(null===t||void 0===t?void 0:t.isActiveStatus)?"":(0,H.jsx)(v.Z,{onClick:function(e){return n(e,t)},style:{padding:"0"},children:(0,H.jsx)(O.Z,{style:{transform:"scale(0.7276)"}})})]})]})}var Q=n(2419),X=n(83),$=[{name:"Label",width:"calc(100% - 76.875%)"},{name:"API Key",width:"calc(100% - 62.5%)"},{name:"Last Accessed",width:"calc(100% - 78.125%)"},{name:"Action",width:"calc(100% - 86.875%)"}];function ee(){var e=(0,l.useState)(null),t=(0,r.Z)(e,2),n=t[0],I=t[1],M=(0,l.useState)(0),K=(0,r.Z)(M,2),B=K[0],T=K[1],z=(0,l.useState)(1),F=(0,r.Z)(z,2),U=F[0],q=F[1],Y=(0,l.useState)(10),G=(0,r.Z)(Y,2),_=G[0],ee=G[1],te=(0,l.useState)(null),ne=(0,r.Z)(te,2),ie=ne[0],ae=ne[1],se=(0,l.useState)(!1),oe=(0,r.Z)(se,2),re=oe[0],le=oe[1],ce=(0,l.useState)(null),de=(0,r.Z)(ce,2),ue=de[0],fe=de[1],he=(0,l.useState)(null),me=(0,r.Z)(he,2),xe=me[0],pe=me[1],ve=(0,l.useState)(!1),ge=(0,r.Z)(ve,2),ye=ge[0],Ze=ge[1],je=(0,l.useState)(!1),be=(0,r.Z)(je,2),we=be[0],Ce=be[1],ke=(0,c.Z)("(max-width:1000px)"),Ne=(0,l.useRef)();(0,X.Z)(Ne,(function(){return ke&&Ce(!1)}));var Ae=(0,N.v9)((function(e){return e.auth})).user,Se=(0,N.I0)(),Ie=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var t,n,i,a,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Se((0,A.K4)(!0)),e.next=3,k.R.get("/integration/".concat(Ae.enterpriseId),{page:U,limit:_});case 3:(t=e.sent).ok?("success"===(n=t.data).status?((o=null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.keys).map((function(e){e.isClicked=!1})),I(null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.length),ae(o)):(ae([]),I(0)),Se((0,A.K4)(!1))):(Se((0,A.K4)(!1)),(0,S.k)("Something Went Wrong!",3e3,"error"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){Ie()}),[B,_,U]);var Pe=function(){return(0,H.jsx)(d.Z,{className:"mainUserTableHead",children:(0,H.jsxs)(u.Z,{sx:{"& th":{backgroundColor:b.O.secondary}},children:[(0,H.jsx)(f.Z,{style:{width:"calc(4.375%)",textAlign:"center",color:b.O.primaryDark},children:"#"}),null===$||void 0===$?void 0:$.map((function(e,t){return(0,H.jsx)(f.Z,{style:{width:e.width},children:(0,H.jsx)(h.Z,{className:"ff-Roboto fs-12 fw-medium",style:{color:b.O.primaryDark},children:e.name})},t)}))]})})},Re=function(e,t){q(t+1),T(t)},De=function(e){ee(parseInt(e.target.value,10)),q(1),T(0)},Oe=function(e,t){e.stopPropagation(),navigator.clipboard.writeText(t),(0,S.k)("Api Key Copied",2e3)},Me=function(e,t){le(!0),fe(t),pe(e)},Ke=function(e,t){"delete"===t&&(le(!1),!0!==e&&(0===B&&1===U?Ie():1===ie.length?(T(0===B?0:B-1),q(1===U?1:U-1)):Ie(),pe(null))),"deactivate"===t&&(le(!1),!0!==e&&(Ie(),pe(null))),"add"===t&&(Ze(!1),!0!==e&&(Ie(),pe(null)))},He=function(e,t){e.stopPropagation(),Ze(t)};return(0,H.jsxs)("div",{className:"IntegrationContainer innerPadding",children:[(0,H.jsx)("header",{className:ke&&"headerMobile",style:{marginBottom:"8px"},children:(0,H.jsxs)(m.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,H.jsx)(h.Z,{className:"ff-Roboto fw-medium text-upper",style:{color:b.O.blackMain},children:"INTEGRATIONS"}),(0,H.jsxs)("div",{className:"flex-aligncenter",children:[n<=0?"":(0,H.jsx)(x.Z,{onClick:function(e){return He(e,!0)},className:"mobileviewStyle",sx:C.ts,variant:"contained",children:"Create API Key"}),(0,H.jsx)(x.Z,{className:"mobileviewStyle",sx:C.ts,variant:"contained",children:"Integration docs"}),ke?null:(0,H.jsx)(p.Z,{rowsPerPageOptions:[],count:n||1,rowsPerPage:_||10,page:B||0,onPageChange:Re,onRowsPerPageChange:De,ActionsComponent:w.Z})]})]})}),ke?(0,H.jsxs)("div",{style:{marginBottom:"250px"},children:[(null===ie||void 0===ie?void 0:ie.length)<=0&&(0,H.jsx)("div",{className:"createApiKeyNoData",children:(0,H.jsx)("div",{className:"innerNoData",children:(0,H.jsx)("img",{alt:"",src:V})})}),ie&&ie.map((function(e,t){return(0,H.jsx)("div",{onClick:function(){return function(e){e.isClicked=!0!==e.isClicked;var t=(0,a.Z)(ie);t.forEach((function(t){t.integrationId===e.integrationId?t.isClicked=e.isClicked:t.isClicked=!1})),ae(t)}(e)},children:(0,H.jsx)(J,{payload:e,onClickCopy:function(e,t){return Oe(e,t.apiKey)},onHandleAction:function(e,t){return Me(e,t)}})},t)})),(null===ie||void 0===ie?void 0:ie.length)>0&&(0,H.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"20px"},children:(0,H.jsx)(p.Z,{rowsPerPageOptions:[],count:n||0,rowsPerPage:_||5,page:B||0,onPageChange:Re,onRowsPerPageChange:De,ActionsComponent:w.Z})}),(0,H.jsxs)("div",{className:"bottomAction",ref:Ne,children:[we&&(0,H.jsxs)(m.Z,{children:[(0,H.jsx)(x.Z,{className:"fs-16 fw-medium ff-Roboto btnStyle",style:{background:b.O.header,color:b.O.blackMain},children:"Integration Docs"}),(0,H.jsx)(x.Z,{onClick:function(e){return He(e,!0)},className:"fs-16 fw-medium ff-Roboto btnStyle",style:{background:b.O.buttonColor,color:b.O.white},children:"Create API Key"})]}),(0,H.jsx)(v.Z,{onClick:function(e){return function(e){e.stopPropagation(),Ce(!we)}(e)},className:"mobileaddstyle",children:we?(0,H.jsx)(E.Z,{style:{color:b.O.white}}):(0,H.jsx)(Q.Z,{style:{color:b.O.white}})})]})]}):(0,H.jsxs)("div",{className:"tableContainer",children:[(0,H.jsx)(g.Z,{sx:{maxHeight:"calc(100vh - 128px)"},children:(0,H.jsxs)(y.Z,{style:{tableLayout:"fixed"},stickyHeader:!0,"aria-label":"sticky table",sx:{width:"100%"},children:[(0,H.jsx)(Pe,{}),(0,H.jsx)(Z.Z,{className:"mainUserBodyTable",children:ie&&ie.map((function(e,t){return(0,H.jsxs)(u.Z,{className:"0"===(null===e||void 0===e?void 0:e.isActiveStatus)?"":"tableRowHover",style:{color:"0"===(null===e||void 0===e?void 0:e.isActiveStatus)?"#AAA":"#000"},children:[(0,H.jsx)(f.Z,{align:"center",className:"color-inherit",style:{width:"calc(4.375%)"},children:(0,H.jsx)(h.Z,{className:"ff-Roboto fs-12 fw-regular",children:_*B+t+1})}),(0,H.jsx)(f.Z,{className:"color-inherit",style:{width:"calc(100% - 76.875%)"},children:(0,H.jsx)(h.Z,{className:"fs-12 ff-Roboto fw-regular ellipseStyle",children:e.label})}),(0,H.jsxs)(f.Z,{className:"hoverCell color-inherit",style:{width:"calc(100% - 62.5%)"},children:[(0,H.jsxs)(m.Z,{direction:"row",alignItems:"center",className:"showonHover",children:[(0,H.jsx)(h.Z,{className:"fs-12 ff-Roboto fw-regular ellipseStyle",style:{width:"80%"},children:e.apiKey}),"0"===(null===e||void 0===e?void 0:e.isActiveStatus)?"":(0,H.jsx)(v.Z,{onClick:function(t){return Oe(t,e.apiKey)},children:(0,H.jsx)(O.Z,{style:{transform:"scale(0.7276)"}})})]}),(0,H.jsx)(h.Z,{className:"fs-12 ff-Roboto fw-regular ellipseStyle hideonHover",children:"*************************************************"})]}),(0,H.jsx)(f.Z,{className:"color-inherit",style:{width:"calc(100% - 78.125%)"},children:(0,H.jsx)(h.Z,{className:"fs-12 ff-Roboto fw-regular ellipseStyle",children:P()(e.createdAt).format("DD MMM, yyyy")})}),(0,H.jsxs)(f.Z,{style:{width:"calc(100% - 86.875%)"},children:[(0,H.jsx)(j.Z,{title:"0"===(null===e||void 0===e?void 0:e.isActiveStatus)?"":"Deactivate",arrow:!0,placement:"top",disableInteractive:!0,componentsProps:{tooltip:{sx:{fontSize:"12px",fontFamily:"Roboto",fontWeight:"500",bgcolor:b.O.dangerLight,color:b.O.danger,borderRadius:"20px","& .MuiTooltip-arrow":{color:b.O.dangerLight}}}},children:(0,H.jsx)(v.Z,{disabled:"0"===(null===e||void 0===e?void 0:e.isActiveStatus),style:{opacity:"0"===(null===e||void 0===e?void 0:e.isActiveStatus)?"0.5":"1"},onClick:function(){return Me(e,"deactivate")},className:"hoverBlock",children:(0,H.jsx)(R.Z,{style:{color:b.O.secondarymain,transform:"scale(0.8)"}})})}),(0,H.jsx)(j.Z,{title:"Delete",children:(0,H.jsx)(v.Z,{onClick:function(){return Me(e,"delete")},className:"hoverIconButton",children:(0,H.jsx)(D.Z,{style:{color:b.O.primaryHover,transform:"scale(0.8888)"}})})})]})]},t)}))})]})}),(null===ie||void 0===ie?void 0:ie.length)<=0&&(0,H.jsx)("div",{className:"createApiKeyNoData",children:(0,H.jsxs)("div",{className:"innerNoData",children:[(0,H.jsx)("img",{alt:"",src:V}),(0,H.jsx)(x.Z,{onClick:function(e){return He(e,!0)},className:"mobileviewStyle",sx:(0,i.Z)((0,i.Z)({},C.ts),{},{width:"100%",bottom:"-7%",position:"absolute",marginRight:"0"}),variant:"contained",children:"Create API Key"})]})})]}),(0,H.jsx)(W,{open:ye,enterpriseUser:Ae,onHandleAddClose:function(e){return Ke(e,"add")}}),(0,H.jsx)(L,{open:re,enterpriseUser:Ae,payload:xe,type:ue,onHandleDeleteClose:function(e,t){return Ke(e,t)}})]})}},4558:function(e,t,n){var i=n(4836);t.Z=void 0;var a=i(n(5649)),s=n(184),o=(0,a.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"}),"Block");t.Z=o},194:function(e,t,n){var i=n(4836);t.Z=void 0;var a=i(n(5649)),s=n(184),o=(0,a.default)((0,s.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=o}}]);
//# sourceMappingURL=10.497ceb6b.chunk.js.map