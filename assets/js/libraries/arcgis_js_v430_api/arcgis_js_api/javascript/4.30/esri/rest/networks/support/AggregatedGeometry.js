// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/Multipoint ../../../geometry/Polygon ../../../geometry/Polyline".split(" "),function(b,a,c,k,l,m,d,e,f,g){a=class extends a.JSONSupport{constructor(h){super(h);this.polygon=this.multipoint=this.line=null}};b.__decorate([c.property({type:g,json:{write:!0},readOnly:!0})],
a.prototype,"line",void 0);b.__decorate([c.property({type:e,json:{read:{source:"point"},write:{target:"point"}},readOnly:!0})],a.prototype,"multipoint",void 0);b.__decorate([c.property({type:f,json:{write:!0},readOnly:!0})],a.prototype,"polygon",void 0);return a=b.__decorate([d.subclass("esri.rest.networks.support.AggregatedGeometry")],a)});