// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../intl ../../PopupTemplate ../../core/Error ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../Popup/actions ../support/GeolocationPositioning ../support/geolocationUtils ../../intl/locale ../../intl/messages".split(" "),function(d,c,h,g,k,e,u,v,w,l,m,n,p,q,r){async function t(){const a=await r.fetchMessageBundle("esri/widgets/Locate/t9n/Locate");
return new h({title:a.currentLocation,fieldInfos:[{fieldName:"timestamp",label:a.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:a.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:a.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:a.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:a.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:a.altitudeAccuracy,format:{places:0,
digitSeparator:!0}},{fieldName:"heading",label:a.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:a.speed,format:{places:0,digitSeparator:!0}}],actions:[m.removeSelectedFeature.clone()],content:[{type:"fields"}]})}c=class extends n{constructor(a){super(a);this._locateController=null;this.error=void 0;this.popupEnabled=!0;this.locate=this.locate.bind(this)}initialize(){this.addHandles([q.onLocaleChange(()=>{const {graphic:a,view:b}=this;a&&b?.graphics?.includes(a)&&this._updatePopupTemplate(a)})])}destroy(){this.cancelLocate()}get state(){return this._geolocationUsable?
this.view?.ready?this._locateController?"locating":null!=this.error?"error":"ready":"disabled":"feature-unsupported"}async locate(){this.cancelLocate();if("disabled"===this.state)throw new g("locate:disabled-state","Cannot locate when disabled.");if("feature-unsupported"===this.state)throw new g("locate:feature-unsupported-state","Cannot locate in unsecure domain.");const a=new AbortController;this._locateController=a;this.error=void 0;try{const b=await p.getCurrentPosition(this.geolocationOptions);
await this.updatePosition(b,a);if(this._locateController!==a)return null;const {graphic:f}=this;f&&await this._updatePopupTemplate(f);this._addGraphic();this.emit("locate",{position:b});this._locateController=null;return b}catch(b){if(k.isAbortError(b))return null;a===this._locateController&&(this._locateController=null);this.error=b;this.emit("locate-error",{error:b});throw b;}}cancelLocate(){this._clearGraphic();this._locateController&&this._locateController.abort();this._locateController=null}async _updatePopupTemplate(a){if(this.popupEnabled){var b=
await t(),f=a!==this.graphic;this.destroyed||f||(a.popupTemplate=b)}}};d.__decorate([e.property()],c.prototype,"_locateController",void 0);d.__decorate([e.property()],c.prototype,"error",void 0);d.__decorate([e.property()],c.prototype,"popupEnabled",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"state",null);d.__decorate([e.property()],c.prototype,"locate",null);d.__decorate([e.property()],c.prototype,"cancelLocate",null);return c=d.__decorate([l.subclass("esri.widgets.Locate.LocateViewModel")],
c)});