// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Collection ../../core/collectionUtils ../../core/Evented ../../core/Loadable ../../core/Logger ../../core/Promise ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/projection ../../geometry/support/aaBoundingRect ../../geometry/support/intersectsBase ../../geometry/support/spatialReferenceUtils ../graphics/data/BoundsStore ./ImageElement ./MediaElementBase ./MediaElementView ./VideoElement ../../geometry/SpatialReference".split(" "),
function(g,f,m,n,p,q,r,t,u,v,h,I,J,w,x,k,y,z,A,B,C,D,E,F,G){const l=m.ofType({key:"type",defaultKeyValue:"image",base:D,typeMap:{image:C,video:F}});f=class extends q.LoadableMixin(t.EsriPromiseMixin(p.EventedAccessor)){constructor(a){super(a);this._index=new B.BoundsStore;this._elementViewsMap=new Map;this._elementsIndexes=new Map;this._elementsChangedHandler=e=>{for(var d of e.removed){const b=this._elementViewsMap.get(d);this._elementViewsMap.delete(d);this._index.delete(b);this.removeHandles(b);
b.destroy();this.notifyChange("fullExtent")}({spatialReference:d}=this);for(const b of e.added){if(this._elementViewsMap.get(b))continue;const c=new E.MediaElementView({spatialReference:d,element:b});this._elementViewsMap.set(b,c);e=v.watch(()=>c.coords,()=>this._updateIndexForElement(c,!1));this._updateIndexForElement(c,!0);this.addHandles(e,c)}this._elementsIndexes.clear();this.elements.forEach((b,c)=>this._elementsIndexes.set(b,c));this.emit("refresh")};this.elements=new l}async load(a){u.throwIfAborted(a);
this.spatialReference||(a=this.elements.find(e=>null!=e.georeference?.coords),this._set("spatialReference",a?a.georeference.coords.spatialReference:G.WGS84));this._elementsChangedHandler({added:this.elements.items,removed:[]});this.addHandles(this.elements.on("change",this._elementsChangedHandler));return this}destroy(){this._index.clear();this._elementViewsMap.clear();this._elementsIndexes.clear()}set elements(a){this._set("elements",n.referenceSetter(a,this._get("elements"),l))}get fullExtent(){if("not-loaded"===
this.loadStatus)return null;const a=this._index.fullBounds;return null==a?null:new x({xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3],spatialReference:this.spatialReference})}set spatialReference(a){"not-loaded"!==this.loadStatus?r.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded."):this._set("spatialReference",a)}async queryElements(a,e){await this.load();await k.initializeProjection(a.spatialReference,this.spatialReference,null,e);a=A.equals(a.spatialReference,
this.spatialReference)?a:k.project(a,this.spatialReference);if(!a)return[];a=a.normalize();const d=[];for(const b of a)this._index.forEachInBounds(y.fromExtent(b),({normalizedCoords:c,element:H})=>{null!=c&&z.extentIntersectsPolygon(b,c)&&d.push(H)});d.sort((b,c)=>this._elementsIndexes.get(b)-this._elementsIndexes.get(c));return d}hasElement(a){return this.elements.includes(a)}_updateIndexForElement(a,e){const d=a.normalizedBounds,b=this._index.has(a),c=null!=d;this._index.delete(a);c&&this._index.set(a,
d);this.notifyChange("fullExtent");e||(b!==c?this.emit("refresh"):this.emit("change",{element:a.element}))}};g.__decorate([h.property()],f.prototype,"elements",null);g.__decorate([h.property({readOnly:!0})],f.prototype,"fullExtent",null);g.__decorate([h.property()],f.prototype,"spatialReference",null);return f=g.__decorate([w.subclass("esri.layers.support.LocalMediaElementSource")],f)});