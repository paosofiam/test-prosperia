// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["./utils"],function(d){const e={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/ndvi",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(a,b){const {painter:c,rasterFunction:f}=a;return c.materialManager.getProgram(e,f.parameters.scaled?["scaled"]:[])},bindTextureAndUniforms:function(a,b,c){d.setSingleImageTextures(a,b,c);d.setCoordsAndTransforms(b);({bandIndexMat3:a}=a.rasterFunction.parameters);b.setUniformMatrix3fv("u_bandIndexMat3",a)}}});