// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ./Analysis ../core/arrayUtils ../core/Logger ../core/unitUtils ../core/accessorSupport/decorators/property ../core/has ../core/accessorSupport/decorators/subclass ../geometry/Polygon".split(" "),function(c,b,e,f,g,d,l,h,k){b=class extends b{constructor(a){super(a);this.type="area-measurement";this.unit=null}set geometry(a){null==a?this._set("geometry",null):(1<a.rings.length&&f.getLogger(this).warn("Measuring polygons with multiple rings is not supported."),this._set("geometry",
a.clone()))}get requiredPropertiesForEditing(){if(null!=this.geometry&&1===this.geometry.rings.length){const a=this.geometry.rings[0];if(2>=a.length||!e.equals(a[0],a[a.length-1]))return[null]}return[this.geometry]}clear(){this.geometry=null}};c.__decorate([d.property({type:["area-measurement"]})],b.prototype,"type",void 0);c.__decorate([d.property({value:null,type:k})],b.prototype,"geometry",null);c.__decorate([d.property({type:g.measurementAreaUnits,value:null})],b.prototype,"unit",void 0);c.__decorate([d.property({readOnly:!0})],
b.prototype,"requiredPropertiesForEditing",null);return b=c.__decorate([h.subclass("esri.analysis.AreaMeasurementAnalysis")],b)});