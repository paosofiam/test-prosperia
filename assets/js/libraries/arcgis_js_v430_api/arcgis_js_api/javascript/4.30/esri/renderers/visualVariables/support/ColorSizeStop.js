// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Color ../../../core/JSONSupport ../../../core/screenUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer".split(" "),function(b,f,a,g,c,h,p,q,k,l){var e;a=e=class extends a.JSONSupport{constructor(d){super(d);this.value=this.size=this.label=this.color=null}writeValue(d,m,n){m[n]=
null==d?0:d}clone(){return new e({color:this.color,label:this.label,size:this.size,value:this.value})}};b.__decorate([c.property({type:f,json:{type:[h.Integer],write:!0}})],a.prototype,"color",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([c.property({type:Number,cast:g.toPt,json:{write:!0}})],a.prototype,"size",void 0);b.__decorate([c.property({type:Number,json:{write:{allowNull:!0}}})],a.prototype,"value",void 0);b.__decorate([l.writer("value")],
a.prototype,"writeValue",null);return a=e=b.__decorate([k.subclass("esri.renderers.visualVariables.support.ColorSizeStop")],a)});