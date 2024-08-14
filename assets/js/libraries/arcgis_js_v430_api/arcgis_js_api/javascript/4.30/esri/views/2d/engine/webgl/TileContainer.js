// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["../../../../core/has","./enums","./WGLContainer","./brushes/WGLBrushStencil","./brushes/WGLBrushTileDebugInfo"],function(d,c,e,f,g){const h=(a,b)=>0!==a.key.level-b.key.level?a.key.level-b.key.level:0!==a.key.row-b.key.row?a.key.row-b.key.row:a.key.col-b.key.col;class k extends e{constructor(a){super();this._tileInfoView=a}renderChildren(a){this.sortChildren(h);this.setStencilReference(a);super.renderChildren(a)}createRenderParams(a){const {state:b}=a;a=super.createRenderParams(a);a.requiredLevel=
this._tileInfoView.getClosestInfoForScale(b.scale).level;a.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(b.scale);return a}prepareRenderPasses(a){const b=super.prepareRenderPasses(a);b.push(a.registerRenderPass({name:"stencil",brushes:[f],drawPhase:c.WGLDrawPhase.DEBUG|c.WGLDrawPhase.MAP|c.WGLDrawPhase.HIGHLIGHT|c.WGLDrawPhase.LABEL,target:()=>this.getStencilTarget()}));d("esri-tiles-debug")&&b.push(a.registerRenderPass({name:"tileInfo",brushes:[g],drawPhase:c.WGLDrawPhase.DEBUG,target:()=>
this.children}));return b}getStencilTarget(){return this.children}setStencilReference(a){a=1;for(const b of this.children)b.stencilRef=a++}}return k});