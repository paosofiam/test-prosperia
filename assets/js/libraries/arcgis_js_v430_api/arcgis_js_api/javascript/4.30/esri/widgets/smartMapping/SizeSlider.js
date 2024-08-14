// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../../renderers/support/authoringInfoUtils ../../renderers/visualVariables/SizeVariable ../../renderers/visualVariables/support/SizeStop ./SmartMappingSliderBase ./SizeSlider/SizeSliderViewModel ./support/utils ../support/globalCss ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),
function(l,g,m,B,N,O,C,x,y,u,D,E,p,v,F,G,q){var w;const z={trackFillColor:new g([149,149,149]),trackBackgroundColor:new g([224,224,224])};g=w=class extends D.SmartMappingSliderBase{constructor(a,b){super(a,b);this._maxRampFillWidth=1;this._minRampFillWidth=.2;this.messages=this._rampNode=null;this.style={...z};this.viewModel=new E}get handlesSyncedToPrimary(){return this.viewModel.handlesSyncedToPrimary}set handlesSyncedToPrimary(a){this.viewModel.handlesSyncedToPrimary=a}get label(){return this.messages?.widgetLabel??
""}set label(a){this._overrideIfSome("label",a)}get persistSizeRangeEnabled(){return this.viewModel.persistSizeRangeEnabled}set persistSizeRangeEnabled(a){this.viewModel.persistSizeRangeEnabled=a}get primaryHandleEnabled(){return this.viewModel.primaryHandleEnabled}set primaryHandleEnabled(a){this.viewModel.primaryHandleEnabled=a}get stops(){return this.viewModel.stops}set stops(a){this.viewModel.stops=a}castStyle(a){return{...z,...a}}static fromRendererResult(a,b){const {visualVariables:c,statistics:d}=
a,{avg:f,stddev:e}=d,h=c[0],[k,r]=p.getSizesFromVariable(h),[t,n]=x.authoringInfoFirstVariableSliderMinMax(a.renderer.authoringInfo);return new w({max:n,min:t,stops:[new u({value:h.minDataValue??void 0,size:r}),new u({value:h.maxDataValue??void 0,size:k})],histogramConfig:{average:f??void 0,standardDeviation:e??void 0,bins:b?b.bins:[]}})}updateFromRendererResult(a,b){const {visualVariables:c,statistics:d}=a,{avg:f,stddev:e}=d,h=c[0],[k,r]=p.getSizesFromVariable(h),[t,n]=x.authoringInfoFirstVariableSliderMinMax(a.renderer.authoringInfo);
this.set({max:n,min:t,stops:[{value:h.minDataValue,size:r},{value:h.maxDataValue,size:k}],histogramConfig:{average:f,standardDeviation:e,bins:b?b.bins:[]}})}updateVisualVariable(a){const b=a.clone();var {stops:c}=this;if(!a||!c)return null;if(b.stops)return b.stops=c,b;a=c[0];c=c[c.length-1];let d=b.maxSize,f=b.minSize;if(d instanceof y){var e=d.stops;const h=c.size/e[0].size;e=e.map(k=>{k.size*=h;return k});d.stops=e}else d=c.size;if(f instanceof y){e=f.stops;const h=a.size/e[0].size;e=e.map(k=>
{k.size*=h;return k});f.stops=e}else f=a.size;b.set({maxDataValue:c.value,minDataValue:a.value,maxSize:d,minSize:f});return b}updateFromVisualVariable(a){if(a){var {maxDataValue:b,minDataValue:c,stops:d}=a;if(d)this.stops=d;else{const [f,e]=p.getSizesFromVariable(a);this.stops=[new u({value:c??void 0,size:e}),new u({value:b??void 0,size:f})]}}}render(){const {label:a,primaryHandleEnabled:b,state:c,visibleElements:d}=this,f="disabled"===c,e=this.classes("esri-size-slider",v.globalCss.widget,v.globalCss.panel,
{[v.globalCss.disabled]:f,["esri-size-slider--primary-handle"]:b,["esri-size-slider--interactive-track"]:!!d.interactiveTrack});return q.tsx("div",{"aria-label":a,class:e},f?null:this.renderContent(this._renderRamp(),"esri-size-slider__slider-container","esri-size-slider__histogram-container"))}_renderRamp(){const {style:{trackBackgroundColor:a},zoomOptions:b}=this;return q.tsx("div",{afterCreate:F.storeNode,bind:this,class:"esri-size-slider__ramp","data-node-ref":"_rampNode"},q.tsx("svg",{key:"ramp-svg",
xmlns:"http://www.w3.org/2000/svg"},q.tsx("rect",{fill:p.getFillFromColor(a),height:"100%",width:"100%",x:"0",y:"0"}),this._renderPath()),b?this.renderZoomCaps():null)}_renderPath(){if(this._rampNode){var {offsetHeight:a=0,offsetWidth:b=0}=this._rampNode;if(null!=a&&null!=b){var {primaryHandleEnabled:c,stops:d,style:{trackFillColor:f},values:e,viewModel:{max:h,min:k},_maxRampFillWidth:r,_minRampFillWidth:t}=this,n=[r,t];d[0].size<d[d.length-1].size&&n.reverse();var J=e.slice().sort((H,I)=>H>I?1:-1),
[K,A]=n,[L,M]=J;n=c?p.getDynamicPathForSizeStops({max:h,min:k,pathHeight:a,pathWidth:b,stops:d,padding:A}):p.getPathForSizeStops({bottomValue:L,bottomWidth:K,max:h,min:k,pathHeight:a,pathWidth:b,topValue:M,topWidth:A});return q.tsx("path",{d:n,fill:p.getFillFromColor(f)})}}}};l.__decorate([m.property()],g.prototype,"handlesSyncedToPrimary",null);l.__decorate([m.property()],g.prototype,"label",null);l.__decorate([m.property(),G.messageBundle("esri/widgets/smartMapping/SizeSlider/t9n/SizeSlider")],
g.prototype,"messages",void 0);l.__decorate([m.property()],g.prototype,"persistSizeRangeEnabled",null);l.__decorate([m.property()],g.prototype,"primaryHandleEnabled",null);l.__decorate([m.property()],g.prototype,"stops",null);l.__decorate([m.property()],g.prototype,"style",void 0);l.__decorate([B.cast("style")],g.prototype,"castStyle",null);l.__decorate([m.property()],g.prototype,"viewModel",void 0);return g=w=l.__decorate([C.subclass("esri.widgets.smartMapping.SizeSlider")],g)});