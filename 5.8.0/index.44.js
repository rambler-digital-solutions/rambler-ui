(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var c=n(7),l=n.n(c),a=n(8),r=n.n(a),i=n(9),o=n.n(i),u=n(10),s=n.n(u),f=n(5),d=n.n(f),v=n(0),m=n.n(v),h=n(638),p=n(637),y=n(686),z=n(742),E=n(741),V=n(750),M=n(751);var N=m.a.createElement(h.default,{value:"general",icon:m.a.createElement(y.default,null)},"Личные данные"),g=m.a.createElement(h.default,{value:"email",icon:m.a.createElement(z.default,null)},"Адреса электронной почты"),C=m.a.createElement(h.default,{value:"phone",icon:m.a.createElement(E.default,null)},"Телефонные номера"),R=m.a.createElement(h.default,{value:"cards",icon:m.a.createElement(V.default,null)},"Платежные средства"),b=m.a.createElement(h.default,{value:"social",icon:m.a.createElement(M.default,null)},"Социальные аккаунты"),k=m.a.createElement(h.default,{value:"general",icon:m.a.createElement(y.default,null)},"Личные данные"),S=m.a.createElement(h.default,{value:"email",icon:m.a.createElement(z.default,null)},"Адреса электронной почты"),w=m.a.createElement(h.default,{value:"phone",icon:m.a.createElement(E.default,null)},"Телефонные номера"),x=m.a.createElement(h.default,{value:"cards",icon:m.a.createElement(V.default,null)},"Платежные средства"),I=m.a.createElement(h.default,{value:"social",icon:m.a.createElement(M.default,null)},"Социальные аккаунты"),H=function(e){o()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,c=d()(e);if(t()){var l=d()(this).constructor;n=Reflect.construct(c,arguments,l)}else n=c.apply(this,arguments);return s()(this,n)}}(n);function n(){var e;l()(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={value:"general"},e.onChange=function(t,n){e.setState({value:n})},e}return r()(n,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{style:{width:"300px",marginBottom:40,display:"inline-block"}},m.a.createElement(p.default,{value:this.state.value,onChange:this.onChange},N,g,C,R,b)),m.a.createElement("div",{style:{width:"300px",marginBottom:40,display:"inline-block"}},m.a.createElement(p.default,{size:"small",value:this.state.value,onChange:this.onChange},k,S,w,x,I)),m.a.createElement("div",null,"this.state.value: ",m.a.createElement("b",null,this.state.value)))}}]),n}(v.Component)},637:function(e,t,n){"use strict";n.r(t);var c=n(4),l=n.n(c),a=n(23),r=n.n(a),i=n(7),o=n.n(i),u=n(8),s=n.n(u),f=n(9),d=n.n(f),v=n(10),m=n.n(v),h=n(5),p=n.n(h),y=n(0),z=n.n(y),E=n(1),V=n.n(E),M=n(18),N=n.n(M),g=n(59),C=n(11);var R=function(e){d()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,c=p()(e);if(t()){var l=p()(this).constructor;n=Reflect.construct(c,arguments,l)}else n=c.apply(this,arguments);return m()(this,n)}}(n);function n(){var e;o()(this,n);for(var c=arguments.length,l=new Array(c),a=0;a<c;a++)l[a]=arguments[a];return(e=t.call.apply(t,[this].concat(l))).value=e.props.value,e.state={value:e.value},e.onValueChange=function(t,n){e.setValue(n),e.props.onChange&&e.props.onChange(t,n)},e}return s()(n,[{key:"componentDidUpdate",value:function(e){var t=this.props.value;t!==e.value&&this.setValue(t)}},{key:"setValue",value:function(e){e!==this.value&&(this.value=e,this.setState({value:e}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.size,c=t.block,a=t.children,i=t.className,o=t.classes,u=(t.theme,t.value,r()(t,["size","block","children","className","classes","theme","value"])),s=y.Children.map(a,(function(t){if(!t.type||"RamblerUI(SideNavItem)"!==t.type.displayName)throw new Error("Child component should be instance of <SideNavItem />");var c="value"in t.props,a=c&&t.props.value===e.state.value;return Object(y.cloneElement)(t,l()({size:n,isSelected:a},c&&{onPress:e.onValueChange}))})),f=N()(o.sideNav,i,c&&o.block);return z.a.createElement("div",l()({},u,{className:f}),s)}}]),n}(y.Component);R.propTypes={className:V.a.string,style:V.a.object,children:V.a.node,size:V.a.oneOf(["small","medium"]),value:V.a.any,block:V.a.bool,onChange:V.a.func},R.defaultProps={value:null,block:!1,size:"medium"},t.default=Object(g.default)((function(e){return{sideNav:{extend:C.isolateMixin,fontFamily:e.fontFamily,display:"inline-block"},block:{display:"block"}}}),{name:"SideNav"})(R)},638:function(e,t,n){"use strict";n.r(t);var c=n(23),l=n.n(c),a=n(4),r=n.n(a),i=n(7),o=n.n(i),u=n(8),s=n.n(u),f=n(9),d=n.n(f),v=n(10),m=n.n(v),h=n(5),p=n.n(h),y=n(0),z=n.n(y),E=n(1),V=n.n(E),M=n(18),N=n.n(M),g=n(59),C=n(11);var R=z.a.createElement("div",null),b=function(e){d()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,c=p()(e);if(t()){var l=p()(this).constructor;n=Reflect.construct(c,arguments,l)}else n=c.apply(this,arguments);return m()(this,n)}}(n);function n(){var e;o()(this,n);for(var c=arguments.length,l=new Array(c),a=0;a<c;a++)l[a]=arguments[a];return(e=t.call.apply(t,[this].concat(l))).onClick=function(t){var n=e.props,c=n.value,l=n.onClick,a=n.onPress;a&&a(t,c),l&&l(t)},e}return s()(n,[{key:"renderIcon",value:function(e){if(e){var t=this.props.classes;return Object(y.cloneElement)(e,r()({color:"currentColor",size:null},e.props,{className:N()(e.props.className,t.icon)}))}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,c=e.icon,a=e.size,i=e.isSelected,o=e.container,u=e.classes,s=(e.theme,e.onPress,e.value,l()(e,["className","children","icon","size","isSelected","container","classes","theme","onPress","value"])),f="medium"===a,d=N()(u.sideNavItem,t,f&&u.medium,i&&u.isSelected),v=Object(y.isValidElement)(o)?o:"function"==typeof o?o({activeClassName:u.isSelected}):R,m=r()({},s,{className:d,onClick:this.onClick});return Object(y.cloneElement)(v,m,this.renderIcon(c),f&&n)}}]),n}(y.Component);b.propTypes={className:V.a.string,style:V.a.object,children:V.a.node,icon:V.a.node.isRequired,size:V.a.oneOf(["small","medium"]),value:V.a.any,isSelected:V.a.bool,container:V.a.oneOfType([V.a.element,V.a.func]),onPress:V.a.func,onClick:V.a.func},t.default=Object(g.default)((function(e){return{sideNavItem:{extend:C.isolateMixin,fontFamily:e.fontFamily,display:"flex",alignItems:"center",userSelect:"none",whiteSpace:"nowrap",cursor:"pointer",position:"relative",textDecoration:"none",fontSize:e.sideNav.fontSize,height:e.sideNav.height,color:e.sideNav.colors.default.text,transition:"color .2s","a&:visited":{color:e.sideNav.colors.default.text},"&&$isSelected, &&:hover":{color:e.sideNav.colors.selected.text}},icon:{flex:"none",display:"inline-block",width:"1em",height:"1em",fontSize:e.sideNav.iconSize},isSelected:{cursor:"default"},medium:{"& $icon":{marginRight:e.sideNav.iconRightMargin}}}}),{name:"SideNavItem"})(b)},686:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(4),l=n.n(c),a=n(0),r=n.n(a),i=n(128),o=r.a.createElement("path",{d:"M0 15V0m15 0v15M13.8 3.049v9.254c-.796-.33-1.659-.503-2.55-.503-1.362 0-2.66.404-3.75 1.155-1.09-.751-2.388-1.155-3.75-1.155-.891 0-1.754.173-2.55.503V3.049c.723-.551 1.612-.849 2.55-.849 1.104 0 2.14.413 2.916 1.163l.234.226V10c0 .276.224.5.5.5h.2c.276 0 .5-.224.5-.5V3.589l.234-.226C9.11 2.613 10.146 2.2 11.25 2.2c.938 0 1.827.298 2.55.849M11.25 1c-1.357 0-2.714.5-3.75 1.5C6.464 1.5 5.107 1 3.75 1 2.548 1 1.346 1.392.368 2.176.133 2.364 0 2.651 0 2.952v10.512c0 .398.442.635.775.416.896-.587 1.935-.88 2.975-.88 1.117 0 2.234.339 3.171 1.016.345.249.813.249 1.158 0C9.016 13.339 10.133 13 11.25 13c1.04 0 2.079.293 2.975.88.333.219.775-.018.775-.416V2.952c0-.301-.133-.588-.368-.776C13.654 1.392 12.452 1 11.25 1",fillRule:"evenodd"}),u=r.a.createElement("path",{d:"M20 0v20V0zM0 0v20V0zm16.5 14.926c-.812-.27-1.666-.412-2.527-.412-1.396 0-2.772.373-3.973 1.064-1.201-.691-2.577-1.064-3.973-1.064-.861 0-1.715.142-2.527.412V5.199c.764-.445 1.64-.685 2.527-.685 1.118 0 2.172.363 3.048 1.049l.175.137v6.8c0 .276.224.5.5.5h.5c.276 0 .5-.224.5-.5V5.7l.175-.137c.876-.686 1.93-1.049 3.048-1.049.887 0 1.763.24 2.527.685v9.727zM13.973 3.014c-1.404 0-2.807.455-3.973 1.368-1.166-.913-2.569-1.368-3.973-1.368-1.258 0-2.517.365-3.608 1.092-.27.18-.419.496-.419.82v11.549c0 .384.414.621.746.427 1.012-.591 2.147-.888 3.281-.888 1.204 0 2.406.334 3.459 1.005.31.197.718.197 1.028 0 1.053-.671 2.256-1.005 3.459-1.005 1.134 0 2.269.297 3.281.888.332.193.746-.043.746-.427V4.926c0-.324-.149-.64-.419-.82-1.09-.727-2.35-1.092-3.608-1.092z",fillRule:"evenodd"});function s(e){return r.a.createElement(i.default,l()({viewBox:function(e){return e<20?"0 0 15 15":"0 0 20 20"}},e),(function(e){return e<20?o:u}))}s.displayName="BookIcon"},741:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(4),l=n.n(c),a=n(0),r=n.n(a),i=n(128),o=r.a.createElement("path",{d:"M0 15V0v15zM15 0v15V0zM3.2 13.8h8.6V4H3.2v9.8zm0-11h8.6V1.2H3.2v1.6zM13 1v13c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1h9c.552 0 1 .448 1 1zm-5.5 9.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z",fillRule:"evenodd"}),u=r.a.createElement("path",{d:"M20 0v20V0zM0 0v20V0zm10 12.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM5.5 16.5h9V7h-9v9.5zm0-11h9v-2h-9v2zM4 3v14c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1H5c-.552 0-1 .448-1 1z",fillRule:"evenodd"});function s(e){return r.a.createElement(i.default,l()({viewBox:function(e){return e<20?"0 0 15 15":"0 0 20 20"}},e),(function(e){return e<20?o:u}))}s.displayName="PhoneIcon"},742:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(4),l=n.n(c),a=n(0),r=n.n(a),i=n(128),o=r.a.createElement("path",{d:"M0 15V0v15zM15 0v15V0zm-1.2 12.8H1.2V5.64l6.065 3.235c.147.078.323.078.47 0L13.8 5.64v7.16zM1.2 3.2h12.6v1.08L7.5 7.64 1.2 4.28V3.2zM0 2.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5H.5c-.276 0-.5.224-.5.5z",fillRule:"evenodd"}),u=r.a.createElement("path",{d:"M0 20V0v20zM20 0v20V0zM3.833 5.5h12.334L10 10.125 3.833 5.5zm12.667 10h-13V7.125l5.9 4.425c.356.267.844.267 1.2 0l5.9-4.425V15.5zM2 5v11c0 .552.448 1 1 1h14c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1z",fillRule:"evenodd"});function s(e){return r.a.createElement(i.default,l()({viewBox:function(e){return e<20?"0 0 15 15":"0 0 20 20"}},e),(function(e){return e<20?o:u}))}s.displayName="EmailIcon"},750:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(4),l=n.n(c),a=n(0),r=n.n(a),i=n(128),o=r.a.createElement("path",{d:"M10 9.8H8.5c-.276 0-.5.224-.5.5v.199c0 .276.224.5.5.5H10c.276 0 .5-.224.5-.5V10.3c0-.276-.224-.5-.5-.5zm-3.5 0h-4c-.276 0-.5.224-.5.5v.199c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5V10.3c0-.276-.224-.5-.5-.5zm-5.3 2h12.6V7H1.2v4.8zm0-6h12.6V3.2H1.2v2.6zM1 2c-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1H1zM0 15V0v15zM15 0v15V0z",fillRule:"evenodd"}),u=r.a.createElement("path",{d:"M20 0v20V0zM0 0v20V0zm11 12.75v-.5c0-.276.224-.5.5-.5h1c.276 0 .5.224.5.5v.5c0 .276-.224.5-.5.5h-1c-.276 0-.5-.224-.5-.5zm-6 0v-.5c0-.276.224-.5.5-.5h4c.276 0 .5.224.5.5v.5c0 .276-.224.5-.5.5h-4c-.276 0-.5-.224-.5-.5zM3.5 14.5h13V9.25h-13v5.25zm0-6.75h13V5.5h-13v2.25zM2 5v10c0 .552.448 1 1 1h14c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1z",fillRule:"evenodd"});function s(e){return r.a.createElement(i.default,l()({viewBox:function(e){return e<20?"0 0 15 15":"0 0 20 20"}},e),(function(e){return e<20?o:u}))}s.displayName="CreditCardIcon"},751:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(4),l=n.n(c),a=n(0),r=n.n(a),i=n(128),o=r.a.createElement("path",{d:"M7.145 4.477l-.192-.052c-.267-.071-.425-.345-.354-.612L7.439.68c.071-.267.346-.425.612-.354l.193.052c.266.07.425.346.353.612l-.84 3.133c-.071.266-.345.425-.612.353m-2.196 8.196l-.193-.051c-.266-.072-.425-.346-.353-.613l.84-3.132c.071-.267.345-.425.612-.354l.192.052c.267.07.425.345.354.612l-.84 3.133c-.071.267-.346.425-.612.353m3.626-6.626l-.052-.192c-.071-.267.087-.541.354-.612l3.132-.84c.267-.072.541.087.613.353l.051.193c.072.266-.086.54-.353.612l-3.133.84c-.267.07-.541-.087-.612-.354M.378 8.244L.327 8.05c-.072-.266.087-.541.353-.612l3.133-.84c.267-.071.541.087.612.354l.052.192c.071.267-.087.54-.354.612l-3.132.84C.724 8.669.45 8.51.378 8.244M4.223 5.07L1.93 2.777c-.196-.195-.196-.511 0-.707l.14-.14c.196-.195.512-.195.707 0L5.07 4.223c.196.195.196.512 0 .707l-.14.14c-.196.196-.512.196-.707 0m10.347 8.653L8.777 7.93c-.195-.195-.511-.195-.707 0l-.14.14c-.196.196-.196.512 0 .707l5.793 5.793c.195.196.511.196.707 0l.14-.14c.196-.195.196-.512 0-.707M0 15V0m15 0v15",fillRule:"evenodd"}),u=r.a.createElement("path",{d:"M20 0v20M0 0v20M9.826 7.077l-.579-.155c-.267-.072-.425-.346-.354-.612l1.035-3.864c.072-.267.346-.425.613-.354l.579.156c.266.071.425.345.353.612l-1.035 3.864c-.071.266-.346.425-.612.353m-3.21.67L3.788 4.919c-.195-.195-.195-.512 0-.707l.424-.424c.195-.195.512-.195.707 0l2.828 2.829c.195.195.195.511 0 .707l-.424.423c-.195.196-.512.196-.707 0m4.463 1.007l-.156-.58c-.071-.267.087-.541.354-.612l3.863-1.036c.267-.071.541.087.612.354l.156.58c.071.267-.087.541-.354.612l-3.863 1.035c-.267.072-.541-.086-.612-.353M2.248 11.12l-.156-.58c-.071-.267.087-.541.354-.612l3.863-1.035c.267-.072.541.086.612.353l.156.58c.071.267-.087.541-.354.612L2.86 11.474c-.267.071-.541-.087-.612-.354m5.211 4.788l-.579-.156c-.266-.071-.425-.345-.353-.612l1.035-3.864c.071-.266.346-.425.612-.353l.579.155c.267.072.425.346.354.612l-1.035 3.864c-.072.267-.346.425-.613.354m9.122 1.804l-6.328-6.329c-.195-.195-.195-.511 0-.707l.424-.424c.195-.195.512-.195.707.001l6.328 6.328c.195.195.195.512 0 .707l-.424.424c-.195.195-.512.195-.707 0",fillRule:"evenodd"});function s(e){return r.a.createElement(i.default,l()({viewBox:function(e){return e<20?"0 0 15 15":"0 0 20 20"}},e),(function(e){return e<20?o:u}))}s.displayName="WizardIcon"}}]);