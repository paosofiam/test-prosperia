// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/SimpleAtmosphere.glsl ./SimpleAtmosphereTechniqueConfiguration ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(f,e,g,h,k,l,m,n,a,b){class c extends l.ShaderTechnique{initializeProgram(d){return new n.Program(d.rctx,c.shader.get().build(this.configuration),
m.Default3D)}initializePipeline(){return this.configuration.geometry===h.SimpleAtmosphereGeometry.Cylinder?b.makePipelineState({blending:b.separateBlendingParams(a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),culling:b.backFaceCullingParams,depthTest:{func:a.CompareFunction.LEQUAL},colorWrite:b.defaultColorWriteParams}):b.makePipelineState({blending:b.separateBlendingParams(a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,
a.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:a.CompareFunction.LEQUAL},colorWrite:b.defaultColorWriteParams})}}c.shader=new k.ReloadableShaderModule(g.SimpleAtmosphere,()=>new Promise((d,p)=>f(["./SimpleAtmosphere.glsl"],d,p)));e.SimpleAtmosphereTechnique=c;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});