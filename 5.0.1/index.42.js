(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n(7),a=n.n(r),l=n(8),u=n.n(l),i=n(9),c=n.n(i),o=n(10),p=n.n(o),s=n(5),f=n.n(s),d=n(0),m=n.n(d),h=n(659),g=n(660),y=n(661),x=n(662),E=n(663),b=n(664),v=n(667),N=n(668),T=n(665),S=n(666),D=n(669),R=n(670);var O=m.a.createElement("div",null,m.a.createElement(h.default,null,"Heading level 1"),m.a.createElement(g.default,null,"Heading level 2"),m.a.createElement(y.default,null,"Heading level 3"),m.a.createElement(x.default,null,"Text Text Text Text Text Text"),m.a.createElement(E.default,null,"Quote Quote Quote"),m.a.createElement(E.default,null,m.a.createElement("p",null,"First paragraph"),m.a.createElement("p",null,"Second paragraph")),m.a.createElement(b.default,null,"Epigraph Epigraph Epigraph"),m.a.createElement(v.default,null,"Description Description Description"),m.a.createElement(N.default,null,"GalleryDescription GalleryDescription GalleryDescription"),m.a.createElement(T.default,null,"Source Source Source"),m.a.createElement("br",null),m.a.createElement(S.default,null,"Timestamp Timestamp Timestamp"),m.a.createElement("br",null),m.a.createElement(D.default,null,"PhotoSource PhotoSource PhotoSource"),m.a.createElement(R.default,null,m.a.createElement("li",null,"Unordered list"),m.a.createElement("li",null,"Unordered list"),m.a.createElement("li",null,"Unordered",m.a.createElement("br",null),"list")),m.a.createElement(R.default,{numbered:!0},m.a.createElement("li",null,"Ordered list"),m.a.createElement("li",null,"Ordered list"),m.a.createElement("li",null,"Ordered",m.a.createElement("br",null),"list"))),w=function(e){c()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=f()(e);if(t()){var a=f()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}(n);function n(){return a()(this,n),t.apply(this,arguments)}return u()(n,[{key:"render",value:function(){return O}}]),n}(d.Component)},518:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),l=n(8),u=n.n(l),i=n(9),c=n.n(i),o=n(10),p=n.n(o),s=n(5),f=n.n(s),d=n(4),m=n.n(d),h=n(23),g=n.n(h),y=n(0),x=n(1),E=n.n(x),b=n(18),v=n.n(b),N=n(58),T=n(11);var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.fontWeight,n=void 0===t?400:t,r=e.lineHeight,a=(e.mobile,g()(e,["fontWeight","lineHeight","mobile"]));return m()({},a,{fontWeight:n,lineHeight:r&&r+"px"})},D=function(e){c()(n,e);var t=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=f()(e);if(t()){var a=f()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}(n);function n(){return a()(this,n),t.apply(this,arguments)}return u()(n,[{key:"render",value:function(){var e=this.props,t=e.tagName,n=e.className,r=e.classes,a=e.type,l=e.uppercase,u=e.children,i=(e.theme,g()(e,["tagName","className","classes","type","uppercase","children","theme"]));return Object(y.createElement)(t,m()({className:v()(n,r.reset,a&&r[a],l&&r.uppercase)},i),u)}}]),n}(y.PureComponent);D.propTypes={type:E.a.oneOf(["h1","h2","h3","text","quote","epigraph","source","timestamp","description","galleryDescription","photoSource","list"]),tagName:E.a.string,children:E.a.node,uppercase:E.a.bool},D.defaultProps={tagName:"div"},t.default=Object(N.default)((function(e){var t=e.typography;return{reset:T.isolateMixin,h1:m()({extend:S(t.h1),margin:"15px 0"},Object(T.ifMobile)({extend:S(t.h1.mobile)})),h2:m()({extend:S(t.h2),margin:"20px 0"},Object(T.ifMobile)({extend:S(t.h2.mobile)})),h3:m()({extend:S(t.h3),margin:"20px 0"},Object(T.ifMobile)({extend:S(t.h3.mobile)})),text:m()({extend:S(t.text),margin:"20px 0"},Object(T.ifMobile)({extend:S(t.text.mobile)})),quote:{extend:S(t.quote),margin:"30px 0",paddingLeft:37,borderLeft:"3px solid ".concat(t.quote.borderColor),"& p":{margin:0},"& p + p":{marginTop:20}},epigraph:{extend:S(t.epigraph),margin:"20px 0"},source:{composes:"$uppercase",extend:S(t.source)},timestamp:{extend:S(t.timestamp)},description:{extend:S(t.description),margin:"20px 0 25px"},galleryDescription:{extend:S(t.galleryDescription)},photoSource:{extend:S(t.photoSource)},list:{extend:S(t.text),position:"relative",margin:"30px 0",paddingLeft:40,listStyle:"none","& li + li":{marginTop:15},"& li:before":{position:"absolute",left:0},"ul& li:before":{content:'""',marginTop:9,width:10,height:10,borderRadius:"50%",background:t.list.bullet.color},"ol&":{counterReset:"order"},"ol& li:before":{extend:S(t.list.number),counterIncrement:"order",content:'counter(order)"."',color:t.list.number.color}},uppercase:{textTransform:"uppercase",letterSpacing:1.3/11+"em"}}}),{name:"Typography"})(D)},659:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"h1"},e,{type:"h1"}))}},660:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"h2"},e,{type:"h2"}))}},661:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"h3"},e,{type:"h3"}))}},662:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"p"},e,{type:"text"}))}},663:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"blockquote"},e,{type:"quote"}))}},664:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"div"},e,{type:"epigraph"}))}},665:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"span"},e,{type:"source"}))}},666:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"time"},e,{type:"timestamp"}))}},667:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"div"},e,{type:"description"}))}},668:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"div"},e,{type:"galleryDescription"}))}},669:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(0),u=n.n(l),i=n(518);t.default=function(e){return u.a.createElement(i.default,a()({tagName:"span"},e,{type:"photoSource"}))}},670:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),l=n(23),u=n.n(l),i=n(0),c=n.n(i),o=n(1),p=n.n(o),s=n(518),f=function(e){var t=e.numbered,n=u()(e,["numbered"]);return c.a.createElement(s.default,a()({},n,{tagName:t?"ol":"ul",type:"list"}))};f.propTypes={numbered:p.a.bool},t.default=f}}]);