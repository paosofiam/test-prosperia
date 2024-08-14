// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/Polygon ../../geometry/support/jsonUtils ./DimensionalDefinition ../../geometry/Geometry".split(" "),function(f,l,e,g,u,v,w,m,n,p,q,r,t){var h;l={base:t,key:"type",typeMap:{extent:n,polygon:p}};e=h=class extends e.JSONSupport{constructor(b){super(b);
this.subsetDefinitions=this.areaOfInterest=null}get dimensions(){var {subsetDefinitions:b}=this;if(null==b||0===b.length)return[];const c=new Map;b.forEach(a=>{if(a.dimensionName){if(Array.isArray(a.values[0])){var d=a.values;var k=d[0][0];d=d[a.values.length-1][1]}else d=a.values,k=d[0],d=d[a.values.length-1];c.has(a.dimensionName)?(a=c.get(a.dimensionName),a[0]=Math.min(k,a[0]),a[1]=Math.max(d,a[1])):c.set(a.dimensionName,[k,d])}});b=[];for(const a of c)b.push({name:a[0],extent:a[1]});return b}get variables(){const {subsetDefinitions:b}=
this;if(null==b||0===b.length)return[];const c=new Set;b.forEach(a=>{a.variableName&&c.add(a.variableName)});return[...c]}clone(){const b=this.subsetDefinitions?.map(a=>a.clone()),c=this.areaOfInterest?this.areaOfInterest.clone():this.areaOfInterest;return new h({areaOfInterest:c,subsetDefinitions:b})}};f.__decorate([g.property({types:l,json:{read:q.fromJSON,write:!0}})],e.prototype,"areaOfInterest",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"dimensions",null);f.__decorate([g.property({readOnly:!0})],
e.prototype,"variables",null);f.__decorate([g.property({type:[r],json:{write:!0}})],e.prototype,"subsetDefinitions",void 0);return e=h=f.__decorate([m.subclass("esri.layers.support.MultidimensionalSubset")],e)});