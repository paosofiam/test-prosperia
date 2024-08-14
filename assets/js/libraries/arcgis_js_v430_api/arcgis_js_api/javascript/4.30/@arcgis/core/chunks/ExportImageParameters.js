/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import r from"../core/Accessor.js";import{sqlAnd as s}from"../core/sql.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{i as a}from"./scaleUtils.js";import{g as l}from"./floorFilterUtils.js";import{a as o}from"./sublayerUtils.js";const n={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let y=class extends r{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=l(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&o(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(n[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,r=this.visibleSublayers.filter((r=>null!=r.definitionExpression||e&&null!=r.floorInfo));return r.length?JSON.stringify(r.reduce(((e,r)=>{const t=l(this.floors,r),i=s(t,r.definitionExpression);return null!=i&&(e[r.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=this.scale,t=r=>{r.visible&&(0===s||a(s,r.minScale,r.maxScale))&&(r.sublayers?r.sublayers.forEach(t):e.unshift(r))};r&&r.forEach(t);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((r,s)=>e[s]!==r))?e:i}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};e([t({readOnly:!0})],y.prototype,"dynamicLayers",null),e([t()],y.prototype,"floors",void 0),e([t({readOnly:!0})],y.prototype,"hasDynamicLayers",null),e([t()],y.prototype,"layer",null),e([t({readOnly:!0})],y.prototype,"layers",null),e([t({readOnly:!0})],y.prototype,"layerDefs",null),e([t({type:Number})],y.prototype,"scale",void 0),e([t({readOnly:!0})],y.prototype,"version",null),e([t({readOnly:!0})],y.prototype,"visibleSublayers",null),y=e([i("esri.layers.support.ExportImageParameters")],y);export{y as E};
