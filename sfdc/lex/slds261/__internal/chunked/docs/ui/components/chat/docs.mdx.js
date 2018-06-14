var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/chat/docs.mdx.js"]=function(e){function t(t){for(var n,i,r=t[0],o=t[1],m=t[2],u=0,d=[];u<r.length;u++)i=r[u],s[i]&&d.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(c&&c(t);d.length;)d.shift()();return l.push.apply(l,m||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={12:0},l=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var m=0;m<r.length;m++)t(r[m]);var c=o;return l.push([146,0]),a()}({0:function(e,t){e.exports=React},144:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.TypingIcon=void 0;var n=i(a(0)),s=i(a(1)),l=i(a(12));function i(e){return e&&e.__esModule?e:{default:e}}var r=t.TypingIcon=function(e){return n.default.createElement("span",{className:(0,s.default)("slds-icon-typing",{"slds-is-animated":e.isAnimated,"slds-is-paused":e.isPaused}),title:e.title},n.default.createElement("span",{className:"slds-icon-typing__dot"}),n.default.createElement("span",{className:"slds-icon-typing__dot"}),n.default.createElement("span",{className:"slds-icon-typing__dot"}),e.assistiveText&&n.default.createElement("span",{className:"slds-assistive-text"},e.assistiveText))};r.propTypes={isAnimated:l.default.bool,isPaused:l.default.bool,title:l.default.string.isRequired,assistiveText:l.default.string},t.default=n.default.createElement(r,{title:"User is typing",assistiveText:"User is typing",isAnimated:!0});t.states=[{id:"paused",label:"Paused",element:n.default.createElement(r,{title:"User is typing",assistiveText:"User is typing",isAnimated:!0,isPaused:!0})},{id:"static",label:"Static",element:n.default.createElement(r,{title:"User is typing",assistiveText:"User is typing"})}]},145:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatIcon=t.ChatBookend=t.ChatEvent=t.ChatAvatar=t.ChatMessageBody=t.ChatMessage=t.ChatListItem=t.ChatList=t.Chat=void 0;var n=o(a(0)),s=o(a(1)),l=(o(a(9)),a(19)),i=a(11),r=a(144);function o(e){return e&&e.__esModule?e:{default:e}}t.Chat=function(e){return n.default.createElement("section",{role:"log",className:(0,s.default)("slds-chat",{"slds-chat_past":e.isPast})},e.children)},t.ChatList=function(e){return n.default.createElement("ul",{className:"slds-chat-list"},e.children)},t.ChatListItem=function(e){return n.default.createElement("li",{className:(0,s.default)("slds-chat-listitem",{"slds-chat-listitem_bookend":"bookend"===e.type,"slds-chat-listitem_event":"event"===e.type,"slds-chat-listitem_inbound":"inbound"===e.type,"slds-chat-listitem_outbound":"outbound"===e.type})},e.children)},t.ChatMessage=function(e){return n.default.createElement("div",{className:(0,s.default)("slds-chat-message",{"slds-chat-message_faux-avatar":e.hasFauxAvatar})},e.children)},t.ChatMessageBody=function(e){return n.default.createElement("div",{className:"slds-chat-message__body"},e.name&&e.timeStamp&&e.isPast&&n.default.createElement(m,{isPast:!0,name:e.name,timeStamp:e.timeStamp}),n.default.createElement("div",{className:(0,s.default)("slds-chat-message__text",{"slds-chat-message__text_inbound":"inbound"===e.type,"slds-chat-message__text_outbound":"outbound"===e.type,"slds-chat-message__text_outbound-agent":"outbound-agent"===e.type,"slds-chat-message__text_unsupported-type":"unsupported-type"===e.type,"slds-chat-message__text_delivery-failure":"delivery-failure"===e.type,"slds-chat-message__text_sneak-peek":e.hasSneakPeek})},e.isTyping&&n.default.createElement(r.TypingIcon,{isAnimated:!0,isPaused:e.isPaused,assistiveText:"Customer is typing",title:"Customer is typing"}),"unsupported-type"===e.type&&n.default.createElement(d,{symbol:"warning",assistiveText:"Warning"}),e.children&&n.default.createElement("span",{"aria-hidden":e.hasSneakPeek?"true":null},e.children),"delivery-failure"===e.type&&n.default.createElement(c,null,e.deliveryFailureReason)),"delivery-failure"===e.type?n.default.createElement("div",{className:"slds-grid slds-grid_align-spread slds-grid_vertical-align-start"},e.name&&e.timeStamp&&!e.isPast&&n.default.createElement(m,{name:e.name,timeStamp:e.timeStamp}),"delivery-failure"===e.type&&n.default.createElement(u,{symbol:"redo",actionTitle:"Resend"})):e.name&&e.timeStamp&&!e.isPast&&n.default.createElement(m,{name:e.name,timeStamp:e.timeStamp}))};var m=function(e){return n.default.createElement("div",{className:"slds-chat-message__meta","aria-label":"said "+e.name+" at "+e.timeStamp},e.isPast?n.default.createElement("b",null,e.name):e.name," • ",e.timeStamp)},c=function(e){return n.default.createElement("div",{className:"slds-chat-message__text_delivery-failure-reason",role:"alert"},n.default.createElement(d,{symbol:"error"}),n.default.createElement("span",null,e.children))},u=function(e){return n.default.createElement("button",{className:"slds-button slds-chat-message__action slds-m-top_xxx-small"},n.default.createElement(i.UtilityIcon,{assistiveText:!1,title:!1,className:"slds-icon_xx-small",containerClassName:"slds-chat-icon",symbol:e.symbol}),n.default.createElement("span",null,e.actionTitle))},d=(t.ChatAvatar=function(e){return n.default.createElement(l.Avatar,{className:"slds-avatar_circle slds-chat-avatar"},n.default.createElement("abbr",{className:"slds-avatar__initials slds-avatar__initials_inverse",title:e.name},e.initials))},t.ChatEvent=function(e){return n.default.createElement("div",{className:(0,s.default)("slds-chat-event",{"slds-has-error":e.hasError}),role:e.hasError&&"alert"},n.default.createElement("div",{className:"slds-chat-event__rule"}),n.default.createElement("div",{className:"slds-chat-event__body"},n.default.createElement(d,{symbol:e.symbol,assistiveText:e.iconAssistiveText}),n.default.createElement("p",null,e.children," • ",e.timeStamp)),n.default.createElement("div",{className:"slds-chat-event__rule"}),e.agentMessage&&n.default.createElement("div",{className:"slds-chat-event__agent-message"},e.agentMessage))},t.ChatBookend=function(e){return n.default.createElement("div",{className:(0,s.default)("slds-chat-bookend",{"slds-chat-bookend_stop":"stop"===e.type})},n.default.createElement(d,{symbol:"start"===e.type?"chat":"end_chat"}),n.default.createElement("p",null,"Chat ","stop"===e.type?"ended":"started"," by ",n.default.createElement("b",null,e.name)," ","• ",e.timeStamp))},t.ChatIcon=function(e){return n.default.createElement(i.UtilityIcon,{assistiveText:e.assistiveText||!1,className:"slds-icon_x-small",containerClassName:"slds-chat-icon",symbol:e.symbol,title:e.assistiveText||!1})})},146:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var n=a(0),s=(d(n),a(6)),l=d(s),i=d(a(5)),r=d(a(8)),o=d(a(7)),m=d(a(10)),c=a(145),u=a(23);function d(e){return e&&e.__esModule?e:{default:e}}var h=s.factories.a,p=s.factories.code,y=s.factories.h2,g=s.factories.h3,E=s.factories.h4,f=s.factories.li,C=s.factories.p,b=s.factories.table,v=s.factories.tbody,M=s.factories.td,_=s.factories.th,w=s.factories.thead,S=s.factories.tr,I=s.factories.ul,L=t.getElement=function(){return(0,n.createElement)(l.default,{},(0,n.createElement)("div",{className:"doc lead"},"The Chat component is used to display real-time and past chat logs between service agents and customers. It comes with a number of sub components that can be used to display the different types of chat items."),(0,n.createElement)(o.default,{title:"Chat list"},(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"bookend"},(0,n.createElement)(c.ChatBookend,{type:"start",name:"Andy Martinez",timeStamp:"4:58 PM"})),(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"inbound",name:"Andy Martinez",timeStamp:"4:59 PM"},"Hi, my CloudWidget only speaks French"))),(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"outbound"},"Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?"))),(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"inbound",name:"Andy Martinez",timeStamp:"5:09 PM"},"I'm not trying to program any language"))),(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"outbound",name:"Jason Dewar",timeStamp:"5:15 PM"},"Sorry to hear that. Let me see what I can do about this.")))))),y({id:"Structuring-a-chat"},"Structuring a chat"),C({},"To correctly structure and communicate a chat, you should first follow the basic structure that forms any chat log and can contain any type of chat item."),C({},"A chat consists of an unordered list of possible chat items, wrapped in a ",p({},"section")," which has the accessible role of ",p({},"log"),"."),(0,n.createElement)(m.default,{header:"Accessible Role",type:"a11y"},"The ",(0,n.createElement)("code",{className:"doc"},"log")," role has an implicit ",(0,n.createElement)("code",{className:"doc"},"aria-live")," property value of ",(0,n.createElement)("code",{className:"doc"},"polite"),", meaning that it comes for free. It also has an implicit ",(0,n.createElement)("code",{className:"doc"},"aria-relevant")," property value of ",(0,n.createElement)("code",{className:"doc"},"additions text"),". Together this means any additional text, or chat items added to the list will automatically be politely announced by a screen reader"),(0,n.createElement)(r.default,{toggleCode:!1},(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,null)))),C({},"Each ",p({},"slds-chat-listitem")," comes with 4 modifier classes, each one needing to be applied based on the type of chat item you are display in the list item:"),b({},w({},S({},_({},"Chat item"),_({},"Modifier"),_({},"When to apply"))),v({},S({},M({},h({href:"#Inbound-messages"},"Inbound message")),M({},p({},".slds-chat-listitem slds-chat-listitem_inbound")),M({},"Apply to all list items that contain inbound messages")),S({},M({},h({href:"#Outbound-messages"},"Outbound message")),M({},p({},".slds-chat-listitem slds-chat-listitem_outbound")),M({},"Apply to all list items that contain outbound messages")),S({},M({},h({href:"#Displaying-events-during-a-chat-session"},"Chat event")),M({},p({},".slds-chat-listitem slds-chat-listitem_event")),M({},"Apply to all list items that contain events")),S({},M({},h({href:"#Starting-and-ending-a-chat"},"Chat bookend")),M({},p({},".slds-chat-listitem slds-chat-listitem_bookend")),M({},"Apply to all list items that contain chat log bookends")))),C({},"The modifiers are used to apply any specific styling to the type of chat item it represents, including spacing, position and layout."),y({id:"Starting-and-ending-a-chat"},"Starting and ending a chat"),C({},"When each chat session is started or stopped, it is represented with a bookend. The bookend displays when the chat was stopped or started and by who."),g({id:"Chat-started-bookend"},"Chat started bookend"),(0,n.createElement)(i.default,null,(0,n.createElement)(c.ChatBookend,{type:"start",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"})),g({id:"Chat-stopped-bookend"},"Chat stopped bookend"),(0,n.createElement)(i.default,null,(0,n.createElement)(c.ChatBookend,{type:"stop",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"})),y({id:"Chat-messages"},"Chat messages"),C({},"Chat messages are comprised of the message text, and message meta data including the persons name and time at which the message was sent. Chat messages come in 3 forms:"),g({id:"Inbound-messages"},"Inbound messages"),(0,n.createElement)(m.default,{header:"Use of aria-label",type:"a11y"},"Each message meta data wrapper has ",(0,n.createElement)("code",{className:"doc"},"aria-label")," added, which we can use to form more human sounding messages as they arrive, ",(0,n.createElement)("b",null,'"Hi, my CloudWidget only speaks French said Taylor Watson-Rice at 4:59 PM"'),". A screen reader, when ",(0,n.createElement)("code",{className:"doc"},"aria-label")," is applied to an element, will only announce the contents of the label, not the text content held in it."),(0,n.createElement)(o.default,{title:"Chat Inbound message"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"inbound",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},"Hi, my CloudWidget only speaks French"))))))),E({id:"Consecutive-inbound-messages"},"Consecutive inbound messages"),C({},"Consecutive messages only display name and time meta data once"),(0,n.createElement)(o.default,{title:"Chat Consecutive Inbound message"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"inbound"},"Hi, my CloudWidget only speaks French"))),(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"inbound",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},"I'm having trouble changing that."))))))),E({id:"Inbound-with-avatar"},"Inbound with avatar"),C({},"Inbound messages can optionally display the customers avatar. When displaying an avatar in inbound messages, be sure to apply the ",p({},"slds-chat-message_faux-avatar")," modifier to any consecutive ",p({},"slds-chat-message")," containers, to ensure correct alignment where the avatar is missing."),(0,n.createElement)(o.default,{title:"Chat Inbound message with avatar"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatAvatar,{initials:"TW",name:"Taylor Watson-Rice"}),(0,n.createElement)(c.ChatMessageBody,{type:"inbound"},"Hi, my CloudWidget only speaks French"))),(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,{hasFauxAvatar:!0},(0,n.createElement)(c.ChatMessageBody,{type:"inbound",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},"I'm having trouble changing that."))))))),E({id:"Receiving-a-file-attachment"},"Receiving a file attachment"),C({},"During a chat an agent can request the customer upload a file attachment to be sent to the agent."),(0,n.createElement)(o.default,{title:"Chat Inbound message with file attachment"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatAvatar,{initials:"TW",name:"Taylor Watson-Rice"}),(0,n.createElement)(c.ChatMessageBody,{type:"inbound",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},(0,n.createElement)(u.DoctypeIcon,{assistiveText:"Attachment",className:"slds-icon_small",containerClassName:"slds-chat-icon",symbol:"attachment",title:"Attachment"}),(0,n.createElement)("a",{href:"javascript:void(0)"},"filename_of_attachment.jpg")))))))),E({id:"Customer-is-typing"},"Customer is typing"),C({},"Whilst chatting with customers, agents can see when a customer is typing a response by using the ",h({href:"/components/dynamic-icons"},"Dynamic Icon, Typing"),"."),(0,n.createElement)(m.default,{header:"Assistive text",type:"a11y"},"It's important to set descriptive assistive text to the typing icon, as this is the only means a screen reader user will know a customer is currently typing. The assistive text, because it is text content, will be announced as the icon is added to the DOM. As an example, we use ",(0,n.createElement)("b",null,'"Customer is typing"')),(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatAvatar,{initials:"TW",name:"Taylor Watson-Rice"}),(0,n.createElement)(c.ChatMessageBody,{isTyping:!0,type:"inbound"})))))),E({id:"Sneak-peek"},"Sneak peek"),C({},"We can take that experience one step further when the sneak peek feature is enabled. This allows agents to see what customers are typing in real time, as they type it."),(0,n.createElement)(m.default,{header:"aria-hidden",type:"a11y"},"When the sneak peek feature is active, we take care to try and reduce the verbosity a screen reader user will encounter. As they will hear the final message once it is typed, we have found it is preferred to use ",(0,n.createElement)("code",{className:"doc"},'aria-hidden="true"')," on the text they are currently typing, to reduce noise."),(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatAvatar,{initials:"TW",name:"Taylor Watson-Rice"}),(0,n.createElement)(c.ChatMessageBody,{isTyping:!0,hasSneakPeek:!0,type:"inbound"},"Hi, my CloudWidget only spe")))))),g({id:"Outbound-messages"},"Outbound messages"),C({},"Outbound messages come in 2 forms. Ones that are written by the agent in the current chat session, and ones which have been written by other agents who have dealt with the customer during the same chat session."),E({id:"Outbound-message-by-current-agent"},"Outbound message by current agent"),(0,n.createElement)(o.default,{title:"Chat Outbound message current agent"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"outbound",name:"Amber Cann",timeStamp:"4:59 PM"},"Hi Taylor, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget? ",(0,n.createElement)("a",{href:"javascript:void(0)"},"http://www/cloud.widget")))))))),E({id:"Outbound-message-by-another-agent"},"Outbound message by another agent"),(0,n.createElement)(o.default,{title:"Chat Outbound message another agent"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"outbound-agent",name:"Jason Dewar",timeStamp:"4:59 PM"},"So sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patience. Have you tried visiting our help site?"))))))),E({id:"Consecutive-outbound-messages"},"Consecutive outbound messages"),C({},"For consecutive outbound messages the same rules apply to both types, as consecutive inbound messages."),(0,n.createElement)(o.default,{title:"Chat consecutive outbound messages"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"outbound"},"Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?"))),(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"outbound",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},"It might be the cause of the problem"))))))),g({id:"Delivery-Status-Messages"},"Delivery Status Messages"),E({id:"Unsupported-Message-Type-(Inbound)"},"Unsupported Message Type (Inbound)"),C({},"If a customer tries sending a message that is not supported, it will appear as an unsupported message type."),(0,n.createElement)(o.default,{title:"Chat Inbound message unsupported type"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatAvatar,{initials:"TW",name:"Taylor Watson-Rice"}),(0,n.createElement)(c.ChatMessageBody,{type:"unsupported-type",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},"Message type is not supported"))))))),E({id:"Message-Delivery-Failure-(Outbound)"},"Message Delivery Failure (Outbound)"),C({},"If the agent attempts to send a message that can't be delivered, a message delivery failure indication appears beneath the original message text, along with an option to resend."),(0,n.createElement)(m.default,{header:"Role alert",type:"a11y"},"Message delivery failures have the addition ",(0,n.createElement)("code",null,'role="alert"')," to their container. A chat log has an ",(0,n.createElement)("code",null,'aria-live="polite"')," value, but we would like to inform agents of errors immediately. The ",(0,n.createElement)("code",null,'role="alert"')," attribute comes with an implicit ",(0,n.createElement)("code",null,"aria-live")," value of ",(0,n.createElement)("code",null,"assertive")," which will achieve this."),(0,n.createElement)(o.default,{title:"Chat Outbound message with delivery failure"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"delivery-failure",deliveryFailureReason:"Message was not delivered because Andy stopped receiving messages.",name:"Amber Cann",timeStamp:"4:59 PM"},"It might be the cause of the problem"))))))),y({id:"Displaying-events-during-a-chat-session"},"Displaying events during a chat session"),C({},"During a chat session a number of events can occur and these are displayed to the agent, with descriptions and sometimes messages."),g({id:"Basic-chat-event"},"Basic chat event"),C({},"The basic type of events that can occur include;"),I({},f({},"Rasing a flag"),f({},"Lowering a flag"),f({},"A whisper"),f({},"File request"),f({},"File sent"),f({},"File request cancelled"),f({},"Transfer request"),f({},"Transfer accepted"),f({},"Transfer cancelled"),f({},"Transfer declined")),(0,n.createElement)(o.default,{title:"Chat event types"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"priority",timeStamp:"5:09 PM"},(0,n.createElement)("b",null,"Jason Dewar")," raised a flag")),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"lower_flag",timeStamp:"5:09 PM"},(0,n.createElement)("b",null,"Jason Dewar")," lowered the flag")),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"chat",timeStamp:"5:09 PM"},"Whisper from super ",(0,n.createElement)("b",null,"SuperAlly"))),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"share_file",timeStamp:"5:09 PM"},(0,n.createElement)("b",null,"Jason Dewar")," sent a file request to ",(0,n.createElement)("b",null,"Andy Martinez"))),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"file",timeStamp:"5:09 PM"},(0,n.createElement)("b",null,"Andy Martinez")," sent a file")),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"cancel_file_request",timeStamp:"5:09 PM"},(0,n.createElement)("b",null,"Jason Dewar")," cancelled the file request")),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"change_owner",timeStamp:"5:09 PM"},(0,n.createElement)("b",null,"Jason Dewar")," sent a transfer request to ",(0,n.createElement)("b",null,"Technical Support Team"))),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"change_owner",timeStamp:"5:09 PM"},(0,n.createElement)("b",null,"Technical Support Team")," accepted the transfer request")),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"cancel_transfer",timeStamp:"5:09 PM"},(0,n.createElement)("b",null,"Jason Dewar")," cancelled the transfer request")),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"cancel_request",timeStamp:"5:09 PM"},(0,n.createElement)("b",null,"Technical Support Team")," declined the transfer request")))))),g({id:"Chat-event-with-an-agent-message"},"Chat event with an agent message"),C({},"Sometimes an agent might add a message to an event for another agent to read."),(0,n.createElement)(o.default,{title:"Chat event with agent message"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{agentMessage:"Andy needs help changing the language on his CloudWidget",symbol:"change_owner",timeStamp:"5:19 PM"},(0,n.createElement)("b",null,"Jason Dewar")," sent a transfer request to ",(0,n.createElement)("b",null,"Amber Cann"))))))),g({id:"Chat-event-error"},"Chat event - error"),C({},"In the event of an error occurring during the chat, an error event can be displayed to the agent. This is done by adding the ",p({},".slds-has-error")," modifier class."),(0,n.createElement)(m.default,{header:"Role alert",type:"a11y"},"Event errors have the addition ",(0,n.createElement)("code",null,'role="alert"')," to their container. A chat log has a ",(0,n.createElement)("code",null,'aria-live="polite"')," value, but we would like to inform agents of errors immediately. The ",(0,n.createElement)("code",null,'role="alert"')," attribute comes with an implicit ",(0,n.createElement)("code",null,"aria-live")," value of ",(0,n.createElement)("code",null,"assertive")," which will achieve this."),(0,n.createElement)(o.default,{title:"Chat event error"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{hasError:!0,symbol:"error",iconAssistiveText:"warning",timeStamp:"5:06 PM"},"The file sent by ",(0,n.createElement)("b",null,"Andy Martinez")," is too large")))))),y({id:"Putting-it-all-together"},"Putting it all together"),(0,n.createElement)(o.default,{title:"Chat full list"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,null,(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"bookend"},(0,n.createElement)(c.ChatBookend,{type:"start",name:"Andy Martinez",timeStamp:"4:58 PM"})),(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatAvatar,{initials:"AM",name:"Andy Martinez"}),(0,n.createElement)(c.ChatMessageBody,{type:"inbound",name:"Andy Martinez",timeStamp:"4:59 PM"},"Hi, my CloudWidget only speaks French"))),(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"outbound-agent"},"Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?"))),(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"outbound-agent",name:"Jason Dewar",timeStamp:"5:02 PM"},"Have you tried turning it off and on again?"))),(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatAvatar,{initials:"AM",name:"Andy Martinez"}),(0,n.createElement)(c.ChatMessageBody,{type:"inbound",name:"Andy Martinez",timeStamp:"5:09 PM"},"yes, of course"))),(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"outbound-agent",name:"Jason Dewar",timeStamp:"5:15 PM"},"Sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patience!"))),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{agentMessage:"Andy needs help changing the language on his CloudWidget",symbol:"change_owner",timeStamp:"5:19 PM"},(0,n.createElement)("b",null,"Jason Dewar")," sent a transfer request to ",(0,n.createElement)("b",null,"Technical Support Team"))),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"change_owner",timeStamp:"5:20 PM"},(0,n.createElement)("b",null,"Technical Support Team")," accepted the transfer request")),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"change_owner",timeStamp:"5:22 PM"},(0,n.createElement)("b",null,"Amber Cann")," accepted this chat")),(0,n.createElement)(c.ChatListItem,{type:"outbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{type:"outbound",name:"Amber Cann",timeStamp:"5:23 PM"},"Hi Andy, my name is Amber and I can help you solve your issue."))),(0,n.createElement)(c.ChatListItem,{type:"inbound"},(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatAvatar,{initials:"AM",name:"Andy Martinez"}),(0,n.createElement)(c.ChatMessageBody,{type:"inbound",name:"Andy Martinez",timeStamp:"5:29 PM"},"Nevermind, I speak french."))),(0,n.createElement)(c.ChatListItem,{type:"bookend"},(0,n.createElement)(c.ChatBookend,{type:"stop",name:"Andy Martinez",timeStamp:"5:30 PM"})))))),y({id:"Past-Chats"},"Past Chats"),C({},"An agent has the ability to view past chats with particular customers. In this instance the exact same components and markup for all types of chat items can be used, with just 4 differences:"),I({},f({},"A single modifier class of ",p({},".slds-chat_past")," is added to the ",p({},".slds-chat")," container"),f({},"Each chat message ",p({},".slds-chat-listitem")," container looses it's ",p({},".slds-chat-listitem_inbound")," or ",p({},".slds-chat-listitem_outbound")," modifier class"),f({},"Each chat message ",p({},".slds-chat-message__text")," looses it's ",p({},".slds-chat-message__text_inbound")," or ",p({},".slds-chat-message__text_outbound")," modifier class"),f({},p({},".slds-chat-message__meta")," moves to before ",p({},".slds-chat-message__text")," in DOM order")),(0,n.createElement)(o.default,{title:"Chat past chat"},(0,n.createElement)(i.default,null,(0,n.createElement)(c.Chat,{isPast:!0},(0,n.createElement)(c.ChatList,null,(0,n.createElement)(c.ChatListItem,{type:"bookend"},(0,n.createElement)(c.ChatBookend,{type:"start",name:"Andy Martinez",timeStamp:"4:58 PM"})),(0,n.createElement)(c.ChatListItem,null,(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{isPast:!0,name:"Andy Martinez",timeStamp:"4:59 PM"},"Hi, my CloudWidget only speaks French"))),(0,n.createElement)(c.ChatListItem,null,(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{isPast:!0,name:"Jason Dewar",timeStamp:"5:02 PM"},"Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?"))),(0,n.createElement)(c.ChatListItem,null,(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{isPast:!0,name:"Jason Dewar",timeStamp:"5:03 PM"},"Have you tried turning it off and on again?"))),(0,n.createElement)(c.ChatListItem,null,(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{isPast:!0,name:"Andy Martinez",timeStamp:"5:09 PM"},"yes, of course"))),(0,n.createElement)(c.ChatListItem,null,(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{isPast:!0,name:"Jason Dewar",timeStamp:"5:15 PM"},"Sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patience!"))),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{agentMessage:"Andy needs help changing the language on his CloudWidget",symbol:"change_owner",timeStamp:"5:19 PM"},(0,n.createElement)("b",null,"Jason Dewar")," sent a transfer request to ",(0,n.createElement)("b",null,"Technical Support Team"))),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"change_owner",timeStamp:"5:20 PM"},(0,n.createElement)("b",null,"Technical Support Team")," accepted the transfer request")),(0,n.createElement)(c.ChatListItem,{type:"event"},(0,n.createElement)(c.ChatEvent,{symbol:"change_owner",timeStamp:"5:22 PM"},(0,n.createElement)("b",null,"Amber Cann")," accepted this chat")),(0,n.createElement)(c.ChatListItem,null,(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{isPast:!0,name:"Amber Cann",timeStamp:"5:23 PM"},"Hi Andy, my name is Amber and I can help you solve your issue."))),(0,n.createElement)(c.ChatListItem,null,(0,n.createElement)(c.ChatMessage,null,(0,n.createElement)(c.ChatMessageBody,{isPast:!0,name:"Andy Martinez",timeStamp:"5:29 PM"},"Nevermind, I speak french."))),(0,n.createElement)(c.ChatListItem,{type:"bookend"},(0,n.createElement)(c.ChatBookend,{type:"stop",name:"Andy Martinez",timeStamp:"5:30 PM"})))))))};t.getContents=function(){return(0,s.createTableOfContents)(L())}},4:function(e,t){e.exports=JSBeautify}});