/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import e from"../../geometry/Point.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";let i=class extends r{constructor(){super(...arguments),this.attributes=null,this.location=null,this.locationId=null,this.rasterId=null,this.resolution=null,this.pixelValue=null}};o([t({json:{write:!0}})],i.prototype,"attributes",void 0),o([t({type:e,json:{write:!0}})],i.prototype,"location",void 0),o([t({json:{write:!0}})],i.prototype,"locationId",void 0),o([t({json:{write:!0}})],i.prototype,"rasterId",void 0),o([t({json:{write:!0}})],i.prototype,"resolution",void 0),o([t({json:{write:!0}})],i.prototype,"pixelValue",void 0),i=o([s("esri.rest.support.ImageSample")],i);const p=i;export{p as default};
