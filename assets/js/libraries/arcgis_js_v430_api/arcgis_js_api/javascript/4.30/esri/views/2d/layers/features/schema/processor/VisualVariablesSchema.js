// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/has ../../../../../../core/screenUtils ../../../../../../core/unitUtils ../../../../../../renderers/support/lengthUtils ../../../../engine/webgl/definitions ../../../../engine/webgl/shaderGraph/techniques/shaders/constants ./schemaUtils ../../support/rendererUtils".split(" "),function(g,C,h,y,z,A,p,k,B){function q(a){if(!a.stops?.length)return null;a=a.stops.sort((c,d)=>c.value-d.value);var b=k.padStops(a,8);a=b.map(({value:c})=>c);b=b.map(({color:c})=>k.premultiplyColor(c));
return{values:a,colors:b}}function r(a){if(!a.stops?.length)return null;a=a.stops.sort((c,d)=>c.value-d.value);var b=k.padStops(a,8);a=b.map(({value:c})=>c);b=b.map(({opacity:c})=>c);return{opacityValues:a,opacities:b}}function t(a){return{rotationType:"geographic"===a.rotationType?p.RotationType.Geographic:p.RotationType.Arithmatic}}function m(a){if(!a.stops?.length)return null;if(a.stops.some(d=>d.useMaxValue||d.useMinValue))return(d,f)=>{const l=d.statisticsByLevel.get(f.key.level);d=a.stops.map(e=>
{const n=e.useMaxValue?l?.get(a.field)?.maxValue??0:e.useMinValue?l?.get(a.field)?.minValue??0:e.value;e=e.size?h.pt2px(e.size):A.nanMagicNumber;return{value:n,size:e}}).sort((e,n)=>e.value-n.value);f=k.padStops(d,8);d=f.map(({value:e})=>e);f=f.map(({size:e})=>e);return{values:d,sizes:f}};var b=a.stops.sort((d,f)=>d.value-f.value),c=k.padStops(b,8);b=c.map(({value:d})=>d);c=c.map(({size:d})=>h.pt2px(d));return{values:b,sizes:c}}function u(a){return b=>{({state:b}=b);return{unitValueToPixelsRatio:y.getMetersPerUnitForSR(b.spatialReference)/
z.meterIn[a.valueUnit??"meters"]/b.resolution}}}function v(a,b){const c=b.length;if(a<b[0].value||1===c)return b[0].size;for(let d=1;d<c;d++)if(a<b[d].value)return b[d-1].size+(a-b[d-1].value)/(b[d].value-b[d-1].value)*(b[d].size-b[d-1].size);return b[c-1].size}function w(a){const {minDataValue:b,maxDataValue:c,minSize:d,maxSize:f}=a;if("object"===typeof d&&"object"===typeof f)return(l,e)=>{e=l.state.scale;l=h.pt2px(v(e,d.stops));e=h.pt2px(v(e,f.stops));return{minMaxValueAndSize:[b,c,l,e]}};if("object"===
typeof d||"object"===typeof f)throw Error("InternalError: Found a partial VisualVariableSizeMinMaxValue");return{minMaxValueAndSize:[b,c,h.pt2px(d),h.pt2px(f)]}}const x={visualVariableColor:null,visualVariableOpacity:null,visualVariableRotation:null,visualVariableSizeStops:null,visualVariableSizeScaleStops:null,visualVariableSizeOutlineScaleStops:null,visualVariableSizeUnitValue:null,visualVariableSizeMinMaxValue:null};g.createVisualVariableColor=q;g.createVisualVariableOpacity=r;g.createVisualVariableRotation=
t;g.createVisualVariableSizeMinMaxValue=w;g.createVisualVariableSizeScaleStops=function(a){if(!a.stops?.length)return null;a=a.stops.sort((c,d)=>c.value-d.value);var b=k.padStops(a,8);a=b.map(({value:c})=>c);b=b.map(({size:c})=>h.pt2px(c));return{values:a,sizes:b}};g.createVisualVariableSizeStops=m;g.createVisualVariableSizeUnitValue=u;g.createVisualVariableUniforms=function(a){const b={...x};if(!(a&&"visualVariables"in a&&a.visualVariables))return b;for(const c of B.simplifyVisualVariables(a.visualVariables))switch(c.type){case "color":b.visualVariableColor=
q(c);break;case "opacity":b.visualVariableOpacity=r(c);break;case "rotation":b.visualVariableRotation=t(c);break;case "size":switch(a=c,"number"===typeof a.minDataValue&&"number"===typeof a.maxDataValue&&null!=a.minSize&&null!=a.maxSize?"min-max":"$view.scale"===a?.valueExpression&&Array.isArray(a.stops)?"scale-stops":null==a.field&&"$view.scale"===a?.valueExpression||!(Array.isArray(a.stops)||"levels"in a&&a.levels)?null!=a.field||"$view.scale"!==a?.valueExpression?"unit-value":null:"field-stops"){case "field-stops":b.visualVariableSizeStops=
m(c);break;case "scale-stops":"outline"===c.target?b.visualVariableSizeOutlineScaleStops=m(c):b.visualVariableSizeScaleStops=m(c);break;case "min-max":b.visualVariableSizeMinMaxValue=w(c);break;case "unit-value":b.visualVariableSizeUnitValue=u(c)}}return b};g.getMaxSizeVVSize=function(a,b=128,c=1.25){if(a.visualVariableSizeMinMaxValue)return a.visualVariableSizeMinMaxValue instanceof Function?128:Math.max(a.visualVariableSizeMinMaxValue.minMaxValueAndSize[3]*c,b);if(a.visualVariableSizeScaleStops){if(a.visualVariableSizeScaleStops instanceof
Function)return 128;a=a.visualVariableSizeScaleStops.sizes;return Math.max(a[a.length-1]*c,b)}if(a.visualVariableSizeStops){if(a.visualVariableSizeStops instanceof Function)return 128;a=a.visualVariableSizeStops.sizes;return Math.max(a[a.length-1]*c,b)}return a.visualVariableSizeUnitValue?256:0};g.noVisualVariables=x;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});