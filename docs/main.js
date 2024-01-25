(()=>{"use strict";var e={99:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),i=n.n(o),a=n(645),r=n.n(a)()(i());r.push([e.id,'*{margin:0;padding:0}.material-symbols-outlined{font-variation-settings:"FILL" 1,"wght" 700,"GRAD" 200,"opsz" 48}h1,h2,h3,h4,h5,h6{text-align:center;margin:1rem}p{line-height:1.5;text-align:justify;margin-bottom:.5rem}button{font-family:inherit;font-size:1rem;font-weight:bold;padding:.25rem .75rem;cursor:pointer;border:none;border-radius:.5rem;background-color:rgba(0,0,0,0)}button:hover,button:focus{background-color:rgba(0,0,0,.0941176471)}li{list-style-type:none}body{font-family:"Century Gothic",sans-serif;min-height:100dvh;display:flex;flex-flow:column;justify-content:space-between}body div header{max-width:900px;margin:0 auto;display:flex;gap:.5rem;flex-flow:column;align-items:center;justify-content:center;padding:.5rem 1rem}@media(min-width: 900px){body div header{margin-top:1rem;flex-flow:row;justify-content:space-between}}body div header .brand{font-size:2.5rem;font-weight:bold}body div header nav ul{display:flex;gap:4px}body div header nav ul li button.active{background-color:red;color:#fff}body div #content{padding:2rem;max-width:900px;margin:0 auto}body div #content #menu-content ul li{margin-bottom:2rem}body div #content #menu-content ul li .wrap{display:grid;grid-template-columns:auto 1fr auto;gap:.25rem}body div #content #menu-content ul li .wrap .name,body div #content #menu-content ul li .wrap .price{font-weight:bold}body div #content #menu-content ul li .wrap .dots{border-bottom:2px dotted #000;height:.9rem}body div #content #menu-content ul li .description{font-style:italic}body div #content #about-content .call-us{text-align:center}body div #content #about-content .wrap{display:flex;align-items:center;justify-content:center;gap:.5rem}body div #content #about-content .map{width:fit-content;margin:1rem auto}body div #content #about-content .map iframe{border-radius:.5rem;width:300px;height:400px}@media(min-width: 700px){body div #content #about-content .map iframe{width:500px}}@media(min-width: 900px){body div #content #about-content .map iframe{width:700px}}body footer{text-align:center;padding:.5rem 1rem}body footer a{font-weight:bold;color:red}',""]);const d=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(r[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&r[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},r=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],u=a[s]||0,m="".concat(s," ").concat(u);a[s]=u+1;var l=n(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(p);else{var f=i(p,o);o.byIndex=d,t.splice(d,0,{identifier:m,updater:f,references:1})}r.push(m)}return r}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=o(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var d=n(a[r]);t[d].references--}for(var c=o(e,i),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=(e,t)=>{const n=document.createElement(`h${e}`);return n.textContent=t,n},t=()=>{const t=document.createElement("main"),n=document.createElement("p");return n.textContent="\n    Olá! Este site é um projeto proposto pelo site The Odin Project para prática\n    de Webpack. Espero que goste do que fiz, e não deixe de conferir o meu \n    portfólio com este e outros projetos! Agora vou deixar um lorem ipsum!\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur \n    exercitationem veritatis, unde officia maiores, quibusdam ut delectus a \n    dicta rem corrupti sunt officiis, tempora illum. Ipsam voluptatem, quis \n    expedita fuga repudiandae sed vitae, omnis quidem odio iusto qui nihil \n    inventore consequuntur natus molestiae fugiat eos deserunt cumque ea quia, \n    ipsum molestias dicta culpa quas. Ipsa doloribus aut totam ducimus. Maxime \n    temporibus aut architecto et quia explicabo optio tempora repudiandae \n    adipisci. Illum maiores porro obcaecati neque consequatur aut ab molestiae \n    facilis labore in! Inventore debitis est possimus impedit fugiat magnam \n    reiciendis assumenda iste tempore? Cupiditate commodi reprehenderit dicta \n    praesentium voluptates?\n  ",t.appendChild(e(1,"Bem-vindo!")),t.appendChild(n),t},o=()=>{const t=document.createElement("main"),n=document.createElement("ul"),o="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptate! Facere maxime eveniet totam sapiente, minus aperiam dolorum beatae quis veniam voluptatem officiis labore soluta commodi, officia maiores! Rerum, consectetur.",i=[{name:"Café",description:o,price:3.99},{name:"Brunch",description:o,price:9.99},{name:"Almoço",description:o,price:19.99},{name:"Lanche da tarde",description:o,price:9.99},{name:"Jantar",description:o,price:29.99},{name:"Sobremesa",description:o,price:19.99},{name:"Sobremesa+",description:o,price:119.99}];for(let e of i){const t=document.createElement("li"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),r=document.createElement("p"),d=document.createElement("div");o.classList.add("wrap"),i.classList.add("dots"),a.classList.add("name"),r.classList.add("description"),d.classList.add("price"),a.textContent=e.name,r.textContent=e.description,d.textContent=`R$ ${e.price}`,o.appendChild(a),o.appendChild(i),o.appendChild(d),t.appendChild(o),t.appendChild(r),n.appendChild(t)}return t.id="menu-content",t.appendChild(e(1,"Cardápio")),t.appendChild(n),t},i=()=>{const t=document.createElement("main"),n=document.createElement("p"),o=document.createElement("p"),i=document.createElement("div"),a=document.createElement("span");return n.textContent="\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur \n    exercitationem veritatis, unde officia maiores, quibusdam ut delectus a \n    dicta rem corrupti sunt officiis, tempora illum. Ipsam voluptatem, quis \n    expedita fuga repudiandae sed vitae, omnis quidem odio iusto qui nihil \n    inventore consequuntur natus molestiae fugiat eos deserunt cumque ea quia, \n    ipsum molestias dicta culpa quas. Ipsa doloribus aut totam ducimus. Maxime \n    temporibus aut architecto et quia explicabo optio tempora repudiandae \n    adipisci. Illum maiores porro obcaecati neque consequatur aut ab molestiae \n    facilis labore in! Inventore debitis est possimus impedit fugiat magnam \n    reiciendis assumenda iste tempore? Cupiditate commodi reprehenderit dicta \n    praesentium voluptates?\n  ",o.textContent="Ligue para gente!",a.textContent="(98) 7654-3210",o.classList.add("call-us"),i.classList.add("wrap"),t.id="about-content",i.appendChild((e=>{const t=document.createElement("span");return t.classList.add("material-symbols-outlined"),t.textContent=e,t})("call")),i.appendChild(a),t.appendChild(e(1,"Sobre nós")),t.appendChild(n),t.appendChild(e(2,"Contato")),t.appendChild(o),t.appendChild(i),t.appendChild((()=>{const e=document.createElement("div");return e.classList.add("map"),e.innerHTML='\n    <iframe\n      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31798720.90197247!2d-73.162779560763!3d-13.370175563633527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1706206264852!5m2!1spt-BR!2sbr"\n      style="border: 0"\n      allowfullscreen=""\n      loading="lazy"\n      referrerpolicy="no-referrer-when-downgrade"\n    ></iframe>\n  ',e})()),t};var a=n(379),r=n.n(a),d=n(795),c=n.n(d),s=n(569),u=n.n(s),m=n(565),l=n.n(m),p=n(216),f=n.n(p),h=n(589),b=n.n(h),v=n(99),g={};g.styleTagTransform=b(),g.setAttributes=l(),g.insert=u().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=f(),r()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const y=[document.querySelector("#home"),document.querySelector("#menu"),document.querySelector("#about")],x=document.querySelector("#content"),w=e=>{let n;switch(e){case"home":n=t;break;case"menu":n=o;break;case"about":n=i;break;default:return void console.error(`"${e}" isn't a valid page`)}x.innerHTML="",x.appendChild(n()),document.querySelectorAll("nav button").forEach((t=>t.classList[t.id===e?"add":"remove"]("active")))};window.onload=w("home"),y.forEach((e=>e.addEventListener("click",(e=>w(e.target.id)))))})()})();