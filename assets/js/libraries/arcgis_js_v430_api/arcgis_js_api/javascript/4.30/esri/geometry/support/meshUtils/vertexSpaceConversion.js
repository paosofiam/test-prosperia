// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../core/mathUtils ../../../core/unitUtils ../../../core/libs/gl-matrix-2/math/mat3 ../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../core/libs/gl-matrix-2/math/mat4 ../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../spatialReferenceEllipsoidUtils ../../projection/computeTranslationToOriginAndRotation ../../projection/projectPointToVector ../meshVertexSpaceUtils ../../../chunks/vec3 ./projection".split(" "),
function(y,I,J,E,K,L,q,z,A,M,r,v,F,N,t,h){function O({vertexAttributes:a,transform:b,spatialReference:c},{origin:d},f,e){const {position:g,normal:k,tangent:l}=b?B(a,b.localMatrix):a,n=new Float64Array(g.length);b=g;d&&(b=t.translate(n,b,d));f&&(d=A.negate(G,f),b=t.translate(n,b,d));w(c,e,u.NONE);c=e?.allowBufferReuse;return{position:b!==a.position||c?b:b.slice(),normal:k!==a.normal||c?k:k?.slice(),tangent:l!==a.tangent||c?l:l?.slice()}}function P({spatialReference:a,vertexAttributes:b,transform:c},
{origin:d},f,e){var g=r.getSphericalPCPF(a);if(!v.computeTranslationToOriginAndRotation(a,d,m,g))return h.logProjectionError(p(),a,g),null;c&&q.multiply(m,m,c.localMatrix);c=m;e=w(a,e,u.SOURCE);1!==e&&q.scale(c,c,[e,e,e]);e=new Float64Array(b.position.length);c=b.position;t.transformMat4(e,c,m);c=new Float64Array(c.length);h.projectFromPCPF(e,c,a)||(h.logProjectionError(p(),r.getSphericalPCPF(a),a),c=null);if(!c)return null;d=b.normal;g=m;if(null==d)d=null;else{var k=new Float32Array(d.length);h.transformNormal(d,
k,g);h.projectNormalFromPCPF(k,c,e,a,k)?d=k:(h.logProjectionError(p(),r.getSphericalPCPF(a),a),d=null)}if(b.normal&&!d)return null;g=b.tangent;k=m;if(null==g)a=null;else{var l=new Float32Array(g.length);h.transformTangent(g,l,k);h.projectTangentFromPCPF(l,c,e,a,l)?a=l:(h.logProjectionError(p(),r.getSphericalPCPF(a),a),a=null)}if(b.tangent&&!a)return null;f&&(b=A.negate(G,f),t.translate(c,c,b));return{position:c,normal:d,tangent:a}}function Q({vertexAttributes:a,spatialReference:b,transform:c},{origin:d},
f,e){const g=r.getSphericalPCPF(b);if(!v.computeTranslationToOriginAndRotation(b,f,m,g))return h.logProjectionError(p(),b,g),null;f=1/w(b,e,u.TARGET);q.scale(m,m,[f,f,f]);f=q.invert(x,m);if(d)if(c)c=B(a,c.localMatrix),t.translate(c.position,c.position,d),d=c;else{const {position:H,normal:R,tangent:S}=a;d={position:t.translate(new Float64Array(H.length),H,d),tangent:S,normal:R}}else d=a;const {position:k,normal:l,tangent:n}=d;d=new Float64Array(k.length);(e=h.projectToPCPF(k,b,d))?(c=new Float64Array(e.length),
t.transformMat4(c,e,f)):(h.logProjectionError(p(),b,r.getSphericalPCPF(b)),c=null);if(!c)return null;f=K.normalFromMat4(T,f);null==l?e=null:(e=(l!==a.normal?l:void 0)??new Float32Array(l.length),h.projectNormalToPCPF(l,k,d,b,e)?t.transformMat3(e,e,f):(h.logProjectionError(p(),b,r.getSphericalPCPF(b)),e=null));if(!e&&l)return null;null==n?b=null:(a=(n!==a.tangent?n:void 0)??new Float32Array(n.length),h.projectTangentToPCPF(n,k,d,b,a)?(t.transformMat3(a,a,f,4),b=a):(h.logProjectionError(p(),b,r.getSphericalPCPF(b)),
b=null));return!b&&n?null:{position:c,normal:e,tangent:b}}function U({vertexAttributes:a,spatialReference:b,transform:c},{origin:d},f,e){const g=r.getSphericalPCPF(b);if(!v.computeTranslationToOriginAndRotation(b,d,m,g))return h.logProjectionError(p(),b,g),null;c&&q.multiply(m,m,c.localMatrix);if(!v.computeTranslationToOriginAndRotation(b,f,x,g))return h.logProjectionError(p(),g,b),null;q.invert(x,x);c=q.multiply(m,x,m);b=w(b,e,u.SOURCE|u.TARGET);1!==b&&q.scale(c,c,[b,b,b]);return B(a,c)}function B(a,
b){const c=new Float64Array(a.position.length);t.transformMat4(c,a.position,b);const d=a.normal?new Float32Array(a.normal.length):null,f=a.tangent?new Float32Array(a.tangent.length):null;d&&a.normal&&h.transformNormal(a.normal,d,b);f&&a.tangent&&h.transformTangent(a.tangent,f,b);return{position:c,normal:d,tangent:f}}function w(a,b,c){const d=!!(c&u.SOURCE);c=!!(c&u.TARGET);const f=b?.sourceUnit;b=b?.targetUnit;if(!f&&!b)return 1;let e=C(f,a);!d&&f&&1!==e&&(p().warn("source unit conversion not supported"),
e=1);a=1/C(b,a);!c&&b&&1!==a&&(p().warn("target unit conversion not supported"),a=1);return e*a}function C(a,b){if(null==a)return 1;b=E.getMetersPerCartesianUnitForSR(b);return 1/E.convertUnit(b,"meters",a)}const p=()=>I.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion"),m=z.create(),x=z.create(),T=L.create(),G=M.create(),D=z.create();var u;(function(a){a[a.NONE=0]="NONE";a[a.SOURCE=1]="SOURCE";a[a.TARGET=2]="TARGET"})(u||={});y.convertVertexSpace=function(a,b,c){const {vertexSpace:d,
transform:f,vertexAttributes:e}=a,g=w(a.spatialReference,c,u.SOURCE|u.TARGET);if(N.vertexSpaceEquals(d,b)&&(!f||q.exactEquals(f.localMatrix,z.IDENTITY))&&J.floatEqualUlp(g,1)){const {position:k,normal:l,tangent:n}=e;a=c?.allowBufferReuse;return{position:a?k:k.slice(),normal:a?l:l?.slice(),tangent:a?n:n?.slice()}}switch(a.vertexSpace.type){case "local":return"local"===b.type?U(a,a.vertexSpace,b.origin,c):P(a,a.vertexSpace,b.origin,c);case "georeferenced":return"local"===b.type?Q(a,a.vertexSpace,b.origin,
c):O(a,a.vertexSpace,b.origin,c)}};y.getUnitToSpatialReferenceScaleConversion=C;y.projectPointToVertexSpace=function(a,b,{vertexSpace:c,spatialReference:d}){if("georeferenced"===c.type){if(!F.projectPointToVector(b,a,d))return!1;({origin:d}=c);A.subtract(a,a,d);return!0}const f=r.getSphericalPCPF(d);if(!F.projectPointToVector(b,a,f))return!1;({origin:b}=c);if(!v.computeTranslationToOriginAndRotation(d,b,D,f))return!1;d=q.invert(D,D);if(null==d)return!1;A.transformMat4(a,a,d);return!0};Object.defineProperty(y,
Symbol.toStringTag,{value:"Module"})});