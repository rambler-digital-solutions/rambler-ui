(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var a=n(232),r=n.n(a),o=n(7),i=n.n(o),s=n(8),l=n.n(s),u=n(9),p=n.n(u),c=n(10),g=n.n(c),h=n(5),d=n.n(h),f=n(562),m=n(0),y=n.n(m);var v=y.a.createElement("h4",null,"default"),C=y.a.createElement("h4",null,"showPageInput"),b=y.a.createElement("h4",null,"pageContainer:"," ",y.a.createElement("code",null,"(pageNumber) => <a href={`#${pageNumber}`} />")),I=function(e){p()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=d()(e);if(t()){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}(n);function n(){var e;i()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:7},e.handleChange=function(t,n){e.setState({page:n})},e}return l()(n,[{key:"render",value:function(){var e=this;return y.a.createElement("div",null,v,r()(Array(15)).map((function(e,t){return y.a.createElement("div",{style:{marginBottom:10},key:t},y.a.createElement(f.default,{pagesCount:15,currentPage:t+1}))})),y.a.createElement("div",{style:{marginTop:40}},["select","input"].map((function(t,n){return y.a.createElement("div",{style:{marginTop:20},key:n},y.a.createElement("h4",{style:{marginBottom:20}},"type ",t),y.a.createElement(f.default,{pagesCount:9999,currentPage:e.state.page,onChange:e.handleChange,type:t}))}))),y.a.createElement("div",{style:{marginTop:40}},C,y.a.createElement(f.default,{showPageInput:!0,pagesCount:9999,currentPage:this.state.page,onChange:this.handleChange})),y.a.createElement("div",{style:{marginTop:40}},b,y.a.createElement(f.default,{pagesCount:9999,currentPage:this.state.page,onChange:this.handleChange,pageContainer:function(e){return y.a.createElement("a",{href:"#".concat(e)})}})),y.a.createElement("div",{style:{marginTop:40}},"this.state.page: ",y.a.createElement("b",null,this.state.page)))}}]),n}(m.Component)},562:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),o=n(17),i=n.n(o),s=n(7),l=n.n(s),u=n(8),p=n.n(u),c=n(9),g=n.n(c),h=n(10),d=n.n(h),f=n(5),m=n.n(f),y=n(0),v=n.n(y),C=n(1),b=n.n(C),I=n(19),w=n.n(I),P=n(59),E=n(11),k=n(55),x=n(602),N=n(537);var R=v.a.createElement("button",{type:"button",tabIndex:-1,disabled:!0}),S=v.a.createElement("button",{type:"button"}),D=function(){return S},z=function(e){return"number"==typeof e&&(0|e)===e},L=function(e){g()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=m()(e);if(t()){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}(n);function n(){var e;l()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pageValue:e.props.currentPage,showInput:!1},e.handleChange=function(t,n){var a=e.props,r=a.onChange,o=a.currentPage;r&&(t.preventDefault(),n&&o!==n&&r(t,n))},e.handlePageChange=function(t){var n=+t.currentTarget.textContent;e.handleChange(t,n)},e.handleInputChange=function(t){e.isPageValid&&(e.handleChange(t,+e.state.pageValue),e.hideInput())},e.onInputChange=function(t,n){t.preventDefault(),e.setState({pageValue:n})},e.handlePressKey=function(t){t.keyCode===k.ENTER&&e.handleInputChange(t)},e.showInput=function(){e.setState({showInput:!0})},e.hideInput=function(){e.setState({showInput:!1})},e}return p()(n,[{key:"componentDidUpdate",value:function(e){e.currentPage!==this.props.currentPage&&this.setState({pageValue:this.props.currentPage})}},{key:"renderPages",value:function(){for(var e=this,t=this.props,n=t.classes,a=t.pagesCount,r=t.currentPage,o=t.onChange,i=t.pagesInRange,s=Math.floor(i/2),l=r-s,u=r+s,p=a-3+1,c=[],g=1;g<=a;g++)(1===g||g===a||g>=l&&g<=u||g<=3&&r<=3||g>=p&&r>=p)&&c.push(g);return(c=c.reduce((function(e,t,n){var a=n>0?c[n-1]:null;return a&&a+1!==t?a+2===t?e.concat(t-1,t):e.concat("".concat(Math.round((a+t)/2)),t):e.concat(t)}),[])).map((function(t){var a=z(t),i=r===t;return Object(y.cloneElement)(e.pageContainer(t),{key:t,className:w()(n.page,i&&n.isSelected),onClick:o?function(n){return e.handleChange(n,+t)}:void 0},a?t:"...")}))}},{key:"renderLitePages",value:function(){var e=this.state.pageValue,t=this.props,n=t.classes,a=t.pagesCount,r=t.pageInputClassName,o=t.pageInputTooltip,i=t.theme;return[v.a.createElement(x.default,{key:0,content:o||i.i18n.pagination.tooltip,isOpened:!this.isPageValid},v.a.createElement(N.default,{variation:"regular",type:"text",size:"small",className:w()(r,n.inputSmall),status:this.isPageValid?null:"error",value:e,onBlur:this.handleInputChange,onChange:this.onInputChange,onKeyUp:this.handlePressKey})),v.a.createElement("span",{key:1,className:n.item},"из ",a)]}},{key:"renderArrow",value:function(e,t,n,a){var r=this.props,o=r.onChange,i=r.classes;return Object(y.cloneElement)(n?R:this.pageContainer(e),{onClick:o&&!n?this.handlePageChange:void 0,className:w()(t,n&&i.isDisabled),key:a},!n&&o?e:null)}},{key:"renderInput",value:function(){var e=this.state,t=e.pageValue,n=e.showInput,a=this.props,r=a.classes,o=a.pageInputClassName,i=a.pageInputLabelClassName,s=a.pageInputLabel,l=a.pageInputTooltip,u=a.theme;return v.a.createElement("div",{className:r.inputWrapper},n?v.a.createElement(x.default,{content:l||u.i18n.pagination.tooltip,isOpened:!this.isPageValid},v.a.createElement(N.default,{autoFocus:!0,variation:"regular",type:"text",size:"small",className:w()(o,r.input),status:this.isPageValid?null:"error",value:t,onBlur:this.handleInputChange,onChange:this.onInputChange,onKeyUp:this.handlePressKey})):v.a.createElement("span",{className:w()(i,r.label),onClick:this.showInput},s||u.i18n.pagination.label))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.classes,a=e.currentPage,o=e.pagesCount,s=(e.pageContainer,e.onChange,e.theme,e.pageInputClassName,e.pageInputLabelClassName,e.pageInputLabel,e.pageInputTooltip,e.pagesInRange,e.showPageInput),l=e.type,u=i()(e,["className","classes","currentPage","pagesCount","pageContainer","onChange","theme","pageInputClassName","pageInputLabelClassName","pageInputLabel","pageInputTooltip","pagesInRange","showPageInput","type"]);if(!(o>1))return null;var p="input"===l?this.renderLitePages():this.renderPages(),c="select"===l&&s&&this.renderInput(),g=this.renderArrow(a-1,n.prevArrow,a<=1,"prev"),h=this.renderArrow(a+1,n.nextArrow,a>=o,"next");return v.a.createElement("div",r()({className:w()(t,n.root)},u),g,p,h,c)}},{key:"pageContainer",get:function(){return this.props.pageContainer||D}},{key:"isPageValid",get:function(){var e=this.state.pageValue;if(""===e)return!0;var t=this.props.pagesCount,n=+e;return z(n)&&n<=t&&n>0}}]),n}(y.Component);L.propTypes={pagesCount:b.a.number,currentPage:b.a.number,className:b.a.string,style:b.a.object,pageContainer:b.a.func,onChange:b.a.func,showPageInput:b.a.bool,pageInputClassName:b.a.string,pageInputLabel:b.a.string,pageInputLabelClassName:b.a.string,pageInputTooltip:b.a.string,pagesInRange:b.a.number,type:b.a.oneOf(["select","input"])},L.defaultProps={currentPage:1,showPageInput:!1,pagesInRange:5,type:"select"},t.default=Object(P.default)((function(e){return{root:{extend:E.isolateMixin,display:"inline-flex",flexWrap:"wrap",justifyContent:"center",fontFamily:e.fontFamily,userSelect:"none",color:e.pagination.colors.default.text,"&:hover $arrow":{opacity:1}},item:{extend:E.isolateMixin,display:"inline-block",flex:"none",height:e.pagination.size,lineHeight:e.pagination.size+"px",border:0,outline:"none !important",background:"none",fontSize:e.pagination.fontSize,whiteSpace:"nowrap",textAlign:"center",cursor:"default","button&::-moz-focus-inner":{border:"none !important",outline:"none !important"}},page:{composes:"$item",minWidth:e.pagination.size,padding:"0 5px",borderRadius:e.pagination.size/2,cursor:"pointer",background:e.pagination.colors.default.background,transitionDuration:e.tabs.animationDuration,transitionProperty:"color, background-color","&&":{color:e.pagination.colors.default.text,fontWeight:400},"&$isSelected":{color:e.pagination.colors.selected.text,fontWeight:500,backgroundColor:e.pagination.colors.selected.background},"&:focus":{color:e.pagination.colors.focus.text},"&:hover":{color:e.pagination.colors.hover.text},"&:active":{color:e.pagination.colors.active.text,background:e.pagination.colors.active.background},"&$isDisabled":{color:e.pagination.colors.disabled.text,background:"none"}},arrow:{composes:"$item",position:"relative",width:e.pagination.size,cursor:"pointer",overflow:"hidden",paddingLeft:e.pagination.size,opacity:0,"&&":{transitionDuration:e.tabs.animationDuration,transitionProperty:"fill, opacity",color:e.pagination.colors.default.arrow},"&&:focus":{color:e.pagination.colors.focus.arrow},"&&:hover":{color:e.pagination.colors.hover.arrow},"&&:active":{color:e.pagination.colors.active.arrow},"&$isDisabled":{color:e.pagination.colors.disabled.arrow+"!important"},"&:before":{boxSizing:"border-box",position:"absolute",top:6,left:13,content:'""',width:11,height:11,border:"solid",borderWidth:"0 0 2px 2px",transform:"rotate(45deg)",transformOrigin:"left bottom"}},prevArrow:{composes:"$arrow",marginRight:7},nextArrow:{composes:"$arrow",marginLeft:7,transform:"scaleX(-1)"},isDisabled:{cursor:"not-allowed"},isSelected:{},inputWrapper:{paddingLeft:20},input:{width:76},inputSmall:{width:45,marginRight:10},label:{fontSize:e.pagination.fontSize,lineHeight:e.pagination.size+"px",cursor:"pointer",color:e.pagination.colors.label.default,transitionDuration:e.tabs.animationDuration,transitionProperty:"color","&:hover, &:focus":{color:e.pagination.colors.label.hover}}}}),{name:"Pagination"})(L)}}]);