// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/typedArrayUtil","../../../../core/libs/gl-matrix-2/factories/vec2f64","../../layers/graphics/Graphics3DPathSymbolLayerConstants"],function(l,r,c,v){function m(b){const a=v.pathNumCircleProfileSubdivisions,d=new n,h={v0:0,v1:0};d.addPole(c.fromValues(0,0));for(var e=0;e<a;++e){var g=2*e*Math.PI/a,f=Math.cos(g);const k=Math.sin(g);g=c.fromValues(.5*f,.5*k);f=c.fromValues(f,k);d.addVertex(g,f)}for(e=0;e<a-1;++e)d.addSegment({v0:e,v1:e+1},h);d.addSegment({v0:a-1,v1:0},
h);"center"!==b&&(b=t[b],d.translate(b[0],b[1]));return d}function p(b){const a=new n,d=c.fromValues(-.5,-.5),h=c.fromValues(.5,-.5),e=c.fromValues(.5,.5),g=c.fromValues(-.5,.5),f=c.fromValues(0,-1),k=c.fromValues(1,0),q=c.fromValues(0,1),u=c.fromValues(-1,0);a.addPole(c.fromValues(0,.5),q);a.addPole(c.fromValues(0,.5));a.addPole(c.fromValues(0,-.5));a.addPole(c.fromValues(0,-.5),f);a.addVertex(d,f);a.addVertex(h,f);a.addSegment({v0:0,v1:1},{v0:3,v1:3});a.addVertex(h,k);a.addVertex(e,k);a.addSegment({v0:2,
v1:3},{v0:2,v1:1});a.addVertex(e,q);a.addVertex(g,q);a.addSegment({v0:4,v1:5},{v0:0,v1:0});a.addVertex(g,u);a.addVertex(d,u);a.addSegment({v0:6,v1:7},{v0:1,v1:2});"center"!==b&&(b=t[b],a.translate(b[0],b[1]));return a}class n{constructor(){this.vertices=[];this.normals=[];this.indices=[];this.poles=[];this.poleIndices=[]}addVertex(b,a){this.vertices.push(c.clone(b));this.normals.push(c.clone(a));return this.vertices.length-1}addPole(b,a=null){this.poles.push({position:c.clone(b),normal:a?c.clone(a):
null});return this.poles.length-1}addSegment(b,a=null){this.indices.push(b.v0);this.indices.push(b.v1);a&&(this.poleIndices.push(a.v0),this.poleIndices.push(a.v1))}get numSegments(){return this.indices.length/2}translate(b,a){for(const d of this.vertices)d[0]+=b,d[1]+=a;for(const d of this.poles)d.position[0]+=b,d.position[1]+=a}get usedMemory(){return this.vertices.length*r.estimateSize(this.vertices[0])*2+r.estimateSize(this.indices)}}const t={top:[0,-.5],bottom:[0,.5]},w={center:m("center"),top:m("top"),
bottom:m("bottom")},x={center:p("center"),top:p("top"),bottom:p("bottom")};l.PathProfile=n;l.circleProfiles=w;l.quadProfiles=x;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});