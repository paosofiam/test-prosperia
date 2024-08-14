"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9076],{22522:(t,n,e)=>{e.d(n,{a:()=>i,c:()=>s,d:()=>l,n:()=>o,t:()=>a});var r=e(32773);function o(t,n=!1){return t<=r.n?n?new Array(t).fill(0):new Array(t):new Float64Array(t)}function i(t){return((0,r.d)(t)?t.length:t.byteLength/8)<=r.n?Array.from(t):new Float64Array(t)}function l(t,n,e){return Array.isArray(t)?t.slice(n,n+e):t.subarray(n,n+e)}function s(t,n){for(let e=0;e<n.length;++e)t[e]=n[e];return t}function a(t){return Array.isArray(t)?new Float64Array(t):t}},32096:(t,n,e)=>{e.d(n,{M:()=>f,c:()=>p});var r,o=e(32816),i=e(99924),l=e(32773),s=e(20266),a=e(29298),u=e(48844),c=e(69421);let f=r=class extends i.oY{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return p(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},s.L.getLogger(this))}castPosition(t){return t&&t instanceof Float32Array&&s.L.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),p(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},s.L.getLogger(this))}castUv(t){return p(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},s.L.getLogger(this))}castNormal(t){return p(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},s.L.getLogger(this))}castTangent(t){return p(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},s.L.getLogger(this))}clone(){const t={position:(0,l.o8)(this.position),uv:(0,l.o8)(this.uv),normal:(0,l.o8)(this.normal),tangent:(0,l.o8)(this.tangent),color:(0,l.o8)(this.color)};return new r(t)}clonePositional(){const t={position:(0,l.o8)(this.position),normal:(0,l.o8)(this.normal),tangent:(0,l.o8)(this.tangent),uv:this.uv,color:this.color};return new r(t)}get memoryUsage(){let t=0;return t+=this.position.byteLength,null!=this.uv&&(t+=this.uv.byteLength),null!=this.normal&&(t+=this.normal.byteLength),null!=this.tangent&&(t+=this.tangent.byteLength),null!=this.color&&(t+=this.color.byteLength),t}};function g(t,n,e,r){const{loggerTag:o,stride:i}=n;return t.length%i!=0?(r.error(o,`Invalid array length, expected a multiple of ${i}`),new e([])):t}function p(t,n,e,r,o){if(!t)return t;if(t instanceof n)return g(t,r,n,o);for(const i of e)if(t instanceof i)return g(new n(t),r,n,o);if(Array.isArray(t))return g(new n(t),r,n,o);{const r=e.map((t=>`'${t.name}'`));return o.error(`Failed to set property, expected one of ${r}, but got ${t.constructor.name}`),new n([])}}function h(t,n,e){n[e]=function(t){const n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e];return n}(t)}(0,o._)([(0,a.MZ)({json:{write:h}})],f.prototype,"color",void 0),(0,o._)([(0,u.w)("color")],f.prototype,"castColor",null),(0,o._)([(0,a.MZ)({nonNullable:!0,json:{write:h}})],f.prototype,"position",void 0),(0,o._)([(0,u.w)("position")],f.prototype,"castPosition",null),(0,o._)([(0,a.MZ)({json:{write:h}})],f.prototype,"uv",void 0),(0,o._)([(0,u.w)("uv")],f.prototype,"castUv",null),(0,o._)([(0,a.MZ)({json:{write:h}})],f.prototype,"normal",void 0),(0,o._)([(0,u.w)("normal")],f.prototype,"castNormal",null),(0,o._)([(0,a.MZ)({json:{write:h}})],f.prototype,"tangent",void 0),(0,o._)([(0,u.w)("tangent")],f.prototype,"castTangent",null),f=r=(0,o._)([(0,c.$)("esri.geometry.support.MeshVertexAttributes")],f)},29222:(t,n,e)=>{e.d(n,{c:()=>u});var r=e(16699),o=e(47812),i=e(2589),l=e(47387),s=e(69763);function a(t,n,e){const r=Math.sin(t),o=Math.cos(t),i=Math.sin(n),l=Math.cos(n),s=e;return s[0]=-r,s[4]=-i*o,s[8]=l*o,s[12]=0,s[1]=o,s[5]=-i*r,s[9]=l*r,s[13]=0,s[2]=0,s[6]=l,s[10]=i,s[14]=0,s[3]=0,s[7]=0,s[11]=0,s[15]=1,s}function u(t,n,e,r){if(null==t||null==r)return!1;const i=(0,l.c)(t,l.s),u=(0,l.c)(r,l.d);if(i===u&&!c(u)&&(i!==l.P.UNKNOWN||(0,s.f)(t,r)))return(0,o.c)(e,n),!0;if(c(u)){const t=l.b[i][l.P.LON_LAT],r=l.b[l.P.LON_LAT][u];return null!=t&&null!=r&&(t(n,0,g,0),r(g,0,p,0),a(f*g[0],f*g[1],e),e[12]=p[0],e[13]=p[1],e[14]=p[2],!0)}if(!(u!==l.P.WEB_MERCATOR&&u!==l.P.PLATE_CARREE&&u!==l.P.WGS84&&u!==l.P.CGCS2000||i!==l.P.WGS84&&i!==l.P.SPHERICAL_ECEF&&i!==l.P.WEB_MERCATOR&&i!==l.P.CGCS2000)){const t=l.b[i][l.P.LON_LAT],r=l.b[l.P.LON_LAT][u];return null!=t&&null!=r&&(t(n,0,g,0),r(g,0,p,0),i===l.P.SPHERICAL_ECEF?function(t,n,e){a(t,n,e),(0,o.t)(e,e)}(f*g[0],f*g[1],e):(0,o.l)(e),e[12]=p[0],e[13]=p[1],e[14]=p[2],!0)}return!1}function c(t){return t===l.P.SPHERICAL_ECEF||t===l.P.SPHERICAL_MARS_PCPF||t===l.P.SPHERICAL_MOON_PCPF}const f=(0,r.d)(1),g=(0,i.c)(),p=(0,i.c)()},19076:(t,n,e)=>{e.d(n,{convertMeshVertexSpace:()=>a});var r=e(6407),o=e(32773),i=e(80959),l=e(32096),s=e(83628);async function a(t,n,e){await Promise.resolve(),(0,i.Te)(e);const a=(0,s.c)(t,n);if(!a)throw new r.A("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const u=t.cloneAndModifyVertexAttributes(new l.M({...a,uv:(0,o.o8)(t.vertexAttributes.uv),color:(0,o.o8)(t.vertexAttributes.color)}),n);return u.transform=null,u}e(20266),e(90740),e(13671),e(32816),e(99924),e(41390),e(69421),e(40499),e(93181),e(91047),e(36544),e(29298),e(58498),e(45371),e(48844),e(16699),e(26809),e(2589),e(18527),e(69763),e(93804),e(18683),e(64604),e(29512),e(99063),e(47812),e(91658),e(7969),e(56273),e(29222),e(47387),e(46728),e(86741),e(78281),e(44945),e(44600),e(2160),e(49877),e(64752),e(29208),e(36533),e(84200),e(97827),e(91695),e(18169),e(48402),e(67504),e(64102),e(44366),e(2895),e(52731),e(88663),e(29312),e(19907),e(49811),e(22522),e(72509),e(37322),e(91276),e(23164)},87889:(t,n,e)=>{function r(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function o(t,n,e,r,o,i,l,s,a,u){return t[0]=n,t[1]=e,t[2]=r,t[3]=o,t[4]=i,t[5]=l,t[6]=s,t[7]=a,t[8]=u,t}function i(t,n){if(t===n){const e=n[1],r=n[2],o=n[5];t[1]=n[3],t[2]=n[6],t[3]=e,t[5]=n[7],t[6]=r,t[7]=o}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function l(t,n){const e=n[0],r=n[1],o=n[2],i=n[3],l=n[4],s=n[5],a=n[6],u=n[7],c=n[8],f=c*l-s*u,g=-c*i+s*a,p=u*i-l*a;let h=e*f+r*g+o*p;return h?(h=1/h,t[0]=f*h,t[1]=(-c*r+o*u)*h,t[2]=(s*r-o*l)*h,t[3]=g*h,t[4]=(c*e-o*a)*h,t[5]=(-s*e+o*i)*h,t[6]=p*h,t[7]=(-u*e+r*a)*h,t[8]=(l*e-r*i)*h,t):null}function s(t,n){const e=n[0],r=n[1],o=n[2],i=n[3],l=n[4],s=n[5],a=n[6],u=n[7],c=n[8];return t[0]=l*c-s*u,t[1]=o*u-r*c,t[2]=r*s-o*l,t[3]=s*a-i*c,t[4]=e*c-o*a,t[5]=o*i-e*s,t[6]=i*u-l*a,t[7]=r*a-e*u,t[8]=e*l-r*i,t}function a(t,n,e){const r=n[0],o=n[1],i=n[2],l=n[3],s=n[4],a=n[5],u=n[6],c=n[7],f=n[8],g=e[0],p=e[1],h=e[2],y=e[3],A=e[4],d=e[5],m=e[6],w=e[7],v=e[8];return t[0]=g*r+p*l+h*u,t[1]=g*o+p*s+h*c,t[2]=g*i+p*a+h*f,t[3]=y*r+A*l+d*u,t[4]=y*o+A*s+d*c,t[5]=y*i+A*a+d*f,t[6]=m*r+w*l+v*u,t[7]=m*o+w*s+v*c,t[8]=m*i+w*a+v*f,t}function u(t,n,e){const r=e[0],o=e[1],i=e[2];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t[6]=i*n[6],t[7]=i*n[7],t[8]=i*n[8],t}function c(t,n){const e=n[0],r=n[1],o=n[2],i=n[3],l=e+e,s=r+r,a=o+o,u=e*l,c=r*l,f=r*s,g=o*l,p=o*s,h=o*a,y=i*l,A=i*s,d=i*a;return t[0]=1-f-h,t[3]=c-d,t[6]=g+A,t[1]=c+d,t[4]=1-u-h,t[7]=p-y,t[2]=g-A,t[5]=p+y,t[8]=1-u-f,t}function f(t,n){const e=n[0],r=n[1],o=n[2],i=n[3],l=n[4],s=n[5],a=n[6],u=n[7],c=n[8],f=n[9],g=n[10],p=n[11],h=n[12],y=n[13],A=n[14],d=n[15],m=e*s-r*l,w=e*a-o*l,v=e*u-i*l,C=r*a-o*s,R=r*u-i*s,S=o*u-i*a,F=c*y-f*h,E=c*A-g*h,L=c*d-p*h,b=f*A-g*y,M=f*d-p*y,P=g*d-p*A;let x=m*P-w*M+v*b+C*L-R*E+S*F;return x?(x=1/x,t[0]=(s*P-a*M+u*b)*x,t[1]=(a*L-l*P-u*E)*x,t[2]=(l*M-s*L+u*F)*x,t[3]=(o*M-r*P-i*b)*x,t[4]=(e*P-o*L+i*E)*x,t[5]=(r*L-e*M-i*F)*x,t[6]=(y*S-A*R+d*C)*x,t[7]=(A*v-h*S-d*w)*x,t[8]=(h*R-y*v+d*m)*x,t):null}e.d(n,{a:()=>s,e:()=>u,f:()=>r,g:()=>c,i:()=>l,m:()=>a,n:()=>f,s:()=>o,t:()=>i})},88485:(t,n,e)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function o(t,n,e,r,o,i,l,s,a){return[t,n,e,r,o,i,l,s,a]}e.d(n,{I:()=>i,c:()=>r,f:()=>o});const i=[1,0,0,0,1,0,0,0,1]},86741:(t,n,e)=>{e.d(n,{p:()=>l});var r=e(2589),o=e(78281),i=e(47387);function l(t,n,e,r){if((0,o.canProjectWithoutEngine)(t.spatialReference,e)){s[0]=t.x,s[1]=t.y;const o=t.z;return s[2]=o??r??0,(0,i.p)(s,t.spatialReference,0,n,e,0,1)}const l=(0,o.tryProjectWithZConversion)(t,e);return!!l&&(n[0]=l?.x,n[1]=l?.y,n[2]=l?.z??r??0,!0)}const s=(0,r.c)()},91658:(t,n,e)=>{e.d(n,{W:()=>a,g:()=>u});var r=e(69763),o=e(7969);const i=new o.A(r.S),l=new o.A(r.T),s=new o.A(r.U),a=new o.A(r.W);function u(t){const n=c.get(t);if(n)return n;let e=i;if(t)if(t===l)e=l;else if(t===s)e=s;else{const n=t.wkid,o=t.latestWkid;if(null!=n||null!=o)(0,r.V)(n)||(0,r.V)(o)?e=l:((0,r.X)(n)||(0,r.X)(o))&&(e=s);else{const n=t.wkt2??t.wkt;if(n){const t=n.toUpperCase();t===f?e=l:t===g&&(e=s)}}}return c.set(t,e),e}const c=new Map,f=l.wkt.toUpperCase(),g=s.wkt.toUpperCase()},19907:(t,n,e)=>{function r(t,n,e){o(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function o(t,n,e,r=3,o=r){if(t.length/r!==Math.ceil(n.length/o))return t;const i=t.length/r,l=e[0],s=e[1],a=e[2],u=e[4],c=e[5],f=e[6],g=e[8],p=e[9],h=e[10],y=e[12],A=e[13],d=e[14];let m=0,w=0;for(let e=0;e<i;e++){const e=n[m],i=n[m+1],v=n[m+2];t[w]=l*e+u*i+g*v+y,t[w+1]=s*e+c*i+p*v+A,t[w+2]=a*e+f*i+h*v+d,m+=o,w+=r}return t}function i(t,n,e){l(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function l(t,n,e,r=3,o=r){if(t.length/r!==Math.ceil(n.length/o))return;const i=t.length/r,l=e[0],s=e[1],a=e[2],u=e[3],c=e[4],f=e[5],g=e[6],p=e[7],h=e[8];let y=0,A=0;for(let e=0;e<i;e++){const e=n[y],i=n[y+1],d=n[y+2];t[A]=l*e+u*i+g*d,t[A+1]=s*e+c*i+p*d,t[A+2]=a*e+f*i+h*d,y+=o,A+=r}}function s(t,n,e){a(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function a(t,n,e,r=3,o=r){const i=Math.min(t.length/r,n.length/o);let l=0,s=0;for(let a=0;a<i;a++)t[s]=e*n[l],t[s+1]=e*n[l+1],t[s+2]=e*n[l+2],l+=o,s+=r;return t}function u(t,n,e,r=3,o=r){const i=t.length/r;if(i!==Math.ceil(n.length/o))return t;let l=0,s=0;for(let a=0;a<i;a++)t[s]=n[l]+e[0],t[s+1]=n[l+1]+e[1],t[s+2]=n[l+2]+e[2],l+=o,s+=r;return t}function c(t,n){f(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function f(t,n,e=3,r=e){const o=Math.min(t.length/e,n.length/r);let i=0,l=0;for(let s=0;s<o;s++){const o=n[i],s=n[i+1],a=n[i+2],u=o*o+s*s+a*a;if(u>0){const n=1/Math.sqrt(u);t[l]=n*o,t[l+1]=n*s,t[l+2]=n*a}i+=r,l+=e}}e.d(n,{a:()=>o,b:()=>u,c:()=>r,d:()=>i,e:()=>c,f:()=>a,n:()=>f,s:()=>s,t:()=>l}),e(32773),e(20266)},83628:(t,n,e)=>{e.d(n,{c:()=>v,g:()=>F,p:()=>w});var r=e(20266),o=e(16699),i=e(69763),l=e(87889),s=e(88485),a=e(47812),u=e(87162),c=e(26809),f=e(2589),g=e(91658),p=e(29222),h=e(86741),y=e(44366),A=e(19907),d=e(49811);const m=()=>r.L.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function w(t,n,{vertexSpace:e,spatialReference:r}){if("georeferenced"===e.type){const o=t;if(!(0,h.p)(n,o,r))return!1;const{origin:i}=e;return(0,c.c)(t,o,i),!0}const o=(0,g.g)(r),i=t;if(!(0,h.p)(n,i,o))return!1;const{origin:l}=e,s=P;if(!(0,p.c)(r,l,s,o))return!1;const u=(0,a.i)(P,s);return null!=u&&((0,c.h)(t,i,u),!0)}function v(t,n,e){const{vertexSpace:r,transform:i,vertexAttributes:s}=t,f=S(t.spatialReference,e,x.SOURCE|x.TARGET);if((0,y.v)(r,n)&&(!i||(0,a.e)(i.localMatrix,u.I))&&(0,o.e)(f,1)){const{position:t,normal:n,tangent:r}=s,o=e?.allowBufferReuse;return{position:o?t:t.slice(),normal:o?n:n?.slice(),tangent:o?r:r?.slice()}}switch(t.vertexSpace.type){case"local":return"local"===n.type?function({vertexAttributes:t,spatialReference:n,transform:e},{origin:r},o,i){const l=(0,g.g)(n);if(!(0,p.c)(n,r,E,l))return(0,d.CN)(m(),n,l),null;if(e&&(0,a.m)(E,E,e.localMatrix),!(0,p.c)(n,o,L,l))return(0,d.CN)(m(),l,n),null;(0,a.i)(L,L);const s=(0,a.m)(E,L,E);return R(s,n,i,x.SOURCE|x.TARGET),C(t,s)}(t,t.vertexSpace,n.origin,e):function({spatialReference:t,vertexAttributes:n,transform:e},{origin:r},o,i){const l=(0,g.g)(t);if(!(0,p.c)(t,r,E,l))return(0,d.CN)(m(),t,l),null;e&&(0,a.m)(E,E,e.localMatrix),R(E,t,i,x.SOURCE);const s=new Float64Array(n.position.length),u=function(t,n,e,r){(0,A.a)(r,t,E);const o=new Float64Array(t.length);return(0,d.$5)(r,o,e)?o:((0,d.CN)(m(),(0,g.g)(e),e),null)}(n.position,0,t,s);if(!u)return null;const f=function(t,n,e,r,o){if(null==e)return null;const i=new Float32Array(e.length);return(0,d.qs)(e,i,r),(0,d.si)(i,t,n,o,i)?i:((0,d.CN)(m(),(0,g.g)(o),o),null)}(u,s,n.normal,E,t);if(n.normal&&!f)return null;const h=function(t,n,e,r,o){if(null==e)return null;const i=new Float32Array(e.length);return(0,d.KM)(e,i,r),(0,d.Mv)(i,t,n,o,i)?i:((0,d.CN)(m(),(0,g.g)(o),o),null)}(u,s,n.tangent,E,t);if(n.tangent&&!h)return null;if(o){const t=(0,c.u)(M,o);(0,A.b)(u,u,t)}return{position:u,normal:f,tangent:h}}(t,t.vertexSpace,n.origin,e);case"georeferenced":return"local"===n.type?function({vertexAttributes:t,spatialReference:n,transform:e},{origin:r},o,i){const s=(0,g.g)(n);if(!(0,p.c)(n,o,E,s))return(0,d.CN)(m(),n,s),null;const u=1/S(n,i,x.TARGET);(0,a.s)(E,E,[u,u,u]);const c=(0,a.i)(L,E),{position:f,normal:h,tangent:y}=function(t,n,e){if(!n)return t;if(!e){const{position:e,normal:r,tangent:o}=t;return{position:(0,A.b)(new Float64Array(e.length),e,n),tangent:o,normal:r}}const r=C(t,e.localMatrix);return(0,A.b)(r.position,r.position,n),r}(t,r,e),w=new Float64Array(f.length),v=function(t,n,e,r){const o=(0,d.gr)(t,n,r);if(!o)return(0,d.CN)(m(),n,(0,g.g)(n)),null;const i=new Float64Array(o.length);return(0,A.a)(i,o,e),i}(f,n,c,w);if(!v)return null;const R=(0,l.n)(b,c),F=function(t,n,e,r,o,i){if(null==t)return null;const l=i??new Float32Array(t.length);return(0,d.X4)(t,n,e,r,l)?((0,A.t)(l,l,o),l):((0,d.CN)(m(),r,(0,g.g)(r)),null)}(h,f,w,n,R,h!==t.normal?h:void 0);if(!F&&h)return null;const M=function(t,n,e,r,o,i){if(null==t)return null;const l=i??new Float32Array(t.length);return(0,d.xA)(t,n,e,r,l)?((0,A.t)(l,l,o,4),l):((0,d.CN)(m(),r,(0,g.g)(r)),null)}(y,f,w,n,R,y!==t.tangent?y:void 0);return!M&&y?null:{position:v,normal:F,tangent:M}}(t,t.vertexSpace,n.origin,e):function({vertexAttributes:t,transform:n,spatialReference:e},{origin:r},o,i){const{position:l,normal:s,tangent:a}=n?C(t,n.localMatrix):t,u=new Float64Array(l.length);let f=l;if(r&&(f=(0,A.b)(u,f,r)),o){const t=(0,c.u)(M,o);f=(0,A.b)(u,f,t)}S(e,i,x.NONE);const g=i?.allowBufferReuse;return{position:f!==t.position||g?f:f.slice(),normal:s!==t.normal||g?s:s?.slice(),tangent:a!==t.tangent||g?a:a?.slice()}}(t,t.vertexSpace,n.origin,e)}}function C(t,n){const e=new Float64Array(t.position.length);(0,A.a)(e,t.position,n);const r=t.normal?new Float32Array(t.normal.length):null,o=t.tangent?new Float32Array(t.tangent.length):null;return r&&t.normal&&(0,d.qs)(t.normal,r,n),o&&t.tangent&&(0,d.KM)(t.tangent,o,n),{position:e,normal:r,tangent:o}}function R(t,n,e,r){const o=S(n,e,r);1!==o&&(0,a.s)(t,t,[o,o,o])}function S(t,n,e){const r=!!(e&x.SOURCE),o=!!(e&x.TARGET),i=n?.sourceUnit,l=n?.targetUnit;if(!i&&!l)return 1;let s=F(i,t);!r&&i&&1!==s&&(m().warn("source unit conversion not supported"),s=1);let a=1/F(l,t);return!o&&l&&1!==a&&(m().warn("target unit conversion not supported"),a=1),s*a}function F(t,n){if(null==t)return 1;const e=(0,i.R)(n);return 1/(0,i.l)(e,"meters",t)}const E=(0,u.c)(),L=(0,u.c)(),b=(0,s.c)(),M=(0,f.c)(),P=(0,u.c)();var x,T;(T=x||(x={}))[T.NONE=0]="NONE",T[T.SOURCE=1]="SOURCE",T[T.TARGET=2]="TARGET"}}]);