// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../core/mathUtils ../../../core/memoize ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../chunks/vec32 ../../../geometry/support/webMercatorUtils ../core/cameraOrientationFactory ./utils ./worldToImage ../../../geometry/Point".split(" "),function(x,M,y,A,m,n,z,B,k,r,q){function C(a,c,d,f,g,e){var b=null;let h=0,l=a;for(a=c;9>=h;){b=D(d,a,l,{...g,cameraLocation:f},d);a=b.error;b=b.transformedPoint;if(1>=a||9===h)break;l=[{x:d.x-a,y:d.y-a,z:1},{x:d.x+
a,y:d.y-a,z:1},{x:d.x+a,y:d.y+a,z:1},{x:d.x-a,y:d.y+a,z:1}].map(p=>new q({...k.projectiveTransform2(p,c,l),spatialReference:f.spatialReference}));a=r.worldToImageWithLTPFlag(e,l,g);h++}return b}function D(a,c,d,f,g){const {cameraLocation:e}=f;a=new q({...k.projectiveTransform2(a,c,d),spatialReference:e.spatialReference});f=r.worldToImage(a,f);return{transformedPoint:a,error:Math.abs(g.x-f.x)+Math.abs(g.y-f.y)}}const E=A.memoize(a=>{const {cameraLocation:c,scalingFactor:d}=a;var f=2*Math.tan(y.deg2rad(a.verticalFieldOfView)/
2)*a.farDistance*d,g=2*Math.tan(y.deg2rad(a.horizontalFieldOfView)/2)*a.farDistance*d,e=k.calculateRotationMatrix("HPR",[a.cameraHeading,a.cameraPitch,a.cameraRoll??0]),b=k.transformMat3([0,0,-1],e);a=k.scaleAndAddWithFactor([c.x,c.y,c.z],b,a.farDistance*d,d);b=k.transformMat3([0,1,0],e);e=k.transformMat3([1,0,0],e);f=k.scaleWithFactor(b,f/2,d);e=k.scaleWithFactor(e,g/2,d);g=n.sub(m.zeros(),f,e);f=n.add(m.zeros(),f,e);return[n.add(m.zeros(),a,g),n.add(m.zeros(),a,f),n.sub(m.zeros(),a,g),n.sub(m.zeros(),
a,f)].map(h=>{const [l,p,v]=h;return new q({x:l,y:p,z:v,spatialReference:c.spatialReference})})});x.imageToWorld=function(a,c){var d=Array.isArray(a)?a:[a];a="string"===typeof c.cameraOrientation?B.getCameraOrientation(c.cameraOrientation):c.cameraOrientation;var f=4===a?.type,g=c.cameraLocation.spatialReference.isWGS84&&f,e=new q(c.cameraLocation);f&&(e=new q(k.ltpToGeographic(e,[a.latitude,a.longitude,a.ellipsoidRadius,a.squaredEccentricity])));e.spatialReference.isGeographic&&(e=z.geographicToWebMercator(e));
var b=r.getScalingFactor(e);e.z||(e.z=c.cameraHeight);var h=E({...c,scalingFactor:b}),l=r.worldToImageWithLTPFlag(f,h,c),p=k.computeHFOVAndVFOV(c.horizontalFieldOfView,c.verticalFieldOfView,c.cameraRoll??0).vfov;const {effectiveVerticalFieldOfView:v,imageVertices:F,scalingFactor:G,shouldConvertToLatLong:H,worldFootprint:I,localTangentPlane:J,cameraLocation:w}={cameraOrientation:a,cameraLocation:e,imageVertices:l,localTangentPlane:f,effectiveVerticalFieldOfView:p,worldFootprint:h,scalingFactor:b,shouldConvertToLatLong:g};
a=[];for(const K of d){g=C(I,F,{...K,z:1},w,c,J);d=a;f=d.push;b=w;h=G;l=(w.z??0)-c.cameraHeight;p=c.cameraPitch;var L=v;e=H;let t=g.clone();var u=Math.sqrt((g.z-b.z)**2+(Math.sqrt((g.x-b.x)**2+(g.y-b.y)**2)/h)**2)*h;u=k.scaleWithFactor(n.sub(m.zeros(),[g.x,g.y,g.z],[b.x,b.y,b.z]),1/u,1/h);g.z<l||90>p+L/2?(b=k.scaleAndAddWithFactor([b.x,b.y,b.z],u,Math.abs((b.z-l)/-u[2])*h,h),t=new q({x:b[0],y:b[1],z:b[2],spatialReference:g.spatialReference})):t.z=l;e&&(t=z.webMercatorToGeographic(g));f.call(d,t)}return 1===
a.length?a[0]:a};Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});