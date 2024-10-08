// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../geometry ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ../../../networks/support/typeUtils ../../../geometry/Extent ../../../geometry/SpatialReference".split(" "),function(b,a,g,d,h,r,t,k,l,e,m,n){var f;a=f=class extends g.JSONSupport{static from(c){return h.ensureClass(f,
c)}constructor(c){super(c);this.outSpatialReference=this.validationSet=this.validateArea=this.validationType=this.sessionID=this.gdbVersion=null}writeOutSR(c,p,q){null!=c&&({wkid:c}=c,p[q]=JSON.stringify({wkid:c}))}};b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"sessionID",void 0);b.__decorate([d.property({type:e.validationTypeKebabDict.apiValues,json:{type:e.validationTypeKebabDict.jsonValues,
read:e.validationTypeKebabDict.read,write:e.validationTypeKebabDict.write}})],a.prototype,"validationType",void 0);b.__decorate([d.property({type:m,json:{write:!0}})],a.prototype,"validateArea",void 0);b.__decorate([d.property({type:[Object],json:{write:!0}})],a.prototype,"validationSet",void 0);b.__decorate([d.property({type:n,json:{write:{allowNull:!0,target:"outSR"}}})],a.prototype,"outSpatialReference",void 0);b.__decorate([l.writer("outSpatialReference")],a.prototype,"writeOutSR",null);return a=
f=b.__decorate([k.subclass("esri.rest.networks.support.ValidateNetworkTopologyParameters")],a)});