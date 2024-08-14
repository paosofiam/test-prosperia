// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Graphic ../../PopupTemplate ../../symbols ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Polygon ../route/utils ./networkEnums".split(" "),function(c,k,l,m,b,n,d,u,v,w,p,q,r,t,f,e){var g;b=g=class extends b.ClonableMixin(n.JSONSupport){constructor(a){super(a);
this.symbol=this.scaleFactor=this.popupTemplate=this.objectId=this.name=this.geometry=this.costs=this.barrierType=null;this.type="polygon-barrier"}readCosts(a,h){return f.getPrefixedProperties(h.attributes,"Attr_")}writeCosts(a,h){f.setPrefixedProperties(a,h,"Attr_")}static fromGraphic(a){return new g({barrierType:null!=a.attributes.BarrierType?e.barrierTypeJsonMap.fromJSON(a.attributes.BarrierType):null,costs:null!=a.attributes.Costs?f.toKebabImpedanceAttributes(JSON.parse(a.attributes.Costs)):null,
geometry:a.geometry,name:a.attributes.Name??null,objectId:a.attributes.ObjectID??a.attributes.__OBJECTID,popupTemplate:a.popupTemplate,scaleFactor:a.attributes.ScaleFactor??null,symbol:a.symbol})}toGraphic(){const a={ObjectID:this.objectId,BarrierType:null!=this.barrierType?e.barrierTypeJsonMap.toJSON(this.barrierType):null,Costs:null!=this.costs?JSON.stringify(f.fromKebabImpedanceAttributes(this.costs)):null,Name:this.name??null,ScaleFactor:this.scaleFactor??null};return new k({geometry:this.geometry,
attributes:a,symbol:this.symbol,popupTemplate:this.popupTemplate})}};b.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble"}];c.__decorate([d.property({type:e.barrierTypeJsonMap.apiValues,json:{name:"attributes.BarrierType",read:{reader:e.barrierTypeJsonMap.read},
write:{writer:e.barrierTypeJsonMap.write}}})],b.prototype,"barrierType",void 0);c.__decorate([d.property()],b.prototype,"costs",void 0);c.__decorate([p.reader("costs",["attributes"])],b.prototype,"readCosts",null);c.__decorate([r.writer("costs")],b.prototype,"writeCosts",null);c.__decorate([d.property({type:t,json:{write:!0}})],b.prototype,"geometry",void 0);c.__decorate([d.property({json:{name:"attributes.Name"}})],b.prototype,"name",void 0);c.__decorate([d.property({json:{name:"attributes.ObjectID"}})],
b.prototype,"objectId",void 0);c.__decorate([d.property({type:l})],b.prototype,"popupTemplate",void 0);c.__decorate([d.property()],b.prototype,"scaleFactor",void 0);c.__decorate([d.property({types:m.symbolTypes})],b.prototype,"symbol",void 0);c.__decorate([d.property({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0);return b=g=c.__decorate([q.subclass("esri.rest.support.PolygonBarrier")],b)});