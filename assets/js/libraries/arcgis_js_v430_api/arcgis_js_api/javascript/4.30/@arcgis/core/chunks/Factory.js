/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{T as t}from"./StencilUtils.js";const c="theme-style";function o(t,o){const a=function(t){const c=t.split(",")[1],o=atob(c);return(new DOMParser).parseFromString(o,"image/svg+xml")}(t);return function(t,c){const o=new Image(c,c);return o.src=t,o}(function(t){const c=(new XMLSerializer).serializeToString(t);return`data:image/svg+xml;base64,${btoa(c)}`}(function(t,{accentColor:o,contrastColor:a}){const I=o.toHex(),i=o.a,e=a.toHex(),n=a.a,l=t.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(c);return l&&(l.innerHTML=`\n      .contrast-fill { fill: ${e}; fill-opacity: ${n}; }\n      .contrast-stroke { stroke: ${e}; stroke-opacity: ${n};  }\n      .accent-fill { fill: ${I}; fill-opacity: ${i}; }\n      .accent-stroke { stroke: ${I}; stroke-opacity:  ${i}; }`),t}(a,o)),o.size)}function a(c,a){const{accentColor:I,contrastColor:i,preMultiplyAlpha:e}=a;return c.fromData(`heading-rotate:[accent:${I},contrast:${i},size:64]`,(()=>new t(o("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NiIgY2xhc3M9ImFjY2VudC1maWxsIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI0Ljk5IiBkPSJNMjAuMDUgNDAuODZhMTUuMDUgMTUuMDUgMCAwIDAgMTcuMTQtMS41IDE1LjA1IDE1LjA1IDAgMCAwIDQuNDctMTYuNjUgMTUuMDUgMTUuMDUgMCAwIDAtMjIuNzItNy4xNSAxNS4wNSAxNS4wNSAwIDAgMC01LjUgNy4xNSIgY2xhc3M9ImNvbnRyYXN0LXN0cm9rZSIvPjxwYXRoIGQ9Im0xMC45NyAzNS41NyA1LjM4IDEyLjA3IDcuNzktMTMuNDd6IiBjbGFzcz0iY29udHJhc3QtZmlsbCIvPjwvc3ZnPg==",{accentColor:I,contrastColor:i,size:64}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:e})))}function I(c,a){const{accentColor:I,contrastColor:i,preMultiplyAlpha:e}=a;return c.fromData(`tilt-rotate:[accent:${I},contrast:${i},size:64]`,(()=>new t(o("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTggMTEuOTggMCAwIDAtOS44IDcuNTA3IiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIGNvbnRyYXN0LWZpbGwiLz48cGF0aCBkPSJtMjkuODE4IDIyLjgwOC02LjE4NCA0LjYtLjU0MS04LjM2NHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+",{accentColor:I,contrastColor:i,size:64}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:e})))}export{I as a,a as g};
