// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass ./PointSizeAlgorithm".split(" "),function(b,d,a,h,k,e,f,g){var c;a=c=class extends g{constructor(){super(...arguments);this.type="splat";this.scaleFactor=1}clone(){return new c({scaleFactor:this.scaleFactor})}};b.__decorate([e.enumeration({pointCloudSplatAlgorithm:"splat"})],
a.prototype,"type",void 0);b.__decorate([d.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],a.prototype,"scaleFactor",void 0);return a=c=b.__decorate([f.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],a)});