(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var o=n(26),a=n.n(o),i=n(7),r=n.n(i),l=n(8),s=n.n(l),u=n(9),c=n.n(u),p=n(10),d=n.n(p),f=n(5),h=n.n(f),m=n(0),b=n.n(m),y=n(280),v=n(529),C=n(533);var k=function(e){c()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=h()(e);if(t()){var a=h()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return d()(this,n)}}(n);function n(){var e;r()(this,n);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={inputValue:"foo@ramber.ru",baseIsOpened:!1,customIsOpened:!1},e.openPopup=function(t){e.setState(a()({},"".concat(t,"IsOpened"),!0))},e.closePopup=function(){e.setState({baseIsOpened:!1,customIsOpened:!1})},e.updateValue=function(t,n){e.setState({inputValue:n})},e}return s()(n,[{key:"render",value:function(){var e=this;return b.a.createElement("div",null,b.a.createElement(C.default,{title:"Удаление почты",showClose:!0,isOpened:this.state.baseIsOpened,okButton:b.a.createElement(y.default,{type:"primary",size:"small",onClick:this.closePopup},"Ок"),cancelButton:b.a.createElement(y.default,{type:"flat",size:"small",onClick:this.closePopup},"Нет"),onRequestClose:this.closePopup},"Вы готовы удалить почту"),b.a.createElement(C.default,{title:"Укажите почту",showClose:!0,isOpened:this.state.customIsOpened,backdropColor:"blue",okButton:b.a.createElement(y.default,{type:"primary",size:"small",onClick:this.closePopup},"Ок"),cancelButton:b.a.createElement(y.default,{type:"flat",size:"small",onClick:this.closePopup},"Отмена"),onRequestClose:this.closePopup},b.a.createElement("div",{style:{width:400}},b.a.createElement(v.default,{type:"password",autoFocus:!0,value:this.state.inputValue,onChange:this.updateValue}))),b.a.createElement("div",{style:{marginBottom:20}},b.a.createElement(y.default,{onClick:function(){return e.openPopup("base")}},"Базовый попап"),b.a.createElement(y.default,{type:"secondary",style:{marginLeft:20},onClick:function(){return e.openPopup("custom")}},"Попап произвольной ширины")),b.a.createElement("div",null,"this.state.baseIsOpened:"," ",b.a.createElement("b",null,this.state.baseIsOpened?"true":"false")),b.a.createElement("div",null,"this.state.customIsOpened:"," ",b.a.createElement("b",null,this.state.customIsOpened?"true":"false")),b.a.createElement("div",null,"this.state.inputValue: ",b.a.createElement("b",null,this.state.inputValue)))}}]),n}(m.Component)},520:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n(4),a=n.n(o),i=n(0),r=n.n(i),l=n(125),s=r.a.createElement("path",{d:"M7.5 6.58L1.742.824a.4.4 0 0 0-.565 0l-.354.354a.4.4 0 0 0 0 .565L6.581 7.5.823 13.258a.4.4 0 0 0 0 .565l.354.354a.4.4 0 0 0 .565 0L7.5 8.419l5.758 5.758a.4.4 0 0 0 .565 0l.354-.354a.4.4 0 0 0 0-.565L8.419 7.5l5.758-5.758a.4.4 0 0 0 0-.565l-.354-.354a.4.4 0 0 0-.565 0L7.5 6.581z"});function u(e){return r.a.createElement(l.default,a()({viewBox:"0 0 15 15"},e),s)}u.displayName="ClearIcon"},531:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var o=n(4),a=n.n(o),i=n(7),r=n.n(i),l=n(8),s=n.n(l),u=n(9),c=n.n(u),p=n(10),d=n.n(p),f=n(5),h=n.n(f),m=n(0),b=n.n(m),y=n(126),v=n(1),C=n.n(v);function k(e){var t,n;return n=t=function(t){c()(o,t);var n=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=h()(e);if(t()){var a=h()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return d()(this,n)}}(o);function o(){var e;r()(this,o);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={isOpened:e.props.isOpened||!1},e.onOpen=function(){e.props.onOpen()},e.onClose=function(){e.props.onClose(),e.unmountPortal()},e}return s()(o,[{key:"componentDidMount",value:function(){this.props.isOpened&&this.mountPortal()}},{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;t!==e.isOpened&&t&&this.mountPortal()}},{key:"componentWillUnmount",value:function(){this.unmountPortal()}},{key:"getContentContainerNode",value:function(){return this.node||(this.node=document.createElement("div"),this.node.style.position="absolute",this.node.style.zIndex=this.props.zIndex,this.props.containerRef(this.node),document.body.appendChild(this.node)),this.node}},{key:"mountPortal",value:function(){this.setState({isOpened:!0})}},{key:"unmountPortal",value:function(){this.node&&(this.props.containerRef(),this.setState({isOpened:!1}),document.body.removeChild(this.node),this.node=null)}},{key:"renderContent",value:function(){return b.a.createElement(e,a()({},this.props,{onOpen:this.onOpen,onClose:this.onClose}))}},{key:"render",value:function(){return this.state.isOpened?Object(y.createPortal)(this.renderContent(),this.getContentContainerNode()):null}}]),o}(m.Component),t.propTypes={isOpened:C.a.bool,zIndex:C.a.number,onOpen:C.a.func,onClose:C.a.func,containerRef:C.a.func},t.defaultProps={isOpened:!1,onOpen:function(){},onClose:function(){},containerRef:function(){}},n}},533:function(e,t,n){"use strict";n.r(t);var o=n(7),a=n.n(o),i=n(8),r=n.n(i),l=n(48),s=n.n(l),u=n(9),c=n.n(u),p=n(10),d=n.n(p),f=n(5),h=n.n(f),m=n(4),b=n.n(m),y=n(0),v=n.n(y),C=n(1),k=n.n(C),O=n(18),g=n.n(O),E=n(520),w=n(284),x=n(286),R=n(285),P=n(531),I=n(222),S=n(54),D=n(219),N=n(58),z=n(221),V=n(11),j=n(123),W=n(227);Object(j.subscribeFocusEvents)();var B=v.a.createElement(E.default,{size:15,color:"currentColor"}),L=function(e){c()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=h()(e);if(t()){var a=h()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return d()(this,n)}}(n);function n(){var e;a()(this,n);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).onWillVisible=function(){window.addEventListener("keydown",e.onKeyDown)},e.onWillInvisible=function(){window.removeEventListener("keydown",e.onKeyDown)},e.onKeyDown=function(t){var n=s()(e),o=n.closeOnEsc,a=n.onRequestClose;o&&t.keyCode===S.ESCAPE&&a()},e.getMemoizedRef=Object(W.default)(),e.renderContent=function(t){var n=e.props,o=n.children,a=n.className,i=n.style,r=n.title,l=n.titleStyle,s=n.titleClassName,u=n.buttonsContainerStyle,c=n.buttonsContainerClassName,p=n.classes,d=n.showClose,f=n.okButton,h=n.tabIndex,m=n.cancelButton,b=n.onRequestClose;return v.a.createElement(R.default,{tabIndex:h},(function(n){return v.a.createElement("div",{style:i,className:g()(p.popup,a),ref:e.getMemoizedRef(n,t)},d&&v.a.createElement("button",{className:p.close,onClick:b},B),r&&v.a.createElement("header",{style:l,className:g()(p.title,s)},r),o,(f||m)&&v.a.createElement("footer",{style:u,className:g()(p.buttons,c)},f,m))}))},e}return r()(n,[{key:"componentWillUnmount",value:function(){this.onWillInvisible()}},{key:"renderPopup",value:function(){var e=this,t=this.props,n=t.closeOnClickOutside,o=t.onRequestClose;return n?v.a.createElement(x.default,{handler:o},(function(t){return e.renderContent(t)})):this.renderContent()}},{key:"render",value:function(){var e=this,t=this.props,n=t.isOpened,o=t.backdropClassName,a=t.backdropStyle,i=t.backdropColor,r=t.theme,l=t.classes,s=t.onOpen,u=t.onClose;return v.a.createElement(w.default,{isVisible:n,animationDuration:r.popup.animationDuration,onWillVisible:this.onWillVisible,onVisible:s,onWillInvisible:this.onWillInvisible,onInvisible:u},(function(t){var n=t.isVisible;return v.a.createElement("div",{ref:function(t){e.backdrop=t},style:a,className:g()(l.backdrop,l["backdrop-".concat(i)],o,n&&l.isVisible)},e.renderPopup())}))}}]),n}(y.PureComponent);L.propTypes={className:k.a.string,style:k.a.object,backdropClassName:k.a.string,backdropStyle:k.a.object,backdropColor:k.a.oneOf(["black","blue"]),children:k.a.node,title:k.a.node,titleClassName:k.a.string,titleStyle:k.a.object,buttonsContainerClassName:k.a.string,buttonsContainerStyle:k.a.object,isOpened:k.a.bool,tabIndex:k.a.number,okButton:k.a.node,cancelButton:k.a.node,showClose:k.a.bool,closeOnEsc:k.a.bool,closeOnClickOutside:k.a.bool,onOpen:k.a.func,onRequestClose:k.a.func,onClose:k.a.func},L.defaultProps={isOpened:!1,showClose:!0,closeOnEsc:!0,closeOnClickOutside:!0,backdropColor:"black",tabIndex:0,onOpen:function(){},onRequestClose:function(){},onClose:function(){}},t.default=Object(z.default)(Object(I.default)(D.POPUP_ZINDEX),P.default,Object(N.default)((function(e){return{backdrop:{extend:[V.isolateMixin,V.middleMixin],fontFamily:e.fontFamily,position:"fixed",top:0,left:0,right:0,bottom:0,paddingTop:20,paddingBottom:20,textAlign:"center",overflowY:"auto",overflowX:"hidden",marginTop:-10,opacity:0,transitionDuration:e.popup.animationDuration,transitionProperty:"margin-top, opacity"},"backdrop-black":{backgroundColor:e.popup.colors.backdrop.default},"backdrop-blue":{backgroundColor:e.popup.colors.backdrop.blue},isVisible:{marginTop:0,opacity:1},popup:b()({position:"relative",display:"inline-block",boxSizing:"border-box",borderRadius:e.popup.borderRadius,boxShadow:e.popup.boxShadow,padding:[20,25,25],color:e.popup.colors.text,minWidth:300,maxWidth:"calc(100% - 20px)",marginLeft:10,marginRight:10,backgroundColor:e.popup.colors.background,fontSize:e.popup.text.fontSize,lineHeight:"".concat(e.popup.text.lineHeight,"px"),textAlign:"left",outline:"none"},Object(V.ifDesktop)({minWidth:350,maxWidth:"auto"})),title:{marginBottom:20,paddingRight:25,fontSize:e.popup.title.fontSize,lineHeight:"".concat(e.popup.title.lineHeight,"px"),fontWeight:500},close:b()({position:"absolute",top:25,right:25,border:0,margin:0,padding:0,width:15,height:15,background:"transparent",outline:0,color:e.popup.colors.close.default,cursor:"pointer","&:hover":{color:e.popup.colors.close.hover}},Object(V.focusSourceMixin)("other","&:focus",{color:e.popup.colors.close.hover})),buttons:{display:"flex",justifyContent:"space-between",marginTop:30,"& > *":{flexGrow:1,width:"50%"},"& > * + *":b()({marginLeft:10},Object(V.ifDesktop)({marginLeft:20}))}}}),{name:"Popup"}))(L)}}]);