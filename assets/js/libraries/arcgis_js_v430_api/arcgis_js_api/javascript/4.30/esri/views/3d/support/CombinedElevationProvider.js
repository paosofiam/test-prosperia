// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Evented ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/SpatialReference ../../../geometry/support/spatialReferenceUtils ../layers/graphics/ElevationQuery ./ElevationRange".split(" "),function(g,m,t,u,v,w,p,A,B,C,x,y,q,z,r){function k(a,b,c,e,
f,d,h){for(const n of b)b=n.getElevation(c,e,f,d,h),null!=b&&(a=null!=a?Math.max(b,a):b);return a}g.CombinedElevationProvider=class extends u.EventedMixin(t){get spatialReference(){return this.view?.basemapTerrain?.spatialReference}constructor(a){super(a);this._im=[];this._ground=[];this._scene=[];this.lastElevationQuery=null;this._cacheEnabled=!1}destroy(){this._cachedQuery=v.destroyMaybe(this._cachedQuery)}enableCache(a){a||(this.lastElevationQuery=null);this._cacheEnabled=a}getElevation(a,b,c,
e,f){if(this._cacheEnabled&&null!=this.lastElevationQuery){var d=this.lastElevationQuery;if(a===d.x&&b===d.y&&c===d.z&&q.equals(e,d.spatialReference)&&f===d.queryContext)return d.result}d=k(null,this._im,a,b,c,e,f);null==d&&(d=k(d,this._ground,a,b,c,e,f));"scene"===f&&(d=k(d,this._scene,a,b,c,e,f));this._cacheEnabled&&(this.lastElevationQuery={x:a,y:b,z:c,spatialReference:e,queryContext:f,result:d});return d}getSphereElevationBounds(a,b,c){function e(d){for(const h of d)h.getSphereElevationBounds&&
(d=h.getSphereElevationBounds(a,b,c),null!=d&&f.expandElevationRangeValues(d.elevationRangeMin,d.elevationRangeMax))}const f=new r.ElevationRange;e(this._ground);e(this._im);"scene"===c&&e(this._scene);return f}getRootElevationBounds(){const a=new r.ElevationRange;for(const b of[this._im,this._ground,this._scene])b.forEach(c=>{c.getRootElevationBounds&&(c=c.getRootElevationBounds(),null!=c&&a.expandElevationRangeValues(c.elevationRangeMin,c.elevationRangeMax))});return a}async queryElevation(a,b,
c,e,f,d=null,h=0){const n=this._getElevationQuery(e);try{const l=await n.queryElevation(a,b,d,h);return"scene"===f?k(l,this._scene,a,b,c,e,f):l}catch(l){return w.throwIfAbortError(l),this.getElevation(a,b,c,e,f)}}register(a,b){this.addHandles(b.on("elevation-change",c=>this.emit("elevation-change",c)),b);this._providersFromContext(a).push(b)}unregister(a){this.removeHandles(a);for(const b of[this._im,this._ground,this._scene]){const c=b.indexOf(a);-1<c&&b.splice(c,1)}}_providersFromContext(a){switch(a){case "ground":return this._ground;
case "im":return this._im;case "scene":return this._scene}}_getElevationQuery(a=this.view.spatialReference){const b=this._cachedQuery;if(null!=b&&q.equals(a,b.spatialReference))return b;b?.destroy({completeTasks:!0});const {wkid:c,wkt:e,wkt2:f,latestWkid:d}=a;return this._cachedQuery=a=new z.ElevationQuery(this.view.resourceController.scheduler,new y({wkid:c,wkt:e,wkt2:f,latestWkid:d}),()=>this.view.map?.ground,{maximumAutoTileRequests:4})}};m.__decorate([p.property({constructOnly:!0})],g.CombinedElevationProvider.prototype,
"view",void 0);m.__decorate([p.property()],g.CombinedElevationProvider.prototype,"spatialReference",null);g.CombinedElevationProvider=m.__decorate([x.subclass("esri.views.3d.support.CombinedElevationProvider")],g.CombinedElevationProvider);Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});