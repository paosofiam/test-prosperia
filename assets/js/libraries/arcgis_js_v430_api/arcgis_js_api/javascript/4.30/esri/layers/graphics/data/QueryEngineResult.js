// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/lang ../../../geometry/support/centroid ../../../geometry/support/extentUtils ../../../geometry/support/quantizationUtils ../../../geometry/support/spatialReferenceUtils ./AttributesBuilder ./geometryUtils ./projectionSupport ./SnappingCandidate ../../support/fieldUtils ../../../statistics/utils".split(" "),function(X,P,Y,Q,L,R,M,K,E,S,N,D,C){function Z(a,b,c,e){const d=e.x-c.x;e=e.y-c.y;b=Math.min(1,Math.max(0,((b.x-c.x)*d+(b.y-c.y)*e)/(d*d+e*e)));a.x=c.x+d*
b;a.y=c.y+e*b}function T(a,b){return a?b?4:3:b?3:2}class aa{constructor(a,b,c){this.items=a;this.query=b;this.geometryType=c.geometryType;this.hasM=c.hasM;this.hasZ=c.hasZ;this.fieldsIndex=c.fieldsIndex;this.objectIdField=c.objectIdField;this.spatialReference=c.spatialReference;this.featureAdapter=c.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const a=new K(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return a.countDistinctValues(this.items);
const {groupByFieldsForStatistics:b,having:c,outStatistics:e}=this.query;if(!b?.length)return 1;const d=new Map,f=new Map,k=new Set;for(const n of e){var {statisticType:g}=n;g="exceedslimit"!==g?n.onStatisticField:void 0;if(!f.has(g)){var h=[];for(const m of b){const p=this._getAttributeValues(a,m,d);h.push(p)}f.set(g,this._calculateUniqueValues(h,a.returnDistinctValues))}g=f.get(g);for(const m in g){const {data:p,items:r}=g[m];h=p.join(",");c&&!a.validateItems(r,c)||k.add(h)}}return k.size}async createQueryResponse(){let a;
a=this.query.outStatistics?this.query.outStatistics.some(b=>"exceedslimit"===b.statisticType)?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):this._createFeatureQueryResponse(this.query);if(this.query.returnQueryGeometry){const b=this.query.geometry;M.isValid(this.query.outSR)&&!M.equals(b.spatialReference,this.query.outSR)?a.queryGeometry=E.cleanFromGeometryEngine({spatialReference:this.query.outSR,...S.project(b,b.spatialReference,this.query.outSR)}):
a.queryGeometry=E.cleanFromGeometryEngine({spatialReference:this.query.outSR,...b})}return a}createSnappingResponse(a,b){const c=this.featureAdapter,e=T(this.hasZ,this.hasM),{point:d,mode:f}=a,k="number"===typeof a.distance?a.distance:a.distance.x,g="number"===typeof a.distance?a.distance:a.distance.y,h={candidates:[]},n="esriGeometryPolygon"===this.geometryType;b=this._getPointCreator(f,this.spatialReference,b);const m=new U(null,0),p=new U(null,0),r={x:0,y:0,z:0};for(const v of this.items){var l=
c.getGeometry(v);if(null==l)continue;const {coords:w,lengths:y}=l;m.coords=w;p.coords=w;if(a.returnEdge){l=0;for(var t=0;t<y.length;t++){var z=y[t];for(var q=0;q<z;q++,l+=e){var x=m;x.coordsIndex=l;if(q!==z-1){const A=p;A.coordsIndex=l+e;const B=r;Z(r,d,x,A);var u=(d.x-B.x)/k;const F=(d.y-B.y)/g;u=u*u+F*F;1>=u&&h.candidates.push(N.makeEdgeCandidate(c.getObjectId(v),b(B),Math.sqrt(u),b(x),b(A)))}}}}if("none"!==a.vertexMode)if(l=n?w.length-e:w.length,"all"===a.vertexMode)for(t=0;t<l;t+=e)z=m,z.coordsIndex=
t,q=(d.x-z.x)/k,x=(d.y-z.y)/g,q=q*q+x*x,1>=q&&h.candidates.push(N.makeVertexCandidate(c.getObjectId(v),b(z),Math.sqrt(q)));else if("ends"===a.vertexMode){l=[0];n||l.push(w.length-e);for(const A of l)l=m,l.coordsIndex=A,t=(d.x-l.x)/k,z=(d.y-l.y)/g,t=t*t+z*z,1>=t&&h.candidates.push(N.makeVertexCandidate(c.getObjectId(v),b(l),Math.sqrt(t)))}}h.candidates.sort((v,w)=>v.distance-w.distance);return h}_getPointCreator(a,b,c){const e=null==c||M.equals(b,c)?f=>f:f=>S.project(f,b,c),{hasZ:d}=this;return"3d"===
a?d?({x:f,y:k,z:g})=>e({x:f,y:k,z:g}):({x:f,y:k})=>e({x:f,y:k,z:0}):({x:f,y:k})=>e({x:f,y:k})}async createSummaryStatisticsResponse(a){const {field:b,valueExpression:c,normalizationField:e,normalizationType:d,normalizationTotal:f,minValue:k,maxValue:g,scale:h,timeZone:n}=a;var m=this.fieldsIndex.get(b);a=D.isDateField(m)||D.isDateOnlyField(m)||D.isTimestampOffsetField(m);const p=await this._getDataValues({field:b,valueExpression:c,normalizationField:e,normalizationType:d,normalizationTotal:f,scale:h,
timeZone:n}),r=C.isNullCountSupported({normalizationType:d,normalizationField:e,minValue:k,maxValue:g}),l={value:.5,fieldType:m?.type};m=D.isStringField(m)?C.calculateStringStatistics({values:p,supportsNullCount:r,percentileParams:l}):C.calculateStatistics({values:p,minValue:k,maxValue:g,useSampleStdDev:!d,supportsNullCount:r,percentileParams:l});return C.processSummaryStatisticsResult(m,a)}async createUniqueValuesResponse(a){const {field:b,valueExpression:c,domains:e,returnAllCodedValues:d,scale:f,
timeZone:k}=a;var g=await this._getDataValues({field:b,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,valueExpression:c,scale:f,timeZone:k},!1);g=C.calculateUniqueValuesCount(g);return C.createUVResult(g,e,d,a.fieldDelimiter)}async createClassBreaksResponse(a){const {field:b,valueExpression:c,normalizationField:e,normalizationType:d,normalizationTotal:f,classificationMethod:k,standardDeviationInterval:g,minValue:h,maxValue:n,numClasses:m,scale:p,timeZone:r}=a;a=await this._getDataValues({field:b,
valueExpression:c,normalizationField:e,normalizationType:d,normalizationTotal:f,scale:p,timeZone:r});a=C.calculateClassBreaks(a,{field:b,normalizationField:e,normalizationType:d,normalizationTotal:f,classificationMethod:k,standardDeviationInterval:g,minValue:h,maxValue:n,numClasses:m});return C.resolveCBResult(a,k)}async createHistogramResponse(a){const {field:b,valueExpression:c,normalizationField:e,normalizationType:d,normalizationTotal:f,classificationMethod:k,standardDeviationInterval:g,minValue:h,
maxValue:n,numBins:m,scale:p,timeZone:r}=a;a=await this._getDataValues({field:b,valueExpression:c,normalizationField:e,normalizationType:d,normalizationTotal:f,scale:p,timeZone:r});return C.calculateHistogram(a,{field:b,normalizationField:e,normalizationType:d,normalizationTotal:f,classificationMethod:k,standardDeviationInterval:g,minValue:h,maxValue:n,numBins:m})}_sortFeatures(a,b,c){if(1<a.length&&b?.length)for(const e of b.reverse()){b=e.split(" ");const d=b[0],f=this.fieldsIndex.get(d);b=b[1]?
"desc"===b[1].toLowerCase():!1;const k=C.getAttributeComparator(f?.type,b);a.sort((g,h)=>{g=c(g,d,f);h=c(h,d,f);return k(g,h)})}}_createFeatureQueryResponse(a){const b=this.items,{geometryType:c,hasM:e,hasZ:d,objectIdField:f,spatialReference:k}=this,{outFields:g,outSR:h,quantizationParameters:n,resultRecordCount:m,resultOffset:p,returnZ:r,returnM:l}=a,t=null!=m?b.length>(p||0)+m:!1,z=g&&(g.includes("*")?[...this.fieldsIndex.fields]:g.map(q=>this.fieldsIndex.get(q)));return{exceededTransferLimit:t,
features:this._createFeatures(a,b),fields:z,geometryType:c,hasM:e&&l,hasZ:d&&r,objectIdFieldName:f,spatialReference:E.cleanFromGeometryEngine(h||k),transform:n&&R.toQuantizationTransform(n)||null}}_createFeatures(a,b){const c=new K(a,this.featureAdapter,this.fieldsIndex),{hasM:e,hasZ:d}=this,{orderByFields:f,quantizationParameters:k,returnGeometry:g,returnCentroid:h,maxAllowableOffset:n,resultOffset:m,resultRecordCount:p,returnZ:r=!1,returnM:l=!1}=a,t=d&&r,z=e&&l;a=[];var q=0;const x=[...b];this._sortFeatures(x,
f,(A,B,F)=>c.getFieldValue(A,B,F));if(this.geometryType&&(g||h)){var u=R.toQuantizationTransform(k)??void 0;b="esriGeometryPolygon"===this.geometryType||"esriGeometryPolyline"===this.geometryType;if(g&&!h)for(var v of x){var w=this.featureAdapter.getGeometry(v),y={attributes:c.getAttributes(v),geometry:E.getGeometry(this.geometryType,this.hasZ,this.hasM,w,n,u,t,z)};b&&w&&!y.geometry&&(y.centroid=E.transformCentroid(this,this.featureAdapter.getCentroid(v,this),u));a[q++]=y}else if(!g&&h)for(w of x)a[q++]=
{attributes:c.getAttributes(w),centroid:E.transformCentroid(this,this.featureAdapter.getCentroid(w,this),u)};else for(y of x)a[q++]={attributes:c.getAttributes(y),centroid:E.transformCentroid(this,this.featureAdapter.getCentroid(y,this),u),geometry:E.getGeometry(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(y),n,u,t,z)}}else for(u of x)(v=c.getAttributes(u))&&(a[q++]={attributes:v});q=m||0;null!=p&&(a=a.slice(q,Math.min(a.length,q+p)));return a}_createExceedsLimitQueryResponse(a){var b=
!1;let c=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY;b=Number.POSITIVE_INFINITY;for(const d of a.outStatistics??[])if("exceedslimit"===d.statisticType){c=null!=d.maxPointCount?d.maxPointCount:Number.POSITIVE_INFINITY;e=null!=d.maxRecordCount?d.maxRecordCount:Number.POSITIVE_INFINITY;b=null!=d.maxVertexCount?d.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)b=this.items.length>c;else if(this.items.length>e)b=!0;else{a=T(this.hasZ,this.hasM);const d=
this.featureAdapter;b=this.items.reduce((f,k)=>{k=d.getGeometry(k);return f+(null!=k&&k.coords.length||0)},0)/a>b}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(b)}}]}}async _createStatisticsQueryResponse(a){var b={attributes:{}};const c=[],e=new Map,d=new Map,f=new Map,k=new Map,g=new K(a,this.featureAdapter,this.fieldsIndex);var h=a.outStatistics;const {groupByFieldsForStatistics:n,
having:m,orderByFields:p,resultRecordCount:r}=a;a=n?.length;const l=!!a,t=l?n[0]:null,z=l&&!this.fieldsIndex.get(t);for(const w of h??[]){const {outStatisticFieldName:y,statisticType:A}=w;h=w;const B="exceedslimit"!==A?w.onStatisticField:void 0,F="percentile_disc"===A||"percentile_cont"===A;var q="EnvelopeAggregate"===A||"CentroidAggregate"===A||"ConvexHullAggregate"===A;const ba=l&&1===a&&(B===t||z)&&"count"===A;if(l){if(!f.has(B)){var x=[];for(const I of n){var u=this._getAttributeValues(g,I,e);
x.push(u)}f.set(B,this._calculateUniqueValues(x,q?!1:g.returnDistinctValues))}x=f.get(B);if(!x)continue;u=Object.keys(x);for(const I of u){const {count:O,data:V,items:W,itemPositions:ca}=x[I];u=V.join(",");if(!m||g.validateItems(W,m)){const G=k.get(u)||{attributes:{}};if(q){G.aggregateGeometries||(G.aggregateGeometries={});const {aggregateGeometries:H,outStatisticFieldName:J}=await this._getAggregateGeometry(h,W);G.aggregateGeometries[J]=H}else{var v=null;if(ba)v=O;else{const H=this._getAttributeValues(g,
B,e);v=ca.map(J=>H[J]);v=F&&"statisticParameters"in h?this._getPercentileValue(h,v):this._getStatisticValue(h,v,null,g.returnDistinctValues)}G.attributes[y]=v}let da=0;n.forEach((H,J)=>G.attributes[this.fieldsIndex.get(H)?H:`EXPR_${++da}`]=V[J]);k.set(u,G)}}}else if(q){b.aggregateGeometries||(b.aggregateGeometries={});const {aggregateGeometries:I,outStatisticFieldName:O}=await this._getAggregateGeometry(h,this.items);b.aggregateGeometries[O]=I}else q=this._getAttributeValues(g,B,e),b.attributes[y]=
F&&"statisticParameters"in h?this._getPercentileValue(h,q):this._getStatisticValue(h,q,d,g.returnDistinctValues);h="min"!==A&&"max"!==A||!D.isStringField(this.fieldsIndex.get(B))&&!this._isAnyDateField(B)?null:this.fieldsIndex.get(B)?.type;c.push({name:y,alias:y,type:h||"esriFieldTypeDouble"})}b=l?Array.from(k.values()):[b];this._sortFeatures(b,p,(w,y)=>w.attributes[y]);r&&(b.length=Math.min(r,b.length));return{fields:c,features:b}}_isAnyDateField(a){a=this.fieldsIndex.get(a);return D.isDateField(a)||
D.isDateOnlyField(a)||D.isTimestampOffsetField(a)||D.isTimeOnlyField(a)}async _getAggregateGeometry(a,b){const {convexHull:c,union:e}=await new Promise((r,l)=>X(["../../../geometry/geometryEngineJSON"],r,l)),{statisticType:d,outStatisticFieldName:f}=a,{featureAdapter:k,spatialReference:g,geometryType:h,hasZ:n,hasM:m}=this;b=b.map(r=>E.getGeometry(h,n,m,k.getGeometry(r)));const p=c(g,b,!0)[0];a={aggregateGeometries:null,outStatisticFieldName:null};"EnvelopeAggregate"===d?(b=p?L.getPolygonExtent(p):
L.getGeometryExtent(e(g,b)),a.aggregateGeometries={...b,spatialReference:g},a.outStatisticFieldName=f||"extent"):"CentroidAggregate"===d?(b=p?Q.polygonCentroid(p):Q.extentCentroid(L.getGeometryExtent(e(g,b))),a.aggregateGeometries={x:b[0],y:b[1],spatialReference:g},a.outStatisticFieldName=f||"centroid"):"ConvexHullAggregate"===d&&(a.aggregateGeometries=p,a.outStatisticFieldName=f||"convexHull");return a}_getStatisticValue(a,b,c,e){const {onStatisticField:d,statisticType:f}=a;a=null;a=c?.has(d)?c.get(d):
D.isStringField(this.fieldsIndex.get(d))||this._isAnyDateField(d)?C.calculateStringStatistics({values:b,returnDistinct:e}):C.calculateStatistics({values:e?[...(new Set(b))]:b,minValue:null,maxValue:null,useSampleStdDev:!0});c&&c.set(d,a);return a["var"===f?"variance":f]}_getPercentileValue(a,b){const {onStatisticField:c,statisticParameters:e,statisticType:d}=a,{value:f,orderBy:k}=e;a=this.fieldsIndex.get(c);return C.calculatePercentile(b,{value:f,orderBy:k,fieldType:a?.type,isDiscrete:"percentile_disc"===
d})}_getAttributeValues(a,b,c){if(c.has(b))return c.get(b);const e=this.fieldsIndex.get(b),d=this.items.map(f=>a.getFieldValue(f,b,e));c.set(b,d);return d}_calculateUniqueValues(a,b){const c={},e=this.items,d=e.length;for(let f=0;f<d;f++){const k=e[f],g=[];for(const n of a)g.push(n[f]);const h=g.join(",");null==c[h]?c[h]={count:1,data:g,items:[k],itemPositions:[f]}:(b||c[h].count++,c[h].items.push(k),c[h].itemPositions.push(f))}return c}async _getDataValues(a,b=!0){const c=new K(this.query,this.featureAdapter,
this.fieldsIndex),{valueExpression:e,scale:d,timeZone:f}=a;return e?c.getExpressionValues(this.items,e,{viewingMode:"map",scale:d,spatialReference:this.query.outSR||this.spatialReference},{geometryType:this.geometryType,hasZ:this.hasZ,hasM:this.hasM},f):c.getDataValues(this.items,Y.clone(a),b)}}class U{constructor(a,b){this.coords=a;this.coordsIndex=b}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}P.QueryEngineResult=
aa;Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});