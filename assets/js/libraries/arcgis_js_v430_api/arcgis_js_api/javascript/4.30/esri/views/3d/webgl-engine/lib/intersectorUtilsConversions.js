// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../chunks/sphere ../../layers/i3s/Intersector ../../terrain/Intersector ./intersectorUtils ./lodRendering/Intersector".split(" "),function(f,q,r,t,u,d,l,e,m){function n(a,b){return null==a?null:e.isObjectIntersectorResult(a)||e.isHudIntersectorResult(a)?p(a.target?.object,b):d.isPclIntersectorResult(a)?(a=a.target.createGraphic(),{type:"graphic",
graphic:a,layer:a.layer}):d.isVoxelIntersectorResult(a)?(a=a.target.createVoxelGraphic(),{type:"graphic",graphic:a,layer:a.layer}):d.isTiles3DIntersectorResult(a)?(a=a.target.createTiles3DGraphic(),{type:"graphic",graphic:a,layer:a.layer}):l.isOverlayIntersectorResult(a)||m.isLodIntersectorResult(a)?p(a.target,b):d.isI3sIntersectorResult(a)?v(a.target,b):null}function p(a,b){if(null==a?.graphicUid)return null;const c=g(a,b);if(null==c)return null;if(c===b.graphics)return null==b.graphicsView||"number"!==
typeof a.graphicUid?null:b.graphicsView.getHit(a.graphicUid);b=b.allLayerViews.find(h=>h.layer===c);return!b||b.suspended||null==a.graphicUid?null:"getHit"in b?b.getHit(a.graphicUid):null}function v(a,b){const c=g(a,b);return null==c?null:(b=b.allLayerViews.find(h=>h.layer===c))&&!b.suspended&&"getGraphicFromIntersectorTarget"in b?w(b.getGraphicFromIntersectorTarget(a)):null}function x(a,b){const c=g(a,b);return null==c?null:(b=b.allLayerViews.find(h=>h.layer===c))&&!b.suspended&&"getAABBFromIntersectorTarget"in
b?b.getAABBFromIntersectorTarget(a):null}function w(a){return null!=a?{type:"graphic",graphic:a,layer:a.layer}:null}function g(a,b){return null==a?.layerUid?null:null!=b.graphicsView&&a.layerUid===b.graphicsView.processor.layer.id?b.graphics:b.map.allLayers.find(c=>c.uid===a.layerUid)}const k=r.create();f.getIntersectedFeatureBSRadius=function(a,b){return e.isObjectIntersectorResult(a)||e.isHudIntersectorResult(a)?u.getRadius(a.target.object.boundingVolumeWorldSpace.bounds):m.isLodIntersectorResult(a)?
(q.getScaling(k,a.transformation),a.target.baseBoundingSphere.radius*Math.max(k[0],k[1],k[2])):d.isI3sIntersectorResult(a)?(a=x(a.target,b))?.5*t.diameter(a):null:null};f.hasLod=function(a){return e.isObjectIntersectorResult(a)||e.isHudIntersectorResult(a)?!1:m.isLodIntersectorResult(a)?1<a.target.numLodLevels:d.isI3sIntersectorResult(a)?!0:!1};f.toGraphic=function(a,b){a=n(a,b);return null!=a&&"graphic"===a.type?a.graphic:null};f.toHit=n;f.toOwner=function(a,b){return e.isObjectIntersectorResult(a)||
e.isHudIntersectorResult(a)?g(a.target?.object,b):l.isTerrainIntersectorResult(a)?b.map?.ground:d.isPclIntersectorResult(a)||d.isI3sIntersectorResult(a)||l.isOverlayIntersectorResult(a)||d.isVoxelIntersectorResult(a)?g(a.target,b):null};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});