/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{throwIfAborted as e}from"../core/promiseUtils.js";import{L as t}from"./Logger.js";import{g as s}from"./ensureType.js";import{d as r}from"./mathUtils.js";import{e as i,f as o}from"./quat.js";import{I as n,a,c}from"./quatf64.js";import{s as h,c as l,e as f,n as u,g as m}from"./vec3.js";import{c as p,Z as d,e as g,O as _}from"./vec3f64.js";import w from"../geometry/support/MeshMaterialMetallicRoughness.js";import{c as E}from"./vertexSpaceConversion.js";import{D as T,T as A}from"./enums.js";import{r as y}from"../core/lang.js";import b from"../core/Error.js";import{isDataProtocol as R,dataComponents as x}from"../core/urlUtils.js";import{i as M}from"./resourceUtils3.js";import"./handleUtils.js";import"./maybe.js";import"../config.js";import"./common.js";import"./vec4.js";import"./tslib.es6.js";import"../Color.js";import"./colorUtils.js";import"../core/accessorSupport/decorators/property.js";import"./utils.js";import"./metadata.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/support/MeshMaterial.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../request.js";import"../kernel.js";import"./reader.js";import"./writer.js";import"./persistableUrlUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../core/Clonable.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"./mat3.js";import"./mat3f64.js";import"./mat4.js";import"./mat4f64.js";import"./spatialReferenceEllipsoidUtils.js";import"../geometry/SpatialReference.js";import"./computeTranslationToOriginAndRotation.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"./projectPointToVector.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"./enumeration.js";import"../geometry/support/MeshLocalVertexSpace.js";import"./vec32.js";import"./projection.js";import"./DoubleArray.js";import"./BufferView.js";import"./vec2.js";import"./vec42.js";import"./basicInterfaces.js";async function S(t,s){const r=j(t);if(null==r)throw new b("imageToArrayBuffer","Unsupported image type");const i=function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if(R(t)){const e=x(t);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(t),o=await new Promise((e=>r.toBlob(e,i)));if(e(s),!o)throw new b("imageToArrayBuffer","Failed to encode image");const n=await o.arrayBuffer();return e(s),{data:n,type:i}}function j(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),t}var I,N,O,B,C,L,U,V;!function(e){e[e.JSON=1313821514]="JSON",e[e.BIN=5130562]="BIN"}(I||(I={}));class z{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=z.HEADER_SIZE,this._length+=z.CHUNK_HEADER_SIZE;const s=function(e){return(new TextEncoder).encode(e).buffer}(e);if(this._length+=F(s.byteLength,4),t&&(this._length+=z.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,I.JSON,32);t&&this._writeChunk(t,r,I.BIN)}_writeHeader(){this._outView.setUint32(0,z.MAGIC,!0),this._outView.setUint32(4,z.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,r=0){const i=F(e.byteLength,4);var o,n,a,c;for(this._outView.setUint32(t,i,!0),this._outView.setUint32(t+=4,s,!0),o=this._outView.buffer,n=e,a=t+=4,c=e.byteLength,new Uint8Array(o,a,c).set(new Uint8Array(n,0,c),0),t+=e.byteLength;t%4;)r&&this._outView.setUint8(t,r),t++;return t}}function F(e,t){return t*Math.ceil(e/t)}z.HEADER_SIZE=12,z.CHUNK_HEADER_SIZE=8,z.MAGIC=1179937895,z.VERSION=2,function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(N||(N={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(O||(O={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(B||(B={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(C||(C={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(L||(L={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(U||(U={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(V||(V={}));class P{constructor(e,t,s,r,i){this._buffer=e,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:i};const o=this._getElementSize();o>=4&&i!==B.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=o),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]="number"!=typeof r?e:Math.min(r,e);const i=this._accessorMax[s];this._accessorMax[s]="number"!=typeof i?e:Math.max(i,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){return e=this.dataSize,4*Math.ceil(e/4);var e}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case T.BYTE:return new Int8Array(e,t);case T.FLOAT:return new Float32Array(e,t);case T.SHORT:return new Int16Array(e,t);case T.UNSIGNED_BYTE:return new Uint8Array(e,t);case T.UNSIGNED_INT:return new Uint32Array(e,t);case T.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let e=0;e<t.length;++e)this._data.push(t[e]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let e=0;e<this._accessorMin.length;++e)"number"!=typeof this._accessorMin[e]&&(this._accessorMin[e]=0),"number"!=typeof this._accessorMax[e]&&(this._accessorMax[e]=0);const r={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case T.UNSIGNED_BYTE:case T.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}async finalize(){const e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),await Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case T.BYTE:case T.UNSIGNED_BYTE:return 1;case T.SHORT:case T.UNSIGNED_SHORT:return 2;case T.UNSIGNED_INT:case T.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case C.SCALAR:return 1;case C.VEC2:return 2;case C.VEC3:return 3;case C.VEC4:case C.MAT2:return 4;case C.MAT3:return 9;case C.MAT4:return 16}}}class D{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new P(this,this._gltf,e,t,s);return this._bufferViews.push(r),r}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const e of this._bufferViews)e.writeOutToBuffer(t,s),s+=e.byteSize;return t}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),this._gltf.extras.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function v(e,t){null==t.normal&&(t.normal=new Float32Array(t.position.length));const s=e.faces,{position:r,normal:i}=t,o=s.length/3;for(let e=0;e<o;++e){const t=3*s[3*e],o=3*s[3*e+1],n=3*s[3*e+2],a=h(G,r[t],r[t+1],r[t+2]),c=h(k,r[o],r[o+1],r[o+2]),u=h(H,r[n],r[n+1],r[n+2]),m=l(c,c,a),p=l(u,u,a),d=f(m,m,p);i[t]+=d[0],i[t+1]+=d[1],i[t+2]+=d[2],i[o]+=d[0],i[o+1]+=d[1],i[o+2]+=d[2],i[n]+=d[0],i[n+1]+=d[1],i[n+2]+=d[2]}for(let e=0;e<i.length;e+=3)h(Y,i[e],i[e+1],i[e+2]),u(Y,Y),i[e]=Y[0],i[e+1]=Y[1],i[e+2]=Y[2]}const G=p(),k=p(),H=p(),Y=p(),J=()=>t.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");class K{constructor(e,t){this.options=t,this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{output:t.output,binChunkBuffer:null,promises:[]}},this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.output.buffer===N.GLB||t.output.image===O.GLB;s&&(t.binChunkBuffer=new D(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(e))})),this.gltf.scenes.push(t)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;m(s,d)||(t.translation=g(s));const r=e.rotation;i(r,n)||(t.rotation=a(r));const o=e.scale;m(o,_)||(t.scale=g(o));const c=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){const s=this._createMeshes(e.mesh),r=[c];if(1===s.length)this._addMesh(t,s[0]);else for(const e of s){const t={};this._addMesh(t,e),r.push(this.gltf.nodes.length),this.gltf.nodes.push(t)}return r}return e.forEachNode((e=>{t.children||(t.children=[]),t.children.push(...this._addNodes(e))})),[c]}_addMesh(e,t){this.gltf.meshes??=[];const s=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=s}_createMeshes(e){const t=this.gltf.extras,s=t.output.buffer===N.GLB;let r;r=s?t.binChunkBuffer:new D(this.gltf);const i=this.options.origin,o=e.vertexSpace.clone();o.origin=[i.x,i.y,i.z??0];const n=E({vertexAttributes:e.vertexAttributes,vertexSpace:e.vertexSpace,transform:this.options?.ignoreLocalTransform?null:e.transform,spatialReference:e.spatialReference},o,{targetUnit:"meters"});if(!n)return[];!function(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&v(s,t)}(e,n),function({position:e,normal:t,tangent:s}){W(e,3),W(t,3),W(s,4)}(n);const{position:a,normal:c,tangent:h}=n,{uv:l,color:f}=e.vertexAttributes,u=r.addBufferView(T.FLOAT,C.VEC3,B.ARRAY_BUFFER);let m,p,d,g;c&&(m=r.addBufferView(T.FLOAT,C.VEC3,B.ARRAY_BUFFER)),l&&(p=r.addBufferView(T.FLOAT,C.VEC2,B.ARRAY_BUFFER)),h&&(d=r.addBufferView(T.FLOAT,C.VEC4,B.ARRAY_BUFFER)),f&&(g=r.addBufferView(T.UNSIGNED_BYTE,C.VEC4,B.ARRAY_BUFFER)),u.startAccessor("POSITION"),m&&m.startAccessor("NORMAL"),p&&p.startAccessor("TEXCOORD_0"),d&&d.startAccessor("TANGENT"),g&&g.startAccessor("COLOR_0");const _=n.position.length/3;for(let e=0;e<_;++e)u.push(a[3*e]),u.push(a[3*e+1]),u.push(a[3*e+2]),m&&null!=c&&(m.push(c[3*e]),m.push(c[3*e+1]),m.push(c[3*e+2])),p&&null!=l&&(p.push(l[2*e]),p.push(l[2*e+1])),d&&null!=h&&(d.push(h[4*e]),d.push(h[4*e+1]),d.push(h[4*e+2]),d.push(h[4*e+3])),g&&null!=f&&(g.push(f[4*e]),g.push(f[4*e+1]),g.push(f[4*e+2]),g.push(f[4*e+3]));const w=u.endAccessor(),A=this._addAccessor(u.index,w);let y,b,R,x,M;if(m){const e=m.endAccessor();y=this._addAccessor(m.index,e)}if(p){const e=p.endAccessor();b=this._addAccessor(p.index,e)}if(d){const e=d.endAccessor();R=this._addAccessor(d.index,e)}if(g){const e=g.endAccessor();x=this._addAccessor(g.index,e)}const S=[];return e.components&&e.components.length>0&&e.components[0].faces?(M=r.addBufferView(T.UNSIGNED_INT,C.SCALAR,B.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(M,e.components,S,A,y,b,R,x)):this._addMeshVertexNonIndexed(e.components,S,A,y,b,R,x),u.finalize(),m&&m.finalize(),p&&p.finalize(),d&&d.finalize(),M&&M.finalize(),g&&g.finalize(),s||r.finalize(),S}_addMaterial(e){if(null===e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=U.MASK;break;case"auto":case"blend":s.alphaMode=U.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=e=>e**2.1,i=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if(null!=e.color&&(s.pbrMetallicRoughness.baseColorFactor=i(e.color)),null!=e.colorTexture&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),null!=e.normalTexture&&(s.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof w){if(null!=e.emissiveTexture&&(s.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),null!=e.emissiveColor){const t=i(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}null!=e.occlusionTexture&&(s.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),null!=e.metallicRoughnessTexture&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,J().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const o=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),o}_createTextureInfo(e,t){const s={index:this._addTexture(e)};return t?(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:r(t.rotation)},s):s}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,s(this._textureMap,e,(()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},r=t.length;return t.push(s),r}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const r=this.gltf.extras;switch(r.output.image){case O.GLB:{const e=r.binChunkBuffer.addBufferView(T.UNSIGNED_BYTE,C.SCALAR);if(M(t))null!=t.data&&e.writeOutToBuffer(t.data,0);else{const i=S(t,this.options.signal).then((({data:e,type:t})=>(s.mimeType=t,e)));r.promises.push(e.writeAsync(i).then((()=>{e.finalize()})))}s.bufferView=e.index;break}case O.DataURI:if(M(t)){J().warnOnce("Image export for basis compressed textures not available.");break}s.uri=function(e){const t=j(e);return null!=t?t.toDataURL():""}(t);break;default:if(M(t)){J().warnOnce("Image export for basis compressed textures not available.");break}r.promises.push(S(t,this.options.signal).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,r),r}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=A.REPEAT,s=A.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=A.CLAMP_TO_EDGE,s=A.CLAMP_TO_EDGE;break;case"mirror":t=A.MIRRORED_REPEAT,s=A.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=A.CLAMP_TO_EDGE;break;case"mirror":s=A.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=A.CLAMP_TO_EDGE;break;case"mirror":t=A.MIRRORED_REPEAT}}const r={wrapS:t,wrapT:s};for(let e=0;e<this.gltf.samplers.length;++e)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[e]))return e;const i=this.gltf.samplers.length;return this.gltf.samplers.push(r),i}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(e,t,s,r,i,o,n,a){const c=new Map;for(const h of t){e.startAccessor("INDICES");for(let t=0;t<h.faces.length;++t)e.push(h.faces[t]);const t=e.endAccessor(),l={attributes:{POSITION:r},indices:this._addAccessor(e.index,t),material:this._addMaterial(h.material)};i&&"flat"!==h.shading&&(l.attributes.NORMAL=i),o&&(l.attributes.TEXCOORD_0=o),n&&"flat"!==h.shading&&(l.attributes.TANGENT=n),a&&(l.attributes.COLOR_0=a);const f=c.get(h.name);if(f)f.primitives.push(l);else{const e={name:h.name,primitives:[l]};c.set(h.name,e),s.push(e)}}}_addMeshVertexNonIndexed(e,t,s,r,i,o,n){const a={primitives:[]};t.push(a);const c={attributes:{POSITION:s}};r&&(c.attributes.NORMAL=r),i&&(c.attributes.TEXCOORD_0=i),o&&(c.attributes.TANGENT=o),n&&(c.attributes.COLOR_0=n),e&&(c.material=this._addMaterial(e[0].material)),a.primitives.push(c)}}function W(e,t){if(null!=e)for(let s=1,r=2;s<e.length;s+=t,r+=t){const t=e[s],i=e[r];e[s]=i,e[r]=-t}}class Z{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){y(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class X{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class ${constructor(e){this.mesh=e,this.name="",this.translation=p(),this.rotation=c(),this.scale=g(_),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){o(this.rotation,e[0],e[1],e[2])}}const q="model.glb";async function Q(t,s){const r=new Z,i=new X;return r.addScene(i),i.addNode(new $(t)),await async function(t,s){const r=(await async function(t,s){const r=new K(t,s).gltf,i=r.extras.promises;let o=1,n=1,a=null;await Promise.allSettled(i),e(s.signal);const c=s.jsonSpacing??4,h=new Map,l=JSON.stringify(r,((e,t)=>{if("extras"!==e){if(t instanceof ArrayBuffer){if(function(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}(t))switch(s.output?.image){case O.DataURI:case O.GLB:break;case O.External:default:{const e=`img${n}.png`;return n++,h.set(e,t),e}}switch(s.output?.buffer){case N.DataURI:return function(e){const t=[],s=new Uint8Array(e);for(let e=0;e<s.length;e++)t.push(String.fromCharCode(s[e]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}(t);case N.GLB:if(a)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(a=t);case N.External:default:{const e=`data${o}.bin`;return o++,h.set(e,t),e}}}return t}}),c);return s.output?.buffer===N.GLB||s.output?.image===O.GLB?h.set(q,new z(l,a).buffer):h.set("model.gltf",l),h}(t,{output:{buffer:N.GLB,image:O.GLB},jsonSpacing:0,...s})).get(q);if(!(r&&r instanceof ArrayBuffer))throw new Error("failed to export to glb");return r}(r,{origin:t.origin,...s})}export{Q as toBinaryGLTF};
