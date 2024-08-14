// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../core/handleUtils ../../core/promiseUtils ../../core/reactiveUtils ./workflowUtils".split(" "),function(m,f,d,n,p,q){function l(g){return"scene"===g?.layer?.type}f.handleModelUpload=async function({view:g,data:e,signal:r,next:t,cancel:h}){const {creationInfo:a}=e;if(!a||!l(a))return d.makeHandle();const {layer:u}=a,v=null!=a.geometryToPlace;a.geometryToPlace=null;if(v)return h(),d.makeHandle();({Upload:h}=await new Promise((k,w)=>m(["./Upload"],k,w)));n.throwIfAborted(r);
const c=new h;e.upload=c;let b=null;e=d.handlesGroup([p.watch(()=>c.state,k=>{switch(k){case "default":b?.remove();break;case "pending":b?.remove();b=q.showProgressCursor(g);break;case "success":a.maxFeatures=1;a.geometryToPlace=c.result;b?.remove();t();break;case "error":b?.remove()}}),d.makeHandle(()=>{c.cancel();b?.remove()})]);c.uploadTo(u);return e};f.isModelUpload=l;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});