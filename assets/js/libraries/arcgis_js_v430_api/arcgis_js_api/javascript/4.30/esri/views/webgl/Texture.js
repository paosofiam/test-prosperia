// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../core/has ./checkWebGLError ./enums ./GLObjectType ./TextureDescriptor ./ValidatedTextureDescriptor".split(" "),function(A,n,B,v,f,G,H,I){function y(e){(null!=e.width&&0>e.width||null!=e.height&&0>e.height||null!=e.depth&&0>e.depth)&&console.error("Negative dimension parameters are not allowed!")}function C(e,a){let b=a.samplingMode,c=a.samplingMode;if(b===f.TextureSamplingMode.LINEAR_MIPMAP_NEAREST||b===f.TextureSamplingMode.LINEAR_MIPMAP_LINEAR)b=f.TextureSamplingMode.LINEAR,
a.hasMipmap||(c=f.TextureSamplingMode.LINEAR);else if(b===f.TextureSamplingMode.NEAREST_MIPMAP_NEAREST||b===f.TextureSamplingMode.NEAREST_MIPMAP_LINEAR)b=f.TextureSamplingMode.NEAREST,a.hasMipmap||(c=f.TextureSamplingMode.NEAREST);e.texParameteri(a.target,e.TEXTURE_MAG_FILTER,b);e.texParameteri(a.target,e.TEXTURE_MIN_FILTER,c)}function D(e,a){"number"===typeof a.wrapMode?(e.texParameteri(a.target,e.TEXTURE_WRAP_S,a.wrapMode),e.texParameteri(a.target,e.TEXTURE_WRAP_T,a.wrapMode)):(e.texParameteri(a.target,
e.TEXTURE_WRAP_S,a.wrapMode.s),e.texParameteri(a.target,e.TEXTURE_WRAP_T,a.wrapMode.t))}function J(e,a){const b=e.capabilities.textureFilterAnisotropic;b&&e.gl.texParameterf(a.target,b.TEXTURE_MAX_ANISOTROPY,a.maxAnisotropy??1)}function z(e){return null!=e&&"type"in e&&"compressed"===e.type}function E(e){return null!=e&&!z(e)&&!(null!=e&&"byteLength"in e)}function w(e){return e===f.TextureType.TEXTURE_3D||e===f.TextureType.TEXTURE_2D_ARRAY}function F(e,a,b,c=1){a=Math.max(a,b);e===f.TextureType.TEXTURE_3D&&
(a=Math.max(a,c));return Math.round(Math.log(a)/Math.LN2)+1}B=class e{constructor(a,b=null,c=null){this.type=G.GLObjectType.Texture;this._glName=null;this._wasImmutablyAllocated=this._wrapModeDirty=this._samplingModeDirty=!1;if("context"in a)this._descriptor=a,c=b;else{a=I.ValidatedTextureDescriptor.validate(a,b);if(!a)throw new n("Texture descriptor invalid");this._descriptor=a}this._descriptor.target===f.TextureType.TEXTURE_CUBE_MAP?this._setDataCubeMap(c):this.setData(c)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return H.estimateMemory(this._descriptor)}get isDirty(){return this._samplingModeDirty||
this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(f.ResourceType.Texture,this);this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(a,b){const c=this._descriptor;if(c.width!==a||c.height!==b){if(this._wasImmutablyAllocated)throw new n("Immutable textures can't be resized!");c.width=a;c.height=b;this._descriptor.target===
f.TextureType.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(a=null){for(let b=f.TextureType.TEXTURE_CUBE_MAP_POSITIVE_X;b<=f.TextureType.TEXTURE_CUBE_MAP_NEGATIVE_Z;b++)this._setData(a,b)}setData(a){this._setData(a)}_setData(a,b){if(this._descriptor.context?.gl){var c=this._descriptor.context.gl;v.checkWebGLError(c);this._glName||(this._glName=c.createTexture())&&this._descriptor.context.instanceCounter.increment(f.ResourceType.Texture,this);void 0===a&&(a=null);
var d=this._descriptor,h=b??d.target,l=w(h);null===a&&(d.width=d.width||4,d.height=d.height||4,l&&(d.depth=d.depth??1));b=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES);y(d);this._configurePixelStorage();v.checkWebGLError(c);var k=this._deriveInternalFormat();if(E(a)){let g="width"in a?a.width:a.codedWidth,m="height"in a?a.height:a.codedHeight;a instanceof HTMLVideoElement&&(g=a.videoWidth,m=a.videoHeight);
d.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(h,k,d.hasMipmap,g,m,1);this._texImage(h,0,k,g,m,1,a);v.checkWebGLError(c);d.hasMipmap&&this.generateMipmap();d.width||(d.width=g);d.height||(d.height=m);l&&!d.depth&&(d.depth=1)}else{const {width:g,height:m,depth:q}=d;if(null==g||null==m)throw new n("Width and height must be specified!");if(l&&null==q)throw new n("Depth must be specified!");d.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(h,k,d.hasMipmap,g,m,q);if(z(a)){const p=
a.levels;a=F(h,g,m,q);a=Math.min(a-1,p.length-1);c.texParameteri(d.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,a);if(!(k in f.CompressedTextureFormat))throw new n("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((r,t,x,u)=>{this._compressedTexImage(h,r,k,t,x,u,p[Math.min(r,p.length-1)])},a)}else this._texImage(h,0,k,g,m,q,a),v.checkWebGLError(c),d.hasMipmap&&this.generateMipmap()}C(c,this._descriptor);D(c,this._descriptor);J(this._descriptor.context,
this._descriptor);v.checkWebGLError(c);this._descriptor.context.bindTexture(b,e.TEXTURE_UNIT_FOR_UPDATES)}}updateData(a,b,c,d,h,l,k=0){l||console.error("An attempt to use uninitialized data!");this._glName||console.error("An attempt to update uninitialized texture!");var g=this._descriptor;const m=this._deriveInternalFormat(),{context:q,pixelFormat:p,dataType:r,target:t,isImmutable:x}=g;if(x&&!this._wasImmutablyAllocated)throw new n("Cannot update immutable texture before allocation!");const u=q.bindTexture(this,
e.TEXTURE_UNIT_FOR_UPDATES,!0);(0>b||0>c||b+d>g.width||c+h>g.height)&&console.error("An attempt to update out of bounds of the texture!");this._configurePixelStorage();({gl:g}=q);k&&g.pixelStorei(g.UNPACK_SKIP_ROWS,k);E(l)?g.texSubImage2D(t,a,b,c,d,h,p,r,l):z(l)?g.compressedTexSubImage2D(t,a,b,c,d,h,m,l.levels[a]):g.texSubImage2D(t,a,b,c,d,h,p,r,l);k&&g.pixelStorei(g.UNPACK_SKIP_ROWS,0);q.bindTexture(u,e.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(a,b,c,d,h,l,k,g){g||console.error("An attempt to use uninitialized data!");
this._glName||console.error("An attempt to update uninitialized texture!");var m=this._descriptor;const q=this._deriveInternalFormat(),{context:p,pixelFormat:r,dataType:t,isImmutable:x,target:u}=m;if(x&&!this._wasImmutablyAllocated)throw new n("Cannot update immutable texture before allocation!");w(u)||console.warn("Attempting to set 3D texture data on a non-3D texture");const K=p.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);p.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES);(0>b||0>c||0>d||b+h>m.width||
c+l>m.height||d+k>m.depth)&&console.error("An attempt to update out of bounds of the texture!");this._configurePixelStorage();({gl:m}=p);z(g)?(g=g.levels[a],m.compressedTexSubImage3D(u,a,b,c,d,h,l,k,q,g)):m.texSubImage3D(u,a,b,c,d,h,l,k,r,t,g);p.bindTexture(K,e.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const a=this._descriptor;if(!a.hasMipmap){if(this._wasImmutablyAllocated)throw new n("Cannot add mipmaps to immutable texture after allocation");this._samplingModeDirty=a.hasMipmap=!0;y(a)}a.samplingMode===
f.TextureSamplingMode.LINEAR?(this._samplingModeDirty=!0,a.samplingMode=f.TextureSamplingMode.LINEAR_MIPMAP_NEAREST):a.samplingMode===f.TextureSamplingMode.NEAREST&&(this._samplingModeDirty=!0,a.samplingMode=f.TextureSamplingMode.NEAREST_MIPMAP_NEAREST);const b=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.gl.generateMipmap(a.target);this._descriptor.context.bindTexture(b,e.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const a=
this._descriptor;if(a.hasMipmap){if(this._wasImmutablyAllocated)throw new n("Cannot delete mipmaps to immutable texture after allocation");a.hasMipmap=!1;this._samplingModeDirty=!0;y(a)}a.samplingMode===f.TextureSamplingMode.LINEAR_MIPMAP_NEAREST?(this._samplingModeDirty=!0,a.samplingMode=f.TextureSamplingMode.LINEAR):a.samplingMode===f.TextureSamplingMode.NEAREST_MIPMAP_NEAREST&&(this._samplingModeDirty=!0,a.samplingMode=f.TextureSamplingMode.NEAREST)}setSamplingMode(a){a!==this._descriptor.samplingMode&&
(this._descriptor.samplingMode=a,this._samplingModeDirty=!0)}setWrapMode(a){a!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=a,y(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const a=this._descriptor,b=a.context.gl;this._samplingModeDirty&&(C(b,a),this._samplingModeDirty=!1);this._wrapModeDirty&&(D(b,a),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===f.PixelFormat.DEPTH_STENCIL&&(this._descriptor.internalFormat=
f.PixelFormat.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case f.PixelType.FLOAT:switch(this._descriptor.pixelFormat){case f.PixelFormat.RGBA:return this._descriptor.internalFormat=f.SizedPixelFormat.RGBA32F;case f.PixelFormat.RGB:return this._descriptor.internalFormat=f.SizedPixelFormat.RGB32F;default:throw new n("Unable to derive format");}case f.PixelType.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case f.PixelFormat.RGBA:return this._descriptor.internalFormat=
f.SizedPixelFormat.RGBA8;case f.PixelFormat.RGB:return this._descriptor.internalFormat=f.SizedPixelFormat.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===f.PixelFormat.DEPTH_STENCIL?f.PixelFormat.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const a=this._descriptor.context.gl,{unpackAlignment:b,flipped:c,preMultiplyAlpha:d}=this._descriptor;a.pixelStorei(a.UNPACK_ALIGNMENT,b);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,c?1:0);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
d?1:0)}_texStorage(a,b,c,d,h,l){const {gl:k}=this._descriptor.context;if(!(b in f.SizedPixelFormat))throw new n("Immutable textures must have a sized internal format");if(this._descriptor.isImmutable){c=c?F(a,d,h,l):1;if(w(a)){if(null==l)throw new n("Missing depth dimension for 3D texture upload");k.texStorage3D(a,c,b,d,h,l)}else k.texStorage2D(a,c,b,d,h);this._wasImmutablyAllocated=!0}}_texImage(a,b,c,d,h,l,k){const g=this._descriptor.context.gl,m=w(a),{isImmutable:q,pixelFormat:p,dataType:r}=this._descriptor;
if(q){if(null!=k)if(m){if(null==l)throw new n("Missing depth dimension for 3D texture upload");g.texSubImage3D(a,b,0,0,0,d,h,l,p,r,k)}else g.texSubImage2D(a,b,0,0,d,h,p,r,k)}else if(m){if(null==l)throw new n("Missing depth dimension for 3D texture upload");g.texImage3D(a,b,c,d,h,l,0,p,r,k)}else g.texImage2D(a,b,c,d,h,0,p,r,k)}_compressedTexImage(a,b,c,d,h,l,k){const g=this._descriptor.context.gl,m=w(a);if(this._descriptor.isImmutable){if(null!=k)if(m){if(null==l)throw new n("Missing depth dimension for 3D texture upload");
g.compressedTexSubImage3D(a,b,0,0,0,d,h,l,c,k)}else g.compressedTexSubImage2D(a,b,0,0,d,h,c,k)}else if(m){if(null==l)throw new n("Missing depth dimension for 3D texture upload");g.compressedTexImage3D(a,b,c,d,h,l,0,k)}else g.compressedTexImage2D(a,b,c,d,h,0,k)}_forEachMipmapLevel(a,b=Infinity){let {width:c,height:d,depth:h,hasMipmap:l,target:k}=this._descriptor;const g=k===f.TextureType.TEXTURE_3D;if(null==c||null==d||g&&null==h)throw new n("Missing texture dimensions for mipmap calculation");for(let m=
0;;++m){a(m,c,d,h);if(!l||1===c&&1===d&&(!g||1===h)||m>=b)break;c=Math.max(1,c>>1);d=Math.max(1,d>>1);g&&(h=Math.max(1,h>>1))}}};B.TEXTURE_UNIT_FOR_UPDATES=0;A.Texture=B;A.tracer=null;Object.defineProperty(A,Symbol.toStringTag,{value:"Module"})});