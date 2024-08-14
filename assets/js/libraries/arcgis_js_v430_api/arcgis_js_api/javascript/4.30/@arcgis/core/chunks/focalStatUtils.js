/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../core/lang.js";import{J as t}from"./jsonMap.js";import o from"../layers/support/PixelBlock.js";function e(t,o,e,n,s){const r=Math.floor(n/2);for(let n=0;n<r;n++)for(let r=0;r<o;r++)t[n*o+r]=t[(s-1-n)*o+r],t[(e-1-n)*o+r]=t[(e-s+n)*o+r];const l=Math.floor(s/2);for(let n=0;n<e;n++){const e=n*o;for(let n=0;n<l;n++)t[e+n]=t[e+s-1-n],t[e+o-n-1]=t[e+o+n-s]}}const n=new t({1:"min",2:"max",3:"mean",4:"stddev",5:"median",6:"majority",7:"minority"},{useNumericKeys:!0});function s(t,o){const{fillNoDataOnly:e}=o,{band:n,width:s,height:r,mask:l,outBand:i}=t;if(e&&!l)return void i.set(n);const{statisticsType:a,kernelRows:f,kernelCols:c}=o,h="stddev"===a,u=s*r,d=new Float64Array(u),m=new Float64Array(u),y=new Uint32Array(u);for(let t=0;t<r;t++){const o=t*s;let e=0,r=0,i=0;for(let t=0;t<c;t++)l&&!l[o+t]||(e+=n[o+t],h&&(r+=n[o+t]**2),i++);d[o]=e,m[o]=r,y[o]=i;for(let t=1;t<=s-c;t++){const s=o+t-1,a=s+c;l?(l[s]&&(i--,e-=n[s],h&&(r-=n[s]**2)),l[a]&&(i++,e+=n[a],h&&(r+=n[a]**2))):(e-=n[s],e+=n[a],h&&(r-=n[s]**2,r+=n[a]**2)),d[o+t]=e,y[o+t]=i,h&&(m[o+t]=r)}}const k=new Float64Array(u),p=new Float64Array(u),w=new Uint32Array(u),M=f*s;for(let t=0;t<=s-c;t++){let o=0,e=0,n=0;for(let r=0;r<f;r++){const l=r*s+t;o+=d[l],n+=y[l],h&&(e+=m[l])}k[t]=o,p[t]=e,w[t]=n;for(let l=1;l<=r-f;l++){const r=(l-1)*s+t,i=r+M;o-=d[r],o+=d[i],n-=y[r],n+=y[i],h&&(e-=m[r],e+=m[i]),k[l*s+t]=o,p[l*s+t]=e,w[l*s+t]=n}}const g=Math.floor(f/2),b=Math.floor(c/2);for(let t=g;t<r-g;t++){const o=t*s;for(let n=b;n<s-b;n++){const r=(t-g)*s+n-b,a=w[r];if(0===a||e&&(!l||l[o+n]))continue;const f=k[r]/a,c=h?Math.sqrt((p[r]-k[r]*f)/a):f;i[o+n]=c,l&&(l[o+n]=255)}}}function r(t,o){const{fillNoDataOnly:e}=o,{band:n,width:s,height:r,mask:l,outBand:i}=t;if(e&&!l)return void i.set(n);const{kernelRows:a,kernelCols:f,statisticsType:c}=o,h=Math.floor(a/2),u=Math.floor(f/2),d="min"===c,m=i.slice(),y=new Uint32Array(s*r);for(let t=h;t<r-h;t++){const o=t*s;for(let t=u;t<s-u;t++){let e=d?Number.MAX_VALUE:-Number.MAX_VALUE,r=0;for(let i=0;i<a;i++)for(let a=0;a<f;a++){const f=o+t+(i-h)*s+a-u;l&&!l[f]||(e=d?Math.min(e,n[f]):Math.max(e,n[f]),r++)}l?(m[o+t]=0===r?0:e,y[o+t]=r):i[o+t]=0===r?0:e}}if(l)for(let t=h;t<r-h;t++){const o=t*s;for(let t=u;t<s-u;t++)if(y[o+t]){if(e&&l[o+t])continue;i[o+t]=m[o+t],l[o+t]=255}}}function l(t,o){const{fillNoDataOnly:e}=o,{band:n,width:s,height:r,mask:l,outBand:i}=t;if(e&&!l)return void i.set(n);const{kernelRows:a,kernelCols:f}=o,c=Math.floor(a/2),h=Math.floor(f/2),u=i.slice(),d=new Uint32Array(s*r);for(let t=c;t<r-c;t++){const o=t*s;for(let t=h;t<s-h;t++){if(e&&l?.[o+t])continue;const r=[];for(let e=0;e<a;e++)for(let i=0;i<f;i++){const a=o+t+(e-c)*s+i-h;l&&!l[a]||r.push(n[a])}r.length&&(r.sort(((t,o)=>t-o)),l?(u[o+t]=r[Math.floor((r.length-1)/2)],d[o+t]=r.length):i[o+t]=r[Math.floor((r.length-1)/2)])}}if(l)for(let t=c;t<r-c;t++){const o=t*s;for(let t=h;t<s-h;t++)if(d[o+t]){if(e&&l[o+t])continue;i[o+t]=u[o+t],l[o+t]=255}}}function i(t,o){const{fillNoDataOnly:e}=o,{band:n,width:s,height:r,mask:l,outBand:i}=t;if(e&&!l)return void i.set(n);const{kernelRows:a,kernelCols:f}=o,c=Math.floor(a/2),h=Math.floor(f/2),u="majority"===o.statisticsType,d=a*f,m=i.slice(),y=new Uint32Array(s*r);for(let t=c;t<r-c;t++){const o=t*s;for(let t=h;t<s-h;t++){if(e&&l?.[o+t])continue;const r=new Map;for(let e=0;e<a;e++)for(let i=0;i<f;i++){const a=o+t+(e-c)*s+i-h;if(l&&!l[a])continue;const f=n[a];r.set(f,r.has(f)?r.get(f)+1:1)}if(0===r.size)continue;let k=0,p=0,w=u?0:d+1;for(const t of r.keys())p=r.get(t),u===p>w&&(w=p,k=t);l?(m[o+t]=k,y[o+t]=r.size):i[o+t]=k}}if(l)for(let t=c;t<r-c;t++){const o=t*s;for(let t=h;t<s-h;t++)if(y[o+t]){if(e&&l[o+t])continue;i[o+t]=m[o+t],l[o+t]=255}}}function a(t,n){const{mask:a}=t,{fillNoDataOnly:f}=n;if(f&&!a)return t;const{pixels:c,width:h,height:u,bandMasks:d,pixelType:m}=t,y=c.length,k=h*u,p=[],{kernelRows:w,kernelCols:M,statisticsType:g,mirrorEdges:b}=n;if(f&&!a)return t;const A=n.outputPixelType??m,x=[];for(let t=0;t<y;t++){const m=c[t],y=o.createEmptyBand(A,k);f&&y.set(m);const B=d?.[t]??a,N=B?.slice()??null,j={band:m,width:h,height:u,mask:N,outBand:y};switch(g){case"min":case"max":r(j,n);break;case"mean":case"stddev":s(j,n);break;case"median":l(j,n);break;case"majority":case"minority":i(j,n)}b&&!f&&e(y,h,u,w,M),p.push(y),N&&x.push(N)}let B=x[0]??a;x.length!==y&&(x.length=0),y>1&&d?.length&&(B=o.combineBandMasks(d));const N=new o({pixelType:A,width:h,height:u,pixels:p,bandMasks:d&&x.length?x:null,mask:B});return N.updateStatistics(),N}export{a as c,e as m,n as s};
