(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(0),o=n.n(a),i=n(641),s=n(640),r=n(60),l=o.a.createElement(i.default,{container:o.a.createElement(r.b,{to:"/home"})},"Кнопка-ссылка");function c(){return o.a.createElement("div",null,o.a.createElement(s.default,null,l,o.a.createElement(i.default,{container:function(e){var t=e.activeClassName;return o.a.createElement(r.b,{to:"/home",activeClassName:t})}},"Кнопка-ссылка")))}},601:function(e,t,n){"use strict";n.r(t),n.d(t,"TabsContext",(function(){return o}));var a=n(0),o=Object(a.createContext)({})},640:function(e,t,n){"use strict";n.r(t);var a=n(17),o=n.n(a),i=n(7),s=n.n(i),r=n(8),l=n.n(r),c=n(9),u=n.n(c),d=n(10),p=n.n(d),f=n(5),b=n.n(f),m=n(26),h=n.n(m),v=n(4),y=n.n(v),g=n(0),x=n.n(g),S=n(1),E=n.n(S),C=n(19),z=n.n(C),T=n(59),k=n(16),R=n(601),w=n(55);var D=function(e){u()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=b()(e);if(t()){var o=b()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return p()(this,n)}}(n);function n(){var e;s()(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).tabsRef=Object(g.createRef)(),e.state={value:e.props.value},e.onKeyUp=function(t){var n=e.props.children,a=t.target.dataset.value,o=n.findIndex((function(e){return e.props.value===a})),i=!o,s=o===n.length-1,r=e.tabsRef.current.children;switch(t.keyCode){case w.LEFT:r[i?n.length-1:o-1].focus();break;case w.RIGHT:r[s?0:o+1].focus();break;case w.ENTER:e.handleValueChange(t,n[o].props.value)}},e.handleValueChange=function(t,n){e.setValue(n),e.props.onChange&&e.props.onChange(t,n)},e}return l()(n,[{key:"componentDidUpdate",value:function(e){var t=this.props.value;t!==e.value&&this.setValue(t)}},{key:"setValue",value:function(e){e!==this.state.value&&this.setState({value:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.size,i=t.position,s=t.disabled,r=t.className,l=t.classes,c=(t.theme,t.onChange,t.value,o()(t,["children","size","position","disabled","className","classes","theme","onChange","value"])),u=0,d=g.Children.map(n,(function(t,n){if(!t.type||"RamblerUI(TabsItem)"!==t.type.displayName)throw new Error("Child component should be instance of <Tab />");var o=t.props,r=o.className,c=o.value,d="value"in t.props;return Object(g.cloneElement)(t,{className:z()(r,l.item),key:void 0!==t.key?t.key:"string"==typeof c||"number"==typeof c?c:u++,isSelected:d&&t.props.value===e.state.value,onKeyUp:d&&!s?e.onKeyUp:null,onPress:d&&!s?e.handleValueChange:null,size:a,disabled:s,position:i,tabIndex:n?-1:0})}));return x.a.createElement(R.TabsContext.Provider,{value:this.contextValue},x.a.createElement("div",y()({},c,{role:"tablist",ref:this.tabsRef},s&&{"aria-disabled":!0},{className:z()(r,l.tabs,l["size-".concat(a)],l["position-".concat(i)],s&&l.isDisabled)}),d))}},{key:"contextValue",get:function(){return{position:this.props.position}}}]),n}(g.Component);D.propTypes={value:E.a.any,className:E.a.string,style:E.a.object,children:E.a.node,size:E.a.oneOf(["small","medium"]),position:E.a.oneOf(["top","bottom"]),disabled:E.a.bool,onChange:E.a.func},D.defaultProps={size:"small",position:"top",disabled:!1},t.default=Object(T.default)((function(e){return y()({tabs:{extend:k.isolateMixin,display:"inline-flex",fontFamily:e.tabs.fontFamily,paddingLeft:e.tabs.sidePadding,paddingRight:e.tabs.sidePadding},"position-top":{boxShadow:"inset 0 -1px 0px ".concat(e.tabs.colors.default.outline)},"position-bottom":{boxShadow:"inset 0 1px 0px ".concat(e.tabs.colors.default.outline)},item:{"&&":{flex:"none"}}},["small","medium"].reduce((function(t,n){return y()({},t,h()({},"size-".concat(n),{"& $item:nth-child(1n+2)":{marginLeft:e.tabs.sizes[n].horizontalGap}}))}),{}),{isDisabled:{cursor:"not-allowed"}})}),{name:"Tabs"})(D)},641:function(e,t,n){"use strict";n.r(t);var a=n(17),o=n.n(a),i=n(7),s=n.n(i),r=n(8),l=n.n(r),c=n(48),u=n.n(c),d=n(9),p=n.n(d),f=n(10),b=n.n(f),m=n(5),h=n.n(m),v=n(26),y=n.n(v),g=n(4),x=n.n(g),S=n(0),E=n.n(S),C=n(1),z=n.n(C),T=n(19),k=n.n(T),R=n(59),w=n(16),D=n(126),N=n(601);Object(D.subscribeFocusEvents)();var P=function(e){return{borderColor:e.border,color:e.text,textDecoration:e.textDecoration}},O=function(e){p()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=h()(e);if(t()){var o=h()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return b()(this,n)}}(n);function n(){var e;s()(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleClick=function(t){var n=u()(e).props;n.onPress&&n.onPress(t,n.value)},e}return l()(n,[{key:"render",value:function(){var e,t,n=this.props,a=n.container,i=n.children,s=n.className,r=n.isSelected,l=n.disabled,c=n.size,u=n.position,d=n.classes,p=n.value,f=(n.theme,n.onPress,o()(n,["container","children","className","isSelected","disabled","size","position","classes","value","theme","onPress"])),b=k()(s,d.tab,d["position-".concat(u)],d["size-".concat(c)],l?d.isDisabled:d.isEnabled,r&&d.isSelected),m=x()({},f,{className:b,onClick:this.handleClick});return a&&Object(S.isValidElement)(a)?(e=a,t=!0):"function"==typeof a?(e=a({activeClassName:d.isSelected}),t=!0):e=E.a.createElement("button",{type:"button",disabled:l,role:"tab","aria-selected":r,"aria-controls":"".concat(p,"_tab"),"data-value":p}),t&&(m["aria-disabled"]=l,m.tabIndex=l?-1:null),Object(S.cloneElement)(e,m,i)}}]),n}(S.Component);O.propTypes={value:z.a.any,className:z.a.string,style:z.a.object,children:z.a.node,size:z.a.oneOf(["small","medium"]),position:z.a.oneOf(["top","bottom"]),isSelected:z.a.bool,disabled:z.a.bool,container:z.a.oneOfType([z.a.element,z.a.func]),onPress:z.a.func},O.defaultProps={size:"small",position:"top",isSelected:!1,disabled:!1},O.contextType=N.TabsContext,t.default=Object(R.default)((function(e){var t=e.tabs,n=t.sizes,a=t.colors;return x()({tab:x()({extend:w.isolateMixin,display:"inline-block",userSelect:"none",whiteSpace:"nowrap",cursor:"pointer",outline:"none !important",borderStyle:"solid",borderWidth:0,background:"none",fontWeight:e.tabs.fontWeight,transitionDuration:e.tabs.animationDuration,transitionProperty:"color, border-color","&::-moz-focus-inner":{border:"none !important",outline:"none !important"},"&&":P(a.default),"&$isEnabled$isSelected":P(a.selected),"&$isEnabled$isSelected:hover":P(a.selectedHover),"&$isEnabled$isSelected:active":P(a.selectedActive),"&$isEnabled:hover":P(a.hover)},Object(w.focusSourceMixin)("other","&$isEnabled:focus",P(a.hover)),{"&$isEnabled:active":P(a.active),"&$isDisabled":P(a.disabled),"&$isDisabled$isSelected":P(a.disabledSelected)})},["top","bottom"].reduce((function(t,a){return x()({},t,y()({},"position-".concat(a),x()(y()({},"border".concat("top"===a?"Bottom":"Top","Width"),e.tabs.borderWidth),["small","medium"].reduce((function(e,t){return x()({},e,y()({},"&$size-".concat(t),y()({},"padding".concat("top"===a?"Bottom":"Top"),n[t].verticalPadding)))}),{}))))}),{}),{"size-small":{fontSize:n.small.fontSize,lineHeight:n.small.lineHeight,letterSpacing:n.small.letterSpacing,textTransform:n.small.textTransform},"size-medium":{fontSize:n.medium.fontSize,lineHeight:n.medium.lineHeight,letterSpacing:n.medium.letterSpacing,textTransform:n.medium.textTransform},isDisabled:{cursor:"not-allowed",pointerEvents:"none"},isEnabled:{},isSelected:{}})}),{name:"TabsItem"})(O)}}]);