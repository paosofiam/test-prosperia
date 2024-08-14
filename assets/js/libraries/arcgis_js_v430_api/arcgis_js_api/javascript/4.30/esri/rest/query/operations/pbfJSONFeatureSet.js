// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../../geometry/support/zscale","../../../layers/graphics/featureConversionUtils"],function(g,l,m,h){function n(a,b){return b}function f(a,b,c,d){switch(c){case 0:return e(a,b+d,0);case 1:return"lowerLeft"===a.originPosition?e(a,b+d,1):p(a,b+d,1)}}function k(a,b,c,d){switch(c){case 2:return e(a,b,2);default:return f(a,b,c,d)}}function q(a,b,c,d){switch(c){case 2:return 0===b?0:e(a,b,3);default:return f(a,b,c,d)}}function r(a,b,c,d){switch(c){case 3:return 0===
b?0:e(a,b,3);default:return k(a,b,c,d)}}function e({translate:a,scale:b},c,d){return a[d]+c*b[d]}function p({translate:a,scale:b},c,d){return a[d]-c*b[d]}class t{constructor(a){this._options=a;this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];this._previousCoordinate=[0,0];this._transform=null;this._applyTransform=n;this._lengths=[];this._vertexDimension=this._toAddInCurrentPath=this._currentLengthIndex=0;this._coordinateBuffer=this._mValueOffset=
null;this._coordinateBufferPtr=0;this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(a){this._options.applyTransform&&(a.transform=null);this._attributesConstructor=class{};this._coordinateBuffer=null;this._lengths.length=0;if(a.hasZ){var b=m.getGeometryZScaler(a.geometryType,this._options.sourceSpatialReference,a.spatialReference);if(null!=b)for(const c of a.features)b(c.geometry)}}createSpatialReference(){return{}}addField(a,b){a=a.fields;
l.assertIsSome(a);a.push(b);const c=a.map(d=>d.name);this._attributesConstructor=function(){for(const d of c)this[d]=null}}addFeature(a,b){a.features.push(b)}prepareFeatures(a){this._transform=a.transform;this._options.applyTransform&&a.transform&&(this._applyTransform=this._deriveApplyTransform(a));this._mValueOffset=null;this._vertexDimension=2;a.hasZ&&this._vertexDimension++;a.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++);switch(a.geometryType){case "esriGeometryPoint":this.addCoordinate=
(b,c,d)=>this.addCoordinatePoint(b,c,d);this.createGeometry=b=>this.createPointGeometry(b);break;case "esriGeometryPolygon":this.addCoordinate=(b,c,d)=>this._addCoordinatePolygon(b,c,d);this.createGeometry=b=>this._createPolygonGeometry(b);break;case "esriGeometryPolyline":this.addCoordinate=(b,c,d)=>this._addCoordinatePolyline(b,c,d);this.createGeometry=b=>this._createPolylineGeometry(b);break;case "esriGeometryMultipoint":this.addCoordinate=(b,c,d)=>this._addCoordinateMultipoint(b,c,d),this.createGeometry=
b=>this._createMultipointGeometry(b)}}createFeature(){this._currentLengthIndex=this._lengths.length=0;this._previousCoordinate[0]=0;this._previousCoordinate[1]=0;this._coordinateBuffer=null;this._coordinateBufferPtr=0;return{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(a,b,c){0===this._lengths.length&&(this._toAddInCurrentPath=b);this._lengths.push(b)}addQueryGeometry(a,b){const {queryGeometry:c,queryGeometryType:d}=b;b=h.unquantizeOptimizedGeometry(c.clone(),c,!1,
!1,this._transform);b=h.convertToGeometry(b,d,!1,!1);a.queryGeometryType=d;a.queryGeometry={...b}}createPointGeometry(a){const b={x:0,y:0,spatialReference:a.spatialReference};a.hasZ&&(b.z=0);a.hasM&&(b.m=0);return b}addCoordinatePoint(a,b,c){b=this._applyTransform(this._transform,b,c,0);switch(c){case 0:a.x=b;break;case 1:a.y=b;break;case 2:"z"in a?a.z=b:a.m=b;break;case 3:a.m=b}}_transformPathLikeValue(a,b){let c=0;1>=b&&(c=this._previousCoordinate[b],this._previousCoordinate[b]+=a);return null!==
this._mValueOffset&&0===a&&0<b&&!(b%this._mValueOffset)?0:this._applyTransform(this._transform,a,b,c)}_addCoordinatePolyline(a,b,c){this._dehydratedAddPointsCoordinate(a.paths,b,c)}_addCoordinatePolygon(a,b,c){this._dehydratedAddPointsCoordinate(a.rings,b,c)}_addCoordinateMultipoint(a,b,c){0===c&&a.points.push([]);b=this._transformPathLikeValue(b,c);a.points[a.points.length-1].push(b)}_createPolygonGeometry(a){return{rings:[[]],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}}_createPolylineGeometry(a){return{paths:[[]],
spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}}_createMultipointGeometry(a){return{points:[],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}}_dehydratedAddPointsCoordinate(a,b,c){0===c&&0===this._toAddInCurrentPath--&&(a.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);b=this._transformPathLikeValue(b,c);a=a[a.length-1];0===c&&(this._coordinateBufferPtr=0,this._coordinateBuffer=
Array(this._vertexDimension),a.push(this._coordinateBuffer));this._coordinateBuffer[this._coordinateBufferPtr++]=b}_deriveApplyTransform(a){const {hasZ:b,hasM:c}=a;return b&&c?r:b?k:c?q:f}}g.JSONFeatureSetParserContext=t;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});