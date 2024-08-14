// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../kernel ../Error ../events ../handleUtils ../maybe ../promiseUtils ./InvokeHandler ./registry ./utils ../../support/revision".split(" "),function(A,u,B,C,t,m,D,E,h,v){const {CLOSE:w,ABORT:x,INVOKE:y,RESPONSE:q,OPEN_PORT:z,ON:F}=h.MessageType;class G{constructor(a){this._invoke=a;this._timer=null;this._cancelledJobIds=new Set;this._invokeMessages=[];this._timer=null;this._process=this._process.bind(this)}push(a){a.type===h.MessageType.ABORT?this._cancelledJobIds.add(a.jobId):(this._invokeMessages.push(a),
null===this._timer&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0;this._cancelledJobIds.clear();this._timer=null}_process(){this._timer=null;for(const a of this._invokeMessages)this._cancelledJobIds.has(a.jobId)||this._invoke(a);this._cancelledJobIds.clear();this._invokeMessages.length=0}}class k{static connect(a,b){const c=new MessageChannel;a="function"===typeof a?new a:"default"in a&&"function"===typeof a.default?new a.default:a;b=new k(c.port1,{channel:c,client:a,
schedule:b});"object"===typeof a&&"remoteClient"in a&&(a.remoteClient=b);k.clients.set(b,a);return c.port2}static loadWorker(a){return(a=E.registry[a])?a():Promise.resolve(null)}constructor(a,b,c){this._port=a;this._jobQueue=c;this._outJobs=new Map;this._inJobs=new Map;this._invokeQueue=new G(d=>this._onInvokeMessage(d));this._client=b.client;this._onMessage=this._onMessage.bind(this);this._channel=b.channel;this._schedule=b.schedule;this._port.addEventListener("message",this._onMessage);this._port.start()}close(){this._post({type:w});
this._close()}isBusy(){return 0<this._outJobs.size}invoke(a,b,c){return this.apply(a,[b],c)}apply(a,b,c){const d=c?.signal,e=c?.transferList;if(!this._port)return Promise.reject(new u(h.portClosedErrorName,`Cannot call invoke('${a}'), port is closed`,{methodName:a,data:b}));const f=h.newJobId();return new Promise((n,l)=>{if(m.isAborted(d))this._processWork(),l(m.createAbortError());else{var p=m.onAbort(d,()=>{const g=this._outJobs.get(f);g&&(this._outJobs.delete(f),this._processWork(),t.removeMaybe(g.abortHandle),
this._post({type:x,jobId:f}),l(m.createAbortError()))});this._outJobs.set(f,{resolve:n,reject:l,abortHandle:p,debugInfo:a});this._post({type:y,jobId:f,methodName:a,abortable:null!=d},b,e)}})}createInvokeProxy(a){return D.createInvokeProxy(this,a)}on(a,b){function c(e){b(e.data)}const d=new MessageChannel;this._port.postMessage({type:h.MessageType.ON,eventType:a,port:d.port2},[d.port2]);d.port1.addEventListener("message",c);d.port1.start();return C.makeHandle(()=>{d.port1.postMessage({type:h.MessageType.CLOSE});
d.port1.close();d.port1.removeEventListener("message",c)})}jobAdded(){this._processWork()}openPort(){const a=new MessageChannel;this._post({type:z,port:a.port2});return a.port1}_processWork(){if(!(2<=this._outJobs.size)){var a=this._jobQueue?.pop();if(a){var {methodName:b,data:c,invokeOptions:d,resolver:e}=a;this.apply(b,c,d).then(f=>e.resolve(f)).catch(f=>e.reject(f))}}}_close(){this._channel&&(this._channel=void 0);this._port.removeEventListener("message",this._onMessage);this._port.close();this._outJobs.forEach(a=>
{t.removeMaybe(a.abortHandle);a.reject(m.createAbortError(`Worker closing, aborting job calling '${a.debugInfo}'`))});this._inJobs.clear();this._outJobs.clear();this._invokeQueue.clear();this._schedule=this._client=this._port=null}_onMessage(a){null!=this._schedule?this._schedule(()=>this._processMessage(a,!0)):this._processMessage(a,!1)}_processMessage(a,b){if(a=h.receiveMessage(a))switch(a.type){case q:this._onResponseMessage(a);break;case y:b?this._onInvokeMessage(a):this._invokeQueue.push(a);
break;case x:this._onAbortMessage(a);break;case w:this._onCloseMessage();break;case z:this._onOpenPortMessage(a);break;case F:this._onOnMessage(a)}}_onAbortMessage(a){const b=this._inJobs,c=a.jobId,d=b.get(c);this._invokeQueue.push(a);d&&(d.controller&&d.controller.abort(),b.delete(c))}_onCloseMessage(){const a=this._client;this._close();a&&"destroy"in a&&k.clients.get(this)===a&&a.destroy();k.clients.delete(this);a?.remoteClient&&(a.remoteClient=null)}_onInvokeMessage(a){const {methodName:b,jobId:c,
data:d=[],abortable:e}=a;a=e?new AbortController:null;const f=this._inJobs;let n=this._client,l=n[b],p;try{if(!l&&b&&b.includes(".")){const g=b.split(".");for(let r=0;r<g.length-1;r++)n=n[g[r]],l=n[g[r+1]]}if("function"!==typeof l)throw new TypeError(`${b} is not a function`);d.push({client:this,signal:a?a.signal:null});p=l.apply(n,d)}catch(g){this._post({type:q,jobId:c,error:h.toInvokeError(g)});return}m.isPromiseLike(p)?(f.set(c,{controller:a,promise:p}),p.then(g=>{f.has(c)&&(f.delete(c),this._post({type:q,
jobId:c},g))},g=>{f.has(c)&&(f.delete(c),m.isAbortError(g)||this._post({type:q,jobId:c,error:h.toInvokeError(g||{message:`Error encountered at method ${b}`})}))})):this._post({type:q,jobId:c},p)}_onOpenPortMessage(a){new k(a.port,{client:this._client})}_onOnMessage(a){const {port:b}=a,c=this._client.on(a.eventType,e=>{b.postMessage(e)}),d=B.on(a.port,"message",e=>{h.receiveMessage(e)?.type===h.MessageType.CLOSE&&(d.remove(),c.remove(),b.close())})}_onResponseMessage(a){const {jobId:b,error:c,data:d}=
a;a=this._outJobs;if(a.has(b)){var e=a.get(b);a.delete(b);this._processWork();t.removeMaybe(e.abortHandle);c?e.reject(u.fromJSON(JSON.parse(c))):e.resolve(d)}}_post(a,b,c){return h.postMessage(this._port,a,b,c)}}k.kernelInfo={buildDate:v.buildDate,fullVersion:A.fullVersion,revision:v.commitHash};k.clients=new Map;return k});