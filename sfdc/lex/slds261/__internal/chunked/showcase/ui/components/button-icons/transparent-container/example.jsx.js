var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/button-icons/transparent-container/example.jsx.js"]=function(e){function t(t){for(var r,s,l=t[0],i=t[1],u=t[2],d=0,f=[];d<l.length;d++)s=l[d],a[s]&&f.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(c&&c(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={33:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=i;return o.push([85,0]),n()}({0:function(e,t){e.exports=React},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.Context=void 0;var r=o(n(0)),a=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}t.Context=function(e){return r.default.createElement("div",{style:{padding:"0.5rem",backgroundColor:"#f4f6f9"}},e.children)};t.default=r.default.createElement(a.default,{size:"medium",symbol:"search"});t.states=[{id:"disabled",label:"Disabled",element:r.default.createElement(a.default,{size:"medium",symbol:"search",disabled:!0})}],t.examples=[{id:"with-dropdown",label:"With dropdown",element:r.default.createElement(a.default,{hasDropdown:!0,theme:"transparent",assistiveText:"More options",title:"More Options"})},{id:"hint-hover",label:"Hint on hover",element:r.default.createElement("div",{className:"slds-hint-parent"},r.default.createElement(a.default,{size:"medium",iconClassName:"slds-button__icon_hint"}))}]}});