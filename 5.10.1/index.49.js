(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var o=n(7),r=n.n(o),i=n(8),a=n.n(i),l=n(9),c=n.n(l),u=n(10),s=n.n(u),p=n(5),f=n.n(p),d=n(0),h=n.n(d),m=n(289),y=n(542),v=n(592);var b=function(e){c()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=f()(e);if(t()){var r=f()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s()(this,n)}}(n);function n(){var e;r()(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={latestEvent:"none"},e.openAlert=function(){e.alertPopup=e.props.openPopup((function(e){return h.a.createElement(y.default,{title:"Ошибка",showClose:!0,okButton:h.a.createElement(m.default,{type:"primary",size:"small",onClick:e},"Ок")},"При удалении почты произошла ошибка")})),e.alertPopup.opened.then((function(){e.setState({latestEvent:"alert opened"})})),e.alertPopup.closed.then((function(){e.setState({latestEvent:"alert closed"})}),(function(){e.setState({latestEvent:"alert closed"})}))},e.openConfirm=function(){e.confirmPopup=e.props.openPopup((function(e,t){return h.a.createElement(y.default,{title:"Удаление почты",showClose:!0,okButton:h.a.createElement(m.default,{type:"primary",size:"small",onClick:e},"Ок"),cancelButton:h.a.createElement(m.default,{type:"flat",size:"small",onClick:t},"Нет")},"Вы готовы удалить почту")})),e.confirmPopup.opened.then((function(){e.setState({latestEvent:"confirm opened"})})),e.confirmPopup.closed.then((function(){e.setState({latestEvent:"confirm closed with resolve"})}),(function(){e.setState({latestEvent:"confirm closed with reject"})}))},e}return a()(n,[{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement("div",{style:{marginBottom:20}},h.a.createElement(m.default,{onClick:this.openAlert},"Алерт"),h.a.createElement(m.default,{type:"outline",style:{marginLeft:20},onClick:this.openConfirm},"Подтверждение")),h.a.createElement("div",null,"this.state.latestEvent: ",h.a.createElement("b",null,this.state.latestEvent)))}}]),n}(d.Component),C=Object(v.default)(b),k=h.a.createElement(C,null);function g(){return k}},539:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var o=n(4),r=n.n(o),i=n(7),a=n.n(i),l=n(8),c=n.n(l),u=n(9),s=n.n(u),p=n(10),f=n.n(p),d=n(5),h=n.n(d),m=n(0),y=n.n(m),v=n(107),b=n(1),C=n.n(b);function k(e){var t,n;return n=t=function(t){s()(o,t);var n=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=h()(e);if(t()){var r=h()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f()(this,n)}}(o);function o(){var e;a()(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={isOpened:e.props.isOpened||!1},e.onOpen=function(){e.props.onOpen()},e.onClose=function(){e.props.onClose(),e.unmountPortal()},e}return c()(o,[{key:"componentDidMount",value:function(){this.props.isOpened&&this.mountPortal()}},{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;t!==e.isOpened&&t&&this.mountPortal()}},{key:"componentWillUnmount",value:function(){this.unmountPortal()}},{key:"getContentContainerNode",value:function(){return this.node||(this.node=document.createElement("div"),this.node.style.position="absolute",this.node.style.zIndex=this.props.zIndex,this.props.containerRef(this.node),document.body.appendChild(this.node)),this.node}},{key:"mountPortal",value:function(){this.setState({isOpened:!0})}},{key:"unmountPortal",value:function(){this.node&&(this.props.containerRef(),this.setState({isOpened:!1}),document.body.removeChild(this.node),this.node=null)}},{key:"renderContent",value:function(){return y.a.createElement(e,r()({},this.props,{onOpen:this.onOpen,onClose:this.onClose}))}},{key:"render",value:function(){return this.state.isOpened?Object(v.createPortal)(this.renderContent(),this.getContentContainerNode()):null}}]),o}(m.Component),t.propTypes={isOpened:C.a.bool,zIndex:C.a.number,onOpen:C.a.func,onClose:C.a.func,containerRef:C.a.func},t.defaultProps={isOpened:!1,onOpen:function(){},onClose:function(){},containerRef:function(){}},n}},542:function(e,t,n){"use strict";n.r(t);var o=n(7),r=n.n(o),i=n(8),a=n.n(i),l=n(48),c=n.n(l),u=n(9),s=n.n(u),p=n(10),f=n.n(p),d=n(5),h=n.n(d),m=n(4),y=n.n(m),v=n(0),b=n.n(v),C=n(1),k=n.n(C),g=n(18),O=n.n(g),E=n(600),P=n(292),R=n(294),w=n(293),x=n(539),S=n(226),L=n(55),D=n(224),j=n(59),N=n(223),A=n(11),z=n(126),W=n(231);Object(z.subscribeFocusEvents)();var I=b.a.createElement(E.default,{size:15,color:"currentColor"}),T=function(e){s()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=h()(e);if(t()){var r=h()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f()(this,n)}}(n);function n(){var e;r()(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).onWillVisible=function(){window.addEventListener("keydown",e.onKeyDown)},e.onWillInvisible=function(){window.removeEventListener("keydown",e.onKeyDown)},e.onKeyDown=function(t){var n=c()(e),o=n.closeOnEsc,r=n.onRequestClose;o&&t.keyCode===L.ESCAPE&&r()},e.getMemoizedRef=Object(W.default)(),e.renderContent=function(t){var n=e.props,o=n.children,r=n.className,i=n.style,a=n.title,l=n.titleStyle,c=n.titleClassName,u=n.buttonsContainerStyle,s=n.buttonsContainerClassName,p=n.classes,f=n.showClose,d=n.okButton,h=n.tabIndex,m=n.cancelButton,y=n.onRequestClose;return b.a.createElement(w.default,{tabIndex:h},(function(n){return b.a.createElement("div",{style:i,className:O()(p.popup,r),ref:e.getMemoizedRef(n,t)},f&&b.a.createElement("button",{className:p.close,onClick:y},I),a&&b.a.createElement("header",{style:l,className:O()(p.title,c)},a),o,(d||m)&&b.a.createElement("footer",{style:u,className:O()(p.buttons,s)},d,m))}))},e}return a()(n,[{key:"componentWillUnmount",value:function(){this.onWillInvisible()}},{key:"renderPopup",value:function(){var e=this,t=this.props,n=t.closeOnClickOutside,o=t.onRequestClose;return n?b.a.createElement(R.default,{handler:o},(function(t){return e.renderContent(t)})):this.renderContent()}},{key:"render",value:function(){var e=this,t=this.props,n=t.isOpened,o=t.backdropClassName,r=t.backdropStyle,i=t.backdropColor,a=t.theme,l=t.classes,c=t.onOpen,u=t.onClose;return b.a.createElement(P.default,{isVisible:n,animationDuration:a.popup.animationDuration,onWillVisible:this.onWillVisible,onVisible:c,onWillInvisible:this.onWillInvisible,onInvisible:u},(function(t){var n=t.isVisible;return b.a.createElement("div",{ref:function(t){e.backdrop=t},style:r,className:O()(l.backdrop,l["backdrop-".concat(i)],o,n&&l.isVisible)},e.renderPopup())}))}}]),n}(v.PureComponent);T.propTypes={className:k.a.string,style:k.a.object,backdropClassName:k.a.string,backdropStyle:k.a.object,backdropColor:k.a.oneOf(["black","blue"]),children:k.a.node,title:k.a.node,titleClassName:k.a.string,titleStyle:k.a.object,buttonsContainerClassName:k.a.string,buttonsContainerStyle:k.a.object,isOpened:k.a.bool,tabIndex:k.a.number,okButton:k.a.node,cancelButton:k.a.node,showClose:k.a.bool,closeOnEsc:k.a.bool,closeOnClickOutside:k.a.bool,onOpen:k.a.func,onRequestClose:k.a.func,onClose:k.a.func},T.defaultProps={isOpened:!1,showClose:!0,closeOnEsc:!0,closeOnClickOutside:!0,backdropColor:"black",tabIndex:0,onOpen:function(){},onRequestClose:function(){},onClose:function(){}},t.default=Object(N.default)(Object(S.default)(D.POPUP_ZINDEX),x.default,Object(j.default)((function(e){return{backdrop:{extend:[A.isolateMixin,A.middleMixin],fontFamily:e.fontFamily,position:"fixed",top:0,left:0,right:0,bottom:0,paddingTop:20,paddingBottom:20,textAlign:"center",overflowY:"auto",overflowX:"hidden",marginTop:-10,opacity:0,transitionDuration:e.popup.animationDuration,transitionProperty:"margin-top, opacity"},"backdrop-black":{backgroundColor:e.popup.colors.backdrop.default},"backdrop-blue":{backgroundColor:e.popup.colors.backdrop.blue},isVisible:{marginTop:0,opacity:1},popup:y()({position:"relative",display:"inline-block",boxSizing:"border-box",borderRadius:e.popup.borderRadius,boxShadow:e.popup.boxShadow,padding:[20,25,25],color:e.popup.colors.text,minWidth:300,maxWidth:"calc(100% - 20px)",marginLeft:10,marginRight:10,backgroundColor:e.popup.colors.background,fontSize:e.popup.text.fontSize,lineHeight:"".concat(e.popup.text.lineHeight,"px"),textAlign:"left",outline:"none"},Object(A.ifDesktop)({minWidth:350,maxWidth:"auto"})),title:{marginBottom:20,paddingRight:25,fontSize:e.popup.title.fontSize,lineHeight:"".concat(e.popup.title.lineHeight,"px"),fontWeight:500},close:y()({position:"absolute",top:25,right:25,border:0,margin:0,padding:0,width:15,height:15,background:"transparent",outline:0,color:e.popup.colors.close.default,cursor:"pointer","&:hover":{color:e.popup.colors.close.hover}},Object(A.focusSourceMixin)("other","&:focus",{color:e.popup.colors.close.hover})),buttons:{display:"flex",justifyContent:"space-between",marginTop:30,"& > *":{flexGrow:1,width:"50%"},"& > * + *":y()({marginLeft:10},Object(A.ifDesktop)({marginLeft:20}))}}}),{name:"Popup"}))(T)},574:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var o=n(4),r=n.n(o),i=n(7),a=n.n(i),l=n(8),c=n.n(l),u=n(9),s=n.n(u),p=n(10),f=n.n(p),d=n(5),h=n.n(d),m=n(0),y=n.n(m),v=n(107),b=n(127);function C(e){return function(t){s()(o,t);var n=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=h()(e);if(t()){var r=h()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f()(this,n)}}(o);function o(){var e;a()(this,o);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return(e=n.call.apply(n,[this].concat(i))).elements=[],e.state={isOpened:!1},e.renderToLayer=function(t,n){var o=Object(b.default)(),i=Object(m.cloneElement)(t,r()({},n,{key:o,isOpened:!0}));return e.elements.push(i),e.mountPortal(),i},e.unrenderAtLayer=function(t){var n=e.elements.indexOf(t);return n<0?Promise.resolve():new Promise((function(o){var r=t.props.containerRef,i=Object(m.cloneElement)(t,{isOpened:!1,containerRef:function(e){r&&r(e),o(i)}});e.elements[n]=i,e.mountPortal()})).then((function(t){e.elements=e.elements.filter((function(e){return e!==t})),0===e.elements.length&&e.unmountPortal()}))},e}return c()(o,[{key:"componentWillUnmount",value:function(){this.elements=[],this.unmountPortal()}},{key:"getContentContainerNode",value:function(){return this.node||(this.node=document.createElement("div"),document.body.appendChild(this.node)),this.node}},{key:"mountPortal",value:function(){this.setState({isOpened:!0})}},{key:"unmountPortal",value:function(){this.node&&(this.setState({isOpened:!1}),document.body.removeChild(this.node),this.node=null)}},{key:"render",value:function(){return y.a.createElement(y.a.Fragment,null,y.a.createElement(e,r()({},this.props,{renderToLayer:this.renderToLayer,unrenderAtLayer:this.unrenderAtLayer})),this.state.isOpened&&Object(v.createPortal)(y.a.createElement(y.a.Fragment,null,this.elements),this.getContentContainerNode()))}}]),o}(m.Component)}},592:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var o=n(4),r=n.n(o),i=n(23),a=n.n(i),l=n(7),c=n.n(l),u=n(8),s=n.n(u),p=n(9),f=n.n(p),d=n(10),h=n.n(d),m=n(5),y=n.n(m),v=n(0),b=n.n(v),C=n(1),k=n.n(C),g=n(574);function O(e){var t=function(t){f()(o,t);var n=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=y()(e);if(t()){var r=y()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h()(this,n)}}(o);function o(){var e;c()(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).openPopup=function(t){var n,o,r,i={};return i.opened=new Promise((function(e){n=e})),i.closed=new Promise((function(t,n){o=function(n){e.props.unrenderAtLayer(i.element).then((function(){t(n)}))},r=function(t){e.props.unrenderAtLayer(i.element).then((function(){n(t)}))}})),i.element=e.props.renderToLayer(t(o,r),{onOpen:n,onRequestClose:r}),i.close=r,i},e.closePopup=function(e){e.close()},e}return s()(o,[{key:"render",value:function(){var t=this.props,n=(t.renderToLayer,t.unrenderAtLayer,a()(t,["renderToLayer","unrenderAtLayer"]));return b.a.createElement(e,r()({},n,{openPopup:this.openPopup,closePopup:this.closePopup}))}}]),o}(v.Component);return t.propTypes={renderToLayer:k.a.func.isRequired,unrenderAtLayer:k.a.func.isRequired},Object(g.default)(t)}},600:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var o=n(4),r=n.n(o),i=n(0),a=n.n(i),l=n(128),c=a.a.createElement("path",{d:"M0 15V0v15zM15 0v15V0zM8.349 7.5l5.222 5.222c.195.195.195.512 0 .707l-.142.142c-.195.195-.512.195-.707 0L7.5 8.349l-5.222 5.222c-.195.195-.512.195-.707 0l-.142-.142c-.195-.195-.195-.512 0-.707L6.651 7.5 1.429 2.278c-.195-.195-.195-.512 0-.707l.142-.142c.195-.195.512-.195.707 0L7.5 6.651l5.222-5.222c.195-.195.512-.195.707 0l.142.142c.195.195.195.512 0 .707L8.349 7.5z",fillRule:"evenodd"}),u=a.a.createElement("path",{d:"M0 20V0m20 0v20M16.177 4.884L11.061 10l5.116 5.116c.195.195.195.512 0 .707l-.354.354c-.195.195-.512.195-.707 0L10 11.061l-5.116 5.116c-.195.195-.512.195-.707 0l-.354-.354c-.195-.195-.195-.512 0-.707L8.939 10 3.823 4.884c-.195-.195-.195-.512 0-.707l.354-.354c.195-.195.512-.195.707 0L10 8.939l5.116-5.116c.195-.195.512-.195.707 0l.354.354c.195.195.195.512 0 .707",fillRule:"evenodd"});function s(e){return a.a.createElement(l.default,r()({viewBox:function(e){return e<20?"0 0 15 15":"0 0 20 20"}},e),(function(e){return e<20?c:u}))}s.displayName="ClearIcon"}}]);