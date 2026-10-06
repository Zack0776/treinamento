(function(){
var ld=document.getElementById('ld'),ph=document.getElementById('ph');
var tx=document.getElementById('ldt');
function place(){var W=ld.clientWidth||innerWidth,H=ld.clientHeight||innerHeight,c=W/H>=2/3,k=c?Math.min(W/1024,H/1536):Math.max(W/1024,H/1536);
 tx.style.left=((W-1024*k)*(c?.5:.18)+112*k)+'px';tx.style.top=((H-1536*k)*(c?.5:.4)+640*k)+'px';tx.style.fontSize=(22*k)+'px'}
place();addEventListener('resize',place);
document.documentElement.style.setProperty('--ph','url("'+ph.src+'")');
var t0=Date.now(),sig={img:false,load:document.readyState==='complete',fonts:false},done=false,iv;
function im(){sig.img=true}if(ph.complete)im();else{ph.onload=im;ph.onerror=im}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){sig.fonts=true},function(){sig.fonts=true});else sig.fonts=true;
setTimeout(function(){sig.fonts=true},3000);
addEventListener('load',function(){sig.load=true});
function finish(){if(done)return;done=true;clearInterval(iv);ld.classList.add('out');window.__ready=true;document.body.classList.add('rdy');
 try{dispatchEvent(new Event('ld-ready'))}catch(e){}
 setTimeout(function(){if(ld.parentNode)ld.parentNode.removeChild(ld)},2000)}
iv=setInterval(function(){if(sig.img&&sig.load&&sig.fonts&&Date.now()-t0>=1800)finish()},150);
setTimeout(finish,4500);
})();
