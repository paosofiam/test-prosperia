"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7427],{29180:(e,t,r)=>{r.d(t,{I:()=>l,a:()=>d,b:()=>f,c:()=>v});var n=r(32816),s=r(99924),o=r(29298),i=(r(32773),r(20266),r(88663)),a=r(69421);let l=class extends s.oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,n._)([(0,o.MZ)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,n._)([(0,o.MZ)({type:Number})],l.prototype,"rootIndex",void 0),(0,n._)([(0,o.MZ)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],l);let u=class extends s.oY{constructor(){super(...arguments),this.factor=1}};(0,n._)([(0,o.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],u.prototype,"id",void 0),(0,n._)([(0,o.MZ)({type:Number})],u.prototype,"factor",void 0),u=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],u);let p=class extends s.oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,n._)([(0,o.MZ)({type:[Number]})],p.prototype,"baseColorFactor",void 0),(0,n._)([(0,o.MZ)({type:u})],p.prototype,"baseColorTexture",void 0),(0,n._)([(0,o.MZ)({type:u})],p.prototype,"metallicRoughnessTexture",void 0),(0,n._)([(0,o.MZ)({type:Number})],p.prototype,"metallicFactor",void 0),(0,n._)([(0,o.MZ)({type:Number})],p.prototype,"roughnessFactor",void 0),p=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],p);let d=class extends s.oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,n._)([(0,i.e)({opaque:"opaque",mask:"mask",blend:"blend"})],d.prototype,"alphaMode",void 0),(0,n._)([(0,o.MZ)({type:Number})],d.prototype,"alphaCutoff",void 0),(0,n._)([(0,o.MZ)({type:Boolean})],d.prototype,"doubleSided",void 0),(0,n._)([(0,i.e)({none:"none",back:"back",front:"front"})],d.prototype,"cullFace",void 0),(0,n._)([(0,o.MZ)({type:u})],d.prototype,"normalTexture",void 0),(0,n._)([(0,o.MZ)({type:u})],d.prototype,"occlusionTexture",void 0),(0,n._)([(0,o.MZ)({type:u})],d.prototype,"emissiveTexture",void 0),(0,n._)([(0,o.MZ)({type:[Number]})],d.prototype,"emissiveFactor",void 0),(0,n._)([(0,o.MZ)({type:p})],d.prototype,"pbrMetallicRoughness",void 0),d=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],d);let c=class extends s.oY{};(0,n._)([(0,o.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],c.prototype,"name",void 0),(0,n._)([(0,i.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],c.prototype,"format",void 0),c=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],c);let f=class extends s.oY{constructor(){super(...arguments),this.atlas=!1}};(0,n._)([(0,o.MZ)({type:[c]})],f.prototype,"formats",void 0),(0,n._)([(0,o.MZ)({type:Boolean})],f.prototype,"atlas",void 0),f=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],f);let y=class extends s.oY{};(0,n._)([(0,i.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),(0,n._)([(0,o.MZ)({type:Number})],y.prototype,"component",void 0),y=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],y);let m=class extends s.oY{};(0,n._)([(0,i.e)({draco:"draco"})],m.prototype,"encoding",void 0),(0,n._)([(0,o.MZ)({type:[String]})],m.prototype,"attributes",void 0),m=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],m);let h=class extends s.oY{constructor(){super(...arguments),this.offset=0}};(0,n._)([(0,o.MZ)({type:Number})],h.prototype,"offset",void 0),(0,n._)([(0,o.MZ)({type:y})],h.prototype,"position",void 0),(0,n._)([(0,o.MZ)({type:y})],h.prototype,"normal",void 0),(0,n._)([(0,o.MZ)({type:y})],h.prototype,"uv0",void 0),(0,n._)([(0,o.MZ)({type:y})],h.prototype,"color",void 0),(0,n._)([(0,o.MZ)({type:y})],h.prototype,"uvRegion",void 0),(0,n._)([(0,o.MZ)({type:y})],h.prototype,"featureId",void 0),(0,n._)([(0,o.MZ)({type:y})],h.prototype,"faceRange",void 0),(0,n._)([(0,o.MZ)({type:m})],h.prototype,"compressedAttributes",void 0),h=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],h);let v=class extends s.oY{};(0,n._)([(0,i.e)({triangle:"triangle"})],v.prototype,"topology",void 0),(0,n._)([(0,o.MZ)()],v.prototype,"geometryBuffers",void 0),v=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],v)},133:(e,t,r)=>{r.d(t,{U:()=>s,i:()=>o,s:()=>i});var n=r(54483);class s{}function o(e){return e instanceof n.Z?e===s.instance:"unknown"===e?.toString().toLowerCase()}function i(e){return o(e)?s.instance:e}s.instance=new n.I("Etc/UTC")},47239:(e,t,r)=>{r.d(t,{a:()=>h,b:()=>a,c:()=>s,d:()=>g,e:()=>l,f:()=>o,g:()=>m,h:()=>u,i:()=>v,j:()=>y,n:()=>x,s:()=>p,t:()=>i,u:()=>d,v:()=>c,x:()=>f,z:()=>I});var n=r(44600);function s(e=I){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function o(e,t,r,n,o,i,a=s()){return a[0]=e,a[1]=t,a[2]=r,a[3]=n,a[4]=o,a[5]=i,a}function i(e,t){const r=isFinite(e[2])||isFinite(e[5]);return new n.A(r?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function a(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t,r=0,n=t.length/3){let s=e[0],o=e[1],i=e[2],a=e[3],l=e[4],u=e[5];for(let e=0;e<n;e++)s=Math.min(s,t[r+3*e]),o=Math.min(o,t[r+3*e+1]),i=Math.min(i,t[r+3*e+2]),a=Math.max(a,t[r+3*e]),l=Math.max(l,t[r+3*e+1]),u=Math.max(u,t[r+3*e+2]);e[0]=s,e[1]=o,e[2]=i,e[3]=a,e[4]=l,e[5]=u}function p(e,t=[0,0,0]){return t[0]=function(e){return e[0]>=e[3]?0:e[3]-e[0]}(e),t[1]=function(e){return e[1]>=e[4]?0:e[4]-e[1]}(e),t[2]=function(e){return e[2]>=e[5]?0:e[5]-e[2]}(e),t}function d(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function c(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function f(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function y(e){return e?f(e,x):s(x)}function m(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function h(e,t,r,n,s){return e[0]=t,e[1]=r,e[2]=Number.NEGATIVE_INFINITY,e[3]=n,e[4]=s,e[5]=Number.POSITIVE_INFINITY,e}function v(e){return 6===e.length}function g(e,t,r){if(null==e||null==t)return e===t;if(!v(e)||!v(t))return!1;if(r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}r(48402);const x=[1/0,1/0,1/0,-1/0,-1/0,-1/0],I=[0,0,0,0,0,0];s()},50472:(e,t,r)=>{r.d(t,{f:()=>p});var n=r(29512),s=r(64604),o=r(6407),i=r(80959),a=r(1985),l=r(82408),u=r(43059);async function p(e,t){const r=(0,a.p)(e);if(!r)throw new o.A("invalid-url","Invalid scene service url");const p={...t,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(p.sceneLayerItem??=await async function(e){const t=(await d(e)).serviceItemId;if(!t)return null;const r=new u.default({id:t,apiKey:e.apiKey}),o=await async function(e){const t=n.id?.findServerInfo(e.sceneServerUrl);if(t?.owningSystemUrl)return t.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await(0,s.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(t)return t}catch(e){(0,i.QP)(e)}return null}(e);null!=o&&(r.portal=new l.A({url:o}));try{return r.load({signal:e.signal})}catch(e){return(0,i.QP)(e),null}}(p),null==p.sceneLayerItem)return c(p.sceneServerUrl.replace("/SceneServer","/FeatureServer"),p);const f=await async function({sceneLayerItem:e,signal:t}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:t})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const n=new u.default({portal:r.portal,id:r.id});return await n.load(),n}catch(e){return(0,i.QP)(e),null}}(p);if(!f?.url)throw new o.A("related-service-not-found","Could not find feature service through portal item relationship");p.featureServiceItem=f;const y=await c(f.url,p);return y.portalItem=f,y}async function d(e){if(e.rootDocument)return e.rootDocument;const t={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,s.A)(e.sceneServerUrl,t);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function c(e,t){const r=(0,a.p)(e);if(!r)throw new o.A("invalid-feature-service-url","Invalid feature service url");const n=r.url.path,i=t.layerId;if(null==i)return{serverUrl:n};const l=d(t),u=t.featureServiceItem?await t.featureServiceItem.fetchData("json"):null,p=(u?.layers?.[0]||u?.tables?.[0])?.customParameters,c=e=>{const r={query:{f:"json",...p},responseType:"json",authMode:e,signal:t.signal};return(0,s.A)(n,r)},f=c("anonymous").catch((()=>c("no-prompt"))),[y,m]=await Promise.all([f,l]),h=m?.layers,v=y.data&&y.data.layers;if(!Array.isArray(v))throw new Error("expected layers array");if(Array.isArray(h)){for(let e=0;e<Math.min(h.length,v.length);e++)if(h[e].id===i)return{serverUrl:n,layerId:v[e].id}}else if(null!=i&&i<v.length)return{serverUrl:n,layerId:v[i].id};throw new Error("could not find matching associated sublayer")}},52560:(e,t,r)=>{r.d(t,{z:()=>n});const n={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},2026:(e,t,r)=>{function n(e,t){return function(e,t){return t?.mode?t.mode:function(e){return e?l:u}(e).mode}(null!=e&&e.hasZ,t)}function s(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function o(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function i(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function a(e,t){t&&e.warn(".elevationInfo=",t)}r.d(t,{d:()=>n,e:()=>s,f:()=>i,l:()=>a,s:()=>o}),r(69763),r(54131);const l={mode:"absolute-height",offset:0},u={mode:"on-the-ground",offset:null}},36309:(e,t,r)=>{r.d(t,{a:()=>_,b:()=>h,c:()=>g,d:()=>v,g:()=>m,s:()=>f,t:()=>y});var n=r(20266);const s="__begin__",o="__end__",i=new RegExp(s,"ig"),a=new RegExp(o,"ig"),l=new RegExp("^"+s,"i"),u=new RegExp(o+"$","i"),p='"',d=p+" + ",c=" + "+p;function f(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function y(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function m(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=f(e.labelExpression),t.type="conventional"),t}function h(e){const t=m(e);if(!t)return null;switch(t.type){case"conventional":return g(t.expression);case"arcade":return t.expression}return null}function v(e){const t=m(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e?.match(x);return t?.[1].trim()||null}(t.expression);case"arcade":return _(t.expression)}return null}function g(e){let t;return e?(t=(0,n.r)(e,(e=>s+'$feature["'+e+'"]'+o)),t=l.test(t)?t.replace(l,""):p+t,t=u.test(t)?t.replace(u,""):t+p,t=t.replaceAll(i,d).replaceAll(a,c)):t='""',t}const x=/^\s*\{([^}]+)\}\s*$/i,I=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*$/i,F=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,M=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(.+)(\1)\s*\));?\s*$/i;function _(e){if(!e)return null;let t=I.exec(e)||F.exec(e);return t?t[1]||t[3]:(t=M.exec(e),t?t[2]:null)}},95365:(e,t,r)=>{r.d(t,{a:()=>o,g:()=>s});var n=r(30011);async function s(e,t=e.popupTemplate){if(null==t)return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=t,{objectIdField:o,typeIdField:i,globalIdField:a,relationships:l}=e;if(r.includes("*"))return["*"];const u=s?(0,n.eX)(e):[],p=(0,n.DB)(e.fieldsIndex,[...r,...u]);return i&&p.push(i),p&&o&&e.fieldsIndex?.has(o)&&!p.includes(o)&&p.push(o),p&&a&&e.fieldsIndex?.has(a)&&!p.includes(a)&&p.push(a),l&&l.forEach((t=>{const{keyField:r}=t;p&&r&&e.fieldsIndex?.has(r)&&!p.includes(r)&&p.push(r)})),p}function o(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}},23381:(e,t,r)=>{async function n(e,t){const{WhereClause:n}=await Promise.all([r.e(8896),r.e(6589)]).then(r.bind(r,38896)).then((e=>e.W));return n.create(e,t)}function s(e,t){return"1=1"===e?t??e:"1=1"===t?e??t:null!=e&&""!==e?null!=t&&""!==t?`(${e}) AND (${t})`:e:t}r.d(t,{G:()=>n,m:()=>s})},79875:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(6407),s=r(99924),o=r(20266),i=r(36544),a=r(133),l=r(30011),u=r(78016),p=r(54483);r(32773),r(90740),r(32816),r(41390),r(69421),r(40499),r(93181),r(13671),r(91047),r(29298),r(58498),r(45371),r(80959),r(55270),r(50214),r(93804),r(59192),r(95779),r(13262),r(346),r(64604),r(29512),r(99063),r(18683),r(16699),r(26809),r(2589),r(18527),r(94345),r(44600),r(2160),r(49877),r(7969),r(69763),r(56273),r(64752),r(48844),r(29208),r(36533),r(84200),r(97827),r(91695),r(18169),r(48402),r(67504),r(92517),r(77037);const d=new Map;class c{static fromJSON(e){return new c(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new c(e.fields??[],h(e))}static fromLayerJSON(e){return new c(e.fields??[],h(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const r=[];for(const e of this.fields){const t=e?.name,n=y(t);if(t&&n){const s=f(t);this._fieldsMap.set(t,e),this._fieldsMap.set(s,e),this._normalizedFieldsMap.set(n,e),r.push(`${s}:${e.type}:${this._timeZoneByFieldName?.get(t)}`),(0,l.vE)(e)?(this.dateFields.push(e),this._dateFieldsSet.add(e)):(0,l.WA)(e)&&(this._numericFieldsSet.add(e),this.numericFields.push(e)),(0,l.te)(e)||(0,l.Xz)(e)||(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable)}}r.sort(),this.uid=r.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,l.te)(e)||(0,l.Xz)(e)||e.nullable||void 0!==(0,l.lD)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(f(e))??this._normalizedFieldsMap.get(y(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){const t=this.get(e&&"string"!=typeof e?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):"date"===t.type||"esriFieldTypeDate"===t.type?(o.L.getLogger("esri.layers.support.FieldsIndex").error(new n.A("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),u.u):m.has(t.type)?u.a:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u.a?a.U.instance:t===u.u?p.F.utcInstance:(0,i.g)(d,t,(()=>p.I.create(t))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return(0,l.OH)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,s.Wj)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function f(e){return e.trim().toLowerCase()}function y(e){return(0,l.rS)(e)?.toLowerCase()??""}const m=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function h(e){const t=new Map;if(!e.fields)return t;const r=!0===e.datesInUnknownTimezone,{timeInfo:n,editFieldsInfo:s}=e,o=(n?"startField"in n?n.startField:n.startTimeField:"")??"",i=(n?"endField"in n?n.endField:n.endTimeField:"")??"",a="dateFieldsTimeZone"in e?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,u.f)(e.dateFieldsTimeReference):null,l=s?"timeZone"in s?s.timeZone??a:s.dateFieldsTimeReference?(0,u.f)(s.dateFieldsTimeReference):a??u.u:null,p=n?"timeZone"in n?n.timeZone??a:n.timeReference?(0,u.f)(n.timeReference):a:null,d=new Map([[f(s?.creationDateField??""),l],[f(s?.editDateField??""),l],[f(o),p],[f(i),p]]);for(const{name:n,type:s}of e.fields)if(m.has(s))t.set(n,u.a);else if("date"!==s&&"esriFieldTypeDate"!==s)t.set(n,null);else if(r)t.set(n,u.a);else{const e=d.get(f(n??""))??a;t.set(n,e)}return t}},71895:(e,t,r)=>{r.d(t,{A:()=>p});var n,s=r(32816),o=r(17745),i=r(99924),a=r(29298),l=(r(32773),r(20266),r(69421));r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(90740),r(81272),r(36544),r(44945);let u=n=class extends i.oY{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new o.A}clone(){return new n({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,s._)([(0,a.MZ)({type:String,json:{write:!0}})],u.prototype,"floorField",void 0),(0,s._)([(0,a.MZ)({json:{read:!1,write:!1}})],u.prototype,"viewAllMode",void 0),(0,s._)([(0,a.MZ)({json:{read:!1,write:!1}})],u.prototype,"viewAllLevelIds",void 0),u=n=(0,s._)([(0,l.$)("esri.layers.support.LayerFloorInfo")],u);const p=u}}]);