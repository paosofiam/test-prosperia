// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ./Fields ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(c,d,m,n,p,q,e,f,g,r,h){c.TooltipContentSelectedVertex=class extends g.TooltipContent{_renderContent(){const {fieldContext:k,info:a,mode:l}=this,{visibleElements:b}=a;return h.tsx(f.Fields,
{context:k,fields:[b.coordinates?a.effectiveX:void 0,b.coordinates?a.effectiveY:void 0,b.elevation?a.elevation:void 0,b.area&&"polygon"===a.geometryType?a.area:null,b.totalLength&&"polyline"===a.geometryType?a.totalLength:null],mode:l})}};c.TooltipContentSelectedVertex=d.__decorate([e.subclass("esri.views.interactive.tooltip.content.TooltipContentSelectedVertex")],c.TooltipContentSelectedVertex);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});