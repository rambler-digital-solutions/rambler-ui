(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var i=n(7),a=n.n(i),o=n(8),r=n.n(o),l=n(9),s=n.n(l),c=n(10),u=n.n(c),d=n(5),f=n.n(d),h=n(0),m=n.n(h),p=n(685),v=n(684),g=n(580),b=n(535);var y=["Чехия","Мальта","Нидерланды","Германия","Гватемала","США","Люксембург","Канада","Австралия"],k=m.a.createElement(g.default,null),C=m.a.createElement(g.default,null),E=m.a.createElement(g.default,{color:"#262626"}),x=m.a.createElement("h4",null,"onChange"),$=m.a.createElement("h4",null,"onChange, items with icon"),z=m.a.createElement("h4",null,"onChange, isExpanded, items with onClick"),R=m.a.createElement("h4",null,"onChange, items with onClick with icon"),w=m.a.createElement("h4",null,"onMoreClick"),M=m.a.createElement("h4",null,"isExpanded, items with onClick"),S=m.a.createElement("h4",null,"items with onClick and colored icon"),N=m.a.createElement("h4",null,"disabled, onChange, onMoreClick"),D=m.a.createElement("h4",null,"disabled, isExpanded, onChange, items with onClick"),I=m.a.createElement("h4",null,"disabled, onChange, items with onClick and icon"),W=function(e){s()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,i=f()(e);if(t()){var a=f()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return u()(this,n)}}(n);function n(){var e;a()(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={items:y.slice(2,6)},e.toggleValue=function(t,n){e.setState({items:n?e.state.items.concat(t):e.state.items.filter((function(e){return e!==t}))})},e.changeValue=function(t){e.setState({items:t})},e}return r()(n,[{key:"render",value:function(){var e=this,t=this.state.items.map((function(e){return m.a.createElement(p.default,{value:e,key:e},e)})),n=this.state.items.map((function(e){return m.a.createElement(p.default,{value:e,key:e,icon:k},e)})),i=this.state.items.map((function(e){return m.a.createElement(p.default,{value:e,key:e,onClick:function(){}},e)})),a=this.state.items.map((function(e){return m.a.createElement(p.default,{value:e,key:e,onClick:function(){},icon:C},e)})),o=this.state.items.map((function(e){return m.a.createElement(p.default,{value:e,key:e,onClick:function(){},icon:E},e)}));return m.a.createElement("div",null,y.map((function(t){return m.a.createElement(b.default,{checked:e.state.items.indexOf(t)>-1,style:{marginRight:20},onCheck:function(n,i){e.toggleValue(t,i)},key:t},t)})),m.a.createElement("div",{style:{display:"flex",marginLeft:-20}},["regular","background"].map((function(r){return m.a.createElement("div",{style:{marginLeft:20,flex:"none",width:"calc(50% - 20px)"},key:r},m.a.createElement("h3",null,"type: ".concat(r)),x,m.a.createElement("div",{style:{maxWidth:300}},m.a.createElement(v.default,{onChange:e.changeValue,type:r},t)),$,m.a.createElement("div",{style:{maxWidth:300}},m.a.createElement(v.default,{onChange:e.changeValue,type:r},n)),z,m.a.createElement("div",{style:{maxWidth:300}},m.a.createElement(v.default,{onChange:e.changeValue,isExpanded:!0,type:r},i)),R,m.a.createElement("div",{style:{maxWidth:300}},m.a.createElement(v.default,{onChange:e.changeValue,type:r},a)),w,m.a.createElement("div",{style:{maxWidth:240}},m.a.createElement(v.default,{type:r,onMoreClick:function(){}},t)),M,m.a.createElement("div",{style:{maxWidth:240}},m.a.createElement(v.default,{isExpanded:!0,type:r},i)),S,m.a.createElement("div",{style:{maxWidth:240}},m.a.createElement(v.default,{type:r},o)),N,m.a.createElement("div",{style:{maxWidth:240}},m.a.createElement(v.default,{onChange:e.changeValue,onMoreClick:function(){},disabled:!0,type:r},t)),D,m.a.createElement("div",{style:{maxWidth:240}},m.a.createElement(v.default,{onChange:e.changeValue,isExpanded:!0,disabled:!0,type:r},i)),I,m.a.createElement("div",{style:{maxWidth:240}},m.a.createElement(v.default,{onChange:e.changeValue,disabled:!0,type:r},a)))}))),m.a.createElement("div",{style:{marginTop:40}},"this.state.value: ",m.a.createElement("strong",null,JSON.stringify(this.state.items))))}}]),n}(h.Component)},535:function(e,t,n){"use strict";n.r(t);var i=n(23),a=n.n(i),o=n(7),r=n.n(o),l=n(8),s=n.n(l),c=n(9),u=n.n(c),d=n(10),f=n.n(d),h=n(5),m=n.n(h),p=n(26),v=n.n(p),g=n(4),b=n.n(g),y=n(0),k=n.n(y),C=n(1),E=n.n(C),x=n(18),$=n.n(x),z=n(674),R=n(673),w=n(11),M=n(58),S=n(122);Object(S.subscribeFocusEvents)();var N=function(e){return{background:e.background,borderColor:e.border,color:e.tick}},D={fill:null,width:null,height:null},I=function(e){u()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,i=m()(e);if(t()){var a=m()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return f()(this,n)}}(n);function n(){var e;r()(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onChange=function(t){e.props.onCheck&&e.props.onCheck(t,e.input.checked)},e}return s()(n,[{key:"componentDidMount",value:function(){this.input&&(this.input.indeterminate=this.props.indeterminate)}},{key:"componentDidUpdate",value:function(){this.input&&(this.input.indeterminate=this.props.indeterminate)}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,i=t.style,o=t.disabled,r=t.iconPosition,l=t.className,s=t.checkboxClassName,c=t.checkboxStyle,u=t.labelClassName,d=t.labelStyle,f=t.children,h=t.variation,m=t.size,p=t.checked,v=t.indeterminate,g=t.classes,y=(t.onCheck,t.theme,a()(t,["name","style","disabled","iconPosition","className","checkboxClassName","checkboxStyle","labelClassName","labelStyle","children","variation","size","checked","indeterminate","classes","onCheck","theme"])),C=$()(l,g.checkbox,g[h],g[m],g["icon".concat(r)],o?g.isDisabled:g.isEnabled,v?g.indeterminate:p&&g.isChecked);return k.a.createElement("label",{className:C,style:i},k.a.createElement("input",b()({},y,{ref:function(t){e.input=t},checked:p,name:n,type:"checkbox",className:g.real,disabled:o,onChange:this.onChange})),k.a.createElement("span",{className:$()(g.fake,s),style:c},"small"===m?k.a.createElement(R.default,{className:g.tick,style:D}):k.a.createElement(z.default,{className:g.tick,style:D})),k.a.createElement("span",{className:$()(g.label,u),style:d},f))}}]),n}(y.PureComponent);I.propTypes={name:E.a.string,disabled:E.a.bool,className:E.a.string,style:E.a.object,iconPosition:E.a.oneOf(["left","right"]),checked:E.a.bool,indeterminate:E.a.bool,onCheck:E.a.func,checkboxStyle:E.a.object,checkboxClassName:E.a.string,labelStyle:E.a.object,labelClassName:E.a.string,variation:E.a.oneOf(["regular","awesome"]),size:E.a.oneOf(["small","medium"]),children:E.a.node},I.defaultProps={iconPosition:"left",disabled:!1,checked:!1,indeterminate:!1,name:"",variation:"regular",size:"medium"},t.default=Object(M.default)((function(e){var t=e.checkbox,n=t.types,i=n.regular,a=n.awesome;return b()({checkbox:{extend:w.isolateMixin,fontFamily:e.fontFamily,fontSize:t.fontSize,position:"relative",display:"inline-block",verticalAlign:"top",cursor:"pointer",userSelect:"none",transition:"color ".concat(t.animationDuration,"ms")},isDisabled:{cursor:"not-allowed",pointerEvents:"none"},regular:b()({color:i.colors.default.text,"&$isDisabled":{color:i.colors.disabled.text},"& $fake":N(i.colors.default),"&$isEnabled:hover $fake":N(i.colors.hover),"&$isEnabled:active $fake":N(i.colors.active),"&$isDisabled $fake":N(i.colors.disabled),"&$isChecked $fake":N(i.colors.checked)},Object(w.focusSourceMixin)("other","& $real:focus ~ $fake",N(i.colors.focus))),awesome:{color:a.colors.default.text,"&$isDisabled":{color:a.colors.disabled.text},"& $fake":N(a.colors.default),"&$isEnabled:hover $fake":N(a.colors.hover),"&$isEnabled$isChecked $fake, &&$indeterminate $fake":N(a.colors.checked),"&$isEnabled$isChecked:hover $fake, &$isEnabled$indeterminate:hover $fake":N(a.colors.checkedHover),"&$isDisabled $fake":N(a.colors.disabled)},fake:{display:"block",boxSizing:"border-box",position:"absolute",borderRadius:t.borderRadius,borderStyle:"solid",borderWidth:1,lineHeight:0,transitionDuration:t.animationDuration,transitionProperty:"border-color, background-color, color","&:before":{position:"absolute",content:'""',opacity:0,top:0,right:0,bottom:.5,left:0,background:"currentColor",height:2,margin:"auto 2px",borderRadius:1,transform:"scaleX(0.4)",transitionDuration:t.animationDuration,transitionProperty:"transform, opacity"},"$indeterminate &:before":{opacity:1,transform:"scaleX(1)"},"$iconright &":{right:0},"$iconleft &":{left:0}},real:{position:"absolute",opacity:0,appearance:"none",pointerEvents:"none"},label:{fontSize:t.fontSize,fontWeight:"normal",display:"inline-block"},tick:{position:"absolute",fill:"currentColor",opacity:0,transitionDuration:t.animationDuration,transitionProperty:"transform, opacity","$isChecked &":{opacity:1}},isEnabled:{},isChecked:{},indeterminate:{},iconright:{},iconleft:{}},["medium","small"].reduce((function(e,n){return b()({},e,v()({},n,{"&$checkbox":{lineHeight:t.sizes[n].size+"px"},"& $fake":{top:"small"===n?Math.round((t.sizes[n].lineHeight-t.sizes[n].size)/2):Math.round((t.sizes[n].lineHeight-t.sizes[n].size)/2)-1,width:t.sizes[n].size,height:t.sizes[n].size},"& $tick":{top:Math.round((t.sizes[n].size-t.sizes[n].tickSize)/2)-1,left:Math.round((t.sizes[n].size-t.sizes[n].tickSize)/2)-1,width:t.sizes[n].tickSize,height:t.sizes[n].tickSize,transform:"translateY(-".concat("small"===n?.3*t.sizes[n].tickSize:.5*t.sizes[n].tickSize,"px)"),"$isChecked&":{transform:"translateY(0)"}},"& $label":{lineHeight:t.sizes[n].lineHeight+"px","$iconright&":{paddingRight:t.sizes[n].size+t.sizes[n].labelMargin},"$iconleft&":{paddingLeft:t.sizes[n].size+t.sizes[n].labelMargin}}}))}),{}))}),{name:"Checkbox"})(I)},580:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var i=n(4),a=n.n(i),o=n(0),r=n.n(o),l=n(124),s=r.a.createElement("path",{d:"M13.993 3c.556 0 1.007.445 1.007.996v9.008a1 1 0 0 1-1.007.996H1.007A1.001 1.001 0 0 1 0 13.004V3.996A1 1 0 0 1 1.007 3h12.986zM10 8.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zM4 2c0-.552.438-1 1.003-1h4.994A.999.999 0 0 1 11 2v1H4V2z"});function c(e){return r.a.createElement(l.default,a()({viewBox:"0 0 15 15"},e),s)}c.displayName="PhotoCameraIcon"},673:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var i=n(4),a=n.n(i),o=n(0),r=n.n(o),l=n(124),s=r.a.createElement("path",{d:"M13 0v13M0 0v13m5.146-3.439l-2.249-2.25a.5.5 0 0 1 0-.708l.706-.706a.5.5 0 0 1 .708 0L5.5 7.086l3.439-3.439a.5.5 0 0 1 .708 0l.706.706a.5.5 0 0 1 0 .708l-4.499 4.5a.502.502 0 0 1-.708 0",fillRule:"evenodd"});function c(e){return r.a.createElement(l.default,a()({},e,{viewBox:"0 0 13 13"}),s)}c.displayName="TickIconSmall"},674:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var i=n(4),a=n.n(i),o=n(0),r=n.n(o),l=n(124),s=r.a.createElement("path",{d:"M12-6H-3h15zM-3 14h15-15zM.146 2.854a.5.5 0 0 0 0 .707l2.647 2.646a.999.999 0 0 0 1.414 0l4.647-4.646a.5.5 0 0 0 0-.707L8.146.146a.5.5 0 0 0-.707 0L3.5 4.086l-1.939-1.94a.5.5 0 0 0-.707 0l-.708.708z",fillRule:"evenodd"});function c(e){return r.a.createElement(l.default,a()({},e,{viewBox:"0 0 9 7"}),s)}c.displayName="TickIcon"},684:function(e,t,n){"use strict";n.r(t);var i=n(23),a=n.n(i),o=n(7),r=n.n(o),l=n(8),s=n.n(l),c=n(9),u=n.n(c),d=n(10),f=n.n(d),h=n(5),m=n.n(h),p=n(26),v=n.n(p),g=n(4),b=n.n(g),y=n(0),k=n.n(y),C=n(1),E=n.n(C),x=n(18),$=n.n(x),z=n(58),R=n(221),w=n(11),M=n(127);var S=function(e){u()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,i=m()(e);if(t()){var a=m()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return f()(this,n)}}(n);function n(){var e;r()(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={visibleItemsCount:null,containerWidth:null},e.items=[],e.container=null,e.moreButton=null,e.handleWindowResize=function(){e.setState({containerWidth:Math.floor(e.container.getBoundingClientRect().width)})},e.saveItemsRefs=function(t,n,i){e.items.length=i,e.items[n]=t},e.saveContainerRef=function(t){e.container=t},e.saveMoreButtonRef=function(t){e.moreButton=t},e.onItemRemove=function(t,n){if(!e.props.disabled){t.stopPropagation();var i=y.Children.toArray(e.props.children).map((function(e){return e.props.value}));e.props.onChange(i.filter((function(e){return e!==n})))}},e}return s()(n,[{key:"componentDidMount",value:function(){this.props.windowEvents.on("resize",this.handleWindowResize,!1),this.props.isExpanded||this.updateVisibleItemsCount()}},{key:"componentDidUpdate",value:function(e,t){0===y.Children.count(this.props.children)&&(this.items=[]),this.shouldVisibleItemsCountUpdate(this.state,t,this.props,e)&&this.updateVisibleItemsCount()}},{key:"componentWillUnmount",value:function(){this.props.windowEvents.removeListener("resize",this.handleWindowResize,!1)}},{key:"shouldVisibleItemsCountUpdate",value:function(e,t,n,i){if(n.isExpanded)return!1;if(n.isExpanded!==i.isExpanded)return!0;if(e.containerWidth!==t.containerWidth)return!0;var a=y.Children.toArray(n.children),o=y.Children.toArray(i.children),r=a.length;if(r!==o.length)return!0;for(;r--;)if(a[r].props.children!==o[r].props.children)return!0;return!1}},{key:"updateVisibleItemsCount",value:function(){var e=this.items.filter(Boolean).length;if(e<1)this.setState({visibleItemsCount:null});else{for(var t=this.props,n=t.theme.tagsInput.types[t.type].horizontalGap,i=Math.floor(this.container.getBoundingClientRect().width),a=Math.ceil(this.moreButton.getBoundingClientRect().width)+n,o=0,r=0;o<e;){var l=Math.ceil(this.items[o].getBoundingClientRect().width)+n;if(r+(o<e-1?l+a:l)>i)break;r+=l,o+=1}this.setState({visibleItemsCount:o<e?o:null})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,i=t.className,o=t.disabled,r=t.classes,l=t.isExpanded,s=t.onMoreClick,c=t.type,u=t.onChange,d=(t.theme,t.windowEvents,a()(t,["children","className","disabled","classes","isExpanded","onMoreClick","type","onChange","theme","windowEvents"])),f=this.state.visibleItemsCount,h=$()(i,r.root,r[c],o?r.isDisabled:r.isEnabled,l&&r.isExpanded),m=y.Children.count(n),p=y.Children.map(n,(function(t,n){if(!t.type||"ruiTagsInputItem"!==t.type.displayName)throw new Error("Child component should be instance of <TagsInputItem />");var i=!l&&null!==f&&f<=n;return Object(y.cloneElement)(t,{nodeRef:function(t){e.saveItemsRefs(t,n,m)},className:$()(t.props.className,r.item,i&&r.isHidden),key:t.props.children,onRemove:u?e.onItemRemove:void 0,type:c,disabled:o})})),v=null===f?0:p.length-f;return k.a.createElement("div",b()({className:h},d),k.a.createElement("div",{ref:this.saveContainerRef,className:r.items},p,!l&&k.a.createElement("div",{className:$()(r.more,s&&r.isClickable,0===v&&r.isHidden),role:s?"button":void 0,ref:this.saveMoreButtonRef,onClick:o?void 0:s},"+",v)))}}]),n}(y.PureComponent);S.propTypes={children:E.a.node,disabled:E.a.bool,className:E.a.string,isExpanded:E.a.bool,onChange:E.a.func,onMoreClick:E.a.func,type:E.a.oneOf(["regular","background"])},S.defaultProps={type:"regular"},t.default=Object(R.default)(Object(M.default)("resize"),Object(z.default)((function(e){var t=e.fontFamily,n=e.tagsInput;return b()({root:{extend:w.isolateMixin,fontSize:n.fontSize,fontFamily:t,fontWeight:400,userSelect:"none",overflow:"hidden"},items:{display:"flex","$isDisabled &":{pointerEvents:"none"}},isExpanded:{"& $items":{flexWrap:"wrap"}},item:{"&&":{flex:"none",alignSelf:"flex-start",whiteSpace:"nowrap"}},more:{composes:"$item",color:n.colors.default.more,transition:"color .2s","$isDisabled &":{color:n.colors.disabled.more}},isClickable:{pointerEvents:"auto","$isEnabled &":{cursor:"pointer","&:hover":{color:n.colors.hover.more},"&:active":{color:n.colors.active.more}},"$isDisabled &":{cursor:"not-allowed"}},regular:{},background:{}},["regular","background"].reduce((function(e,t){var i=n.types[t],a=i.height,o=i.verticalGap,r=i.horizontalGap;return b()({},e,v()({},t,{"& $items":{marginTop:-o,marginLeft:-r,minHeight:a+o},"& $item":{marginTop:o,marginLeft:r,maxWidth:"calc(100% - ".concat(r,"px)"),lineHeight:"".concat(a,"px")}}))}),{}),{isHidden:{"&&":{order:1,visibility:"hidden"}},isEnabled:{},isDisabled:{}})}),{name:"TagsInput"}))(S)},685:function(e,t,n){"use strict";n.r(t);var i=n(23),a=n.n(i),o=n(7),r=n.n(o),l=n(8),s=n.n(l),c=n(9),u=n.n(c),d=n(10),f=n.n(d),h=n(5),m=n.n(h),p=n(26),v=n.n(p),g=n(4),b=n.n(g),y=n(0),k=n.n(y),C=n(1),E=n.n(C),x=n(18),$=n.n(x),z=n(11),R=n(58),w=n(740);var M={fill:null},S=function(e){u()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,i=m()(e);if(t()){var a=m()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return f()(this,n)}}(n);function n(){var e;r()(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(t){var n=e.props,i=n.value;(0,n.onClick)(t,i)},e.handleRemoveClick=function(t){t.stopPropagation();var n=e.props,i=n.value;(0,n.onRemove)(t,i)},e.handleMouseDown=function(e){e.preventDefault()},e}return s()(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.disabled,i=e.nodeRef,o=e.children,r=e.icon,l=e.onClick,s=e.onRemove,c=e.classes,u=e.type,d=e.theme,f=(e.value,a()(e,["className","disabled","nodeRef","children","icon","onClick","onRemove","classes","type","theme","value"]));return k.a.createElement("div",b()({},f,{className:$()(t,c.root,c[u],n?c.isDisabled:c.isEnabled,l&&c.isClickable),onClick:n?void 0:this.handleClick,ref:i}),s&&k.a.createElement(w.default,{className:c.remove,size:null,style:M,onClick:n?void 0:this.handleRemoveClick,onMouseDown:n?void 0:this.handleMouseDown,role:n?void 0:"button"}),r&&Object(y.cloneElement)(r,{className:$()(c.icon,r.props.className),size:d.tagsInput.types[u].iconSize,color:!n&&r.props.color||null}),k.a.createElement("span",{className:c.text},o))}}]),n}(y.Component);S.propTypes={className:E.a.string,value:E.a.any.isRequired,children:E.a.string.isRequired,icon:E.a.element,onClick:E.a.func,onRemove:E.a.func,nodeRef:E.a.func,disabled:E.a.bool,type:E.a.oneOf(["regular","background"])},S.defaultProps={type:"regular"},t.default=Object(R.default)((function(e){var t=e.tagsInput;return b()({root:{extend:z.isolateMixin,display:"inline-flex",fontSize:t.fontSize,whiteSpace:"nowrap",pointerEvents:"none",transition:"background-color .2s"},icon:{alignSelf:"center",fill:"currentColor",transition:"fill .2s, color .2s"},text:{flex:"0 1 auto",overflow:"hidden",textOverflow:"ellipsis",transition:"color .2s"},remove:{order:1,flex:"none",fontSize:15,width:"1em",height:"1em",alignSelf:"center",pointerEvents:"auto",transition:"fill .2s"},isClickable:{pointerEvents:"auto"},isEnabled:{"&$isClickable, & $remove":{cursor:"pointer"}},isDisabled:{"&$isClickable, & $remove":{cursor:"not-allowed"}}},["regular","background"].reduce((function(e,n){var i=t.types[n],a=i.height,o=i.colors;return b()({},e,v()({},n,{borderRadius:i.borderRadius,lineHeight:"".concat(a,"px"),"& $icon":{marginLeft:i.iconLeftMargin,marginRight:i.iconRightMargin},"& $remove":{marginLeft:i.removeLeftMargin,marginRight:i.removeRightMargin},"& $text":{marginLeft:i.paddingLeft,marginRight:i.paddingRight},"& $icon + $text":{marginLeft:0},"& $remove ~ $text":{marginRight:0},"&$isEnabled":{color:o.default.text,background:o.default.background,"&$isClickable":{"&:hover":{background:o.hover.background,"& $remove:not(:hover) ~ $text, & $text:only-child, & $icon:first-child + $text":{color:o.hover.text},"& $remove:not(:hover) + $icon, & $icon:first-child":{fill:"currentColor!important",color:o.hover.icon}},"&:active":{background:o.active.background,"& $remove:not(:active) ~ $text$text, & $text$text:only-child, & $icon:first-child + $text$text":{color:o.active.text},"& $remove:not(:active) + $icon$icon, & $icon$icon:first-child":{fill:"currentColor!important",color:o.active.icon}}},"& $remove":{fill:o.default.icon,"&:hover":{fill:o.hover.icon},"&:active":{fill:o.active.icon}}},"&$isDisabled":{color:o.disabled.text,background:o.disabled.background,"& $remove":{fill:o.disabled.icon}}}))}),{}))}),{name:"TagsInputItem",displayName:"ruiTagsInputItem"})(S)},740:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var i=n(4),a=n.n(i),o=n(0),r=n.n(o),l=n(124),s=r.a.createElement("path",{d:"M0 15V0v15zM15 0v15V0zM8.35 7.5l3.22 3.22a.5.5 0 0 1 0 .71l-.14.14a.5.5 0 0 1-.7 0L7.5 8.35l-3.22 3.22a.5.5 0 0 1-.7 0l-.15-.14a.5.5 0 0 1 0-.7L6.65 7.5 3.43 4.28a.5.5 0 0 1 0-.71l.14-.14a.5.5 0 0 1 .7 0L7.5 6.65l3.22-3.22a.5.5 0 0 1 .7 0l.15.14a.5.5 0 0 1 0 .7L8.35 7.5z"});function c(e){return r.a.createElement(l.default,a()({},e,{viewBox:"0 0 15 15"}),s)}c.displayName="ClearIcon"}}]);