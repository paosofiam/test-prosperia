// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry/support/TileClipper ./GeometryUtils ./TextShaping ./decluttering/config ./style/StyleDefinition".split(" "),function(O,m,t,R,ha,u){class ka{constructor(a,d,b=0,c=-1,f=.5){this.x=a;this.y=d;this.angle=b;this.segment=c;this.minzoom=f}}class X{constructor(a,d,b,c,f,g=.5,k=t.cInfinity){this.anchor=a;this.labelAngle=d;this.glyphAngle=b;this.page=c;this.alternateVerticalGlyph=f;this.minzoom=g;this.maxzoom=k}}class da{constructor(a,d,b,c,f,g,k,w,e,r,C,n){this.tl=a;this.tr=
d;this.bl=b;this.br=c;this.mosaicRect=f;this.labelAngle=g;this.minAngle=k;this.maxAngle=w;this.anchor=e;this.minzoom=r;this.maxzoom=C;this.page=n}}class ea{constructor(a){this.shapes=a}}class la{getIconPlacement(a,d,b){const c=new m.Point(a.x,a.y),f=b.rotationAlignment===u.RotationAlignment.MAP,g=b.keepUpright;let k=b.rotate*t.cDegToRad;f&&(k+=a.angle);a=new ea([]);b.allowOverlap&&b.ignorePlacement||!ha.declutterTiles||(a.iconColliders=[]);this._addIconPlacement(a,c,d,b,k);f&&g&&this._addIconPlacement(a,
c,d,b,k+t.cPi);return a}_addIconPlacement(a,d,b,c,f){var g=b.rasterizationScale;const k=b.width/g,w=b.height/g;var e=c.offset;let r=e[0];e=e[1];switch(c.anchor){case u.SymbolAnchor.CENTER:r-=k/2;e-=w/2;break;case u.SymbolAnchor.LEFT:e-=w/2;break;case u.SymbolAnchor.RIGHT:r-=k;e-=w/2;break;case u.SymbolAnchor.TOP:r-=k/2;break;case u.SymbolAnchor.BOTTOM:r-=k/2;e-=w;break;case u.SymbolAnchor.BOTTOM_LEFT:e-=w;break;case u.SymbolAnchor.TOP_RIGHT:r-=k;break;case u.SymbolAnchor.BOTTOM_RIGHT:r-=k,e-=w}b=
b.rect;var C=2/g,n=r-C,h=e-C,p=n+b.width/g,v=h+b.height/g;g=new m.Point(n,h);C=new m.Point(p,v);n=new m.Point(n,v);h=new m.Point(p,h);0!==f&&(p=Math.cos(f),v=Math.sin(f),g.rotate(p,v),C.rotate(p,v),n.rotate(p,v),h.rotate(p,v));b=new da(g,h,n,C,b,f,0,256,d,.5,t.cInfinity,0);a.shapes.push(b);c.allowOverlap&&c.ignorePlacement||!ha.declutterTiles||(b=c.size,g=c.padding,a.iconColliders.push({xTile:d.x,yTile:d.y,dxPixels:r*b-g,dyPixels:e*b-g,hard:!c.optional,partIndex:0,width:k*b+2*g,height:w*b+2*g,angle:f,
minLod:.5,maxLod:t.cInfinity}))}getTextPlacement(a,d,b,c){var f=new m.Point(a.x,a.y);const g=c.rotate*t.cDegToRad;var k=c.rotationAlignment===u.RotationAlignment.MAP;const w=c.keepUpright,e=c.padding;let r=.5;const C=k?a.angle:0,n=0<=a.segment&&k,h=c.allowOverlap&&c.ignorePlacement?null:[],p=[],v=!n;var l=Number.POSITIVE_INFINITY;let z=Number.NEGATIVE_INFINITY,L=l,M=z;const ma=n?w:k&&w,E=c.size/R.sdfGlyphSize;let S=!1;for(var x of d)if(x.vertical){S=!0;break}let y=0;x=0;if(!n&&S){var q=R.TextShaping.getTextBox(d,
c.lineHeight*R.sdfGlyphSize);switch(c.anchor){case u.SymbolAnchor.LEFT:y=q.height/2;x=-q.width/2;break;case u.SymbolAnchor.RIGHT:y=-q.height/2;x=q.width/2;break;case u.SymbolAnchor.TOP:y=q.height/2;x=q.width/2;break;case u.SymbolAnchor.BOTTOM:y=-q.height/2;x=-q.width/2;break;case u.SymbolAnchor.TOP_LEFT:y=q.height;break;case u.SymbolAnchor.BOTTOM_LEFT:x=-q.width;break;case u.SymbolAnchor.TOP_RIGHT:x=q.width;break;case u.SymbolAnchor.BOTTOM_RIGHT:y=-q.height}}y+=c.offset[0]*R.sdfGlyphSize;x+=c.offset[1]*
R.sdfGlyphSize;for(const H of d){var A=H.glyphMosaicItem;if(!A||A.rect.isEmpty)continue;d=A.rect;q=A.metrics;var D=A.page;if(h&&v){if(void 0!==W&&W!==H.y){var N=void 0,P=void 0;if(S){var W=-M+y;N=l+x;P=M-L;l=z-l}else W=l+y,N=L+x,P=z-l,l=M-L;h.push({xTile:a.x,yTile:a.y,dxPixels:W*E-e,dyPixels:N*E-e,hard:!c.optional,partIndex:1,width:P*E+2*e,height:l*E+2*e,angle:g,minLod:.5,maxLod:t.cInfinity});l=Number.POSITIVE_INFINITY;z=Number.NEGATIVE_INFINITY;L=l;M=z}W=H.y}var G=[];if(n){if(A=(H.x+q.left-4+.5*
A.metrics.width)*E*8,r=this._placeGlyph(a,r,A,b,a.segment,1,H.vertical,D,G),w&&(r=this._placeGlyph(a,r,A,b,a.segment,-1,H.vertical,D,G)),2<=r)break}else G.push(new X(f,C,C,D,!1)),k&&w&&G.push(new X(f,C+t.cPi,C+t.cPi,D,!1));D=H.x+q.left;A=H.y-R.sdfGlyphBaseline-q.top;N=D+q.width;P=A+q.height;let B,I,Y,Z;!n&&S?H.vertical?(B=new m.Point(-((A+P)/2+q.width/2)-4+y,(D+N)/2-q.height/2-4+x),I=new m.Point(B.x+d.width,B.y+d.height),Y=new m.Point(B.x,I.y),Z=new m.Point(I.x,B.y)):(B=new m.Point(-A+4+y,D-4+x),
I=new m.Point(B.x-d.height,B.y+d.width),Y=new m.Point(I.x,B.y),Z=new m.Point(B.x,I.y)):(B=new m.Point(D-4+y,A-4+x),I=new m.Point(B.x+d.width,B.y+d.height),Y=new m.Point(B.x,I.y),Z=new m.Point(I.x,B.y));let Q,aa,ia,ja;for(const F of G){let T,U,V;F.alternateVerticalGlyph?(Q||(Q=new m.Point((D+N)/2+y-q.height/2-4,(A+P)/2+x+q.width/2+4),aa=new m.Point(Q.x+d.height,Q.y-d.width),ia=new m.Point(aa.x,Q.y),ja=new m.Point(Q.x,aa.y)),G=Q,T=ia,U=ja,V=aa):(G=B,T=Y,U=Z,V=I);const ba=A,fa=P,ca=F.glyphAngle+g;if(0!==
ca){var J=Math.cos(ca),K=Math.sin(ca);G=G.clone();T=T?.clone();U=U?.clone();V=V?.clone();G.rotate(J,K);V?.rotate(J,K);T?.rotate(J,K);U?.rotate(J,K)}J=0;K=256;n&&S?H.vertical?F.alternateVerticalGlyph?(J=32,K=96):(J=224,K=32):(J=224,K=96):(J=192,K=64);p.push(new da(G,U,T,V,d,F.labelAngle,J,K,F.anchor,F.minzoom,F.maxzoom,F.page));!h||ma&&!this._legible(F.labelAngle)||(v?(D<l&&(l=D),ba<L&&(L=ba),N>z&&(z=N),fa>M&&(M=fa)):2>F.minzoom&&h.push({xTile:a.x,yTile:a.y,dxPixels:(D+y)*E-e,dyPixels:(ba+y)*E-e,hard:!c.optional,
partIndex:1,width:(N-D)*E+2*e,height:(fa-ba)*E+2*e,angle:ca,minLod:F.minzoom,maxLod:F.maxzoom}))}}if(2<=r)return null;h&&v&&(S?(b=-M+y,f=l+x,k=M-L,l=z-l):(b=l+y,f=L+x,k=z-l,l=M-L),h.push({xTile:a.x,yTile:a.y,dxPixels:b*E-e,dyPixels:f*E-e,hard:!c.optional,partIndex:1,width:k*E+2*e,height:l*E+2*e,angle:g,minLod:.5,maxLod:t.cInfinity}));a=new ea(p);h&&0<h.length&&(a.textColliders=h);return a}_legible(a){a=t.radToByte(a);return 65>a||193<=a}_placeGlyph(a,d,b,c,f,g,k,w,e){const r=0>g?t.positiveMod(a.angle+
t.cPi,t.c2pi):a.angle;let C=0;0>b&&(g*=-1,b*=-1,C=t.cPi);0<g&&++f;a=new m.Point(a.x,a.y);let n=c[f];var h=t.cInfinity;if(c.length<=f)return h;for(;;){var p=n.x-a.x,v=n.y-a.y;const l=Math.sqrt(p*p+v*v),z=Math.max(b/l,d);p=t.positiveMod(Math.atan2(v/l,p/l)+C,t.c2pi);e.push(new X(a,r,p,w,!1,z,h));k&&e.push(new X(a,r,p,w,!0,z,h));if(z<=d)return z;a=n.clone();do{f+=g;if(c.length<=f||0>f)return z;n=c[f]}while(a.isEqual(n));h=n.x-a.x;p=n.y-a.y;v=Math.sqrt(h*h+p*p);h*=l/v;p*=l/v;a.x-=h;a.y-=p;h=z}}}O.Anchor=
ka;O.PlacedSymbol=da;O.Placement=ea;O.PlacementEngine=la;O.tileCoordSize=4096;O.tilePixelRatio=8;O.tilePixelSize=512;Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})});