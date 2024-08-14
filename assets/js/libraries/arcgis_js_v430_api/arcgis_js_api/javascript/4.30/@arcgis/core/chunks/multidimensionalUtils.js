/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{i as e}from"../core/lang.js";import n from"../layers/support/DimensionalDefinition.js";function t(e,n,i){const a=n.shift();if(0===i.length){const e=[];i.push({sliceId:-1,multidimensionalDefinition:e})}const s=i.length;for(let n=0;n<s;n++){const n=i.shift().multidimensionalDefinition;a.values?.forEach((t=>{i.push({sliceId:-1,multidimensionalDefinition:[...n,{variableName:e,dimensionName:a.name,values:[t]}]})}))}n.length&&t(e,n,i)}function i(e,n){const i=[];let a=0;return(n?e.variables.filter((e=>e.name.toLowerCase()===n.toLowerCase())):[...e.variables].sort(((e,n)=>e.name>n.name?1:-1))).forEach((e=>{const n=[],s=[...e.dimensions].sort(((e,n)=>e.name>n.name?-1:1));t(e.name,s,n),n.forEach((e=>{i.push({...e,sliceId:a++})}))})),i}function a(e,n,t){let i=e;if(n&&(n=[...n].sort(((e,n)=>e.dimensionName<n.dimensionName?-1:1))).forEach((({dimensionName:e,values:n,isSlice:t})=>{n.length&&(i=i.filter((i=>{const a=i.multidimensionalDefinition.find((n=>n.dimensionName===e));if(null==a)return!1;const s=a.values[0];return"number"==typeof s?"number"==typeof n[0]?n.includes(s):n.some((e=>e[0]<=s&&e[1]>=s)):"number"==typeof n[0]?n.some((e=>s[0]<=e&&s[1]>=e)):t?n.some((e=>e[0]===s[0]&&e[0]===s[1])):n.some((e=>e[0]>=s[0]&&e[0]<=s[1]||e[1]>=s[0]&&e[1]<=s[1]||e[0]<s[0]&&e[1]>s[1]))})))})),i.length&&null!=t?.start&&null!=t.end){const e=t.start.getTime(),n=t.end.getTime(),a=i[0].multidimensionalDefinition.findIndex((e=>"StdTime"===e.dimensionName));a>-1&&(i=i.filter((t=>{const i=t.multidimensionalDefinition[a].values[0];return e<=i&&n>=i})))}return i.map((e=>e.sliceId))}function s(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function r(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function l(e){return 1===e.length?[e[0],e[0]]:[e[0],e[e.length-1]]}function u(e,n,t){if(!n?.subsetDefinitions?.length)return e;let i;if(t){const{variables:a}=n;if(a.length&&!a.includes(t))return null;const s=n.subsetDefinitions.find((n=>n.dimensionName===e.name&&n.variableName===t));if(!s?.values?.length)return e;i=l(s.values)}else{const t=n.dimensions.find((({name:n})=>n===e.name));i=t?.extent}const a=i;if(!a?.length)return e;const r=e.values.filter((e=>s(e,a)));return{...e,extent:[...a],values:r}}function o(e,n,t){if(!n?.subsetDefinitions?.length)return!1;const{variables:i}=n;if(i.length&&e.some((({variableName:e})=>e&&!i.includes(e))))return!0;for(let i=0;i<e.length;i++){const a=e[i],u=n.subsetDefinitions.find((e=>(""===a.variableName||e.variableName===a.variableName)&&e.dimensionName===a.dimensionName));if(u?.values.length){const e=l(u.values);if(a.isSlice||2!==a.values.length||Array.isArray(a.values[0])||a.values[0]===a.values[1]||!t){if(a.values.some((n=>!s(n,e))))return!0}else if(!r(a.values,e))return!0}}return!1}function m(e,t){if(null==e)return{isOutside:!1};const{geometry:i,timeExtent:a,multidimensionalDefinition:s}=t;let r=null;if(null!=a&&(r=function(e,t){const i=e.dimensions.find((({name:e})=>"StdTime"===e));if(null==i||null==t.start&&null==t.end)return t;t=t.clone();const{start:a,end:s}=t.toJSON(),r=a===s?[a]:null!=a&&null!=s?[a,s]:[a??s];return 2===r.length&&i?.extent.length&&(r[0]=Math.max(r[0],i.extent[0]),r[1]=Math.min(r[1],i.extent[1]??i.extent[0]),r[1]<r[0])||o([new n({variableName:"",dimensionName:"StdTime",isSlice:1===r.length,values:r})],e,!0)?null:(t.start=new Date(r[0]),t.end=new Date(r[1]??r[0]),t)}(e,a),null==r))return{isOutside:!0};const{areaOfInterest:l}=e;if(l&&i){const e="point"===i.type?i:"extent"===i.type?i.center:"polygon"===i.type?i.centroid:null;if(e&&!l.contains(e))return{isOutside:!0}}return null!=s&&s.length&&o(s,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:i,timeExtent:r,multidimensionalDefinition:s}}}function c(e,n={}){const{multidimensionalInfo:t,keyProperties:i}=e;if(null==t)return null;const{variableName:a,multidimensionalSubset:s,multidimensionalDefinition:r}=n,l=null!=r?r[0]?.variableName:null,u=a||l||i?.DefaultVariable;let{variables:o}=t;return s?.variables?.length&&(o=o.filter((({name:e})=>s.variables.includes(e)))),u?o.find((({name:e})=>e===u))??o[0]:o[0]}function f(e,t={}){const i=c(e,t);if(!i)return null;const a=[],{dimensions:s,name:r}=i;if(0===s.length)return[new n({variableName:r,dimensionName:"",values:[],isSlice:!0})];for(let e=0;e<s.length;e++){const i=u(s[e],t.multidimensionalSubset,r);if(!i)return null;const{values:l,extent:o}=i;let m=l?.[0]??o?.[0];"stdz"===i.name.toLowerCase()&&!i.hasRanges&&o&&Math.abs(o[1])<=Math.abs(o[0])&&(m=l?.length?l[l.length-1]:o[1]),a.push(new n({variableName:r,dimensionName:i.name,values:[m],isSlice:!t.useRangeForRangedDimensionInfo||!!i.hasRanges}))}return a}function d(e){return!!e?.length&&e.some((e=>{if(null==e.values)return!0;const n=e.values.length;return 0===n||n>1||!e.isSlice&&Array.isArray(e.values[0])}))}function h(n,t){if(null==t||null==n)return null;let i=t.variables.map((e=>({...e})));return n?.variables?.length&&(i=i.filter((({name:e})=>n.variables.includes(e))),i.forEach((t=>{t.dimensions=t.dimensions.map((e=>u(e,n,t.name))).filter(e)}))),i}function g(e,n){const{values:t}=n;if(t?.length){const n=Array.isArray(t[0]),i=Array.isArray(e);return n!==i?-1:n&&i?t.findIndex((n=>n[0]===e[0]&&n[1]===e[1])):t.indexOf(e)}const{extent:i}=n;if(Array.isArray(e)||!i||e<i[0]||e>i[1])return-1;const a=n.interval||1;if("ISO8601"!==n.unit)return Math.round((e-i[0])/a);const s=i[0];let r=-1;switch(n.intervalUnit?.toLowerCase()||"seconds"){case"seconds":r=Math.round((e-s)/1e3/a);break;case"minutes":r=Math.round((e-s)/6e4/a);break;case"hours":r=Math.round((e-s)/36e5/a);break;case"days":r=Math.round((e-s)/864e5/a);break;case"months":{const n=new Date(e).getUTCFullYear()-new Date(s).getUTCFullYear(),t=new Date(s).getUTCMonth(),i=new Date(e).getUTCMonth();r=0===n?i-t:i+11-t+12*(n-1)}break;case"years":r=Math.round((new Date(e).getUTCFullYear()-new Date(s).getUTCFullYear())/a);break;case"decades":r=Math.round((new Date(e).getUTCFullYear()-new Date(s).getUTCFullYear())/10/a)}return r}function v(e){let n=e.values?.length;if(n)return n;const{extent:t,unit:i}=e,a=e.interval||1,s=t?t[1]-t[0]:0;if("ISO8601"!==i)return Math.round(s/a);switch(e.intervalUnit?.toLowerCase()??"seconds"){case"seconds":n=Math.round(s/1e3/a);break;case"minutes":n=Math.round(s/6e4/a);break;case"hours":n=Math.round(s/36e5/a);break;case"days":n=Math.round(s/864e5/a);break;case"months":if(t){const e=new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear(),i=new Date(t[0]).getUTCMonth(),a=new Date(t[1]).getUTCMonth();n=0===e?a-i+1:a+11-i+12*(e-1)+1}else n=0;break;case"years":n=t?Math.round((new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear())/a):0;break;case"decades":n=t?Math.round((new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear())/10/a):0;break;default:n=0}return n}function b(e,n){let t=0;const i=e[0].variableName,a=[...n.variables].sort(((e,n)=>e.name>n.name?1:-1));for(let n=0;n<a.length;n++){const s=a[n],r=[...s.dimensions].sort(((e,n)=>e.name>n.name?-1:1));if(s.name!==i){t+=r.map((e=>v(e))).reduce(((e,n)=>e*n));continue}const l=r.map((e=>v(e))),u=r.length;for(let n=0;n<u;n++){const i=e.find((e=>e.dimensionName===r[n].name));if(null==i)return null;const a=g(i.values[0],r[n]);if(-1===a)return null;l.shift(),t+=n===u-1?a:a*l.reduce(((e,n)=>e*n))}break}return t}export{a,f as b,i as c,c as d,h as e,m as f,b as g,o as h,d as i};
