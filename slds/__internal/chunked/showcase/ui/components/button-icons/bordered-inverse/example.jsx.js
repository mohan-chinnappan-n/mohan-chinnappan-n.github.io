var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/button-icons/bordered-inverse/example.jsx.js"]=function(e){function t(t){for(var r,a,l=t[0],i=t[1],u=t[2],c=0,p=[];c<l.length;c++)a=l[c],s[a]&&p.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(d&&d(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={115:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=i;return o.push([156,0]),n()}({0:function(e,t){e.exports=React},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.Context=void 0;var r=o(n(0)),s=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}t.Context=function(e){return r.default.createElement("div",{style:{padding:"0.5rem",backgroundColor:"#16325C"}},e.children)};t.default=r.default.createElement(s.default,{theme:"inverse",size:"medium",symbol:"search"});t.states=[{id:"disabled",label:"Disabled",element:r.default.createElement(s.default,{theme:"inverse",size:"medium",symbol:"search",disabled:!0})}],t.examples=[{id:"with-dropdown",label:"With dropdown",element:r.default.createElement(s.default,{hasDropdown:!0,theme:"neutral",assistiveText:"More options",title:"More Options"})},{id:"hint-hover",label:"Hint on hover",element:r.default.createElement("div",{className:"slds-hint-parent"},r.default.createElement(s.default,{theme:"inverse",size:"medium",iconClassName:"slds-button__icon_inverse-hint"}))}]}});