// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(b,d,a,e,c,k,l,m,f,g){a=class extends a.ClonableMixin(e.JSONSupport){constructor(h){super(h);this.where=this.geometry=null}};b.__decorate([c.property({types:d.geometryTypes,json:{read:g.fromJSON,write:!0}})],a.prototype,
"geometry",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);return a=b.__decorate([f.subclass("esri.webdoc.geotriggersInfo.FeatureFilter")],a)});