// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./VoxelFormat".split(" "),function(b,a,c,f,g,h,e,d){a=class extends a.JSONSupport{constructor(){super(...arguments);this.id=null;this.description="";this.renderingFormat=this.originalFormat=this.name=null;this.unit="";this.volumeId=0;this.type=null}};b.__decorate([c.property({type:Number,json:{write:{enabled:!0,
isRequired:!0}}})],a.prototype,"id",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([c.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"name",void 0);b.__decorate([c.property({type:d,json:{write:!0}})],a.prototype,"originalFormat",void 0);b.__decorate([c.property({type:d,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"renderingFormat",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],
a.prototype,"unit",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"volumeId",void 0);b.__decorate([c.property({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],a.prototype,"type",void 0);return a=b.__decorate([e.subclass("esri.layers.voxel.VoxelVariable")],a)});