(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(7),i=n.n(a),l=n(8),o=n.n(l),r=n(9),c=n.n(r),u=n(10),s=n.n(u),d=n(5),p=n.n(d),f=n(0),v=n.n(f),h=n(516),R=n(281),m=n(527);var y=v.a.createElement("p",null,"Dropdown content"),E=v.a.createElement("p",null,"Dropdown content"),w=function(e){c()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=p()(e);if(t()){var i=p()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return s()(this,n)}}(n);function n(){var e;i()(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={inputValue:"",isOpenedFixed:!1,isOpenedRelative:!1},e.openRelative=function(){e.setState({isOpenedRelative:!0})},e.сloseRelative=function(){e.setState({isOpenedRelative:!1})},e.openFixed=function(){e.setState({isOpenedFixed:!0})},e.closeFixed=function(){e.setState({isOpenedFixed:!1})},e.changeInputValue=function(t,n){e.setState({inputValue:n})},e}return o()(n,[{key:"render",value:function(){var e=this,t=this.state;return v.a.createElement("div",null,v.a.createElement("div",{style:{paddingBottom:"150px"}},v.a.createElement(h.default,{anchorFullWidth:!0,isOpened:t.isOpenedRelative,onRequestClose:function(){e.preventCloseRelative||e.сloseRelative(),e.preventCloseRelative=!1},anchor:function(n){return v.a.createElement(m.default,{style:{width:200},value:t.inputValue,placeholder:"Открыть Dropdown Relative",onClick:function(){t.isOpenedRelative||e.openRelative()},onMouseDown:function(){t.isOpenedRelative&&(e.preventCloseRelative=!0)},onChange:e.changeInputValue,containerRef:n})}},v.a.createElement("div",null,y,v.a.createElement("div",null,v.a.createElement(R.default,{type:"secondary",onClick:this.сloseRelative},"Закрыть"))))),v.a.createElement("div",null,v.a.createElement(h.default,{appendToBody:!0,anchorFullWidth:!0,isOpened:t.isOpenedFixed,onClose:this.closeFixed,anchorPointY:"center",anchor:function(t){return v.a.createElement(R.default,{type:"outline",onClick:e.openFixed,nodeRef:t},"Открыть Dropdown Fixed")}},v.a.createElement("div",null,E,v.a.createElement("div",null,v.a.createElement(R.default,{type:"secondary",onClick:this.closeFixed},"Закрыть"))))))}}]),n}(f.Component)}}]);