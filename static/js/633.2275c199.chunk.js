/*! For license information please see 633.2275c199.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[633],{9633:function(t,r,e){e.r(r),e.d(r,{default:function(){return g}});var n=e(5861),o=e(9439),i=e(7689),a=e(2791),c=e(577),u="Reviews_wrap__wlHz4",s="Reviews_card__-LBlr",l="Reviews_author__CqYAZ",h="Reviews_text__EqLvx",f="Reviews_reviews_not__RAQWd",p=e(5880);function v(t){var r=new Date(t),e=r.getFullYear(),n=(r.getMonth()+1).toString().padStart(2,"0"),o=r.getDate().toString().padStart(2,"0"),i=r.getHours().toString().padStart(2,"0"),a=r.getMinutes().toString().padStart(2,"0");return"".concat(e,"-").concat(n,"-").concat(o," ").concat(i,":").concat(a)}var d=e(184);function y(){y=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(k){u=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof f?r:f,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:E(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(k){return{type:"throw",arg:k}}}t.wrap=s;var h={};function f(){}function p(){}function v(){}var d={};u(d,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==r&&e.call(m,i)&&(d=m);var w=v.prototype=f.prototype=Object.create(d);function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function E(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:N(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function g(){var t=(0,i.UO)().movieId,r=(0,a.useState)([]),e=(0,o.Z)(r,2),g=e[0],m=e[1];return(0,a.useEffect)((function(){function r(){return(r=(0,n.Z)(y().mark((function r(){var e,n;return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,c.Bt)(t);case 3:e=r.sent,n=e.results,m(n),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching data:",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}t&&function(){r.apply(this,arguments)}()}),[t]),(0,d.jsx)(d.Fragment,{children:g.length>0?(0,d.jsx)("ul",{className:u,children:g.map((function(t){var r=t.id,e=t.author_details,n=e.name,o=e.avatar_path,i=e.rating,a=t.created_at,c=t.content;return(0,d.jsxs)("li",{children:[(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)("h3",{className:l,children:n}),o?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:n,width:"150",loading:"lazy"}):(0,d.jsx)(p.Mdg,{size:50,color:"white"}),(0,d.jsxs)("p",{children:["User Rating: ",(0,d.jsx)("span",{children:i})]}),(0,d.jsx)("p",{children:(0,d.jsx)("span",{children:v(a)})})]}),(0,d.jsx)("p",{className:h,children:c})]},r)}))}):(0,d.jsx)("div",{className:u,children:(0,d.jsx)("p",{className:f,children:"Unfortunately there are no reviews."})})})}},577:function(t,r,e){e.d(r,{Bt:function(){return g},DD:function(){return p},IA:function(){return w},Tg:function(){return s},on:function(){return h},y:function(){return d}});var n=e(5861);function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(k){s=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var i=r&&r.prototype instanceof p?r:p,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:E(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var f={};function p(){}function v(){}function d(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==r&&e.call(m,a)&&(y=m);var w=d.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function E(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:N(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}var i=e(5359),a="https://api.themoviedb.org/3/",c="language=en-US",u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjhjMTAyMDI0MDIyNTYxMDc5NjhmY2NiODcwZGE2MSIsInN1YiI6IjY0ZDNjYjdlZGQ5MjZhMDFlNzMyN2JhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B6ar64KXg9EGEEntonw5miWhTgtZbhfpHsRZyrME33s")}};function s(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(o().mark((function t(r){var e,n,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(a,"trending/all/day?{language}&page=").concat(r),t.prev=1,t.next=4,i(e,u);case 4:return n=t.sent,t.next=7,n.json();case 7:return c=t.sent,t.abrupt("return",c);case 11:return t.prev=11,t.t0=t.catch(1),console.error("Error fetching trending movies:",t.t0),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function h(t,r){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark((function t(r,e){var n,c,s,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURIComponent(r),c="".concat(a,"search/movie?include_adult=false&{language}&page=").concat(e,"&query=").concat(n),t.prev=2,t.next=5,i(c,u);case 5:return s=t.sent,t.next=8,s.json();case 8:return l=t.sent,t.abrupt("return",l);case 12:return t.prev=12,t.t0=t.catch(2),console.error("Error searching movies:",t.t0),t.abrupt("return",[]);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}function p(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(o().mark((function t(r){var e,n,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(a,"movie/").concat(r,"?{language}"),t.prev=1,t.next=4,i(e,u);case 4:return n=t.sent,t.next=7,n.json();case 7:return c=t.sent,t.abrupt("return",c);case 11:return t.prev=11,t.t0=t.catch(1),console.error("Error searching movies:",t.t0),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function d(t){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(o().mark((function t(r){var e,n,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(a,"movie/").concat(r,"/credits?{language}"),t.prev=1,t.next=4,i(e,u);case 4:return n=t.sent,t.next=7,n.json();case 7:return c=t.sent,t.abrupt("return",c);case 11:return t.prev=11,t.t0=t.catch(1),console.error("Error searching movies:",t.t0),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(o().mark((function t(r){var e,n,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(a,"movie/").concat(r,"/reviews?").concat(c),t.prev=1,t.next=4,i(e,u);case 4:return n=t.sent,t.next=7,n.json();case 7:return s=t.sent,t.abrupt("return",s);case 11:return t.prev=11,t.t0=t.catch(1),console.error("Error searching movies:",t.t0),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(o().mark((function t(r){var e,n,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(a,"movie/").concat(r,"/videos?").concat(c),t.prev=1,t.next=4,i(e,u);case 4:return n=t.sent,t.next=7,n.json();case 7:return s=t.sent,t.abrupt("return",s);case 11:return t.prev=11,t.t0=t.catch(1),console.error("Error searching movies:",t.t0),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=633.2275c199.chunk.js.map