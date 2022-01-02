(()=>{var t={702:()=>{window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(t){clearTimeout(t)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return t[r](u,u.exports,n),u.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,u=[],l=!0,a=!1;try{for(n=n.call(t);!(l=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);l=!0);}catch(t){a=!0,o=t}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return u}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){return{type:"TEXT_ELEMENT",props:{nodeValue:t,children:[]}}}n(702);var i=function(t){return t.startsWith("on")},c=function(t){return"children"!==t&&!i(t)},f=function(t,e){return function(n){return t[n]!==e[n]}};function p(t,e,n){var r;Object.keys(e).filter(i).filter((function(t){return!(t in n)||f(e,n)(t)})).forEach((function(n){var r=n.toLowerCase().substring(2);t.removeEventListener(r,e[n])})),Object.keys(e).filter(c).filter((r=n,function(t){return!(t in r)})).forEach((function(e){t[e]=""})),Object.keys(n).filter(c).filter(f(e,n)).forEach((function(e){t[e]=n[e]})),Object.keys(n).filter(i).filter(f(e,n)).forEach((function(e){var r=e.toLowerCase().substring(2);t.addEventListener(r,n[e])}))}function s(t){if(t){for(var e=t.parent;!e.dom;)e=e.parent;var n=e.dom;"PLACEMENT"===t.effectTag&&null!=t.dom?n.appendChild(t.dom):"UPDATE"===t.effectTag&&null!=t.dom?p(t.dom,t.alternate.props,t.props):"DELETION"===t.effectTag&&d(t,n),s(t.child),s(t.sibling)}}function d(t,e){t.dom?e.removeChild(t.dom):d(t.child,e)}var y=null,b=null,m=null,v=null,h=null,g=null;function E(t){if(t.type instanceof Function?function(t){g=0,(h=t).hooks=[];var e=[t.type(t.props)];O(t,e)}(t):function(t){t.dom||(t.dom=function(t){var e="TEXT_ELEMENT"==t.type?document.createTextNode(""):document.createElement(t.type);return p(e,{},t.props),e}(t)),O(t,t.props.children)}(t),t.child)return t.child;for(var e=t;e;){if(e.sibling)return e.sibling;e=e.parent}}function O(t,e){for(var n=0,r=t.alternate&&t.alternate.child,o=null;n<e.length||null!=r;){var u=e[n],l=null,a=r&&u&&u.type==r.type;a&&(l={type:r.type,props:u.props,dom:r.dom,parent:t,alternate:r,effectTag:"UPDATE"}),u&&!a&&(l={type:u.type,props:u.props,dom:null,parent:t,alternate:null,effectTag:"PLACEMENT"}),r&&!a&&(r.effectTag="DELETION",v.push(r)),r&&(r=r.sibling),0===n?t.child=l:u&&(o.sibling=l),o=l,n++}}requestIdleCallback((function t(e){for(var n=!1;y&&!n;)y=E(y),n=e.timeRemaining()<1;!y&&m&&(v.forEach(s),s(m.child),b=m,m=null),requestIdleCallback(t)}));var w=function(t,e){for(var n=arguments.length,o=new Array(n>2?n-2:0),l=2;l<n;l++)o[l-2]=arguments[l];return{type:t,props:u(u({},e),{},{children:o.map((function(t){return"object"===r(t)?t:a(t)}))})}},T=function(t,e){v=[],y=m={dom:e,props:{children:[t]},alternate:b}},j=function(t){var e=h.alternate&&h.alternate.hooks&&h.alternate.hooks[g],n={state:e?e.state:t,queue:[]};return(e?e.queue:[]).forEach((function(t){n.state=t(n.state)})),h.hooks.push(n),g++,[n.state,function(t){n.queue.push(t),m={dom:b.dom,props:b.props,alternate:b},y=m,v=[]}]},k=document.getElementById("root"),I=function(t){return w("p",null,t.value)},P=function(t){return w("input",{autofocus:!0,onInput:t.onInput,value:t.value})};T(w((function(){var e=t(j(""),2),n=e[0],r=e[1],o=t(j(0),2),u=o[0],l=o[1],a=t(j(0),2),i=a[0],c=a[1];return w("div",null,w("p",null,"キー入力数: ",i),w("p",null,"文字入力数: ",u),w(P,{onInput:function(t){r((function(){return t.target.value})),l((function(){return t.target.value.length})),c((function(t){return t+1}))},value:n}),n?w(I,{value:n}):null)}),null),k)})()})();