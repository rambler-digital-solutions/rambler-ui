(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{151:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return p}));var n=i(7),a=i.n(n),c=i(8),o=i.n(c),r=i(9),l=i.n(r),s=i(10),d=i.n(s),h=i(5),u=i.n(h),f=i(0),k=i.n(f),m=i(545);var b=k.a.createElement("h4",null,"size: small"),p=function(e){l()(i,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var i,n=u()(e);if(t()){var a=u()(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return d()(this,i)}}(i);function i(){var e;a()(this,i);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={checked1:!0,checked2:!1},e.onCheck1=function(t,i){e.setState({checked1:i})},e.onCheck2=function(t,i){e.setState({checked2:i})},e.onAllCheck=function(){var t=!1===e.isAllChecked;e.setState({checked1:t,checked2:t})},e}return o()(i,[{key:"render",value:function(){var e=this;return k.a.createElement("div",null,k.a.createElement("div",{style:{display:"flex",marginBottom:20}},["regular","awesome"].map((function(t){return k.a.createElement("div",{style:{maxWidth:240,marginRight:20},key:t},k.a.createElement("h4",null,"variation: ",t),k.a.createElement("div",null,k.a.createElement(m.default,{checked:e.isAllChecked,indeterminate:e.isIndeterminate,onCheck:e.onAllCheck,variation:t},"Выбрать все")),k.a.createElement("div",{style:{marginTop:20}},k.a.createElement(m.default,{checked:e.state.checked1,onCheck:e.onCheck1,variation:t},"Получать уведомления по почте")),k.a.createElement("div",{style:{marginTop:20}},k.a.createElement(m.default,{checked:e.state.checked2,onCheck:e.onCheck2,variation:t},"Получать уведомления на мобильный")),k.a.createElement("div",{style:{marginTop:20}},k.a.createElement(m.default,{checked:e.state.checked1,disabled:!0,variation:t},"Получать уведомления по почте")),k.a.createElement("div",{style:{marginTop:20}},k.a.createElement(m.default,{checked:e.state.checked2,onCheck:e.onCheck2,variation:t,iconPosition:"right"},"Получать уведомления на мобильный")))})),k.a.createElement("div",{style:{maxWidth:240,marginRight:20}},b,k.a.createElement("div",null,k.a.createElement(m.default,{checked:this.isAllChecked,indeterminate:this.isIndeterminate,onCheck:this.onAllCheck,size:"small"},"Выбрать все")),k.a.createElement("div",{style:{marginTop:20}},k.a.createElement(m.default,{checked:this.state.checked1,onCheck:this.onCheck1,size:"small"},"Получать уведомления по почте")),k.a.createElement("div",{style:{marginTop:20}},k.a.createElement(m.default,{checked:this.state.checked2,onCheck:this.onCheck2,size:"small"},"Получать уведомления на мобильный")),k.a.createElement("div",{style:{marginTop:20}},k.a.createElement(m.default,{checked:this.state.checked1,disabled:!0,size:"small"},"Получать уведомления по почте")),k.a.createElement("div",{style:{marginTop:20}},k.a.createElement(m.default,{checked:this.state.checked2,onCheck:this.onCheck2,size:"small",iconPosition:"right"},"Получать уведомления на мобильный")))),k.a.createElement("div",null,"this.state.checked1: ",k.a.createElement("b",null,"".concat(this.state.checked1))),k.a.createElement("div",null,"this.state.checked2: ",k.a.createElement("b",null,"".concat(this.state.checked2))),k.a.createElement("div",null,"this.isIndeterminate: ",k.a.createElement("b",null,"".concat(this.isIndeterminate))))}},{key:"isAllChecked",get:function(){return!0===this.state.checked1&&!0===this.state.checked2||(!1!==this.state.checked1||!1!==this.state.checked2)&&void 0}},{key:"isIndeterminate",get:function(){return void 0===this.isAllChecked}}]),i}(f.Component)},545:function(e,t,i){"use strict";i.r(t);var n=i(17),a=i.n(n),c=i(7),o=i.n(c),r=i(8),l=i.n(r),s=i(9),d=i.n(s),h=i(10),u=i.n(h),f=i(5),k=i.n(f),m=i(26),b=i.n(m),p=i(4),v=i.n(p),y=i(0),g=i.n(y),z=i(1),C=i.n(z),E=i(19),$=i.n(E),x=i(665),S=i(664),w=i(16),D=i(59),R=i(126);Object(R.subscribeFocusEvents)();var N=function(e){return{background:e.background,borderColor:e.border,color:e.tick}},M={fill:null,width:null,height:null},P=function(e){d()(i,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var i,n=k()(e);if(t()){var a=k()(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return u()(this,i)}}(i);function i(){var e;o()(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onChange=function(t){e.props.onCheck&&e.props.onCheck(t,e.input.checked)},e}return l()(i,[{key:"componentDidMount",value:function(){this.input&&(this.input.indeterminate=this.props.indeterminate)}},{key:"componentDidUpdate",value:function(){this.input&&(this.input.indeterminate=this.props.indeterminate)}},{key:"render",value:function(){var e=this,t=this.props,i=t.name,n=t.style,c=t.disabled,o=t.iconPosition,r=t.className,l=t.checkboxClassName,s=t.checkboxStyle,d=t.labelClassName,h=t.labelStyle,u=t.children,f=t.variation,k=t.size,m=t.checked,b=t.indeterminate,p=t.classes,y=(t.onCheck,t.theme,a()(t,["name","style","disabled","iconPosition","className","checkboxClassName","checkboxStyle","labelClassName","labelStyle","children","variation","size","checked","indeterminate","classes","onCheck","theme"])),z=$()(r,p.checkbox,p[f],p[k],p["icon".concat(o)],c?p.isDisabled:p.isEnabled,b?p.indeterminate:m&&p.isChecked);return g.a.createElement("label",{className:z,style:n},g.a.createElement("input",v()({},y,{ref:function(t){e.input=t},checked:m,name:i,type:"checkbox",className:p.real,disabled:c,onChange:this.onChange})),g.a.createElement("span",{className:$()(p.fake,l),style:s},"small"===k?g.a.createElement(S.default,{className:p.tick,style:M}):g.a.createElement(x.default,{className:p.tick,style:M})),g.a.createElement("span",{className:$()(p.label,d),style:h},u))}}]),i}(y.PureComponent);P.propTypes={name:C.a.string,disabled:C.a.bool,className:C.a.string,style:C.a.object,iconPosition:C.a.oneOf(["left","right"]),checked:C.a.bool,indeterminate:C.a.bool,onCheck:C.a.func,checkboxStyle:C.a.object,checkboxClassName:C.a.string,labelStyle:C.a.object,labelClassName:C.a.string,variation:C.a.oneOf(["regular","awesome"]),size:C.a.oneOf(["small","medium"]),children:C.a.node},P.defaultProps={iconPosition:"left",disabled:!1,checked:!1,indeterminate:!1,name:"",variation:"regular",size:"medium"},t.default=Object(D.default)((function(e){var t=e.checkbox,i=t.types,n=i.regular,a=i.awesome;return v()({checkbox:{extend:w.isolateMixin,fontFamily:e.fontFamily,fontSize:t.fontSize,position:"relative",display:"inline-block",verticalAlign:"top",cursor:"pointer",userSelect:"none",transition:"color ".concat(t.animationDuration,"ms")},isDisabled:{cursor:"not-allowed",pointerEvents:"none"},regular:v()({color:n.colors.default.text,"&$isDisabled":{color:n.colors.disabled.text},"& $fake":N(n.colors.default),"&$isEnabled:hover $fake":N(n.colors.hover),"&$isEnabled:active $fake":N(n.colors.active),"&$isDisabled $fake":N(n.colors.disabled),"&$isDisabled$isChecked $fake":N(n.colors.checkedDisabled),"&$isChecked $fake":N(n.colors.checked),"&$isChecked:hover $fake":N(n.colors.checkedHover),"&$isChecked:active $fake":N(n.colors.checkedActive)},Object(w.focusSourceMixin)("other","& $real:focus ~ $fake",N(n.colors.focus))),awesome:{color:a.colors.default.text,"&$isDisabled":{color:a.colors.disabled.text},"& $fake":N(a.colors.default),"&$isEnabled:hover $fake":N(a.colors.hover),"&$isEnabled$isChecked $fake, &&$indeterminate $fake":N(a.colors.checked),"&$isEnabled$isChecked:hover $fake, &$isEnabled$indeterminate:hover $fake":N(a.colors.checkedHover),"&$isDisabled $fake":N(a.colors.disabled)},fake:v()({display:"block",boxSizing:"border-box",position:"absolute",borderRadius:t.borderRadius,borderStyle:"solid",borderWidth:1,lineHeight:0,transitionDuration:t.animationDuration,transitionProperty:"border-color, background-color, color",transformStyle:"preserve-3d"},e.checkbox.outline&&{"&:after":{content:'""',display:"block",position:"absolute",borderRadius:"50%",top:"50%",left:"50%",transform:"translate3d(-50%, -50%, -".concat(e.checkbox.outline.width,"px)"),border:"solid ".concat(e.checkbox.outline.color),borderWidth:0,transitionDuration:"inherit",transitionProperty:"border-width"},"$isEnabled:active &:after":{borderWidth:e.checkbox.outline.width}},{"&:before":{position:"absolute",content:'""',opacity:0,top:0,right:0,bottom:.5,left:0,background:"currentColor",height:2,margin:"auto 2px",borderRadius:1,transform:"scaleX(0.4)",transitionDuration:t.animationDuration,transitionProperty:"transform, opacity"},"$indeterminate &:before":{opacity:1,transform:"scaleX(1)"},"$iconright &":{right:0},"$iconleft &":{left:0}}),real:{position:"absolute",opacity:0,appearance:"none",pointerEvents:"none"},label:{fontSize:t.fontSize,fontWeight:t.fontWeight,display:"inline-block"},tick:{position:"absolute",fill:"currentColor",opacity:0,transitionDuration:t.animationDuration,transitionProperty:"transform, opacity","$isChecked &":{opacity:1}},isEnabled:{},isChecked:{},indeterminate:{},iconright:{},iconleft:{}},["medium","small"].reduce((function(i,n){return v()({},i,b()({},n,{"&$checkbox":{lineHeight:t.sizes[n].size+"px"},"& $fake":v()({top:"small"===n?Math.round((t.sizes[n].lineHeight-t.sizes[n].size)/2):Math.round((t.sizes[n].lineHeight-t.sizes[n].size)/2)-1,width:t.sizes[n].size,height:t.sizes[n].size},e.checkbox.outline&&{"&:after":{width:t.sizes[n].size,height:t.sizes[n].size}}),"& $tick":{top:Math.round((t.sizes[n].size-t.sizes[n].tickSize)/2)-1,left:Math.round((t.sizes[n].size-t.sizes[n].tickSize)/2)-1,width:t.sizes[n].tickSize,height:t.sizes[n].tickSize,transform:"translateY(-".concat("small"===n?.3*t.sizes[n].tickSize:.5*t.sizes[n].tickSize,"px)"),"$isChecked&":{transform:"translateY(0)"}},"& $label":{lineHeight:t.sizes[n].lineHeight+"px","$iconright&":{paddingRight:t.sizes[n].size+t.sizes[n].labelMargin},"$iconleft&":{paddingLeft:t.sizes[n].size+t.sizes[n].labelMargin}}}))}),{}))}),{name:"Checkbox"})(P)},664:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return s}));var n=i(4),a=i.n(n),c=i(0),o=i.n(c),r=i(128),l=o.a.createElement("path",{d:"M13 0v13M0 0v13m5.146-3.439l-2.249-2.25a.5.5 0 0 1 0-.708l.706-.706a.5.5 0 0 1 .708 0L5.5 7.086l3.439-3.439a.5.5 0 0 1 .708 0l.706.706a.5.5 0 0 1 0 .708l-4.499 4.5a.502.502 0 0 1-.708 0",fillRule:"evenodd"});function s(e){return o.a.createElement(r.default,a()({},e,{viewBox:"0 0 13 13"}),l)}s.displayName="TickIconSmall"},665:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return s}));var n=i(4),a=i.n(n),c=i(0),o=i.n(c),r=i(128),l=o.a.createElement("path",{d:"M12-6H-3h15zM-3 14h15-15zM.146 2.854a.5.5 0 0 0 0 .707l2.647 2.646a.999.999 0 0 0 1.414 0l4.647-4.646a.5.5 0 0 0 0-.707L8.146.146a.5.5 0 0 0-.707 0L3.5 4.086l-1.939-1.94a.5.5 0 0 0-.707 0l-.708.708z",fillRule:"evenodd"});function s(e){return o.a.createElement(r.default,a()({},e,{viewBox:"0 0 9 7"}),l)}s.displayName="TickIcon"}}]);