(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{550:function(e,t,n){"use strict";n.r(t);var o=n(23),r=n.n(o),i=n(7),a=n.n(i),l=n(8),s=n.n(l),c=n(9),u=n.n(c),d=n(10),p=n.n(d),h=n(5),f=n.n(h),m=n(26),v=n.n(m),g=n(4),y=n.n(g),b=n(0),w=n.n(b),C=n(1),E=n.n(C),S=n(18),$=n.n(S),R=n(515),k=n(527),x=n(665),I=n(664),N=n(516),O=n(286),M=n(54),z=n(58),B=n(11),D=n(652),T=n(837);var A=D.ios||D.android,V=[],P=function(){},L={position:"absolute",top:0,left:0,right:0,bottom:0},F=w.a.createElement("optgroup",{disabled:!0,hidden:!0}),W=function(e,t){return{"& $field":{borderColor:t},"&$isFocused":{"& $menuItem":{backgroundColor:"transparent"},"& $dropdown":{backgroundColor:e,borderColor:t},"& $menu":{borderColor:t}}}},j=function(e){u()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=f()(e);if(t()){var r=f()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p()(this,n)}}(n);function n(){var e;a()(this,n);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={isOpened:!1,inputFocused:!1,searchText:"",value:e.initialValue},e.handleDropdownClose=function(){e.state.isOpened||e.props.inputMode||e.setSearchText("")},e.requestItems=function(t){e.setState({isOpened:!0}),e.setSearchText(t.target.value)},e.changeValue=function(t){var o=e.props,r=o.multiple,i=o.inputMode,a=o.onChange;r||e.setState({isOpened:!1}),i&&e.setSearchText(t||"");var l=n.getValueState(t,e.props,e.state);l&&e.setState(l),a&&a(t),i||r||e.input.focus()},e.focusInput=function(t){var n=e.props.onFocus;e.setState({inputFocused:!0}),n&&!e.state.isOpened&&n(t)},e.blurInput=function(t){if(e.state.inputFocused){var n=e.props,o=n.inputMode,r=n.onBlur;e.setState({isOpened:!1,inputFocused:!1}),o&&e.changeValue(e.state.searchText),r&&r(t)}},e.preventBlurInput=function(e){e.preventDefault()},e.preventSelect=function(e){e.preventDefault(),e.stopPropagation()},e.open=function(){e.props.disabled||e.state.isOpened||(e.setState({isOpened:!0}),setTimeout((function(){e.input.focus()}),0))},e.close=function(){e.state.isOpened&&e.setState({isOpened:!1})},e.openOnArrowClick=function(){e.state.isOpened?e.close():e.open()},e.onClear=function(){e.setSearchText(""),e.changeValue()},e.closeOnEsc=function(t){e.state.isOpened&&(t.stopPropagation(),e.setState({isOpened:!1}),e.input.focus())},e.saveInputRef=function(t){e.input=t},e.closeOnClickOutside=function(t){var n=e.state,o=n.isOpened,r=n.inputFocused,i=n.onBlur;o&&!r&&(e.setState({isOpened:!1,inputFocused:!1}),i&&i(t))},e.keyDown=function(t){var n=t.keyCode,o=e.props,r=o.inputMode,i=o.multiple,a=o.customElementRenderer;n===M.ESCAPE?e.closeOnEsc(t):n===M.TAB?e.setState({isOpened:!1}):n===M.UP||n===M.DOWN?e.openOnArrowKey(t):r&&n===M.ENTER?e.changeValue(e.state.searchText):i||a||n!==M.DELETE&&n!==M.BACKSPACE||e.clearValueOnBackspace(t)},e.Arrow=function(t){var n=e.props,o=n.arrowStyle,i=n.arrowClassName,a=n.arrowIcon,l=n.classes,s=t.className,c=(t.size,t.color,r()(t,["className","size","color"]));return w.a.createElement("div",y()({style:o,className:$()(s,l.arrow,i)},c),a)},e.Clear=function(){return w.a.createElement(T.default,{className:e.props.classes.clear,size:15,color:"currentColor",onMouseDown:e.preventBlurInput,onClick:e.onClear})},e.handleNativeSelectChange=function(t){var o=t.target,r=e.props,i=r.multiple,a=r.onChange,l=i?Array.prototype.map.call(o.selectedOptions,(function(t){return e.values[t.value]})):e.values[o.value],s=n.getValueState(l,e.props,e.state);s&&e.setState(s),a&&a(l)},e}return s()(n,[{key:"setSearchText",value:function(e){this.state.searchText!==e&&(this.setState({searchText:e}),this.props.onSearch&&this.props.onSearch(e))}},{key:"openOnArrowKey",value:function(e){var t=this;e.preventDefault(),this.state.isOpened||this.setState({isOpened:!0}),setTimeout((function(){t.setState({inputFocused:!1})}),0)}},{key:"clearValueOnBackspace",value:function(){var e=this.state,t=e.searchText,n=e.inputFocused;this.props.onSearch&&n&&""===t&&this.changeValue()}},{key:"isValueEmpty",value:function(e){return null==e||""===e}},{key:"getInputProps",value:function(){var e=this.props;e.className,e.style,e.placeholder,e.icon,e.onSearch,e.dropdownClassName,e.dropdownStyle,e.menuClassName,e.menuStyle,e.valuesEquality,e.children,e.value,e.appendToBody,e.classes,e.onFocus,e.onBlur,e.onChange,e.inputValueRenderer,e.iconElementRenderer,e.customElementRenderer,e.multiple,e.multipleType,e.theme,e.arrowClassName,e.arrowStyle,e.arrowIcon,e.containerStyle,e.containerClassName,e.rootStyle,e.rootClassName,e.native,e.clearIcon,e.inputMode,e.lightPlaceholderColor;return r()(e,["className","style","placeholder","icon","onSearch","dropdownClassName","dropdownStyle","menuClassName","menuStyle","valuesEquality","children","value","appendToBody","classes","onFocus","onBlur","onChange","inputValueRenderer","iconElementRenderer","customElementRenderer","multiple","multipleType","theme","arrowClassName","arrowStyle","arrowIcon","containerStyle","containerClassName","rootStyle","rootClassName","native","clearIcon","inputMode","lightPlaceholderColor"])}},{key:"renderSelectedItems",value:function(){var e=this.props;return(Array.isArray(e.value)?e.value:V).map((function(t){var n=e.inputValueRenderer(t);return w.a.createElement(x.default,{value:t,key:n,className:e.classes.multipleValueItem,icon:e.iconElementRenderer?e.iconElementRenderer(t):null},n)}))}},{key:"renderInput",value:function(){var e=this.state,t=e.value,n=e.searchText,o=e.isOpened,r=e.inputFocused,i=this.props,a=i.className,l=i.style,s=i.classes,c=i.placeholder,u=i.icon,d=i.readOnly,p=i.onSearch,h=i.multiple,f=i.inputValueRenderer,m=i.customElementRenderer,v=i.inputMode,g=i.lightPlaceholderColor,C=r||o;if(v&&null!=t&&"string"!=typeof t)throw new Error("In `inputMode` value of <Select /> should be a string");var E="";if((p||v)&&C&&o)E=n;else if(!h&&!m){var S=f(t);E=this.isValueEmpty(S)?"":S}var R="";if(m)(this.isValueEmpty(t)||o&&p)&&(R=c);else if(h){var x=Array.isArray(t)&&t.length>0;(o&&p&&!d||!x)&&(R=c)}else{var I=f(t);R=this.isValueEmpty(I)||v&&""===n?c:p&&!v&&C&&""===n?I:""}var N=(v||!!p)&&(!m&&!h||m&&(o||this.isValueEmpty(t))||h&&(o||!Array.isArray(t)||0===t.length)),O=this.showClearIcon?Object(b.createElement)(this.Clear):this.showArrow&&Object(b.createElement)(this.Arrow,{role:"button",onMouseDown:this.preventBlurInput,onClick:this.openOnArrowClick});return w.a.createElement(k.default,y()({},this.getInputProps(),{inputStyle:l,className:s.input,iconLeft:u,iconRight:O,iconRightClassName:s.icon,activeBorderClassName:s.inputBorder,onKeyDown:this.keyDown,onClick:!p&&o?this.close:this.open,onFocus:this.focusInput,onBlur:this.blurInput,onTouchStart:p?void 0:this.open,onTouchEnd:p?void 0:this.preventSelect,inputClassName:$()(a,s.field,!g&&s.darkPlaceholder),placeholder:R,readOnly:d||!N,value:E,onChange:this.requestItems,inputRef:this.saveInputRef}))}},{key:"renderSelect",value:function(){var e=this,t=this.state,n=t.value,o=t.inputFocused,r=t.isOpened,i=this.props,a=i.dropdownStyle,l=i.dropdownClassName,s=i.containerStyle,c=i.containerClassName,u=i.rootStyle,d=i.rootClassName,p=i.customElementRenderer,h=i.menuStyle,f=i.menuClassName,m=i.valuesEquality,v=i.readOnly,g=i.onChange,y=i.inputMode,C=i.children,E=i.appendToBody,S=i.multiple,k=i.multipleType,x=i.disabled,M=i.size,z=i.variation,B=i.status,D=i.icon,T=i.classes,A=v?void 0:this.props.onSearch,P=o||r,L=S&&Array.isArray(n)&&n.length>0,F=L?this.renderSelectedItems():null,W=!!A||y,j=null;if(p){if(!(this.isValueEmpty(n)||r&&A)){var H=p(n),q=H.props.className;j=Object(b.cloneElement)(H,{className:$()(T.custom,q)})}}else!L||r&&A||(j=w.a.createElement(I.default,{className:$()(T.options,T["options-".concat(k)]),onChange:v||!g?void 0:this.changeValue,isExpanded:!(!r||A),type:k,disabled:x},F));var Y=!v&&r&&(C.length>0||S&&Array.isArray(n)&&n.length>0),U=$()(d,T.root,(v||!x&&!W)&&T.isReadonly,T[M],T[z],T[B],x?T.isDisabled:T.isEnabled,!v&&!x&&W&&T.withSearch,D&&T.withLeftIcon,this.showArrow&&T.withRightIcon,Y&&T.isOpened,P&&T.isFocused,S&&!A&&T.isMultipleWithoutSearch),K=$()(l,T.dropdown,S&&T.isMultipleDropdown);return w.a.createElement(O.default,{handler:this.closeOnClickOutside},(function(t){return w.a.createElement("div",{ref:t,className:U,style:u},w.a.createElement(N.default,{isOpened:Y,anchor:function(t,n){var o=n.contentPointY;return w.a.createElement("div",{className:$()(c,(S||p)&&T.withCustom,"top"===o?T.withBottomDropdown:T.withTopDropdown),style:s,ref:t},e.renderInput(),j)},padding:!1,style:a,className:K,overlayClassName:T.dropdownContainer,appendToBody:E,anchorFullWidth:!0,autoPositionY:!S,anchorPointY:"bottom",contentPointY:"top",closeOnClickOutside:!1,cachePositionOptions:!1,onClose:e.handleDropdownClose},L&&A&&w.a.createElement(I.default,{className:$()(T.selected,T["options-".concat(k)]),onChange:e.changeValue,isExpanded:!0,onMouseDown:e.preventBlurInput,type:k},F),C.length>0&&w.a.createElement(R.default,{style:h,className:$()(f,T.menu,T["menuSize-".concat(M)],A&&S&&T.reducedHeight),itemClassName:T.menuItem,autoFocus:Y&&!o,value:S?Array.isArray(n)?n:V:n,valuesEquality:m,onChange:e.changeValue,onMouseDown:e.preventBlurInput,onEscKeyDown:e.closeOnEsc,multiple:S,size:M},C)))}))}},{key:"renderNativeSelect",value:function(){var e=this,t=this.props,n=t.placeholder,o=t.disabled,r=t.readOnly,i=t.multiple,a=t.multipleType,l=t.children,s=t.size,c=t.variation,u=t.status,d=t.icon,p=t.valuesEquality,h=t.inputValueRenderer,f=t.className,m=t.classes,v=t.rootStyle,g=t.rootClassName,C=this.state,E=C.value,S=C.inputFocused,R=i?[]:"";this.values=[];var x=[];b.Children.forEach(l,(function(t,n){var o=t.props.children;if("RamblerUI(MenuItem)"!==t.type.displayName)throw new Error("Child component should be instance of <MenuItem />");if("string"!=typeof o)throw new Error("Children of <MenuItem /> should be a string");x[n]=w.a.createElement("option",{key:o,value:n},o),e.values[n]=t.props.value,i?E.some((function(e){return p(e,t.props.value)}))&&R.push(n):p(E,t.props.value)&&(R=n)}));var N=i&&Array.isArray(E)&&E.length>0&&this.renderSelectedItems(),O=$()(g,m.root,m.isNative,m.withRightIcon,m[s],m[c],m[u],o?m.isDisabled:m.isEnabled,i&&[m.isMultipleWithoutSearch,m.withCustom],d&&m.withLeftIcon,S&&m.isFocused);return w.a.createElement("div",{className:O,style:v},w.a.createElement(k.default,{className:m.input,inputClassName:$()(f,m.field),disabled:o,onChange:P,value:i?"":h(E)||"",iconLeft:d,iconRight:Object(b.createElement)(this.Arrow),iconRightClassName:m.icon,activeBorderClassName:m.inputBorder,tabIndex:-1,readOnly:!0,placeholder:N?null:n,isFocused:S}),N&&w.a.createElement(I.default,{className:$()(m.options,m["options-".concat(a)]),size:s,type:a,disabled:o},N),w.a.createElement("select",y()({},this.getInputProps(),{className:m.nativeSelect,multiple:i,value:R,onChange:r?void 0:this.handleNativeSelectChange,onBlur:this.blurInput,onFocus:this.focusInput}),n?w.a.createElement("option",{disabled:!0,value:""},n):i&&F,x))}},{key:"render",value:function(){return this.props.native&&A&&!this.props.onSearch?this.renderNativeSelect():this.renderSelect()}},{key:"initialValue",get:function(){var e=this.props,t=e.multiple,n=e.value;return t?Array.isArray(n)?n:V:n}},{key:"showArrow",get:function(){var e=this.props,t=e.children,n=e.clearIcon;return!e.readOnly&&t&&t.length>0&&!n}},{key:"showClearIcon",get:function(){var e=this.props,t=e.multiple,n=e.clearIcon;return!t&&n&&!this.isValueEmpty(this.state.value)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.value===t.value?null:n.getValueState(e.value,e,t)}},{key:"getValueState",value:function(e,t,n){var o=t.valuesEquality,r=t.multiple,i=n.value;if(r){var a=Array.isArray(i)?i:V,l=Array.isArray(e)?e:V;if(l.length===a.length&&l.every((function(e,t){return o(e,a[t])})))return null}else if(o(e,i))return null;return{value:e}}}]),n}(b.PureComponent);j.propTypes={className:E.a.string,style:E.a.object,dropdownClassName:E.a.string,dropdownStyle:E.a.object,menuClassName:E.a.string,menuStyle:E.a.object,multiple:E.a.bool,multipleType:E.a.oneOf(["regular","background"]),clearIcon:E.a.bool,arrowClassName:E.a.string,arrowStyle:E.a.object,value:E.a.any,valuesEquality:E.a.func,inputValueRenderer:E.a.func,iconElementRenderer:E.a.func,placeholder:E.a.string,lightPlaceholderColor:E.a.bool,disabled:E.a.bool,readOnly:E.a.bool,children:E.a.arrayOf(E.a.element),icon:E.a.node,arrowIcon:E.a.node,size:E.a.oneOf(["small","medium"]),variation:E.a.oneOf(["regular","awesome","promo"]),status:E.a.oneOf(["error","warning","success","filled",null]),appendToBody:E.a.bool,onFocus:E.a.func,onBlur:E.a.func,onChange:E.a.func,onSearch:E.a.func,customElementRenderer:E.a.func,rootClassName:E.a.string,rootStyle:E.a.object,containerClassName:E.a.string,containerStyle:E.a.object,inputMode:E.a.bool,native:E.a.bool},j.defaultProps={multiple:!1,multipleType:"regular",clearIcon:!1,status:null,size:"medium",variation:"awesome",disabled:!1,readOnly:!1,appendToBody:!1,inputMode:!1,valuesEquality:function(e,t){return e===t},inputValueRenderer:function(e){return e},children:[]},t.default=Object(z.default)((function(e){var t;return y()({root:{extend:B.isolateMixin,position:"relative","&:hover, &$isFocused":{"& $arrow":{color:e.field.colors.focus.arrow}},"&:hover&$isEnabled":{"& $field":{color:e.select.colors.hover.text}},"&$isDisabled":{cursor:"not-allowed","& $input":{pointerEvents:"none"},"& $arrow":{color:e.field.colors.disabled.arrow+"!important",pointerEvents:"none"}},"&$error":W(e.field.colors.error.background,e.field.colors.error.outline),"&$warning":W(e.field.colors.warning.background,e.field.colors.warning.outline),"&$success":W(e.field.colors.success.background,e.field.colors.success.outline)},dropdownContainer:{"&&":{display:"block"},"$isMultipleWithoutSearch &":{extend:L,bottom:null}},icon:{"$isMultipleWithoutSearch &":{top:"auto",bottom:"auto",margin:0,transform:"translateY(-50%)"}},arrow:{cursor:"pointer",textAlign:"center",lineHeight:0,color:e.field.colors.default.arrow,pointerEvents:"auto","&:empty":{"&:after":{height:8,width:8,position:"absolute",borderStyle:"solid",borderWidth:"0 0 1px 1px",content:'""',transform:"rotate(-45deg) translateY(50%)"}},"& svg":{extend:L,margin:"auto",maxWidth:"100%",maxHeight:"100%"}},input:{"$withCustom &":L},inputBorder:{},field:{"$isReadonly &":{cursor:"pointer",userSelect:"none"},"$withSearch &":{cursor:"text"},"$withCustom &&":{extend:L,height:"100%"}},darkPlaceholder:{"$isEnabled$isReadonly &, $isEnabled:not($isFocused) &":y()({},Object(B.placeholderMixin)("&",{opacity:1,color:e.field.colors.default.text}))},withCustom:{position:"relative","$isOpened &":{zIndex:1}},withTopDropdown:{"& + *":{"& $dropdown":{marginBottom:e.select.dropdown.marginTop}},"$regular$isOpened & + *":{"& $menu":{borderBottomLeftRadius:e.dropdown.borderRadius,borderBottomRightRadius:e.dropdown.borderRadius}}},withBottomDropdown:{"& + *":{"& $dropdown":{marginTop:e.select.dropdown.marginTop}},"$regular$isOpened & + *":{"& $menu":{borderBottomLeftRadius:e.dropdown.borderRadius,borderBottomRightRadius:e.dropdown.borderRadius}}},custom:{position:"relative",pointerEvents:"none"},multipleValueItem:{"$isEnabled $options-regular &":{color:e.field.colors.default.text}},options:{composes:"$custom"},dropdown:{"&&":{boxShadow:e.select.dropdown.boxShadow,overflow:"hidden",border:"1px solid ".concat(e.field.colors.default.outline),borderBottom:0,backgroundColor:e.field.colors.default.background,"&$isMultipleDropdown, $regular &":{transitionProperty:"opacity",top:"0 !important"}}},selected:{borderBottom:"1px solid ".concat(e.field.colors.default.outline),cursor:"default"},menu:{borderBottom:"1px solid ".concat(e.field.colors.default.outline)},menuItem:{backgroundColor:e.field.colors.default.background}},["small","medium"].reduce((function(t,n){return y()({},t,v()({},"menuSize-".concat(n),{maxHeight:7*e.menu.sizes[n].height+2,"&$reducedHeight":{maxHeight:6*e.menu.sizes[n].height+2}}))}),{}),{reducedHeight:{},clear:{flex:"none",alignSelf:"center",color:e.field.icon.colors.default,fill:"currentColor",marginTop:1,marginLeft:1,cursor:"pointer",pointerEvents:"auto","&:hover , &:active":{color:e.field.icon.colors.active}}},["medium","small"].reduce((function(t,n){return y()({},t,v()({},n,y()({"&$isMultipleWithoutSearch":{height:e.field.sizes[n].height},"&$isMultipleWithoutSearch $icon":{top:e.field.sizes[n].height/2},"& $withCustom":{minHeight:e.field.sizes[n].height},"& $arrow":{"&:before":y()({display:"block",content:'" "',position:"absolute",top:-Math.floor((e.field.sizes[n].height-e.field.sizes[n].icon)/2),bottom:-Math.floor((e.field.sizes[n].height-e.field.sizes[n].icon)/2),left:-10,right:-10},Object(B.ifMobile)({top:-Math.floor((e.field.sizes[n].height-e.field.mobile.sizes[n].icon)/2),bottom:-Math.floor((e.field.sizes[n].height-e.field.mobile.sizes[n].icon)/2)})),"&:empty:after":{top:"small"===n?-2:-1,left:1}},"&$isOpened $arrow:empty:after":{transform:"rotate(45deg) translateY(-50%) scaleY(-1)",top:9,left:1},"& $custom":{paddingRight:e.input.sizes[n].padding+1,paddingLeft:e.input.sizes[n].padding+1},"&$withLeftIcon $custom":{paddingLeft:e.field.sizes[n].withIconPadding+1},"&$withRightIcon $custom":{paddingRight:e.field.sizes[n].withIconPadding+1}},["regular","background"].reduce((function(t,o){var r,i=(e.field.sizes[n].height-e.tagsInput.types[o].height)/2;return y()({},t,(r={},v()(r,"& $options$options-".concat(o),{paddingTop:i,paddingBottom:i}),v()(r,"& $selected$options-".concat(o),{padding:"".concat(i-1,"px ").concat(e.input.sizes[n].padding-1,"px")}),r))}),{}))))}),{}),(t={isNative:{"& $icon":{pointerEvents:"none"}},nativeSelect:{extend:[B.isolateMixin,L],width:"100%",height:"100%",opacity:0,overflow:"hidden",outline:0},regular:{},awesome:{},promo:{},success:{},error:{},warning:{},isFocused:{},isOpened:{},isReadonly:{},isEnabled:{},isDisabled:{},isMultipleWithoutSearch:{},isMultipleDropdown:{},withSearch:{},withLeftIcon:{},withRightIcon:{}},v()(t,"options-regular",{}),v()(t,"options-background",{}),t))}),{name:"Select"})(j)},664:function(e,t,n){"use strict";n.r(t);var o=n(23),r=n.n(o),i=n(7),a=n.n(i),l=n(8),s=n.n(l),c=n(9),u=n.n(c),d=n(10),p=n.n(d),h=n(5),f=n.n(h),m=n(26),v=n.n(m),g=n(4),y=n.n(g),b=n(0),w=n.n(b),C=n(1),E=n.n(C),S=n(18),$=n.n(S),R=n(58),k=n(219),x=n(11),I=n(127);var N=function(e){u()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=f()(e);if(t()){var r=f()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p()(this,n)}}(n);function n(){var e;a()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={visibleItemsCount:null,containerWidth:null},e.items=[],e.container=null,e.moreButton=null,e.handleWindowResize=function(){e.setState({containerWidth:Math.floor(e.container.getBoundingClientRect().width)})},e.saveItemsRefs=function(t,n,o){e.items.length=o,e.items[n]=t},e.saveContainerRef=function(t){e.container=t},e.saveMoreButtonRef=function(t){e.moreButton=t},e.onItemRemove=function(t,n){if(!e.props.disabled){t.stopPropagation();var o=b.Children.toArray(e.props.children).map((function(e){return e.props.value}));e.props.onChange(o.filter((function(e){return e!==n})))}},e}return s()(n,[{key:"componentDidMount",value:function(){this.props.windowEvents.on("resize",this.handleWindowResize,!1),this.props.isExpanded||this.updateVisibleItemsCount()}},{key:"componentDidUpdate",value:function(e,t){0===b.Children.count(this.props.children)&&(this.items=[]),this.shouldVisibleItemsCountUpdate(this.state,t,this.props,e)&&this.updateVisibleItemsCount()}},{key:"componentWillUnmount",value:function(){this.props.windowEvents.removeListener("resize",this.handleWindowResize,!1)}},{key:"shouldVisibleItemsCountUpdate",value:function(e,t,n,o){if(n.isExpanded)return!1;if(n.isExpanded!==o.isExpanded)return!0;if(e.containerWidth!==t.containerWidth)return!0;var r=b.Children.toArray(n.children),i=b.Children.toArray(o.children),a=r.length;if(a!==i.length)return!0;for(;a--;)if(r[a].props.children!==i[a].props.children)return!0;return!1}},{key:"updateVisibleItemsCount",value:function(){var e=this.items.filter(Boolean).length;if(e<1)this.setState({visibleItemsCount:null});else{for(var t=this.props,n=t.theme.tagsInput.types[t.type].horizontalGap,o=Math.floor(this.container.getBoundingClientRect().width),r=Math.ceil(this.moreButton.getBoundingClientRect().width)+n,i=0,a=0;i<e;){var l=Math.ceil(this.items[i].getBoundingClientRect().width)+n;if(a+(i<e-1?l+r:l)>o)break;a+=l,i+=1}this.setState({visibleItemsCount:i<e?i:null})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.className,i=t.disabled,a=t.classes,l=t.isExpanded,s=t.onMoreClick,c=t.type,u=t.onChange,d=(t.theme,t.windowEvents,r()(t,["children","className","disabled","classes","isExpanded","onMoreClick","type","onChange","theme","windowEvents"])),p=this.state.visibleItemsCount,h=$()(o,a.root,a[c],i?a.isDisabled:a.isEnabled,l&&a.isExpanded),f=b.Children.count(n),m=b.Children.map(n,(function(t,n){if(!t.type||"RamblerUI(TagsInputItem)"!==t.type.displayName)throw new Error("Child component should be instance of <TagsInputItem />");var o=!l&&null!==p&&p<=n;return Object(b.cloneElement)(t,{nodeRef:function(t){e.saveItemsRefs(t,n,f)},className:$()(t.props.className,a.item,o&&a.isHidden),key:t.props.children,onRemove:u?e.onItemRemove:void 0,type:c,disabled:i})})),v=null===p?0:m.length-p;return w.a.createElement("div",y()({className:h},d),w.a.createElement("div",{ref:this.saveContainerRef,className:a.items},m,!l&&w.a.createElement("div",{className:$()(a.more,s&&a.isClickable,0===v&&a.isHidden),role:s?"button":void 0,ref:this.saveMoreButtonRef,onClick:i?void 0:s},"+",v)))}}]),n}(b.PureComponent);N.propTypes={children:E.a.node,disabled:E.a.bool,className:E.a.string,isExpanded:E.a.bool,onChange:E.a.func,onMoreClick:E.a.func,type:E.a.oneOf(["regular","background"])},N.defaultProps={type:"regular"},t.default=Object(k.default)(Object(I.default)("resize"),Object(R.default)((function(e){var t=e.fontFamily,n=e.tagsInput;return y()({root:{extend:x.isolateMixin,fontSize:n.fontSize,fontFamily:t,fontWeight:400,userSelect:"none",overflow:"hidden"},items:{display:"flex","$isDisabled &":{pointerEvents:"none"}},isExpanded:{"& $items":{flexWrap:"wrap"}},item:{"&&":{flex:"none",alignSelf:"flex-start",whiteSpace:"nowrap"}},more:{composes:"$item",color:n.colors.default.more,transition:"color .2s","$isDisabled &":{color:n.colors.disabled.more}},isClickable:{pointerEvents:"auto","$isEnabled &":{cursor:"pointer","&:hover":{color:n.colors.hover.more},"&:active":{color:n.colors.active.more}},"$isDisabled &":{cursor:"not-allowed"}},regular:{},background:{}},["regular","background"].reduce((function(e,t){var o=n.types[t],r=o.height,i=o.verticalGap,a=o.horizontalGap;return y()({},e,v()({},t,{"& $items":{marginTop:-i,marginLeft:-a,minHeight:r+i},"& $item":{marginTop:i,marginLeft:a,maxWidth:"calc(100% - ".concat(a,"px)"),lineHeight:"".concat(r,"px")}}))}),{}),{isHidden:{"&&":{order:1,visibility:"hidden"}},isEnabled:{},isDisabled:{}})}),{name:"TagsInput"}))(N)},665:function(e,t,n){"use strict";n.r(t);var o=n(23),r=n.n(o),i=n(7),a=n.n(i),l=n(8),s=n.n(l),c=n(9),u=n.n(c),d=n(10),p=n.n(d),h=n(5),f=n.n(h),m=n(26),v=n.n(m),g=n(4),y=n.n(g),b=n(0),w=n.n(b),C=n(1),E=n.n(C),S=n(18),$=n.n(S),R=n(11),k=n(58),x=n(739);var I={fill:null},N=function(e){u()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=f()(e);if(t()){var r=f()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p()(this,n)}}(n);function n(){var e;a()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){var n=e.props,o=n.value;(0,n.onClick)(t,o)},e.handleRemoveClick=function(t){t.stopPropagation();var n=e.props,o=n.value;(0,n.onRemove)(t,o)},e.handleMouseDown=function(e){e.preventDefault()},e}return s()(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.disabled,o=e.nodeRef,i=e.children,a=e.icon,l=e.onClick,s=e.onRemove,c=e.classes,u=e.type,d=e.theme,p=(e.value,r()(e,["className","disabled","nodeRef","children","icon","onClick","onRemove","classes","type","theme","value"]));return w.a.createElement("div",y()({},p,{className:$()(t,c.root,c[u],n?c.isDisabled:c.isEnabled,l&&c.isClickable),onClick:n?void 0:this.handleClick,ref:o}),s&&w.a.createElement(x.default,{className:c.remove,size:null,style:I,onClick:n?void 0:this.handleRemoveClick,onMouseDown:n?void 0:this.handleMouseDown,role:n?void 0:"button"}),a&&Object(b.cloneElement)(a,{className:$()(c.icon,a.props.className),size:d.tagsInput.types[u].iconSize,color:!n&&a.props.color||null}),w.a.createElement("span",{className:c.text},i))}}]),n}(b.Component);N.propTypes={className:E.a.string,value:E.a.any.isRequired,children:E.a.string.isRequired,icon:E.a.element,onClick:E.a.func,onRemove:E.a.func,nodeRef:E.a.func,disabled:E.a.bool,type:E.a.oneOf(["regular","background"])},N.defaultProps={type:"regular"},t.default=Object(k.default)((function(e){var t=e.tagsInput;return y()({root:{extend:R.isolateMixin,display:"inline-flex",fontSize:t.fontSize,whiteSpace:"nowrap",pointerEvents:"none",transition:"background-color .2s"},icon:{alignSelf:"center",fill:"currentColor",transition:"fill .2s, color .2s"},text:{flex:"0 1 auto",overflow:"hidden",textOverflow:"ellipsis",transition:"color .2s"},remove:{order:1,flex:"none",fontSize:15,width:"1em",height:"1em",alignSelf:"center",pointerEvents:"auto",transition:"fill .2s"},isClickable:{pointerEvents:"auto"},isEnabled:{"&$isClickable, & $remove":{cursor:"pointer"}},isDisabled:{"&$isClickable, & $remove":{cursor:"not-allowed"}}},["regular","background"].reduce((function(e,n){var o=t.types[n],r=o.height,i=o.colors;return y()({},e,v()({},n,{borderRadius:o.borderRadius,lineHeight:"".concat(r,"px"),"& $icon":{marginLeft:o.iconLeftMargin,marginRight:o.iconRightMargin},"& $remove":{marginLeft:o.removeLeftMargin,marginRight:o.removeRightMargin},"& $text":{marginLeft:o.paddingLeft,marginRight:o.paddingRight},"& $icon + $text":{marginLeft:0},"& $remove ~ $text":{marginRight:0},"&$isEnabled":{color:i.default.text,background:i.default.background,"&$isClickable":{"&:hover":{background:i.hover.background,"& $remove:not(:hover) ~ $text, & $text:only-child, & $icon:first-child + $text":{color:i.hover.text},"& $remove:not(:hover) + $icon, & $icon:first-child":{fill:"currentColor!important",color:i.hover.icon}},"&:active":{background:i.active.background,"& $remove:not(:active) ~ $text$text, & $text$text:only-child, & $icon:first-child + $text$text":{color:i.active.text},"& $remove:not(:active) + $icon$icon, & $icon$icon:first-child":{fill:"currentColor!important",color:i.active.icon}}},"& $remove":{fill:i.default.icon,"&:hover":{fill:i.hover.icon},"&:active":{fill:i.active.icon}}},"&$isDisabled":{color:i.disabled.text,background:i.disabled.background,"& $remove":{fill:i.disabled.icon}}}))}),{}))}),{name:"TagsInputItem"})(N)},739:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var o=n(4),r=n.n(o),i=n(0),a=n.n(i),l=n(125),s=a.a.createElement("path",{d:"M0 15V0v15zM15 0v15V0zM8.35 7.5l3.22 3.22a.5.5 0 0 1 0 .71l-.14.14a.5.5 0 0 1-.7 0L7.5 8.35l-3.22 3.22a.5.5 0 0 1-.7 0l-.15-.14a.5.5 0 0 1 0-.7L6.65 7.5 3.43 4.28a.5.5 0 0 1 0-.71l.14-.14a.5.5 0 0 1 .7 0L7.5 6.65l3.22-3.22a.5.5 0 0 1 .7 0l.15.14a.5.5 0 0 1 0 .7L8.35 7.5z"});function c(e){return a.a.createElement(l.default,r()({},e,{viewBox:"0 0 15 15"}),s)}c.displayName="ClearIcon"},837:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var o=n(4),r=n.n(o),i=n(0),a=n.n(i),l=n(125),s=a.a.createElement("path",{d:"M0 15V0v15zM15 0v15V0zM8.348 7.5l3.223 3.222a.5.5 0 0 1-.001.708l-.141.141a.5.5 0 0 1-.707-.001L7.5 8.348 4.278 11.57a.5.5 0 0 1-.707.001l-.141-.141a.5.5 0 0 1-.001-.708L6.652 7.5 3.429 4.278a.5.5 0 0 1 .001-.708l.141-.141a.5.5 0 0 1 .707.001L7.5 6.652l3.222-3.222a.5.5 0 0 1 .707-.001l.141.141a.5.5 0 0 1 .001.708L8.348 7.5z",fillRule:"evenodd"});function c(e){return a.a.createElement(l.default,r()({},e,{viewBox:"0 0 15 15"}),s)}c.displayName="ClearIconSmall"}}]);