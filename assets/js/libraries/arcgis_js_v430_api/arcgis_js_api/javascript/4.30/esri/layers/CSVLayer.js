// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../geometry ../core/Error ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ./FeatureLayer ./graphics/sources/CSVSource ./graphics/sources/support/clientSideDefaults ../rest/support/Query ../chunks/persistableUrlUtils ../geometry/SpatialReference".split(" "),function(d,c,h,p,q,e,x,y,z,r,t,u,k,v,f,l,w){function m(a,
b){throw new h(b,`CSVLayer (title: ${a.title}, id: ${a.id}) cannot be saved to a portal item`);}c=class extends u{constructor(...a){super(...a);this.geometryType="point";this.capabilities=v.createCapabilities(!1,!1);this.delimiter=null;this.editingEnabled=!1;this.latitudeField=this.fields=null;this.locationType="coordinates";this.longitudeField=null;this.operationalLayerType="CSV";this.outFields=["*"];this.path=null;this.spatialReference=w.WGS84;this.source=null;this.type="csv"}normalizeCtorArgs(a,
b){return"string"===typeof a?{url:a,...b}:a}load(a){const b=null!=a?a.signal:null;a=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},a).catch(p.throwIfAbortError).then(async()=>this.initLayerProperties(await this.createGraphicsSource(b)));this.addResolvingPromise(a);return Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(a,b){return null!=b.showLabels?b.showLabels:!!b.layerDefinition?.drawingInfo?.labelingInfo}set url(a){a?(a=q.urlToObject(a),
this._set("url",a.path),a.query&&(this.customParameters={...this.customParameters,...a.query})):this._set("url",a)}async createGraphicsSource(a){const b=new k.CSVSource({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});this._set("source",b);await b.load({signal:a});this.read({locationInfo:b.locationInfo,
columnDelimiter:b.delimiter},{origin:"service",url:this.parsedUrl});return b}queryFeatures(a,b){return this.load().then(()=>this.source.queryFeatures(f.from(a)||this.createQuery())).then(g=>{if(g?.features)for(const n of g.features)n.layer=n.sourceLayer=this;return g})}queryObjectIds(a,b){return this.load().then(()=>this.source.queryObjectIds(f.from(a)||this.createQuery()))}queryFeatureCount(a,b){return this.load().then(()=>this.source.queryFeatureCount(f.from(a)||this.createQuery()))}queryExtent(a,
b){return this.load().then(()=>this.source.queryExtent(f.from(a)||this.createQuery()))}read(a,b){super.read(a,b);b&&"service"===b.origin&&this.revert(["latitudeField","longitudeField"],"service")}write(a,b){return super.write(a,{...b,writeLayerSchema:!0})}clone(){throw new h("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`);}async save(a){return m(this,"csv-layer:save")}async saveAs(a,b){return m(this,"csv-layer:save-as")}async hasDataChanged(){try{const {dataChanged:a,
updates:b}=await this.source.refresh(this.customParameters);null!=b&&this.read(b,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0});return a}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};d.__decorate([e.property({readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"capabilities",void 0);d.__decorate([e.property({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],c.prototype,"delimiter",void 0);
d.__decorate([e.property({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],c.prototype,"editingEnabled",void 0);d.__decorate([e.property({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],c.prototype,"fields",void 0);d.__decorate([e.property({type:Boolean,readOnly:!0})],c.prototype,"isTable",null);d.__decorate([r.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],c.prototype,"readWebMapLabelsVisible",
null);d.__decorate([e.property({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],c.prototype,"latitudeField",void 0);d.__decorate([e.property({type:["show","hide"]})],c.prototype,"listMode",void 0);d.__decorate([e.property({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],c.prototype,"locationType",void 0);d.__decorate([e.property({type:String,
json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],c.prototype,"longitudeField",void 0);d.__decorate([e.property({type:["CSV"]})],c.prototype,"operationalLayerType",void 0);d.__decorate([e.property()],c.prototype,"outFields",void 0);d.__decorate([e.property({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],c.prototype,"path",void 0);d.__decorate([e.property({json:{read:!1},cast:null,type:k.CSVSource,
readOnly:!0})],c.prototype,"source",void 0);d.__decorate([e.property({json:{read:!1},value:"csv",readOnly:!0})],c.prototype,"type",void 0);d.__decorate([e.property({json:{read:l.read,write:{isRequired:!0,ignoreOrigin:!0,writer:l.write}}})],c.prototype,"url",null);return c=d.__decorate([t.subclass("esri.layers.CSVLayer")],c)});