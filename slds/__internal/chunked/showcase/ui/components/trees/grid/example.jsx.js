var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/trees/grid/example.jsx.js"]=function(e){function a(a){for(var l,r,o=a[0],i=a[1],c=a[2],u=0,m=[];u<o.length;u++)r=o[u],n[r]&&m.push(n[r][0]),n[r]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);for(d&&d(a);m.length;)m.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],l=!0,o=1;o<t.length;o++){var i=t[o];0!==n[i]&&(l=!1)}l&&(s.splice(a--,1),e=r(r.s=t[0]))}return e}var l={},n={79:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},s=[];function r(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=l,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:t})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=i;return s.push([128,0]),t()}({0:function(e,a){e.exports=React},128:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.states=a.DeepNestingRows=a.ExpandedRow=a.DefaultRows=a.TreeGrid=void 0;var l=r(t(0)),n=r(t(3)),s=r(t(1));r(t(2));function r(e){return e&&e.__esModule?e:{default:e}}var o=a.TreeGrid=function(e){return l.default.createElement("table",{className:"slds-table slds-table_bordered slds-tree slds-table_tree",role:"treegrid","aria-readonly":"true"},l.default.createElement("thead",null,l.default.createElement("tr",{className:"slds-text-title_caps"},l.default.createElement("th",{className:"slds-cell-buffer_left",scope:"col"},l.default.createElement("div",{className:"slds-grid slds-grid_vertical-align-center"},l.default.createElement(n.default,{assistiveText:"Expand all rows",className:"slds-button_icon-border-filled slds-button_icon-x-small slds-m-right_x-small slds-shrink-none slds-table_tree__toggle",iconClassName:"slds-button__icon_small",symbol:"chevrondown",tabIndex:"-1",title:"Expand all rows"}),l.default.createElement("div",{className:"slds-truncate",title:"Account Name"},"Account Name"))),l.default.createElement("th",{scope:"col"},l.default.createElement("div",{className:"slds-truncate",title:"Employees"},"Employees")),l.default.createElement("th",{scope:"col"},l.default.createElement("div",{className:"slds-truncate",title:"Phone Number"},"Phone Number")),l.default.createElement("th",{scope:"col"},l.default.createElement("div",{className:"slds-truncate",title:"Account Owner"},"Account Owner")),l.default.createElement("th",{scope:"col"},l.default.createElement("div",{className:"slds-truncate",title:"Billing City"},"Billing City")),l.default.createElement("th",{className:"slds-cell-shrink",scope:"col"},l.default.createElement(n.default,{"aria-haspopup":"true",assistiveText:"Show More",className:"slds-button_icon-border-filled slds-button_icon-x-small",iconClassName:"slds-button__icon_hint slds-button__icon_small",symbol:"down",tabIndex:"-1",title:"Show More"})))),e.children)},i=function(e){return l.default.createElement("tr",{"aria-expanded":e["aria-expanded"],"aria-level":e["aria-level"],"aria-posinset":e["aria-posinset"],"aria-setsize":e["aria-setsize"],className:"slds-hint-parent",tabIndex:e.focusable?"0":null},l.default.createElement("th",{className:"slds-tree__item","data-label":"Account Name",scope:"row"},l.default.createElement(n.default,{"aria-hidden":"true",assistiveText:e["aria-expanded"]?"Expand "+e.name:"Collapse "+e.name,className:(0,s.default)("slds-button_icon slds-button_icon-x-small slds-m-right_x-small",e["aria-expanded"]?null:"slds-is-disabled"),iconClassName:"slds-button__icon_small",symbol:"chevronright",tabIndex:"-1",title:e["aria-expanded"]?"Collapse "+e.name:"Expand "+e.name}),l.default.createElement("div",{className:"slds-truncate",title:e.name},l.default.createElement("a",{href:"javascript:void(0);",tabIndex:"-1"},e.name))),l.default.createElement("td",{"data-label":"Employees",role:"gridcell"},l.default.createElement("div",{className:"slds-truncate",title:e.employees},e.employees)),l.default.createElement("td",{"data-label":"Phone Number",role:"gridcell"},l.default.createElement("div",{className:"slds-truncate",title:e.phone},e.phone)),l.default.createElement("td",{"data-label":"Account Owner",role:"gridcell"},l.default.createElement("div",{className:"slds-truncate",title:e.owner},l.default.createElement("a",{href:"javascript:void(0);",tabIndex:"-1"},e.owner))),l.default.createElement("td",{"data-label":"Billing City",role:"gridcell"},l.default.createElement("div",{className:"slds-truncate",title:e.city},e.city)),l.default.createElement("td",{className:"slds-cell-shrink",role:"gridcell"},l.default.createElement(n.default,{"aria-haspopup":"true",assistiveText:"More actions for "+e.name,className:"slds-button_icon-border-filled slds-button_icon-x-small",iconClassName:"slds-button__icon_hint slds-button__icon_small",symbol:"down",tabIndex:"-1",title:"More actions for "+e.name})))},c=a.DefaultRows=function(e){return l.default.createElement("tbody",null,l.default.createElement(i,{"aria-level":"1","aria-posinset":"1","aria-setsize":"4",name:"Rewis Inc",employees:"3,100",phone:"837-555-1212",owner:"Jane Doe",city:"Phoenix, AZ",focusable:!0}),l.default.createElement(i,{"aria-expanded":e.isExpanded?"true":"false","aria-level":"1","aria-posinset":"2","aria-setsize":"4",name:"Acme Corporation",employees:"10,000",phone:"837-555-1212",owner:"John Doe",city:"San Francisco, CA"}),e.additionalItem,l.default.createElement(i,{"aria-expanded":"false","aria-level":"1","aria-posinset":"3","aria-setsize":"4",name:"Rohde Enterprises",employees:"6,000",phone:"837-555-1212",owner:"John Doe",city:"New York, NY"}),l.default.createElement(i,{"aria-level":"1","aria-posinset":"4","aria-setsize":"4",name:"Cheese Corp",employees:"1,234",phone:"837-555-1212",owner:"Jane Doe",city:"Paris, France"}))},d=a.ExpandedRow=function(e){return l.default.createElement(i,{"aria-level":"2","aria-posinset":"1","aria-setsize":"1",name:"Acme Corporation (Oakland)",employees:"745",phone:"837-555-1212",owner:"John Doe",city:"New York, NY"})},u=a.DeepNestingRows=function(e){return l.default.createElement("tbody",null,l.default.createElement(i,{"aria-level":"1","aria-posinset":"1","aria-setsize":"4",name:"Rewis Inc",employees:"3,100",phone:"837-555-1212",owner:"Jane Doe",city:"Phoenix, AZ",focusable:!0}),l.default.createElement(i,{"aria-expanded":"true","aria-level":"1","aria-posinset":"2","aria-setsize":"4",name:"Acme Corporation",employees:"10,000",phone:"837-555-1212",owner:"John Doe",city:"San Francisco, CA"}),l.default.createElement(i,{"aria-expanded":"true","aria-level":"2","aria-posinset":"1","aria-setsize":"2",name:"Acme Corporation (Bay Area)",employees:"3,000",phone:"837-555-1212",owner:"John Doe",city:"New York, NY"}),l.default.createElement(i,{"aria-level":"3","aria-posinset":"1","aria-setsize":"2",name:"Acme Corporation (Oakland)",employees:"745",phone:"837-555-1212",owner:"John Doe",city:"New York, NY"}),l.default.createElement(i,{"aria-level":"3","aria-posinset":"2","aria-setsize":"2",name:"Acme Corporation (San Francisco)",employees:"578",phone:"837-555-1212",owner:"Jane Doe",city:"Los Angeles, CA"}),l.default.createElement(i,{"aria-expanded":"true","aria-level":"2","aria-posinset":"2","aria-setsize":"2",name:"Acme Corporation (East)",employees:"430",phone:"837-555-1212",owner:"John Doe",city:"San Francisco, CA"}),l.default.createElement(i,{"aria-level":"3","aria-posinset":"1","aria-setsize":"2",name:"Acme Corporation (NY)",employees:"1,210",phone:"837-555-1212",owner:"Jane Doe",city:"New York, NY"}),l.default.createElement(i,{"aria-expanded":"true","aria-level":"3","aria-posinset":"2","aria-setsize":"2",name:"Acme Corporation (VA)",employees:"410",phone:"837-555-1212",owner:"John Doe",city:"New York, NY"}),l.default.createElement(i,{"aria-expanded":"true","aria-level":"4","aria-posinset":"1","aria-setsize":"1",name:"Allied Technologies",employees:"390",phone:"837-555-1212",owner:"Jane Doe",city:"Los Angeles, CA"}),l.default.createElement(i,{"aria-level":"5","aria-posinset":"1","aria-setsize":"1",name:"Allied Technologies (UV)",employees:"270",phone:"837-555-1212",owner:"John Doe",city:"San Francisco, CA"}),l.default.createElement(i,{"aria-expanded":"true","aria-level":"1","aria-posinset":"3","aria-setsize":"4",name:"Rohde Enterprises",employees:"6,000",phone:"837-555-1212",owner:"John Doe",city:"New York, NY"}),l.default.createElement(i,{"aria-level":"2","aria-posinset":"1","aria-setsize":"1",name:"Rohde Enterprises (UCA)",employees:"2,540",phone:"837-555-1212",owner:"John Doe",city:"New York, NY"}),l.default.createElement(i,{"aria-expanded":"true","aria-level":"1","aria-posinset":"4","aria-setsize":"4",name:"Tech Labs",employees:"1,856",phone:"837-555-1212",owner:"John Doe",city:"New York, NY"}),l.default.createElement(i,{"aria-level":"2","aria-posinset":"1","aria-setsize":"1",name:"Opportunity Resources Inc",employees:"1,934",phone:"837-555-1212",owner:"John Doe",city:"Los Angeles, CA"}))};a.default=l.default.createElement(o,null,l.default.createElement(c,null));a.states=[{id:"expanded",label:"Expanded",element:l.default.createElement(o,null,l.default.createElement(c,{isExpanded:!0,additionalItem:l.default.createElement(d,null)}))},{id:"deep-nesting",label:"Deeply nested branches",element:l.default.createElement(o,null,l.default.createElement(u,null))}]}});