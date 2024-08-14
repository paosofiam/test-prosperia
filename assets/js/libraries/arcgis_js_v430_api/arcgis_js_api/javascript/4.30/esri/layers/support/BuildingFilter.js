// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/uuid ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ./BuildingFilterAuthoringInfo ./BuildingFilterAuthoringInfoCheckbox ./BuildingFilterBlock".split(" "),function(b,d,a,f,k,c,p,q,l,m,g,n){var e;d=d.ofType(n);a=e=class extends a.JSONSupport{constructor(){super(...arguments);this.filterBlocks=this.description=null;this.id=
k.generateUUID();this.name=null}clone(){return new e({description:this.description,filterBlocks:f.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:f.clone(this.filterAuthoringInfo)})}};b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([c.property({type:d,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"filterBlocks",void 0);b.__decorate([c.property({types:{key:"type",base:m,typeMap:{checkbox:g}},json:{read:h=>{switch(h?.type){case "checkbox":return g.fromJSON(h);
default:return null}},write:!0}})],a.prototype,"filterAuthoringInfo",void 0);b.__decorate([c.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"id",void 0);b.__decorate([c.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"name",void 0);return a=e=b.__decorate([l.subclass("esri.layers.support.BuildingFilter")],a)});