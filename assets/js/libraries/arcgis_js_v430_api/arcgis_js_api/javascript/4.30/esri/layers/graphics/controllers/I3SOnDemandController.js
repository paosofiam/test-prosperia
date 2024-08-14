// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/has ../../../core/Logger ../../../core/PooledArray ../../../core/Promise ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/projection/projectBoundingRect ../../../geometry/support/aaBoundingRect ../../support/PromiseQueue ../../../views/ViewingMode ../../../views/3d/layers/i3s/I3SClientNodeLoader ../../../views/3d/layers/i3s/I3SFrameTask ../../../views/3d/layers/i3s/I3SIndex ../../../views/3d/layers/i3s/I3SLodHandling ../../../views/3d/layers/i3s/I3SNode ../../../views/3d/layers/i3s/I3SNodeLoader ../../../views/3d/layers/i3s/I3SStreamDataController ../../../views/3d/layers/i3s/I3SUtil ../../../views/3d/layers/i3s/I3SViewportQueries ../../../views/3d/layers/support/I3SLayerView ../../../views/3d/support/extentUtils ../../../views/3d/support/index ../../../views/3d/support/MemoryController ../../../views/support/Scheduler".split(" "),
function(h,g,K,q,u,L,v,l,k,Y,M,N,E,O,F,P,Q,R,S,p,T,G,x,U,V,W,y,H,X){function z(a,b){return null!=a&&a.length===b.length&&a.every(c=>0<=A(b,c.name))}function A(a,b){b=b.toLowerCase();for(let c=0;c<a.length;c++)if(a[c].name.toLowerCase()===b)return c;return-1}g=class extends L.EsriPromiseMixin(g){get isMeshPyramid(){return"mesh-pyramids"===this.layer.profile||"MeshPyramid"===this.layer.store?.lodType}get isGraphics3D(){return"points"===this.layer.profile}get useMaximumNumberOfFeatures(){return!this.isMeshPyramid&&
(null==this.layer.priority||"High"===this.layer.priority)}get indexStreamController(){const a=this.layerView.view.resourceController.createStreamDataRequester(y.ClientType.I3S_INDEX);return new G.I3SStreamDataController(a,this.layer.customParameters,this.layer.apiKey)}get dataStreamController(){const a=this.layerView.view.resourceController.createStreamDataRequester(y.ClientType.I3S_DATA);return new G.I3SStreamDataController(a,this.layer.customParameters,this.layer.apiKey)}get crsVertex(){return x.getVertexCrs(this.layer)}get crsIndex(){return x.getIndexCrs(this.layer)}get layer(){return this.layerView.i3slayer}get running(){return this.updating}get rootNodeVisible(){if(this._index){const a=
this._index.rootNode;if(a)return this._updateViewData(),this._index.isNodeVisible(a.index)}return!0}get index(){return this._index}get requiredAttributes(){return this._requiredAttributes}constructor(a){super(a);this.screenSizeFactor=0;this.featureTarget=5E4;this.fixedFeatureTarget=!1;this.updating=!0;this.updatingProgress=1;this.leavesReached=!1;this.worker=null;this._featureLOD=1;this._isIdle=this._stableFeatureLOD=!1;this._cameraDirty=!0;this._invisibleDirty=!1;this._idleStateCallbacks=null;this._newLoadingNodes=
new u({deallocator:null});this._modificationsNodeFilteringArray=new u;this._downloadingCount=0;this._loadingNodes=new Map;this._updatingNodes=new Map;this._progressMaxNumNodes=1;this._requiredAttributes=[];this._requiredAttributesDirty=!0;this._restartNodeLoading=this._disableMemCache=this.disableIDBCache=this._updatesDisabled=!1;this._attributeStorageInfo=this._fields=null;this._idleQueue=new O.PromiseQueue;this._elevationUpdateNodes=new u({deallocator:null});this._errorCount=0}initialize(){const {layerView:a,
layer:b}=this;this._disableMemCache=!a.loadCachedGPUData||!a.addCachedGPUData;this._lodHandling=new S(a);this._defaultGeometrySchema=b.store.defaultGeometrySchema;this.disableIDBCache=K("disable-feature:idb-cache");"fields"in b&&(this._fields=b.fields,this._attributeStorageInfo=b.attributeStorageInfo);this.addResolvingPromise(Promise.all([b.indexInfo,b.when(),a.when()]).then(([c])=>{if(!this.destroyed&&a&&!a.destroyed&&c){var {view:d,clientGeometry:f}=a,{resourceController:r}=d;this._setClippingArea(d.clippingArea);
this.addHandles([l.watch(()=>d?.pointsOfInterest?.focus?.renderLocation,e=>this._pointOfInterestChanged(e),l.initial),l.watch(()=>d.quality,()=>this._setCameraDirty(),l.sync),l.watch(()=>a.contentVisible,e=>{const m=e?()=>this._updateIdleState(!0):()=>this._updateViewData(),w=e?()=>this._updateIdleState(!1):()=>{};e&&null!=this._index&&this._index.invalidateAllElevationRanges();this._idleStateCallbacks?(e||this.cancelNodeLoading(),this.restartNodeLoading(),this._idleStateCallbacks.idleBegin=m,this._idleStateCallbacks.idleEnd=
w):this._idleStateCallbacks=r.scheduler.registerIdleStateCallbacks(m,w)},l.initial),Q.addCallback(a.view.resourceController.scheduler,this),l.watch(()=>a.uncompressedTextureDownsamplingEnabled,()=>this.restartNodeLoading()),l.watch(()=>[this.featureTarget,this.fixedFeatureTarget],()=>{this._setCameraDirty();this._stableFeatureLOD=!1}),l.watch(()=>d.state?.contentCamera,()=>this._setCameraDirty()),l.watch(()=>b.elevationInfo,e=>this._elevationInfoChanged(e)),l.watch(()=>a.lodFactor,()=>this._setCameraDirty()),
l.watch(()=>a.availableFields,()=>this._requiredFieldsChange()),l.watch(()=>a.holeFilling,e=>null!=this._index&&(this._index.holeFilling=e))]);this._viewportQueries=new U(this.crsIndex,d.renderCoordsHelper,d.state.contentCamera,!d.state.fixedContentCamera||this.isGraphics3D,this._clippingArea,this.isMeshPyramid?d.basemapTerrain:d.elevationProvider,F.viewingModeFromString(d.viewingMode),this.layer.elevationInfo,{progressiveLoadFactor:this._getProgressiveLoadFactor(),screenspaceErrorBias:this._lod,
angleDependentLoD:.5>this._lod});this._clientNodeLoader=new P.I3SClientNodeLoader(this.layer.uid,{indexSR:this.crsIndex,vertexSR:this.crsVertex,renderSR:d.renderCoordsHelper.spatialReference,localMode:"local"===d.viewingMode},d.resourceController.memoryController,this.worker);this._index=new R.I3SIndex(F.viewingModeFromString(d.viewingMode),b,c,this.indexStreamController,this._clientNodeLoader,this._viewportQueries,q.getLogger(this),a.holeFilling,e=>a.isNodeLoaded(e),e=>a.isNodeReloading(e),e=>this._shouldLoadNode(e),
e=>this._enableFromGPUCache(e,p.NodeState.Leaf),e=>this._needsUpdate(e),()=>!this.indexStreamController.busy,e=>a.computeVisibilityObb?.(e)??null,a?.computeNodeFiltering?e=>a.computeNodeFiltering(e):void 0);this._index.updateElevationInfo(this.layer.elevationInfo,this.isMeshPyramid||this.isGraphics3D);this._index.imModificationsChanged(!!a.hasModifications);this._index.layerFilterChanged(!!a.hasGeometryFilter);if(null!=f){for(const e of f)this._addMesh(e.mesh,e.oid);this.addHandles(f.on("change",
e=>{for(const m of e.removed)this._removeMesh(m.oid);for(const m of e.added)this._addMesh(m.mesh,m.oid)}))}this._startNodeLoading()}}))}updateNodeModificationStatus(a){const b=this._index,c=this.layerView;null!=b&&c?.updateNodeModificationStatus&&(this._modificationsNodeFilteringArray.clear(),a.forAll(d=>{d=b.getNode(d);null!=d&&this._modificationsNodeFilteringArray.push(d)}),c.updateNodeModificationStatus(this._modificationsNodeFilteringArray),this._invisibleDirty=!0)}destroy(){this.cancelNodeLoading();
this._idleStateCallbacks&&(this._isIdle=!1,this._idleStateCallbacks.remove(),this._idleStateCallbacks=null);this._nodeLoader=null;n.prune();null!=B&&(B.hide(),B=null)}get viewportQueries(){return this._viewportQueries}_getRequiredAttributes(){if(null==this._attributeStorageInfo||!this._fields||!this.layerView.availableFields)return[];const a=this._attributeStorageInfo,b=this._fields,c=this.layer.objectIdField;return this.layerView.availableFields.map(d=>{const f=A(a,d);d=A(b,d);return 0<=f&&0<=d?
{index:f,name:b[d].name,field:b[d],attributeStorageInfo:a[f]}:null}).filter(d=>null!=d&&d.name!==c)}_requiredFieldsChange(){const a=this._getRequiredAttributes();z(this._requiredAttributes,a)||(this._requiredAttributes=a,this._requiredAttributesDirty=!1,this.restartNodeLoading())}requestUpdate(){this._requiredAttributesDirty=!0;this.restartNodeLoading()}_setClippingArea(a){const b=E.create();W.toBoundingRect(a,b,this.layerView.view.renderSpatialReference)?this._clippingArea=b:this._clippingArea=null}_pointOfInterestChanged(a){null!=
this._viewportQueries&&(this._viewportQueries.setPointOfInterest(a),null!=this._index&&(this._index.progressiveLoadPenalty=I.distancePenalty*this._viewportQueries.distCameraToPOI(),this._index.requestUpdate()))}updateClippingArea(a){this._setClippingArea(a);null!=this._viewportQueries&&null!=this._index&&(this._viewportQueries.updateClippingArea(this._clippingArea),this._index.invalidateVisibilityCache());this._setCameraDirty()}_setCameraDirty(){this._cameraDirty=!0;this._lodHandling.setLodGlobalDirty();
this._evaluateUpdating()}_addMesh(a,b){null!=this._index&&(a=this._clientNodeLoader.createMeshNodeInfo(a,b),b=this._index.addClientNodeToIndex(a.id,a.mbs),this._clientNodeLoader.addMeshNode(b,a),this._evaluateUpdating(),this.notifyChange("rootNodeVisible"))}_removeMesh(a){a=this._clientNodeLoader.getMeshNodeIndex(a);if(null!=a)if(null!=this._index)this._index.removeClientNodeFromIndex(a,(b,c)=>{this.layerView.removeNode(c);this._clientNodeLoader.removeNode(b);this.layerView.deleteCachedNodeData&&
null!=b&&this.layerView.deleteCachedNodeData(b);this.layerView.deleteCachedGPUData?.(this.layerView.loadCachedGPUData?.(c))},(b,c,d)=>{this._clientNodeLoader.updateNodeIndex(b,c,d);this.layerView.updateNodeIndex&&this.layerView.updateNodeIndex(c,d)}),this.notifyChange("rootNodeVisible");else throw Error("delayed removal of client side i3s node geometry not supported yet.");}updateElevationChanged(a,b){const c=this._index;if(null==c?.rootNode||null==b)return null;this.crsIndex.equals(b)||(N.projectBoundingRect(a,
b,J,this.crsIndex),a=J);const d=this._elevationUpdateNodes;d.clear();x.findIntersectingNodes(a,c.rootNode,c,f=>d.push(f.index));d.length&&(d.forAll(f=>c.updateElevationChanged(f)),this._setCameraDirty());return d}removeAllGeometryObbs(){null!=this._index&&this._index.removeAllGeometryObbs()}getRenderMbs(a){return null!=this._viewportQueries?this._viewportQueries.getServiceMbsInRenderSR(a):null}_elevationInfoChanged(a){null!=this._index&&(this._index.updateElevationInfo(a,this.isMeshPyramid||this.isGraphics3D),
this._setCameraDirty())}restartNodeLoading(){this._restartNodeLoading=!0;this.cancelNodeLoading();this._evaluateUpdating()}schedule(a,b){return this._idleQueue.push(a,b)}reschedule(a,b){return this._idleQueue.unshift(a,b)}get _isIntegratedMesh(){return"integrated-mesh"===this.layer.type}get unloadedMemoryEstimate(){return null!=this._index&&this.layerView.contentVisible?this._index.unloadedMemoryEstimate*this._lodDropFactor:0}async _loadNodeData(a,b){return 0>a.index?this._clientNodeLoader.loadNodeData(a.id,
b):this._nodeLoader.loadNodeData(a,b)}async _loadAttributes(a,b,c){return(0>a.index?this._clientNodeLoader:this._nodeLoader).loadAttributes(a,b,c)}get indexDepth(){return null!=this._index?this._index.maxLevel:0}set disableMemCache(a){this._disableMemCache=this.layerView.loadCachedGPUData&&this.layerView.addCachedGPUData?a:!0}runTask(a,b){if(!this.layerView.contentVisible)return this._updateViewData(),this._evaluateUpdating(),-Infinity;if(!this.layerView.visible||null==this._index)return-Infinity;
this._processWithErrorLogging(a,b);return this._index.maxPriority}_processWithErrorLogging(a,b){try{this._process(a,b)}catch(c){50>this._errorCount?q.getLogger(this).error(`Error during processing: ${c} at ${c.stack}`):50===this._errorCount&&q.getLogger(this).error("Too many errors for this layer. Further errors will not be displayed."),this._errorCount++}}_process(a,b){this._restartNodeLoading&&this._startNodeLoading();null!=this._nodeLoader&&null!=this._index&&(this._updateViewData(),this._invisibleDirty&&
this._removeInvisibleNodes(a)&&(this._invisibleDirty=!1),this._isIntegratedMesh&&(a.enabled=!1),a.run(()=>this._processIndex(a)),this._updateFeatureLOD(),a.run(()=>this._processCache(a)),this._isIntegratedMesh&&(a.enabled=!0),a.run(()=>this._processNodes(a,b)),this._idleQueue.runTask(a),a.run(()=>this._prefetchIndex()),b.numIndexLoading+=this._index.indexLoading,b.numNodesLoading+=this._downloadingCount,a.run(()=>this._lodHandling.lodGlobalHandling(a)),this._evaluateUpdating())}_processIndex(a){if(null==
this._index)return!1;this._index.dirty&&(this._newLoadingNodes.clear(),this._index.update(Array.from(this._loadingNodes.keys()),a,b=>this.updateNodeModificationStatus(b)),this._disableMemCache||(this._newLoadingNodes.pushArray(this._index.updates.add.data,this._index.updates.add.length),this._newLoadingNodes.pushArray(this._index.updates.missing.data,this._index.updates.missing.length)),a=this._index.featureEstimate.leavesReached,this._index.isLoading||a===this._get("leavesReached")||this._set("leavesReached",
a));return this._index.load()}_prefetchIndex(){return null==this._index||0<this._loadingNodes.size||0<this._index.updates.add.length?!1:this._index.prefetch()}_updateFeatureLOD(){if(this.useMaximumNumberOfFeatures&&null!=this._index&&null!=this._viewportQueries){var a=!this._index.isLoading,b=this.featureTarget*this._baseLOD,c=this._index.featureEstimate;c.estimate=c.estimate||b/2;if(500<this._index.indexMissing){if(1E-4>=this._featureLOD)return;this._featureLOD/=1.5;this._stableFeatureLOD=!1}else if(a&&
c.estimate<b){if(c.leavesReached||1E4<=this._featureLOD||this._stableFeatureLOD)return;this._featureLOD*=Math.min(10,Math.max(b/c.estimate,1.001));a=this._lod;b=this._index.checkFeatureTarget(b,a);b!==a&&(this._featureLOD=b/this._baseLOD,this._stableFeatureLOD=!0)}else if(c.estimate>1.2*b||a&&c.estimate>b){if(1E-4>=this._featureLOD)return;this._featureLOD/=1+.25*(c.estimate/b-1);this._stableFeatureLOD=!1}else return;this._featureLOD=Math.min(1E4,Math.max(1E-4,this._featureLOD));this._viewportQueries.updateScreenSpaceErrorBias(this._lod);
this._index.requestUpdate()}}_processCache(a){const b=this._index;if(null==b)return!1;for(;0<this._newLoadingNodes.length&&!a.done;){var c=this._newLoadingNodes.pop();for(c=b.getParent(c);null!=c&&!this.layerView.isNodeLoaded(c.index);c=b.getParent(c.index))if(this._enableFromGPUCache(c,p.NodeState.Hole)){a.madeProgress();break}}return a.hasProgressed}_processNodes(a,b){if(null==this._index)return!1;let c=(this._isIdle?100:2)-this._loadingNodes.size;const d=this._index.updates;d.cancel.forEach(this._cancelNode,
this);for(d.cancel=[];0<d.remove.length&&!a.done;)this.layerView.removeNode(d.remove.pop()),a.madeProgress();for(;0<d.update.length&&!a.done;){var f=this._index.getNode(d.update.pop());null!=f&&(this._updateLoadedNode(f),a.madeProgress())}for(;0<d.add.length&&!a.done&&0<c;){--c;f=this._index.getNode(d.add.back());if(null==f||f.cacheState!==p.CacheState.Cached&&!this._hasNodeLoadToken(b))break;d.add.pop();this._loadNode(f);a.madeProgress()}return a.hasProgressed}_cancelAllNodes(){this._loadingNodes.forEach(a=>
a.abort());this._loadingNodes.clear();this._updatingNodes.forEach(a=>a.abort());this._updatingNodes.clear()}_cancelNode(a){const b=this._loadingNodes.get(a);b&&(b.abort(),this._loadingNodes.delete(a))}_hasNodeLoadToken(a){return!this._isIdle&&2<=a.numNodesLoading+this._loadingNodes.size?!1:this._downloadingCount<y.maxDownloadSlots&&!this.dataStreamController.busy}_evaluateUpdating(){let a=!1;var b=0;this.layerView&&(this.layerView.contentVisible?(b=(null!=this._index?this._index.indexMissing:0)+3*
(null!=this._index?this._index.updates.add.length:0)+2*this._loadingNodes.size,a=!!(0<b||0<this._updatingNodes.size||this._restartNodeLoading||this._cameraDirty||this._idleQueue.running||this._lodHandling&&this._lodHandling.requiresLODGlobalHandling||null!=this._index&&this._index.isPrefetching),0===b&&(this._progressMaxNumNodes=1),this._progressMaxNumNodes=Math.max(b,this._progressMaxNumNodes),b=1-b/this._progressMaxNumNodes):b=(a=this._cameraDirty)?0:1,this.updating=a,this.updatingProgress=b)}_updateViewData(){if(this._cameraDirty&&
null!=this._index&&null!=this._viewportQueries){var a=this.layerView.view,{contentCamera:b,fixedContentCamera:c}=a.state;this.screenSizeFactor=1/(b.perScreenPixelRatio/2);this._viewportQueries.updateCamera(b,!c||this.isGraphics3D);this._viewportQueries.setPointOfInterest(a.pointsOfInterest.focus.renderLocation);this._viewportQueries.updateScreenSpaceErrorBias(this._lod);this._index.invalidateVisibilityCache();this._index.progressiveLoadPenalty=I.distancePenalty*this._viewportQueries.distCameraToPOI();
this._index.requestUpdate();this._stableFeatureLOD=!1;this._invisibleDirty=!0;this._cameraDirty=!1;this.notifyChange("rootNodeVisible")}}_getProgressiveLoadFactor(){return 1>this.layerView.view.quality?1:this.layerView.progressiveLoadFactor}get _lod(){return this._featureLOD*this._baseLOD}get _baseLOD(){const a=this.layerView.lodFactor;return this.fixedFeatureTarget?1:(0<a?a:1)*this.layerView.view.quality}get _lodDropFactor(){return this.fixedFeatureTarget?1:(Math.min(this.layerView.view.quality,
.5)-H.minQuality)/(.5-H.minQuality)}isGeometryVisible(a){return!!this._index?.isGeometryVisible(a.index)}updateVisibility(a){this._index?.invalidateNodeVisibilityCache(a)}invalidateGeometryVisibility(a){this._index?.invalidateGeometryVisibility(a)}invalidateVisibilityObbs(){this._index?.invalidateVisibilityObbs()}modificationsChanged(){this._index?.imModificationsChanged(!!this.layerView.hasModifications);this._invisibleDirty=!0}_shouldLoadNode(a){return this._lodHandling.shouldLoadNode(a)&&!this._shouldDropNode(a)&&
null!=this._index&&this._index.isGeometryVisible(a.index)?!0:!1}_shouldDropNode(a){if(null==this._viewportQueries)return!1;const b=this._lodDropFactor;return 1<=b||!this._lodHandling.hasNoVisibleChildren(a)?!1:Math.abs(this._viewportQueries.calcCameraDistanceToCenter(a))-this._viewportQueries.minDistance>(this._viewportQueries.maxDistance-this._viewportQueries.minDistance)*b}_startNodeLoading(){this._restartNodeLoading=!1;const a=this._index;if(!this._updatesDisabled&&null!=a&&null!=this._viewportQueries){this._updateViewData();
this._requiredAttributesDirty&&(this._requiredAttributes=this._getRequiredAttributes(),this._requiredAttributesDirty=!1);var b={textureEncodings:this.layerView.supportedTextureEncodings,uncompressedTextureDownsamplingEnabled:this.layerView.uncompressedTextureDownsamplingEnabled,textureUsageMask:this.layerView.rendererTextureUsage,loadFeatureData:this.useMaximumNumberOfFeatures};this._nodeLoader=new T(this.layer,this.dataStreamController,q.getLogger(this),this._defaultGeometrySchema,this._requiredAttributes,
b);a.requestUpdate();this._lodHandling.startNodeLoading((c,d)=>this._removeNodes(c,d,t.fadeout),a,{maxLodLevel:this._viewportQueries.maxLodLevel});this._evaluateUpdating()}}isNodeLoading(){return null!=this._nodeLoader&&null!=this._index}cancelNodeLoading(){this.isNodeLoading()&&(this.indexStreamController.cancelAll(),this.dataStreamController.cancelAll(),this._idleQueue.cancelAll(),this._cancelAllNodes(),this._nodeLoader=null,this._evaluateUpdating())}_removeInvisibleNodes(a){const b=this._index;
if(null==b||null==this._viewportQueries)return!1;n.clear();this.layerView.getLoadedNodeIndices(n);const c=0===this._viewportQueries.maxDistance,d=c?()=>!1:f=>this._shouldDropNode(f);n.filterInPlace(f=>{const r=b.getNode(f);return null==r||!b.isGeometryVisible(f)||d(r)});0<n.length&&this._lodHandling.setLodGlobalDirty();this._removeNodes(n,a,t.pop);if(c&&1>this._lodDropFactor)return!1;if(0===n.length)return!0;n.clear();return!1}markNodeToRemove(a){n.push(a)}removeMarkedNodes(){this._removeNodes(n,
X.noBudget,t.pop)}_removeNodes(a,b,c){if(0!==a.length&&!b.done)for(null!=this._index&&this._index.requestUpdate();0<a.length&&!b.done;){const d=a.pop(),f=this._index;c===t.fadeout&&this.layerView.nodeFadeoutEnabled&&null!=f&&f.isGeometryVisible(d)?this.layerView.fadeNode(d,V.FadeDirection.FadeOut,!0):this.layerView.removeNode(d);b.madeProgress()}}_needsUpdate(a){if(a.resources.isEmpty||this._updatingNodes.has(a.index))return!1;a=this.layerView.getLoadedAttributes(a.index);return null!=a&&a!==this._requiredAttributes}async _updateLoadedNode(a){const b=
new AbortController;this._updatingNodes.set(a.index,b);this._evaluateUpdating();try{const c=this.layerView.getLoadedAttributes(a.index);let d=null;d=z(c,this._requiredAttributes)?this.layerView.getAttributeData(a.index):await this._loadAttributes(a,this._requiredAttributes,b.signal);await this.schedule(()=>this.layerView.updateAttributes(a.index,{loadedAttributes:this._requiredAttributes,attributeData:d},b.signal),b.signal)}catch(c){if(!v.isAbortError(c))return this.layerView.updateAttributes(a.index,
{loadedAttributes:this._requiredAttributes,attributeData:{}},b.signal)}this._updatingNodes.delete(a.index);this._evaluateUpdating()}_loadNode(a){if(this._loadingNodes.has(a.index))q.getLogger(this).error("already loading node "+a.index);else{var b=new AbortController;this._loadingNodes.set(a.index,b);this._evaluateUpdating();this._loadAndAddNode(a,b.signal).then(c=>{c&&null!=this._index&&this._loadingNodes.get(a.index)===b&&(this._loadingNodes.delete(a.index),this._index.requestUpdate())}).catch(c=>
{if(!v.isAbortError(c))throw c;}).finally(()=>{this._loadingNodes.get(a.index)===b&&this._loadingNodes.delete(a.index);this._evaluateUpdating()})}}_loadAndAddNode(a,b){return a.cacheState===p.CacheState.Uncached?this._loadUncached(a,b).then(()=>!1):this._loadCached(a,b).then(c=>{if(c)return!1;a.cacheState=p.CacheState.Uncached;return!0}).catch(c=>v.isAbortError(c)?!1:(a.cacheState=p.CacheState.Uncached,!0))}_enableFromGPUCache(a,b){if(this._disableMemCache||null==this._index)return!1;if(b===p.NodeState.Hole&&
!this._index.useNodeAsHole(a.index))return!0;const c=this._loadCachedGPUData(a);if(!c)return!1;this.layerView.addCachedGPUData(a,c,b);this._nodeAdded();return!0}_loadCachedGPUData(a){a=this.layerView.loadCachedGPUData(a.index);if(null!=a?.attributeInfo&&z(a.attributeInfo.loadedAttributes,this._requiredAttributes))return a;this.layerView.deleteCachedGPUData(a);return null}_nodeAdded(){null!=this._index&&this._index.requestUpdate();this._lodHandling.setLodGlobalDirty();this._evaluateUpdating()}updateLoadStatus(a,
b){const c=this._index;null!=c&&c.updateChildrenLoaded(a,b?1:-1)}async _loadCached(a,b){if(this._enableFromGPUCache(a,p.NodeState.Leaf))return!0;const c=this.layerView;if(this.disableIDBCache||!c.loadCachedNodeData||!c.addCachedNodeData)return!1;const d=(C,D)=>this._nodeLoader.loadTextures(a,C,D),f=(C,D)=>this._clientNodeLoader.loadTextures(a,C,D),r=0<=a.index?d:f,e=await this.schedule(()=>c.loadCachedNodeData(a,b,r),b);if(null==e)return!1;const m=this._requiredAttributes,w=await this.reschedule(()=>
this._loadAttributes(a,m,b),b);await this.reschedule(()=>c.addCachedNodeData(a,e,{loadedAttributes:m,attributeData:w},b),b);this._nodeAdded();return!0}_loadUncached(a,b){this._downloadingCount++;return this._loadNodeData(a,b).catch(c=>{this._downloadingCount--;throw c;}).then(c=>{this._downloadingCount--;return this.schedule(()=>this.layerView.addNode(a,c,b),b)}).then(()=>{this._nodeAdded();a.cacheState=p.CacheState.Cached}).catch(c=>{if(!v.isAbortError(c))throw q.getLogger(this).error("#loadNodeData()",
this.layer,`Failed to load node '${a.id}'`,c),a.failed=!0,null!=this._index&&this._index.requestUpdate(),c;})}_updateIdleState(a){a!==this._isIdle&&(this._isIdle=a,this._evaluateUpdating(),a&&this._index&&null!=this._index&&this._index.resetFailedNodes())}get test(){}notifyLODUpdate(){this._lodHandling.setLodGlobalDirty();this._evaluateUpdating();null!=this._index&&this._index.requestUpdate()}geometryFilterChanged(a){const b=this._index;null!=b&&b.layerFilterChanged(a);this._setCameraDirty()}};h.__decorate([k.property({readOnly:!0})],
g.prototype,"isMeshPyramid",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"isGraphics3D",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"useMaximumNumberOfFeatures",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"indexStreamController",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"dataStreamController",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"crsVertex",null);h.__decorate([k.property({readOnly:!0})],g.prototype,"crsIndex",null);
h.__decorate([k.property()],g.prototype,"screenSizeFactor",void 0);h.__decorate([k.property()],g.prototype,"featureTarget",void 0);h.__decorate([k.property()],g.prototype,"fixedFeatureTarget",void 0);h.__decorate([k.property()],g.prototype,"layerView",void 0);h.__decorate([k.property()],g.prototype,"layer",null);h.__decorate([k.property()],g.prototype,"updating",void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"running",null);h.__decorate([k.property()],g.prototype,"updatingProgress",
void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"leavesReached",void 0);h.__decorate([k.property({constructOnly:!0})],g.prototype,"worker",void 0);h.__decorate([k.property({readOnly:!0,dependsOn:[]})],g.prototype,"rootNodeVisible",null);g=h.__decorate([M.subclass("esri.layers.graphics.controllers.I3SOnDemandController")],g);const n=new u({deallocator:null});let B;const I={factorIM:.2,factor3dObject:.05,distancePenalty:10},J=E.create();var t;(function(a){a[a.pop=0]="pop";a[a.fadeout=1]=
"fadeout"})(t||={});return g});