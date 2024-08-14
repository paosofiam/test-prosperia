"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1751,7138],{24877:(e,t,r)=>{r.d(t,{C:()=>d});var i=r(32816),s=r(17745),a=(r(73067),r(6407),r(20266),r(41390)),n=r(29298),l=r(69421);let o=class extends s.A{constructor(e){super(e),this.getCollections=null}initialize(){this.addHandles((0,a.a)((()=>this._refresh())))}destroy(){this.getCollections=null}_refresh(){const e=null!=this.getCollections?this.getCollections():null;if(null==e)return void this.removeAll();let t=0;for(const r of e)null!=r&&(t=this._processCollection(t,r));this.splice(t,this.length)}_createNewInstance(e){return new s.A(e)}_processCollection(e,t){if(!t)return e;const r=this.itemFilterFunction??(e=>!!e);for(const i of t)if(i){if(r(i)){const t=this.indexOf(i,e);t>=0?t!==e&&this.reorder(i,e):this.add(i,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(i);if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r);else e=this._processCollection(e,t)}}return e}};(0,i._)([(0,n.MZ)()],o.prototype,"getCollections",void 0),(0,i._)([(0,n.MZ)()],o.prototype,"getChildrenFunction",void 0),(0,i._)([(0,n.MZ)()],o.prototype,"itemFilterFunction",void 0),o=(0,i._)([(0,l.$)("esri.core.CollectionFlattener")],o);const d=o},67138:(e,t,r)=>{r.d(t,{c:()=>i,g:()=>s});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},40558:(e,t,r)=>{var i;r.d(t,{S:()=>i}),function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(i||(i={}))},8410:(e,t,r)=>{r.d(t,{b:()=>s,e:()=>n});var i=r(6407);async function s(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const a=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function n(e,t,r){let s=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:r})=>new i.A(e,t,r)));if(e.blockedRelativeUrls&&(s=s.concat(e.blockedRelativeUrls.map((e=>new i.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:i}=r;e&&(s=s.filter((({name:e})=>!(a.has(e)||t.includes(e))))),i&&(s=s.filter((e=>"web-document-write:property-required"!==e.name)))}if(s.length>0)throw new i.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:s})}},67321:(e,t,r)=>{r.d(t,{C_:()=>p,OH:()=>h,Vh:()=>m,on:()=>y,pc:()=>f,wB:()=>l,z7:()=>o}),r(73067),r(17745);var i=r(80959),s=r(13671),a=r(57732),n=r(41390);function l(e,t,r={}){return d(e,t,r,u)}function o(e,t,r={}){return d(e,t,r,c)}function d(e,t,r={},i){let s=null;const l=r.once?(e,r)=>{i(e)&&((0,a.r)(s),t(e,r))}:(e,r)=>{i(e)&&t(e,r)};if(s=(0,n.w)(e,l,r.sync,r.equals),r.initial){const t=e();l(t,t)}return s}function y(e,t,r,n={}){let o=null,d=null,y=null;function p(){o&&d&&(d.remove(),n.onListenerRemove?.(o),o=null,d=null)}function u(e){n.once&&n.once&&(0,a.r)(y),r(e)}const c=l(e,((e,r)=>{p(),(0,i.i)(e)&&(o=e,d=(0,i.o)(e,t,u),n.onListenerAdd?.(e))}),{sync:n.sync,initial:!0});return y=(0,s.m)((()=>{c.remove(),p()})),y}function p(e,t){return function(e,t,r){if((0,i.G4)(r))return Promise.reject((0,i.NK)());const n=e();if(t?.(n))return Promise.resolve(n);let l=null;function o(){l=(0,a.r)(l)}return new Promise(((a,n)=>{l=(0,s.h)([(0,i.u7)(r,(()=>{o(),n((0,i.NK)())})),d(e,(e=>{o(),a(e)}),{sync:!1,once:!0},t??u)])}))}(e,c,t)}function u(e){return!0}function c(e){return!!e}r(32816),r(29298),r(20266),r(90740),r(32773),r(36544),r(93181),r(40499),r(6407),r(69421),r(91047),r(81272),r(45371),r(44945),r(58498);const h={sync:!0},m={initial:!0},f={sync:!0,initial:!0}},64132:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var i=r(32816),s=r(24877),a=r(65283),n=r(20266),l=r(2810),o=r(80959),d=r(67321),y=r(29298),p=(r(32773),r(93181)),u=r(49877),c=r(69421),h=r(56273),m=r(41390),f=r(73597),v=r(31315),g=r(88730),b=r(38424),w=r(96807),L=r(57492),S=r(43059),I=r(17745),_=r(19297);function A(e,t,r){let i,s;if(e)for(let a=0,n=e.length;a<n;a++){if(i=e.at(a),i?.[t]===r)return i;if("group"===i?.type&&(s=A(i.layers,t,r),s))return s}}r(40499),r(13671),r(58498),r(91047),r(45371),r(81272),r(90740),r(36544),r(6407),r(44945),r(94345),r(44600),r(2160),r(99924),r(7969),r(69763),r(93804),r(18683),r(64604),r(29512),r(99063),r(64752),r(48844),r(29208),r(36533),r(84200),r(97827),r(91695),r(18169),r(48402),r(16699),r(26809),r(2589),r(18527),r(67504),r(92517),r(77037),r(66136),r(4734),r(50214),r(59192),r(78016),r(54483),r(80473),r(73509),r(28276);const M=e=>{let t=class extends e{constructor(...e){super(...e),this.layers=new I.A;const t=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||n.L.getLogger(this).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`)},r=e=>{e.parent=null,this.layerRemoved(e)};this.addHandles([this.layers.on("before-add",(e=>{if(e.item===this)return e.preventDefault(),void n.L.getLogger(this).error("#add()","Cannot add layer to itself.");var t;(t=e.item).parent&&"remove"in t.parent&&t.parent.remove(t)})),this.layers.on("after-add",(e=>t(e.item))),this.layers.on("after-remove",(e=>r(e.item)))])}destroy(){const e=this.layers.toArray();for(const t of e)t.destroy();this.layers.destroy()}set layers(e){this._set("layers",(0,_.r)(e,this._get("layers")))}add(e,t){const r=this.layers;if(t=r.getNextIndex(t),e instanceof f.A){const i=e;i.parent===this?this.reorder(i,t):r.add(i,t)}else(0,o.$X)(e)?e.then((e=>{this.destroyed||this.add(e,t)})):n.L.getLogger(this).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,t){const r=this.layers;let i=r.getNextIndex(t);e.slice().forEach((e=>{e.parent!==this?(r.add(e,i),i+=1):this.reorder(e,i)}))}findLayerById(e){return A(this.layers,"id",e)}findLayerByUid(e){return A(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,t){return this.layers.reorder(e,t)}layerAdded(e){}layerRemoved(e){}};return(0,i._)([(0,y.MZ)()],t.prototype,"layers",null),t=(0,i._)([(0,c.$)("esri.support.LayersMixin")],t),t};function T(e,t,r){if(e)for(let i=0,s=e.length;i<s;i++){const s=e.at(i);if(s[t]===r)return s;if("group"===s?.type){const e=T(s.tables,t,r);if(e)return e}}}const P=e=>{let t=class extends e{constructor(...e){super(...e),this.tables=new I.A,this.addHandles([this.tables.on("after-add",(e=>{const t=e.item;t.parent&&t.parent!==this&&"tables"in t.parent&&t.parent.tables.remove(t),t.parent=this,"feature"!==t.type&&n.L.getLogger(this).error(`Layer 'title:${t.title}, id:${t.id}' of type '${t.type}' is not supported as a table and will therefore be ignored.`)})),this.tables.on("after-remove",(e=>{e.item.parent=null}))])}destroy(){const e=this.tables.toArray();for(const t of e)t.destroy();this.tables.destroy()}set tables(e){this._set("tables",(0,_.r)(e,this._get("tables")))}findTableById(e){return T(this.tables,"id",e)}findTableByUid(e){return T(this.tables,"uid",e)}};return(0,i._)([(0,y.MZ)()],t.prototype,"tables",null),t=(0,i._)([(0,c.$)("esri.support.TablesMixin")],t),t},G=Symbol("WebScene");var E=r(40558),C=r(8410),O=r(13478);r(73067),r(12119),r(13201),r(13226),r(12856),r(47812),r(67138),r(98238),r(1178),r(49755),r(30011),r(55270),r(95779),r(13262),r(346),r(54131),r(19869),r(64524),r(72604),r(82408),r(69277),r(70580),r(75191),r(24319),r(62092),r(82454),r(78281),r(47387),r(46728),r(64102),r(89935),r(49813);let x=class extends((0,v.dM)((0,w.j)((0,g.q)((0,b.A)(P(M((0,l.M)(f.A)))))))){constructor(e){super(e),this.allLayers=new s.C({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=function(e){return new s.C({getCollections:()=>[e.tables,e.layers],getChildrenFunction:e=>{const t=[];return"tables"in e&&t.push(e.tables),"layers"in e&&t.push(e.layers),t},itemFilterFunction:e=>{const t=e.parent;return!!t&&"tables"in t&&t.tables.includes(e)}})}(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=(0,o.sg)((async(e,t,i)=>{const{save:s,saveAs:a}=await r.e(5433).then(r.bind(r,65433));switch(e){case E.S.SAVE:return s(this,t);case E.S.SAVE_AS:return a(this,i,t)}}))}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([(0,d.wB)((()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&G in e}),(e=>{const t="prevent-adding-tables";this.removeHandles(t),e&&(this.tables.removeAll(),this.addHandles((0,d.on)((()=>this.tables),"before-add",(e=>{e.preventDefault(),n.L.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")})),t))}),d.pc),(0,d.wB)((()=>this.visible),this._onVisibilityChange.bind(this),d.OH)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===m.O.USER}_writeLayers(e,t,r,i){const s=[];if(!e)return s;e.forEach((e=>{const t=(0,O.g)(e,i.webmap?i.webmap.getLayerJSONFromResourceInfo(e):null,i);t?.layerType&&s.push(t)})),t.layers=s}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,t,r){const{itemId:i,layerType:s}=t;if("GroupLayer"===s&&i)return new S.default({id:i,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}set visibilityMode(e){const t=this._get("visibilityMode")!==e;this._set("visibilityMode",e),t&&this._enforceVisibility(e,this.visible)}async beforeSave(){return(0,C.b)(this)}load(e){const t=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:L.l},e).catch((e=>{if((0,o.QP)(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(t),Promise.resolve(this)}async loadAll(){return(0,a.l)(this,(e=>{e(this.layers,this.tables)}))}async save(e){return this._debouncedSaveOperations(E.S.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(E.S.SAVE_AS,t,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles((0,d.wB)((()=>e.visible),(t=>this._onChildVisibilityChange(e,t)),d.OH),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach((t=>{t!==e&&(t.visible=!1)}))}_enforceVisibility(e,t){if(!(0,p.g)(this).initialized)return;const r=this.layers;let i=r.find((e=>e.visible));switch(e){case"exclusive":r.length&&!i&&(i=r.at(0),i.visible=!0),this._turnOffOtherLayers(i);break;case"inherited":r.forEach((e=>{e.visible=t}))}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((t=>{t.visible=e}))}_onChildVisibilityChange(e,t){switch(this.visibilityMode){case"exclusive":t?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};(0,i._)([(0,y.MZ)({readOnly:!0,dependsOn:[]})],x.prototype,"allLayers",void 0),(0,i._)([(0,y.MZ)({readOnly:!0})],x.prototype,"allTables",void 0),(0,i._)([(0,y.MZ)({json:{read:!0,write:!0}})],x.prototype,"blendMode",void 0),(0,i._)([(0,y.MZ)()],x.prototype,"fullExtent",void 0),(0,i._)([(0,y.MZ)({readOnly:!0})],x.prototype,"sourceIsPortalItem",null),(0,i._)([(0,y.MZ)({json:{read:!1,write:{ignoreOrigin:!0}}})],x.prototype,"layers",void 0),(0,i._)([(0,h.w)("layers")],x.prototype,"_writeLayers",null),(0,i._)([(0,y.MZ)({type:["GroupLayer"]})],x.prototype,"operationalLayerType",void 0),(0,i._)([(0,y.MZ)({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,t,r){return{enabled:"Group Layer"===e?.type&&r?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],x.prototype,"portalItem",null),(0,i._)([(0,u.r)("web-map","portalItem",["itemId"])],x.prototype,"readPortalItem",null),(0,i._)([(0,h.w)("web-map","portalItem",{itemId:{type:String}})],x.prototype,"writePortalItem",null),(0,i._)([(0,y.MZ)()],x.prototype,"spatialReference",void 0),(0,i._)([(0,y.MZ)({json:{read:!1},readOnly:!0,value:"group"})],x.prototype,"type",void 0),(0,i._)([(0,y.MZ)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,t,r)=>{"inherited"!==e&&(t[r]=e)}}}}})],x.prototype,"visibilityMode",null),x=(0,i._)([(0,c.$)("esri.layers.GroupLayer")],x);const F=x},88730:(e,t,r)=>{r.d(t,{q:()=>b});var i=r(32816),s=r(66136),a=r(6407),n=r(99063),l=r(29298),o=r(36544),d=(r(32773),r(49877)),y=r(69421),p=r(56273),u=r(82530),c=r(99924),h=r(98238);r(4734),r(50214),r(93804),r(90740),r(59192),r(13671),r(78016),r(54483),r(20266),r(41390),r(40499),r(93181),r(58498),r(91047),r(45371),r(80959),r(44600),r(2160),r(7969),r(69763),r(18683),r(64604),r(29512),r(64752),r(48844),r(29208),r(1178),r(49755),r(30011),r(55270),r(95779),r(13262),r(346),r(16699),r(26809),r(2589),r(18527),r(94345),r(36533),r(84200),r(97827),r(91695),r(18169),r(48402),r(67504),r(92517),r(77037),r(54131),r(19869),r(64524);const m={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},f={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},v={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},g={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,Voxel:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":m,"web-map/basemap":f,"web-map/tables":v,"link-chart/operational-layers":{...m,LinkChartLayer:!0},"link-chart/basemap":f,"link-chart/tables":v,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0}},b=e=>{let t=class extends e{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,t,r){return"Group Layer"===r?.portalItem?.type?void 0:e}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&(0,c.w)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){e&&"tables"!==i?.layerContainerType&&(t.layerType=e)}writeTitle(e,t){t.title=e??"Layer"}readTimeExtent(e){return e?s.A.fromArray(e):null}writeTimeExtent(e,t,r,i){e&&"tables"!==i.layerContainerType&&(e.isEmpty?i?.messages&&i.messages.push(new a.A("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):t[r]=e.toArray())}read(e,t){t&&(t.layer=this),(0,c.r)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(!this.persistenceEnabled&&!t?.ignorePersistenceEnabled)return null;if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=g[e];let i=!!r?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return t.messages?.push(new a.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof a.A&&"web-document-write:property-required"===e.name)).length;return(0,n.w8)(r?.url)?(t?.messages?.push(new a.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&i?null:r}beforeSave(){}};return(0,i._)([(0,l.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,i._)([(0,d.r)("id",["id"])],t.prototype,"readId",null),(0,i._)([(0,l.MZ)(h.d)],t.prototype,"listMode",void 0),(0,i._)([(0,p.w)("listMode")],t.prototype,"writeListMode",null),(0,i._)([(0,l.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:u.e}}}}})],t.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.w)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,i._)([(0,l.MZ)(h.o)],t.prototype,"opacity",void 0),(0,i._)([(0,l.MZ)({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,i._)([(0,p.w)("title"),(0,p.w)(["web-scene"],"title")],t.prototype,"writeTitle",null),(0,i._)([(0,l.MZ)({type:s.A,json:{origins:{"web-scene":{write:{layerContainerTypes:u.e}}}}})],t.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,d.r)("visibilityTimeExtent")],t.prototype,"readTimeExtent",null),(0,i._)([(0,p.w)(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[o.I,o.N]]}})],t.prototype,"writeTimeExtent",null),(0,i._)([(0,l.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:u.e}}},name:"visibility",write:!0}})],t.prototype,"visible",void 0),t=(0,i._)([(0,y.$)("esri.layers.mixins.OperationalLayer")],t),t}},38424:(e,t,r)=>{r.d(t,{A:()=>S});var i=r(32816),s=r(90740),a=r(29512),n=r(64604),l=r(73067),o=r(6407),d=r(20266),y=r(57732),p=r(80959),u=r(99063),c=r(29298),h=(r(32773),r(49877)),m=r(69421),f=r(56273),v=r(72604),g=r(82408),b=r(43059),w=r(24319),L=r(82454);r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(99924),r(36544),r(73509),r(28276),r(44600),r(2160),r(7969),r(69763),r(93804),r(18683),r(64752),r(48844),r(29208),r(59192),r(69277),r(70580),r(75191),r(89935),r(49813),r(1178),r(62092),r(78281),r(44945),r(2589),r(36533),r(84200),r(97827),r(91695),r(18169),r(48402),r(16699),r(26809),r(18527),r(67504),r(47387),r(46728),r(64102);const S=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,y.d)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new b.default({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:i}=await Promise.all([r.e(570),r.e(4295)]).then(r.bind(r,24295));return(0,p.Te)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,p.zf)(e)||d.L.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,p.QP)(e),!0))))}async setUserPrivileges(e,t){if(!s.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(e){(0,p.QP)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,L.g)(r);let s,n;if(i)s=r.portal.url;else try{s=await(0,v.f)(this.url,t)}catch(e){(0,p.QP)(e)}if(!s||!(0,u.b8)(s,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;n=await(a.id?.getCredential(`${s}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,p.QP)(e)}const l=!0,o=!1,d=!1;if(!n)return{features:{edit:l,fullEdit:o},content:{updateItem:d}};try{if(i?await r.reload():(r=new b.default({id:e,portal:{url:s}}),await r.load(t)),r.portal.user)return(0,L.g)(r)}catch(e){(0,p.QP)(e)}return{features:{edit:l,fullEdit:o},content:{updateItem:d}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,p.QP)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?a.id?.findCredential(this.url):null;if(!t)return!0;const r=I.credential===t?I.user:await this._fetchEditingUser(e);return I.credential=t,I.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=a.id?.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,s=g.A.getDefault();if(s&&s.loaded&&(0,u.S8)(s.restUrl)===(0,u.S8)(i))return s.user;const o=`${i}/community/self`,d=null!=e?e.signal:null,y=await(0,l.r)((0,n.A)(o,{authMode:"no-prompt",query:{f:"json"},signal:d}));return y.ok?w.A.fromJSON(y.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||g.A.getDefault());return r&&i&&!(0,u.ut)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new o.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,c.MZ)({type:b.default})],t.prototype,"portalItem",null),(0,i._)([(0,h.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,f.w)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,c.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,c.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,c.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,c.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,m.$)("esri.layers.mixins.PortalLayer")],t),t},I={credential:null,user:null}}}]);