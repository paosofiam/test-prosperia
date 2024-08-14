// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../Graphic ../../../PopupTemplate ../../../layers/GraphicsLayer ../../../popup/FieldInfo ../../../symbols/SimpleFillSymbol ./GeometryHandler".split(" "),function(k,p,q,r,t,m,u){function f(a){return"graphics"===a.type}const d=`utility-network-trace-result-area-${Date.now()}`;class v{constructor(){this.traceInformation={};this._geometryHandler=new u.GeometryHandler}addResultAreaToMap(a,b){(b=this.createGraphicLayer(b))&&f(b)&&b.add(a)}changeResultAreaColor(a,b,c){const e=new m({color:b.color,
style:"solid",outline:{color:b.color,width:1}});(a=this._findGraphicsByTraceId(a,c))&&a.forEach(l=>{l.symbol=e});return e}createBuffer(a,b,c,e){return this._geometryHandler.createBuffer(a,b,c,e)}createConvexHull(a,b,c){a=this._geometryHandler.createConvexHull(a);return 0<b&&a?this.createBuffer(a,[b],c,!1):a}createResultAreaGraphic(a,b,c,e,l,g){g=new m({color:g.color,style:"solid",outline:{color:g.color,width:1}});const n=[];for(const h in b)n.push(new t({fieldName:h,label:"areaStatistic"===h?e.attributeStrings[h]+
" ("+l.units[c]?.abbr+")":e.attributeStrings[h]}));return new p({geometry:a,symbol:g,attributes:b,popupTemplate:new q({title:b.traceName,content:[{type:"fields",fieldInfos:n}]})})}removeResultArea(a,b){const c=b.findLayerById(d);return c&&f(c)?((a=this._findGraphicsByTraceId(a,b))&&c.removeMany(a),a):null}removeAllResultAreaGraphics(a){a&&(a=a.findLayerById(d))&&f(a)&&a.removeAll()}createGraphicLayer(a,b){const c=a.findLayerById(d);if(c&&f(c))return c;b=new r({title:b??d,listMode:"hide",id:d});a.add(b);
return b}_findGraphicsByTraceId(a,b){return(b=b.findLayerById(d))&&f(b)&&(b=b.graphics.filter(c=>c.attributes.traceId===a),0<b.length)?b.toArray():null}}k.ResultAreaHandler=v;k.resultAreaGraphicLayer=d;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});