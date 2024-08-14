// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../TimeExtent ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ../../rest/support/Query".split(" "),function(c,r,t,e,a,f,d,g,x,u,v){var h;g=new e.JSONMap({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",
esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});e=new e.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});a=h=class extends a.JSONSupport{constructor(b){super(b);this.geometry=this.where=null;this.spatialRelationship=
"intersects";this.distance=void 0;this.timeExtent=this.units=this.objectIds=null}createQuery(b={}){const {where:k,geometry:l,spatialRelationship:m,timeExtent:n,objectIds:p,units:q,distance:w}=this;return new v({geometry:f.clone(l),objectIds:f.clone(p),spatialRelationship:m,timeExtent:f.clone(n),where:k,units:q,distance:w,...b})}clone(){const {where:b,geometry:k,spatialRelationship:l,timeExtent:m,objectIds:n,units:p,distance:q}=this;return new h({geometry:f.clone(k),objectIds:f.clone(n),spatialRelationship:l,
timeExtent:f.clone(m),where:b,units:p,distance:q})}};c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);c.__decorate([d.property({types:r.geometryTypes,json:{write:!0}})],a.prototype,"geometry",void 0);c.__decorate([d.property({type:g.apiValues,json:{name:"spatialRel",read:{reader:g.read},write:{allowNull:!1,writer:g.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],a.prototype,"spatialRelationship",void 0);c.__decorate([d.property({type:Number,json:{write:{overridePolicy(b){return{enabled:null!=
b&&null!=this.geometry}}}}})],a.prototype,"distance",void 0);c.__decorate([d.property({type:[Number],json:{write:!0}})],a.prototype,"objectIds",void 0);c.__decorate([d.property({type:e.apiValues,json:{read:e.read,write:{writer:e.write,overridePolicy(b){return{enabled:null!=b&&null!=this.geometry}}}}})],a.prototype,"units",void 0);c.__decorate([d.property({type:t,json:{write:!0}})],a.prototype,"timeExtent",void 0);return a=h=c.__decorate([u.subclass("esri.layers.support.FeatureFilter")],a)});