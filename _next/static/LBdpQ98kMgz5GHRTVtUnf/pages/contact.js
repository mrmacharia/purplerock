(window.webpackJsonp=window.webpackJsonp||[]).push([["39a4"],{"/Rd+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("q1tI"));function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,u(t).call(this,e))).state={humanInteraction:!1},n}var n,o,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.Component),n=t,(o=[{key:"createContactLink",value:function(e){var t,n;if(e.email)t="mailto:".concat(e.email),e.headers&&(t+="?".concat((n=e.headers,Object.keys(n).map(function(e){return"".concat(e,"=").concat(encodeURIComponent(n[e]))}).join("&"))));else if(e.tel)t="tel:".concat(e.tel);else if(e.sms)t="sms:".concat(e.sms);else if(e.facetime)t="facetime:".concat(e.facetime);else if(e.href)t=e.href;else{if("object"===l(e.children))return"";t=e.children}return t}},{key:"handleClick",value:function(e){var t=this.props.onClick;!1===this.state.humanInteraction&&(e.preventDefault(),t&&"function"==typeof t&&t(),window.location.href=this.createContactLink(this.props))}},{key:"handleCopiability",value:function(){this.setState({humanInteraction:!0})}},{key:"reverse",value:function(e){if(void 0!==e)return e.split("").reverse().join("").replace("(",")").replace(")","(")}},{key:"render",value:function(){var e=this.state.humanInteraction,t=this.props,n=t.element,o=void 0===n?"a":n,i=t.children,s=t.tel,u=t.sms,f=t.facetime,p=t.email,d=t.href,m=(t.headers,t.obfuscate),b=t.obfuscateChildren,h=t.linkText,y=t.style,v=c(t,["element","children","tel","sms","facetime","email","href","headers","obfuscate","obfuscateChildren","linkText","style"]),O=i||s||u||f||p||d,j=a({},y||{},{unicodeBidi:"bidi-override",direction:!0===e||!1===m||!1===b?"ltr":"rtl"}),g=!0===e||!1===m||"object"===l(i)||!1===b?O:this.reverse(O),E="a"===o?{href:!0===e||!1===m?this.createContactLink(this.props):h||"obfuscated",onClick:this.handleClick.bind(this)}:{},w=a({onFocus:this.handleCopiability.bind(this),onMouseOver:this.handleCopiability.bind(this),onContextMenu:this.handleCopiability.bind(this)},v,E,{style:j});return r.default.createElement(o,w,g)}}])&&i(n.prototype,o),p&&i(n,p),t}();t.default=p},ALdH:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),c=n("a7VT"),l=n("AT/M"),i=n("Tit0"),s=n("vYYK"),u=n("q1tI"),f=n.n(u),p=n("m/Pd"),d=n.n(p),m=n("UgXd"),b=n.n(m),h=n("/MKj"),y=n("ANjH"),v=n("ZSSH"),O=n("+qya"),j=n("/Rd+"),g=n.n(j),E=n("uuth"),w=(n("Wld8"),n("rdxz")),k=n("xzDD"),C=(n("x96L"),n("ktnI")),P=n.n(C),_=n("VOof"),S=n.n(_),I=b()(function(){return n.e("7754").then(n.bind(null,"sjFK"))},{ssr:!1,loadableGenerated:{webpack:function(){return["sjFK"]},modules:["../components/_utility/Shader"]}}),N=function(e){function t(){var e,n;Object(r.default)(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=Object(o.default)(this,(e=Object(c.default)(t)).call.apply(e,[this].concat(i))),Object(s.a)(Object(l.default)(n),"componentDidMount",function(){n.props.updateUI({logoColor:w.a.grayscale.black,navColor:w.a.grayscale.black}),n.props.updateShaderImage(function(){return n.props.windowWidth<768?S.a:P.a})}),n}return Object(i.default)(t,e),Object(a.default)(t,[{key:"render",value:function(){var e=this;return f.a.createElement("div",null,f.a.createElement(f.a.Fragment,null,f.a.createElement(d.a,null,f.a.createElement("title",null,"Contact | Purple Rock Scissors"))),f.a.createElement("div",{className:"section--contact"},f.a.createElement(E.a,{onEnter:function(){e.props.updateUI({logoColor:w.a.grayscale.black,navColor:w.a.grayscale.black})},bottomOffset:"90%",topOffset:"10%"},f.a.createElement("div",{className:"part--contacts"},f.a.createElement("div",{className:"panel"},f.a.createElement("div",{className:"general-info"},f.a.createElement("h1",null,"Let's Talk."),f.a.createElement("address",null,"189 S. Orange Ave, STE 2020",f.a.createElement("br",null),"Orlando, FL 32801"),f.a.createElement("p",{className:"tel"},f.a.createElement(g.a,{tel:"(407) 936-1749"}))),f.a.createElement("div",{className:"emails"},f.a.createElement("div",{className:"group"},f.a.createElement("h5",null,"Work With Us"),f.a.createElement(g.a,{email:"biz@prpl.rs"})),f.a.createElement("div",{className:"group"},f.a.createElement("h5",null,"Say Hello"),f.a.createElement(g.a,{email:"hello@prpl.rs"})),f.a.createElement("div",{className:"group"},f.a.createElement("h5",null,"Join Us"),f.a.createElement(g.a,{email:"careers@prpl.rs"}))))))),f.a.createElement("div",{className:"shader-container"},f.a.createElement(O.Parallax,{y:[-25,0]},f.a.createElement("div",{className:"shader-wrapper"},f.a.createElement(I,{preload:[P.a,S.a],s_lsd:[16,150,5e-4],s_rgb:[256,50,.01]})))),f.a.createElement("div",{className:"footer-container"},f.a.createElement(k.a,null)))}}],[{key:"getInitialProps",value:function(e){e.store,e.isServer,e.pathname,e.query;return{slug:"contact",canonical:"/contact",images:[]}}}]),t}(f.a.Component);t.default=Object(h.b)(function(e){return e},function(e){return{updateUI:Object(y.bindActionCreators)(v.j,e),updateShaderImage:Object(y.bindActionCreators)(v.i,e)}})(N)},VOof:function(e,t){e.exports="/_next/static/components/home/images/381f5167ec98125257763a376a296c11.jpg"},ktnI:function(e,t){e.exports="/_next/static/components/home/images/57b9217b548a726b565eea7bc8c479b1.jpg"},lqnA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){var e=n("ALdH");return{page:e.default||e}}])}},[["lqnA","5d41","9da1"]]]);