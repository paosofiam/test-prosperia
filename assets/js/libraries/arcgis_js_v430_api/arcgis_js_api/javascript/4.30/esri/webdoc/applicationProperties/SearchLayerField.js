// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../../layers/support/fieldType".split(" "),function(b,a,d,k,l,m,e,f,g){var c;a=c=class extends a.JSONSupport{constructor(h){super(h);this.exactMatch=!1;this.type=this.name=null}clone(){return new c({exactMatch:this.exactMatch,type:this.type,name:this.name})}};
b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"exactMatch",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([e.enumeration(g.kebabDict)],a.prototype,"type",void 0);return a=c=b.__decorate([f.subclass("esri.webdoc.applicationProperties.SearchLayerField")],a)});