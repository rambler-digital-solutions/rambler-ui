(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{175:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return p}));var a=c(6),i=c.n(a),n=c(7),r=c.n(n),s=c(8),o=c.n(s),l=c(9),h=c.n(l),d=c(10),k=c.n(d),u=c(0),w=c.n(u),f=c(543),p=function(e){function t(){var e,c;i()(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(c=o()(this,(e=h()(t)).call.apply(e,[this].concat(n)))).state={checked:!1},c.onCheck=function(e,t){c.setState({checked:t})},c}return k()(t,e),r()(t,[{key:"render",value:function(){return w.a.createElement("div",null,w.a.createElement("div",null,w.a.createElement(f.default,{checked:this.state.checked,onCheck:this.onCheck},"Получать уведомления по почте")),w.a.createElement("div",{style:{marginTop:20}},w.a.createElement(f.default,{iconPosition:"right",checked:this.state.checked,onCheck:this.onCheck},"Получать уведомления по почте")),w.a.createElement("div",{style:{marginTop:20,maxWidth:200}},w.a.createElement(f.default,{disabled:!0,checked:this.state.checked},"На протяжении многих веков правители семи народов вели непрерывные войны.")))}}]),t}(u.Component)},543:function(e,t,c){"use strict";c.r(t);var a=c(23),i=c.n(a),n=c(6),r=c.n(n),s=c(7),o=c.n(s),l=c(8),h=c.n(l),d=c(9),k=c.n(d),u=c(10),w=c.n(u),f=c(4),p=c.n(f),m=c(0),b=c.n(m),g=c(1),y=c.n(g),v=c(18),C=c.n(v),N=c(55),S=c(11),E=function(e){return{color:e.text,"& $switcher":{backgroundColor:e.background},"& $track":{backgroundColor:e.track}}},x=function(e){function t(){var e,c;r()(this,t);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(c=h()(this,(e=k()(t)).call.apply(e,[this].concat(i)))).checked=c.props.checked||!1,c.state={checked:c.checked},c.onCheck=function(e){var t=e.target.checked;c.switch(t),c.props.onCheck(e,t)},c}return w()(t,e),o()(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.checked;t!==e.checked&&this.switch(t)}},{key:"switch",value:function(e){this.checked!==e&&(this.checked=e,this.setState({checked:e}))}},{key:"render",value:function(){var e=this.state.checked,t=this.props,c=t.className,a=t.style,n=t.switcherClassName,r=t.switcherStyle,s=t.trackClassName,o=t.trackStyle,l=t.labelClassName,h=t.labelStyle,d=t.disabled,k=t.children,u=t.iconPosition,w=t.classes,f=(t.checked,t.theme,t.onCheck,i()(t,["className","style","switcherClassName","switcherStyle","trackClassName","trackStyle","labelClassName","labelStyle","disabled","children","iconPosition","classes","checked","theme","onCheck"])),m=C()(w.root,w[u],c,e&&w.checked,d&&w.disabled);return b.a.createElement("label",{style:a,className:m},b.a.createElement("input",p()({},f,{className:w.checkbox,type:"checkbox",checked:e,disabled:d,onChange:this.onCheck})),b.a.createElement("span",{style:r,className:C()(w.switcher,n)},b.a.createElement("span",{style:o,className:C()(w.track,s)})),k&&b.a.createElement("span",{style:h,className:C()(w.label,l)},k))}}]),t}(m.PureComponent);x.propTypes={name:y.a.string,disabled:y.a.bool,className:y.a.string,style:y.a.object,switcherClassName:y.a.string,switcherStyle:y.a.object,trackClassName:y.a.string,trackStyle:y.a.object,labelClassName:y.a.string,labelStyle:y.a.object,iconPosition:y.a.oneOf(["left","right"]),checked:y.a.bool.isRequired,children:y.a.node,onCheck:y.a.func.isRequired},x.defaultProps={checked:!1,disabled:!1,iconPosition:"left",onCheck:function(){}},t.default=Object(N.default)((function(e){return{root:p()({extend:S.isolateMixin,fontFamily:e.fontFamily,fontSize:e.switcher.fontSize,position:"relative",display:"inline-flex",justifyContent:"space-between",alignItems:"flex-start",verticalAlign:"top",lineHeight:e.switcher.height+"px",cursor:"pointer"},E(e.switcher.colors.default.default),{"&:hover":E(e.switcher.colors.default.hover),"&:active":E(e.switcher.colors.default.active),"&$disabled":E(e.switcher.colors.default.disabled)}),checked:p()({},E(e.switcher.colors.checked.default),{"&:hover":E(e.switcher.colors.checked.hover),"&:active":E(e.switcher.colors.checked.active),"&$disabled":E(e.switcher.colors.checked.disabled),"& $track":{left:e.switcher.width-e.switcher.height+e.switcher.trackMargin}}),disabled:{pointerEvents:"none"},left:{flexDirection:"row","& $label":{marginLeft:e.switcher.labelMargin}},right:{flexDirection:"row-reverse","& $label":{marginRight:e.switcher.labelMargin}},checkbox:{position:"absolute",opacity:0,appearance:"none",pointerEvents:"none"},switcher:{position:"relative",flexShrink:0,borderRadius:9999,marginTop:1,width:e.switcher.width,height:e.switcher.height,transitionProperty:"background",transitionDuration:e.switcher.animationDuration},track:{position:"absolute",top:e.switcher.trackMargin,left:e.switcher.trackMargin,width:e.switcher.height-2*e.switcher.trackMargin,height:e.switcher.height-2*e.switcher.trackMargin,borderRadius:9999,transitionProperty:"left, background",transitionDuration:e.switcher.animationDuration},label:{cursor:"pointer",fontWeight:"normal",lineHeight:1.43}}}),{name:"Switcher"})(x)}}]);