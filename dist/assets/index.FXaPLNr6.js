(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const c=`<div class="row">\r
    <div class="col-sm-12 align-self-center p-3 mb-2">\r
        QR Code\r
    </div>\r
    <div class="col-sm-12 align-self-center p-3 mb-2">\r
        <ul class="nav nav-pills justify-content-center">\r
            {navigation}\r
        </ul>\r
    </div>\r
    <div class="col-sm-12 align-self-center p-3 mb-2">\r
        Content\r
    </div>\r
</div>`,l=`<li class="nav-item">\r
    <a class="nav-link active" aria-current="page" href="#">Active</a>\r
</li>`;class a{render(){return c.replace("{navigation}",l)}}document.addEventListener("DOMContentLoaded",()=>{const t=new a,r=document.querySelector("#app");r.innerHTML=t.render()});
