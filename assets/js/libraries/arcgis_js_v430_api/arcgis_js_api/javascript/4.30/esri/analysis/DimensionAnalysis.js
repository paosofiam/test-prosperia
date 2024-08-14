// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ./Analysis ./DimensionSimpleStyle ./LengthDimension ../core/Collection ../core/collectionUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../geometry/Extent ../geometry/projection".split(" "),function(e,b,k,p,q,l,m,f,u,v,w,r,n,t){const h=q.ofType(p);b=class extends b{constructor(a){super(a);this.type="dimension";this.style=new k;this.extent=null}initialize(){this.addHandles(m.watch(()=>
this._computeExtent(),a=>{null==a?.pending&&this._set("extent",null!=a?a.extent:null)},m.syncAndInitial))}get dimensions(){return this._get("dimensions")||new h}set dimensions(a){this._set("dimensions",l.referenceSetter(a,this.dimensions,h))}get spatialReference(){for(const a of this.dimensions){if(null!=a.startPoint)return a.startPoint.spatialReference;if(null!=a.endPoint)return a.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((a,c)=>{a.push(c.startPoint,
c.endPoint);return a},[])}async waitComputeExtent(){const a=this._computeExtent();return null!=a?a.pending:Promise.resolve()}_computeExtent(){var a=this.spatialReference;if(null==a)return{pending:null,extent:null};var c=[];for(const d of this.dimensions)null!=d.startPoint&&c.push(d.startPoint),null!=d.endPoint&&c.push(d.endPoint);a=t.projectOrLoadMany(c,a);if(null!=a.pending)return{pending:a.pending,extent:null};c=null;null!=a.geometries&&(c=a.geometries.reduce((d,g)=>null==d?null!=g?n.fromPoint(g):
null:null!=g?d.union(n.fromPoint(g)):d,null));return{pending:null,extent:c}}clear(){this.dimensions.removeAll()}};e.__decorate([f.property({type:["dimension"]})],b.prototype,"type",void 0);e.__decorate([f.property({cast:l.castForReferenceSetter,type:h,nonNullable:!0})],b.prototype,"dimensions",null);e.__decorate([f.property({readOnly:!0})],b.prototype,"spatialReference",null);e.__decorate([f.property({types:{key:"type",base:null,typeMap:{simple:k}},nonNullable:!0})],b.prototype,"style",void 0);e.__decorate([f.property({value:null,
readOnly:!0})],b.prototype,"extent",void 0);e.__decorate([f.property({readOnly:!0})],b.prototype,"requiredPropertiesForEditing",null);return b=e.__decorate([r.subclass("esri.analysis.DimensionAnalysis")],b)});