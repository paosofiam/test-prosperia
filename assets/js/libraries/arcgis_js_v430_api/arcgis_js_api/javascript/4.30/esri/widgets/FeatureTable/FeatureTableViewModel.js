// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../intl ../../core/Collection ../../core/collectionUtils ../../core/deprecate ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../layers/support/fieldUtils ../../time/timeZoneUtils ../../views/support/layerViewUtils ../../views/support/selectionUtils ./ActionColumn ./AttachmentsColumn ./FieldColumn ./RelationshipColumn ./Grid/Column ./Grid/Grid ./Grid/GridViewModel ./Grid/GroupColumn ./support/FeatureStore ./support/TableTemplate ./support/tableUtils ../support/widgetUtils ../support/decorators/messageBundle ../../intl/locale ../../intl/date ../../intl/messages".split(" "),
function(f,e,x,R,S,da,E,T,k,g,wa,xa,ea,fa,U,ha,ia,ja,ka,V,W,la,ma,na,oa,X,pa,v,ya,Y,qa,ra,F){e=class extends na{constructor(a){super(a);this._debounceRefresh=T.debounce(()=>this._refresh());this._highlights=new da;this.actionColumnConfig=null;this.attachmentsEnabled=!1;this.autoRefreshEnabled=!0;this.columns=new x;this.dataProvider=async(b,c)=>{const {layer:d,store:h}=this;if(c)if(d&&h){await d.load();var l=this._sortOrdersToLayerOrderByFields(d,b.sortOrders);h.set({orderByFields:l});({objectIds:l}=
this);this.filterBySelectionEnabled&&!this.highlightIds.length||1===l.length&&-1===l.items[0]?c([]):("loaded"!==h.state&&"loading"!==h.state&&await h.load(),b=await h.fetchItems(b),c&&c(b))}else c&&c([])};this.editingEnabled=!1;this.grid=null;this.highlightEnabled=!0;this.itemIdPath="objectId";this.relationshipColumnConfigs=this.messagesURIUtils=this.messagesCommon=this.messages=this.layer=null;this.returnZEnabled=this.returnMEnabled=this.returnGeometryEnabled=!1;this.selectionSource="table";this.view=
this.timeZone=this.tableTemplateOverride=this.tableTemplate=this.store=this.showRelatedTableCallback=null;this._onLayerRefresh=this._onLayerRefresh.bind(this);this._set("store",new X);this._set("grid",new ma({itemIdPath:this.itemIdPath,viewModel:this}))}initialize(){const a=async()=>{this.messages=await F.fetchMessageBundle("esri/widgets/FeatureTable/t9n/FeatureTable");this.messagesCommon=await F.fetchMessageBundle("esri/t9n/common");this.messagesURIUtils=await F.fetchMessageBundle("esri/widgets/support/t9n/uriUtils")};
a();this.addHandles([qa.onLocaleChange(()=>{a();this._generateColumns()}),k.watch(()=>[this.messages,this.messagesCommon,this.messagesURIUtils],()=>{const b=this.messages;this.grid&&(this.grid.messages=b);this.columns.forEach(c=>{c.messages=b;c.messagesCommon=this.messagesCommon;c.messagesURIUtils=this.messagesURIUtils});this._requestContentUpdate()},k.initial),k.on(()=>this.highlightIds,"change",b=>this._onHighlightIdsChange(b),{onListenerAdd:()=>this._syncSelection(),onListenerRemove:()=>this._highlights.removeAll()}),
k.watch(()=>this.attachmentsEnabled,b=>{const {attachmentsColumn:c,columns:d}=this;this.store.attachmentsEnabled=b;c&&d.remove(c);b&&d.length&&d.add(this._generateAttachmentsColumn(),this._getIndexOfFirstFrozenToEndColumn())}),k.watch(()=>this._viewSelection,()=>{this._viewSelectionReady&&(this.highlightIds.items=this._viewSelection)}),k.watch(()=>[this._tableHighlightsReady,this._viewSelectionReady],()=>this._syncSelection()),k.watch(()=>[this.returnGeometryEnabled,this.returnMEnabled,this.returnZEnabled],
()=>{const {store:b}=this;b.set({returnGeometry:this.returnGeometryEnabled,returnM:this.returnMEnabled,returnZ:this.returnZEnabled})}),k.watch(()=>this.layer,async(b,c)=>{const d=this.grid;d&&(d.clearSort(),b&&c&&await this.reset());this._drainColumns();(this.store.layer=b)&&(b.loaded?this._onLayerLoad():b.load().catch(()=>{}))}),k.watch(()=>this.layer?.loaded,b=>b&&this._onLayerLoad()),k.watch(()=>this.store.state,b=>{"loaded"===b&&(this.grid?.scrollToTop(),this.refreshCellContent())}),k.watch(()=>
this._effectiveTableTemplate,()=>{this.grid?.scrollLeft(0);this.layer?.loaded&&this._generateColumns()}),k.watch(()=>[this.timeZone,this.view?.timeZone],()=>{this.columns.forEach(b=>{if("field"in b&&b.field){const {timeZone:c,timeZoneName:d}=this._getTimeZoneInfoForFieldColumn(b.field);b.set({timeZone:c,timeZoneName:d})}});this._requestContentUpdate()}),k.watch(()=>this.editingEnabled,b=>{this.editorColumns.forEach(c=>c.tableEditingEnabled=b);this._requestContentUpdate()}),k.watch(()=>this.layer?.definitionExpression,
(b,c)=>(b||c)&&"loaded"===this.store.state&&this.reset()),k.watch(()=>this.layer?.timeExtent,(b,c)=>(b||c)&&!this.timeExtent&&"loaded"===this.store.state&&this.reset()),k.on(()=>this.layer,"refresh",b=>this._onLayerRefresh(b)),k.on(()=>this.grid,["cell-click","cell-pointerover","cell-pointerout","cell-keydown"],({index:b,item:c,native:d,path:h,type:l})=>{c=c?.feature;this.emit(l,{feature:c,index:b,native:d,type:l,fieldName:h??void 0,objectId:c?.getObjectId()})}),k.watch(()=>this.actionColumnConfig,
b=>{const {actionColumn:c,columns:d}=this;c?b?c.set(b):d.remove(c):b&&d.length&&d.add(this._generateActionColumn(),!1!==b.frozenToEnd?void 0:this._getIndexOfFirstFrozenToEndColumn())}),k.watch(()=>[this.relationshipColumnConfigs?.length,this.relatedRecordsEnabled],([,b])=>{const {columns:c,relationshipColumns:d}=this;d.length&&c.removeMany(d);c.length&&b&&c.addMany(this._generateRelationshipColumns(),this._getIndexOfFirstFrozenToEndColumn())}),k.on(()=>this.objectIds,"change",()=>this._onObjectIdsChange(),
{onListenerAdd:()=>this._onObjectIdsChange()})])}destroy(){this._drainColumns();this._highlights.removeAll();this._highlights.destroy();this.grid?.destroy();this.columns.destroyed||this.columns.destroy();this.view=this.layer=null}get _defaultHiddenFields(){return fa.getLowerCaseDefaultHiddenFields(this.layer)}get _effectiveTableTemplate(){return this.tableTemplateOverride||this.tableTemplate}get _highlightableLayerView(){const a=this.layerView;return ha.highlightsSupported(a)?a:null}get _layerWithRelationships(){const a=
this.layer;if(!v.isIFeatureTableSupportedLayerWithRelationships(a))return null;const b=a.effectiveCapabilities??a.capabilities;return b?.queryRelated?.supportsCount&&b.queryRelated.supportsPagination?a:null}get _relationshipInfos(){const {_layerWithRelationships:a,relatedRecordsEnabled:b,relationships:c,view:d}=this,h=[];if(!(b&&a?.loaded&&d?.map&&c?.length))return h;c.forEach(l=>{const m=v.findRelatedLayer(a,d,l);m&&(m.load(),h.push({layer:a,relatedLayer:m,relationshipId:l.id}))});return h}get _selectionManager(){const {view:a}=
this;return!a||a.destroyed?null:a.selectionManager?.sources?.length?a.selectionManager:null}get _selectableLayer(){const {layer:a}=this;return ia.isSelectableLayer(a)&&this._selectionManager?.sources.includes(a)?a:null}get _tableHighlightsReady(){return!("table"!==this.selectionSource||!this.highlightEnabled||!this._highlightableLayerView)}get _viewSelection(){const {_selectableLayer:a}=this;return a?this._selectionManager?.getSelection(a)??[]:[]}get _viewSelectionReady(){return!(!this.layer||"view"!==
this.selectionSource||!this._selectionManager)}get activeFilters(){const {filterGeometry:a,objectIds:b,filterBySelectionEnabled:c,highlightIds:d}=this,h=new x;a&&h.push({type:"geometry",geometry:a});c?h.push({type:"selection",objectIds:d.toArray()}):b.length&&h.push({type:"objectId",objectIds:b.toArray()});return h}get activeSortOrders(){return this.grid?.sortOrders?this.grid.sortOrders.map(({path:a,direction:b})=>({fieldName:a,direction:b})).filter(a=>a.fieldName&&a.direction):[]}get filterGeometry(){return this._get("filterGeometry")}set filterGeometry(a){this.store.filterGeometry=
a;this._set("filterGeometry",a)}get filterBySelectionEnabled(){return!!this._get("filterBySelectionEnabled")}set filterBySelectionEnabled(a){const {objectIds:b}=this,c=b.length;a?(c&&(b.removeAll(),this._logWarning("Selection filter has been applied with an objectID filter. Object ID filter has been removed.")),this.filterGeometry&&this._logWarning("Selection filter has been applied with a geometry filter. Results may appear inconsistent"),this._syncObjectIdsWithStore(this.highlightIds.toArray())):
c||this._syncObjectIdsWithStore(null);this._set("filterBySelectionEnabled",a)}get hiddenFields(){return this._get("hiddenFields")??new x}set hiddenFields(a){this._set("hiddenFields",R.referenceSetter(a,this._get("hiddenFields"),x))}get isQueryingOrSyncing(){const {store:a}=this;return a?.syncing||a?.querying}get layerView(){const {layer:a,view:b}=this;if(!a||!b)return null;const c="sublayer"===a.type?a.parent:a;return b.allLayerViews.find(d=>d.layer===c)}get objectIds(){return this._get("objectIds")??
new x}set objectIds(a){this._set("objectIds",R.referenceSetter(a,this._get("objectIds"),x))}get relatedRecordsEnabled(){return!!this._get("relatedRecordsEnabled")}set relatedRecordsEnabled(a){this.store.relatedRecordsEnabled=a;this._set("relatedRecordsEnabled",a)}get relationship(){const a=this.relationshipConfig?.relationshipId;return null==a?null:this.relationships?.find(({id:b})=>b===a)}get relationshipConfig(){return this._get("relationshipConfig")}set relationshipConfig(a){this.objectIds.removeAll();
this.filterBySelectionEnabled=!1;this.store.relationshipConfig=a;this._set("relationshipConfig",a)}get relationships(){const {layer:a}=this;return v.isIFeatureTableSupportedLayerWithRelationships(a)?a.relationships:null}set timeExtent(a){this._set("timeExtent",a);this.store.timeExtent=a}async deleteSelection(){var a=this.highlightIds.toArray();a?.length&&({deleteFeatureResults:a}=await this.store.deleteRowsByObjectId(a),a=a.filter(b=>!b.error).map(b=>b.objectId),a.length&&(this.highlightIds.removeMany(a),
await this.refresh()))}filterBySelection(){this.filterBySelectionEnabled?this._logWarning("Property 'filterBySelectionEnabled' is already 'true'. This method has no effect."):(S.deprecatedFunction(E.getLogger(this),"`FeatureTable.filterBySelection` is deprecated in favor of 'filterBySelectionEnabled' and 'objectIds'",{replacement:"FeatureTable.filterBySelectionEnabled or FeatureTable.objectIds",version:"4.30",warnOnce:!0}),this.objectIds.addMany(this.highlightIds.toArray()))}getObjectIdIndex(a){return this.store?.getItemIndexByObjectId(a)}getValue(a,
b){return this.store.getItemByObjectId(a)?.feature?.attributes[b]}async refresh(){return T.ignoreAbortErrors(this._debounceRefresh())}refreshCellContent(){this._requestContentUpdate()}async reset(){await this.grid?.reset()}scrollToIndex(a){this.grid?.scrollToIndex(a)}clearSelectionFilter(){S.deprecatedFunction(E.getLogger(this),"`FeatureTable.clearSelectionFilter` is deprecated in favor of 'filterBySelectionEnabled' and 'objectIds'",{replacement:"FeatureTable.filterBySelectionEnabled or FeatureTable.objectIds",
version:"4.30",warnOnce:!0});this.objectIds.removeAll()}async zoomToSelection(){const {layer:a,view:b}=this;var c=this.highlightIds.toArray();if(a&&b&&c.length){var d=a.createQuery();d.objectIds=c;d.returnGeometry=!0;c=await a.queryFeatures(d);try{await b.goTo(c.features)}catch(h){"AbortError"!==h.name&&console.error(h)}}}_requestContentUpdate(){this.grid?.requestContentUpdate()}async _refresh(){await this.store.refreshLayerInfo();const a=this.highlightIds.toArray();a.length&&(await this.store.verifyFeaturesByObjectId(a)).forEach((b,
c)=>{b||this.highlightIds.remove(a[c])});this.grid?.refreshPageCache()}_onLayerLoad(){var {layer:a}=this;a&&((a=a.capabilities.query?.maxRecordCount)&&a<this.pageSize&&this.grid&&(this.grid.pageSize=a),this.store.load(),this._generateColumns())}_onLayerRefresh(a){this.autoRefreshEnabled&&a.dataChanged&&this.refresh()}_generateColumns(){this._drainColumns();var a=this._effectiveTableTemplate?.columnTemplates;a=a?this._generateColumnsFromTemplates(a):this._generateDefaultFieldColumns();a.length&&this.attachmentsEnabled&&
a.push(this._generateAttachmentsColumn());a.length&&this.relatedRecordsEnabled&&this._relationshipInfos.length&&a.push(...this._generateRelationshipColumns());this.actionColumnConfig&&a.push(this._generateActionColumn());a.sort((b,c)=>b.frozen&&c.frozen||b.frozenToEnd&&c.frozenToEnd?0:b.frozen||c.frozenToEnd?-1:0);this.columns.addMany(a)}_generateColumnsFromTemplates(a){const {editingEnabled:b,_effectiveTableTemplate:c,grid:d,layer:h,messages:l,messagesCommon:m,messagesURIUtils:p,store:r,timeZone:u}=
this,t=h?.fields??[],n=[],w=q=>t.find(y=>q.fieldName.toLowerCase()===y.name?.toLowerCase());a.forEach(q=>{const {autoWidth:y,direction:Z,flexGrow:G,fieldName:H,formatFunction:aa,frozen:B,frozenToEnd:C,icon:I,initialSortPriority:ba,invalid:J,label:K,menuConfig:L,resizable:M,sortable:ca,textAlign:N,textWrap:O,type:D,width:P}=q;if(D)if(B&&C)this._logWarning("Both 'frozen' and 'frozenToEnd' cannot be true for a single template. Skipped generating a column for this template.");else{var z=!1===q.visible;
if("group"===D){if(!q.columnTemplates?.length){this._logWarning("Group columns must contain column templates. Skipped generating a column for this template.");return}if(!q.label){this._logWarning("Group columns require a label. Skipped generating a column for this template.");return}var Q=this._generateColumnsFromTemplates(q.columnTemplates),A=z||this._isFieldHidden(q.label);n.push(new oa({autoWidth:y,columns:Q,flexGrow:G,frozen:B,frozenToEnd:C,grid:d,hidden:A,icon:I,invalid:J,label:K,menuConfig:L,
messages:l,messagesCommon:m,messagesURIUtils:p,resizable:M,textAlign:N,textWrap:O,width:P}))}if(H){if(z=z||this._isFieldHidden(H),"column"===D&&n.push(new la({autoWidth:y,direction:Z,fieldName:H,flexGrow:G,formatFunction:aa,frozen:B,frozenToEnd:C,grid:d,hidden:z,icon:I,initialSortPriority:ba,invalid:J,label:K,menuConfig:L,messages:l,messagesCommon:m,messagesURIUtils:p,resizable:M,sortable:ca,textAlign:N,textWrap:O,timeZone:u,width:P})),"field"===D)if(A=w(q)){var {editable:sa,required:ta}=q;Q=c?.expressionInfos||
null;var {timeZone:ua,timeZoneName:va}=this._getTimeZoneInfoForFieldColumn(A);n.push(new V({autoWidth:y,direction:Z,editable:sa,expressionInfos:Q,field:A,fieldName:A.name,flexGrow:G,formatFunction:aa,frozen:B,frozenToEnd:C,grid:d,hidden:z,icon:I,initialSortPriority:ba,invalid:J,label:K,layer:h,messages:l,messagesCommon:m,messagesURIUtils:p,menuConfig:L,sortable:ca,store:r,required:ta,resizable:M,tableEditingEnabled:b,template:q,textAlign:N,textWrap:O,timeZone:ua,timeZoneName:va,width:P}))}else this._logWarning("A valid 'field' could not be found for the provided template. Skipped generating a column for this template.")}else this._logWarning("'fieldName' was missing from the provided template. Skipped generating a column for this template.")}else this._logWarning("Property 'type' is missing from the provided template. Skipped generating a column for this template.")});
return n}_generateDefaultFieldColumns(){const {editingEnabled:a,grid:b,layer:c,messages:d,messagesCommon:h,messagesURIUtils:l,store:m}=this,p=[];if(!c?.fields.length)return p;c.fields.forEach(r=>{if("geometry"!==r.type){var {timeZone:u,timeZoneName:t}=this._getTimeZoneInfoForFieldColumn(r),n=r.name;p.push(new V({field:r,fieldName:n,grid:b,hidden:this._isFieldHidden(n),layer:c,messages:d,messagesCommon:h,messagesURIUtils:l,store:m,tableEditingEnabled:a,timeZone:u,timeZoneName:t}))}});return p}_getTimeZoneInfoForFieldColumn(a){const {layer:b,
timeZone:c,view:d}=this;return!b||"date"!==a?.type&&"timestamp-offset"!==a?.type?{timeZone:void 0,timeZoneName:void 0}:U.getTimeZoneFormattingOptions(b.preferredTimeZone||null,!!b.datesInUnknownTimezone,c??d?.timeZone??U.system,ra.convertDateFormatToIntlOptions("short-time"),a.type)}_generateAttachmentsColumn(){return new ka({hidden:this._isFieldHidden(v.uniqueColumnNames.attachments),messages:this.messages})}_generateRelationshipColumns(){const {_layerWithRelationships:a,_relationshipInfos:b,grid:c,
messages:d,messagesCommon:h,messagesURIUtils:l,relationshipColumnConfigs:m}=this,p=[];if(!a)return p;const r={grid:c,messages:d,messagesCommon:h,messagesURIUtils:l};m?m.forEach(u=>{const {relationshipId:t}=u,n=b.find(w=>w.relationshipId===t);n&&p.push(new W({...u,...r,fieldName:`${v.uniqueColumnNames.relationship}-${t}`,layer:n.relatedLayer,relatedLayer:n.layer,relationshipId:t,showRelatedTableCallback:w=>this._onShowRelatedTable(w)}))}):b.forEach(({layer:u,relatedLayer:t,relationshipId:n})=>{p.push(new W({...r,
fieldName:`${v.uniqueColumnNames.relationship}-${n}`,layer:t,relatedLayer:u,relationshipId:n,showRelatedTableCallback:w=>this._onShowRelatedTable(w)}))});return p}_generateActionColumn(){return new ja({hidden:this._isFieldHidden(v.uniqueColumnNames.action),...this.actionColumnConfig})}_sortOrdersToLayerOrderByFields(a,b=[]){const c=b.map(d=>d.path);b=b.filter((d,h)=>{h=c.indexOf(d.path)===h;d=null!=d.direction;return h&&d}).map(({path:d,direction:h})=>`${d} ${h?.toUpperCase()}`);!b.length&&!a.objectIdField&&
a.fields?.length&&a.fields[0]?.name&&b.push(`${a.fields[0].name} ASC`);return b}_isFieldHidden(a){const b=a?.toLowerCase();return(this.hiddenFields??this._defaultHiddenFields).some(c=>c.toLowerCase()===b)}_addTableHighlight(a){const {_highlightableLayerView:b,layer:c}=this;if(b&&c){const d=this.store.getItemByObjectId(a);this._highlights.add(b.highlight(d?.feature??a),`${c.id}-${a}`)}}_removeTableHighlight(a){const {layer:b}=this;b&&this._highlights.remove(`${b.id}-${a}`)}_syncSelection(){this._highlights.removeAll();
this._tableHighlightsReady?this.highlightIds.forEach(a=>this._addTableHighlight(a)):this._viewSelectionReady&&(this.highlightIds.items=this._viewSelection)}_appendToViewSelection(a){const {_selectableLayer:b}=this;b&&this._selectionManager?.appendToSelection(b,a)}_removeFromViewSelection(a){const {_selectableLayer:b}=this;b&&this._selectionManager?.removeFromSelection(b,a)}_onHighlightIdsChange(a){const {added:b,removed:c}=a;this._tableHighlightsReady?(c.forEach(d=>this._removeTableHighlight(d)),
b.forEach(d=>this._addTableHighlight(d))):this._viewSelectionReady&&(this._removeFromViewSelection(c),this._appendToViewSelection(b));this.filterBySelectionEnabled&&this._syncObjectIdsWithStore(this.highlightIds.toArray())}_onShowRelatedTable(a){const {highlightIds:b}=this,{feature:c,layer:d,relatedLayer:h,relationshipId:l}=a,m=c.getObjectId()??c.attributes[h.objectIdField];null!=m&&(b.removeAll(),b.add(m),this.showRelatedTableCallback?this.showRelatedTableCallback(a):this.emit("show-related-table",
{layer:d,relatedLayer:h,relationshipId:l,feature:c}))}_onObjectIdsChange(){const a=this.objectIds.toArray();a.length&&this.filterBySelectionEnabled&&(this.filterBySelectionEnabled=!1,this._logWarning("Object ID filter was applied while a selection filter was applied. Selection filter has been removed."));this._syncObjectIdsWithStore(a)}_syncObjectIdsWithStore(a){this.store.objectIds=a;this.grid?.refreshPageCache()}_drainColumns(){this.columns.drain(a=>!a.destroyed&&a.destroy())}_getIndexOfFirstFrozenToEndColumn(){const a=
this.columns.findIndex(b=>b.frozenToEnd);return-1<a?a:void 0}_logWarning(a){E.getLogger(this).warn(a)}};f.__decorate([g.property()],e.prototype,"_defaultHiddenFields",null);f.__decorate([g.property()],e.prototype,"_effectiveTableTemplate",null);f.__decorate([g.property()],e.prototype,"_highlights",void 0);f.__decorate([g.property()],e.prototype,"_highlightableLayerView",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"_layerWithRelationships",null);f.__decorate([g.property()],e.prototype,
"_relationshipInfos",null);f.__decorate([g.property()],e.prototype,"_selectionManager",null);f.__decorate([g.property()],e.prototype,"_selectableLayer",null);f.__decorate([g.property()],e.prototype,"_tableHighlightsReady",null);f.__decorate([g.property()],e.prototype,"_viewSelection",null);f.__decorate([g.property()],e.prototype,"_viewSelectionReady",null);f.__decorate([g.property()],e.prototype,"actionColumnConfig",void 0);f.__decorate([g.property()],e.prototype,"activeFilters",null);f.__decorate([g.property({readOnly:!0})],
e.prototype,"activeSortOrders",null);f.__decorate([g.property()],e.prototype,"attachmentsEnabled",void 0);f.__decorate([g.property()],e.prototype,"autoRefreshEnabled",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"columns",void 0);f.__decorate([g.property()],e.prototype,"dataProvider",void 0);f.__decorate([g.property()],e.prototype,"editingEnabled",void 0);f.__decorate([g.property()],e.prototype,"filterGeometry",null);f.__decorate([g.property()],e.prototype,"filterBySelectionEnabled",
null);f.__decorate([g.property({readOnly:!0})],e.prototype,"grid",void 0);f.__decorate([g.property()],e.prototype,"hiddenFields",null);f.__decorate([g.property()],e.prototype,"highlightEnabled",void 0);f.__decorate([g.property()],e.prototype,"isQueryingOrSyncing",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"itemIdPath",void 0);f.__decorate([g.property()],e.prototype,"layer",void 0);f.__decorate([g.property()],e.prototype,"layerView",null);f.__decorate([g.property()],e.prototype,"messages",
void 0);f.__decorate([g.property(),Y.messageBundle("esri/t9n/common")],e.prototype,"messagesCommon",void 0);f.__decorate([g.property(),Y.messageBundle("esri/widgets/support/t9n/uriUtils")],e.prototype,"messagesURIUtils",void 0);f.__decorate([g.property()],e.prototype,"objectIds",null);f.__decorate([g.property()],e.prototype,"relatedRecordsEnabled",null);f.__decorate([g.property()],e.prototype,"relationship",null);f.__decorate([g.property()],e.prototype,"relationshipColumnConfigs",void 0);f.__decorate([g.property()],
e.prototype,"relationshipConfig",null);f.__decorate([g.property()],e.prototype,"relationships",null);f.__decorate([g.property()],e.prototype,"returnGeometryEnabled",void 0);f.__decorate([g.property()],e.prototype,"returnMEnabled",void 0);f.__decorate([g.property()],e.prototype,"returnZEnabled",void 0);f.__decorate([g.property()],e.prototype,"selectionSource",void 0);f.__decorate([g.property()],e.prototype,"showRelatedTableCallback",void 0);f.__decorate([g.property({readOnly:!0,type:X})],e.prototype,
"store",void 0);f.__decorate([g.property({type:pa})],e.prototype,"tableTemplate",void 0);f.__decorate([g.property()],e.prototype,"tableTemplateOverride",void 0);f.__decorate([g.property()],e.prototype,"timeExtent",null);f.__decorate([g.property()],e.prototype,"timeZone",void 0);f.__decorate([g.property()],e.prototype,"view",void 0);return e=f.__decorate([ea.subclass("esri.widgets.FeatureTable.FeatureTableViewModel")],e)});