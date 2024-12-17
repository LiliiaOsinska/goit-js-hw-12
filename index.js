import{S as b,a as v,i}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const q=new b(".gallery-item a",{captions:!0,captionDelay:250,captionsData:"alt"});function f(o){const t=o.map(({webformatURL:s,largeImageURL:l,tags:e,likes:r,views:a,comments:h,downloads:L})=>`
    <li class="gallery-item">
      <a href="${l}" class="gallery-link">
        <img  class="gallery-image" 
        src="${s}" 
        alt="${e} 
        "width="360"
        height="200"/>
        <div class="info">
          <p class= "info-title"> Likes: ${r}</p>
          <p class= "info-title">Views: ${a}</p>
          <p class= "info-title">Comments: ${h}</p>
          <p class= "info-title">Downloads: ${L}</p>
        </div>
      </a>
    </li>
    `).join("");g.insertAdjacentHTML("beforeend",t),q.refresh()}const w="47491197-d7346e1a6b6c8bc0fb7fb6a4d",P="https://pixabay.com/api/";async function p(o,t){try{return(await v.get(P,{params:{key:w,q:o,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(s){console.error("Error not found images: ",s)}}const m=document.querySelector(".gallery-form"),g=document.querySelector(".gallery"),d=document.querySelector(".load-more"),u=document.querySelector(".loader");let n=1,y=0,c="";m.addEventListener("submit",S);d.addEventListener("click",M);async function S(o){if(o.preventDefault(),c=o.currentTarget.elements.query.value.trim(),!c){i.error({message:"Please enter a correct query"});return}d.classList.add("hidden"),g.innerHTML="",u.classList.remove("hidden"),n=1;try{const t=await p(c,n);if(t.hits.length===0)return i.error({title:"",backgroundColor:"red",messageColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});f(t.hits),m.reset(),t.totalHits>15&&(d.classList.remove("hidden"),y=Math.ceil(t.totalHits/15))}catch(t){i.error({backgroundColor:"red",position:"topRight",message:t.message})}finally{u.classList.add("hidden")}}async function M(){n+=1,u.classList.remove("hidden");try{const o=await p(c,n);f(o.hits),n===y&&(d.classList.add("hidden"),i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(o){i.error({backgroundColor:"red",position:"topRight",message:o.message})}finally{u.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
