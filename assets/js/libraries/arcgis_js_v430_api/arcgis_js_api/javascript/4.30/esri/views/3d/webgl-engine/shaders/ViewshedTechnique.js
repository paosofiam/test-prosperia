// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../../../../chunks/Viewshed.glsl ../../../webgl/renderState".split(" "),function(e,c,f,g,h,k,l,m,d){class a extends g.ShaderTechnique{initializeProgram(b){return new l.Program(b.rctx,a.shader.get().build(this.configuration),h.Default3D)}initializePipeline(){return d.makePipelineState({colorWrite:d.defaultColorWriteParams,
blending:k.blendingDefault})}}a.shader=new f.ReloadableShaderModule(m.Viewshed,()=>new Promise((b,n)=>e(["./Viewshed.glsl"],b,n)));c.ViewshedTechnique=a;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});