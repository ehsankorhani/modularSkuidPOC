!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.getUser=function(){return(e=t.data.teamMemberViewData[0])&&e.Email?e.Email:"Anonymous";var e},this.render=function(){var e=document.querySelector("#page-title-main .nx-template");e&&(e.innerHTML="Hello: "+t.getUser())},this.$=skuid.$;var n=skuid.model.map().TeamMember_view||{};this.data={teamMemberViewData:n.data||[]},this.render()};var o=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);new r};n(0);(0,skuid.$)(document.body).one("pageload",function(){window.setTimeout(function(){new o},1e3)})}]);
//# sourceMappingURL=main.js.map