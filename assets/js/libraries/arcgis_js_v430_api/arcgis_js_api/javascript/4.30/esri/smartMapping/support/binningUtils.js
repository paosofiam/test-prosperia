// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error"],function(a,b){a.aggregateCountField="aggregateCount";a.verifyBinningParams=function(c,d){if(!c.view)throw new b(`${d}:missing-parameters`,"'view' parameter is required for binning");if(c.sqlExpression)throw new b(`${d}:invalid-parameters`,"'sqlExpression' parameter is not supported for binning");if("3d"===c.view.type)throw new b(`${d}:invalid-parameters`,"3d view is not supported for binning");};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});