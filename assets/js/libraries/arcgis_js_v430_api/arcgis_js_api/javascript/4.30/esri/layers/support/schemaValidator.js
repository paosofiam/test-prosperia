// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../chunks/ajv.bundle ../../portal/schemas/buildingSceneLayerItem ../../portal/schemas/integratedMesh3DTilesLayerItem ../../portal/schemas/integratedMeshLayerItem ../../portal/schemas/pointCloudLayerItem ../../portal/schemas/sceneLayerItem ../../support/validationUtilsAjv".split(" "),function(b,d,e,f,g,h,k,l,m){function n(a){switch(a){case "building-scene":return f.json;case "integrated-mesh":return h.json;case "integrated-mesh-3dtiles":return g.json;case "point-cloud":return k.json;
case "scene":return l.json;default:throw new d("portalitemlayertype:unknown","Can not validate against unknown PortalItemLayerType.");}}const c=new e.Ajv({allErrors:!0,extendRefs:!0});b.validate=function(a,p){c.validate(n(p),a);return m.convertAjvErrors(c.errors||[])};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});