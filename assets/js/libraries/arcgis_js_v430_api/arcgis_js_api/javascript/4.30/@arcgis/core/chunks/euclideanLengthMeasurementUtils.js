/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{d as n}from"./quantityUtils.js";import{ag as t,i as r,b as e,N as i,ad as l,f as a,ah as s,v as o}from"./unitUtils.js";import{j as c,s as u}from"./vec3.js";import{c as f}from"./vec3f64.js";import{p}from"./projectVectorToVector.js";import{W as h,g as z}from"./spatialReferenceEllipsoidUtils.js";function m(n){return t(n)?r(n)||e(n)||i(n)||l(n)?h:n:z(n)}var d;function v(t){return function(t,r){const{hasZ:e,spatialReference:i}=t,l=m(i);let a=0;const o=s(l);if(null==o)return null;const c=r===d.Direct?V:D;for(const n of t.paths){if(n.length<2)continue;const t=n.length-1;for(let r=0;r<t;++r){const t=n[r];U[0]=t[0],U[1]=t[1],U[2]=e?t[2]:0;const l=n[r+1];S[0]=l[0],S[1]=l[1],S[2]=e?l[2]:0;const s=c(U,S,i);if(null==s)return null;a+=s.value}}return n(a,o)}(t,d.Horizontal)}function R(t,r){const{spatialReference:e}=t;return a(e,r.spatialReference)?(U[0]=t.x,U[1]=t.y,U[2]=t.hasZ?t.z:0,S[0]=r.x,S[1]=r.y,S[2]=r.hasZ?r.z:0,function(t,r,e){const i=b(U,S,e);return null!=i?{direct:n(i.direct,i.unit),horizontal:n(i.horizontal,i.unit),vertical:n(i.vertical,i.unit)}:null}(0,0,e)):null}function Z(n,t){const{spatialReference:r}=n;return a(r,t.spatialReference)?(U[0]=n.x,U[1]=n.y,U[2]=n.hasZ?n.z:0,S[0]=t.x,S[1]=t.y,S[2]=t.hasZ?t.z:0,V(U,S,r)):null}function j(n,t){const{spatialReference:r}=n;return a(r,t.spatialReference)?(U[0]=n.x,U[1]=n.y,U[2]=n.hasZ?n.z:0,S[0]=t.x,S[1]=t.y,S[2]=t.hasZ?t.z:0,D(U,S,r)):null}function x(n,t){const{spatialReference:r}=n;return a(r,t.spatialReference)?(U[0]=n.x,U[1]=n.y,U[2]=n.hasZ?n.z:0,S[0]=t.x,S[1]=t.y,S[2]=t.hasZ?t.z:0,H(U,S,r)):null}function y(n){return null!=n?g(n.hasZ?n.z:0,n.spatialReference):null}function g(t,r){const e=o(r);return null!=e?n(t??0,e):null}function V(t,r,e){const i=b(t,r,e,d.Direct);return null!=i?n(i.direct,i.unit):null}function D(t,r,e){const i=b(t,r,e,d.Horizontal);return null!=i?n(i.horizontal,i.unit):null}function H(t,r,e){const i=b(t,r,e,d.Vertical);return null!=i?n(i.verticalSigned,i.unit):null}function b(n,t,r,e){const i=m(r),l=s(i);if(null==l)return null;const a=t[2]-n[2];if(e===d.Vertical)return{verticalSigned:a,unit:l};if(!p(n,r,q,i)||!p(t,r,E,i))return null;if(e===d.Direct)return{direct:c(E,q),unit:l};if(u(M,n[0],n[1],t[2]),!p(M,r,M,i))return null;const o=c(M,E);return e===d.Horizontal?{horizontal:o,unit:l}:{direct:c(E,q),horizontal:o,vertical:Math.abs(a),unit:l}}!function(n){n[n.Direct=0]="Direct",n[n.Horizontal=1]="Horizontal",n[n.Vertical=2]="Vertical"}(d||(d={}));const U=f(),S=f(),q=f(),E=f(),M=f();export{v as a,D as b,m as c,y as d,j as e,R as f,V as g,Z as h,g as i,H as j,x as v};
