"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4305,3049],{8368:(e,t,i)=>{i.d(t,{A:()=>l});var r=i(32816),a=i(20266),s=i(29298),n=(i(32773),i(69421)),o=i(1985);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,o.p)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,o.s)(e,a.L.getLogger(this)))}};return(0,r._)([(0,s.MZ)()],t.prototype,"title",null),(0,r._)([(0,s.MZ)({type:String})],t.prototype,"url",null),t=(0,r._)([(0,n.$)("esri.layers.mixins.ArcGISService")],t),t}},93049:(e,t,i)=>{i.d(t,{a:()=>s,b:()=>n,g:()=>a});const r="randomUUID"in crypto;function a(){if(r)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function s(){return`{${a().toUpperCase()}}`}function n(){return`{${a()}}`}},54305:(e,t,i)=>{i.r(t),i.d(t,{default:()=>D});var r=i(32816),a=i(17745),s=i(6407),n=i(20266),o=i(36544),l=i(2810),p=i(80959),d=i(99063),y=i(93049),c=i(29298),h=(i(32773),i(49877)),u=i(69421),g=i(56273),m=i(41390),f=i(73597),w=i(16702),S=i(8368),b=i(31315),L=i(4335),M=i(88730),v=i(38424),T=i(46935),I=i(96807),_=i(98238),A=i(43551),G=i(1178);i(81272),i(13671),i(90740),i(93181),i(40499),i(58498),i(91047),i(45371),i(44945),i(99924),i(94345),i(44600),i(2160),i(7969),i(69763),i(93804),i(18683),i(64604),i(29512),i(64752),i(48844),i(29208),i(36533),i(84200),i(97827),i(91695),i(18169),i(48402),i(16699),i(26809),i(2589),i(18527),i(67504),i(92517),i(77037),i(66136),i(4734),i(50214),i(59192),i(78016),i(54483),i(80473),i(73509),i(28276),i(72393),i(52731),i(30011),i(55270),i(95779),i(13262),i(346),i(51961),i(62399),i(64995),i(33150),i(58173),i(66110),i(67520),i(27532),i(88663),i(48103),i(65085),i(33611),i(84857),i(60373),i(98187),i(35902),i(13226),i(16794),i(52357),i(11090),i(49319),i(93546),i(29570),i(34592),i(79825),i(95101),i(67578),i(14896),i(95611),i(98089),i(91366),i(43435),i(73435),i(91381),i(4048),i(85232),i(93471),i(53252),i(34039),i(70061),i(3495),i(97906),i(64524),i(65023),i(31424),i(74676),i(53610),i(29447),i(78273),i(49475),i(32368),i(7391),i(22529),i(43534),i(38094),i(67723),i(47239),i(59858),i(63728),i(7182),i(47788),i(19297),i(82408),i(69277),i(70580),i(75191),i(24319),i(62092),i(4157),i(62401),i(89322),i(20138),i(53370),i(46946),i(3816),i(71992),i(80167),i(4478),i(91808),i(7161),i(55586),i(35121),i(92229),i(18344),i(64884),i(23351),i(51222),i(42870),i(67321),i(73067),i(54512),i(53103),i(19648),i(42948),i(60027),i(57111),i(75651),i(88614),i(1030),i(15319),i(60785),i(56487),i(6399),i(9498),i(23105),i(24079),i(38149),i(19681),i(40328),i(84539),i(65299),i(6510),i(38641),i(27281),i(73502),i(19869),i(3827),i(65174),i(78328),i(72604),i(54616),i(25018),i(49011),i(23787),i(22151),i(38632),i(79875),i(133),i(83002),i(24330),i(91276),i(62482),i(45476),i(69310),i(43682),i(85351),i(54481),i(1535),i(9943),i(89253),i(16677),i(17813),i(3112),i(46626),i(45560),i(56303),i(85890),i(55884),i(32397),i(11494),i(6801),i(41003),i(9380),i(78281),i(47387),i(46728),i(64102),i(13141),i(83637),i(42614),i(11721),i(32159),i(67138),i(59700),i(3952),i(339),i(79281),i(69033),i(13978),i(2824),i(56764),i(11618),i(2232),i(38896),i(26589),i(17872),i(70648),i(49010),i(47215),i(71044),i(172),i(65283),i(43059),i(89935),i(49813),i(81623),i(13478),i(12856),i(47812),i(47368),i(88817),i(75169),i(75377),i(33348),i(53104),i(49197),i(56833),i(73600),i(81284),i(44864),i(95637),i(59930),i(45862),i(72762),i(71613),i(78860),i(26805),i(13983),i(38093),i(25643),i(56367),i(12119),i(13201),i(8904),i(29755),i(97511),i(32264),i(68849),i(82842),i(58196),i(86941),i(1739),i(81618),i(10224),i(36309),i(49755),i(54131),i(62959),i(74159),i(90197),i(76636),i(6837),i(96625),i(69448),i(79205),i(35619),i(60408),i(8824),i(20978),i(1985),i(82454),i(91308),i(53206),i(77e3),i(19049),i(64724),i(63402),i(17618),i(43053),i(19548),i(92975),i(7603),i(14658),i(10043),i(89754),i(76999),i(6105),i(72076),i(5370),i(76641);let E=class extends((0,b.dM)((0,I.j)((0,T.J)((0,S.A)((0,M.q)((0,v.A)((0,l.M)((0,L.d)(f.A))))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(a.A.ofType(w.A)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(a.A.ofType(w.A)),this.type="knowledge-graph",this.url=null}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(e){(0,p.QP)(e)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache()}async _fetchMetadata(){if(!this.url)throw new s.A("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await(0,A.fetchKnowledgeGraph)(this.url);this.knowledgeGraph=e,this._forEachGraphType((e=>{e.name&&this._graphTypeLookup.set(e.name,e)}))}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===m.O.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new w.K({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await(0,w.f)(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach((t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})})),this.setAtOrigin("inclusionModeDefinition",e,(0,m.j)(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if(t?.size>0)t.forEach(((e,i)=>{const r=this._graphTypeLookup.get(i);if(!r)return n.L.getLogger(this).warn(`A named type, ${i}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(i);"relationship"!==r.type&&"entity"!==r.type&&(n.L.getLogger(this).warn(`A named type, ${i}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(i))}));else if(!e.generateAllSublayers)throw new s.A("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){let e=[],t=[];const{inclusionModeDefinition:i}=this,r=i?.namedTypeDefinitions;!i||i.generateAllSublayers?(e=this.knowledgeGraph.dataModel?.entityTypes??[],t=this.knowledgeGraph.dataModel?.relationshipTypes??[]):r&&r.size>0&&r.forEach(((i,r)=>{const a=this._graphTypeLookup.get(r);switch(a?.type){case"relationship":t.push(a);break;case"entity":e.push(a)}})),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){[...this.knowledgeGraph.dataModel?.entityTypes??[],...this.knowledgeGraph.dataModel?.relationshipTypes??[]].forEach((t=>{e(t)}))}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const e of t){const t=this._graphTypeLookup.get(e);t&&(this._addSublayer(t).title=e,"entity"===t.type?this.dataManager.entityTypeNames.add(e):this.dataManager.relationshipTypeNames.add(e),this.dataManager.sublayerCaches.set(e,new Map))}this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach((e=>{const r=this._createSublayer(e);i(r)&&t.push(r),this._updateSublayerCaches(e)}))}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new w.A({objectType:e,parentCompositeLayer:this,graphType:e.type,title:e.name})}_updateSublayers(e,t){t.forEach((t=>{t.parentCompositeLayer=this;const i=e.find((e=>e.type===t.graphType&&e.name===t.graphTypeName));i&&(t.objectType=i,t.read({title:i.name},{origin:"service"}),this._updateSublayerCaches(i))}))}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,r){e[t]="<pending>",i.pendingOperations.push(async function(e){const t=await(0,w.s)(e);return new Blob([t],{type:"application/x-protobuf"})}(this.inclusionModeDefinition).then((a=>{const s=function(e){const t=`definitionSetMap-${(0,y.g)()}.dat`,i=(0,d.fj)("knowledgeGraphLayer",t);return e.resourceFromPath(i)}(r);e[t]=s.itemRelativeUrl,i.toAdd.push({resource:s,content:{type:"blob",blob:a},compress:!1,finish:e=>{this.definitionSetMap=e.url}})})))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}readDefinitionSetMap(e,t,i){return(0,G.f)(e,i)}writeDefinitionSetMap(e,t,i,r){const a=r?.portalItem,s=r?.resources,n=(0,m.n)(r?.origin);if(!a||!s||null==n)return void(e&&(t[i]=(0,G.a)(e,r)));const{inclusionModeDefinition:o}=this;if(!o||this._displaysAllRecords(o))return void(this.definitionSetMap=null);const l=this.originIdOf("inclusionModeDefinition");if(l===m.O.USER||this._namedTypesModified||n<l)this._saveUrlAsNewResource(t,i,s,a);else if(n===l&&e){const n=(0,G.a)(e,r);(0,d.oP)(n)?this._saveUrlAsNewResource(t,i,s,a):t[i]=n}}set inclusionModeDefinition(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("inclusionModeDefinition",e):n.L.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===m.O.DEFAULTS?this._createSublayers(e,this.layers,(e=>!!e.geometryType)):this._updateSublayers(e,this.layers),this.originIdOf("tables")===m.O.DEFAULTS?this._createSublayers(e,this.tables,(e=>!e.geometryType)):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(((e,t)=>{const i=(0,o.g)(this.sublayerIdsCache,t,(()=>new Set));e.members?.forEach((e=>{i.add(e.id)}))}))}async addRecords(e){await this._handleNewRecords(e)}async removeRecords(e){const t=[];for(const i of e)!1===this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.useAllData&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.members?.has(i.id)&&t.push(i);this.dataManager.removeFromLayer(t);for(const e of t)this.sublayerIdsCache.get(e.typeName)?.delete(e.id);return this._refreshNamedTypes(),t}};(0,r._)([(0,c.MZ)()],E.prototype,"dataManager",void 0),(0,r._)([(0,c.MZ)({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],E.prototype,"definitionSetMap",void 0),(0,r._)([(0,h.r)("definitionSetMap")],E.prototype,"readDefinitionSetMap",null),(0,r._)([(0,g.w)("definitionSetMap")],E.prototype,"writeDefinitionSetMap",null),(0,r._)([(0,c.MZ)()],E.prototype,"inclusionModeDefinition",null),(0,r._)([(0,c.MZ)()],E.prototype,"knowledgeGraph",void 0),(0,r._)([(0,c.MZ)({type:a.A.ofType(w.A),json:{write:{ignoreOrigin:!0}}})],E.prototype,"layers",void 0),(0,r._)([(0,c.MZ)()],E.prototype,"memberEntityTypes",void 0),(0,r._)([(0,c.MZ)()],E.prototype,"memberRelationshipTypes",void 0),(0,r._)([(0,c.MZ)({type:["KnowledgeGraphLayer"]})],E.prototype,"operationalLayerType",void 0),(0,r._)([(0,c.MZ)()],E.prototype,"sublayerIdsCache",void 0),(0,r._)([(0,c.MZ)({type:a.A.ofType(w.A),json:{write:{ignoreOrigin:!0}}})],E.prototype,"tables",void 0),(0,r._)([(0,c.MZ)({json:{read:!1}})],E.prototype,"type",void 0),(0,r._)([(0,c.MZ)(_.u)],E.prototype,"url",void 0),E=(0,r._)([(0,u.$)("esri.layers.KnowledgeGraphLayer")],E);const D=E},4335:(e,t,i)=>{i.d(t,{d:()=>n});var r=i(32816),a=i(29298),s=(i(32773),i(20266),i(69421));i(36544),i(93181),i(13671),i(40499),i(6407),i(90740),i(91047);const n=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,r._)([(0,a.MZ)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,r._)([(0,s.$)("esri.layers.mixins.CustomParametersMixin")],t),t}},88730:(e,t,i)=>{i.d(t,{q:()=>S});var r=i(32816),a=i(66136),s=i(6407),n=i(99063),o=i(29298),l=i(36544),p=(i(32773),i(49877)),d=i(69421),y=i(56273),c=i(82530),h=i(99924),u=i(98238);i(4734),i(50214),i(93804),i(90740),i(59192),i(13671),i(78016),i(54483),i(20266),i(41390),i(40499),i(93181),i(58498),i(91047),i(45371),i(80959),i(44600),i(2160),i(7969),i(69763),i(18683),i(64604),i(29512),i(64752),i(48844),i(29208),i(1178),i(49755),i(30011),i(55270),i(95779),i(13262),i(346),i(16699),i(26809),i(2589),i(18527),i(94345),i(36533),i(84200),i(97827),i(91695),i(18169),i(48402),i(67504),i(92517),i(77037),i(54131),i(19869),i(64524);const g={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},m={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},f={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},w={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,Voxel:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":g,"web-map/basemap":m,"web-map/tables":f,"link-chart/operational-layers":{...g,LinkChartLayer:!0},"link-chart/basemap":m,"link-chart/tables":f,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0}},S=e=>{let t=class extends e{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,t,i){return"Group Layer"===i?.portalItem?.type?void 0:e}writeListMode(e,t,i,r){(r&&"ground"===r.layerContainerType||e&&(0,h.w)(this,i,{},r))&&(t[i]=e)}writeOperationalLayerType(e,t,i,r){e&&"tables"!==r?.layerContainerType&&(t.layerType=e)}writeTitle(e,t){t.title=e??"Layer"}readTimeExtent(e){return e?a.A.fromArray(e):null}writeTimeExtent(e,t,i,r){e&&"tables"!==r.layerContainerType&&(e.isEmpty?r?.messages&&r.messages.push(new s.A("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):t[i]=e.toArray())}read(e,t){t&&(t.layer=this),(0,h.r)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(!this.persistenceEnabled&&!t?.ignorePersistenceEnabled)return null;if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,i=w[e];let r=!!i?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(r=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(r=!1),!r)return t.messages?.push(new s.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const i=super.write(e,{...t,layer:this}),r=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof s.A&&"web-document-write:property-required"===e.name)).length;return(0,n.w8)(i?.url)?(t?.messages?.push(new s.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&r?null:i}beforeSave(){}};return(0,r._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,r._)([(0,p.r)("id",["id"])],t.prototype,"readId",null),(0,r._)([(0,o.MZ)(u.d)],t.prototype,"listMode",void 0),(0,r._)([(0,y.w)("listMode")],t.prototype,"writeListMode",null),(0,r._)([(0,o.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:c.e}}}}})],t.prototype,"operationalLayerType",void 0),(0,r._)([(0,y.w)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,r._)([(0,o.MZ)(u.o)],t.prototype,"opacity",void 0),(0,r._)([(0,o.MZ)({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),(0,r._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,r._)([(0,y.w)("title"),(0,y.w)(["web-scene"],"title")],t.prototype,"writeTitle",null),(0,r._)([(0,o.MZ)({type:a.A,json:{origins:{"web-scene":{write:{layerContainerTypes:c.e}}}}})],t.prototype,"visibilityTimeExtent",void 0),(0,r._)([(0,p.r)("visibilityTimeExtent")],t.prototype,"readTimeExtent",null),(0,r._)([(0,y.w)(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[l.I,l.N]]}})],t.prototype,"writeTimeExtent",null),(0,r._)([(0,o.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:c.e}}},name:"visibility",write:!0}})],t.prototype,"visible",void 0),t=(0,r._)([(0,d.$)("esri.layers.mixins.OperationalLayer")],t),t}},38424:(e,t,i)=>{i.d(t,{A:()=>M});var r=i(32816),a=i(90740),s=i(29512),n=i(64604),o=i(73067),l=i(6407),p=i(20266),d=i(57732),y=i(80959),c=i(99063),h=i(29298),u=(i(32773),i(49877)),g=i(69421),m=i(56273),f=i(72604),w=i(82408),S=i(43059),b=i(24319),L=i(82454);i(41390),i(40499),i(93181),i(13671),i(58498),i(91047),i(45371),i(99924),i(36544),i(73509),i(28276),i(44600),i(2160),i(7969),i(69763),i(93804),i(18683),i(64752),i(48844),i(29208),i(59192),i(69277),i(70580),i(75191),i(89935),i(49813),i(1178),i(62092),i(78281),i(44945),i(2589),i(36533),i(84200),i(97827),i(91695),i(18169),i(48402),i(16699),i(26809),i(18527),i(67504),i(47387),i(46728),i(64102);const M=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,d.d)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,i){if(t.itemId)return new S.default({id:t.itemId,portal:i?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:r}=await Promise.all([i.e(570),i.e(4295)]).then(i.bind(i,24295));return(0,y.Te)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,y.zf)(e)||p.L.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,y.QP)(e),!0))))}async setUserPrivileges(e,t){if(!a.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:i,fullEdit:r},content:{updateItem:a}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",i),this._set("userHasFullEditingPrivileges",r),this._set("userHasUpdateItemPrivileges",a)}catch(e){(0,y.QP)(e)}}async _fetchUserPrivileges(e,t){let i=this.portalItem;if(!e||!i||!i.loaded||i.sourceUrl)return this._fetchFallbackUserPrivileges(t);const r=e===i.id;if(r&&i.portal.user)return(0,L.g)(i);let a,n;if(r)a=i.portal.url;else try{a=await(0,f.f)(this.url,t)}catch(e){(0,y.QP)(e)}if(!a||!(0,c.b8)(a,i.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;n=await(s.id?.getCredential(`${a}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,y.QP)(e)}const o=!0,l=!1,p=!1;if(!n)return{features:{edit:o,fullEdit:l},content:{updateItem:p}};try{if(r?await i.reload():(i=new S.default({id:e,portal:{url:a}}),await i.load(t)),i.portal.user)return(0,L.g)(i)}catch(e){(0,y.QP)(e)}return{features:{edit:o,fullEdit:l},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,y.QP)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?s.id?.findCredential(this.url):null;if(!t)return!0;const i=v.credential===t?v.user:await this._fetchEditingUser(e);return v.credential=t,v.user=i,null==i?.privileges||i.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const i=s.id?.findServerInfo(this.url??"");if(!i?.owningSystemUrl)return null;const r=`${i.owningSystemUrl}/sharing/rest`,a=w.A.getDefault();if(a&&a.loaded&&(0,c.S8)(a.restUrl)===(0,c.S8)(r))return a.user;const l=`${r}/community/self`,p=null!=e?e.signal:null,d=await(0,o.r)((0,n.A)(l,{authMode:"no-prompt",query:{f:"json"},signal:p}));return d.ok?b.A.fromJSON(d.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const i=t?.portal,r=this.portalItem?.id&&(this.portalItem.portal||w.A.getDefault());return i&&r&&!(0,c.ut)(r.restUrl,i.restUrl)?(t.messages&&t.messages.push(new l.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,r._)([(0,h.MZ)({type:S.default})],t.prototype,"portalItem",null),(0,r._)([(0,u.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,r._)([(0,m.w)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,r._)([(0,h.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,r._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,r._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,r._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,r._)([(0,g.$)("esri.layers.mixins.PortalLayer")],t),t},v={credential:null,user:null}}}]);