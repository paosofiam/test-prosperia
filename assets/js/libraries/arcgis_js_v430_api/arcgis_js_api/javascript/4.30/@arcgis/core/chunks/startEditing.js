/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import s from"../request.js";import r from"../core/Error.js";import{p as o,a as t,e as i}from"./utils8.js";import"../config.js";import"../core/lang.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./Logger.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";async function e(e,p,m,c){if(!p)throw new r("start-editing:missing-guid","guid for version is missing");const a=o(e),j=t(a.query,{query:i({sessionId:m,f:"json"}),...c,method:"post"});p.startsWith("{")&&(p=p.slice(1,-1));const n=`${a.path}/versions/${p}/startEditing`,{data:u}=await s(n,j);return u||{success:!1}}export{e as startEditing};
