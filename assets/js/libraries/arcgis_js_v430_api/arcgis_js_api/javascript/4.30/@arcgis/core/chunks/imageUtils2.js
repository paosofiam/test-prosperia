/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./Logger.js";import"../core/lang.js";import"../core/Error.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{c as i}from"./aaBoundingRect.js";import{c as r}from"./mat3f32.js";import{B as s}from"./Bitmap.js";import{T as a}from"./TiledDisplayObject.js";import{b as n}from"./WGLContainer.js";import{W as o}from"./Container.js";import{T as l}from"./TileContainer.js";class m extends a{constructor(e,t,i,r,a,n,o=null){super(e,t,i,r,a,n),this.bitmap=new s(o),this.bitmap.coordScale=[a,n],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:r(),tileMat3:r()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class c extends l{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds(i(),e),r=this._tileInfoView.getTileResolution(e.level),[s,a]=this._tileInfoView.tileInfo.size;return new m(e,r,t[0],t[3],s,a)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[n.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:o.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===o.MAP&&super.doRender(e)}}const d=i=>{let r=class extends i{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new c(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null}};return r=e([t("esri.views.2d.layers.BitmapTileLayerView2D")],r),r};function h(e,t,i,r){if(i.level===r.level)return t;const s=e.tileInfo.size,a=e.getTileResolution(i.level),n=e.getTileResolution(r.level);let o=e.getLODInfoAt(r.level);const l=o.getXForColumn(r.col),m=o.getYForRow(r.row);o=e.getLODInfoAt(i.level);const c=o.getXForColumn(i.col),d=o.getYForRow(i.row),h=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/s[0],u=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/s[1],f=Math.round(h*((l-c)/a)),b=Math.round(u*(-(m-d)/a)),g=Math.round(h*s[0]*(n/a)),w=Math.round(u*s[1]*(n/a)),R=p(s);return R.getContext("2d").drawImage(t,f,b,g,w,0,0,s[0],s[1]),R}function p(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}export{d as B,p as c,h as r};
