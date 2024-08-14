// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/math/vec2","../../../../core/libs/gl-matrix-2/factories/vec2f64","../../webgl-engine/lib/TextRenderer"],function(c,f,b,d){const g=Object.freeze({left:0,center:.5,right:1}),h=Object.freeze({"bottom-left":b.fromValues(0,0),bottom:b.fromValues(.5,0),"bottom-right":b.fromValues(1,0),left:b.fromValues(0,.5),center:b.fromValues(.5,.5),right:b.fromValues(1,.5),"top-left":b.fromValues(0,1),top:b.fromValues(.5,1),"top-right":b.fromValues(1,1)});c.anchorFromPlacements=
function(a,e){switch(e){case "bottom":return"left"===a?"bottom-left":"right"===a?"bottom-right":"bottom";case "center":return a;case "top":return"left"===a?"top-left":"right"===a?"top-right":"top"}};c.horizontalPlacementFromAnchor=function(a){switch(a){case "bottom-left":case "left":case "top-left":return"left";case "bottom":case "center":case "top":return"center";case "bottom-right":case "right":case "top-right":return"right"}};c.horizontalPlacementToAnchorX=g;c.namedAnchorToHUDMaterialAnchorPos=
h;c.textRenderAlignmentFromHorizontalPlacement=function(a){switch(a){case "left":return d.TextRenderAlignment.Left;case "right":return d.TextRenderAlignment.Right;default:return d.TextRenderAlignment.Center}};c.verticalPlacementFromAlignment=function(a){return"middle"===a?"center":a};c.verticalPlacementFromAnchor=function(a){switch(a){case "bottom-left":case "bottom":case "bottom-right":return"bottom";case "left":case "center":case "right":return"center";case "top-left":case "top":case "top-right":return"top"}};
c.verticalScreenOffsetFromAlignment=function(a,e){switch(a){case "top":return f.set(e,0,d.textVerticalPaddingPx);case "bottom":return f.set(e,0,-d.textVerticalPaddingPx);default:return f.copy(e,b.ZEROS)}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});