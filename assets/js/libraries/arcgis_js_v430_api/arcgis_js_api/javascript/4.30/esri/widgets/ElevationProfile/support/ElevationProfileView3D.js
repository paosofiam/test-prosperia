// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ./constants ./HoveredPoints ./InputRepresentation3D ./ProfileLines3D".split(" "),function(k,m,f,b,l,n,p,q){class r{constructor(d,c){this._handles=new m;this._inputRepresentation=new p.InputRepresentation3D({view:d});this._hoveredPoints=new n.HoveredPoints({view:d});this._profileLines=new q.ProfileLines3D({view:d});this._handles.add([b.watch(()=>c.viewModel.hoveredPoints,a=>this._hoveredPoints.update(a),b.syncAndInitial),
b.watch(()=>{const {state:a,editable:h,highlightEnabled:e,viewModel:t}=c,g=t.input;g&&(g.commitProperty("geometry"),g.commitProperty("layer"));return{input:g,state:a,editable:h,highlightEnabled:e}},a=>this._updateInputRepresentation(a),b.syncAndInitial),b.watch(()=>c.viewModel.chartData,a=>this._profileLines.update(a),b.syncAndInitial),b.watch(()=>c.viewModel.input?.geometry,()=>{this._profileLines.remove()},b.syncAndInitial)])}destroy(){this._handles=f.destroyMaybe(this._handles);this._inputRepresentation=
f.destroyMaybe(this._inputRepresentation);this._hoveredPoints=f.destroyMaybe(this._hoveredPoints);this._profileLines=f.destroyMaybe(this._profileLines)}_updateInputRepresentation({input:d,state:c,editable:a,highlightEnabled:h}){const e=this._inputRepresentation;if(!h)return e.remove();c===l.ElevationProfileState.Selected?e.showHighlight(d):c!==l.ElevationProfileState.Created||a?e.remove():e.showReshaping(d)}}k.ElevationProfileView3D=r;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});