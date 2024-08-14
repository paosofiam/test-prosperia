// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../lib/TransparencyPassType ../../../../chunks/CheckerBoard.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(l,h,m,n,p,c,q,k,r,d,e){class f extends n.ShaderTechnique{initializeProgram(a){return new q.Program(a.rctx,f.shader.get().build(this.configuration),p.Default3D)}_setPipelineState(a){const b=
this.configuration,g=a===k.TransparencyPassType.NONE,t=a===k.TransparencyPassType.FrontFace;return e.makePipelineState({blending:b.transparent?g?u:c.oitBlending(a):null,depthTest:{func:c.oitDepthTest(a)},depthWrite:g?b.writeDepth?e.defaultDepthWriteParams:null:c.oitDepthWrite(a),drawBuffers:c.oitDrawBuffers(a),colorWrite:e.defaultColorWriteParams,polygonOffset:g||t?b.polygonOffset?v:null:{factor:-1,units:-25}})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}
f.shader=new m.ReloadableShaderModule(r.CheckerBoard,()=>new Promise((a,b)=>l(["./CheckerBoard.glsl"],a,b)));const v={factor:0,units:-25},u=e.separateBlendingParams(d.BlendFactor.SRC_ALPHA,d.BlendFactor.ONE,d.BlendFactor.ONE_MINUS_SRC_ALPHA,d.BlendFactor.ONE_MINUS_SRC_ALPHA);h.CheckerBoardTechnique=f;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});