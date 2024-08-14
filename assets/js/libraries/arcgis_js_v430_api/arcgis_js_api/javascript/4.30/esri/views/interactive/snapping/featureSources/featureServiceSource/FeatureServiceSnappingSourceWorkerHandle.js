// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/arrayUtils ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/Logger ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/support/UpdatingHandles ../../../../../core/workers/WorkerHandle ../../../../../geometry/support/typeUtils ../../../../../layers/graphics/dehydratedPoint".split(" "),
function(d,f,n,k,p,l,g,x,y,q,r,t,u,v){function m(a){return{filter:null!=a.filter?a.filter.toJSON():null,customParameters:a.customParameters,viewType:a.viewType}}d.FeatureServiceSnappingSourceWorkerHandle=class extends n{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(a){super(a);this._updatingHandles=new r.UpdatingHandles;this.schedule=this._suspendController=null;this.hasZ=!1;this.elevationAlignPointsInFeatures=async c=>{const b=[];for(const {points:e}of c.pointsInFeatures)for(const {z:h}of e)b.push(h);
return{elevations:b,drapedObjectIds:new Set,failedObjectIds:new Set}};this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]});this.availability=0;this._workerHandleUpdating=!0;this._editId=0;this.updateOutFields=l.debounce(async(c,b)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...c],b));this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},b))})}destroy(){this._suspendController=p.abortMaybe(this._suspendController);
this._workerHandle.destroy();this._updatingHandles.destroy()}initialize(){this._workerHandle=new w(this.schedule,{alignElevation:async(a,{signal:c})=>({result:await this.elevationAlignPointsInFeatures(a.query,c)}),getSymbologyCandidates:async(a,{signal:c})=>({result:await this.queryForSymbologySnapping(a,c)})});this.addHandles([this._workerHandle.on("notify-updating",({updating:a})=>this._workerHandleUpdating=a),this._workerHandle.on("notify-availability",({availability:a})=>this._set("availability",
a))])}async setup(a,c){var b=a.layer;b="multipatch"===b.geometryType||"mesh"===b.geometryType?null:{url:b.parsedUrl?.path??"",fieldsIndex:b.fieldsIndex.toJSON(),geometryType:u.featureGeometryTypeKebabDictionary.toJSON(b.geometryType),capabilities:b.capabilities,objectIdField:b.objectIdField,globalIdField:b.globalIdField,spatialReference:b.spatialReference.toJSON(),timeInfo:b.timeInfo?.toJSON()};null!=b&&(a={configuration:m(a.configuration),serviceInfo:b,spatialReference:a.spatialReference.toJSON(),
hasZ:this.hasZ,elevationInfo:a.layer.elevationInfo?.toJSON()},await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",a,c)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},c)))}async configure(a,c){a=m(a);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",a,c));this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},c))}async refresh(a){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",
{},a));this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},a))}async fetchCandidates(a,c){const {point:b,filter:e,coordinateHelper:h}=a;a={...a,point:v.makeDehydratedPoint(b[0],b[1],b[2],h.spatialReference.toJSON()),filter:e?.toJSON()};return this._workerHandle.invoke(a,c)}async updateTiles(a,c){a={tiles:a.tiles,tileInfo:null!=a.tileInfo?a.tileInfo.toJSON():null,tileSize:a.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",
a,c));this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},c))}async applyEdits(a,c){var b=this._editId++;await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",{id:b},c));a=await this._updatingHandles.addPromise(l.whenOrAbort(a.result,c));b={id:b,edits:{addedFeatures:a.addedFeatures?.map(({objectId:e})=>e).filter(k.isSome)??[],deletedFeatures:a.deletedFeatures?.map(({objectId:e,globalId:h})=>({objectId:e,globalId:h}))??[],updatedFeatures:a.updatedFeatures?.map(({objectId:e})=>
e).filter(k.isSome)??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",b,c));this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},c))}getDebugInfo(a){return this._workerHandle.invokeMethod("getDebugInfo",{},a)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(a){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",
a)}async setSuspended(a){this._suspendController?.abort();this._suspendController=new AbortController;await this._workerHandle.invokeMethod("setSuspended",a,this._suspendController.signal)}};f.__decorate([g.property({constructOnly:!0})],d.FeatureServiceSnappingSourceWorkerHandle.prototype,"schedule",void 0);f.__decorate([g.property({constructOnly:!0})],d.FeatureServiceSnappingSourceWorkerHandle.prototype,"hasZ",void 0);f.__decorate([g.property({constructOnly:!0})],d.FeatureServiceSnappingSourceWorkerHandle.prototype,
"elevationAlignPointsInFeatures",void 0);f.__decorate([g.property({constructOnly:!0})],d.FeatureServiceSnappingSourceWorkerHandle.prototype,"queryForSymbologySnapping",void 0);f.__decorate([g.property({readOnly:!0})],d.FeatureServiceSnappingSourceWorkerHandle.prototype,"updating",null);f.__decorate([g.property({readOnly:!0})],d.FeatureServiceSnappingSourceWorkerHandle.prototype,"availability",void 0);f.__decorate([g.property()],d.FeatureServiceSnappingSourceWorkerHandle.prototype,"_workerHandleUpdating",
void 0);d.FeatureServiceSnappingSourceWorkerHandle=f.__decorate([q.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],d.FeatureServiceSnappingSourceWorkerHandle);class w extends t.WorkerHandle{constructor(a,c){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},a,{strategy:"dedicated",client:c})}}Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});