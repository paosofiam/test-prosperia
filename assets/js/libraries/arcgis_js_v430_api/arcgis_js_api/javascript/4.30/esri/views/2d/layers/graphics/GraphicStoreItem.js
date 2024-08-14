// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/coordsUtils ../../../../geometry/support/jsonUtils ../../../../geometry/support/normalizeUtilsSync ../../../../layers/graphics/data/projectionSupport ./graphicsUtils".split(" "),function(f,d,l,m,n,g,h){class k{static fromGraphic(a,b,c,e){return new k(a.geometry,b,{...a.attributes},a.visible,a.uid,c,e)}constructor(a,b,c,e,p,q,r){this.geometry=a;this.symbol=b;this.attributes=c;this.visible=e;this.objectId=p;this.zOrder=
q;this.displayId=r;this.bounds=d.create();this.prevBounds=d.create();this.size=[0,0,0,0]}get linearCIM(){return this.symbolResource?.symbolInfo.linearCIM}update(a,b,c){if(this.geometry===a.geometry&&JSON.stringify(this.attributes)===JSON.stringify(a.attributes)&&this.symbol===b&&this.zOrder===c&&this.visible===a.visible)return!1;this.prevBounds=this.bounds;this.bounds=d.create();this.zOrder=c;this.geometry=a.geometry;this.attributes={...a.attributes};this.symbol=b;this.visible=a.visible;this.projectedGeometry=
this.symbolResource=null;return!0}async projectAndNormalize(a){let b=this.geometry;if(b&&b.spatialReference&&"mesh"!==b.type){"extent"===b.type&&(b=h.polygonFromExtent(b));await g.checkProjectionSupport(b.spatialReference,a);var c=n.normalizeCentralMeridianForDisplay(b);c&&((a=g.project(c,b.spatialReference,a))&&l.closeRingsAndFixWinding(a),this.projectedGeometry=m.isExtent(a)?h.polygonFromExtent(a):a)}}}f.GraphicStoreItem=k;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});