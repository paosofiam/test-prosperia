// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../rest/support/colorRamps".split(" "),function(b,a,g,c,m,n,h,k,l,f){var d;a=d=class extends a.JSONSupport{constructor(e){super(e);this.altitude=45;this.azimuth=315;this.colorRamp=null;this.hillshadeType="traditional";this.pixelSizePower=
.664;this.pixelSizeFactor=.024;this.scalingType="none";this.type="raster-shaded-relief";this.zFactor=1}readColorRamp(e){return f.fromJSON(e)}clone(){return new d({hillshadeType:this.hillshadeType,altitude:this.altitude,azimuth:this.azimuth,zFactor:this.zFactor,scalingType:this.scalingType,pixelSizeFactor:this.pixelSizeFactor,pixelSizePower:this.pixelSizePower,colorRamp:g.clone(this.colorRamp)})}};b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"altitude",void 0);b.__decorate([c.property({type:Number,
json:{write:!0}})],a.prototype,"azimuth",void 0);b.__decorate([c.property({types:f.types,json:{write:!0}})],a.prototype,"colorRamp",void 0);b.__decorate([k.reader("colorRamp")],a.prototype,"readColorRamp",null);b.__decorate([c.property({type:["traditional","multi-directional"],json:{write:!0}})],a.prototype,"hillshadeType",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pixelSizePower",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pixelSizeFactor",
void 0);b.__decorate([c.property({type:["none","adjusted"],json:{write:!0}})],a.prototype,"scalingType",void 0);b.__decorate([h.enumeration({rasterShadedRelief:"raster-shaded-relief"})],a.prototype,"type",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"zFactor",void 0);return a=d=b.__decorate([l.subclass("esri.renderers.RasterShadedReliefRenderer")],a)});