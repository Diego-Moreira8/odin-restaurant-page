(()=>{"use strict";var e={917:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n    display: block;\r\n}\r\nbody {\r\n    line-height: 1;\r\n}\r\nol, ul {\r\n    list-style: none;\r\n}\r\nblockquote, q {\r\n    quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}",""]);const s=a},426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),c=t.n(s),l=new URL(t(750),t.b),u=new URL(t(417),t.b),d=a()(o()),p=c()(l),m=c()(u);d.push([e.id,'@font-face {\r\n  font-family: "Lobster";\r\n  src: url('+p+");\r\n}\r\n\r\n:root {\r\n  font-family: sans-serif;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  overflow-y: scroll;\r\n  background: url("+m+');\r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 100vh;\r\n}\r\n\r\nheader {\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n  backdrop-filter: blur(4px);\r\n  color: black;\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 8px;\r\n  align-items: center;\r\n  padding-top: 16px;\r\n  padding-bottom: 4px;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n  color: green;\r\n  font-family: "Lobster";\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  gap: 16px;\r\n}\r\n\r\nheader button {\r\n  border: none;\r\n  padding: 4px 16px;\r\n  font-size: 1.25rem;\r\n  background-color: transparent;\r\n  color: black;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\nheader button.active {\r\n  box-shadow: 0px -2px 0px 0px rgba(255, 0, 0, 1) inset;\r\n}\r\n\r\nsection {\r\n  margin: 32px auto;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  backdrop-filter: blur(4px);\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 64px;\r\n  width: 1200px;\r\n  max-width: 90vw;\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin-bottom: 16px;\r\n}\r\n\r\np {\r\n  font-size: 1.125rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n#menu {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 16px;\r\n}\r\n\r\n.menu-item {\r\n  display: grid;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 16px;\r\n  padding: 24px;\r\n  border-radius: 12px;\r\n  background-color: white;\r\n}\r\n\r\n.item-title {\r\n  font-size: 1.25rem;\r\n  font-weight: bold;\r\n}\r\n.item-price {\r\n  font-size: 1.25rem;\r\n  font-weight: bold;\r\n  text-align: right;\r\n}\r\n.item-ingredient {\r\n  color: gray;\r\n  grid-column: 1 / -1;\r\n}\r\n\r\nfooter {\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n  backdrop-filter: blur(4px);\r\n  color: white;\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 8px;\r\n  align-items: center;\r\n  padding: 16px;\r\n}\r\n',""]);const f=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},750:(e,n,t)=>{e.exports=t.p+"03c38496322925fec242.ttf"},417:(e,n,t)=>{e.exports=t.p+"624f11fe0be809f50235.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(){const e=document.createElement("section"),n=document.createElement("h2");n.textContent="Página inicial";const t=document.createElement("p");return t.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos\n    repellat vero eveniet reiciendis a eos nostrum harum consequatur, enim\n    blanditiis quos quisquam nisi ipsa corporis molestiae animi cumque\n    impedit illo quaerat vitae labore nihil! Tenetur accusamus amet dolores\n    sequi illum repellendus, at deserunt placeat fuga mollitia, velit esse\n    minus eos!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos\n    repellat vero eveniet reiciendis a eos nostrum harum consequatur, enim\n    blanditiis quos quisquam nisi ipsa corporis molestiae animi cumque\n    impedit illo quaerat vitae labore nihil! Tenetur accusamus amet dolores\n    sequi illum repellendus, at deserunt placeat fuga mollitia, velit esse\n    minus eos!",e.appendChild(n),e.appendChild(t),e}var n=t(379),r=t.n(n),o=t(795),i=t.n(o),a=t(569),s=t.n(a),c=t(565),l=t.n(c),u=t(216),d=t.n(u),p=t(589),m=t.n(p),f=t(917),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d(),r()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;var h=t(426),g={};function v(n){x.innerHTML="";const t=n.target.id;"home-button"===t?(x.appendChild(e()),y.classList.add("active"),w.classList.remove("active"),C.classList.remove("active")):"menu-button"===t?(x.appendChild(function(){const e=document.createElement("section");e.id="menu",document.createElement("h2").textContent="Cardápio";class n{constructor(e,n){this.title=e,this.ingredientsArray="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, iusto.",this.price=n}}const t=[new n("À Moda",60),new n("Calabresa",55),new n("Pepperoni",55),new n("Frango com Catupiry",50),new n("Portuguesa",50),new n("Estrogonofe de Frango",50),new n("Peito de Peru",50),new n("Marguerita",50),new n("Corn e Bacon",50),new n("Doritos",70),new n("Chocolate",40),new n("Romeu e Julieta",40)];for(let n of t)e.innerHTML+=`<div class="menu-item">\n        <div class="item-title">${n.title}</div>\n        <div class="item-price">R$ \n        ${String(n.price.toFixed(2)).replace(".",",")}\n        </div>\n        <div class="item-ingredient">${n.ingredientsArray}</div>\n      </div>`;return e}()),y.classList.remove("active"),w.classList.add("active"),C.classList.remove("active")):"about-button"===t&&(x.appendChild(function(){const e=document.createElement("section"),n=document.createElement("h2");n.textContent="Sobre nós";const t=document.createElement("p");return t.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos\n    repellat vero eveniet reiciendis a eos nostrum harum consequatur, enim\n    blanditiis quos quisquam nisi ipsa corporis molestiae animi cumque\n    impedit illo quaerat vitae labore nihil! Tenetur accusamus amet dolores\n    sequi illum repellendus, at deserunt placeat fuga mollitia, velit esse\n    minus eos!",e.appendChild(n),e.appendChild(t),e}()),y.classList.remove("active"),w.classList.remove("active"),C.classList.add("active"))}g.styleTagTransform=m(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals,document.querySelector("#header").appendChild(function(){const e=document.createElement("header"),n=document.createElement("h1");n.textContent="Pizzaria Nostra Casa";const t=document.createElement("nav"),r=document.createElement("button");r.textContent="Home",r.classList.add("nav-button"),r.id="home-button";const o=document.createElement("button");o.textContent="Cardápio",o.classList.add("nav-button"),o.id="menu-button";const i=document.createElement("button");return i.textContent="Sobre nós",i.classList.add("nav-button"),i.id="about-button",t.appendChild(r),t.appendChild(o),t.appendChild(i),e.appendChild(n),e.appendChild(t),e}()),document.querySelector("#footer").appendChild(function(){const e=document.createElement("footer");return e.textContent="Texto de exemplo",e}());const x=document.querySelector("#content");x.appendChild(e());const y=document.querySelector("#home-button"),w=document.querySelector("#menu-button"),C=document.querySelector("#about-button");y.addEventListener("click",v),w.addEventListener("click",v),C.addEventListener("click",v),y.classList.add("active")})()})();