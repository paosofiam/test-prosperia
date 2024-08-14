// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/mathUtils ../../../../core/time ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../chunks/sphere ../../camera/constraintUtils ../../camera/constraintUtils/ConstraintOptions ../../camera/constraintUtils/ConstraintTypes ../../camera/constraintUtils/InteractionType ../../camera/constraintUtils/surfaceCollision ./PointToPointAnimationController ../utils/navigationUtils ../../support/geometryUtils/ray ../../support/geometryUtils/sphere ../../webgl/RenderCamera ../../webgl-engine/lib/Intersector ../../../animation/easing".split(" "),
function(l,t,u,v,J,K,L,M,w,b,h,x,y,z,A,B,C,D,k,E,F,q,G,H){l.ZoomStepControllerGlobal=class extends D.PointToPointAnimationController{constructor(){super(...arguments);this._zoomLocation=h.create();this._tmpCamera=new q;this._tmpViewDir=h.create();this._tmpRayDir={origin:h.create(),direction:h.create()};this._targetOnSphere=h.create();this._tmpCenter=h.create();this._beginCamera=new q;this._constraintOptions=new z.ConstraintOptions(A.ConstraintTypes.ALL_EXCEPT_COLLISION,B.InteractionType.ZOOM,null,
this._beginCamera);this._sphere=x.create()}initialize(){this._intersector=G.newIntersector(this.view.state.viewingMode)}zoomStep(a,e){if(this.active){var f=this.view.state;this.animation.finished?this._beginCamera.copyFrom(f.camera):this.animation.cameraAt(1,this._beginCamera);var c=!1,d=!1;this.intersectionHelper.intersectScreen(e,this._zoomLocation,0===this.view.map.ground.opacity?k.contentIntersectorOptions:{})&&(c=0<a,d=!0);this._tmpCamera.copyFrom(f.camera);c?this.intersectionHelper.intersectRay(this._tmpCamera.ray,
this._intersector,this._tmpCenter)&&(this._tmpCamera.center=this._tmpCenter):this.intersectionHelper.intersectRay(this._tmpCamera.ray,this._intersector,this._zoomLocation)?this._tmpCamera.center=this._zoomLocation:b.copy(this._zoomLocation,this._tmpCamera.center);this._updateCamera(this._tmpCamera,a,this._zoomLocation,e,d);this.begin(this._tmpCamera)}}animationSettings(){return{duration:v.Milliseconds(600),easing:H.outExpo}}_updateCamera(a,e,f,c,d){var g=k.navigationMode(a,c,this.view.renderCoordsHelper,
this.view.viewingMode),p=Math.abs(this.view.camera.position.z);b.normalize(m,a.eye);b.scale(m,m,-1);E.fromScreenAtEye(a,c,this._tmpRayDir);b.normalize(this._tmpRayDir.direction,this._tmpRayDir.direction);const r=u.clamp(Math.min(k.zoomDistanceModifier,1/Math.abs(b.dot(m,this._tmpRayDir.direction)))*p,k.zoomMinDistanceModifier,k.zoomMaxDistanceModifier);if(g===k.NavigationMode.Horizontal){e=.6**e;this._sphere[3]=b.length(f);b.subtract(this._tmpViewDir,a.center,a.eye);d=Math.min(b.length(this._tmpViewDir),
r);g=d*e;1>=e&&4>g&&(g=4,e=g/d);if(1E-6>Math.abs(d-g))return;d=b.length(a.center);this._sphere[3]!==d&&(a.center=b.scale(n,a.center,(this._sphere[3]+e*(d-this._sphere[3]))/d));b.scale(this._tmpViewDir,this._tmpViewDir,-e);a.eye=b.add(n,a.center,this._tmpViewDir);y.applyAll(this.view,a,this._constraintOptions);1E-12<b.squaredDistance(f,a.center)&&F.intersectScreen(this._sphere,a,c,this._targetOnSphere)&&k.panToPosition(this._sphere,a,f,this._targetOnSphere,this.view.camera.heading,this.view.camera.tilt,
!0)}else{g=.6**Math.abs(e);p=0<e?1:-1;b.subtract(this._tmpViewDir,f,a.eye);const I=b.length(this._tmpViewDir);c=this.view._stage.renderView.getMinimalDepthForArea(null,c[0],c[1],this.view.state.camera,60);c=null!=c?c:r;c=d&&0<e?Math.min(c,I):c;b.scale(this._tmpRayDir.direction,this._tmpRayDir.direction,c);b.add(f,this._tmpRayDir.origin,this._tmpRayDir.direction);f=c*g;d=Math.max(4,1.01*a.nearFar[0]);0<e&&f<d&&(f=d,g=f/c);if(1E-6>Math.abs(c-f))return;b.scale(this._tmpRayDir.direction,this._tmpRayDir.direction,
p*(1-g));a.eye=b.add(n,a.eye,this._tmpRayDir.direction);a.center=b.add(n,a.center,this._tmpRayDir.direction)}C.applySurfaceCollisionConstraint(this.view,a)}};l.ZoomStepControllerGlobal=t.__decorate([w.subclass("esri.views.3d.state.controllers.ZoomStepControllerGlobal")],l.ZoomStepControllerGlobal);const n=h.create(),m=h.create();Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});