// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../TimeExtent ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/jsonUtils ./TopFilter ../../geometry/SpatialReference".split(" "),function(b,l,m,e,a,n,c,p,q,g,r,t,u){var f;const h=new e.JSONMap({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",
esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});e=new e.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});
a=f=class extends a.JSONSupport{constructor(d){super(d);this.distance=this.cacheHint=void 0;this.geometry=null;this.num=this.maxAllowableOffset=this.geometryPrecision=void 0;this.resultType=this.outSpatialReference=this.outFields=this.orderByFields=this.objectIds=null;this.returnGeometry=!1;this.start=this.returnZ=this.returnM=void 0;this.spatialRelationship="intersects";this.timeExtent=null;this.topFilter=void 0;this.units=null;this.where="1\x3d1"}writeStart(d,k){k.resultOffset=this.start;k.resultRecordCount=
this.num||10}clone(){return new f(n.clone({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,
timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"cacheHint",void 0);b.__decorate([c.property({type:Number,json:{write:{overridePolicy(d){return{enabled:0<d}}}}})],a.prototype,"distance",void 0);b.__decorate([c.property({types:l.geometryTypes,json:{read:r.fromJSON,write:!0}})],a.prototype,"geometry",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecision",
void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"maxAllowableOffset",void 0);b.__decorate([c.property({type:Number,json:{read:{source:"resultRecordCount"}}})],a.prototype,"num",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"objectIds",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"orderByFields",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"outFields",void 0);b.__decorate([c.property({type:u,
json:{read:{source:"outSR"},write:{target:"outSR"}}})],a.prototype,"outSpatialReference",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"resultType",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"returnGeometry",void 0);b.__decorate([c.property({type:Boolean,json:{write:{overridePolicy(d){return{enabled:d}}}}})],a.prototype,"returnM",void 0);b.__decorate([c.property({type:Boolean,json:{write:{overridePolicy(d){return{enabled:d}}}}})],a.prototype,"returnZ",
void 0);b.__decorate([c.property({type:Number,json:{read:{source:"resultOffset"}}})],a.prototype,"start",void 0);b.__decorate([g.writer("start"),g.writer("num")],a.prototype,"writeStart",null);b.__decorate([c.property({type:String,json:{read:{source:"spatialRel",reader:h.read},write:{target:"spatialRel",writer:h.write}}})],a.prototype,"spatialRelationship",void 0);b.__decorate([c.property({type:m,json:{write:!0}})],a.prototype,"timeExtent",void 0);b.__decorate([c.property({type:t,json:{write:!0}})],
a.prototype,"topFilter",void 0);b.__decorate([c.property({type:String,json:{read:e.read,write:{writer:e.write,overridePolicy(d){return{enabled:null!=d&&null!=this.distance&&0<this.distance}}}}})],a.prototype,"units",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);a=f=b.__decorate([q.subclass("esri.rest.support.TopFeaturesQuery")],a);a.from=p.ensureType(a);return a});