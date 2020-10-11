(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/circle.9296916b.png"},23:function(e,a,t){e.exports=t(52)},28:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(17),c=t.n(l),i=(t(28),t(5)),s=t.n(i),m=t(18),o=t(3),d=t(19);t(33),t(7),t(8);function u(e){var a=n.a.useState(1),t=Object(o.a)(a,2),r=t[0],l=t[1];return n.a.createElement("div",{className:"About"},n.a.createElement("div",{className:"portrait"},n.a.createElement("img",{src:e.image,className:"image",alt:"illust"})),n.a.createElement("div",{className:"bio"},n.a.createElement("div",{className:"tag"},n.a.createElement("span",{role:"img","aria-label":"peace",className:"emoji"},"\u270c\ufe0f")," ",n.a.createElement("a",{href:"#",className:"clicker",onClick:function(){l(1)}}," Hey there!")," I'm "),n.a.createElement("div",{className:"title"},e.name),n.a.createElement("div",{className:"tag"},"I ",n.a.createElement("a",{href:"#",className:"clicker",onClick:function(){l(2)}},"code"),"  / ",n.a.createElement("a",{href:"#",className:"clicker",onClick:function(){l(3)}},"write"),"  / ",n.a.createElement("a",{href:"#",className:"clicker",onClick:function(){l(4)}},"create"),"."),n.a.createElement("div",{className:"descrip"},1===r?n.a.createElement("div",null,"Creative & computer science student. ",n.a.createElement("br",null),"Born (and currently based) in Auckland, NZ.",n.a.createElement("br",null),"Here to uplift BIPOC + LGBTQ/SGL communities."):2===r?n.a.createElement("div",null,"I'm a first year computer science student at ",n.a.createElement("a",{href:"http://berkeley.edu",target:"_blank"},"UC Berkeley")," and mentored developer @ ",n.a.createElement("a",{href:"http://codebase.berkeley.edu/",target:"_blank"},"Codebase"),"."):3===r?n.a.createElement("div",null,"Sometimes I write (and draw) for ",n.a.createElement("a",{href:"https://tearaway.co.nz/",target:"_blank"},"Tearaway NZ"),". You can also find my creative writing in the last 4 editions of ",n.a.createElement("a",{href:"http://clerestorypress.co.nz/redraft",target:"_blank"},"Re-Draft"),", published by Clerestory Press."):4===r?n.a.createElement("div",null,"I'm a freelancer with experience in visual arts and various forms of design (character, graphic, architectural...) Also a graphic designer with ",n.a.createElement("a",{href:"http://innovativedesign.club/",target:"_blank"},"Innovative Design"),". I love ",n.a.createElement("a",{href:"https://isabel.li/paper",target:"_blank"},"oils and gouache"),", and bring my ",n.a.createElement("a",{href:"https://isabel.li/pixels",target:"_blank"},"tablet")," everywhere."):void 0),n.a.createElement("div",{className:"contact"},n.a.createElement("span",{role:"img","aria-label":"mail",className:"emoji"},"\ud83d\udcec")," ",n.a.createElement("a",{href:"mailto:ilyues@berkeley.edu"},"ilyues@berkeley.edu"),n.a.createElement("br",null),n.a.createElement("span",{role:"img","aria-label":"peace",className:"emoji"},"\ud83d\udd4a\ufe0f")," ",n.a.createElement("a",{href:"https://twitter.com/ILYUES/",target:"_blank"},"@ILYUES"),n.a.createElement("br",null),n.a.createElement("span",{role:"img","aria-label":"art",className:"emoji"},"\ud83c\udfa8")," ",n.a.createElement("a",{href:"https://isabel.li/",target:"_blank"},"Portfolio"))))}t(34);function p(e){var a=e.info;return n.a.createElement("div",{className:"Proj"},n.a.createElement("div",{className:"cover"},n.a.createElement("div",{className:"proj-image"},n.a.createElement("img",{src:a.imgUrl,className:"proj-image",alt:"project cover"}))),n.a.createElement("div",{className:"hidden"},n.a.createElement("h2",null,a.projectName),a.description))}function E(e){var a=e.info;return n.a.createElement("div",{className:"Exp"},n.a.createElement("div",{className:"date"},a.date),n.a.createElement("div",{className:"exp-descrip"},a.tags),n.a.createElement("div",{className:"header"},a.name))}var f=t(22),h=t.n(f),v=t(6),g=t.n(v);var C=function(){var e=n.a.useState(null),a=Object(o.a)(e,2),t=a[0],r=a[1],l=n.a.useState(null),c=Object(o.a)(l,2),i=c[0],f=c[1];function v(){return(v=Object(m.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.airtable.com/v0/appfM1P4g20WgyhpY/Projects",{headers:{authorization:"Bearer ".concat("keycTv83fSC7kBjHT")}});case 2:return a=e.sent,e.next=5,g.a.get("https://api.airtable.com/v0/appfM1P4g20WgyhpY/Experiences",{headers:{authorization:"Bearer ".concat("keycTv83fSC7kBjHT")}});case 5:t=e.sent,f(a.data.records),r(t.data.records);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.useEffect((function(){!function(){v.apply(this,arguments)}()}),[]),i&&t?n.a.createElement("div",{className:"App"},n.a.createElement(d.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"ISABEL \u73a5 LI"),n.a.createElement("meta",{property:"og:description",content:"code / write / create"}),n.a.createElement("link",{id:"favicon",rel:"icon",type:"image/png"})),n.a.createElement("svg",{className:"bg-shape",viewBox:"-65 107.5 150 100"},n.a.createElement("path",{fill:"#0F3933",d:"M25.5,-43C32.4,-35.2,37,-27.1,35.1,-19.5C33.3,-11.8,25,-4.7,22,1.8C19,8.4,21.3,14.4,19.4,17.1C17.5,19.9,11.5,19.3,6.6,19.5C1.6,19.6,-2.3,20.5,-10.3,23.4C-18.2,26.4,-30.1,31.4,-44.7,30.1C-59.3,28.8,-76.5,21.1,-83.2,8.8C-89.8,-3.5,-85.9,-20.4,-78.4,-35.3C-70.9,-50.2,-59.8,-63,-46.1,-67.7C-32.5,-72.3,-16.2,-68.9,-3.5,-63.5C9.3,-58.1,18.6,-50.7,25.5,-43Z",transform:"translate(80 90)"})),n.a.createElement("div",{className:"About"},n.a.createElement(u,{image:h.a,name:"Isabel \u73a5 Li"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"Experiences"},n.a.createElement("h1",null,"Experiences"),t.map((function(e){return n.a.createElement(E,{key:e.id,info:e.fields})}))),n.a.createElement("div",{className:"Projects"},n.a.createElement("h1",null,"Work"),i.map((function(e){return n.a.createElement(p,{key:e.id,info:e.fields})})))),n.a.createElement("svg",{className:"path1",viewBox:"-80 -25 200 200"},n.a.createElement("path",{fill:"none",stroke:"#D31C13","stroke-width":"0.15",d:"M41.8,-67.1C50,-59.8,49.6,-41.1,52.5,-26.4C55.4,-11.7,61.6,-1,62.3,10.4C62.9,21.8,57.9,33.8,49.9,43.5C41.9,53.2,30.9,60.6,19,63.8C7,67,-6,66,-13,57.8C-20,49.6,-20.9,34.2,-25.6,24.5C-30.4,14.9,-39.1,10.9,-47.4,2.3C-55.7,-6.3,-63.6,-19.5,-61.8,-30.2C-60,-41,-48.5,-49.3,-36.6,-54.9C-24.7,-60.6,-12.3,-63.6,2.2,-67C16.8,-70.5,33.6,-74.5,41.8,-67.1Z",transform:"translate(100 100)"})),n.a.createElement("svg",{className:"path2",viewBox:"50 -10 200 200"},n.a.createElement("path",{fill:"none",stroke:"#05738C","stroke-width":"0.15",d:"M31,-55.6C37.7,-49.9,38.9,-36.5,36.5,-26C34.1,-15.4,28.2,-7.7,28.9,0.5C29.7,8.6,37.3,17.3,39.7,27.8C42.1,38.4,39.4,50.9,31.9,53.8C24.4,56.6,12.2,49.8,2.4,45.6C-7.3,41.3,-14.7,39.7,-25.2,38.6C-35.8,37.6,-49.6,37.1,-50.8,30.7C-52,24.4,-40.7,12.2,-31.7,5.2C-22.6,-1.8,-15.9,-3.6,-12.6,-6.3C-9.3,-9,-9.4,-12.7,-7.8,-21.3C-6.3,-30,-3.1,-43.7,4.5,-51.5C12.2,-59.3,24.3,-61.3,31,-55.6Z",transform:"translate(100 100) rotate(-20  10 0)"}))):n.a.createElement("div",null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){},8:function(e,a,t){}},[[23,1,2]]]);
//# sourceMappingURL=main.68cacc33.chunk.js.map