// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/a11yUtils ../../core/Accessor ../../core/Error ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../ViewAnimation ./viewpointUtils".split(" "),function(f,h,l,m,k,n,g,p,q,B,C,r,t,u){f.GoToManager=class extends m{constructor(a){super(a);this._gotoTask=null}destroy(){this._gotoTask=null}async goTo(a,b){if(a){var d=
new t;this.view.animation=d;await p.whenOnce(()=>this.view.ready,b);var c={...b,animate:b?.animate??!l.prefersReducedMotion(),animationMode:b?.animationMode??"auto"},{extent:e,spatialReference:v,size:w,viewpoint:x,constraints:y,padding:z,allLayerViews:A}=this.view;a=u.create(a,{extent:e,spatialReference:v,size:w,viewpoint:x,constraints:y,padding:z,allLayerViews:A,pickClosestTarget:b?.pickClosestTarget??!0});d?.update(a);this._gotoTask={};return c.animate?this._gotoAnimated(a,c):this._gotoImmediate(a,
c)}n.getLogger(this).error("#goTo()","target cannot be null or undefined")}_gotoImmediate(a,b){const d=this._gotoTask,c=this.view.animation;a=a.then(e=>{g.throwIfAborted(b);if(d!==this._gotoTask)throw new k("view:goto-interrupted","Goto was interrupted");this.view.viewpoint=c.target=e;c.finish()});return this._cancellableGoTo(d,c,a,b)}_gotoAnimated(a,b){const d=this._gotoTask,c=this.view.animation;if(!c)return Promise.resolve();a=a.then(e=>{g.throwIfAborted(b);if(d!==this._gotoTask)throw new k("view:goto-interrupted",
"Goto was interrupted");c.update(e);this.view.animationManager.animate(c,this.view.viewpoint,b);return c.when().then(()=>{},()=>{})});return this._cancellableGoTo(d,c,a,b)}_cancellableGoTo(a,b,d,c){const e=()=>a===this._gotoTask;return g.whenOrAbort(d,c).finally(()=>{e()&&(b.done||b.stop())})}};h.__decorate([q.property({constructOnly:!0})],f.GoToManager.prototype,"view",void 0);f.GoToManager=h.__decorate([r.subclass("esri.views.2d.GoToManager")],f.GoToManager);Object.defineProperty(f,Symbol.toStringTag,
{value:"Module"})});