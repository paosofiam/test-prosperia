/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import t from"../Color.js";import e from"../core/Handles.js";import{watch as s}from"../core/reactiveUtils.js";import{f as i,g as o,b as r}from"./screenUtils.js";import{b as a,g as n,e as h,n as c,i as l,l as p}from"./vec2.js";import{i as d,a as _,c as m,n as u,b as f,p as x}from"./vec3.js";import{c as b,e as g}from"./vec3f64.js";import{V as v}from"./VisualElement.js";import{r as y}from"./viewUtils.js";import{_ as w}from"./tslib.es6.js";import C from"../core/Accessor.js";import{property as S}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as I}from"../core/accessorSupport/decorators/subclass.js";import"./projector.js";import{h as j,T as P}from"./TextOverlayItem.js";import{canProjectWithoutEngine as k}from"../geometry/projection.js";import{g as R}from"./spatialReferenceEllipsoidUtils.js";import{p as T}from"./projectVectorToVector.js";import{s as L}from"./plane.js";import{s as X,a as Y}from"./mathUtils2.js";let D=class extends C{get startPosition(){return[this.startX,this.startY]}set startPosition(t){this._set("startX",t[0]),this._set("startY",t[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(t){this._set("endX",t[0]),this._set("endY",t[1])}constructor(t){super(t),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0,this.isDecoration=!0}get _strokeStyle(){const t=this.color;return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}get _lineCap(){return"round"}render(){const{height:t,left:e,top:s,width:i,x1:o,x2:r,y1:a,y2:n}=this._calculateCoordinates(M),h=`stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`;return j("div",{classes:{"esri-line-overlay-item":!0},styles:{left:e+"px",top:s+"px",width:i+"px",height:t+"px",visibility:this.visible?"visible":"hidden"}},[j("svg",{width:i,height:t},[j("line",{x1:o,y1:a,x2:r,y2:n,style:h})])])}renderCanvas(t){if(!this.visible)return;t.strokeStyle=this._strokeStyle,t.lineWidth=this.width,t.lineCap=this._lineCap;const e=this._calculateCoordinates(M);t.beginPath(),t.moveTo(e.left+e.x1,e.top+e.y1),t.lineTo(e.left+e.x2,e.top+e.y2),t.stroke()}_calculateCoordinates(t){const e=Math.min(this.startX,this.endX),s=Math.max(this.startX,this.endX),i=Math.min(this.startY,this.endY),o=Math.max(this.startY,this.endY),r=this.width;return t.left=e-r,t.top=i-r,t.width=s-e+2*r,t.height=Math.max(20,o-i+2*r),t.x1=this.startX-e+r,t.y1=this.startY-i+r,t.x2=this.endX-e+r,t.y2=this.endY-i+r,t}};w([S()],D.prototype,"startX",void 0),w([S()],D.prototype,"startY",void 0),w([S()],D.prototype,"endX",void 0),w([S()],D.prototype,"endY",void 0),w([S()],D.prototype,"startPosition",null),w([S()],D.prototype,"endPosition",null),w([S()],D.prototype,"width",void 0),w([S()],D.prototype,"color",void 0),w([S()],D.prototype,"visible",void 0),w([S()],D.prototype,"isDecoration",void 0),w([S({readOnly:!0})],D.prototype,"_strokeStyle",null),D=w([I("esri.views.overlay.LineOverlayItem")],D);const M={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},z=D;class U extends v{constructor(s){super(s),this._handles=new e,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new t([0,0,0,.6]),this._calloutColor=new t([0,0,0,.5]),this._textColor=new t([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProperties(s)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get isDecoration(){return this._isDecoration}set isDecoration(t){this._isDecoration=t,this._textItem&&(this._textItem.isDecoration=t),this._calloutItem&&(this._calloutItem.isDecoration=t)}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get calloutColor(){return this._calloutColor}set calloutColor(t){this._calloutColor=t,this.attached&&(this._calloutItem.color=this._calloutColor.toRgba())}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}get _camera(){return this.view.state.cssCamera}overlaps(t){return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!!this.view.overlay?.overlaps(this._textItem,t.textItem)}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:s}=this;if(null!=t&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,J))break;if(t.callout){const e=this._camera,s=t.callout.distance;a(B,B,[0,t.callout.offset]),e.renderToScreen(B,J),n(H,0,1),h(H,H,s),a(H,H,B),e.renderToScreen(H,K),this._showCallout=this._updatePosition(J,K)}else this._textItem.position=[J[0],J[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,J,K))break;this._showCallout=this._updatePosition(J,K),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,J,K))break;this._showText=!0;const e=this._updatePosition(J,K);this._showCallout=!1!==t.callout&&e,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(s)}_computeLabelPositionFromPoint(t,e){const s=this._camera;return s.projectToRenderScreen(t,q),!(q[2]<0||q[2]>1||(s.renderToScreen(q,e),0))}_computeLabelPositionFromCorner(t,e,s,i){if(!t)return!1;const o=this._camera;return V(t.left,1,o,E),c(E,E),V(t.right,0,o,G),a(H,E,G),c(H,H),l(H,H),o.projectToRenderScreen(t.left.endRenderSpace,q),!(q[2]<0||q[2]>1||(o.renderToScreen(q,s),h(H,H,e),a(H,H,q),o.renderToScreen(H,i),0))}_computeLabelPositionFromSegment(t,e,s,i,o){if(!t)return!1;const r=t.segment,l=this._camera;y(r.startRenderSpace,r.endRenderSpace,l,E),n(H,-E[1],E[0]);let d=!1;switch(s){case"top":d=H[1]<0;break;case"bottom":d=H[1]>0;break;case"left":d=H[0]>0;break;case"right":d=H[0]<0}if(d&&c(H,H),0===p(H))switch(s){case"top":H[1]=1;break;case"bottom":H[1]=-1;break;case"left":H[0]=-1;break;case"right":H[0]=1}return r.eval(N[t.sampleLocation],W),l.projectToRenderScreen(W,q),!(q[2]<0||q[2]>1||(l.renderToScreen(q,i),h(H,H,e),a(H,H,q),l.renderToScreen(H,o),0))}_updatePosition(t,e){if(e){const s=e[0]-t[0],i=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(s)>Math.abs(i)?s>0?"left":"right":i>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){this._textItem=new P({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor,isDecoration:this._isDecoration}),this._calloutItem=new z({color:this._calloutColor.toRgba(),visible:!0,width:2,isDecoration:this._isDecoration}),this.updateLabelPosition(),this.view.overlay?.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add(s((()=>this.view.state.camera),(()=>this.updateLabelPosition())))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function V(t,e,s,i){return t.eval(e,F,O),d(A,F,O),y(F,A,s,i)}function $(t){switch(t){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const F=b(),A=b(),O=b(),E=i(),G=i(),H=i(),W=b(),q=o(),B=i(),J=r(),K=r(),N={start:0,center:.5,end:1};class Q{constructor(t=b(),e=b()){this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,s){return _(e,this.startRenderSpace,this.endRenderSpace,t),s&&(m(s,this.endRenderSpace,this.startRenderSpace),u(s,s)),e}createRenderGeometry(t,e){const s=[],i=[],o=(e,o)=>{const r=et;m(r,e,t),s.push([r[0],r[1],r[2]]),i.push([o[0],o[1],o[2]])},r=e.worldUpAtPosition(this.eval(.5,tt),L.get());return o(this.startRenderSpace,r),o(this.endRenderSpace,r),{points:s,normals:i}}static fromPositionAndVector(t,e,s=1){return f(tt,e,s),d(tt,t,tt),new Q(g(t),g(tt))}}class Z{_projectIn(t,e){this._project?T(t,this.renderSpatialReference,e,this._pcpf):x(e,t)}constructor(t,e,s){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=s,this.type="geodesic",this._start=b(),this._end=b(),this._pcpf=R(s),this._project=k(s,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}eval(t,e,s){if(this._project)if(s){const i=et;X(this._start,this._end,t,e,i),d(st,e,i),T(e,this._pcpf,e,this.renderSpatialReference),T(st,this._pcpf,st,this.renderSpatialReference),m(s,st,e),u(s,s)}else Y(this._start,this._end,t,e),T(e,this._pcpf,e,this.renderSpatialReference);else _(e,this._start,this._end,t),s&&(m(s,this._end,this._start),u(s,s));return e}createRenderGeometry(t,e){const s=[],i=[],o=(e,o)=>{const r=st;m(r,e,t),s.push([r[0],r[1],r[2]]),i.push([o[0],o[1],o[2]])};for(let t=0;t<128;++t){const s=t/127,i=tt,r=et;this.eval(s,i),e.worldUpAtPosition(i,r),o(i,r)}return{points:s,normals:i}}}const tt=b(),et=b(),st=b();export{Q as E,Z as G,U as L,$ as m};
