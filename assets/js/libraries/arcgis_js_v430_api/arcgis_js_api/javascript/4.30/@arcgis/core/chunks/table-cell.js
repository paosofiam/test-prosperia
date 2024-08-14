/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{p as e,H as t,h as l,C as s,a as i}from"../widgets/Widget.js";import{s as o,a as n,c as a}from"./loadable.js";import{u as c,s as r,c as d,d as h}from"./t9n.js";import{c as p,u as b,d as f,I as m}from"./interactive.js";import{c as u,d as g}from"./locale2.js";import{g as v}from"./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const w="content-cell",C="number-cell",x="footer-cell",S="selection-cell",R="selected-cell",T="last-cell",y="static-cell",k=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.updateScreenReaderContentsText=()=>{this.contentsText=this.el.textContent},this.onContainerBlur=()=>{this.focused=!1},this.onContainerFocus=()=>{this.focused=!0},this.alignment="start",this.colSpan=void 0,this.rowSpan=void 0,this.disabled=void 0,this.interactionMode="interactive",this.lastCell=void 0,this.numberCell=void 0,this.parentRowIsSelected=void 0,this.parentRowAlignment="start",this.parentRowPositionLocalized=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.readCellContentsToAT=void 0,this.scale="m",this.selectionCell=void 0,this.messages=void 0,this.messageOverrides=void 0,this.contentsText="",this.defaultMessages=void 0,this.focused=!1,this.selectionText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderSelectionText()}onMessagesChange(){}effectiveLocaleChange(){c(this,this.effectiveLocale)}async componentWillLoad(){o(this),await r(this),this.updateScreenReaderContentsText(),this.updateScreenReaderSelectionText()}componentDidLoad(){n(this)}connectedCallback(){u(this),d(this),p(this)}componentDidRender(){b(this)}disconnectedCallback(){g(this),h(this),f(this)}async setFocus(){await a(this),this.containerEl.focus()}updateScreenReaderSelectionText(){const e=`${this.messages?.row} ${this.parentRowPositionLocalized} ${this.messages?.selected} ${this.messages?.keyboardDeselect}`,t=`${this.messages?.row} ${this.parentRowPositionLocalized} ${this.messages?.unselected} ${this.messages?.keyboardSelect}`;this.selectionText=this.parentRowIsSelected?e:t}render(){const e=v(this.el),t=this.disabled||"static"===this.interactionMode&&(!this.selectionCell||this.selectionCell&&"foot"===this.parentRowType);return l(i,{key:"2c8bd5fb8909c57b46499b5fe8a525cdc46bb3c6"},l(m,{key:"1a7e4d12f5304274f9085e0f0db4b12ba41d51ed",disabled:this.disabled},l("td",{key:"9a5868a78f21da3c9c0d6be7ecefd28c5e40e5c5","aria-disabled":this.disabled,class:{[x]:"foot"===this.parentRowType,[w]:!this.numberCell&&!this.selectionCell,[C]:this.numberCell,[S]:this.selectionCell,[R]:this.parentRowIsSelected,[T]:this.lastCell&&(!this.rowSpan||this.colSpan&&!!this.rowSpan),[s.rtl]:"rtl"===e,[y]:t,[this.parentRowAlignment]:"start"===this.parentRowAlignment||"end"===this.parentRowAlignment},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:"interactive"===this.interactionMode?"gridcell":"cell",rowSpan:this.rowSpan,tabIndex:t?-1:0,ref:e=>this.containerEl=e},(this.selectionCell||this.readCellContentsToAT)&&l("span",{key:"09fb148bff0939488862db0f995643ecd96a0e73","aria-hidden":!0,"aria-live":this.focused?"polite":"off",class:"assistive-text"},this.selectionCell&&this.selectionText,this.readCellContentsToAT&&!this.selectionCell&&this.contentsText),l("slot",{key:"0d74a3e77c1655682e59b38054defa9ebfff8714",onSlotchange:this.updateScreenReaderContentsText}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{parentRowIsSelected:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-cell-background:var(--calcite-table-cell-background, transparent);display:contents}:host([alignment=center]) td:not(.selection-cell):not(.number-cell){text-align:center}:host([alignment=end]) td:not(.selection-cell):not(.number-cell){text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}td{white-space:normal;text-align:start;vertical-align:middle;color:var(--calcite-color-text-1);background:var(--calcite-internal-table-cell-background);font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-color-border-3);padding:var(--calcite-internal-table-cell-padding)}td:not(.static-cell){outline-color:transparent}td:not(.static-cell):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}td.start.content-cell{vertical-align:top}td.end.content-cell{vertical-align:bottom}td.last-cell{border-inline-end:0}.number-cell{background-color:var(--calcite-color-foreground-2)}.footer-cell{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);border-block-start:1px solid var(--calcite-color-border-3)}.number-cell,.selection-cell{text-align:center;border-inline-end:1px solid var(--calcite-color-border-3);inline-size:2rem;min-inline-size:2rem}.selection-cell{color:var(--calcite-color-text-3);inset-inline-start:2rem}.selection-cell:not(.footer-cell){cursor:pointer}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-internal-table-cell-background:var(--calcite-color-foreground-current)}.selection-cell.selected-cell{box-shadow:inset 0.25rem 0 0 0 var(--calcite-color-brand);color:var(--calcite-color-brand)}.selection-cell.selected-cell calcite-icon{color:var(--calcite-color-brand)}.calcite--rtl.selection-cell.selected-cell{box-shadow:inset -0.25rem 0 0 0 var(--calcite-color-brand)}.selection-cell{vertical-align:middle}.selection-cell ::slotted(calcite-icon){pointer-events:none;margin-block-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}"}},[1,"calcite-table-cell",{alignment:[513],colSpan:[514,"col-span"],rowSpan:[514,"row-span"],disabled:[4],interactionMode:[1,"interaction-mode"],lastCell:[4,"last-cell"],numberCell:[4,"number-cell"],parentRowIsSelected:[4,"parent-row-is-selected"],parentRowAlignment:[1,"parent-row-alignment"],parentRowPositionLocalized:[1,"parent-row-position-localized"],parentRowType:[1,"parent-row-type"],positionInRow:[2,"position-in-row"],readCellContentsToAT:[4,"read-cell-contents-to-a-t"],scale:[1],selectionCell:[4,"selection-cell"],messages:[1040],messageOverrides:[1040],contentsText:[32],defaultMessages:[32],focused:[32],selectionText:[32],effectiveLocale:[32],setFocus:[64]},void 0,{parentRowIsSelected:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function L(){"undefined"!=typeof customElements&&["calcite-table-cell"].forEach((e=>{"calcite-table-cell"===e&&(customElements.get(e)||customElements.define(e,k))}))}L();export{k as T,L as d};
