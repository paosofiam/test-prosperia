"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[229,7138],{35902:(t,r,e)=>{e.d(r,{A:()=>m});var n,o,i=e(13226),s=e(16699),a=e(36544);function l(t){return(0,s.c)((0,a.c)(t),0,255)}function u(t,r,e){return t=Number(t),isNaN(t)?e:t<r?r:t>e?e:t}function c(t,r){const e=t.toString(16).padStart(2,"0");return r?e.substring(0,1):e}e(26809),e(2589),e(18527),e(32773),e(20266),e(90740);class h{static blendColors(t,r,e,n=new h){return n.r=Math.round(t.r+(r.r-t.r)*e),n.g=Math.round(t.g+(r.g-t.g)*e),n.b=Math.round(t.b+(r.b-t.b)*e),n.a=t.a+(r.a-t.a)*e,n._sanitize()}static fromRgb(t,r){const e=t.toLowerCase().match(/^(rgba?|hsla?)\(([\s.\-,%0-9]+)\)/);if(e){const t=e[2].split(/\s*,\s*/),n=e[1];if("rgb"===n&&3===t.length||"rgba"===n&&4===t.length){const e=t[0];if("%"===e.charAt(e.length-1)){const e=t.map((t=>2.56*parseFloat(t)));return 4===t.length&&(e[3]=parseFloat(t[3])),h.fromArray(e,r)}return h.fromArray(t.map((t=>parseFloat(t))),r)}if("hsl"===n&&3===t.length||"hsla"===n&&4===t.length)return h.fromArray((0,i.h)(parseFloat(t[0]),parseFloat(t[1])/100,parseFloat(t[2])/100,parseFloat(t[3])),r)}return null}static fromHex(t,r=new h){if("#"!==t[0]||isNaN(Number(`0x${t.substring(1)}`)))return null;switch(t.length){case 4:case 5:{const e=parseInt(t.substring(1,2),16),n=parseInt(t.substring(2,3),16),o=parseInt(t.substring(3,4),16),i=5===t.length?15:parseInt(t.substring(4),16);return h.fromArray([e+16*e,n+16*n,o+16*o,(i+16*i)/255],r)}case 7:case 9:{const e=parseInt(t.substring(1,3),16),n=parseInt(t.substring(3,5),16),o=parseInt(t.substring(5,7),16),i=7===t.length?255:parseInt(t.substring(7),16);return h.fromArray([e,n,o,i/255],r)}default:return null}}static fromArray(t,r=new h){return r._set(Number(t[0]),Number(t[1]),Number(t[2]),Number(t[3])),isNaN(r.a)&&(r.a=1),r._sanitize()}static fromString(t,r){const e=(0,i.i)(t)?(0,i.g)(t):null;return e&&h.fromArray(e,r)||h.fromRgb(t,r)||h.fromHex(t,r)}static fromJSON(t){return null!=t?new h([t[0],t[1],t[2],(t[3]??255)/255]):void 0}static toUnitRGB(t){return null!=t?[t.r/255,t.g/255,t.b/255]:null}static toUnitRGBA(t){return null!=t?[t.r/255,t.g/255,t.b/255,null!=t.a?t.a:1]:null}constructor(t){this.r=255,this.g=255,this.b=255,this.a=1,t&&this.setColor(t)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(t){return"string"==typeof t?h.fromString(t,this):Array.isArray(t)?h.fromArray(t,this):(this._set(t.r??0,t.g??0,t.b??0,t.a??1),t instanceof h||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(t){const r=t?.capitalize??!1,e=t?.digits??6,n=3===e||4===e,o=4===e||8===e,i=`#${c(this.r,n)}${c(this.g,n)}${c(this.b,n)}${o?c(Math.round(255*this.a),n):""}`;return r?i.toUpperCase():i}toCss(t=!1){const r=this.r+", "+this.g+", "+this.b;return t?`rgba(${r}, ${this.a})`:`rgb(${r})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(t=h.AlphaMode.ALWAYS){const r=l(this.r),e=l(this.g),n=l(this.b);return t===h.AlphaMode.ALWAYS||1!==this.a?[r,e,n,l(255*this.a)]:[r,e,n]}clone(){return new h(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(t){return null!=t&&t.r===this.r&&t.g===this.g&&t.b===this.b&&t.a===this.a}_sanitize(){return this.r=Math.round(u(this.r,0,255)),this.g=Math.round(u(this.g,0,255)),this.b=Math.round(u(this.b,0,255)),this.a=u(this.a,0,1),this}_set(t,r,e,n){this.r=t,this.g=r,this.b=e,this.a=n}}h.prototype.declaredClass="esri.Color",n=h||(h={}),(o=n.AlphaMode||(n.AlphaMode={}))[o.ALWAYS=0]="ALWAYS",o[o.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const m=h},80229:(t,r,e)=>{e.r(r),e.d(r,{default:()=>A}),e(94345);var n,o=e(58590),i=e(89779),s=e(33535),a=e(10348),l=e(30851),u=e(38226),c=e(34760),h=e(93207),m=e(32816),f=(e(20266),e(32773),e(6407),e(88663)),d=e(69421),p=e(14141),g=e(44600),y=e(64752);e(36544),e(2160),e(99924),e(41390),e(29298),e(93181),e(13671),e(40499),e(90740),e(58498),e(91047),e(45371),e(80959),e(49877),e(7969),e(69763),e(93804),e(18683),e(64604),e(29512),e(99063),e(56273),e(36533),e(29208),e(48844),e(84200),e(97827),e(91695),e(18169),e(48402),e(16699),e(26809),e(2589),e(18527),e(67504),e(92517),e(77037),e(40790),e(67138),e(24330),e(35902),e(13226),e(91276),e(62482),e(55095),e(22260),e(75213),e(68258),e(16722),e(88614),e(1030),e(15319),e(60785),e(44864),e(95637),e(59930),e(45862),e(72762),e(71613),e(17872),e(94894),e(78281),e(44945),e(47387),e(46728),e(64102),e(79769);let b=n=class extends h.B{constructor(){super(...arguments),this.type="identity"}clone(){return new n}};(0,m._)([(0,f.e)({IdentityXform:"identity"})],b.prototype,"type",void 0),b=n=(0,m._)([(0,d.$)("esri.layers.support.rasterTransforms.IdentityTransform")],b);const M={GCSShiftXform:h.G,IdentityXform:b,PolynomialXform:h.P};class A{convertVectorFieldData(t){const r=i.A.fromJSON(t.pixelBlock),e=(0,a.c)(r,t.type);return Promise.resolve(null!=e?e.toJSON():null)}computeStatisticsHistograms(t){const r=i.A.fromJSON(t.pixelBlock),e=(0,c.g)(r);return Promise.resolve(e)}async decode(t){const r=await(0,s.d)(t.data,t.options);return r&&r.toJSON()}symbolize(t){t.pixelBlock=i.A.fromJSON(t.pixelBlock),t.extent=t.extent?g.A.fromJSON(t.extent):null;const r=this.symbolizer.symbolize(t);return Promise.resolve(null!=r?r.toJSON():null)}async updateSymbolizer(t){this.symbolizer=s.R.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=(0,l.c)(t.rasterFunctionJSON)}async process(t){const r=this.rasterFunction.process({extent:g.A.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map((t=>null!=t?i.A.fromJSON(t):null)),primaryPixelSizes:t.primaryPixelSizes?.map((t=>null!=t?y.A.fromJSON(t):null)),primaryRasterIds:t.primaryRasterIds});return null!=r?r.toJSON():null}stretch(t){const r=this.symbolizer.simpleStretch(i.A.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(r?.toJSON())}estimateStatisticsHistograms(t){const r=(0,c.h)(i.A.fromJSON(t.srcPixelBlock));return Promise.resolve(r)}split(t){const r=(0,a.s)(i.A.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel??0,!1===t.useBilinear);return r&&r.forEach(((t,e)=>{r.set(e,t?.toJSON())})),Promise.resolve(r)}clipTile(t){const r=i.A.fromJSON(t.pixelBlock),e=(0,a.b)({...t,pixelBlock:r});return Promise.resolve(e?.toJSON())}async mosaicAndTransform(t){const r=t.srcPixelBlocks.map((t=>t?new i.A(t):null)),e=(0,a.m)(r,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let n,o=e;return t.coefs&&(o=(0,a.d)(e,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(n=(0,a.e)(t.destDimension,t.gcsGrid),o=(0,a.f)(o,t.isUV?"vector-uv":"vector-magdir",n)),{pixelBlock:o?.toJSON(),localNorthDirections:n}}async createFlowMesh(t,r){const e={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:n,indexData:o}=await(0,p.c)(t.meshType,t.simulationSettings,e,r.signal);return{result:{vertexBuffer:n.buffer,indexBuffer:o.buffer},transferList:[n.buffer,o.buffer]}}async getProjectionOffsetGrid(t){const r=g.A.fromJSON(t.projectedExtent),e=g.A.fromJSON(t.srcBufferExtent);let n=null;t.datumTransformationSteps&&(n=new o.A({steps:t.datumTransformationSteps})),(t.includeGCSGrid||(0,u.r)(r.spatialReference,e.spatialReference,n))&&await(0,u.l)();const i=t.rasterTransform?function(t){const r=t?.type;if(!r)return null;const e=M[t?.type];if(e){const r=new e;return r.read(t),r}return null}(t.rasterTransform):null;return(0,u.c)({...t,projectedExtent:r,srcBufferExtent:e,datumTransformation:n,rasterTransform:i})}}},44945:(t,r,e)=>{e.d(r,{S:()=>o});var n=e(58498);class o extends n.O{notify(){const t=this._observers;if(t&&t.length>0){const r=t.slice();for(const t of r)t.onInvalidated(),t.onCommitted()}}}},67138:(t,r,e)=>{e.d(r,{c:()=>n,g:()=>o});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:"undefined"!=typeof self?self:{};function o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}},88614:(t,r,e)=>{e.d(r,{f:()=>a,t:()=>s});var n=e(1030),o=e(15319),i=e(60785);const s={key:"type",base:o.A,typeMap:{algorithmic:n.A,multipart:i.A}};function a(t){return t?.type?"algorithmic"===t.type?n.A.fromJSON(t):"multipart"===t.type?i.A.fromJSON(t):null:null}},13226:(t,r,e)=>{e.d(r,{a:()=>u,b:()=>s,g:()=>i,h:()=>l,i:()=>o});const n={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]};function o(t){return!!n[t]||!!n[t.toLowerCase()]}function i(t){return n[t]??n[t.toLowerCase()]}function s(t){return[...i(t)]}function a(t,r,e){e<0&&++e,e>1&&--e;const n=6*e;return n<1?t+(r-t)*n:2*e<1?r:3*e<2?t+(r-t)*(2/3-e)*6:t}function l(t,r,e,n=1){const o=(t%360+360)%360/360,i=e<=.5?e*(r+1):e+r-e*r,s=2*e-i;return[Math.round(255*a(s,i,o+1/3)),Math.round(255*a(s,i,o)),Math.round(255*a(s,i,o-1/3)),n]}function u(t){const r=t.length>5,e=r?8:4,n=(1<<e)-1,o=r?1:17,i=r?9===t.length:5===t.length;let s=Number("0x"+t.substr(1));if(isNaN(s))return null;const a=[0,0,0,1];let l;return i&&(l=s&n,s>>=e,a[3]=o*l/255),l=s&n,s>>=e,a[2]=o*l,l=s&n,s>>=e,a[1]=o*l,l=s&n,s>>=e,a[0]=o*l,a}},24330:(t,r,e)=>{function n(t){return"r"in t&&"g"in t&&"b"in t}function o(t){return"h"in t&&"s"in t&&"v"in t}function i(t){return"l"in t&&"a"in t&&"b"in t}function s(t){return"l"in t&&"c"in t&&"h"in t}e.d(r,{a:()=>p,b:()=>y,c:()=>d,i:()=>n,t:()=>g}),e(35902),e(91276),e(62482);const a=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],l=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function u(t,r){const e=[];let n,o;if(t[0].length!==r.length)throw new Error("dimensions do not match");const i=t.length,s=t[0].length;let a=0;for(n=0;n<i;n++){for(a=0,o=0;o<s;o++)a+=t[n][o]*r[o];e.push(a)}return e}function c(t){const r=[t.r/255,t.g/255,t.b/255].map((t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4)),e=u(a,r);return{x:100*e[0],y:100*e[1],z:100*e[2]}}function h(t){const r=u(l,[t.x/100,t.y/100,t.z/100]).map((t=>{const r=t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055;return Math.min(1,Math.max(r,0))}));return{r:Math.round(255*r[0]),g:Math.round(255*r[1]),b:Math.round(255*r[2])}}function m(t){const r=[t.x/95.047,t.y/100,t.z/108.883].map((t=>t>(6/29)**3?t**(1/3):1/3*(29/6)**2*t+4/29));return{l:116*r[1]-16,a:500*(r[0]-r[1]),b:200*(r[1]-r[2])}}function f(t){const r=t.l,e=[(r+16)/116+t.a/500,(r+16)/116,(r+16)/116-t.b/200].map((t=>t>6/29?t**3:3*(6/29)**2*(t-4/29)));return{x:95.047*e[0],y:100*e[1],z:108.883*e[2]}}function d(t){return n(t)?t:s(t)?function(t){return h(f(function(t){const r=t.l,e=t.c,n=t.h;return{l:r,a:e*Math.cos(n),b:e*Math.sin(n)}}(t)))}(t):i(t)?function(t){return h(f(t))}(t):function(t){return"x"in t&&"y"in t&&"z"in t}(t)?h(t):o(t)?function(t){const r=(t.h+360)%360/60,e=t.s/100,n=t.v/100*255,o=n*e,i=o*(1-Math.abs(r%2-1));let s;switch(Math.floor(r)){case 0:s={r:o,g:i,b:0};break;case 1:s={r:i,g:o,b:0};break;case 2:s={r:0,g:o,b:i};break;case 3:s={r:0,g:i,b:o};break;case 4:s={r:i,g:0,b:o};break;case 5:case 6:s={r:o,g:0,b:i};break;default:s={r:0,g:0,b:0}}return s.r=Math.round(s.r+n-o),s.g=Math.round(s.g+n-o),s.b=Math.round(s.b+n-o),s}(t):t}function p(t){return o(t)?t:function(t){const r=t.r,e=t.g,n=t.b,o=Math.max(r,e,n),i=o-Math.min(r,e,n);let s=o,a=0===i?0:o===r?(e-n)/i%6:o===e?(n-r)/i+2:(r-e)/i+4,l=0===i?0:i/s;return a<0&&(a+=6),a*=60,l*=100,s*=100/255,{h:a,s:l,v:s}}(d(t))}function g(t){return i(t)?t:function(t){return m(c(t))}(d(t))}function y(t){return s(t)?t:function(t){return function(t){const r=t.l,e=t.a,n=t.b,o=Math.sqrt(e*e+n*n);let i=Math.atan2(n,e);return i=i>0?i:i+2*Math.PI,{l:r,c:o,h:i}}(m(c(t)))}(d(t))}var b,M;(M=b||(b={}))[M.Low=160]="Low",M[M.High=225]="High"},92517:(t,r,e)=>{e.d(r,{f:()=>o,t:()=>i});var n=e(93804);const o=(0,n.s)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),i=(0,n.s)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},91276:(t,r,e)=>{e.d(r,{a:()=>p,c:()=>o,e:()=>d,s:()=>i,t:()=>f});var n=e(18527);function o(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t}function i(t,r,e,n,o){return t[0]=r,t[1]=e,t[2]=n,t[3]=o,t}function s(t,r,e){return t[0]=r[0]-e[0],t[1]=r[1]-e[1],t[2]=r[2]-e[2],t[3]=r[3]-e[3],t}function a(t,r,e){return t[0]=r[0]*e[0],t[1]=r[1]*e[1],t[2]=r[2]*e[2],t[3]=r[3]*e[3],t}function l(t,r,e){return t[0]=r[0]/e[0],t[1]=r[1]/e[1],t[2]=r[2]/e[2],t[3]=r[3]/e[3],t}function u(t,r){const e=r[0]-t[0],n=r[1]-t[1],o=r[2]-t[2],i=r[3]-t[3];return Math.sqrt(e*e+n*n+o*o+i*i)}function c(t,r){const e=r[0]-t[0],n=r[1]-t[1],o=r[2]-t[2],i=r[3]-t[3];return e*e+n*n+o*o+i*i}function h(t){const r=t[0],e=t[1],n=t[2],o=t[3];return Math.sqrt(r*r+e*e+n*n+o*o)}function m(t){const r=t[0],e=t[1],n=t[2],o=t[3];return r*r+e*e+n*n+o*o}function f(t,r,e){const n=r[0],o=r[1],i=r[2],s=r[3];return t[0]=e[0]*n+e[4]*o+e[8]*i+e[12]*s,t[1]=e[1]*n+e[5]*o+e[9]*i+e[13]*s,t[2]=e[2]*n+e[6]*o+e[10]*i+e[14]*s,t[3]=e[3]*n+e[7]*o+e[11]*i+e[15]*s,t}function d(t,r){return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}function p(t,r){const e=t[0],o=t[1],i=t[2],s=t[3],a=r[0],l=r[1],u=r[2],c=r[3],h=(0,n.g)();return Math.abs(e-a)<=h*Math.max(1,Math.abs(e),Math.abs(a))&&Math.abs(o-l)<=h*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(i-u)<=h*Math.max(1,Math.abs(i),Math.abs(u))&&Math.abs(s-c)<=h*Math.max(1,Math.abs(s),Math.abs(c))}const g=s,y=a,b=l,M=u,A=c,v=h,S=m;Object.freeze(Object.defineProperty({__proto__:null,add:function(t,r,e){return t[0]=r[0]+e[0],t[1]=r[1]+e[1],t[2]=r[2]+e[2],t[3]=r[3]+e[3],t},ceil:function(t,r){return t[0]=Math.ceil(r[0]),t[1]=Math.ceil(r[1]),t[2]=Math.ceil(r[2]),t[3]=Math.ceil(r[3]),t},copy:o,copyVec3:function(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t},dist:M,distance:u,div:b,divide:l,dot:function(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3]},equals:p,exactEquals:d,floor:function(t,r){return t[0]=Math.floor(r[0]),t[1]=Math.floor(r[1]),t[2]=Math.floor(r[2]),t[3]=Math.floor(r[3]),t},inverse:function(t,r){return t[0]=1/r[0],t[1]=1/r[1],t[2]=1/r[2],t[3]=1/r[3],t},len:v,length:h,lerp:function(t,r,e,n){const o=r[0],i=r[1],s=r[2],a=r[3];return t[0]=o+n*(e[0]-o),t[1]=i+n*(e[1]-i),t[2]=s+n*(e[2]-s),t[3]=a+n*(e[3]-a),t},max:function(t,r,e){return t[0]=Math.max(r[0],e[0]),t[1]=Math.max(r[1],e[1]),t[2]=Math.max(r[2],e[2]),t[3]=Math.max(r[3],e[3]),t},min:function(t,r,e){return t[0]=Math.min(r[0],e[0]),t[1]=Math.min(r[1],e[1]),t[2]=Math.min(r[2],e[2]),t[3]=Math.min(r[3],e[3]),t},mul:y,multiply:a,negate:function(t,r){return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=-r[3],t},normalize:function(t,r){const e=r[0],n=r[1],o=r[2],i=r[3];let s=e*e+n*n+o*o+i*i;return s>0&&(s=1/Math.sqrt(s),t[0]=e*s,t[1]=n*s,t[2]=o*s,t[3]=i*s),t},random:function(t,r){const e=n.R;let o,i,s,a,l,u;r=r||1;do{o=2*e()-1,i=2*e()-1,l=o*o+i*i}while(l>=1);do{s=2*e()-1,a=2*e()-1,u=s*s+a*a}while(u>=1);const c=Math.sqrt((1-l)/u);return t[0]=r*o,t[1]=r*i,t[2]=r*s*c,t[3]=r*a*c,t},round:function(t,r){return t[0]=Math.round(r[0]),t[1]=Math.round(r[1]),t[2]=Math.round(r[2]),t[3]=Math.round(r[3]),t},scale:function(t,r,e){return t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e,t[3]=r[3]*e,t},scaleAndAdd:function(t,r,e,n){return t[0]=r[0]+e[0]*n,t[1]=r[1]+e[1]*n,t[2]=r[2]+e[2]*n,t[3]=r[3]+e[3]*n,t},set:i,sqrDist:A,sqrLen:S,squaredDistance:c,squaredLength:m,str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},sub:g,subtract:s,transformMat4:f,transformQuat:function(t,r,e){const n=r[0],o=r[1],i=r[2],s=e[0],a=e[1],l=e[2],u=e[3],c=u*n+a*i-l*o,h=u*o+l*n-s*i,m=u*i+s*o-a*n,f=-s*n-a*o-l*i;return t[0]=c*u+f*-s+h*-l-m*-a,t[1]=h*u+f*-a+m*-s-c*-l,t[2]=m*u+f*-l+c*-a-h*-s,t[3]=r[3],t}},Symbol.toStringTag,{value:"Module"}))},62482:(t,r,e)=>{function n(){return[0,0,0,0]}function o(t,r,e,n){return[t,r,e,n]}e.d(r,{c:()=>n,f:()=>o}),o(1,1,1,1)},94345:(t,r,e)=>{e.d(r,{yR:()=>c});var n=e(36544),o=e(44600),i=e(2160),s=e(36533),a=e(64752),l=e(84200),u=e(67504);e(7969),e(92517),e(77037),e(32773),e(20266),e(90740),e(32816),e(29298),e(93181),e(13671),e(40499),e(6407),e(69421),e(91047),e(69763),e(93804),e(18683),e(64604),e(29512),e(99063),e(99924),e(41390),e(58498),e(45371),e(80959),e(29208),e(49877),e(56273),e(48844),e(97827),e(91695),e(18169),e(48402),e(16699),e(26809),e(2589),e(18527);const c={base:i.A,key:"type",typeMap:{extent:o.A,multipoint:s.A,point:a.A,polyline:u.A,polygon:l.A}};(0,n.a)(c)},77037:(t,r,e)=>{e.d(r,{$B:()=>p,Bi:()=>f,Rg:()=>m,U9:()=>c,ZC:()=>u,fT:()=>h,rS:()=>d,xD:()=>y});var n=e(44600),o=e(2160),i=e(36533),s=e(64752),a=e(84200),l=e(67504);function u(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}function c(t){return void 0!==t.points}function h(t){return void 0!==t.x&&void 0!==t.y}function m(t){return void 0!==t.paths}function f(t){return void 0!==t.rings}function d(t){return null==t?null:t instanceof o.A?t:h(t)?s.A.fromJSON(t):m(t)?l.A.fromJSON(t):f(t)?a.A.fromJSON(t):c(t)?i.A.fromJSON(t):u(t)?n.A.fromJSON(t):null}function p(t){return t?h(t)?"esriGeometryPoint":m(t)?"esriGeometryPolyline":f(t)?"esriGeometryPolygon":u(t)?"esriGeometryEnvelope":c(t)?"esriGeometryMultipoint":null:null}e(32816),e(20266),e(90740),e(32773),e(29298),e(36544),e(93181),e(13671),e(40499),e(6407),e(69421),e(91047),e(7969),e(99924),e(41390),e(58498),e(45371),e(80959),e(69763),e(93804),e(18683),e(64604),e(29512),e(99063),e(56273),e(29208),e(49877),e(48844),e(97827),e(91695),e(18169),e(48402),e(16699),e(26809),e(2589),e(18527);const g={esriGeometryPoint:s.A,esriGeometryPolyline:l.A,esriGeometryPolygon:a.A,esriGeometryEnvelope:n.A,esriGeometryMultipoint:i.A};function y(t){return t&&g[t]||null}},1030:(t,r,e)=>{e.d(r,{A:()=>f});var n,o=e(32816),i=e(35902),s=e(32773),a=e(29298),l=e(36544),u=e(88663),c=e(69421),h=e(15319);e(13226),e(16699),e(26809),e(2589),e(18527),e(20266),e(90740),e(93181),e(13671),e(40499),e(6407),e(93804),e(91047),e(99924),e(41390),e(58498),e(45371),e(80959);let m=n=class extends h.A{constructor(t){super(t),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new n({fromColor:(0,s.o8)(this.fromColor),toColor:(0,s.o8)(this.toColor),algorithm:this.algorithm})}};(0,o._)([(0,u.e)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],m.prototype,"algorithm",void 0),(0,o._)([(0,a.MZ)({type:i.A,json:{type:[l.I],write:!0}})],m.prototype,"fromColor",void 0),(0,o._)([(0,a.MZ)({type:i.A,json:{type:[l.I],write:!0}})],m.prototype,"toColor",void 0),(0,o._)([(0,a.MZ)({type:["algorithmic"]})],m.prototype,"type",void 0),m=n=(0,o._)([(0,c.$)("esri.rest.support.AlgorithmicColorRamp")],m);const f=m},15319:(t,r,e)=>{e.d(r,{A:()=>l});var n=e(32816),o=e(99924),i=e(29298),s=(e(32773),e(20266),e(69421));e(41390),e(40499),e(93181),e(13671),e(58498),e(91047),e(45371),e(80959),e(6407),e(90740),e(36544);let a=class extends o.oY{constructor(t){super(t),this.type=null}};(0,n._)([(0,i.MZ)({readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,n._)([(0,s.$)("esri.rest.support.ColorRamp")],a);const l=a},60785:(t,r,e)=>{e.d(r,{A:()=>h});var n,o=e(32816),i=e(32773),s=e(29298),a=(e(20266),e(69421)),l=e(1030),u=e(15319);e(36544),e(93181),e(13671),e(40499),e(6407),e(90740),e(91047),e(35902),e(13226),e(16699),e(26809),e(2589),e(18527),e(88663),e(93804),e(99924),e(41390),e(58498),e(45371),e(80959);let c=n=class extends u.A{constructor(t){super(t),this.colorRamps=null,this.type="multipart"}clone(){return new n({colorRamps:(0,i.o8)(this.colorRamps)})}};(0,o._)([(0,s.MZ)({type:[l.A],json:{write:!0}})],c.prototype,"colorRamps",void 0),(0,o._)([(0,s.MZ)({type:["multipart"]})],c.prototype,"type",void 0),c=n=(0,o._)([(0,a.$)("esri.rest.support.MultipartColorRamp")],c);const h=c}}]);