/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import e from"../../core/Error.js";import{g as n,s as t}from"../../config.js";import{u as i}from"../../core/Accessor.js";import{parseWhereClause as r}from"../../core/sql.js";import"../../intl.js";import"../../core/lang.js";import{c as s}from"../../chunks/mathUtils.js";import{m as o}from"../../chunks/maybe.js";import{c as l,a,b as u,d as c,f}from"../../chunks/date.js";import{u as m}from"../../chunks/timeZoneUtils.js";import{D as d,F as p}from"../../chunks/datetime.js";import{g as y}from"../../chunks/locale.js";import"../../geometry.js";import{L as g}from"../../chunks/Logger.js";import h from"../../geometry/SpatialReference.js";import"../../core/Handles.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/tslib.es6.js";import"../../chunks/assets.js";import"../../chunks/jsonMap.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../chunks/unitUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";function F(e){return"number"==typeof e}function w(e){return"string"==typeof e||e instanceof String}const I=m,b={date:null,time:null,timeZoneOffset:null},v=new Map([["hours",3600],["minutes",60],["seconds",1],["deciseconds",.1],["centiseconds",.01],["milliseconds",.001]]),x="yyyy-MM-dd",S="TT";var T;!function(e){e.HM="HH:mm",e.HMS="HH:mm:ss",e.HMS_MS="HH:mm:ss.SSS"}(T||(T={}));const j=[T.HMS_MS,T.HMS,T.HM,S],_="latn",A=new Set(["date-only","time-only","timestamp-offset"]),M=e=>"valueAsDate"in e;function O(e){return{locale:y(),numberingSystem:_,zone:e??I}}function E(e,n){return null===e?null:d.fromMillis(e,O(n))}function k(e,n){if(null==e||!w(e)||""===e){if(n){const e=d.local({zone:n});return{date:null,time:null,timeZoneOffset:e.isValid?e.offset.toString():null}}return b}const t=d.fromISO(e,{setZone:!0});return{date:t.toFormat(x,O()),time:t.toFormat(T.HMS_MS,O()),timeZoneOffset:t.offset.toString()}}function N(e,n){if(null==e||!F(e)||isNaN(e))return b;const t=E(e,n);return t?{date:t.toFormat(x,O(n)),time:t.toFormat(S,O(n))}:b}function $(e){switch(e.type){case"date":default:return l("short-date-short-time");case"date-only":return l("short-date");case"time-only":return l("short-time");case"timestamp-offset":return{...l("short-date-short-time"),timeZone:void 0,timeZoneName:"short"}}}function D(e,n,t){if(!e||null==n)return null;switch(e.type){case"date":return f(n,t);case"date-only":return c(n,t);case"time-only":return u(n,t);case"timestamp-offset":return a(n,t);default:return null}}function V(e){const{dateComponent:n,defaultTimeZone:t,timeComponent:i,timeZoneComponent:r,oldValue:s}=e;if(!n?.value||!i?.value)return null;const{year:o,month:l,day:a}=d.fromFormat(n.value,x),{hour:u,minute:c,second:f,millisecond:y}=L(i,m)??d.now(),g=k(s,t),h=null!=r?.value?parseInt(r.value,10):null!=g.timeZoneOffset?parseInt(g.timeZoneOffset,10):(new Date).getTimezoneOffset(),F=p.instance(h),w=d.fromObject({year:o,month:l,day:a,hour:u,minute:c,second:f,millisecond:y},{zone:F});return w.isValid?w.toISO({includeOffset:!0}):null}function U(e){const{dateComponent:n,timeComponent:t,timeZone:i,max:r,min:s,oldValue:o}=e,l=L(n,i);let a=!!e.applyRange;if(!l)return null;let u=null;if(null!=t?.value){const e=L(t,i),n=Date.now(),s=null!=r&&r<n?r:n,o=d.fromMillis(s,O(i)),a=l||o,{year:c,month:f,day:m}=a,{hour:p,minute:y,second:g,millisecond:h}=e||o;u=a.set({year:c,month:f,day:m,hour:p,minute:y,second:g,millisecond:h})}else{const e=E(C({value:o??Date.now(),max:r,min:s}),i),{year:n,month:t,day:c}=l,{hour:f,minute:m,second:d,millisecond:p}=e;a=!0,u=l.set({year:n,month:t,day:c,hour:f,minute:m,second:d,millisecond:p})}if(!u.isValid)return null;const c=u.toMillis();return a?C({value:c,max:r,min:s}):c}function L(e,n){if(null==e?.value||Array.isArray(e.value))return null;let t=null;return t=M(e)?d.fromFormat(e.value,x,O(n)):P(e.value),t?.isValid?t:null}function R(e){const{max:n,min:t,value:i}=e;return!(isNaN(i)||null!=n&&i>n||null!=t&&i<t)}function C(e){const{max:n,min:t,value:i}=e;return null!=n&&null!=t?s(i,t,n):null!=n&&i>n?n:null!=t&&i<t?t:i}function G(n){if(!n)return"";const t=n.split(".").at(0);if(!t||t.length<1)throw new e("invalid time-only field",`Cannot parse valid time-only field value from ${n}`);const i=t.split(":"),r=new Array(3);for(let e=0;e<3;e++){const n=i.at(e)??"";r[e]=n.padStart(2,"0")}return r.join(":")}function Z(e,n){switch(n){case"date":return e.getTime();case"date-only":return e.toISODate();case"time-only":return G(e.toISOTime(!0,!1));case"timestamp-offset":return e.toISOString(!1);default:return null}}function H(e){return!!e&&"object"==typeof e&&"getTime"in e&&"toISOString"in e&&"timeZone"in e}function z(e){if(!e||!w(e))return null;const n=d.fromFormat(e,x);return n.isValid?n:null}function P(e){return e&&w(e)?o(j,(n=>{const t=d.fromFormat(e,n);return t.isValid?t:null}))??null:null}function B(e){if(!e||!w(e))return null;const n=d.fromISO(e);return n.isValid?n:null}function X(e){const{type:n,range:t,value:i}=e;if(null==i||!t||i===t.min||i===t.max)return!0;if("date"===n)return R({value:i,min:t.min,max:t.max});const{rawMax:r,rawMin:s}=t;let o=null,l=null,a=null;switch(n){case"date-only":o=z(r),l=z(s),a=z(i);break;case"time-only":o=P(r),l=P(s),a=P(i);break;case"timestamp-offset":o=B(r),l=B(s),a=B(i)}return!a||R({value:a.valueOf(),min:l?.valueOf(),max:o?.valueOf()})}var q;!function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(q||(q={}));const J=new Set(["integer","small-integer","big-integer","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeBigInteger"]);function Y(e){return null!=e&&("date-only"===e.type||"esriFieldTypeDateOnly"===e.type)}function W(e){return null!=e&&("timestamp-offset"===e.type||"esriFieldTypeTimestampOffset"===e.type)}function K(e){return null!=e&&("time-only"===e.type||"esriFieldTypeTimeOnly"===e.type)}function Q(e,n,t){const i=t??e?.domain;if(!i)return null;switch(i.type){case"range":{const{min:i,max:r}=ee(e,t);if(null!=i&&+n<i||null!=r&&+n>r)return q.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==i.codedValues||i.codedValues.every((e=>null==e||e.code!==n)))return q.INVALID_CODED_VALUE}return null}function ee(e,n){const t=n??e?.domain;if(!t||"range"!==t.type)return;const i="range"in t?t.range[0]:t.minValue,r="range"in t?t.range[1]:t.maxValue,s=function(e){return null!=e&&J.has(e.type)}(e);return Y(e)||K(e)||W(e)?{...ne(e,r,i),isInteger:s}:{min:null!=i&&"number"==typeof i?i:null,max:null!=r&&"number"==typeof r?r:null,rawMin:i,rawMax:r,isInteger:s}}function ne(e,n,t){return Y(e)?{min:z(t)?.toMillis(),max:z(n)?.toMillis(),rawMin:t,rawMax:n}:K(e)?{min:P(t)?.toMillis(),max:P(n)?.toMillis(),rawMin:t,rawMax:n}:W(e)?{min:B(t)?.toMillis(),max:B(n)?.toMillis(),rawMin:t,rawMax:n}:{max:null,min:null}}let te;function ie(){return te||(te=(async()=>{const e=await import("../../chunks/arcadeUtils.js").then((e=>e.aN));return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),te}const re=(e,n,t)=>le.create(e,n,t,null,["$feature","$view"],[]),se=(e,n,t)=>le.create(e,n,t,null,["$feature","$view"],[]),oe=(e,n,t,i)=>le.create(e,n,t,i,["$feature","$view"],[]);class le{constructor(e,n,t,i,r,s,o){this.services=null,this.script=e,this.evaluate=i;const l=Array.isArray(s)?s:s?.fields;this.fields=l??[],this._syntaxTree=t,this._arcade=n,this._arcadeFeature=r,this._spatialReference=o,this._referencesGeometry=n.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(n,t,i,r,s,o){const{arcade:l,Feature:a,Dictionary:u}=await ie(),c=h.fromJSON(t);let f;try{f=l.parseScript(n,o)}catch(t){return g.getLogger("esri.support.arcadeOnDemand").error(new e("arcade-bad-expression","Failed to parse arcade script",{script:n,error:t})),null}const m=s.reduce(((e,n)=>({...e,[n]:null})),{});let d=null;null!=r&&(d=new u(r),d.immutable=!0,m.$config=null);const p=l.scriptUsesGeometryEngine(f),y=p&&l.enableGeometrySupport(),F=l.scriptUsesFeatureSet(f)&&l.enableFeatureSetSupport(),w=l.scriptIsAsync(f),I=w&&l.enableAsyncSupport(),b={vars:m,spatialReference:c,useAsync:!!I};await Promise.all([y,F,I]);const v=new Set;await l.loadDependentModules(v,f,null,w,p);const x=new u;x.immutable=!1,x.setField("scale",0);const S=l.compileScript(f,b);return new le(n,l,f,((e,n)=>{const t=e.$view?.timeZone;return"$view"in e&&e.$view&&(x.setField("scale","object"==typeof e.$view&&"scale"in e.$view?e.$view.scale:void 0),e.$view=x),d&&(e.$config=d),S({vars:e,spatialReference:c,services:n,timeZone:t})}),new a,i,c)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}}const ae=/^([0-9_])/,ue=/[^a-z0-9_\u0080-\uffff]+/gi;function ce(e){return null==e?null:e.trim().replaceAll(ue,"_").replace(ae,"F$1")||null}const fe=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],me=["field","normalizationField"];function de(e,n){if(null!=e&&null!=n)for(const t of Array.isArray(e)?e:[e])if(pe(fe,t,n),"visualVariables"in t&&t.visualVariables)for(const e of t.visualVariables)pe(me,e,n)}function pe(e,i,r){if(e)for(const s of e){const e=n(s,i),o=e&&"function"!=typeof e&&r.get(e);o&&t(s,o.name,i)}}function ye(e,n){if(null!=e&&n?.fields?.length)if("startField"in e){const t=n.get(e.startField),i=n.get(e.endField);e.startField=t?.name??null,e.endField=i?.name??null}else{const t=n.get(e.startTimeField),i=n.get(e.endTimeField);e.startTimeField=t?.name??null,e.endTimeField=i?.name??null}}const ge=new Set;function he(e,n){return e&&n?(ge.clear(),Fe(ge,e,n),Array.from(ge).sort()):[]}function Fe(e,n,t){if(t)if(n?.fields?.length)if(t.includes("*"))for(const{name:t}of n.fields)e.add(t);else for(const i of t)we(e,n,i);else{if(t.includes("*"))return e.clear(),void e.add("*");for(const n of t)null!=n&&e.add(n)}}function we(e,n,t){if("string"==typeof t)if(n){const i=n.get(t);i&&e.add(i.name)}else e.add(t)}function Ie(e,n){return null==n||null==e?[]:n.includes("*")?(e.fields??[]).map((e=>e.name)):n}function be(e,n,t=1){if(!n||!e)return[];if(n.includes("*"))return["*"];const i=he(e,n);return i.length/e.fields.length>=t?["*"]:i}async function ve(e,n,t){if(!t)return;const{arcadeUtils:i}=await ie(),r=i.extractFieldNames(t,n?.fields?.map((e=>e.name)));for(const t of r)we(e,n,t)}async function xe(n,t,i){if(i&&"1=1"!==i){const s=await r(i,t);if(!s.isStandardized)throw new e("fieldUtils:collectFilterFields","Where clause is not standardized",{where:i});Fe(n,t,s.fieldNames)}}function Se({displayField:e,fields:n}){return e||(n?.length?Te(n,"name-or-title")||Te(n,"unique-identifier")||Te(n,"type-or-category")||function(e){for(const n of e){if(!n?.name)continue;const e=n.name.toLowerCase();if(e.includes("name")||e.includes("title"))return n.name}return null}(n):null)}function Te(e,n){for(const t of e)if(t?.valueType&&t.valueType===n)return t.name;return null}async function je(e){if(!e)return[];const n=new Set;return await _e(n,e),Array.from(n).sort()}async function _e(e,n){if(!n)return;const t=n.elevationInfo?.featureExpressionInfo;return t?t.collectRequiredFields(e,n.fieldsIndex):void 0}async function Ae(e,n,t){if(!n||!t||!("fields"in t))return;const i=[],r=t.popupTemplate;i.push(Me(e,n,r)),t.fields&&i.push(...t.fields.map((async t=>function(e,n,t){t.onStatisticExpression?ve(e,n,t.onStatisticExpression.expression):e.add(t.onStatisticField)}(e,n.fieldsIndex,t)))),await Promise.all(i)}async function Me(e,n,t){const i=[];t?.expressionInfos&&i.push(...t.expressionInfos.map((t=>ve(e,n.fieldsIndex,t.expression))));const r=t?.content;if(Array.isArray(r))for(const t of r)"expression"===t.type&&t.expressionInfo&&i.push(ve(e,n.fieldsIndex,t.expressionInfo.expression));await Promise.all(i)}async function Oe(e,n,t){n&&(n.timeInfo&&t?.timeExtent&&Fe(e,n.fieldsIndex,[n.timeInfo.startField,n.timeInfo.endField]),n.floorInfo&&Fe(e,n.fieldsIndex,[n.floorInfo.floorField]),null!=t?.where&&await xe(e,n.fieldsIndex,t.where))}async function Ee(e,n,t){n&&t&&await Promise.all(t.map((t=>async function(e,n,t){n&&t&&(t.valueExpression?await ve(e,n.fieldsIndex,t.valueExpression):t.field&&we(e,n.fieldsIndex,t.field))}(e,n,t))))}async function ke(e){if(!e)return[];const n="timeInfo"in e&&e.timeInfo;return n?he(e.fieldsIndex,[e.trackIdField,n.startField,n.endField]):[]}function Ne(e){return e?he(e.fieldsIndex,Re(e)):[]}function $e(e){if(!e)return[];const n=e.geometryFieldsInfo;return n?he(e.fieldsIndex,[n.shapeAreaField,n.shapeLengthField]):[]}const De=new Set(["oid","global-id","guid"]),Ve=new Set(["oid","global-id"]),Ue=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^shape$/i,/^shape_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/perimeter/i,/objectid/i,/_i$/i];function Le(e){const n=new Set;Ce(e).forEach((e=>n.add(e))),$e(e).forEach((e=>n.add(e.toLowerCase())));const t=e&&"infoFor3D"in e?e.infoFor3D:void 0;return t&&(Object.values(t.assetMapFieldRoles).forEach((e=>n.add(e.toLowerCase()))),Object.values(t.transformFieldRoles).forEach((e=>n.add(e.toLowerCase())))),Array.from(n)}function Re(e){if(!e)return[];const n="editFieldsInfo"in e&&e.editFieldsInfo;if(!n)return[];const{creationDateField:t,creatorField:i,editDateField:r,editorField:s}=n;return[t,i,r,s].filter(Boolean)}function Ce(e){return Re(e).map((e=>e.toLowerCase()))}function Ge(e,n){return e.editable&&!De.has(e.type)&&!Ce(n).includes(e.name?.toLowerCase()??"")}function Ze(e,n){const t=e.name?.toLowerCase()??"";return!(null!=n?.objectIdField&&t===n.objectIdField.toLowerCase()||null!=n?.globalIdField&&t===n.globalIdField.toLowerCase()||Le(n).includes(t)||Ve.has(e.type)||Ue.some((e=>e.test(t))))}async function He(e){if(!e)return[];const n=new Set;return await ze(n,e),Array.from(n).sort()}async function ze(e,n){const{labelingInfo:t,fieldsIndex:i}=n;t?.length&&await Promise.all(t.map((n=>async function(e,n,t){if(!t)return;const i=t.getLabelExpression(),r=t.where;if("arcade"===i.type)await ve(e,n,i.expression);else{const t=i.expression.match(/{[^}]*}/g);t&&t.forEach((t=>{we(e,n,t.slice(1,-1))}))}await xe(e,n,r)}(e,i,n))))}function Pe(e){const n=e.defaultValue;return void 0!==n&&Qe(e,n)?n:e.nullable?null:void 0}function Be(e){const n="string"==typeof e?{type:e}:e;return fn(n)?255:"esriFieldTypeDate"===n.type||"date"===n.type?8:void 0}function Xe(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function qe(e){return null===e||Xe(e)}function Je(e){return null===e||Number.isInteger(e)}function Ye(e){return null!=e&&"string"==typeof e}function We(e){return null===e||Ye(e)}function Ke(){return!0}function Qe(e,n){let t;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"big-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":case"esriFieldTypeBigInteger":t=e.nullable?Je:Number.isInteger;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":t=e.nullable?qe:Xe;break;case"string":case"esriFieldTypeString":t=e.nullable?We:Ye;break;default:t=Ke}return 1===arguments.length?t:t(n)}const en=["integer","small-integer","big-integer"],nn=["single","double"],tn=[...en,...nn],rn=["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeBigInteger"],sn=["esriFieldTypeSingle","esriFieldTypeDouble"],on=new Set([...en,...rn]),ln=new Set([...nn,...sn]),an=i(on,ln);function un(e){return null!=e&&on.has(e.type)}function cn(e){return null!=e&&an.has(e.type)}function fn(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function mn(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)}function dn(e){return null!=e&&("date-only"===e.type||"esriFieldTypeDateOnly"===e.type)}function pn(e){return null!=e&&("timestamp-offset"===e.type||"esriFieldTypeTimestampOffset"===e.type)}function yn(e){return null!=e&&("time-only"===e.type||"esriFieldTypeTimeOnly"===e.type)}function gn(e){return null!=e&&("oid"===e.type||"esriFieldTypeOID"===e.type)}function hn(e){return null!=e&&("global-id"===e.type||"esriFieldTypeGlobalID"===e.type)}function Fn(e,n){return null===vn(e,n)}var wn,In;function bn(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function vn(e,n){return null==e||e.nullable&&null===n?null:cn(e)&&!xn(e.type,Number(n))?wn.OUT_OF_RANGE:Qe(e,n)?e.domain?Q(e,n):null:In.INVALID_TYPE}function xn(e,n){const t="string"==typeof e?Tn(e):e;if(!t)return!1;const i=t.min,r=t.max;return t.isInteger?Number.isInteger(n)&&n>=i&&n<=r:n>=i&&n<=r}function Sn(e,n){return ee(e,n)||(cn(e)?Tn(e.type):void 0)}function Tn(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return _n;case"esriFieldTypeInteger":case"integer":return An;case"esriFieldTypeBigInteger":case"big-integer":return Mn;case"esriFieldTypeSingle":case"single":return On;case"esriFieldTypeDouble":case"double":return En}}function jn(e){if(!Xe(e))return null;if(Number.isInteger(e)){if(e>=_n.min&&e<=_n.max)return"esriFieldTypeSmallInteger";if(e>=An.min&&e<=An.max)return"esriFieldTypeInteger";if(e>=Mn.min&&e<=Mn.max)return"esriFieldTypeBigInteger"}return e>=On.min&&e<=On.max?"esriFieldTypeSingle":"esriFieldTypeDouble"}!function(e){e.OUT_OF_RANGE="numeric-range-validation-error::out-of-range"}(wn||(wn={})),function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(In||(In={}));const _n={min:-32768,max:32767,isInteger:!0,rawMin:-32768,rawMax:32767},An={min:-2147483648,max:2147483647,isInteger:!0,rawMin:-2147483648,rawMax:2147483647},Mn={min:-Number.MAX_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,isInteger:!0,rawMin:-Number.MAX_SAFE_INTEGER,rawMax:Number.MAX_SAFE_INTEGER},On={min:-34e37,max:12e37,isInteger:!1,rawMin:-34e37,rawMax:12e37},En={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1,rawMin:-Number.MAX_VALUE,rawMax:Number.MAX_VALUE};function kn(e,n,t){switch(e){case q.INVALID_CODED_VALUE:return`Value ${t} is not in the coded domain - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case q.VALUE_OUT_OF_RANGE:return`Value ${t} is out of the range of valid values - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;case In.INVALID_TYPE:return`Value ${t} is not a valid value for the field type - field: ${n.name}, type: ${n.type}, nullable: ${n.nullable}`;case wn.OUT_OF_RANGE:{const{min:e,max:i}=Tn(n.type);return`Value ${t} is out of range for the number type - field: ${n.name}, type: ${n.type}, value range is ${e} to ${i}`}}}function Nn(e,n){return!$n(e,n,null)}function $n(e,n,t){if(!n?.attributes||!e){if(null!=t)for(const n of e??[])t.add(n);return!0}const i=new Set(Object.keys(n.attributes));let r=!1;for(const n of e)if(!i.has(n)){if(r=!0,null==t)break;t.add(n)}return r}async function Dn(e,n){const t=new Set;for(const i of n)await ve(t,e.fieldsIndex,i);return Array.from(t).sort()}function Vn(e){return!!e&&["raster.itempixelvalue","raster.servicepixelvalue"].some((n=>e.toLowerCase().startsWith(n)))}async function Un(e,n){const t=new Set;return e?.collectRequiredFields&&await e.collectRequiredFields(t,n),Array.from(t).sort()}function Ln(e){const n=e?.match(/{[^}]+}/g);return n?n.map((e=>e.slice(1,-1).split(":")[0].trim())):[]}export{q as D,wn as NumericRangeValidationError,In as TypeValidationError,D as a,$ as b,Mn as bigIntegerRange,re as c,ve as collectArcadeFieldNames,_e as collectElevationFields,Ae as collectFeatureReductionFields,we as collectField,Fe as collectFields,Oe as collectFilterFields,ze as collectLabelingFields,Ee as collectOrderByInfos,Me as collectPopupTemplateFields,ne as d,En as doubleRange,H as e,Ln as extractSubstitutionTemplatesFromString,Z as f,Nn as featureHasFields,he as fixFields,de as fixRendererFields,ye as fixTimeInfoFields,sn as floatJSONTypes,nn as floatTypes,ee as g,Se as getDisplayFieldName,Re as getEditTrackingFields,je as getElevationFields,Dn as getExpressionFields,Ne as getFeatureEditFields,$e as getFeatureGeometryFields,Be as getFieldDefaultLength,Pe as getFieldDefaultValue,Sn as getFieldRange,He as getLabelingFields,Le as getLowerCaseDefaultHiddenFields,Ce as getLowerCaseEditTrackingFields,jn as getNumericTypeForValue,Un as getRendererFields,ke as getTimeFields,X as h,F as i,rn as integerJSONTypes,An as integerRange,en as integerTypes,mn as isDateField,dn as isDateOnlyField,Ge as isFieldEditable,Ze as isFieldVisibleByDefault,hn as isGlobalIDField,un as isIntegerField,xn as isNumberInRange,cn as isNumericField,gn as isObjectIDField,Vn as isRasterPixelValueField,fn as isStringField,yn as isTimeOnlyField,pn as isTimestampOffsetField,Fn as isValidFieldValue,Qe as isValueMatchingFieldType,A as j,U as k,ie as l,V as m,G as n,ce as normalizeFieldName,tn as numericTypes,N as o,k as p,be as packFields,$n as populateMissingFields,oe as q,se as r,fe as rendererFields,x as s,bn as sanitizeNullFieldValue,On as singleRange,_n as smallIntegerRange,v as t,O as u,Ie as unpackFieldNames,Q as v,vn as validateFieldValue,kn as validationErrorToString,me as visualVariableFields,S as w,w as x,_ as y};
