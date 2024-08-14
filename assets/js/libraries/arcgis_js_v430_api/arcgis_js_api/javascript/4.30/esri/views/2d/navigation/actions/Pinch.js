// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../Viewpoint ../../../../core/Accessor ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../geometry/Point ../../viewpointUtils ../../../navigation/RotationMomentumEstimator ../../../navigation/ZoomMomentumEstimator".split(" "),
function(m,u,f,v,p,A,B,C,w,q,r,x,t,y,z){f=class extends f{constructor(a){super(a);this._animationTime=0;this._momentumFinished=!1;this._previousRadius=this._previousAngle=0;this._previousCenter=null;this._rotationMomentumEstimator=new y.RotationMomentumEstimator(.6,.15,.95);this._rotationDirection=1;this._startRadius=this._startAngle=0;this._updateTimestamp=null;this._zoomDirection=1;this._zoomMomentumEstimator=new z.ZoomMomentumEstimator;this._zoomOnly=null;this.viewpoint=new u({targetGeometry:new x,
scale:0,rotation:0});this.rotateMomentum=this.zoomMomentum=null;this.addHandles(v.when(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(a,b){this.navigation.begin();this._rotationMomentumEstimator.reset();this._zoomMomentumEstimator.reset();this._zoomOnly=null;this._previousAngle=this._startAngle=b.angle;this._previousRadius=this._startRadius=b.radius;this._previousCenter=b.center;this._updateTimestamp=null;a.constraints.rotationEnabled&&this.addToRotateEstimator(0,b.timestamp);this.addToZoomEstimator(b,
1)}update(a,b){null===this._updateTimestamp&&(this._updateTimestamp=b.timestamp);const d=b.angle,c=b.radius,e=b.center,g=Math.abs(180*(d-this._startAngle)/Math.PI),h=Math.abs(c-this._startRadius),k=this._startRadius/c;if(this._previousRadius&&this._previousCenter){const l=c/this._previousRadius;let n=180*(d-this._previousAngle)/Math.PI;this._rotationDirection=0<=n?1:-1;this._zoomDirection=1<=l?1:-1;a.constraints.rotationEnabled?(null===this._zoomOnly&&200<b.timestamp-this._updateTimestamp&&(this._zoomOnly=
0<h-g),null===this._zoomOnly||this._zoomOnly?n=0:this.addToRotateEstimator(d-this._startAngle,b.timestamp)):n=0;this.addToZoomEstimator(b,k);this.navigation.setViewpoint([e.x,e.y],1/l,n,[this._previousCenter.x-e.x,e.y-this._previousCenter.y])}this._previousAngle=d;this._previousRadius=c;this._previousCenter=e}end(a){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum();this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum();this._animationTime=0;if(this.rotateMomentum||this.zoomMomentum)this.onAnimationUpdate(a);
this.navigation.end()}addToRotateEstimator(a,b){this._rotationMomentumEstimator.add(a,.001*b)}addToZoomEstimator(a,b){this._zoomMomentumEstimator.add(b,.001*a.timestamp)}canZoomIn(a){const b=a.scale;a=a.constraints.effectiveMaxScale;return 0===a||b>a}canZoomOut(a){const b=a.scale;a=a.constraints.effectiveMinScale;return 0===a||b<a}onAnimationUpdate(a){this.navigation.animationManager?.animateContinuous(a.viewpoint,(b,d)=>{var c=!this.canZoomIn(a)&&1<this._zoomDirection||!this.canZoomOut(a)&&1>this._zoomDirection,
e=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime);c=c||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime);d*=.001;this._momentumFinished=e&&c;if(!this._momentumFinished){e=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,d))*this._rotationDirection*180/Math.PI:0;c=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,d)):1;const h=r.create();var g=r.create();if(this._previousCenter){q.set(h,this._previousCenter.x,
this._previousCenter.y);t.getPaddingScreenTranslation(g,a.size,a.padding);q.add(h,h,g);const {constraints:k,scale:l}=a;g=l*c;1>c&&!k.canZoomInTo(g)?(c=l/k.effectiveMaxScale,this.rotateMomentum=this.zoomMomentum=null):1<c&&!k.canZoomOutTo(g)&&(c=l/k.effectiveMinScale,this.rotateMomentum=this.zoomMomentum=null);t.scaleAndRotateBy(b,a.viewpoint,c,e,h,a.size);a.constraints.constrainByGeometry(b)}}this._animationTime+=d})}stopMomentumNavigation(){if(this.rotateMomentum||this.zoomMomentum)this.rotateMomentum&&
(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop()}};m.__decorate([p.property()],f.prototype,"_momentumFinished",void 0);m.__decorate([p.property()],f.prototype,"viewpoint",void 0);m.__decorate([p.property()],f.prototype,"navigation",void 0);return f=m.__decorate([w.subclass("esri.views.2d.navigation.actions.Pinch")],f)});