// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../TimeExtent ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/SpatialReference ../../geometry/support/spatialReferenceUtils ../../layers/support/LayerTimeOptions ../../layers/support/layerUtils".split(" "),function(b,r,a,c,x,y,z,t,u,v,k,w,l){a=class extends a{constructor(d){super(d);this.imageSpatialReference=
this.format=this.dpi=this.height=this.width=this.extent=null;this.layerDefinitions=[];this.layerIds=this.layerOption=null;this.transparent=!0;this.layerTimeOptions=this.timeExtent=null}toJSON(){let d=this.extent;d=d&&d.clone()._normalize(!0);let m;if(this.timeExtent){var f=this.timeExtent.toJSON();const {start:e,end:g}=f;if(null!=e||null!=g)m=e===g?""+e:`${null==e?"null":e},${null==g?"null":g}`}f=this.layerOption;const n=k.srToRESTValue(d?.spatialReference),p=this.imageSpatialReference,h={dpi:this.dpi,
format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:d?d.xmin+","+d.ymin+","+d.xmax+","+d.ymax:null,bboxSR:n,layers:f?f+":"+(this.layerIds??[]).join(","):null,layerDefs:l.serializeLayerDefinitions(this.layerDefinitions),layerTimeOptions:l.serializeTimeOptions(this.layerTimeOptions??[]),imageSR:p?k.srToRESTValue(p):n,time:m},q={};Object.keys(h).filter(e=>null!=h[e]).forEach(e=>q[e]=h[e]);return q}};b.__decorate([c.property({type:u})],
a.prototype,"extent",void 0);b.__decorate([c.property()],a.prototype,"width",void 0);b.__decorate([c.property()],a.prototype,"height",void 0);b.__decorate([c.property()],a.prototype,"dpi",void 0);b.__decorate([c.property()],a.prototype,"format",void 0);b.__decorate([c.property({type:v})],a.prototype,"imageSpatialReference",void 0);b.__decorate([c.property()],a.prototype,"layerDefinitions",void 0);b.__decorate([c.property()],a.prototype,"layerOption",void 0);b.__decorate([c.property()],a.prototype,
"layerIds",void 0);b.__decorate([c.property()],a.prototype,"transparent",void 0);b.__decorate([c.property({type:r})],a.prototype,"timeExtent",void 0);b.__decorate([c.property({type:[w]})],a.prototype,"layerTimeOptions",void 0);return a=b.__decorate([t.subclass("esri.rest.support.ImageParameters")],a)});