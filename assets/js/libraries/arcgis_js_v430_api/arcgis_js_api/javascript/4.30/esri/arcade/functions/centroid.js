// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../core/mathUtils","../../geometry/Point","../../geometry/support/intersectsBase"],function(l,A,v,B){function C(a,b,d){const c={x:0,y:0};b&&(c.z=0);d&&(c.m=0);let g=0;var e=a[0];for(let w=0;w<a.length;w++){const p=a[w];a:if(p.length!==e.length)var f=!1;else{for(f=0;f<p.length;f++)if(p[f]!==e[f]){f=!1;break a}f=!0}if(!1===f){f=x(e,p,b);var h=p,n=b,m=d;const t={x:(e[0]+h[0])/2,y:(e[1]+h[1])/2};n&&(t.z=(e[2]+h[2])/2);n&&m?t.m=(e[3]+h[3])/2:m&&(t.m=(e[2]+h[2])/2);e=t;e.x*=f;e.y*=
f;c.x+=e.x;c.y+=e.y;b&&(e.z*=f,c.z+=e.z);d&&(e.m*=f,c.m+=e.m);g+=f;e=p}}0<g?(c.x/=g,c.y/=g,b&&(c.z/=g),d&&(c.m/=g)):(c.x=a[0][0],c.y=a[0][1],b&&(c.z=a[0][2]),d&&b?c.m=a[0][3]:d&&(c.m=a[0][2]));return c}function x(a,b,d){const c=b[0]-a[0];a=b[1]-a[1];return d?(b=b[2]-b[2],Math.sqrt(c*c+a*a+b*b)):Math.sqrt(c*c+a*a)}function u(a,b,d=0){for(;a<d;)a+=b;for(d+=b;a>=d;)a-=b;return a}function y(a,b){return Math.atan2(b.y-a.y,b.x-a.x)}function z(a,b,d){var c=a.x-b.x;a=a.y-b.y;var g=d.x-b.x;b=d.y-b.y;return Math.atan2(c*
b-g*a,c*g+a*b)}const q=[];for(const a of[[9002,56146130,6131,6132,8050,8051,8228],[9003,5702,6358,6359,6360,8052,8053],[9095,5754]]){const b=a[0];for(let d=1;d<a.length;d++)q[a[d]]=b}const r=[];r[9002]=.3048;r[9003]=.3048006096012192;r[9095]=.3048007491;const k=[0,0];l.angle2D=function(a,b){return u(y(a,b),2*Math.PI)*(180/Math.PI)};l.angleBetween2D=function(a,b,d){return A.rad2deg(u(z(a,b,d),2*Math.PI))};l.angleBetweenRad=z;l.angleRad=y;l.bearing2D=function(a,b){return u(Math.PI/2-y(a,b),2*Math.PI)*
(180/Math.PI)};l.bearingBetween2D=function(a,b,d){return A.rad2deg(u(-1*z(a,b,d),2*Math.PI))};l.centroidMultiPoint=function(a){if(0===a.points.length)return null;var b=0;let d=0,c=0,g=0;for(let e=0;e<a.points.length;e++){const f=a.getPoint(e);!0===f.hasZ&&(c+=f.z);!0===f.hasM&&(g+=f.m);b+=f.x;d+=f.y;g+=f.m}b={x:b/a.points.length,y:d/a.points.length,spatialReference:null};b.spatialReference=a.spatialReference.toJSON();!0===a.hasZ&&(b.z=c/a.points.length);!0===a.hasM&&(b.m=g/a.points.length);return new v(b)};
l.centroidPolyline=function(a){const b={x:0,y:0,spatialReference:a.spatialReference.toJSON()},d={x:0,y:0,spatialReference:a.spatialReference.toJSON()};let c=0,g=0;for(let h=0;h<a.paths.length;h++)if(0!==a.paths[h].length){a:{var e=a.paths[h];var f=!0===a.hasZ;if(1>=e.length){e=0;break a}let n=0;for(let m=1;m<e.length;m++)n+=x(e[m-1],e[m],f);e=n}0===e?(e=C(a.paths[h],!0===a.hasZ,!0===a.hasM),b.x+=e.x,b.y+=e.y,!0===a.hasZ&&(b.z+=e.z),!0===a.hasM&&(b.m+=e.m),++c):(f=C(a.paths[h],!0===a.hasZ,!0===a.hasM),
d.x+=f.x*e,d.y+=f.y*e,!0===a.hasZ&&(d.z+=f.z*e),!0===a.hasM&&(d.m+=f.m*e),g+=e)}return 0<g?(d.x/=g,d.y/=g,!0===a.hasZ&&(d.z/=g),!0===a.hasM&&(d.m/=g),new v(d)):0<c?(b.x/=c,b.y/=c,!0===a.hasZ&&(d.z/=c),!0===a.hasM&&(b.m/=c),new v(b)):null};l.closestPointOnLineSegment=function(a,b,d){var c=0;c=d[0]-b[0];const g=d[1]-b[1],e=c*c+g*g;0===e?c=.5:(c=((a[0]-b[0])*c+(a[1]-b[1])*g)/e,0>c?c=0:1<c&&(c=1));return.5>=c?[b[0]+(d[0]-b[0])*c,b[1]+(d[1]-b[1])*c]:[d[0]-(d[0]-b[0])*(1-c),d[1]-(d[1]-b[1])*(1-c)]};l.closestPointOnLineSegmentWithZ=
function(a,b,d){var c=[d[0]-b[0],d[1]-b[1],d[2]-b[2]];a=[a[0]-b[0],a[1]-b[1],a[2]-b[2]];c=Math.max(0,Math.min(1,(c[0]*a[0]+c[1]*a[1]+c[2]*a[2])/(c[0]*c[0]+c[1]*c[1]+c[2]*c[2])));return[b[0]+(d[0]-b[0])*c,b[1]+(d[1]-b[1])*c,b[2]+(d[2]-b[2])*c]};l.getMetersPerVerticalUnitForSR=function(a){return a.vcsWkid&&void 0!==q[a.vcsWkid]?r[q[a.vcsWkid]]:a.latestVcsWkid&&void 0!==q[a.latestVcsWkid]?r[q[a.latestVcsWkid]]:1};l.pathsSelfIntersecting=function(a){for(let n=0;n<a.length;n++){const m=a[n];for(var b=
0;b<m.length-1;b++){var d=m[b],c=m[b+1];for(var g=n+1;g<a.length;g++)for(var e=0;e<a[g].length-1;e++){var f=a[g][e],h=a[g][e+1];if(B.segmentIntersects(d,c,f,h,k)&&!(k[0]===d[0]&&k[1]===d[1]||k[0]===f[0]&&k[1]===f[1]||k[0]===c[0]&&k[1]===c[1]||k[0]===h[0]&&k[1]===h[1]))return!0}}b=m.length;if(!(3>b))for(d=0;d<=b-2;d++)for(c=m[d],g=m[d+1],e=d+2;e<=b-2;e++)if(f=m[e],h=m[e+1],B.segmentIntersects(c,g,f,h,k)&&!(k[0]===c[0]&&k[1]===c[1]||k[0]===f[0]&&k[1]===f[1]||k[0]===g[0]&&k[1]===g[1]||k[0]===h[0]&&k[1]===
h[1]))return!0}return!1};l.segmentLength=x;l.segmentLength3d=function(a,b,d){return Math.sqrt((a[0]-b[0])**2+(a[1]-b[1])**2+(void 0!==a[2]&&void 0!==b[2]?(a[2]*d-b[2]*d)**2:0))};l.segmentLength3dSqr=function(a,b,d){return(a[0]-b[0])**2+(a[1]-b[1])**2+(void 0!==a[2]&&void 0!==b[2]?(a[2]*d-b[2]*d)**2:0)};l.segmentLengthSqr=function(a,b,d){const c=b[0]-a[0];a=b[1]-a[1];return d?(b=b[2]-b[2],c*c+a*a+b*b):c*c+a*a};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});