(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{42:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),o=n.n(i),c=n(11),l=n(10),d=n(73),u=n(74),p=n(71),s=n(69),b=n(70),f=n(19),m=n(12),E=n(68),v=n(8);function y(){var e=Object(c.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 13px;\n  opacity: 0.3;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return y=function(){return e},e}function g(){var e=Object(c.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 13px;\n  opacity: 0.3;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return g=function(){return e},e}function h(){var e=Object(c.a)(["\n  padding-bottom: 4px;\n  padding-top: 4px;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return h=function(){return e},e}var x=m.a.div(h()),I=Object(m.a)(E.a)(g(),x),O=Object(m.a)(E.a)(y(),x),j=Object(v.b)()((function(e){var t=e.text,n=e.cardId,i=e.index,o=e.dispatch,c=e.listId,m=Object(a.useState)(!1),v=Object(l.a)(m,2),y=v[0],g=v[1],h=Object(a.useState)(""),j=Object(l.a)(h,2),D=j[0],w=j[1],S=function(){o(function(e,t){return{type:"CARD_DELETE",payload:{listId:e,cardId:t}}}(c,n))},T=function(){o(function(e,t,n){return{type:"CARD_EDIT",payload:{listId:e,cardId:t,text:n}}}(c,n,D)),g(!1),w("")};return y?r.a.createElement("div",{style:{paddingTop:4,marginBottom:8}},r.a.createElement(d.a,{onBlur:function(){return g(!1)},style:{overflow:"visible",minHeight:80,minWidth:266,padding:"6px 8px 2px"}},r.a.createElement(u.a,{autoFocus:!0,value:D,onChange:function(e){return w(e.target.value)},style:{resize:"none",width:"100%",overflow:"hidden",outline:"none",border:"none",fontSize:15}})),r.a.createElement("div",{style:{marginTop:8,display:"flex",alignItems:"center"}},r.a.createElement(p.a,{variant:"contained",disabled:!D,onMouseDown:T,color:"primary"},"Save"),r.a.createElement(E.a,{style:{cursor:"pointer",marginLeft:8},onClick:function(){return g(!1)}},"close"))):r.a.createElement(f.b,{draggableId:n,index:i},(function(e){return r.a.createElement(x,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement(d.a,null,r.a.createElement(I,{fontSize:"small",onClick:function(){g(!0),w(t)}},"edit"),r.a.createElement(O,{fontSize:"small",onClick:S},"delete"),r.a.createElement(s.a,null,r.a.createElement(b.a,{gutterBottom:!0},t))))}))})),D=n(40),w=Object(v.b)()((function(e){var t=e.element,n=e.onBlur,i=e.dispatch,o=e.listId,c="list"===t?"Add List":"Add Card",u="list"===t?"Enter list title...":"Enter a title for this card...",s=Object(a.useState)(""),b=Object(l.a)(s,2),f=b[0],m=b[1],v=Object(a.useRef)(null);return r.a.createElement("div",{style:{paddingTop:4}},r.a.createElement(d.a,{onBlur:n,style:{overflow:"visible",minHeight:"card"===t?80:"none",minWidth:266,padding:"6px 8px 2px"}},r.a.createElement(D.a,{placeholder:u,autoFocus:!0,ref:v,value:f,onChange:function(e){return m(e.target.value)},style:{resize:"none",width:"100%",overflow:"hidden",outline:"none",border:"none",fontSize:15,fontWeight:"list"===t&&600}})),r.a.createElement("div",{style:{marginTop:8,display:"flex",alignItems:"center"}},r.a.createElement(p.a,{variant:"contained",disabled:!f,onMouseDown:function(e){return function(e){e.preventDefault(),"list"===t?i({type:"LIST_ADD",payload:f}):"card"===t&&i(function(e,t){return{type:"CARD_ADD",payload:{text:e,listId:t}}}(f,o)),m(""),v.current.blur()}(e)},color:"primary"},c),r.a.createElement(E.a,{style:{cursor:"pointer",marginLeft:8},onClick:function(){v.current.blur()}},"close")))}));function S(){var e=Object(c.a)(["\n    display: flex;\n    background-color: inherit;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    width: 266px;\n    min-width: 266px;\n    padding-left: 10px;\n    &:hover {\n        background-color: lightgray;\n    }\n"]);return S=function(){return e},e}var T=m.a.div(S()),_=function(e){var t=e.element,n=e.listId,i=Object(a.useState)(!1),o=Object(l.a)(i,2),c=o[0],d=o[1];return c?r.a.createElement(w,{listId:n,element:t,onBlur:function(){d(!1)}}):r.a.createElement(T,{onClick:function(){d(!0)}},r.a.createElement(E.a,null,"add"),"list"===t?r.a.createElement(b.a,{variant:"h6"},"Add a new ",t):r.a.createElement(b.a,null,"Add a new ",t))};function k(){var e=Object(c.a)(["\n    display: none;\n    margin-rigth: 50px;\n    transition: opacity 0.3s ease-in-out;\n    opacity: 0.2;\n    ",":hover & {\n        display: inline;\n        cursor: pointer;\n      }\n    &:hover {\n        opacity: 0.8;\n    }   \n"]);return k=function(){return e},e}function C(){var e=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n"]);return C=function(){return e},e}function A(){var e=Object(c.a)(["\n    background-color: #dfe3e6;\n    border-radius: 4px;\n    width: 280px;\n    height: 100%;\n    padding: 10px;\n    margin-right: 8px;\n    box-shadow: 3px 3px 5px -2px black;\n"]);return A=function(){return e},e}var R=m.a.div(A()),L=m.a.div(C()),B=Object(m.a)(E.a)(k(),R),z=Object(v.b)()((function(e){var t=e.title,n=e.cards,i=e.listId,o=e.index,c=e.dispatch,s=Object(a.useState)(!1),m=Object(l.a)(s,2),v=m[0],y=m[1],g=Object(a.useState)(t),h=Object(l.a)(g,2),x=h[0],I=h[1],O=function(){c(function(e){return{type:"LIST_DELETE",payload:{listId:e}}}(i))},D=function(){c(function(e,t){return{type:"LIST_EDIT",payload:{listId:e,listTitle:t}}}(i,x)),y(!1)};return r.a.createElement(f.b,{draggableId:i,index:o},(function(e){return r.a.createElement(R,Object.assign({},e.draggableProps,{ref:e.innerRef},e.dragHandleProps),r.a.createElement(f.c,{droppableId:i,type:"card"},(function(e){return r.a.createElement("div",null,v?r.a.createElement("form",{style:{display:"flex",justifyContent:"space-between",paddingBottom:8}},r.a.createElement(d.a,{style:{width:"55%",padding:"6px 8px 2px"}},r.a.createElement(u.a,{style:{resize:"none",overflow:"hidden",outline:"none",border:"none",fontSize:15,fontWeight:600},value:x,onChange:function(e){e.preventDefault(),I(e.target.value)},autoFocus:!0,onBlur:function(){y(!1)}})),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center"}},r.a.createElement(p.a,{variant:"contained",color:"primary",onMouseDown:D,disabled:!x,value:"Save"},"Save"),r.a.createElement(E.a,{style:{cursor:"pointer",marginLeft:8},onClick:function(){y(!1)}},"close"))):r.a.createElement(L,null,r.a.createElement(b.a,{variant:"h6"},t),r.a.createElement("div",null,r.a.createElement(B,{onClick:function(){y(!0)}},"edit"),r.a.createElement(B,{onClick:O},"delete"))),r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),n.map((function(e,t){return r.a.createElement(j,{key:e.id,text:e.text,cardId:e.id,index:t,listId:i})})),e.placeholder,r.a.createElement("div",{style:{marginTop:8}},r.a.createElement(_,{listId:i,element:"card"}))))})))}))}));function G(){var e=Object(c.a)(["\n  display: flex;\n  height: 100%;\n"]);return G=function(){return e},e}var N=m.a.div(G()),P=Object(v.b)((function(e){return{board:e.board}}))((function(e){var t=e.board,n=e.dispatch;return r.a.createElement(a.Fragment,null,r.a.createElement(b.a,{variant:"h4",style:{marginBottom:20,marginLeft:8,marginTop:15,color:"#b3d6ee"}},"Kanban Board"),r.a.createElement(f.a,{onDragEnd:function(e){var t,a,r,i,o=e.destination,c=e.source,l=(e.draggableId,e.type);o&&("card"===l?n((t=c.droppableId,a=o.droppableId,r=c.index,i=o.index,{type:"CARD_DRAGGED",payload:{droppableIdStart:t,droppableIdEnd:a,droppableIndexEnd:i,droppableIndexStart:r}})):"list"===l&&n(function(e,t,n,a){return{type:"LIST_DRAGGED",payload:{droppableIdEnd:t,droppableIdStart:e,droppableIndexEnd:a,droppableIndexStart:n}}}(c.droppableId,o.droppableId,c.index,o.index)))}},r.a.createElement(f.c,{droppableId:"all-lists",type:"list",direction:"horizontal"},(function(e){return r.a.createElement(N,Object.assign({},e.droppableProps,{ref:e.innerRef}),t.map((function(e,t){return r.a.createElement(z,{key:e.id,listId:e.id,title:e.title,cards:e.cards,index:t})})),e.placeholder,r.a.createElement(_,{element:"list"}))}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=n(14),F=n(26),H=n(4),J=n(72),X=[{title:"To do",id:Object(J.a)(),cards:[]},{title:"In progress",id:Object(J.a)(),cards:[{id:Object(J.a)(),text:"Code react applications"},{id:Object(J.a)(),text:"Debug react applications"}]},{title:"Reviewing",id:Object(J.a)(),cards:[]},{title:"Done",id:Object(J.a)(),cards:[]}],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_ADD":var n={id:Object(J.a)(),title:t.payload,cards:[]};return[].concat(Object(H.a)(e),[n]);case"CARD_ADD":var a={id:Object(J.a)(),text:t.payload.text},r=e.map((function(e){return e.id===t.payload.listId?Object(F.a)(Object(F.a)({},e),{},{cards:[].concat(Object(H.a)(e.cards),[a])}):e}));return r;case"LIST_DRAGGED":var i=t.payload,o=i.droppableIndexEnd,c=i.droppableIndexStart,l=Object(H.a)(e),d=l.splice(c,1);return l.splice.apply(l,[o,0].concat(Object(H.a)(d))),l;case"CARD_DRAGGED":var u=t.payload,p=u.droppableIdStart,s=u.droppableIdEnd,b=u.droppableIndexEnd,f=u.droppableIndexStart,m=Object(H.a)(e);if(p===s){var E,v=e.find((function(e){return e.id===p})),y=v.cards.splice(f,1);(E=v.cards).splice.apply(E,[b,0].concat(Object(H.a)(y)))}if(p!==s){var g,h=e.find((function(e){return e.id===p})),x=e.find((function(e){return e.id===s})),I=h.cards.splice(f,1);(g=x.cards).splice.apply(g,[b,0].concat(Object(H.a)(I)))}return m;case"CARD_DELETE":var O=e.map((function(e){return e.id===t.payload.listId?Object(F.a)(Object(F.a)({},e),{},{cards:Object(H.a)(e.cards.filter((function(e){return e.id!==t.payload.cardId})))}):e}));return O;case"CARD_EDIT":var j=e.find((function(e){return e.id===t.payload.listId})),D=j.cards.find((function(e){return e.id===t.payload.cardId}));return D.text=t.payload.text,j.cards=Object(H.a)(j.cards),Object(H.a)(e);case"LIST_DELETE":return Object(H.a)(e.filter((function(e){return e.id!==t.payload.listId})));case"LIST_EDIT":var w=e.find((function(e){return e.id===t.payload.listId}));return w.title=t.payload.listTitle,Object(H.a)(e);default:return e}},U=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),V=function(){var e=Object(W.e)(Object(W.c)({board:M}),U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());return e.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}({board:e.getState().board})})),e}();o.a.render(r.a.createElement(v.a,{store:V},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.1212d3a4.chunk.js.map