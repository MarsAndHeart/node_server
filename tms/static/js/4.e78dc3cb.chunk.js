(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=(r=n(0))&&"object"==typeof r&&"default"in r?r.default:r;t.AppContainer=function(e){return o.Children.only(e.children)},t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},131:function(e,t,n){"use strict";n.r(t),function(e){var r=n(0),o=n(47),i=n(114),c=n(132);t.default=Object(i.hot)(e)(Object(o.b)("globalStore")(Object(o.c)(function(e){var t=e.globalStore,n=t.username,o=t.login,i=t.logout;return r.createElement("div",null,r.createElement("h1",null,"This is home page"),r.createElement("p",null,"current user name is ",n),r.createElement("div",null,r.createElement("button",{onClick:o},"login"),r.createElement("button",{onClick:i},"logout")),r.createElement("ul",null,r.createElement("li",null," ",r.createElement(c.a,{to:"/product/productList"},"\u4ea7\u54c1\u5217\u8868"))))})))}.call(this,n(113)(e))},132:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),c=n.n(i),u=n(6),a=n.n(u),l=n(61),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=r=f(this,e.call.apply(e,[this].concat(i))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!s(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,i=n.to;o?t.replace(i):t.push(i)}},f(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);a()(this.context.router,"You should not use <Link> outside a <Router>"),a()(void 0!==t,'You must specify the "to" property');var i=this.context.router.history,c="string"===typeof t?Object(l.b)(t,null,null,i.location):t,u=i.createHref(c);return o.a.createElement("a",p({},r,{onClick:this.handleClick,href:u,ref:n}))},t}(o.a.Component);h.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=h}}]);