var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/utilities/hyphenation/example.jsx.js"]=function(e){function t(t){for(var r,l,s=t[0],i=t[1],u=t[2],p=0,f=[];p<s.length;p++)l=s[p],a[l]&&f.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(c&&c(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={93:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;return o.push([142,0]),n()}({0:function(e,t){e.exports=React},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.Context=void 0;var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.Context=function(e){return o.default.createElement("div",{style:{width:"200px"}},e.children)},t.examples=[{id:"default",label:"Hyphenate",element:o.default.createElement("p",{className:"slds-hyphenate"},"A long heading might be supercalifragilisticexpiallidocious.")}]}});