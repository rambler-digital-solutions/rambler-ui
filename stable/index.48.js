(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var o=t(6),r=t.n(o),i=t(7),a=t.n(i),l=t(8),s=t.n(l),u=t(9),c=t.n(u),p=t(10),d=t.n(p),f=t(0),m=t.n(f),h=t(280),b=t(533),y=t(587),v=function(e){function n(){var e,t;r()(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=s()(this,(e=c()(n)).call.apply(e,[this].concat(i)))).state={latestEvent:"none"},t.openAlert=function(){t.alertPopup=t.props.openPopup((function(e){return m.a.createElement(b.default,{title:"Ошибка",showClose:!0,okButton:m.a.createElement(h.default,{type:"primary",size:"small",onClick:e},"Ок")},"При удалении почты произошла ошибка")})),t.alertPopup.opened.then((function(){t.setState({latestEvent:"alert opened"})})),t.alertPopup.closed.then((function(){t.setState({latestEvent:"alert closed"})}),(function(){t.setState({latestEvent:"alert closed"})}))},t.openConfirm=function(){t.confirmPopup=t.props.openPopup((function(e,n){return m.a.createElement(b.default,{title:"Удаление почты",showClose:!0,okButton:m.a.createElement(h.default,{type:"primary",size:"small",onClick:e},"Ок"),cancelButton:m.a.createElement(h.default,{type:"flat",size:"small",onClick:n},"Нет")},"Вы готовы удалить почту")})),t.confirmPopup.opened.then((function(){t.setState({latestEvent:"confirm opened"})})),t.confirmPopup.closed.then((function(){t.setState({latestEvent:"confirm closed with resolve"})}),(function(){t.setState({latestEvent:"confirm closed with reject"})}))},t}return d()(n,e),a()(n,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{style:{marginBottom:20}},m.a.createElement(h.default,{onClick:this.openAlert},"Алерт"),m.a.createElement(h.default,{type:"outline",style:{marginLeft:20},onClick:this.openConfirm},"Подтверждение")),m.a.createElement("div",null,"this.state.latestEvent: ",m.a.createElement("b",null,this.state.latestEvent)))}}]),n}(f.Component),C=Object(y.default)(v),k=m.a.createElement(C,null);function O(){return k}},520:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var o=t(4),r=t.n(o),i=t(0),a=t.n(i),l=t(124),s=a.a.createElement("path",{d:"M7.5 6.58L1.742.824a.4.4 0 0 0-.565 0l-.354.354a.4.4 0 0 0 0 .565L6.581 7.5.823 13.258a.4.4 0 0 0 0 .565l.354.354a.4.4 0 0 0 .565 0L7.5 8.419l5.758 5.758a.4.4 0 0 0 .565 0l.354-.354a.4.4 0 0 0 0-.565L8.419 7.5l5.758-5.758a.4.4 0 0 0 0-.565l-.354-.354a.4.4 0 0 0-.565 0L7.5 6.581z"});function u(e){return a.a.createElement(l.default,r()({viewBox:"0 0 15 15"},e),s)}u.displayName="ClearIcon"},531:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var o=t(4),r=t.n(o),i=t(6),a=t.n(i),l=t(7),s=t.n(l),u=t(8),c=t.n(u),p=t(9),d=t.n(p),f=t(10),m=t.n(f),h=t(0),b=t.n(h),y=t(125),v=t(1),C=t.n(v);function k(e){var n,t;return t=n=function(n){function t(){var e,n;a()(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=c()(this,(e=d()(t)).call.apply(e,[this].concat(r)))).state={isOpened:n.props.isOpened||!1},n.onOpen=function(){n.props.onOpen()},n.onClose=function(){n.props.onClose(),n.unmountPortal()},n}return m()(t,n),s()(t,[{key:"componentDidMount",value:function(){this.props.isOpened&&this.mountPortal()}},{key:"componentDidUpdate",value:function(e){var n=this.props.isOpened;n!==e.isOpened&&n&&this.mountPortal()}},{key:"componentWillUnmount",value:function(){this.unmountPortal()}},{key:"getContentContainerNode",value:function(){return this.node||(this.node=document.createElement("div"),this.node.style.position="absolute",this.node.style.zIndex=this.props.zIndex,this.props.containerRef(this.node),document.body.appendChild(this.node)),this.node}},{key:"mountPortal",value:function(){this.setState({isOpened:!0})}},{key:"unmountPortal",value:function(){this.node&&(this.props.containerRef(),this.setState({isOpened:!1}),document.body.removeChild(this.node),this.node=null)}},{key:"renderContent",value:function(){return b.a.createElement(e,r()({},this.props,{onOpen:this.onOpen,onClose:this.onClose}))}},{key:"render",value:function(){return this.state.isOpened?Object(y.createPortal)(this.renderContent(),this.getContentContainerNode()):null}}]),t}(h.Component),n.propTypes={isOpened:C.a.bool,zIndex:C.a.number,onOpen:C.a.func,onClose:C.a.func,containerRef:C.a.func},n.defaultProps={isOpened:!1,onOpen:function(){},onClose:function(){},containerRef:function(){}},t}},533:function(e,n,t){"use strict";t.r(n);var o=t(6),r=t.n(o),i=t(7),a=t.n(i),l=t(8),s=t.n(l),u=t(9),c=t.n(u),p=t(10),d=t.n(p),f=t(4),m=t.n(f),h=t(0),b=t.n(h),y=t(1),v=t.n(y),C=t(18),k=t.n(C),O=t(520),g=t(284),E=t(286),P=t(285),w=t(531),x=t(222),L=t(54),S=t(219),j=t(58),R=t(221),N=t(11),A=t(122),z=t(227);Object(A.subscribeFocusEvents)();var W=b.a.createElement(O.default,{size:15,color:"currentColor"}),I=function(e){function n(){var e,t;r()(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(t=s()(this,(e=c()(n)).call.apply(e,[this].concat(i)))).onWillVisible=function(){t.props.closeOnEsc&&window.addEventListener("keydown",t.onKeyDown)},t.onWillInvisible=function(){t.props.closeOnEsc&&window.removeEventListener("keydown",t.onKeyDown)},t.onKeyDown=function(e){e.keyCode===L.ESCAPE&&t.props.onRequestClose()},t.getMemoizedRef=Object(z.default)(),t.renderContent=function(e){var n=t.props,o=n.children,r=n.className,i=n.style,a=n.title,l=n.titleStyle,s=n.titleClassName,u=n.buttonsContainerStyle,c=n.buttonsContainerClassName,p=n.classes,d=n.showClose,f=n.okButton,m=n.tabIndex,h=n.cancelButton,y=n.onRequestClose;return b.a.createElement(P.default,{tabIndex:m},(function(n){return b.a.createElement("div",{style:i,className:k()(p.popup,r),ref:t.getMemoizedRef(n,e)},d&&b.a.createElement("button",{className:p.close,onClick:y},W),a&&b.a.createElement("header",{style:l,className:k()(p.title,s)},a),o,(f||h)&&b.a.createElement("footer",{style:u,className:k()(p.buttons,c)},f,h))}))},t}return d()(n,e),a()(n,[{key:"componentWillUnmount",value:function(){this.onWillInvisible()}},{key:"renderPopup",value:function(){var e=this,n=this.props,t=n.closeOnClickOutside,o=n.onRequestClose;return t?b.a.createElement(E.default,{handler:o},(function(n){return e.renderContent(n)})):this.renderContent()}},{key:"render",value:function(){var e=this,n=this.props,t=n.isOpened,o=n.backdropClassName,r=n.backdropStyle,i=n.backdropColor,a=n.theme,l=n.classes,s=n.onOpen,u=n.onClose;return b.a.createElement(g.default,{isVisible:t,animationDuration:a.popup.animationDuration,onWillVisible:this.onWillVisible,onVisible:s,onWillInvisible:this.onWillInvisible,onInvisible:u},(function(n){var t=n.isVisible;return b.a.createElement("div",{ref:function(n){e.backdrop=n},style:r,className:k()(l.backdrop,l["backdrop-".concat(i)],o,t&&l.isVisible)},e.renderPopup())}))}}]),n}(h.PureComponent);I.propTypes={className:v.a.string,style:v.a.object,backdropClassName:v.a.string,backdropStyle:v.a.object,backdropColor:v.a.oneOf(["black","blue"]),children:v.a.node,title:v.a.node,titleClassName:v.a.string,titleStyle:v.a.object,buttonsContainerClassName:v.a.string,buttonsContainerStyle:v.a.object,isOpened:v.a.bool,tabIndex:v.a.number,okButton:v.a.node,cancelButton:v.a.node,showClose:v.a.bool,closeOnEsc:v.a.bool,closeOnClickOutside:v.a.bool,onOpen:v.a.func,onRequestClose:v.a.func,onClose:v.a.func},I.defaultProps={isOpened:!1,showClose:!0,closeOnEsc:!0,closeOnClickOutside:!0,backdropColor:"black",tabIndex:0,onOpen:function(){},onRequestClose:function(){},onClose:function(){}},n.default=Object(R.default)(Object(x.default)(S.POPUP_ZINDEX),w.default,Object(j.default)((function(e){return{backdrop:{extend:[N.isolateMixin,N.middleMixin],fontFamily:e.fontFamily,position:"fixed",top:0,left:0,right:0,bottom:0,paddingTop:20,paddingBottom:20,textAlign:"center",overflowY:"auto",overflowX:"hidden",marginTop:-10,opacity:0,transitionDuration:e.popup.animationDuration,transitionProperty:"margin-top, opacity"},"backdrop-black":{backgroundColor:e.popup.colors.backdrop.default},"backdrop-blue":{backgroundColor:e.popup.colors.backdrop.blue},isVisible:{marginTop:0,opacity:1},popup:m()({position:"relative",display:"inline-block",boxSizing:"border-box",borderRadius:e.popup.borderRadius,boxShadow:e.popup.boxShadow,padding:[20,25,25],color:e.popup.colors.text,minWidth:300,maxWidth:"calc(100% - 20px)",marginLeft:10,marginRight:10,backgroundColor:e.popup.colors.background,fontSize:e.popup.text.fontSize,lineHeight:"".concat(e.popup.text.lineHeight,"px"),textAlign:"left",outline:"none"},Object(N.ifDesktop)({minWidth:350,maxWidth:"auto"})),title:{marginBottom:20,paddingRight:25,fontSize:e.popup.title.fontSize,lineHeight:"".concat(e.popup.title.lineHeight,"px"),fontWeight:500},close:m()({position:"absolute",top:25,right:25,border:0,margin:0,padding:0,width:15,height:15,background:"transparent",outline:0,color:e.popup.colors.close.default,cursor:"pointer","&:hover":{color:e.popup.colors.close.hover}},Object(N.focusSourceMixin)("other","&:focus",{color:e.popup.colors.close.hover})),buttons:{display:"flex",justifyContent:"space-between",marginTop:30,"& > *":{flexGrow:1,width:"50%"},"& > * + *":m()({marginLeft:10},Object(N.ifDesktop)({marginLeft:20}))}}}),{name:"Popup"}))(I)},567:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return C}));var o=t(4),r=t.n(o),i=t(6),a=t.n(i),l=t(7),s=t.n(l),u=t(8),c=t.n(u),p=t(9),d=t.n(p),f=t(10),m=t.n(f),h=t(0),b=t.n(h),y=t(125),v=t(123);function C(e){return function(n){function t(){var e,n;a()(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(n=c()(this,(e=d()(t)).call.apply(e,[this].concat(i)))).elements=[],n.state={isOpened:!1},n.renderToLayer=function(e,t){var o=Object(v.default)(),i=Object(h.cloneElement)(e,r()({},t,{key:o,isOpened:!0}));return n.elements.push(i),n.mountPortal(),i},n.unrenderAtLayer=function(e){var t=n.elements.indexOf(e);return t<0?Promise.resolve():new Promise((function(o){var r=e.props.containerRef,i=Object(h.cloneElement)(e,{isOpened:!1,containerRef:function(e){r&&r(e),o(i)}});n.elements[t]=i,n.mountPortal()})).then((function(e){n.elements=n.elements.filter((function(n){return n!==e})),0===n.elements.length&&n.unmountPortal()}))},n}return m()(t,n),s()(t,[{key:"componentWillUnmount",value:function(){this.elements=[],this.unmountPortal()}},{key:"getContentContainerNode",value:function(){return this.node||(this.node=document.createElement("div"),document.body.appendChild(this.node)),this.node}},{key:"mountPortal",value:function(){this.setState({isOpened:!0})}},{key:"unmountPortal",value:function(){this.node&&(this.setState({isOpened:!1}),document.body.removeChild(this.node),this.node=null)}},{key:"render",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(e,r()({},this.props,{renderToLayer:this.renderToLayer,unrenderAtLayer:this.unrenderAtLayer})),this.state.isOpened&&Object(y.createPortal)(b.a.createElement(b.a.Fragment,null,this.elements),this.getContentContainerNode()))}}]),t}(h.Component)}},587:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var o=t(4),r=t.n(o),i=t(23),a=t.n(i),l=t(6),s=t.n(l),u=t(7),c=t.n(u),p=t(8),d=t.n(p),f=t(9),m=t.n(f),h=t(10),b=t.n(h),y=t(0),v=t.n(y),C=t(1),k=t.n(C),O=t(567);function g(e){var n=function(n){function t(){var e,n;s()(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=d()(this,(e=m()(t)).call.apply(e,[this].concat(r)))).openPopup=function(e){var t,o,r,i={};return i.opened=new Promise((function(e){t=e})),i.closed=new Promise((function(e,t){o=function(t){n.props.unrenderAtLayer(i.element).then((function(){e(t)}))},r=function(e){n.props.unrenderAtLayer(i.element).then((function(){t(e)}))}})),i.element=n.props.renderToLayer(e(o,r),{onOpen:t,onRequestClose:r}),i.close=r,i},n.closePopup=function(e){e.close()},n}return b()(t,n),c()(t,[{key:"render",value:function(){var n=this.props,t=(n.renderToLayer,n.unrenderAtLayer,a()(n,["renderToLayer","unrenderAtLayer"]));return v.a.createElement(e,r()({},t,{openPopup:this.openPopup,closePopup:this.closePopup}))}}]),t}(y.Component);return n.propTypes={renderToLayer:k.a.func.isRequired,unrenderAtLayer:k.a.func.isRequired},Object(O.default)(n)}}}]);