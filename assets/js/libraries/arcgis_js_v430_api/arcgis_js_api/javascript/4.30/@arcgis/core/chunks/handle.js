/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
import{p as e,H as t,c as a,h as s}from"../widgets/Widget.js";import{t as i}from"./dom.js";import{s as l,a as n,c as d}from"./loadable.js";import{c,d as o}from"./locale2.js";import{c as r,s as h,d as g,u}from"./t9n.js";import{c as b,u as f,d as m}from"./interactive.js";import{d as p}from"./icon.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.5
 */const v="handle",C="handle--selected",x="{itemLabel}",y=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleChange=a(this,"calciteHandleChange",6),this.calciteHandleNudge=a(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=a(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=e=>{if(!this.disabled)switch(e.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),e.preventDefault();break;case"ArrowUp":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"})}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){b(this),r(this),c(this)}async componentWillLoad(){l(this),await h(this)}componentDidLoad(){n(this)}componentDidRender(){f(this)}disconnectedCallback(){m(this),g(this),o(this)}effectiveLocaleChange(){u(this,this.effectiveLocale)}async setFocus(){await d(this),this.handleButton?.focus()}getTooltip(){const{label:e,messages:t}=this;return t?e?t.dragHandle.replace(x,e):t.dragHandleUntitled:""}getAriaText(e){const{setPosition:t,setSize:a,label:s,messages:i,selected:l}=this;return i&&s&&"number"==typeof a&&"number"==typeof t?("label"===e?l?i.dragHandleChange:i.dragHandleIdle:l?i.dragHandleActive:i.dragHandleCommit).replace("{position}",t.toString()).replace(x,s).replace("{total}",a.toString()):null}render(){return s("span",{key:"985ea19917a01e2fc366466d13909b297afa4b19","aria-checked":this.disabled?null:i(this.selected),"aria-disabled":this.disabled?i(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),class:{[v]:!0,[C]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"radio",tabIndex:this.disabled?null:0,title:this.getTooltip(),ref:e=>{this.handleButton=e}},s("calcite-icon",{key:"d904676f59997c1a673979adf1b58af369883eb3",icon:"drag",scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:not([disabled])) .handle--selected{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-handle",{selected:[1540],disabled:[516],dragHandle:[513,"drag-handle"],messages:[16],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],blurUnselectDisabled:[4,"blur-unselect-disabled"],messageOverrides:[16],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function A(){"undefined"!=typeof customElements&&["calcite-handle","calcite-icon"].forEach((e=>{switch(e){case"calcite-handle":customElements.get(e)||customElements.define(e,y);break;case"calcite-icon":customElements.get(e)||p()}}))}A();export{A as d};
