// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Logger ../../../core/has ../../../core/RandomLCG ../../../core/Error ../../../core/accessorSupport/decorators/subclass ./SceneLayerAdapter".split(" "),function(c,b,f,g,h,d,e){b=class extends e{constructor(a){super(a)}getField(a){return this.layer.fieldsIndex.get(a??"")}getFieldUsageInfo(a){a=this.getField(a);if(!a)return null;a=this._hasCachedStatistics(a.name);return{supportsLabelingInfo:a,supportsPopupTemplate:a,supportsRenderer:a,supportsLayerQuery:!1,
supportsStatistics:a}}getFieldDomain(){return null}load(a){a=this.layer.load(a).then(()=>{this.geometryType="point";this.objectIdField=null;this.hasQueryEngine=this.supportsSQLExpression=!1});this.addResolvingPromise(a);return Promise.resolve(this)}};return b=c.__decorate([d.subclass("esri.smartMapping.support.adapters.PointCloudLayerAdapter")],b)});