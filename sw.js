if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),f={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DC3K8PTM.js",revision:null},{url:"assets/index-DuitT-h7.css",revision:null},{url:"index.html",revision:"5f8df038235a38905bfe3142e05f7b6f"},{url:"registerSW.js",revision:"5f081f2da882f5e44f5272984db4d416"},{url:"logo.png",revision:"81cb75a1fb9a9353c8f406242dd6c00c"},{url:"manifest.webmanifest",revision:"3b8637713ec63be90a3c04960e412aac"}],{}),e.cleanupOutdatedCaches()}));
