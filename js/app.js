(function(){
const {useState,useEffect,useRef,createElement:h,Fragment}=React;
const PIX="00020126680014BR.GOV.BCB.PIX0114+55119967336530228Pagamento Codigo da Presenca520400005303986540597.005802BR5925DANIELE RESSUREICAO PINHE6009SAO PAULO622605223zQpbM8abyl4ybisxCntpd6304DBBC";
const QR="assets/qr-pix.png";
const SALON="assets/salao.jpg";
const WA="https://wa.me/5511996733653";
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;

function useIn(){const ref=useRef(null),[on,set]=useState(false);
  useEffect(()=>{const el=ref.current;if(!el)return;if(!("IntersectionObserver" in window)){set(true);return}const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){set(true);io.disconnect()}},{threshold:.2});io.observe(el);return()=>io.disconnect()},[]);
  return [ref,on]}
function Lines({lines,d=0,step=.15}){return lines.map((t,i)=>h("span",{key:i,className:"ln"},h("span",{style:{"--d":(d+i*step)+"s"}},t)))}
function Reveal({as="div",className="",children,...p}){const [ref,on]=useIn();return h(as,{ref,className:className+(on?" in":""),...p},children)}
const D=(s)=>({"--d":s+"s"});
function Hero({ready,onAccept}){
  return h("header",{className:"sec stage"+(ready?" in":"")},
    h("p",{className:"top eyebrow fd",style:D(.3)},"Convite exclusivo"),
    h("div",{className:"vis"},h("div",{className:"pf"},h("img",{src:SALON,alt:"Salão de beleza elegante, com espelhos em arco e cadeiras em tons de bege e dourado",decoding:"async"}))),
    Array.from({length:10},(_,i)=>h("i",{className:"mote",key:i,style:{left:(10+i*8.5)+"%",top:(18+(i*29)%52)+"%",animationDelay:(i*.9)+"s"}})),
    h("div",{className:"txt"},
    h("p",{className:"eyebrow fd",style:D(.4)},"Treinamento"),
    h("span",{className:"orn fd",style:D(.7)}),
    h("h1",{className:"title"},h(Lines,{lines:["Código da","Presença"],d:.9})),
    h("p",{className:"sub fd",style:D(1.7)},"POSICIONAMENTO PARA PROFISSIONAIS DA BELEZA"),
    h("p",{className:"sub2 fd",style:D(1.9)},"QUE QUEREM FATURAR MAIS NO ÚLTIMO TRIMESTRE."),
    h("p",{className:"quote fd",style:D(2.1)},"“Seu trabalho precisa ser percebido, valorizado e escolhido.”"),
    h("div",{className:"cta fd",style:D(2.4)},h("button",{className:"btn",onClick:onAccept},"ACEITAR O CONVITE"))));
}
function Invite({on,onSignup}){
  return h("div",{id:"inv",className:on?"on":"",role:"dialog","aria-label":"Convite","aria-hidden":!on},
    h("div",{className:"iw"+(on?" in":"")},
      h("h2",null,h(Lines,{lines:["VOCÊ ESTÁ","CONVIDADA(O)"],d:.4,step:.18})),
      h("p",{className:"fd",style:D(1.2)},"Para uma experiência sobre imagem, comunicação, comportamento e posicionamento."),
      h("div",{className:"card fd",style:D(1.6)},
        h("h3",null,"Código da",h("br"),"Presença"),
        h("span",{className:"tag"},"VAGAS LIMITADAS"),
        h("p",{className:"by"},"Treinamento com Dani Pinheiro"),
        h("dl",{className:"info"},[["DATA","19/10/26"],["HORÁRIO","13:00 às 17:00h"],["INVESTIMENTO","R$ 97,00"]].map(([k,v])=>h("div",{key:k},h("dt",null,k),h("dd",null,v)))),
        h("button",{className:"btn solid block",onClick:onSignup,tabIndex:on?0:-1},"GARANTIR MINHA VAGA"))));
}
const PIL=[["Imagem","Como sua aparência, ambiente e apresentação comunicam valor."],
["Comunicação","Como falar do seu trabalho, mostrar seus diferenciais e vender sem parecer insistente."],
["Comportamento","Postura profissional, atendimento, limites e a experiência que faz a cliente querer voltar."],
["Posicionamento","Como deixar de ser apenas mais uma profissional e se tornar uma escolha percebida como referência."]];
function Pillars(){
  return h("section",{id:"pilares",className:"sec pil"},h("div",{className:"wrap"},
    h(Reveal,null,h("p",{className:"eyebrow fd"},"Os quatro pilares"),h("h2",{className:"fd",style:D(.15)},"Quatro formas de ser percebida.")),
    h("div",{className:"rows"},PIL.map(([t,d])=>h(Reveal,{key:t,className:"row"},h("h3",{className:"fd"},t),h("p",{className:"fd",style:D(.2)},d))))));
}
function Message(){
  return h("section",{className:"sec msg"},
    h(Reveal,null,h("p",{className:"fd"},"Se você trabalha muito, mas o seu faturamento não acompanha, talvez o problema não seja falta de clientes."),
      h("p",{className:"fd",style:D(.5)},"Pode ser a forma como o seu negócio está sendo percebido.")),
    h("span",{className:"rule"}),
    h(Reveal,null,h("p",{className:"e fd"},"Você não precisa terminar o ano trabalhando mais."),
      h("p",{className:"e fd",style:D(.5)},"Precisa fazer o seu trabalho ser percebido, valorizado e escolhido.")));
}
function Event({onSignup}){
  const I=[["DATA","19/10/26"],["HORÁRIO","13:00 às 17:00h"],["LOCAL",h(Fragment,null,"Clínica",h("br"),"Rua das Pitangueiras, 577",h("br"),"Bairro Jardim — Santo André")],["INVESTIMENTO","R$ 97,00"],["PIX","11 99673-3653"]];
  return h("section",{id:"evento",className:"sec ev"},h(Reveal,{className:"tk"},
    h("h2",{className:"fd"},"Código da",h("br"),"Presença"),
    h("span",{className:"tag fd",style:D(.2)},"VAGAS LIMITADAS"),
    h("p",{className:"by fd",style:D(.3)},"Treinamento com Dani Pinheiro"),
    h("dl",{className:"info"},I.map(([k,v],i)=>h("div",{key:k,className:"fd",style:D(.4+i*.1)},h("dt",null,k),h("dd",null,v)))),
    h("div",{className:"cta fd",style:D(1)},h("button",{className:"btn lt",onClick:onSignup},"GARANTIR MINHA VAGA"))));
}
function Final({onSignup}){
  return h(Reveal,{as:"footer",className:"sec stage fin"},h("div",{className:"txt"},
    h("span",{className:"rule fd"}),
    h("h2",null,h(Lines,{lines:["Código da","Presença"]})),
    h("p",{className:"quote fd",style:D(.5)},"Invista em você.",h("br"),"O seu negócio também."),
    h("small",{className:"fd",style:D(.8)},"Nos vemos no treinamento."),
    h("div",{className:"cta fd",style:D(1)},h("button",{className:"btn",onClick:onSignup},"GARANTIR MINHA VAGA"))));
}
/* ---------- modal ---------- */
function Modal({onClose}){
  const [step,setStep]=useState(1),[nome,setNome]=useState(""),[nasc,setNasc]=useState(""),[area,setArea]=useState(""),[err,setErr]=useState({}),[msg,setMsg]=useState("");
  const first=useRef(null),box=useRef(null);
  useEffect(()=>{first.current&&first.current.focus();const k=e=>{if(e.key==="Escape")onClose();
    if(e.key==="Tab"&&box.current){const f=[...box.current.querySelectorAll("button,input:not([readonly]),a,.code")].filter(x=>!x.disabled);if(!f.length)return;const a=f[0],b=f[f.length-1];
      if(e.shiftKey&&document.activeElement===a){e.preventDefault();b.focus()}else if(!e.shiftKey&&document.activeElement===b){e.preventDefault();a.focus()}}};
    addEventListener("keydown",k);document.body.classList.add("lock");return()=>{removeEventListener("keydown",k);document.body.classList.remove("lock")}},[step]);
  const mask=v=>{const d=v.replace(/\D/g,"").slice(0,8);return d.length>4?d.slice(0,2)+"/"+d.slice(2,4)+"/"+d.slice(4):d.length>2?d.slice(0,2)+"/"+d.slice(2):d};
  function next(e){e.preventDefault();const er={},n=nome.trim();
    if(n.length<3||!n.includes(" "))er.nome="Informe seu nome completo.";
    const [dd,mm,yy]=nasc.split("/").map(Number),dt=new Date(yy,mm-1,dd);
    if(nasc.length!==10||dt.getFullYear()!==yy||dt.getMonth()!==mm-1||dt.getDate()!==dd||yy<1900||dt>new Date())er.nasc="Informe uma data válida (DD/MM/AAAA).";
    if(area.trim().length<2)er.area="Informe sua área de atuação.";
    setErr(er);if(!Object.keys(er).length)setStep(2)}
  async function copy(){let ok=false;try{await navigator.clipboard.writeText(PIX);ok=true}catch(e){const t=document.createElement("textarea");t.value=PIX;t.style.position="fixed";t.style.opacity="0";document.body.appendChild(t);t.select();try{ok=document.execCommand("copy")}catch(_){}t.remove()}
    setMsg(ok?"Código Pix copiado.":"Não foi possível copiar. Selecione o código acima e copie manualmente.")}
  const text=`Olá, Dani! 👋\n\nAcabei de realizar o pagamento da minha inscrição no treinamento CÓDIGO DA PRESENÇA.\n\nDADOS DA INSCRIÇÃO\n\nNome: ${nome.trim()}\nData de nascimento: ${nasc}\nÁrea de atuação: ${area.trim()}\n\nTREINAMENTO\nCódigo da Presença\n\nINVESTIMENTO\nR$ 97,00\n\nPAGAMENTO\nPix\n\nEstou enviando o comprovante de pagamento nesta conversa para confirmação da minha inscrição.\n\nObrigado(a)! 🤍`;
  const wa=WA+"?text="+encodeURIComponent(text);
  const ro=(l,v)=>h("div",{className:"fld ro"},h("label",null,l),h("input",{value:v,readOnly:true,tabIndex:-1,"aria-label":l+": "+v}));
  let body;
  if(step===1)body=h("form",{onSubmit:next,noValidate:true},
    h("p",{className:"eyebrow"},"Garantir minha vaga"),h("h3",{style:{marginTop:".6rem"}},"Seus dados"),
    h("div",{className:"fld"},h("label",{htmlFor:"n"},"NOME COMPLETO"),h("input",{id:"n",ref:first,value:nome,onChange:e=>setNome(e.target.value),autoComplete:"name","aria-invalid":!!err.nome}),h("span",{className:"err",role:"alert"},err.nome)),
    h("div",{className:"fld"},h("label",{htmlFor:"b"},"DATA DE NASCIMENTO"),h("input",{id:"b",value:nasc,placeholder:"DD/MM/AAAA",inputMode:"numeric",autoComplete:"bday",onChange:e=>setNasc(mask(e.target.value)),"aria-invalid":!!err.nasc}),h("span",{className:"err",role:"alert"},err.nasc)),
    h("div",{className:"fld"},h("label",{htmlFor:"a"},"ÁREA EM QUE ATUA"),h("input",{id:"a",value:area,onChange:e=>setArea(e.target.value),"aria-invalid":!!err.area}),h("span",{className:"err",role:"alert"},err.area)),
    h("div",{className:"hr",style:{margin:"1.2rem 0 0"}}),
    h("div",{className:"g2"},ro("DATA","19/10/26"),ro("INVESTIMENTO","R$ 97,00")),ro("HORÁRIO","13:00 às 17:00h"),
    h("button",{className:"btn solid block",type:"submit"},"GERAR QR CODE PIX"));
  else body=h("div",null,h("p",{className:"eyebrow"},"Pagamento"),h("h3",{style:{marginTop:".6rem"}},"Investimento",h("br"),"R$ 97,00"),
    h("p",{className:"note"},"Método: Pix"),
    h("p",{className:"deadline"},"O pagamento pode ser feito somente até o dia 15/10."),
    h("div",{className:"qr"},h("img",{src:QR,alt:"QR Code Pix oficial para pagamento de R$ 97,00",width:480,height:484})),
    h("p",{className:"note",style:{textAlign:"center"}},"Favorecido: Daniele Ressureicao Pinheiro"),
    h("p",{className:"eyebrow",style:{marginTop:"1.8rem",fontSize:".66rem"}},"PIX COPIA E COLA"),
    h("div",{className:"code",tabIndex:0},PIX),
    h("button",{className:"btn block",style:{marginTop:"1rem"},ref:first,onClick:copy},"COPIAR PIX"),
    h("p",{className:"ok","aria-live":"polite"},msg),
    h("div",{className:"hr"}),
    h("h3",{style:{fontSize:"1.6rem"}},"Pagamento realizado?"),
    h("p",{className:"note"},"Envie seu comprovante pelo WhatsApp para que sua inscrição seja confirmada."),
    h("a",{className:"btn solid block",style:{marginTop:"1.4rem"},href:wa,target:"_blank",rel:"noopener"},"ENVIAR COMPROVANTE PELO WHATSAPP"),
    h("p",{className:"note",style:{fontSize:".8rem",marginTop:"1rem"}},"A confirmação é feita manualmente, após o recebimento do comprovante."),
    h("button",{className:"link",onClick:()=>setStep(1)},"Corrigir dados"));
  return h("div",{className:"ov",onMouseDown:e=>{if(e.target===e.currentTarget)onClose()}},
    h("div",{className:"md",role:"dialog","aria-modal":"true","aria-label":"Garantir minha vaga",ref:box},h("button",{className:"x","aria-label":"Fechar",onClick:onClose},"×"),body));
}

/* ---------- app ---------- */
function App(){
  const [rdy,setRdy]=useState(!!window.__ready),[inv,setInv]=useState(false),[modal,setModal]=useState(false);
  useEffect(()=>{const f=()=>setRdy(true);addEventListener("ld-ready",f);const t=setTimeout(f,6000);return()=>{removeEventListener("ld-ready",f);clearTimeout(t)}},[]);
  useEffect(()=>{if(!modal)document.body.classList.toggle("lock",inv)},[inv,modal]);
  return h(Fragment,null,h(Hero,{ready:rdy,onAccept:()=>setInv(true)}),h(Invite,{on:inv,onSignup:()=>setModal(true)}),
    modal&&h(Modal,{onClose:()=>setModal(false)}));
}
ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
