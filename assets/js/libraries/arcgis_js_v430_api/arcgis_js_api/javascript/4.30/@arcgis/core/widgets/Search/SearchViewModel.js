/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{g as t}from"../../chunks/assets.js";import s from"../../config.js";import o from"../../Graphic.js";import r from"../../PopupTemplate.js";import"../../symbols.js";import i from"../../core/Accessor.js";import{i as l}from"../../core/lang.js";import n from"../../core/Collection.js";import a from"../../core/Error.js";import u from"../../core/Evented.js";import{L as c}from"../../chunks/Logger.js";import{m as p}from"../../chunks/maybe.js";import{eachAlways as m,after as h}from"../../core/promiseUtils.js";import{watch as g,whenOnce as d,initial as y}from"../../core/reactiveUtils.js";import{property as f}from"../../core/accessorSupport/decorators/property.js";import{subclass as S}from"../../core/accessorSupport/decorators/subclass.js";import j from"../../geometry/Point.js";import b from"../../geometry/SpatialReference.js";import{g as _,a as v}from"../../chunks/geometryUtils2.js";import{o as w}from"../../chunks/locale.js";import{f as x}from"../../chunks/messages.js";import L from"../../portal/Portal.js";import{h as k}from"../../chunks/layerViewUtils.js";import I from"./LayerSearchSource.js";import P,{i as E,m as F,a as R,b as T}from"./LocatorSearchSource.js";import C from"./SearchSource.js";import{s as D,g as M,p as O}from"../../chunks/geolocationUtils.js";import{GoToMixin as U}from"../support/GoTo.js";import G from"../../symbols/PictureMarkerSymbol.js";import A from"../../symbols/SimpleLineSymbol.js";import N from"../../symbols/SimpleFillSymbol.js";import V from"../../symbols/TextSymbol.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../core/Clonable.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/scaleUtils.js";import"../../chunks/FullTextSearch.js";import"../../chunks/suggestLocations.js";import"../../chunks/utils8.js";import"../../rest/support/AddressCandidate.js";import"../../chunks/commonProperties3.js";import"../../chunks/project.js";import"../../chunks/utils9.js";import"../../rest/support/ProjectParameters.js";function B(e,t){return e.hasOwnProperty(t)&&null!=e[t]&&""!==e[t]}const J="highlight",H=n.ofType({key:e=>e.layer?"layer":"locator",base:C,typeMap:{layer:I,locator:P}}),Q=b.WGS84,q=/<[\s\S]*?>/g,Z=-1;let z=class extends(U(u.EventedMixin(i))){constructor(e){super(e),this._gotoController=null,this._searching=null,this._updatingPromise=null,this._createdFeatureLayers=[],this.autoNavigate=!0,this.autoSelect=!0,this.defaultPopupTemplate=null,this.defaultSources=new H,this.defaultSymbols={point:new G({url:t("esri/images/search/search-symbol-32.png"),size:24,width:24,height:24}),polyline:new A({color:[130,130,130,1],width:2}),polygon:new N({color:[235,235,235,.4],outline:{color:[130,130,130,1],width:2}})},this.includeDefaultSources=!0,this.maxInputLength=128,this.maxResults=6,this.maxSuggestions=6,this.messages=null,this.minSuggestCharacters=3,this.popupEnabled=!0,this.popupTemplate=null,this.portal=L.getDefault(),this.resultCount=null,this.resultGraphicEnabled=!0,this.resultGraphic=null,this.results=null,this.selectedSuggestion=null,this.searchAllEnabled=!0,this.selectedResult=null,this.sources=new H,this.suggestionDelay=350,this.suggestionCount=null,this.suggestions=null,this.suggestionsEnabled=!0,this.view=null}initialize(){const e=async()=>{const e=await x("esri/widgets/Search/t9n/Search");this.messages=e,this.defaultPopupTemplate=new r({title:e.searchResult,content:"{Match_addr}"})};e(),this.addHandles([g((()=>[this.includeDefaultSources,this.view,this.portal]),(()=>this._update()),y),w(e)])}destroy(){this._destroyFeatureLayers(),this._abortGoTo(),this.clearGraphics()}get activeSource(){return this.allSources.at(this.activeSourceIndex)??null}get activeSourceIndex(){return 1!==this.allSources.length&&this.searchAllEnabled?Z:0}set activeSourceIndex(e){this._overrideIfSome("activeSourceIndex",e)}get allPlaceholder(){return this.messages?.allPlaceholder}set allPlaceholder(e){this._overrideIfSome("allPlaceholder",e)}get allSources(){const{sources:e,defaultSources:t,includeDefaultSources:s}=this,o="function"==typeof s?s.call(null,{sources:e,defaultSources:t}):s?t.concat(e):e,r=this._get("allSources")||new H;return r.removeAll(),r.addMany(o.filter(Boolean)),r}get locationEnabled(){return this._get("locationEnabled")||D()}set locationEnabled(e){if(void 0===e)return void this._clearOverride("locationEnabled");const t=D();if(e&&!t){const e=new a("locationEnabled:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});c.getLogger(this).error(e)}this._override("locationEnabled",!!e&&t)}get placeholder(){const{allSources:e,activeSourceIndex:t,allPlaceholder:s}=this;if(t===Z)return s??"";const o=e.at(t);return o?.placeholder??""}set searchTerm(e){this._set("searchTerm",e||""),this.clearGraphics(),this.selectedSuggestion&&this.selectedSuggestion.text!==e&&this._set("selectedSuggestion",null),""===e&&this._clear()}get searchTerm(){return this._get("searchTerm")||""}get state(){return this._searching?"searching":this.updating?"loading":0===this.allSources.length?"disabled":"ready"}get updating(){return null!=this._updatingPromise}clear(){this.searchTerm=""}clearGraphics(){this._removeHighlight(),this._closePopup();const{view:e,resultGraphic:t}=this;e&&t&&e.graphics.remove(t),this._set("resultGraphic",null)}search(e,t){this.emit("search-start"),this.clearGraphics();const s=this._createSuggestionForSearch(e),o=(async()=>{try{await this.when();const e=await this._getResultsFromSources(s,t);if(t?.signal?.aborted)return null;const o={activeSourceIndex:this.activeSourceIndex,searchTerm:s.text??"",numResults:0,numErrors:0,errors:[],results:[]};this._formatResponse(o,e,s);const r=this._getFirstResult(o.results),i=s.location&&r?r.name:s.text,l=i?.replace(q,"");return this._set("searchTerm",l),(s.key&&"number"==typeof s.sourceIndex||s.location)&&this._set("selectedSuggestion",s),this._set("results",o.results),this._set("resultCount",o.results.reduce(((e,t)=>e+(t.results?.length??0)),0)),this.emit("search-complete",o),await this._selectFirstResult(r),o}finally{this._clearSearching()}})();return this._searching=o,o}async searchNearby(e){if(!this.locationEnabled){const e=new a("searchNearby:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});throw c.getLogger(this).error(e),e}const t=(async()=>{try{const t=await M(),s=await O({position:t,view:this.view},e);return await this.search(s,e)}finally{this._clearSearching()}})();return this._searching=t,t}async select(e){if(this.clearGraphics(),!e){const t=new a("select:missing-parameter","Cannot select without a searchResult.",{searchResult:e});throw c.getLogger(this).error(t),t}const{view:t}=this,s=B(e,"sourceIndex")?e.sourceIndex:this._getSourceIndexOfResult(e),r=null!=s?this.allSources.at(s):null;if(!r){const e=new a("select:missing-source","Cannot select without a source.",{source:r});throw c.getLogger(this).error(e),e}const i=r instanceof I?this._getLayerSourcePopupTemplate(r):r.popupTemplate,l=r.resultSymbol||this._getDefaultSymbol(e),n=B(r,"resultGraphicEnabled")?r.resultGraphicEnabled:this.resultGraphicEnabled,u=B(r,"autoNavigate")?r.autoNavigate:this.autoNavigate,p=B(r,"popupEnabled")?r.popupEnabled:this.popupEnabled,h=p?i||this.popupTemplate||this.defaultPopupTemplate:null,{feature:g}=e;if(!g){const e=new a("select:missing-feature","Cannot select without a feature.",{feature:g});throw c.getLogger(this).error(e),e}const{attributes:d,geometry:y,layer:f,sourceLayer:S}=g,j=y?_(y):null,b={layerViewQuery:this._getLayerView(g),elevationQuery:t&&null!=j?v(j,t):Promise.resolve(j)},w=await m(b),x=w.layerViewQuery.value,L=w.elevationQuery.value;l instanceof V&&(l.text=e.name);const P=t&&u?e.target||e.extent:null,E=null!=P?this._goToSearchResult(P):Promise.resolve();await E;const F=x?g:new o({geometry:y,symbol:l,attributes:d,layer:f,sourceLayer:S,popupTemplate:h}),R=t?.popup,T=R&&p&&F.getEffectivePopupTemplate(R.defaultPopupTemplateEnabled);return T&&await t.openPopup({features:[F],location:L}),x&&k(x)&&!T&&this._highlightFeature({graphic:F,layerView:x}),!x&&n&&t&&t.graphics.push(F),this._setResultFloor(e),this._set("selectedResult",e),this._set("resultGraphic",F),this.emit("select-result",{result:e,source:r,sourceIndex:s}),e}async suggest(e,t,s){const o=e||this.searchTerm;this.emit("suggest-start",{searchTerm:o}),await this._suggestTimer(t,s);const r=await this._suggestImmediate(o,s);return this._set("suggestions",r?.results),this._set("suggestionCount",r?.results.reduce(((e,t)=>e+(t.results?.length??0)),0)??null),this.emit("suggest-complete",r),r}async when(){await d((()=>!this.updating))}async _update(){const{portal:e,view:t}=this;if(this.includeDefaultSources){const s=this._updatingPromise=m([e?.load(),t?.when()]);if(this.destroyed)return;if(await s,s!==this._updatingPromise)return}await d((()=>this.messages)),this.destroyed||this._updateDefaultSources(),this._updatingPromise=null}_clearSearching(){this._searching=null}_convertHelperServices(){const e=this.portal?.helperServices?.geocode;return e?e.map((e=>{if(!1===e.placefinding)return;const t=s.apiKey&&E(e.url)?{url:F}:null,o=P.fromJSON({...e,...t}),r=o.url;if(E(r)||R(r)||T(r)){const e=o.outFields??["Addr_type","Match_addr","StAddr","City"],t=(o.placeholder||this.messages?.placeholder)??"",s="number"==typeof o.defaultZoomScale?o.defaultZoomScale:2500;o.singleLineFieldName="SingleLine",o.outFields=e,o.placeholder=t,o.defaultZoomScale=s}return o.singleLineFieldName?o:void 0})).filter(l):[]}_destroyFeatureLayers(){this._createdFeatureLayers.forEach((e=>e?.destroy())),this._createdFeatureLayers=[]}_getLayerSources(e,t){const s=this.view?.map;return e.map((e=>{const o=s.findLayerById(e.id);if(!o)return;const r=this._getLayerJSON(e),i=I.fromJSON(r);return i.placeholder=t,this._getLayer(o,r).then((e=>{i.layer=e})),i})).filter(l).toArray()}_getTableSources(e,t){const s=this.view?.map;return e.map((e=>{if(!e.id)return;const o=s.findTableById(e.id);if(!o)return;const r=this._getLayerJSON(e),i=I.fromJSON(r);return i.placeholder=t,this._getLayer(o,r).then((e=>{i.layer=e})),i})).filter(l).toArray()}_convertApplicationProperties(){const e=this.view?.map,t=e?.applicationProperties?.viewing?.search;if(!t)return[];const{enabled:s,hintText:o,layers:r,tables:i}=t;return s?[...this._getLayerSources(r,o),...this._getTableSources(i,o)]:[]}async _getSubLayer(e,t){if(await e.load(),!e.allSublayers)throw new Error;const s=e.allSublayers.find((e=>e.id===t.subLayer));if(!s)throw new Error;const o=await(s.createFeatureLayer?.());if(!o)throw new Error;return this._createdFeatureLayers.push(o),o}async _getBuildingSubLayer(e,t){await e.load();const s=e.allSublayers.find((e=>e.id===t.subLayer));if("building-component"!==s?.type)throw new Error;if(await s.load(),null==s.associatedLayer)throw new Error;return await s.associatedLayer.load(),s}async _getLayer(e,t){if("feature"===e.type||"scene"===e.type||"csv"===e.type||"geojson"===e.type||"ogc-feature"===e.type)return e;if("map-image"===e.type)try{return await this._getSubLayer(e,t)}catch(t){const s=new a("search:create-featurelayer","Could not create a FeatureLayer from the MapImageLayer",{layer:e});return c.getLogger(this).error(s),null}return"building-scene"===e.type?this._getBuildingSubLayer(e,t):null}_getLayerJSON(e){return"function"==typeof e.toJSON?e.toJSON():e}_updateDefaultSources(){const{defaultSources:e,includeDefaultSources:t}=this;this._destroyFeatureLayers(),e.removeAll(),t&&e.addMany([...this._convertApplicationProperties(),...this._convertHelperServices()])}_abortGoTo(){this._gotoController&&this._gotoController.abort(),this._gotoController=null}_clear(){this._abortGoTo(),this._set("resultCount",null),this._set("results",null),this._set("suggestions",null),this._set("suggestionCount",null),this._set("selectedResult",null),this._set("selectedSuggestion",null),this.emit("search-clear")}_closePopup(){const e=this.view?.popup,{resultGraphic:t}=this;if(!e||!t)return;const s="selectedFeature"in e,o=s?e.selectedFeature:null;s&&o&&o===t&&e.close()}_suggestTimer(e,t){const s=null!=e?e:this.suggestionDelay;return h(s,null,t?.signal)}_createLocationForSearch(e){return e instanceof o&&e.geometry?_(e.geometry):e instanceof j?e:Array.isArray(e)&&2===e.length?new j({longitude:e[0],latitude:e[1]}):null}_createSuggestionForSearch(e){if(e&&B(e,"key")&&B(e,"text")&&B(e,"sourceIndex"))return e;const t=this._createLocationForSearch(e),s="string"==typeof e?e:this.searchTerm,{selectedSuggestion:o,selectedResult:r}=this,i=!e&&o&&r,l=i&&o.key===r.key&&o.sourceIndex===r.sourceIndex,n=i&&o.location;return l||n?o:{location:t,text:t?"":s,sourceIndex:null,key:null}}_getFirstResult(e){return p(e,(({results:e})=>e?.[0]))??null}async _selectFirstResult(e){return this.autoSelect&&e?this.select(e):null}async _suggestImmediate(e,t){await this.when();const s=await this._getSuggestionsFromSources(e,t);if(t?.signal?.aborted)return null;const o={activeSourceIndex:this.activeSourceIndex,searchTerm:e??"",numResults:0,numErrors:0,errors:[],results:[]};return this._formatResponse(o,s),o}_formatSourceResponse(e,t,s){const o=t?.value||[],r=t?.error,i=this.allSources.at(s);if(r){const t={sourceIndex:s,source:i,error:r};e.errors.push(t),c.getLogger(this).error(r),e.numErrors++}else{const t={sourceIndex:s,source:i,results:o};e.results.push(t),e.numResults+=o.length}}_formatResponse(e,t,s){if(t)if(e.activeSourceIndex===Z){const o=s&&B(s,"sourceIndex")&&-1!==s.sourceIndex?s.sourceIndex:void 0;t.forEach(((t,s)=>{const r=void 0!==o?o:s;this._formatSourceResponse(e,t,r)}))}else this._formatSourceResponse(e,t[0],e.activeSourceIndex)}async _getResultsFromSources(e,t){const{allSources:s}=this,o=!e.location&&B(e,"sourceIndex")?e.sourceIndex:this.activeSourceIndex,r=[];if(!s.length){const e=new a("search:no-sources-defined","At least one source is required.",{allSources:s});throw c.getLogger(this).error(e),e}return o===Z?s.forEach(((s,o)=>{r.push(this._getResultsFromSource(e,o,t))})):r.push(this._getResultsFromSource(e,o,t)),m(r)}async _getSuggestionsFromSources(e,t){const{allSources:s,activeSourceIndex:o}=this,r=[];if(!s.length){const e=new a("suggest:no-sources-defined","At least one source is required.",{allSources:s});throw c.getLogger(this).error(e),e}return o===Z?s.forEach(((s,o)=>{r.push(this._getSuggestionsFromSource(e,o,t))})):r.push(this._getSuggestionsFromSource(e,o,t)),m(r)}async _getResultsFromSource(e,t,s){const o=null!=t?this.allSources.at(t):null;if(!o)return null;const{location:r=null}=e,i=this.view?.spatialReference||Q,l=B(o,"maxResults")?o.maxResults:this.maxResults,n=!!(o instanceof I&&B(o,"exactMatch"))&&o.exactMatch,{view:a}=this;return o.getResults?.({view:a,sourceIndex:t,location:r,suggestResult:e,spatialReference:i,exactMatch:n,maxResults:l},s)}async _getSuggestionsFromSource(e,t,s){const o=this.allSources.at(t);if(!o)return null;e??="";const r=B(o,"suggestionsEnabled")?o.suggestionsEnabled:this.suggestionsEnabled,i=e?.length,l=B(o,"minSuggestCharacters")?o.minSuggestCharacters:this.minSuggestCharacters;if(r&&e.trim()&&i>=l){const r=this.view?.spatialReference||Q,i=B(o,"maxSuggestions")?o.maxSuggestions:this.maxSuggestions,{view:l}=this,n=!!(o instanceof I&&B(o,"exactMatch"))&&o.exactMatch;return o.getSuggestions?.({view:l,sourceIndex:t,suggestTerm:e,spatialReference:r,maxSuggestions:i,exactMatch:n},s)}return null}_getLayerSourcePopupTemplate(e){const{layer:t}=e;if(t)return B(e,"popupTemplate")?e.popupTemplate:t.popupTemplate}_getSourceIndexOfResult(e){return p(this.results??[],(({results:t,sourceIndex:s})=>{const o=t?.includes(e);return o?s:null}))??null}async _goToSearchResult(e){this._abortGoTo();const t=new AbortController;this._gotoController=t;const s={target:{target:e},options:{signal:t.signal}};e||(s.options.animate=!1),await this.callGoTo(s),this._gotoController=null}_getDefaultSymbol(e){const{defaultSymbols:t}=this,s=e.feature?.geometry;if(null==s)return null;switch(s.type){case"point":case"multipoint":return t.point;case"polyline":return t.polyline;case"extent":case"polygon":return t.polygon;default:return null}}_removeHighlight(){this.removeHandles(J)}async _getLayerView(e){const{view:t}=this;if(!e||!t||"building-component"===e.layer?.type||"subtype-sublayer"===e.layer?.type)return null;const{layer:s}=e;return s?(await t.when(),t.whenLayerView(s)):null}_highlightFeature(e){const{graphic:t,layerView:s}=e,{attributes:o,layer:r}=t,{objectIdField:i}=r,l=(i&&o?.[i])??null,n=s.highlight(l??t);this.addHandles(n,J)}_setResultFloor(e){const{view:t}=this,s=e.feature?.attributes,o=e.feature?.sourceLayer;if(o&&"floorInfo"in o&&o?.floorInfo?.floorField&&s){const e=s[o.floorInfo.floorField];t?.emit("select-result-floor",e)}}};z.ALL_INDEX=Z,e([f()],z.prototype,"_searching",void 0),e([f()],z.prototype,"_updatingPromise",void 0),e([f({readOnly:!0,value:null})],z.prototype,"activeSource",null),e([f()],z.prototype,"activeSourceIndex",null),e([f()],z.prototype,"allPlaceholder",null),e([f({readOnly:!0})],z.prototype,"allSources",null),e([f()],z.prototype,"autoNavigate",void 0),e([f()],z.prototype,"autoSelect",void 0),e([f()],z.prototype,"defaultPopupTemplate",void 0),e([f({readOnly:!0})],z.prototype,"defaultSources",void 0),e([f()],z.prototype,"defaultSymbols",void 0),e([f()],z.prototype,"includeDefaultSources",void 0),e([f()],z.prototype,"locationEnabled",null),e([f()],z.prototype,"maxInputLength",void 0),e([f()],z.prototype,"maxResults",void 0),e([f()],z.prototype,"maxSuggestions",void 0),e([f()],z.prototype,"messages",void 0),e([f()],z.prototype,"minSuggestCharacters",void 0),e([f({readOnly:!0})],z.prototype,"placeholder",null),e([f()],z.prototype,"popupEnabled",void 0),e([f({type:r})],z.prototype,"popupTemplate",void 0),e([f({type:L})],z.prototype,"portal",void 0),e([f()],z.prototype,"resultCount",void 0),e([f()],z.prototype,"resultGraphicEnabled",void 0),e([f({readOnly:!0})],z.prototype,"resultGraphic",void 0),e([f({readOnly:!0})],z.prototype,"results",void 0),e([f({readOnly:!0})],z.prototype,"selectedSuggestion",void 0),e([f()],z.prototype,"searchAllEnabled",void 0),e([f({readOnly:!0})],z.prototype,"selectedResult",void 0),e([f()],z.prototype,"searchTerm",null),e([f({type:H})],z.prototype,"sources",void 0),e([f({readOnly:!0})],z.prototype,"state",null),e([f()],z.prototype,"suggestionDelay",void 0),e([f()],z.prototype,"suggestionCount",void 0),e([f({readOnly:!0})],z.prototype,"suggestions",void 0),e([f()],z.prototype,"suggestionsEnabled",void 0),e([f({readOnly:!0})],z.prototype,"updating",null),e([f()],z.prototype,"view",void 0),e([f()],z.prototype,"clear",null),z=e([S("esri.widgets.Search.SearchViewModel")],z);const W=z;export{W as default};
