// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/mathUtils ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../lib/LongVectorMath ./Lightsources".split(" "),function(h,A,m,B,f,l){function p(c){return(c+1)*(c+1)}function w(c){return A.clamp(Math.floor(Math.sqrt(c)-1),0,2)}function q(c,a,b){const e=c[0],d=c[1];c=c[2];b=b||[];b.length=p(a);0<=a&&(b[0]=.28209479177);1<=a&&(b[1]=.4886025119*e,b[2]=.4886025119*c,b[3]=.4886025119*d);2<=a&&(b[4]=1.09254843059*e*d,b[5]=1.09254843059*d*c,b[6]=.31539156525*
(3*c*c-1),b[7]=1.09254843059*e*c,b[8]=.54627421529*(e*e-d*d));return b}function x(c,a){c=p(c);a=a||{r:[],g:[],b:[]};a.r.length=a.g.length=a.b.length=c;for(let b=0;b<c;b++)a.r[b]=a.g[b]=a.b[b]=0;return a}function y(c,a){const b=w(a.r.length);for(const e of c)m.negate(r,e.direction),q(r,b,g),f.elementwiseProduct(g,n),f.scalarProduct(g,e.intensity[0],k),f.add(a.r,k),f.scalarProduct(g,e.intensity[1],k),f.add(a.g,k),f.scalarProduct(g,e.intensity[2],k),f.add(a.b,k);return a}function z(c,a){q(r,0,g);for(const b of c)a.r[0]+=
g[0]*n[0]*b.intensity[0]*4*Math.PI,a.g[0]+=g[0]*n[0]*b.intensity[1]*4*Math.PI,a.b[0]+=g[0]*n[0]*b.intensity[2]*4*Math.PI;return a}const t=[],u=[],v=[],g=[0],k=[0],r=B.create(),n=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];h.combineLights=function(c,a,b,e){x(a,e);m.set(b.intensity,0,0,0);a=!1;t.length=0;u.length=0;v.length=0;for(const d of c)d instanceof l.MainLight&&!a?(m.copy(b.direction,d.direction),m.copy(b.intensity,d.intensity),b.specularStrength=d.specularStrength,
b.environmentStrength=d.environmentStrength,b.castShadows=d.castShadows,a=!0):d instanceof l.MainLight||d instanceof l.FillLight?t.push(d):d instanceof l.AmbientLight?u.push(d):d instanceof l.SphericalHarmonicsAmbientLight&&v.push(d);y(t,e);z(u,e);for(const d of v)f.add(e.r,d.r),f.add(e.g,d.g),f.add(e.b,d.b)};h.computeCoefficients=q;h.initSHCoefficients=x;h.numberOfCoefficients=p;h.orderFromNumberOfCoefficients=w;h.projectAmbientLights=z;h.projectFillLights=y;Object.defineProperty(h,Symbol.toStringTag,
{value:"Module"})});