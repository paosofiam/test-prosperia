// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Error ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/RandomLCG ../core/has ../core/accessorSupport/decorators/subclass ./PortalQueryParams".split(" "),function(d,l,c,e,n,q,r,p,k){var m;c=m=class extends c.JSONSupport{constructor(a){super(a);this.id=this.description=this.created=this.access=null;this.isInvitationOnly=!1;this.title=this.tags=this.sourceJSON=this.sortOrder=this.sortField=this.snippet=this.portal=
this.owner=this.modified=null}get thumbnailUrl(){const a=this.url,b=this.thumbnail;return a&&b&&this.portal?this.portal?.normalizeUrl(`${a}/info/${b}?f=json`):null}get url(){const a=this.portal?.restUrl;return a?a+"/community/groups/"+this.id:null}fetchCategorySchema(a){return this.portal.request(this.url+"/categorySchema",a).then(b=>{b=b.categorySchema||[];return b.some(g=>"contentCategorySetsGroupQuery.LivingAtlas"===g.source)?this._fetchCategorySchemaSet("LivingAtlas",a):b})}fetchMembers(a){return this.portal.request(this.url+
"/users",a)}getThumbnailUrl(a){let b=this.thumbnailUrl;b&&a&&(b+=`&w=${a}`);return b}toJSON(){throw new l("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented");}static fromJSON(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");const b=new m({sourceJSON:a});b.read(a);return b}queryItems(a,b){a=n.ensureType(k,a);const g=this.portal;if(5<parseFloat(g.currentVersion))return a=a||new k,g.queryPortal(`/content/groups/${this.id}/search`,a,"PortalItem",
b);a=a?a.clone():new k;a.query="group:"+this.id+(a.query?" "+a.query:"");return g.queryItems(a,b)}_fetchCategorySchemaSet(a,b){const g=this.portal;return g.fetchSelf(g.authMode,!0,b).then(f=>{if(f=f.contentCategorySetsGroupQuery)return f=new k({disableExtraQuery:!0,num:1,query:f}),g.queryGroups(f,b);throw new l("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found");}).then(f=>{if(f.total){f=f.results[0];const h=new k({num:1,query:`typekeywords:"${a}"`});return f.queryItems(h,
b)}throw new l("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found");}).then(f=>f.total?f.results[0].fetchData("json",b).then(h=>{h=h?.categorySchema;return h?.length?h:[]}):[])}};d.__decorate([e.property()],c.prototype,"access",void 0);d.__decorate([e.property({type:Date})],c.prototype,"created",void 0);d.__decorate([e.property()],c.prototype,"description",void 0);d.__decorate([e.property()],c.prototype,"id",void 0);d.__decorate([e.property()],c.prototype,"isInvitationOnly",
void 0);d.__decorate([e.property({type:Date})],c.prototype,"modified",void 0);d.__decorate([e.property()],c.prototype,"owner",void 0);d.__decorate([e.property()],c.prototype,"portal",void 0);d.__decorate([e.property()],c.prototype,"snippet",void 0);d.__decorate([e.property()],c.prototype,"sortField",void 0);d.__decorate([e.property()],c.prototype,"sortOrder",void 0);d.__decorate([e.property()],c.prototype,"sourceJSON",void 0);d.__decorate([e.property()],c.prototype,"tags",void 0);d.__decorate([e.property()],
c.prototype,"thumbnail",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"thumbnailUrl",null);d.__decorate([e.property()],c.prototype,"title",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"url",null);return c=m=d.__decorate([p.subclass("esri.portal.PortalGroup")],c)});