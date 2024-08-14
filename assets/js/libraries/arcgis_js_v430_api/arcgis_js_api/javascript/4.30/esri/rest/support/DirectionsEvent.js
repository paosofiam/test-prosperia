// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../route/utils ./DirectionsString ../../geometry/Point".split(" "),function(b,a,h,c,n,p,q,f,k,l,m,g){a=class extends h.JSONSupport{constructor(e){super(e);this.strings=this.geometry=this.arriveTimeOffset=this.arriveTime=null}readArriveTimeOffset(e,
d){return l.getTimezoneOffset(d.ETA,d.arriveTimeUTC)}readGeometry(e,d){return g.fromJSON(d.point)}};b.__decorate([c.property({type:Date,json:{read:{source:"arriveTimeUTC"}}})],a.prototype,"arriveTime",void 0);b.__decorate([c.property()],a.prototype,"arriveTimeOffset",void 0);b.__decorate([f.reader("arriveTimeOffset",["arriveTimeUTC","ETA"])],a.prototype,"readArriveTimeOffset",null);b.__decorate([c.property({type:g})],a.prototype,"geometry",void 0);b.__decorate([f.reader("geometry",["point"])],a.prototype,
"readGeometry",null);b.__decorate([c.property({type:[m]})],a.prototype,"strings",void 0);return a=b.__decorate([k.subclass("esri.rest.support.DirectionsEvent")],a)});