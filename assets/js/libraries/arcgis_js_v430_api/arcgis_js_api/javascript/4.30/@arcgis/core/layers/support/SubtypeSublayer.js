/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../PopupTemplate.js";import r from"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/PieChartRenderer.js";import s from"../../renderers/Renderer.js";import o from"../../renderers/SimpleRenderer.js";import i from"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import{L as n}from"../../chunks/Logger.js";import{ClonableMixin as p}from"../../core/Clonable.js";import{clone as l}from"../../core/lang.js";import a from"../../core/Error.js";import{IdentifiableMixin as m}from"../../core/Identifiable.js";import u from"../../core/Loadable.js";import{M as d}from"../../chunks/MultiOriginJSONSupport.js";import{s as c}from"../../config.js";import{sqlAnd as y}from"../../core/sql.js";import{property as j}from"../../core/accessorSupport/decorators/property.js";import{r as h}from"../../chunks/reader.js";import{c as b,subclass as f}from"../../core/accessorSupport/decorators/subclass.js";import{w as g}from"../../chunks/writer.js";import k from"../../form/FormTemplate.js";import{l as v,a as S,b as I,m as w,p as C}from"../../chunks/commonProperties2.js";import{f as F}from"../../chunks/featureLayerUtils.js";import O from"./FeatureTemplate.js";import{d as U}from"../../chunks/fieldProperties.js";import{fixRendererFields as T}from"./fieldUtils.js";import D from"./LabelClass.js";import{r as x}from"../../chunks/labelingInfo.js";import E from"../../rest/support/Query.js";import{createPopupTemplate as P}from"../../support/popupUtils.js";import{d as V,a as L,b as R}from"../../chunks/defaults.js";import"../../core/Collection.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/JSONSupport.js";import"../../core/accessorSupport/decorators/cast.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../core/Promise.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/defaultsJSON.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/Version.js";import"./FieldsIndex.js";import"../../chunks/UnknownTimeZone.js";import"../../chunks/OverrideHelper.js";import"../../chunks/colorUtils2.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/utils7.js";import"../../chunks/quantizationUtils.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/Element.js";import"../../form/support/elements.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DatePickerInput.js";import"../../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../form/elements/inputs/TimePickerInput.js";import"../../chunks/domains.js";import"./CodedValueDomain.js";import"./Domain.js";import"./InheritedDomain.js";import"./RangeDomain.js";import"../../form/elements/RelationshipElement.js";import"../../form/elements/TextElement.js";import"../../chunks/formUtils.js";import"../../chunks/layerContainerType.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/featureQueryAll.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../chunks/DataLayerSource.js";import"./Field.js";import"../../chunks/fieldType.js";import"../../chunks/labelUtils.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";const M={key:"type",base:s,errorContext:"renderer",typeMap:{simple:o,"unique-value":i,"class-breaks":r}},A=U(),q=b({types:M});let B=0;function G(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function N(e){switch(e){case"point":case"multipoint":return R.clone();case"polyline":return L.clone();case"polygon":case"multipatch":return V.clone();default:return null}}function Q(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function $(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},o=Q(e,t);if(null!=o){const{defaultValues:e}=o;for(const t in e)s[t]=e[t]}return s[t.subtypeField]=e,new O({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}let H=class extends(d(p(m(u)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${B++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return T(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:o}=this;let i;if(s){i=[];let e=0;s.forEach((({name:t,alias:r,editable:s,visible:n})=>{if(!n)return;const p=o?.fields?.find((e=>e.name===t));if(!p)return;const l={name:t};let a=!1;r!==p.alias&&(l.alias=r,a=!0),s!==p.editable&&(l.editable=s,a=!0),i.push(l),a&&e++})),0===e&&i.length===s.length&&(i=null)}else i=l(e);i?.length&&c(r,i,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e?.fields;if(!e||!s?.length)return null;const{subtypes:o,subtypeField:i}=e,n=o?.find((e=>e.code===r)),p=n?.defaultValues,l=n?.domains,a=[];for(const e of s){const s=e.clone(),{name:o}=s,n=t?.find((e=>e.name===o));if(s.visible=!t||!!n,n){const{alias:e,editable:t}=n;e&&(s.alias=e),!1===t&&(s.editable=!1)}const m=p?.[o]??null;s.defaultValue=o===i?r:m;const u=l?.[o]??null;s.domain=o===i?null:u?"inherited"===u.type?s.domain:u.clone():null,a.push(s)}return a}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||n.getLogger(this).error(z("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){T(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?(t=e.geometryType,new o({symbol:N(t)})):null;var t}readRendererFromService(e,t,r){if("Table"===t.type)return null;const s=t.drawingInfo?.renderer,i=q(s,t,r);let n;const{subtypeCode:p}=this;if(null!=p&&function(e,t){return!(!t||"unique-value"!==e?.type||null==e.field||e.field.toLowerCase()!==t.toLowerCase()||e.field2||e.field3||e.valueExpression)}(i,t.subtypeField)){const e=i.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(p)));e&&(n=new o({symbol:e.symbol}))}else"simple"!==i?.type||i.visualVariables?.length||(n=i);return n}readRenderer(e,t,r){const s=t?.layerDefinition?.drawingInfo?.renderer;if(!s)return;const o=s.visualVariables?.some((e=>"rotationInfo"!==e.type));return o?void 0:q(s,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference}get subtypeField(){return this.parent?.subtypeField}readTemplatesFromService(e,t){return[$(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Q(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw z("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new a("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw z("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new a("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw z("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new a("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw z("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:o}=this;if(r){const{displayField:e,editFieldsInfo:i,objectIdField:n}=r;t={displayField:e,editFieldsInfo:i,fields:s,objectIdField:n,title:o}}return P(t,e)}createQuery(){if(!this.parent)throw z("createQuery");const e=F(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=y(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw z("queryAttachments");const s=e.clone();return s.where=_(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw z("queryFeatures");const s=E.from(e)??r.createQuery();return null!=e&&(s.where=_(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};e([j({readOnly:!0,json:{read:!1}})],H.prototype,"capabilities",null),e([j({readOnly:!0,json:{read:!1}})],H.prototype,"effectiveCapabilities",null),e([j({json:{write:{ignoreOrigin:!0}}})],H.prototype,"charts",void 0),e([j({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],H.prototype,"editingEnabled",void 0),e([j({type:Boolean,readOnly:!0})],H.prototype,"effectiveEditingEnabled",null),e([j({readOnly:!0,json:{read:!1}})],H.prototype,"elevationInfo",null),e([j({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],H.prototype,"fieldOverrides",void 0),e([g("fieldOverrides")],H.prototype,"writeFieldOverrides",null),e([j({...A.fields,readOnly:!0,json:{read:!1}})],H.prototype,"fields",null),e([j(A.fieldsIndex)],H.prototype,"fieldsIndex",void 0),e([j({readOnly:!0,json:{read:!1}})],H.prototype,"floorInfo",null),e([j({type:k,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],H.prototype,"formTemplate",void 0),e([j({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],H.prototype,"id",void 0),e([j({readOnly:!0,json:{read:!1}})],H.prototype,"geometryType",null),e([j({readOnly:!0,json:{read:!1}})],H.prototype,"type",void 0),e([j(G(l(v)))],H.prototype,"labelsVisible",void 0),e([j({type:[D],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:x},write:{ignoreOrigin:!0}}})],H.prototype,"labelingInfo",void 0),e([j({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],H.prototype,"layerType",void 0),e([j(G(l(S)))],H.prototype,"legendEnabled",void 0),e([j({type:["show","hide"]})],H.prototype,"listMode",void 0),e([j((()=>{const e=l(I);return e.json.origins.service.read=!1,G(e)})())],H.prototype,"minScale",void 0),e([j((()=>{const e=l(w);return e.json.origins.service.read=!1,G(e)})())],H.prototype,"maxScale",void 0),e([j({readOnly:!0})],H.prototype,"effectiveScaleRange",null),e([j({readOnly:!0,json:{read:!1}})],H.prototype,"objectIdField",null),e([j({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],H.prototype,"opacity",void 0),e([j({clonable:!1})],H.prototype,"parent",void 0),e([j(G(l(C)))],H.prototype,"popupEnabled",void 0),e([j({type:t,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],H.prototype,"popupTemplate",void 0),e([j({readOnly:!0})],H.prototype,"defaultPopupTemplate",null),e([j({types:M,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],H.prototype,"renderer",null),e([h("service","renderer",["drawingInfo.renderer","subtypeField","type"])],H.prototype,"readRendererFromService",null),e([h("renderer",["layerDefinition.drawingInfo.renderer"])],H.prototype,"readRenderer",null),e([j({readOnly:!0,json:{read:!1}})],H.prototype,"spatialReference",null),e([j({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],H.prototype,"subtypeCode",void 0),e([j({readOnly:!0,json:{read:!1}})],H.prototype,"subtypeField",null),e([j({type:[O],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],H.prototype,"templates",void 0),e([h("service","templates",["geometryType","subtypeField","subtypes","type"])],H.prototype,"readTemplatesFromService",null),e([j({type:String,json:{write:{ignoreOrigin:!0}}})],H.prototype,"title",void 0),e([h("service","title",["subtypes"])],H.prototype,"readTitleFromService",null),e([j({readOnly:!0,json:{read:!1}})],H.prototype,"url",null),e([j({readOnly:!0})],H.prototype,"userHasUpdateItemPrivileges",null),e([j({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],H.prototype,"visible",void 0),H=e([f("esri.layers.support.SubtypeSublayer")],H);const _=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,i=e??"";return s.test(i)?i.replace(s,o):y(o,i)},z=e=>new a(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),J=H;export{J as default};
