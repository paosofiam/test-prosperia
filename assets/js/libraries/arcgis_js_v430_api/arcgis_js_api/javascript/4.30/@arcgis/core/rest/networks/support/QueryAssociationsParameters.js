/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../../core/JSONSupport.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import{b as e}from"../../../chunks/ensureType.js";import"../../../core/lang.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import{a as p}from"../../../chunks/typeUtils2.js";import i from"./NetworkElement.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/jsonMap.js";var m;let n=m=class extends s{static from(r){return e(m,r)}constructor(r){super(r),this.returnDeletes=!1,this.elements=[],this.types=[],this.gdbVersion=null,this.moment=null}};r([t({type:Boolean,json:{write:!0}})],n.prototype,"returnDeletes",void 0),r([t({type:[i],json:{write:!0}})],n.prototype,"elements",void 0),r([t({type:[p.apiValues],json:{type:p.jsonValues,read:p.read,write:p.write}})],n.prototype,"types",void 0),r([t({type:String,json:{write:!0}})],n.prototype,"gdbVersion",void 0),r([t({type:Date,json:{type:Number,write:{writer:(r,s)=>{s.moment=r?.getTime()}}}})],n.prototype,"moment",void 0),n=m=r([o("esri.rest.networks.support.QueryAssociationsParameters")],n);const c=n;export{c as default};
