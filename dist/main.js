(()=>{"use strict";const e=document.getElementById("content_body");e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("img"),n=document.createElement("p");return n.textContent="Lovely food here.",e.id="start",t.src="../images/beautiful.png",e.appendChild(t),e.appendChild(n),e})()),document.querySelector("#menu_button").addEventListener("click",(()=>{e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("p");return t.textContent="$2: Hot dog; $1: Noodle; $3: Pizza; $3: Double double",e.id="menu",e.appendChild(t),e})())})),document.querySelector("#about_button").addEventListener("click",(()=>{e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("img"),n=document.createElement("p");return n.textContent="established 3 days ago. proficient in selling meat and noodles",e.id="about",t.src="../images/human.jpg",e.appendChild(t),e.appendChild(n),e})())})),document.querySelector("#contact_button").addEventListener("click",(()=>{e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("p");return t.textContent="(123) 456-7891 email@gmail.com",e.id="contact",e.appendChild(t),e})())}))})();