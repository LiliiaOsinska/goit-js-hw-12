import{S as b,a as v,i as n}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const q=new b(".gallery-item a",{captions:!0,captionDelay:250,captionsData:"alt"});function f(o){const t=o.map(({webformatURL:a,largeImageURL:c,tags:e,likes:r,views:i,comments:y,downloads:L})=>`
    <li class="gallery-item">
      <a href="${c}" class="gallery-link">
        <img  class="gallery-image" 
        src="${a}" 
        alt="${e} 
        "width="360"
        height="200"/>
        <div class="info">
          <p class= "info-title"> Likes: ${r}</p>
          <p class= "info-title">Views: ${i}</p>
          <p class= "info-title">Comments: ${y}</p>
          <p class= "info-title">Downloads: ${L}</p>
        </div>
      </a>
    </li>
    `).join("");p.insertAdjacentHTML("beforeend",t),q.refresh()}const w="47491197-d7346e1a6b6c8bc0fb7fb6a4d",P="https://pixabay.com/api/";async function m(o,t){try{return(await v.get(P,{params:{key:w,q:o,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(a){console.error("Error not found images: ",a)}}const g=document.querySelector(".gallery-form"),p=document.querySelector(".gallery"),s=document.querySelector(".load-more"),u=document.querySelector(".loader");let l=1,h=0,d="";g.addEventListener("submit",S);s.addEventListener("click",C);async function S(o){if(o.preventDefault(),d=o.currentTarget.elements.query.value.trim(),!d){n.error({message:"Please enter a correct query"});return}s.classList.add("hidden"),p.innerHTML="",u.classList.remove("hidden"),l=1;try{const t=await m(d,l);if(t.hits.length===0)return n.error({title:"",backgroundColor:"red",messageColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});f(t.hits),g.reset(),t.totalHits>15&&(s.classList.remove("hidden"),h=Math.ceil(t.totalHits/15))}catch(t){n.error({backgroundColor:"red",position:"topRight",message:t.message})}finally{u.classList.add("hidden")}}async function C(){l+=1,s.disabled=!0,u.classList.remove("hidden");try{const o=await m(d,l);f(o.hits),l===h?(s.classList.add("hidden"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):s.classList.remove("hidden");const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({left:0,top:t*2,behavior:"smooth"})}catch(o){n.error({backgroundColor:"red",position:"topRight",message:o.message})}finally{s.disabled=!1,u.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
