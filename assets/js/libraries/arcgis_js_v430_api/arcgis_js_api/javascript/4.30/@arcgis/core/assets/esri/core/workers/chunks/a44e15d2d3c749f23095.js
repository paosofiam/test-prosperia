"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3466],{72509:(e,t,r)=>{r.d(t,{A:()=>Y,B:()=>c,C:()=>V,D:()=>x,E:()=>X,F:()=>W,G:()=>v,H:()=>K,I:()=>k,J:()=>j,a:()=>l,b:()=>R,c:()=>y,d:()=>h,e:()=>N,f:()=>S,g:()=>o,h:()=>B,i:()=>p,j:()=>d,k:()=>O,l:()=>C,m:()=>a,n:()=>I,o:()=>L,p:()=>M,q:()=>U,r:()=>P,s:()=>D,t:()=>b,u:()=>G,v:()=>F,w:()=>m,x:()=>H,y:()=>g,z:()=>w});var s=r(37322),f=r(26809),n=r(91276);class E{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=9;const n=this.TypedArrayConstructor;void 0===s&&(s=9*n.BYTES_PER_ELEMENT);const E=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,E):new n(t,E,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let n=e*this.typedBufferStride,E=r*t.typedBufferStride;for(let e=0;e<9;++e)s[n++]=f[E++]}get buffer(){return this.typedBuffer.buffer}}E.ElementCount=9;class i{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=16;const n=this.TypedArrayConstructor;void 0===s&&(s=16*n.BYTES_PER_ELEMENT);const E=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,E):new n(t,E,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let n=e*this.typedBufferStride,E=r*t.typedBufferStride;for(let e=0;e<16;++e)s[n++]=f[E++]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=16;class _{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=1;const n=this.TypedArrayConstructor;void 0===s&&(s=n.BYTES_PER_ELEMENT);const E=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,E):new n(t,E,(f-r)/n.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}_.ElementCount=1;class T{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=2;const n=this.TypedArrayConstructor;void 0===s&&(s=2*n.BYTES_PER_ELEMENT);const E=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,E):new n(t,E,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,s.g)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let n=e*this.typedBufferStride,E=r*t.typedBufferStride;s[n++]=f[E++],s[n]=f[E]}get buffer(){return this.typedBuffer.buffer}}T.ElementCount=2;class u{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.elementCount=3;const n=this.TypedArrayConstructor;void 0===s&&(s=3*n.BYTES_PER_ELEMENT);const E=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,E):new n(t,E,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,f.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=s}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let n=e*this.typedBufferStride,E=r*t.typedBufferStride;s[n++]=f[E++],s[n++]=f[E++],s[n]=f[E]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=3;class A{constructor(e,t,r=0,s,f){this.TypedArrayConstructor=e,this.start=r,this.elementCount=4;const n=this.TypedArrayConstructor;void 0===s&&(s=4*n.BYTES_PER_ELEMENT);const E=0===t.byteLength?0:r;this.typedBuffer=null==f?new n(t,E):new n(t,E,(f-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=s/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const s=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,s,this.stride,s+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,n.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,s,f){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=s,this.typedBuffer[e]=f}copyFrom(e,t,r){const s=this.typedBuffer,f=t.typedBuffer;let n=e*this.typedBufferStride,E=r*t.typedBufferStride;s[n++]=f[E++],s[n++]=f[E++],s[n++]=f[E++],s[n]=f[E]}get buffer(){return this.typedBuffer.buffer}}A.ElementCount=4;class R extends _{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="f32";class y extends T{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(y,e,t)}static fromTypedArray(e,t){return new y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}y.ElementType="f32";class c extends u{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(c,e,t)}static fromTypedArray(e,t){return new c(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}c.ElementType="f32";class h extends A{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class N extends E{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="f32";class d extends E{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f64";class S extends i{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="f32";class O extends i{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class o extends _{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f64";class B extends T{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f64";class l extends u{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f64";class p extends A{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f64";class C extends _{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u8";class a extends T{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="u8";class I extends u{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u8";class L extends A{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class M extends _{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class U extends T{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="u16";class P extends u{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class D extends A{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="u16";class b extends _{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="u32";class G extends T{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="u32";class F extends u{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class m extends A{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="u32";class H extends _{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i8";class g extends T{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="i8";class w extends u{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="i8";class Y extends A{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class V extends _{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i16";class x extends T{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="i16";class X extends u{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(X,e,t)}static fromTypedArray(e,t){return new X(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}X.ElementType="i16";class W extends A{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i16";class v extends _{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i32";class K extends T{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(K,e,t)}static fromTypedArray(e,t){return new K(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}K.ElementType="i32";class k extends u{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i32";class j extends A{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i32"},4361:(e,t,r)=>{r.d(t,{a:()=>T,c:()=>f,n:()=>n});var s=r(32773);function f(e){if((0,s.d)(e)){if(e.length<s.n)return e}else if(e.length<s.n)return Array.from(e);let t=!0,r=!0;return e.some(((e,s)=>(t=t&&0===e,r=r&&e===s,!t&&!r))),t?function(e){if(1===e)return i;if(e<s.n)return new Array(e).fill(0);if(e>u.length){const t=Math.max(2*u.length,e);u=new Uint8Array(t)}return new Uint8Array(u.buffer,0,e)}(e.length):r?T(e.length):(0,s.d)(e)||e.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(e){let t=!0;for(const r of e){if(r>=65536)return(0,s.d)(e)?new Uint32Array(e):e;r>=256&&(t=!1)}return t?new Uint8Array(e):new Uint16Array(e)}(e):e}function n(e){return e<=s.n?new Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}let E=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const i=[0],_=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function T(e){if(1===e)return i;if(e<s.n)return Array.from(new Uint16Array(_.buffer,0,e));if(e<_.length)return new Uint16Array(_.buffer,0,e);if(e>E.length){const t=Math.max(2*E.length,e);E=new Uint32Array(t);for(let e=0;e<E.length;e++)E[e]=e}return new Uint32Array(E.buffer,0,e)}let u=new Uint8Array(65536)},63949:(e,t,r)=>{r.d(t,{P:()=>T,n:()=>_});var s=r(72509),f=r(56337),n=r(19766);class E{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fields.keys()){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new E(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,r=0,s=e.count){const f=this.stride;if(f%4==0){const n=new Uint32Array(e.buffer,t*f,s*f/4);new Uint32Array(this.buffer,r*f,s*f/4).set(n)}else{const n=new Uint8Array(e.buffer,t*f,s*f);new Uint8Array(this.buffer,r*f,s*f).set(n)}return this}get usedMemory(){return this.byteLength}dispose(){}}class i{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>{return this._fields.set(e[0],{...e[1],constructor:(t=e[1].constructor,R.get(t))});var t})))}freeze(){return this}vec2f(e,t){return this._appendField(e,s.c,t),this}vec2f64(e,t){return this._appendField(e,s.h,t),this}vec3f(e,t){return this._appendField(e,s.B,t),this}vec3f64(e,t){return this._appendField(e,s.a,t),this}vec4f(e,t){return this._appendField(e,s.d,t),this}vec4f64(e,t){return this._appendField(e,s.i,t),this}mat3f(e,t){return this._appendField(e,s.e,t),this}mat3f64(e,t){return this._appendField(e,s.j,t),this}mat4f(e,t){return this._appendField(e,s.f,t),this}mat4f64(e,t){return this._appendField(e,s.k,t),this}vec4u8(e,t){return this._appendField(e,s.o,t),this}f32(e,t){return this._appendField(e,s.b,t),this}f64(e,t){return this._appendField(e,s.g,t),this}u8(e,t){return this._appendField(e,s.l,t),this}u16(e,t){return this._appendField(e,s.p,t),this}i8(e,t){return this._appendField(e,s.x,t),this}vec2i8(e,t){return this._appendField(e,s.y,t),this}vec2i16(e,t){return this._appendField(e,s.D,t),this}vec2u8(e,t){return this._appendField(e,s.m,t),this}vec4u16(e,t){return this._appendField(e,s.s,t),this}u32(e,t){return this._appendField(e,s.t,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,n.a)(!1,`${e} already added to vertex buffer layout`);const s=t.ElementCount*(0,f.e)(t.ElementType),E=this._stride;this._stride+=s,this._fields.set(e,{size:s,constructor:t,offset:E,optional:r})}createBuffer(e){return new E(this,e)}createView(e){return new E(this,e)}clone(){const e=new i;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,r)=>e._fields.set(r,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,f.e)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function _(){return new i}class T{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const r={...e,constructor:A(e.constructor)};this.fields.push([t,r])})),this.stride=e.stride}}const u=[s.b,s.c,s.B,s.d,s.e,s.f,s.g,s.h,s.a,s.i,s.j,s.k,s.l,s.m,s.n,s.o,s.p,s.q,s.r,s.s,s.t,s.u,s.v,s.w,s.x,s.y,s.z,s.A,s.C,s.D,s.E,s.F,s.G,s.H,s.I,s.J];function A(e){return`${e.ElementType}_${e.ElementCount}`}const R=new Map;u.forEach((e=>R.set(A(e),e)))},19766:(e,t,r)=>{r.d(t,{a:()=>f,r:()=>n}),r(46484),r(91276),(0,r(62482).c)();class s{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function f(e,t){if(!e){t=t||"Assertion";const e=new Error(t).stack;throw new s(`${t} at ${e}`)}}function n(e,t,r,s){let f,n=(r[0]-e[0])/t[0],E=(s[0]-e[0])/t[0];n>E&&(f=n,n=E,E=f);let i=(r[1]-e[1])/t[1],_=(s[1]-e[1])/t[1];if(i>_&&(f=i,i=_,_=f),n>_||i>E)return!1;i>n&&(n=i),_<E&&(E=_);let T=(r[2]-e[2])/t[2],u=(s[2]-e[2])/t[2];return T>u&&(f=T,T=u,u=f),!(n>u||T>E||(u<E&&(E=u),E<0))}},52134:(e,t,r)=>{var s,f,n,E,i,_,T,u,A,R,y,c,h,N,d,S,O,o,B,l,p,C,a;r.d(t,{B:()=>i,C:()=>T,D:()=>u,F:()=>_,P:()=>f,R:()=>p,S:()=>d,T:()=>c,U:()=>o,a:()=>E,b:()=>S,c:()=>y,d:()=>N,f:()=>C,g:()=>n,h:()=>I,i:()=>s,j:()=>A,k:()=>R,l:()=>a,m:()=>L,n:()=>O,o:()=>h,q:()=>l,t:()=>B}),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(s||(s={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(f||(f={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(n||(n={})),function(e){e[e.ADD=32774]="ADD",e[e.MIN=32775]="MIN",e[e.MAX=32776]="MAX",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(E||(E={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",e[e.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(i||(i={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(_||(_={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(T||(T={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT",e[e.HALF_FLOAT=5131]="HALF_FLOAT"}(u||(u={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(A||(A={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(R||(R={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(y||(y={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(c||(c={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(h||(h={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(N||(N={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(d||(d={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(S||(S={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(O||(O={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(o||(o={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(B||(B={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(l||(l={})),function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.TransformFeedback=7]="TransformFeedback",e[e.Sync=8]="Sync",e[e.UNCOUNTED=9]="UNCOUNTED",e[e.LinesOfCode=9]="LinesOfCode",e[e.Uniform=10]="Uniform",e[e.COUNT=11]="COUNT"}(p||(p={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(C||(C={})),function(e){e[e.NONE=0]="NONE",e[e.BACK=1029]="BACK"}(a||(a={}));const I=33306;var L,M,U,P,D,b,G;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(L||(L={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(M||(M={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(U||(U={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(P||(P={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(D||(D={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(b||(b={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(G||(G={}))},56337:(e,t,r)=>{function s(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}r.d(t,{e:()=>s})},37322:(e,t,r)=>{function s(e,t,r){return e[0]=t,e[1]=r,e}function f(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e}function n(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e}function E(e,t){const r=t[0]-e[0],s=t[1]-e[1];return Math.sqrt(r*r+s*s)}function i(e,t){const r=t[0],s=t[1];let f=r*r+s*s;return f>0&&(f=1/Math.sqrt(f),e[0]=t[0]*f,e[1]=t[1]*f),e}function _(e,t,r,s){const f=t[0],n=t[1];return e[0]=f+s*(r[0]-f),e[1]=n+s*(r[1]-n),e}function T(e,t,r){const s=t[0],f=t[1];return e[0]=r[0]*s+r[2]*f+r[4],e[1]=r[1]*s+r[3]*f+r[5],e}function u(e,t,r,s){const f=t[0]-r[0],n=t[1]-r[1],E=Math.sin(s),i=Math.cos(s);return e[0]=f*i-n*E+r[0],e[1]=f*E+n*i+r[1],e}r.d(t,{b:()=>f,e:()=>n,g:()=>s,h:()=>_,i:()=>i,k:()=>A,r:()=>u,t:()=>T,u:()=>E}),r(18527);const A=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e}}}]);