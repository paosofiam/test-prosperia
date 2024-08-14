/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{c as n}from"../chunks/asyncUtils.js";import s from"./Collection.js";import{i as o,o as t,isAborted as e,createAbortError as r,onAbort as i,ignoreAbortErrors as c}from"./promiseUtils.js";import{h as u,d as m,m as l}from"../chunks/handleUtils.js";import{r as p}from"../chunks/maybe.js";import{w as f}from"./Accessor.js";export{a as autorun}from"./Accessor.js";import"../chunks/tslib.es6.js";import"./accessorSupport/decorators/property.js";import"../chunks/Logger.js";import"../config.js";import"./lang.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"./Error.js";import"./accessorSupport/decorators/subclass.js";import"../chunks/tracking.js";import"./Evented.js";import"./scheduling.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/ObservableBase.js";import"./Handles.js";function d(n,s,o={}){return h(n,s,o,b)}function j(n,s,o={}){return h(n,s,o,w)}function h(n,s,o={},t){let e=null;const r=o.once?(n,o)=>{t(n)&&(p(e),s(n,o))}:(n,o)=>{t(n)&&s(n,o)};if(e=f(n,r,o.sync,o.equals),o.initial){const s=n();r(s,s)}return e}function y(n,s,e,r={}){let i=null,c=null,a=null;function u(){i&&c&&(c.remove(),r.onListenerRemove?.(i),i=null,c=null)}function m(n){r.once&&r.once&&p(a),e(n)}const f=d(n,((n,e)=>{u(),o(n)&&(i=n,c=t(n,s,m),r.onListenerAdd?.(n))}),{sync:r.sync,initial:!0});return a=l((()=>{f.remove(),u()})),a}function v(n,s){return g(n,null,s)}function k(n,s){return g(n,w,s)}function g(n,s,o){if(e(o))return Promise.reject(r());const t=n();if(s?.(t))return Promise.resolve(t);let c=null;function a(){c=p(c)}return new Promise(((t,e)=>{c=u([i(o,(()=>{a(),e(r())})),h(n,(n=>{a(),t(n)}),{sync:!1,once:!0},s??b)])}))}function b(n){return!0}function w(n){return!!n}function L(n,s,o={}){let t=!1;const e=d(n,((n,o)=>{t||s(n,o)}),o);return{remove(){e.remove()},pause(){t=!0},resume(){t=!1}}}function A(n,o){const t=new s,e=y(n,"after-splice",(({added:n,start:s,deleteCount:e})=>{const r=t.splice(s,e);for(const n of r)n.remove();if(n?.length){const e=n.map(o);t.addMany(e,s)}}),{sync:!0,onListenerRemove:()=>t.drain((n=>n.remove())),onListenerAdd:n=>t.addMany(n.items.map(o))});return t.addHandles(e),t}function M(o,t){const i=new s,a=A(o,(s=>n((async n=>{const o=await t(s,n);if(e(n))throw o.remove(),r();return o})))),u=()=>null,l=async n=>{const s=await n.promise,o=a.indexOf(n);o<0||i.splice(o,1,s)};i.addMany(a.items.map(u));for(const n of a)c(l(n));const p=a.on("after-splice",(({added:n,start:s,deleteCount:o})=>{const t=i.splice(s,o);for(const n of t)n?.remove();if(n?.length){i.addMany(n.map(u),s);for(const s of n)c(l(s))}}));return i.addHandles([m(a),p]),i}const x={sync:!0},C={initial:!0},H={sync:!0,initial:!0};export{C as initial,A as mapCollection,M as mapCollectionAsync,y as on,v as once,L as pausable,x as sync,H as syncAndInitial,d as watch,j as when,k as whenOnce};
