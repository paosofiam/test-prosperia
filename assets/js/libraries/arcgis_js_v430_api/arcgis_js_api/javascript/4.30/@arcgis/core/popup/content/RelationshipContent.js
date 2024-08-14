/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{ClonableMixin as o}from"../../core/Clonable.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{I as s}from"../../chunks/ensureType.js";import"../../core/lang.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import i from"./Content.js";import p from"../support/RelatedRecordsInfoFieldOrder.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/JSONSupport.js";let n=class extends(o(i)){constructor(t){super(t),this.description=null,this.displayCount=null,this.displayType="list",this.orderByFields=null,this.relationshipId=null,this.title=null,this.type="relationship"}};t([r({type:String,json:{write:!0}})],n.prototype,"description",void 0),t([r({type:Number,json:{type:s,write:!0}})],n.prototype,"displayCount",void 0),t([r({type:["list"],json:{write:!0}})],n.prototype,"displayType",void 0),t([r({type:[p],json:{write:!0}})],n.prototype,"orderByFields",void 0),t([r({type:Number,json:{type:s,write:!0}})],n.prototype,"relationshipId",void 0),t([r({type:String,json:{write:!0}})],n.prototype,"title",void 0),t([r({type:["relationship"],readOnly:!0,json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=t([e("esri.popup.content.RelationshipContent")],n);const l=n;export{l as default};
