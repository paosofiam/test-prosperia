// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./ExpressionInfo".split(" "),function(c,a,b,e,d,k,l,m,f,g){b=new b.JSONMap({deviceLocation:"device-location"});a=class extends a.ClonableMixin(e.JSONSupport){constructor(h){super(h);this.filterExpression=null;this.type="device-location"}};c.__decorate([d.property({type:g,
json:{write:!0}})],a.prototype,"filterExpression",void 0);c.__decorate([d.property({type:b.apiValues,readOnly:!0,json:{type:b.jsonValues,read:b.read,write:b.write}})],a.prototype,"type",void 0);return a=c.__decorate([f.subclass("esri.webdoc.geotriggersInfo.DeviceLocationFeed")],a)});