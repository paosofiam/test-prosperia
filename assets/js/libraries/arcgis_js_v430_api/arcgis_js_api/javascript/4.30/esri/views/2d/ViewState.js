// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../Viewpoint ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/libs/gl-matrix-2/math/common ../../core/libs/gl-matrix-2/math/mat2d ../../core/libs/gl-matrix-2/factories/mat2df32 ../../core/libs/gl-matrix-2/factories/mat2df64 ../../core/libs/gl-matrix-2/math/mat3 ../../core/libs/gl-matrix-2/factories/mat3f32 ../../core/libs/gl-matrix-2/math/vec2 ../../core/libs/gl-matrix-2/factories/vec2f32 ../../core/libs/gl-matrix-2/factories/vec2f64 ../../core/libs/gl-matrix-2/types/vec2 ../../geometry/support/normalizeUtils ./viewpointUtils ../../geometry/Extent ../../geometry/Point".split(" "),
function(p,k,y,D,r,L,M,N,E,F,t,G,u,q,v,f,z,H,w,I,l,J,K){var x;const g=[0,0];k=x=class extends D.JSONSupport{constructor(a){super(a);this._viewpoint2D={center:H.create(),rotation:0,scale:0,spatialReference:void 0};this.center=[0,0];this.extent=new J;this.id=0;this.inverseTransform=u.create();this.scale=this.rotation=this.resolution=0;this.transform=u.create();this.transformNoRotation=u.create();this.displayMat3=v.create();this.displayViewMat3=v.create();this.viewMat3=v.create();this.viewMat2d=G.create();
this.worldScreenWidth=0;this.size=[0,0]}set pixelRatio(a){this._set("pixelRatio",a);this._update()}set size(a){this._set("size",a);this._update()}set viewpoint(a){if(a){const b=this._viewpoint2D,c=a.targetGeometry;b.center[0]=c.x;b.center[1]=c.y;b.rotation=a.rotation;b.scale=a.scale;b.spatialReference=c.spatialReference}this._update()}copy(a){const b=this.size,c=this.viewpoint;c&&b?(this.viewpoint=l.copy(c,a.viewpoint),this._set("size",f.copy(b,a.size))):(this.viewpoint=a.viewpoint.clone(),this._set("size",
[a.size[0],a.size[1]]));this._set("pixelRatio",a.pixelRatio);return this}clone(){return new x({size:this.size,viewpoint:this.viewpoint.clone(),pixelRatio:this.pixelRatio})}toMap(a,b,c){if(w.isVec2(b))return f.transformMat2d(a,b,this.inverseTransform);g[0]=b;g[1]=c;return f.transformMat2d(a,g,this.inverseTransform)}toScreen(a,b,c){if(w.isVec2(b))return f.transformMat2d(a,b,this.transform);g[0]=b;g[1]=c;return f.transformMat2d(a,g,this.transform)}toScreenNoRotation(a,b,c){if(w.isVec2(b))return f.transformMat2d(a,
b,this.transformNoRotation);g[0]=b;g[1]=c;return f.transformMat2d(a,g,this.transformNoRotation)}wrapMapCoordinate(a,b){f.copy(a,b);[b]=b;const [c]=this.center,{extent:n,spatialReference:m}=this;let {xmin:d,xmax:h}=n;if(m.isWrappable){const e=l.getWorldWidth(m)/2;d=Math.max(d,c-e);h=Math.min(h,c+e)}if(b<d||b>h)a[0]=I.getClosestDenormalizedXToReference(b,c,m);return a}getScreenTransform(a,b){const {center:c}=this._viewpoint2D,n=this._get("pixelRatio")||1,m=this._get("size");l.getMatrix(a,c,m,b,0,n);
return a}_update(){const {center:a,spatialReference:b,scale:c,rotation:n}=this._viewpoint2D,m=this._get("pixelRatio")||1,d=this._get("size"),h=new y({targetGeometry:new K(a[0],a[1],b),scale:c,rotation:n});this._set("viewpoint",h);if(d&&b&&c){this.resolution=l.getResolution(h);this.rotation=n;this.scale=c;this.spatialReference=b;f.copy(this.center,a);q.set(this.displayMat3,0!==d[0]?2/d[0]:0,0,0,0,0!==d[1]?-2/d[1]:0,0,-1,1,1);var e=q.identity(this.viewMat3),A=z.fromValues(d[0]/2,d[1]/2),B=z.fromValues(-d[0]/
2,-d[1]/2),C=F.toRadian(n);q.translate(e,e,A);q.rotate(e,e,C);q.translate(e,e,B);q.multiply(this.displayViewMat3,this.displayMat3,e);e=t.fromTranslation(this.viewMat2d,A);t.rotate(e,e,C);t.translate(e,e,B);l.getExtent(this.extent,h,d);l.getTransform(this.transform,h,d,m);t.invert(this.inverseTransform,this.transform);l.getTransformNoRotation(this.transformNoRotation,h,d,m);this.worldScreenWidth=l.getWorldScreenWidth(this.spatialReference,this.resolution);this._set("id",this.id+1);return this}}};p.__decorate([r.property({readOnly:!0})],
k.prototype,"id",void 0);p.__decorate([r.property({value:1,json:{write:!0}})],k.prototype,"pixelRatio",null);p.__decorate([r.property({json:{write:!0}})],k.prototype,"size",null);p.__decorate([r.property()],k.prototype,"spatialReference",void 0);p.__decorate([r.property({type:y,json:{write:!0}})],k.prototype,"viewpoint",null);return k=x=p.__decorate([E.subclass("esri.views.2d.ViewState")],k)});