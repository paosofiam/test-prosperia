// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ./Content".split(" "),function(b,e,c,a,k,f,g){var d;a=d=class extends g{constructor(h){super(h);this.outFields=this.destroyer=this.creator=null;this.type="custom"}clone(){return new d({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?e.clone(this.outFields):null})}};b.__decorate([c.property()],
a.prototype,"creator",void 0);b.__decorate([c.property()],a.prototype,"destroyer",void 0);b.__decorate([c.property()],a.prototype,"outFields",void 0);b.__decorate([c.property({type:["custom"],readOnly:!0})],a.prototype,"type",void 0);return a=d=b.__decorate([f.subclass("esri.popup.content.CustomContent")],a)});