// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ./Fields ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,d,n,p,q,r,e,f,g,t,h){a.TooltipContentDrawPoint=class extends g.TooltipContent{_renderContent(){const {fieldContext:k,info:b,mode:l}=this,{elevation:m,visibleElements:c}=b;return h.tsx(f.Fields,
{context:k,fields:[c.coordinates?b.effectiveX:void 0,c.coordinates?b.effectiveY:void 0,c.elevation?m:void 0],mode:l})}};a.TooltipContentDrawPoint=d.__decorate([e.subclass("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],a.TooltipContentDrawPoint);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});