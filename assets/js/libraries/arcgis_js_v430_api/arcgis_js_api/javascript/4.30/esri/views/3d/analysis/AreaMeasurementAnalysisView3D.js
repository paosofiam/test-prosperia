// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/has ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../properties/defaultUnit ./AnalysisView3D ./interfaces ./AreaMeasurement/support/AreaMeasurementController ./AreaMeasurement/support/AreaMeasurementPathHelper ./AreaMeasurement/support/AreaMeasurementVisualization".split(" "),function(b,a,q,f,c,r,t,g,h,k,
l,m,n,p){a=class extends k.AnalysisView3D(a){constructor(d){super(d);this.type="area-measurement-view-3d";this.stagedPoint=this.lastDraggedVertex=this.measurementData=this.analysis=null;this.mode=l.MeasurementMode.Auto}initialize(){const {analysis:d,view:e}=this;this.path=new n.AreaMeasurement3DPathHelper({view:e,areaMeasurement:d});this.analysisVisualization=new p.AreaMeasurementVisualization({view:e,analysis:d,analysisViewData:this});this.analysisController=new m.AreaMeasurementController({view:e,
analysis:d,analysisViewData:this})}destroy(){this.analysisController=f.destroyMaybe(this.analysisController);this.analysisVisualization=f.destroyMaybe(this.analysisVisualization);this.path.destroy()}get updating(){return!!this.analysisVisualization?.loadingMessages}get result(){const {measurementData:d}=this;return null==d?{area:null,mode:null,perimeter:null}:"euclidean"===d.actualMeasurementMode?{area:d.area,perimeter:d.perimeterLength,mode:"euclidean"}:{area:d.geodesicArea,perimeter:d.pathLength,
mode:"geodesic"}}get viewData(){return this.analysisVisualization.viewData}get validMeasurement(){return this.path.isValidPolygon}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){}};b.__decorate([c.property({readOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({constructOnly:!0,nonNullable:!0})],a.prototype,"analysis",void 0);b.__decorate([c.property()],a.prototype,"updating",null);b.__decorate([c.property()],a.prototype,"analysisVisualization",void 0);b.__decorate([c.property()],
a.prototype,"analysisController",void 0);b.__decorate([c.property()],a.prototype,"result",null);b.__decorate([c.property()],a.prototype,"measurementData",void 0);b.__decorate([c.property()],a.prototype,"viewData",null);b.__decorate([c.property()],a.prototype,"validMeasurement",null);b.__decorate([c.property()],a.prototype,"path",void 0);b.__decorate([c.property()],a.prototype,"lastDraggedVertex",void 0);b.__decorate([c.property()],a.prototype,"stagedPoint",void 0);b.__decorate([c.property()],a.prototype,
"mode",void 0);b.__decorate([c.property()],a.prototype,"unit",null);b.__decorate([c.property(h.defaultUnitPropertyMetadata)],a.prototype,"_defaultUnit",void 0);return a=b.__decorate([g.subclass("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")],a)});