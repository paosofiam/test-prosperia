// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/unitUtils ../../../geometry/support/spatialReferenceUtils ../../../layers/graphics/OptimizedFeature ../../../layers/graphics/OptimizedFeatureSet ../../../layers/graphics/OptimizedGeometry".split(" "),function(d,e,l,f,m,g){const h=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class n{constructor(a){this._options=a;this.geometryTypes=h;this._vertexDimension=this._coordinatePtr=0}createFeatureResult(){return new m}prepareFeatures(a){this._vertexDimension=
2;a.hasZ&&this._vertexDimension++;a.hasM&&this._vertexDimension++}finishFeatureResult(a){if(a?.features&&a.hasZ&&this._options.sourceSpatialReference&&a.spatialReference&&!l.equals(a.spatialReference,this._options.sourceSpatialReference)&&!a.spatialReference.vcsWkid){var b=e.getMetersPerVerticalUnitForSR(this._options.sourceSpatialReference),c=e.getMetersPerVerticalUnitForSR(a.spatialReference);b/=c;if(1!==b)for(const k of a.features)if(f.hasGeometry(k))for(a=k.geometry.coords,c=2;c<a.length;c+=3)a[c]*=
b}}addFeature(a,b){a.features.push(b)}createFeature(){return new f.OptimizedFeature}createSpatialReference(){return{wkid:0}}createGeometry(){return new g}addField(a,b){a.fields.push(b)}allocateCoordinates(a){a.coords.length=a.lengths.reduce((b,c)=>b+c,0)*this._vertexDimension;this._coordinatePtr=0}addCoordinate(a,b){a.coords[this._coordinatePtr++]=b}addCoordinatePoint(a,b){a.coords.push(b)}addLength(a,b){a.lengths.push(b)}addQueryGeometry(a,b){a.queryGeometry=b.queryGeometry;a.queryGeometryType=b.queryGeometryType}createPointGeometry(){return new g}}
d.OptimizedFeatureSetParserContext=n;d.optimizedGeometryTypes=h;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});