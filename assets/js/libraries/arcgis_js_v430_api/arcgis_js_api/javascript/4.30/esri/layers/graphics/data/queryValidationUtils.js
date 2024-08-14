// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Error ./attributeSupport ./projectionSupport ./spatialQuerySupport ../../../support/arcadeOnDemand".split(" "),function(q,n,h,r,t,v){function u(a,d,b){const {outFields:e,orderByFields:c,returnDistinctValues:k,outStatistics:l}=b,p=l?l.map(f=>f.outStatisticFieldName&&f.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(c&&0<c.length){const f=c.map(m=>{const g=m.toLowerCase();return g.includes(" asc")?g.split(" asc")[0]:g.includes(" desc")?g.split(" desc")[0]:m}).filter(m=>
!p.includes(m));h.validateFields(a,d,f,{expressionName:"orderByFields",query:b})}if(e&&0<e.length)h.validateFields(a,d,e,{expressionName:"outFields",query:b,allowedFieldTypes:"all"});else if(k)throw new n("unsupported-query","outFields should be specified for returnDistinctValues",{query:b});h.validateWhere(a,d,b.where,b)}function w(a,d,b){const {outStatistics:e,groupByFieldsForStatistics:c,having:k}=b;var l=c?.length,p=e?.length;if(k){if(!l||!p)throw new n("unsupported-query","outStatistics and groupByFieldsForStatistics should be specified with having",
{query:b});h.validateHaving(a,d,k,e,b)}if(p&&x(e)){p=e.map(f=>f.onStatisticField).filter(Boolean);h.validateFields(a,d,p,{expressionName:"onStatisticFields",query:b});l&&h.validateFields(a,d,c,{expressionName:"groupByFieldsForStatistics",query:b});for(const f of e){const {onStatisticField:m,statisticType:g}=f;if(("percentile_disc"===g||"percentile_cont"===g)&&"statisticParameters"in f){if({statisticParameters:l}=f,!l)throw new n("unsupported-query","statisticParameters should be set for percentile type",
{definition:f,query:b});}else a.get(m)&&"count"!==g&&"min"!==g&&"max"!==g&&h.validateFields(a,d,[m],{expressionName:`outStatistics with '${g}' statistic type`,allowedFieldTypes:y,query:b})}}}async function z(a,d,b,e){var c=[];b.valueExpression&&({arcadeUtils:c}=await v.loadArcade(),c=c.extractFieldNames(b.valueExpression));b.field&&c.push(b.field);b.field2&&c.push(b.field2);b.field3&&c.push(b.field3);b.normalizationField&&c.push(b.normalizationField);if(!c.length&&!b.valueExpression)throw new n("unsupported-query",
"field or valueExpression is required",{params:b});h.validateFields(a,d,c,{expressionName:"statistics",query:e})}function x(a){return null!=a&&a.every(d=>"exceedslimit"!==d.statisticType)}const y=new Set([...h.numericFieldTypes,...h.allDateAndTimeFieldTypes]);q.validateQuery=async function(a,{fieldsIndex:d,geometryType:b,spatialReference:e,availableFields:c}){if(0>(a.distance??0)||null!=a.geometryPrecision||a.multipatchOption&&"xyFootprint"!==a.multipatchOption||a.pixelSize||a.relationParam||a.text)throw new n("unsupported-query",
"Unsupported query options",{query:a});u(d,c,a);w(d,c,a);return Promise.all([t.checkSpatialQuerySupport(a,b,e),r.checkProjectionSupport(e,a.outSR)]).then(()=>a)};q.validateStatisticsQuery=async function(a,d,{fieldsIndex:b,geometryType:e,spatialReference:c,availableFields:k}){if(0>(a.distance??0)||null!=a.geometryPrecision||a.multipatchOption||a.pixelSize||a.relationParam||a.text||a.outStatistics||a.groupByFieldsForStatistics||a.having||a.orderByFields)throw new n("unsupported-query","Unsupported query options",
{query:a});u(b,k,a);return Promise.all([z(b,k,d,a),t.checkSpatialQuerySupport(a,e,c),r.checkProjectionSupport(c,a.outSR)]).then(()=>a)};Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});