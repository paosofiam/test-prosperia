/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{c as e}from"../chunks/asyncUtils.js";import{d as s,a as i}from"../chunks/maybe.js";import{m as o}from"../chunks/memoize.js";import{throwIfAborted as r,createAbortError as n}from"../core/promiseUtils.js";import{watch as a,on as l,initial as c}from"../core/reactiveUtils.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as h}from"../core/accessorSupport/decorators/subclass.js";import m,{l as u}from"./Widget.js";import d from"./ElevationProfile/ElevationProfileViewModel.js";import j from"../core/Accessor.js";import"../intl.js";import{t as g}from"../chunks/throttle.js";import{f as k,e as y}from"../chunks/unitFormatUtils.js";import{n as v,g as _,a as b,E as f}from"./ElevationProfile/ElevationProfileLine.js";import{o as C}from"../chunks/widgetUtils.js";import{m as S}from"../chunks/messageBundle.js";import{t as U,a as w}from"../chunks/jsxFactory.js";import{s as E}from"../chunks/substitute.js";import{U as P}from"../chunks/UnitSelect.js";import{g as x}from"../chunks/globalCss.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../config.js";import"../core/Collection.js";import"../core/Evented.js";import"../core/Handles.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../chunks/date.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/ByteSizeUnit.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/ElevationQueryTileCache.js";import"../chunks/defaultUnit.js";import"../chunks/getDefaultUnitForView.js";import"../chunks/elevationInfoUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/vec2.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../geometry/support/geodesicUtils.js";import"../chunks/QueueProcessor.js";import"../chunks/Queue.js";import"../chunks/ReactiveMap.js";import"../core/signal.js";import"../chunks/Scheduler.js";import"../chunks/debugFlags.js";import"../chunks/traversalUtils.js";import"./ElevationProfile/ElevationProfileLineGround.js";import"../chunks/elevationQuerySourceUtils.js";import"../Ground.js";import"../chunks/compilerUtils.js";import"../chunks/loadAll.js";import"../chunks/vec4f64.js";import"../chunks/Material.js";import"../chunks/interfaces3.js";import"../chunks/basicInterfaces.js";import"../chunks/VertexAttribute.js";import"../chunks/ViewingMode.js";import"./ElevationProfile/ElevationProfileLineInput.js";import"../chunks/ElevationQuery.js";import"../layers/support/ElevationSampler.js";import"../chunks/ElevationTile.js";import"../chunks/ElevationSamplerData.js";import"../chunks/TileKey.js";import"./ElevationProfile/ElevationProfileLineQuery.js";import"./ElevationProfile/ElevationProfileLineView.js";import"../chunks/ray.js";import"../chunks/plane.js";import"../chunks/mat3f64.js";import"../chunks/mat4f64.js";import"../chunks/quatf64.js";import"../chunks/vec2f64.js";import"../chunks/mathUtils2.js";import"../chunks/hitTest.js";import"../chunks/projectVectorToVector.js";import"../chunks/projectPointToVector.js";import"../chunks/dehydratedPoint.js";import"../chunks/LayerConstants.js";import"../chunks/layerUtils2.js";import"../chunks/debugFlags2.js";import"../chunks/ElevationProvider.js";import"../chunks/Intersector2.js";import"../chunks/mat4.js";import"../chunks/vec4.js";import"../chunks/boundedPlane.js";import"../chunks/lineSegment.js";import"../chunks/verticalOffsetUtils.js";import"../chunks/mat3.js";import"../chunks/sphere.js";import"../chunks/orientedBoundingBox.js";import"../chunks/quat.js";import"../chunks/spatialReferenceEllipsoidUtils.js";import"../chunks/computeTranslationToOriginAndRotation.js";import"../chunks/Attribute.js";import"../chunks/intersectorUtilsConversions.js";import"../chunks/Intersector.js";import"../chunks/Intersector3.js";import"../layers/GraphicsLayer.js";import"../chunks/GraphicsCollection.js";import"../layers/Layer.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils3.js";import"../chunks/_commonjsHelpers.js";import"../layers/mixins/ScaleRangeLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/InputManager.js";import"./Sketch/SketchViewModel.js";import"../chunks/isSupportedObject.js";import"../views/interactive/sketch/SketchLabelOptions.js";import"../views/interactive/sketch/SketchTooltipOptions.js";import"../chunks/SketchTooltipVisibleElements.js";import"../views/interactive/sketch/SketchValueOptions.js";import"../chunks/angularMeasurementUtils.js";import"../chunks/Cyclical.js";import"../chunks/quantityUtils.js";import"../chunks/layerUtils.js";import"../chunks/keybindings.js";import"../chunks/SnappingManager.js";import"../chunks/normalizedPoint.js";import"../chunks/Settings2.js";import"../chunks/RightAngleSnappingHint.js";import"../chunks/UpdatingHandles.js";import"../chunks/snappingUtils.js";import"../chunks/geometry2dUtils.js";import"../rest/support/Query.js";import"../chunks/DataLayerSource.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../chunks/utils6.js";import"../layers/support/FeatureFilter.js";import"../chunks/floorFilterUtils.js";import"../chunks/layerViewUtils.js";import"../chunks/viewUtils.js";import"../geometry/geometryEngine.js";import"../chunks/geometryEngineBase.js";import"../chunks/hydrated.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../chunks/hitTestSelectUtils.js";import"../chunks/screenUtils2.js";const M="esri-elevation-profile",B={base:`${M}`,portrait:`${M}--portrait`,refined:`${M}--refined`,mainContainer:`${M}__main-container`,promptContainer:`${M}__prompt-container`,header:`${M}__header`,zoomOutButton:`${M}__zoom-out-button`,clearButton:`${M}__clear-button`,actionButton:`${M}__action-button`,sketchButton:`${M}__sketch-button`,sketchCancelButton:`${M}__sketch-cancel-button`,sketchDoneButton:`${M}__sketch-done-button`,selectButton:`${M}__select-button`,selectCancelButton:`${M}__select-cancel-button`,chartContainer:`${M}__chart-container`,chartSpinner:`${M}__chart-spinner`,chartSpinnerVisible:`${M}__chart-spinner--visible`,chartSpinnerSmall:`${M}__chart-spinner--small`,footer:`${M}__footer`},L="esri-elevation-profile-legend-item",D={base:L,disabled:`${L}--disabled`,expanded:`${L}--expanded`,colorIndicator:`${L}__color-indicator`,header:`${L}__header`,content:`${L}__content`,collapseToggle:`${L}__collapse-toggle`,label:`${L}__label`,checkbox:`${L}__checkbox`},I="esri-elevation-profile-statistics",T={base:I,statistic:`${I}__statistic`,statisticLabel:`${I}__statistic__label`,statisticValue:`${I}__statistic__value`,slopeValue:`${I}__slope-value`},V="esri-elevation-profile-settings",O={base:`${V}`,popoverContent:`${V}__popover-content`,uniformChartScalingLabel:`${V}__uniform-scaling-label`,uniformChartScalingCheckbox:`${V}__uniform-scaling-checkbox`};let $=class extends j{constructor(){super(...arguments),this.legend=!0,this.chart=!0,this.clearButton=!0,this.settingsButton=!0,this.sketchButton=!0,this.selectButton=!0,this.unitSelector=!0,this.uniformChartScalingToggle=!0}};t([p()],$.prototype,"legend",void 0),t([p()],$.prototype,"chart",void 0),t([p()],$.prototype,"clearButton",void 0),t([p()],$.prototype,"settingsButton",void 0),t([p()],$.prototype,"sketchButton",void 0),t([p()],$.prototype,"selectButton",void 0),t([p()],$.prototype,"unitSelector",void 0),t([p()],$.prototype,"uniformChartScalingToggle",void 0),$=t([h("esri.widgets.ElevationProfile.ElevationProfileVisibleElements")],$);const R=$;let F=class extends m{constructor(t,e){super(t,e),this._updateLayout=t=>{const e=t.parentElement,s=t.style.display;e?.removeChild(t),document.body.appendChild(t),t.style.display="block";let i=80;for(const e of t.childNodes)e instanceof HTMLElement&&(i=Math.max(i,e.offsetWidth));document.body.removeChild(t),e?.appendChild(t),t.style.display=s,t.style.setProperty("--max-width",`${i}px`)},this._updateLayoutThrottled=g(this._updateLayout,100)}loadDependencies(){return u({icon:()=>import("../chunks/calcite-icon.js")})}initialize(){this.addHandles(this._updateLayoutThrottled)}render(){return U("div",{afterCreate:this._updateLayout,afterUpdate:this._updateLayoutThrottled,bind:this,class:T.base},this._renderStatistics())}_renderStatistics(){const t=this._messages?.statistics;return t?[this._renderDistanceStatistic("maxDistance",t.maxDistance),this._renderElevationStatistic("elevationGain",t.gain),this._renderElevationStatistic("elevationLoss",t.loss),this._renderElevationStatistic("minElevation",t.minElevation),this._renderElevationStatistic("maxElevation",t.maxElevation),this._renderElevationStatistic("avgElevation",t.avgElevation),this._renderSlopeStatistic("maxPositiveSlope","maxNegativeSlope",t.maxSlope),this._renderSlopeStatistic("avgPositiveSlope","avgNegativeSlope",t.avgSlope)]:[]}_renderDistanceStatistic(t,e){const s=_().formatPrecision,i=this._renderValue(t,(t=>{const e=this.effectiveUnits.distance;return k(this._messagesUnits,t,e,s)}));return this._renderStatistic(e,i)}_renderElevationStatistic(t,e){const s=_().formatPrecision,i=this._renderValue(t,(t=>{const e=this.effectiveUnits.elevation;return k(this._messagesUnits,t,e,s)}));return this._renderStatistic(e,i)}_renderSlopeStatistic(t,e,s){const i=_().formatPrecision,o=U("div",{class:T.slopeValue,key:"slope-up"},U("calcite-icon",{icon:"arrow-up",scale:"s"}),this._renderValue(t,(t=>y(t,"degrees","geographic","geographic",i))),U("calcite-icon",{icon:"arrow-down",scale:"s"}),this._renderValue(e,(t=>y(t,"degrees","geographic","geographic",i))));return this._renderStatistic(s,o)}_renderStatistic(t,e){return U("div",{class:T.statistic},U("label",{class:T.statisticLabel},t),U("div",{class:T.statisticValue},e))}_renderValue(t,e){const s=this.line,i=1===s.progress?s.statistics:null,o=i?.[t];return null!=o?e(o):v}};function z(t,{profiles:e}){const s=t.title;if(null!=s)return s;switch(t.type){case"ground":return e.ground;case"input":return e.input;case"query":return e.query;case"view":return e.view;default:return""}}t([p()],F.prototype,"effectiveUnits",void 0),t([p()],F.prototype,"line",void 0),t([p(),S("esri/widgets/ElevationProfile/t9n/ElevationProfile")],F.prototype,"_messages",void 0),t([p(),S("esri/core/t9n/Units")],F.prototype,"_messagesUnits",void 0),F=t([h("esri.widgets.ElevationProfile.components.Statistics")],F);let A=class extends m{constructor(t,e){super(t,e),this.checkboxVisible=!0,this.expanded=!1}loadDependencies(){return u({action:()=>import("../chunks/calcite-action.js"),checkbox:()=>import("../chunks/calcite-checkbox.js"),label:()=>import("../chunks/calcite-label.js"),tooltip:()=>import("../chunks/calcite-tooltip.js")})}initialize(){this._statistics=new F(this._statisticsProps),this.addHandles(a((()=>this._statisticsProps),(t=>this._statistics.set(t))))}destroy(){this._statistics=s(this._statistics)}render(){const t=this.expanded;return U("div",{class:this.classes(D.base,{[D.disabled]:this.disabled,[D.expanded]:t}),key:this},this._renderColorIndicator(),U("div",{class:D.header,key:"header"},this._renderLabelWithCheckbox(),this._renderCollapseToggleButton()),t?U("div",{class:D.content,key:"content"},this._statistics.render()):null)}get disabled(){return!this.line.available}get _statisticsProps(){return{line:this.line,effectiveUnits:this.effectiveUnits}}_renderColorIndicator(){return U("div",{class:D.colorIndicator,key:"color-indicator",styles:{backgroundColor:this.line.color.toCss()}})}_renderCollapseToggleButton(){const{expanded:t,messages:e}=this,s=t?e.hideDetails:e.showDetails;return U("calcite-action",{appearance:"transparent",bind:this,class:D.collapseToggle,"data-testid":"legend-toggle",icon:t?"chevron-up":"chevron-down",key:"collapse-toggle",onclick:this._onCollapseToggleClick,scale:"s",text:s,title:s})}_onCollapseToggleClick(){this.onExpandedToggle()}_renderLabelWithCheckbox(){const{line:t,checkboxVisible:e,disabled:s,messages:i}=this,o=`label-${t.id}`;return U("calcite-label",{class:D.label,disabled:s,key:o,layout:"inline"},e?this._renderCheckbox(t.id):null,z(t,i))}_renderCheckbox(t){const{disabled:e,line:s,messages:i}=this,o=s.visible,r=`${t}-checkbox`,n=o?i.hideProfile:i.showProfile,a=E(n,{name:z(s,i)});return U(w,null,U("calcite-checkbox",{checked:o,class:D.checkbox,disabled:e,id:r,key:"checkbox",onCalciteCheckboxChange:()=>s.toggleVisibility()}),U("calcite-tooltip",{overlayPositioning:"fixed",placement:"top",referenceElement:r},a))}};t([p()],A.prototype,"checkboxVisible",void 0),t([p()],A.prototype,"disabled",null),t([p({nonNullable:!0})],A.prototype,"effectiveUnits",void 0),t([p()],A.prototype,"expanded",void 0),t([p({nonNullable:!0})],A.prototype,"line",void 0),t([p()],A.prototype,"messages",void 0),t([p()],A.prototype,"onExpandedToggle",void 0),t([p()],A.prototype,"_statistics",void 0),A=t([h("esri.widgets.ElevationProfile.components.LegendItem")],A);let N=class extends m{constructor(){super(...arguments),this._expandedLine=null}render(){const{profiles:t,messages:e,effectiveUnits:s,_expandedLine:i}=this;return U("div",{class:"esri-elevation-profile-legend"},t.map((o=>U(A,{checkboxVisible:t.length>1,effectiveUnits:s,expanded:o===i,line:o,messages:e,onExpandedToggle:()=>this._onExpandedToggle(o)}))))}_onExpandedToggle(t){this._expandedLine=t===this._expandedLine?null:t}};t([p()],N.prototype,"effectiveUnits",void 0),t([p()],N.prototype,"messages",void 0),t([p()],N.prototype,"profiles",void 0),t([p()],N.prototype,"_expandedLine",void 0),N=t([h("esri.widgets.ElevationProfile.components.Legend")],N);let W=class extends m{constructor(){super(...arguments),this.messages=null,this._popover=null,this._popoverIsOpen=!1,this._onPopoverAfterCreate=t=>{this._popover=t},this._onUniformChartScalingChange=t=>{this.onUniformChartScalingChange(t.target.checked)}}loadDependencies(){return u({action:()=>import("../chunks/calcite-action.js"),checkbox:()=>import("../chunks/calcite-checkbox.js"),label:()=>import("../chunks/calcite-label.js"),popover:()=>import("../chunks/calcite-popover.js"),tooltip:()=>import("../chunks/calcite-tooltip.js")})}initialize(){const t=()=>this._popover;this.addHandles([l(t,"calcitePopoverOpen",(()=>this._popoverIsOpen=!0)),l(t,"calcitePopoverClose",(()=>this._popoverIsOpen=!1))])}render(){const{id:t,messages:e,visibleElements:s}=this,{unitSelector:i,uniformChartScalingToggle:o}=s;if(!e||!i&&!o)return U("div",{key:`${t}-empty`});const r=`${t}__action`,n=this._popoverIsOpen?e.hideSettings:e.showSettings;return U("div",{class:O.base,key:this},U("calcite-popover",{afterCreate:this._onPopoverAfterCreate,autoClose:!0,label:n,overlayPositioning:"fixed",placement:"bottom-end",referenceElement:r},this._renderPopoverContent()),U("calcite-action",{appearance:"transparent","data-testid":"settings-button",icon:"gear",id:r,scale:"s",text:n,title:n}))}_renderPopoverContent(){const{unitSelector:t,uniformChartScalingToggle:e}=this.visibleElements;return U("div",{class:O.popoverContent},t?this._renderUnitSelector():null,e?this._renderUniformChartScalingToggle():null)}_renderUnitSelector(){const{messages:t}=this;return U(P,{key:"unit-selector-label",options:this.unitOptions,selectLabel:t?.unitSelectLabel??"",value:this.unit,onChange:this.onUnitChange})}_renderUniformChartScalingToggle(){const{messages:t}=this,e=this.uniformChartScaling,s=`${this.id}__uniform-chart-scaling-toggle`,i=t?.[e?"uniformChartScalingDisable":"uniformChartScalingEnable"]??"";return U("calcite-label",{class:O.uniformChartScalingLabel,key:"uniform-chart-scaling-label",layout:"inline"},U("calcite-checkbox",{checked:e,class:O.uniformChartScalingCheckbox,id:s,onCalciteCheckboxChange:this._onUniformChartScalingChange}),U("calcite-tooltip",{overlayPositioning:"fixed",referenceElement:s},i),t?.uniformChartScalingLabel)}};var G;t([p()],W.prototype,"messages",void 0),t([p()],W.prototype,"onUniformChartScalingChange",void 0),t([p()],W.prototype,"onUnitChange",void 0),t([p()],W.prototype,"uniformChartScaling",void 0),t([p()],W.prototype,"unit",void 0),t([p()],W.prototype,"unitOptions",void 0),t([p()],W.prototype,"visibleElements",void 0),t([p()],W.prototype,"_popover",void 0),t([p()],W.prototype,"_popoverIsOpen",void 0),W=t([h("esri.widgets.ElevationProfile.components.SettingsButton")],W),function(t){t.Sketch="sketch",t.SketchCancel="sketch-cancel",t.SketchDone="sketch-done",t.Select="select",t.SelectCancel="select-cancel"}(G||(G={}));const H=[{type:G.Select},{type:G.Sketch}],Q={[b.None]:null,[b.NoValidInput]:"noProfile",[b.NoVisibleProfiles]:"noProfile",[b.RefinedButNoChartData]:"noProfile",[b.TooComplex]:"tooComplex",[b.UnknownError]:"unknown",[b.InvalidGeometry]:"invalidGeometry",[b.InvalidElevationInfo]:"invalidElevationInfo"},q=Symbol("resize-observer-handle");let Z=class extends m{constructor(t,e){super(t,e),this.viewModel=null,this.visibleElements=new R,this.messages=null,this.messagesCommon=null,this.messagesUnits=null,this._contentWrapper=null,this._chartContainer=null,this._chart=null,this._chartInitTask=null,this._chartIsRefined=!1,this._width=0,this._zoomOutButtonVisible=!1,this._getChartUpdateParamsMemoized=o(((t,e,s,i)=>({chart:t,data:e,stationary:s,messages:i}))),this._onZoomOutButtonClick=()=>{this._chart?.zoomOut()},this._onClearButtonClick=()=>{this.viewModel.clear()},t?.viewModel||(this._defaultViewModel=new d({view:t?.view}),this.viewModel=this._defaultViewModel)}loadDependencies(){return u({action:()=>import("../chunks/calcite-action.js"),button:()=>import("../chunks/calcite-button.js"),loader:()=>import("../chunks/calcite-loader.js")})}postInitialize(){this.addHandles([a((()=>({container:this._chartContainer,width:this._width})),(({container:t,width:e})=>{this._destroyChart(),null!=t&&e>0&&this._initializeChart(t)}),c),a((()=>this._chartUpdateParams),(()=>this._updateChart(this._chartUpdateParams)),c)])}destroy(){this._destroyChart(),null!=this._defaultViewModel&&this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}get input(){return this.viewModel.input}set input(t){this.viewModel.input=t}get profiles(){return this.viewModel.profiles}set profiles(t){this.viewModel.profiles=t}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(t){this.viewModel.unitOptions=t}get unit(){return this.viewModel.unit}set unit(t){this.viewModel.unit=t}get geodesicDistanceThreshold(){return this.viewModel.geodesicDistanceThreshold}set geodesicDistanceThreshold(t){this.viewModel.geodesicDistanceThreshold=t}get icon(){return"altitude"}set icon(t){this._overrideIfSome("icon",t)}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}get visible(){return this.viewModel.visible}set visible(t){this.viewModel.visible=t}get _portrait(){return this._width<_().portraitModePixelBreakpoint}get _chartUpdateParams(){const t=this.view;return this._getChartUpdateParamsMemoized(this._chart,this.viewModel.chartData,null==t||t.stationary,this._chartMessages)}get _chartMessages(){return{...this.messagesUnits,...this.messages}}get _profilesArray(){return this.profiles.toArray()}render(){const{viewModel:t,visible:e}=this;return U("div",{"aria-label":this.messages.widgetLabel,class:this.classes({[B.base]:e,[x.widget]:e,[x.panel]:e,[x.widgetDisabled]:e&&"disabled"===t.state,[B.portrait]:this._portrait,[B.refined]:1===t.progress}),key:this},U("div",{afterCreate:this._onContentWrapperUpdate,afterRemoved:this._onContentWrapperRemoved,afterUpdate:this._onContentWrapperUpdate,bind:this,key:"content-wrapper"},e?this._renderContentForState():null))}_renderContentForState(){switch(this.viewModel.state){case f.Ready:return this._renderContentForReadyState();case f.Selecting:return this._renderContentForSelectingState();case f.Creating:return this._renderContentForCreatingState();case f.Selected:return this._renderContentForSelectedState();case f.Created:return this._renderContentForCreatedState();case f.Disabled:return this._renderContentForReadyState()}}_renderContentForReadyState(){const{sketchButton:t,selectButton:e}=this.visibleElements,s=this.messages;let i;return i=t&&e?s.readyPrompt:t?s.readyPromptCreateOnly:e?s.readyPromptSelectOnly:s.errors?.noProfile,this._renderContent({prompt:i,chart:!1,actions:H})}_renderContentForSelectingState(){const t=this.view;if(null==t)return null;const e=this.messages[`selectingPrompt-${t.type}`];return this._renderContent({prompt:e,chart:!1,actions:[{type:G.SelectCancel}]})}_renderContentForCreatingState(){const{view:t,viewModel:e}=this;if(null==t)return null;const s=e.hasVertices?[{type:G.SketchCancel},{type:G.SketchDone,disabled:!e.tool.interaction.canStopCreating}]:[{type:G.Select},{type:G.Sketch,disabled:!0}];if(e.errorState===b.NoValidInput){const e=this.messages[`creatingPrompt-${t.type}`];return this._renderContent({chart:!1,actions:s,prompt:e})}const i=this._getErrorMessage();return i?this._renderContent({chart:!1,actions:s,prompt:i}):this._renderContent({chart:!0,actions:s})}_renderContentForSelectedState(){const t=this._getErrorMessage();return t?this._renderContent({chart:!1,actions:H,prompt:t}):this._renderContent({chart:!0,actions:H})}_renderContentForCreatedState(){const t=this._getErrorMessage();return t?this._renderContent({chart:!1,actions:H,prompt:t}):this._renderContent({chart:!0,actions:H})}_getErrorMessage(){const t=Q[this.viewModel.errorState];return t?this.messages?.errors?.[t]:null}_renderContent(t){const e=null!=t.prompt?this._renderPrompt(t.prompt):t.chart&&this._renderChart(),{viewModel:s}=this,i=null!=s.input;return U(w,null,U("header",{class:B.header,key:"header"},this._zoomOutButtonVisible?this._renderZoomOutButton():null,this.visibleElements.clearButton&&i?this._renderClearButton():null,this.visibleElements.settingsButton?U(W,{messages:this.messages,uniformChartScaling:s.uniformChartScaling,unit:s.unit,unitOptions:s.unitOptions,visibleElements:this.visibleElements,onUniformChartScalingChange:t=>s.uniformChartScaling=t,onUnitChange:t=>s.unit=t}):null),U("div",{class:B.mainContainer,key:"main-container"},e),this.visibleElements.legend?U(N,{effectiveUnits:s.effectiveUnits,messages:this.messages,profiles:this._profilesArray}):null,this._renderActions(t))}_renderZoomOutButton(){const t=this.messages.zoomOut;return U("calcite-action",{appearance:"transparent",class:B.zoomOutButton,"data-testid":"zoom-out-button",icon:"magnifying-glass-minus",key:"zoom-out",onclick:this._onZoomOutButtonClick,scale:"s",text:t,title:t})}_renderClearButton(){const t=this.messages.clearProfile;return U("calcite-action",{appearance:"transparent",class:B.clearButton,"data-testid":"clear-button",icon:"trash",key:"clear-profile",onclick:this._onClearButtonClick,scale:"s",text:t,title:t})}_renderPrompt(t){return[U("div",{bind:this,class:B.promptContainer,key:"prompt-container"},U("p",null,t))]}_renderChart(){if(!this.visibleElements.chart)return U("div",{class:B.chartContainer,key:"empty-chart-container"});const{chartData:t,progress:e}=this.viewModel,s=this._chartIsRefined||this._canRenderChart(),i=null!=t&&e<1;return s?U(w,null,this._renderSpinner({size:s?"small":"large",visible:i}),U("div",{afterCreate:this._onChartContainerUpdate,afterRemoved:this._onChartContainerRemoved,afterUpdate:this._onChartContainerUpdate,bind:this,class:B.chartContainer,key:"chart-container"})):U(w,null,this._renderSpinner({size:"large",visible:i}),U("div",{class:B.chartContainer,key:"chart-container-empty"}))}_renderSpinner(t){const e="small"===t.size,s=t.visible??!0;return U("calcite-loader",{class:this.classes(B.chartSpinner,e&&B.chartSpinnerSmall,s&&B.chartSpinnerVisible),inline:e,key:"spinner",label:"",scale:"s"})}_canRenderChart(){const t=this.viewModel.chartData;if(null==t)return!1;if(!this.viewModel.inputIsSketched)return t.refined;let e=0;for(const{samples:s}of t.lines)e+=null!=s?s.length:0;return t.refined||e<=_().largeChartSamples}_renderActions({actions:t}){const e=t.map((t=>{switch(t.type){case G.Sketch:return this.visibleElements.sketchButton&&this._renderAction({action:t,className:B.sketchButton,label:this.messages.sketchButtonLabel,onClick:this._onSketchButtonClick,primary:!0});case G.SketchCancel:return this.visibleElements.sketchButton&&this._renderAction({action:t,onClick:this._onCancelButtonClick,className:B.sketchCancelButton,label:this.messagesCommon.cancel,primary:!1});case G.SketchDone:return this.visibleElements.sketchButton&&this._renderAction({action:t,onClick:this._onDoneButtonClick,className:B.sketchDoneButton,label:this.messagesCommon.done,primary:!0});case G.Select:return this.visibleElements.selectButton&&this._renderAction({action:t,onClick:this._onSelectButtonClick,className:B.selectButton,label:this.messages.selectButtonLabel,primary:!1});case G.SelectCancel:return this.visibleElements.selectButton&&this._renderAction({action:t,onClick:this._onCancelButtonClick,className:B.selectCancelButton,label:this.messagesCommon.cancel,primary:!1})}})).filter(Boolean);return e.length?U("footer",{class:B.footer,key:"footer"},e):null}_renderAction({action:t,className:e,label:s,onClick:i,primary:o}){return U("calcite-button",{appearance:o?"solid":"outline-fill",bind:this,class:this.classes(B.actionButton,e),disabled:t.disabled,key:`action-${t.type}`,onclick:i},s)}_onSketchButtonClick(){this.viewModel.start({mode:"sketch"})}_onSelectButtonClick(){this.viewModel.start({mode:"select"})}_onCancelButtonClick(){this.viewModel.cancel()}_onDoneButtonClick(){this.viewModel.stop()}_onContentWrapperUpdate(t){t!==this._contentWrapper&&(this._contentWrapper=t,this.removeHandles(q),this.addHandles(C(t,(t=>{this._width=t.contentRect.width})),q))}_onContentWrapperRemoved(){this.removeHandles(q),this._contentWrapper=null}_updateChart(t){const{data:e,chart:s,messages:i,stationary:o}=t;null!=s&&null!=i&&o&&this._canRenderChart()&&(s.update(t),this._chartIsRefined=null!=e&&e.refined)}_onChartContainerUpdate(t){this._chartContainer=t}_onChartContainerRemoved(){this._chartContainer=null}_initializeChart(t){i(this._chartInitTask),this._chartInitTask=e((async e=>{const{createChart:i}=await import("../chunks/chartUtils.js");r(e);const o=await i({container:t,abortOptions:{signal:e},onRangeChange:(t,e)=>{this._zoomOutButtonVisible=1!==t||1!==e},onCursorPositionChange:t=>{this.viewModel.hoveredChartPosition=t}});if(e.aborted)throw s(o),n();this._chart=o,this._updateChart(this._chartUpdateParams)}))}_destroyChart(){this._chartInitTask=i(this._chartInitTask),this._chart=s(this._chart),this._chartIsRefined=!1}};t([p({type:d})],Z.prototype,"viewModel",void 0),t([p()],Z.prototype,"view",null),t([p()],Z.prototype,"input",null),t([p()],Z.prototype,"profiles",null),t([p()],Z.prototype,"unitOptions",null),t([p()],Z.prototype,"unit",null),t([p()],Z.prototype,"geodesicDistanceThreshold",null),t([p({type:R,nonNullable:!0})],Z.prototype,"visibleElements",void 0),t([p()],Z.prototype,"icon",null),t([p()],Z.prototype,"label",null),t([p()],Z.prototype,"visible",null),t([p(),S("esri/widgets/ElevationProfile/t9n/ElevationProfile")],Z.prototype,"messages",void 0),t([p(),S("esri/t9n/common")],Z.prototype,"messagesCommon",void 0),t([p(),S("esri/core/t9n/Units")],Z.prototype,"messagesUnits",void 0),t([p()],Z.prototype,"_contentWrapper",void 0),t([p()],Z.prototype,"_chartContainer",void 0),t([p()],Z.prototype,"_chart",void 0),t([p()],Z.prototype,"_chartInitTask",void 0),t([p()],Z.prototype,"_chartIsRefined",void 0),t([p()],Z.prototype,"_width",void 0),t([p()],Z.prototype,"_portrait",null),t([p()],Z.prototype,"_zoomOutButtonVisible",void 0),t([p()],Z.prototype,"_chartUpdateParams",null),t([p()],Z.prototype,"_chartMessages",null),t([p()],Z.prototype,"_profilesArray",null),Z=t([h("esri.widgets.ElevationProfile")],Z);const J=Z;export{J as default,z as g};
