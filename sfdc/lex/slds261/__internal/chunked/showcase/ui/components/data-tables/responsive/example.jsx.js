var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/data-tables/responsive/example.jsx.js"]=function(e){function t(t){for(var a,c,o=t[0],d=t[1],r=t[2],i=0,m=[];i<o.length;i++)c=o[i],s[c]&&m.push(s[c][0]),s[c]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,r||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],a=!0,o=1;o<l.length;o++){var d=l[o];0!==s[d]&&(a=!1)}a&&(n.splice(t--,1),e=c(c.s=l[0]))}return e}var a={},s={61:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},n=[];function c(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=e,c.c=a,c.d=function(e,t,l){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var r=0;r<o.length;r++)t(o[r]);var u=d;return n.push([112,0]),l()}({0:function(e,t){e.exports=React},112:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var a=o(l(0)),s=o(l(3)),n=(o(l(2)),l(18)),c=o(l(1));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(e){return a.default.createElement("table",{className:(0,c.default)("slds-table slds-table_bordered",e.className)},e.children)},r=function(e){return a.default.createElement("tr",{className:"slds-text-title_caps"},a.default.createElement("th",{className:"slds-cell-shrink",scope:"col"},a.default.createElement("span",{className:"slds-assistive-text",id:"check-group-header"},"Choose a row to select"),a.default.createElement(n.Checkbox,{hideLabel:!0,labelId:"check-button-label-all",id:"checkbox-all",label:"Select all",groupId:"check-group-header",checked:e.checked})),a.default.createElement("th",{scope:"col"},a.default.createElement("div",{className:"slds-truncate",title:"Close Date"},"Opportunity Name",a.default.createElement(s.default,{className:"slds-button_icon",iconClassName:"slds-button__icon_small",symbol:"arrowdown",assistiveText:"Sort",title:"Sort"}))),a.default.createElement("th",{scope:"col"},a.default.createElement("div",{className:"slds-truncate",title:"Account Name"},"Account Name",a.default.createElement(s.default,{className:"slds-button_icon",iconClassName:"slds-button__icon_small",symbol:"arrowdown",assistiveText:"Sort",title:"Sort"}))),a.default.createElement("th",{scope:"col"},a.default.createElement("div",{className:"slds-truncate",title:"Close Date"},"Close Date",a.default.createElement(s.default,{className:"slds-button_icon",iconClassName:"slds-button__icon_small",symbol:"arrowdown",assistiveText:"Sort",title:"Sort"}))),a.default.createElement("th",{scope:"col"},a.default.createElement("div",{className:"slds-truncate",title:"Stage"},"Stage",a.default.createElement(s.default,{className:"slds-button_icon",iconClassName:"slds-button__icon_small",symbol:"arrowdown",assistiveText:"Sort",title:"Sort"}))),a.default.createElement("th",{scope:"col"},a.default.createElement("div",{className:"slds-truncate",title:"Confidence"},"Confidence",a.default.createElement(s.default,{className:"slds-button_icon",iconClassName:"slds-button__icon_small",symbol:"arrowdown",assistiveText:"Sort",title:"Sort"}))),a.default.createElement("th",{scope:"col"},a.default.createElement("div",{className:"slds-truncate",title:"Amount"},"Amount",a.default.createElement(s.default,{className:"slds-button_icon",iconClassName:"slds-button__icon_small",symbol:"arrowdown",assistiveText:"Sort",title:"Sort"}))),a.default.createElement("th",{scope:"col"},a.default.createElement("div",{className:"slds-truncate",title:"Contact"},"Contact",a.default.createElement(s.default,{className:"slds-button_icon",iconClassName:"slds-button__icon_small",symbol:"arrowdown",assistiveText:"Sort",title:"Sort"}))),a.default.createElement("th",{className:"slds-cell-shrink",scope:"col"}))},u=function(e){return a.default.createElement("tr",{className:"slds-hint-parent"},a.default.createElement("td",{className:"slds-cell-shrink","data-label":"Select Row"},a.default.createElement(n.Checkbox,{hideLabel:!0,labelId:"check-button-label-0"+e.index,id:"checkbox-0"+e.index,label:"Select item "+e.index,groupId:"check-group-header",checked:e.checked})),a.default.createElement("th",{scope:"row","data-label":"Opportunity Name"},a.default.createElement("div",{className:"slds-truncate",title:e.title},e.title)),a.default.createElement("td",{"data-label":"Account Name"},a.default.createElement("div",{className:"slds-truncate",title:"Cloudhub"},"Cloudhub")),a.default.createElement("td",{"data-label":"Close Date"},a.default.createElement("div",{className:"slds-truncate",title:"4/14/2015"},"4/14/2015")),a.default.createElement("td",{"data-label":"Prospecting"},a.default.createElement("div",{className:"slds-truncate",title:"Prospecting"},"Prospecting")),a.default.createElement("td",{"data-label":"Confidence"},a.default.createElement("div",{className:"slds-truncate",title:"20%"},"20%")),a.default.createElement("td",{"data-label":"Amount"},a.default.createElement("div",{className:"slds-truncate",title:"$25k"},"$25k")),a.default.createElement("td",{"data-label":"Contact"},a.default.createElement("div",{className:"slds-truncate",title:"jrogers@cloudhub.com"},a.default.createElement("a",{href:"javascript:void(0);"},"jrogers@cloudhub.com"))),a.default.createElement("td",{className:"slds-cell-shrink","data-label":"Actions"},a.default.createElement(s.default,{className:"slds-button_icon-border-filled slds-button_icon-x-small",iconClassName:"slds-button__icon_hint slds-button__icon_small",symbol:"down",assistiveText:"Show More",title:"Show More"})))},i=function(e){return a.default.createElement(d,{className:"slds-max-medium-table_stacked-horizontal"},a.default.createElement("thead",null,a.default.createElement(r,null)),a.default.createElement("tbody",null,a.default.createElement(u,{index:"1",title:"Cloudhub"}),a.default.createElement(u,{index:"2",title:"Cloudhub + Anypoint Connectors"})))};t.default=a.default.createElement(i,null);t.states=[{id:"data-table-responsive-horizontal",label:"Stacked with Horizontal Cells",element:a.default.createElement(i,null)},{id:"data-table-responsive-stacked",label:"Stacked",element:a.default.createElement(function(e){return a.default.createElement(d,{className:"slds-max-medium-table_stacked"},a.default.createElement("thead",null,a.default.createElement(r,null)),a.default.createElement("tbody",null,a.default.createElement(u,{index:"1",title:"Cloudhub"}),a.default.createElement(u,{index:"2",title:"Cloudhub + Anypoint Connectors"})))},null)}]}});