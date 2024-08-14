// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3DLayer ./support/ObjectSymbol3DLayerResource ./support/Symbol3DAnchorPosition3D ./support/Symbol3DMaterial".split(" "),function(b,c,a,p,q,f,h,k,l,g,m){var e;a=e=class extends k{constructor(d){super(d);this.material=null;this.castShadows=!0;this.resource=null;this.type="object";this.roll=
this.tilt=this.heading=this.anchorPosition=this.anchor=this.depth=this.height=this.width=void 0}clone(){return new e({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition?.clone(),depth:this.depth,enabled:this.enabled,height:this.height,material:this.material?.clone()??null,castShadows:this.castShadows,resource:this.resource?.clone(),width:this.width})}get isPrimitive(){return!this.resource||"string"!==typeof this.resource.href}};b.__decorate([c.property({type:m.Symbol3DMaterial,
json:{write:!0}})],a.prototype,"material",void 0);b.__decorate([c.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],a.prototype,"castShadows",void 0);b.__decorate([c.property({type:l.ObjectSymbol3DLayerResource,json:{write:!0}})],a.prototype,"resource",void 0);b.__decorate([f.enumeration({Object:"object"},{readOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"width",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],
a.prototype,"height",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"depth",void 0);b.__decorate([f.enumeration({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),c.property({json:{default:"origin"}})],a.prototype,"anchor",void 0);b.__decorate([c.property({type:g.Symbol3DAnchorPosition3D,json:{type:[Number],read:{reader:d=>new g.Symbol3DAnchorPosition3D({x:d[0],y:d[1],z:d[2]})},write:{writer:(d,n)=>{n.anchorPosition=[d.x,d.y,d.z]},overridePolicy(){return{enabled:"relative"===
this.anchor}}}}})],a.prototype,"anchorPosition",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"heading",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"tilt",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"roll",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"isPrimitive",null);return a=e=b.__decorate([h.subclass("esri.symbols.ObjectSymbol3DLayer")],a)});