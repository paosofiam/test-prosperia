// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/has ../../../../core/MapUtils ../../../../core/PooledArray ../../../../core/accessorSupport/decorators/property ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../chunks/sphere ../../terrain/Intersector ../core/shaderLibrary/ShaderOutput ./ChangeSet ./Intersector ./IntersectorInterfaces ./Material ./ModelDirtyTypes ./rendererUtils ./RenderSlot ../materials/renderers/MergedRenderer".split(" "),
function(g,h,w,K,n,x,l,L,M,y,z,A,B,r,C,D,p,E,m,F,t,G){function H(a,b,d,e,c,f,k){const u=new B.OverlayTarget(f,k,b);b=v=>{v.set(p.IntersectorType.OVERLAY,u,a.dist,a.normal,a.transformation,d,e)};(null==c.results.min.drapedLayerOrder||d>=c.results.min.drapedLayerOrder)&&(null==c.results.min.dist||c.results.ground.dist<=c.results.min.dist)&&b(c.results.min);c.options.store!==p.StoreResults.MIN&&(null==c.results.max.drapedLayerOrder||d<c.results.max.drapedLayerOrder)&&(null==c.results.max.dist||c.results.ground.dist>
c.results.max.dist)&&b(c.results.max);c.options.store===p.StoreResults.ALL&&(f=D.newIntersectorResult(c.ray),b(f),c.results.all.push(f))}g.SortedRenderGeometryRenderer=class extends w{constructor(a){super(a);this._pending=new I;this._changes=new C.ChangeSet;this._materialRenderers=new Map;this._sortedMaterialRenderers=new x;this._geometries=new Map;this._hasWater=this._hasHighlights=!1}destroy(){this._changes.prune();this._materialRenderers.forEach(a=>a.destroy());this._materialRenderers.clear();
this._sortedMaterialRenderers.clear();this._geometries.clear();this._pending.clear()}get updating(){return!this._pending.empty||0<this._changes.updates.length}get rctx(){return this.rendererContext.rctx}get _materials(){return this.rendererContext.materials}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccludedDraped(){return n.someMap(this._materialRenderers,a=>0!==a.numGeometries&&
!a.queryRenderOccludedState(E.RenderOccludedFlag.Occlude))}get isEmpty(){return!this.updating&&0===this._materialRenderers.size&&0===this._geometries.size}getMaterialRenderer(a){return this._materialRenderers.get(a)}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();let a=!1;F.splitRenderGeometryChangeSetByMaterial(this._changes).forEach((b,d)=>{var e=this.getMaterialRenderer(d);!e&&0<b.adds.length&&(e=new G.MergedRenderer({material:d}),e.initializeRenderContext(this.rendererContext.pluginContext,
this._materials),this._materialRenderers.set(d,e),a=!0);e&&(e.modify(b),0===e.numGeometries&&(this._materialRenderers.delete(d),e.destroy(),a=!0))});this._changes.clear();a&&this._updateSortedMaterialRenderers();this._hasHighlights=n.someMap(this._materialRenderers,b=>(b=b.produces.get(t.RenderSlot.DRAPED_MATERIAL))?b(r.ShaderOutput.Highlight):!1);this._hasWater=n.someMap(this._materialRenderers,b=>(b=b.produces.get(t.RenderSlot.DRAPED_WATER))?b(r.ShaderOutput.Normal):!1);this.notifyChange("updating");
return!0}addGeometries(a,b){if(0!==a.length){var d=this._validateRenderGeometries(a);for(var e of d)this._geometries.set(e.id,e);e=this._pending.empty;for(const c of d)this._pending.adds.add(c);e&&this.notifyChange("updating");b===m.DirtyOperation.UPDATE&&this._notifyGraphicGeometryChanged(a)}}removeGeometries(a,b){const d=this._pending.empty,e=this._pending.adds;for(const c of a)e.has(c)?(this._pending.removed.add(c),e.delete(c)):this._pending.removed.has(c)||this._pending.removes.add(c),this._geometries.delete(c.id);
d&&!this._pending.empty&&this.notifyChange("updating");b===m.DirtyOperation.UPDATE&&this._notifyGraphicGeometryChanged(a)}modifyGeometries(a,b){const d=0===this._changes.updates.length;for(const e of a){const c=this._changes.updates.pushNew();c.renderGeometry=this._validateRenderGeometry(e);c.updateType=b}d&&0<this._changes.updates.length&&this.notifyChange("updating");switch(b){case m.DirtyState.TRANSFORMATION:case m.DirtyState.GEOMETRY:return this._notifyGraphicGeometryChanged(a);case m.DirtyState.VISIBILITY:return this._notifyGraphicVisibilityChanged(a)}}updateAnimation(a){let b=
!1;this._sortedMaterialRenderers.forAll(d=>b=!!d.updateAnimation&&d.updateAnimation(a)||b);return b}shouldRender(a){return this._sortedMaterialRenderers.some(b=>b.prepareTechnique(a))}render(a){this._sortedMaterialRenderers.forAll(b=>{const d=b.prepareTechnique(a);null!=d&&b.renderNode(a,d)})}intersect(a,b,d,e,c){this._geometries.forEach(f=>{if(!e||e(f)){this._intersectRenderGeometry(f,d,b,0,a,c);var k=this.rendererContext.longitudeCyclical;k&&(f.boundingSphere[0]-f.boundingSphere[3]<k.min&&this._intersectRenderGeometry(f,
d,b,k.range,a,c),f.boundingSphere[0]+f.boundingSphere[3]>k.max&&this._intersectRenderGeometry(f,d,b,-k.range,a,c));c++}});return c}_updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let a=0;for(const b of this._materialRenderers.values())b.drapedPriority=a++,this._sortedMaterialRenderers.push(b);this._sortedMaterialRenderers.sort((b,d)=>d.materialReference?.renderPriority===b.materialReference?.renderPriority?b.drapedPriority-d.drapedPriority:(d.materialReference?.renderPriority||
0)-(b.materialReference?.renderPriority||0))}_processAddsRemoves(){this._changes.adds.clear();this._changes.removes.clear();this._changes.adds.pushArray(Array.from(this._pending.adds));this._changes.removes.pushArray(Array.from(this._pending.removes));for(let a=0;a<this._changes.updates.length;)this._pending.has(this._changes.updates.data[a].renderGeometry)?this._changes.updates.removeUnorderedIndex(a):a++;this._pending.clear()}_intersectRenderGeometry(a,b,d,e,c,f){if(a.visible){var k=0;e+=a.transformation[12];
k=a.transformation[13];q[0]=d[0]-e;q[1]=d[1]-k;a.screenToWorldRatio=this.rendererContext.screenToWorldRatio;a.material.intersectDraped(a,null,c,q,(u,v,J)=>{H(b,J,f,a.material.renderPriority,c,a.layerUid,a.graphicUid)},b)}}_notifyGraphicGeometryChanged(a){if(null!=this.drapeSource.notifyGraphicGeometryChanged)for(const d of a)if(a=d.graphicUid,null!=a&&a!==b){this.drapeSource.notifyGraphicGeometryChanged(a);var b=a}}_notifyGraphicVisibilityChanged(a){if(null!=this.drapeSource.notifyGraphicVisibilityChanged)for(const d of a)if(a=
d.graphicUid,null!=a&&a!==b){this.drapeSource.notifyGraphicVisibilityChanged(a);var b=a}}_validateRenderGeometries(a){for(const b of a)this._validateRenderGeometry(b);return a}_validateRenderGeometry(a){null==a.localOrigin&&(a.localOrigin=this._localOriginFactory.getOrigin(A.getCenter(a.boundingSphere)));return a}get test(){}};h.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"drapeSource",void 0);h.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"updating",null);
h.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"rctx",null);h.__decorate([l.property({constructOnly:!0})],g.SortedRenderGeometryRenderer.prototype,"rendererContext",void 0);h.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"_materials",null);h.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"_localOriginFactory",null);h.__decorate([l.property({readOnly:!0})],g.SortedRenderGeometryRenderer.prototype,"isEmpty",null);h.__decorate([l.property()],
g.SortedRenderGeometryRenderer.prototype,"_materialRenderers",void 0);h.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"_geometries",void 0);g.SortedRenderGeometryRenderer=h.__decorate([y.subclass("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],g.SortedRenderGeometryRenderer);class I{constructor(){this.adds=new Set;this.removes=new Set;this.removed=new Set}get empty(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}has(a){return this.adds.has(a)||
this.removes.has(a)||this.removed.has(a)}clear(){this.adds.clear();this.removes.clear();this.removed.clear()}}const q=z.create();Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});