/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{p as e,H as t,c as s,h as o,a as i}from"../widgets/Widget.js";import{f as c,g as a,t as r}from"./dom.js";import{i as n}from"./key.js";import{c as l,d}from"./locale2.js";import{u as m,c as p,s as g,d as h}from"./t9n.js";import{c as u,s as f,a as b}from"./loadable.js";import{d as j}from"./icon.js";import{d as v}from"./label.js";import{d as w}from"./switch.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./guid.js";import"./observers.js";import"./label2.js";import"./component.js";import"./form.js";import"./interactive.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const k="content",x="toggle",y="invalid",S="section-header",_="status-icon",C="toggle",L="toggle--switch",D="toggle--switch-container",E="valid",O={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},U=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockSectionToggle=s(this,"calciteBlockSectionToggle",6),this.handleHeaderKeyDown=e=>{n(e.key)&&(this.toggleSection(),e.preventDefault(),e.stopPropagation())},this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()},this.open=!1,this.status=void 0,this.text=void 0,this.toggleDisplay="button",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}async setFocus(){await u(this),c(this.el)}effectiveLocaleChange(){m(this,this.effectiveLocale)}connectedCallback(){l(this),p(this)}async componentWillLoad(){await g(this),f(this)}componentDidLoad(){b(this)}disconnectedCallback(){d(this),h(this)}renderStatusIcon(){const{status:e}=this,t=O[e]??!1;return t?o("calcite-icon",{class:{[_]:!0,[E]:"valid"==e,[y]:"invalid"==e},icon:t,scale:"s"}):null}render(){const{el:e,messages:t,open:s,text:c,toggleDisplay:n}=this,l=a(e),d=s?O.menuOpen:"rtl"===l?O.menuClosedLeft:O.menuClosedRight,m=s?t.collapse:t.expand,p="switch"===n?o("div",{class:{[D]:!0}},o("div",{"aria-controls":k,"aria-expanded":r(s),class:{[C]:!0,[L]:!0},id:x,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,role:"button",tabIndex:0,title:m},o("div",{class:"toggle--switch__content"},o("span",{class:"toggle--switch__text"},c)),this.renderStatusIcon()),o("calcite-label",{class:"focus-guard",layout:"inline",tabIndex:-1},o("calcite-switch",{checked:s,label:m,scale:"s"}))):o("button",{"aria-controls":k,"aria-expanded":r(s),class:{[S]:!0,[C]:!0},id:x,onClick:this.toggleSection},o("calcite-icon",{icon:d,scale:"s"}),o("span",{class:"section-header__text"},c),this.renderStatusIcon());return o(i,{key:"76e223811594d99984f6e110e430725030574d83"},p,o("section",{key:"336e2701112e69eefb0461fbb8052d70a73b16fb","aria-labelledby":x,class:"content",hidden:!s,id:k},o("slot",{key:"3bd4125a763c91c22065162c5d5a1e2ee8d2f931"})))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;display:block;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-color-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-color-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-font-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.toggle--switch:hover,.section-header:hover{color:var(--calcite-color-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch-container{position:relative;display:flex;inline-size:100%;align-items:center;background-color:transparent;word-break:break-word}.toggle--switch-container .focus-guard{--calcite-label-margin-bottom:0;pointer-events:none;position:absolute;inset-inline-end:0;margin-inline-start:0.25rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}:host([toggle-display=switch]) .toggle .toggle--switch__content{margin-inline-end:1.75rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-block-section",{open:[1540],status:[513],text:[1],toggleDisplay:[513,"toggle-display"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function z(){"undefined"!=typeof customElements&&["calcite-block-section","calcite-icon","calcite-label","calcite-switch"].forEach((e=>{switch(e){case"calcite-block-section":customElements.get(e)||customElements.define(e,U);break;case"calcite-icon":customElements.get(e)||j();break;case"calcite-label":customElements.get(e)||v();break;case"calcite-switch":customElements.get(e)||w()}}))}z();const M=U,I=z;export{M as CalciteBlockSection,I as defineCustomElement};
