// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(a,b,e,d,c,h,k,l,f){a.ServiceVersionInfo=class extends e{constructor(g){super(g);this.layers=new d;this.lockType="none";this.tables=new d;this.versionService=this.versionInfo=null}get layersAndTables(){return new d([...this.layers.toArray(),...this.tables.toArray()])}updateLockType(){this.lockType=
this.versionInfo?this.versionService.getLockType(this.versionInfo.versionIdentifier)??"none":"none"}get featureServiceVersion(){return this.featureService.sourceJSON?.currentVersion??0}};b.__decorate([c.property({constructOnly:!0})],a.ServiceVersionInfo.prototype,"canCreateVersion",void 0);b.__decorate([c.property({constructOnly:!0})],a.ServiceVersionInfo.prototype,"canEditVersionedData",void 0);b.__decorate([c.property({constructOnly:!0})],a.ServiceVersionInfo.prototype,"featureService",void 0);
b.__decorate([c.property({constructOnly:!0})],a.ServiceVersionInfo.prototype,"layers",void 0);b.__decorate([c.property()],a.ServiceVersionInfo.prototype,"layersAndTables",null);b.__decorate([c.property()],a.ServiceVersionInfo.prototype,"lockType",void 0);b.__decorate([c.property({constructOnly:!0})],a.ServiceVersionInfo.prototype,"tables",void 0);b.__decorate([c.property()],a.ServiceVersionInfo.prototype,"versionInfo",void 0);b.__decorate([c.property({constructOnly:!0})],a.ServiceVersionInfo.prototype,
"versionService",void 0);b.__decorate([c.property()],a.ServiceVersionInfo.prototype,"hasAdvancedEditingUserTypeExtension",void 0);b.__decorate([c.property()],a.ServiceVersionInfo.prototype,"loggedInServiceUser",void 0);b.__decorate([c.property()],a.ServiceVersionInfo.prototype,"featureServiceVersion",null);a.ServiceVersionInfo=b.__decorate([f.subclass("esri.undoredo.support.ServiceVersionInfo")],a.ServiceVersionInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});