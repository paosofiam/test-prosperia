// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/floatRGBA ../../core/has ../../core/maybe ../../core/libs/gl-matrix-2/factories/vec3f64 ./BufferObject ./doublePrecisionUtils ./enums ./FramebufferObject ./TextureDescriptor ./VertexArrayObject ./VertexElementDescriptor ./WebGLDriverTestModule".split(" "),function(l,q,r,t,m,u,n,f,v,w,x,y,z){function p(a,b){return a.programCache.acquire(`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${b?
"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,
"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor \x3d v_color;\n  }\n  ",new Map([["position",0]]))}class A extends z.WebGLDriverTestModule{constructor(a){super();this._rctx=a;this._program=p(this._rctx,!1);this._obfuscated=p(this._rctx,!0)}dispose(){super.dispose();this._obfuscated=t.disposeMaybe(this._obfuscated)}_test(a){if(r("force-double-precision-obfuscation"))return!0;if(null==this._obfuscated)return!1;const b=this._rctx,d=b.getBoundFramebufferObject(),
{x:g,y:h,width:k,height:e}=b.getViewport();a=this._runProgram(a);const c=this._runProgram(this._obfuscated);b.setViewport(g,h,k,e);b.bindFramebuffer(d);return 0!==a&&(0===c||5<a/c)}_runProgram(a){var b=this._rctx;b.resetState();var d=new w.TextureDescriptor(1);d.wrapMode=f.TextureWrapMode.CLAMP_TO_EDGE;d.samplingMode=f.TextureSamplingMode.NEAREST;d=new v.FramebufferObject(b,d);var g=u.BufferObject.createVertex(b,f.Usage.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1]));g=new x.VertexArrayObject(b,new Map([["position",
0]]),{geometry:[new y.VertexElementDescriptor("position",2,f.DataType.UNSIGNED_SHORT,0,4)]},{geometry:g});const h=m.fromValues(5633261.287538229,2626832.878767164,1434988.0495278358),k=m.fromValues(5633271.46742708,2626873.6381334523,1434963.231608387),e=new Float32Array(6);n.encodeDoubleArray(h,e,3);const c=new Float32Array(6);n.encodeDoubleArray(k,c,3);b.useProgram(a);a.setUniform3f("u_highA",e[0],e[2],e[4]);a.setUniform3f("u_lowA",e[1],e[3],e[5]);a.setUniform3f("u_highB",c[0],c[2],c[4]);a.setUniform3f("u_lowB",
c[1],c[3],c[5]);b.bindFramebuffer(d);b.setViewport(0,0,1,1);b.bindVAO(g);b.drawArrays(f.PrimitiveType.TRIANGLE_STRIP,0,4);a=new Uint8Array(4);d.readPixels(0,0,1,1,f.PixelFormat.RGBA,f.PixelType.UNSIGNED_BYTE,a);g.dispose();d.dispose();b=(h[2]-k[2])/25;a=q.unpackFloatRGBA(a);return Math.abs(b-a)}}l.DoublePrecisionRequiresObfuscation=A;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});