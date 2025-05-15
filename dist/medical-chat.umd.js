!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).MedicalChatWidget={})}(this,(function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",p=c.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:g},v="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||y}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=y){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var f;m[v]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const x=window,b=x.trustedTypes,$=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,w="?"+A,E=`<${w}>`,S=document,T=()=>S.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,M="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,z=/>/g,U=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,j=/"/g,R=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),P=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),L=new WeakMap,Y=S.createTreeWalker(S,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===N?"!--"===l[1]?r=O:void 0!==l[1]?r=z:void 0!==l[2]?(R.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=null!=o?o:N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?U:'"'===l[3]?j:I):r===j||r===I?r=U:r===O||r===z?r=N:(r=U,o=void 0);const h=r===U&&t[e+1].startsWith("/>")?" ":"";n+=r===N?i+E:c>=0?(s.push(a),i.slice(0,c)+_+i.slice(c)+A+h):i+A+(-2===c?(s.push(void 0),e):h)}return[B(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,c]=W(t,e);if(this.el=V.createElement(l,i),Y.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Y.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(_)||e.startsWith(A)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+_).split(A),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?G:"@"===e[1]?X:q})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(R.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),Y.nextNode(),a.push({type:2,index:++o});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)a.push({type:7,index:o}),t+=A.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){var o,n,r,a;if(e===P)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=J(t,l._$AS(t,e.values),l,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);Y.currentNode=o;let n=Y.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new K(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new tt(n,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=Y.nextNode(),r++)}return Y.currentNode=S,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var o;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),C(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==P&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==D&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(B(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new Z(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new V(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new K(this.k(T()),this.k(T()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,s,o){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=J(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=J(this,s[i+r],e,r),a===P&&(a=this._$AH[r]),n||(n=!C(a)||a!==this._$AH[r]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}const Q=b?b.emptyScript:"";class G extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==D?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class X extends q{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=J(this,t,e,0))&&void 0!==i?i:D)===P)return;const s=this._$AH,o=t===D&&s!==D||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==D&&(s===D||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const et=x.litHtmlPolyfillSupport;null==et||et(V,K),(null!==(f=x.litHtmlVersions)&&void 0!==f?f:x.litHtmlVersions=[]).push("2.8.0");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var it,st;class ot extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new K(e.insertBefore(T(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return P}}ot.finalized=!0,ot._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:ot});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:ot}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");class rt extends ot{constructor(){super(...arguments),this.open=!1}render(){const t=this.open?"":"logo";return H`
      <button class=${t} @click=${this._toggle}>
        ${this.open?H`<span class="close-icon">✕</span>`:H`<img
              class="icon"
              src="/public/assets/logo_window.png"
              alt="Logo"
            />`}
      </button>
    `}_toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent("toggle",{detail:{open:this.open}})),this.requestUpdate()}}function at(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}function lt(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}rt.styles=r`
    button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border: none;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    button:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    /* Cuando esté mostrando el logo, usamos fondo transparente */
    button.logo {
      background-color: transparent;
      box-shadow: none; /* opcional: quita sombra si quieres */
    }

    .icon {
      width: 60px;
      height: 60px;
    }
    .close-icon {
      font-size: 28px;
      line-height: 1;
    }
  `,customElements.define("widget-toggle",rt),"function"==typeof SuppressedError&&SuppressedError;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ct=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function dt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ct(t,e)
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */}var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;class pt extends ot{constructor(){super(...arguments),this.tabs=[],this.active=""}render(){return H`
      <div class="tabs">
        ${this.tabs.map((t=>H`
            <div
              class="tab ${t.id===this.active?"active":""}"
              @click=${()=>this._select(t.id)}
            >
              <span class="icon"> ${this._getIcon(t.id)} </span>
              ${t.label}
              ${t.isNew?H`<span class="new-tag">Nuevo</span>`:""}
            </div>
          `))}
      </div>
    `}_getIcon(t){switch(t){case"Consulta clínica":return"👨‍⚕️";case"Diagnóstico diferencial":return"🔍";case"Medicamentos":return"💊";default:return""}}_select(t){this.dispatchEvent(new CustomEvent("change",{detail:t}))}}pt.styles=r`
    .tabs {
      display: flex;
      background-color: white;
      padding: 0 20px;
      border-bottom: 1px solid #eaeaea;
    }

    .tab {
      flex: 1;
      text-align: center;
      padding: 12px 8px;
      cursor: pointer;
      color: var(--light-text);
      font-size: 14px;
      font-weight: 500;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .tab:hover {
      color: var(--primary-color);
    }

    .active {
      color: var(--primary-color);
    }

    .active::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--primary-color);
      border-radius: 3px 3px 0 0;
    }

    .icon {
      margin-right: 6px;
      font-size: 16px;
    }

    .new-tag {
      background-color: #ffc107;
      color: #333;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 10px;
      margin-left: 5px;
      font-weight: bold;
      text-transform: uppercase;
    }
  `,at([dt({type:Array}),lt("design:type",Array)],pt.prototype,"tabs",void 0),at([dt({type:String}),lt("design:type",Object)],pt.prototype,"active",void 0),customElements.define("tab-menu",pt);const ut=[{key:"interaccion",title:"Interacción farmacológica",desc:"Consulta interacciones entre medicamentos y posibles contraindicaciones",icon:"🔄"},{key:"adversos",title:"Efectos adversos",desc:"Consulta efectos secundarios y reacciones adversas de medicamentos",icon:"⚠️"},{key:"patologia",title:"Buscar por patología",desc:"Consulta medicamentos recomendados para una patología específica",icon:"🔍"}];class gt extends ot{render(){return H`
      <div class="grid">
        ${ut.map((t=>H`
            <div class="card" @click=${()=>this._select(t.key)}>
              <div class="icon-container">${t.icon}</div>
              <div class="content">
                <h4>${t.title}</h4>
                <p>${t.desc}</p>
              </div>
            </div>
          `))}
      </div>
    `}_select(t){this.dispatchEvent(new CustomEvent("select",{detail:t}))}}async function yt(t){return(await fetch("http://localhost:3000/zentis/clinical",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"eyJraWQiOiJYOEhDN3lCaEtPVGNzNGdIRXl3OVljcDRkUVFHTDEwbWplY0J6b1wvVzlHND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkNDA4ODQ4OC1hMDQxLTcwMTEtYjAxYS03Mzk3Mzk5NGMxMTEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9uNHYzcXZTaXQiLCJjbGllbnRfaWQiOiIyMHFsNDk5dTllZnM1bmdxZzFsMXJxb28yOCIsIm9yaWdpbl9qdGkiOiI3MmExMDkxMi1jZDI3LTQ5NTctOTYzMS01NDUyMWE3YWQwMTAiLCJldmVudF9pZCI6IjAxMmUyMDUwLTIxNDYtNGYyZi04NTQ3LTVmYmIxNWQ4ZDlmMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3NDczNDU1OTUsImV4cCI6MTc0NzM0OTE5NSwiaWF0IjoxNzQ3MzQ1NTk1LCJqdGkiOiIzNGI2ZTdiZS05NmE0LTQyMTMtYTI4YS04NDJiOGRhYmE3MDYiLCJ1c2VybmFtZSI6ImQ0MDg4NDg4LWEwNDEtNzAxMS1iMDFhLTczOTczOTk0YzExMSJ9.nMLYatMiO5Rj0JKFjHWeyrFZ7s8Yeht5Lap-EW-9YrJF83ASIDzK3iPohXjfm3Ke_F2XKYGPvMT3B4GZknB-nH8Vr5jC5-CS1uZn03FEMPeciqNbSoAiQtruYN5FN6HCKNjjn9_08aY5a_Y8l4mtgw5u49KRaH4Q7U2IWWUxibE7-yql_zwPmT299s7YSPyS8JyFhZxmC9oL323TJB9AmmPOfnXJlBQgTX-0pmBEAnRoKMZ04j6H4kQm-05clp0BksIoMFhpC9cBclWGD_5Z8XIE6Bu1IKZi6Kd0pM_5w_MdddVn_Q6c1Wc4MSWAI2KNFm9vo82phVGGkzRe8YR5yQ"},body:JSON.stringify({reason:t.message})})).json()}gt.styles=r`
    .grid {
      display: grid;
      gap: 16px;
      margin-top: 16px;
    }

    .card {
      background-color: white;
      border-radius: 12px;
      padding: 16px;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: all 0.2s ease;
      display: flex;
      align-items: flex-start;
      border: 1px solid #eaeaea;
    }

    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-color: var(--primary-color);
    }

    .icon-container {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background-color: var(--secondary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      font-size: 20px;
    }

    .content {
      flex: 1;
    }

    h4 {
      margin: 0 0 6px;
      color: var(--text-color);
      font-size: 16px;
      font-weight: 600;
    }

    p {
      margin: 0;
      font-size: 13px;
      color: var(--light-text);
      line-height: 1.4;
    }
  `,customElements.define("cards-grid",gt);class vt extends ot{constructor(){super(...arguments),this.history=[],this.apiKey="",this.consultType="Consulta clínica",this.isTyping=!1}firstUpdated(){setTimeout((()=>{this.history=[{from:"bot",text:"Hola, soy Zentis, tu asistente médico. ¿En qué puedo ayudarte hoy?"}]}),500)}render(){return H`
      <div class="chat-container">
        ${0===this.history.length?H`
              <div class="empty-state">
                <div class="empty-icon">💬</div>
                <div class="empty-title">Inicia una consulta</div>
                <div class="empty-desc">
                  Escribe tu pregunta médica y te responderé al instante
                </div>
              </div>
            `:H`
              <div class="messages">
                ${this.history.map((t=>H` <div class="message ${t.from}">${t.text}</div> `))}
                ${this.isTyping?H`
                      <div class="typing-indicator">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                      </div>
                    `:""}
              </div>
            `}

        <div class="input-container">
          <input
            type="text"
            @keydown=${this._onKey}
            placeholder="Escribe tu consulta médica..."
          />
          <div class="send-button" @click=${this._send}>➤</div>
        </div>
      </div>
    `}setConsultType(t){let e="";switch(t){case"interaccion":e="Quiero consultar sobre interacciones farmacológicas";break;case"adversos":e="Necesito información sobre efectos adversos de medicamentos";break;case"patologia":e="Busco medicamentos recomendados para una patología";break;default:return}this._sendMessageText(e)}_onKey(t){"Enter"===t.key&&this._send()}_scrollToBottom(){setTimeout((()=>{const t=this.shadowRoot.querySelector(".messages");t&&(t.scrollTop=t.scrollHeight)}),50)}async _send(){const t=this.shadowRoot.querySelector("input"),e=t.value.trim();if(!e)return;let i;this.history=[...this.history,{from:"user",text:e}],t.value="",this.requestUpdate(),this._scrollToBottom(),this.isTyping=!0,this.requestUpdate();try{const t={type:this.consultType.toLowerCase(),message:e};i=(await yt(t)).output??"Lo siento, no hubo respuesta."}catch{i="Lo siento, ocurrió un error al procesar tu consulta."}this.isTyping=!1,this.history=[...this.history,{from:"bot",text:i}],this.requestUpdate(),this._scrollToBottom()}async _sendMessageText(t){this.history=[...this.history,{from:"user",text:t}],this.isTyping=!0,this.requestUpdate(),setTimeout((()=>{const t=this.shadowRoot.querySelector(".messages");t&&(t.scrollTop=t.scrollHeight)}),100);try{const e={type:this.consultType.toLowerCase(),message:t};setTimeout((async()=>{let t;try{t=await yt(e)}catch{t={output:"Lo siento, ha ocurrido un error. Intenta de nuevo."}}const i=t.output??"Lo siento, no hubo respuesta.";this.isTyping=!1,this.history=[...this.history,{from:"bot",text:i}],setTimeout((()=>{const t=this.shadowRoot.querySelector(".messages");t&&(t.scrollTop=t.scrollHeight)}),100)}),1500)}catch{this.isTyping=!1,this.history=[...this.history,{from:"bot",text:"Lo siento, ha ocurrido un error procesando tu consulta."}]}}}vt.styles=r`
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .message {
      max-width: 85%;
      padding: 12px 16px;
      border-radius: 18px;
      font-size: 14px;
      line-height: 1.4;
      position: relative;
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .user {
      align-self: flex-end;
      background-color: var(--primary-color);
      color: white;
      border-bottom-right-radius: 4px;
    }

    .bot {
      align-self: flex-start;
      background-color: white;
      color: var(--text-color);
      border-bottom-left-radius: 4px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

    .input-container {
      margin-top: 10px;
      position: relative;
      background-color: white;
      border-radius: 24px;
      padding: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
    }

    input {
      flex: 1;
      padding: 12px 16px;
      border: none;
      border-radius: 24px;
      font-size: 14px;
      outline: none;
      color: var(--text-color);
    }

    .send-button {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-right: 4px;
      transition: all 0.2s ease;
    }

    .send-button:hover {
      transform: scale(1.05);
    }

    .typing-indicator {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px 16px;
      background-color: white;
      border-radius: 18px;
      align-self: flex-start;
      margin-top: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

    .typing-dot {
      width: 8px;
      height: 8px;
      background-color: var(--light-text);
      border-radius: 50%;
      animation: typingAnimation 1.4s infinite ease-in-out;
    }

    .typing-dot:nth-child(1) {
      animation-delay: 0s;
    }
    .typing-dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    .typing-dot:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes typingAnimation {
      0%,
      60%,
      100% {
        transform: translateY(0);
      }
      30% {
        transform: translateY(-5px);
      }
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--light-text);
      text-align: center;
      padding: 20px;
    }

    .empty-icon {
      font-size: 48px;
      margin-bottom: 16px;
      color: var(--primary-color);
      opacity: 0.7;
    }

    .empty-title {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 8px;
      color: var(--text-color);
    }

    .empty-desc {
      font-size: 14px;
      max-width: 240px;
      line-height: 1.4;
    }
  `,at([dt({type:Array}),lt("design:type",Array)],vt.prototype,"history",void 0),at([dt({type:String}),lt("design:type",Object)],vt.prototype,"apiKey",void 0),at([dt({type:String}),lt("design:type",Object)],vt.prototype,"consultType",void 0),at([dt({type:Boolean}),lt("design:type",Object)],vt.prototype,"isTyping",void 0),customElements.define("chat-window",vt);class mt extends ot{constructor(){super(...arguments),this.open=!1,this.apiKey="",this.doctorData=null,this.currentTab="Consulta clínica"}render(){return H`
      <header>
        <div class="logo-container">
          <div class="logo">Z</div>
          <span class="title">Zentis</span>
        </div>
      </header>

      <main>
        <div class="greeting">
          <h2>Hola ${this.doctorData?.name||"Doctor"}</h2>
          <p>¿En qué puedo asistirte hoy?</p>
        </div>

        <tab-menu
          .tabs=${[{id:"Consulta clínica",label:"Consulta clínica"},{id:"Diagnóstico diferencial",label:"Diagnóstico diferencial"},{id:"Medicamentos",label:"Medicamentos",isNew:!0}]}
          .active=${this.currentTab}
          @change=${this._onTab}
        ></tab-menu>

        <div class="content">
          ${"Medicamentos"===this.currentTab?H`<cards-grid @select=${this._onSelect}></cards-grid>`:H`<chat-window
                .apiKey=${this.apiKey}
                .consultType=${this.currentTab}
              ></chat-window>`}
        </div>
      </main>
    `}_onTab(t){this.currentTab=t.detail}_onSelect(t){this.currentTab="Consulta clínica";const e=this.shadowRoot?.querySelector("chat-window");e&&e.setConsultType(t.detail)}}mt.styles=r`
    :host {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: var(--panel-width);
      height: var(--panel-height);
      background: white;
      border-radius: var(--border-radius);
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
      display: none;
      flex-direction: column;
      overflow: hidden;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, sans-serif;
      border: 1px solid #eaeaea;
      z-index: 9998;
      transition: all 0.3s ease;
    }

    :host([open]) {
      display: flex;
      animation: slideIn 0.3s forwards;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    header {
      padding: 16px 20px;
      background-color: white;
      border-bottom: 1px solid #eaeaea;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }

    .title {
      font-weight: 600;
      font-size: 18px;
      color: var(--text-color);
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: var(--secondary-color);
      overflow: hidden;
    }

    .greeting {
      padding: 20px;
      text-align: center;
    }

    .greeting h2 {
      margin: 0;
      color: var(--primary-color);
      font-size: 20px;
      font-weight: 600;
    }

    .greeting p {
      margin: 8px 0 0;
      color: var(--light-text);
      font-size: 16px;
    }

    .content {
      flex: 1;
      padding: 0 20px 20px;
      overflow-y: auto;
    }

    .new-tag {
      background-color: #ffc107;
      color: #333;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 10px;
      margin-left: 5px;
      font-weight: bold;
      text-transform: uppercase;
    }
  `,at([dt({type:Boolean,reflect:!0}),lt("design:type",Object)],mt.prototype,"open",void 0),at([dt({type:String}),lt("design:type",Object)],mt.prototype,"apiKey",void 0),at([dt({type:Object}),lt("design:type",Object)],mt.prototype,"doctorData",void 0),at([dt({type:String}),lt("design:type",Object)],mt.prototype,"currentTab",void 0),customElements.define("widget-panel",mt);class ft extends ot{constructor(){super(...arguments),this.apiKey="",this.doctorData=null}connectedCallback(){super.connectedCallback(),this.hasAttribute("api-key")&&(this.apiKey=this.getAttribute("api-key")),this.hasAttribute("doctor-data")&&(this.doctorData=JSON.parse(this.getAttribute("doctor-data")))}render(){return H`
      <widget-toggle @toggle=${this._onToggle}></widget-toggle>
      <widget-panel
        .apiKey=${this.apiKey}
        .doctorData=${this.doctorData}
      ></widget-panel>
    `}_onToggle(t){this.shadowRoot.querySelector("widget-panel").open=t.detail.open}}ft.styles=r`
    :host { all: initial; }
  `,customElements.define("medical-chat",ft),t.MedicalChatWidget=ft}));
//# sourceMappingURL=medical-chat.umd.js.map
