// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/has ../../core/maybe ../../core/promiseUtils ../../core/Queue ../../core/ReactiveMap ../../core/scheduling ../../core/signal".split(" "),function(l,w,m,f,p,h,q,r){class t{constructor(a,b){this.item=a;this.controller=b;this.promise=null}}class u{constructor(a){this._task=this._schedule=null;this._deferreds=new h;this._controllers=new h;this._processingItems=new h;this._pausedSignal=r.signal(!1);this.concurrency=1;a.concurrency&&(this.concurrency=a.concurrency);this._queue=
new p(a.peeker);this.process=a.process;const b=a.scheduler;a.priority&&b&&(this._task=b.registerTask(a.priority,this))}destroy(){this.clear();this._schedule=m.removeMaybe(this._schedule);this._task=m.removeMaybe(this._task)}get updating(){return!!this._task?.updating||this.running}get length(){return this._processingItems.size+this._queue.length}abort(a){(a=this._controllers.get(a))&&a.abort()}clear(){this._queue.clear();const a=[];this._controllers.forEach(b=>a.push(b));this._controllers.clear();
a.forEach(b=>b.abort());this._processingItems.clear();this._cancelNext()}forEach(a){this._deferreds.forEach((b,c)=>a(c))}get(a){return(a=this._deferreds.get(a))?a.promise:void 0}isOngoing(a){return this._processingItems.has(a)}has(a){return this._deferreds.has(a)}pause(){this._pausedSignal.value||(this._pausedSignal.value=!0,this._cancelNext())}push(a,b){const c=this.get(a);if(c)return c;const e=new AbortController;let d=null;b&&(d=f.onAbort(b,()=>e.abort()));const k=()=>{v.remove();null!=d&&d.remove();
this._removeItem(a);this._queue.remove(a);this._scheduleNext()},v=f.onAbortOrThrow(e.signal,()=>{const n=this._processingItems.get(a);n&&n.controller.abort();k();g.reject(f.createAbortError())}),g=f.createResolver();this._deferreds.set(a,g);this._controllers.set(a,e);g.promise.then(k,k);this._queue.push(a);this._scheduleNext();return g.promise}last(){return this._queue.last()}lastPromise(){const a=this.last();return a?this.get(a):null}peek(){return this._queue.peek()}popLast(){const a=this._queue.popLast();
a&&(this._deferreds.get(a)?.reject(f.createAbortError("Removed from queue")),this._removeItem(a));return a}reset(){const a=[];this._processingItems.forEach(b=>a.push(b));this._processingItems.clear();for(const b of a)this._queue.push(b.item),b.controller.abort();this._scheduleNext()}resume(){this._pausedSignal.value&&(this._pausedSignal.value=!1,this._scheduleNext())}takeAll(){const a=[];for(;this._queue.length;)a.push(this._queue.pop());this.clear();return a}get running(){return!this._pausedSignal.value&&
0<this._queue.length&&this._processingItems.size<this.concurrency}runTask(a){for(;!a.done&&0<this._queue.length&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),a.madeProgress()}_removeItem(a){this._deferreds.delete(a);this._controllers.delete(a);this._processingItems.delete(a)}_scheduleNext(){this._task||this._pausedSignal.value||this._schedule||(this._schedule=q.schedule(()=>{this._schedule=null;this._next()}))}_next(){for(;0<this._queue.length&&this._processingItems.size<
this.concurrency;)this._process(this._queue.pop())}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null)}_processResult(a,b){this._canProcessFulfillment(a)&&(this._scheduleNext(),this._deferreds.get(a.item).resolve(b))}_processError(a,b){this._canProcessFulfillment(a)&&(this._scheduleNext(),this._deferreds.get(a.item).reject(b))}_canProcessFulfillment(a){return this._deferreds.get(a.item)&&this._processingItems.get(a.item)===a?!0:!1}_process(a){if(null!=a){var b=new AbortController,
c=new t(a,b);this._processingItems.set(a,c);try{var e=this.process(a,b.signal)}catch(d){this._processError(c,d)}f.isPromiseLike(e)?(c.promise=e,e.then(d=>this._processResult(c,d),d=>this._processError(c,d))):this._processResult(c,e)}}get test(){}}l.QueueProcessor=u;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});