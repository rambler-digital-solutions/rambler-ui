(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return x}));var o=t(6),r=t.n(o),i=t(7),a=t.n(i),s=t(8),l=t.n(s),c=t(9),u=t.n(c),d=t(10),p=t.n(d),f=t(0),m=t.n(f),b=t(280),h=t(538),k=t(589),y=m.a.createElement(h.default,{positionY:"top",showClose:!0,type:"danger"},"При удалении почты произошла ошибка"),C=m.a.createElement(h.default,{positionY:"top",positionX:"left",autoCloseDuration:3e3,size:"small",type:"danger"},"Я маленький снэкбар"),v=function(e){function n(){var e,t;r()(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=l()(this,(e=u()(n)).call.apply(e,[this].concat(i)))).openAlert=function(){t.props.openSnackbar(y)},t.openConfirm=function(){var e=t.props.openSnackbar(m.a.createElement(h.default,{positionX:"right",autoCloseDuration:0,actionButton:"Ok",onAction:function(){return e.close()}},"Вы готовы удалить почту?"))},t.openSnackbar=function(){t.props.openSnackbar(C)},t}return p()(n,e),a()(n,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{style:{marginBottom:20}},m.a.createElement(b.default,{type:"danger",onClick:this.openAlert},"Алерт"),m.a.createElement(b.default,{type:"outline",style:{marginLeft:20},onClick:this.openConfirm},"Подтверждение"),m.a.createElement(b.default,{type:"primary",style:{marginLeft:20},onClick:this.openSnackbar},"Маленький снэкбар")))}}]),n}(f.Component),g=Object(k.default)(v),O=m.a.createElement(g,null);function x(){return O}},520:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var o=t(4),r=t.n(o),i=t(0),a=t.n(i),s=t(124),l=a.a.createElement("path",{d:"M7.5 6.58L1.742.824a.4.4 0 0 0-.565 0l-.354.354a.4.4 0 0 0 0 .565L6.581 7.5.823 13.258a.4.4 0 0 0 0 .565l.354.354a.4.4 0 0 0 .565 0L7.5 8.419l5.758 5.758a.4.4 0 0 0 .565 0l.354-.354a.4.4 0 0 0 0-.565L8.419 7.5l5.758-5.758a.4.4 0 0 0 0-.565l-.354-.354a.4.4 0 0 0-.565 0L7.5 6.581z"});function c(e){return a.a.createElement(s.default,r()({viewBox:"0 0 15 15"},e),l)}c.displayName="ClearIcon"},531:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var o=t(4),r=t.n(o),i=t(6),a=t.n(i),s=t(7),l=t.n(s),c=t(8),u=t.n(c),d=t(9),p=t.n(d),f=t(10),m=t.n(f),b=t(0),h=t.n(b),k=t(125),y=t(1),C=t.n(y);function v(e){var n,t;return t=n=function(n){function t(){var e,n;a()(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=u()(this,(e=p()(t)).call.apply(e,[this].concat(r)))).state={isOpened:n.props.isOpened||!1},n.onOpen=function(){n.props.onOpen()},n.onClose=function(){n.props.onClose(),n.unmountPortal()},n}return m()(t,n),l()(t,[{key:"componentDidMount",value:function(){this.props.isOpened&&this.mountPortal()}},{key:"componentDidUpdate",value:function(e){var n=this.props.isOpened;n!==e.isOpened&&n&&this.mountPortal()}},{key:"componentWillUnmount",value:function(){this.unmountPortal()}},{key:"getContentContainerNode",value:function(){return this.node||(this.node=document.createElement("div"),this.node.style.position="absolute",this.node.style.zIndex=this.props.zIndex,this.props.containerRef(this.node),document.body.appendChild(this.node)),this.node}},{key:"mountPortal",value:function(){this.setState({isOpened:!0})}},{key:"unmountPortal",value:function(){this.node&&(this.props.containerRef(),this.setState({isOpened:!1}),document.body.removeChild(this.node),this.node=null)}},{key:"renderContent",value:function(){return h.a.createElement(e,r()({},this.props,{onOpen:this.onOpen,onClose:this.onClose}))}},{key:"render",value:function(){return this.state.isOpened?Object(k.createPortal)(this.renderContent(),this.getContentContainerNode()):null}}]),t}(b.Component),n.propTypes={isOpened:C.a.bool,zIndex:C.a.number,onOpen:C.a.func,onClose:C.a.func,containerRef:C.a.func},n.defaultProps={isOpened:!1,onOpen:function(){},onClose:function(){},containerRef:function(){}},t}},538:function(e,n,t){"use strict";t.r(n);var o=t(6),r=t.n(o),i=t(7),a=t.n(i),s=t(8),l=t.n(s),c=t(9),u=t.n(c),d=t(10),p=t.n(d),f=t(4),m=t.n(f),b=t(0),h=t.n(b),k=t(1),y=t.n(k),C=t(18),v=t.n(C),g=t(520),O=t(284),x=t(286),E=t(531),S=t(222),A=t(219),L=t(58),R=t(221),w=t(11),D=function(e){function n(){var e,t;r()(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=l()(this,(e=u()(n)).call.apply(e,[this].concat(i)))).onWillVisible=function(){t.props.autoCloseDuration&&(t.autoCloseTimeout=setTimeout((function(){t.props.onRequestClose()}),t.props.autoCloseDuration))},t.onWillInvisible=function(){clearTimeout(t.autoCloseTimeout)},t.onClickOutside=function(){t.props.isOpened&&t.props.onRequestClose()},t.renderContent=function(e){var n=t.props,o=n.isOpened,r=n.children,i=n.className,a=n.positionX,s=n.positionY,l=n.type,c=n.style,u=n.theme,d=n.icon,p=n.showClose,f=n.actionButton,m=n.onAction,k=n.onRequestClose,y=n.onClose,C=n.size,x=n.classes;return h.a.createElement(O.default,{isVisible:o,animationDuration:u.snackbar.animationDuration,onWillVisible:t.onWillVisible,onWillInvisible:t.onWillInvisible,onInvisible:y},(function(n){var t=n.isVisible;return h.a.createElement("div",{ref:e,style:c,className:v()(x.snackbar,x[a],x[s],x[l],i,t&&x.isVisible,"small"===C&&x.small)},d&&h.a.createElement("div",{className:x.icon},Object(b.cloneElement)(d,{color:d.props.color||u.snackbar.colors.text})),h.a.createElement("div",{className:x.content},r),f&&h.a.createElement("button",{type:"button",className:x.button,onClick:m},f),p&&h.a.createElement("button",{type:"button",className:x.close,onClick:k},h.a.createElement(g.default,{size:10,color:u.snackbar.colors.text})))}))},t}return p()(n,e),a()(n,[{key:"componentWillUnmount",value:function(){this.onWillInvisible()}},{key:"render",value:function(){var e=this;return this.props.closeOnClickOutside?h.a.createElement(x.default,{handler:this.onClickOutside},(function(n){return e.renderContent(n)})):this.renderContent()}}]),n}(b.PureComponent);D.propTypes={className:y.a.string,style:y.a.object,children:y.a.node.isRequired,isOpened:y.a.bool,type:y.a.oneOf(["main","primary","success","danger"]),icon:y.a.node,actionButton:y.a.string,positionX:y.a.oneOf(["left","center","right"]),positionY:y.a.oneOf(["top","bottom"]),showClose:y.a.bool,closeOnClickOutside:y.a.bool,autoCloseDuration:y.a.number,onAction:y.a.func,onRequestClose:y.a.func,onClose:y.a.func,size:y.a.oneOf(["small","medium"])},D.defaultProps={type:"main",isOpened:!1,positionX:"center",positionY:"bottom",showClose:!1,closeOnClickOutside:!1,autoCloseDuration:4e3,onAction:function(){},onRequestClose:function(){},size:"medium"},n.default=Object(R.default)(Object(S.default)(A.SNACKBAR_ZINDEX),E.default,Object(L.default)((function(e){return{snackbar:m()({extend:[w.isolateMixin,w.middleMixin],fontFamily:e.fontFamily,position:"fixed",boxSizing:"border-box",display:"flex",justifyContent:"flex-start",alignItems:"center",padding:e.snackbar.sizes.medium.padding,width:"100%",lineHeight:1.15,color:e.snackbar.colors.text,fontSize:e.snackbar.fontSize,opacity:0,transitionDuration:e.snackbar.animationDuration,transitionProperty:"top, bottom, opacity"},Object(w.ifDesktop)({width:"auto",minWidth:350,maxWidth:750,borderRadius:e.snackbar.borderRadius})),top:m()({top:-10},Object(w.ifDesktop)({top:0}),{"&$isVisible":m()({top:0},Object(w.ifDesktop)({top:10}))}),bottom:m()({bottom:-10},Object(w.ifDesktop)({bottom:0}),{"&$isVisible":m()({bottom:0},Object(w.ifDesktop)({bottom:10}))}),isVisible:{opacity:1},left:m()({left:0},Object(w.ifDesktop)({left:10})),center:{left:"50%",transform:"translateX(-50%)"},right:m()({right:0},Object(w.ifDesktop)({right:10})),main:{backgroundColor:e.snackbar.colors.background.main},primary:{backgroundColor:e.snackbar.colors.background.primary},success:{backgroundColor:e.snackbar.colors.background.success},danger:{backgroundColor:e.snackbar.colors.background.danger},icon:{extend:w.middleMixin,marginRight:15},content:{flexGrow:1,textAlign:"left"},button:{boxSizing:"border-box",outline:"none",flexShrink:0,border:0,borderRadius:e.snackbar.borderRadius,height:20,lineHeight:"20px",marginLeft:15,padding:"0 10px",backgroundColor:"transparent",color:e.snackbar.colors.actionButton,fontSize:e.snackbar.fontSize,textAlign:"center",textTransform:"uppercase",letterSpacing:1,cursor:"pointer",transitionDuration:".2s",transitionProperty:"background-color, border","&:hover:not(:active)":{backgroundColor:"rgba(0, 0, 0, 0.05)"},"&:focus:not(:active)":{border:"1px solid"},"&:active":{backgroundColor:"rgba(0, 0, 0, 0.1)"}},close:{composes:"$button",extend:w.middleMixin,borderRadius:"50%",width:20,padding:0,lineHeight:0},small:{padding:e.snackbar.sizes.small.padding}}}),{name:"Snackbar"}))(D)},567:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return C}));var o=t(4),r=t.n(o),i=t(6),a=t.n(i),s=t(7),l=t.n(s),c=t(8),u=t.n(c),d=t(9),p=t.n(d),f=t(10),m=t.n(f),b=t(0),h=t.n(b),k=t(125),y=t(123);function C(e){return function(n){function t(){var e,n;a()(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(n=u()(this,(e=p()(t)).call.apply(e,[this].concat(i)))).elements=[],n.state={isOpened:!1},n.renderToLayer=function(e,t){var o=Object(y.default)(),i=Object(b.cloneElement)(e,r()({},t,{key:o,isOpened:!0}));return n.elements.push(i),n.mountPortal(),i},n.unrenderAtLayer=function(e){var t=n.elements.indexOf(e);return t<0?Promise.resolve():new Promise((function(o){var r=e.props.containerRef,i=Object(b.cloneElement)(e,{isOpened:!1,containerRef:function(e){r&&r(e),o(i)}});n.elements[t]=i,n.mountPortal()})).then((function(e){n.elements=n.elements.filter((function(n){return n!==e})),0===n.elements.length&&n.unmountPortal()}))},n}return m()(t,n),l()(t,[{key:"componentWillUnmount",value:function(){this.elements=[],this.unmountPortal()}},{key:"getContentContainerNode",value:function(){return this.node||(this.node=document.createElement("div"),document.body.appendChild(this.node)),this.node}},{key:"mountPortal",value:function(){this.setState({isOpened:!0})}},{key:"unmountPortal",value:function(){this.node&&(this.setState({isOpened:!1}),document.body.removeChild(this.node),this.node=null)}},{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement(e,r()({},this.props,{renderToLayer:this.renderToLayer,unrenderAtLayer:this.unrenderAtLayer})),this.state.isOpened&&Object(k.createPortal)(h.a.createElement(h.a.Fragment,null,this.elements),this.getContentContainerNode()))}}]),t}(b.Component)}},589:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var o=t(4),r=t.n(o),i=t(23),a=t.n(i),s=t(6),l=t.n(s),c=t(7),u=t.n(c),d=t(8),p=t.n(d),f=t(9),m=t.n(f),b=t(10),h=t.n(b),k=t(0),y=t.n(k),C=t(1),v=t.n(C),g=t(567);function O(e){var n=function(n){function t(){var e,n;l()(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=p()(this,(e=m()(t)).call.apply(e,[this].concat(r)))).openSnackbar=function(e){var t={},o=function(){n.props.unrenderAtLayer(t.element)};return t.element=n.props.renderToLayer(e,{onRequestClose:o}),t.close=o,t},n.closeSnackbar=function(e){e.close()},n}return h()(t,n),u()(t,[{key:"render",value:function(){var n=this.props,t=(n.renderToLayer,n.unrenderAtLayer,a()(n,["renderToLayer","unrenderAtLayer"]));return y.a.createElement(e,r()({},t,{openSnackbar:this.openSnackbar,closeSnackbar:this.closeSnackbar}))}}]),t}(k.Component);return n.propTypes={renderToLayer:v.a.func.isRequired,unrenderAtLayer:v.a.func.isRequired},Object(g.default)(n)}}}]);