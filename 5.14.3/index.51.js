(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var o=n(7),r=n.n(o),i=n(8),a=n.n(i),c=n(9),s=n.n(c),u=n(10),l=n.n(u),f=n(5),p=n.n(f),d=n(0),m=n.n(d),h=n(289),b=n(548),y=n(598);var v=m.a.createElement(b.default,{positionY:"top",showClose:!0,type:"danger"},"При удалении почты произошла ошибка"),k=m.a.createElement(b.default,{positionY:"top",positionX:"left",autoCloseDuration:3e3,size:"small",type:"danger"},"Я маленький снэкбар"),g=function(e){s()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=p()(e);if(t()){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l()(this,n)}}(n);function n(){var e;r()(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).openAlert=function(){e.props.openSnackbar(v)},e.openConfirm=function(){var t=e.props.openSnackbar(m.a.createElement(b.default,{positionX:"right",autoCloseDuration:0,actionButton:"Ok",onAction:function(){return t.close()}},"Вы готовы удалить почту?"))},e.openSnackbar=function(){e.props.openSnackbar(k)},e}return a()(n,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{style:{marginBottom:20}},m.a.createElement(h.default,{type:"danger",onClick:this.openAlert},"Алерт"),m.a.createElement(h.default,{type:"outline",style:{marginLeft:20},onClick:this.openConfirm},"Подтверждение"),m.a.createElement(h.default,{type:"primary",style:{marginLeft:20},onClick:this.openSnackbar},"Маленький снэкбар")))}}]),n}(d.Component),C=Object(y.default)(g),O=m.a.createElement(C,null);function R(){return O}},539:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var o=n(4),r=n.n(o),i=n(7),a=n.n(i),c=n(8),s=n.n(c),u=n(9),l=n.n(u),f=n(10),p=n.n(f),d=n(5),m=n.n(d),h=n(0),b=n.n(h),y=n(107),v=n(1),k=n.n(v);function g(e){var t,n;return n=t=function(t){l()(o,t);var n=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=m()(e);if(t()){var r=m()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p()(this,n)}}(o);function o(){var e;a()(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={isOpened:e.props.isOpened||!1},e.onOpen=function(){e.props.onOpen()},e.onClose=function(){e.props.onClose(),e.unmountPortal()},e}return s()(o,[{key:"componentDidMount",value:function(){this.props.isOpened&&this.mountPortal()}},{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;t!==e.isOpened&&t&&this.mountPortal()}},{key:"componentWillUnmount",value:function(){this.unmountPortal()}},{key:"getContentContainerNode",value:function(){return this.node||(this.node=document.createElement("div"),this.node.style.position="absolute",this.node.style.zIndex=this.props.zIndex,this.props.containerRef(this.node),document.body.appendChild(this.node)),this.node}},{key:"mountPortal",value:function(){this.setState({isOpened:!0})}},{key:"unmountPortal",value:function(){this.node&&(this.props.containerRef(),this.setState({isOpened:!1}),document.body.removeChild(this.node),this.node=null)}},{key:"renderContent",value:function(){return b.a.createElement(e,r()({},this.props,{onOpen:this.onOpen,onClose:this.onClose}))}},{key:"render",value:function(){return this.state.isOpened?Object(y.createPortal)(this.renderContent(),this.getContentContainerNode()):null}}]),o}(h.Component),t.propTypes={isOpened:k.a.bool,zIndex:k.a.number,onOpen:k.a.func,onClose:k.a.func,containerRef:k.a.func},t.defaultProps={isOpened:!1,onOpen:function(){},onClose:function(){},containerRef:function(){}},n}},548:function(e,t,n){"use strict";n.r(t);var o=n(7),r=n.n(o),i=n(8),a=n.n(i),c=n(9),s=n.n(c),u=n(10),l=n.n(u),f=n(5),p=n.n(f),d=n(4),m=n.n(d),h=n(0),b=n.n(h),y=n(1),v=n.n(y),k=n(19),g=n.n(k),C=n(600),O=n(292),R=n(294),x=n(539),D=n(226),E=n(224),S=n(59),P=n(223),L=n(11);var A=function(e){s()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=p()(e);if(t()){var r=p()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l()(this,n)}}(n);function n(){var e;r()(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).onWillVisible=function(){e.props.autoCloseDuration&&(e.autoCloseTimeout=setTimeout((function(){e.props.onRequestClose()}),e.props.autoCloseDuration))},e.onWillInvisible=function(){clearTimeout(e.autoCloseTimeout)},e.onClickOutside=function(){e.props.isOpened&&e.props.onRequestClose()},e.renderContent=function(t){var n=e.props,o=n.isOpened,r=n.children,i=n.className,a=n.positionX,c=n.positionY,s=n.type,u=n.style,l=n.theme,f=n.icon,p=n.showClose,d=n.actionButton,m=n.onAction,y=n.onRequestClose,v=n.onClose,k=n.size,R=n.classes;return b.a.createElement(O.default,{isVisible:o,animationDuration:l.snackbar.animationDuration,onWillVisible:e.onWillVisible,onWillInvisible:e.onWillInvisible,onInvisible:v},(function(e){var n=e.isVisible;return b.a.createElement("div",{ref:t,style:u,className:g()(R.snackbar,R[a],R[c],R[s],i,n&&R.isVisible,"small"===k&&R.small)},f&&b.a.createElement("div",{className:R.icon},Object(h.cloneElement)(f,{color:f.props.color||l.snackbar.colors.text})),b.a.createElement("div",{className:R.content},r),d&&b.a.createElement("button",{type:"button",className:R.button,onClick:m},d),p&&b.a.createElement("button",{type:"button",className:R.close,onClick:y},b.a.createElement(C.default,{size:10,color:l.snackbar.colors.text})))}))},e}return a()(n,[{key:"componentWillUnmount",value:function(){this.onWillInvisible()}},{key:"render",value:function(){var e=this;return this.props.closeOnClickOutside?b.a.createElement(R.default,{handler:this.onClickOutside},(function(t){return e.renderContent(t)})):this.renderContent()}}]),n}(h.PureComponent);A.propTypes={className:v.a.string,style:v.a.object,children:v.a.node.isRequired,isOpened:v.a.bool,type:v.a.oneOf(["main","primary","success","danger"]),icon:v.a.node,actionButton:v.a.string,positionX:v.a.oneOf(["left","center","right"]),positionY:v.a.oneOf(["top","bottom"]),showClose:v.a.bool,closeOnClickOutside:v.a.bool,autoCloseDuration:v.a.number,onAction:v.a.func,onRequestClose:v.a.func,onClose:v.a.func,size:v.a.oneOf(["small","medium"])},A.defaultProps={type:"main",isOpened:!1,positionX:"center",positionY:"bottom",showClose:!1,closeOnClickOutside:!1,autoCloseDuration:4e3,onAction:function(){},onRequestClose:function(){},size:"medium"},t.default=Object(P.default)(Object(D.default)(E.SNACKBAR_ZINDEX),x.default,Object(S.default)((function(e){return{snackbar:m()({extend:[L.isolateMixin,L.middleMixin],fontFamily:e.fontFamily,position:"fixed",boxSizing:"border-box",display:"flex",justifyContent:"flex-start",alignItems:"center",padding:e.snackbar.sizes.medium.padding,width:"100%",lineHeight:e.snackbar.lineHeight,color:e.snackbar.colors.text,fontSize:e.snackbar.fontSize,fontWeight:e.snackbar.fontWeight,opacity:0,transitionDuration:e.snackbar.animationDuration,transitionProperty:"top, bottom, opacity"},Object(L.ifDesktop)({width:"auto",minWidth:350,maxWidth:e.snackbar.maxWidth,borderRadius:e.snackbar.borderRadius})),top:m()({top:-10},Object(L.ifDesktop)({top:0}),{"&$isVisible":m()({top:0},Object(L.ifDesktop)({top:10}))}),bottom:m()({bottom:-10},Object(L.ifDesktop)({bottom:0}),{"&$isVisible":m()({bottom:0},Object(L.ifDesktop)({bottom:10}))}),isVisible:{opacity:1},left:m()({left:0},Object(L.ifDesktop)({left:10})),center:{left:"50%",transform:"translateX(-50%)"},right:m()({right:0},Object(L.ifDesktop)({right:10})),main:{backgroundColor:e.snackbar.colors.background.main},primary:{backgroundColor:e.snackbar.colors.background.primary},success:{backgroundColor:e.snackbar.colors.background.success},danger:{backgroundColor:e.snackbar.colors.background.danger},icon:{extend:L.middleMixin,marginRight:15},content:{flexGrow:1,textAlign:"left"},button:{boxSizing:"border-box",outline:"none",flexShrink:0,border:0,borderRadius:e.snackbar.borderRadius,height:20,lineHeight:"20px",marginLeft:15,padding:"0 10px",backgroundColor:"transparent",color:e.snackbar.colors.actionButton,fontSize:e.snackbar.fontSize,fontWeight:e.snackbar.fontWeight,textAlign:"center",textTransform:"uppercase",letterSpacing:1,cursor:"pointer",transitionDuration:".2s",transitionProperty:"background-color, border","&:hover:not(:active)":{backgroundColor:"rgba(0, 0, 0, 0.05)"},"&:focus:not(:active)":{border:"1px solid"},"&:active":{backgroundColor:"rgba(0, 0, 0, 0.1)"}},close:{composes:"$button",extend:L.middleMixin,borderRadius:"50%",width:20,padding:0,lineHeight:0},small:{padding:e.snackbar.sizes.small.padding}}}),{name:"Snackbar"}))(A)},574:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var o=n(4),r=n.n(o),i=n(7),a=n.n(i),c=n(8),s=n.n(c),u=n(9),l=n.n(u),f=n(10),p=n.n(f),d=n(5),m=n.n(d),h=n(0),b=n.n(h),y=n(107),v=n(127);function k(e){return function(t){l()(o,t);var n=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=m()(e);if(t()){var r=m()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p()(this,n)}}(o);function o(){var e;a()(this,o);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(e=n.call.apply(n,[this].concat(i))).elements=[],e.state={isOpened:!1},e.renderToLayer=function(t,n){var o=Object(v.default)(),i=Object(h.cloneElement)(t,r()({},n,{key:o,isOpened:!0}));return e.elements.push(i),e.mountPortal(),i},e.unrenderAtLayer=function(t){var n=e.elements.indexOf(t);return n<0?Promise.resolve():new Promise((function(o){var r=t.props.containerRef,i=Object(h.cloneElement)(t,{isOpened:!1,containerRef:function(e){r&&r(e),o(i)}});e.elements[n]=i,e.mountPortal()})).then((function(t){e.elements=e.elements.filter((function(e){return e!==t})),0===e.elements.length&&e.unmountPortal()}))},e}return s()(o,[{key:"componentWillUnmount",value:function(){this.elements=[],this.unmountPortal()}},{key:"getContentContainerNode",value:function(){return this.node||(this.node=document.createElement("div"),document.body.appendChild(this.node)),this.node}},{key:"mountPortal",value:function(){this.setState({isOpened:!0})}},{key:"unmountPortal",value:function(){this.node&&(this.setState({isOpened:!1}),document.body.removeChild(this.node),this.node=null)}},{key:"render",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(e,r()({},this.props,{renderToLayer:this.renderToLayer,unrenderAtLayer:this.unrenderAtLayer})),this.state.isOpened&&Object(y.createPortal)(b.a.createElement(b.a.Fragment,null,this.elements),this.getContentContainerNode()))}}]),o}(h.Component)}},598:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var o=n(4),r=n.n(o),i=n(17),a=n.n(i),c=n(7),s=n.n(c),u=n(8),l=n.n(u),f=n(9),p=n.n(f),d=n(10),m=n.n(d),h=n(5),b=n.n(h),y=n(0),v=n.n(y),k=n(1),g=n.n(k),C=n(574);function O(e){var t=function(t){p()(o,t);var n=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=b()(e);if(t()){var r=b()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m()(this,n)}}(o);function o(){var e;s()(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).openSnackbar=function(t){var n={},o=function(){e.props.unrenderAtLayer(n.element)};return n.element=e.props.renderToLayer(t,{onRequestClose:o}),n.close=o,n},e.closeSnackbar=function(e){e.close()},e}return l()(o,[{key:"render",value:function(){var t=this.props,n=(t.renderToLayer,t.unrenderAtLayer,a()(t,["renderToLayer","unrenderAtLayer"]));return v.a.createElement(e,r()({},n,{openSnackbar:this.openSnackbar,closeSnackbar:this.closeSnackbar}))}}]),o}(y.Component);return t.propTypes={renderToLayer:g.a.func.isRequired,unrenderAtLayer:g.a.func.isRequired},Object(C.default)(t)}},600:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var o=n(4),r=n.n(o),i=n(0),a=n.n(i),c=n(128),s=a.a.createElement("path",{d:"M0 15V0v15zM15 0v15V0zM8.349 7.5l5.222 5.222c.195.195.195.512 0 .707l-.142.142c-.195.195-.512.195-.707 0L7.5 8.349l-5.222 5.222c-.195.195-.512.195-.707 0l-.142-.142c-.195-.195-.195-.512 0-.707L6.651 7.5 1.429 2.278c-.195-.195-.195-.512 0-.707l.142-.142c.195-.195.512-.195.707 0L7.5 6.651l5.222-5.222c.195-.195.512-.195.707 0l.142.142c.195.195.195.512 0 .707L8.349 7.5z",fillRule:"evenodd"}),u=a.a.createElement("path",{d:"M0 20V0m20 0v20M16.177 4.884L11.061 10l5.116 5.116c.195.195.195.512 0 .707l-.354.354c-.195.195-.512.195-.707 0L10 11.061l-5.116 5.116c-.195.195-.512.195-.707 0l-.354-.354c-.195-.195-.195-.512 0-.707L8.939 10 3.823 4.884c-.195-.195-.195-.512 0-.707l.354-.354c.195-.195.512-.195.707 0L10 8.939l5.116-5.116c.195-.195.512-.195.707 0l.354.354c.195.195.195.512 0 .707",fillRule:"evenodd"});function l(e){return a.a.createElement(c.default,r()({viewBox:function(e){return e<20?"0 0 15 15":"0 0 20 20"}},e),(function(e){return e<20?s:u}))}l.displayName="ClearIcon"}}]);