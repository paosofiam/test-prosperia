// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/compilerUtils ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/ellipsoidUtils ../../../../chunks/sphere ./common ./ConstraintTypes ./InteractionType ./TiltMode ../../state/utils/viewUtils".split(" "),function(v,K,k,L,M,h,C,D,w,p,E,x,t,q){function F(c,a,b,d=!0){r.eyeCenterDistance=0;r.requiresTwoSteps=
!1;const f=y(c,a,b,p.defaultConstraintOptions,r);if(0===f)return!1;L.fromRotation(u,-f,a.viewRight);switch(b.tiltMode){case t.TiltMode.LOOK_AROUND:h.transformMat4(l,a.viewForward,u);h.scale(l,l,r.eyeCenterDistance);a.center=h.add(m,a.eye,l);break;case t.TiltMode.TUMBLE:h.subtract(l,a.center,a.eye);h.transformMat4(l,l,u);a.eye=h.subtract(m,a.center,l);break;default:K.neverReached(b.tiltMode)}a.up=h.transformMat4(m,a.up,u);return r.requiresTwoSteps&&d?F(c,a,b,!1):!0}function y(c,a,b,d=p.defaultConstraintOptions,
f){if(!c.state.constraints.tilt)return 0;var e=c.state.constraints.tilt(a.distance,N);if(b.interactionType!==x.InteractionType.NONE){var {interactionStartCamera:n,interactionFactor:G}=b;if(n){var {min:O,max:P}=e,g=y(c,n,p.defaultConstraintOptions,b),H=0===g?0:q.viewAngle(c.renderCoordsHelper,n.center,n.eye);e.min=O;e.max=P;b.interactionType===x.InteractionType.TUMBLE?(p.hasConstraintType(b.selection,E.ConstraintTypes.ALTITUDE)&&I(c,n,e),p.adjustRangeForInteraction(g,H,!0,G,J,e)):p.adjustRangeForInteraction(g,
H,!1,G,J,e)}}d.interactionType===x.InteractionType.TUMBLE&&p.hasConstraintType(d.selection,E.ConstraintTypes.ALTITUDE)&&I(c,d.interactionStartCamera,e);if(b.tiltMode===t.TiltMode.LOOK_AROUND||d.tiltMode===t.TiltMode.LOOK_AROUND){a:{f&&(f.requiresTwoSteps=!1);switch(c.viewingMode){case "global":b=Q;g=c.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude;d=g+D.getReferenceEllipsoid(c.spatialReference).radius;g=c.renderCoordsHelper.intersectManifold(a.ray,g,m);b.eyeCenterDistance=a.distance;
b.centerIsOnSurface=!1;null!=g?(b.eyeCenterDistance=h.distance(a.eye,g),b.tiltAtCenter=q.viewAngle(c.renderCoordsHelper,g,a.eye),b.centerIsOnSurface=!0):c.state.isLocal?b.tiltAtCenter=q.viewAngle(c.renderCoordsHelper,a.center,a.eye):(w.closestPointOnSilhouette(w.fromRadius(w.tmpSphere,d),a.ray,m),b.eyeCenterDistance=h.distance(a.eye,m),b.tiltAtCenter=k.acosClamped(-h.dot(a.viewForward,h.normalize(m,m))));b.radius=d;b.eyeRadius=h.length(a.eye);b.constraints=c.state.constraints;a=k.clamp(b.tiltAtCenter,
e.min,e.max);if(1E-9<Math.abs(b.tiltAtCenter-a)){if(b.centerIsOnSurface){{const {constraints:z,eyeCenterDistance:R,tiltAtCenter:A}=b;a=A;c=z.clampTilt(R,A);e=B(b,c);if(z.clampTilt(e,A)!==c)for(e=0;10>e&&1E-9<Math.abs(c-a);)d=(a+c)/2,g=B(b,d),g=z.clampTilt(g,d),1E-9<Math.abs(g-d)?a=d:c=d,e++;a=c}e=a;c=k.asinClamped(b.radius/b.eyeRadius*Math.sin(b.tiltAtCenter));e=k.asinClamped(b.radius/b.eyeRadius*Math.sin(e));c=b.eyeRadius>b.radius?c-e:e-c}else a=b.constraints.clampTilt(b.eyeCenterDistance,b.tiltAtCenter),
f&&a<Math.PI/2&&(f.requiresTwoSteps=!0,a=Math.PI/2-1E-5),c=b.tiltAtCenter-Math.PI/2-(a-Math.PI/2);f&&(f.eyeCenterDistance=B(b,a));f=c}else f=0;break a;case "local":d=q.viewAngle(c.renderCoordsHelper,a.center,a.eye);b=k.clamp(d,e.min,e.max);e=d-b;1E-9<Math.abs(e)?(f&&(d=c.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,c=c.renderCoordsHelper.getAltitude(a.eye)-d,b=Math.cos(b),f.eyeCenterDistance=1E-4<Math.abs(b)?c/b:a.distance),f=e):f=0;break a}f=void 0}return f}f=q.viewAngle(c.renderCoordsHelper,
a.center,a.eye);b=k.clamp(f,e.min,e.max);f-=b;f=1E-9<Math.abs(f)?f:0;return f}function B(c,a){if(!c.centerIsOnSurface)return c.eyeCenterDistance;a=Math.PI-k.clamp(a,0,Math.PI);const b=k.asinClamped(c.radius/c.eyeRadius*Math.sin(a)),d=Math.sin(Math.PI-a-b)/Math.sin(a);return c.eyeRadius<c.radius&&1<d?Math.sin(Math.PI-a-(Math.PI-b))/Math.sin(a)*c.eyeRadius:d*c.eyeRadius}function I(c,a,b){var d=c.state.constraints;if(!c.state.isLocal&&d.altitude&&a){var f=h.squaredLength(a.center),e=Math.sqrt(f);a=a.distance;
var n=D.getReferenceEllipsoid(c.spatialReference).radius;c=d.altitude.min+n;d=d.altitude.max+n;c=(c*c-a*a-f)/(-2*e*a);b.min=Math.max(b.min,Math.min(Math.PI-k.acosClamped((d*d-a*a-f)/(-2*e*a)),b.max));b.max=Math.min(b.max,Math.PI-k.acosClamped(c))}}const l=C.create(),u=M.create(),m=C.create(),J=k.deg2rad(5),N={min:0,max:0},Q={constraints:null,radius:0,eyeRadius:0,centerIsOnSurface:!0,eyeCenterDistance:0,tiltAtCenter:0},r={eyeCenterDistance:0,requiresTwoSteps:!1};v.applyTiltConstraint=F;v.getTiltConstraintError=
y;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});