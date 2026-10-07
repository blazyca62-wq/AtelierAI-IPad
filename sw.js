const VERSION='2.42';
const PREFIX='atelierai-offline-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+VERSION;
const FILES=['app.html','index.html','START.html','manifest.webmanifest','icon-192.png','icon-512.png'];
const urlFor=p=>new URL(p,self.registration.scope).href;
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    // Fetch all assets first; a failed/partial deployment must not replace the working copy.
    const entries=await Promise.all(FILES.map(async file=>{
      const response=await fetch(urlFor(file),{cache:'reload'});
      if(!response.ok)throw new Error('Missing offline asset: '+file);
      if(file==='app.html' && !(await response.clone().text()).includes('<title>AtelierAI iPad '+VERSION+'</title>'))throw new Error('App version mismatch');
      return [urlFor(file),response];
    }));
    const cache=await caches.open(CACHE);
    await Promise.all(entries.map(([url,response])=>cache.put(url,response)));
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url),base=new URL(self.registration.scope);
  if(event.request.method!=='GET'||url.origin!==base.origin||!url.pathname.startsWith(base.pathname))return;
  const file=url.pathname.slice(base.pathname.length)||'index.html';
  if(!FILES.includes(file))return;
  event.respondWith((async()=>{
    const cached=await (await caches.open(CACHE)).match(urlFor(file));
    return cached||fetch(event.request);
  })());
});
self.addEventListener('message',event=>{
  if(event.data?.type==='ACTIVATE_UPDATE')event.waitUntil(self.skipWaiting());
  if(event.data?.type==='OFFLINE_STATUS')event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    const complete=(await Promise.all(FILES.map(file=>cache.match(urlFor(file))))).every(Boolean);
    event.ports[0]?.postMessage({ready:complete,version:VERSION});
  })());
});
