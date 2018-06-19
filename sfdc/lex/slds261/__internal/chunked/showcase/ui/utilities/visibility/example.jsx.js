var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/utilities/visibility/example.jsx.js"]=function(e){function s(s){for(var t,d,n=s[0],o=s[1],h=s[2],c=0,m=[];c<n.length;c++)d=n[c],i[d]&&m.push(i[d][0]),i[d]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(r&&r(s);m.length;)m.shift()();return l.push.apply(l,h||[]),a()}function a(){for(var e,s=0;s<l.length;s++){for(var a=l[s],t=!0,n=1;n<a.length;n++){var o=a[n];0!==i[o]&&(t=!1)}t&&(l.splice(s--,1),e=d(d.s=a[0]))}return e}var t={},i={50:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},l=[];function d(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.m=e,d.c=t,d.d=function(e,s,a){d.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:a})},d.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},d.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(s,"a",s),s},d.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},d.p="/assets/scripts/bundle/";var n=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=n.push.bind(n);n.push=s,n=n.slice();for(var h=0;h<n.length;h++)s(n[h]);var r=o;return l.push([97,0]),a()}({0:function(e,s){e.exports=React},97:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.examples=void 0;var t,i=a(0),l=(t=i)&&t.__esModule?t:{default:t};s.examples=[{id:"assistive-text",label:"Assistive Text",element:l.default.createElement("div",{className:"slds-assistive-text"},"I am hidden from sight"),description:"Use the `slds-assistive-text` class to enable a screen reader to read text that is hidden. This class is typically used to accompany icons and other UI elements that show an image instead of text."},{id:"collapsed-expanded",label:"Collapsed / Expanded",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement("div",{className:"slds-is-collapsed"},l.default.createElement("h3",null,"I am collapsed"),l.default.createElement("p",null,"I am a child inside a collapsed element")),l.default.createElement("div",{className:"slds-is-expanded"},l.default.createElement("h3",null,"I am expanded"),l.default.createElement("p",null,"I am a child inside an expanded element"))),description:"The `.slds-is-collapsed` class hides the elements contained inside by controlling the height and overflow properties. Use the `.slds-is-expanded` class to show the elements contained inside in their normal expanded state."},{id:"hidden-visible",label:"Hidden / Visible",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement("div",{className:"slds-hidden"},"I am hidden"),l.default.createElement("div",{className:"slds-visible"},"I am visible")),description:"You can hide an element but reserve the space on the page for when the element is made visible again. To hide the element, use the  `slds-hidden` class. To make it visible again, use the `slds-visible` class."},{id:"hide-show",label:"Hide / Show",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement("div",{className:"slds-hide"},"I am hidden"),l.default.createElement("div",{className:"slds-show"},"I am shown as a block"),l.default.createElement("div",{className:"slds-show_inline-block"},"I am shown as an inline-block")),description:"To hide an element and have it not take up space on the page, use the  `.slds-hide` class. You can toggle the state with JavaScript to show the element at a later&nbsp;time. To make the element visible again, use `.slds-show`. If you need to make the hidden element visible again in an inline-block state, use  `.slds-show_inline-block`."},{id:"transition-hide-show",label:"Transition Hide / Show",element:l.default.createElement("div",{className:"demo-only"},l.default.createElement("div",{className:"slds-transition-hide"},"I have zero opacity"),l.default.createElement("div",{className:"slds-transition-show"},"I have 100% opacity")),description:"To slowly transition an element from hiding and showing, use the  `slds-transition-hide` and `slds-transition-show` classes . They toggle the element's opacity and also reserve its space. Note: To control the timing of the transition, add an additional `transition` property to control the opacity change."},{id:"responsive",label:"Responsive",element:l.default.createElement("div",{className:"demo-only demo-visibility"},l.default.createElement("div",{className:"slds-show_x-small"},"Hides on 319px and down"),l.default.createElement("div",{className:"slds-hide_x-small"},"Hides on 320px and up"),l.default.createElement("div",{className:"slds-show_small"},"Hides on 479px and down"),l.default.createElement("div",{className:"slds-hide_small"},"Hides on 480px and up"),l.default.createElement("div",{className:"slds-show_medium"},"Hides on 767px and down"),l.default.createElement("div",{className:"slds-hide_medium"},"Hides on 768px and up"),l.default.createElement("div",{className:"slds-show_large"},"Hides on 1023px and down"),l.default.createElement("div",{className:"slds-hide_large"},"Hides on 1024px and up"),l.default.createElement("div",{className:"slds-show_x-large"},"Hides on 1279px and down"),l.default.createElement("div",{className:"slds-hide_x-large"},"Hides on 1280px and up")),description:"\nResponsive visibility classes will hide content on specific breakpoints. `slds-show_[breakpoint]` renders `display: none` when the the view port width is smaller than the breakpoint, and does nothing if it is bigger or equal. `slds-hide_[breakpoint]` does the oposite by rendering `display: none` when the the viewport width is bigger or equal than the breakpoint, and does nothing if it is smaller.\n\n|Class Name|Less than 320px|X-Small (>= 320px)|Small (>= 480px)|Medium (>= 768px)|Large (>= 1024px)|X-Large (>= 1280px)|\n|---|---|---|---|---|---|---|\n|`.slds-hide_x-small`|Show|Hide|Hide|Hide|Hide|Hide|\n|`.slds-show_x-small`|Hide|Show|Show|Show|Show|Show|\n|`.slds-hide_small`|Show|Show|Hide|Hide|Hide|Hide|\n|`.slds-show_small`|Hide|Hide|Show|Show|Show|Show|\n|`.slds-hide_medium`|Show|Show|Show|Hide|Hide|Hide|\n|`.slds-show_medium`|Hide|Hide|Hide|Show|Show|Show|\n|`.slds-hide_large`|Show|Show|Show|Show|Hide|Hide|\n|`.slds-show_large`|Hide|Hide|Hide|Hide|Show|Show|\n|`.slds-hide_x-large`|Show|Show|Show|Show|Show|Hide|\n|`.slds-show_x-large`|Hide|Hide|Hide|Hide|Hide|Show|\n    "}]}});