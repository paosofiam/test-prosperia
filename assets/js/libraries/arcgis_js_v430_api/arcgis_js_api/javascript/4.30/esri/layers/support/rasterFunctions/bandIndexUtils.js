// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/jsonMap","../PixelBlock","./customBandIndexUtils","./pixelUtils"],function(p,q,r,x,y){function t(e,a,g){const h=g.length,c=new Float32Array(h);for(let b=0;b<h;b++)if(null==e||e[b]){const d=a[b],f=g[b],k=d+f;k&&(c[b]=(d-f)/k)}return[c]}function z(e,a,g){const h=g.length,c=new Float32Array(h);for(let b=0;b<h;b++)if(null==e||e[b]){const d=a[b],f=g[b];f&&(c[b]=d/f)}return[c]}function A(e,a,g){const h=a.length,c=new Float32Array(h);for(let b=0;b<h;b++)if(null==e||e[b]){const d=
a[b],f=g[b];f&&(c[b]=d/f-1)}return[c]}function B(e,a,g,h){const c=g.length,b=new Float32Array(c);for(let d=0;d<c;d++)if(null==e||e[d]){const f=g[d],k=a[d],l=k+f+h;l&&(b[d]=(k-f)/l*(1+h))}return[b]}function C(e,a,g,h,c,b){const d=g.length,f=new Float32Array(d);b=-c*h+b*(1+h*h);for(let k=0;k<d;k++)if(null==e||e[k]){const l=g[k],m=a[k],n=c*m+l+b;n&&(f[k]=h*(m-h*l-c)/n)}return[f]}function D(e,a,g){const h=g.length,c=new Float32Array(h);for(let b=0;b<h;b++)if(null==e||e[b]){const d=a[b],f=2*d+1;c[b]=.5*
(f-Math.sqrt(f*f-8*(d-g[b])))}return[c]}function E(e,a,g){const h=g.length,c=new Float32Array(h);for(let d=0;d<h;d++)if(null==e||e[d]){const f=g[d];var b=a[d];1!==f&&0!==b+f+.5&&(b=(2*(b*b-f*f)+1.5*b+.5*f)/(b+f+.5),c[d]=b*(1-.25*b)-(f-.125)/(1-f))}return[c]}function F(e,a,g,h,c){const b=g.length,d=new Float32Array(b),f=1/Math.sqrt(1+h*h);for(let k=0;k<b;k++)if(null==e||e[k])d[k]=(a[k]-h*g[k]-c)*f;return[d]}function G(e,a){const [g,h,c,b,d,f]=a;a=g.length;const k=new Float32Array(a);for(let l=0;l<
a;l++)if(null==e||e[l])k[l]=-.2848*g[l]-.2435*h[l]-.5436*c[l]+.7243*b[l]+.084*d[l]-.18*f[l];return[k]}function H(e,a){const [g,h,c,b,d]=a;a=g.length;const f=new Float32Array(a),k=new Float32Array(a),l=new Float32Array(a);for(let m=0;m<a;m++)if(null==e||e[m])f[m]=d[m]?b[m]/d[m]*100:0,k[m]=g[m]?b[m]/g[m]*100:0,l[m]=c[m]?h[m]/c[m]*(b[m]/c[m])*100:0;return[f,k,l]}function I(e,a){const [g,h,c]=a;a=g.length;const b=new Float32Array(a);for(let d=0;d<a;d++)if(null==e||e[d])for(d=0;d<a;d++){const f=g[d],k=
h[d],l=k+f-c[d];l&&(b[d]=(k-f)/l)}return[b]}function J(e,a){const [g,h,c]=a;a=g.length;const b=new Float32Array(a);for(let d=0;d<a;d++)if(null==e||e[d])for(d=0;d<a;d++){const f=g[d],k=h[d],l=c[d],m=Math.sqrt((2*f+1)**2-(6*f-5*Math.sqrt(k))-.5);m&&(b[d]=1.5*(1.2*(f-l)-2.5*(k-l))/m)}return[b]}function K(e,a){const [g,h,c]=a;a=g.length;const b=new Float32Array(a);for(let d=0;d<a;d++)if(null==e||e[d])for(d=0;d<a;d++){const f=g[d];b[d]=100*(f-h[d])-10*(f-c[d])}return[b]}function L(e,a){const [g,h,c]=a;
a=g.length;const b=new Float32Array(a);for(let d=0;d<a;d++)if(null==e||e[d])for(d=0;d<a;d++){const f=g[d],k=h[d],l=f+6*k-7.5*c[d]+1;l&&(b[d]=2.5*(f-k)/l)}return[b]}function M(e,a,g=.5){const [h,c,b]=a;a=c.length;const d=new Float32Array(a);for(let f=0;f<a;f++)if(null==e||e[f])for(f=0;f<a;f++){const k=h[f],l=c[f],m=b[f],n=k+g*l+(1-g)*m;n&&(d[f]=(k-g*l-(1-g)*m)/n)}return[d]}function N(e,a,g){const h=g.length,c=new Float32Array(h);for(let b=0;b<h;b++)if(null==e||e[b])for(b=0;b<h;b++){const d=(.1-a[b])**
2+(.06-g[b])**2;d&&(c[b]=1/d)}return[c]}q=new q.JSONMap({0:"custom",1:"ndvi",2:"savi",3:"tsavi",4:"msavi",5:"gemi",6:"pvi",7:"gvitm",8:"sultan",9:"vari",10:"gndvi",11:"sr",12:"ndvi-re",13:"sr-re",14:"mtvi2",15:"rtvi-core",16:"ci-re",17:"ci-g",18:"ndwi",19:"evi",20:"iron-oxide",21:"ferrous-minerals",22:"clay-minerals",23:"wndwi",24:"bai",25:"nbr",26:"ndbi",27:"ndmi",28:"ndsi",29:"mndwi"},{useNumericKeys:!0});p.bandIndexMethodMap=q;p.calculateBandIndex=function(e,a){if(!y.isValidPixelBlock(e))return e;
const {equation:g,method:h}=a;a=a.bandIndexes.map(f=>f-1);const {pixels:c,mask:b}=e;switch(h){case "gndvi":case "nbr":case "ndbi":case "ndvi":case "ndvi-re":case "ndsi":case "ndmi":case "mndwi":a=t(b,c[a[0]],c[a[1]]);break;case "ndwi":a=t(b,c[a[1]],c[a[0]]);break;case "sr":case "sr-re":case "iron-oxide":case "ferrous-minerals":case "clay-minerals":a=z(b,c[a[0]],c[a[1]]);break;case "ci-g":case "ci-re":a=A(b,c[a[0]],c[a[1]]);break;case "savi":a=B(b,c[a[0]],c[a[1]],a[2]+1);break;case "tsavi":a=C(b,c[a[0]],
c[a[1]],a[2]+1,a[3]+1,a[4]+1);break;case "msavi":a=D(b,c[a[0]],c[a[1]]);break;case "gemi":a=E(b,c[a[0]],c[a[1]]);break;case "pvi":a=F(b,c[a[0]],c[a[1]],a[2]+1,a[3]+1);break;case "gvitm":a=G(b,[c[a[0]],c[a[1]],c[a[2]],c[a[3]],c[a[4]],c[a[5]]]);break;case "sultan":a=H(b,[c[a[0]],c[a[1]],c[a[2]],c[a[3]],c[a[4]]]);break;case "vari":a=I(b,[c[a[0]],c[a[1]],c[a[2]]]);break;case "mtvi2":a=J(b,[c[a[0]],c[a[1]],c[a[2]]]);break;case "rtvi-core":a=K(b,[c[a[0]],c[a[1]],c[a[2]]]);break;case "evi":a=L(b,[c[a[0]],
c[a[1]],c[a[2]]]);break;case "wndwi":a=M(b,[c[a[0]],c[a[1]],c[a[2]]],a[3]?a[3]+1:.5);break;case "bai":a=N(b,c[a[0]],c[a[1]]);break;case "custom":a=x.calculateCustomBandIndex(b,c,g);break;default:return e}const d=null!=b?new Uint8Array(b.length):null;null!=b&&null!=d&&d.set(b);e=new r({width:e.width,height:e.height,pixelType:"f32",pixels:a,mask:d});e.updateStatistics();return e};p.calculateNDVI=function(e,a,g,h){const {mask:c,pixels:b,width:d,height:f}=e;e=b[g];a=b[a];g=a.length;const k=h?new Uint8Array(g):
new Float32Array(g),l=h?100:1,m=h?100.5:0;for(let n=0;n<g;n++)if(null==c||c[n]){const u=e[n],v=a[n],w=u+v;w&&(k[n]=(u-v)/w*l+m)}h=new r({width:d,height:f,mask:c,pixelType:h?"u8":"f32",pixels:[k]});h.updateStatistics();return h};p.getBandMatrix3=function(e){const a=new Float32Array(9);a[3*e[0]]=1;a[3*e[1]+1]=1;a[3*e[2]+2]=1;return a};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});