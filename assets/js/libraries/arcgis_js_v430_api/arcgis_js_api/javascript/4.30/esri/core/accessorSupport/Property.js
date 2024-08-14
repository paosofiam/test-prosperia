// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./ObservableBase","./PropertyOrigin","./tracking","./tracking/Flags"],function(g,k,l,e,c){class m extends k.ObservableBase{constructor(a,b){super();this.propertyName=a;this.metadata=b;this._handles=this._accessed=null;this.flags=0;this.flags=c.Flags.Dirty|(b.nonNullable?c.Flags.NonNullable:0)|(b.hasOwnProperty("value")?c.Flags.HasDefaultValue:0)|(void 0===b.get?c.Flags.DepTrackingInitialized:0)|(void 0===b.dependsOn?c.Flags.AutoTracked:0)}destroy(){if(this.flags&c.Flags.Dirty)this.onCommitted();
super.destroy();this._accessed=null;this._clearObservationHandles()}getComputed(a){e.trackAccess(this);var b=a.store;const f=this.propertyName;var d=this.flags;const h=b.get(f);if(d&c.Flags.Computing||~d&c.Flags.Dirty&&b.has(f))return h;this.flags|=c.Flags.Computing;a=a.host;d&c.Flags.AutoTracked?d=e.runTracked(this,this.metadata.get,a):(e.trackExplicitDependencies(a,this),d=this.metadata.get.call(a));b.set(f,d,l.OriginId.COMPUTED);b=b.get(f);b===h?this.flags&=~c.Flags.Dirty:e.runUntracked(this.commit,
this);this.flags&=~c.Flags.Computing;return b}onObservableAccessed(a){a!==this&&(this._accessed??(this._accessed=new Set),this._accessed.add(a))}onTrackingEnd(){this._clearObservationHandles();this.flags|=c.Flags.DepTrackingInitialized;null!=this._accessed&&(this._handles??(this._handles=[]),this._accessed.forEach(a=>{this._handles.push(a.observe(this))}),this._accessed.clear())}notifyChange(){this.onInvalidated();this.onCommitted()}invalidate(){this.onInvalidated()}commit(){this.flags&=~c.Flags.Dirty;
this.onCommitted()}_clearObservationHandles(){const a=this._handles;if(null!==a){for(let b=0;b<a.length;++b)a[b].remove();a.length=0}}onInvalidated(){~this.flags&c.Flags.Overridden&&(this.flags|=c.Flags.Dirty);const a=this._observers;if(a&&0<a.length)for(const b of a)b.onInvalidated()}onCommitted(){var a=this._observers;if(a&&0<a.length){a=a.slice();for(const b of a)b.onCommitted()}}}g.Property=m;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});