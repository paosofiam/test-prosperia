/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import"../../../geometry.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import{b as r}from"../../../chunks/ensureType.js";import"../../../core/lang.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../../chunks/writer.js";import{v as p}from"../../../chunks/typeUtils2.js";import n from"../../../geometry/Extent.js";import m from"../../../geometry/SpatialReference.js";import"../../../geometry/Geometry.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/reader.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../geometry/Multipoint.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/coordsUtils.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";var c;let a=c=class extends o{static from(t){return r(c,t)}constructor(t){super(t),this.gdbVersion=null,this.sessionID=null,this.validationType=null,this.validateArea=null,this.validationSet=null,this.outSpatialReference=null}writeOutSR(t,o,s){if(null!=t){const{wkid:r}=t;o[s]=JSON.stringify({wkid:r})}}};t([s({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0),t([s({type:String,json:{write:!0}})],a.prototype,"sessionID",void 0),t([s({type:p.apiValues,json:{type:p.jsonValues,read:p.read,write:p.write}})],a.prototype,"validationType",void 0),t([s({type:n,json:{write:!0}})],a.prototype,"validateArea",void 0),t([s({type:[Object],json:{write:!0}})],a.prototype,"validationSet",void 0),t([s({type:m,json:{write:{allowNull:!0,target:"outSR"}}})],a.prototype,"outSpatialReference",void 0),t([i("outSpatialReference")],a.prototype,"writeOutSR",null),a=c=t([e("esri.rest.networks.support.ValidateNetworkTopologyParameters")],a);const l=a;export{l as default};
