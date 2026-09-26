/* tool-clearance-de-creatinina-urina-24h · Elucenia · https://github.com/Elucenia/tool-clearance-de-creatinina-urina-24h
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"clearance-de-creatinina-urina-24h","title":"Clearance de creatinina em urina de 24 h","fields":[["ucr","Creatinina urinária","num",{"min":5,"max":500,"step":0.1,"unit":"mg/dL","ph":"100"}],["vol","Volume urinário de 24 h","num",{"min":100,"max":10000,"unit":"mL","ph":"1440"}],["pcr","Creatinina sérica","num",{"min":0.2,"max":20,"step":0.01,"unit":"mg/dL","ph":"1,0"}],["sexo","Sexo","radio",{"opts":{"F":"Feminino","M":"Masculino"}}],["peso","Peso (para correção e checagem da coleta)","num",{"min":20,"max":300,"step":0.1,"unit":"kg","ph":"70","opt":true}],["altura","Altura (para correção por 1,73 m²)","num",{"min":100,"max":230,"unit":"cm","ph":"170","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var s=function(a){return a>=90?0:a>=60?1:a>=45?2:a>=30?3:a>=15?4:5};
var d=["G1","G2","G3a","G3b","G4","G5"];
var l=["normal ou alta","levemente diminuída","leve a moderadamente diminuída","moderada a gravemente diminuída","gravemente diminuída","falência renal"];
a.def("clearance-de-creatinina-urina-24h",function(a){var e=a.ucr*a.vol/(1440*a.pcr),r=a.peso&&a.altura?Math.sqrt(a.peso*a.altura/3600):null,i=r?1.73*e/r:null,n=null!=i?i:e,t=s(n),c=[["Clearance medido (sem correção)",o(e,0)+" mL/min"]],m="",u=null;if(r&&c.push(["Corrigido para 1,73 m² (SC "+o(r,2)+" m²)",o(i,0)+" mL/min/1,73 m²"]),a.peso){u=a.ucr*a.vol/100/a.peso;var p="F"===a.sexo?15:20,v="F"===a.sexo?20:25;c.push(["Creatinina excretada",o(u,1)+" mg/kg/dia (esperado "+p+" a "+v+")"]),m=u<p?"Excreção de creatinina abaixo do esperado: coleta possivelmente incompleta (ou massa muscular muito baixa).":u>v?"Excreção de creatinina acima do esperado: confira se a coleta passou de 24 h.":""}return{main:[o(n,0),null!=i?"mL/min/1,73 m²":"mL/min"],label:"Clearance de creatinina (urina de 24 h)",level:n>=60?"low":n>=30?"mid":"high",verdict:"Faixa "+d[t]+" da KDIGO: função "+l[t],rows:c,note:m,raw:{cl:e,clc:i,exc:u}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
