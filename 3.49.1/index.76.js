(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),o=n(2),a=c(o),i=c(n(268)),r=c(n(273)),u=c(n(573));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=a.default.createElement("p",null,"Dropdown content"),s=a.default.createElement("p",null,"Dropdown content"),f=function(e){function t(){var e,n,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=l=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),l.state={inputValue:"",isOpenedFixed:!1,isOpenedRelative:!1},l.openRelative=function(){l.setState({isOpenedRelative:!0})},l.сloseRelative=function(){l.setState({isOpenedRelative:!1})},l.openFixed=function(){l.setState({isOpenedFixed:!0})},l.closeFixed=function(){l.setState({isOpenedFixed:!1})},l.changeInputValue=function(e,t){l.setState({inputValue:t})},d(l,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),l(t,[{key:"render",value:function(){var e=this,t=this.state;return a.default.createElement("div",null,a.default.createElement("div",{style:{paddingBottom:"150px"}},a.default.createElement(i.default,{anchorFullWidth:!0,isOpened:t.isOpenedRelative,onRequestClose:function(){e.preventCloseRelative||e.сloseRelative(),e.preventCloseRelative=!1},anchor:a.default.createElement(u.default,{style:{width:200},value:t.inputValue,placeholder:"Открыть Dropdown Relative",onClick:function(){t.isOpenedRelative||e.openRelative()},onMouseDown:function(){t.isOpenedRelative&&(e.preventCloseRelative=!0)},onChange:this.changeInputValue})},a.default.createElement("div",null,p,a.default.createElement("div",null,a.default.createElement(r.default,{type:"secondary",onClick:this.сloseRelative},"Закрыть"))))),a.default.createElement("div",null,a.default.createElement(i.default,{appendToBody:!0,anchorFullWidth:!0,isOpened:t.isOpenedFixed,onClose:this.closeFixed,anchorPointY:"center",anchor:a.default.createElement(r.default,{type:"outline",onClick:this.openFixed},"Открыть Dropdown Fixed")},a.default.createElement("div",null,s,a.default.createElement("div",null,a.default.createElement(r.default,{type:"secondary",onClick:this.closeFixed},"Закрыть"))))))}}]),t}();t.default=f}}]);