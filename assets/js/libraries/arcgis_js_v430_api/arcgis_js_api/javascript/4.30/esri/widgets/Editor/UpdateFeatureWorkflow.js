// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Error ../../core/handleUtils ../../core/has ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../layers/GraphicsLayer ../../support/elevationInfoUtils ../../views/support/layerViewUtils ./UpdateFeatureWorkflowData ./UpdateRecordWorkflow ./workflowUtils ../Sketch/SketchViewModel".split(" "),function(g,r,x,y,G,z,t,H,I,A,B,C,D,E,w,k,F){var u;const b=
{...w.handleKeys,highlights:Symbol(),sketchGraphics:Symbol(),sketchViewModel:Symbol()};g.UpdateFeatureWorkflow=u=class extends w.UpdateRecordWorkflow{constructor(a){super(a);this.type="update-feature";this._sketchViewModel=this._sketchGraphicClone=this._layerViewEditSession=null;this._webStyleCache=new Map}destroy(){this._layerViewEditSession?.rollback()}async commit(){this.removeHandles(b.sketchGraphics);try{const a=this.data.edits.stagedForDelete;await super.commit();const c=this._layerViewEditSession;
a?c?.rollback():c?.commit()}catch(a){throw await this._configureSketchViewModel(),new x("editor-workflow:failed-to-commit","An error occurred when sending the updates to the service",{error:a});}}async start(){await super.start();return await this._initializeSketchViewModel()}_initializeFeatureFormViewModel(){super._initializeFeatureFormViewModel();this.addHandles(this._featureFormViewModel.on("value-change",a=>{this._layerViewEditSession?.setAttribute(a.fieldName,a.value)}))}_configureHighlight(){const {edits:a,
layerView:c}=this.data;D.highlightsSupported(c)&&this.addHandles(c.highlight(a.feature),b.highlights)}async _configureSketchViewModel(){const a=this._sketchViewModel;if(a){var {data:c,_featureFormViewModel:e,_sketchGraphicClone:l}=this,{edits:m,viewModel:f}=c,d=m.feature,{view:n}=f,p=k.getVisualVariableAttributes(d);d=await k.setUpGeometryUpdate({feature:d,featureClone:l,visualVariableAttributes:p,sketchViewModel:a,view:n,onUpdate:({geometry:h,attributes:v},q)=>{m.updateAttributes(v);m.updateGeometry(h);
e.feature.geometry=h;null!=p.rotation&&({field:h}=p.rotation,e.setValue(h,v[h]));null!=p.size&&({field:h}=p.size,e.setValue(h,v[h]));("undo"===q.type||"redo"===q.type||"update"===q.type&&null!=q.toolEventInfo&&k.isTerminalUpdateEventType(q.toolEventInfo.type))&&e.notifyFeatureGeometryChanged()},webStyleCache:this._webStyleCache});this.addHandles(d,b.sketchGraphics);a.addHandles(d)}}async _initializeSketchViewModel(){const {data:a,_sketchGraphicClone:c}=this,e=a.edits.feature,{capabilities:l,layer:m}=
a.editorItem,{view:f}=a.viewModel;this.removeHandles([b.highlights,b.sketchGraphics,b.sketchViewModel]);if(!l.update.geometry||"3d"===f?.type&&C.hasEffectiveFeatureExpressionInfo(m.elevationInfo))return{enter:async()=>{this.hasHandles(b.highlights)||this._configureHighlight()},exit:()=>this.removeHandles([b.highlights])};const d=new B({elevationInfo:m.elevationInfo,internal:!0,listMode:"hide"}),n=new F({allowDeleteKey:!1,layer:d,sketchOptions:a.sketchOptions,snappingManager:a.snappingManager,updateOnGraphicClick:!1,
view:f});this._sketchViewModel=n;f?.map.add(d);this.addHandles(y.makeHandle(()=>{f?.destroyed||f?.map.remove(d);d.destroy();this._sketchViewModel=z.destroyMaybe(n)}),b.sketchViewModel);await k.updateGraphicSymbolWhenRequired(c,this._webStyleCache,"2d"===f?.type?f.scale:null);this.addHandles([await k.swapForEditingSession(n,e,c)]);return{enter:async()=>{this.hasHandles(b.sketchGraphics)||await this._configureSketchViewModel()},exit:()=>this.removeHandles([b.sketchGraphics]),viewModel:n}}_onFullFeatureLoaded(a){super._onFullFeatureLoaded(a);
const c=this._sketchGraphicClone=k.cloneGraphicExceptMesh(a),{edits:e,layerView:l}=this.data;e.updateGeometry(a.geometry);e.trackChanges();k.canCreateInteractiveEditSession(l)&&(this._layerViewEditSession=l.createInteractiveEditSession(c))}static async create(a){a=new u({data:await E.create(a),onCommit:this._onCommitFactory(a.applyEdits)});a._set("steps",this._createWorkflowSteps(a));return a}get test(){}};r.__decorate([t.property()],g.UpdateFeatureWorkflow.prototype,"_layerViewEditSession",void 0);
r.__decorate([t.property()],g.UpdateFeatureWorkflow.prototype,"_sketchGraphicClone",void 0);r.__decorate([t.property()],g.UpdateFeatureWorkflow.prototype,"_sketchViewModel",void 0);g.UpdateFeatureWorkflow=u=r.__decorate([A.subclass("esri.widgets.Editor.UpdateFeatureWorkflow")],g.UpdateFeatureWorkflow);g.handleKeys=b;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});