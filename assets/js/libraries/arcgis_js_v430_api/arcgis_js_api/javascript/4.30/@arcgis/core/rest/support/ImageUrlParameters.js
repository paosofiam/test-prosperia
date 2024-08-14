/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{ClonableMixin as s}from"../../core/Clonable.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";let p=class extends(s(o)){constructor(){super(...arguments),this.referenceUri=null,this.rasterId=null}};r([e({type:String,json:{name:"uri",write:!0}})],p.prototype,"referenceUri",void 0),r([e({type:Number,json:{write:!0}})],p.prototype,"rasterId",void 0),p=r([t("esri.rest.support.ImageUrlParameters")],p);const i=p;export{i as default};
