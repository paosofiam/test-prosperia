/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{r as e}from"./date.js";import{s}from"./timeZoneUtils.js";import{I as t,D as n}from"./datetime.js";const r={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8};function o(r,o,i,a=s){const c=new t(e(a)),u=n.fromJSDate(r,{zone:c}),l="decades"===i||"centuries"===i?"year":T(i);return"decades"===i&&(o*=10),"centuries"===i&&(o*=100),u.plus({[l]:o}).toJSDate()}function i(e,s,t="milliseconds"){const n=e.getTime(),r=m(s,t,"milliseconds");return new Date(n+r)}function a(r,o,i=s){const a=new t(e(i)),c=n.fromJSDate(r,{zone:a});if("decades"===o||"centuries"===o){const e=c.startOf("year"),{year:s}=e,t=s-s%("decades"===o?10:100);return e.set({year:t}).toJSDate()}const u=T(o);return c.startOf(u).toJSDate()}function c(e,s,t="milliseconds"){const n=new Date(m(s,t,"milliseconds"));return n.setUTCFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),n}function u(e,s="milliseconds"){const t=m(e.getUTCHours(),"hours","milliseconds"),n=m(e.getUTCMinutes(),"minutes","milliseconds"),r=m(e.getUTCSeconds(),"seconds","milliseconds");return m(t+n+r+e.getUTCMilliseconds(),"milliseconds",s)}function l(e,s){const t=new Date(e.getTime());return t.setUTCFullYear(s.getFullYear(),s.getMonth(),s.getDate()),t}function d(e){const s=new Date(0);return s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0),s.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),s}function m(e,s,t){return 0===e?0:e*r[s]/r[t]}function f(e){return e instanceof Date&&!isNaN(e.getTime())}function g(e,s){return e&&s?e.intersection(s):e||s}function T(e){switch(e){case"milliseconds":return"millisecond";case"seconds":return"second";case"minutes":return"minute";case"hours":return"hour";case"days":return"day";case"weeks":return"week";case"months":return"month";case"years":return"year"}}export{g as a,c as b,m as c,u as d,d as e,i as f,f as i,r as m,o,l as r,a as t};
