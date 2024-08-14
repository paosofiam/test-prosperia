// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures ../../../../layers/graphics/OptimizedFeature ../../../../layers/graphics/OptimizedGeometry ../../../../layers/graphics/data/optimizedFeatureQueryEngineAdapter".split(" "),
function(c,e,m,n,f,w,x,y,p,q,r,t,u,v,h){const k=r.create();c.Graphics3DFeatureStore=class extends m{constructor(g){super(g);this.events=new n;this.objectIdField=this.hasM=this.hasZ=null;this.featureAdapter={getAttribute(a,b){return"graphic"in a?a.graphic.attributes[b]:h.optimizedFeatureQueryEngineAdapter.getAttribute(a,b)},getAttributes(a){return"graphic"in a?a.graphic.attributes:h.optimizedFeatureQueryEngineAdapter.getAttributes(a)},getObjectId:a=>"graphic"in a?t.getObjectId(a.graphic,this.objectIdField)??
void 0:h.optimizedFeatureQueryEngineAdapter.getObjectId(a),getGeometry:a=>"graphic"in a?a.getAsOptimizedGeometry(this.hasZ,this.hasM):h.optimizedFeatureQueryEngineAdapter.getGeometry(a),getCentroid:(a,b)=>{if("graphic"in a){let d=null;null!=a.centroid?d=a.centroid:"point"===a.graphic.geometry.type&&q.projectPoint(a.graphic.geometry,l,this.viewSpatialReference)&&(d=l);a=Array(2+(b.hasZ?1:0)+(b.hasM?1:0));null==d?(a[0]=0,a[1]=0,a[2]=0,a[3]=0):(a[0]=d.x,a[1]=d.y,b.hasZ&&(a[2]=d.hasZ?d.z:0),b.hasM&&(a[b.hasZ?
3:2]=d.hasM?d.m:0));return new v([],a)}return h.optimizedFeatureQueryEngineAdapter.getCentroid(a,b)},cloneWithGeometry:(a,b)=>"graphic"in a?new u.OptimizedFeature(b,this.featureAdapter.getAttributes(a),null,this.featureAdapter.getObjectId(a)):h.optimizedFeatureQueryEngineAdapter.cloneWithGeometry(a,b)}}forEachInBounds(g,a){this.getSpatialIndex().forEachInBounds(g,a)}forEachBounds(g,a){const b=this.getSpatialIndex();for(const d of g)g=this.featureAdapter.getObjectId(d),null!=b.getBounds(g,k)&&a(k)}};
e.__decorate([f.property({constructOnly:!0})],c.Graphics3DFeatureStore.prototype,"getSpatialIndex",void 0);e.__decorate([f.property({constructOnly:!0})],c.Graphics3DFeatureStore.prototype,"forEach",void 0);e.__decorate([f.property({constructOnly:!0})],c.Graphics3DFeatureStore.prototype,"hasZ",void 0);e.__decorate([f.property({constructOnly:!0})],c.Graphics3DFeatureStore.prototype,"hasM",void 0);e.__decorate([f.property({constructOnly:!0})],c.Graphics3DFeatureStore.prototype,"objectIdField",void 0);
e.__decorate([f.property({constructOnly:!0})],c.Graphics3DFeatureStore.prototype,"viewSpatialReference",void 0);e.__decorate([f.property({constructOnly:!0})],c.Graphics3DFeatureStore.prototype,"featureSpatialReference",void 0);c.Graphics3DFeatureStore=e.__decorate([p.subclass("esri.views.3d.layers.graphics.Graphics3DFeatureStore")],c.Graphics3DFeatureStore);const l={type:"point",x:0,y:0,hasZ:!1,hasM:!1,spatialReference:null};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});