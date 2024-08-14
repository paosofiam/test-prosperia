// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../ViewingMode ./ComponentTechniqueConfiguration ../../../../../../chunks/ComponentShader.glsl ../../../core/shaderLibrary/ShaderOutput ../../../core/shaderTechnique/ReloadableShaderModule ../../../core/shaderTechnique/ShaderTechnique ../../../lib/basicInterfaces ../../../lib/OrderIndependentTransparency ../../../lib/Program ../../../lib/StencilUtils ../../../lib/TransparencyPassType ../../../lib/VertexAttribute ../../../../../webgl/enums ../../../../../webgl/renderState".split(" "),
function(r,f,t,u,v,l,w,x,y,d,z,g,m,c,A,e){class h extends x.ShaderTechnique{initializeConfiguration(b,a){a.spherical=b.viewingMode===t.ViewingMode.Global;a.doublePrecisionRequiresObfuscation=b.rctx.driverTest.doublePrecisionRequiresObfuscation.result}initializeProgram(b){return new z.Program(b.rctx,h.shader.get().build(this.configuration),n)}_setPipelineState(b){const a=this.configuration,p=a.integratedMeshMode!==u.IntegratedMeshMode.None,k=b===m.TransparencyPassType.NONE,q=b===m.TransparencyPassType.FrontFace;
return e.makePipelineState({blending:a.output===l.ShaderOutput.Color&&a.blendingEnabled?k?d.blendingDefault:d.oitBlending(b):null,culling:e.cullingParams(a.cullFace),depthTest:{func:d.oitDepthTest(b)},depthWrite:k||q?e.defaultDepthWriteParams:null,drawBuffers:a.output===l.ShaderOutput.Depth?{buffers:[A.SpecialDrawBuffers.NONE]}:d.oitDrawBuffers(b),colorWrite:e.defaultColorWriteParams,stencilWrite:p||a.hasOccludees?g.stencilWriteMaskOn:null,stencilTest:p?g.replaceBitWhenDepthTestPasses(y.StencilBits.IntegratedMeshMaskExcluded):
a.hasOccludees?g.stencilBaseAllZerosParams:null,polygonOffset:k||q?a.hasPolygonOffset?{factor:2,units:2}:null:d.OITPolygonOffset})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}h.shader=new w.ReloadableShaderModule(v.ComponentShader,()=>new Promise((b,a)=>r(["./shader/ComponentShader.glsl"],b,a)));const n=new Map([[c.VertexAttribute.POSITION,0],[c.VertexAttribute.NORMAL,1],[c.VertexAttribute.NORMALCOMPRESSED,1],[c.VertexAttribute.COLOR,2],[c.VertexAttribute.UV0,
3],[c.VertexAttribute.UVREGION,4],[c.VertexAttribute.COMPONENTINDEX,5]]);f.ComponentTechnique=h;f.attributeLocations=n;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});