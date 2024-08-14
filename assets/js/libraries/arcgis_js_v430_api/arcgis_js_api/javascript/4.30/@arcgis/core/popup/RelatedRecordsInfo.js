/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{clone as s}from"../core/lang.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import i from"./support/RelatedRecordsInfoFieldOrder.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/ensureType.js";var p;let c=p=class extends o{constructor(r){super(r),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new p({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?s(this.orderByFields):null})}};r([e({type:Boolean,json:{write:!0}})],c.prototype,"showRelatedRecords",void 0),r([e({type:[i],json:{write:!0}})],c.prototype,"orderByFields",void 0),c=p=r([t("esri.popup.RelatedRecordsInfo")],c);const d=c;export{d as default};
