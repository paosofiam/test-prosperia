// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../Widget ../../chunks/componentsUtils ./UnitSelect ./widgetUtils ./jsxFactory".split(" "),function(h,a,d,e,p,q,r,k,l,m,n,t,b){a.MeasurementWidgetContent=class extends l{constructor(c,f){super(c,f)}loadDependencies(){return m.loadCalciteComponents({button:()=>new Promise((c,f)=>h(["../../chunks/calcite-button"],
c,f))})}render(){return b.tsx("div",{class:"esri-measurement-widget-content"},this._renderContent())}_renderContent(){const {supported:c,active:f,state:g}=this;switch(g){case "disabled":case "ready":return c?f?this._renderHint():this._renderActions():this._renderUnsupportedMessage();case "measuring":case "measured":return[this._renderSettings(),this._renderMeasurement(),this._renderActions()]}}_renderUnsupportedMessage(){return b.tsx("section",{class:"esri-measurement-widget-content__error",key:"unsupported"},
b.tsx("p",null,this.messages.unsupported))}_renderHint(){const {messages:c}=this;return b.tsx("section",{class:"esri-measurement-widget-content__hint",key:"hint"},b.tsx("p",{class:"esri-measurement-widget-content__hint-text"},c.hint))}_renderSettings(){return b.tsx("div",{class:"esri-measurement-widget-content__settings",key:"settings"},b.tsx(n.UnitSelect,{options:this.unitOptions,selectLabel:this.messages.unit,value:this.unit,onChange:this.onUnitChange}))}_renderMeasurement(){return b.tsx("section",
{class:"esri-measurement-widget-content__measurement",key:"measurement"},this.measurementItems.map(c=>this._renderMeasurementItem(c)))}_renderMeasurementItem({key:c,title:f,value:g}){return b.tsx("div",{class:this.classes("esri-measurement-widget-content__measurement-item",null==g&&"esri-measurement-widget-content__measurement-item--disabled"),key:c},b.tsx("span",{class:"esri-measurement-widget-content__measurement-item__title"},f),b.tsx("span",{"aria-live":"polite",class:"esri-measurement-widget-content__measurement-item__value"},
g??this.messages.notApplicable))}_renderActions(){const {messages:c}=this;return b.tsx("div",{class:"esri-measurement-widget-content__actions"},b.tsx("calcite-button",{class:this.newMeasurementButtonClass,disabled:"disabled"===this.state,onclick:this.onNewMeasurementClick},c.newMeasurement))}};d.__decorate([e.property()],a.MeasurementWidgetContent.prototype,"active",void 0);d.__decorate([e.property()],a.MeasurementWidgetContent.prototype,"measurementItems",void 0);d.__decorate([e.property()],a.MeasurementWidgetContent.prototype,
"messages",void 0);d.__decorate([e.property()],a.MeasurementWidgetContent.prototype,"newMeasurementButtonClass",void 0);d.__decorate([e.property()],a.MeasurementWidgetContent.prototype,"onNewMeasurementClick",void 0);d.__decorate([e.property()],a.MeasurementWidgetContent.prototype,"onUnitChange",void 0);d.__decorate([e.property()],a.MeasurementWidgetContent.prototype,"state",void 0);d.__decorate([e.property()],a.MeasurementWidgetContent.prototype,"supported",void 0);d.__decorate([e.property()],a.MeasurementWidgetContent.prototype,
"unit",void 0);d.__decorate([e.property()],a.MeasurementWidgetContent.prototype,"unitOptions",void 0);a.MeasurementWidgetContent=d.__decorate([k.subclass("esri.widgets.support.MeasurementWidgetContent")],a.MeasurementWidgetContent);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});