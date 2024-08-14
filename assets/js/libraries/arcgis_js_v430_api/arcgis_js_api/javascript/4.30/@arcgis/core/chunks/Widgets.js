/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{JSONSupport as t}from"../core/JSONSupport.js";import{clone as o}from"../core/lang.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"./Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{J as s}from"./jsonMap.js";import{I as n}from"./ensureType.js";import l from"../webdoc/widgets/TimeSlider.js";var p;let a=p=class extends t{constructor(e){super(e),this.enabled=!1,this.longNames=!1,this.minimized=!1,this.pinnedLevels=!1,this.site=null,this.facility=null,this.level=null}clone(){return new p(o({enabled:this.enabled,longNames:this.longNames,minimized:this.minimized,pinnedLevels:this.pinnedLevels,site:this.site,facility:this.facility,level:this.level}))}};e([r({type:Boolean,json:{read:{source:"enabled"},write:{target:"enabled"}}})],a.prototype,"enabled",void 0),e([r({type:Boolean,json:{read:{source:"longNames"},write:{target:"longNames"}}})],a.prototype,"longNames",void 0),e([r({type:Boolean,json:{read:{source:"minimized"},write:{target:"minimized"}}})],a.prototype,"minimized",void 0),e([r({type:Boolean,json:{read:{source:"pinnedLevels"},write:{target:"pinnedLevels"}}})],a.prototype,"pinnedLevels",void 0),e([r({type:String,json:{read:{source:"site"},write:{target:"site"}}})],a.prototype,"site",void 0),e([r({type:String,json:{read:{source:"facility"},write:{target:"facility"}}})],a.prototype,"facility",void 0),e([r({type:String,json:{read:{source:"level"},write:{target:"level"}}})],a.prototype,"level",void 0),a=p=e([i("esri.webdoc.widgets.FloorFilter")],a);const d=a;var c;const u=new s({slider:"slider",picker:"picker"});let m=c=class extends t{constructor(e){super(e),this.interactionMode=null,this.numStops=null,this.stopInterval=null}clone(){return new c({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})}};e([r({type:u.apiValues,nonNullable:!0,json:{type:u.jsonValues,default:null,read:{reader:u.read},write:{isRequired:!0,writer:u.write}}})],m.prototype,"interactionMode",void 0),e([r({type:n,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy(){const e=null!=this.stopInterval;return{enabled:!e,isRequired:!e}}}}})],m.prototype,"numStops",void 0),e([r({type:Number,json:{write:{overridePolicy(){return{isRequired:null==this.numStops}}}}})],m.prototype,"stopInterval",void 0),m=c=e([i("esri.webdoc.widgets.Range")],m);const y=m;var v;let g=v=class extends t{constructor(e){super(e),this.range=null,this.timeSlider=null,this.floorFilter=null}clone(){return new v(o({range:this.range,timeSlider:this.timeSlider,floorFilter:this.floorFilter}))}};e([r({type:y,json:{write:!0}})],g.prototype,"range",void 0),e([r({type:l,json:{write:!0}})],g.prototype,"timeSlider",void 0),e([r({type:d,json:{write:!0}})],g.prototype,"floorFilter",void 0),g=v=e([i("esri.webdoc.Widgets")],g);const h=g;export{d as W,h as a};
