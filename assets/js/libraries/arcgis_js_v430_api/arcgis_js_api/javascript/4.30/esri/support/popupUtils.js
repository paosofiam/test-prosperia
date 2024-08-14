// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../PopupTemplate ../layers/support/fieldUtils ../popup/content/AttachmentsContent ../popup/content/Content ../popup/content/CustomContent ../popup/content/ExpressionContent ../popup/content/FieldsContent ../popup/content/MediaContent ../popup/content/RelationshipContent ../popup/content/TextContent ../popup/FieldInfo ../popup/support/FieldInfoFormat".split(" "),function(f,p,k,u,C,D,E,l,F,G,H,q,g){function v(a,c){const b=a;c&&(a=a.filter(d=>!c.includes(d.type)));a===b&&(a=a.slice());
a.sort(w);return a}function w(a,c){return"oid"===a.type?-1:"oid"===c.type?1:r(a)?-1:r(c)?1:(a.alias||a.name).toLocaleLowerCase().localeCompare((c.alias||c.name).toLocaleLowerCase())}function m(a,c){const b=c?.visibleFieldNames;return v(a.fields??[],c?.ignoreFieldTypes||x).map(d=>{var e=d.name,h=k.isFieldEditable(d,a),y=d.alias,z=t(d),n={...a,visibleFieldNames:b};d=n.visibleFieldNames?n.visibleFieldNames.has(d.name):k.isFieldVisibleByDefault(d,n);return new q({fieldName:e,isEditable:h,label:y,format:z,
visible:d})})}function A(a,c){return a.map(b=>new q({fieldName:b.name,isEditable:!1,label:b.alias,format:B(b,c),visible:!0}))}function B(a,c){const {onStatisticField:b,onStatisticExpression:d,statisticType:e}=a;if(b&&(a=c.find(h=>b===h.name)))return t(a);if("number"===d?.returnType)return new g({digitSeparator:!0,places:2});if("count"===e)return new g({digitSeparator:!0,places:0})}function t(a){switch(a.type){case "small-integer":case "integer":case "single":return new g({digitSeparator:!0,places:0});
case "double":return new g({digitSeparator:!0,places:2});case "string":if(k.isRasterPixelValueField(a.name))return new g({digitSeparator:!0,places:0})}}function r(a){return"name"===(a.name&&a.name.toLowerCase())||"name"===a.alias?.toLowerCase()?!0:!1}const x=["geometry","blob","raster","guid","xml"];f.createFieldInfos=m;f.createFieldsContent=function(a,c){return new l({fieldInfos:m(a,c).filter(b=>b.visible)})};f.createPopupTemplate=function({displayField:a,editFieldsInfo:c,fields:b,objectIdField:d,
title:e},h){if(!b)return null;c=m({editFieldsInfo:c,fields:b,objectIdField:d},h);if(!c.length)return null;b={titleBase:e,fields:b,displayField:a};a=k.getDisplayFieldName(b);({titleBase:b}=b);a=a?`${b}: {${a.trim()}}`:b??"";b=[new l,new u];return new p({title:a,content:b,fieldInfos:c})};f.createPopupTemplateForFeatureReduction=function(a){const {fields:c,featureReduction:b,title:d}=a;a=b.fields;if(!a)return null;a=A(a,c??[]);if(!a.length)return null;var e=[new l];return new p({title:d,content:e,fieldInfos:a})};
Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});