// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./enums","./VTLMaterial","../../../../webgl/enums","../../../../webgl/VertexElementDescriptor"],function(c,a,d,e,f){class b extends d.VTLMaterial{constructor(g){super(g)}geometryInfo(){return b.GEOMETRY_LAYOUT}opacityInfo(){return null}attributes(){return b.ATTRIBUTES}attributesInfo(){return b.ATTRIBUTES_INFO}}b.ATTRIBUTES="circle-radius circle-color circle-opacity circle-stroke-width circle-stroke-color circle-stroke-opacity circle-blur".split(" ");b.GEOMETRY_LAYOUT=[new f.VertexElementDescriptor("a_pos",
2,e.DataType.SHORT,0,4)];b.ATTRIBUTES_INFO={"circle-radius":{name:"radius",type:a.EncodingType.R8_UNSIGNED},"circle-color":{name:"color",type:a.EncodingType.R8G8B8A8_COLOR},"circle-opacity":{name:"opacity",type:a.EncodingType.R8_UNSIGNED,precisionFactor:100},"circle-stroke-width":{name:"stroke_width",type:a.EncodingType.R8_UNSIGNED,precisionFactor:4},"circle-stroke-color":{name:"stroke_color",type:a.EncodingType.R8G8B8A8_COLOR},"circle-stroke-opacity":{name:"stroke_opacity",type:a.EncodingType.R8_UNSIGNED,
precisionFactor:100},"circle-blur":{name:"blur",type:a.EncodingType.R8_UNSIGNED,precisionFactor:32}};c.VTLCircleMaterial=b;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});