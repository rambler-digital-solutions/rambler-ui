(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(7),r=n.n(a),o=n(8),l=n.n(o),c=n(9),i=n.n(c),s=n(10),u=n.n(s),p=n(5),d=n.n(p),f=n(637),m=n(636),v=n(0),h=n.n(v),g=n(281),y=n(670);var b=["Проверка почты","Восстановление пароля"],C=["Выберите товар","Выберите адрес доставки","Оплата"],x=["Черновик","Опубликован","Завершен","Закрыт"],k=h.a.createElement(y.default,{size:15,color:"currentColor"}),E=function(e){i()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=d()(e);if(t()){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}(n);function n(){var e;r()(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={value:1},e.onChange=function(t,n){e.setState({value:n})},e.onStepClick=function(t,n){e.setState({value:n})},e.nextStep=function(){3!==e.state.value&&e.setState({value:e.state.value+1})},e.previousStep=function(){0!==e.state.value&&e.setState({value:e.state.value-1})},e}return l()(n,[{key:"render",value:function(){var e=this;return h.a.createElement("div",null,"Поведение: steb-by-step",h.a.createElement("div",{style:{marginTop:"25px",width:"500px"}},h.a.createElement(f.default,{value:this.state.value,onChange:this.onChange},b.map((function(e,t){return h.a.createElement(m.default,{key:t},e)})))),h.a.createElement("div",{style:{width:"500px",marginTop:"50px"}},h.a.createElement(f.default,{value:this.state.value,onChange:this.onChange},C.map((function(e,t){return h.a.createElement(m.default,{key:t},e)})))),"Поведение: отображение конкретного статуса и свободный переход между ними",h.a.createElement("div",{style:{marginTop:"25px"}},h.a.createElement(f.default,{value:this.state.value,onChange:this.onChange},x.map((function(t,n){return h.a.createElement(m.default,{key:n,disabled:!1,completed:!1,icon:e.state.value===n?k:void 0,onClick:function(t){t.preventDefault(),e.onChange(t,n)}},t)})))),h.a.createElement("div",{style:{fontWeight:"500",margin:"20px 0"}},"this.state.value: ",this.state.value),h.a.createElement(g.default,{size:"small",type:"secondary",onClick:this.previousStep},"Previous step"),h.a.createElement(g.default,{size:"small",type:"secondary",style:{marginLeft:"50px"},onClick:this.nextStep},"Next step"))}}]),n}(v.Component)},636:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n.n(a),o=n(7),l=n.n(o),c=n(8),i=n.n(c),s=n(9),u=n.n(s),p=n(10),d=n.n(p),f=n(5),m=n.n(f),v=n(4),h=n.n(v),g=n(0),y=n.n(g),b=n(1),C=n.n(b),x=n(18),k=n.n(x),E=n(670),R=n(11),S=n(58);var w=y.a.createElement(E.default,{size:15,color:"currentColor"}),N=function(e){u()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=m()(e);if(t()){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}(n);function n(){var e;l()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onClick=function(t){var n=e.props,a=n.disabled,r=n.active,o=n.value;a||r||e.props.onClick(t,o)},e}return i()(n,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.className,a=e.badgeClassName,o=e.textClassName,l=e.classes,c=e.disabled,i=e.completed,s=e.active,u=e.icon,p=e.children,d=(e.theme,e.onClick,r()(e,["value","className","badgeClassName","textClassName","classes","disabled","completed","active","icon","children","theme","onClick"])),f=k()(n,l.step,s&&l.active,c&&l.disabled);return y.a.createElement("div",h()({},d,{className:f,onClick:this.onClick}),y.a.createElement("span",{className:k()(l.badge,a)},u||(i?w:y.a.createElement("span",null,t+1))),y.a.createElement("span",{className:k()(l.text,o)},p))}}]),n}(g.Component);N.propTypes={value:C.a.number.isRequired,icon:C.a.node,disabled:C.a.bool,completed:C.a.bool,active:C.a.bool,onClick:C.a.func,className:C.a.string,badgeClassName:C.a.string,textClassName:C.a.string,style:C.a.object,children:C.a.node},N.defaultProps={style:{}},t.default=Object(S.default)((function(e){return{step:h()({extend:R.isolateMixin,fontFamily:e.stepper.fontFamily,fontSize:e.stepper.fontSize,display:"flex",alignItems:"center",padding:"10px 0",backgroundColor:e.stepper.colors.default.background,color:e.stepper.colors.default.color,textAlign:"center",zIndex:1},Object(R.ifDesktopWindow)({padding:"0 10px",marginTop:0})),text:{cursor:"pointer"},badge:{extend:R.middleMixin,display:"inline-block",borderRadius:"50%",boxSizing:"border-box",width:35,height:35,marginRight:10,userSelect:"none",fontSize:e.stepper.badge.fontSize,backgroundColor:e.stepper.colors.default.badge.background,border:"1px solid ".concat(e.stepper.colors.default.badge.border),color:e.stepper.colors.default.badge.color},active:{color:e.stepper.colors.active.color,"& $badge":{color:e.stepper.colors.active.badge.color,backgroundColor:e.stepper.colors.active.badge.background,fontWeight:"500"},"& $text":{cursor:"default"}},disabled:{color:e.stepper.colors.disabled.color,"& $badge":{color:e.stepper.colors.disabled.badge.color,backgroundColor:e.stepper.colors.disabled.badge.background},"& $text":{cursor:"default"}}}}),{name:"Step"})(N)},637:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n.n(a),o=n(7),l=n.n(o),c=n(8),i=n.n(c),s=n(9),u=n.n(s),p=n(10),d=n.n(p),f=n(5),m=n.n(f),v=n(4),h=n.n(v),g=n(0),y=n.n(g),b=n(18),C=n.n(b),x=n(1),k=n.n(x),E=n(11),R=n(58);var S={stepper:h()({extend:E.isolateMixin,display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"start",marginLeft:"auto",marginRight:"auto",marginBottom:"35px",width:"100%",position:"relative"},Object(E.ifDesktopWindow)({flexDirection:"row",alignItems:"center"}))},w=function(e){u()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=m()(e);if(t()){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}(n);function n(){var e;l()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t,n){e.props.value!==n&&e.props.onChange(t,n)},e}return i()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.value,o=t.className,l=t.classes,c=(t.theme,t.onChange,r()(t,["children","value","className","classes","theme","onChange"])),i=g.Children.toArray(n).reduce((function(t,n,r){if(!n.type||"RamblerUI(Step)"!==n.type.displayName)throw new Error("Child component should be instance of <Step />");var o=r===a,l=r<a,c=r>a,i=h()({},n.props),s={active:o,completed:l,disabled:c,value:r,key:void 0!==n.key?n.key:r,onClick:e.onChange};return Object.keys(s).forEach((function(e){i.hasOwnProperty(e)||(i[e]=s[e])})),t.push(Object(g.cloneElement)(n,i)),t}),[]);return y.a.createElement("div",h()({},c,{className:C()(o,l.stepper)}),i)}}]),n}(g.PureComponent);w.propTypes={value:k.a.number.isRequired,onChange:k.a.func.isRequired,className:k.a.string,style:k.a.object,children:k.a.node},w.defaultProps={style:{}},t.default=Object(R.default)(S,{name:"Stepper"})(w)},670:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(4),r=n.n(a),o=n(0),l=n.n(o),c=n(125),i=l.a.createElement("path",{fillRule:"evenodd",d:"M13.514 3.675l-.142-.142c-.195-.195-.511-.195-.707 0L6.443 9.756 3.221 6.533c-.195-.195-.512-.195-.707 0l-.142.142c-.195.195-.195.512 0 .707l3.718 3.717c.195.196.512.196.707 0l6.717-6.717c.195-.195.195-.512 0-.707M15 0v15M0 15V0"}),s=l.a.createElement("path",{d:"M8.707 14.353l8.47-8.47c.195-.195.195-.51 0-.707l-.354-.353c-.195-.195-.512-.195-.707 0L8 12.94 3.884 8.823c-.196-.195-.512-.195-.707 0l-.354.353c-.195.196-.195.512 0 .707l4.47 4.47c.39.391 1.023.391 1.414 0M0 20V0m20 0v20",fillRule:"evenodd"});function u(e){return l.a.createElement(c.default,r()({viewBox:function(e){return e<20?"0 0 15 15":"0 0 20 20"}},e),(function(e){return e<20?i:s}))}u.displayName="TickIcon"}}]);