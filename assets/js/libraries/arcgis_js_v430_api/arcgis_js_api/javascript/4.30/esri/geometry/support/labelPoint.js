// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../core/PriorityQueue ./aaBoundingRect ./boundsUtils ./centroid ./coordsUtils ./intersectsBase".split(" "),function(G,M,H,I,K,L,N){function F(b,a){let e=0,f,d,k,m;for(a.reset();a.nextPath()&&a.nextPoint();)for(f=a.x,d=a.y;a.nextPoint();f=k,d=m)k=a.x,m=a.y,d>b[1]!==m>b[1]&&(0<(k-f)*(b[1]-d)-(m-d)*(b[0]-f)?e++:e--);return 0!==e}function E(b,a,e){if(e&&F(b,a))return{coord:b,distance:0};e=Infinity;let f=0,d=0;var k=[0,0];let m=[0,0];const p=[0,0];for(a.reset();a.nextPath()&&a.nextPoint();)if(!(2>
a.pathSize))for(k[0]=a.x,k[1]=a.y;a.nextPoint();k=m)m=[a.x,a.y],L.projectPointOnLineSeg(p,b,k,m),k=C(b,p),k<e&&(e=k,f=p[0],d=p[1]);return{coord:[f,d],distance:Math.sqrt(e)}}function J(b,a,e,f){e=[a,0];let d=Infinity,k=Infinity,m=!1,p=!1;a=[[a,f[1]-1],[a,f[3]+1]];f=[0,0];const t=[0,0],l=[0,0],n=[[0,0],[0,0]],w=H.create();for(b.reset();b.nextPath()&&b.nextPoint();)if(!(2>b.pathSize))for(n[0][0]=b.x,n[0][1]=b.y;b.nextPoint();n[0][0]=n[1][0],n[0][1]=n[1][1]){n[1][0]=b.x;n[1][1]=b.y;a:{var h=w;var c=n;
if(2>c.length){h=null;break a}h||=H.create();const [q,r]=c[0],[x,y]=c[1];h[0]=Math.min(q,x);h[1]=Math.min(r,y);h[2]=Math.max(q,x);h[3]=Math.max(r,y)}if(null!==h){t[0]=a[0][0];t[1]=a[0][1];l[0]=a[1][0];l[1]=a[1][1];a:{h=w;c=t;var g=l;let q=z(c,h),r=z(g,h);const x=h[0],y=h[1],A=h[2],B=h[3];if(q&r){h=0;break a}if(!(q|r)){h=4;break a}const O=(q?1:0)|(r?2:0);do{const u=g[0]-c[0],v=g[1]-c[1];if(u>v)q&3?(q&1?(c[1]+=v*(x-c[0])/u,c[0]=x):(c[1]+=v*(A-c[0])/u,c[0]=A),q=z(c,h)):r&3?(r&1?(g[1]+=v*(x-g[0])/u,g[0]=
x):(g[1]+=v*(A-g[0])/u,g[0]=A),r=z(g,h)):q?(q&4?(c[0]+=u*(y-c[1])/v,c[1]=y):(c[0]+=u*(B-c[1])/v,c[1]=B),q=z(c,h)):(r&4?(g[0]+=u*(y-g[1])/v,g[1]=y):(g[0]+=u*(B-g[1])/v,g[1]=B),r=z(g,h));else if(q&12?(q&4?(c[0]+=u*(y-c[1])/v,c[1]=y):(c[0]+=u*(B-c[1])/v,c[1]=B),q=z(c,h)):r&12?(r&4?(g[0]+=u*(y-g[1])/v,g[1]=y):(g[0]+=u*(B-g[1])/v,g[1]=B),r=z(g,h)):q?(q&1?(c[1]+=v*(x-c[0])/u,c[0]=x):(c[1]+=v*(A-c[0])/u,c[0]=A),q=z(c,h)):(r&1?(g[1]+=v*(x-g[0])/u,g[0]=x):(g[1]+=v*(A-g[0])/u,g[0]=A),r=z(g,h)),q&r){h=0;break a}}while(q|
r);h=O}0!==h&&N.segmentIntersects(a[0],a[1],n[0],n[1],f)&&(h=f[1],d>k?h<d&&(d=h,m=!0):h<k&&(k=h,p=!0))}}m&&p?e[1]=(d+k)/2:e[0]=e[1]=NaN;return e}function z(b,a){return(b[0]<a[0]?1:0)|(b[0]>a[2]?1:0)<<1|(b[1]<a[1]?1:0)<<2|(b[1]>a[3]?1:0)<<3}function C(b,a){return(b[0]-a[0])*(b[0]-a[0])+(b[1]-a[1])*(b[1]-a[1])}function P(b,a){if(b<a)return-1;if(b>a)return 1;if(b===a)return 0;b=isNaN(b);a=isNaN(a);return b<a?-1:b>a?1:0}class D{constructor(b,a,e,f){this.x=b;this.y=a;this.cellSize=e;this.distancefromCellCenter=
L.distanceFromPointToPolygon(b,a,f);this.maxDistanceToPolygon=this.distancefromCellCenter+this.cellSize*Math.SQRT2}}G.getLabelPoint=function(b){if(0===b.totalSize)return null;var a=I.getCursorBoundsXY(b);if(!a)return null;var e=8.8818E-14*(Math.abs(a[0])+Math.abs(a[2])+Math.abs(a[1])+Math.abs(a[3])+1),f=0,d=0;b.reset();for(var k=0;b.nextPath();k++){var m=b.getCurrentRingArea();m>d&&(d=m,f=k)}b.seekPath(f);if(0===b.pathSize)return null;b.seekPathStart();m=I.getCursorPathBounds(b);if(Math.abs(d)<=2*
e*e)return[(m[0]+m[2])/2,(m[1]+m[3])/2];b.seekPathStart();var p=K.ringCentroidCursorXY(b,H.create());if(null===p)return null;if(4>b.totalPoints)return p;d=[[NaN,NaN],[NaN,NaN],[NaN,NaN],[NaN,NaN]];f=[NaN,NaN,NaN,NaN];k=[NaN,NaN,NaN,NaN];var t=!1,l=E(p,b,!0);0===l.distance&&(t=!0,d[0][0]=p[0],d[0][1]=p[1],l=E(p,b,!1));f[0]=l.distance;k[0]=0;var n=[NaN,NaN];let w=!1,h=.25,c=-1;l=NaN;do{l=NaN;var g=m[0];d[1]=J(b,g+(m[2]-g)*h,e,a);isNaN(d[1][0])||isNaN(d[1][1])||(l=E(d[1],b,!1),l=l.distance);if(!isNaN(l)&&
l>e&&F(d[1],b))w=!0,f[1]=l,k[1]=C(d[1],p);else if(!isNaN(l)&&l>c&&(c=l,n[0]=d[1][0],n[1]=d[1][1]),h-=.01,.1>h)if(0<=c)w=!0,f[1]=c,d[1][0]=n[0],d[1][1]=n[1],k[1]=C(d[1],p);else break}while(!w);w=!1;h=.5;c=-1;g=.01;let q=1;do{l=NaN;var r=m[0];d[2]=J(b,r+(m[2]-r)*h,e,a);isNaN(d[2][0])||isNaN(d[2][1])||(l=E(d[2],b,!1),l=l.distance);if(!isNaN(l)&&l>e&&F(d[2],b))w=!0,f[2]=l,k[2]=C(d[2],p);else if(!isNaN(l)&&l>c)c=l,n[0]=d[2][0],n[1]=d[2][1];else if(l>c&&(c=l,n[0]=d[2][0],n[1]=d[2][1]),h=.5+g*q,g+=.01,q*=
-1,.3>h||.7<h)if(0<=c)w=!0,f[2]=c,d[2][0]=n[0],d[2][1]=n[1],k[2]=C(d[2],p);else break}while(!w);w=!1;h=.75;c=-1;do if(l=NaN,g=m[0],d[3]=J(b,g+(m[2]-g)*h,e,a),isNaN(d[3][0])||isNaN(d[3][1])||(l=E(d[3],b,!1),l=l.distance),!isNaN(l)&&l>e&&F(d[3],b))w=!0,f[3]=l,k[3]=C(d[3],p);else if(l>c&&(c=l,n[0]=d[3][0],n[1]=d[3][1]),h+=.01,.9<h)if(0<=c)w=!0,f[3]=c,d[3][0]=n[0],d[3][1]=n[1],k[3]=C(d[3],p);else break;while(!w);b=[0,1,2,3];a=t?0:1;for(m=a;4>m;m++)for(t=a;3>t;t++)p=k[t],n=k[t+1],0<P(p,n)&&(e=b[t],b[t]=
b[t+1],b[t+1]=e,k[t]=n,k[t+1]=p);k=a;for(m=e=0;4>a;a++){switch(a){case 0:m=2*f[b[a]];break;case 1:m=1.66666666*f[b[a]];break;case 2:m=1.33333333*f[b[a]];break;case 3:m=f[b[a]]}m>e&&(e=m,k=b[a])}return d[k]};G.getPolylabelPoint=function(b){if(!b.nextPath()||!b.pathSize)return null;var a=I.getCursorPathBounds(b),e=a[2]-a[0],f=a[3]-a[1];if(0===e||0===f)return[a[0]+e/2,a[1]+f/2];const d=Math.max(Math.min(e,f)/100,1),k=new M((t,l)=>l.maxDistanceToPolygon-t.maxDistanceToPolygon);f=Math.min(e,f);e=f/2;let m=
0,p=0;for(m=a[0];m<a[2];m+=f)for(p=a[1];p<a[3];p+=f)k.enqueue(new D(m+e,p+e,e,b));b.reset();b.nextPath();a=K.ringsCentroidCursor(b);if(null===a)return null;for(a=new D(a[0],a[1],0,b);0<k.size;)f=k.dequeue(),f.distancefromCellCenter>a.distancefromCellCenter&&(a=f),f.maxDistanceToPolygon-a.distancefromCellCenter<=d||(e=f.cellSize/2,k.enqueue(new D(f.x-e,f.y-e,e,b)),k.enqueue(new D(f.x+e,f.y-e,e,b)),k.enqueue(new D(f.x-e,f.y+e,e,b)),k.enqueue(new D(f.x+e,f.y+e,e,b)));return[a.x,a.y]};Object.defineProperty(G,
Symbol.toStringTag,{value:"Module"})});