
  // Position the overflow menu safely inside the picture column on iPad.
  (()=>{
    const menu=document.getElementById('moreTools');
    const panel=menu.querySelector('.moreToolsPanel');
    const reposition=()=>{
      const viewer=document.getElementById('viewer');
      if(!viewer)return;
      const rect=viewer.getBoundingClientRect();
      const available=Math.max(180,window.innerWidth-24);
      const desired=Math.min(340,available);
      panel.style.width=desired+'px';
      panel.style.left=Math.max(8,Math.min(rect.left+12,window.innerWidth-desired-8))+'px';
      panel.style.top=Math.max(8,Math.min(rect.top+12,window.innerHeight-180))+'px';
      panel.style.maxHeight=Math.max(160,window.innerHeight-Math.max(8,rect.top+12)-12)+'px';
    };
    menu.addEventListener('toggle',()=>{if(menu.open)reposition();});
    window.addEventListener('resize',()=>{if(menu.open)reposition();});
    menu.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{menu.open=false;}));
    document.addEventListener('pointerdown',event=>{if(menu.open&&!menu.contains(event.target))menu.open=false;});
  })();
  