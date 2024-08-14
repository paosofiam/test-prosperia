/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import"../core/lang.js";import{c as t}from"./mathUtils.js";import"../request.js";import"../core/Error.js";import"./Logger.js";import"../core/urlUtils.js";function i(i,h){const e=function(i,h){const{format:e,quality:o,rotation:a,disableDecorations:n}=i||{},r=d(i,h.padding),l=function(t,i){const h={x:0,y:0,width:i.width,height:i.height};if(t?.area){null!=t.area.x&&(h.x=Math.floor(t.area.x)),null!=t.area.y&&(h.y=Math.floor(t.area.y));const e=null!=t.area.width?Math.floor(t.area.width):null,o=null!=t.area.height?Math.floor(t.area.height):null;if(h.width=i.width-h.x,h.height=i.height-h.y,null!=e&&null!=o)h.width=Math.min(h.width,e),h.height=Math.min(h.height,o);else if(null==e&&null!=o){const t=Math.min(h.width,e);h.height=t/h.width*h.height,h.width=t}else if(null!=e&&null==o){const t=Math.min(h.height,o);h.width=t/h.height*h.width,h.height=t}}return function(t,i){const h=Math.floor(Math.max(t.x,0)),e=Math.floor(Math.max(t.y,0)),o={x:h,y:e,width:Math.floor(Math.min(t.width,i.width-h)),height:Math.floor(Math.min(t.height,i.height-e))},a=o.width/o.height,n=t.width/t.height;if(n===a)return o;if(n>a){const t=Math.floor(o.width/n),i=o.height-t;return{x:o.x,y:Math.floor(o.y+i/2),width:o.width,height:t}}const r=Math.floor(o.height*n),l=o.width-r;return{x:Math.floor(o.x+l/2),y:o.y,width:r,height:o.height}}(function(t,i){if(null==i?.width||null==i.height)return t;const h=i.width/i.height,e=t.width/t.height;if(e===h)return t;if(e<h){const i=Math.floor(t.height*h);return t.x-=(i-t.width)/2,t.width=i,t}const o=Math.floor(t.width/h);return t.y-=(o-t.height)/2,t.height=o,t}(h,t),i)}(i,{width:h.width-r.left-r.right,height:h.height-r.top-r.bottom}),{width:g,height:f}=function(t,i){if(!t)return i;const h=t.width,e=t.height;if(null!=h&&null!=e)return{width:Math.floor(h),height:Math.floor(e)};if(null==h&&null==e)return i;const o=i.width/i.height;return null==e?{width:Math.floor(h),height:Math.floor(h/o)}:{width:Math.floor(e*o),height:Math.floor(e)}}(i,l),c=u(e),s=w[c];return{format:c,quality:t(null!=o?o:s,0,100),area:l,width:g,height:f,rotation:a,disableDecorations:!!n,ignoreBackground:!!i?.ignoreBackground,ignorePadding:!!i?.ignorePadding}}(i,h),o=e.area,a=e.width/o.width,n=d(e,h.padding),r=n.left+n.right,l=n.top+n.bottom,g=h.width-r,f=h.height-l,c=Math.floor(g*a+r),s=Math.floor(f*a+l),M=i?.layers??[],m=e.ignoreBackground,p=e.ignorePadding;return{framebufferWidth:c,framebufferHeight:s,region:{x:Math.floor(o.x*a)+n.left,y:Math.floor(o.y*a)+n.top,width:e.width,height:e.height},format:e.format,quality:e.quality,rotation:e.rotation,pixelRatio:a,layers:M,disableDecorations:e.disableDecorations,ignoreBackground:m,ignorePadding:p,objectAndLayerIdColor:!1}}function h(t,i,h){const{ctx:e,canvas:n}=o(t,h),r=e.getImageData(0,0,t.width,t.height),l=function(t,i){const h=c[i.format],e=i.quality/100;return t.toDataURL(h,e)}(n,i);return a(n),{dataUrl:l,data:r}}function e(t,i){const{ctx:h,canvas:e}=o(t,i),n=h.getImageData(0,0,t.width,t.height);return a(e),n}function o(t,i){const h=(null==n&&(n=document.createElement("canvas")),n);i.premultipliedAlpha&&function(t){const i=t.data,h=i.length;for(let t=0;t<h;t+=4){const h=i[t+3];if(255!==h&&h>0){const e=255/h;i[t]=i[t]*e,i[t+1]=i[t+1]*e,i[t+2]=i[t+2]*e}}}(t),h.width=t.width,h.height=t.height;const e=h.getContext("2d",{willReadFrequently:!0});return e.putImageData(t,0,0),i.flipY&&function(t){t.save(),t.globalCompositeOperation="copy",t.scale(1,-1),t.translate(0,-t.canvas.height),t.drawImage(t.canvas,0,0),t.restore()}(e),{ctx:e,canvas:h}}function a(t){t.width=0,t.height=0}let n=null;function r(i,h){const e=u(i),o=w[e];return{format:e,quality:t(null!=h?h:o,0,100)}}function l(t,i){return i/Math.max(t[0],t[1])}function g(t,i,h,e=0,o=0,a=t.width-e,n=t.height-o,r=!1){const{data:l}=t,{width:g,height:f,data:d}=i,u=a/g,c=n/f,s=Math.ceil(u/2),w=Math.ceil(c/2),M=t.width;for(let t=0;t<f;t++)for(let i=0;i<g;i++){const h=4*(i+(r?f-t-1:t)*g);let a=0,n=0,m=0,p=0,x=0,y=0;const b=(t+.5)*c;for(let h=Math.floor(t*c);h<(t+1)*c;h++){const t=Math.abs(b-(h+.5))/w,r=(i+.5)*u,g=t*t;for(let t=Math.floor(i*u);t<(i+1)*u;t++){const i=Math.abs(r-(t+.5))/s,f=Math.sqrt(g+i*i);if(f>=1)continue;let d=2*f*f*f-3*f*f+1;const u=4*(e+t+(o+h)*M);y+=d*l[u+3],n+=d,m+=d*l[u],p+=d*l[u+1],x+=d*l[u+2],a+=d}}d[h]=m/a,d[h+1]=p/a,d[h+2]=x/a,d[h+3]=y/n}return i}function f(t,i,h){if(!i)return t;const{framebufferWidth:e,framebufferHeight:o,pixelRatio:a,region:n}=t,r=d(t,h),l=r.left+r.right,g=r.top+r.bottom,f=e-l,u=o-g,c=Math.min(8,Math.min((2048-l)/f,(2048-g)/u));return c<1.5?t:{...t,framebufferWidth:Math.round(f*c)+l,framebufferHeight:Math.round(u*c)+g,pixelRatio:a*c,resample:{region:{x:Math.round((n.x-r.left)*c)+r.left,y:Math.round((n.y-r.top)*c)+r.top,width:Math.round(n.width*c),height:Math.round(n.height*c)},width:e,height:o}}}function d(t,i){return!i||t?.ignorePadding?M:i}function u(t){switch(t){case"png":case"jpg":case"jpeg":return t;default:return s}}const c={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},s="png",w={png:100,jpg:98,jpeg:98},M={top:0,right:0,bottom:0,left:0};export{e as a,l as b,h as e,r as g,g as r,f as s,i as t};
