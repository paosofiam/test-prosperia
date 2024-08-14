/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../geometry.js";import r from"../request.js";import{b as s}from"../chunks/ensureType.js";import t from"../portal/Portal.js";import{a as o,p as e}from"../chunks/utils8.js";import i from"./support/FetchPlaceParameters.js";import p from"./support/PlacesQueryParameters.js";import m from"./support/PlacesQueryResult.js";import{p as a}from"../chunks/projectionUtils.js";import n from"../geometry/SpatialReference.js";import"../geometry/Extent.js";import"../chunks/tslib.es6.js";import"../chunks/Logger.js";import"../config.js";import"../core/lang.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../core/urlUtils.js";import"../kernel.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"./support/PlacesParameters.js";import"./support/PlaceResult.js";import"../geometry/projection.js";import"../chunks/SimpleObservable.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";async function c(t,e){const p={icon:(t=s(i,t)).icon,requestedFields:t.requestedFields?.join(),token:t.apiKey},m=o(p,e),{data:a}=await r(`${t.url}/places/${t.placeId}`,m);return a}async function u(r,o){const e={radius:(r=s(p,r)).radius};let i=r.point;return i&&!i.spatialReference.isWGS84&&(i=await a(i,n.WGS84,t.getDefault(),o?.signal)),i&&(e.x=i.x,e.y=i.y),j(`${r.url}/places/near-point`,e,r,o)}async function l(r,o){const e={};let i=(r=s(p,r)).extent;return i&&!i.spatialReference.isWGS84&&(i=await a(i,n.WGS84,t.getDefault(),o?.signal)),i&&(e.xmin=i.xmin,e.ymin=i.ymin,e.xmax=i.xmax,e.ymax=i.ymax),j(`${r.url}/places/within-extent`,e,r,o)}async function j(s,t,i,p){t={...t,categoryIds:i.categoryIds?.join(),icon:i.icon,offset:i.offset,pageSize:i.pageSize,searchText:i.searchText,token:i.apiKey};const a=o(t,p),{data:n}=await r(s,a),c=new m({results:n.results}),{pagination:u,links:l}=n;if(u?.nextUrl||l?.next){c.nextQueryParams=i.clone();const r=e(u?.nextUrl||l?.next).query;c.nextQueryParams.offset=Number(r.offset)}if(u?.previousUrl||l?.previous){c.previousQueryParams=i.clone();const r=e(u?.previousUrl||l?.previous).query;c.previousQueryParams.offset=Number(r.offset)}return c}export{c as fetchPlace,u as queryPlacesNearPoint,l as queryPlacesWithinExtent};
