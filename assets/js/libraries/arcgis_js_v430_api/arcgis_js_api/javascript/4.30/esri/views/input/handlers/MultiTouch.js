// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/signal","../InputHandler"],function(b,c,d){class e extends d.InputHandler{get multiTouchActive(){return this._multiTouchActive.value}constructor(){super(!0);this._activeTouchPointerIds=new Set;this._multiTouchActive=c.signal(!1);this._onPointerAdd=({data:a})=>{"touch"===a.pointerType&&(this._activeTouchPointerIds.add(a.native.pointerId),this._update())};this._onPointerRemove=({data:a})=>{"touch"===a.pointerType&&(this._activeTouchPointerIds.delete(a.native.pointerId),
this._update())};this.registerIncoming("pointer-down",this._onPointerAdd);this.registerIncoming("pointer-up",this._onPointerRemove);this.registerIncoming("pointer-capture-lost",this._onPointerRemove);this.registerIncoming("pointer-cancel",this._onPointerRemove)}_update(){this._multiTouchActive.value=1<this._activeTouchPointerIds.size}}b.MultiTouch=e;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});