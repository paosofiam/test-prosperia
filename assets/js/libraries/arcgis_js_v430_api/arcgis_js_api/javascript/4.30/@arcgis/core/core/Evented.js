/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"./Accessor.js";import{h as s,m as r}from"../chunks/handleUtils.js";import{subclass as i}from"./accessorSupport/decorators/subclass.js";import"./lang.js";import"./Handles.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/maybe.js";import"./accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"./Error.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"./scheduling.js";import"./promiseUtils.js";class n{constructor(){this._emitter=new n.EventEmitter(this)}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}}!function(o){class c{constructor(t=null){this._target=t,this._listenersMap=null}clear(){this._listenersMap?.clear(),this._listenersMap=null}destroy(){this.clear()}emit(t,e){let s=this._listenersMap?.get(t);if(!s)return!1;const r=this._target||this;let i=!1;for(const t of s.slice()){const s="deref"in t?t.deref():t;s?s?.call(r,e):i=!0}return i&&(s=s.filter((t=>!("deref"in t)||null!=t.deref())),this._listenersMap.set(t,s)),s.length>0}on(t,e){if(Array.isArray(t)){const r=t.map((t=>this.on(t,e)));return s(r)}if(t.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap??=new Map;const i=this._listenersMap.get(t)||[];return i.push(e),this._listenersMap.set(t,i),r((()=>{const s=this._listenersMap?.get(t),r=s?.indexOf(e)??-1;r>=0&&s.splice(r,1)}))}once(t,e){const s=this.on(t,(t=>{s.remove();const r="deref"in e?e.deref():e;r?.call(null,t)}));return s}hasEventListener(t){const e=this._listenersMap?.get(t);return null!=e&&e.length>0}}o.EventEmitter=c,o.EventedMixin=e=>{let s=class extends e{constructor(){super(...arguments),this._emitter=new c}destroy(){this._emitter.clear()}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};return s=t([i("esri.core.Evented")],s),s};let h=class extends e{constructor(){super(...arguments),this._emitter=new n.EventEmitter(this)}destroy(){this._emitter.clear()}emit(t,e){return this._emitter.emit(t,e)}on(t,e){return this._emitter.on(t,e)}once(t,e){return this._emitter.once(t,e)}hasEventListener(t){return this._emitter.hasEventListener(t)}};h=t([i("esri.core.Evented.EventedAccessor")],h),o.EventedAccessor=h}(n||(n={}));const o=n;export{o as default};
