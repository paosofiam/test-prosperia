// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/has ../../../../core/maybe ../../../../core/uid ../../../../core/accessorSupport/decorators/property ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec42 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ./ContentObjectType ./testUtils ./textureUtils ./VertexAttribute ../../../support/Scheduler ../../../support/Yield ../../../webgl/enums ../../../webgl/Texture ../../../webgl/TextureDescriptor".split(" "),
function(g,m,w,x,K,n,y,r,L,M,z,A,t,B,C,p,h,D,E,u,F,G){function q(a,b){a.geometries[0].setAttributeData(h.VertexAttribute.UV0,b.uv);a.geometryVertexAttributeUpdated(a.geometries[0],h.VertexAttribute.UV0,!0)}g.TextTextureAtlas=class extends w{constructor(a){super(a);this.type=B.ContentObjectType.Texture;this.id=y.generateUID();this.events=new x;this._glTexture=null;this._atlas=new H(256,256);this._needsRepack=!1;this._canRepack=!0;this._elementsToRender=new Map;this._elements=new Map;this._stageObjects=
new Map;this.updating=!1}initialize(){this._canvas=document.createElement("canvas");this._canvas.setAttribute("id","textAtlasCanvas");this._canvas.setAttribute("style","display:none");this._ctx=this._canvas.getContext("2d");this._stage=this.view._stage;this._stage.add(this);this._updateCanvasElementSize(this._atlas);this._reset()}unload(){this._glTexture=n.disposeMaybe(this._glTexture);this.updating=!1;this.events.emit("unloaded")}get glTexture(){return this._glTexture}static get maxSize(){l=C.textTextureAtlas.stableRendering?
2:0;return[4094-l,4094-l-2]}load(a){if(this._glTexture)return this._glTexture;const b=new G.TextureDescriptor;b.wrapMode=u.TextureWrapMode.CLAMP_TO_EDGE;b.samplingMode=u.TextureSamplingMode.LINEAR_MIPMAP_LINEAR;b.hasMipmap=!0;b.preMultiplyAlpha=!0;b.maxAnisotropy=a.parameters.maxMaxAnisotropy;this._glTexture=new F.Texture(a,b,this._canvas);this._frameWorker=this.view.resourceController.scheduler.registerTask(D.TaskPriority.TEXT_TEXTURE_ATLAS,this);this.setDirty();return this._glTexture}dispose(){this._elements.clear();
this._elementsToRender.clear();this._frameWorker=n.removeMaybe(this._frameWorker);this._glTexture&&(this._stage.remove(this),this._glTexture=n.disposeMaybe(this._glTexture));this._canvas.width=0;this._canvas.height=0;this._ctx=this._canvas=null}_updateCanvasElementSize(a){this._canvas.setAttribute("width",a.width.toString());this._canvas.setAttribute("height",a.height.toString())}_resizeAtlas(a,b){const {width:c,height:d}=this._atlas;if(c!==a||d!==b)this._atlas.width=a,this._atlas.height=b,this._glTexture?.resize(a,
b),this._glTexture?.updateData(0,0,0,c,d,this._canvas),this._updateCanvasElementSize(this._atlas),this._elements.forEach(e=>{this._stageObjects.get(e.textRenderer.key)?.forEach(f=>q(f,e))}),this._reset()}_reset(){this._elementsToRender.clear();this._atlas.reset();this._needsRepack=!0;this.setDirty()}_addAtlasElement(a,b,c,d){const e=this._atlas;if(e.width<c||e.height<d)return!1;let f=e.cursors.get(d);if(!f){if(e.height<e.nextY+d)return!1;f=[new v(e.nextY)];e.cursors.set(d,f);e.nextY+=d}let k=f.find(I=>
e.width>=I.x+c);if(null==k){if(e.height<e.nextY+d)return!1;k=new v(e.nextY);e.nextY+=d;f.push(k)}a.setNewPosition(k);this._elements.set(b,a);this._elementsToRender.set(b,a);k.x+=c;return!0}_ensureStageObjects(a){var b=this._stageObjects.get(a);if(b)return b;b=new Set;this._stageObjects.set(a,b);return b}_addStageObject(a,b){this._ensureStageObjects(a).add(b)}_removeStageObject(a,b){this._stageObjects.get(a)?.delete(b)&&(b.geometries[0].setAttributeData(h.VertexAttribute.SIZE,[0,0]),b.geometryVertexAttributeUpdated(b.geometries[0],
h.VertexAttribute.SIZE),this._elementsToRender.delete(a))}_processAddition(a){const b=a.textRenderer.key;if(this._needsRepack)this._elements.set(b,a);else{var c=this._atlas,d=a.textRenderer.renderedWidth+2,e=a.textRenderer.renderedHeight+2+2;this._addAtlasElement(a,b,d,e)||(this._canRepack?this._reset():c.width<d?(d=Math.min(p.applyTextureResizeModulo(Math.max(d,1.5*c.width)),4096),this._resizeAtlas(d,c.height)):(d=Math.min(p.applyTextureResizeModulo(Math.max(c.nextY+e,1.5*c.height)),4096),d>c.height?
this._resizeAtlas(c.width,d):4096>c.width&&(d=Math.min(p.applyTextureResizeModulo(1.5*c.width),4096),this._resizeAtlas(d,c.height))),this._elements.set(b,a))}}_renderElement(a){const b=a.commitNewPosition(),c=a.textRenderer;this._ctx.clearRect(b[0]-2,b[1]-2,c.renderedWidth+4,c.renderedHeight+4);c.render(this._ctx,b[0],b[1]);this._stageObjects.get(c.key)?.forEach(d=>q(d,a))}get running(){return this.updating}runTask(a){if(null==this._glTexture)return E.Yield;for(;this._needsRepack&&(this._canRepack||
4096>this._atlas.height&&4096>this._atlas.height);){this._canRepack=this._needsRepack=!1;const b=this._elements;this._elements=new Map;b.forEach(c=>this._processAddition(c));a.madeProgress()}if(0<this._elementsToRender.size){for(const [b,c]of this._elementsToRender){if(a.done)break;this._renderElement(c);this._elementsToRender.delete(b);a.madeProgress()}this._glTexture.setData(this._canvas)}this.updating=0<this._elementsToRender.size}addTextTexture(a,b){var c=a.key;this._addStageObject(c,b);c=this._elements.get(c);
null==c&&(c=new J(this._atlas,a),this._processAddition(c),this.setDirty());b.geometries[0].setAttributeData(h.VertexAttribute.SIZE,[c.textRenderer.displayWidth,c.textRenderer.displayHeight]);b.geometryVertexAttributeUpdated(b.geometries[0],h.VertexAttribute.SIZE);q(b,c)}removeTextTexture(a,b){a=a.key;this._elements.get(a)&&(this._removeStageObject(a,b),(b=this._stageObjects.get(a))&&0!==b.size||this._elements.delete(a),0===b?.size&&this._stageObjects.delete(a),this._canRepack=!0)}setDirty(){this._glTexture&&
(this.updating=!0)}get test(){}};m.__decorate([r.property({constructOnly:!0})],g.TextTextureAtlas.prototype,"view",void 0);m.__decorate([r.property({type:Boolean})],g.TextTextureAtlas.prototype,"updating",void 0);g.TextTextureAtlas=m.__decorate([z.subclass("esri.views.3d.webgl-engine.lib.TextTextureAtlas")],g.TextTextureAtlas);class J{constructor(a,b){this._atlas=a;this.textRenderer=b;this._uv=t.create();this._newPosition=[0,0]}get uv(){if(null==this._xOffset||null==this._yOffset)return t.ZEROS;const {renderedWidth:a,
renderedHeight:b}=this.textRenderer;return A.set(this._uv,this._xOffset/this._atlas.width,(this._yOffset+b)/this._atlas.height,(this._xOffset+a)/this._atlas.width,this._yOffset/this._atlas.height)}setNewPosition(a){this._newPosition[0]=a.x;this._newPosition[1]=a.y}commitNewPosition(){this._xOffset=this._newPosition[0];this._yOffset=this._newPosition[1];return this._newPosition}get xOffset(){return this._xOffset}get yOffset(){return this._yOffset}}class H{constructor(a,b){this.width=a;this.height=
b;this.cursors=new Map;this.nextY=0}reset(){this.cursors.clear();this.nextY=l}}class v{constructor(a){this.y=a;this.x=l}}let l=0;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});