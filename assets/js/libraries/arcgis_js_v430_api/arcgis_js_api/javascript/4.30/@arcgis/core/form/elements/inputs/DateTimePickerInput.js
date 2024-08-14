/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{r as t}from"../../../chunks/reader.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../../chunks/writer.js";import s from"./Input.js";import"../../../chunks/ensureType.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/tracking.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";var n;function p(r){return null!=r?new Date(r):null}function m(r){return r?r.getTime():null}let a=n=class extends s{constructor(r){super(r),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(r,e){return p(e.max)}writeMax(r,e){e.max=m(r)}readMin(r,e){return p(e.min)}writeMin(r,e){e.min=m(r)}clone(){return new n({includeTime:this.includeTime,max:this.max,min:this.min})}};r([e({type:Boolean,json:{write:!0}})],a.prototype,"includeTime",void 0),r([e({type:Date,json:{type:Number,write:!0}})],a.prototype,"max",void 0),r([t("max")],a.prototype,"readMax",null),r([i("max")],a.prototype,"writeMax",null),r([e({type:Date,json:{type:Number,write:!0}})],a.prototype,"min",void 0),r([t("min")],a.prototype,"readMin",null),r([i("min")],a.prototype,"writeMin",null),r([e({type:["datetime-picker"],json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=n=r([o("esri.form.elements.inputs.DateTimePickerInput")],a);const c=a;export{c as default};
