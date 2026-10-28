
/* Farbübertragung 4.24: isolated touch-safe compact dialog. */
(()=>{
 const button=document.createElement('button');button.id='colorTransferOpen';button.type='button';button.className='secondary';button.textContent='Farbübertragung';
 document.getElementById('artOpenBtn').after(button);
 const wrap=document.createElement('div');wrap.id='transferDialog';wrap.hidden=true;
 wrap.style.cssText='position:fixed;inset:0;z-index:2147483000;background:#0009;padding:10px;box-sizing:border-box;';
 const shadow=wrap.attachShadow({mode:'open'});
 shadow.innerHTML=`<style>
 :host([hidden]){display:none!important} :host{font:15px -apple-system,BlinkMacSystemFont,sans-serif;color:#222}
 *,*::before,*::after{box-sizing:border-box}
 #transferPanel{display:flex;flex-direction:column;width:min(720px,100%);height:min(760px,calc(100dvh - 20px));margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 5px 28px #0005}
 #transferHeader{flex:none;position:relative;display:flex;align-items:center;justify-content:space-between;gap:10px;background:white;padding:12px;border-bottom:1px solid #ccc;z-index:3}
 #transferContent{overflow:auto;min-height:0;padding:12px;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
 button,input{font:inherit}button{min-height:42px;padding:9px 12px;border-radius:8px;border:1px solid #aaa;background:#f2f2f2;color:#222;touch-action:manipulation;cursor:pointer}button:disabled{opacity:.5}
 label{display:block;margin:10px 0}input[type=file]{display:block;width:100%;margin-top:5px}input[type=range]{width:100%;min-height:35px}
 #transferPreview{display:block;max-width:100%;width:auto;height:auto;max-height:30dvh;margin:8px auto;background:#ddd;border:1px solid #ddd;object-fit:contain}
 #transferActions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
 </style><section id="transferPanel" role="dialog" aria-modal="true" aria-label="Farbübertragung"><header id="transferHeader"><h2 style="font-size:20px;margin:0">Farbübertragung · 4.25</h2><button type="button" id="transferClose" class="secondary">Schließen ✕</button></header><div id="transferContent"><p style="font-size:13px">Übernimmt die Farbwelt eines Referenzbilds. Formen, Kanten und Bildausschnitt des Originalfotos werden nicht verschoben. Die Helligkeitsabstufungen bleiben möglichst erhalten.</p><label style="display:block;margin:12px 0">Referenzbild (z. B. Cézanne) <input id="transferReference" type="file" accept="image/*" style="width:100%"></label><label style="display:block">Stärke <input id="transferStrength" type="range" min="0" max="100" value="75" style="width:100%;min-height:36px"><output id="transferStrengthLabel">75 %</output></label><label style="display:block">Farbsättigung der Vorlage <input id="transferChroma" type="range" min="0" max="150" value="100" style="width:100%;min-height:36px"><output id="transferChromaLabel">100 %</output></label><label style="display:flex;gap:7px;align-items:center;margin:8px 0"><input id="transferOriginal" type="checkbox"> Original vergleichen</label><canvas id="transferPreview" ></canvas><p id="transferStatus" role="status" style="font-size:13px">Bitte Referenzbild auswählen.</p><div id="transferActions"><button id="transferSave" type="button">PNG speichern</button><button id="transferApply" type="button" class="secondary">Für alle Module übernehmen</button></div></div></section>`;
 document.body.append(wrap);
 const get=id=>shadow.querySelector('#'+id), preview=get('transferPreview'), ctx=preview.getContext('2d',{willReadFrequently:true});
 let original=null,reference=null,painted=null,revision=0,busy=false;
 const frame=()=>new Promise(resolve=>setTimeout(resolve,0));
 const clamp=(v,min=0,max=1)=>Math.min(max,Math.max(min,v));
 const linear=v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4};
 const encode=v=>{v=clamp(v);return Math.round(255*(v<=.0031308?12.92*v:1.055*v**(1/2.4)-.055))};
 const lab=(r,g,b)=>{r=linear(r);g=linear(g);b=linear(b);const l=Math.cbrt(.41222147*r+.53633254*g+.05144599*b),m=Math.cbrt(.2119035*r+.68069955*g+.10739696*b),ss=Math.cbrt(.08830246*r+.28171884*g+.6299787*b);return [.21045426*l+.79361779*m-.00407205*ss,1.9779985*l-2.4285922*m+.4505937*ss,.02590404*l+.7827718*m-.80867577*ss]};
 const rgb=(L,a,b)=>{const l=(L+.39633778*a+.21580376*b)**3,m=(L-.10556135*a-.06385417*b)**3,s=(L-.08948418*a-1.29148555*b)**3;return [encode(4.07674166*l-3.30771159*m+.23096993*s),encode(-1.268438*l+2.6097574*m-.3413194*s),encode(-.00419609*l-.7034186*m+1.7076147*s)]};
 const makeCanvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c};
 const loadBitmap=async file=>{const bmp=await createImageBitmap(file);try{const k=Math.min(1,900/Math.max(bmp.width,bmp.height)),w=Math.max(1,Math.round(bmp.width*k)),h=Math.max(1,Math.round(bmp.height*k));const c=makeCanvas(w,h);c.getContext('2d').drawImage(bmp,0,0,w,h);return c.getContext('2d',{willReadFrequently:true}).getImageData(0,0,w,h)}finally{bmp.close?.()}};
 // 4.25: multi-stage reference palette alignment; each stage is based on the
 // untouched original, never on an already recolored image.
 const samplePalette=im=>{
   const d=im.data,count=d.length/4,step=Math.max(1,Math.floor(count/13000)),pts=[];
   for(let i=0;i<count;i+=step){let j=i*4;if(d[j+3]<128)continue;pts.push(lab(d[j],d[j+1],d[j+2]));}
   if(!pts.length)throw Error('Bild ohne auswertbare Farben');return pts;
 };
 const dist=(a,b,light=1)=>light*(a[0]-b[0])**2+1.2*(a[1]-b[1])**2+1.2*(a[2]-b[2])**2;
 const closest=(p,pal)=>{let idx=0,best=Infinity;for(let i=0;i<pal.length;i++){const d=dist(p,pal[i]);if(d<best){best=d;idx=i;}}return idx};
 const cluster=(pts,n,iterations=7)=>{
   // Deterministic farthest-point sampling gives scarce pastel colors a fair chance.
   let centers=[pts[Math.floor(pts.length/2)].slice()];
   const nearest=new Float32Array(pts.length).fill(Infinity);
   for(let j=1;j<n;j++){
     let best=-1,pick=0;
     for(let i=0;i<pts.length;i++){const d=dist(pts[i],centers[centers.length-1]);if(d<nearest[i])nearest[i]=d;
       const score=nearest[i]*(1+0.11*Math.sqrt(pts[i][1]**2+pts[i][2]**2));if(score>best){best=score;pick=i;}}
     centers.push(pts[pick].slice());
   }
   const labels=new Uint8Array(pts.length),weights=new Float64Array(n);
   for(let iter=0;iter<iterations;iter++){
     const sums=Array.from({length:n},()=>[0,0,0]);weights.fill(0);
     for(let i=0;i<pts.length;i++){const idx=closest(pts[i],centers);labels[i]=idx;weights[idx]++;for(let c=0;c<3;c++)sums[idx][c]+=pts[i][c];}
     for(let j=0;j<n;j++)if(weights[j])centers[j]=sums[j].map(v=>v/weights[j]);
   }
   return {colors:centers,weights:Array.from(weights)};
 };
 // Map source color groups to reference groups. Retain comparable lightness;
 // encourage all reference hues to appear but avoid arbitrary color inversions.
 const matchPalettes=(source,target,previous)=>{
   const used=new Float64Array(target.colors.length),sum=Math.max(1,source.weights.reduce((a,b)=>a+b,0));
   const order=source.colors.map((_,i)=>i).sort((i,j)=>source.colors[i][0]-source.colors[j][0]);
   const map=new Array(source.colors.length);
   for(const i of order){const x=source.colors[i];let best=Infinity,bestJ=0;
     for(let j=0;j<target.colors.length;j++){
       const y=target.colors[j];const l=Math.abs(x[0]-y[0]);
       // Color family preference is soft: a brown can become Monet lilac.
       const chroma=(x[1]-y[1])**2+(x[2]-y[2])**2;
       const capacity=used[j]/Math.max(.015,target.weights[j]/Math.max(1,target.weights.reduce((a,b)=>a+b,0)));
       const continuity=previous?.[i] ? .22*dist(previous[i],y) : 0;
       const cost=2.5*l*l+.45*chroma+.008*capacity+continuity;
       if(cost<best){best=cost;bestJ=j;}
     }
     map[i]=target.colors[bestJ];used[bestJ]+=source.weights[i]/sum;
   }
   return map;
 };
 let model=null,pixelDelta=0;
 const buildModel=async(source,reference,job)=>{
   const from=samplePalette(source),to=samplePalette(reference),stages=[];
   let prev=null;
   for(const n of [16,32,48,64]){
     if(job!==revision)throw Error('abgebrochen');
     setStatus('Palettenvergleich: '+n+' Farben …');await frame();
     const src=cluster(from,n),dst=cluster(to,n);
     // Carry the old stage's closest mapped color as an anchor into the next.
     const anchor=prev?src.colors.map(c=>{const k=closest(c,prev.src.colors);return prev.map[k]}):null;
     const mapping=matchPalettes(src,dst,anchor);
     prev={src,map:mapping};stages.push({n,src,map:mapping});
   }
   return {stages};
 };
 const transform=async(im,ref,strength,chroma,job)=>{
   if(!model)throw Error('Farbmodell fehlt');
   const d=im.data,out=new Uint8ClampedArray(d),f=clamp(strength/100),sat=clamp(chroma/100,0,1.5);
   const final=model.stages[3];let differences=0,visited=0;
   // Classify in full 64-color source palette, but use residuals to retain fine
   // gradients, textures and edge details from the ORIGINAL photo.
   for(let i=0;i<d.length;i+=4){
     if(i%100000===0){await frame();if(job!==revision)throw Error('abgebrochen');}
     if(d[i+3]<128)continue;
     const x=lab(d[i],d[i+1],d[i+2]),k=closest(x,final.src.colors),src=final.src.colors[k],dst=final.map[k];
     // Reference chromatic coordinates with gentle residuals from source.
     // Keep per-pixel original lightness, so shape and shadow never move.
     const a=x[1]*(1-f)+f*sat*(dst[1]+.35*(x[1]-src[1]));
     const b=x[2]*(1-f)+f*sat*(dst[2]+.35*(x[2]-src[2]));
     const col=rgb(x[0],a,b);
     out[i]=col[0];out[i+1]=col[1];out[i+2]=col[2];
     if(Math.abs(col[0]-d[i])+Math.abs(col[1]-d[i+1])+Math.abs(col[2]-d[i+2])>18)differences++;
     visited++;
   }
   pixelDelta=visited?Math.round(differences/visited*100):0;
   return new ImageData(out,im.width,im.height);
 };
 const setStatus=t=>get('transferStatus').textContent=t;
 async function render(){const job=++revision;if(!original)return;if(!reference){ctx.putImageData(original,0,0);setStatus('Bitte Referenzbild auswählen.');return}get('transferSave').disabled=true;get('transferApply').disabled=true;setStatus('Farbübertragung wird berechnet …');try{const result=await transform(original,reference,+get('transferStrength').value,+get('transferChroma').value,job);if(job!==revision)return;painted=result;ctx.putImageData(get('transferOriginal').checked?original:result,0,0);setStatus('16 → 32 → 48 → 64 Farben · Vorschau fertig · '+pixelDelta+' % der Pixel sichtbar verändert (Farbdifferenz-Schwelle).');}catch(e){if(job===revision)setStatus('Fehler: '+e.message)}finally{if(job===revision){get('transferSave').disabled=false;get('transferApply').disabled=false}}}
 function open(){try{const photo=window.__atelierArtBridge?.photo?.();if(!photo?.loaded||!photo.canvas?.width){alert('Bitte zuerst ein Foto öffnen.');return}const source=photo.canvas,k=Math.min(1,1200/Math.max(source.width,source.height));preview.width=Math.max(1,Math.round(source.width*k));preview.height=Math.max(1,Math.round(source.height*k));ctx.drawImage(source,0,0,preview.width,preview.height);original=ctx.getImageData(0,0,preview.width,preview.height);painted=null;model=null;get('transferOriginal').checked=false;get('transferReference').value='';reference=null;wrap.hidden=false;get('transferContent').scrollTop=0;render()}catch(e){wrap.hidden=true;alert('Farbübertragung konnte nicht geöffnet werden: '+e.message)}}
 button.addEventListener('click',open);get('transferClose').addEventListener('click',()=>{revision++;wrap.hidden=true});wrap.addEventListener('click',e=>{if(e.target===wrap){revision++;wrap.hidden=true}});
 get('transferReference').addEventListener('change',async e=>{const f=e.target.files?.[0];if(!f)return;const job=++revision;try{setStatus('Referenzbild wird gelesen …');const img=await loadBitmap(f);if(job!==revision)return;reference=img;model=await buildModel(original,reference,job);if(job===revision)render()}catch(err){setStatus('Referenzbild konnte nicht gelesen werden: '+err.message)}});
 for(const [id,label] of [['transferStrength','transferStrengthLabel'],['transferChroma','transferChromaLabel']])get(id).addEventListener('input',e=>{get(label).textContent=e.target.value+' %';clearTimeout(get(id)._timer);get(id)._timer=setTimeout(render,100)});
 get('transferOriginal').addEventListener('change',()=>{if(original)ctx.putImageData(get('transferOriginal').checked?original:(painted||original),0,0)});
 async function fullCanvas(){const photo=window.__atelierArtBridge.photo(),source=photo.canvas;if(!reference)throw Error('Bitte zuerst ein Referenzbild auswählen.');if(!source?.width)throw Error('Foto fehlt.');const c=makeCanvas(source.width,source.height),out=c.getContext('2d',{willReadFrequently:true}),job=revision;const stripe=Math.max(1,Math.min(96,Math.floor(750000/source.width)));for(let y=0;y<source.height;y+=stripe){if(job!==revision)throw Error('abgebrochen');const h=Math.min(stripe,source.height-y),tile=photo.canvas.getContext('2d',{willReadFrequently:true}).getImageData(0,y,source.width,h),res=await transform(tile,reference,+get('transferStrength').value,+get('transferChroma').value,job);out.putImageData(res,0,y)}return c}
 const blobFrom=c=>new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(Error('PNG-Export fehlgeschlagen')),'image/png'));
 async function save(apply){if(busy||!reference)return;busy=true;get('transferSave').disabled=true;get('transferApply').disabled=true;setStatus('Gesamtbild wird in Originalauflösung berechnet …');try{const c=await fullCanvas(),blob=await blobFrom(c);if(apply){await new Promise((resolve,reject)=>window.__atelierArtBridge.load(blob,err=>err?reject(err):resolve()));revision++;wrap.hidden=true;}else{const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='AtelierAI_4.25_Farbuebertragung.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),3000);setStatus('PNG wurde gespeichert.')}}catch(e){setStatus('Fehler: '+e.message)}finally{busy=false;get('transferSave').disabled=false;get('transferApply').disabled=false}}
 get('transferSave').addEventListener('click',()=>save(false));get('transferApply').addEventListener('click',()=>save(true));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!wrap.hidden){revision++;wrap.hidden=true}});
})();
