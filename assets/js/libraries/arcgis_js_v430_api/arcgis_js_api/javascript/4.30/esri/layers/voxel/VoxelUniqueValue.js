// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,d,a,f,c,e,h,k,g){a=class extends a.ClonableMixin(f.JSONSupport){constructor(){super(...arguments);this.color=d.fromArray([0,0,0,0]);this.value=0;this.enabled=!0;this.label=""}};b.__decorate([c.property({type:d,json:{type:[e.Integer],
write:{enabled:!0,isRequired:!0}}})],a.prototype,"color",void 0);b.__decorate([c.property({type:e.Integer,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"value",void 0);b.__decorate([c.property({type:Boolean,json:{default:!0,write:!0}})],a.prototype,"enabled",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);return a=b.__decorate([g.subclass("esri.layers.voxel.VoxelUniqueValue")],a)});