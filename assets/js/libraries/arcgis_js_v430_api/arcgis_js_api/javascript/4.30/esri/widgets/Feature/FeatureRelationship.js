// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ../../chunks/tslib.es6 ../../intl ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../Widget ./FeatureRelationship/FeatureRelationshipViewModel ./support/FeatureElementInfo ../../chunks/componentsUtils ../support/globalCss ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory ../../intl/substitute".split(" "),
function(k,e,c,q,r,h,f,t,E,F,u,v,m,w,x,y,z,n,d,A){const p={title:!0,description:!0};c=class extends v{constructor(a,b){super(a,b);this._relatedFeatureIntersectionObserverNode=this._featureElementInfo=null;this._relatedFeatureIntersectionObserver=new IntersectionObserver(([g])=>{g?.isIntersecting&&this._increaseFeaturePage()},{root:window.document});this.headingLevel=2;this.viewModel=new m;this.messagesCommon=this.messages=null;this.visibleElements={...p};this._increaseFeaturePage=()=>{const {state:g,
showAllEnabled:l,relatedFeatures:B,featuresPerPage:C,featurePage:D}=this.viewModel;"ready"===g&&l&&B.length>=C*D&&this.viewModel.featurePage++}}initialize(){this._featureElementInfo=new w;this.addHandles([h.watch(()=>[this.viewModel.description,this.viewModel.title,this.headingLevel],()=>this._setupFeatureElementInfo(),h.initial),h.watch(()=>[this.viewModel.state,this.viewModel.showAllEnabled,this._relatedFeatureIntersectionObserverNode],()=>this._handleRelatedFeatureObserverChange()),h.on(()=>this.viewModel.relatedFeatureViewModels,
"change",()=>this._setupRelatedFeatureViewModels())])}loadDependencies(){return x.loadCalciteComponents({icon:()=>new Promise((a,b)=>k(["../../chunks/calcite-icon"],a,b)),list:()=>new Promise((a,b)=>k(["../../chunks/calcite-list"],a,b)),"list-item":()=>new Promise((a,b)=>k(["../../chunks/calcite-list-item"],a,b)),loader:()=>new Promise((a,b)=>k(["../../chunks/calcite-loader"],a,b)),notice:()=>new Promise((a,b)=>k(["../../chunks/calcite-notice"],a,b))})}destroy(){this._unobserveRelatedFeatureObserver();
this._featureElementInfo=q.destroyMaybe(this._featureElementInfo)}get displayShowAllButton(){const {showAllEnabled:a,featureCount:b,displayCount:g,state:l}=this.viewModel;return!a&&!!b&&"ready"===l&&(b>g||0===g)}get displayListItems(){return this.displayShowAllButton||0<this.viewModel.relatedFeatureViewModels.length}get description(){return this.viewModel.description}set description(a){this.viewModel.description=a}get featureCountDescription(){const {messages:a}=this,{featureCount:b}=this.viewModel;
return A.substitute(a?.numberRecords,{number:b})}get title(){return this.viewModel.title}set title(a){this.viewModel.title=a}castVisibleElements(a){return{...p,...a}}render(){const {state:a}=this.viewModel;return d.tsx("div",{class:this.classes("esri-feature-relationship",y.globalCss.widget)},this._featureElementInfo?.render(),"loading"===a?this._renderLoading():"disabled"===a?this._renderRelationshipNotFound():this._renderRelatedFeatures())}_renderStickyLoading(){return"querying"===this.viewModel.state?
d.tsx("div",{class:"esri-feature__sticky-loading-container",key:"sticky-loader"},this._renderLoadingIcon()):null}_renderLoadingIcon(){return d.tsx("calcite-loader",{inline:!0,label:""})}_renderLoading(){return d.tsx("div",{class:"esri-feature__loading-container",key:"loading-container"},this._renderLoadingIcon())}_renderShowAllIconNode(){return d.tsx("calcite-icon",{icon:"list",scale:"s",slot:"content-end"})}_renderChevronIconNode(){const a=z.isRTL(this.container)?"chevron-left":"chevron-right";return d.tsx("calcite-icon",
{icon:a,scale:"s",slot:"content-end"})}_renderRelatedFeature(a){const {itemDescriptionFieldName:b}=this.viewModel,g=a.title;a.description=b&&a.formattedAttributes?.global[b];return d.tsx("calcite-list-item",{class:this.classes("esri-feature-relationship__list-item",{["esri-feature-relationship__list-item--hidden"]:"loading"===a.state}),description:a.description??"",key:a.uid,label:g,onCalciteListItemSelect:()=>this.emit("select-record",{featureViewModel:a})},this._renderChevronIconNode())}_renderShowAllListItem(){return this.displayShowAllButton?
d.tsx("calcite-list-item",{description:this.featureCountDescription,key:"show-all-item",label:this.messages?.showAll,onCalciteListItemSelect:()=>this.emit("show-all-records")},this._renderShowAllIconNode()):null}_renderNoRelatedFeaturesMessage(){return d.tsx("calcite-notice",{icon:"information",key:"no-related-features-message",kind:"brand",open:!0,scale:"s",width:"full"},d.tsx("div",{slot:"message"},this.messages?.noRelatedFeatures))}_renderFeatureObserver(){return d.tsx("div",{afterCreate:this._relatedFeatureIntersectionObserverCreated,
bind:this,class:"esri-feature__feature-observer",key:"feature-observer"})}_renderList(){const {relatedFeatureViewModels:a}=this.viewModel;return d.tsx("calcite-list",null,a.toArray().map(b=>this._renderRelatedFeature(b)),this._renderShowAllListItem())}_renderRelatedFeatures(){const {displayListItems:a}=this,{state:b}=this.viewModel;return d.tsx("div",{class:this.classes("esri-feature-relationship__list",{["esri-feature-relationship__list--querying"]:"querying"===b}),key:"list-container"},a?this._renderList():
"ready"===b?this._renderNoRelatedFeaturesMessage():null,this._renderStickyLoading(),this._renderFeatureObserver())}_renderRelationshipNotFound(){return d.tsx("calcite-notice",{icon:"exclamation-mark-triangle",key:"relationship-not-found",kind:"danger",open:!0,scale:"s",width:"full"},d.tsx("div",{slot:"message"},this.messages?.relationshipNotFound))}_setupRelatedFeatureViewModels(){const {relatedFeatureViewModels:a}=this.viewModel;this.removeHandles("related-feature-viewmodels");a?.forEach(b=>{this.addHandles(h.watch(()=>
[b.title,b.state],()=>this.scheduleRender(),h.initial),"related-feature-viewmodels")});this.scheduleRender()}_setupFeatureElementInfo(){const {headingLevel:a,visibleElements:b}=this,g=b.description&&this.description,l=b.title&&this.title;this._featureElementInfo?.set({description:g,title:l,headingLevel:a})}async _handleRelatedFeatureObserverChange(){this._unobserveRelatedFeatureObserver();const {state:a,showAllEnabled:b}=this.viewModel;await r.after(0);this._relatedFeatureIntersectionObserverNode&&
"ready"===a&&b&&this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode)}_relatedFeatureIntersectionObserverCreated(a){this._relatedFeatureIntersectionObserverNode=a}_unobserveRelatedFeatureObserver(){this._relatedFeatureIntersectionObserverNode&&this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode)}};e.__decorate([f.property()],c.prototype,"_relatedFeatureIntersectionObserverNode",void 0);e.__decorate([f.property({readOnly:!0})],
c.prototype,"displayShowAllButton",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"displayListItems",null);e.__decorate([f.property()],c.prototype,"description",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"featureCountDescription",null);e.__decorate([f.property()],c.prototype,"headingLevel",void 0);e.__decorate([f.property()],c.prototype,"title",null);e.__decorate([f.property({type:m})],c.prototype,"viewModel",void 0);e.__decorate([f.property(),n.messageBundle("esri/widgets/Feature/t9n/Feature")],
c.prototype,"messages",void 0);e.__decorate([f.property(),n.messageBundle("esri/t9n/common")],c.prototype,"messagesCommon",void 0);e.__decorate([f.property()],c.prototype,"visibleElements",void 0);e.__decorate([t.cast("visibleElements")],c.prototype,"castVisibleElements",null);return c=e.__decorate([u.subclass("esri.widgets.Feature.FeatureRelationship")],c)});