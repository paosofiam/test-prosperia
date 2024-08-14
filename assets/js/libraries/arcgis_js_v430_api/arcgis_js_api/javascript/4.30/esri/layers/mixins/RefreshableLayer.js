// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/layerContainerType ./refresh".split(" "),function(e,c,p,k,g,f,l,q,m,n,h){e.RefreshableLayer=a=>{a=class extends a{constructor(...b){super(...b);this.refreshTimestamp=this.refreshInterval=0;this._debounceHasDataChanged=g.debounce(()=>
this.hasDataChanged());this.when().then(()=>{this.destroyed||h.registerLayer(this)},()=>{})}destroy(){h.unregisterLayer(this)}castRefreshInterval(b){return.1<=b?b:0>=b?0:.1}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(b=Date.now()){g.ignoreAbortErrors(this._debounceHasDataChanged()).then(d=>{d&&this._set("refreshTimestamp",b);this.emit("refresh",{dataChanged:d})},d=>{k.getLogger(this).error(d);this.emit("refresh",{dataChanged:!1,error:d})})}async hasDataChanged(){return!0}get test(){}};
c.__decorate([f.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:n.excludeTables}}}}})],a.prototype,"refreshInterval",void 0);c.__decorate([l.cast("refreshInterval")],a.prototype,"castRefreshInterval",null);c.__decorate([f.property({readOnly:!0})],a.prototype,"refreshTimestamp",void 0);c.__decorate([f.property({readOnly:!0})],a.prototype,"refreshParameters",null);return a=c.__decorate([m.subclass("esri.layers.mixins.RefreshableLayer")],a)};e.isRefreshableLayer=
function(a){return null!=a&&"object"===typeof a&&"refreshTimestamp"in a&&"refresh"in a};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});