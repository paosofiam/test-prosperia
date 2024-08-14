/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../Graphic.js";import r from"../core/Accessor.js";import{D as s}from"../core/lang.js";import i from"../core/Collection.js";import{h as o}from"./handleUtils.js";import{L as p}from"./Logger.js";import{d as l,a}from"./maybe.js";import{throwIfAborted as n,throwIfAbortError as m,isAbortError as u,allSettledValues as j,createResolver as d}from"../core/promiseUtils.js";import{syncAndInitial as y,initial as c,watch as h}from"../core/reactiveUtils.js";import{property as g}from"../core/accessorSupport/decorators/property.js";import{subclass as f}from"../core/accessorSupport/decorators/subclass.js";import"../layers/buildingSublayers/BuildingGroupSublayer.js";import b from"../core/Error.js";import{WhereClause as w}from"../core/sql/WhereClause.js";import"../layers/buildingSublayers/BuildingComponentSublayer.js";import S from"../layers/support/FeatureFilter.js";import{fixFields as v,unpackFieldNames as F,populateMissingFields as U}from"../layers/support/fieldUtils.js";import x from"../rest/support/Query.js";import I from"../core/Evented.js";import{IdentifiableMixin as V}from"../core/Identifiable.js";import{EsriPromiseMixin as C}from"../core/Promise.js";import{I as E,c as M,F as L}from"./I3SMeshView3D.js";import{a as R}from"./vec4f64.js";import{a as _}from"./edgeUtils.js";import{C as T}from"./DecodeSymbolColor.glsl.js";import{I as P,a as D,b as O,c as B}from"./I3SQueryFeatureStore.js";import{f as A,g as q,h as G}from"./I3SUtil.js";import{T as k,D as Q}from"./TemporalSceneLayerView.js";import"./tracking.js";import{h as N,g as H,a as W}from"./popupUtils.js";import{b as z}from"./layerViewUtils.js";import{T as Z}from"./Scheduler.js";import{L as J}from"./LayerView3D.js";import{u as X}from"../views/SceneView.js";import K from"../views/layers/LayerView.js";import"../geometry.js";import"./ensureType.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./utils.js";import"../core/Handles.js";import"./metadata.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../config.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"./shared.js";import"./SimpleObservable.js";import"../core/sql.js";import"../intl.js";import"./number.js";import"./substitute.js";import"./messages.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"./asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./loadAll.js";import"../layers/buildingSublayers/BuildingSublayer.js";import"./MultiOriginJSONSupport.js";import"./commonProperties2.js";import"./layerContainerType.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../symbols/support/jsonUtils.js";import"./layerUtils2.js";import"./defaults.js";import"./defaultsJSON.js";import"../renderers/DictionaryRenderer.js";import"./LRUCache.js";import"./MemCache.js";import"./Version.js";import"../layers/support/FieldsIndex.js";import"./UnknownTimeZone.js";import"./OverrideHelper.js";import"./colorUtils2.js";import"./vec4.js";import"./utils7.js";import"./quantizationUtils.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../renderers/support/jsonUtils.js";import"../layers/FeatureLayer.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../form/elements/RelationshipElement.js";import"../form/elements/TextElement.js";import"./formUtils.js";import"../layers/Layer.js";import"../TimeExtent.js";import"./timeUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"./editsZScale.js";import"./queryZScale.js";import"./zscale.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"./fieldType.js";import"../layers/mixins/APIKeyMixin.js";import"./ArcGISService.js";import"./arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./mat4.js";import"./_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"./EditBusLayer.js";import"./uuid.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"./DataLayerSource.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"./featureLayerUtils.js";import"./featureQueryAll.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./serviceCapabilitiesUtils.js";import"../layers/support/Subtype.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"./clusterUtils.js";import"./MD5.js";import"../layers/mixins/OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"./OrderByInfo.js";import"../layers/mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./portalItemUtils.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"./labelingInfo.js";import"./versionUtils.js";import"./styleUtils2.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";import"./interfaces2.js";import"./capabilities.js";import"./I3SIndexInfo.js";import"./I3SLayerDefinitions.js";import"./mat4f64.js";import"./spatialReferenceEllipsoidUtils.js";import"./projectVectorToVector.js";import"./projectPointToVector.js";import"./dehydratedPoint.js";import"./sphere.js";import"./ray.js";import"./plane.js";import"./mat3f64.js";import"./quatf64.js";import"./vec2f64.js";import"./mathUtils2.js";import"./I3SBinaryReader.js";import"./VertexAttribute.js";import"./computeTranslationToOriginAndRotation.js";import"./floatRGBA.js";import"./interfaces3.js";import"./Matrix4PassUniform.js";import"./BindType.js";import"./Float4DrawUniform.js";import"./NormalAttribute.glsl.js";import"./Matrix3DrawUniform.js";import"./orientedBoundingBox.js";import"./mat3.js";import"./quat.js";import"./ViewingMode.js";import"./Attribute.js";import"./TimeOnly.js";import"./ByteSizeUnit.js";import"./UpdatingHandles.js";import"./Transform.js";import"./RenderTexture.js";import"./ElevationRange.js";import"./ElevationUpdateEvent.js";import"./ElevationContext.js";import"./ElevationProvider.js";import"./hydratedFeatures.js";import"./graphicUtils.js";import"./Material.js";import"./basicInterfaces.js";import"./StencilUtils.js";import"./Indices.js";import"./Util.js";import"./triangle.js";import"./lineSegment.js";import"./doublePrecisionUtils.js";import"./ShaderTechniqueConfiguration.js";import"./debugFlags2.js";import"./requestImageUtils.js";import"./enums.js";import"./Texture.js";import"./GLObjectType.js";import"./vec2.js";import"./renderState.js";import"./vec2f32.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./types.js";import"./RayIntersections.js";import"./HUDMaterial.js";import"./VerticalOffset.glsl.js";import"./GLTextureMaterial.js";import"./ScreenSpacePass.glsl.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./OutputHighlight.glsl.js";import"./VertexPosition.glsl.js";import"./RenderGeometry.js";import"./IntegerPassUniform.js";import"../views/3d/webgl/RenderCamera.js";import"./frustum.js";import"./axisAngleDegrees.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./NestedMap.js";import"./RibbonLineMaterial.js";import"./Octree.js";import"./Intersector.js";import"./Intersector2.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./glUtil.js";import"./VertexElementDescriptor.js";import"./BufferObject.js";import"./projectBoundingRect.js";import"./dehydratedFeatures.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedGeometry.js";import"./OptimizedFeatureSet.js";import"./earcut.js";import"./DoubleArray.js";import"./vec32.js";import"./SnappingCandidate.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./Normals.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./vec42.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./resourceUtils3.js";import"./Matrix4sPassUniform.js";import"../views/3d/webgl/RenderNode.js";import"./CameraSpace.glsl.js";import"./CIMSymbolHelper.js";import"./BidiEngine.js";import"./fontUtils.js";import"./GeometryUtils.js";import"./enums2.js";import"./definitions.js";import"./shapingUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./Rect.js";import"./BoundingBox.js";import"../symbols/support/cimSymbolUtils.js";import"./utils11.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./line.js";import"./line2.js";import"./lineStippleUtils.js";import"./projectVectorToPoint.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./MeshVertexAttributes.js";import"./meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../geometry/support/MeshLocalVertexSpace.js";import"./projection.js";import"./interfaces6.js";import"./DefaultLayouts.js";import"./webStyleSymbolUtils.js";import"./Intersector3.js";import"./ColorMaterial.js";import"./TriangleMaterial.js";import"./LayerConstants.js";import"./I3SOverrides.js";import"./I3SNode.js";import"./ReactiveSet.js";import"./meshFeatureSet.js";import"../geometry/Mesh.js";import"../geometry/support/MeshTransform.js";import"./vertexSpaceConversion.js";import"./External.js";import"./infoFor3D.js";import"./FeatureLayerView3D.js";import"./FeatureLayerViewBase3D.js";import"./Graphics3DGraphicsPipeline.js";import"./timeSupport2.js";import"../support/timeUtils.js";import"./utils6.js";import"./tagSymbols.js";import"./projectExtentUtils.js";import"./geometryServiceUtils.js";import"./project.js";import"./utils8.js";import"./utils9.js";import"../rest/support/ProjectParameters.js";import"./ReactiveMap.js";import"./dehydratedFeatureComparison.js";import"../core/signal.js";import"./TerrainConst.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./TileKey.js";import"./queryForSymbologySnapping.js";import"./elevationInfoUtils.js";import"./hash.js";import"./Graphics3DObjectStates.js";import"./rendererConversion.js";import"./basemapUtils.js";import"../Basemap.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"./PooledRBush.js";import"./quickselect.js";import"./InputManager.js";import"./floorFilterUtils.js";import"./QueryEngine.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./timeSupport.js";import"./projectionSupport.js";import"./json.js";import"./QueryEngineCapabilities.js";import"./utils12.js";import"./utils2.js";import"./utils10.js";import"./generateRendererUtils.js";import"./scaleUtils.js";import"./FeatureStore.js";import"./BoundsStore.js";import"./Program.js";import"./heatmapTextureUtils.js";import"./LayerViewPerformanceInfo.js";import"./query.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./WorkerHandle.js";import"./EventedSet.js";import"./FeatureLayerView.js";import"./RefreshableLayerView.js";import"../Camera.js";import"../CameraLayout.js";import"./Cyclical.js";import"../Viewpoint.js";import"./domUtils.js";import"./GraphicsCollection.js";import"./RenderCoordsHelper.js";import"../views/View.js";import"../Map.js";import"../Ground.js";import"./CollectionFlattener.js";import"./editableLayers.js";import"../layers/catalog/catalogUtils.js";import"./collectionUtils2.js";import"../support/LayersMixin.js";import"../support/TablesMixin.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"./selectionUtils.js";import"../views/Theme.js";import"./ViewEvents.js";import"./IViewEvents.js";import"./interfaces.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"./a11yUtils.js";import"../views/navigation/gamepad/GamepadSettings.js";import"./heightModelInfoUtils.js";import"./projectionUtils.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"./projector.js";import"./widgetUtils.js";import"../views/GroundView.js";import"./cameraUtils.js";import"./earthUtils.js";import"./spatialReferenceSupport.js";import"../layers/support/ElevationSampler.js";import"../views/PopupView.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"./lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./quantityUtils.js";import"./debugFlags.js";import"./ShadowCastVisualizeTechniqueConfiguration.js";import"./euclideanLengthMeasurementUtils.js";import"./WebGLRequirements.js";import"./capabilities2.js";import"./contextUtils.js";import"./ray2.js";import"./viewpointUtils2.js";import"./ZoomMomentumEstimator.js";import"./labelFormatUtils.js";import"./FeatureTileDescriptor3D.js";import"./hitTest.js";import"./intersectorUtilsConversions.js";import"./hitTestSelectUtils.js";import"./terrainUtils.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./ElevationQueryTileCache.js";import"./RenderableTile.js";import"./mat3f32.js";import"./enums3.js";import"./TileStrategy.js";import"./TileKey2.js";import"./QueueProcessor.js";import"./config.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./StyleDefinition.js";import"./ElevationSamplerData.js";import"./resources.js";import"./edgeProcessing.js";import"./Viewshed.js";import"../views/3d/webgl.js";import"../views/3d/webgl/ManagedFBO.js";import"./testSVGPremultipliedAlpha.js";import"./RenderingContext.js";import"./ProgramCache.js";import"./screenshotUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"./themeUtils.js";import"../widgets/Attribution.js";import"../widgets/Widget.js";import"./jsxWidgetSupport.js";import"../widgets/Attribution/AttributionViewModel.js";import"./globalCss.js";import"./accessibleHandler.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"./utils20.js";import"../widgets/support/GoTo.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";import"../layers/support/SceneModification.js";import"./persistable.js";import"./multiOriginJSONSupportUtils.js";import"./resourceExtension.js";import"./SceneLayerWorker.js";import"./makeScheduleFunction.js";const $=(t,r)=>{let s=class extends(C(V(I.EventedMixin(t)))){constructor(e){super(e),this.sublayer=null,this.parent=null,this.view=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&this.isUpdating()}get visible(){return!!this.sublayer?.visible}set visible(e){this._overrideIfSome("visible",e)}get fullOpacity(){const e=e=>null!=e?e:1;return e(this.sublayer?.opacity)*e(this.parent?.fullOpacity)}canResume(){return!this.parent?.suspended&&this.view?.ready&&this.visible||!1}isUpdating(){return!1}};return e([g()],s.prototype,"sublayer",void 0),e([g()],s.prototype,"parent",void 0),e([g({readOnly:!0})],s.prototype,"suspended",null),e([g({type:Boolean,readOnly:!0})],s.prototype,"updating",null),e([g()],s.prototype,"view",void 0),e([g()],s.prototype,"visible",null),e([g()],s.prototype,"fullOpacity",null),s=e([f("esri.views.3d.layers.BuildingSublayerView3D")],s),s};var Y;function ee(e){switch(e.filterMode.type){case"solid":return{mode:Y.Solid};case"wire-frame":return{mode:Y.WireFrame,edgeMaterial:_(e.filterMode.edges,{})};case"x-ray":return{mode:Y.XRay}}}function te(e,t){if(null==t)return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(t.mode){case Y.Solid:return;case Y.WireFrame:return e.color[3]=0,e.edgeMaterial=t.edgeMaterial,void(e.pickable=!1);case Y.XRay:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=.15,e.colorMixMode=T.Replace,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=(r=e.edgeMaterial,null==r?null:(re.lastMaterial!==r&&(re.cachedMaterial=function(e){const t=R(e.color);return t[3]*=.075,{...e,color:t}}(r),re.lastMaterial=r),re.cachedMaterial)))}var r}!function(e){e[e.Solid=0]="Solid",e[e.WireFrame=1]="WireFrame",e[e.XRay=2]="XRay"}(Y||(Y={}));const re={cachedMaterial:null,lastMaterial:null};class se extends r{constructor(){super(...arguments),this.sublayer=null}get updating(){return!1}get suspended(){return!1}get availableFields(){return[]}get filter(){return null}set filter(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}highlight(e){throw new Error("Not implemented")}}e([g()],se.prototype,"sublayer",void 0),e([g()],se.prototype,"availableFields",null),e([g()],se.prototype,"filter",null);let ie=class extends(k(Q(E($(se))))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.requiredFields=[],this.progressiveLoadFactor=1,this._queryEngine=null}get i3slayer(){return this.sublayer}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}get layerId(){return this.sublayer.layer.id}get sublayerId(){return this.sublayer.id}get layerPopupEnabledAndHasTemplate(){return this.sublayer.popupEnabled&&N(this.sublayer,this.layerView?.view.popup?.defaultPopupTemplateEnabled)}initialize(){this._updatingHandles.add((()=>this.mergedFilter),(e=>{null!=e&&P.checkSupport(e)?null==this._i3sFilter?this._i3sFilter=new P({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),addSqlFilter:(e,t)=>this.addSqlFilter(e,t,this.logError),addTimeFilter:(e,t)=>this.addTimeFilter(e,t)}):this._i3sFilter.viewFilter=e:this._i3sFilter=l(this._i3sFilter)}),y),this._updatingHandles.add((()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields]),(()=>this._updateRequiredFields())),this._updatingHandles.add((()=>this.sublayer.renderer),(e=>this._rendererChange(e)),c);const e=()=>this._filterChange();this._updatingHandles.add((()=>this.parsedDefinitionExpression),e),this._updatingHandles.add((()=>this._i3sFilter?.sortedObjectIds),e),this._updatingHandles.add((()=>this._i3sFilter?.parsedWhereClause),e),this._updatingHandles.add((()=>this.getTimeFilterDependencies()),e),this._updatingHandles.add((()=>this.mergedFilter),e),this._updatingHandles.add((()=>[this._i3sFilter?.parsedGeometry,this.filter?.spatialRelationship]),(()=>this._geometryFilterChange())),this._updatingHandles.add((()=>this.parsedFilterExpressions),(()=>this._updateSymbologyOverride()),c),this.addResolvingPromise(this._updateRequiredFields())}get lodFactor(){return this.view.qualitySettings.sceneService.object.lodFactor}get parsedFilterExpressions(){return"Overview"!==this.sublayer.modelName&&this.layerView?this.layerView.filterExpressions.map((([e,t])=>{let r;try{r=w.create(e,this.sublayer.fieldsIndex)}catch(e){return p.getLogger(this).error("Failed to parse filterExpression: "+e),null}if(!r.isStandardized)return p.getLogger(this).error("filterExpression is using non standard function"),null;const s=[],i=r.fieldNames;return A(i,this.sublayer.fields,{missingFields:s}),s.length>0?(p.getLogger(this).error(`filterExpression references unknown fields: ${s.join(", ")}`),null):[r,t]})).filter((e=>null!=e)):[]}get filter(){return this._get("filter")}set filter(e){this._set("filter",P.checkSupport(e)?e:null)}isUpdating(){return super.isUpdating()||(this._i3sFilter?.updating??!1)}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride(((t,r)=>{for(const[s,i]of e)try{if(s.testFeature(t))return te(r,i)}catch(e){this.logError(e)}return te(r,null)}),this.filterExpressionFields):this._setSymbologyOverride(null,null)}get filterExpressionFields(){return v(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce(((e,[t])=>e.concat(t.fieldNames)),new Array))}get availableFields(){const e=this.sublayer,t=e.fieldsIndex;let r=this.requiredFields;if(e.outFields||e.layer.outFields){const s=[...e.outFields||[],...e.layer.outFields||[]];r=[...F(t,s),...r]}return v(t,r)}_createLayerGraphic(e){return new t({attributes:e,layer:this.sublayer.layer,sourceLayer:this.sublayer})}canResume(){return super.canResume()&&z(this.i3slayer.effectiveScaleRange,this.view.terrainScale)&&(!this._controller||this._controller.rootNodeVisible)}async fetchPopupFeaturesFromGraphics(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;if(0===e.length)return[];const s=[],i=[],o=null!=this.sublayer.associatedLayer?await this.sublayer.associatedLayer.load(t):this.sublayer,l=F(this.sublayer.fieldsIndex,await H(o,W(this.sublayer,t)));n(t);const a=new Set;for(const t of e)U(l,t,a)?i.push(t):s.push(t);return 0===i.length?s:(null!=this.sublayer.associatedLayer&&await this.sublayer.associatedLayer.load().catch((()=>p.getLogger(this).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes."))),this.whenGraphicAttributes(i,Array.from(a)).catch((e=>(m(e),i))).then((e=>s.concat(e))))}async _updateRequiredFields(){const e=v(this.sublayer.fieldsIndex,[...this.sublayer.renderer?await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields,...this.filterExpressionFields]);this._set("requiredFields",e)}_validateFetchPopupFeatures(e){const{sublayer:t}=this,{popupEnabled:r}=t;return r?W(t,e)?void 0:new b("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:t}):new b("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:t})}getFilters(){const e=super.getFilters();return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this._i3sFilter?.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return null!=this.filter?this.filter.createQuery(e):new x(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t?.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t?.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t?.signal).then((e=>{if(!e?.features)return e;const t=this.sublayer,r=t.layer;for(const s of e.features)s.layer=r,s.sourceLayer=t;return e}))}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t?.signal)}_ensureQueryEngine(){return null==this._queryEngine&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=M(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new D({layerView:this,priority:Z.FEATURE_QUERY_ENGINE,spatialIndex:new O({featureAdapter:new B({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,t)=>this._forAllFeatures(((t,r,s)=>e({id:t,index:r,meta:s})),t,L.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:q(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery(null==e?this.createQuery():x.from(e))}};e([g()],ie.prototype,"i3slayer",null),e([g()],ie.prototype,"layerView",void 0),e([g()],ie.prototype,"lodFactor",null),e([g({readOnly:!0})],ie.prototype,"parsedFilterExpressions",null),e([g({type:S})],ie.prototype,"filter",null),e([g()],ie.prototype,"_i3sFilter",void 0),e([g({type:[String],readOnly:!0})],ie.prototype,"filterExpressionFields",null),e([g({type:[String],readOnly:!0})],ie.prototype,"requiredFields",void 0),e([g({type:[String],readOnly:!0})],ie.prototype,"availableFields",null),ie=e([f("esri.views.3d.layers.BuildingComponentSublayerView3D")],ie);const oe=ie;class pe extends K{constructor(e){super(e),this.layer=null,this.sublayerViews=null}highlight(e){throw new Error("Not implemented")}}e([g()],pe.prototype,"layer",void 0),e([g()],pe.prototype,"sublayerViews",void 0);const le=$(r);let ae=class extends(J(pe)){constructor(e){super(e),this.type="building-scene-3d",this.sublayerViews=new i,this._abortController=new AbortController,this._loadingComponents=0,this._pendingWhenSublayerViews=new Map,this.ignoresMemoryFactor=!1}get filterExpression(){const e=this.layer.activeFilterId,t=null!=e?this.layer.filters.find((t=>t.id===e)):null,r=null!=t?t.filterBlocks?.find((e=>"solid"===e.filterMode.type)):null;return r?r.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,t=null!=e?this.layer.filters.find((t=>t.id===e)):null;return t?.filterBlocks?t.filterBlocks.toArray().map((e=>[e.filterExpression??"",ee(e)])):[]}get updatingProgressValue(){const e=this.sublayerViews,t=this._loadingComponents+(e?e.length:0);return e.reduce(((e,t)=>e+t.updatingProgress),0)/t}get visibleAtCurrentScale(){return z(this.layer.effectiveScaleRange,this.view.terrainScale)}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some((e=>e.updating))}initialize(){G(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this._initializeSubLayerViews(this.layer.sublayers,this)}destroy(){this.sublayerViews&&(this.sublayerViews.forEach((e=>e.destroy())),this.sublayerViews=null),this._abortController=a(this._abortController)}_initializeSubLayerViews(e,t){const r=this,s=this.view;e.forEach((e=>{if(!e.isEmpty)if("building-group"===e.type){const r=new le({sublayer:e,view:s,parent:t});this._initializeSubLayerViews(e.sublayers,r)}else"mesh"===e.geometryType&&(this._loadingComponents++,e.load({signal:this._abortController.signal}).then((()=>{const i=new oe({sublayer:e,layerView:r,view:s,parent:t});this.sublayerViews.push(i);const o=this._pendingWhenSublayerViews.get(e);if(o){for(const e of o)e.resolve(i);this._pendingWhenSublayerViews.delete(e)}this.addHandles([h((()=>i.updating),(()=>this.notifyChange("updating")),y),h((()=>i.updatingProgress),(()=>this.notifyChange("updatingProgressValue")),y)])})).catch((t=>{u(t)||p.getLogger(this).error(`Error while creating view for sublayer ${e.id}\nLayer: ${this.layer.url}\n`,t)})).then((()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")})))}))}getGraphicFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getGraphicFromIntersectorTarget(e);return null}async fetchPopupFeaturesFromGraphics(e,t){if(0===e.length)return[];const r=s(e,(e=>e.sourceLayer)),i=[];for(const[e,s]of r){const r=this._findComponent(e);null!=r&&i.push(r.fetchPopupFeaturesFromGraphics(s,t))}const o=await j(i);return n(t),o.flat()}whenGraphicBounds(e){const t=this._findComponent(e.sourceLayer);return null==t?Promise.reject():t.whenGraphicBounds(e)}getAABBFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getAABBFromIntersectorTarget(e);return null}async whenSublayerView(e){const t=this._findComponent(e);if(null!=t)return t;const r=this._pendingWhenSublayerViews.get(e),s=d();return r?r.push(s):this._pendingWhenSublayerViews.set(e,[s]),s.promise}_findComponent(e){return this.sublayerViews.find((t=>e===t.sublayer))}highlight(e){e instanceof t?e=[e]:e instanceof i&&(e=e.toArray());const r=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof t){const t=e,s=new Map;for(const e of t){let t=s.get(e.sourceLayer);null==t&&(t=[],s.set(e.sourceLayer,t)),t.push(e)}this.sublayerViews.forEach((e=>{const t=s.get(e.sublayer);t&&r.push(e.highlight(t))}))}return o(r)}get usedMemory(){return this.sublayerViews.reduce(((e,t)=>e+t.usedMemory),0)}get unloadedMemory(){return this.sublayerViews.reduce(((e,t)=>e+t.unloadedMemory),0)}};e([g()],ae.prototype,"sublayerViews",void 0),e([g({readOnly:!0})],ae.prototype,"filterExpression",null),e([g({readOnly:!0})],ae.prototype,"filterExpressions",null),e([g(X)],ae.prototype,"updatingProgress",void 0),e([g({readOnly:!0,dependsOn:[]})],ae.prototype,"updatingProgressValue",null),e([g({readOnly:!0})],ae.prototype,"visibleAtCurrentScale",null),ae=e([f("esri.views.3d.layers.BuildingSceneLayerView3D")],ae);const ne=ae;export{ne as default};
