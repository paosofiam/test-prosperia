// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Accessor ../../core/asyncUtils ../../core/has ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(c,d,r,p,u,m,h,n,k,e,v,t){function q(a){return null!=a&&a.state>=l.RUNNING?(a.abort(),null):a}var l;(function(a){a[a.PENDING=0]="PENDING";a[a.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY";
a[a.RUNNING=2]="RUNNING"})(l||={});c.AnalysisViewModel=class extends r{constructor(a={}){super(a);this._forceInteractiveHandle=this._reconnectViewTask=this.analysisView=this.view=null;this._parentChangeFromReconnect=!1;this._startUserOperation=null;const b=a?.analysis;null!=b?this.analysis=b:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0));null!=a?.visible&&(this.visible=a.visible)}normalizeCtorArgs(a){const {analysis:b,...f}=a;return f}initialize(){this.addHandles([k.watch(()=>
({readyAndNotSupported:null!=this.view&&this.view.ready&&!this.supported}),({readyAndNotSupported:a})=>{a&&m.getLogger(this).errorOnce(this.unsupportedErrorMessage)},k.syncAndInitial),k.watch(()=>this.analysis?.parent,a=>{this._parentChangeFromReconnect||a===this.view||this._set("isAnalysisOwner",!1);a=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1;a&&this._scheduleViewReconnect()},k.sync),k.watch(()=>({view:this.view,ready:null!=this.view&&this.view.ready,supported:this.supported}),
({view:a},b)=>{b=b?.view;a!==b&&(this._startUserOperation=h.abortMaybe(this._startUserOperation),this._disconnectFromView(b));this._scheduleViewReconnect()},k.syncAndInitial)])}destroy(){this._reconnectViewTask=h.abortMaybe(this._reconnectViewTask);this._startUserOperation=h.abortMaybe(this._startUserOperation);null!=this.analysisView&&(this.analysisView.visible=void 0);this._disconnectFromView(this.view);this._set("view",null);null!=this.analysis&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",
null))}get supported(){return null==this.view||this.view.type===this.supportedViewType}set visible(a){this._set("visible",a);null!=this.analysisView&&(this.analysisView.visible=a)}get active(){return null!=this.tool&&this.tool.active}get disabled(){return null==this.view||!this.view.ready||!this.supported}set analysis(a){a!==this._get("analysis")&&(this._startUserOperation=h.abortMaybe(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(a),this._scheduleViewReconnect())}get ready(){return null!=
this.analysisView&&!this.connectingToView}get connectingToView(){return null!=this._reconnectViewTask}get isAnalysisOwner(){return this._get("isAnalysisOwner")}get tool(){return null!=this.analysisView?this.analysisView.tool:null}clear(){this._startUserOperation=h.abortMaybe(this._startUserOperation);this._resetInteractiveCreationState();null!=this.tool&&null!=this.view&&this.view.activeTool===this.tool&&(this.view.activeTool=null)}async start(){if(this.visible){this.clear();var a={task:null,abort:null,
state:l.PENDING},b=p.createTask(async f=>{a.state=l.WAIT_FOR_VIEW_READY;await k.whenOnce(()=>this.ready,f);a.state=l.RUNNING;if(null!=this.analysisView&&null!=this.view){var g=this.analysisView.tool;null!=g&&(this.view.activeTool=g,k.when(()=>g.created,()=>{g.active&&null!=this.view&&(this.view.activeTool=null)},{initial:!0,once:!0}))}});a.task=b;a.abort=()=>b.abort();this._startUserOperation=a;return b.promise}m.getLogger(this).warn("Cannot start analysis when not visible")}onConnectToAnalysisView(a){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=
h.abortMaybe(this._reconnectViewTask);const a=p.createTask(async b=>{try{await this._reconnectView(b)}catch(f){n.throwIfAborted(b);if(n.isAbortError(f))throw f;m.getLogger(this).warn("Failed to use analysis in view model",f)}finally{a===this._reconnectViewTask&&(this._reconnectViewTask=null)}});this._reconnectViewTask=a}async _reconnectView(a){const {view:b}=this,f=null!=b&&b.ready&&this.supported,g=this.analysis;this._startUserOperation=q(this._startUserOperation);this._disconnectFromView(b);if(f&&
null!=b&&null!=g){if(this.isAnalysisOwner){if(null!=g.parent){m.getLogger(this).errorOnce("expected owned analysis to have null parent when connecting to view");return}this._parentChangeFromReconnect=!0;b.analyses.add(g)}this.analysisView=await b.whenAnalysisView(g);n.isAborted(a)?this._startUserOperation=q(this._startUserOperation):(this.analysisView.visible=this.visible,this._forceInteractiveHandle=this.analysisView.forceInteractiveForViewModel(),this.addHandles(this._forceInteractiveHandle),this.onConnectToAnalysisView(this.analysisView))}}_disconnectFromView(a){null!=
a&&this.isAnalysisOwner&&a.analyses.includes(this.analysis)&&(this._parentChangeFromReconnect=!0,this.analysis.clear(),a.analyses.remove(this.analysis));this.onDisconnectFromAnalysisView();this._forceInteractiveHandle=h.removeMaybe(this._forceInteractiveHandle);this.analysisView=null}_setExternalAnalysis(a){null==this.analysisView||this.isAnalysisOwner||(this.analysisView.visible=void 0,this._forceInteractiveHandle=h.removeMaybe(this._forceInteractiveHandle));this.analysisView=null;this._set("isAnalysisOwner",
!1);this._set("analysis",a);this._parentChangeFromReconnect=!1}_resetInteractiveCreationState(){this.analysis.clear();null!=this.tool&&this.tool.resetCreated()}get testInfo(){}};d.__decorate([e.property()],c.AnalysisViewModel.prototype,"supported",null);d.__decorate([e.property()],c.AnalysisViewModel.prototype,"view",void 0);d.__decorate([e.property({type:Boolean,value:!0})],c.AnalysisViewModel.prototype,"visible",null);d.__decorate([e.property()],c.AnalysisViewModel.prototype,"active",null);d.__decorate([e.property()],
c.AnalysisViewModel.prototype,"disabled",null);d.__decorate([e.property({nonNullable:!0})],c.AnalysisViewModel.prototype,"analysis",null);d.__decorate([e.property()],c.AnalysisViewModel.prototype,"analysisView",void 0);d.__decorate([e.property()],c.AnalysisViewModel.prototype,"ready",null);d.__decorate([e.property()],c.AnalysisViewModel.prototype,"connectingToView",null);d.__decorate([e.property({readOnly:!0})],c.AnalysisViewModel.prototype,"isAnalysisOwner",null);d.__decorate([e.property()],c.AnalysisViewModel.prototype,
"_reconnectViewTask",void 0);d.__decorate([e.property()],c.AnalysisViewModel.prototype,"_forceInteractiveHandle",void 0);d.__decorate([e.property()],c.AnalysisViewModel.prototype,"tool",null);c.AnalysisViewModel=d.__decorate([t.subclass("esri.widgets.support.AnalysisViewModel")],c.AnalysisViewModel);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});