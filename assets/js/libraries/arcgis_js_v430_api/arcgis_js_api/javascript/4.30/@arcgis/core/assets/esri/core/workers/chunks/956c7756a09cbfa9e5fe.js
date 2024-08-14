"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1354],{8368:(e,t,i)=>{i.d(t,{A:()=>a});var l=i(32816),s=i(20266),o=i(29298),r=(i(32773),i(69421)),n=i(1985);const a=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,n.p)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,n.s)(e,s.L.getLogger(this)))}};return(0,l._)([(0,o.MZ)()],t.prototype,"title",null),(0,l._)([(0,o.MZ)({type:String})],t.prototype,"url",null),t=(0,l._)([(0,r.$)("esri.layers.mixins.ArcGISService")],t),t}},35507:(e,t,i)=>{var l;i.d(t,{B:()=>l}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(l||(l={}))},8662:(e,t,i)=>{i.d(t,{T:()=>o});var l=i(6407),s=i(80959);class o{constructor(e,t=0,i=e.lods[e.lods.length-1].level){this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){const l=this.tileInfo?.lodAt(e);return!l||e<this.minLOD||e>this.maxLOD?"unavailable":l.cols&&l.rows?i>=l.cols[0]&&i<=l.cols[1]&&t>=l.rows[0]&&t<=l.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,o){await(0,s.NO)(o);const r=this.getAvailability(e,t,i);if("unavailable"===r)throw new l.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return r}async fetchAvailabilityUpsample(e,t,i,l,o){await(0,s.NO)(o),l.level=e,l.row=t,l.col=i;const r=this.tileInfo;return r.updateTileInfo(l),this.fetchAvailability(e,t,i,o).catch((e=>{if((0,s.zf)(e))throw e;if(r.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,o);throw e}))}}},67091:(e,t,i)=>{i.d(t,{T:()=>l});class l{constructor(e,t,i,l,s=void 0){this.id=e,this.level=t,this.row=i,this.col=l,this.extent=s}}},13562:(e,t,i)=>{i.d(t,{T:()=>b});var l,s=i(32816),o=i(64604),r=i(41390),n=i(35507),a=i(6407),c=i(13671),h=i(32773),p=i(23787),u=i(45371),f=i(80959),d=i(67321),v=i(99063),m=i(29298),y=(i(20266),i(69421)),w=i(67091);class g{constructor(e){!function(e){if(!e?.location)throw new a.A("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new a.A("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new a.A("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new a.A("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new a.A("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}(e);const{location:t,data:i}=e;this.location=Object.freeze((0,h.o8)(t));const l=this.location.width,s=this.location.height;let o=!0,r=!0;const n=function(e,t=!1){return e<=h.n?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(l*s/32));let c=0;for(let e=0;e<i.length;e++){const t=e%32;i[e]?(r=!1,n[c]|=1<<t):o=!1,31===t&&++c}r?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=n,this.byteSize=40+(0,h.m)(n))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),l=i%32,s=i>>5,o=this._availability;return s<0||s>o.length?"unknown":o[s]&1<<l?"available":"unavailable"}static fromDefinition(e,t){const i=e.service.request||o.A,{row:l,col:s,width:r,height:n}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(function(e){let t;if(e.service.tileServers?.length){const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(422===e?.details?.httpStatus)return{location:{top:l,left:s,width:r,height:n},valid:!0,data:new Array(r*n).fill(0)};throw e})).then((e=>{if(e.location&&(e.location.top!==l||e.location.left!==s||e.location.width!==r||e.location.height!==n))throw new a.A("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:l,left:s,width:r,height:n}});return g.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new g(e))}}function _(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}let b=l=class extends r.T{constructor(e){super(e),this._pendingTilemapRequests={},this.request=o.A,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new p.L(2*n.B.MEGABYTES),this.addHandles((0,d.wB)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition()),d.Vh))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new a.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this._fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof g){const s=l.getAvailability(t,i);if("unavailable"===s)throw new a.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return s}if((0,f.zf)(l))throw l;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,l,s){l.level=e,l.row=t,l.col=i;const o=this.layer.tileInfo;o.updateTileInfo(l);const r=this.fetchAvailability(e,t,i,s).catch((e=>{if((0,f.zf)(e))throw e;if(o.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,s);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,s,r),r}async _fetchAvailabilityUpsamplePrefetch(e,t,i,s,o,r){if(!this._prefetchingEnabled||null==e)return;const n=`prefetch-${e}`;if(this.hasHandles(n))return;const a=new AbortController;r.then((()=>a.abort()),(()=>a.abort()));let h=!1;const p=(0,c.m)((()=>{h||(h=!0,a.abort())}));if(this.addHandles(p,n),await(0,u.md)(10,a.signal).catch((()=>{})),h||(h=!0,this.removeHandles(n)),(0,f.G4)(a))return;const d=new w.T(e,t,i,s),v={...o,signal:a.signal},m=this.layer.tileInfo;for(let e=0;l._prefetches.length<l._maxPrefetch&&m.upsampleTile(d);++e){const e=this.fetchAvailability(d.level,d.row,d.col,v);l._prefetches.push(e);const t=()=>{l._prefetches.removeUnordered(e)};e.then(t,t)}}_fetchTilemap(e,t,i,l){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new a.A("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const s=this._tmpTilemapDefinition,o=this._tilemapFromCache(e,t,i,s);if(o)return Promise.resolve(o);const r=l?.signal;return l={...l,signal:null},new Promise(((e,t)=>{(0,f.u7)(r,(()=>t((0,f.NK)())));const i=_(s);let o=this._pendingTilemapRequests[i];if(!o){o=g.fromDefinition(s,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=o,o.then(e,e)}o.then(e,t)}))}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,v.x0)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const s=_(l);return this._tilemapCache.get(s)}get test(){}};b._maxPrefetch=4,b._prefetches=new u.P({initialSize:l._maxPrefetch}),(0,s._)([(0,m.MZ)({constructOnly:!0})],b.prototype,"layer",void 0),(0,s._)([(0,m.MZ)({constructOnly:!0})],b.prototype,"minLOD",void 0),(0,s._)([(0,m.MZ)({constructOnly:!0})],b.prototype,"maxLOD",void 0),(0,s._)([(0,m.MZ)({constructOnly:!0})],b.prototype,"request",void 0),(0,s._)([(0,m.MZ)({constructOnly:!0})],b.prototype,"size",void 0),b=l=(0,s._)([(0,y.$)("esri.layers.support.TilemapCache")],b)},24033:(e,t,i)=>{i.d(t,{f:()=>p});var l=i(32816),s=(i(94345),i(29298)),o=(i(32773),i(20266),i(49877)),r=i(69421),n=i(92070),a=i(8662),c=i(13562),h=i(7969);i(36544),i(44600),i(2160),i(99924),i(41390),i(40499),i(93181),i(13671),i(58498),i(91047),i(45371),i(80959),i(6407),i(90740),i(69763),i(93804),i(18683),i(64604),i(29512),i(99063),i(56273),i(64752),i(48844),i(29208),i(36533),i(84200),i(97827),i(91695),i(18169),i(48402),i(16699),i(26809),i(2589),i(18527),i(67504),i(92517),i(77037),i(6851),i(35507),i(23787),i(22151),i(67321),i(73067),i(17745),i(81272),i(44945);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){const l=t.capabilities?.includes("Tilemap");let{minLOD:s,maxLOD:o,minScale:r,maxScale:h}=t;if(null==s&&null==o&&0!==r&&0!==h){const e=e=>Math.round(1e4*e)/1e4;r=e(r||t.tileInfo.lods[0].scale),h=e(h||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);s=t>=r?i.level:s,o=t>=h?i.level:o}}if(l)return new c.T({layer:this,minLOD:s,maxLOD:o});if(t.tileInfo){const e=new n.A;return e.read(t.tileInfo,i),new a.T(e,s,o)}return null}};return(0,l._)([(0,s.MZ)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,l._)([(0,s.MZ)()],t.prototype,"minScale",void 0),(0,l._)([(0,o.r)("service","minScale")],t.prototype,"readMinScale",null),(0,l._)([(0,s.MZ)()],t.prototype,"maxScale",void 0),(0,l._)([(0,o.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,l._)([(0,s.MZ)({type:h.A})],t.prototype,"spatialReference",void 0),(0,l._)([(0,s.MZ)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,l._)([(0,s.MZ)({type:n.A})],t.prototype,"tileInfo",void 0),(0,l._)([(0,s.MZ)()],t.prototype,"tilemapCache",void 0),(0,l._)([(0,o.r)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,l._)([(0,s.MZ)()],t.prototype,"version",void 0),t=(0,l._)([(0,r.$)("esri.layers.mixins.ArcGISCachedService")],t),t}},6851:(e,t,i)=>{i.d(t,{A:()=>h});var l,s=i(32816),o=i(99924),r=i(29298),n=i(36544),a=(i(32773),i(69421));i(41390),i(20266),i(90740),i(40499),i(93181),i(13671),i(58498),i(91047),i(45371),i(80959),i(6407);let c=l=class extends o.oY{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new l({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,s._)([(0,r.MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"cols",void 0),(0,s._)([(0,r.MZ)({type:n.I,json:{write:!0}})],c.prototype,"level",void 0),(0,s._)([(0,r.MZ)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),(0,s._)([(0,r.MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"origin",void 0),(0,s._)([(0,r.MZ)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),(0,s._)([(0,r.MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"rows",void 0),(0,s._)([(0,r.MZ)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=l=(0,s._)([(0,a.$)("esri.layers.support.LOD")],c);const h=c},92070:(e,t,i)=>{i.d(t,{A:()=>O});var l,s=i(32816),o=i(93804),r=i(99924),n=i(69763),a=i(29298),c=i(36544),h=(i(32773),i(49877)),p=i(69421),u=i(56273),f=i(64752),d=i(7969),v=i(48402),m=i(29208),y=i(6851),w=i(67091);i(90740),i(41390),i(20266),i(40499),i(93181),i(13671),i(58498),i(91047),i(45371),i(80959),i(6407),i(18683),i(64604),i(29512),i(99063),i(48844),i(2160),i(16699),i(26809),i(2589),i(18527),i(44600);const g=new o.J({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let _=l=class extends r.oY{static create(e={}){const{resolutionFactor:t=1,scales:i,size:s=256,spatialReference:o=d.A.WebMercator,numLODs:r=24}=e;if(!(0,n.k)(o)){const e=[];if(i)for(let t=0;t<i.length;t++){const l=i[t];e.push(new y.A({level:t,scale:l,resolution:l}))}else{let t=5e-4;for(let i=r-1;i>=0;i--)e.unshift(new y.A({level:i,scale:t,resolution:t})),t*=2}return new l({dpi:96,lods:e,origin:new f.A(0,0,o),size:[s,s],spatialReference:o})}const a=(0,n.j)(o),c=e.origin?new f.A({x:e.origin.x,y:e.origin.y,spatialReference:o}):new f.A(a?{x:a.origin[0],y:a.origin[1],spatialReference:o}:{x:0,y:0,spatialReference:o}),h=1/(39.37*(0,n.g)(o)*96),p=[];if(i)for(let e=0;e<i.length;e++){const t=i[e],l=t*h;p.push(new y.A({level:e,scale:t,resolution:l}))}else{let e=(0,n.c)(o)?512/s*591657527.5917094:256/s*591657527.591555;const i=Math.ceil(r/t);p.push(new y.A({level:0,scale:e,resolution:e*h}));for(let l=1;l<i;l++){const i=e/2**t,s=i*h;p.push(new y.A({level:l,scale:i,resolution:s})),e=i}}return new l({dpi:96,lods:p,origin:c,size:[s,s],spatialReference:o})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const i=(0,n.j)(e);return e.isWrappable&&!!i&&Math.abs(i.origin[0]-t.x)<=i.dx}return!1}readOrigin(e,t){return f.A.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,i=0;const l=[],s=this._levelToLOD={};e&&(t=-1/0,i=1/0,e.forEach((e=>{l.push(e.scale),t=e.scale>t?e.scale:t,i=e.scale<i?e.scale:i,s[e.level]=e}))),this._set("scales",l),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const i=Math.floor(e),l=i+1;return t[i]/(t[i]/t[l])**(e-i)}scaleToZoom(e){const t=this.scales,i=t.length-1;let l=0;for(;l<i;l++){const i=t[l],s=t[l+1];if(i<=e)return l;if(s===e)return l+1;if(i>e&&s<e)return l+Math.log(i/e)/Math.log(i/s)}return l}tileAt(e,t,i,l){const s=this.lodAt(e);if(!s)return null;let o,r;if("number"==typeof t)o=t,r=i;else if((0,n.f)(t.spatialReference,this.spatialReference))o=t.x,r=t.y,l=i;else{const e=(0,m.Cv)(t,this.spatialReference);if(null==e)return null;o=e.x,r=e.y,l=i}const a=s.resolution*this.size[0],c=s.resolution*this.size[1];return l||(l=new w.T(null,0,0,0,(0,v.c)())),l.level=e,l.row=Math.floor((this.origin.y-r)/c+.001),l.col=Math.floor((o-this.origin.x)/a+.001),this.updateTileInfo(l),l}updateTileInfo(e,t=l.ExtrapolateOptions.NONE){let i=this.lodAt(e.level);if(!i&&t===l.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(i=t)}if(!i)return;const s=e.level-i.level,o=i.resolution*this.size[0]/2**s,r=i.resolution*this.size[1]/2**s;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,v.c)()),e.extent[0]=this.origin.x+e.col*o,e.extent[1]=this.origin.y-(e.row+1)*r,e.extent[2]=e.extent[0]+o,e.extent[3]=e.extent[1]+r}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const i=this.lodAt(t.level);if(null==i)return null;const{resolution:l}=i,s=l*this.size[0],o=l*this.size[1];return e[0]=this.origin.x+t.col*s,e[1]=this.origin.y-(t.row+1)*o,e[2]=e[0]+s,e[3]=e[1]+o,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return l.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||256===this.size[0]&&512===e)return null;const t=(512===this.size[0]&&256===e?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&0===t)return this;const i=[],s=this.lods.length-t;for(let e=0;e<s;e++){const l=e+t,{scale:s,resolution:o}=l>=0?this.lods[l]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};i.push(new y.A({level:e,scale:s,resolution:o}))}return new l({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:i})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let i=0;i<e.length;i++){const l=e[i];this._upsampleLevels[l.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/l.resolution:0},t=l}}};var b,A;(0,s._)([(0,a.MZ)({type:Number,json:{write:!0}})],_.prototype,"compressionQuality",void 0),(0,s._)([(0,a.MZ)({type:Number,json:{write:!0}})],_.prototype,"dpi",void 0),(0,s._)([(0,a.MZ)({type:String,json:{read:g.read,write:g.write,origins:{"web-scene":{read:!1,write:!1}}}})],_.prototype,"format",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],_.prototype,"isWrappable",null),(0,s._)([(0,a.MZ)({type:f.A,json:{write:!0}})],_.prototype,"origin",void 0),(0,s._)([(0,h.r)("origin")],_.prototype,"readOrigin",null),(0,s._)([(0,a.MZ)({type:[y.A],value:null,json:{write:!0}})],_.prototype,"lods",null),(0,s._)([(0,a.MZ)({readOnly:!0})],_.prototype,"scales",void 0),(0,s._)([(0,a.MZ)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],_.prototype,"size",void 0),(0,s._)([(0,h.r)("size",["rows","cols"])],_.prototype,"readSize",null),(0,s._)([(0,u.w)("size",{cols:{type:c.I},rows:{type:c.I}})],_.prototype,"writeSize",null),(0,s._)([(0,a.MZ)({type:d.A,json:{write:!0}})],_.prototype,"spatialReference",void 0),_=l=(0,s._)([(0,p.$)("esri.layers.support.TileInfo")],_),(A=(b=_||(_={})).ExtrapolateOptions||(b.ExtrapolateOptions={}))[A.NONE=0]="NONE",A[A.POWER_OF_TWO=1]="POWER_OF_TWO";const O=_}}]);