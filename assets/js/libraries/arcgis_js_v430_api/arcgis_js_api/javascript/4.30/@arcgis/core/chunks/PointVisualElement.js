/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{c as e}from"./mathUtils.js";import{s as t}from"./vec3.js";import{c as i}from"./vec3f64.js";import{e as r,c as s}from"./vec4.js";import{f as o}from"./vec4f64.js";import{p as a}from"./projectVectorToVector.js";import{h as n}from"./aaBoundingBox.js";import{s as l}from"./plane.js";import{O as h}from"./Object3DVisualElement.js";import{e as u,E as m}from"./ElevationContext.js";import{r as p,c as _,d as c}from"./RibbonLineMaterial.js";import{a as d}from"./GeometryUtil.js";import{V as g}from"./VertexAttribute.js";import{H as f}from"./HUDMaterial.js";class x extends h{constructor(e){super(e),this._material=null,this._texture=null,this._geometry=null,this._size=3,this._color=o(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=o(1,1,1,1),this._elevationInfo=null,this.applyProperties(e)}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const t=this._preferredTextureSize;this._size=e,t<this._preferredTextureSize?this.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){r(e,this._color)||(s(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,this.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){r(e,this._outlineColor)||(s(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}_updateMaterial(){this._material&&this._material.setParameters(this._materialParameters)}_updateSizeAttribute(){const e=this.object;if(null==e)return;const t=e.geometries[0];if(null==t)return;const i=t.getMutableAttribute(g.SIZE).data,r=this._geometrySize;i[0]=r,i[1]=r,e.geometryVertexAttributeUpdated(e.geometries[0],g.SIZE)}get _materialParameters(){return{color:this._color,textureIsSignedDistanceField:!0,sampleSignedDistanceFieldTexelCenter:p(this._primitive),distanceFieldBoundingBox:v,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:this._texture?.id,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled,isDecoration:this.isDecoration}}get _geometrySize(){return this._size/S}createExternalResources(){this._texture=_(this._primitive,this._preferredTextureSize),this._material=new f(this._materialParameters);const e=this.view._stage;this._texture.load(e.renderView.renderingContext),e.add(this._texture)}destroyExternalResources(){this._texture&&(this.view._stage.remove(this._texture),this._texture.dispose(),this._texture=null),this._material=null}createGeometries(e){const t=this._createRenderGeometry();null!=t&&e.addGeometry(t)}forEachExternalMaterial(e){this._material&&e(this._material)}get _preferredTextureSize(){return e(2*this._geometrySize,16,128)}calculateMapBounds(e){const t=this.object?.geometries[0];if(!t)return!1;const i=t.attributes.get(g.POSITION).data;return a(i,this.view.renderCoordsHelper.spatialReference,z,this.view.spatialReference),n(e,z),!0}_createRenderGeometry(){const{geometry:e,_material:i}=this;if(null==e||null==i)return null;const{renderCoordsHelper:r,elevationProvider:s}=this.view,o=u(e,s,m.fromElevationInfo(this.elevationInfo),r),n=t(l.get(),e.x,e.y,o),h=l.get();a(n,e.spatialReference,h,r.spatialReference);const p=this._geometrySize;return d(i,null,h,null,[p,p],[0,0,0,1])}}const S=c,v=[S/2,S/2,1-S/2,1-S/2],z=i();export{x as P};
