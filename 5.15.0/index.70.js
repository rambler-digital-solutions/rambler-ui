(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{159:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var o=n(7),a=n.n(o),r=n(8),i=n.n(r),l=n(9),s=n.n(l),c=n(10),u=n.n(c),d=n(5),f=n.n(d),p=n(0),g=n.n(p),h=n(550),y=n(288);var v=function(t){s()(n,t);var e=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,o=f()(t);if(e()){var a=f()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return u()(this,n)}}(n);function n(){var t;a()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={loading:!1,buttonLoading:!1},t.load=function(){var e=new Promise((function(e){setTimeout((function(){t.setState({buttonLoading:!1}),e()}),3e3)}));t.setState({loading:e,buttonLoading:!0})},t}return i()(n,[{key:"render",value:function(){return g.a.createElement("div",null,g.a.createElement("div",null,g.a.createElement("div",{style:{height:200,position:"relative"}},g.a.createElement(h.default,{loading:this.state.loading},"Hello world",g.a.createElement(y.default,{type:"secondary",style:{position:"absolute",left:0,bottom:0},loading:this.state.buttonLoading,onClick:this.load},"Загрузить")))))}}]),n}(p.Component)},550:function(t,e,n){"use strict";n.r(e);var o=n(7),a=n.n(o),r=n(8),i=n.n(r),l=n(9),s=n.n(l),c=n(10),u=n.n(c),d=n(5),f=n.n(d),p=n(0),g=n.n(p),h=n(1),y=n.n(h),v=n(19),m=n.n(v),b=n(226),C=n(59);var N=function(t){s()(n,t);var e=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,o=f()(t);if(e()){var a=f()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return u()(this,n)}}(n);function n(){var t;a()(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={loading:!1},t}return i()(n,[{key:"componentDidMount",value:function(){this.updateLoading(this.props.loading)}},{key:"componentDidUpdate",value:function(t){t.loading!==this.props.loading&&this.updateLoading(this.props.loading)}},{key:"updateLoading",value:function(t){var e=this;"boolean"==typeof t?this.setState({loading:t}):(this.setState({loading:!0}),t.then((function(){e.setState({loading:!1})})))}},{key:"render",value:function(){var t=this.state.loading,e=this.props,n=e.className,o=e.loadingClassName,a=e.overlayClassName,r=e.style,i=e.classes,l=e.spinnerClassName,s=e.spinnerColor,c=e.children,u=e.hideContent,d=e.blurContent;return g.a.createElement("div",{style:r,className:m()(i.loader,n,t&&m()(o,i.isLoading))},!(t&&u)&&(d?g.a.createElement("div",{className:m()(t&&d&&i.blur)},c):c),g.a.createElement("div",{className:m()(i.overlay,a,t&&i.isLoading)}),t&&g.a.createElement(b.default,{className:m()(i.spinner,l),color:s}))}}]),n}(p.PureComponent);N.propTypes={className:y.a.string,loadingClassName:y.a.string,overlayClassName:y.a.string,style:y.a.object,spinnerClassName:y.a.string,spinnerColor:y.a.string,loading:y.a.oneOfType([y.a.bool,y.a.object]),children:y.a.node,hideContent:y.a.bool,blurContent:y.a.bool},N.defaultProps={loading:!1,hideContent:!1,blurContent:!1},e.default=Object(C.default)((function(t){return{loader:{position:"relative",width:"100%",minHeight:"100%"},overlay:{position:"absolute",background:t.loader.color,transitionProperty:"opacity",pointerEvents:"none",transitionDuration:t.loader.animationDuration,opacity:0,zIndex:-1,left:0,top:0,right:0,bottom:0},isLoading:{"&$overlay":{opacity:.7,zIndex:"initial"},"&$loader":{pointerEvents:"none"}},blur:{filter:"blur(1px)"}}}),{name:"Loader"})(N)}}]);