import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d=document.querySelector(".form"),l=document.querySelector(".gallery"),p=document.querySelector(".loader");d.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.input.value;y(),f(t).then(r=>{l.innerHTML="",h(r)}).then(()=>{a(),o.target.reset(),g.refresh()}).catch(()=>{a()})});function f(o){if(o.trim()==="")return Promise.reject(new Error("Field cannot be empty.")).catch(n=>{a(),c.error({title:"Error",message:"Field cannot be empty.",position:"topRight"})});const t={key:"42358755-2f91a8a1ff3edf8f2432f22e1",q:`${o.trim()}`.split(" ").map(n=>n.toLowerCase().trim()).join("+"),image_type:"photo",orientation:"horizontal",safesearch:!0},r=`https://pixabay.com/api/?key=${t.key}&q=${t.q}&image_type=${t.image_type}&orientation=${t.orientation}&safesearch=${t.safesearch}`;return fetch(r).then(n=>n.json()).then(n=>{if(n.totalHits===0)throw new Error;return n.hits}).catch(()=>{c.error({title:"Error",message:"No search results found. Please try again!",position:"topRight"})})}function m(o){return o.map(r=>`<li class="gallery-item">
 <a href="${r.largeImageURL}"> <img
    class="galery-img"
    src="${r.webformatURL}"
    alt="${r.tags}"
    
    width="360"
    height="200px"/>
    </a>
  <div class="description">
    <p class="description-item">
      Likes<span>${r.likes}</span>
    </p>
    <p class="description-item">
      Views<span>${r.views}</span>
    </p>
    <p class="description-item">
      Comments<span>${r.comments}</span>
    </p>
    <p class="description-item">
      Downloads<span>${r.downloads}</span>
    </p>
  </div>
</li>`).join("")}function h(o){const t=m(o);l.innerHTML=t}function a(){p.classList.add("is-hidden")}function y(){p.classList.remove("is-hidden")}var g=new u(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
