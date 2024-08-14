// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./dom ./loadable ./component ./interactive ./resources3 ./icon".split(" "),function(k,b,u,l,m,n,c,v){function p(){"undefined"!==typeof customElements&&["calcite-dropdown-item","calcite-icon"].forEach(a=>{switch(a){case "calcite-dropdown-item":customElements.get(a)||customElements.define(a,q);break;case "calcite-icon":customElements.get(a)||v.defineCustomElement()}})}const q=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();
this.calciteDropdownItemSelect=b.createEvent(this,"calciteDropdownItemSelect",6);this.calciteInternalDropdownItemSelect=b.createEvent(this,"calciteInternalDropdownItemSelect",6);this.calciteInternalDropdownItemKeyEvent=b.createEvent(this,"calciteInternalDropdownItemKeyEvent",6);this.calciteInternalDropdownCloseRequest=b.createEvent(this,"calciteInternalDropdownCloseRequest",6);this.disabled=!1;this.rel=this.label=this.iconEnd=this.iconStart=this.iconFlipRtl=this.href=void 0;this.selected=!1;this.target=
void 0;this.selectionMode="single";this.scale="m"}async setFocus(){await l.componentFocusable(this);this.el?.focus()}componentWillLoad(){l.setUpLoadableComponent(this);this.initialize()}componentDidLoad(){l.setComponentLoaded(this)}connectedCallback(){this.initialize()}componentDidRender(){n.updateHostInteraction(this)}render(){const {href:a,selectionMode:d,label:r,iconFlipRtl:g,scale:w}=this;var e=b.h("calcite-icon",{key:"10985dba962cc1582cc6b2896e1c274b21e1dc20",class:c.CSS.iconStart,flipRtl:"start"===
g||"both"===g,icon:this.iconStart,scale:m.getIconScale(this.scale)}),f=b.h("span",{key:"e72a06cc3d3f325ec8e0e8eff407dc9149b29b14",class:c.CSS.itemContent},b.h("slot",{key:"e8d4e201f5903a2811c642d441d4b33d20abd7b2"})),h=b.h("calcite-icon",{key:"fd15f4aea96916ffa674591adc6887dafccc8218",class:c.CSS.iconEnd,flipRtl:"end"===g||"both"===g,icon:this.iconEnd,scale:m.getIconScale(this.scale)});e=this.iconStart&&this.iconEnd?[e,f,h]:this.iconStart?[e,f]:this.iconEnd?[f,h]:f;e=a?b.h("a",{"aria-label":r,class:c.CSS.link,
href:a,rel:this.rel,tabIndex:-1,target:this.target,ref:x=>this.childLink=x},e):e;f=a?null:"single"===d?"menuitemradio":"multiple"===d?"menuitemcheckbox":"menuitem";h="none"!==d?u.toAriaBoolean(this.selected):null;const {disabled:t}=this;return b.h(b.Host,{key:"6cdbba40456cde099120c69e8b743db43a044279","aria-checked":h,"aria-label":a?"":r,role:f,tabIndex:t?-1:0},b.h(n.InteractiveContainer,{key:"ad9f797dba175a65095cb209f0230043ca19247c",disabled:t},b.h("div",{key:"6380f6b0db4dfada44886e8e003d6d973598b252",
class:{[c.CSS.container]:!0,[c.CSS.containerLink]:!!a,[`${c.CSS.container}--${w}`]:!0,[c.CSS.containerMulti]:"multiple"===d,[c.CSS.containerSingle]:"single"===d,[c.CSS.containerNone]:"none"===d}},"none"!==d?b.h("calcite-icon",{class:c.CSS.icon,icon:"multiple"===d?"check":"bullet-point",scale:m.getIconScale(this.scale)}):null,e)))}onClick(){this.emitRequestedItem()}keyDownHandler(a){switch(a.key){case " ":case "Enter":this.emitRequestedItem();this.href&&this.childLink.click();a.preventDefault();break;
case "Escape":this.calciteInternalDropdownCloseRequest.emit();a.preventDefault();break;case "Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:a});break;case "ArrowUp":case "ArrowDown":case "Home":case "End":a.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:a})}}updateActiveItemOnChange(a){a.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=a.detail.requestedDropdownGroup,this.requestedDropdownItem=a.detail.requestedDropdownItem,
this.determineActiveItem());a.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group");"none"===this.selectionMode&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case "multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case "single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case "none":this.selected=!1}}emitRequestedItem(){this.calciteDropdownItemSelect.emit();
this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.container--s{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}.container--s.container--none-selection{padding-inline-start:0.25rem}.container--s.container--none-selection .dropdown-link{padding-inline-start:0px}.container--m.container--none-selection{padding-inline-start:0.5rem}.container--m.container--none-selection .dropdown-link{padding-inline-start:0px}.container--l.container--none-selection{padding-inline-start:0.75rem}.container--l.container--none-selection .dropdown-link{padding-inline-start:0px}:host{position:relative;display:flex;flex-grow:1;align-items:center}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem;padding-inline-end:auto;padding-inline-start:0.25rem}:host,.container--link a{outline-color:transparent}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.container--link{padding:0px}.container--link a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.container--s .dropdown-link{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m .dropdown-link{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l .dropdown-link{padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .container--link .dropdown-link,:host(:active:not([disabled])) .container--link .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none}:host([selected]) .container:not(.container--none-selection),:host([selected]) .container--link .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .container--link .dropdown-link calcite-icon{color:var(--calcite-color-brand)}.dropdown-item-icon{position:absolute;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}.container--s .dropdown-item-icon{inset-inline-start:0.25rem}.container--m .dropdown-item-icon{inset-inline-start:0.5rem}.container--l .dropdown-item-icon{inset-inline-start:0.75rem}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}.container--s .dropdown-item-icon-start{margin-inline-end:0.5rem;margin-inline-start:0.25rem}.container--s .dropdown-item-icon-end{margin-inline-start:0.5rem}.container--m .dropdown-item-icon-start{margin-inline-end:0.75rem;margin-inline-start:0.25rem}.container--m .dropdown-item-icon-end{margin-inline-start:0.75rem}.container--l .dropdown-item-icon-start{margin-inline-end:1rem;margin-inline-start:0.25rem}.container--l .dropdown-item-icon-end{margin-inline-start:1rem}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}"}},
[1,"calcite-dropdown-item",{disabled:[516],href:[513],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],label:[1],rel:[513],selected:[1540],target:[513],selectionMode:[1,"selection-mode"],scale:[1],setFocus:[64]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"],[16,"calciteInternalDropdownItemChange","updateActiveItemOnChange"]]]);p();k.CalciteDropdownItem=q;k.defineCustomElement=p;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});