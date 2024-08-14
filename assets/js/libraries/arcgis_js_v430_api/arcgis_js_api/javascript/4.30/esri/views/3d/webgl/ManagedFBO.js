// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["../../../core/maybe","./ManagedDepthTexture","./ManagedFBObject","../../webgl/enums"],function(e,f,d,c){class g extends d.ManagedFBObject{constructor(a,b,h,k,l,m){super(a,m);this.type=d.AttachmentType.FBO;this._colors=new Map;this._name="composite-color";this.acquireColor=this.acquireDepth=null;this._name=b;this.fbo=h;this.acquireDepth=k;this.acquireColor=l}dispose(){this.fbo?.dispose()}get usedMemory(){return this.fbo?.usedMemory||0}get name(){return this._name}setName(a){this._name=a}getTexture(a=
c.ColorAttachment.COLOR_ATTACHMENT0){return a===c.DepthStencilAttachment?this.fbo?.depthStencilTexture:this.fbo?.getColorTexture(a)}getAttachment(a=c.ColorAttachment.COLOR_ATTACHMENT0){return a===c.DepthStencilAttachment?this._depth:this._colors.get(a)}attachDepth(a){a?.retain();this.detachDepth();a&&this.fbo?.attachDepthStencil(a.attachment);this._depth=a;return this}detachDepth(){this.fbo?.detachDepthStencilTexture();this.fbo?.detachDepthStencilBuffer();this._depth=e.releaseMaybe(this._depth)}obtainDepthTexture(){const a=
this._depth;if(!f.isManagedDepthTexture(a))return null;this.fbo?.detachDepthStencilTexture();this._depth=null;return a}attachColor(a,b){a.retain();this.detachColor(b);this.fbo?.attachColorTexture(a.attachment,b);this._colors.set(b,a);return this}detachColor(a){this.fbo?.detachColorTexture(a);const b=this._colors.get(a);this._colors.delete(a);b?.release()}detachAll(){this._colors.forEach((a,b)=>this.detachColor(b));this.detachDepth()}}return g});