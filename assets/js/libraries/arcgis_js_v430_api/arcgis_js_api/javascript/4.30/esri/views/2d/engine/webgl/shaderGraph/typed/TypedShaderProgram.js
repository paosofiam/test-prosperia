// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/object ../../../../../../core/RandomLCG ../../../../../../core/has ../../../../../webgl/checkWebGLError ../../../../../webgl/enums ../../../../../webgl/FramebufferObject ../../../../../webgl/Program ../../../../../webgl/GLObjectType ../../../../../webgl/Texture ../../Utils".split(" "),function(p,q,r,t,x,y,z,A,B,u,C,D,v){function k(c,h,b){const a=h.length;a!==b&&(c=new q("Invalid Uniform",`Invalid length, expected ${b} but got ${a}`,
{uniformName:c,values:h}),r.getLogger("esri.views.2d.engine.webgl.shaderGraph.typed.TypedShaderProgram").errorOnce(c))}class w{constructor(c,h,b,a,e,g){this._vao=this._program=null;this._temporaryTextures=[];this.vertexShader=c;this.fragmentShader=h;this._locations=b;this._locationInfo=a;this._uniformBindings=e;this._transformFeedbackBindings=g}destroy(){this._program&&this._program.dispose();this.cleanupTemporaryTextures()}get locations(){return this._locations}get locationInfo(){return this._locationInfo}setUniforms(c){this._uniforms=
c}cleanupTemporaryTextures(){for(const c of this._temporaryTextures)c.dispose();this._temporaryTextures=[]}bind(c){const h=this._uniforms;if(!this._program){var b=new Map;for(const [e,g]of this._locations)b.set(e,g);var a=[];for(const e of this._transformFeedbackBindings??[]){const {index:g,propertyKey:d}=e;a[g]=`v_${d}`}this._program=new u.Program(c,this.vertexShader,this.fragmentShader,b,new Map,a)}b=this._program;c.useProgram(b);for(const e of this._uniformBindings){const {shaderModulePath:g,uniformName:d,
uniformType:l,uniformArrayLength:f}=e;a=t.getDeepValue(g,h);if(null==a){if("sampler2D"===l)continue;throw Error(`Failed to find uniform value for ${g}`);}switch("array"===l?e.uniformArrayElementType:l){case "sampler2D":const {unit:n,texture:m}=a;b.setUniform1i(d,n);"type"in m?c.bindTexture(m,n):(a=v.createTexture(c,m.descriptor,m.data),c.bindTexture(a,n));break;case "int":if(!f){b.setUniform1i(d,a);break}k(e.uniformName,a,f);b.setUniform1iv(d,a);break;case "float":if(!f){b.setUniform1f(d,a);break}k(e.uniformName,
a,f);b.setUniform1fv(d,a);break;case "vec2":if(!f){b.setUniform2f(d,a[0],a[1]);break}k(e.uniformName,a,f);b.setUniform2fv(d,a.flat());break;case "vec3":if(!f){b.setUniform3f(d,a[0],a[1],a[2]);break}k(e.uniformName,a,f);b.setUniform3fv(d,a.flat());break;case "vec4":if(!f){b.setUniform4f(d,a[0],a[1],a[2],a[3]);break}k(e.uniformName,a,f);b.setUniform4fv(d,a.flat());break;case "mat3":b.setUniformMatrix3fv(d,a.flat());break;case "mat4":b.setUniformMatrix4fv(d,a.flat());break;default:throw Error(`Unable to set uniform for type ${l}`);
}}}}p.TypedShaderProgram=w;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});