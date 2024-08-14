// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../renderers/support/ClassBreakInfo ./SmartMappingSliderBase ./ClassedColorSlider/ClassedColorSliderViewModel ../support/globalCss ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),function(g,h,e,u,v,m,n,p,q,k,w,r,f){var l;e=l=class extends p.SmartMappingSliderBase{constructor(a,
b){super(a,b);this.messages=null;this.viewModel=new q;this._bgFillId=`${this.id}-bg-fill`;this._rampFillId=`${this.id}-linear-gradient`}get breaks(){return this.viewModel.breaks}set breaks(a){this.viewModel.breaks=a}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}static fromRendererResult(a,b){({renderer:{classBreakInfos:a}}=a);a=a.map(c=>({min:c.minValue,max:c.maxValue,color:c.symbol.color}));return new l({breaks:a,histogramConfig:{bins:b?b.bins:[]}})}updateClassBreakInfos(a){const b=
this.breaks;if(b.length!==a.length)console.error(`Number of input breakInfos must match number of slider breaks: ${b.length}`);else return a.map((c,d)=>{c=c.symbol;c.color=b[d].color;return new n({minValue:b[d].min,maxValue:b[d].max,symbol:c})})}updateFromRendererResult(a,b){({renderer:{classBreakInfos:a}}=a);a=a.map(c=>({min:c.minValue,max:c.maxValue,color:c.symbol.color}));this.set({breaks:a});b?.bins&&(this.histogramConfig.bins=b.bins)}render(){const {state:a,label:b,visibleElements:c}=this,d=
"disabled"===a,t=this.classes("esri-classed-color-slider",k.globalCss.widget,k.globalCss.panel,{[k.globalCss.disabled]:d,["esri-classed-color-slider--interactive-track"]:!!c.interactiveTrack});return f.tsx("div",{"aria-label":b,class:t},d?null:this.renderContent(this._renderRamp(),"esri-classed-color-slider__slider-container","esri-classed-color-slider__histogram-container"))}_renderRamp(){const {_bgFillId:a,_rampFillId:b,viewModel:c}=this,d=c.getStopInfo();return f.tsx("div",{class:"esri-classed-color-slider__ramp"},
f.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},f.tsx("defs",null,this.renderRampFillDefinition(b,d),this.renderBackgroundFillDefinition(a)),f.tsx("rect",{fill:`url(#${a})`,height:"100%",width:"100%",x:"0",y:"0"}),f.tsx("rect",{fill:`url(#${b})`,height:"100%",width:"100%",x:"0",y:"0"})))}};g.__decorate([h.property()],e.prototype,"breaks",null);g.__decorate([h.property()],e.prototype,"label",null);g.__decorate([h.property(),r.messageBundle("esri/widgets/smartMapping/ClassedColorSlider/t9n/ClassedColorSlider")],
e.prototype,"messages",void 0);g.__decorate([h.property()],e.prototype,"viewModel",void 0);return e=l=g.__decorate([m.subclass("esri.widgets.smartMapping.ClassedColorSlider")],e)});