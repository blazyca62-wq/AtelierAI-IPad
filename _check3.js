
  // 3.76 — separater Gestaltungs-Arbeitsplatz, greift nur lesend auf sourceCanvas zu.
  (()=>{
    const by=id=>document.getElementById(id), overlay=by('artStudio'),cv=by('artCanvas'),ctx=cv.getContext('2d',{willReadFrequently:true});
    // 3.75: eigene Transform-Ansicht, die Bilddaten/Export unberührt lässt.
    const stage=cv.parentElement;
    let zoom=1,panX=0,panY=0;const active=new Map();let gesture=null;
    const zoomLabel=by('artZoomLabel');
    function showView(){cv.style.transform=`translate(${panX}px,${panY}px) scale(${zoom})`;zoomLabel.textContent=Math.round(zoom*100)+' %';}
    function fitView(){zoom=1;panX=0;panY=0;active.clear();gesture=null;showView();}
    function setZoom(next){next=Math.max(1,Math.min(12,next));zoom=next;if(zoom===1){panX=0;panY=0;}showView();}
    function mid(a,b){return {x:(a.x+b.x)/2,y:(a.y+b.y)/2};}
    function dist(a,b){return Math.hypot(a.x-b.x,a.y-b.y);}
    stage.addEventListener('pointerdown',e=>{
      if(overlay.style.display==='none')return;
      e.preventDefault();stage.setPointerCapture(e.pointerId);
      active.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(active.size===1){gesture={kind:'pan',x:e.clientX,y:e.clientY,px:panX,py:panY};}
      else if(active.size>=2){const [a,b]=[...active.values()];gesture={kind:'pinch',distance:Math.max(1,dist(a,b)),zoom,center:mid(a,b),px:panX,py:panY};}
    });
    stage.addEventListener('pointermove',e=>{
      if(!active.has(e.pointerId))return;e.preventDefault();active.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(active.size>=2){const [a,b]=[...active.values()];if(!gesture||gesture.kind!=='pinch'){gesture={kind:'pinch',distance:Math.max(1,dist(a,b)),zoom,center:mid(a,b),px:panX,py:panY};}
        const c=mid(a,b),newZoom=Math.max(1,Math.min(12,gesture.zoom*dist(a,b)/gesture.distance)),ratio=newZoom/gesture.zoom;
        const rect=stage.getBoundingClientRect(),ox=gesture.center.x-rect.left-rect.width/2,oy=gesture.center.y-rect.top-rect.height/2;
        zoom=newZoom;panX=gesture.px+(c.x-gesture.center.x)+(1-ratio)*(ox-gesture.px);panY=gesture.py+(c.y-gesture.center.y)+(1-ratio)*(oy-gesture.py);showView();
      }else if(gesture?.kind==='pan'){panX=gesture.px+e.clientX-gesture.x;panY=gesture.py+e.clientY-gesture.y;showView();}
    });
    function endPointer(e){if(!active.has(e.pointerId))return;active.delete(e.pointerId);if(active.size===1){const a=[...active.values()][0];gesture={kind:'pan',x:a.x,y:a.y,px:panX,py:panY};}else gesture=null;}
    ['pointerup','pointercancel','lostpointercapture'].forEach(t=>stage.addEventListener(t,endPointer));
    by('artZoomIn').addEventListener('click',()=>setZoom(zoom*1.5));
    by('artZoomOut').addEventListener('click',()=>setZoom(zoom/1.5));
    by('artZoomFit').addEventListener('click',fitView);
    stage.addEventListener('wheel',e=>{if(!e.ctrlKey)return;e.preventDefault();setZoom(zoom*(e.deltaY<0?1.2:1/1.2));},{passive:false});
    const effects=[
      ['edge','Kantensteuerung','Ruhigere Flächen, klare wichtige Konturen'],
      ['tonal','Tonalismus','Farben beruhigen, Licht und Schatten erhalten'],
      ['shift','Künstlerische Farbverschiebung','Lichter wärmer, Schatten kühler – ohne Farbstich'],
      ['broken','Gebrochene Farben','Sanfte Nachbarfarben innerhalb ähnlicher Bildflächen'],
      ['light','Dramatische Lichtführung','Lichter betonen, Schatten vertiefen – ohne festen Lichtfleck'],
      ['depth','Atmosphärische Perspektive','Ferne weicher, heller, etwas kühler'],
      ['bright','Helligkeit','Gesamtes Bild heller oder dunkler'],
      ['sat','Sättigung','Farben kräftiger oder gedämpfter'],
      ['temp','Warm / Kalt','Gesamte Farbtemperatur wärmer oder kühler'],
      ['focus','Motiv hervorheben','Bildmitte betonen, Umgebung ruhig und zurückhaltend'],
      ['sun','Gerichtete Lichtstimmung','Weiches Licht aus der gewählten Richtung'],
      ['contrast','Farbkontraste','Gegensätzliche Farbnuancen und Farbtrennung verstärken'],
      ['shadow','Schattenfarben','Schatten wärmer oder kühler färben']
    ];
    const sliders=by('artSliders');
    sliders.innerHTML=effects.map(([id,name,desc],i)=>{const signed=(['bright','sat','temp','shadow'].includes(id));return `<div style="padding:9px 0;border-bottom:1px solid #ddd"><label for="art_${id}" style="display:flex;justify-content:space-between;gap:8px;font-weight:650;font-size:14px"><span>${i+1}. ${name}</span><output id="art_${id}_val">0 %</output></label><div style="font-size:12px;color:#666">${desc}</div><input id="art_${id}" type="range" min="${signed?-100:0}" max="100" step="5" value="0" style="width:100%;min-height:36px"></div>`;}).join('');
    const directionBox=document.createElement('div');
    directionBox.style.cssText='padding:10px;background:#f5f5f5;color:#202020;border-radius:9px;margin:8px 0';
    directionBox.innerHTML='<label for="artSunDirection" style="display:block;font-weight:650;margin-bottom:5px">Lichtrichtung</label><select id="artSunDirection" style="width:100%;min-height:42px;background:white;color:#202020"><option value="left">Von links</option><option value="right">Von rechts</option><option value="top" selected>Von oben</option><option value="bottom">Von unten</option><option value="topleft">Links oben</option><option value="topright">Rechts oben</option></select><p style="font-size:12px;color:#555">Licht wird angenähert, keine echte 3D-Beleuchtung.</p>';
    sliders.append(directionBox);
    const focusBox=document.createElement('div');
    focusBox.style.cssText='padding:10px;background:#f5f5f5;color:#202020;border-radius:9px;margin:8px 0';
    focusBox.innerHTML='<div style="font-weight:650">Motiv-Schwerpunkt</div><label>Waagerecht <input id="artFocusX" type="range" min="0" max="100" value="50" style="width:100%"></label><label>Senkrecht <input id="artFocusY" type="range" min="0" max="100" value="50" style="width:100%"></label><p style="font-size:12px;color:#555">Die Umgebung wird zurückgenommen; der Schwerpunkt bleibt betont.</p>';
    sliders.append(focusBox);
    const artSunDirection=directionBox.querySelector('select'),artFocusX=focusBox.querySelector('#artFocusX'),artFocusY=focusBox.querySelector('#artFocusY');
    const presets=[
      ['Natürlich malerisch',{edge:32,tonal:18,shift:12,broken:24,light:12,depth:0,bright:2,sat:8,temp:4}],
      ['Stimmungsvolle Landschaft',{edge:25,tonal:20,shift:22,broken:26,light:22,depth:18,bright:4,sat:10,temp:8}],
      ['Licht & Schatten',{edge:12,tonal:12,shift:18,broken:10,light:38,depth:0,bright:-2,sat:6,temp:2}],
      ['Zurückhaltendes Porträt',{edge:18,tonal:18,shift:8,broken:8,light:12,depth:0,bright:3,sat:-4,temp:4}],
      ['Goldene Stunde',{edge:18,tonal:12,shift:30,broken:15,light:28,depth:10,bright:8,sat:10,temp:20}],
      ['Nebeliger Morgen',{edge:18,tonal:30,shift:8,broken:8,light:5,depth:36,bright:10,sat:-12,temp:-4}],
      ['Leuchtende Farben',{edge:12,tonal:5,shift:25,broken:30,light:18,depth:0,bright:5,sat:24,temp:8}],
      ['Ruhige Farbflächen',{edge:42,tonal:25,shift:5,broken:5,light:5,depth:5,bright:2,sat:-10,temp:0}],
      ['Dramatische Landschaft',{edge:28,tonal:22,shift:22,broken:18,light:42,depth:25,bright:-4,sat:14,temp:10}],
      ['Sanftes Pastell',{edge:25,tonal:40,shift:10,broken:8,light:8,depth:15,bright:12,sat:-18,temp:4}],
      ['Herbstliche Wärme',{edge:25,tonal:18,shift:36,broken:26,light:20,depth:8,bright:4,sat:12,temp:22}],
      ['Klare Formen',{edge:45,tonal:8,shift:2,broken:2,light:15,depth:0,bright:0,sat:0,temp:0}],
      ['Kühle Ferne',{edge:20,tonal:15,shift:10,broken:10,light:12,depth:34,bright:4,sat:-6,temp:-18}],
      ['Feine Farbschwingung',{edge:15,tonal:10,shift:15,broken:40,light:8,depth:0,bright:2,sat:6,temp:2}],
      ['Motiv im Mittelpunkt',{focus:40,edge:10,tonal:12,sat:4,light:12}],
      ['Seitliches Abendlicht',{sun:35,shift:18,light:18,temp:12,shadow:-12}],
      ['Farbspannung',{contrast:36,sat:12,broken:10,tonal:8}],
      ['Kühle Schatten · warmes Licht',{shadow:-40,shift:22,contrast:20,temp:7,light:15}],
      ['Goldene Schatten',{shadow:32,light:20,tonal:18,sat:8}],
      ['Theatralische Stimmung',{focus:35,sun:35,light:28,contrast:22,shadow:-26,bright:-4}]

    ];
    let resetSnapshot=null;
    const readArtValues=()=>({...Object.fromEntries(effects.map(([id])=>[id,+by('art_'+id).value])),sunDirection:artSunDirection.value,focusX:+artFocusX.value,focusY:+artFocusY.value});
    function formatArtValue(id,val){const v=+val||0;return (v>0&&(['bright','sat','temp','shadow'].includes(id))?'+':'')+v+' %';}
    function setArtValues(values){effects.forEach(([id])=>{const v=Object.prototype.hasOwnProperty.call(values,id)?values[id]:0;by('art_'+id).value=v;by('art_'+id+'_val').textContent=formatArtValue(id,v);});artSunDirection.value=values.sunDirection||'top';artFocusX.value=values.focusX??50;artFocusY.value=values.focusY??50;}
    function syncArtReset(){const b=by('artReset');b.textContent=resetSnapshot?'Alles zurücksetzen: AUS · wieder AN':'Alles zurücksetzen: AN · Effekte AUS';b.setAttribute('aria-pressed',String(!!resetSnapshot));b.style.background=resetSnapshot?'#f0d5a0':'#eee';b.style.color='#222';b.style.border='1px solid #777';}
    const presetBar=document.createElement('div');
    presetBar.style.cssText='display:flex;flex-wrap:wrap;gap:7px;margin:5px 0 16px;color:#202020';
    presetBar.innerHTML='<div style="width:100%;font-weight:700;font-size:14px;color:inherit">Gestaltungsrezepte (danach einzeln anpassen)</div>'+presets.map((p,i)=>'<button type="button" data-art-preset="'+i+'" style="padding:9px 11px;border:1px solid #9ca3af;border-radius:8px;background:#f6f6f6!important;color:#202020!important;-webkit-text-fill-color:#202020;font-weight:650;text-shadow:none">'+p[0]+'</button>').join('');
    sliders.prepend(presetBar);
    presetBar.addEventListener('click',e=>{const b=e.target.closest('[data-art-preset]');if(!b)return;resetSnapshot=null;syncArtReset();setArtValues(presets[+b.dataset.artPreset][1]);render();});
    syncArtReset();
    let base=null, originalW=0,originalH=0, timer=null,revision=0,previewOriginal=false, busy=false;
    const clamp=v=>Math.max(0,Math.min(255,v));
    // 3.80: Zweistufige Wirk-Kennlinie.
    // 0–50 % entspricht ungefähr der bisherigen gesamten Spanne,
    // 50–100 % steigert deutlich weiter bis zur klaren Verfremdung.
    function artAmount(raw){
      const v=Math.max(0,Math.min(100,+raw||0))/100;
      if(v<=0.5)return v*2;
      const extra=(v-0.5)/0.5;
      return 1+Math.pow(extra,1.18)*0.85;
    }
    function artAmountSigned(raw){
      const v=Math.max(-100,Math.min(100,+raw||0));
      if(v===0)return 0;
      const sign=v<0?-1:1,mag=Math.abs(v);
      return sign*artAmount(mag);
    }
    function workCanvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
    function pixels(c){return c.getContext('2d',{willReadFrequently:true}).getImageData(0,0,c.width,c.height);}
    function blurImage(im,w,h,r){if(r<=0)return im;let out=new Uint8ClampedArray(im.length),temp=new Float32Array(im.length),radius=Math.max(1,Math.round(r));
      for(let y=0;y<h;y++)for(let x=0;x<w;x++){let sums=[0,0,0],n=0;for(let k=-radius;k<=radius;k++){let xx=Math.min(w-1,Math.max(0,x+k)),idx=(y*w+xx)*4;for(let j=0;j<3;j++)sums[j]+=im[idx+j];n++;}let q=(y*w+x)*4;for(let j=0;j<3;j++)temp[q+j]=sums[j]/n;temp[q+3]=255;}
      for(let y=0;y<h;y++)for(let x=0;x<w;x++){let sums=[0,0,0],n=0;for(let k=-radius;k<=radius;k++){let yy=Math.min(h-1,Math.max(0,y+k)),idx=(yy*w+x)*4;for(let j=0;j<3;j++)sums[j]+=temp[idx+j];n++;}let q=(y*w+x)*4;for(let j=0;j<3;j++)out[q+j]=sums[j]/n;out[q+3]=255;}return out;}
    const mix=(a,b,t)=>a*(1-t)+b*t;
    // Bewahrt Formgrenzen: Farbliche Nachbarn zählen stärker als kontrastfremde Pixel.
    function guidedSmooth(src,w,h,r,threshold){
      const out=new Uint8ClampedArray(src.length),step=Math.max(1,Math.floor(r/3));
      for(let y=0;y<h;y++)for(let x=0;x<w;x++){
        const p=(y*w+x)*4,cr=src[p],cg=src[p+1],cb=src[p+2];let wr=0,rr=0,gg=0,bb=0;
        for(let dy=-r;dy<=r;dy+=step)for(let dx=-r;dx<=r;dx+=step){
          const xx=Math.max(0,Math.min(w-1,x+dx)),yy=Math.max(0,Math.min(h-1,y+dy)),q=(yy*w+xx)*4;
          const dr=src[q]-cr,dg=src[q+1]-cg,db=src[q+2]-cb;
          const difference=(dr*dr+dg*dg+db*db)/(3*threshold*threshold);
          const weight=Math.exp(-difference*2-(dx*dx+dy*dy)/(r*r*1.7));
          wr+=weight;rr+=src[q]*weight;gg+=src[q+1]*weight;bb+=src[q+2]*weight;
        }
        out[p]=rr/wr;out[p+1]=gg/wr;out[p+2]=bb/wr;out[p+3]=src[p+3];
      }return out;
    }
    function transform(data,w,h,id,t){
      const src=data.slice(),n=w*h;
      const radius=id==='edge'?Math.round(2+6*t):id==='depth'?Math.round(2+5*t):Math.round(3+7*t);
      const soft=(id==='edge'||id==='broken')?guidedSmooth(src,w,h,radius,id==='edge'?34:45):blurImage(src,w,h,radius);
      const big=(id==='light'||id==='tonal')?blurImage(src,w,h,Math.round(8+10*t)):soft;
      const lum=new Float32Array(n),near=new Float32Array(n),broad=new Float32Array(n);let sum=0;
      for(let i=0;i<n;i++){const p=i*4;lum[i]=.2126*src[p]+.7152*src[p+1]+.0722*src[p+2];near[i]=.2126*soft[p]+.7152*soft[p+1]+.0722*soft[p+2];broad[i]=.2126*big[p]+.7152*big[p+1]+.0722*big[p+2];sum+=lum[i];}
      const average=sum/n;
      const smooth=(a,b,v)=>{const z=Math.max(0,Math.min(1,(v-a)/(b-a)));return z*z*(3-2*z);};
      const hash=(x,y)=>{const z=Math.sin(x*127.1+y*311.7+39.13)*43758.5453;return z-Math.floor(z);};
      const field=(x,y,cell)=>{const gx=x/cell,gy=y/cell,ix=Math.floor(gx),iy=Math.floor(gy),fx=smooth(0,1,gx-ix),fy=smooth(0,1,gy-iy);return (mix(mix(hash(ix,iy),hash(ix+1,iy),fx),mix(hash(ix,iy+1),hash(ix+1,iy+1),fx),fy)-.5)*2;};
      for(let y=0;y<h;y++)for(let x=0;x<w;x++){
        const i=y*w+x,p=i*4,r=src[p],g=src[p+1],b=src[p+2],l=lum[i];
        const xx=Math.min(w-1,x+2),yy=Math.min(h-1,y+2),x0=Math.max(0,x-2),y0=Math.max(0,y-2);
        const grad=Math.hypot(lum[y*w+xx]-lum[y*w+x0],lum[yy*w+x]-lum[y0*w+x]);
        const edge=smooth(10,80,grad),protect=1-edge*.85;
        let R=r,G=g,B=b;
        if(id==='focus'){
          const fx=(+artFocusX.value/100)*w,fy=(+artFocusY.value/100)*h;
          const dx=(x-fx)/(w*.78),dy=(y-fy)/(h*.78),radius=Math.sqrt(dx*dx+dy*dy);
          const outer=smooth(.20,.94,radius),v=t*outer;
          const grey=.2126*r+.7152*g+.0722*b;
          R=mix(r,grey,.40*Math.min(1.3,v));G=mix(g,grey,.40*Math.min(1.3,v));B=mix(b,grey,.40*Math.min(1.3,v));
          const attenuation=1-.21*Math.min(1.6,v);
          R=128+(R-128)*attenuation;G=128+(G-128)*attenuation;B=128+(B-128)*attenuation;
          const center=1-smooth(.15,.64,radius);
          R+=7*t*center;G+=7*t*center;B+=7*t*center;
        }else if(id==='sun'){
          const nx=x/Math.max(1,w-1),ny=y/Math.max(1,h-1);
          const dir=artSunDirection.value;
          let directional=dir==='left'?1-nx:dir==='right'?nx:dir==='bottom'?ny:dir==='topleft'?(2-nx-ny)/2:dir==='topright'?(1+nx-ny)/2:1-ny;
          const spread=smooth(.05,.95,directional),local=.64+.36*smooth(45,205,broad[i]);
          const delta=t*(spread*.72-(1-spread)*.24)*40*local;
          R+=delta*1.13;G+=delta*.99;B+=delta*.81;
        }else if(id==='contrast'){
          const grey=.2126*r+.7152*g+.0722*b;
          const colorDiff=Math.max(r,g,b)-Math.min(r,g,b);
          const factor=1+t*(.26+.21*smooth(12,130,colorDiff));
          R=grey+(r-grey)*factor;G=grey+(g-grey)*factor;B=grey+(b-grey)*factor;
          const opponent=(r-b)/255;
          R+=13*t*opponent;B-=13*t*opponent;
        }else if(id==='shadow'){
          const shadow=1-smooth(45,165,broad[i]);
          const strength=t*shadow;
          R+=strength*27;G+=strength*3;B-=strength*27;
        }else if(id==='edge'){
          // Formflächen beruhigen, ohne an Kanten über benachbarte Farben zu schmieren.
          const strength=t*(.6+.35*t)*(1-.55*edge);
          R=mix(r,soft[p],strength);G=mix(g,soft[p+1],strength);B=mix(b,soft[p+2],strength);
          const band=10+10*t,delta=(Math.round(near[i]/band)*band-near[i])*t*.22*protect;
          R+=delta;G+=delta;B+=delta;
        }else if(id==='tonal'){
          // Farbharmonie: je stärker der Regler, desto ruhiger die Mitteltöne; Tiefe bleibt.
          const muted=1-.63*t;
          const baseL=broad[i];const contrast=(l-baseL)*(.95-.18*t);
          const target=baseL+contrast;
          R=mix(l,r,muted)+target-l;G=mix(l,g,muted)+target-l;B=mix(l,b,muted)+target-l;
          const warmth=4*t*(1-smooth(125,230,l));R+=warmth;B-=warmth*.8;
        }else if(id==='shift'){
          const light=smooth(110,225,broad[i]),shade=1-smooth(38,150,broad[i]);
          const amt=t*(.7+.6*t);
          R+=amt*(33*light-9*shade);G+=amt*(8*light+2*shade);B+=amt*(-27*light+29*shade);
          const offset=(.2126*R+.7152*G+.0722*B-l)*.78;R-=offset;G-=offset;B-=offset;
        }else if(id==='broken'){
          // Zwei Größen organischer Farbgruppen, an Konturen stark reduziert.
          const scale=Math.max(12,Math.min(w,h)*.055),variation=.65*field(x,y,scale)+.35*field(x+120,y+55,scale*.34);
          const v=variation*32*t*(.65+.35*t)*protect;
          const luminance=(l+near[i])*.5;
          R=mix(r,soft[p],.28*t*protect)+v*.88;
          G=mix(g,soft[p+1],.28*t*protect)+v*.12;
          B=mix(b,soft[p+2],.28*t*protect)-v*.92;
          const correction=(.2126*R+.7152*G+.0722*B-l)*.90;R-=correction;G-=correction;B-=correction;
        }else if(id==='light'){
          // Lokale Lichtinseln statt gleichmäßiger globaler Kontrastanhebung.
          const relative=Math.max(-1,Math.min(1,(broad[i]-average)/92));
          const highlight=Math.max(0,relative),shadow=Math.max(0,-relative);
          const delta=t*(35*highlight-39*shadow)+t*13*(smooth(170,245,l)-.20);
          const localContrast=1+t*.13;
          R=soft[p]+(r-soft[p])*localContrast+delta+(r-l)*.07*t;
          G=soft[p+1]+(g-soft[p+1])*localContrast+delta+(g-l)*.07*t;
          B=soft[p+2]+(b-soft[p+2])*localContrast+delta+(b-l)*.07*t;
        }else if(id==='depth'){
          // Bildhöhe als FERNE-Näherung; kein Anspruch auf motivsichere Tiefenerkennung.
          const far=1-smooth(.12,.79,y/Math.max(1,h-1));
          const haze=t*far*(.12+.30*(1-edge));
          R=mix(r,soft[p],t*far*.38*protect);G=mix(g,soft[p+1],t*far*.38*protect);B=mix(b,soft[p+2],t*far*.38*protect);
          R=mix(R,192,haze);G=mix(G,205,haze);B=mix(B,217,haze);
        }else if(id==='bright'){
          const delta=30*t+18*t*Math.abs(t);
          R=r+delta;G=g+delta;B=b+delta;
        }else if(id==='sat'){
          const gray=.2126*r+.7152*g+.0722*b;
          const factor=t>=0 ? (1+.55*t) : Math.max(0,1+.75*t);
          R=gray+(r-gray)*factor;G=gray+(g-gray)*factor;B=gray+(b-gray)*factor;
        }else if(id==='temp'){
          const amt=t*(24+10*Math.abs(t));
          R=r+amt;G=g+amt*0.18;B=b-amt;
        }
        data[p]=clamp(R);data[p+1]=clamp(G);data[p+2]=clamp(B);
      }
    }
    function render(){if(!base||previewOriginal)return;const token=++revision;by('artStatus').textContent='Vorschau wird berechnet …';
      setTimeout(()=>{if(token!==revision)return;let im=new Uint8ClampedArray(base.data),w=base.width,h=base.height;for(const [id] of effects){const raw=+by('art_'+id).value;const t=(['bright','sat','temp','shadow'].includes(id))?artAmountSigned(raw):artAmount(raw);if(t!==0)transform(im,w,h,id,t);}if(token!==revision)return;let out=new ImageData(im,w,h);ctx.putImageData(out,0,0);by('artStatus').textContent='Vorschau bereit · 4 neue Gestaltungsregler mit Richtungs- und Schwerpunktwahl.';},20);
    }
    function start(){const photo=window.__atelierArtBridge?.photo?.();const sourceCanvas=photo?.canvas;if(!photo?.loaded||!sourceCanvas?.width){alert('Bitte zuerst ein Foto öffnen.');return;}originalW=sourceCanvas.width;originalH=sourceCanvas.height;let k=Math.min(1,1000/Math.max(originalW,originalH));cv.width=Math.max(1,Math.round(originalW*k));cv.height=Math.max(1,Math.round(originalH*k));let c=workCanvas(cv.width,cv.height);c.getContext('2d').drawImage(sourceCanvas,0,0,cv.width,cv.height);base=pixels(c);overlay.style.display='block';previewOriginal=false;fitView();render();}
    by('artOpenBtn').addEventListener('click',()=>{try{start()}catch(e){console.error('Gestaltung:',e);overlay.style.display='block';by('artStatus').textContent='Fehler beim Öffnen: '+e.message;}});
    by('artClose').addEventListener('click',()=>{overlay.style.display='none';revision++;});
    [artSunDirection,artFocusX,artFocusY].forEach(el=>el.addEventListener('input',()=>{resetSnapshot=null;syncArtReset();clearTimeout(timer);timer=setTimeout(render,120);}));
    effects.forEach(([id])=>by('art_'+id).addEventListener('input',()=>{resetSnapshot=null;syncArtReset();by('art_'+id+'_val').textContent=formatArtValue(id,by('art_'+id).value);clearTimeout(timer);timer=setTimeout(render,120);}));
    by('artReset').addEventListener('click',()=>{if(resetSnapshot){setArtValues(resetSnapshot);resetSnapshot=null;}else{resetSnapshot=readArtValues();setArtValues({});}syncArtReset();render();});
    function originalPreview(on){if(!base)return;previewOriginal=on;revision++;if(on)ctx.putImageData(base,0,0);else render();}
    by('artBefore').addEventListener('pointerdown',()=>originalPreview(true));['pointerup','pointercancel','pointerleave'].forEach(ev=>by('artBefore').addEventListener(ev,()=>originalPreview(false)));
    async function fileFromCanvas(){return new Promise((resolve,reject)=>cv.toBlob(blob=>blob?resolve(blob):reject(new Error('PNG konnte nicht erzeugt werden')),'image/png'));}
    by('artSave').addEventListener('click',async()=>{if(!base)return;try{if(previewOriginal)originalPreview(false);await new Promise(r=>setTimeout(r,180));let blob=await fileFromCanvas(),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='AtelierAI_Kuenstlerische_Gestaltung.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);}catch(e){by('artStatus').textContent=e.message;}});
    by('artApply').addEventListener('click',async()=>{if(!base||busy)return;busy=true;by('artApply').disabled=true;try{if(previewOriginal)originalPreview(false);render();await new Promise(r=>setTimeout(r,350));let blob=await fileFromCanvas();await new Promise((resolve,reject)=>window.__atelierArtBridge.load(blob,err=>err?reject(err):resolve()));overlay.style.display='none';by('artStatus').textContent='Gestaltetes Bild in alle Module übernommen.';}catch(e){by('artStatus').textContent='Übernahme fehlgeschlagen: '+e.message;}finally{busy=false;by('artApply').disabled=false;}});
  })();

