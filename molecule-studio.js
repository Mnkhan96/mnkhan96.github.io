(()=>{'use strict';
const viewerBox=document.getElementById('molecule-viewer');
const loadButton=document.getElementById('launch-viewer');
const status=document.getElementById('molecule-status');
const moleculeButtons=document.getElementById('molecule-picker');
const formulaEl=document.getElementById('molecule-formula');
const nameEl=document.getElementById('selected-molecule');
const detailEl=document.getElementById('molecule-detail');
const controls=document.getElementById('molecule-controls');
const downloadButton=document.getElementById('download-sdf');
const modelStyle=document.getElementById('model-style');
const hydrogenToggle=document.getElementById('model-hydrogens');
const resetButton=document.getElementById('model-reset');
const sketchOpen=document.getElementById('open-sketcher');
const sketchSlot=document.getElementById('sketcher-slot');
const openFull=document.getElementById('open-full-moldraw');
let dataset=null,activeCode='L01',viewer=null,modelText=null,started=false;
const setStatus=(str)=>{status.textContent=str;};
const lookup=code=>dataset?.compounds.find(item=>item.code===code);
function scriptOnce(url){return new Promise((resolve,reject)=>{
 if(window.$3Dmol){resolve();return;}
 const tag=document.createElement('script');tag.src=url;tag.async=true;tag.referrerPolicy='no-referrer';
 tag.onload=()=>window.$3Dmol?resolve():reject(Error('Viewer library did not initialize'));
 tag.onerror=()=>reject(Error('Viewer library could not load. Check your network or content blocker.'));
 document.head.append(tag);
 });}
function drawStyle(){if(!viewer)return;
 const style=modelStyle.value;
 if(style==='spacefill')viewer.setStyle({}, {sphere:{scale:0.94}});
 else if(style==='ballstick')viewer.setStyle({}, {stick:{radius:0.14},sphere:{scale:0.23}});
 else viewer.setStyle({}, {stick:{radius:0.18}});
 if(!hydrogenToggle.checked)viewer.setStyle({elem:'H'},{});
 viewer.render();
}
function setSelected(code){
 if(!dataset||!Object.prototype.hasOwnProperty.call(dataset.models,code))return;
 const item=lookup(code);if(!item)return;
 activeCode=code;modelText=dataset.models[code];
 nameEl.textContent=code+' · Published pyrazoline–thiazole hybrid';
 formulaEl.textContent=item.formula;detailEl.textContent=item.atoms+' atoms · '+item.bonds+' bonds · supplied 3D coordinates';
 [...moleculeButtons.querySelectorAll('button')].forEach(b=>{let isSelected=b.dataset.code===code;b.classList.toggle('is-active',isSelected);b.setAttribute('aria-pressed',String(isSelected));});
 if(!viewer)return;
 try{viewer.removeAllModels();viewer.addModel(modelText,'sdf');drawStyle();viewer.zoomTo();viewer.render();setStatus('3D model loaded. Drag to rotate, scroll or pinch to zoom.');downloadButton.disabled=false;}
 catch(err){setStatus('This molecule could not be displayed. Try another compound.');console.error('Molecular viewer:',err);}
}
function makePicker(){moleculeButtons.replaceChildren();for(const item of dataset.compounds){const btn=document.createElement('button');btn.type='button';btn.className='molecule-choice';btn.dataset.code=item.code;btn.setAttribute('aria-pressed','false');const code=document.createElement('strong');code.textContent=item.code;const caption=document.createElement('small');caption.textContent=item.formula;btn.append(code,caption);btn.addEventListener('click',()=>setSelected(item.code));moleculeButtons.append(btn);}}
async function startViewer(){if(started)return;started=true;loadButton.disabled=true;setStatus('Preparing 3D models…');try{
 const [_,res]=await Promise.all([scriptOnce('https://3Dmol.org/build/3Dmol-min.js'),fetch('assets/molecules/3d/published-pyrazoline-thiazoles.json',{cache:'default'})]);
 if(!res.ok)throw Error('Molecular data were unavailable ('+res.status+').');
 const data=await res.json();
 if(!Array.isArray(data.compounds)||!data.models||data.compounds.length!==10)throw Error('Unexpected molecular dataset');
 dataset=data;
 if(!window.$3Dmol||!window.WebGLRenderingContext)throw Error('This device cannot initialize WebGL.');
 viewer=window.$3Dmol.createViewer(viewerBox,{backgroundColor:'#ffffff',antialias:true});
 if(!viewer)throw Error('WebGL viewer could not be created');
 viewerBox.classList.add('is-ready');controls.hidden=false;makePicker();setSelected(activeCode);loadButton.hidden=true;
 }catch(e){setStatus(e.message+' Use a current browser with WebGL or try again later.');loadButton.disabled=false;started=false;console.error('Molecule Studio:',e);}}
loadButton?.addEventListener('click',startViewer);
modelStyle?.addEventListener('change',drawStyle);
hydrogenToggle?.addEventListener('change',drawStyle);
resetButton?.addEventListener('click',()=>{if(viewer){viewer.zoomTo();viewer.render();}});
downloadButton?.addEventListener('click',()=>{if(!dataset||!modelText)return;const blob=new Blob([modelText],{type:'chemical/x-mdl-sdfile;charset=utf-8'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=activeCode+'-author-supplied-3d.sdf';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);});
sketchOpen?.addEventListener('click',()=>{
 if(!sketchSlot||sketchSlot.querySelector('iframe'))return;
 const frame=document.createElement('iframe');frame.src='https://www.moldraw.com/embed';frame.title='MolDraw interactive 2D molecule drawing editor';frame.loading='lazy';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allow='clipboard-write';frame.setAttribute('aria-label','Third-party molecular sketching editor');
 sketchSlot.replaceChildren(frame);sketchSlot.classList.add('has-editor');sketchOpen.hidden=true;openFull.hidden=false;
});
})();