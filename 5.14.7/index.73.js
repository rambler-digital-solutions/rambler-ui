(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{177:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return w}));var r=c(7),n=c.n(r),a=c(8),i=c.n(a),s=c(9),o=c.n(s),l=c(10),h=c.n(l),d=c(5),u=c.n(d),f=c(0),k=c.n(f),p=c(558);var w=function(e){o()(c,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var c,r=u()(e);if(t()){var n=u()(this).constructor;c=Reflect.construct(r,arguments,n)}else c=r.apply(this,arguments);return h()(this,c)}}(c);function c(){var e;n()(this,c);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={checked:!1},e.onCheck=function(t,c){e.setState({checked:c})},e}return i()(c,[{key:"render",value:function(){return k.a.createElement("div",null,k.a.createElement("div",null,k.a.createElement(p.default,{checked:this.state.checked,onCheck:this.onCheck},"Получать уведомления по почте")),k.a.createElement("div",{style:{marginTop:20}},k.a.createElement(p.default,{iconPosition:"right",checked:this.state.checked,onCheck:this.onCheck},"Получать уведомления по почте")),k.a.createElement("div",{style:{marginTop:20,maxWidth:200}},k.a.createElement(p.default,{disabled:!0,checked:this.state.checked},"На протяжении многих веков правители семи народов вели непрерывные войны.")))}}]),c}(f.Component)},558:function(e,t,c){"use strict";c.r(t);var r=c(17),n=c.n(r),a=c(7),i=c.n(a),s=c(8),o=c.n(s),l=c(9),h=c.n(l),d=c(10),u=c.n(d),f=c(5),k=c.n(f),p=c(4),w=c.n(p),m=c(0),b=c.n(m),y=c(1),g=c.n(y),v=c(19),C=c.n(v),N=c(59),S=c(11);var x=function(e){return{color:e.text,"& $switcher":{backgroundColor:e.background},"& $track":{backgroundColor:e.track}}},R=function(e){h()(c,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var c,r=k()(e);if(t()){var n=k()(this).constructor;c=Reflect.construct(r,arguments,n)}else c=r.apply(this,arguments);return u()(this,c)}}(c);function c(){var e;i()(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).checked=e.props.checked||!1,e.state={checked:e.checked},e.onCheck=function(t){var c=t.target.checked;e.switch(c),e.props.onCheck(t,c)},e}return o()(c,[{key:"componentDidUpdate",value:function(e){var t=this.props.checked;t!==e.checked&&this.switch(t)}},{key:"switch",value:function(e){this.checked!==e&&(this.checked=e,this.setState({checked:e}))}},{key:"render",value:function(){var e=this.state.checked,t=this.props,c=t.className,r=t.style,a=t.switcherClassName,i=t.switcherStyle,s=t.trackClassName,o=t.trackStyle,l=t.labelClassName,h=t.labelStyle,d=t.disabled,u=t.children,f=t.iconPosition,k=t.classes,p=(t.checked,t.theme,t.onCheck,n()(t,["className","style","switcherClassName","switcherStyle","trackClassName","trackStyle","labelClassName","labelStyle","disabled","children","iconPosition","classes","checked","theme","onCheck"])),m=C()(k.root,k[f],c,e&&k.checked,d&&k.disabled);return b.a.createElement("label",{style:r,className:m},b.a.createElement("input",w()({},p,{className:k.checkbox,type:"checkbox",checked:e,disabled:d,onChange:this.onCheck})),b.a.createElement("span",{style:i,className:C()(k.switcher,a)},b.a.createElement("span",{style:o,className:C()(k.track,s)})),u&&b.a.createElement("span",{style:h,className:C()(k.label,l)},u))}}]),c}(m.PureComponent);R.propTypes={name:g.a.string,disabled:g.a.bool,className:g.a.string,style:g.a.object,switcherClassName:g.a.string,switcherStyle:g.a.object,trackClassName:g.a.string,trackStyle:g.a.object,labelClassName:g.a.string,labelStyle:g.a.object,iconPosition:g.a.oneOf(["left","right"]),checked:g.a.bool.isRequired,children:g.a.node,onCheck:g.a.func.isRequired},R.defaultProps={checked:!1,disabled:!1,iconPosition:"left",onCheck:function(){}},t.default=Object(N.default)((function(e){return{root:w()({extend:S.isolateMixin,fontFamily:e.fontFamily,fontSize:e.switcher.fontSize,position:"relative",display:"inline-flex",justifyContent:"space-between",alignItems:"flex-start",verticalAlign:"top",lineHeight:e.switcher.height+"px",cursor:"pointer"},x(e.switcher.colors.default.default),{"&:hover":x(e.switcher.colors.default.hover),"&:active":x(e.switcher.colors.default.active),"&$disabled":x(e.switcher.colors.default.disabled)}),checked:w()({},x(e.switcher.colors.checked.default),{"&:hover":x(e.switcher.colors.checked.hover),"&:active":x(e.switcher.colors.checked.active),"&$disabled":x(e.switcher.colors.checked.disabled),"& $track":{left:e.switcher.width-e.switcher.height+e.switcher.trackMargin}}),disabled:{pointerEvents:"none"},left:{flexDirection:"row","& $label":{marginLeft:e.switcher.labelMargin}},right:{flexDirection:"row-reverse","& $label":{marginRight:e.switcher.labelMargin}},checkbox:{position:"absolute",opacity:0,appearance:"none",pointerEvents:"none"},switcher:{position:"relative",flexShrink:0,borderRadius:9999,width:e.switcher.width,height:e.switcher.height,transitionProperty:"background",transitionDuration:e.switcher.animationDuration},track:{position:"absolute",top:e.switcher.trackMargin,left:e.switcher.trackMargin,width:e.switcher.height-2*e.switcher.trackMargin,height:e.switcher.height-2*e.switcher.trackMargin,borderRadius:9999,transitionProperty:"left, background",transitionDuration:e.switcher.animationDuration},label:{cursor:"pointer",fontWeight:"normal"}}}),{name:"Switcher"})(R)}}]);