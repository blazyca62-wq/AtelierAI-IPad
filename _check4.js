
(()=>{
  const badge=document.getElementById('offlineInfo'), update=document.getElementById('offlineUpdate');
  let registration,ready=false;
  const label=()=>{badge.textContent=ready ? (navigator.onLine?'✓ Offline bereit':'✓ Offline aktiv') : 'Offline: noch nicht bereit';};
  async function check(){
    const worker=navigator.serviceWorker.controller;
    if(!worker){ready=false;label();return;}
    const channel=new MessageChannel();
    const timer=setTimeout(()=>{channel.port1.close();ready=false;label();},5000);
    channel.port1.onmessage=e=>{clearTimeout(timer);channel.port1.close();ready=e.data.ready===true;label();};
    worker.postMessage({type:'OFFLINE_STATUS'},[channel.port2]);
  }
  badge.addEventListener('click',async()=>{
    try{await navigator.storage?.persist?.();}catch(e){}
    alert('AtelierAI offline auf dem iPad\n\n1. In Safari: Teilen → Zum Home-Bildschirm (als Web-App öffnen).\n2. Vom neuen Symbol einmal mit Internet öffnen.\n3. Warten, bis „Offline bereit“ erscheint.\n4. Im Flugmodus die App schließen und vom Symbol erneut öffnen.\n\nFotos bitte auf dem iPad herunterladen. Das aktuell geöffnete Foto und der Arbeitsstand werden nicht automatisch gespeichert; nutze „Ansicht speichern“.\n\nBeim Löschen der Website-Daten oder der App kann die Offlinekopie verloren gehen. Bewahre die ZIP-Sicherung auf.');
    if(registration){try{await registration.update();}catch(e){}await check();}
  });
  update.addEventListener('click',()=>{
    if(registration?.waiting && confirm('Neue Version laden? Bitte vorher die aktuelle Ansicht speichern; das geöffnete Foto und die Auswahl werden zurückgesetzt.')){
      navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload(),{once:true});
      registration.waiting.postMessage({type:'ACTIVATE_UPDATE'});
    }
  });
  window.addEventListener('online',label);window.addEventListener('offline',label);
  if(!('serviceWorker' in navigator)||!window.isSecureContext){badge.textContent='Offline: über Safari-Webadresse einrichten';return;}
  navigator.serviceWorker.addEventListener('controllerchange',check);
  navigator.serviceWorker.register('./sw.js',{scope:'./',updateViaCache:'none'}).then(async reg=>{
    registration=reg;
    const waiting=()=>{update.hidden=!reg.waiting;};waiting();
    reg.addEventListener('updatefound',()=>{const worker=reg.installing;worker?.addEventListener('statechange',()=>{waiting();if(worker.state==='activated')check();});});
    await navigator.serviceWorker.ready;await check();
    try{await navigator.storage?.persist?.();}catch(e){}
  }).catch(()=>{badge.textContent='Offline-Speicherung fehlgeschlagen · antippen';});
})();
