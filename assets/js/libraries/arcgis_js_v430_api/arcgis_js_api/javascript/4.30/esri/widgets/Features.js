// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../intl ../core/Collection ../core/Logger ../core/reactiveUtils ../core/throttle ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../geometry/support/geometryUtils ../support/actions/actionUtils ./Feature ./Spinner ./Widget ./Feature/resources ./Feature/support/FeatureContentMixin ./Features/css ./Features/FeaturesRelatedRecords ./Features/FeaturesViewModel ./Features/FeaturesVisibleElements ./Popup/actions ../chunks/componentsUtils ./support/globalCss ./support/Heading ./support/widgetUtils ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ../intl/substitute ../intl/number".split(" "),
function(q,e,d,D,v,p,w,f,R,S,E,F,x,G,H,I,J,K,l,L,y,z,A,M,u,N,T,B,O,h,t,C){d=class extends K.FeatureContentMixin(I){constructor(a,b){super(a,b);this._featureMenuIntersectionObserverCallback=([c])=>{c?.isIntersecting&&null!=this.viewModel.featurePage&&this.viewModel.featurePage++};this._featureMenuIntersectionObserver=new IntersectionObserver(this._featureMenuIntersectionObserverCallback,{root:window.document});this._feature=this._spinner=this._focusOn=this._featureMenuIntersectionObserverNode=null;
this._relatedRecordsFlowItems=new D;this._relatedRecordsWidget=new L({flowItems:this._relatedRecordsFlowItems});this._actionBarMenuNode=this._featureMenuViewportNode=this._rootFlowItemNode=null;this.featureNavigationTop=this.collapsed=!1;this.headerActions=new A.ActionsCollection;this.headingLevel=2;this.messagesCommon=this.messages=null;this.responsiveActionsEnabled=!1;this.viewModel=new y;this.visibleElements=new z;this._renderAction=(c,g)=>{const k=this._getActionTitle(c),{type:m,active:n,uid:r,
disabled:P,indicator:Q}=c;return c.visible?h.tsx("calcite-action",{active:"toggle"===m?c.value:!1,appearance:"solid",bind:this,"data-action-uid":r,disabled:P,icon:this._getActionIcon(c),indicator:Q,key:`action-${g}`,loading:n,onclick:this._triggerAction,scale:"s",text:k,title:this._hideActionText?k:void 0},this._getFallbackIcon(c)):null};this._openFeatureMenu=()=>{this.featureMenuOpen=!0;this._focusOn="menu-flow-item"};this._previousFeature=()=>{this.viewModel.selectedFeatureIndex--};this._nextFeature=
()=>{this.viewModel.selectedFeatureIndex++};this._handleFeatureMenuBack=()=>{this.featureMenuOpen&&(this._focusOn="root-flow-item",this.featureMenuOpen=!1)};this._focusFlowItemNode=c=>{this._focusOn===c&&requestAnimationFrame(async()=>{switch(c){case "menu-flow-item":await this._featureMenuViewportNode?.setFocus();break;case "root-flow-item":await this._rootFlowItemNode?.setFocus()}this._focusOn=null})};this._focusFlowItemNodeThrottled=w.throttle(this._focusFlowItemNode,50);this._displaySpinnerThrottled=
w.throttle(()=>this._displaySpinner(),0);this._addSelectedFeatureIndexHandle();this.addHandles([this._displaySpinnerThrottled,this._focusFlowItemNodeThrottled,p.watch(()=>this.viewModel?.active,()=>this._toggleScreenLocationEnabled()),p.watch(()=>this.viewModel?.active,c=>this._relatedRecordsWidget.closed=!c),p.watch(()=>this.visibleElements?.closeButton,c=>this._relatedRecordsWidget.closable=c),p.watch(()=>this.visibleElements?.spinner,c=>this._spinnerEnabledChange(c)),p.watch(()=>this.viewModel?.view,
(c,g)=>this._viewChange(c,g)),p.watch(()=>this.viewModel?.view?.ready,(c,g)=>this._viewReadyChange(c??!1,g??!1)),p.watch(()=>[this.viewModel?.waitingForResult,this.viewModel?.location],()=>{this._hideSpinner();this._displaySpinnerThrottled()}),p.watch(()=>this.viewModel?.screenLocation,()=>this._closeOpenActionMenu()),p.watch(()=>this.selectedFeatureWidget,()=>this._destroyRelatedRecordsFlowItemWidgets()),p.watch(()=>{const c=this.selectedFeatureWidget?.viewModel;return[c?.title,c?.state]},()=>this._setTitleFromFeatureWidget()),
p.watch(()=>{const c=this.selectedFeatureWidget?.viewModel;return[c?.content,c?.state]},()=>this._setContentFromFeatureWidget()),p.watch(()=>this.viewModel?.featureViewModels,()=>this._featureMenuViewportScrollTop()),this._relatedRecordsWidget.on("close",()=>this.close()),this._relatedRecordsWidget.on("exit",()=>this._destroyRelatedRecordsFlowItemWidgets()),this._relatedRecordsWidget.on("open-related-feature",({feature:c})=>this._openRelatedFeature(c))])}loadDependencies(){return M.loadCalciteComponents({action:()=>
new Promise((a,b)=>q(["../chunks/calcite-action"],a,b)),"action-bar":()=>new Promise((a,b)=>q(["../chunks/calcite-action-bar"],a,b)),"action-group":()=>new Promise((a,b)=>q(["../chunks/calcite-action-group"],a,b)),button:()=>new Promise((a,b)=>q(["../chunks/calcite-button"],a,b)),flow:()=>new Promise((a,b)=>q(["../chunks/calcite-flow"],a,b)),"flow-item":()=>new Promise((a,b)=>q(["../chunks/calcite-flow-item"],a,b)),list:()=>new Promise((a,b)=>q(["../chunks/calcite-list"],a,b)),"list-item":()=>new Promise((a,
b)=>q(["../chunks/calcite-list-item"],a,b)),"list-item-group":()=>new Promise((a,b)=>q(["../chunks/calcite-list-item-group"],a,b)),loader:()=>new Promise((a,b)=>q(["../chunks/calcite-loader"],a,b))})}destroy(){this._destroyRelatedRecordsFlowItemWidgets();this._destroySelectedFeatureWidget();this._destroySpinner();this._unobserveFeatureMenuObserver();this._featureMenuIntersectionObserver?.disconnect();this._relatedRecordsWidget?.destroy()}get _hideActionText(){if(!this.responsiveActionsEnabled)return!1;
const a=this.view?.widthBreakpoint;return"xsmall"===a||"small"===a||"medium"===a}get _featureNavigationVisible(){return this.viewModel.active&&1<this.viewModel.featureCount&&this.visibleElements.featureNavigation}get _isCollapsed(){return this._collapseEnabled&&this.collapsed}get _collapseEnabled(){return this.visibleElements.collapseButton&&!!this.title&&!!this.content}get active(){return this.viewModel.active}get content(){return this.viewModel.content}set content(a){this.viewModel.content=a}get icon(){return null}get featureMenuOpen(){return this.viewModel.featureMenuOpen}set featureMenuOpen(a){this.viewModel.featureMenuOpen=
a}get features(){return this.viewModel.features}set features(a){this.viewModel.features=a}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(a){this.viewModel.goToOverride=a}get location(){return this.viewModel.location}set location(a){this.viewModel.location=a}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get map(){return this.viewModel.map}set map(a){this.viewModel.map=a}get promises(){return this.viewModel.promises}set promises(a){this.viewModel.promises=
a}get selectedFeature(){return this.viewModel.selectedFeature}get selectedFeatureIndex(){return this.viewModel.selectedFeatureIndex}set selectedFeatureIndex(a){this.viewModel.selectedFeatureIndex=a}get selectedFeatureWidget(){const {_feature:a,headingLevel:b,_relatedRecordsFlowItems:c,timeZone:g,spatialReference:k,map:m}=this,{selectedFeatureViewModel:n}=this.viewModel,r={title:!1};if(!n)return null;a?(a.viewModel=n,a.visibleElements=r):this._feature=new G({flowItems:c,headingLevel:b+1,timeZone:g,
spatialReference:k,map:m,viewModel:n,visibleElements:r});return this._feature}get spatialReference(){return this.viewModel.spatialReference}set spatialReference(a){this.viewModel.spatialReference=a}get title(){return this.viewModel.title}set title(a){this.viewModel.title=a}get timeZone(){return this.viewModel.timeZone}set timeZone(a){this.viewModel.timeZone=a}get updateLocationEnabled(){return this.viewModel.updateLocationEnabled}set updateLocationEnabled(a){this.viewModel.updateLocationEnabled=a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=
a}get visible(){return this.viewModel.visible}set visible(a){this.viewModel.visible=a}blur(){const {active:a}=this.viewModel;a?this._rootFlowItemNode?.blur():v.getLogger(this).warn("Features can only be blurred when currently active.")}clear(){return this.viewModel.clear()}close(){this.viewModel.visible=!1}fetchFeatures(a,b){return this.viewModel.fetchFeatures(a,b)}focus(){const {active:a}=this.viewModel;a?this._setFocusOn():v.getLogger(this).warn("Features can only be focused when currently active.")}next(){return this.viewModel.next()}open(a){this.removeHandles("selected-index");
this.set({collapsed:a?.collapsed??!1});this.viewModel.open(a);this.addHandles(p.when(()=>!this.viewModel.waitingForResult,()=>this._addSelectedFeatureIndexHandle(),{once:!0}))}previous(){return this.viewModel.previous()}triggerAction(a){return this.viewModel.triggerAction(a)}render(){return h.tsx("div",{bind:this,class:this.classes(l.css.base,u.globalCss.widget,u.globalCss.panel),onkeydown:this._onMainKeydown},this._renderHeader(),this._renderContentContainer())}_renderFeatureNavigation(){return[this._renderPagination(),
this._renderFeatureMenuButton()]}_renderHeader(){return!this.featureMenuOpen&&this.featureNavigationTop&&this._featureNavigationVisible?h.tsx("div",{class:l.css.header,key:"header-actions"},this._renderFeatureNavigation()):null}_renderFooter(){return this.featureMenuOpen||this.featureNavigationTop||!this._featureNavigationVisible?null:h.tsx("div",{class:l.css.footer,key:"footer-actions",slot:"footer"},this._renderFeatureNavigation())}_renderFeatureMenuButton(){const {messages:a,viewModel:b}=this,
{featureCount:c,selectedFeatureIndex:g,pendingPromisesCount:k}=b;return h.tsx("calcite-action",{appearance:"solid",bind:this,icon:"list",key:"feature-menu-button",label:a.selectFeature,loading:0<k,onclick:this._openFeatureMenu,scale:"s",text:t.substitute(a.pageText,{index:C.formatNumber(g+1),total:C.formatNumber(c)}),textEnabled:!0,title:a.selectFeature})}_renderPagination(){const {previous:a,next:b}=this.messagesCommon.pagination;return h.tsx("calcite-action-bar",{class:l.css.paginationActionBar,
expandDisabled:!0,key:"pagination-action-bar",layout:"horizontal",overflowActionsDisabled:!0,scale:"s"},h.tsx("calcite-action-group",{scale:"s"},h.tsx("calcite-action",{appearance:"solid",class:l.css.paginationPrevious,icon:"chevron-left",iconFlipRtl:!0,label:a,onclick:this._previousFeature,scale:"s",text:a,title:a}),h.tsx("calcite-action",{appearance:"solid",icon:"chevron-right",iconFlipRtl:!0,label:b,onclick:this._nextFeature,scale:"s",text:b,title:b})))}_renderFeatureMenuItem(a){const {selectedFeatureViewModel:b,
featureViewModels:c}=this.viewModel,g=a===b,k=c.indexOf(a);return h.tsx("calcite-list-item",{bind:this,"data-feature-index":k,key:`feature-menu-item-${a.uid}`,onblur:this._removeActiveFeature,onfocus:this._setActiveFeature,onmouseleave:this._removeActiveFeature,onmouseover:this._setActiveFeature,selected:g,onCalciteListItemSelect:this._selectFeature},h.tsx("span",{innerHTML:a.title||this.messagesCommon.untitled,slot:"content"}))}_groupResultsByLayer(){const {featureViewModels:a}=this.viewModel,b=
new Map;a.forEach(c=>{var g=c?.graphic;if(g){var {layer:k,sourceLayer:m}=g;g=(k?.declaredClass.startsWith("esri.layers.")??!1?k:null)||(m?.declaredClass.startsWith("esri.layers.")??!1?m:null);var n=b.get(g)??[];b.set(g,[...n,c])}});return b}_renderFeatureMenu(){const {featureViewModels:a}=this.viewModel,b=this._groupResultsByLayer();return a.length?h.tsx("calcite-list",{selectionAppearance:"icon",selectionMode:"single"},Array.from(b.keys(),c=>{const g=b.get(c)?.map(m=>this._renderFeatureMenuItem(m)),
k=c?c.title??this.messagesCommon.untitled:null;return this.visibleElements.featureListLayerTitle&&null!==k?h.tsx("calcite-list-item-group",{heading:k,key:c?.uid||"map-graphics"},g):g})):null}_renderHeaderAction(a,b){const c=a.title||"";return a.visible?h.tsx("calcite-action",{active:"toggle"===a.type?a.value:!1,appearance:"solid",bind:this,"data-action-uid":a.uid,disabled:a.disabled,icon:a.icon??void 0,indicator:a.indicator,key:`header-action-${b}`,loading:a.active,onclick:this._triggerHeaderAction,
slot:"header-actions-end",text:c,title:c}):null}_renderHeaderActions(){return this.headerActions.map((a,b)=>this._renderHeaderAction(a,b)).toArray()}_renderContentFeature(){const {headingLevel:a,visibleElements:b,_isCollapsed:c,_collapseEnabled:g,featureNavigationTop:k}=this,{title:m,active:n}=this.viewModel,r=b.heading&&m?m:"";return h.tsx("calcite-flow-item",{afterCreate:this._storeRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,class:this.classes({[l.css.contentFeature]:!0,[l.css.flowItemCollapsed]:c}),
closable:b.closeButton,closed:!n,collapsed:c,collapseDirection:k?"down":"up",collapsible:g,headingLevel:a,key:"root-flow-item",onCalciteFlowItemClose:this.close,onCalciteFlowItemToggle:this._handleCollapseToggle},r?h.tsx(N.Heading,{class:this.classes(l.css.featuresHeading,u.globalCss.heading),innerHTML:r,key:"header-content",level:this.headingLevel,slot:"header-content"}):null,this._renderHeaderActions(),this._renderActionBar(),c?null:h.tsx("div",{class:this.classes(l.css.container,l.css.contentContainer)},
this._renderContent()),this._renderFooter())}_renderFeatureMenuContainer(){const {viewModel:a,featureMenuOpen:b,messages:c,messagesCommon:g}=this,{active:k,featureViewModels:m,pendingPromisesCount:n}=a;return b?h.tsx("calcite-flow-item",{afterCreate:this._storeFeatureMenuFlowItemNode,afterUpdate:this._focusFeatureMenuFlowItemNode,bind:this,closable:!1,closed:!k,description:t.substitute(c.total,{total:m.length}),heading:c.selectFeature,key:"feature-menu",loading:a.waitingForContents,onCalciteFlowItemBack:r=>
{r.preventDefault();this._handleFeatureMenuBack()}},0<n?h.tsx("calcite-loader",{class:l.css.loader,inline:!0,key:"feature-menu-loader",label:g.loading,slot:"header-actions-end"}):null,h.tsx("div",{class:l.css.container},this._renderFeatureMenu()),h.tsx("div",{afterCreate:this._featureMenuIntersectionObserverCreated,bind:this,class:l.css.featureMenuObserver}),h.tsx("calcite-button",{appearance:"transparent",onclick:this._handleFeatureMenuBack,slot:"footer-actions",width:"full"},g.back)):null}_renderContentContainer(){const a=
[this._renderContentFeature(),this._renderFeatureMenuContainer(),this._relatedRecordsWidget.render()];return this.visibleElements.flow?h.tsx("calcite-flow",{key:"content-container"},a):a}_getFallbackIcon(a){const {className:b,icon:c}=a;if(c)return null;a=x.substituteActionImage({action:a,feature:this.selectedFeature});const g={[l.css.icon]:!!b,[l.css.actionImage]:!!a};b&&(g[b]=!0);return a||b?h.tsx("span",{"aria-hidden":"true",class:this.classes(l.css.icon,g),key:"icon",styles:x.getActionStyles(a)}):
null}_renderActionBar(){return!this._isCollapsed&&this.visibleElements.actionBar&&this.viewModel.allActions?.length?h.tsx("calcite-action-bar",{expandDisabled:!0,expanded:!this._hideActionText,key:"header-action-bar",scale:"s",slot:"action-bar"},h.tsx("calcite-action-group",{afterCreate:a=>this._actionBarMenuNode=a,overlayPositioning:"fixed",scale:"s"},this._renderActions())):null}_renderActions(){return this.viewModel.allActions.toArray().map(this._renderAction)}_renderContent(){const a=this.viewModel?.content;
return a?"string"===typeof a?h.tsx("div",{class:J.css.contentNode,innerHTML:a,key:a}):this.renderNodeContent(a):null}_setFocusOn(){this.renderNow();requestAnimationFrame(()=>{this._focusOn=this.featureMenuOpen?"menu-flow-item":"root-flow-item"})}_handleCollapseToggle(){this.collapsed=!this.collapsed}async _openRelatedFeature(a){await a.viewModel.updateGeometry();a=a.graphic;var b=a?.geometry;null!=b&&null!=a&&(this._destroyRelatedRecordsFlowItemWidgets(),await this.viewModel.zoomTo({target:b}),b=
F.getPointFromGeometry(b),this.open({features:[a],location:null!=b?b:void 0}))}_focusRootFlowItemNode(){this._focusFlowItemNodeThrottled("root-flow-item")}_focusFeatureMenuFlowItemNode(){this._focusFlowItemNodeThrottled("menu-flow-item")}_storeRootFlowItemNode(a){this._rootFlowItemNode=a;this._focusFlowItemNodeThrottled("root-flow-item")}_storeFeatureMenuFlowItemNode(a){this._featureMenuViewportNode=a;this._focusFlowItemNodeThrottled("menu-flow-item")}_setActiveFeature(a){const {viewModel:b}=this;
a=a.currentTarget["data-feature-index"];b.activeFeature=b.features?.[a]||null}_removeActiveFeature(){this.viewModel.activeFeature=null}_selectFeature(a){a=a.currentTarget["data-feature-index"];isNaN(a)||(this.viewModel.selectedFeatureIndex=a);this._handleFeatureMenuBack()}_unobserveFeatureMenuObserver(){this._featureMenuIntersectionObserverNode&&this._featureMenuIntersectionObserver.unobserve(this._featureMenuIntersectionObserverNode)}_featureMenuIntersectionObserverCreated(a){this._unobserveFeatureMenuObserver();
this._featureMenuIntersectionObserver.observe(a);this._featureMenuIntersectionObserverNode=a}_getActionIcon(a){if(a.icon)return a.icon;if(!a.image&&!a.className)return"question"}_getActionTitle(a){const {messages:b,selectedFeature:c,messagesCommon:g}=this,{id:k}=a,m=c?.attributes,n=a.title??"";return(a="zoom-to-feature"===k?t.substitute(n,{messages:b}):"remove-selected-feature"===k?t.substitute(n,{messages:g}):"zoom-to-clustered-features"===k?t.substitute(n,{messages:b}):"browse-clustered-features"===
k?t.substitute(n,{messages:b}):a.title)&&m?t.substitute(a,m):a??""}_onMainKeydown(a){const {key:b}=a;"ArrowLeft"===b&&(a.stopPropagation(),this._handleFeatureMenuBack(),this.previous());"ArrowRight"===b&&(a.stopPropagation(),this._handleFeatureMenuBack(),this.next())}_featureMenuViewportScrollTop(){this._featureMenuViewportNode&&this._featureMenuViewportNode.scrollContentTo({top:0})}_setContentFromFeatureWidget(){const {selectedFeatureWidget:a}=this;a&&(this.viewModel.content=a)}_setTitleFromFeatureWidget(){const {selectedFeatureWidget:a,
messagesCommon:b}=this,c=a?.viewModel;a&&(this.viewModel.title="error"===c?.state?b?.errorMessage:c?.title||"")}_addSelectedFeatureIndexHandle(){const a=p.watch(()=>this.viewModel?.selectedFeatureIndex,(b,c)=>this._selectedFeatureIndexUpdated(b,c));this.addHandles(a,"selected-index")}_selectedFeatureIndexUpdated(a,b){const {featureCount:c}=this.viewModel;c&&a!==b&&-1!==a&&(this._destroyRelatedRecordsFlowItemWidgets(),this._rootFlowItemNode&&this._rootFlowItemNode.scrollContentTo({top:0}))}_triggerHeaderAction(a){a=
a.currentTarget;if(!a.disabled){var b=a.dataset.actionUid;(a=this.headerActions.find(({uid:c})=>c===b))&&!a.disabled&&("toggle"===a?.type&&(a.value=!a.value),this.emit("trigger-header-action",{action:a}))}}_triggerAction(a){a=a.currentTarget;if(!a.disabled){var b=a.dataset.actionUid,{allActions:c}=this.viewModel;a=c.findIndex(g=>g.uid===b);(c=c.at(a))&&"toggle"===c.type&&(c.value=!c.value);this.viewModel.triggerAction(a)}}_createSpinner(a){a&&(this._spinner=new H({view:a}),a.ui.add(this._spinner,
{key:"features-spinner",position:"manual",internal:!0}))}_wireUpView(a){this._destroySpinner();a&&this.visibleElements?.spinner&&this._createSpinner(a)}_hideSpinner(){const {_spinner:a}=this;a&&(a.location=null,a.hide())}_viewReadyChange(a,b){a?this._wireUpView(this.viewModel?.view):b&&this.viewModel.clear()}_viewChange(a,b){a&&b&&this.viewModel.clear()}_destroySelectedFeatureWidget(){const {_feature:a}=this;a&&(a.viewModel=null,!a.destroyed&&a.destroy());this._feature=null}_closeOpenActionMenu(){const {_actionBarMenuNode:a}=
this;a&&(a.menuOpen=!1)}_destroyRelatedRecordsFlowItemWidgets(){this._relatedRecordsFlowItems.drain(a=>{"showAllEnabled"in a.viewModel&&(a.viewModel.showAllEnabled=!1);a.viewModel=null;a.destroy()})}_toggleScreenLocationEnabled(){const {viewModel:a}=this;a&&(a.screenLocationEnabled=a.active)}_displaySpinner(){const {_spinner:a}=this;if(a){var {location:b,waitingForResult:c}=this.viewModel;c&&b?a.show({location:b}):a.hide()}}_destroySpinner(){const {_spinner:a,view:b}=this;a&&(b?.ui?.remove(a,"features-spinner"),
a.destroy(),this._spinner=null)}_spinnerEnabledChange(a){this._destroySpinner();a&&this._createSpinner(this.viewModel?.view)}};e.__decorate([f.property()],d.prototype,"_focusOn",void 0);e.__decorate([f.property()],d.prototype,"_relatedRecordsFlowItems",void 0);e.__decorate([f.property()],d.prototype,"_hideActionText",null);e.__decorate([f.property()],d.prototype,"_featureNavigationVisible",null);e.__decorate([f.property()],d.prototype,"_isCollapsed",null);e.__decorate([f.property()],d.prototype,"_collapseEnabled",
null);e.__decorate([f.property({readOnly:!0})],d.prototype,"active",null);e.__decorate([f.property()],d.prototype,"collapsed",void 0);e.__decorate([f.property()],d.prototype,"content",null);e.__decorate([f.property()],d.prototype,"icon",null);e.__decorate([f.property()],d.prototype,"featureMenuOpen",null);e.__decorate([f.property()],d.prototype,"featureNavigationTop",void 0);e.__decorate([f.property()],d.prototype,"features",null);e.__decorate([f.property()],d.prototype,"goToOverride",null);e.__decorate([f.property({type:A.ActionsCollection})],
d.prototype,"headerActions",void 0);e.__decorate([f.property()],d.prototype,"headingLevel",void 0);e.__decorate([f.property()],d.prototype,"location",null);e.__decorate([f.property()],d.prototype,"label",null);e.__decorate([f.property()],d.prototype,"map",null);e.__decorate([f.property(),B.messageBundle("esri/widgets/Features/t9n/Features")],d.prototype,"messages",void 0);e.__decorate([f.property(),B.messageBundle("esri/t9n/common")],d.prototype,"messagesCommon",void 0);e.__decorate([f.property()],
d.prototype,"promises",null);e.__decorate([f.property()],d.prototype,"responsiveActionsEnabled",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"selectedFeature",null);e.__decorate([f.property()],d.prototype,"selectedFeatureIndex",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"selectedFeatureWidget",null);e.__decorate([f.property()],d.prototype,"spatialReference",null);e.__decorate([f.property()],d.prototype,"title",null);e.__decorate([f.property()],d.prototype,"timeZone",
null);e.__decorate([f.property()],d.prototype,"updateLocationEnabled",null);e.__decorate([f.property()],d.prototype,"view",null);e.__decorate([f.property({type:y}),O.vmEvent(["triggerAction","trigger-action"])],d.prototype,"viewModel",void 0);e.__decorate([f.property({type:z,nonNullable:!0})],d.prototype,"visibleElements",void 0);e.__decorate([f.property()],d.prototype,"visible",null);return d=e.__decorate([E.subclass("esri.widgets.Features")],d)});