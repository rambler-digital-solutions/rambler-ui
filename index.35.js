(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{60:function(e,n,a){"use strict";a.r(n),a.d(n,"meta",(function(){return p})),a.d(n,"default",(function(){return A}));var t=a(4),s=a.n(t),r=a(23),c=a.n(r),o=(a(0),a(688)),l=a(691),p={title:"Разработка",toc:["Установка","Песочница","Структура библиотеки","Стили","Темизация","Документация","Тестирование","Сборка","Публикация новой версии","Сборка и публикация сайта"]},m={meta:p},b=Object(l.a)(p)((function(e){return e.children})),i=Object(o.b)("h2",null,"Установка"),j=Object(o.b)("p",null,"Склонируйте репозиторий локально и установите зависимости:"),d=Object(o.b)("h2",null,"Песочница"),u=Object(o.b)("p",null,"Для запуска песочницы выполните:"),h=Object(o.b)("p",null,"На определенном порту/хосте:"),N=Object(o.b)("h2",null,"Структура библиотеки"),O=Object(o.b)("p",null,"Каждый компонент, тесты и документация к нему располагаются соответственно следующей структуре:"),f=Object(o.b)("h3",null,"Стили"),g=Object(o.b)("inlineCode",{parentName:"p"},"withStyles"),y=Object(o.b)("inlineCode",{parentName:"a"},"react-jss"),v=Object(o.b)("inlineCode",{parentName:"p"},"withStyles"),w=Object(o.b)("h3",null,"Темизация"),x=Object(o.b)("h3",null,"Документация"),k=Object(o.b)("inlineCode",{parentName:"p"},"docs/pages/components"),C=Object(o.b)("inlineCode",{parentName:"a"},"mdx"),T=Object(o.b)("inlineCode",{parentName:"p"},"React"),E=Object(o.b)("h2",null,"Тестирование"),B=Object(o.b)("p",null,"Для тестов используется ",Object(o.b)("inlineCode",{parentName:"p"},"karma"),", ",Object(o.b)("inlineCode",{parentName:"p"},"jasmine")," и headless ",Object(o.b)("inlineCode",{parentName:"p"},"Chrome")," и ",Object(o.b)("inlineCode",{parentName:"p"},"Firefox")," для их запуска:"),S=Object(o.b)("p",null,"Для запуска тестов определенного компонента или компонентов:"),P=Object(o.b)("h2",null,"Сборка"),M=Object(o.b)("p",null,"Скомпилированые файлы кладутся в папку ",Object(o.b)("inlineCode",{parentName:"p"},"./build"),"."),R=Object(o.b)("h2",null,"Публикация новой версии"),F=Object(o.b)("p",null,"Эта комманда обновит версию в ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),", поставит тег и запушит. Непосредственно публикация производится в ",Object(o.b)("inlineCode",{parentName:"p"},"ci"),"."),L=Object(o.b)("h2",null,"Сборка и публикация сайта"),_=Object(o.b)("p",null,"Выполните следующую комманду с указанием версий, в которые необходимо опубликовать текущую сборку:");function A(e){var n=e.components,a=c()(e,["components"]);return Object(o.b)(b,s()({},m,a,{components:n,mdxType:"MDXLayout"}),i,j,Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-sh"}),"git ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-built_in"}),"clone")," git@github.com:rambler-digital-solutions/rambler-ui.git\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-built_in"}),"cd")," ./rambler-ui\nnpm install")),d,u,Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-sh"}),"npm start")),h,Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-sh"}),"npm start -- --port 8080 --host 127.0.0.1")),N,O,Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-sh"}),"docs/\n  pages/\n    components/\n      Button/     ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"# документация"),"\n        index.md\n        example.js\nsrc/\n  Button/\n    index.js        ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"# импорты"),"\n    Button.js       ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"# код компонента"),"\n    Button.test.js  ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"# тесты"))),f,Object(o.b)("p",null,"Для стилей библиотеки используется ",Object(o.b)("a",s()({parentName:"p"},{href:"https://github.com/cssinjs/jss"}),"JSS"),":"),Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-js"}),Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"// src/Button/Button.js"),"\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"import")," React, {PureComponent} ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'react'"),"\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"import")," {withStyles} ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'../theme'"),"\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"const")," styles = {\n  ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-attr"}),"root"),": { ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"// имя css-класса внутри комонента"),"\n    ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-attr"}),"color"),": ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'black'"),"\n  }\n}\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-class"}),Object(o.b)("span",s()({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-title"}),"Button")," ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-title"}),"PureComponent")," "),"{\n  render() {\n    ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"const")," {classes, children} = ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"this"),".props\n\n    ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"return")," (\n      ",Object(o.b)("span",s()({parentName:"code"},{className:"xml"}),Object(o.b)("span",s()({parentName:"span"},{className:"hljs-tag"}),"<",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-name"}),"ul")," ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-attr"}),"className"),"=",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-string"}),"{classes.root}"),">"),"\n        {children}\n      ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-tag"}),"</",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-name"}),"ul"),">")),"\n    )\n  }\n}\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"default")," withStyles(styles, {",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-attr"}),"name"),": ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'Button'"),"})(Button)")),Object(o.b)("p",null,"Более подробно про ",g," описано в документации ",Object(o.b)("a",s()({parentName:"p"},{href:"https://github.com/cssinjs/react-jss"}),y),". В нашей реализации вторым аргументом в ",v," передается объект с опциями, содержащий имя компонента для генерации детерминированных имен классов."),w,Object(o.b)("p",null,"Библиотека позволяет темизировать компоненты путем изменеия базовых цветов и свойств отдельных компонентов, путем расширения ",Object(o.b)("a",s()({parentName:"p"},{href:"https://github.com/rambler-digital-solutions/rambler-ui/tree/master/src/theme/create-theme.js"}),"базовой темы"),". Соответственно при описании стилей компонента, необходимо базовые параметры: цвета, шрифты, размеры - выносить в тему и переиспользовать внутри:"),Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-js"}),Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"// src/Button/Button.js"),"\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"import")," React, {PureComponent} ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'react'"),"\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"import")," {withStyles} ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'../theme'"),"\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"const")," styles = ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-function"}),Object(o.b)("span",s()({parentName:"span"},{className:"hljs-params"}),"theme")," =>")," ({\n  ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-attr"}),"root"),": { ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"// имя css-класса внутри комонента"),"\n    ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-attr"}),"color"),": theme.button.color\n  }\n})\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-class"}),Object(o.b)("span",s()({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-title"}),"Button")," ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-title"}),"PureComponent")," "),"{\n  render() {\n    ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"const")," {classes, children} = ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"this"),".props\n\n    ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"return")," (\n      ",Object(o.b)("span",s()({parentName:"code"},{className:"xml"}),Object(o.b)("span",s()({parentName:"span"},{className:"hljs-tag"}),"<",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-name"}),"ul")," ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-attr"}),"className"),"=",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-string"}),"{classes.root}"),">"),"\n        {children}\n      ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-tag"}),"</",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-name"}),"ul"),">")),"\n    )\n  }\n}\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"default")," withStyles(styles, {",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-attr"}),"name"),": ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'Button'"),"})(Button)\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"// src/theme/create-theme.js"),"\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"import")," deepmerge ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'deepmerge'"),"\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"const")," createTheme = ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-function"}),Object(o.b)("span",s()({parentName:"span"},{className:"hljs-params"}),"config")," =>")," {\n  ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"const")," {colors} = config\n\n  ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"return")," deepmerge({\n    ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-attr"}),"fontFamily"),": ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'Roboto, sans-serif'"),",\n    ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-attr"}),"button"),": {\n      ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-attr"}),"color"),": ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'black'"),"\n      ...\n    },\n    ...\n  })\n}")),Object(o.b)("p",null,"Более подробно о создании собственной темы можно посмотреть в ",Object(o.b)("a",s()({parentName:"p"},{href:"https://github.com/rambler-digital-solutions/rambler-ui/tree/master/examples/theming"}),"примере"),"."),x,Object(o.b)("p",null,"Чтобы добавить компонент в документацию, нужно добавить папку с названием компонента в документацию ",k,". Для документации используется формат ",Object(o.b)("a",s()({parentName:"p"},{href:"https://github.com/mdx-js/mdx"}),C),", который позволяет использовать ",T,"-компоненты внутри Markdown."),Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-md"}),Object(o.b)("span",s()({parentName:"code"},{className:"xml"}),Object(o.b)("span",s()({parentName:"span"},{className:"hljs-comment"}),"\x3c!-- docs/pages/components/Button/index.md --\x3e")),"\nimport Playground from 'docs/components/Playground'\nimport PropTypesTable from 'docs/components/PropTypesTable'\nimport example from '!!raw-loader!./example'\nimport button from '!!raw-loader!rambler-ui/Button/Button'\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-section"}),"# Button"),"\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-section"}),"## Пример"),"\n",Object(o.b)("span",s()({parentName:"code"},{className:"xml"}),Object(o.b)("span",s()({parentName:"span"},{className:"hljs-tag"}),"<",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-name"}),"Playground")," ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-attr"}),"code"),"=",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-string"}),"{example}")," />")),"\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-section"}),"## Свойства компонента `<Button />`"),"\n",Object(o.b)("span",s()({parentName:"code"},{className:"xml"}),Object(o.b)("span",s()({parentName:"span"},{className:"hljs-tag"}),"<",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-name"}),"PropTypesTable")," ",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-attr"}),"code"),"=",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-string"}),"{button}")," />")))),Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-js"}),Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"// docs/pages/components/Button/example.js"),"\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"import")," React ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'react'"),"\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"import")," Button ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-string"}),"'rambler-ui/Button'"),"\n\n",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-keyword"}),"default")," () => (\n  ",Object(o.b)("span",s()({parentName:"code"},{className:"xml"}),Object(o.b)("span",s()({parentName:"span"},{className:"hljs-tag"}),"<",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-name"}),"Button"),">"),"Кнопка",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-tag"}),"</",Object(o.b)("span",s()({parentName:"span"},{className:"hljs-name"}),"Button"),">")),"\n)")),E,B,Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-sh"}),"npm ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-built_in"}),"test"),"              ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"# запуск тестов"),"\nnpm run ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-built_in"}),"test"),":chrome   ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"# в Chrome"),"\nnpm run ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-built_in"}),"test"),":firefox  ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"# в Firefox"),"\nnpm run ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-built_in"}),"test"),":watch    ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-comment"}),"# в режиме отслеживания изменений"))),S,Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-sh"}),"npm ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-built_in"}),"test")," -- --component Avatar\nnpm ",Object(o.b)("span",s()({parentName:"code"},{className:"hljs-built_in"}),"test")," -- --component Button,Input")),P,Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-sh"}),"npm run build")),M,R,Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{className:"hljs language-sh"}),"npm version <patch|minor|major>")),F,L,_,Object(o.b)("pre",null,Object(o.b)("code",s()({parentName:"pre"},{}),"npm run pages -- --versions 'master, stable, 1.0.5, 1.0.x, 1.x'\n")))}A.isMDXComponent=!0},688:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return d}));var t=a(0),s=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=s.a.createContext({}),m=function(e){var n=s.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o({},n,{},e)),a},b=function(e){var n=m(e.components);return s.a.createElement(p.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},j=Object(t.forwardRef)((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=m(a),j=t,d=b["".concat(c,".").concat(j)]||b[j]||i[j]||r;return a?s.a.createElement(d,o({ref:n},p,{components:a})):s.a.createElement(d,o({ref:n},p))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,c=new Array(r);c[0]=j;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var p=2;p<r;p++)c[p]=a[p];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},689:function(e,n,a){"use strict";var t=a(0),s=a.n(t),r=a(1),c=a.n(r),o=a(21),l={root:{margin:0,fontFamily:o.b.Roboto,fontSize:40,fontWeight:300,lineHeight:"50px",overflow:"hidden",textOverflow:"ellipsis"}},p=function(e){var n=e.classes,a=e.style,t=e.children;return s.a.createElement("h1",{className:n.root,style:a},t)};p.propTypes={children:c.a.node},n.a=Object(o.c)(l)(p)},690:function(e,n,a){var t=a(831),s=a(856);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1},c=(t(s,r),s.locals?s.locals:{});e.exports=c},691:function(e,n,a){"use strict";a.d(n,"a",(function(){return z}));var t=a(23),s=a.n(t),r=a(6),c=a.n(r),o=a(7),l=a.n(o),p=a(8),m=a.n(p),b=a(9),i=a.n(b),j=a(10),d=a.n(j),u=a(0),h=a.n(u),N=a(1),O=a.n(N),f=a(688),g=a(53),y=a(512),v=a(129),w={};function x(e){if(w[e])return w[e];var n=e.substring(1).split(/\//),a=n[0];if("components"!==a)return"".concat(v.a.repoLink,"tree/").concat(v.a.branch,"/docs/pages").concat(e,"/index.md");var t=n.pop();return null!=t&&a!==t?"".concat(v.a.repoLink,"tree/").concat(v.a.branch,"/src/").concat(t):void 0}var k=a(21),C=(a(690),a(689)),T={root:{marginTop:40,marginBottom:25,fontFamily:k.b.CorsicaRamblerLX,fontSize:35,fontWeight:500,lineHeight:"35px"}},E=function(e){var n=e.classes,a=e.children;return h.a.createElement("h2",{className:n.root},a)};E.propTypes={children:O.a.node};var B=Object(k.c)(T)(E),S=a(128),P=a(229),M={root:{padding:"14px 25px 14px 20px",overflow:"auto",backgroundColor:"rgba(238, 242, 244, .5)",fontFamily:k.b.Menlo,fontSize:13,lineHeight:"18px","& code":{padding:0,backgroundColor:"transparent",fontFamily:"inherit"}}},R=function(e){var n=e.classes,a=e.children;return h.a.createElement("pre",{className:n.root},a)};R.propTypes={children:O.a.node};var F=Object(k.c)(M)(R),L={root:{display:"inline",padding:".2em .3em",backgroundColor:"rgba(238, 242, 244, .5)",fontFamily:k.b.Menlo,fontSize:"92%",lineHeight:"18px"}},_=function(e){var n=e.classes,a=e.children;return h.a.createElement("code",{className:n.root},a)};_.propTypes={children:O.a.node};var A=Object(k.c)(L)(_),D=a(230),U={h1:C.a,h2:B,h3:S.a,code:F,inlineCode:A},H=function(e){return{header:{padding:"107px 30px 48px",backgroundColor:e.colors.argentumLight,"@media screen and (min-width: 768px)":{padding:"65px 200px 35px 100px"},"& h1 + p":{marginTop:25,marginBottom:0,"@media screen and (min-width: 768px)":{marginTop:15}}},toc:{marginTop:15,marginLeft:-6,"@media screen and (min-width: 768px)":{marginLeft:-11},"& button":{marginTop:15,marginRight:10}},source:{position:"absolute",top:30,right:30,"@media screen and (min-width: 768px)":{top:30,right:40},"& svg":{width:20,height:20}},content:{padding:"40px 0",marginLeft:30,marginRight:30,"@media screen and (min-width: 768px)":{marginLeft:100,marginRight:100,maxWidth:670},"& ~ footer":{display:"flex"}}}},I=h.a.createElement(D.a,null);function z(e){return function(n){var a,t;return Object(g.f)(Object(k.c)(H)((t=a=function(a){function t(){var e,n;c()(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=m()(this,(e=i()(t)).call.apply(e,[this].concat(s)))).sourceUrl=x(n.props.location.pathname),n.scrollToHeading=function(e){var a=parseInt(e.currentTarget.getAttribute("data-index"),10),t=n.headingElements[a];t&&window.scrollTo(0,t.offsetTop-30)},n}return d()(t,a),l()(t,[{key:"componentDidMount",value:function(){var e=this.props.classes;this.headingElements=document.querySelectorAll(".".concat(e.content," h2, .").concat(e.content," h3"))}},{key:"render",value:function(){var a=this,t=this.props,r=t.classes,c=(t.location,t.history,s()(t,["classes","location","history"]));return h.a.createElement(f.a,{components:U},h.a.createElement(h.a.Fragment,null,h.a.createElement("header",{className:r.header},this.sourceUrl&&h.a.createElement(y.default,{className:r.source,size:"small",container:h.a.createElement("a",{href:this.sourceUrl,rel:"noreferrer noopener",target:"_blank"})},I),h.a.createElement(C.a,null,e.title),e.description&&h.a.createElement("p",null,e.description),e.toc&&h.a.createElement("div",{className:r.toc},e.toc.map((function(e,n){return h.a.createElement(P.a,{type:"outline",key:e,"data-index":n,onClick:a.scrollToHeading},e)})))),h.a.createElement("div",{className:r.content},h.a.createElement(n,c))))}}]),t}(u.PureComponent),a.propTypes={history:O.a.any,location:O.a.any},t)))}}},831:function(e,n,a){"use strict";var t,s=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},r=function(){var e={};return function(n){if(void 0===e[n]){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[n]=a}return e[n]}}(),c=[];function o(e){for(var n=-1,a=0;a<c.length;a++)if(c[a].identifier===e){n=a;break}return n}function l(e,n){for(var a={},t=[],s=0;s<e.length;s++){var r=e[s],l=n.base?r[0]+n.base:r[0],p=a[l]||0,m="".concat(l," ").concat(p);a[l]=p+1;var b=o(m),i={css:r[1],media:r[2],sourceMap:r[3]};-1!==b?(c[b].references++,c[b].updater(i)):c.push({identifier:m,updater:h(i,n),references:1}),t.push(m)}return t}function p(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var s=a.nc;s&&(t.nonce=s)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var m,b=(m=[],function(e,n){return m[e]=n,m.filter(Boolean).join("\n")});function i(e,n,a,t){var s=a?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=b(n,s);else{var r=document.createTextNode(s),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(r,c[n]):e.appendChild(r)}}function j(e,n,a){var t=a.css,s=a.media,r=a.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),r&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var d=null,u=0;function h(e,n){var a,t,s;if(n.singleton){var r=u++;a=d||(d=p(n)),t=i.bind(null,a,r,!1),s=i.bind(null,a,r,!0)}else a=p(n),t=j.bind(null,a,n),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else s()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=s());var a=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<a.length;t++){var s=o(a[t]);c[s].references--}for(var r=l(e,n),p=0;p<a.length;p++){var m=o(a[p]);0===c[m].references&&(c[m].updater(),c.splice(m,1))}a=r}}}},832:function(e,n,a){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var a=function(e,n){var a=e[1]||"",t=e[3];if(!t)return a;if(n&&"function"==typeof btoa){var s=(c=t,o=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(l," */")),r=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[a].concat(r).concat([s]).join("\n")}var c,o,l;return[a].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(a,"}"):a})).join("")},n.i=function(e,a,t){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(t)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);t&&s[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),n.push(l))}},n}},856:function(e,n,a){(n=a(832)(!1)).push([e.i,"/*\n\nOriginal highlight.js style (c) Ivan Sagalaev <maniac@softwaremaniacs.org>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #F0F0F0;\n}\n\n\n/* Base color: saturation 0; */\n\n.hljs,\n.hljs-subst {\n  color: #444;\n}\n\n.hljs-comment {\n  color: #888888;\n}\n\n.hljs-keyword,\n.hljs-attribute,\n.hljs-selector-tag,\n.hljs-meta-keyword,\n.hljs-doctag,\n.hljs-name {\n  font-weight: bold;\n}\n\n\n/* User color: hue: 0 */\n\n.hljs-type,\n.hljs-string,\n.hljs-number,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-quote,\n.hljs-template-tag,\n.hljs-deletion {\n  color: #880000;\n}\n\n.hljs-title,\n.hljs-section {\n  color: #880000;\n  font-weight: bold;\n}\n\n.hljs-regexp,\n.hljs-symbol,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-link,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #BC6060;\n}\n\n\n/* Language color: hue: 90; */\n\n.hljs-literal {\n  color: #78A960;\n}\n\n.hljs-built_in,\n.hljs-bullet,\n.hljs-code,\n.hljs-addition {\n  color: #397300;\n}\n\n\n/* Meta color: hue: 200 */\n\n.hljs-meta {\n  color: #1f7199;\n}\n\n.hljs-meta-string {\n  color: #4d99bf;\n}\n\n\n/* Misc effects */\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n",""]),e.exports=n}}]);