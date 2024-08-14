/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{makeData as e,isAbsolute as a,join as r,isDataProtocol as t,dataComponents as n}from"../core/urlUtils.js";import{f as i,w as u}from"./persistableUrlUtils.js";function s(e,t){if(!a(e)){const a=function(e){if(!e)return null;const{origin:a,layer:r}=e;if("service"!==a&&"portal-item"!==a)return null;const t=r?.type;return"feature"===t||"stream"===t?r.parsedUrl?.path:"map-image"===t||"tile"===t?e.url?.path:null}(t);if(a)return r(a,"images",e)}return i(e,t)}const l={json:{read:{source:["imageData","url"],reader:function(a,r,t){return r.imageData?e({mediaType:r.contentType||"image/png",isBase64:!0,data:r.imageData}):s(r.url,t)}},write:{writer(e,a,r,i){!function(e,a,r,i){if(t(e)){const t=n(e);if(!t)return;a.contentType=t.mediaType,a.imageData=t.data,r&&r.imageData===a.imageData&&r.url&&u(r.url,a,"url",i)}else u(e,a,"url",i)}(e,a,this.source,i)}}}},o={readOnly:!0,json:{read:{source:["imageData","url"],reader(e,a,r){const t={};return a.imageData&&(t.imageData=a.imageData),a.contentType&&(t.contentType=a.contentType),a.url&&(t.url=s(a.url,r)),t}}}};export{o as s,l as u};
