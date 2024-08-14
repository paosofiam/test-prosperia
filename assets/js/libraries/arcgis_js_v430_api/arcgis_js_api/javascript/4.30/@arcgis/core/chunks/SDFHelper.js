/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{p as t}from"./floatRGBA.js";import{isExtent as o}from"../geometry/support/jsonUtils.js";import{R as n}from"./CIMSymbolHelper.js";import{d as r,s as l}from"./definitions.js";function s(t){switch(t.type){case"CIMPointSymbol":{const o=t.symbolLayers;if(!o||1!==o.length)return null;const n=o[0];return"CIMVectorMarker"!==n.type?null:s(n)}case"CIMVectorMarker":{const o=t.markerGraphics;if(!o||1!==o.length)return null;const n=o[0];if(!n)return null;const r=n.geometry;if(!r)return null;const l=n.symbol;return!l||"CIMPolygonSymbol"!==l.type&&"CIMLineSymbol"!==l.type||l.symbolLayers?.some((t=>!!t.effects))?null:{type:"sdf",geom:r,asFill:"CIMPolygonSymbol"===l.type}}}}function e(t){let o=1/0,n=-1/0,r=1/0,l=-1/0;for(const s of t)for(const t of s)t[0]<o&&(o=t[0]),t[0]>n&&(n=t[0]),t[1]<r&&(r=t[1]),t[1]>l&&(l=t[1]);return[o,r,n,l]}function a(t){return t?t.rings?e(t.rings):t.paths?e(t.paths):o(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function i(t,o,n,s,e){const[a,i,f,m]=t;if(f<a||m<i)return[0,0,0,1];const c=f-a,u=m-i,y=r,h=l,x=Math.floor(.5*(.5*y-h)),M=(y-2*(x+h))/Math.max(c,u),p=Math.round(c*M)+2*x,g=Math.round(u*M)+2*x;let d=1;o&&(d=g/M/(o.ymax-o.ymin));let b=0,C=0,I=1;s&&(e?o&&n&&o.ymax-o.ymin>0&&(I=(o.xmax-o.xmin)/(o.ymax-o.ymin),b=s.x/(n*I),C=s.y/n):(b=s.x,C=s.y)),o&&(b=.5*(o.xmax+o.xmin)+b*(o.xmax-o.xmin),C=.5*(o.ymax+o.ymin)+C*(o.ymax-o.ymin)),b-=a,C-=i,b*=M,C*=M,b+=x,C+=x;let w=b/p-.5,j=C/g-.5;return e&&n&&(w*=n*I,j*=n),[d,w,j,I]}function f(t){const o=(s=t.geom)?s.rings?s.rings:s.paths?s.paths:void 0!==s.xmin&&void 0!==s.ymin&&void 0!==s.xmax&&void 0!==s.ymax?[[[s.xmin,s.ymin],[s.xmin,s.ymax],[s.xmax,s.ymax],[s.xmax,s.ymin],[s.xmin,s.ymin]]]:null:null;var s;const e=function(t){let o=1/0,r=-1/0,l=1/0,s=-1/0;for(const n of t)for(const t of n)t[0]<o&&(o=t[0]),t[0]>r&&(r=t[0]),t[1]<l&&(l=t[1]),t[1]>s&&(s=t[1]);return new n(o,l,r-o,s-l)}(o),a=r,i=l,f=Math.floor(.5*(.5*a-i)),c=(a-2*(f+i))/Math.max(e.width,e.height),u=Math.round(e.width*c)+2*f,y=Math.round(e.height*c)+2*f,h=[];for(const n of o)if(n&&n.length>1){const o=[];for(const r of n){let[n,l]=r;n-=e.x,l-=e.y,n*=c,l*=c,n+=f-.5,l+=f-.5,t.asFill?o.push([n,l]):o.push([Math.round(n),Math.round(l)])}if(t.asFill){const t=o.length-1;o[0][0]===o[t][0]&&o[0][1]===o[t][1]||o.push(o[0])}h.push(o)}const x=function(t,o,n,r){const l=o*n,s=new Array(l),e=r*r+1;for(let t=0;t<l;++t)s[t]=e;for(const l of t){const t=l.length;for(let e=1;e<t;++e){const t=l[e-1],a=l[e];let i,f,m,c;t[0]<a[0]?(i=t[0],f=a[0]):(i=a[0],f=t[0]),t[1]<a[1]?(m=t[1],c=a[1]):(m=a[1],c=t[1]);let u=Math.floor(i)-r,y=Math.floor(f)+r,h=Math.floor(m)-r,x=Math.floor(c)+r;u<0&&(u=0),y>o&&(y=o),h<0&&(h=0),x>n&&(x=n);const M=a[0]-t[0],p=a[1]-t[1],g=M*M+p*p;for(let r=u;r<y;r++)for(let l=h;l<x;l++){const e=r+.5,i=l+.5;let f,m,c=(e-t[0])*M+(i-t[1])*p;c<0?(f=t[0],m=t[1]):c>g?(f=a[0],m=a[1]):(c/=g,f=t[0]+c*M,m=t[1]+c*p);const u=(e-f)*(e-f)+(i-m)*(i-m),y=(n-l-1)*o+r;u<s[y]&&(s[y]=u)}}}for(let t=0;t<l;++t)s[t]=Math.sqrt(s[t]);return s}(h,u,y,f);return t.asFill&&function(t,o,n,r,l){for(const s of t){const t=s.length;for(let e=1;e<t;++e){const t=s[e-1],a=s[e];let i,f,m,c;t[0]<a[0]?(i=t[0],f=a[0]):(i=a[0],f=t[0]),t[1]<a[1]?(m=t[1],c=a[1]):(m=a[1],c=t[1]);let u=Math.floor(i),y=Math.floor(f)+1,h=Math.floor(m),x=Math.floor(c)+1;u<r&&(u=r),y>o-r&&(y=o-r),h<r&&(h=r),x>n-r&&(x=n-r);for(let s=h;s<x;++s){if(t[1]>s==a[1]>s)continue;const e=s+.5,i=(n-s-1)*o;for(let o=u;o<y;++o)o+.5<(a[0]-t[0])*(e-t[1])/(a[1]-t[1])+t[0]&&(l[i+o]=-l[i+o]);for(let t=r;t<u;++t)l[i+t]=-l[i+t]}}}}(h,u,y,f,x),[m(x,f),u,y]}function m(o,n){const r=2*n,l=o.length,s=new Uint8Array(4*l);for(let n=0;n<l;++n){const l=.5-o[n]/r;t(l,s,4*n)}return s}export{a,i as b,f as c,s as g};
