// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../geometry/SpatialReference ../../../geometry/projection/projectVectorToVector ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/spatialReferenceUtils ./PatchGeometryFactory ./Tile ./TileFrustumVisibility ../webgl-engine/lib/RayIntersections".split(" "),function(u,p,g,v,z,A,B,h,w,q,C){class D extends w.Tile{constructor(b,a,d,e,c){super();this._horizontalScaleFactor=1;this._extentInRenderSR=
A.create();this._baseUsedMemory=900;this._subtreeGeometryElevationBoundMax=this._subtreeGeometryElevationBoundMin=0;this.init(b,a,d,e,c)}init(b,a,d,e,c){super.init(b,a,d,e,c);b=c.view.renderSpatialReference;a=c.spatialReference;this._horizontalScaleFactor=b=null!=b&&B.isPlateCarree(b)&&null!=a&&a.isGeographic?this.ellipsoid.radius*Math.PI/180:1;({isWebMercatorOnPlateCarree:d}=c);c=this._extentInRenderSR;a=this.extent;if(d)b=p.fromValues(a[0],a[1],0),v.projectVectorToVector(b,g.WebMercator,b,g.PlateCarree),
a=p.fromValues(a[2],a[3],0),v.projectVectorToVector(a,g.WebMercator,a,g.PlateCarree),c[0]=b[0],c[1]=b[1],c[2]=a[0],c[3]=a[1];else for(d=0;4>d;++d)c[d]=a[d]*b;this.centerAtSeaLevel[0]=.5*(c[0]+c[2]);this.centerAtSeaLevel[1]=.5*(c[1]+c[3]);this.centerAtSeaLevel[2]=0;this._edgeLen=Math.max(c[2]-c[0],c[3]-c[1]);this._edgeLen2=this._edgeLen*this._edgeLen;this.updateRadiusAndCenter()}updateRadiusAndCenter(){this._updateCenter();var b=this._extentInRenderSR;const a=.5*(b[2]-b[0]);b=.5*(b[3]-b[1]);this._center[w.CenterPosition.MIDDLE][3]=
Math.max(Math.sqrt(a*a+b*b),.5*(this.elevationBoundsMax-this.elevationBoundsMin))}_calculateFrustumVisibilityStatus(b){var a=this._aabb();const d=a[0],e=a[1],c=a[2],x=a[3],y=a[4];a=a[5];let r=!0;for(let t=0;6>t;t++){var f=b[t];const k=f[0],l=f[1],m=f[2];f=f[3];if(0<=k*(0<k?d:x)+l*(0<l?e:y)+m*(0<m?c:a)+f)return q.TileFrustumVisibility.OUTSIDE;r=r&&0>=k*(0>k?d:x)+l*(0>l?e:y)+m*(0>m?c:a)+f}return r?q.TileFrustumVisibility.INSIDE:q.TileFrustumVisibility.INTERSECTS}_aabb(){const b=this._extentInRenderSR;
return z.wrap(b[0],b[1],Math.min(this.elevationBoundsMin,this._subtreeGeometryElevationBoundMin),b[2],b[3],Math.max(this.elevationBoundsMax,this._subtreeGeometryElevationBoundMax))}intersectsRay(b,a,d,e){n[0]=1/a[0];n[1]=1/a[1];n[2]=1/a[2];return C.intersectAabbInvDirBefore(this._aabb(),b,n,d,e)}createGeometry(){h.createPlanarGlobePatch(this.renderData,this._horizontalScaleFactor);this._updateSubtreeGeometryElevationsBounds();this.setMemoryDirty()}_updateSubtreeGeometryElevationsBounds(){var b=this.renderData;
let a=this._subtreeGeometryElevationBoundMin,d=this._subtreeGeometryElevationBoundMax;if(b)b=b.geometry.boundingBox,a=b[2],d=b[5];else if(!this.isLeaf){a=Infinity;d=-Infinity;for(const e of this.children)a=Math.min(a,e._subtreeGeometryElevationBoundMin),d=Math.max(d,e._subtreeGeometryElevationBoundMax)}if(a!==this._subtreeGeometryElevationBoundMin||d!==this._subtreeGeometryElevationBoundMax)this._subtreeGeometryElevationBoundMin=a,this._subtreeGeometryElevationBoundMax=d,this.parent?._updateSubtreeGeometryElevationsBounds()}getDefaultVerticesPerSide(){return 9>
this.level?3:2}updateCornerElevations(){h.updateCornersPlanar(this.renderData,this._horizontalScaleFactor);this._updateSubtreeGeometryElevationsBounds()}updateEdgeElevations(){h.updateEdgesAndCornersPlanar(this.renderData,this._horizontalScaleFactor);this._updateSubtreeGeometryElevationsBounds()}updateEdgeElevationsAndResolutions(){h.updateEdgeElevationsAndResolutionsPlanar(this.renderData,this._horizontalScaleFactor);this._updateSubtreeGeometryElevationsBounds()}get horizontalScale(){return this._horizontalScaleFactor}}
const n=p.create();u.PlanarPatch=D;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});