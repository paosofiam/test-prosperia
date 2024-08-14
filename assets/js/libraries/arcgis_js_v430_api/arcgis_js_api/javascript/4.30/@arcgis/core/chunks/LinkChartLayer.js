/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../geometry.js";import t from"../core/Collection.js";import i from"../core/Error.js";import{L as r}from"./Logger.js";import{g as s}from"./ensureType.js";import{throwIfAborted as o}from"../core/promiseUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import p from"../layers/Layer.js";import{b as l}from"./featureConversionUtils.js";import{O as m}from"./OptimizedGeometry.js";import u,{K as h,g as d,m as y,a as c,b as g,c as j,d as f}from"../layers/knowledgeGraph/KnowledgeGraphSublayer.js";import{BlendLayer as b}from"../layers/mixins/BlendLayer.js";import{ScaleRangeLayer as C}from"../layers/mixins/ScaleRangeLayer.js";import{g as L}from"./assets.js";import{fetchKnowledgeGraph as k}from"../rest/knowledgeGraphService.js";import M from"../geometry/Extent.js";import w from"../geometry/Point.js";import E from"../geometry/Polyline.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"../config.js";import"./writer.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/support/webMercatorUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../TimeExtent.js";import"./timeUtils.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"./aaBoundingBox.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./number.js";import"./substitute.js";import"./messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../Graphic.js";import"./compilerUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../symbols/support/jsonUtils.js";import"./layerUtils2.js";import"./defaults.js";import"./defaultsJSON.js";import"../renderers/DictionaryRenderer.js";import"./LRUCache.js";import"./MemCache.js";import"./Version.js";import"../layers/support/FieldsIndex.js";import"./UnknownTimeZone.js";import"./OverrideHelper.js";import"./colorUtils2.js";import"./vec4.js";import"./vec4f64.js";import"./utils7.js";import"./quantizationUtils.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./FeatureStore.js";import"./BoundsStore.js";import"./PooledRBush.js";import"./quickselect.js";import"./_commonjsHelpers.js";import"./timeSupport.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils8.js";import"./utils9.js";import"./projectionSupport.js";import"./json.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"./QueryEngine.js";import"../core/sql/WhereClause.js";import"./TimeOnly.js";import"./fieldType.js";import"./QueryEngineCapabilities.js";import"./utils12.js";import"./utils2.js";import"./basemapUtils.js";import"../Basemap.js";import"./loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./utils3.js";import"./mat4.js";import"./utils10.js";import"./generateRendererUtils.js";import"./SnappingCandidate.js";import"./Scheduler.js";import"../core/signal.js";import"./debugFlags.js";import"./clientSideDefaults.js";import"../rest/knowledgeGraph/GraphQueryStreaming.js";import"../rest/knowledgeGraph/GraphQuery.js";import"../rest/support/Query.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./fieldProperties.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"./jsonUtils.js";import"./parser.js";import"../layers/support/FeatureFilter.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"./layerContainerType.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"./commonProperties2.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./featureLayerUtils.js";import"./featureQueryAll.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"./clusterUtils.js";import"./MD5.js";import"../layers/mixins/OrderedLayer.js";import"./OrderByInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"./labelingInfo.js";import"../rest/support/FeatureSet.js";import"../support/popupUtils.js";import"../rest/knowledgeGraph/GraphQueryResult.js";import"./GraphQueryResultHeader.js";import"../rest/knowledgeGraph/GraphQueryStreamingResult.js";import"../rest/knowledgeGraph/KnowledgeGraph.js";import"../rest/knowledgeGraph/DataModel.js";import"../rest/knowledgeGraph/EntityType.js";import"../rest/knowledgeGraph/GraphObjectType.js";import"../rest/knowledgeGraph/FieldIndex.js";import"../rest/knowledgeGraph/GraphProperty.js";import"../rest/knowledgeGraph/RelationshipType.js";import"../rest/knowledgeGraph/ServiceDefinition.js";import"../rest/knowledgeGraph/Entity.js";import"../rest/knowledgeGraph/GraphNamedObject.js";import"../rest/knowledgeGraph/GraphObject.js";import"../rest/knowledgeGraph/Relationship.js";import"../rest/knowledgeGraph/SearchIndex.js";import"./ObjectValue.js";import"../rest/knowledgeGraph/Path.js";import"../rest/knowledgeGraph/GraphApplyEditsResult.js";var D;let T;!function(e){e.MULTIPLIER="multiplier",e.ABSOLUTE="absoluteValue"}(D||(D={}));let R=null;var x,I,S,v,A,N,G,U,P,_,F;function O(e,t,i,r,s,o){const a=i.length,n=s.length,p=Float64Array.BYTES_PER_ELEMENT,l=Uint32Array.BYTES_PER_ELEMENT,m=Uint8Array.BYTES_PER_ELEMENT,u=16+a*(m+2*p)+n*(2*l),h=R._malloc(u);try{const m=h+16-h%16,u=m+a*p,d=u+a*p,y=d+n*l,c=y+n*l,g=()=>[R.HEAPF64.subarray(m>>3,(m>>3)+a),R.HEAPF64.subarray(u>>3,(u>>3)+a),R.HEAPU32.subarray(d>>2,(d>>2)+n),R.HEAPU32.subarray(y>>2,(y>>2)+n),R.HEAPU8.subarray(c,c+a)],[j,f,b,C,L]=g();j.set(i),f.set(r),b.set(s),C.set(o),L.set(t);let k=e(a,c,m,u,n,d,y),M=null,w=null;if(k){const e=R.getLayoutLinksTypes(),t=R.getLayoutLinksVerticesEndIndices(),i=R.getLayoutLinksVertices(),r=R.countLayoutLinksVertices();!n||e&&t?r&&!i?k=!1:(M={types:new Uint8Array(R.HEAPU8.subarray(e,e+n)),vertexEndIndex:new Uint32Array(R.HEAPU32.subarray(t>>2,(t>>2)+n)),vertices:new Float64Array(R.HEAPF64.subarray(i>>3,(i>>3)+2*r))},w=R.getAuxiliaryGraphicElements()):k=!1}const[E,D,T,x,I]=g();return i.set(E),r.set(D),s.set(T),o.set(x),t.set(I),{success:k,links:M,graphics:w}}finally{R._free(h),R.cleanupLayout()}}!function(e){e[e.None=0]="None",e[e.IsMovable=1]="IsMovable",e[e.IsGeographic=2]="IsGeographic",e[e.IsRoot=4]="IsRoot"}(x||(x={})),function(e){e[e.Regular=0]="Regular",e[e.Orthogonal=1]="Orthogonal",e[e.Curved=2]="Curved",e[e.Recursive=3]="Recursive"}(I||(I={})),function(e){e.getMinIdealEdgeLength=function(){return R.getMinIdealEdgeLength()},e.apply=function(e,t,i,r,s,o=2,a=1,n=-1){return O(((e,t,i,r,s,p,l)=>R.applyForceDirectedLayout(e,t,i,r,s,p,l,o,a,n)),e,t,i,r,s)}}(S||(S={})),function(e){e.apply=function(e,t,i,r,s,o=2,a=1,n=-1){return O(((e,t,i,r,s,p,l)=>R.applyCommunityLayout(e,t,i,r,s,p,l,o,a,n)),e,t,i,r,s)}}(v||(v={})),function(e){e.apply=function(e,t,i,r,s){return O(R.applySimpleLayout,e,t,i,r,s)}}(A||(A={})),function(e){e.apply=function(e,t,i,r,s){return O(R.applyHierarchicalLayout,e,t,i,r,s)}}(N||(N={})),function(e){e.apply=function(e,t,i,r,s){return O(R.applyRadialTreeLayout,e,t,i,r,s)}}(G||(G={})),function(e){e.apply=function(e,t,i,r,s){return O(R.applySmartTreeLayout,e,t,i,r,s)}}(U||(U={})),function(e){e.apply=function(e,t,i,r,s,o,a,n,p){return O(((e,t,i,o,a,l,m)=>{if(r.length!==e)return!1;if(s.length!==e)return!1;if(n.length!==a)return!1;if(p.length!==a)return!1;const u=Float64Array.BYTES_PER_ELEMENT,h=16,d=R._malloc(h+e*u),y=R._malloc(h+e*u),c=R._malloc(h+a*u),g=R._malloc(h+a*u),j=d+h-d%h,f=y+h-y%h,b=c+h-c%h,C=g+h-g%h;try{return R.HEAPF64.subarray(j>>3,(j>>3)+e).set(r),R.HEAPF64.subarray(f>>3,(f>>3)+e).set(s),R.HEAPF64.subarray(b>>3,(b>>3)+a).set(n),R.HEAPF64.subarray(C>>3,(C>>3)+a).set(p),R.applyChronologicalLayout(e,t,i,o,j,f,a,l,m,b,C)}finally{R._free(d),R._free(y),R._free(c),R._free(g)}}),e,t,i,o,a)}}(P||(P={})),function(e){e[e.Undirected=0]="Undirected",e[e.Directed=1]="Directed",e[e.Reversed=2]="Reversed"}(_||(_={})),function(e){e[e.ByCC_Raw=0]="ByCC_Raw",e[e.ByCC_NormalizeGlobally=1]="ByCC_NormalizeGlobally",e[e.ByCC_NormalizeByCC=2]="ByCC_NormalizeByCC"}(F||(F={}));let B=class extends(b(C(p))){constructor(e){if(super(e),this.dataPreloadedInLocalCache=!1,this.defaultLinkChartConfig=null,this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new t,this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new M({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.sublayerIdsCache=new Map,this.tables=new t,this.type="link-chart",this._originalInclusionList=e.inclusionModeDefinition,e.dataPreloadedInLocalCache&&!e.inclusionModeDefinition)throw new i("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it")}normalizeCtorArgs(e){return{url:e.url,title:e.title,dataPreloadedInLocalCache:e.dataPreloadedInLocalCache,defaultLinkChartConfig:e.defaultLinkChartConfig}}_initializeLayerProperties(e){if(!this.title&&this.url){const e=this.url.split("/");this.title=e[e.length-2]}const t=new Set;let s=[],o=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new i("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");e.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&this._graphTypeLookup.set(e.name,e)})),e.knowledgeGraph.dataModel.relationshipTypes?.forEach((e=>{e.name&&this._graphTypeLookup.set(e.name,e)})),e.inclusionModeDefinition?.generateAllSublayers?(s=e.knowledgeGraph.dataModel.entityTypes??[],o=e.knowledgeGraph.dataModel.relationshipTypes??[]):e.inclusionModeDefinition?.namedTypeDefinitions&&e.inclusionModeDefinition?.namedTypeDefinitions.size>0?e.inclusionModeDefinition?.namedTypeDefinitions.forEach(((i,a)=>{const n=this._graphTypeLookup.get(a);if(!n)return r.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(a);"relationship"===n.type?t.has(a)||(t.add(a),o.push(n)):"entity"===n.type?t.has(a)||(t.add(a),s.push(n)):(r.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't properly modeled and will be removed`),e.inclusionModeDefinition?.namedTypeDefinitions.delete(a))})):(s=e.knowledgeGraph.dataModel.entityTypes??[],o=e.knowledgeGraph.dataModel.relationshipTypes??[]);const a=new h({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=s,this.memberRelationshipTypes=o,this.dataManager=a}load(e){return this.addResolvingPromise(new Promise((t=>{k(this.url).then((i=>{if(this._initializeLayerProperties({knowledgeGraph:i,inclusionModeDefinition:this._originalInclusionList}),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(e.name,{useAllData:!0})})),this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach((e=>{e.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(e.name,{useAllData:!0})}))),this.dataPreloadedInLocalCache)this.loadLayerAssumingLocalCache(),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e=>{e.useAllData=!1,e.members?.forEach((e=>{let t;t=e.linkChartLocation instanceof m?e.linkChartLocation:e.linkChartLocation?l(e.linkChartLocation):null,t&&2===t.coords.length&&0===t.lengths.length?this.entityLinkChartDiagramLookup.set(e.id,t):this.relationshipLinkChartDiagramLookup.set(e.id,t)})),this.addResolvingPromise(this._initializeDiagram().then((async()=>{this.layers.forEach((async e=>{await e.refreshCachedQueryEngine()})),this.tables.forEach((async e=>{await e.refreshCachedQueryEngine()}))})))}));else{const t="GEOGRAPHIC"===this.defaultLinkChartConfig?.layoutMode;this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,t,!0).then((async()=>{o(e);const t=[],i=[];this.loadLayerAssumingLocalCache(),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1,this.dataManager.inclusionModeDefinition.namedTypeDefinitions.forEach((e=>{e.useAllData=!1}))),await this._initializeDiagram(),this.layers.forEach((e=>{i.push(e.refreshCachedQueryEngine()),t.push(new Promise((t=>{e.on("layerview-create",(()=>{t(null)}))})))})),this.tables.forEach((e=>{i.push(e.refreshCachedQueryEngine())})),await Promise.all(i)})))}t(null)}))}))),Promise.resolve(this)}async addRecords(e,t){let i=[];t?.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(i=await d(e,this.dataManager.knowledgeGraph));const r=e.concat(i).filter((e=>!this.sublayerIdsCache.get(e.typeName)?.has(e.id)));await this._handleNewRecords(r)}async removeRecords(e,{cascadeRemoveRelationships:t=!0,recalculateLayout:i=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1}){let r=[];for(const t of e)!1===this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(t.typeName)?.useAllData&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(t.typeName)?.members?.has(t.id)&&r.push(t);if(t){const e=new Set,t=[];for(const t of r)if(this.dataManager.nodeConnectionsLookup.has(t.id))for(const i of this.dataManager.nodeConnectionsLookup.get(t.id))e.add(i);for(const i of e)if(this.dataManager.memberIdTypeLookup.has(i))for(const e of this.dataManager.memberIdTypeLookup.get(i))this.dataManager.relationshipTypeNames.has(e)&&t.push({id:i,typeName:e});r=r.concat(t)}this.dataManager.removeFromLayer(r);for(const e of r)this.sublayerIdsCache.get(e.typeName)?.delete(e.id),this.dataManager.relationshipTypeNames.has(e.typeName)?this.relationshipLinkChartDiagramLookup.delete(e.id):this.entityLinkChartDiagramLookup.delete(e.id);i&&await this.calculateLinkChartLayout(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const s=[];return this.layers.forEach((e=>{s.push(e.refreshCachedQueryEngine())})),await Promise.all(s),this._refreshNamedTypes(),r}async expand(e,t){const i=await this.dataManager.getConnectedRecordIds(e,t),r=i.filter((e=>!this.sublayerIdsCache.get(e.typeName)?.has(e.id)));return await this._handleNewRecords(i),{records:r}}loadLayerAssumingLocalCache(){this.memberRelationshipTypes.forEach((e=>{const t=new u({objectType:e,parentCompositeLayer:this,graphType:"relationship",title:e.name});t.geometryType?this.layers.push(t):this.tables.push(t),this.dataManager.sublayerCaches.has(e.name)||this.dataManager.sublayerCaches.set(e.name,new Map)})),this.memberEntityTypes.forEach((e=>{const t=new u({objectType:e,parentCompositeLayer:this,graphType:"entity",title:e.name});t.geometryType?this.layers.push(t):this.tables.push(t),this.dataManager.sublayerCaches.has(e.name)||this.dataManager.sublayerCaches.set(e.name,new Map)})),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(((e,t)=>{const i=s(this.sublayerIdsCache,t,(()=>new Set));e.members?.forEach((e=>{if(i.add(e.id),e.linkChartLocation)if(e.linkChartLocation instanceof m)this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(e.id,e.linkChartLocation):this.entityLinkChartDiagramLookup.set(e.id,e.linkChartLocation);else{const i=l(e.linkChartLocation);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(e.id,e.linkChartLocation?i:null):this.entityLinkChartDiagramLookup.set(e.id,e.linkChartLocation?i:null)}}))}))}async calculateLinkChartLayout(e="RADIAL_TREE",t){const s=[],o=[],a=[];this.dataManager.sublayerCaches.forEach(((e,t)=>{this.dataManager.entityTypeNames.has(t)?e.forEach((e=>{s.push({typeName:t,feature:e})})):this.dataManager.relationshipTypeNames.has(t)&&e.forEach((e=>{o.push({typeName:t,feature:e})}))})),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const n=new Map,p=new Map,m=new Map,u=new Map,h=new Uint8Array(s.length),d=new Float64Array(s.length),b=new Float64Array(s.length),C=new Uint32Array(o.length),k=new Uint32Array(o.length),D=[],P=new M({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let _,F="FORCE_DIRECTED",O=0,B=0;switch(F="GEOGRAPHIC"===e?"FORCE_DIRECTED":e,F){case"FORCE_DIRECTED":_=S.apply;break;case"COMMUNITY":_=v.apply;break;case"HIERARCHICAL":_=N.apply;break;case"RADIAL_TREE":_=G.apply;break;case"SMART_TREE":_=U.apply;break;default:_=A.apply}s.forEach((({typeName:i,feature:r})=>{if(t?.lockedNodeLocations?.has(r.attributes[y])){"GEOGRAPHIC"===e&&this.dataManager.geographicLookup.has(i)?h[O]=x.IsGeographic:h[O]=x.None;const s=t.lockedNodeLocations.get(r.attributes[y]);d[O]=s.x,b[O]=s.y}else if("GEOGRAPHIC"===e&&this.dataManager.geographicLookup.has(i)){h[O]=x.IsGeographic;let e=null;const t=r.attributes[this.dataManager.geographicLookup.get(i).name],s=this.dataManager.geographicLookup.get(i)?.geometryType;switch(s){case"esriGeometryPoint":d[O]=t?.x,b[O]=t?.y;break;case"esriGeometryPolygon":e=t?.centroid,null!=e?.x&&null!=e?.y?(d[O]=e.x,b[O]=e.y):h[O]=x.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":e=t?.extent?.center,null!=e?.x&&null!=e?.y?(d[O]=e.x,b[O]=e.y):h[O]=x.IsMovable;break;default:h[O]=x.IsMovable}(null==d[O]||null==b[O]||Number.isNaN(d[O])||Number.isNaN(b[O]))&&(h[O]=x.IsMovable,d[O]=0,b[O]=0)}else h[O]=x.IsMovable,d[O]=0,b[O]=0;u.set(r.attributes[y],O),D[O]={feature:r,typeName:i},O++}));let V=!1;const z=new Map;o.forEach((e=>{const t=e.feature.attributes[c],i=e.feature.attributes[g],r=u.get(t),s=u.get(i);if(void 0!==r&&void 0!==s){const o=t+"-"+i,n=z.get(o),p=n?.has(e.typeName);p||(C[B]=r,k[B]=s,void 0===n?z.set(o,new Map([[e.typeName,B]])):n.set(e.typeName,B),B++),a.push(e)}else V=!0,this.relationshipLinkChartDiagramLookup.set(t,null)})),V&&r.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const H=this._validateLayoutSettings(e,t),Q=this._convertLayoutSettingsToCalculationSettings(H);await(T||(T=import("./lclayout.js").then((e=>e.l)).then((({default:e})=>e({locateFile:e=>L(`esri/libs/linkchartlayout/${e}`)}))).then((e=>{R=e})),T));const{success:q,links:Y}=_(h,d,b,C.subarray(0,B),k.subarray(0,B),Q.computationBudgetTime,Q.idealEdgeLengthMultiplier,Q.repulsionRadiusMultiplier);if(!q)throw new i("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(let e=0;e<D.length;e++){if(b[e]>84.9999?b[e]=84.9999:b[e]<-84.9999&&(b[e]=-84.9999),d[e]>179.9999?d[e]=179.9999:d[e]<-179.9999&&(d[e]=-179.9999),D[e].feature.attributes[j]=new w(d[e],b[e]),n.has(D[e].typeName)){const t=n.get(D[e].typeName);t?.set(D[e].feature.attributes[y],D[e].feature)}else{const t=new Map;t.set(D[e].feature.attributes[y],D[e].feature),n.set(D[e].typeName,t)}m.set(D[e].feature.attributes[y],D[e].feature);const t=l(D[e].feature.attributes[j]);this.entityLinkChartDiagramLookup.set(D[e].feature.attributes[y],D[e].feature.attributes[j]?t:null),D[e].feature.attributes[j].x<P.xmin&&(P.xmin=D[e].feature.attributes[j].x),D[e].feature.attributes[j].x>P.xmax&&(P.xmax=D[e].feature.attributes[j].x),D[e].feature.attributes[j].y<P.ymin&&(P.ymin=D[e].feature.attributes[j].y),D[e].feature.attributes[j].y>P.ymax&&(P.ymax=D[e].feature.attributes[j].y)}if(this.linkChartExtent.xmin=P.xmin,this.linkChartExtent.xmax=P.xmax,this.linkChartExtent.ymin=P.ymin,this.linkChartExtent.ymax=P.ymax,!Y)throw new i("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const W=new Map,J=new Map,K=new Map,$=new Set;for(let e=0;e<a.length;e++){const t=[],i=a[e],s=i.feature.attributes[c],o=i.feature.attributes[g],n=s+"-"+o,h=z.get(n).get(i.typeName),d=0===h?0:Y?.vertexEndIndex[h-1];if(!$.has(h)){if($.add(h),Y.types[h]===I.Recursive){const e=[Y.vertices[2*d],Y.vertices[2*d+1]],i=[Y.vertices[2*(d+1)],Y.vertices[2*(d+1)+1]],r=[.5*(e[0]+i[0]),.5*(e[1]+i[1])],s=[r[0]-e[0],r[1]-e[1]],o=[r[0]+s[1],r[1]-s[0]],a=[r[0]-s[1],r[1]+s[0]];t.push(e),t.push(o),t.push(i),t.push(a),t.push(e)}else{if(Y.types[h]!==I.Regular){r.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let e=d;e<Y.vertexEndIndex[h];e++)t.push([Y.vertices[2*e],Y.vertices[2*e+1]])}const e=D[u.get(s)]?.feature.attributes[j],i=D[u.get(o)]?.feature.attributes[j];t[0][0]===e.x&&t[0][1]===e.y||(t[0]=[e.x,e.y]),t[t.length-1][0]===i.x&&t[t.length-1][1]===i.y||(t[t.length-1]=[i.x,i.y]);for(let e=1;e<t.length-1;e++)t[e][1]>85.5?t[e][1]=85.5:t[e][1]<-85.5&&(t[e][1]=-85.5),t[e][0]>179.9999?t[e][0]=179.9999:t[e][0]<-179.9999&&(t[e][0]=-179.9999);W.has(n)?W.get(n).push(t):W.set(n,[t])}const f=W.get(n);J.has(n)||(J.set(n,new Map),K.set(n,new Map));const b=J.get(n),C=K.get(n);b.has(i.typeName)||(b.set(i.typeName,f.shift()),C.set(i.typeName,0));const L=b.get(i.typeName);C.set(i.typeName,C.get(i.typeName)+1);const k=new E({paths:L});if(i.feature.attributes[j]=k,p.has(i.typeName)){const e=p.get(i.typeName);e?.set(i.feature.attributes[y],i.feature)}else{const e=new Map;e.set(i.feature.attributes[y],i.feature),p.set(i.typeName,e)}m.set(i.feature.attributes[y],i.feature);const M=l(i.feature.attributes[j]);this.relationshipLinkChartDiagramLookup.set(i.feature.attributes[y],i.feature.attributes[j]?M:null)}for(const e of a)e.feature.attributes[f]=K.get(e.feature.attributes[c]+"-"+e.feature.attributes[g])?.get(e.typeName)??null;return this._currentLinkChartConfig={layoutMode:e,layoutOptions:H},{nodes:n,links:p,idMap:m}}async applyNewLinkChartLayout(e="RADIAL_TREE",t){const i=[];await this.calculateLinkChartLayout(e,t),this.layers.forEach((e=>{i.push(e.refreshCachedQueryEngine())})),await Promise.all(i),this._refreshNamedTypes()}getCurrentNodeLocations(){const e=new Map;return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t=>{t?.members?.forEach((t=>{const i=t.linkChartLocation;let r;const s=t.id;i&&(r="x"in i?{x:i.x,y:i.y}:{x:i.coords[0],y:i.coords[1]},e.set(s,new w({x:r.x,y:r.y})))}))})),e}async synchronizeInclusionListWithCache(){return new Promise((e=>{this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(((e,t)=>{if(e.useAllData=!1,e.members&&e.members.size>0){if(!this.dataManager.sublayerCaches.get(t))return;const i=new Set(Array.from(this.dataManager.sublayerCaches.get(t).keys()));Array.from(e.members.keys()).filter((e=>!i.has(e))).forEach((t=>{e.members?.delete(t)}))}})),e()}))}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const t=[];this.layers.forEach((e=>{t.push(e.refreshCachedQueryEngine())})),await Promise.all(t),this._refreshNamedTypes()}async connectEntities(e){let t=[];for(const e of this.dataManager.relationshipTypeNames){const i=this.sublayerIdsCache.get(e);i&&(t=t.concat(Array.from(i.keys())))}const i=await this.dataManager.getAttachedRelationships(e,t);return await this._handleNewRecords(i),{records:i}}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const e of t){const t=this._graphTypeLookup.get(e);if(t){const i=new u({objectType:t,parentCompositeLayer:this,graphType:t.type,title:e});"entity"===t.type?this.dataManager.entityTypeNames.add(e):this.dataManager.relationshipTypeNames.add(e),i.geometryType?this.layers.push(i):this.tables.push(i),this.dataManager.sublayerCaches.set(e,new Map)}}await this.dataManager.refreshCacheContent(e.map((e=>e.id)));const i=Object.assign({},this._currentLinkChartConfig.layoutOptions);i.lockedNodeLocations=this.getCurrentNodeLocations(),await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,i)}async _initializeDiagram(){this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?(this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(((e,t)=>{e?.members?.forEach((e=>{const i=e.linkChartLocation;let r;const s=e.id;if(!i)return;r="x"in i?{x:i.x,y:i.y}:{x:i.coords[0],y:i.coords[1]};const o=l(r);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(s,o):this.entityLinkChartDiagramLookup.set(s,o),this.linkChartExtent.xmin>r.x&&(this.linkChartExtent.xmin=r.x),this.linkChartExtent.xmax<r.x&&(this.linkChartExtent.xmax=r.x),this.linkChartExtent.ymin>r.y&&(this.linkChartExtent.ymin=r.y),this.linkChartExtent.ymax<r.y&&(this.linkChartExtent.ymax=r.y)}))})),this.memberRelationshipTypes.forEach((e=>{e.name&&this.dataManager.sublayerCaches.get(e.name)?.forEach((e=>{const t=this.relationshipLinkChartDiagramLookup.get(e.attributes[c]),i=this.relationshipLinkChartDiagramLookup.get(e.attributes[g]);if(t&&i){const r=l(new E({paths:[[t.coords[0],t.coords[1]],[i.coords[0],i.coords[1]]]}));this.relationshipLinkChartDiagramLookup.set(e.attributes[y],r)}else this.relationshipLinkChartDiagramLookup.set(e.attributes[y],null)}))}))):await this.calculateLinkChartLayout(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.defaultLinkChartConfig.layoutOptions||{}}):await this.calculateLinkChartLayout("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateLayoutSettings(e,t){const i=e=>"number"==typeof e&&!isNaN(e),s=new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC"]),o={};if(!s.has(e)||!t)return!s.has(e)&&t&&r.getLogger(this).warn("Layout mode options were given for a layout mode that does not utilize them, settings will be ignored"),o;const{computationBudgetTime:a,repulsionRadiusMultiplier:n,idealEdgeLength:p,idealEdgeLengthType:l}=t;var m,u;i(m=a)&&m>=1?o.computationBudgetTime=a:void 0!==a&&r.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),i(u=n)&&u>=1?o.repulsionRadiusMultiplier=n:void 0!==n&&r.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting");const h=void 0!==p||void 0!==l;var d,y;return"GEOGRAPHIC"!==e&&h?r.getLogger(this).warn("Ideal edge length settings were specified for an incompatible layout mode, and will be ignored"):"GEOGRAPHIC"===e&&h&&(y=l,Object.values(D).includes(y)?o.idealEdgeLengthType=l:void 0!==l&&r.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),i(d=p)&&d>=0?o.idealEdgeLength=p:void 0!==p&&r.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),o}_convertLayoutSettingsToCalculationSettings(e){let t=e.idealEdgeLength;return e.idealEdgeLengthType===D.ABSOLUTE&&(void 0===t?t=-1:t*=-1),{computationBudgetTime:e.computationBudgetTime,repulsionRadiusMultiplier:e.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:t}}};e([a()],B.prototype,"dataPreloadedInLocalCache",void 0),e([a()],B.prototype,"defaultLinkChartConfig",void 0),e([a()],B.prototype,"dataManager",void 0),e([a()],B.prototype,"knowledgeGraph",void 0),e([a()],B.prototype,"layers",void 0),e([a()],B.prototype,"entityLinkChartDiagramLookup",void 0),e([a()],B.prototype,"relationshipLinkChartDiagramLookup",void 0),e([a()],B.prototype,"linkChartExtent",void 0),e([a()],B.prototype,"memberEntityTypes",void 0),e([a()],B.prototype,"memberRelationshipTypes",void 0),e([a()],B.prototype,"sublayerIdsCache",void 0),e([a()],B.prototype,"tables",void 0),e([a({json:{read:!1}})],B.prototype,"type",void 0),B=e([n("esri.layers.LinkChartLayer")],B);const V=B;export{V as default};
