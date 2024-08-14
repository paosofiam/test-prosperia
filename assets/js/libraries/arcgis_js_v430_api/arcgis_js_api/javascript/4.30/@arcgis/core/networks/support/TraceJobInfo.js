/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../request.js";import"../../core/lang.js";import{s as r}from"../../chunks/jsonMap.js";import{createAbortError as e}from"../../core/promiseUtils.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{e as i}from"../../chunks/enumeration.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import p from"../../rest/networks/support/TraceResult.js";import"../../config.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/ensureType.js";import"../../rest/networks/support/AggregatedGeometry.js";import"../../geometry/Multipoint.js";import"../../chunks/writer.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/assets.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../rest/networks/support/FunctionResult.js";import"../../rest/networks/support/NetworkElement.js";const c=r()({Pending:"job-waiting",InProgress:"job-executing",Completed:"job-succeeded"});let n=class extends p{constructor(t){super(t),this.statusUrl=null,this.status=null,this.submissionTime=null,this.lastUpdatedTime=null,this._timer=void 0}destroy(){clearInterval(this._timer)}async checkJobStatus(t){const r={...t,query:{f:"json"}},{data:e}=await s(this.statusUrl,r),o=e.traceResults?{...e.traceResults,...e}:e;return this.read(o),this}async waitForJobCompletion(t={}){const{interval:s=1e3,statusCallback:r}=t;return new Promise(((t,o)=>{this._clearTimer();const i=setInterval((()=>{this._timer||o(e()),this.checkJobStatus().then((s=>{const{status:e}=s;switch(this.status=e,e){case"job-succeeded":this._clearTimer(),t(this);break;case"job-waiting":case"job-executing":r&&r(this)}}),(t=>{this._clearTimer(),o(t)}))}),s);this._timer=i}))}_clearTimer(){clearInterval(this._timer),this._timer=void 0}};t([o({type:String,json:{write:!0}})],n.prototype,"statusUrl",void 0),t([i(c)],n.prototype,"status",void 0),t([o({type:Date,json:{type:Number,write:{writer:(t,s)=>{s.submissionTime=t?t.getTime():null}}}})],n.prototype,"submissionTime",void 0),t([o({type:Date,json:{type:Number,write:{writer:(t,s)=>{s.lastUpdatedTime=t?t.getTime():null}}}})],n.prototype,"lastUpdatedTime",void 0),n=t([m("esri.networks.support.TraceJobInfo")],n);const a=n;export{a as default};
