// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){class e{constructor(a){this._callbacks=a;this._currentCount=0;this._callbacks.condition||(this._callbacks.condition=()=>!0)}handle(a){const d=a.data,b=d.pointers.size;switch(d.action){case "start":this._currentCount=b;this._emitStart(a);break;case "added":this._emitEnd(this._previousEvent);this._currentCount=b;this._emitStart(a);break;case "update":this._emitUpdate(a);break;case "removed":this._startEvent&&this._emitEnd(this._previousEvent);this._currentCount=b;this._emitStart(a);
break;case "end":this._emitEnd(a),this._currentCount=0}this._previousEvent=a}_emitStart(a){this._startEvent=a;this._callbacks.condition?.(this._currentCount,a)&&this._callbacks.start(this._currentCount,a,this._startEvent)}_emitUpdate(a){this._callbacks.condition?.(this._currentCount,a)&&this._callbacks.update(this._currentCount,a,this._startEvent)}_emitEnd(a){this._callbacks.condition?.(this._currentCount,a)&&this._callbacks.end(this._currentCount,a,this._startEvent);this._startEvent=null}}c.DragEventSeparator=
e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});