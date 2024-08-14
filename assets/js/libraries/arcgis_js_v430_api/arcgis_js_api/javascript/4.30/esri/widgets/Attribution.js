// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Widget ./Attribution/AttributionViewModel ./support/globalCss ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(c,m,d,b,v,w,n,p,k,l,q,r,h,x){b=class extends p{constructor(a,e){super(a,e);this._attributionTextOverflowed=this._isOpen=
!1;this._prevSourceNodeHeight=0;this._resizeObserver=new ResizeObserver(f=>f.forEach(({target:g})=>this._checkSourceTextOverflow(g)));this.itemDelimiter=" | ";this.messages=null;this.viewModel=new k}initialize(){this.addHandles(m.on(()=>this.viewModel?.items,"change",()=>this.scheduleRender()))}destroy(){this._resizeObserver?.disconnect()}get _isInteractive(){return this._isOpen||this._attributionTextOverflowed}get attributionText(){return this.viewModel.items.reduce((a,e)=>{a.includes(e.text)||a.push(e.text);
return a},[]).join(this.itemDelimiter)}get icon(){return"description"}set icon(a){this._overrideIfSome("icon",a)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}render(){return h.tsx("div",{bind:this,class:this.classes("esri-attribution",l.globalCss.widget,{["esri-attribution--open"]:this._isOpen}),dir:"ltr",onclick:this._toggleState,onkeydown:this._toggleState},this._renderSourcesNode(),
this._renderPoweredBy())}_renderPoweredBy(){return h.tsx("div",{class:"esri-attribution__powered-by"},"Powered by"," ",h.tsx("a",{class:"esri-attribution__link",href:"https://www.esri.com/",rel:"noreferrer",target:"_blank"},"Esri"))}_renderSourcesNode(){const a=this._isOpen,e=this._isInteractive,f=e?0:void 0,{attributionText:g}=this;return h.tsx("div",{afterCreate:this._afterSourcesNodeCreate,bind:this,class:this.classes("esri-attribution__sources",{["esri-attribution__sources--open"]:a,[l.globalCss.interactive]:e}),
innerHTML:g,tabIndex:f})}_afterSourcesNodeCreate(a){this._prevSourceNodeHeight=a.clientWidth;this._resizeObserver.observe(a)}_checkSourceTextOverflow(a){let e=!1;const {clientHeight:f,clientWidth:g,scrollWidth:t}=a;a=t>g;const u=this._attributionTextOverflowed!==a;this._attributionTextOverflowed=a;u&&(e=!0);this._isOpen&&(a=f<this._prevSourceNodeHeight,this._prevSourceNodeHeight=f,a&&(this._isOpen=!1,e=!0));e&&this.scheduleRender()}_toggleState(){this._isInteractive&&(this._isOpen=!this._isOpen)}};
c.__decorate([d.property()],b.prototype,"_isOpen",void 0);c.__decorate([d.property()],b.prototype,"_isInteractive",null);c.__decorate([d.property()],b.prototype,"_attributionTextOverflowed",void 0);c.__decorate([d.property()],b.prototype,"_prevSourceNodeHeight",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["viewModel.items.length","itemDelimiter"]})],b.prototype,"attributionText",null);c.__decorate([d.property()],b.prototype,"icon",null);c.__decorate([d.property()],b.prototype,"itemDelimiter",
void 0);c.__decorate([d.property()],b.prototype,"label",null);c.__decorate([d.property(),r.messageBundle("esri/widgets/Attribution/t9n/Attribution")],b.prototype,"messages",void 0);c.__decorate([d.property()],b.prototype,"view",null);c.__decorate([d.property({type:k})],b.prototype,"viewModel",void 0);c.__decorate([q.accessibleHandler()],b.prototype,"_toggleState",null);return b=c.__decorate([n.subclass("esri.widgets.Attribution")],b)});