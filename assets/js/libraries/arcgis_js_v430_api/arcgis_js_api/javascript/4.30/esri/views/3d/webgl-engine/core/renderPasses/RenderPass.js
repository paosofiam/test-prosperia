// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/PooledArray","../../lib/TransparencyPassType","../../../../webgl/enums"],function(h,r,t,n){h.RenderPassSorting=void 0;(function(a){a[a.FrontToBack=0]="FrontToBack";a[a.BackToFront=1]="BackToFront"})(h.RenderPassSorting||(h.RenderPassSorting={}));class u{constructor(a,b,e=h.RenderPassSorting.FrontToBack){this._rctx=a;this._techniques=b;this._sorting=e;this._draws=new r({initialSize:32,allocator:f=>f||{material:null,geometry:null,geometryRanges:null,bindDrawParams:null,
depthSquaredHint:0,indexType:0}});this._previouslyBoundDraw=new Map}submitDraw(a,b,e,f){const g=this._draws.pushNew();g.geometry=b;g.geometryRanges=e;g.material=a;g.depthSquaredHint=f;g.indexType=(b.indexed?b.vao.indexBuffer.indexType:null)??0}prepare(a,b){return this._draws.map(e=>e.material.prepareTechnique(this._techniques,a,b,e.geometry.parameters))}dispatch(a,b,e){const f=this._rctx;this._previouslyBoundDraw.clear();let g=null;const v=this._draws.length;for(let k=0;k<v;k++){var c=e[k];if(c!==
g||c.configuration.transparencyPassType!==t.TransparencyPassType.NONE)f.bindTechnique(c,b,a),g=c;var d=this._draws.data[k];const p=d.geometry;f.bindVAO(p.vao);this._previouslyBoundDraw.get(c)!==d.material&&(c.program.bindDraw(d.material,b,a),this._previouslyBoundDraw.set(c,d.material));c=d.geometryRanges;const q=c.length;if(0!==d.indexType){const w=l.get(d.indexType);for(let m=0;m<q;m+=2)f.drawElements(p.primitiveType,c[m+1],d.indexType,c[m]*w)}else for(d=0;d<q;d+=2)f.drawArrays(p.primitiveType,c[d],
c[d+1])}}prepareSubmit(){this._draws.clear()}finishSubmit(){const a=this._sorting===h.RenderPassSorting.FrontToBack?1:-1;this._draws.sort((b,e)=>{const f=a*(b.depthSquaredHint-e.depthSquaredHint);return 0!==f?f:b.geometry.vao.byteSize-e.geometry.vao.byteSize})}get count(){return this._draws.length}}const l=new Map;l.set(n.DataType.UNSIGNED_BYTE,1);l.set(n.DataType.UNSIGNED_SHORT,2);l.set(n.DataType.UNSIGNED_INT,4);h.RenderPass=u;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});