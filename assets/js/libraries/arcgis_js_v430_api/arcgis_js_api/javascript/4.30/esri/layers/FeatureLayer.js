// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../PopupTemplate ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/PieChartRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../request ../symbols ../core/Clonable ../core/Collection ../core/Error ../core/lang ../core/Logger ../core/MultiOriginJSONSupport ../core/object ../core/promiseUtils ../core/sql ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/layerContainerType ../form/FormTemplate ../geometry/SpatialReference ./Layer ./graphics/sources/MemorySource ./mixins/APIKeyMixin ./mixins/ArcGISService ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/EditBusLayer ./mixins/FeatureEffectLayer ./mixins/FeatureLayerBase ./mixins/FeatureReductionLayer ./mixins/OperationalLayer ./mixins/OrderedLayer ./mixins/PortalLayer ./mixins/PublishableLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/arcgisLayerUrl ./support/commonProperties ./support/featureLayerUtils ./support/FeatureTemplate ./support/FeatureType ./support/fieldProperties ./support/fieldUtils ./support/LabelClass ./support/labelingInfo ./support/serviceCapabilitiesUtils ./support/TimeInfo ./support/versionUtils ./support/source/DataLayerSource ../renderers/support/styleUtils ../rest/support/FeatureSet ../rest/support/Query ../rest/support/TopFeaturesQuery ../support/popupUtils ../webdoc/interfaces ../webdoc/support/opacityUtils".split(" "),
function(E,e,K,p,Aa,Ba,Ca,Da,Ea,Fa,Ga,L,F,M,N,d,v,m,w,O,P,q,x,Q,y,g,R,k,S,z,G,T,U,V,H,W,X,Y,Z,aa,ba,ca,da,ea,fa,ha,ia,ja,ka,la,A,n,h,I,J,ma,B,na,C,oa,pa,qa,ra,sa,ta,ua,r,va,t,wa){function u(a,b){return new m("layer:unsupported",`Layer (${a.title}, ${a.id}) of type '${a.declaredClass}' ${b}`,{layer:a})}function D(a,b,c){a=!!c?.writeLayerSchema;return{enabled:a,ignoreOrigin:a}}p=ma.defineFieldProperties();d=class extends ca.FeatureLayerBase(da.FeatureReductionLayer(ba.FeatureEffectLayer(ia.PublishableLayer(aa.EditBusLayer(Y.BlendLayer(fa.OrderedLayer(la.TemporalLayer(ka.ScaleRangeLayer(ja.RefreshableLayer(X.ArcGISService(ea.OperationalLayer(ha.PortalLayer(P.MultiOriginJSONMixin(Z.CustomParametersMixin(W.APIKeyMixin(d.ClonableMixin(V))))))))))))))))){constructor(...a){super(...a);
this.geometryType=this.fullExtent=this.formTemplate=this.fieldsIndex=this.fields=this.dynamicDataSource=this.displayField=this.copyright=this.charts=null;this.hasZ=this.hasM=void 0;this.infoFor3D=null;this.isTable=!1;this.labelsVisible=!0;this.labelingInfo=null;this.legendEnabled=!0;this.path=this.outFields=this.objectIdField=null;this.popupEnabled=!0;this.resourceInfo=this.popupTemplate=null;this.screenSizePerspectiveEnabled=!0;this.spatialReference=U.WGS84;this.subtypeCode=null;this.supportedSourceTypes=
new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]);this.title=this.timeInfo=this.templates=null;this.sublayerTitleMode="item-title";this.type="feature";this.types=this.typeIdField=null;this.visible=!0;this._debouncedSaveOperations=x.debounce(async(b,c,f)=>{const {save:l,saveAs:xa}=await new Promise((ya,za)=>E(["./save/featureLayerUtils"],ya,za));switch(b){case t.SaveOperationType.SAVE:return l(this,c);case t.SaveOperationType.SAVE_AS:return xa(this,f,c)}})}destroy(){this.source?.destroy()}normalizeCtorArgs(a,
b){return"string"===typeof a?{url:a,...b}:a}load(a){const b=null!=a?a.signal:null;if(this.portalItem?.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(b).then(f=>this.initLayerProperties(f))),Promise.resolve(this);const c=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},a).catch(x.throwIfAbortError).then(async()=>{if(this.url&&null==this.layerId&&/FeatureServer|MapServer\/*$/i.test(this.url)){const f=await this._fetchFirstValidLayerId(b);
null!=f&&(this.layerId=f)}if(!this.url&&!this._hasMemorySource())throw new m("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(b))}).then(()=>h.ensureLayerCredential(this,"load",a));this.addResolvingPromise(c);return Promise.resolve(this)}readCapabilities(a,b){b=b.layerDefinition||b;return oa.getFeatureLayerCapabilities(b,this.url)}get createQueryVersion(){this.commitProperty("definitionExpression");
this.commitProperty("dynamicDataSource");this.commitProperty("timeExtent");this.commitProperty("timeOffset");this.commitProperty("geometryType");this.commitProperty("gdbVersion");this.commitProperty("historicMoment");this.commitProperty("returnZ");this.commitProperty("capabilities");this.commitProperty("returnM");return(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&!this.capabilities?.operations.supportsEditing?!1:this._isOverridden("editingEnabled")?this._get("editingEnabled"):
this._hasMemorySource()||this.userHasEditingPrivileges}set editingEnabled(a){this._overrideIfSome("editingEnabled",a)}readEditingEnabled(a,b){return this._readEditingEnabled(b,!1)}readEditingEnabledFromWebMap(a,b,c){return this._readEditingEnabled(b,!0,c)}writeEditingEnabled(a,b){this._writeEditingEnabled(a,b,!1)}writeEditingEnabledToWebMap(a,b,c,f){this._writeEditingEnabled(a,b,!0,f)}get effectiveEditingEnabled(){return h.computeEffectiveEditingEnabled(this)}readIsTable(a,b){b=b?.layerDefinition??
b;return"Table"===b.type||!b.geometryType}writeIsTable(a,b,c,f){f?.writeLayerSchema&&q.setDeepValue(c,a?"Table":"Feature Layer",b)}readGlobalIdField(a,b){return h.readGlobalIdField(b.layerDefinition||b)}readObjectIdField(a,b){return h.readObjectIdField(b.layerDefinition||b)}get parsedUrl(){const a=y.urlToObject(this.url);null!=a&&(null!=this.dynamicDataSource?a.path=y.join(a.path,"dynamicLayer"):null!=this.layerId&&(a.path=y.join(a.path,this.layerId.toString())));return a}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(a){B.fixRendererFields(a,
this.fieldsIndex);this._set("renderer",a)}readRenderer(a,b,c){b=b.layerDefinition||b;return(a=b.drawingInfo?.renderer)?((a=L.read(a,b,c)??void 0)||O.getLogger(this).error("Failed to create renderer",{rendererDefinition:b.drawingInfo.renderer,layer:this,context:c}),a):h.createDefaultRenderer(b,c)}set source(a){const b=this._get("source");b!==a&&(b&&b instanceof v&&this._resetMemorySource(b),a&&a instanceof v&&this._initMemorySource(a),this._set("source",a))}castSource(a){return a?Array.isArray(a)||
a instanceof v?new H.MemorySource({layer:this,items:a}):a:null}readSource(a,b){a=ta.fromJSON(b.featureSet);return new H.MemorySource({layer:this,items:a?.features??[]})}readTemplates(a,b){b=b.editFieldsInfo;const c=b?.editorField;a=a?.map(f=>I.fromJSON(f));this._fixTemplates(a,b?.creatorField);this._fixTemplates(a,c);return a}readTitle(a,b){a=b.layerDefinition?.name??b.name;b=b.title||b.layerDefinition?.title;if(a){b=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?
A.titleFromUrlAndName(this.url,a):a;if(!a&&this.url){const c=A.parse(this.url);null!=c&&(a=c.title)}if(!a)return;"item-title-and-service-name"===this.sublayerTitleMode&&b&&b!==a&&(a=b+" - "+a);return A.cleanTitle(a)}if("item-title"===this.sublayerTitleMode&&b)return b}readTitleFromWebMap(a,b){return b.title||b.layerDefinition?.name}readTypeIdField(a,b){b=b.layerDefinition||b;let c=b.typeIdField;c&&b.fields&&(c=c.toLowerCase(),a=b.fields.find(f=>f.name.toLowerCase()===c))&&(c=a.name);return c}readTypes(a,
b){b=b.layerDefinition||b;a=b.types;b=b.editFieldsInfo;const c=b?.creatorField,f=b?.editorField;return a?.map(l=>{l=J.fromJSON(l);this._fixTemplates(l.templates,c);this._fixTemplates(l.templates,f);return l})}readVisible(a,b){if(null!=b.layerDefinition?.defaultVisibility)return!!b.layerDefinition.defaultVisibility;if(null!=b.visibility)return!!b.visibility}async addAttachment(a,b){return h.addAttachment(this,a,b,"FeatureLayer")}async updateAttachment(a,b,c){return h.updateAttachment(this,a,b,c,"FeatureLayer")}async applyEdits(a,
b){return h.applyEdits(this,a,b)}async uploadAssets(a,b){return h.uploadAssets(this,a,b)}on(a,b){return super.on(a,b)}createPopupTemplate(a){return va.createPopupTemplate(this,a)}async createGraphicsSource(a){if(this._hasMemorySource()&&this.source)return this.source.load({signal:a});const {default:b}=await x.whenOrAbort(new Promise((c,f)=>E(["./graphics/sources/FeatureLayerSource"],l=>c(Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}))),f)),a);return(new b({layer:this,
supportedSourceTypes:this.supportedSourceTypes})).load({signal:a})}createQuery(){const a=h.createQuery(this);a.dynamicDataSource=this.dynamicDataSource;const b=Q.sqlAnd(this.definitionExpression,null!=this.subtypeCode?`${this.subtypeField} = ${this.subtypeCode}`:null);a.where=b||"1\x3d1";return a}async deleteAttachments(a,b){return h.deleteAttachments(this,a,b,"FeatureLayer")}async fetchRecomputedExtents(a){return h.fetchRecomputedExtents(this,a,"FeatureLayer")}getFeatureType(a){return h.getFeatureType(this.types,
this.typeIdField,a)}getFieldDomain(a,b){b=b?.feature;const c=h.getFeatureSubtype(this,b);return c?(b=c.domains?.[a],"inherited"===b?.type?this._getLayerDomain(a):b):(b=this.getFeatureType(b))&&(b=b.domains&&b.domains[a])&&"inherited"!==b.type?b:this._getLayerDomain(a)}getField(a){return this.fieldsIndex.get(a)}async queryAttachments(a,b){return h.queryAttachments(this,a,b,"FeatureLayer")}async queryFeatures(a,b){const c=await this.load();a=await c.source.queryFeatures(ua.from(a)??c.createQuery(),
b);if(a?.features)for(const f of a.features)f.layer=f.sourceLayer=c;return a}async queryObjectIds(a,b){return h.queryObjectIds(this,a,b,"FeatureLayer")}async queryFeatureCount(a,b){return h.queryFeatureCount(this,a,b,"FeatureLayer")}async queryExtent(a,b){return h.queryExtent(this,a,b,"FeatureLayer")}async queryRelatedFeatures(a,b){return h.queryRelatedFeatures(this,a,b,"FeatureLayer")}async queryRelatedFeaturesCount(a,b){return h.queryRelatedFeaturesCount(this,a,b,"FeatureLayer")}async queryTopFeatures(a,
b){const {source:c,capabilities:f}=await this.load();if(!c.queryTopFeatures||!f?.query?.supportsTopFeaturesQuery)throw new m("FeatureLayer","Layer source does not support queryTopFeatures capability");a=await c.queryTopFeatures(r.from(a),b);if(a?.features)for(const l of a.features)l.layer=l.sourceLayer=this;return a}async queryTopObjectIds(a,b){const {source:c,capabilities:f}=await this.load();if(!c.queryTopObjectIds||!f?.query.supportsTopFeaturesQuery)throw new m("FeatureLayer","Layer source does not support queryTopObjectIds capability");
return c.queryTopObjectIds(r.from(a),b)}async queryTopFeaturesExtent(a,b){const {source:c,capabilities:f}=await this.load();if(!c.queryTopExtents||!f?.query?.supportsTopFeaturesQuery)throw new m("FeatureLayer","Layer source does not support queryTopExtents capability");return c.queryTopExtents(r.from(a),b)}async queryTopFeatureCount(a,b){const {source:c,capabilities:f}=await this.load();if(!c.queryTopCount||!f?.query?.supportsTopFeaturesQuery)throw new m("FeatureLayer","Layer source does not support queryFeatureCount capability");
return c.queryTopCount(r.from(a),b)}read(a,b){const c=a.featureCollection;if(c||"Feature Collection"===a.type)this.resourceInfo=a;if(c){const f=c.layers;f&&1===f.length&&(super.read(f[0],b),null!=c.showLegend&&super.read({showLegend:c.showLegend},b))}super.read(a,b);b&&"service"===b.origin&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(a,b){b={...b,origin:b?.origin??void 0,writeLayerSchema:b?.writeLayerSchema??
this._hasMemorySource()};const {origin:c,layerContainerType:f,messages:l}=b;if(this.dynamicDataSource)return l?.push(u(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if(("web-map"===c||"web-scene"===c)&&"tables"!==f)return l?.push(u(this,`a table source can only be written to tables, not ${f}`)),null;if(this._hasMemorySource())return l?.push(u(this,"using an in-memory table source cannot be written to web scenes and web maps")),
null}else if(this.loaded&&("web-map"===c||"web-scene"===c)&&"tables"===f)return l?.push(u(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(a,b)}clone(){if(this._hasMemorySource())throw new m("FeatureLayer",`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(a){return this.loaded?"memory"===this.source?.type?!0:qa.serviceSupportsSpatialReference(this,
a):!1}async save(a){return this._debouncedSaveOperations(t.SaveOperationType.SAVE,a)}async saveAs(a,b){return this._debouncedSaveOperations(t.SaveOperationType.SAVE_AS,b,a)}_readEditingEnabled(a,b,c){let f=a.layerDefinition?.capabilities;if(f)return this._hasEditingCapability(f);f=a.capabilities;if(b&&"web-map"===c?.origin&&!this._hasMemorySource()&&f)return this._hasEditingCapability(f)}_hasEditingCapability(a){return a.toLowerCase().split(",").map(b=>b.trim()).includes("editing")}_writeEditingEnabled(a,
b,c,f){a||(a=this.capabilities?.operations?.supportsSync?"Query,Sync":"Query",q.setDeepValue("layerDefinition.capabilities",a,b),c&&!f?.writeLayerSchema&&(b.capabilities=a))}_getLayerDomain(a){return(a=this.fieldsIndex.get(a))?a.domain:null}_fetchFirstValidLayerId(a){return M(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:a}).then(b=>{if(b=b.data)return this.findFirstValidLayerId(b)})}async initLayerProperties(a){this._set("source",a);a.sourceJSON&&
(this.sourceJSON=a.sourceJSON,this.read(a.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}));this._verifySource();this._verifyFields();B.fixRendererFields(this.renderer,this.fieldsIndex);B.fixTimeInfoFields(this.timeInfo,this.fieldsIndex);return sa.loadStyleRenderer(this,{origin:"service"})}async hasDataChanged(){return h.hasDataChanged(this)}async fetchPublishingStatus(){const a=this.source;return a?.fetchPublishingStatus?a.fetchPublishingStatus():
"unavailable"}_verifyFields(){const a=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+a+")");this.isTable||this._hasMemorySource()||-1!==a.search(/\/FeatureServer\//i)||this.fields?.some(b=>"geometry"===b.type)||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+a+")")}_fixTemplates(a,b){a&&a.forEach(c=>
{(c=c.prototype?.attributes)&&b&&delete c[b]})}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new m("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url");}else if(!this.url)throw new m("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source");}_initMemorySource(a){a.forEach(b=>{b.layer=this;b.sourceLayer=this});this.addHandles([a.on("after-add",b=>{b.item.layer=this;b.item.sourceLayer=
this}),a.on("after-remove",b=>{b.item.layer=null;b.item.sourceLayer=null})],"fl-source")}_resetMemorySource(a){a.forEach(b=>{b.layer=null;b.sourceLayer=null});this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(a){if(Array.isArray(a.layers)&&0<a.layers.length)return a.layers[0].id;if(Array.isArray(a.tables)&&0<a.tables.length)return a.tables[0].id}};e.__decorate([k.reader("service","capabilities")],d.prototype,"readCapabilities",null);e.__decorate([g.property({json:{origins:{"web-scene":{write:!1}},
write:!0}})],d.prototype,"charts",void 0);e.__decorate([g.property({readOnly:!0})],d.prototype,"createQueryVersion",null);e.__decorate([g.property({json:{read:{source:"layerDefinition.copyrightText"}}})],d.prototype,"copyright",void 0);e.__decorate([g.property({json:{read:{source:"layerDefinition.displayField"}}})],d.prototype,"displayField",void 0);e.__decorate([g.property({types:N.symbolTypes,readOnly:!0})],d.prototype,"defaultSymbol",void 0);e.__decorate([g.property({type:ra.DataLayerSource})],
d.prototype,"dynamicDataSource",void 0);e.__decorate([g.property({type:Boolean})],d.prototype,"editingEnabled",null);e.__decorate([k.reader(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],d.prototype,"readEditingEnabled",null);e.__decorate([k.reader("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],d.prototype,"readEditingEnabledFromWebMap",null);e.__decorate([z.writer(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],
d.prototype,"writeEditingEnabled",null);e.__decorate([z.writer("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],d.prototype,"writeEditingEnabledToWebMap",null);e.__decorate([g.property({readOnly:!0})],d.prototype,"effectiveEditingEnabled",null);e.__decorate([g.property({...p.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:D}}}}})],d.prototype,
"fields",void 0);e.__decorate([g.property(p.fieldsIndex)],d.prototype,"fieldsIndex",void 0);e.__decorate([g.property({type:T,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"formTemplate",void 0);e.__decorate([g.property({json:{read:{source:"layerDefinition.extent"}}})],d.prototype,"fullExtent",void 0);e.__decorate([g.property({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:D,writer(a,b,c){(a=a?h.geometryTypeKebabDict.toJSON(a):
null)&&q.setDeepValue(c,a,b)}}}},read:{source:"layerDefinition.geometryType",reader:h.geometryTypeKebabDict.read}}})],d.prototype,"geometryType",void 0);e.__decorate([g.property({json:{read:{source:"layerDefinition.hasM"}}})],d.prototype,"hasM",void 0);e.__decorate([g.property({json:{read:{source:"layerDefinition.hasZ"}}})],d.prototype,"hasZ",void 0);e.__decorate([g.property(n.id)],d.prototype,"id",void 0);e.__decorate([g.property({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],d.prototype,
"infoFor3D",void 0);e.__decorate([g.property({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],d.prototype,"isTable",void 0);e.__decorate([k.reader("service","isTable",["type","geometryType"]),k.reader("isTable",["layerDefinition.type","layerDefinition.geometryType"])],d.prototype,"readIsTable",null);e.__decorate([z.writer("web-map","isTable")],d.prototype,"writeIsTable",null);e.__decorate([g.property(n.labelsVisible)],d.prototype,"labelsVisible",void 0);e.__decorate([g.property({type:[na],
json:{origins:{service:{name:"drawingInfo.labelingInfo",read:C.reader,write:!1},"web-scene":{name:"layerDefinition.drawingInfo.labelingInfo",read:C.reader,write:{enabled:!0,layerContainerTypes:G.excludeTables}}},name:"layerDefinition.drawingInfo.labelingInfo",read:C.reader,write:!0}})],d.prototype,"labelingInfo",void 0);e.__decorate([g.property((()=>{const a=w.clone(n.opacityDrawingInfo);a.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(b,c,f){q.setDeepValue(f,
wa.opacityToTransparency(b),c)}}};return a})())],d.prototype,"opacity",void 0);e.__decorate([g.property(n.legendEnabled)],d.prototype,"legendEnabled",void 0);e.__decorate([g.property({type:["show","hide"],json:(()=>{const a=w.clone(n.listMode.json);a.origins["portal-item"]={read:!1,write:!1};return a})()})],d.prototype,"listMode",void 0);e.__decorate([k.reader("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],d.prototype,"readGlobalIdField",null);e.__decorate([g.property({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",
overridePolicy:D}}}}})],d.prototype,"objectIdField",void 0);e.__decorate([k.reader("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],d.prototype,"readObjectIdField",null);e.__decorate([g.property({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],d.prototype,"operationalLayerType",void 0);e.__decorate([g.property(p.outFields)],d.prototype,"outFields",void 0);e.__decorate([g.property({readOnly:!0})],d.prototype,"parsedUrl",null);e.__decorate([g.property({type:String,
json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],d.prototype,"path",void 0);e.__decorate([g.property(n.popupEnabled)],d.prototype,"popupEnabled",void 0);e.__decorate([g.property({type:K,json:{name:"popupInfo",write:!0}})],d.prototype,"popupTemplate",void 0);e.__decorate([g.property({readOnly:!0})],d.prototype,"defaultPopupTemplate",null);e.__decorate([g.property({types:F.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:F.webSceneRendererTypes,
name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:G.excludeTables,overridePolicy(a,b,c){return{ignoreOrigin:c?.writeLayerSchema}}}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy(a,b,c){return{ignoreOrigin:c?.writeLayerSchema}}}}})],d.prototype,"renderer",null);e.__decorate([k.reader("service","renderer",["drawingInfo.renderer","defaultSymbol"]),k.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],d.prototype,"readRenderer",
null);e.__decorate([g.property()],d.prototype,"resourceInfo",void 0);e.__decorate([g.property((()=>{const a=w.clone(n.screenSizePerspectiveEnabled);a.json.origins["portal-item"]={read:!1,write:!1};return a})())],d.prototype,"screenSizePerspectiveEnabled",void 0);e.__decorate([g.property({clonable:!1})],d.prototype,"source",null);e.__decorate([R.cast("source")],d.prototype,"castSource",null);e.__decorate([k.reader("portal-item","source",["featureSet"]),k.reader("web-map","source",["featureSet"])],
d.prototype,"readSource",null);e.__decorate([g.property({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],d.prototype,"spatialReference",void 0);e.__decorate([g.property({type:Number})],d.prototype,"subtypeCode",void 0);e.__decorate([g.property({type:[I]})],d.prototype,"templates",void 0);e.__decorate([k.reader("templates",["editFieldsInfo","creatorField","editorField","templates"])],d.prototype,"readTemplates",null);e.__decorate([g.property({type:pa})],d.prototype,"timeInfo",void 0);
e.__decorate([g.property()],d.prototype,"title",void 0);e.__decorate([k.reader("service","title",["name"]),k.reader("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],d.prototype,"readTitle",null);e.__decorate([k.reader("web-map","title",["layerDefinition.name","title"])],d.prototype,"readTitleFromWebMap",null);e.__decorate([g.property({type:String})],d.prototype,"sublayerTitleMode",void 0);e.__decorate([g.property({json:{read:!1}})],d.prototype,"type",void 0);e.__decorate([g.property({type:String})],
d.prototype,"typeIdField",void 0);e.__decorate([k.reader("service","typeIdField"),k.reader("typeIdField",["layerDefinition.typeIdField"])],d.prototype,"readTypeIdField",null);e.__decorate([g.property({type:[J]})],d.prototype,"types",void 0);e.__decorate([k.reader("service","types",["types"]),k.reader("types",["layerDefinition.types"])],d.prototype,"readTypes",null);e.__decorate([g.property({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],d.prototype,
"visible",void 0);e.__decorate([k.reader("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],d.prototype,"readVisible",null);return d=e.__decorate([S.subclass("esri.layers.FeatureLayer")],d)});