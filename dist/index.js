"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var i=Object.prototype.toString.call(e);return"[object RegExp]"===i||"[object Date]"===i||function(e){return e.$$typeof===t}(e)}(e)};var t="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a((i=e,Array.isArray(i)?[]:{}),e,t):e;var i}function r(e,t,r){return e.concat(t).map((function(e){return i(e,r)}))}function s(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function o(e,t){try{return t in e}catch(e){return!1}}function n(e,t,r){var n={};return r.isMergeableObject(e)&&s(e).forEach((function(t){n[t]=i(e[t],r)})),s(t).forEach((function(s){(function(e,t){return o(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,s)||(o(e,s)&&r.isMergeableObject(t[s])?n[s]=function(e,t){if(!t.customMerge)return a;var i=t.customMerge(e);return"function"==typeof i?i:a}(s,r)(e[s],t[s],r):n[s]=i(t[s],r))})),n}function a(t,s,o){(o=o||{}).arrayMerge=o.arrayMerge||r,o.isMergeableObject=o.isMergeableObject||e,o.cloneUnlessOtherwiseSpecified=i;var a=Array.isArray(s);return a===Array.isArray(t)?a?o.arrayMerge(t,s,o):n(t,s,o):i(s,o)}a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,i){return a(e,i,t)}),{})};var p=a;class l{static append(e,...t){for(const i of t)i instanceof Node?e.appendChild(i):e.textContent=i?i.toString():"";return e}static make(e,t,...i){const r=document.createElement(e);if(t){const{className:e=[],dataset:i={},...s}=t;Array.isArray(e)?r.classList.add(...e):e&&r.classList.add(e);const o=s;for(const e in o)Object.prototype.hasOwnProperty.call(o,e)&&(r[e]=o[e]);l.setDateset(r,i)}return l.append(r,...i),r}static setDateset(e,t){for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e.dataset[i]=t[i])}}const c=l.make,d=l.append;function h(e=""){return`${e}${Math.floor(1e8*Math.random()).toString(16)}`}function u(e,t=!1,i=2){const r=t?1e3:1024,s=[t?"KiB":"kB",t?"MiB":"MB",t?"GiB":"GB",t?"TiB":"TB",t?"PiB":"PB",t?"EiB":"EB",t?"ZiB":"ZB",t?"YiB":"YB"];if(!Number.isFinite(e))return[1/0,"B"];if(1===e)return[1,"B"];if(e<r)return[e,"B"];const o=Math.floor(Math.log(e)/Math.log(r));return[parseFloat((e/r**Math.floor(o)).toFixed(i)),s[o-1]]}function f(e,t){let i=e;for(const e of Object.keys(t))i=i.replace(new RegExp(`:${e}`,"g"),t[e]);return i}function g(e,t){!function(e,t){for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)){const r=e[i];let s=t[i]?t[i]:"";s=Array.isArray(s)?s:[s],r.classList.remove(...s)}}(e,t);const{container:i}=e;for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const r=e[t];i!==r&&r.remove()}}function m(e,t,i){if(!i||"function"!=typeof i.value)throw new TypeError(`Only methods can be decorated with @bind. <${t}> is not a method!`);return{configurable:!0,get(){const e=i.value.bind(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e}}}var v,w,y,_;!function(e){e.SUCCESS="success",e.ERROR="error",e.CANCEL="cancel"}(v||(v={})),function(e){e.NOT_READY="notReady",e.WAITING="waiting",e.SELECTED="selected",e.UPLOADING="uploading",e.UPLOADED="uploaded",e.DISABLED="disabled"}(w||(w={})),function(e){e.ADDED="added",e.PREVIEWS="previews",e.QUEUED="queued",e.UPLOADING="uploading",e.SUCCESS="success",e.ERROR="error",e.ERROR_UPLOAD="errorUpload",e.CANCELED="canceled"}(y||(y={})),function(e){e.INIT="init",e.SELECTED="selected",e.UNLOADING="unloading",e.LOADED="loaded",e.ERROR="error",e.UPLOADED="uploaded",e.CANCEL="cancel",e.REPLAY="replay",e.BEFORE_DESTROYED="beforeDestroyed",e.CLEAR="clear",e.DESTROYED="destroyed"}(_||(_={}));class b{constructor(e){this.uploaderApi=e,this._disabled=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=e}destroy(){throw new Error("Method not implemented.")}set accept(e){throw new Error("Not prop accept")}set count(e){throw new Error("Not prop count")}input(){throw new Error("Method not implemented.")}onSeleced(e){this.uploaderApi.createEvent(_.SELECTED,{files:Array.from(e)})}}class E extends b{constructor(e,t,i={}){super(t),this.listeners=[],this.option=p(E.default,i),this.nodes={container:e,wrapper:c("div",{className:[this.css.wrapper]}),control:c("div",{className:[this.css.control]}),button:c("button",{className:[this.css.button],type:"button"},this.option.string.buttonUplaod),input:c("input",{className:[this.css.input],type:"file",accept:Array.isArray(this.option.accept)?this.option.accept.join(", "):this.option.accept,multiple:this.option.count>1})},this.render(),this.listener()}get css(){return{container:"standart-file-manager",wrapper:"standart-file-manager__wrapper",control:"standart-file-manager__control",button:"standart-file-manager__button",input:"standart-file-manager__input",hide:"standart-file-manager--hide"}}listener(){this.addEvent(this.nodes.input,"input",(e=>{const t=e.target;t&&t.files&&this.onSeleced(Array.from(t.files))}))}onSeleced(e){!0!==this.disabled&&super.onSeleced(e)}render(){const{container:e,wrapper:t,input:i,button:r,control:s}=this.nodes;e.classList.add(this.css.container),d(s,i,r),d(t,s),d(e,t)}destroy(){for(const e of this.listeners)this.uploaderApi.listeners.offById(e);g(this.nodes,this.css)}addEvent(e,t,i){this.listeners.push(this.uploaderApi.listeners.on(e,t,i))}removeEvent(e,t,i){const r=this.uploaderApi.listeners.findOne(e,t,i);if(!r)return;const s=this.listeners.findIndex((e=>e===r.id));this.uploaderApi.listeners.offById(r.id),this.listeners=this.listeners.slice(s,1)}set disabled(e){this.nodes.container.classList.toggle(this.css.hide,e),this._disabled=e}set accept(e){this.option.accept=e;this.nodes.input.accept=Array.isArray(this.option.accept)?this.option.accept.join(", "):this.option.accept}set count(e){this.option.count=e;this.nodes.input.multiple=this.option.count>1}input(){!0!==this.disabled&&this.nodes.input.click()}}function x(e,t,i,r){var s,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}function D(e){return e.isFile}function A(e){return new Promise((t=>{D(e)&&e.file((e=>{t(e)}))}))}async function z(e){const t=[],i=[];async function r(e){if(e.isDirectory){const t=e.createReader(),s=await(i=t,new Promise((e=>{i.readEntries((t=>{e(t)}))})));for await(const e of s)await r(e)}else D(e)&&await function(e){return new Promise((i=>{D(e)&&(t.push(e),i())}))}(e);var i}for await(const t of Array.from(e.items))if("file"===t.kind)if("function"==typeof t.webkitGetAsEntry){const e=t.webkitGetAsEntry();await r(e)}else{const e=t.getAsFile();e&&i.push(e)}for await(const e of t){const t=await A(e);i.push(t)}return i}E.default={accept:"*",count:1,string:{buttonUplaod:"Загрузить файл"}};class O extends b{constructor(e,t,i={}){super(t),this.listeners=[],this.option=p(O.default,i),this.nodes={container:e,wrapper:c("div",{className:[this.css.wrapper]}),dragZone:c("div",{className:[this.css.dragZone]}),control:c("div",{className:[this.css.control]}),button:c("button",{className:[this.css.button],type:"button"},this.option.string.buttonUplaod),input:c("input",{className:[this.css.input],type:"file",accept:Array.isArray(this.option.accept)?this.option.accept.join(", "):this.option.accept,multiple:this.option.count>1})},this.render(),this.listener(),this.state=function(e,t){for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&t(e,i,e[i]);return new Proxy(e,{get(e,t){if(t in e)return e[t]},set(i,r,s){let o=!1;return s!==i[r]&&(o=!0),i[r]=s,o&&t(e,r,s),!0}})}({textDropZone:this.option.string.dropzoneDrag},((e,t,i)=>{switch(t){case"textDropZone":this.nodes.dragZone.dataset.text=i}}))}get css(){return{container:"dropzone",wrapper:"dropzone__wrapper",dragZone:"dropzone__dragzone",control:"dropzone__control",button:"dropzone__button",input:"dropzone__input",hide:"dropzone--hide",activeDragzone:"dropzone--active-dragzone",dropDragzone:"dropzone--drop-dragzone"}}listener(){this.addEvent(this.nodes.input,"input",(e=>{const t=e.target;t&&t.files&&this.onSeleced(Array.from(t.files))})),["dragenter","dragover","dragleave","drop"].forEach((e=>{this.addEvent(this.nodes.wrapper,e,this.preventDefaults)})),["dragover","dragenter"].forEach((e=>{this.addEvent(document.body,e,this.bodyDragOverHandler),this.addEvent(this.nodes.dragZone,e,this.dragOverHandler)})),["dragleave","dragend"].forEach((e=>{this.addEvent(document.body,e,this.bodyDragLeaveHandler),this.addEvent(this.nodes.dragZone,e,this.dragLeaveHandler)})),["drop"].forEach((e=>{this.addEvent(this.nodes.dragZone,e,this.dropHandler)})),["paste"].forEach((e=>{this.addEvent(document.body,e,this.pasteHandler)}))}onSeleced(e){!0!==this.disabled&&super.onSeleced(e)}render(){const{container:e,wrapper:t,dragZone:i,input:r,button:s,control:o}=this.nodes;e.classList.add(this.css.container),d(o,r,s),d(t,i,o),d(e,t)}destroy(){for(const e of this.listeners)this.uploaderApi.listeners.offById(e);g(this.nodes,this.css)}addEvent(e,t,i){this.listeners.push(this.uploaderApi.listeners.on(e,t,i))}removeEvent(e,t,i){const r=this.uploaderApi.listeners.findOne(e,t,i);if(!r)return;const s=this.listeners.findIndex((e=>e===r.id));this.uploaderApi.listeners.offById(r.id),this.listeners=this.listeners.slice(s,1)}set disabled(e){this.nodes.container.classList.toggle(this.css.hide,e),this._disabled=e}set accept(e){this.option.accept=e;this.nodes.input.accept=Array.isArray(this.option.accept)?this.option.accept.join(", "):this.option.accept}set count(e){this.option.count=e;this.nodes.input.multiple=this.option.count>1}input(){!0!==this.disabled&&this.nodes.input.click()}preventDefaults(e){e.preventDefault()}bodyDragOverHandler(e){this.toogleDropzone(!0)}bodyDragLeaveHandler(e){const t=e.relatedTarget;document.body.contains(t)||this.toogleDropzone(!1)}dragOverHandler(){this.toogleDropDropzone()}dragLeaveHandler(e){const t=e.relatedTarget;this.nodes.dragZone.contains(t)||this.toogleDropDropzone(!1)}async dropHandler(e){this.toogleDropzone(!1),this.toogleDropDropzone(!1);const t=[];for(const i of await z(e.dataTransfer))t.push(i);this.onSeleced(t)}async pasteHandler(e){e.preventDefault();const t=[];for(const i of await z(e.clipboardData))t.push(i);this.onSeleced(t)}toogleDropzone(e=!0){this.state.textDropZone=this.option.string.dropzoneDrop,this.nodes.container.classList.toggle(this.css.activeDragzone,e)}toogleDropDropzone(e=!0){this.state.textDropZone=e?this.option.string.dropzoneDrop:this.option.string.dropzoneDrag,this.nodes.container.classList.toggle(this.css.dropDragzone,e)}}O.default={accept:"*",count:1,string:{buttonUplaod:"Загрузить файл",dropzoneDrag:"Перетащите файл сюда или загрузите вручную",dropzoneDrop:"Отпустите кнопку мыши, чтобы прикрепить файл/лы"}},x([m],O.prototype,"bodyDragOverHandler",null),x([m],O.prototype,"bodyDragLeaveHandler",null),x([m],O.prototype,"dragOverHandler",null),x([m],O.prototype,"dragLeaveHandler",null),x([m],O.prototype,"dropHandler",null),x([m],O.prototype,"pasteHandler",null),x([m],O.prototype,"toogleDropzone",null),x([m],O.prototype,"toogleDropDropzone",null);!function(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}(".uploader{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;border-radius:3px;background-color:#fff;border:1px solid rgba(34,34,34,.1);padding:20px;margin:20px auto;max-width:800px}.uploader .uploader__preview{display:grid;grid-template-columns:repeat(1,1fr);gap:15px;margin-top:0}.uploader .uploader__preview:empty{display:none}.uploader .uploader__preview:not(:empty)+.uploader__file-manager{margin-top:20px}.dropzone{box-sizing:border-box;position:relative}.dropzone .dropzone__wrapper{display:block}.dropzone .dropzone__wrapper .dropzone__control{cursor:pointer}.dropzone .dropzone__wrapper .dropzone__control .dropzone__input{position:absolute;width:100%;height:100%;opacity:0;cursor:pointer}.dropzone .dropzone__wrapper .dropzone__control .dropzone__button{padding:13px 18px;border-radius:3px;font-size:16px;display:block;width:100%;color:rgba(34,34,34,.6);text-align:center;background-color:rgba(22,122,244,.2);border:1px solid rgba(22,122,244,.05);box-shadow:0 2px 2px 0 rgba(18,30,57,.1)}.dropzone .dropzone__wrapper .dropzone__control:hover .dropzone__button{background-color:rgba(22,122,244,.25);box-shadow:0 2px 2px 0 rgba(18,30,57,.2)}.dropzone .dropzone__wrapper .dropzone__dragzone{display:none;height:150px;background-color:rgba(22,122,244,.03);border:3px dashed rgba(22,122,244,.1);border-radius:3px;position:relative;justify-content:center;align-items:center}.dropzone .dropzone__wrapper .dropzone__dragzone:after{content:attr(data-text);font-weight:700;color:rgba(22,122,244,.5)}.dropzone.dropzone--active-dragzone .dropzone__control,.dropzone.dropzone--hide{display:none}.dropzone.dropzone--active-dragzone .dropzone__dragzone{display:flex;height:250px;width:100%;z-index:5;top:0}.dropzone.dropzone--drop-dragzone .dropzone__dragzone{background-color:rgba(22,122,244,.1);border-color:rgba(22,122,244,.2);border-style:solid}.standart-file-manager{box-sizing:border-box;position:relative}.standart-file-manager .standart-file-manager__wrapper{display:block}.standart-file-manager .standart-file-manager__wrapper .standart-file-manager__control{cursor:pointer}.standart-file-manager .standart-file-manager__wrapper .standart-file-manager__control .standart-file-manager__input{position:absolute;width:100%;height:100%;opacity:0;cursor:pointer}.standart-file-manager .standart-file-manager__wrapper .standart-file-manager__control .standart-file-manager__button{padding:13px 18px;border-radius:3px;font-size:16px;display:block;width:100%;color:rgba(34,34,34,.6);text-align:center;background-color:rgba(22,122,244,.2);border:1px solid rgba(22,122,244,.05);box-shadow:0 2px 2px 0 rgba(18,30,57,.1)}.standart-file-manager .standart-file-manager__wrapper .standart-file-manager__control:hover .standart-file-manager__button{background-color:rgba(22,122,244,.25);box-shadow:0 2px 2px 0 rgba(18,30,57,.2)}.standart-file-manager.standart-file-manager--hide{display:none}.preview-item{width:100%;border-radius:3px;background:#f1f1f1;overflow:hidden;display:flex;flex-direction:column;opacity:0;position:relative;transition:opacity .2s ease-in-out}.preview-item.preview-item--show{opacity:1}.preview-item .preview-item__information{display:grid;grid-template-columns:auto 2fr auto auto;align-items:center;justify-content:space-between;padding:0}.preview-item .preview-item__information .preview-item__title{font-size:18px;line-height:20px;overflow:hidden;padding:15px 0}.preview-item .preview-item__information .preview-item__size{font-size:14px;font-weight:700;text-align:right}.preview-item .preview-item__information .preview-item__type{margin-right:15px;min-width:70px;padding-left:6px}.preview-item .preview-item__information .preview-item__type span{display:inline-flex;font-size:12px;text-align:center;padding:5px 15px;background:#167af4;color:#fff;border-radius:5px;text-transform:uppercase}.preview-item .preview-item__actions{height:50px;right:0;top:0;display:flex;padding:6px;background:#f1f1f1;transition:all .2s ease-in}.preview-item .preview-item__actions .preview-item-action{border:none;outline:none;display:block;width:36px;height:36px;padding:0;display:none;border-radius:3px;background-color:#fff;cursor:pointer}.preview-item .preview-item__actions .preview-item-action svg{width:15px}.preview-item .preview-item__actions .preview-item-action:hover{box-shadow:0 0 1px 1px rgba(34,34,34,.1)}.preview-item .preview-item__actions .preview-item-action-cancel{color:#d39e00}.preview-item .preview-item__actions .preview-item-action-replay{color:#41b883}.preview-item .preview-item__actions .preview-item-action+.preview-item-action{margin-left:6px}.preview-item .preview-item__error{padding:0 10px 10px;color:#ff6a6a;font-size:14px}.preview-item .preview-item__error:empty,.preview-item .preview-item__progress{display:none}.preview-item.preview-item--queued .preview-item__actions .preview-item-action-cancel,.preview-item.preview-item--uploading .preview-item__actions .preview-item-action-cancel{display:block}.preview-item.preview-item--canceled .preview-item__information .preview-item__type span{background:#d39e00}.preview-item.preview-item--queued .preview-item__progress,.preview-item.preview-item--replay .preview-item-action-replay,.preview-item.preview-item--success .preview-item__progress,.preview-item.preview-item--uploading .preview-item__progress{display:block}.preview-item.preview-item--error .preview-item__information .preview-item__delete{display:none}.preview-item.preview-item--success .preview-item__information span{background:#41b883}.preview-item.preview-item--success .preview-item__delete{display:none}.preview-item.preview-item--success .preview-item-progress__line{width:100%;background-color:#41b883}.preview-item-progress{width:100%;border-radius:3px;height:6px;background-color:rgba(22,122,244,.2)}.preview-item-progress .preview-item-progress__line{width:0;height:6px;background-color:#167af4;border-radius:0 3px 3px 0;transition:.4s linear;background-size:60px 60px;transition-property:background-color}.preview-item-progress.preview-item-progress--processing .preview-item-progress__line{background-image:linear-gradient(135deg,hsla(0,0%,100%,.3) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.3) 0,hsla(0,0%,100%,.3) 75%,transparent 0,transparent);-webkit-animation:animate-stripes 1s linear infinite;animation:animate-stripes 1s linear infinite}@-webkit-keyframes animate-stripes{0%{background-position:0 0}to{background-position:60px 0}}@keyframes animate-stripes{0%{background-position:0 0}to{background-position:60px 0}}");class R{constructor(e,t,i){this._file=e,this.id=t,this.uploaderApi=i,this._error=null,this._progress=0,this.listeners=[],this._isReplay=!1,this._status=y.ADDED,this.nodes={container:c("div",{className:this.css.container}),information:c("div",{className:this.css.information}),progressContainer:c("div",{className:this.css.progressContainer}),progressLine:c("div",{className:this.css.progressLine}),actions:c("div",{className:this.css.actions}),actionCancel:c("button",{className:this.css.actionCancel}),actionReplay:c("button",{className:this.css.actionReplay}),error:c("div",{className:this.css.error})}}get css(){return{container:"preview-item",information:"preview-item__information",title:"preview-item__title",size:"preview-item__size",type:"preview-item__type",actions:"preview-item__actions",actionCancel:["preview-item-action","preview-item-action-cancel"],actionReplay:["preview-item-action","preview-item-action-replay"],show:"preview-item--show",error:"preview-item__error",progressContainer:["preview-item__progress","preview-item-progress"],progressLine:"preview-item-progress__line",progressProcessing:"preview-item-progress--processing",isReplay:["preview-item--replay"]}}get file(){return this._file}set error(e){this._error=e,e.length>0&&(this.status=y.ERROR),this.nodes.error.innerText=this._error}get isReplay(){return this._isReplay}set isReplay(e){this._isReplay=e;const t=Array.isArray(this.css.isReplay)?this.css.isReplay[0]:this.css.isReplay;this.nodes.container.classList.toggle(t,e)}get status(){return this._status}set status(e){this._status=e;for(const e in y)if(Object.prototype.hasOwnProperty.call(y,e)){const t=y[e];this.nodes.container.classList.toggle(`${this.css.container}--${t.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}`,this.status===t)}this.nodes.progressContainer.classList.remove(this.css.progressProcessing)}set progress(e){const{progressLine:t}=this.nodes;t.style.width=`${e}%`,this._progress=e,100===e&&this.nodes.progressContainer.classList.add(this.css.progressProcessing)}destroy(){for(const e of this.listeners)this.uploaderApi.listeners.offById(e);g(this.nodes,this.css),this.nodes.container.remove()}addEvent(e,t,i){this.listeners.push(this.uploaderApi.listeners.on(e,t,i))}removeEvent(e,t,i){const r=this.uploaderApi.listeners.findOne(e,t,i);if(!r)return;const s=this.listeners.findIndex((e=>e===r.id));this.uploaderApi.listeners.offById(r.id),this.listeners=this.listeners.slice(s,1)}render(){const{container:e}=this.nodes,{information:t,error:i}=this.nodes,{name:r,size:s}=this.file,o=/[^.]+$/.exec(this.file.type);this.nodes.type=c("div",{className:this.css.type},c("span",null,o?o.toString():"unknown")),this.nodes.title=c("div",{className:this.css.title},r),this.nodes.size=c("div",{className:this.css.size},u(s).join(" "));const{actions:n,actionCancel:a,actionReplay:p}=this.nodes;a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">  <defs/>  <path fill="currentColor"  d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>',p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.25 497.25">  <defs/>  <path fill="currentColor" d="M248.625 89.25V0l-127.5 127.5 127.5 127.5V140.25c84.15 0 153 68.85 153 153s-68.85 153-153 153-153-68.85-153-153h-51c0 112.2 91.8 204 204 204s204-91.8 204-204-91.8-204-204-204z"/></svg>',d(n,a,p),d(t,this.nodes.type,this.nodes.title,this.nodes.size,n),this.addEvent(a,"click",(e=>{e.preventDefault(),[y.ADDED,y.QUEUED,y.UPLOADING].includes(this.status)&&(this.uploaderApi.createEvent(_.CANCEL,{preview:this}),this.status=y.CANCELED,this.isReplay=!0)})),this.addEvent(p,"click",(e=>{e.preventDefault(),this.isReplay&&(this.status=y.QUEUED,this.progress=0,this.uploaderApi.createEvent(_.REPLAY,{preview:this}),this.error="",this.isReplay=!1)})),d(e,t),d(e,i);const{progressContainer:l,progressLine:h}=this.nodes;return d(l,h),d(e,l),this.progress=0,e}show(){this.nodes.container.classList.add(this.css.show)}}class L{constructor(e,t){this.$container=e,this.uploaderApi=t,this.items=new Map}newPreview(e){const t=new R(e,h("file"),this.uploaderApi);return this.items.set(t.id,t),t}render(e){d(this.$container,e.render()),setTimeout((()=>e.show()),0),y.ADDED===e.status&&(e.status=y.QUEUED)}destroy(){this.clear()}removePreviewItem(e){const t=this.items.get(e);t&&(t.destroy(),this.items.delete(e))}async clear(){for await(const e of this.items.values())e.destroy();this.items.clear()}}class S{constructor(e,t){this.file=e,this.previewApi=t,this.interval=null}send(){return new Promise(((e,t)=>{let i=0;this.interval=setInterval((()=>{if(i++,this.previewApi.updatePercent(i),100===i){const i=new FileReader;clearInterval(this.interval),i.onload=i=>{setTimeout((()=>{var r,s;r=1,s=100,Math.floor(Math.random()*(s-r))+r<50?e(i.target.result):t(new Error("Ошибка загрузки"))}),1e3)},i.readAsDataURL(this.file)}}),0)}))}destroy(){this.interval&&clearInterval(this.interval)}}class N{constructor(){this.listeners=[]}on(e,t,i){const r=h("event"),s={id:r,element:e,eventType:t,handler:i},o=this.findOne(e,t,i);return o?o.id:(this.listeners.push(s),e.addEventListener(t,i),r)}off(e,t,i){const r=this.findAll(e,t,i);r.forEach(((e,t)=>{const i=this.listeners.indexOf(r[t]);i>0&&(this.listeners.splice(i,1),e.element.removeEventListener(e.eventType,e.handler))}))}offById(e){const t=this.findById(e);t&&t.element.removeEventListener(t.eventType,t.handler)}findOne(e,t,i){const r=this.findAll(e,t,i);return r.length>0?r[0]:null}findAll(e,t,i){let r;const s=e?this.findByEventTarget(e):[];return r=e&&t&&i?s.filter((e=>e.eventType===t&&e.handler===i)):e&&t?s.filter((e=>e.eventType===t)):s,r}findByEventTarget(e){return this.listeners.filter((t=>t.element===e&&t))}findById(e){return this.listeners.find((t=>t.id===e))}removeAll(){this.listeners.forEach((e=>{e.element.removeEventListener(e.eventType,e.handler)})),this.listeners=[]}destroy(){this.removeAll()}}class C{constructor(e,t=h("uploader")){this.$el=e,this.id=t,this.listeners=new N,this.callbacks=[],this.listeners.on(this.$el,t,this.dispatch.bind(this))}on(e,t){return this.callbacks.push({event:e,handler:t}),this}off(e,t){const i=this.callbacks.findIndex((i=>i.event===e&&i.handler===t));return this.callbacks.slice(i,1),this}dispatch(e){const{type:t,values:i}=e.detail;this.callbacks.forEach((e=>{e.event===t&&e.handler(i)}))}createEvent(e,t){const i=new CustomEvent(`${this.id}`,{detail:{type:e,values:t}});this.$el.dispatchEvent(i)}}x([m],C.prototype,"createEvent",null);const I={accept:"*",count:1,fileSize:15728640,errors:{accept:"Должно быть файлом одного из следующих типов: :values.",fileSize:"Размер файла не может быть больше :max."},Upload:S,FileManager:E};class k extends C{constructor(e,t={}){super(e),this.nodes={},this._files=new Map,this._disabled=!1,this._status=w.NOT_READY,this._multiple=!1,this.option=p(I,t),this.nodes.container=e;const i=this.api,r=c("div",{className:this.css.wrapper}),s=c("div",{className:this.css.preview}),o=c("div",{className:this.css.fileManager});this._multiple=this.option.count>1,this.previews=new L(s,i),this.fileManager=new this.option.FileManager(o,i,this.option),this.nodes.wrapper=r,this.nodes.preview=s,this.nodes.fileManager=o,this.on(_.SELECTED,(({files:e})=>{this.seleced(e)})),setTimeout((()=>this.createEvent(_.INIT)),0),this.render(),this._status=w.WAITING,this.on(_.REPLAY,(()=>{this.status===w.WAITING&&this.uploaders()}))}get css(){return{container:"uploader",wrapper:"uploader__wrapper",fileManager:"uploader__file-manager",preview:"uploader__preview",disabled:"uploader--disabled"}}get api(){const e=this;return{on:(...t)=>{e.on(...t)},off:(...t)=>{e.off(...t)},listeners:this.listeners,createEvent:this.createEvent}}get files(){return this._files}set files(e){this._files=e}render(){const{container:e,wrapper:t,preview:i,fileManager:r}=this.nodes;e.classList.add(this.css.container),d(t,i,r),d(e,t)}async seleced(e){if(this.status===w.WAITING&&(await this.previews.clear(),this.files.clear(),e=this._multiple?e.slice(0,this.option.count):e.slice(0,1),this._status=w.SELECTED),e.length<1)return void this.uploaders();this.fileManager.disabled=!0;const t=e.shift(),i=this.previews.newPreview(t);(function(e,t){for(const i of Array.isArray(t)?t:[t])if("*"===i||e.match(i))return!0;return!1})(i.file.type,this.option.accept)||(i.error=f(this.option.errors.accept,{values:Array.isArray(this.option.accept)?this.option.accept.join(","):this.option.accept})),i.file.size>this.option.fileSize&&(i.error=f(this.option.errors.fileSize,{max:u(this.option.fileSize).join("")})),i.status===y.ERROR&&this.createEvent(_.ERROR,{error:new Error(i.error),preview:i}),this.previews.render(i),await this.seleced(e)}async uploaders(){const e=Array.from(this.previews.items.values()).find((({status:e})=>e===y.QUEUED));if(e){e.status=y.UPLOADING;const t=await this.uplaodItem(e);t.status===v.ERROR&&(e.error=t.error.message,e.isReplay=!0,this.createEvent(_.ERROR,{error:new Error(t.error.message),preview:e})),t.status===v.SUCCESS&&(this.files.set(e.id,t.result),e.status=y.SUCCESS,this.createEvent(_.LOADED,{file:t.result})),await this.uploaders()}else this.createEvent(_.UPLOADED,{value:this.value}),this._status=w.WAITING,this.enabledFileManaged()}uplaodItem(e){return new Promise((async t=>{const i=new(0,this.option.Upload)(e.file,{updatePercent:t=>{e.progress=t,this.createEvent(_.UNLOADING,{preview:e})}}),r=()=>{i.destroy(),t({status:v.CANCEL})};let s;this.on(_.BEFORE_DESTROYED,r),this.on(_.CANCEL,r);try{const e=await i.send();s={status:v.SUCCESS,result:e}}catch(e){s={status:v.ERROR,error:e}}this.off(_.BEFORE_DESTROYED,i.destroy),t(s)}))}enabledFileManaged(){this.fileManager.disabled=!1}destroy(){this.createEvent(_.BEFORE_DESTROYED),this.fileManager.destroy(),this.previews.destroy(),this.listeners.destroy(),g(this.nodes,this.css)}setDisabled(e){this.disabled=e,this.nodes.container.classList.toggle(this.css.disabled,e)}get disabled(){return this._disabled}set disabled(e){this.setDisabled(e)}set accept(e){if(this.status!==w.WAITING)throw new Error;this.option.accept=e,this.fileManager.accept=this.option.accept}get count(){return this.option.count}set count(e){if(this.status!==w.WAITING)throw new Error;this.option.count=e,this._multiple=this.option.count>1,this.fileManager.count=this.option.count}set upload(e){if(this.status!==w.WAITING)throw new Error;this.option.Upload=e}set fileSize(e){if(this.status!==w.WAITING)throw new Error;this.option.fileSize=e}get status(){return this._status}input(){this.fileManager.input()}get value(){const e=Array.from(this.files.entries()).map((([,e])=>e));return this._multiple?e:e.pop()}get multiple(){return this._multiple}set multiple(e){this.count=e?2:1}clear(){this.previews.clear(),this.createEvent(_.CLEAR)}}exports.DefaultUploadConstructors=S,exports.Dropzone=O,exports.StandartFileManager=E,exports.createUploader=function(...e){const t=new k(...e),i=["disabled","accept","count","upload","fileSize","status","value","multiple","files"],r=["on","off","destroy","seleced","clear","input"];return new Proxy(t,{set(e,r,s){i.includes(r)&&(t[r]=s)},get:(e,s)=>r.includes(s)?t[s].bind(t):i.includes(s)?t[s]:void 0})};
