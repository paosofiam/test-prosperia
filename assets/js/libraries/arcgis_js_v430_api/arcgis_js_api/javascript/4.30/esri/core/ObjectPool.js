// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(function(){class d{constructor(a,b,c,f=1,e=0){this._ctor=a;this._acquireFunction=b;this._releaseFunction=c;this.allocationSize=f;this._pool=Array(e);this._initialSize=e;if(this._ctor)for(a=0;a<e;a++)this._pool[a]=new this._ctor;this.allocationSize=Math.max(f,1)}destroy(){this.prune(0)}acquire(...a){if(d.test.disabled)var b=new this._ctor;else{if(0===this._pool.length){b=this.allocationSize;for(let c=0;c<b;c++)this._pool[c]=new this._ctor}b=this._pool.pop()}this._acquireFunction?this._acquireFunction(b,
...a):b?.acquire&&"function"===typeof b.acquire&&b.acquire(...a);return b}release(a){a&&!d.test.disabled&&(this._releaseFunction?this._releaseFunction(a):a?.release&&"function"===typeof a.release&&a.release(),this._pool.push(a))}prune(a=this._initialSize){if(!(a>=this._pool.length)){for(let b=a;b<this._pool.length;++b)this._dispose(this._pool[b]);this._pool.length=a}}_dispose(a){a.dispose&&"function"===typeof a.dispose&&a.dispose()}}d.test={disabled:!1};return d});