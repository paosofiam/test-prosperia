// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./CompositeBandFunctionArguments ./pixelUtils".split(" "),function(f,g,e,n,p,h,k,l,m){e=class extends k{constructor(){super(...arguments);this.functionName="CompositeBand";this.functionArguments=null;this.rasterArgumentNames=["rasters"]}_bindSourceRasters(){var {sourceRasterInfos:b}=
this,c=b[0];this.outputPixelType=this._getOutputPixelType(c.pixelType);c=c.clone();c.attributeTable=null;c.colormap=null;c.pixelType=this.outputPixelType;c.bandCount=b.map(({bandCount:a})=>a).reduce((a,d)=>a+d);if(b.every(({statistics:a})=>null!=a&&a.length)){const a=[];b.forEach(({statistics:d})=>null!=d&&a.push(...d));c.statistics=a}if(b.every(({histograms:a})=>null!=a&&a.length)){const a=[];b.forEach(({histograms:d})=>null!=d&&a.push(...d));c.histograms=a}1<c.bandCount&&(c.colormap=null,c.attributeTable=
null);b=b.every(a=>a.keyProperties.BandProperties?.length)?b.flatMap(a=>a.keyProperties.BandProperties):void 0;c.keyProperties={...c.keyProperties,BandProperties:b};this.rasterInfo=c;return{success:!0,supportsGPU:3>=c.bandCount}}_processPixels(b){({pixelBlocks:b}=b);return b&&null!=b?.[0]?m.compositeBands(b):null}_getWebGLParameters(){return{bandCount:this.rasterInfo.bandCount}}};f.__decorate([g.property({json:{write:!0,name:"rasterFunction"}})],e.prototype,"functionName",void 0);f.__decorate([g.property({type:l,
json:{write:!0,name:"rasterFunctionArguments"}})],e.prototype,"functionArguments",void 0);f.__decorate([g.property()],e.prototype,"rasterArgumentNames",void 0);return e=f.__decorate([h.subclass("esri.layers.support.rasterFunctions.CompositeBandFunction")],e)});