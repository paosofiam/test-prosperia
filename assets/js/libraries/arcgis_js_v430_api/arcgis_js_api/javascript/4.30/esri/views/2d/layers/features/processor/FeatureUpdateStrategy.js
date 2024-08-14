// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./AProcessorStrategy","../sources/FeatureSourceMessage","../sources/strategies/chunks/OverrideChunk"],function(h,m,k,q){class n extends m.ASendState{}class r extends m.AProcessorStrategy{constructor(a,c,b){super(a,c);this._timeZone=b;this.handledChunks=new Set;this.handledChunksForIdCreation=new Set;this.handledChunksForAttributeData=new Set;this._streamLayerDeferredObjectIdsToRemove=[]}destroy(){super.destroy();for(const a of this._source.chunks())this._cleanupChunkIds(a)}invalidateAttributeData(){this.handledChunksForAttributeData.clear()}onSubscribe(a){super.onSubscribe(a);
this._evalOptions=a.tile.createArcadeEvaluationOptions(this._timeZone)}createState(a){return new n(a)}get aggregateQueryEngine(){return null}displayMap(a,c,b){a=new Map(a.map(f=>[c(f),f]));const e=[];for(const f of this._source.chunks()){const g=f.reader.getCursor();for(;g.next();){const l=g.getObjectId();var d=g.getDisplayId();const p=a.get(l);null!=p&&(d=b(d,p,l),e.push(d),a.delete(l))}}return e}getDisplayFeatures(a){a=new Set(a);const c=new Set,b=[];for(const e of this._source.chunks()){const d=
e.reader.getCursor();for(;d.next();){const f=d.getObjectId(),g=d.getDisplayId();a.has(g)&&!c.has(f)&&(b.push({...d.readLegacyFeatureWorldSpace(),displayId:g}),c.add(f))}}return{features:b,aggregates:[]}}async *applyLocalEdit(a){for(var c=[],b=a.reader.getCursor();b.next();){var e=b.getObjectId();c.push(e);e=this._attributeStore.createDisplayIdForObjectId(e);b.setDisplayId(e);this._attributeStore.setAttributeData(e,b,this._evalOptions)}e=this.getDisplayIds(c);c=this.getDisplayIds(a.removed);b=new q.OverrideChunk(this._source.metadata,
"localEdit");b.applyOverrides(a);this.handledChunks.add(b.chunkId);this.handledChunksForAttributeData.add(b.chunkId);this.handledChunksForIdCreation.add(b.chunkId);for(var d of this._sendStates.values())d.handledChunks.add(b.chunkId),yield new k.FeatureTileUpdateMessage(d.subscription,null,e,!1,b.queryInfo);for(const f of this._sendStates.values())d=b.getTileReader(f.subscription.tile),yield new k.FeatureTileUpdateMessage(f.subscription,d,c,!1,b.queryInfo);for(const f of a.removed)this._attributeStore.releaseDisplayIdForObjectId(f)}async *updateChunks(){if(this._source.chunks().length){await this._updateAttributeData();
for(const a of this._sendStates.values())yield*this._update(a)}}removeChunks(a){for(const c of a)this.handledChunks.delete(c.chunkId),this.handledChunksForAttributeData.delete(c.chunkId),this._cleanupChunkIds(c)}afterUpdateChunks(){for(const a of this._streamLayerDeferredObjectIdsToRemove)this._attributeStore.releaseDisplayIdForObjectId(a);this._streamLayerDeferredObjectIdsToRemove=[]}_cleanupChunkIds(a){if(this.handledChunksForIdCreation.has(a.chunkId)){const c=a.reader.getCursor();for(;c.next();){const b=
c.getObjectId();this._source.isStream?this._streamLayerDeferredObjectIdsToRemove.push(b):this._attributeStore.releaseDisplayIdForObjectId(b)}this.handledChunksForIdCreation.delete(a.chunkId)}}async _updateAttributeData(){for(var a of this._source.chunks()){const {chunkId:b,reader:e}=a;if(!this.handledChunksForIdCreation.has(b)){this.handledChunksForIdCreation.add(b);for(var c=e.getCursor();c.next();){const d=this._attributeStore.createDisplayIdForObjectId(c.getObjectId());c.setDisplayId(d)}}}for(const b of this._source.chunks())if(!this.handledChunksForAttributeData.has(b.chunkId))for(this.handledChunksForAttributeData.add(b.chunkId),
a=b.reader.getCursor();a.next();)c=a.getDisplayId(),this._attributeStore.setAttributeData(c,a,this._evalOptions)}*_update(a){const {subscription:c,handledChunks:b}=a;for(const d of this._source.chunks()){var {chunkId:e}=d;b.has(e)||(b.add(e),(e=d.getTileReader(c.tile))&&(yield new k.FeatureTileAppendMessage(a.subscription,e,!1,d.end,d.queryInfo)))}}}h.DefaultSendState=n;h.FeatureUpdateStrategy=r;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});