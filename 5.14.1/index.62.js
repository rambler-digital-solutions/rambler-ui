(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(0),o=n.n(a),i=n(641),s=n(640),r=n(60),l=o.a.createElement(i.default,{container:o.a.createElement(r.b,{to:"/home"})},"Кнопка-ссылка");function c(){return o.a.createElement("div",null,o.a.createElement(s.default,null,l,o.a.createElement(i.default,{container:function(e){var t=e.activeClassName;return o.a.createElement(r.b,{to:"/home",activeClassName:t})}},"Кнопка-ссылка")))}},601:function(e,t,n){"use strict";n.r(t),n.d(t,"TabsContext",(function(){return o}));var a=n(0),o=Object(a.createContext)({})},640:function(e,t,n){"use strict";n.r(t);var a=n(17),o=n.n(a),i=n(7),s=n.n(i),r=n(8),l=n.n(r),c=n(9),u=n.n(c),d=n(10),p=n.n(d),f=n(5),m=n.n(f),b=n(26),h=n.n(b),v=n(4),y=n.n(v),g=n(0),x=n.n(g),S=n(1),z=n.n(S),C=n(19),E=n.n(C),w=n(59),k=n(11),P=n(601);var N=function(e){u()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=m()(e);if(t()){var o=m()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return p()(this,n)}}(n);function n(){var e;s()(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={value:e.props.value},e.handleValueChange=function(t,n){e.setValue(n),e.props.onChange&&e.props.onChange(t,n)},e}return l()(n,[{key:"componentDidUpdate",value:function(e){var t=this.props.value;t!==e.value&&this.setValue(t)}},{key:"setValue",value:function(e){e!==this.state.value&&this.setState({value:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.size,i=t.position,s=t.disabled,r=t.className,l=t.classes,c=(t.theme,t.onChange,t.value,o()(t,["children","size","position","disabled","className","classes","theme","onChange","value"])),u=0,d=g.Children.map(n,(function(t){if(!t.type||"RamblerUI(TabsItem)"!==t.type.displayName)throw new Error("Child component should be instance of <Tab />");var n=t.props,o=n.className,r=n.value,c="value"in t.props;return Object(g.cloneElement)(t,{className:E()(o,l.item),key:void 0!==t.key?t.key:"string"==typeof r||"number"==typeof r?r:u++,isSelected:c&&t.props.value===e.state.value,onPress:c&&!s?e.handleValueChange:null,size:a,disabled:s,position:i})}));return x.a.createElement(P.TabsContext.Provider,{value:this.contextValue},x.a.createElement("div",y()({},c,{className:E()(r,l.tabs,l["size-".concat(a)],l["position-".concat(i)],s&&l.isDisabled)}),d))}},{key:"contextValue",get:function(){return{position:this.props.position}}}]),n}(g.Component);N.propTypes={value:z.a.any,className:z.a.string,style:z.a.object,children:z.a.node,size:z.a.oneOf(["small","medium"]),position:z.a.oneOf(["top","bottom"]),disabled:z.a.bool,onChange:z.a.func},N.defaultProps={size:"small",position:"top",disabled:!1},t.default=Object(w.default)((function(e){return y()({tabs:{extend:k.isolateMixin,display:"inline-flex",fontFamily:e.fontFamily,paddingLeft:e.tabs.sidePadding,paddingRight:e.tabs.sidePadding},"position-top":{boxShadow:"inset 0 -1px 0px ".concat(e.tabs.colors.default.outline)},"position-bottom":{boxShadow:"inset 0 1px 0px ".concat(e.tabs.colors.default.outline)},item:{"&&":{flex:"none"}}},["small","medium"].reduce((function(t,n){return y()({},t,h()({},"size-".concat(n),{"& $item:nth-child(1n+2)":{marginLeft:e.tabs.sizes[n].horizontalGap}}))}),{}),{isDisabled:{cursor:"not-allowed"}})}),{name:"Tabs"})(N)},641:function(e,t,n){"use strict";n.r(t);var a=n(17),o=n.n(a),i=n(7),s=n.n(i),r=n(8),l=n.n(r),c=n(48),u=n.n(c),d=n(9),p=n.n(d),f=n(10),m=n.n(f),b=n(5),h=n.n(b),v=n(26),y=n.n(v),g=n(4),x=n.n(g),S=n(0),z=n.n(S),C=n(1),E=n.n(C),w=n(19),k=n.n(w),P=n(59),N=n(11),T=n(126),D=n(601);Object(T.subscribeFocusEvents)();var O=function(e){return{borderColor:e.border,color:e.text}},R=function(e){p()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=h()(e);if(t()){var o=h()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return m()(this,n)}}(n);function n(){var e;s()(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleClick=function(t){var n=u()(e).props;n.onPress&&n.onPress(t,n.value)},e}return l()(n,[{key:"render",value:function(){var e,t,n=this.props,a=n.container,i=n.children,s=n.className,r=n.isSelected,l=n.disabled,c=n.size,u=n.position,d=n.classes,p=(n.value,n.theme,n.onPress,o()(n,["container","children","className","isSelected","disabled","size","position","classes","value","theme","onPress"])),f=k()(s,d.tab,d["position-".concat(u)],d["size-".concat(c)],l?d.isDisabled:d.isEnabled,r&&d.isSelected),m=x()({},p,{className:f,onClick:this.handleClick});return a&&Object(S.isValidElement)(a)?(e=a,t=!0):"function"==typeof a?(e=a({activeClassName:d.isSelected}),t=!0):e=z.a.createElement("button",{type:"button",disabled:l}),t&&(m["aria-disabled"]=l,m.tabIndex=l?-1:null),Object(S.cloneElement)(e,m,i)}}]),n}(S.Component);R.propTypes={value:E.a.any,className:E.a.string,style:E.a.object,children:E.a.node,size:E.a.oneOf(["small","medium"]),position:E.a.oneOf(["top","bottom"]),isSelected:E.a.bool,disabled:E.a.bool,container:E.a.oneOfType([E.a.element,E.a.func]),onPress:E.a.func},R.defaultProps={size:"small",position:"top",isSelected:!1,disabled:!1},R.contextType=D.TabsContext,t.default=Object(P.default)((function(e){var t=e.tabs,n=t.sizes,a=t.colors;return x()({tab:x()({extend:N.isolateMixin,display:"inline-block",userSelect:"none",whiteSpace:"nowrap",cursor:"pointer",outline:"none !important",borderStyle:"solid",borderWidth:0,background:"none",fontWeight:500,transitionDuration:e.tabs.animationDuration,transitionProperty:"color, border-color","&::-moz-focus-inner":{border:"none !important",outline:"none !important"},"&&":O(a.default),"&$isEnabled$isSelected":O(a.selected),"&$isEnabled:hover":O(a.hover)},Object(N.focusSourceMixin)("other","&$isEnabled:focus",O(a.hover)),{"&$isEnabled:active":O(a.active),"&$isDisabled":O(a.disabled),"&$isDisabled$isSelected":O(a.disabledSelected)})},["top","bottom"].reduce((function(t,a){return x()({},t,y()({},"position-".concat(a),x()(y()({},"border".concat("top"===a?"Bottom":"Top","Width"),e.tabs.borderWidth),["small","medium"].reduce((function(e,t){return x()({},e,y()({},"&$size-".concat(t),y()({},"padding".concat("top"===a?"Bottom":"Top"),n[t].verticalPadding)))}),{}))))}),{}),{"size-small":{fontSize:n.small.fontSize,lineHeight:n.small.lineHeight,letterSpacing:1.3,textTransform:"uppercase"},"size-medium":{fontSize:n.medium.fontSize,lineHeight:n.medium.lineHeight},isDisabled:{cursor:"not-allowed",pointerEvents:"none"},isEnabled:{},isSelected:{}})}),{name:"TabsItem"})(R)}}]);