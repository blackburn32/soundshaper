var Qp=Object.defineProperty;var em=(t,e,n)=>e in t?Qp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Oi=(t,e,n)=>(em(t,typeof e!="symbol"?e+"":e,n),n),aa=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var Se=(t,e,n)=>(aa(t,e,"read from private field"),n?n.call(t):e.get(t)),Ct=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Tt=(t,e,n,i)=>(aa(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n);var Ps=(t,e,n)=>(aa(t,e,"access private method"),n);function kl(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const st={},or=[],gn=()=>{},tm=()=>!1,nm=/^on[^a-z]/,Ms=t=>nm.test(t),Gl=t=>t.startsWith("onUpdate:"),bt=Object.assign,Vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},im=Object.prototype.hasOwnProperty,je=(t,e)=>im.call(t,e),De=Array.isArray,ar=t=>Ho(t)==="[object Map]",Mh=t=>Ho(t)==="[object Set]",Be=t=>typeof t=="function",ft=t=>typeof t=="string",Wl=t=>typeof t=="symbol",ot=t=>t!==null&&typeof t=="object",Xl=t=>ot(t)&&Be(t.then)&&Be(t.catch),Sh=Object.prototype.toString,Ho=t=>Sh.call(t),rm=t=>Ho(t).slice(8,-1),Eh=t=>Ho(t)==="[object Object]",ql=t=>ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yr=kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sm=/-(\w)/g,bn=zo(t=>t.replace(sm,(e,n)=>n?n.toUpperCase():"")),om=/\B([A-Z])/g,Di=zo(t=>t.replace(om,"-$1").toLowerCase()),ko=zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),co=zo(t=>t?`on${ko(t)}`:""),ns=(t,e)=>!Object.is(t,e),uo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_o=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},tl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},am=t=>{const e=ft(t)?Number(t):NaN;return isNaN(e)?t:e};let zc;const nl=()=>zc||(zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xr(t){if(De(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ft(i)?fm(i):xr(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ft(t))return t;if(ot(t))return t}}const lm=/;(?![^(]*\))/g,cm=/:([^]+)/,um=/\/\*[^]*?\*\//g;function fm(t){const e={};return t.replace(um,"").split(lm).forEach(n=>{if(n){const i=n.split(cm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pn(t){let e="";if(ft(t))e=t;else if(De(t))for(let n=0;n<t.length;n++){const i=pn(t[n]);i&&(e+=i+" ")}else if(ot(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function hm(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ft(e)&&(t.class=pn(e)),n&&(t.style=xr(n)),t}const dm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pm=kl(dm);function bh(t){return!!t||t===""}const jl=t=>ft(t)?t:t==null?"":De(t)||ot(t)&&(t.toString===Sh||!Be(t.toString))?JSON.stringify(t,Th,2):String(t),Th=(t,e)=>e&&e.__v_isRef?Th(t,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Mh(e)?{[`Set(${e.size})`]:[...e.values()]}:ot(e)&&!De(e)&&!Eh(e)?String(e):e;let ln;class mm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ln;try{return ln=this,e()}finally{ln=n}}}on(){ln=this}off(){ln=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function gm(t,e=ln){e&&e.active&&e.effects.push(t)}function _m(){return ln}const $l=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ah=t=>(t.w&li)>0,wh=t=>(t.n&li)>0,vm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=li},xm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Ah(r)&&!wh(r)?r.delete(t):e[n++]=r,r.w&=~li,r.n&=~li}e.length=n}},vo=new WeakMap;let qr=0,li=1;const il=30;let un;const Ai=Symbol(""),rl=Symbol("");class Yl{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gm(this,i)}run(){if(!this.active)return this.fn();let e=un,n=ni;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=un,un=this,ni=!0,li=1<<++qr,qr<=il?vm(this):kc(this),this.fn()}finally{qr<=il&&xm(this),li=1<<--qr,un=this.parent,ni=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(kc(this),this.onStop&&this.onStop(),this.active=!1)}}function kc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ni=!0;const Rh=[];function Rr(){Rh.push(ni),ni=!1}function Cr(){const t=Rh.pop();ni=t===void 0?!0:t}function Wt(t,e,n){if(ni&&un){let i=vo.get(t);i||vo.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=$l()),Ch(r)}}function Ch(t,e){let n=!1;qr<=il?wh(t)||(t.n|=li,n=!Ah(t)):n=!t.has(un),n&&(t.add(un),un.deps.push(t))}function Hn(t,e,n,i,r,s){const o=vo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&De(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":De(t)?ql(n)&&a.push(o.get("length")):(a.push(o.get(Ai)),ar(t)&&a.push(o.get(rl)));break;case"delete":De(t)||(a.push(o.get(Ai)),ar(t)&&a.push(o.get(rl)));break;case"set":ar(t)&&a.push(o.get(Ai));break}if(a.length===1)a[0]&&sl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);sl($l(l))}}function sl(t,e){const n=De(t)?t:[...t];for(const i of n)i.computed&&Gc(i);for(const i of n)i.computed||Gc(i)}function Gc(t,e){(t!==un||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ym(t,e){var n;return(n=vo.get(t))==null?void 0:n.get(e)}const Mm=kl("__proto__,__v_isRef,__isVue"),Ph=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wl)),Sm=Kl(),Em=Kl(!1,!0),bm=Kl(!0),Vc=Tm();function Tm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ye(this);for(let s=0,o=this.length;s<o;s++)Wt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(Ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Rr();const i=Ye(this)[e].apply(this,n);return Cr(),i}}),t}function Am(t){const e=Ye(this);return Wt(e,"has",t),e.hasOwnProperty(t)}function Kl(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Gm:Nh:e?Dh:Uh).get(i))return i;const o=De(i);if(!t){if(o&&je(Vc,r))return Reflect.get(Vc,r,s);if(r==="hasOwnProperty")return Am}const a=Reflect.get(i,r,s);return(Wl(r)?Ph.has(r):Mm(r))||(t||Wt(i,"get",r),e)?a:ut(a)?o&&ql(r)?a:a.value:ot(a)?t?Oh(a):zn(a):a}}const wm=Lh(),Rm=Lh(!0);function Lh(t=!1){return function(n,i,r,s){let o=n[i];if(Li(o)&&ut(o)&&!ut(r))return!1;if(!t&&(!xo(r)&&!Li(r)&&(o=Ye(o),r=Ye(r)),!De(n)&&ut(o)&&!ut(r)))return o.value=r,!0;const a=De(n)&&ql(i)?Number(i)<n.length:je(n,i),l=Reflect.set(n,i,r,s);return n===Ye(s)&&(a?ns(r,o)&&Hn(n,"set",i,r):Hn(n,"add",i,r)),l}}function Cm(t,e){const n=je(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Hn(t,"delete",e,void 0),i}function Pm(t,e){const n=Reflect.has(t,e);return(!Wl(e)||!Ph.has(e))&&Wt(t,"has",e),n}function Lm(t){return Wt(t,"iterate",De(t)?"length":Ai),Reflect.ownKeys(t)}const Ih={get:Sm,set:wm,deleteProperty:Cm,has:Pm,ownKeys:Lm},Im={get:bm,set(t,e){return!0},deleteProperty(t,e){return!0}},Um=bt({},Ih,{get:Em,set:Rm}),Zl=t=>t,Go=t=>Reflect.getPrototypeOf(t);function Ls(t,e,n=!1,i=!1){t=t.__v_raw;const r=Ye(t),s=Ye(e);n||(e!==s&&Wt(r,"get",e),Wt(r,"get",s));const{has:o}=Go(r),a=i?Zl:n?ec:is;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Is(t,e=!1){const n=this.__v_raw,i=Ye(n),r=Ye(t);return e||(t!==r&&Wt(i,"has",t),Wt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Us(t,e=!1){return t=t.__v_raw,!e&&Wt(Ye(t),"iterate",Ai),Reflect.get(t,"size",t)}function Wc(t){t=Ye(t);const e=Ye(this);return Go(e).has.call(e,t)||(e.add(t),Hn(e,"add",t,t)),this}function Xc(t,e){e=Ye(e);const n=Ye(this),{has:i,get:r}=Go(n);let s=i.call(n,t);s||(t=Ye(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?ns(e,o)&&Hn(n,"set",t,e):Hn(n,"add",t,e),this}function qc(t){const e=Ye(this),{has:n,get:i}=Go(e);let r=n.call(e,t);r||(t=Ye(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Hn(e,"delete",t,void 0),s}function jc(){const t=Ye(this),e=t.size!==0,n=t.clear();return e&&Hn(t,"clear",void 0,void 0),n}function Ds(t,e){return function(i,r){const s=this,o=s.__v_raw,a=Ye(o),l=e?Zl:t?ec:is;return!t&&Wt(a,"iterate",Ai),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ns(t,e,n){return function(...i){const r=this.__v_raw,s=Ye(r),o=ar(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Zl:e?ec:is;return!e&&Wt(s,"iterate",l?rl:Ai),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Xn(t){return function(...e){return t==="delete"?!1:this}}function Dm(){const t={get(s){return Ls(this,s)},get size(){return Us(this)},has:Is,add:Wc,set:Xc,delete:qc,clear:jc,forEach:Ds(!1,!1)},e={get(s){return Ls(this,s,!1,!0)},get size(){return Us(this)},has:Is,add:Wc,set:Xc,delete:qc,clear:jc,forEach:Ds(!1,!0)},n={get(s){return Ls(this,s,!0)},get size(){return Us(this,!0)},has(s){return Is.call(this,s,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:Ds(!0,!1)},i={get(s){return Ls(this,s,!0,!0)},get size(){return Us(this,!0)},has(s){return Is.call(this,s,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:Ds(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ns(s,!1,!1),n[s]=Ns(s,!0,!1),e[s]=Ns(s,!1,!0),i[s]=Ns(s,!0,!0)}),[t,n,e,i]}const[Nm,Fm,Om,Bm]=Dm();function Jl(t,e){const n=e?t?Bm:Om:t?Fm:Nm;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(je(n,r)&&r in i?n:i,r,s)}const Hm={get:Jl(!1,!1)},zm={get:Jl(!1,!0)},km={get:Jl(!0,!1)},Uh=new WeakMap,Dh=new WeakMap,Nh=new WeakMap,Gm=new WeakMap;function Vm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wm(t){return t.__v_skip||!Object.isExtensible(t)?0:Vm(rm(t))}function zn(t){return Li(t)?t:Ql(t,!1,Ih,Hm,Uh)}function Fh(t){return Ql(t,!1,Um,zm,Dh)}function Oh(t){return Ql(t,!0,Im,km,Nh)}function Ql(t,e,n,i,r){if(!ot(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Wm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function lr(t){return Li(t)?lr(t.__v_raw):!!(t&&t.__v_isReactive)}function Li(t){return!!(t&&t.__v_isReadonly)}function xo(t){return!!(t&&t.__v_isShallow)}function Bh(t){return lr(t)||Li(t)}function Ye(t){const e=t&&t.__v_raw;return e?Ye(e):t}function Hh(t){return _o(t,"__v_skip",!0),t}const is=t=>ot(t)?zn(t):t,ec=t=>ot(t)?Oh(t):t;function zh(t){ni&&un&&(t=Ye(t),Ch(t.dep||(t.dep=$l())))}function kh(t,e){t=Ye(t);const n=t.dep;n&&sl(n)}function ut(t){return!!(t&&t.__v_isRef===!0)}function Je(t){return Gh(t,!1)}function $c(t){return Gh(t,!0)}function Gh(t,e){return ut(t)?t:new Xm(t,e)}class Xm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ye(e),this._value=n?e:is(e)}get value(){return zh(this),this._value}set value(e){const n=this.__v_isShallow||xo(e)||Li(e);e=n?e:Ye(e),ns(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:is(e),kh(this))}}function Le(t){return ut(t)?t.value:t}const qm={get:(t,e,n)=>Le(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return ut(r)&&!ut(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Vh(t){return lr(t)?t:new Proxy(t,qm)}class jm{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ym(Ye(this._object),this._key)}}class $m{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Wh(t,e,n){return ut(t)?t:Be(t)?new $m(t):ot(t)&&arguments.length>1?Ym(t,e,n):Je(t)}function Ym(t,e,n){const i=t[e];return ut(i)?i:new jm(t,e,n)}class Km{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Yl(e,()=>{this._dirty||(this._dirty=!0,kh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ye(this);return zh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Zm(t,e,n=!1){let i,r;const s=Be(t);return s?(i=t,r=gn):(i=t.get,r=t.set),new Km(i,r,s||!r,n)}function ii(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Pr(s,e,n)}return r}function _n(t,e,n,i){if(Be(t)){const s=ii(t,e,n,i);return s&&Xl(s)&&s.catch(o=>{Pr(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(_n(t[s],e,n,i));return r}function Pr(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ii(l,null,10,[t,o,a]);return}}Jm(t,n,r,i)}function Jm(t,e,n,i=!0){console.error(t)}let rs=!1,ol=!1;const Ut=[];let Mn=0;const cr=[];let Fn=null,Mi=0;const Xh=Promise.resolve();let tc=null;function nc(t){const e=tc||Xh;return t?e.then(this?t.bind(this):t):e}function Qm(t){let e=Mn+1,n=Ut.length;for(;e<n;){const i=e+n>>>1;ss(Ut[i])<t?e=i+1:n=i}return e}function Vo(t){(!Ut.length||!Ut.includes(t,rs&&t.allowRecurse?Mn+1:Mn))&&(t.id==null?Ut.push(t):Ut.splice(Qm(t.id),0,t),qh())}function qh(){!rs&&!ol&&(ol=!0,tc=Xh.then($h))}function eg(t){const e=Ut.indexOf(t);e>Mn&&Ut.splice(e,1)}function jh(t){De(t)?cr.push(...t):(!Fn||!Fn.includes(t,t.allowRecurse?Mi+1:Mi))&&cr.push(t),qh()}function Yc(t,e=rs?Mn+1:0){for(;e<Ut.length;e++){const n=Ut[e];n&&n.pre&&(Ut.splice(e,1),e--,n())}}function yo(t){if(cr.length){const e=[...new Set(cr)];if(cr.length=0,Fn){Fn.push(...e);return}for(Fn=e,Fn.sort((n,i)=>ss(n)-ss(i)),Mi=0;Mi<Fn.length;Mi++)Fn[Mi]();Fn=null,Mi=0}}const ss=t=>t.id==null?1/0:t.id,tg=(t,e)=>{const n=ss(t)-ss(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $h(t){ol=!1,rs=!0,Ut.sort(tg);const e=gn;try{for(Mn=0;Mn<Ut.length;Mn++){const n=Ut[Mn];n&&n.active!==!1&&ii(n,null,14)}}finally{Mn=0,Ut.length=0,yo(),rs=!1,tc=null,(Ut.length||cr.length)&&$h()}}function ng(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||st;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||st;h&&(r=n.map(p=>ft(p)?p.trim():p)),f&&(r=n.map(tl))}let a,l=i[a=co(e)]||i[a=co(bn(e))];!l&&s&&(l=i[a=co(Di(e))]),l&&_n(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_n(c,t,6,r)}}function Yh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Be(t)){const l=c=>{const u=Yh(c,e,!0);u&&(a=!0,bt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ot(t)&&i.set(t,null),null):(De(s)?s.forEach(l=>o[l]=null):bt(o,s),ot(t)&&i.set(t,o),o)}function Wo(t,e){return!t||!Ms(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(t,e[0].toLowerCase()+e.slice(1))||je(t,Di(e))||je(t,e))}let Et=null,Xo=null;function Mo(t){const e=Et;return Et=t,Xo=t&&t.type.__scopeId||null,e}function Rw(t){Xo=t}function Cw(){Xo=null}function ic(t,e=Et,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&au(-1);const s=Mo(e);let o;try{o=t(...r)}finally{Mo(s),i._d&&au(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function la(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:_}=t;let m,d;const M=Mo(t);try{if(n.shapeFlag&4){const E=r||i;m=Qt(u.call(E,E,f,s,p,h,g)),d=l}else{const E=e;m=Qt(E.length>1?E(s,{attrs:l,slots:a,emit:c}):E(s,null)),d=e.props?l:rg(l)}}catch(E){Jr.length=0,Pr(E,t,1),m=Ie(kn)}let v=m;if(d&&_!==!1){const E=Object.keys(d),{shapeFlag:T}=v;E.length&&T&7&&(o&&E.some(Gl)&&(d=sg(d,o)),v=Sr(v,d))}return n.dirs&&(v=Sr(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),m=v,Mo(M),m}function ig(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(ls(i)){if(i.type!==kn||i.children==="v-if"){if(e)return;e=i}}else return}return e}const rg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ms(n))&&((e||(e={}))[n]=t[n]);return e},sg=(t,e)=>{const n={};for(const i in t)(!Gl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function og(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Kc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Wo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Kc(i,o,c):!0:!!o;return!1}function Kc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Wo(n,s))return!0}return!1}function rc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ag=t=>t.__isSuspense,lg={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){t==null?ug(e,n,i,r,s,o,a,l,c):fg(t,e,n,i,r,o,a,l,c)},hydrate:hg,create:sc,normalize:dg},cg=lg;function os(t,e){const n=t.props&&t.props[e];Be(n)&&n()}function ug(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=sc(t,r,i,e,f,n,s,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,i,h,s,o),h.deps>0?(os(t,"onPending"),os(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),ur(h,t.ssFallback)):h.resolve(!1,!0)}function fg(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:_,isInFallback:m,isHydrating:d}=f;if(_)f.pendingBranch=h,Jn(h,_)?(l(_,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(l(g,p,n,i,r,null,s,o,a),ur(f,p))):(f.pendingId++,d?(f.isHydrating=!1,f.activeBranch=_):c(_,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,p,n,i,r,null,s,o,a),ur(f,p))):g&&Jn(h,g)?(l(g,h,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&Jn(h,g))l(g,h,n,i,r,f,s,o,a),ur(f,h);else if(os(e,"onPending"),f.pendingBranch=h,f.pendingId++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:M,pendingId:v}=f;M>0?setTimeout(()=>{f.pendingId===v&&f.fallback(p)},M):M===0&&f.fallback(p)}}function sc(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:h,um:p,n:g,o:{parentNode:_,remove:m}}=c;let d;const M=pg(t);M&&e!=null&&e.pendingBranch&&(d=e.pendingId,e.deps++);const v=t.props?am(t.props.timeout):void 0,E={vnode:t,parent:e,parentComponent:n,isSVG:o,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1,A=!1){const{vnode:C,activeBranch:P,pendingBranch:S,pendingId:R,effects:j,parentComponent:ce,container:O}=E;if(E.isHydrating)E.isHydrating=!1;else if(!T){const te=P&&S.transition&&S.transition.mode==="out-in";te&&(P.transition.afterLeave=()=>{R===E.pendingId&&h(S,O,V,0)});let{anchor:V}=E;P&&(V=g(P),p(P,ce,E,!0)),te||h(S,O,V,0)}ur(E,S),E.pendingBranch=null,E.isInFallback=!1;let D=E.parent,X=!1;for(;D;){if(D.pendingBranch){D.effects.push(...j),X=!0;break}D=D.parent}X||jh(j),E.effects=[],M&&e&&e.pendingBranch&&d===e.pendingId&&(e.deps--,e.deps===0&&!A&&e.resolve()),os(C,"onResolve")},fallback(T){if(!E.pendingBranch)return;const{vnode:A,activeBranch:C,parentComponent:P,container:S,isSVG:R}=E;os(A,"onFallback");const j=g(C),ce=()=>{E.isInFallback&&(f(null,T,S,j,P,null,R,a,l),ur(E,T))},O=T.transition&&T.transition.mode==="out-in";O&&(C.transition.afterLeave=ce),E.isInFallback=!0,p(C,P,null,!0),O||ce()},move(T,A,C){E.activeBranch&&h(E.activeBranch,T,A,C),E.container=T},next(){return E.activeBranch&&g(E.activeBranch)},registerDep(T,A){const C=!!E.pendingBranch;C&&E.deps++;const P=T.vnode.el;T.asyncDep.catch(S=>{Pr(S,T,0)}).then(S=>{if(T.isUnmounted||E.isUnmounted||E.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:R}=T;fl(T,S,!1),P&&(R.el=P);const j=!P&&T.subTree.el;A(T,R,_(P||T.subTree.el),P?null:g(T.subTree),E,o,l),j&&m(j),rc(T,R.el),C&&--E.deps===0&&E.resolve()})},unmount(T,A){E.isUnmounted=!0,E.activeBranch&&p(E.activeBranch,n,T,A),E.pendingBranch&&p(E.pendingBranch,n,T,A)}};return E}function hg(t,e,n,i,r,s,o,a,l){const c=e.suspense=sc(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function dg(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Zc(i?n.default:n),t.ssFallback=i?Zc(n.fallback):Ie(kn)}function Zc(t){let e;if(Be(t)){const n=Mr&&t._c;n&&(t._d=!1,ct()),t=t(),n&&(t._d=!0,e=nn,vd())}return De(t)&&(t=ig(t)),t=Qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Kh(t,e){e&&e.pendingBranch?De(t)?e.effects.push(...t):e.effects.push(t):jh(t)}function ur(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t,r=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=r,rc(i,r))}function pg(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function mg(t,e){return qo(t,null,e)}function gg(t,e){return qo(t,null,{flush:"post"})}const Fs={};function Sn(t,e,n){return qo(t,e,n)}function qo(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=st){var a;const l=_m()===((a=_t)==null?void 0:a.scope)?_t:null;let c,u=!1,f=!1;if(ut(t)?(c=()=>t.value,u=xo(t)):lr(t)?(c=()=>t,i=!0):De(t)?(f=!0,u=t.some(E=>lr(E)||xo(E)),c=()=>t.map(E=>{if(ut(E))return E.value;if(lr(E))return bi(E);if(Be(E))return ii(E,l,2)})):Be(t)?e?c=()=>ii(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),_n(t,l,3,[p])}:c=gn,e&&i){const E=c;c=()=>bi(E())}let h,p=E=>{h=M.onStop=()=>{ii(E,l,4)}},g;if(Er)if(p=gn,e?n&&_n(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const E=r_();g=E.__watcherHandles||(E.__watcherHandles=[])}else return gn;let _=f?new Array(t.length).fill(Fs):Fs;const m=()=>{if(M.active)if(e){const E=M.run();(i||u||(f?E.some((T,A)=>ns(T,_[A])):ns(E,_)))&&(h&&h(),_n(e,l,3,[E,_===Fs?void 0:f&&_[0]===Fs?[]:_,p]),_=E)}else M.run()};m.allowRecurse=!!e;let d;r==="sync"?d=m:r==="post"?d=()=>zt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Vo(m));const M=new Yl(c,d);e?n?m():_=M.run():r==="post"?zt(M.run.bind(M),l&&l.suspense):M.run();const v=()=>{M.stop(),l&&l.scope&&Vl(l.scope.effects,M)};return g&&g.push(v),v}function _g(t,e,n){const i=this.proxy,r=ft(t)?t.includes(".")?Zh(i,t):()=>i[t]:t.bind(i,i);let s;Be(e)?s=e:(s=e.handler,n=e);const o=_t;ci(this);const a=qo(r,s.bind(i),n);return o?ci(o):ri(),a}function Zh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function bi(t,e){if(!ot(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ut(t))bi(t.value,e);else if(De(t))for(let n=0;n<t.length;n++)bi(t[n],e);else if(Mh(t)||ar(t))t.forEach(n=>{bi(n,e)});else if(Eh(t))for(const n in t)bi(t[n],e);return t}function So(t,e){const n=Et;if(n===null)return t;const i=Ko(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=st]=e[s];o&&(Be(o)&&(o={mounted:o,updated:o}),o.deep&&bi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function xn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Rr(),_n(l,n,8,[t.el,a,t,e]),Cr())}}function wn(t,e){return Be(t)?(()=>bt({name:t.name},e,{setup:t}))():t}const fr=t=>!!t.type.__asyncLoader;function Eo(t){Be(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let p;return l||(p=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((_,m)=>{a(g,()=>_(f()),()=>m(g),u+1)});throw g}).then(g=>p!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return wn({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const p=_t;if(c)return()=>ca(c,p);const g=M=>{l=null,Pr(M,p,13,!i)};if(o&&p.suspense||Er)return h().then(M=>()=>ca(M,p)).catch(M=>(g(M),()=>i?Ie(i,{error:M}):null));const _=Je(!1),m=Je(),d=Je(!!r);return r&&setTimeout(()=>{d.value=!1},r),s!=null&&setTimeout(()=>{if(!_.value&&!m.value){const M=new Error(`Async component timed out after ${s}ms.`);g(M),m.value=M}},s),h().then(()=>{_.value=!0,p.parent&&oc(p.parent.vnode)&&Vo(p.parent.update)}).catch(M=>{g(M),m.value=M}),()=>{if(_.value&&c)return ca(c,p);if(m.value&&i)return Ie(i,{error:m.value});if(n&&!d.value)return Ie(n)}}})}function ca(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=Ie(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const oc=t=>t.type.__isKeepAlive;function Jh(t,e){ed(t,"a",e)}function Qh(t,e){ed(t,"da",e)}function ed(t,e,n=_t){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(jo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)oc(r.parent.vnode)&&vg(i,e,n,r),r=r.parent}}function vg(t,e,n,i){const r=jo(e,t,i,!0);ac(()=>{Vl(i[e],r)},n)}function jo(t,e,n=_t,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Rr(),ci(n);const a=_n(e,n,t,o);return ri(),Cr(),a});return i?r.unshift(s):r.push(s),s}}const Gn=t=>(e,n=_t)=>(!Er||t==="sp")&&jo(t,(...i)=>e(...i),n),xg=Gn("bm"),Ni=Gn("m"),yg=Gn("bu"),Mg=Gn("u"),$o=Gn("bum"),ac=Gn("um"),Sg=Gn("sp"),Eg=Gn("rtg"),bg=Gn("rtc");function td(t,e=_t){jo("ec",t,e)}const lc="components";function Tg(t,e){return rd(lc,t,!0,e)||t}const nd=Symbol.for("v-ndc");function id(t){return ft(t)?rd(lc,t,!1)||t:t||nd}function rd(t,e,n=!0,i=!1){const r=Et||_t;if(r){const s=r.type;if(t===lc){const a=t_(s,!1);if(a&&(a===e||a===bn(e)||a===ko(bn(e))))return s}const o=Jc(r[t]||s[t],e)||Jc(r.appContext[t],e);return!o&&i?s:o}}function Jc(t,e){return t&&(t[e]||t[bn(e)]||t[ko(bn(e))])}function sd(t,e,n,i){let r;const s=n&&n[i];if(De(t)||ft(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(ot(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function Ag(t,e,n={},i,r){if(Et.isCE||Et.parent&&fr(Et.parent)&&Et.parent.isCE)return e!=="default"&&(n.name=e),Ie("slot",n,i&&i());let s=t[e];s&&s._c&&(s._d=!1),ct();const o=s&&od(s(n)),a=fn(It,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function od(t){return t.some(e=>ls(e)?!(e.type===kn||e.type===It&&!od(e.children)):!0)?t:null}function wg(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:co(i)]=t[i];return n}const al=t=>t?Ed(t)?Ko(t)||t.proxy:al(t.parent):null,Kr=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>al(t.parent),$root:t=>al(t.root),$emit:t=>t.emit,$options:t=>cc(t),$forceUpdate:t=>t.f||(t.f=()=>Vo(t.update)),$nextTick:t=>t.n||(t.n=nc.bind(t.proxy)),$watch:t=>_g.bind(t)}),ua=(t,e)=>t!==st&&!t.__isScriptSetup&&je(t,e),Rg={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ua(i,e))return o[e]=1,i[e];if(r!==st&&je(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&je(c,e))return o[e]=3,s[e];if(n!==st&&je(n,e))return o[e]=4,n[e];ll&&(o[e]=0)}}const u=Kr[e];let f,h;if(u)return e==="$attrs"&&Wt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==st&&je(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,je(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ua(r,e)?(r[e]=n,!0):i!==st&&je(i,e)?(i[e]=n,!0):je(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==st&&je(t,o)||ua(e,o)||(a=s[0])&&je(a,o)||je(i,o)||je(Kr,o)||je(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:je(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qc(t){return De(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Cg(t){const e=Ss();let n=t();return ri(),Xl(n)&&(n=n.catch(i=>{throw ci(e),i})),[n,()=>ci(e)]}let ll=!0;function Pg(t){const e=cc(t),n=t.proxy,i=t.ctx;ll=!1,e.beforeCreate&&eu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:M,destroyed:v,unmounted:E,render:T,renderTracked:A,renderTriggered:C,errorCaptured:P,serverPrefetch:S,expose:R,inheritAttrs:j,components:ce,directives:O,filters:D}=e;if(c&&Lg(c,i,null),o)for(const V in o){const q=o[V];Be(q)&&(i[V]=q.bind(n))}if(r){const V=r.call(n,n);ot(V)&&(t.data=zn(V))}if(ll=!0,s)for(const V in s){const q=s[V],ae=Be(q)?q.bind(n,n):Be(q.get)?q.get.bind(n,n):gn,le=!Be(q)&&Be(q.set)?q.set.bind(n):gn,H=Gt({get:ae,set:le});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>H.value,set:J=>H.value=J})}if(a)for(const V in a)ad(a[V],i,n,V);if(l){const V=Be(l)?l.call(n):l;Reflect.ownKeys(V).forEach(q=>{cd(q,V[q])})}u&&eu(u,t,"c");function te(V,q){De(q)?q.forEach(ae=>V(ae.bind(n))):q&&V(q.bind(n))}if(te(xg,f),te(Ni,h),te(yg,p),te(Mg,g),te(Jh,_),te(Qh,m),te(td,P),te(bg,A),te(Eg,C),te($o,M),te(ac,E),te(Sg,S),De(R))if(R.length){const V=t.exposed||(t.exposed={});R.forEach(q=>{Object.defineProperty(V,q,{get:()=>n[q],set:ae=>n[q]=ae})})}else t.exposed||(t.exposed={});T&&t.render===gn&&(t.render=T),j!=null&&(t.inheritAttrs=j),ce&&(t.components=ce),O&&(t.directives=O)}function Lg(t,e,n=gn){De(t)&&(t=cl(t));for(const i in t){const r=t[i];let s;ot(r)?"default"in r?s=hr(r.from||i,r.default,!0):s=hr(r.from||i):s=hr(r),ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function eu(t,e,n){_n(De(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function ad(t,e,n,i){const r=i.includes(".")?Zh(n,i):()=>n[i];if(ft(t)){const s=e[t];Be(s)&&Sn(r,s)}else if(Be(t))Sn(r,t.bind(n));else if(ot(t))if(De(t))t.forEach(s=>ad(s,e,n,i));else{const s=Be(t.handler)?t.handler.bind(n):e[t.handler];Be(s)&&Sn(r,s,t)}}function cc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>bo(l,c,o,!0)),bo(l,e,o)),ot(e)&&s.set(e,l),l}function bo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&bo(t,s,n,!0),r&&r.forEach(o=>bo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ig[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ig={data:tu,props:nu,emits:nu,methods:jr,computed:jr,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:jr,directives:jr,watch:Dg,provide:tu,inject:Ug};function tu(t,e){return e?t?function(){return bt(Be(t)?t.call(this,this):t,Be(e)?e.call(this,this):e)}:e:t}function Ug(t,e){return jr(cl(t),cl(e))}function cl(t){if(De(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function jr(t,e){return t?bt(Object.create(null),t,e):e}function nu(t,e){return t?De(t)&&De(e)?[...new Set([...t,...e])]:bt(Object.create(null),Qc(t),Qc(e??{})):e}function Dg(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const i in e)n[i]=Ft(t[i],e[i]);return n}function ld(){return{app:null,config:{isNativeTag:tm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ng=0;function Fg(t,e){return function(i,r=null){Be(i)||(i=bt({},i)),r!=null&&!ot(r)&&(r=null);const s=ld(),o=new Set;let a=!1;const l=s.app={_uid:Ng++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Td,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Be(c.install)?(o.add(c),c.install(l,...u)):Be(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Ie(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Ko(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){as=l;try{return c()}finally{as=null}}};return l}}let as=null;function cd(t,e){if(_t){let n=_t.provides;const i=_t.parent&&_t.parent.provides;i===n&&(n=_t.provides=Object.create(i)),n[t]=e}}function hr(t,e,n=!1){const i=_t||Et;if(i||as){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:as._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Be(e)?e.call(i&&i.proxy):e}}function ud(){return!!(_t||Et||as)}function Og(t,e,n,i=!1){const r={},s={};_o(s,Yo,1),t.propsDefaults=Object.create(null),fd(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Fh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Bg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Ye(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Wo(t.emitsOptions,h))continue;const p=e[h];if(l)if(je(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=bn(h);r[g]=ul(l,a,g,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{fd(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!je(e,f)&&((u=Di(f))===f||!je(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=ul(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!je(e,f))&&(delete s[f],c=!0)}c&&Hn(t,"set","$attrs")}function fd(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Yr(l))continue;const c=e[l];let u;r&&je(r,u=bn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Wo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ye(n),c=a||st;for(let u=0;u<s.length;u++){const f=s[u];n[f]=ul(r,l,f,c[f],t,!je(c,f))}}return o}function ul(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Be(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(ci(r),i=c[n]=l.call(null,e),ri())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Di(n))&&(i=!0))}return i}function hd(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Be(t)){const u=f=>{l=!0;const[h,p]=hd(f,e,!0);bt(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ot(t)&&i.set(t,or),or;if(De(s))for(let u=0;u<s.length;u++){const f=bn(s[u]);iu(f)&&(o[f]=st)}else if(s)for(const u in s){const f=bn(u);if(iu(f)){const h=s[u],p=o[f]=De(h)||Be(h)?{type:h}:bt({},h);if(p){const g=ou(Boolean,p.type),_=ou(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||je(p,"default"))&&a.push(f)}}}const c=[o,a];return ot(t)&&i.set(t,c),c}function iu(t){return t[0]!=="$"}function ru(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function su(t,e){return ru(t)===ru(e)}function ou(t,e){return De(e)?e.findIndex(n=>su(n,t)):Be(e)&&su(e,t)?0:-1}const dd=t=>t[0]==="_"||t==="$stable",uc=t=>De(t)?t.map(Qt):[Qt(t)],Hg=(t,e,n)=>{if(e._n)return e;const i=ic((...r)=>uc(e(...r)),n);return i._c=!1,i},pd=(t,e,n)=>{const i=t._ctx;for(const r in t){if(dd(r))continue;const s=t[r];if(Be(s))e[r]=Hg(r,s,i);else if(s!=null){const o=uc(s);e[r]=()=>o}}},md=(t,e)=>{const n=uc(e);t.slots.default=()=>n},zg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ye(e),_o(e,"_",n)):pd(e,t.slots={})}else t.slots={},e&&md(t,e);_o(t.slots,Yo,1)},kg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=st;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(bt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,pd(e,r)),o=e}else e&&(md(t,e),o={default:1});if(s)for(const a in r)!dd(a)&&!(a in o)&&delete r[a]};function To(t,e,n,i,r=!1){if(De(t)){t.forEach((h,p)=>To(h,e&&(De(e)?e[p]:e),n,i,r));return}if(fr(i)&&!r)return;const s=i.shapeFlag&4?Ko(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,je(f,c)&&(f[c]=null)):ut(c)&&(c.value=null)),Be(l))ii(l,a,12,[o,u]);else{const h=ft(l),p=ut(l);if(h||p){const g=()=>{if(t.f){const _=h?je(f,l)?f[l]:u[l]:l.value;r?De(_)&&Vl(_,s):De(_)?_.includes(s)||_.push(s):h?(u[l]=[s],je(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,je(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,zt(g,n)):g()}}}let qn=!1;const Os=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Bs=t=>t.nodeType===8;function Gg(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(d,M)=>{if(!M.hasChildNodes()){n(null,d,M),yo(),M._vnode=d;return}qn=!1,f(M.firstChild,d,null,null,null),yo(),M._vnode=d,qn&&console.error("Hydration completed but contains mismatches.")},f=(d,M,v,E,T,A=!1)=>{const C=Bs(d)&&d.data==="[",P=()=>_(d,M,v,E,T,C),{type:S,ref:R,shapeFlag:j,patchFlag:ce}=M;let O=d.nodeType;M.el=d,ce===-2&&(A=!1,M.dynamicChildren=null);let D=null;switch(S){case yr:O!==3?M.children===""?(l(M.el=r(""),o(d),d),D=d):D=P():(d.data!==M.children&&(qn=!0,d.data=M.children),D=s(d));break;case kn:O!==8||C?D=P():D=s(d);break;case Zr:if(C&&(d=s(d),O=d.nodeType),O===1||O===3){D=d;const X=!M.children.length;for(let te=0;te<M.staticCount;te++)X&&(M.children+=D.nodeType===1?D.outerHTML:D.data),te===M.staticCount-1&&(M.anchor=D),D=s(D);return C?s(D):D}else P();break;case It:C?D=g(d,M,v,E,T,A):D=P();break;default:if(j&1)O!==1||M.type.toLowerCase()!==d.tagName.toLowerCase()?D=P():D=h(d,M,v,E,T,A);else if(j&6){M.slotScopeIds=T;const X=o(d);if(e(M,X,null,v,E,Os(X),A),D=C?m(d):s(d),D&&Bs(D)&&D.data==="teleport end"&&(D=s(D)),fr(M)){let te;C?(te=Ie(It),te.anchor=D?D.previousSibling:X.lastChild):te=d.nodeType===3?fc(""):Ie("div"),te.el=d,M.component.subTree=te}}else j&64?O!==8?D=P():D=M.type.hydrate(d,M,v,E,T,A,t,p):j&128&&(D=M.type.hydrate(d,M,v,E,Os(o(d)),T,A,t,f))}return R!=null&&To(R,null,E,M),D},h=(d,M,v,E,T,A)=>{A=A||!!M.dynamicChildren;const{type:C,props:P,patchFlag:S,shapeFlag:R,dirs:j}=M,ce=C==="input"&&j||C==="option";if(ce||S!==-1){if(j&&xn(M,null,v,"created"),P)if(ce||!A||S&48)for(const D in P)(ce&&D.endsWith("value")||Ms(D)&&!Yr(D))&&i(d,D,null,P[D],!1,void 0,v);else P.onClick&&i(d,"onClick",null,P.onClick,!1,void 0,v);let O;if((O=P&&P.onVnodeBeforeMount)&&Jt(O,v,M),j&&xn(M,null,v,"beforeMount"),((O=P&&P.onVnodeMounted)||j)&&Kh(()=>{O&&Jt(O,v,M),j&&xn(M,null,v,"mounted")},E),R&16&&!(P&&(P.innerHTML||P.textContent))){let D=p(d.firstChild,M,d,v,E,T,A);for(;D;){qn=!0;const X=D;D=D.nextSibling,a(X)}}else R&8&&d.textContent!==M.children&&(qn=!0,d.textContent=M.children)}return d.nextSibling},p=(d,M,v,E,T,A,C)=>{C=C||!!M.dynamicChildren;const P=M.children,S=P.length;for(let R=0;R<S;R++){const j=C?P[R]:P[R]=Qt(P[R]);if(d)d=f(d,j,E,T,A,C);else{if(j.type===yr&&!j.children)continue;qn=!0,n(null,j,v,null,E,T,Os(v),A)}}return d},g=(d,M,v,E,T,A)=>{const{slotScopeIds:C}=M;C&&(T=T?T.concat(C):C);const P=o(d),S=p(s(d),M,P,v,E,T,A);return S&&Bs(S)&&S.data==="]"?s(M.anchor=S):(qn=!0,l(M.anchor=c("]"),P,S),S)},_=(d,M,v,E,T,A)=>{if(qn=!0,M.el=null,A){const S=m(d);for(;;){const R=s(d);if(R&&R!==S)a(R);else break}}const C=s(d),P=o(d);return a(d),n(null,M,P,C,v,E,Os(P),T),C},m=d=>{let M=0;for(;d;)if(d=s(d),d&&Bs(d)&&(d.data==="["&&M++,d.data==="]")){if(M===0)return s(d);M--}return d};return[u,f]}const zt=Kh;function Vg(t){return gd(t)}function Wg(t){return gd(t,Gg)}function gd(t,e){const n=nl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=gn,insertStaticContent:g}=t,_=(x,L,N,G=null,z=null,re=null,se=!1,Z=null,oe=!!L.dynamicChildren)=>{if(x===L)return;x&&!Jn(x,L)&&(G=Ue(x),J(x,z,re,!0),x=null),L.patchFlag===-2&&(oe=!1,L.dynamicChildren=null);const{type:ie,ref:ye,shapeFlag:b}=L;switch(ie){case yr:m(x,L,N,G);break;case kn:d(x,L,N,G);break;case Zr:x==null&&M(L,N,G,se);break;case It:ce(x,L,N,G,z,re,se,Z,oe);break;default:b&1?T(x,L,N,G,z,re,se,Z,oe):b&6?O(x,L,N,G,z,re,se,Z,oe):(b&64||b&128)&&ie.process(x,L,N,G,z,re,se,Z,oe,Xe)}ye!=null&&z&&To(ye,x&&x.ref,re,L||x,!L)},m=(x,L,N,G)=>{if(x==null)i(L.el=a(L.children),N,G);else{const z=L.el=x.el;L.children!==x.children&&c(z,L.children)}},d=(x,L,N,G)=>{x==null?i(L.el=l(L.children||""),N,G):L.el=x.el},M=(x,L,N,G)=>{[x.el,x.anchor]=g(x.children,L,N,G,x.el,x.anchor)},v=({el:x,anchor:L},N,G)=>{let z;for(;x&&x!==L;)z=h(x),i(x,N,G),x=z;i(L,N,G)},E=({el:x,anchor:L})=>{let N;for(;x&&x!==L;)N=h(x),r(x),x=N;r(L)},T=(x,L,N,G,z,re,se,Z,oe)=>{se=se||L.type==="svg",x==null?A(L,N,G,z,re,se,Z,oe):S(x,L,z,re,se,Z,oe)},A=(x,L,N,G,z,re,se,Z)=>{let oe,ie;const{type:ye,props:b,shapeFlag:y,transition:U,dirs:Q}=x;if(oe=x.el=o(x.type,re,b&&b.is,b),y&8?u(oe,x.children):y&16&&P(x.children,oe,null,G,z,re&&ye!=="foreignObject",se,Z),Q&&xn(x,null,G,"created"),C(oe,x,x.scopeId,se,G),b){for(const ne in b)ne!=="value"&&!Yr(ne)&&s(oe,ne,null,b[ne],re,x.children,G,z,be);"value"in b&&s(oe,"value",null,b.value),(ie=b.onVnodeBeforeMount)&&Jt(ie,G,x)}Q&&xn(x,null,G,"beforeMount");const ee=(!z||z&&!z.pendingBranch)&&U&&!U.persisted;ee&&U.beforeEnter(oe),i(oe,L,N),((ie=b&&b.onVnodeMounted)||ee||Q)&&zt(()=>{ie&&Jt(ie,G,x),ee&&U.enter(oe),Q&&xn(x,null,G,"mounted")},z)},C=(x,L,N,G,z)=>{if(N&&p(x,N),G)for(let re=0;re<G.length;re++)p(x,G[re]);if(z){let re=z.subTree;if(L===re){const se=z.vnode;C(x,se,se.scopeId,se.slotScopeIds,z.parent)}}},P=(x,L,N,G,z,re,se,Z,oe=0)=>{for(let ie=oe;ie<x.length;ie++){const ye=x[ie]=Z?Zn(x[ie]):Qt(x[ie]);_(null,ye,L,N,G,z,re,se,Z)}},S=(x,L,N,G,z,re,se)=>{const Z=L.el=x.el;let{patchFlag:oe,dynamicChildren:ie,dirs:ye}=L;oe|=x.patchFlag&16;const b=x.props||st,y=L.props||st;let U;N&&pi(N,!1),(U=y.onVnodeBeforeUpdate)&&Jt(U,N,L,x),ye&&xn(L,x,N,"beforeUpdate"),N&&pi(N,!0);const Q=z&&L.type!=="foreignObject";if(ie?R(x.dynamicChildren,ie,Z,N,G,Q,re):se||q(x,L,Z,null,N,G,Q,re,!1),oe>0){if(oe&16)j(Z,L,b,y,N,G,z);else if(oe&2&&b.class!==y.class&&s(Z,"class",null,y.class,z),oe&4&&s(Z,"style",b.style,y.style,z),oe&8){const ee=L.dynamicProps;for(let ne=0;ne<ee.length;ne++){const de=ee[ne],ue=b[de],W=y[de];(W!==ue||de==="value")&&s(Z,de,ue,W,z,x.children,N,G,be)}}oe&1&&x.children!==L.children&&u(Z,L.children)}else!se&&ie==null&&j(Z,L,b,y,N,G,z);((U=y.onVnodeUpdated)||ye)&&zt(()=>{U&&Jt(U,N,L,x),ye&&xn(L,x,N,"updated")},G)},R=(x,L,N,G,z,re,se)=>{for(let Z=0;Z<L.length;Z++){const oe=x[Z],ie=L[Z],ye=oe.el&&(oe.type===It||!Jn(oe,ie)||oe.shapeFlag&70)?f(oe.el):N;_(oe,ie,ye,null,G,z,re,se,!0)}},j=(x,L,N,G,z,re,se)=>{if(N!==G){if(N!==st)for(const Z in N)!Yr(Z)&&!(Z in G)&&s(x,Z,N[Z],null,se,L.children,z,re,be);for(const Z in G){if(Yr(Z))continue;const oe=G[Z],ie=N[Z];oe!==ie&&Z!=="value"&&s(x,Z,ie,oe,se,L.children,z,re,be)}"value"in G&&s(x,"value",N.value,G.value)}},ce=(x,L,N,G,z,re,se,Z,oe)=>{const ie=L.el=x?x.el:a(""),ye=L.anchor=x?x.anchor:a("");let{patchFlag:b,dynamicChildren:y,slotScopeIds:U}=L;U&&(Z=Z?Z.concat(U):U),x==null?(i(ie,N,G),i(ye,N,G),P(L.children,N,ye,z,re,se,Z,oe)):b>0&&b&64&&y&&x.dynamicChildren?(R(x.dynamicChildren,y,N,z,re,se,Z),(L.key!=null||z&&L===z.subTree)&&_d(x,L,!0)):q(x,L,N,ye,z,re,se,Z,oe)},O=(x,L,N,G,z,re,se,Z,oe)=>{L.slotScopeIds=Z,x==null?L.shapeFlag&512?z.ctx.activate(L,N,G,se,oe):D(L,N,G,z,re,se,oe):X(x,L,oe)},D=(x,L,N,G,z,re,se)=>{const Z=x.component=Kg(x,G,z);if(oc(x)&&(Z.ctx.renderer=Xe),Zg(Z),Z.asyncDep){if(z&&z.registerDep(Z,te),!x.el){const oe=Z.subTree=Ie(kn);d(null,oe,L,N)}return}te(Z,x,L,N,z,re,se)},X=(x,L,N)=>{const G=L.component=x.component;if(og(x,L,N))if(G.asyncDep&&!G.asyncResolved){V(G,L,N);return}else G.next=L,eg(G.update),G.update();else L.el=x.el,G.vnode=L},te=(x,L,N,G,z,re,se)=>{const Z=()=>{if(x.isMounted){let{next:ye,bu:b,u:y,parent:U,vnode:Q}=x,ee=ye,ne;pi(x,!1),ye?(ye.el=Q.el,V(x,ye,se)):ye=Q,b&&uo(b),(ne=ye.props&&ye.props.onVnodeBeforeUpdate)&&Jt(ne,U,ye,Q),pi(x,!0);const de=la(x),ue=x.subTree;x.subTree=de,_(ue,de,f(ue.el),Ue(ue),x,z,re),ye.el=de.el,ee===null&&rc(x,de.el),y&&zt(y,z),(ne=ye.props&&ye.props.onVnodeUpdated)&&zt(()=>Jt(ne,U,ye,Q),z)}else{let ye;const{el:b,props:y}=L,{bm:U,m:Q,parent:ee}=x,ne=fr(L);if(pi(x,!1),U&&uo(U),!ne&&(ye=y&&y.onVnodeBeforeMount)&&Jt(ye,ee,L),pi(x,!0),b&&He){const de=()=>{x.subTree=la(x),He(b,x.subTree,x,z,null)};ne?L.type.__asyncLoader().then(()=>!x.isUnmounted&&de()):de()}else{const de=x.subTree=la(x);_(null,de,N,G,x,z,re),L.el=de.el}if(Q&&zt(Q,z),!ne&&(ye=y&&y.onVnodeMounted)){const de=L;zt(()=>Jt(ye,ee,de),z)}(L.shapeFlag&256||ee&&fr(ee.vnode)&&ee.vnode.shapeFlag&256)&&x.a&&zt(x.a,z),x.isMounted=!0,L=N=G=null}},oe=x.effect=new Yl(Z,()=>Vo(ie),x.scope),ie=x.update=()=>oe.run();ie.id=x.uid,pi(x,!0),ie()},V=(x,L,N)=>{L.component=x;const G=x.vnode.props;x.vnode=L,x.next=null,Bg(x,L.props,G,N),kg(x,L.children,N),Rr(),Yc(),Cr()},q=(x,L,N,G,z,re,se,Z,oe=!1)=>{const ie=x&&x.children,ye=x?x.shapeFlag:0,b=L.children,{patchFlag:y,shapeFlag:U}=L;if(y>0){if(y&128){le(ie,b,N,G,z,re,se,Z,oe);return}else if(y&256){ae(ie,b,N,G,z,re,se,Z,oe);return}}U&8?(ye&16&&be(ie,z,re),b!==ie&&u(N,b)):ye&16?U&16?le(ie,b,N,G,z,re,se,Z,oe):be(ie,z,re,!0):(ye&8&&u(N,""),U&16&&P(b,N,G,z,re,se,Z,oe))},ae=(x,L,N,G,z,re,se,Z,oe)=>{x=x||or,L=L||or;const ie=x.length,ye=L.length,b=Math.min(ie,ye);let y;for(y=0;y<b;y++){const U=L[y]=oe?Zn(L[y]):Qt(L[y]);_(x[y],U,N,null,z,re,se,Z,oe)}ie>ye?be(x,z,re,!0,!1,b):P(L,N,G,z,re,se,Z,oe,b)},le=(x,L,N,G,z,re,se,Z,oe)=>{let ie=0;const ye=L.length;let b=x.length-1,y=ye-1;for(;ie<=b&&ie<=y;){const U=x[ie],Q=L[ie]=oe?Zn(L[ie]):Qt(L[ie]);if(Jn(U,Q))_(U,Q,N,null,z,re,se,Z,oe);else break;ie++}for(;ie<=b&&ie<=y;){const U=x[b],Q=L[y]=oe?Zn(L[y]):Qt(L[y]);if(Jn(U,Q))_(U,Q,N,null,z,re,se,Z,oe);else break;b--,y--}if(ie>b){if(ie<=y){const U=y+1,Q=U<ye?L[U].el:G;for(;ie<=y;)_(null,L[ie]=oe?Zn(L[ie]):Qt(L[ie]),N,Q,z,re,se,Z,oe),ie++}}else if(ie>y)for(;ie<=b;)J(x[ie],z,re,!0),ie++;else{const U=ie,Q=ie,ee=new Map;for(ie=Q;ie<=y;ie++){const pe=L[ie]=oe?Zn(L[ie]):Qt(L[ie]);pe.key!=null&&ee.set(pe.key,ie)}let ne,de=0;const ue=y-Q+1;let W=!1,we=0;const Te=new Array(ue);for(ie=0;ie<ue;ie++)Te[ie]=0;for(ie=U;ie<=b;ie++){const pe=x[ie];if(de>=ue){J(pe,z,re,!0);continue}let ve;if(pe.key!=null)ve=ee.get(pe.key);else for(ne=Q;ne<=y;ne++)if(Te[ne-Q]===0&&Jn(pe,L[ne])){ve=ne;break}ve===void 0?J(pe,z,re,!0):(Te[ve-Q]=ie+1,ve>=we?we=ve:W=!0,_(pe,L[ve],N,null,z,re,se,Z,oe),de++)}const Ae=W?Xg(Te):or;for(ne=Ae.length-1,ie=ue-1;ie>=0;ie--){const pe=Q+ie,ve=L[pe],ze=pe+1<ye?L[pe+1].el:G;Te[ie]===0?_(null,ve,N,ze,z,re,se,Z,oe):W&&(ne<0||ie!==Ae[ne]?H(ve,N,ze,2):ne--)}}},H=(x,L,N,G,z=null)=>{const{el:re,type:se,transition:Z,children:oe,shapeFlag:ie}=x;if(ie&6){H(x.component.subTree,L,N,G);return}if(ie&128){x.suspense.move(L,N,G);return}if(ie&64){se.move(x,L,N,Xe);return}if(se===It){i(re,L,N);for(let b=0;b<oe.length;b++)H(oe[b],L,N,G);i(x.anchor,L,N);return}if(se===Zr){v(x,L,N);return}if(G!==2&&ie&1&&Z)if(G===0)Z.beforeEnter(re),i(re,L,N),zt(()=>Z.enter(re),z);else{const{leave:b,delayLeave:y,afterLeave:U}=Z,Q=()=>i(re,L,N),ee=()=>{b(re,()=>{Q(),U&&U()})};y?y(re,Q,ee):ee()}else i(re,L,N)},J=(x,L,N,G=!1,z=!1)=>{const{type:re,props:se,ref:Z,children:oe,dynamicChildren:ie,shapeFlag:ye,patchFlag:b,dirs:y}=x;if(Z!=null&&To(Z,null,N,x,!0),ye&256){L.ctx.deactivate(x);return}const U=ye&1&&y,Q=!fr(x);let ee;if(Q&&(ee=se&&se.onVnodeBeforeUnmount)&&Jt(ee,L,x),ye&6)Me(x.component,N,G);else{if(ye&128){x.suspense.unmount(N,G);return}U&&xn(x,null,L,"beforeUnmount"),ye&64?x.type.remove(x,L,N,z,Xe,G):ie&&(re!==It||b>0&&b&64)?be(ie,L,N,!1,!0):(re===It&&b&384||!z&&ye&16)&&be(oe,L,N),G&&me(x)}(Q&&(ee=se&&se.onVnodeUnmounted)||U)&&zt(()=>{ee&&Jt(ee,L,x),U&&xn(x,null,L,"unmounted")},N)},me=x=>{const{type:L,el:N,anchor:G,transition:z}=x;if(L===It){_e(N,G);return}if(L===Zr){E(x);return}const re=()=>{r(N),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(x.shapeFlag&1&&z&&!z.persisted){const{leave:se,delayLeave:Z}=z,oe=()=>se(N,re);Z?Z(x.el,re,oe):oe()}else re()},_e=(x,L)=>{let N;for(;x!==L;)N=h(x),r(x),x=N;r(L)},Me=(x,L,N)=>{const{bum:G,scope:z,update:re,subTree:se,um:Z}=x;G&&uo(G),z.stop(),re&&(re.active=!1,J(se,x,L,N)),Z&&zt(Z,L),zt(()=>{x.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},be=(x,L,N,G=!1,z=!1,re=0)=>{for(let se=re;se<x.length;se++)J(x[se],L,N,G,z)},Ue=x=>x.shapeFlag&6?Ue(x.component.subTree):x.shapeFlag&128?x.suspense.next():h(x.anchor||x.el),Ce=(x,L,N)=>{x==null?L._vnode&&J(L._vnode,null,null,!0):_(L._vnode||null,x,L,null,null,null,N),Yc(),yo(),L._vnode=x},Xe={p:_,um:J,m:H,r:me,mt:D,mc:P,pc:q,pbc:R,n:Ue,o:t};let yt,He;return e&&([yt,He]=e(Xe)),{render:Ce,hydrate:yt,createApp:Fg(Ce,yt)}}function pi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _d(t,e,n=!1){const i=t.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Zn(r[s]),a.el=o.el),n||_d(o,a)),a.type===yr&&(a.el=o.el)}}function Xg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const qg=t=>t.__isTeleport,It=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),kn=Symbol.for("v-cmt"),Zr=Symbol.for("v-stc"),Jr=[];let nn=null;function ct(t=!1){Jr.push(nn=t?null:[])}function vd(){Jr.pop(),nn=Jr[Jr.length-1]||null}let Mr=1;function au(t){Mr+=t}function xd(t){return t.dynamicChildren=Mr>0?nn||or:null,vd(),Mr>0&&nn&&nn.push(t),t}function Tn(t,e,n,i,r,s){return xd(nt(t,e,n,i,r,s,!0))}function fn(t,e,n,i,r){return xd(Ie(t,e,n,i,r,!0))}function ls(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const Yo="__vInternal",yd=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ft(t)||ut(t)||Be(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function nt(t,e=null,n=null,i=0,r=null,s=t===It?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yd(e),ref:e&&fo(e),scopeId:Xo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Et};return a?(hc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ft(n)?8:16),Mr>0&&!o&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const Ie=jg;function jg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===nd)&&(t=kn),ls(t)){const a=Sr(t,e,!0);return n&&hc(a,n),Mr>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(t)]=a:nn.push(a)),a.patchFlag|=-2,a}if(n_(t)&&(t=t.__vccOpts),e){e=Md(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=pn(a)),ot(l)&&(Bh(l)&&!De(l)&&(l=bt({},l)),e.style=xr(l))}const o=ft(t)?1:ag(t)?128:qg(t)?64:ot(t)?4:Be(t)?2:0;return nt(t,e,n,i,r,o,s,!0)}function Md(t){return t?Bh(t)||Yo in t?bt({},t):t:null}function Sr(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Sd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yd(a),ref:e&&e.ref?n&&r?De(r)?r.concat(fo(e)):[r,fo(e)]:fo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sr(t.ssContent),ssFallback:t.ssFallback&&Sr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function fc(t=" ",e=0){return Ie(yr,null,t,e)}function Qt(t){return t==null||typeof t=="boolean"?Ie(kn):De(t)?Ie(It,null,t.slice()):typeof t=="object"?Zn(t):Ie(yr,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sr(t)}function hc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(De(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),hc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Yo in e)?e._ctx=Et:r===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),i&64?(n=16,e=[fc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sd(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pn([e.class,i.class]));else if(r==="style")e.style=xr([e.style,i.style]);else if(Ms(r)){const s=e[r],o=i[r];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Jt(t,e,n,i=null){_n(t,e,7,[n,i])}const $g=ld();let Yg=0;function Kg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||$g,s={uid:Yg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new mm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hd(i,r),emitsOptions:Yh(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ng.bind(null,s),t.ce&&t.ce(s),s}let _t=null;const Ss=()=>_t||Et;let dc,Bi,lu="__VUE_INSTANCE_SETTERS__";(Bi=nl()[lu])||(Bi=nl()[lu]=[]),Bi.push(t=>_t=t),dc=t=>{Bi.length>1?Bi.forEach(e=>e(t)):Bi[0](t)};const ci=t=>{dc(t),t.scope.on()},ri=()=>{_t&&_t.scope.off(),dc(null)};function Ed(t){return t.vnode.shapeFlag&4}let Er=!1;function Zg(t,e=!1){Er=e;const{props:n,children:i}=t.vnode,r=Ed(t);Og(t,n,r,e),zg(t,i);const s=r?Jg(t,e):void 0;return Er=!1,s}function Jg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hh(new Proxy(t.ctx,Rg));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?e_(t):null;ci(t),Rr();const s=ii(i,t,0,[t.props,r]);if(Cr(),ri(),Xl(s)){if(s.then(ri,ri),e)return s.then(o=>{fl(t,o,e)}).catch(o=>{Pr(o,t,0)});t.asyncDep=s}else fl(t,s,e)}else bd(t,e)}function fl(t,e,n){Be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ot(e)&&(t.setupState=Vh(e)),bd(t,n)}let cu;function bd(t,e,n){const i=t.type;if(!t.render){if(!e&&cu&&!i.render){const r=i.template||cc(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=bt(bt({isCustomElement:s,delimiters:a},o),l);i.render=cu(r,c)}}t.render=i.render||gn}ci(t),Rr(),Pg(t),Cr(),ri()}function Qg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Wt(t,"get","$attrs"),e[n]}}))}function e_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Qg(t)},slots:t.slots,emit:t.emit,expose:e}}function Ko(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vh(Hh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kr)return Kr[n](t)},has(e,n){return n in e||n in Kr}}))}function t_(t,e=!0){return Be(t)?t.displayName||t.name:t.name||e&&t.__name}function n_(t){return Be(t)&&"__vccOpts"in t}const Gt=(t,e)=>Zm(t,e,Er);function cs(t,e,n){const i=arguments.length;return i===2?ot(e)&&!De(e)?ls(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ls(n)&&(n=[n]),Ie(t,e,n))}const i_=Symbol.for("v-scx"),r_=()=>hr(i_),Td="3.3.4",s_="http://www.w3.org/2000/svg",Si=typeof document<"u"?document:null,uu=Si&&Si.createElement("template"),o_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Si.createElementNS(s_,t):Si.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Si.createTextNode(t),createComment:t=>Si.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Si.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{uu.innerHTML=i?`<svg>${t}</svg>`:t;const a=uu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function a_(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l_(t,e,n){const i=t.style,r=ft(n);if(n&&!r){if(e&&!ft(e))for(const s in e)n[s]==null&&hl(i,s,"");for(const s in n)hl(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const fu=/\s*!important$/;function hl(t,e,n){if(De(n))n.forEach(i=>hl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=c_(t,e);fu.test(n)?t.setProperty(Di(i),n.replace(fu,""),"important"):t[i]=n}}const hu=["Webkit","Moz","ms"],fa={};function c_(t,e){const n=fa[e];if(n)return n;let i=bn(e);if(i!=="filter"&&i in t)return fa[e]=i;i=ko(i);for(let r=0;r<hu.length;r++){const s=hu[r]+i;if(s in t)return fa[e]=s}return e}const du="http://www.w3.org/1999/xlink";function u_(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(du,e.slice(6,e.length)):t.setAttributeNS(du,e,n);else{const s=pm(e);n==null||s&&!bh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function f_(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=bh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function nr(t,e,n,i){t.addEventListener(e,n,i)}function h_(t,e,n,i){t.removeEventListener(e,n,i)}function d_(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=p_(e);if(i){const c=s[e]=__(i,r);nr(t,a,c,l)}else o&&(h_(t,a,o,l),s[e]=void 0)}}const pu=/(?:Once|Passive|Capture)$/;function p_(t){let e;if(pu.test(t)){e={};let i;for(;i=t.match(pu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Di(t.slice(2)),e]}let ha=0;const m_=Promise.resolve(),g_=()=>ha||(m_.then(()=>ha=0),ha=Date.now());function __(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;_n(v_(i,n.value),e,5,[i])};return n.value=t,n.attached=g_(),n}function v_(t,e){if(De(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const mu=/^on[a-z]/,x_=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?a_(t,i,r):e==="style"?l_(t,n,i):Ms(e)?Gl(e)||d_(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):y_(t,e,i,r))?f_(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),u_(t,e,i,r))};function y_(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&mu.test(e)&&Be(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||mu.test(e)&&ft(n)?!1:e in t}function Pw(t){const e=Ss();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>pl(s,r))},i=()=>{const r=t(e.proxy);dl(e.subTree,r),n(r)};gg(i),Ni(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),ac(()=>r.disconnect())})}function dl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{dl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)pl(t.el,e);else if(t.type===It)t.children.forEach(n=>dl(n,e));else if(t.type===Zr){let{el:n,anchor:i}=t;for(;n&&(pl(n,e),n!==i);)n=n.nextSibling}}function pl(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const gu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return De(e)?n=>uo(e,n):e};function M_(t){t.target.composing=!0}function _u(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ao={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=gu(r);const s=i||r.props&&r.props.type==="number";nr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=tl(a)),t._assign(a)}),n&&nr(t,"change",()=>{t.value=t.value.trim()}),e||(nr(t,"compositionstart",M_),nr(t,"compositionend",_u),nr(t,"change",_u))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=gu(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&tl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},S_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},E_=(t,e)=>n=>{if(!("key"in n))return;const i=Di(n.key);if(e.some(r=>r===i||S_[r]===i))return t(n)},Ad=bt({patchProp:x_},o_);let Qr,vu=!1;function b_(){return Qr||(Qr=Vg(Ad))}function T_(){return Qr=vu?Qr:Wg(Ad),vu=!0,Qr}const A_=(...t)=>{const e=b_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=wd(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},w_=(...t)=>{const e=T_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=wd(i);if(r)return n(r,!0,r instanceof SVGElement)},e};function wd(t){return ft(t)?document.querySelector(t):t}const R_=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,C_=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,P_=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function L_(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){I_(t);return}return e}function I_(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function U_(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t[t.length-1]==='"')return n.slice(1,-1);if(n.length<=9){const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!P_.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(R_.test(t)||C_.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,L_)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}const D_=/#/g,N_=/&/g,F_=/=/g,pc=/\+/g,O_=/%5e/gi,B_=/%60/gi,H_=/%7c/gi,z_=/%20/gi;function k_(t){return encodeURI(""+t).replace(H_,"|")}function ml(t){return k_(typeof t=="string"?t:JSON.stringify(t)).replace(pc,"%2B").replace(z_,"+").replace(D_,"%23").replace(N_,"%26").replace(B_,"`").replace(O_,"^")}function da(t){return ml(t).replace(F_,"%3D")}function wo(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function G_(t){return wo(t.replace(pc," "))}function V_(t){return wo(t.replace(pc," "))}function mc(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=G_(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=V_(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function W_(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${da(t)}=${ml(n)}`).join("&"):`${da(t)}=${ml(e)}`:da(t)}function Rd(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>W_(e,t[e])).filter(Boolean).join("&")}const X_=/^\w{2,}:([/\\]{1,2})/,q_=/^\w{2,}:([/\\]{2})?/,j_=/^([/\\]\s*){2,}[^/\\]/;function Es(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?X_.test(t):q_.test(t)||(e.acceptRelative?j_.test(t):!1)}const $_=/\/$|\/\?/;function gl(t="",e=!1){return e?$_.test(t):t.endsWith("/")}function gc(t="",e=!1){if(!e)return(gl(t)?t.slice(0,-1):t)||"/";if(!gl(t,!0))return t||"/";const[n,...i]=t.split("?");return(n.slice(0,-1)||"/")+(i.length>0?`?${i.join("?")}`:"")}function Ro(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(gl(t,!0))return t||"/";const[n,...i]=t.split("?");return n+"/"+(i.length>0?`?${i.join("?")}`:"")}function Y_(t=""){return t.startsWith("/")}function xu(t=""){return Y_(t)?t:"/"+t}function K_(t,e){if(Pd(e)||Es(t))return t;const n=gc(e);return t.startsWith(n)?t:Lr(n,t)}function Z_(t,e){if(Pd(e))return t;const n=gc(e);if(!t.startsWith(n))return t;const i=t.slice(n.length);return i[0]==="/"?i:"/"+i}function Cd(t,e){const n=Ir(t),i={...mc(n.search),...e};return n.search=Rd(i),Ld(n)}function Pd(t){return!t||t==="/"}function J_(t){return t&&t!=="/"}const Q_=/^\.?\//;function Lr(t,...e){let n=t||"";for(const i of e.filter(r=>J_(r)))if(n){const r=i.replace(Q_,"");n=Ro(n)+r}else n=i;return n}function ev(t,e,n={}){return n.trailingSlash||(t=Ro(t),e=Ro(e)),n.leadingSlash||(t=xu(t),e=xu(e)),n.encoding||(t=wo(t),e=wo(e)),t===e}function Ir(t="",e){if(!Es(t,{acceptRelative:!0}))return e?Ir(e+t):yu(t);const[n="",i,r=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",o=""]=(r.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:l,hash:c}=yu(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:i?i.slice(0,Math.max(0,i.length-1)):"",host:s,pathname:a,search:l,hash:c}}function yu(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function Ld(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class tv extends Error{constructor(){super(...arguments),this.name="FetchError"}}function nv(t,e,n){let i="";e&&(i=e.message),t&&n?i=`${i} (${n.status} ${n.statusText} (${t.toString()}))`:t&&(i=`${i} (${t.toString()})`);const r=new tv(i);return Object.defineProperty(r,"request",{get(){return t}}),Object.defineProperty(r,"response",{get(){return n}}),Object.defineProperty(r,"data",{get(){return n&&n._data}}),Object.defineProperty(r,"status",{get(){return n&&n.status}}),Object.defineProperty(r,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(r,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(r,"statusMessage",{get(){return n&&n.statusText}}),r}const iv=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Mu(t="GET"){return iv.has(t.toUpperCase())}function rv(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const sv=new Set(["image/svg","application/xml","application/xhtml","application/html"]),ov=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function av(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return ov.test(e)?"json":sv.has(e)||e.startsWith("text/")?"text":"blob"}function lv(t,e,n=globalThis.Headers){const i={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(i.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(i.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){i.headers=new n((e==null?void 0:e.headers)||{});for(const[r,s]of new n((t==null?void 0:t.headers)||{}))i.headers.set(r,s)}return i}const cv=new Set([408,409,425,429,500,502,503,504]);function Id(t){const{fetch:e,Headers:n}=t;function i(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){let c;typeof o.options.retry=="number"?c=o.options.retry:c=Mu(o.options.method)?0:1;const u=o.response&&o.response.status||500;if(c>0&&cv.has(u))return r(o.request,{...o.options,retry:c-1})}const l=nv(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}const r=async function(a,l={}){const c={request:a,options:lv(l,t.defaults,n),response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=K_(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=Cd(c.request,{...c.options.params,...c.options.query})),c.options.body&&Mu(c.options.method)&&rv(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")));try{c.response=await e(c.request,c.options)}catch(f){return c.error=f,c.options.onRequestError&&await c.options.onRequestError(c),await i(c)}const u=(c.options.parseResponse?"json":c.options.responseType)||av(c.response.headers.get("content-type")||"");if(u==="json"){const f=await c.response.text(),h=c.options.parseResponse||U_;c.response._data=h(f)}else u==="stream"?c.response._data=c.response.body:c.response._data=await c.response[u]();return c.options.onResponse&&await c.options.onResponse(c),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),await i(c)):c.response},s=async function(a,l){return(await r(a,l))._data};return s.raw=r,s.native=e,s.create=(o={})=>Id({...t,defaults:{...t.defaults,...o}}),s}const Ud=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),uv=Ud.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),fv=Ud.Headers,hv=Id({fetch:uv,Headers:fv}),dv=hv,pv=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Co=pv().app,mv=()=>Co.baseURL,gv=()=>Co.buildAssetsDir,_v=(...t)=>Lr(Dd(),gv(),...t),Dd=(...t)=>{const e=Co.cdnURL||Co.baseURL;return t.length?Lr(e,...t):e};globalThis.__buildAssetsURL=_v,globalThis.__publicAssetsURL=Dd;function _l(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?_l(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const vv={run:t=>t()},xv=()=>vv,Nd=typeof console.createTask<"u"?console.createTask:xv;function yv(t,e){const n=e.shift(),i=Nd(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function Mv(t,e){const n=e.shift(),i=Nd(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function pa(t,e){for(const n of[...t])n(e)}class Sv{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){const i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=_l(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const n=_l(e);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(yv,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(Mv,e,...n)}callHookWith(e,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&pa(this._before,r);const s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&pa(this._after,r)}):(this._after&&r&&pa(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Fd(){return new Sv}function Ev(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&e===void 0){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;vl.add(c);try{const u=r?r.run(o,a):a();return n||(e=void 0),await u}finally{vl.delete(c)}}}}function bv(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=Ev({...t,...i})),e[n],e[n]}}}const Po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Su="__unctx__",Tv=Po[Su]||(Po[Su]=bv()),Av=(t,e={})=>Tv.get(t,e),Eu="__unctx_async_handlers__",vl=Po[Eu]||(Po[Eu]=new Set);function wv(t){const e=[];for(const r of vl){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const Od=Av("nuxt-app"),Rv="__nuxt_plugin";function Cv(t){let e=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.6.5"},get vue(){return n.vueApp.version}},payload:zn({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:r=>Iv(n,r),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=Fd(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,s)=>{const o="$"+r;Hs(n,o,s),Hs(n.vueApp.config.globalProperties,o,s)},Hs(n.vueApp,"$nuxt",n),Hs(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",s=>{n.callHook("app:chunkError",{error:s.payload})}),window.useNuxtApp=window.useNuxtApp||et;const r=n.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});n.hook("app:mounted",r)}const i=zn(n.payload.config);return n.provide("config",i),n}async function Pv(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function Lv(t,e){const n=[],i=[];for(const r of e){const s=Pv(t,r);r.parallel?n.push(s.catch(o=>i.push(o))):await s}if(await Promise.all(n),i.length)throw i[0]}/*! @__NO_SIDE_EFFECTS__ */function Fi(t){return typeof t=="function"?t:(delete t.name,Object.assign(t.setup||(()=>{}),t,{[Rv]:!0}))}function Iv(t,e,n){const i=()=>n?e(...n):e();return Od.set(t),t.vueApp.runWithContext(i)}/*! @__NO_SIDE_EFFECTS__ */function et(){var e;let t;if(ud()&&(t=(e=Ss())==null?void 0:e.appContext.app.$nuxt),t=t||Od.tryUse(),!t)throw new Error("[nuxt] instance unavailable");return t}/*! @__NO_SIDE_EFFECTS__ */function Lo(){return et().$config}function Hs(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const Uv="modulepreload",Dv=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},bu={},Nv=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Dv(s,i),s in bu)return;bu[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Uv,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},us=(...t)=>Nv(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),Fv=-1,Ov=-2,Bv=-3,Hv=-4,zv=-5,kv=-6;function Gv(t,e){return Vv(JSON.parse(t),e)}function Vv(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);function r(s,o=!1){if(s===Fv)return;if(s===Bv)return NaN;if(s===Hv)return 1/0;if(s===zv)return-1/0;if(s===kv)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return i[s]=c(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const u=new Set;i[s]=u;for(let p=1;p<a.length;p+=1)u.add(r(a[p]));break;case"Map":const f=new Map;i[s]=f;for(let p=1;p<a.length;p+=2)f.set(r(a[p]),r(a[p+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let p=1;p<a.length;p+=2)h[a[p]]=r(a[p+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==Ov&&(l[c]=r(u))}}else{const l={};i[s]=l;for(const c in a){const u=a[c];l[c]=r(u)}}return i[s]}return r(0)}function Wv(t){return Array.isArray(t)?t:[t]}const Bd=["title","script","style","noscript"],Hd=["base","meta","link","style","script","noscript"],Xv=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],qv=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Tu=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function zd(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function xl(t){return zd(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function jv(t){let e=9;for(const n of t)for(let i=0;i<n.length;)e=Math.imul(e^n.charCodeAt(i++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function kd(t,e){const{props:n,tag:i}=t;if(qv.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];i==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof n[s]<"u"){const o=String(n[s]);return e&&!e(o)?!1:`${i}:${s}:${o}`}return!1}function Au(t,e){return t==null?e||null:typeof t=="function"?t(e):t}function zs(t,e=!1,n){const{tag:i,$el:r}=t;r&&(Object.entries(i.props).forEach(([s,o])=>{o=String(o);const a=`attr:${s}`;if(s==="class"){if(!o)return;for(const l of o.split(" ")){const c=`${a}:${l}`;n&&n(t,c,()=>r.classList.remove(l)),r.classList.contains(l)||r.classList.add(l)}return}n&&!s.startsWith("data-h-")&&n(t,a,()=>r.removeAttribute(s)),(e||r.getAttribute(s)!==o)&&r.setAttribute(s,o)}),Bd.includes(i.tag)&&(i.textContent&&i.textContent!==r.textContent?r.textContent=i.textContent:i.innerHTML&&i.innerHTML!==r.innerHTML&&(r.innerHTML=i.innerHTML)))}let Br=!1;async function $v(t,e={}){var h,p;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const i=e.document||t.resolvedOptions.document||window.document,r=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(Br=Br||t._hash||!1,Br)){const g=jv(r.map(_=>_.tag._h));if(Br===g)return;Br=g}const s=t._popSideEffectQueue();t.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([_,m])=>{s[_]=m})});const o=(g,_,m)=>{_=`${g.renderId}:${_}`,g.entry&&(g.entry._sde[_]=m),delete s[_]};function a(g){const _=t.headEntries().find(d=>d._i===g._e),m={renderId:g._d||xl(g),$el:null,shouldRender:!0,tag:g,entry:_,markSideEffect:(d,M)=>o(m,d,M)};return m}const l=[],c={body:[],head:[]},u=g=>{t._elMap[g.renderId]=g.$el,l.push(g),o(g,"el",()=>{var _;(_=g.$el)==null||_.remove(),delete t._elMap[g.renderId]})};for(const g of r){if(await t.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:_}=g;if(_.tag==="title"){i.title=_.textContent||"",l.push(g);continue}if(_.tag==="htmlAttrs"||_.tag==="bodyAttrs"){g.$el=i[_.tag==="htmlAttrs"?"documentElement":"body"],zs(g,!1,o),l.push(g);continue}if(g.$el=t._elMap[g.renderId],!g.$el&&_.key&&(g.$el=i.querySelector(`${(h=_.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${_.tag}[data-h-${_._h}]`)),g.$el){g.tag._d&&zs(g),u(g);continue}c[(p=_.tagPosition)!=null&&p.startsWith("body")?"body":"head"].push(g)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(c).forEach(([g,_])=>{var d;if(!_.length)return;const m=(d=i==null?void 0:i[g])==null?void 0:d.children;if(m){for(const M of[...m].reverse()){const v=M.tagName.toLowerCase();if(!Hd.includes(v))continue;const E=M.getAttributeNames().reduce((P,S)=>({...P,[S]:M.getAttribute(S)}),{}),T={tag:v,props:E};M.innerHTML&&(T.innerHTML=M.innerHTML);const A=xl(T);let C=_.findIndex(P=>(P==null?void 0:P.renderId)===A);if(C===-1){const P=kd(T);C=_.findIndex(S=>(S==null?void 0:S.tag._d)&&S.tag._d===P)}if(C!==-1){const P=_[C];P.$el=M,zs(P),u(P),delete _[C]}}_.forEach(M=>{const v=M.tag.tagPosition||"head";f[v]=f[v]||i.createDocumentFragment(),M.$el||(M.$el=i.createElement(M.tag.tag),zs(M,!0)),f[v].appendChild(M.$el),u(M)})}}),f.head&&i.head.appendChild(f.head),f.bodyOpen&&i.body.insertBefore(f.bodyOpen,i.body.firstChild),f.bodyClose&&i.body.appendChild(f.bodyClose);for(const g of l)await t.hooks.callHook("dom:renderTag",g);Object.values(s).forEach(g=>g())}let ma=null;async function Yv(t,e={}){function n(){return ma=null,$v(t,e)}const i=e.delayFn||(r=>setTimeout(r,10));return ma=ma||new Promise(r=>i(()=>r(n())))}function Kv(t){return{hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Yv(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}}}function Zv(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const wu={base:-1,title:1},Ru={critical:-8,high:-1,low:2};function Io(t){let e=10;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props.charset&&(e=-2),t.props["http-equiv"]==="content-security-policy"&&(e=0)):t.tag=="link"&&t.props.rel==="preconnect"?e=2:t.tag in wu&&(e=wu[t.tag]),typeof n=="string"&&n in Ru?e+Ru[n]:e)}const Jv=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Qv(){return{hooks:{"tags:resolve":t=>{const e=n=>{var i;return(i=t.tags.find(r=>r._d===n))==null?void 0:i._p};for(const{prefix:n,offset:i}of Jv)for(const r of t.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(n))){const s=e(r.tagPriority.replace(n,""));typeof s<"u"&&(r._p=s+i)}t.tags.sort((n,i)=>n._p-i._p).sort((n,i)=>Io(n)-Io(i))}}}}function ex(){return{hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(r=>r.tag==="titleTemplate");const i=e.findIndex(r=>r.tag==="title");if(i!==-1&&n!==-1){const r=Au(e[n].textContent,e[i].textContent);r!==null?e[i].textContent=r||e[i].textContent:delete e[i]}else if(n!==-1){const r=Au(e[n].textContent);r!==null&&(e[n].textContent=r,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}}function tx(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const nx=["link","style","script","noscript"];function ix(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=xl(t)),t.key&&nx.includes(t.tag)&&(t._h=zd(t.key),t.props[`data-h-${t._h}`]="")}}}}const Cu=["script","link","bodyAttrs"];function rx(){const t=(e,n)=>{const i={},r={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?r[o]=a:i[o]=a});let s;return e==="dom"&&n.tag==="script"&&typeof i.src=="string"&&typeof r.onload<"u"&&(s=i.src,delete i.src),{props:i,eventHandlers:r,delayedSrc:s}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!Cu.includes(n.tag)||!Object.entries(n.props).find(([i,r])=>i.startsWith("on")&&typeof r=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!Cu.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([s,o])=>s.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:i,delayedSrc:r}=t("dom",e.tag);Object.keys(i).length&&(e.tag.props=n,e.tag._eventHandlers=i,e.tag._delayedSrc=r)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const i=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([r,s])=>{const o=`${e.tag._d||e.tag._p}:${r}`,a=r.slice(2).toLowerCase(),l=`data-h-${a}`;if(e.markSideEffect(o,()=>{}),n.hasAttribute(l))return;const c=s;n.setAttribute(l,""),i.addEventListener(a,c),e.entry&&(e.entry._sde[o]=()=>{i.removeEventListener(a,c),n.removeAttribute(l)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}}const sx=["templateParams","htmlAttrs","bodyAttrs"];function ox(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(i=>{t.props[i]&&(t.key=t.props[i],delete t.props[i])});const n=kd(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(i=>{const r=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,s=e[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&sx.includes(i.tag)&&(a="merge"),a==="merge"){const l=s.props;["class","style"].forEach(c=>{i.props[c]&&l[c]&&(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),i.props[c]=`${l[c]} ${i.props[c]}`)}),e[r].props={...l,...i.props};return}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);return}else if(Io(i)>Io(s))return}const o=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(Hd.includes(i.tag)&&o===0){delete e[r];return}e[r]=i});const n=[];Object.values(e).forEach(i=>{const r=i._duped;delete i._duped,n.push(i),r&&n.push(...r)}),t.tags=n}}}}function Hr(t,e){if(typeof t!="string")return t;function n(o){if(["s","pageTitle"].includes(o))return e.pageTitle;let a;return o.includes(".")?a=o.split(".").reduce((l,c)=>l&&l[c]||void 0,e):a=e[o],typeof a<"u"?a||"":!1}let i=t;try{i=decodeURI(t)}catch{}(i.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=n(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,c)=>`${a}${c}`).trim())});const s=e.separator;return t.includes(s)&&(t.endsWith(s)&&(t=t.slice(0,-s.length).trim()),t.startsWith(s)&&(t=t.slice(s.length).trim()),t=t.replace(new RegExp(`\\${s}\\s*\\${s}`,"g"),s)),t}function ax(){return{hooks:{"tags:resolve":t=>{var s;const{tags:e}=t,n=(s=e.find(o=>o.tag==="title"))==null?void 0:s.textContent,i=e.findIndex(o=>o.tag==="templateParams"),r=i!==-1?e[i].props:{};r.separator=r.separator||"|",r.pageTitle=Hr(r.pageTitle||n||"",r);for(const o of e)if(["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string")o.textContent=Hr(o.textContent,r);else if(o.tag==="meta"&&typeof o.props.content=="string")o.props.content=Hr(o.props.content,r);else if(o.tag==="link"&&typeof o.props.href=="string")o.props.href=Hr(o.props.href,r);else if(o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string")try{o.innerHTML=JSON.stringify(JSON.parse(o.innerHTML),(a,l)=>typeof l=="string"?Hr(l,r):l)}catch{}t.tags=e.filter(o=>o.tag!=="templateParams")}}}}const lx=typeof window<"u";let Gd;function cx(t){return Gd=t}function ux(){return Gd}async function fx(t,e,n){const i={tag:t,props:{}};return e instanceof Promise&&(e=await e),t==="templateParams"?(i.props=e,i):["title","titleTemplate"].includes(t)?(e&&typeof e=="object"?(i.textContent=e.textContent,e.tagPriority&&(i.tagPriority=e.tagPriority)):i.textContent=e,i):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?i.props.src=e:i.innerHTML=e,i):!1:(i.props=await dx(t,{...e}),i.props.children&&(i.props.innerHTML=i.props.children),delete i.props.children,Object.keys(i.props).filter(r=>Tu.includes(r)).forEach(r=>{(!["innerHTML","textContent"].includes(r)||Bd.includes(i.tag))&&(i[r]=i.props[r]),delete i.props[r]}),Tu.forEach(r=>{!i[r]&&n[r]&&(i[r]=n[r])}),["innerHTML","textContent"].forEach(r=>{if(i.tag==="script"&&typeof i[r]=="string"&&["application/ld+json","application/json"].includes(i.props.type))try{i[r]=JSON.parse(i[r])}catch{i[r]=""}typeof i[r]=="object"&&(i[r]=JSON.stringify(i[r]))}),i.props.class&&(i.props.class=hx(i.props.class)),i.props.content&&Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i)}function hx(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function dx(t,e){for(const n of Object.keys(e)){const i=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=i?"true":"":String(e[n])==="false"&&(i?e[n]="false":delete e[n])}return e}const px=10;async function mx(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,i])=>typeof i<"u"&&Xv.includes(n)).forEach(([n,i])=>{const r=Wv(i);e.push(...r.map(s=>fx(n,s,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,i)=>(n._e=t._i,n._p=(t._i<<px)+i,n))}function gx(){return[ox(),Qv(),ax(),ex(),ix(),rx(),tx()]}function _x(t={}){return[Kv({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function vx(t={}){const e=xx({...t,plugins:[..._x(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=Zv(e.resolvedOptions.document)),cx(e),e}function xx(t={}){let e=[],n={},i=0;const r=Fd();t!=null&&t.hooks&&r.addHooks(t.hooks),t.plugins=[...gx(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks)),t.document=t.document||(lx?document:void 0);const s=()=>r.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,l){const c={_i:i++,input:a,_sde:{},...l},u=(c==null?void 0:c.mode)||t.mode;return u&&(c.mode=u),e.push(c),s(),{dispose(){e=e.filter(f=>f._i!==c._i?!0:(n={...n,...f._sde||{}},f._sde={},s(),!1))},patch(f){e=e.map(h=>(h._i===c._i&&(c.input=h.input=f,s()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await r.callHook("entries:resolve",a);for(const l of a.entries){const c=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(c):c),l.resolvedInput)for(const u of await mx(l)){const f={tag:u,entry:l,resolvedOptions:o.resolvedOptions};await r.callHook("tag:normalise",f),a.tags.push(f.tag)}}return await r.callHook("tags:beforeResolve",a),await r.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return o.hooks.callHook("init",o),o}function yx(t){return typeof t=="function"?t():Le(t)}function Uo(t,e=""){if(t instanceof Promise)return t;const n=yx(t);return!t||!n?n:Array.isArray(n)?n.map(i=>Uo(i,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,r])=>i==="titleTemplate"||i.startsWith("on")?[i,Le(r)]:[i,Uo(r,i)])):n}const Mx=Td.startsWith("3"),Sx=typeof window<"u",Vd="usehead";function _c(){return Ss()&&hr(Vd)||ux()}function Ex(t){return{install(n){Mx&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Vd,t))}}.install}function bx(t={}){const e=vx({...t,domDelayFn:n=>setTimeout(()=>nc(()=>n()),10),plugins:[Tx(),...(t==null?void 0:t.plugins)||[]]});return e.install=Ex(e),e}function Tx(){return{hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Uo(e.input)}}}}function Ax(t,e={}){const n=_c(),i=Je(!1),r=Je({});mg(()=>{r.value=i.value?{}:Uo(t)});const s=n.push(r.value,e);return Sn(r,a=>{s.patch(a)}),Ss()&&($o(()=>{s.dispose()}),Qh(()=>{i.value=!0}),Jh(()=>{i.value=!1})),s}function wx(t,e={}){return _c().push(t,e)}function Lw(t,e={}){var i;const n=_c();if(n){const r=Sx||!!((i=n.resolvedOptions)!=null&&i.document);return e.mode==="server"&&r||e.mode==="client"&&!r?void 0:r?Ax(t,e):wx(t,e)}}const Rx={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"},{name:"description",content:"A minimal polyrhythm visualizer."}],link:[{rel:"icon",type:"image/svg+xml",href:"/soundshaper/favicon.svg"}],style:[],script:[],noscript:[],title:"Soundshaper"},Cx="__nuxt",Px=!0;function Pu(t,e={}){const n=Lx(t,e),i=et(),r=i._payloadCache=i._payloadCache||{};return r[n]||(r[n]=Wd(n).then(s=>s||(delete r[n],null))),r[n]}const Lu="json";function Lx(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||Es(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=e.hash||(e.fresh?Date.now():"");return Lr(Lo().app.baseURL,n.pathname,i?`_payload.${i}.${Lu}`:`_payload.${Lu}`)}async function Wd(t){try{return Px?Xd(await fetch(t).then(e=>e.text())):await us(()=>import(t),[],import.meta.url).then(e=>e.default||e)}catch(e){console.warn("[nuxt] Cannot load payload ",t,e)}return null}function Ix(){return!!et().payload.prerenderedAt}let ks=null;async function Ux(){if(ks)return ks;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=Xd(t.textContent||""),n=t.dataset.src?await Wd(t.dataset.src):void 0;return ks={...e,...n,...window.__NUXT__},ks}function Xd(t){return Gv(t,et()._payloadRevivers)}function Dx(t,e){et()._payloadRevivers[t]=e}function ga(t){return t!==null&&typeof t=="object"}function yl(t,e,n=".",i){if(!ga(e))return yl(t,{},n,i);const r=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:ga(o)&&ga(r[s])?r[s]=yl(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function Nx(t){return(...e)=>e.reduce((n,i)=>yl(n,i,"",t),{})}const Fx=Nx((t,e,n)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0});class Ml extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1}toJSON(){const e={message:this.message,statusCode:Sl(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=qd(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Ml.__h3_error__=!0;function Ox(t){if(typeof t=="string")return new Ml(t);if(Bx(t))return t;const e=new Ml(t.message??t.statusMessage??"",t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Sl(t.statusCode,e.statusCode):t.status&&(e.statusCode=Sl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;qd(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Bx(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Hx=/[^\u0009\u0020-\u007E]/g;function qd(t=""){return t.replace(Hx,"")}function Sl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const zx="$s";function jd(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,i]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(i!==void 0&&typeof i!="function")throw new Error("[nuxt] [useState] init must be a function: "+i);const r=zx+n,s=et(),o=Wh(s.payload.state,r);if(o.value===void 0&&i){const a=i();if(ut(a))return s.payload.state[r]=a,a;o.value=a}return o}const $d=Symbol("route"),Ur=()=>{var t;return(t=et())==null?void 0:t.$router},kx=()=>ud()?hr($d,et()._route):et()._route,Gx=()=>{try{if(et()._processingMiddleware)return!0}catch{return!0}return!1},Yd=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:Cd(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){{const{target:a="_blank",windowFeatures:l={}}=e.open,c=Object.entries(l).filter(([u,f])=>f!==void 0).map(([u,f])=>`${u.toLowerCase()}=${f}`).join(", ");open(n,a,c)}return Promise.resolve()}const i=(e==null?void 0:e.external)||Es(n,{acceptRelative:!0});if(i&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(i&&Ir(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const r=Gx();if(!i&&r)return t;const s=Ur(),o=et();return i?(e!=null&&e.replace?location.replace(n):location.href=n,r?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?s.replace(t):s.push(t)},vc=()=>Wh(et().payload,"error"),Vx=t=>{const e=Kd(t);try{const n=et(),i=vc();n.hooks.callHook("app:error",e),i.value=i.value||e}catch{throw e}return e},Wx=async(t={})=>{const e=et(),n=vc();e.callHook("app:error:cleared",t),t.redirect&&await Ur().replace(t.redirect),n.value=null},Xx=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),Kd=t=>{const e=Ox(t);return e.__nuxt_error=!0,e},Iu={NuxtError:t=>Kd(t),EmptyShallowRef:t=>$c(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),EmptyRef:t=>Je(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),ShallowRef:t=>$c(t),ShallowReactive:t=>Fh(t),Ref:t=>Je(t),Reactive:t=>zn(t)},qx=Fi({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const i in Iu)Dx(i,Iu[i]);Object.assign(t.payload,([e,n]=wv(()=>t.runWithContext(Ux)),e=await e,n(),e)),window.__NUXT__=t.payload}}),jx=[];function _a(t){typeof t=="object"&&(t=Ld({pathname:t.path||"",search:Rd(t.query||{}),hash:t.hash||""}));const e=Ir(t.toString());return{path:e.pathname,fullPath:t,query:mc(e.search),hash:e.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:t}}const $x=Fi({name:"nuxt:router",enforce:"pre",setup(t){const e=Z_(window.location.pathname,Lo().app.baseURL)+window.location.search+window.location.hash,n=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(u,f)=>(i[u].push(f),()=>i[u].splice(i[u].indexOf(f),1)),s=Lo().app.baseURL,o=zn(_a(e));async function a(u,f){try{const h=_a(u);for(const p of i["navigate:before"]){const g=await p(h,o);if(g===!1||g instanceof Error)return;if(g)return a(g,!0)}for(const p of i["resolve:before"])await p(h,o);Object.assign(o,h),window.history[f?"replaceState":"pushState"]({},"",Lr(s,h.fullPath)),t.isHydrating||await t.runWithContext(Wx);for(const p of i["navigate:after"])await p(h,o)}catch(h){for(const p of i.error)await p(h)}}const l={currentRoute:o,isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:u=>a(u,!1),replace:u=>a(u,!0),back:()=>window.history.go(-1),go:u=>window.history.go(u),forward:()=>window.history.go(1),beforeResolve:u=>r("resolve:before",u),beforeEach:u=>r("navigate:before",u),afterEach:u=>r("navigate:after",u),onError:u=>r("error",u),resolve:_a,addRoute:(u,f)=>{n.push(f)},getRoutes:()=>n,hasRoute:u=>n.some(f=>f.name===u),removeRoute:u=>{const f=n.findIndex(h=>h.name===u);f!==-1&&n.splice(f,1)}};t.vueApp.component("RouterLink",{functional:!0,props:{to:String,custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(u,{slots:f})=>{const h=()=>a(u.to,u.replace);return()=>{var g;const p=l.resolve(u.to);return u.custom?(g=f.default)==null?void 0:g.call(f,{href:u.to,navigate:h,route:p}):cs("a",{href:u.to,onClick:_=>(_.preventDefault(),h())},f)}}}),window.addEventListener("popstate",u=>{const f=u.target.location;l.replace(f.href.replace(f.origin,""))}),t._route=o,t._middleware=t._middleware||{global:[],named:{}};const c=jd("_layout");return t.hooks.hookOnce("app:created",async()=>{l.beforeEach(async(u,f)=>{u.meta=zn(u.meta||{}),t.isHydrating&&c.value&&!Li(u.meta.layout)&&(u.meta.layout=c.value),t._processingMiddleware=!0;{const h=new Set([...jx,...t._middleware.global]);for(const p of h){const g=await t.runWithContext(()=>p(u,f));if(g||g===!1)return g}}}),l.afterEach(()=>{delete t._processingMiddleware}),await l.replace(e),ev(o.fullPath,e)||await t.runWithContext(()=>Yd(o.fullPath))}),{provide:{route:o,router:l}}}}),Yx=Fi({name:"nuxt:payload",setup(t){Ix()&&(t.hooks.hook("link:prefetch",async e=>{Ir(e).protocol||await Pu(e)}),Ur().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const i=await Pu(e.path);i&&Object.assign(t.static.data,i.data)}))}}),Kx=Eo(()=>us(()=>Promise.resolve().then(()=>Ly),void 0,import.meta.url).then(t=>t.default)),Zx=Eo(()=>us(()=>import("./IconCSS.827e06c3.js"),["./IconCSS.827e06c3.js","./IconCSS.fe0874d9.css"],import.meta.url).then(t=>t.default)),Jx=[["Icon",Kx],["IconCSS",Zx]],Qx=Fi({name:"nuxt:global-components",setup(t){for(const[e,n]of Jx)t.vueApp.component(e,n),t.vueApp.component("Lazy"+e,n)}}),e0=Fi({name:"nuxt:head",setup(t){const n=bx();n.push(Rx),t.vueApp.use(n);{let i=!0;const r=()=>{i=!1,n.hooks.callHook("entries:updated",n)};n.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!i}),t.hooks.hook("page:start",()=>{i=!0}),t.hooks.hook("page:finish",r),t.hooks.hook("app:suspense:resolve",r)}}});function t0(t={}){const e=t.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:et().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const n0=Fi({name:"nuxt:chunk-reload",setup(t){const e=Ur(),n=Lo(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:r})=>{i.add(r)}),e.onError((r,s)=>{if(i.has(r)){const a="href"in s&&s.href.startsWith("#")?n.app.baseURL+s.href:Lr(n.app.baseURL,s.fullPath);t0({path:a,persistState:!0})}})}}),El=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),i0=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),r0=t=>{const e=et();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{El(t)}):El(t)};async function Zd(t,e=Ur()){const{path:n,matched:i}=e.resolve(t);if(!i.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const r=e._preloadPromises=e._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>Zd(t,e));e._routePreloaded.add(n);const s=i.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of s){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}const s0=(...t)=>t.find(e=>e!==void 0),o0="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function a0(t){const e=t.componentName||"NuxtLink",n=(i,r)=>{if(!i||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return i;const s=t.trailingSlash==="append"?Ro:gc;if(typeof i=="string")return s(i,!0);const o="path"in i?i.path:r(i).path;return{...i,name:void 0,path:s(o,!0)}};return wn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(i,{slots:r}){const s=Ur(),o=Gt(()=>{const f=i.to||i.href||"";return n(f,s.resolve)}),a=Gt(()=>i.external||i.target&&i.target!=="_self"?!0:typeof o.value=="object"?!1:o.value===""||Es(o.value,{acceptRelative:!0})),l=Je(!1),c=Je(null),u=f=>{var h;c.value=i.custom?(h=f==null?void 0:f.$el)==null?void 0:h.nextElementSibling:f==null?void 0:f.$el};if(i.prefetch!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!u0()){const h=et();let p,g=null;Ni(()=>{const _=c0();r0(()=>{p=El(()=>{var m;(m=c==null?void 0:c.value)!=null&&m.tagName&&(g=_.observe(c.value,async()=>{g==null||g(),g=null;const d=typeof o.value=="string"?o.value:s.resolve(o.value).fullPath;await Promise.all([h.hooks.callHook("link:prefetch",d).catch(()=>{}),!a.value&&Zd(o.value,s).catch(()=>{})]),l.value=!0}))})})}),$o(()=>{p&&i0(p),g==null||g(),g=null})}return()=>{var _,m;if(!a.value){const d={ref:u,to:o.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(l.value&&(d.class=i.prefetchedClass||t.prefetchedClass),d.rel=i.rel),cs(Tg("RouterLink"),d,r.default)}const f=typeof o.value=="object"?((_=s.resolve(o.value))==null?void 0:_.href)??null:o.value||null,h=i.target||null,p=i.noRel?null:s0(i.rel,t.externalRelAttribute,f?o0:"")||null,g=()=>Yd(f,{replace:i.replace});return i.custom?r.default?r.default({href:f,navigate:g,get route(){if(!f)return;const d=Ir(f);return{path:d.pathname,fullPath:d.pathname,get query(){return mc(d.search)},hash:d.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:f}},rel:p,target:h,isExternal:a.value,isActive:!1,isExactActive:!1}):null:cs("a",{ref:c,href:f,rel:p,target:h},(m=r.default)==null?void 0:m.call(r))}}})}const l0=a0({componentName:"NuxtLink"});function c0(){const t=et();if(t._observer)return t._observer;let e=null;const n=new Map,i=(s,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),n.set(s,o),e.observe(s),()=>{n.delete(s),e.unobserve(s),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:i}}function u0(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const f0={},h0=Fx(f0);function d0(){const t=et();return t._appConfig||(t._appConfig=zn(h0)),t._appConfig}function p0(t,e,n,i){const r=Gt(()=>{if(i.value==0)return 0;const a=n.corners,l=1/i.value,c=a/4;return 250*l*c}),s=()=>{if(i.value<=.06)return;const a=t.createOscillator();a.frequency.value=n.frequency,a.type=n.waveform,a.start();const l=t.createGain();l.gain.value=n.muted?0:1,l.gain.linearRampToValueAtTime(0,t.currentTime+r.value/2e3),a.connect(l),l.connect(e),setTimeout(()=>o(a,l),r.value/2)},o=(a,l)=>{a.stop(),a.disconnect(),l.disconnect()};return{playPing:s}}const m0=(t,e)=>({id:t,name:`Shape ${t}`,corners:4,mutes:[],muted:!1,frequency:v0(_0),color:x0(),waveform:"sine",pingDuration:250}),g0=t=>{switch(t){case 1:return"ic:baseline-circle";case 2:return"ic:baseline-square";case 3:return"mdi:triangle";case 4:return"ic:baseline-square";case 5:return"ic:baseline-pentagon";case 6:return"ic:baseline-hexagon";case 7:return"bi:heptagon-fill";case 8:return"ph:octagon-fill";default:return"ic:baseline-circle"}},_0=[262,327.5,393,524],v0=t=>{const e=Math.floor(Math.random()*t.length);return t[e]},x0=()=>Math.floor(Math.random()*360);let y0=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");function M0(){const t=Je(new AudioContext),e=t.value.createGain(),n=Je(.5);e.gain.value=n.value,e.connect(t.value.destination);const i=()=>{r(),e.gain.value=n.value},r=()=>{t.value.state==="suspended"&&t.value.resume()};return Sn(n,i),{audioContext:t,outputNode:e,mainVolume:n}}const S0=Fi(t=>{const e=Je([]),{audioContext:n,outputNode:i,mainVolume:r}=M0(),s=Je(0),o=Je(void 0),a=()=>{const g=m0(y0(),o.value);o.value=g.color,h(g),e.value.push(g)},l=g=>{const _=u(g);_&&(p(_),e.value=e.value.filter(m=>m.id!==g))},c=(g,_)=>{e.value=e.value.map(m=>m.id===g?_:m)},u=g=>e.value.find(_=>_.id===g),f={},h=g=>{g.pings=p0(n.value,i,g,s)},p=g=>{var _;(_=f[g.id])==null||_.stop()};Sn(s,(g,_)=>{g&&!_?e.value.forEach(h):g==0&&e.value.forEach(p)}),Sn(()=>e.value.map(g=>g.corners),()=>{e.value.forEach(h)}),t.provide("mainVolume",r),t.provide("audioOutputNode",i),t.provide("speed",s),t.provide("shapes",e),t.provide("addShape",a),t.provide("deleteShape",l),t.provide("updateShape",c),t.provide("getShape",u)}),E0=[qx,$x,Yx,Qx,e0,n0,S0],Jd=Object.freeze({left:0,top:0,width:16,height:16}),Qd=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),xc=Object.freeze({...Jd,...Qd});Object.freeze({...xc,body:"",hidden:!1});({...Jd});const ep=Object.freeze({width:null,height:null}),tp=Object.freeze({...ep,...Qd});function b0(t,e){const n={...t};for(const i in e){const r=e[i],s=typeof r;i in ep?(r===null||r&&(s==="string"||s==="number"))&&(n[i]=r):s===typeof n[i]&&(n[i]=i==="rotate"?r%4:r)}return n}const T0=/[\s,]+/;function A0(t,e){e.split(T0).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function w0(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:i(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?i(s):0)}}return e}const R0=/(-?[0-9.]*[0-9]+[0-9.]*)/g,C0=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Uu(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split(R0);if(i===null||!i.length)return t;const r=[];let s=i.shift(),o=C0.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?r.push(s):r.push(Math.ceil(a*e*n)/n)}else r.push(s);if(s=i.shift(),s===void 0)return r.join("");o=!o}}const P0=t=>t==="unset"||t==="undefined"||t==="none";function L0(t,e){const n={...xc,...t},i={...tp,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,i].forEach(g=>{const _=[],m=g.hFlip,d=g.vFlip;let M=g.rotate;m?d?M+=2:(_.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),_.push("scale(-1 1)"),r.top=r.left=0):d&&(_.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),_.push("scale(1 -1)"),r.top=r.left=0);let v;switch(M<0&&(M-=Math.floor(M/4)*4),M=M%4,M){case 1:v=r.height/2+r.top,_.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:_.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:v=r.width/2+r.left,_.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}M%2===1&&(r.left!==r.top&&(v=r.left,r.left=r.top,r.top=v),r.width!==r.height&&(v=r.width,r.width=r.height,r.height=v)),_.length&&(s='<g transform="'+_.join(" ")+'">'+s+"</g>")});const o=i.width,a=i.height,l=r.width,c=r.height;let u,f;o===null?(f=a===null?"1em":a==="auto"?c:a,u=Uu(f,l/c)):(u=o==="auto"?l:o,f=a===null?Uu(u,c/l):a==="auto"?c:a);const h={},p=(g,_)=>{P0(_)||(h[g]=_.toString())};return p("width",u),p("height",f),h.viewBox=r.left.toString()+" "+r.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:h,body:s}}const I0=/\sid="(\S+)"/g,U0="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let D0=0;function N0(t,e=U0){const n=[];let i;for(;i=I0.exec(t);)n.push(i[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const o=typeof e=="function"?e(s):e+(D0++).toString(),a=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}function F0(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)n+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function O0(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function B0(t){return"data:image/svg+xml,"+O0(t)}function H0(t){return'url("'+B0(t)+'")'}const Du={...tp,inline:!1},z0={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},k0={display:"inline-block"},bl={backgroundColor:"currentColor"},np={backgroundColor:"transparent"},Nu={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Fu={webkitMask:bl,mask:bl,background:np};for(const t in Fu){const e=Fu[t];for(const n in Nu)e[t+n]=Nu[n]}const ho={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";ho[t+"-flip"]=e,ho[t.slice(0,1)+"-flip"]=e,ho[t+"Flip"]=e});function Ou(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const G0=(t,e)=>{const n=b0(Du,e),i={...z0},r=e.mode||"svg",s={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const m=e[_];if(m!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[_]=m===!0||m==="true"||m===1;break;case"flip":typeof m=="string"&&A0(n,m);break;case"color":s.color=m;break;case"rotate":typeof m=="string"?n[_]=w0(m):typeof m=="number"&&(n[_]=m);break;case"ariaHidden":case"aria-hidden":m!==!0&&m!=="true"&&delete i["aria-hidden"];break;default:{const d=ho[_];d?(m===!0||m==="true"||m===1)&&(n[d]=!0):Du[_]===void 0&&(i[_]=m)}}}const l=L0(t,n),c=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),r==="svg"){i.style={...s,...a},Object.assign(i,c);let _=0,m=e.id;return typeof m=="string"&&(m=m.replace(/-/g,"_")),i.innerHTML=N0(l.body,m?()=>m+"ID"+_++:"iconifyVue"),cs("svg",i)}const{body:u,width:f,height:h}=t,p=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),g=F0(u,{...c,width:f+"",height:h+""});return i.style={...s,"--svg":H0(g),width:Ou(c.width),height:Ou(c.height),...k0,...p?bl:np,...a},cs("span",i)},V0=Object.create(null),W0=wn({inheritAttrs:!1,render(){const t=this.$attrs,e=t.icon,n=typeof e=="string"?V0[e]:typeof e=="object"?e:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:G0({...xc,...n},t)}}),es=/^[a-z0-9]+(-[a-z0-9]+)*$/,Zo=(t,e,n,i="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:i,prefix:l,name:a};return e&&!po(c)?null:c}const s=r[0],o=s.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return e&&!po(a)?null:a}if(n&&i===""){const a={provider:i,prefix:"",name:s};return e&&!po(a,n)?null:a}return null},po=(t,e)=>t?!!((t.provider===""||t.provider.match(es))&&(e&&t.prefix===""||t.prefix.match(es))&&t.name.match(es)):!1,ip=Object.freeze({left:0,top:0,width:16,height:16}),Do=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),yc=Object.freeze({...ip,...Do}),Tl=Object.freeze({...yc,body:"",hidden:!1});function X0(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(e.rotate||0))%4;return i&&(n.rotate=i),n}function Bu(t,e){const n=X0(t,e);for(const i in Tl)i in Do?i in t&&!(i in n)&&(n[i]=Do[i]):i in e?n[i]=e[i]:i in t&&(n[i]=t[i]);return n}function q0(t,e){const n=t.icons,i=t.aliases||Object.create(null),r=Object.create(null);function s(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=i[o]&&i[o].parent,l=a&&s(a);l&&(r[o]=[a].concat(l))}return r[o]}return(e||Object.keys(n).concat(Object.keys(i))).forEach(s),r}function j0(t,e,n){const i=t.icons,r=t.aliases||Object.create(null);let s={};function o(a){s=Bu(i[a]||r[a],s)}return o(e),n.forEach(o),Bu(t,s)}function rp(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const i=q0(t);for(const r in i){const s=i[r];s&&(e(r,j0(t,r,s)),n.push(r))}return n}const $0={provider:"",aliases:{},not_found:{},...ip};function va(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function sp(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!va(t,$0))return null;const n=e.icons;for(const r in n){const s=n[r];if(!r.match(es)||typeof s.body!="string"||!va(s,Tl))return null}const i=e.aliases||Object.create(null);for(const r in i){const s=i[r],o=s.parent;if(!r.match(es)||typeof o!="string"||!n[o]&&!i[o]||!va(s,Tl))return null}return e}const Hu=Object.create(null);function Y0(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Ii(t,e){const n=Hu[t]||(Hu[t]=Object.create(null));return n[e]||(n[e]=Y0(t,e))}function Mc(t,e){return sp(e)?rp(e,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function K0(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let fs=!1;function op(t){return typeof t=="boolean"&&(fs=t),fs}function Z0(t){const e=typeof t=="string"?Zo(t,!0,fs):t;if(e){const n=Ii(e.provider,e.prefix),i=e.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function J0(t,e){const n=Zo(t,!0,fs);if(!n)return!1;const i=Ii(n.provider,n.prefix);return K0(i,n.name,e)}function Q0(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),fs&&!e&&!t.prefix){let r=!1;return sp(t)&&(t.prefix="",rp(t,(s,o)=>{o&&J0(s,o)&&(r=!0)})),r}const n=t.prefix;if(!po({provider:e,prefix:n,name:"a"}))return!1;const i=Ii(e,n);return!!Mc(i,t)}const ey=Object.freeze({width:null,height:null}),ty=Object.freeze({...ey,...Do});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const Al=Object.create(null);function ny(t,e){Al[t]=e}function wl(t){return Al[t]||Al[""]}function Sc(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Ec=Object.create(null),zr=["https://api.simplesvg.com","https://api.unisvg.com"],mo=[];for(;zr.length>0;)zr.length===1||Math.random()>.5?mo.push(zr.shift()):mo.push(zr.pop());Ec[""]=Sc({resources:["https://api.iconify.design"].concat(mo)});function iy(t,e){const n=Sc(e);return n===null?!1:(Ec[t]=n,!0)}function bc(t){return Ec[t]}const ry=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let zu=ry();function sy(t,e){const n=bc(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const s=e+".json?icons=";i=n.maxURL-r-n.path.length-s.length}return i}function oy(t){return t===404}const ay=(t,e,n)=>{const i=[],r=sy(t,e),s="icons";let o={type:s,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=r&&c>0&&(i.push(o),o={type:s,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function ly(t){if(typeof t=="string"){const e=bc(t);if(e)return e.path}return"/"}const cy=(t,e,n)=>{if(!zu){n("abort",424);return}let i=ly(e.provider);switch(e.type){case"icons":{const s=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});i+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;i+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;zu(t+i).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{n(oy(o)?"abort":"next",o)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},uy={prepare:ay,send:cy};function fy(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let i={provider:"",prefix:"",name:""};return t.forEach(r=>{if(i.name===r.name&&i.prefix===r.prefix&&i.provider===r.provider)return;i=r;const s=r.provider,o=r.prefix,a=r.name,l=n[s]||(n[s]=Object.create(null)),c=l[o]||(l[o]=Ii(s,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const f={provider:s,prefix:o,name:a};u.push(f)}),e}function ap(t,e){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(r=>r.id!==e))})}function hy(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const i=t.provider,r=t.prefix;e.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:i,prefix:r,name:c});else if(t.missing.has(c))o.missing.push({provider:i,prefix:r,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||ap([t],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let dy=0;function py(t,e,n){const i=dy++,r=ap.bind(null,n,i);if(!e.pending.length)return r;const s={id:i,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),r}function my(t,e=!0,n=!1){const i=[];return t.forEach(r=>{const s=typeof r=="string"?Zo(r,e,n):r;s&&i.push(s)}),i}var gy={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function _y(t,e,n,i){const r=t.resources.length,s=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let A=t.resources.slice(0);for(o=[];A.length>1;){const C=Math.floor(Math.random()*A.length);o.push(A[C]),A=A.slice(0,C).concat(A.slice(C+1))}o=o.concat(A)}else o=t.resources.slice(s).concat(t.resources.slice(0,s));const a=Date.now();let l="pending",c=0,u,f=null,h=[],p=[];typeof i=="function"&&p.push(i);function g(){f&&(clearTimeout(f),f=null)}function _(){l==="pending"&&(l="aborted"),g(),h.forEach(A=>{A.status==="pending"&&(A.status="aborted")}),h=[]}function m(A,C){C&&(p=[]),typeof A=="function"&&p.push(A)}function d(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:h.length,subscribe:m,abort:_}}function M(){l="failed",p.forEach(A=>{A(void 0,u)})}function v(){h.forEach(A=>{A.status==="pending"&&(A.status="aborted")}),h=[]}function E(A,C,P){const S=C!=="success";switch(h=h.filter(R=>R!==A),l){case"pending":break;case"failed":if(S||!t.dataAfterTimeout)return;break;default:return}if(C==="abort"){u=P,M();return}if(S){u=P,h.length||(o.length?T():M());return}if(g(),v(),!t.random){const R=t.resources.indexOf(A.resource);R!==-1&&R!==t.index&&(t.index=R)}l="completed",p.forEach(R=>{R(P)})}function T(){if(l!=="pending")return;g();const A=o.shift();if(A===void 0){if(h.length){f=setTimeout(()=>{g(),l==="pending"&&(v(),M())},t.timeout);return}M();return}const C={status:"pending",resource:A,callback:(P,S)=>{E(C,P,S)}};h.push(C),c++,f=setTimeout(T,t.rotate),n(A,e,C.callback)}return setTimeout(T),d}function lp(t){const e={...gy,...t};let n=[];function i(){n=n.filter(a=>a().status==="pending")}function r(a,l,c){const u=_y(e,a,l,(f,h)=>{i(),c&&c(f,h)});return n.push(u),u}function s(a){return n.find(l=>a(l))||null}return{query:r,find:s,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:i}}function ku(){}const xa=Object.create(null);function vy(t){if(!xa[t]){const e=bc(t);if(!e)return;const n=lp(e),i={config:e,redundancy:n};xa[t]=i}return xa[t]}function xy(t,e,n){let i,r;if(typeof t=="string"){const s=wl(t);if(!s)return n(void 0,424),ku;r=s.send;const o=vy(t);o&&(i=o.redundancy)}else{const s=Sc(t);if(s){i=lp(s);const o=t.resources?t.resources[0]:"",a=wl(o);a&&(r=a.send)}}return!i||!r?(n(void 0,424),ku):i.query(e,r,n)().abort}const Gu="iconify2",hs="iconify",cp=hs+"-count",Vu=hs+"-version",up=36e5,yy=168;function Rl(t,e){try{return t.getItem(e)}catch{}}function Tc(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Wu(t,e){try{t.removeItem(e)}catch{}}function Cl(t,e){return Tc(t,cp,e.toString())}function Pl(t){return parseInt(Rl(t,cp))||0}const Jo={local:!0,session:!0},fp={local:new Set,session:new Set};let Ac=!1;function My(t){Ac=t}let Gs=typeof window>"u"?{}:window;function hp(t){const e=t+"Storage";try{if(Gs&&Gs[e]&&typeof Gs[e].length=="number")return Gs[e]}catch{}Jo[t]=!1}function dp(t,e){const n=hp(t);if(!n)return;const i=Rl(n,Vu);if(i!==Gu){if(i){const a=Pl(n);for(let l=0;l<a;l++)Wu(n,hs+l.toString())}Tc(n,Vu,Gu),Cl(n,0);return}const r=Math.floor(Date.now()/up)-yy,s=a=>{const l=hs+a.toString(),c=Rl(n,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}Wu(n,l)}};let o=Pl(n);for(let a=o-1;a>=0;a--)s(a)||(a===o-1?(o--,Cl(n,o)):fp[t].add(a))}function pp(){if(!Ac){My(!0);for(const t in Jo)dp(t,e=>{const n=e.data,i=e.provider,r=n.prefix,s=Ii(i,r);if(!Mc(s,n).length)return!1;const o=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function Sy(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const i in Jo)dp(i,r=>{const s=r.data;return r.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Ey(t,e){Ac||pp();function n(i){let r;if(!Jo[i]||!(r=hp(i)))return;const s=fp[i];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=Pl(r),!Cl(r,o+1))return;const a={cached:Math.floor(Date.now()/up),provider:t.provider,data:e};return Tc(r,hs+o.toString(),JSON.stringify(a))}e.lastModified&&!Sy(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Xu(){}function by(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,hy(t)}))}function Ty(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,r=t.iconsToLoad;delete t.iconsToLoad;let s;if(!r||!(s=wl(n)))return;s.prepare(n,i,r).forEach(a=>{xy(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{t.missing.add(c)});else try{const c=Mc(t,l);if(!c.length)return;const u=t.pendingIcons;u&&c.forEach(f=>{u.delete(f)}),Ey(t,l)}catch(c){console.error(c)}by(t)})})}))}const Ay=(t,e)=>{const n=my(t,!0,op()),i=fy(n);if(!i.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(i.loaded,i.missing,i.pending,Xu)}),()=>{l=!1}}const r=Object.create(null),s=[];let o,a;return i.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,s.push(Ii(c,u));const f=r[c]||(r[c]=Object.create(null));f[u]||(f[u]=[])}),i.pending.forEach(l=>{const{provider:c,prefix:u,name:f}=l,h=Ii(c,u),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(f)||(p.add(f),r[c][u].push(f))}),s.forEach(l=>{const{provider:c,prefix:u}=l;r[c][u].length&&Ty(l,r[c][u])}),e?py(e,i,s):Xu},wy=t=>new Promise((e,n)=>{const i=typeof t=="string"?Zo(t,!0):t;if(!i){n(t);return}Ay([i||t],r=>{if(r.length&&i){const s=Z0(i);if(s){e({...yc,...s});return}}n(t)})});({...ty});const qu={backgroundColor:"currentColor"},Ry={backgroundColor:"transparent"},ju={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},$u={webkitMask:qu,mask:qu,background:Ry};for(const t in $u){const e=$u[t];for(const n in ju)e[t+n]=ju[n]}const ya={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";ya[t+"-flip"]=e,ya[t.slice(0,1)+"-flip"]=e,ya[t+"Flip"]=e});op(!0);ny("",uy);if(typeof document<"u"&&typeof window<"u"){pp();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Q0(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const i="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;iy(n,r)||console.error(i)}catch{console.error(i)}}}}({...yc});const Cy=wn({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(t){let e,n;const i=t,r=et(),s=d0(),o=jd("icons",()=>({})),a=Je(!1),l=Gt(()=>{var g;return((((g=s.nuxtIcon)==null?void 0:g.aliases)||{})[i.name]||i.name).replace(/^i-/,"")}),c=Gt(()=>{var g;return(g=o.value)==null?void 0:g[l.value]}),u=Gt(()=>r.vueApp.component(l.value)),f=Gt(()=>{var _,m,d;if(!i.size&&typeof((_=s.nuxtIcon)==null?void 0:_.size)=="boolean"&&!((m=s.nuxtIcon)!=null&&m.size))return;const g=i.size||((d=s.nuxtIcon)==null?void 0:d.size)||"1em";return String(Number(g))===g?`${g}px`:g}),h=Gt(()=>{var g;return((g=s==null?void 0:s.nuxtIcon)==null?void 0:g.class)??"icon"});async function p(){var g;u.value||(g=o.value)!=null&&g[l.value]||(a.value=!0,o.value[l.value]=await wy(l.value).catch(()=>{}),a.value=!1)}return Sn(()=>l.value,p),!u.value&&([e,n]=Cg(()=>p()),e=await e,n()),(g,_)=>a.value?(ct(),Tn("span",{key:0,class:pn(h.value),style:xr({width:f.value,height:f.value})},null,6)):c.value?(ct(),fn(Le(W0),{key:1,icon:c.value,class:pn(h.value),width:f.value,height:f.value},null,8,["icon","class","width","height"])):u.value?(ct(),fn(id(u.value),{key:2,class:pn(h.value),width:f.value,height:f.value},null,8,["class","width","height"])):(ct(),Tn("span",{key:3,class:pn(h.value),style:xr({fontSize:f.value,lineHeight:f.value,width:f.value,height:f.value})},[Ag(g.$slots,"default",{},()=>[fc(jl(t.name),1)],!0)],6))}});const Py=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Dr=Py(Cy,[["__scopeId","data-v-9c34c54e"]]),Ly=Object.freeze(Object.defineProperty({__proto__:null,default:Dr},Symbol.toStringTag,{value:"Module"})),Iy={class:"flex flex-row space-x-2"},Uy={class:"flex flex-row items-center"},Dy={type:"text",class:"bg-secondary text-xl min-w-[3ch] max-w-[3ch] px-1 text-center"},Ny={class:"flex flex-col space-y-2"},Fy=wn({__name:"SoundControl",props:{shapeId:String},setup(t){const e=t,i=et().$getShape(e.shapeId),r=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],s=h=>440*Math.pow(2,(r.indexOf(h)-9)/12),a=Je((h=>r[Math.round(12*Math.log2(h/440))+9]||"C")(i.frequency)),l=()=>{const h=r.indexOf(a.value);return h===r.length-1?r[0]:r[h+1]},c=()=>{const h=r.indexOf(a.value);return h===0?r[r.length-1]:r[h-1]},u=()=>{a.value=l(),i.frequency=s(a.value)},f=()=>{a.value=c(),i.frequency=s(a.value)};return(h,p)=>{const g=Dr;return ct(),Tn("div",Iy,[Ie(g,{name:"ph:wave-sine",size:"32",class:pn(["shrink-0",{"text-accent scale-125":Le(i).waveform==="sine","text-secondary-content":Le(i).waveform!=="sine"}]),onClick:p[0]||(p[0]=_=>Le(i).waveform="sine")},null,8,["class"]),Ie(g,{name:"ph:wave-square",size:"32",class:pn(["shrink-0",{"text-accent scale-125":Le(i).waveform==="square","text-secondary-content":Le(i).waveform!=="square"}]),onClick:p[1]||(p[1]=_=>Le(i).waveform="square")},null,8,["class"]),Ie(g,{name:"ph:wave-sawtooth",size:"32",class:pn(["shrink-0",{"text-accent scale-125":Le(i).waveform==="sawtooth","text-secondary-content":Le(i).waveform!=="sawtooth"}]),onClick:p[2]||(p[2]=_=>Le(i).waveform="sawtooth")},null,8,["class"]),nt("div",Uy,[nt("div",Dy,jl(Le(a)),1),nt("div",Ny,[Ie(g,{class:"cursor-pointer",name:"ic:baseline-plus",size:"14",onClick:u}),Ie(g,{class:"cursor-pointer",name:"ic:baseline-minus",size:"14",onClick:f})])])])}}}),Oy=180/Math.PI,Yu=t=>{const e=t%360;return e<0?360+e:e},By=({x:t,y:e},n)=>{const i=n.left+n.width/2,r=n.top+n.height/2;return Math.atan2(e-r,t-i)*Oy},Ma=()=>{};class Hy{constructor(e,n){this.active=!1,this.element=e,this.element.style.willChange="transform",this.initOptions(n),this.updateCSS(),this.bindHandlers(),this.addListeners()}get angle(){return this._angle}set angle(e){this._angle!==e&&(this._angle=Yu(e),this.updateCSS())}initOptions(e){e=e||{},this.onRotate=e.onRotate||Ma,this.onDragStart=e.onDragStart||Ma,this.onDragStop=e.onDragStop||Ma,this._angle=e.angle||0}bindHandlers(){this.onRotationStart=this.onRotationStart.bind(this),this.onRotated=this.onRotated.bind(this),this.onRotationStop=this.onRotationStop.bind(this)}addListeners(){this.element.addEventListener("touchstart",this.onRotationStart,{passive:!0}),document.addEventListener("touchmove",this.onRotated,{passive:!1}),document.addEventListener("touchend",this.onRotationStop,{passive:!0}),document.addEventListener("touchcancel",this.onRotationStop,{passive:!0}),this.element.addEventListener("mousedown",this.onRotationStart,{passive:!0}),document.addEventListener("mousemove",this.onRotated,{passive:!1}),document.addEventListener("mouseup",this.onRotationStop,{passive:!0}),document.addEventListener("mouseleave",this.onRotationStop,{passive:!1})}removeListeners(){this.element.removeEventListener("touchstart",this.onRotationStart),document.removeEventListener("touchmove",this.onRotated),document.removeEventListener("touchend",this.onRotationStop),document.removeEventListener("touchcancel",this.onRotationStop),this.element.removeEventListener("mousedown",this.onRotationStart),document.removeEventListener("mousemove",this.onRotated),document.removeEventListener("mouseup",this.onRotationStop),document.removeEventListener("mouseleave",this.onRotationStop)}destroy(){this.onRotationStop(),this.removeListeners()}onRotationStart(e){(e.type==="touchstart"||e.button===0)&&(this.active=!0,this.onDragStart(e),this.setAngleFromEvent(e))}onRotationStop(){this.active&&(this.active=!1,this.onDragStop()),this.active=!1}onRotated(e){this.active&&(e.preventDefault(),this.setAngleFromEvent(e))}setAngleFromEvent(e){const n=e.targetTouches?e.targetTouches[0]:e,i=By({x:n.clientX,y:n.clientY},this.element.getBoundingClientRect());this._angle=Yu(i+90),this.updateCSS(),this.onRotate(this._angle)}updateCSS(){this.element.style.transform="rotate("+this._angle+"deg)"}}const zy=["red","yellow","green","cyan","blue","magenta","red"],Ku={ArrowUp:(t,e)=>t+e,ArrowRight:(t,e)=>t+e,ArrowDown:(t,e)=>t-e,ArrowLeft:(t,e)=>t-e,PageUp:(t,e)=>t+e*10,PageDown:(t,e)=>t-e*10,Home:()=>0,End:()=>359},No={name:"ColorPicker",emits:["select","input","change"],props:{hue:{default:0},saturation:{default:100},luminosity:{default:50},alpha:{default:1},step:{default:1},mouseScroll:{default:!1},variant:{default:"collapsible"},disabled:{default:!1},initiallyCollapsed:{default:!1},ariaLabel:{default:"color picker"},ariaRoledescription:{default:"radial slider"},ariaValuetext:{default:""},ariaLabelColorWell:{default:"color well"}},setup(t,{emit:e}){const n=Je(null),i=Je(null);let r=null;const s=t.hue+"deg",o=Je(t.hue),a=Je(!t.initiallyCollapsed),l=Je(!t.initiallyCollapsed),c=Je(!1),u=Je(!1),f=Je(!1),h=Gt(()=>`hsla(${o.value}, ${t.saturation}%, ${t.luminosity}%, ${t.alpha})`),p=Gt(()=>zy[Math.round(o.value/60)]);return Sn(()=>t.hue,v=>{o.value=v,r.angle=v}),Ni(()=>{r=new Hy(i.value,{angle:o.value,onRotate(v){o.value=v,e("input",o.value)},onDragStart(){f.value=!0},onDragStop(){f.value=!1,e("change",o.value)}})}),$o(()=>{r.destroy(),r=null}),{rcp:r,el:n,rotator:i,initialAngle:s,angle:o,isPaletteIn:a,isKnobIn:l,isDragging:f,isRippling:u,isPressed:c,color:h,valuetext:p,onKeyDown:v=>{t.disabled||c.value||!l.value||!(v.key in Ku)||(v.preventDefault(),r.angle=Ku[v.key](r.angle,t.step),o.value=r.angle,e("input",o.value),e("change",o.value))},onScroll:v=>{c.value||!l.value||(v.preventDefault(),v.deltaY>0?r.angle+=t.step:r.angle-=t.step,o.value=r.angle,e("input",o.value),e("change",o.value))},selectColor:()=>{c.value=!0,a.value&&l.value?(e("select",o.value),u.value=!0):a.value=!0},togglePicker:()=>{t.variant!=="persistent"&&(l.value?l.value=!1:(l.value=!0,a.value=!0)),u.value=!1,c.value=!1},hidePalette:()=>{l.value||(a.value=!1)}}}};function ky(t,e,n,i,r,s){return ct(),fn("div",{ref:"el",role:"slider","aria-roledescription":n.ariaRoledescription,"aria-label":n.ariaLabel,"aria-expanded":i.isPaletteIn,"aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":i.angle,"aria-valuetext":n.ariaValuetext||i.valuetext,"aria-disabled":n.disabled,class:["rcp",{dragging:i.isDragging,disabled:n.disabled}],tabindex:n.disabled?-1:0,style:{"--rcp-initial-angle":i.initialAngle},onKeyup:e[4]||(e[4]=E_((...o)=>i.selectColor&&i.selectColor(...o),["enter"])),onKeydown:e[5]||(e[5]=(...o)=>i.onKeyDown&&i.onKeyDown(...o))},[Ie("div",{class:["rcp__palette",i.isPaletteIn?"in":"out"]},null,2),Ie("div",Sd({class:"rcp__rotator",style:{"pointer-events":n.disabled||i.isPressed||!i.isKnobIn?"none":null}},wg(n.mouseScroll?{wheel:i.onScroll}:{}),{ref:"rotator"}),[Ie("div",{class:["rcp__knob",i.isKnobIn?"in":"out"],onTransitionend:e[1]||(e[1]=(...o)=>i.hidePalette&&i.hidePalette(...o))},null,34)],16),Ie("div",{class:["rcp__ripple",{rippling:i.isRippling}],style:{borderColor:i.color}},null,6),Ie("button",{type:"button",class:["rcp__well",{pressed:i.isPressed}],"aria-label":n.ariaLabelColorWell,disabled:n.disabled,tabindex:n.disabled?-1:0,style:{backgroundColor:i.color},onAnimationend:e[2]||(e[2]=(...o)=>i.togglePicker&&i.togglePicker(...o)),onClick:e[3]||(e[3]=(...o)=>i.selectColor&&i.selectColor(...o))},null,46,["aria-label","disabled","tabindex"])],46,["aria-roledescription","aria-label","aria-expanded","aria-valuenow","aria-valuetext","aria-disabled","tabindex"])}No.render=ky;No.install=function(t){t.component("ColorPicker",No)};const Gy={class:"flex flex-row items-center justify-between w-full"},Vy={class:"flex flex-row items-center"},Wy={class:"flex flex-col space-y-2"},Xy={class:"flex flex-row items-center"},qy=wn({__name:"ShapeControl",props:{shapeId:String},setup(t){const e=t,n=et(),i=n.$getShape(e.shapeId),r=Gt(()=>g0(i.corners)),s=Gt(()=>i.muted?"material-symbols:volume-off":"material-symbols:volume-up"),o=c=>{i.corners=Math.min(99,Number.parseInt(""+i.corners||"1")+c),i.corners=Math.max(1,i.corners)},a=new RegExp("^[0-9]+$"),l=Je(null);return Ni(()=>{l.value&&(l.value.addEventListener("beforeinput",c=>{c.data&&!a.test(c.data)&&c.preventDefault()}),l.value.addEventListener("input",c=>{Number.parseInt(i.corners)&&o(0)}))}),(c,u)=>{const f=Dr,h=Fy;return ct(),Tn("div",Gy,[nt("div",Vy,[Ie(f,{name:Le(r),size:"32",class:"shrink-0"},null,8,["name"]),So(nt("input",{ref_key:"cornersInput",ref:l,type:"text",class:"input input-sm input-secondary bg-secondary text-xl max-w-[3ch] px-1 text-center","onUpdate:modelValue":u[0]||(u[0]=p=>Le(i).corners=p),maxlength:"2"},null,512),[[Ao,Le(i).corners]]),nt("div",Wy,[Ie(f,{class:"cursor-pointer",name:"ic:baseline-plus",size:"14",onClick:u[1]||(u[1]=p=>o(1))}),Ie(f,{class:"cursor-pointer",name:"ic:baseline-minus",size:"14",onClick:u[2]||(u[2]=p=>o(-1))})])]),Ie(Le(No),{hue:Le(i).color,"initially-collapsed":!0,onInput:u[3]||(u[3]=p=>Le(i).color=p),class:"shrink-0"},null,8,["hue"]),Ie(h,{"shape-id":Le(i).id},null,8,["shape-id"]),nt("div",Xy,[Ie(f,{class:"cursor-pointer",name:Le(s),onClick:u[4]||(u[4]=p=>Le(i).muted=!Le(i).muted),size:"32"},null,8,["name"]),Ie(f,{class:"cursor-pointer",name:"ic:baseline-delete",size:"32",onClick:u[5]||(u[5]=p=>Le(n).$deleteShape(t.shapeId))})])])}}}),jy={class:"flex flex-col items-center justify-between bg-secondary rounded-xl shadow-xl p-4 space-y-4 w-full h-full"},$y={class:"bg-secondary text-secondary-content w-full overflow-y-auto overflow-x-hidden space-y-2"},Yy=wn({__name:"ShapeList",setup(t){const e=et(),n=e.$shapes,i=e.$addShape;return(r,s)=>{const o=qy;return ct(),Tn("div",jy,[nt("div",$y,[(ct(!0),Tn(It,null,sd(Le(n),a=>(ct(),fn(o,{key:a.id,class:"w-full","shape-id":a.id},null,8,["shape-id"]))),128))]),nt("div",{class:"btn btn-accent w-full",onClick:s[0]||(s[0]=(...a)=>Le(i)&&Le(i)(...a))}," Add shape ")])}}});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="155",Ky=0,Zu=1,Zy=2,mp=1,Jy=2,Nn=3,ui=0,Vt=1,On=2,si=0,dr=1,Ju=2,Qu=3,ef=4,Qy=5,ir=100,eM=101,tM=102,tf=103,nf=104,nM=200,iM=201,rM=202,sM=203,gp=204,_p=205,oM=206,aM=207,lM=208,cM=209,uM=210,fM=0,hM=1,dM=2,Ll=3,pM=4,mM=5,gM=6,_M=7,vp=0,vM=1,xM=2,oi=0,yM=1,MM=2,SM=3,EM=4,bM=5,xp=300,br=301,Tr=302,Il=303,Ul=304,Qo=306,Dl=1e3,hn=1001,Nl=1002,Bt=1003,rf=1004,Sa=1005,en=1006,TM=1007,ds=1008,ai=1009,AM=1010,wM=1011,Rc=1012,yp=1013,ei=1014,ti=1015,ps=1016,Mp=1017,Sp=1018,wi=1020,RM=1021,dn=1023,CM=1024,PM=1025,Ri=1026,Ar=1027,LM=1028,Ep=1029,IM=1030,bp=1031,Tp=1033,Ea=33776,ba=33777,Ta=33778,Aa=33779,sf=35840,of=35841,af=35842,lf=35843,UM=36196,cf=37492,uf=37496,ff=37808,hf=37809,df=37810,pf=37811,mf=37812,gf=37813,_f=37814,vf=37815,xf=37816,yf=37817,Mf=37818,Sf=37819,Ef=37820,bf=37821,wa=36492,DM=36283,Tf=36284,Af=36285,wf=36286,Ap=3e3,Ci=3001,NM=3200,FM=3201,OM=0,BM=1,Pi="",Ge="srgb",An="srgb-linear",wp="display-p3",Ra=7680,HM=519,zM=512,kM=513,GM=514,VM=515,WM=516,XM=517,qM=518,jM=519,Rf=35044,Cf="300 es",Fl=1035,Bn=2e3,Fo=2001;class Nr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ca=Math.PI/180,Ol=180/Math.PI;function bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[t&255]+Pt[t>>8&255]+Pt[t>>16&255]+Pt[t>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[n&63|128]+Pt[n>>8&255]+"-"+Pt[n>>16&255]+Pt[n>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function $M(t,e){return(t%e+e)%e}function Pa(t,e,n){return(1-n)*t+n*e}function Pf(t){return(t&t-1)===0&&t!==0}function Bl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function kr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ht(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],M=r[1],v=r[4],E=r[7],T=r[2],A=r[5],C=r[8];return s[0]=o*_+a*M+l*T,s[3]=o*m+a*v+l*A,s[6]=o*d+a*E+l*C,s[1]=c*_+u*M+f*T,s[4]=c*m+u*v+f*A,s[7]=c*d+u*E+f*C,s[2]=h*_+p*M+g*T,s[5]=h*m+p*v+g*A,s[8]=h*d+p*E+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(La.makeScale(e,n)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,n){return this.premultiply(La.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const La=new Ve;function Rp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Oo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Lf={};function ts(t){t in Lf||(Lf[t]=!0,console.warn(t))}function pr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ia(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const YM=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),KM=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ZM(t){return t.convertSRGBToLinear().applyMatrix3(KM)}function JM(t){return t.applyMatrix3(YM).convertLinearToSRGB()}const QM={[An]:t=>t,[Ge]:t=>t.convertSRGBToLinear(),[wp]:ZM},eS={[An]:t=>t,[Ge]:t=>t.convertLinearToSRGB(),[wp]:JM},rn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return An},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=QM[e],r=eS[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Hi;class Cp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=Oo("canvas")),Hi.width=e.width,Hi.height=e.height;const i=Hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pr(n[i]/255)*255):n[i]=pr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tS=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=bs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ua(r[o].image)):s.push(Ua(r[o]))}else s=Ua(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ua(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Cp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nS=0;class $t extends Nr{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=hn,r=hn,s=en,o=ds,a=dn,l=ai,c=$t.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=bs(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ci?Ge:Pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dl:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dl:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ge?Ci:Ap}set encoding(e){ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ci?Ge:Pi}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=xp;$t.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(p+1)/2,T=(d+1)/2,A=(u+h)/4,C=(f+_)/4,P=(g+m)/4;return v>E&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=C/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=P/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iS extends Nr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ci?Ge:Pi),this.texture=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:en,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Pp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends iS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Lp extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rS extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*_,M=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const T=Math.sqrt(v),A=Math.atan2(T,d*M);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}const E=a*M;if(l=l*m+h*E,c=c*m+p*E,u=u*m+g*E,f=f*m+_*E,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(If.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(If.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,f=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new k,If=new Ts;class As{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox),zi.applyMatrix4(e.matrixWorld),this.union(zi);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Pn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pn)}else r.boundingBox===null&&r.computeBoundingBox(),zi.copy(r.boundingBox),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),Vs.subVectors(this.max,Gr),ki.subVectors(e.a,Gr),Gi.subVectors(e.b,Gr),Vi.subVectors(e.c,Gr),jn.subVectors(Gi,ki),$n.subVectors(Vi,Gi),mi.subVectors(ki,Vi);let n=[0,-jn.z,jn.y,0,-$n.z,$n.y,0,-mi.z,mi.y,jn.z,0,-jn.x,$n.z,0,-$n.x,mi.z,0,-mi.x,-jn.y,jn.x,0,-$n.y,$n.x,0,-mi.y,mi.x,0];return!Na(n,ki,Gi,Vi,Vs)||(n=[1,0,0,0,1,0,0,0,1],!Na(n,ki,Gi,Vi,Vs))?!1:(Ws.crossVectors(jn,$n),n=[Ws.x,Ws.y,Ws.z],Na(n,ki,Gi,Vi,Vs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new k,new k,new k,new k,new k,new k,new k,new k],Pn=new k,zi=new As,ki=new k,Gi=new k,Vi=new k,jn=new k,$n=new k,mi=new k,Gr=new k,Vs=new k,Ws=new k,gi=new k;function Na(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){gi.fromArray(t,s);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),c=n.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sS=new As,Vr=new k,Fa=new k;class Cc{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const n=Vr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Fa)),this.expandByPoint(Vr.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new k,Oa=new k,Xs=new k,Yn=new k,Ba=new k,qs=new k,Ha=new k;class oS{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ln.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,n),Ln.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oa.copy(e).add(n).multiplyScalar(.5),Xs.copy(n).sub(e).normalize(),Yn.copy(this.origin).sub(Oa);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xs),a=Yn.dot(this.direction),l=-Yn.dot(Xs),c=Yn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Oa).addScaledVector(Xs,h),p}intersectSphere(e,n){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,n,i,r,s){Ba.subVectors(n,e),qs.subVectors(i,e),Ha.crossVectors(Ba,qs);let o=this.direction.dot(Ha),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(qs.crossVectors(Yn,qs));if(l<0)return null;const c=a*this.direction.dot(Ba.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(Ha);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,g,_,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;n[0]=h+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;n[0]=h-_*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+_,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aS,e,lS)}lookAt(e,n,i){const r=this.elements;return qt.subVectors(e,n),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Kn.crossVectors(i,qt),Kn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Kn.crossVectors(i,qt)),Kn.normalize(),js.crossVectors(qt,Kn),r[0]=Kn.x,r[4]=js.x,r[8]=qt.x,r[1]=Kn.y,r[5]=js.y,r[9]=qt.y,r[2]=Kn.z,r[6]=js.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],M=i[3],v=i[7],E=i[11],T=i[15],A=r[0],C=r[4],P=r[8],S=r[12],R=r[1],j=r[5],ce=r[9],O=r[13],D=r[2],X=r[6],te=r[10],V=r[14],q=r[3],ae=r[7],le=r[11],H=r[15];return s[0]=o*A+a*R+l*D+c*q,s[4]=o*C+a*j+l*X+c*ae,s[8]=o*P+a*ce+l*te+c*le,s[12]=o*S+a*O+l*V+c*H,s[1]=u*A+f*R+h*D+p*q,s[5]=u*C+f*j+h*X+p*ae,s[9]=u*P+f*ce+h*te+p*le,s[13]=u*S+f*O+h*V+p*H,s[2]=g*A+_*R+m*D+d*q,s[6]=g*C+_*j+m*X+d*ae,s[10]=g*P+_*ce+m*te+d*le,s[14]=g*S+_*O+m*V+d*H,s[3]=M*A+v*R+E*D+T*q,s[7]=M*C+v*j+E*X+T*ae,s[11]=M*P+v*ce+E*te+T*le,s[15]=M*S+v*O+E*V+T*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+_*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],M=f*m*c-_*h*c+_*l*p-a*m*p-f*l*d+a*h*d,v=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,E=u*_*c-g*f*c+g*a*p-o*_*p-u*a*d+o*f*d,T=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,A=n*M+i*v+r*E+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=M*C,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*C,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*C,e[4]=v*C,e[5]=(u*m*s-g*h*s+g*r*p-n*m*p-u*r*d+n*h*d)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*C,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*C,e[8]=E*C,e[9]=(g*f*s-u*_*s-g*i*p+n*_*p+u*i*d-n*f*d)*C,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*d+n*a*d)*C,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*C,e[12]=T*C,e[13]=(u*_*r-g*f*r+g*i*h-n*_*h-u*i*m+n*f*m)*C,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,_=o*u,m=o*f,d=a*f,M=l*c,v=l*u,E=l*f,T=i.x,A=i.y,C=i.z;return r[0]=(1-(_+d))*T,r[1]=(p+E)*T,r[2]=(g-v)*T,r[3]=0,r[4]=(p-E)*A,r[5]=(1-(h+d))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(g+v)*C,r[9]=(m-M)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),a=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/o,f=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,n.setFromRotationMatrix(sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Bn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Bn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Fo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Bn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let g,_;if(a===Bn)g=(o+s)*f,_=-2*f;else if(a===Fo)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Wi=new k,sn=new Rt,aS=new k(0,0,0),lS=new k(1,1,1),Kn=new k,js=new k,qt=new k,Uf=new Rt,Df=new Ts;class ea{constructor(e=0,n=0,i=0,r=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class Ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cS=0;const Nf=new k,Xi=new Ts,In=new Rt,$s=new k,Wr=new k,uS=new k,fS=new Ts,Ff=new k(1,0,0),Of=new k(0,1,0),Bf=new k(0,0,1),hS={type:"added"},Hf={type:"removed"};class Yt extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new k,n=new ea,i=new Ts,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ve}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xi.setFromAxisAngle(e,n),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,n){return Xi.setFromAxisAngle(e,n),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Ff,e)}rotateY(e){return this.rotateOnAxis(Of,e)}rotateZ(e){return this.rotateOnAxis(Bf,e)}translateOnAxis(e,n){return Nf.copy(e).applyQuaternion(this.quaternion),this.position.add(Nf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ff,e)}translateY(e){return this.translateOnAxis(Of,e)}translateZ(e){return this.translateOnAxis(Bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$s.copy(e):$s.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Wr,$s,this.up):In.lookAt($s,Wr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(In),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Hf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Hf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,fS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new k(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new k,Un=new k,za=new k,Dn=new k,qi=new k,ji=new k,zf=new k,ka=new k,Ga=new k,Va=new k;let Ys=!1;class cn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),on.subVectors(e,n),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){on.subVectors(r,n),Un.subVectors(i,n),za.subVectors(e,n);const o=on.dot(on),a=on.dot(Un),l=on.dot(za),c=Un.dot(Un),u=Un.dot(za),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Dn),l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l}static isFrontFacing(e,n,i,r){return on.subVectors(i,n),Un.subVectors(e,n),on.cross(Un).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),on.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return cn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qi.subVectors(r,i),ji.subVectors(s,i),ka.subVectors(e,i);const l=qi.dot(ka),c=ji.dot(ka);if(l<=0&&c<=0)return n.copy(i);Ga.subVectors(e,r);const u=qi.dot(Ga),f=ji.dot(Ga);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(qi,o);Va.subVectors(e,s);const p=qi.dot(Va),g=ji.dot(Va);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ji,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return zf.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(zf,a);const d=1/(m+_+h);return o=_*d,a=h*d,n.copy(i).addScaledVector(qi,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let dS=0;class ta extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=dr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gp,this.blendDst=_p,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=HM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function Wa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ge){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rn.workingColorSpace){return this.r=e,this.g=n,this.b=i,rn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rn.workingColorSpace){if(e=$M(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Wa(o,s,e+1/3),this.g=Wa(o,s,e),this.b=Wa(o,s,e-1/3)}return rn.toWorkingColorSpace(this,r),this}setStyle(e,n=Ge){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ge){const i=Up[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ge){return rn.fromWorkingColorSpace(Lt.copy(this),e),Math.round(kt(Lt.r*255,0,255))*65536+Math.round(kt(Lt.g*255,0,255))*256+Math.round(kt(Lt.b*255,0,255))}getHexString(e=Ge){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rn.workingColorSpace){rn.fromWorkingColorSpace(Lt.copy(this),n);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rn.workingColorSpace){return rn.fromWorkingColorSpace(Lt.copy(this),n),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ge){rn.fromWorkingColorSpace(Lt.copy(this),e);const n=Lt.r,i=Lt.g,r=Lt.b;return e!==Ge?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(an),an.h+=e,an.s+=n,an.l+=i,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(an),e.getHSL(Ks);const i=Pa(an.h,Ks.h,n),r=Pa(an.s,Ks.s,n),s=Pa(an.l,Ks.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new it;it.NAMES=Up;class Pc extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new k,Zs=new Ke;class St{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rf,this.updateRange={offset:0,count:-1},this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zs.fromBufferAttribute(this,n),Zs.applyMatrix3(e),this.setXY(n,Zs.x,Zs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix3(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(e),this.setXYZ(n,gt.x,gt.y,gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=kr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=kr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=kr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=kr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=kr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Dp extends St{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Np extends St{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class En extends St{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pS=0;const Zt=new Rt,Xa=new Yt,$i=new k,jt=new As,Xr=new As,Mt=new k;class Vn extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?Np:Dp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,n,i){return Zt.makeTranslation(e,n,i),this.applyMatrix4(Zt),this}scale(e,n,i){return Zt.makeScale(e,n,i),this.applyMatrix4(Zt),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new En(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(jt.min,Xr.min),jt.expandByPoint(Mt),Mt.addVectors(jt.max,Xr.max),jt.expandByPoint(Mt)):(jt.expandByPoint(Xr.min),jt.expandByPoint(Xr.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),Mt.add($i)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new k,u[R]=new k;const f=new k,h=new k,p=new k,g=new Ke,_=new Ke,m=new Ke,d=new k,M=new k;function v(R,j,ce){f.fromArray(r,R*3),h.fromArray(r,j*3),p.fromArray(r,ce*3),g.fromArray(o,R*2),_.fromArray(o,j*2),m.fromArray(o,ce*2),h.sub(f),p.sub(f),_.sub(g),m.sub(g);const O=1/(_.x*m.y-m.x*_.y);isFinite(O)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(O),M.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(O),c[R].add(d),c[j].add(d),c[ce].add(d),u[R].add(M),u[j].add(M),u[ce].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let R=0,j=E.length;R<j;++R){const ce=E[R],O=ce.start,D=ce.count;for(let X=O,te=O+D;X<te;X+=3)v(i[X+0],i[X+1],i[X+2])}const T=new k,A=new k,C=new k,P=new k;function S(R){C.fromArray(s,R*3),P.copy(C);const j=c[R];T.copy(j),T.sub(C.multiplyScalar(C.dot(j))).normalize(),A.crossVectors(P,j);const O=A.dot(u[R])<0?-1:1;l[R*4]=T.x,l[R*4+1]=T.y,l[R*4+2]=T.z,l[R*4+3]=O}for(let R=0,j=E.length;R<j;++R){const ce=E[R],O=ce.start,D=ce.count;for(let X=O,te=O+D;X<te;X+=3)S(i[X+0]),S(i[X+1]),S(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new St(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mt.fromBufferAttribute(e,n),Mt.normalize(),e.setXYZ(n,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new St(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kf=new Rt,_i=new oS,Js=new Cc,Gf=new k,Yi=new k,Ki=new k,Zi=new k,qa=new k,Qs=new k,eo=new Ke,to=new Ke,no=new Ke,Vf=new k,Wf=new k,Xf=new k,io=new k,ro=new k;class mn extends Yt{constructor(e=new Vn,n=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(qa.fromBufferAttribute(f,e),o?Qs.addScaledVector(qa,u):Qs.addScaledVector(qa.sub(n),u))}n.add(Qs)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(Js.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Js,Gf)===null||_i.origin.distanceToSquared(Gf)>(e.far-e.near)**2))&&(kf.copy(s).invert(),_i.copy(e.ray).applyMatrix4(kf),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_i)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,T=v;E<T;E+=3){const A=a.getX(E),C=a.getX(E+1),P=a.getX(E+2);r=so(this,d,e,i,c,u,f,A,C,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);r=so(this,o,e,i,c,u,f,M,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,T=v;E<T;E+=3){const A=E,C=E+1,P=E+2;r=so(this,d,e,i,c,u,f,A,C,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,v=m+1,E=m+2;r=so(this,o,e,i,c,u,f,M,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mS(t,e,n,i,r,s,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ui,a),l===null)return null;ro.copy(a),ro.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ro);return c<n.near||c>n.far?null:{distance:c,point:ro.clone(),object:t}}function so(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Yi),t.getVertexPosition(l,Ki),t.getVertexPosition(c,Zi);const u=mS(t,e,n,i,Yi,Ki,Zi,io);if(u){r&&(eo.fromBufferAttribute(r,a),to.fromBufferAttribute(r,l),no.fromBufferAttribute(r,c),u.uv=cn.getInterpolation(io,Yi,Ki,Zi,eo,to,no,new Ke)),s&&(eo.fromBufferAttribute(s,a),to.fromBufferAttribute(s,l),no.fromBufferAttribute(s,c),u.uv1=cn.getInterpolation(io,Yi,Ki,Zi,eo,to,no,new Ke),u.uv2=u.uv1),o&&(Vf.fromBufferAttribute(o,a),Wf.fromBufferAttribute(o,l),Xf.fromBufferAttribute(o,c),u.normal=cn.getInterpolation(io,Yi,Ki,Zi,Vf,Wf,Xf,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};cn.getNormal(Yi,Ki,Zi,f.normal),u.face=f}return u}class ws extends Vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(f,2));function g(_,m,d,M,v,E,T,A,C,P,S){const R=E/C,j=T/P,ce=E/2,O=T/2,D=A/2,X=C+1,te=P+1;let V=0,q=0;const ae=new k;for(let le=0;le<te;le++){const H=le*j-O;for(let J=0;J<X;J++){const me=J*R-ce;ae[_]=me*M,ae[m]=H*v,ae[d]=D,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[d]=A>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(J/C),f.push(1-le/P),V+=1}}for(let le=0;le<P;le++)for(let H=0;H<C;H++){const J=h+H+X*le,me=h+H+X*(le+1),_e=h+(H+1)+X*(le+1),Me=h+(H+1)+X*le;l.push(J,me,Me),l.push(me,_e,Me),q+=6}a.addGroup(p,q,S),p+=q,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ot(t){const e={};for(let n=0;n<t.length;n++){const i=wr(t[n]);for(const r in i)e[r]=i[r]}return e}function gS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fp(t){return t.getRenderTarget()===null?t.outputColorSpace:An}const _S={clone:wr,merge:Ot};var vS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vS,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Op extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Bn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends Op{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ca*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ji=-90,Qi=1;class yS extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new tn(Ji,Qi,e,n);r.layers=this.layers,this.add(r);const s=new tn(Ji,Qi,e,n);s.layers=this.layers,this.add(s);const o=new tn(Ji,Qi,e,n);o.layers=this.layers,this.add(o);const a=new tn(Ji,Qi,e,n);a.layers=this.layers,this.add(a);const l=new tn(Ji,Qi,e,n);l.layers=this.layers,this.add(l);const c=new tn(Ji,Qi,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Bp extends $t{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:br,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class MS extends Ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ci?Ge:Pi),this.texture=new Bp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ws(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:si});s.uniforms.tEquirect.value=n;const o=new mn(r,s),a=n.minFilter;return n.minFilter===ds&&(n.minFilter=en),new yS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ja=new k,SS=new k,ES=new Ve;class xi{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ja.subVectors(i,n).cross(SS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ja),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ES.getNormalMatrix(e),r=this.coplanarPoint(ja).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Cc,oo=new k;class Hp{constructor(e=new xi,n=new xi,i=new xi,r=new xi,s=new xi,o=new xi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Bn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],M=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-p,E-d).normalize(),i[1].setComponents(l+s,h+c,m+p,E+d).normalize(),i[2].setComponents(l+o,h+u,m+g,E+M).normalize(),i[3].setComponents(l-o,h-u,m-g,E-M).normalize(),i[4].setComponents(l-a,h-f,m-_,E-v).normalize(),n===Bn)i[5].setComponents(l+a,h+f,m+_,E+v).normalize();else if(n===Fo)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(oo.x=r.normal.x>0?e.max.x:e.min.x,oo.y=r.normal.y>0?e.max.y:e.min.y,oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function bS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=t.SHORT;else if(f instanceof Uint32Array)g=t.UNSIGNED_INT;else if(f instanceof Int32Array)g=t.INT;else if(f instanceof Int8Array)g=t.BYTE;else if(f instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Lc extends Vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let v=0;v<c;v++){const E=v*f-s;g.push(E,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const v=M+c*d,E=M+c*(d+1),T=M+1+c*(d+1),A=M+1+c*d;p.push(v,E,A),p.push(E,T,A)}this.setIndex(p),this.setAttribute("position",new En(g,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var TS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,US=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$S=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QS="gl_FragColor = linearToOutputTexel( gl_FragColor );",eE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ME=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,SE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,EE=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,AE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,CE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,PE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,LE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,BE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,kE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ab=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_b=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fb=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Re={alphahash_fragment:TS,alphahash_pars_fragment:AS,alphamap_fragment:wS,alphamap_pars_fragment:RS,alphatest_fragment:CS,alphatest_pars_fragment:PS,aomap_fragment:LS,aomap_pars_fragment:IS,begin_vertex:US,beginnormal_vertex:DS,bsdfs:NS,iridescence_fragment:FS,bumpmap_pars_fragment:OS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:HS,clipping_planes_pars_vertex:zS,clipping_planes_vertex:kS,color_fragment:GS,color_pars_fragment:VS,color_pars_vertex:WS,color_vertex:XS,common:qS,cube_uv_reflection_fragment:jS,defaultnormal_vertex:$S,displacementmap_pars_vertex:YS,displacementmap_vertex:KS,emissivemap_fragment:ZS,emissivemap_pars_fragment:JS,colorspace_fragment:QS,colorspace_pars_fragment:eE,envmap_fragment:tE,envmap_common_pars_fragment:nE,envmap_pars_fragment:iE,envmap_pars_vertex:rE,envmap_physical_pars_fragment:gE,envmap_vertex:sE,fog_vertex:oE,fog_pars_vertex:aE,fog_fragment:lE,fog_pars_fragment:cE,gradientmap_pars_fragment:uE,lightmap_fragment:fE,lightmap_pars_fragment:hE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:pE,lights_pars_begin:mE,lights_toon_fragment:_E,lights_toon_pars_fragment:vE,lights_phong_fragment:xE,lights_phong_pars_fragment:yE,lights_physical_fragment:ME,lights_physical_pars_fragment:SE,lights_fragment_begin:EE,lights_fragment_maps:bE,lights_fragment_end:TE,logdepthbuf_fragment:AE,logdepthbuf_pars_fragment:wE,logdepthbuf_pars_vertex:RE,logdepthbuf_vertex:CE,map_fragment:PE,map_pars_fragment:LE,map_particle_fragment:IE,map_particle_pars_fragment:UE,metalnessmap_fragment:DE,metalnessmap_pars_fragment:NE,morphcolor_vertex:FE,morphnormal_vertex:OE,morphtarget_pars_vertex:BE,morphtarget_vertex:HE,normal_fragment_begin:zE,normal_fragment_maps:kE,normal_pars_fragment:GE,normal_pars_vertex:VE,normal_vertex:WE,normalmap_pars_fragment:XE,clearcoat_normal_fragment_begin:qE,clearcoat_normal_fragment_maps:jE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:YE,opaque_fragment:KE,packing:ZE,premultiplied_alpha_fragment:JE,project_vertex:QE,dithering_fragment:eb,dithering_pars_fragment:tb,roughnessmap_fragment:nb,roughnessmap_pars_fragment:ib,shadowmap_pars_fragment:rb,shadowmap_pars_vertex:sb,shadowmap_vertex:ob,shadowmask_pars_fragment:ab,skinbase_vertex:lb,skinning_pars_vertex:cb,skinning_vertex:ub,skinnormal_vertex:fb,specularmap_fragment:hb,specularmap_pars_fragment:db,tonemapping_fragment:pb,tonemapping_pars_fragment:mb,transmission_fragment:gb,transmission_pars_fragment:_b,uv_pars_fragment:vb,uv_pars_vertex:xb,uv_vertex:yb,worldpos_vertex:Mb,background_vert:Sb,background_frag:Eb,backgroundCube_vert:bb,backgroundCube_frag:Tb,cube_vert:Ab,cube_frag:wb,depth_vert:Rb,depth_frag:Cb,distanceRGBA_vert:Pb,distanceRGBA_frag:Lb,equirect_vert:Ib,equirect_frag:Ub,linedashed_vert:Db,linedashed_frag:Nb,meshbasic_vert:Fb,meshbasic_frag:Ob,meshlambert_vert:Bb,meshlambert_frag:Hb,meshmatcap_vert:zb,meshmatcap_frag:kb,meshnormal_vert:Gb,meshnormal_frag:Vb,meshphong_vert:Wb,meshphong_frag:Xb,meshphysical_vert:qb,meshphysical_frag:jb,meshtoon_vert:$b,meshtoon_frag:Yb,points_vert:Kb,points_frag:Zb,shadow_vert:Jb,shadow_frag:Qb,sprite_vert:eT,sprite_frag:tT},he={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},yn={basic:{uniforms:Ot([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Ot([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new it(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Ot([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Ot([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Ot([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new it(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Ot([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Ot([he.points,he.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Ot([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Ot([he.common,he.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Ot([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Ot([he.sprite,he.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Ot([he.common,he.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Ot([he.lights,he.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};yn.physical={uniforms:Ot([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const ao={r:0,b:0,g:0};function nT(t,e,n,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let M=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),M=!0),t.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),M=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),M=!0;break}(t.autoClear||M)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Qo)?(u===void 0&&(u=new mn(new ws(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:wr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Ge,(f!==v||h!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new mn(new Lc(2,2),new fi({name:"BackgroundMaterial",uniforms:wr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(ao,Fp(t)),i.buffers.color.setClear(ao.r,ao.g,ao.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function iT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(D,X,te,V,q){let ae=!1;if(o){const le=_(V,te,X);c!==le&&(c=le,p(c.object)),ae=d(D,V,te,q),ae&&M(D,V,te,q)}else{const le=X.wireframe===!0;(c.geometry!==V.id||c.program!==te.id||c.wireframe!==le)&&(c.geometry=V.id,c.program=te.id,c.wireframe=le,ae=!0)}q!==null&&n.update(q,t.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,P(D,X,te,V),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,X,te){const V=te.wireframe===!0;let q=a[D.id];q===void 0&&(q={},a[D.id]=q);let ae=q[X.id];ae===void 0&&(ae={},q[X.id]=ae);let le=ae[V];return le===void 0&&(le=m(h()),ae[V]=le),le}function m(D){const X=[],te=[],V=[];for(let q=0;q<r;q++)X[q]=0,te[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:te,attributeDivisors:V,object:D,attributes:{},index:null}}function d(D,X,te,V){const q=c.attributes,ae=X.attributes;let le=0;const H=te.getAttributes();for(const J in H)if(H[J].location>=0){const _e=q[J];let Me=ae[J];if(Me===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor)),_e===void 0||_e.attribute!==Me||Me&&_e.data!==Me.data)return!0;le++}return c.attributesNum!==le||c.index!==V}function M(D,X,te,V){const q={},ae=X.attributes;let le=0;const H=te.getAttributes();for(const J in H)if(H[J].location>=0){let _e=ae[J];_e===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor));const Me={};Me.attribute=_e,_e&&_e.data&&(Me.data=_e.data),q[J]=Me,le++}c.attributes=q,c.attributesNum=le,c.index=V}function v(){const D=c.newAttributes;for(let X=0,te=D.length;X<te;X++)D[X]=0}function E(D){T(D,0)}function T(D,X){const te=c.newAttributes,V=c.enabledAttributes,q=c.attributeDivisors;te[D]=1,V[D]===0&&(t.enableVertexAttribArray(D),V[D]=1),q[D]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,X),q[D]=X)}function A(){const D=c.newAttributes,X=c.enabledAttributes;for(let te=0,V=X.length;te<V;te++)X[te]!==D[te]&&(t.disableVertexAttribArray(te),X[te]=0)}function C(D,X,te,V,q,ae,le){le===!0?t.vertexAttribIPointer(D,X,te,q,ae):t.vertexAttribPointer(D,X,te,V,q,ae)}function P(D,X,te,V){if(i.isWebGL2===!1&&(D.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=V.attributes,ae=te.getAttributes(),le=X.defaultAttributeValues;for(const H in ae){const J=ae[H];if(J.location>=0){let me=q[H];if(me===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),me!==void 0){const _e=me.normalized,Me=me.itemSize,be=n.get(me);if(be===void 0)continue;const Ue=be.buffer,Ce=be.type,Xe=be.bytesPerElement,yt=i.isWebGL2===!0&&(Ce===t.INT||Ce===t.UNSIGNED_INT||me.gpuType===yp);if(me.isInterleavedBufferAttribute){const He=me.data,x=He.stride,L=me.offset;if(He.isInstancedInterleavedBuffer){for(let N=0;N<J.locationSize;N++)T(J.location+N,He.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let N=0;N<J.locationSize;N++)E(J.location+N);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let N=0;N<J.locationSize;N++)C(J.location+N,Me/J.locationSize,Ce,_e,x*Xe,(L+Me/J.locationSize*N)*Xe,yt)}else{if(me.isInstancedBufferAttribute){for(let He=0;He<J.locationSize;He++)T(J.location+He,me.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let He=0;He<J.locationSize;He++)E(J.location+He);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let He=0;He<J.locationSize;He++)C(J.location+He,Me/J.locationSize,Ce,_e,Me*Xe,Me/J.locationSize*He*Xe,yt)}}else if(le!==void 0){const _e=le[H];if(_e!==void 0)switch(_e.length){case 2:t.vertexAttrib2fv(J.location,_e);break;case 3:t.vertexAttrib3fv(J.location,_e);break;case 4:t.vertexAttrib4fv(J.location,_e);break;default:t.vertexAttrib1fv(J.location,_e)}}}}A()}function S(){ce();for(const D in a){const X=a[D];for(const te in X){const V=X[te];for(const q in V)g(V[q].object),delete V[q];delete X[te]}delete a[D]}}function R(D){if(a[D.id]===void 0)return;const X=a[D.id];for(const te in X){const V=X[te];for(const q in V)g(V[q].object),delete V[q];delete X[te]}delete a[D.id]}function j(D){for(const X in a){const te=a[X];if(te[D.id]===void 0)continue;const V=te[D.id];for(const q in V)g(V[q].object),delete V[q];delete te[D.id]}}function ce(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ce,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:j,initAttributes:v,enableAttribute:E,disableUnusedAttributes:A}}function rT(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),n.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function sT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,E=o||e.has("OES_texture_float"),T=v&&E,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:T,maxSamples:A}}function oT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,v=M*4;let E=d.clippingState||null;l.value=E,E=u(g,h,v,p);for(let T=0;T!==v;++T)E[T]=n[T];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,E=p;v!==_;++v,E+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function aT(t){let e=new WeakMap;function n(o,a){return a===Il?o.mapping=br:a===Ul&&(o.mapping=Tr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Il||a===Ul)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new MS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class lT extends Op{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const rr=4,qf=[.125,.215,.35,.446,.526,.582],Ei=20,$a=new lT,jf=new it;let Ya=null;const yi=(1+Math.sqrt(5))/2,er=1/yi,$f=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,yi,er),new k(0,yi,-er),new k(er,0,yi),new k(-er,0,yi),new k(yi,er,0),new k(-yi,er,0)];class Yf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ya=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya),e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===br||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:ps,format:dn,colorSpace:An,depthBuffer:!1},r=Kf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cT(s)),this._blurMaterial=uT(s,e,n)}return r}_compileMaterial(e){const n=new mn(this._lodPlanes[0],e);this._renderer.compile(n,$a)}_sceneToCubeUV(e,n,i,r){const a=new tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(jf),u.toneMapping=oi,u.autoClear=!1;const p=new Pc({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new mn(new ws,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(jf),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;lo(r,M*v,d>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===br||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;lo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,$a)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$f[(r-1)%$f.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new mn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const d=[];let M=0;for(let C=0;C<Ei;++C){const P=C/_,S=Math.exp(-P*P/2);d.push(S),C===0?M+=S:C<m&&(M+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const E=this._sizeLods[r],T=3*E*(r>v-rr?r-v+rr:0),A=4*(this._cubeSize-E);lo(n,T,A,3*E,2*E),l.setRenderTarget(n),l.render(f,$a)}}function cT(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+qf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-rr?l=qf[o-t+rr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),v=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,P=A>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(S,_*g*A),v.set(h,m*g*A);const R=[A,A,A,A,A,A];E.set(R,d*g*A)}const T=new Vn;T.setAttribute("position",new St(M,_)),T.setAttribute("uv",new St(v,m)),T.setAttribute("faceIndex",new St(E,d)),e.push(T),r>rr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kf(t,e,n){const i=new Ui(t,e,n);return i.texture.mapping=Qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uT(t,e,n){const i=new Float32Array(Ei),r=new k(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Zf(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Jf(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Il||l===Ul,u=l===br||l===Tr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Yf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Yf(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let v=0,E=M.length;v<E;v+=3){const T=M[v+0],A=M[v+1],C=M[v+2];h.push(T,A,A,C,C,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,E=M.length/3-1;v<E;v+=3){const T=v+0,A=v+1,C=v+2;h.push(T,A,A,C,C,T)}}else return;const m=new(Rp(h)?Np:Dp)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function pT(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){t.drawElements(s,p,a,h*l),n.update(p,s,1)}function f(h,p,g){if(g===0)return;let _,m;if(r)_=t,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,h*l,g),n.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function mT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gT(t,e){return t[0]-e[0]}function _T(t,e){return Math.abs(e[1])-Math.abs(t[1])}function vT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let D=function(){ce.dispose(),s.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let P=0;M===!0&&(P=1),v===!0&&(P=2),E===!0&&(P=3);let S=u.attributes.position.count*P,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const j=new Float32Array(S*R*4*g),ce=new Lp(j,S,R,g);ce.type=ti,ce.needsUpdate=!0;const O=P*4;for(let X=0;X<g;X++){const te=T[X],V=A[X],q=C[X],ae=S*R*4*X;for(let le=0;le<te.count;le++){const H=le*O;M===!0&&(o.fromBufferAttribute(te,le),j[ae+H+0]=o.x,j[ae+H+1]=o.y,j[ae+H+2]=o.z,j[ae+H+3]=0),v===!0&&(o.fromBufferAttribute(V,le),j[ae+H+4]=o.x,j[ae+H+5]=o.y,j[ae+H+6]=o.z,j[ae+H+7]=0),E===!0&&(o.fromBufferAttribute(q,le),j[ae+H+8]=o.x,j[ae+H+9]=o.y,j[ae+H+10]=o.z,j[ae+H+11]=q.itemSize===4?o.w:1)}}_={count:g,texture:ce,size:new Ke(S,R)},s.set(u,_),u.addEventListener("dispose",D)}let m=0;for(let M=0;M<h.length;M++)m+=h[M];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",d),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}else{const p=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<p;v++){const E=g[v];E[0]=v,E[1]=h[v]}g.sort(_T);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(gT);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let v=0;v<8;v++){const E=a[v],T=E[0],A=E[1];T!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+v)!==_[T]&&u.setAttribute("morphTarget"+v,_[T]),m&&u.getAttribute("morphNormal"+v)!==m[T]&&u.setAttribute("morphNormal"+v,m[T]),r[v]=A,d+=A):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const M=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",M),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function xT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const kp=new $t,Gp=new Lp,Vp=new rS,Wp=new Bp,Qf=[],eh=[],th=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function Fr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qf[r];if(s===void 0&&(s=new Float32Array(r),Qf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function na(t,e){let n=eh[e];n===void 0&&(n=new Int32Array(e),eh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vt(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;ih.set(i),t.uniformMatrix2fv(this.addr,!1,ih),xt(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;nh.set(i),t.uniformMatrix3fv(this.addr,!1,nh),xt(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;th.set(i),t.uniformMatrix4fv(this.addr,!1,th),xt(n,i)}}function wT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function NT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||kp,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vp,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Wp,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Gp,r)}function HT(t){switch(t){case 5126:return yT;case 35664:return MT;case 35665:return ST;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return wT;case 35667:case 35671:return RT;case 35668:case 35672:return CT;case 35669:case 35673:return PT;case 5125:return LT;case 36294:return IT;case 36295:return UT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return BT}}function zT(t,e){t.uniform1fv(this.addr,e)}function kT(t,e){const n=Fr(e,this.size,2);t.uniform2fv(this.addr,n)}function GT(t,e){const n=Fr(e,this.size,3);t.uniform3fv(this.addr,n)}function VT(t,e){const n=Fr(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){const n=Fr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){const n=Fr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qT(t,e){const n=Fr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jT(t,e){t.uniform1iv(this.addr,e)}function $T(t,e){t.uniform2iv(this.addr,e)}function YT(t,e){t.uniform3iv(this.addr,e)}function KT(t,e){t.uniform4iv(this.addr,e)}function ZT(t,e){t.uniform1uiv(this.addr,e)}function JT(t,e){t.uniform2uiv(this.addr,e)}function QT(t,e){t.uniform3uiv(this.addr,e)}function eA(t,e){t.uniform4uiv(this.addr,e)}function tA(t,e,n){const i=this.cache,r=e.length,s=na(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||kp,s[o])}function nA(t,e,n){const i=this.cache,r=e.length,s=na(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Vp,s[o])}function iA(t,e,n){const i=this.cache,r=e.length,s=na(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Wp,s[o])}function rA(t,e,n){const i=this.cache,r=e.length,s=na(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Gp,s[o])}function sA(t){switch(t){case 5126:return zT;case 35664:return kT;case 35665:return GT;case 35666:return VT;case 35674:return WT;case 35675:return XT;case 35676:return qT;case 5124:case 35670:return jT;case 35667:case 35671:return $T;case 35668:case 35672:return YT;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return JT;case 36295:return QT;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}class oA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=HT(n.type)}}class aA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=sA(n.type)}}class lA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function rh(t,e){t.seq.push(e),t.map[e.id]=e}function cA(t,e,n){const i=t.name,r=i.length;for(Ka.lastIndex=0;;){const s=Ka.exec(i),o=Ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rh(n,c===void 0?new oA(a,t,e):new aA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new lA(a),rh(n,f)),n=f}}}class go{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);cA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function sh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let uA=0;function fA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function hA(t){switch(t){case An:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function oh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+fA(t.getShaderSource(e),o)}else return r}function dA(t,e){const n=hA(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function pA(t,e){let n;switch(e){case yM:n="Linear";break;case MM:n="Reinhard";break;case SM:n="OptimizedCineon";break;case EM:n="ACESFilmic";break;case bM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function mA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function gA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _A(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $r(t){return t!==""}function ah(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(t){return t.replace(vA,yA)}const xA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yA(t,e){let n=Re[e];if(n===void 0){const i=xA.get(e);if(i!==void 0)n=Re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hl(n)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(t){return t.replace(MA,SA)}function SA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uh(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===mp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Jy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function bA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case br:case Tr:e="ENVMAP_TYPE_CUBE";break;case Qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function AA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vp:e="ENVMAP_BLENDING_MULTIPLY";break;case vM:e="ENVMAP_BLENDING_MIX";break;case xM:e="ENVMAP_BLENDING_ADD";break}return e}function wA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=EA(n),c=bA(n),u=TA(n),f=AA(n),h=wA(n),p=n.isWebGL2?"":mA(n),g=gA(s),_=r.createProgram();let m,d,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($r).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($r).join(`
`),d.length>0&&(d+=`
`)):(m=[uh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),d=[p,uh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?Re.tonemapping_pars_fragment:"",n.toneMapping!==oi?pA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,dA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($r).join(`
`)),o=Hl(o),o=ah(o,n),o=lh(o,n),a=Hl(a),a=ah(a,n),a=lh(a,n),o=ch(o),a=ch(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=M+m+o,E=M+d+a,T=sh(r,r.VERTEX_SHADER,v),A=sh(r,r.FRAGMENT_SHADER,E);if(r.attachShader(_,T),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(T).trim(),j=r.getShaderInfoLog(A).trim();let ce=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ce=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,T,A);else{const D=oh(r,T,"vertex"),X=oh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+D+`
`+X)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||j==="")&&(O=!1);O&&(this.diagnostics={runnable:ce,programLog:S,vertexShader:{log:R,prefix:m},fragmentShader:{log:j,prefix:d}})}r.deleteShader(T),r.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new go(r,_)),C};let P;return this.getAttributes=function(){return P===void 0&&(P=_A(r,_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let CA=0;class PA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LA(e),n.set(e,i)),i}}class LA{constructor(e){this.id=CA++,this.code=e,this.usedTimes=0}}function IA(t,e,n,i,r,s,o){const a=new Ip,l=new PA,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,R,j,ce,O){const D=ce.fog,X=O.geometry,te=S.isMeshStandardMaterial?ce.environment:null,V=(S.isMeshStandardMaterial?n:e).get(S.envMap||te),q=V&&V.mapping===Qo?V.image.height:null,ae=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,H=le!==void 0?le.length:0;let J=0;X.morphAttributes.position!==void 0&&(J=1),X.morphAttributes.normal!==void 0&&(J=2),X.morphAttributes.color!==void 0&&(J=3);let me,_e,Me,be;if(ae){const rt=yn[ae];me=rt.vertexShader,_e=rt.fragmentShader}else me=S.vertexShader,_e=S.fragmentShader,l.update(S),Me=l.getVertexShaderID(S),be=l.getFragmentShaderID(S);const Ue=t.getRenderTarget(),Ce=O.isInstancedMesh===!0,Xe=!!S.map,yt=!!S.matcap,He=!!V,x=!!S.aoMap,L=!!S.lightMap,N=!!S.bumpMap,G=!!S.normalMap,z=!!S.displacementMap,re=!!S.emissiveMap,se=!!S.metalnessMap,Z=!!S.roughnessMap,oe=S.anisotropy>0,ie=S.clearcoat>0,ye=S.iridescence>0,b=S.sheen>0,y=S.transmission>0,U=oe&&!!S.anisotropyMap,Q=ie&&!!S.clearcoatMap,ee=ie&&!!S.clearcoatNormalMap,ne=ie&&!!S.clearcoatRoughnessMap,de=ye&&!!S.iridescenceMap,ue=ye&&!!S.iridescenceThicknessMap,W=b&&!!S.sheenColorMap,we=b&&!!S.sheenRoughnessMap,Te=!!S.specularMap,Ae=!!S.specularColorMap,pe=!!S.specularIntensityMap,ve=y&&!!S.transmissionMap,ze=y&&!!S.thicknessMap,tt=!!S.gradientMap,I=!!S.alphaMap,ge=S.alphaTest>0,$=!!S.alphaHash,fe=!!S.extensions,xe=!!X.attributes.uv1,$e=!!X.attributes.uv2,at=!!X.attributes.uv3;let dt=oi;return S.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(dt=t.toneMapping),{isWebGL2:u,shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:me,fragmentShader:_e,defines:S.defines,customVertexShaderID:Me,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:An,map:Xe,matcap:yt,envMap:He,envMapMode:He&&V.mapping,envMapCubeUVHeight:q,aoMap:x,lightMap:L,bumpMap:N,normalMap:G,displacementMap:h&&z,emissiveMap:re,normalMapObjectSpace:G&&S.normalMapType===BM,normalMapTangentSpace:G&&S.normalMapType===OM,metalnessMap:se,roughnessMap:Z,anisotropy:oe,anisotropyMap:U,clearcoat:ie,clearcoatMap:Q,clearcoatNormalMap:ee,clearcoatRoughnessMap:ne,iridescence:ye,iridescenceMap:de,iridescenceThicknessMap:ue,sheen:b,sheenColorMap:W,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ae,specularIntensityMap:pe,transmission:y,transmissionMap:ve,thicknessMap:ze,gradientMap:tt,opaque:S.transparent===!1&&S.blending===dr,alphaMap:I,alphaTest:ge,alphaHash:$,combine:S.combine,mapUv:Xe&&_(S.map.channel),aoMapUv:x&&_(S.aoMap.channel),lightMapUv:L&&_(S.lightMap.channel),bumpMapUv:N&&_(S.bumpMap.channel),normalMapUv:G&&_(S.normalMap.channel),displacementMapUv:z&&_(S.displacementMap.channel),emissiveMapUv:re&&_(S.emissiveMap.channel),metalnessMapUv:se&&_(S.metalnessMap.channel),roughnessMapUv:Z&&_(S.roughnessMap.channel),anisotropyMapUv:U&&_(S.anisotropyMap.channel),clearcoatMapUv:Q&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:W&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(S.sheenRoughnessMap.channel),specularMapUv:Te&&_(S.specularMap.channel),specularColorMapUv:Ae&&_(S.specularColorMap.channel),specularIntensityMapUv:pe&&_(S.specularIntensityMap.channel),transmissionMapUv:ve&&_(S.transmissionMap.channel),thicknessMapUv:ze&&_(S.thicknessMap.channel),alphaMapUv:I&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(G||oe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:xe,vertexUv2s:$e,vertexUv3s:at,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Xe||I),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:J,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:dt,useLegacyLights:t._useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===On,flipSided:S.side===Vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:fe&&S.extensions.derivatives===!0,extensionFragDepth:fe&&S.extensions.fragDepth===!0,extensionDrawBuffers:fe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)R.push(j),R.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(M(R,S),v(R,S),R.push(t.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function M(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function v(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),S.push(a.mask)}function E(S){const R=g[S.type];let j;if(R){const ce=yn[R];j=_S.clone(ce.uniforms)}else j=S.uniforms;return j}function T(S,R){let j;for(let ce=0,O=c.length;ce<O;ce++){const D=c[ce];if(D.cacheKey===R){j=D,++j.usedTimes;break}}return j===void 0&&(j=new RA(t,R,S,s),c.push(j)),j}function A(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:P}}function UA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function DA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function hh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||DA),i.length>1&&i.sort(h||fh),r.length>1&&r.sort(h||fh)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function NA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new hh,t.set(i,[o])):r>=s.length?(o=new hh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function FA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new it};break;case"SpotLight":n={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function OA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BA=0;function HA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zA(t,e){const n=new FA,i=OA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new k);const s=new k,o=new Rt,a=new Rt;function l(u,f){let h=0,p=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let _=0,m=0,d=0,M=0,v=0,E=0,T=0,A=0,C=0,P=0;u.sort(HA);const S=f===!0?Math.PI:1;for(let j=0,ce=u.length;j<ce;j++){const O=u[j],D=O.color,X=O.intensity,te=O.distance,V=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=D.r*X*S,p+=D.g*X*S,g+=D.b*X*S;else if(O.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(O.sh.coefficients[q],X);else if(O.isDirectionalLight){const q=n.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const ae=O.shadow,le=i.get(O);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,r.directionalShadow[_]=le,r.directionalShadowMap[_]=V,r.directionalShadowMatrix[_]=O.shadow.matrix,E++}r.directional[_]=q,_++}else if(O.isSpotLight){const q=n.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(D).multiplyScalar(X*S),q.distance=te,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,r.spot[d]=q;const ae=O.shadow;if(O.map&&(r.spotLightMap[C]=O.map,C++,ae.updateMatrices(O),O.castShadow&&P++),r.spotLightMatrix[d]=ae.matrix,O.castShadow){const le=i.get(O);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,r.spotShadow[d]=le,r.spotShadowMap[d]=V,A++}d++}else if(O.isRectAreaLight){const q=n.get(O);q.color.copy(D).multiplyScalar(X),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),r.rectArea[M]=q,M++}else if(O.isPointLight){const q=n.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*S),q.distance=O.distance,q.decay=O.decay,O.castShadow){const ae=O.shadow,le=i.get(O);le.shadowBias=ae.bias,le.shadowNormalBias=ae.normalBias,le.shadowRadius=ae.radius,le.shadowMapSize=ae.mapSize,le.shadowCameraNear=ae.camera.near,le.shadowCameraFar=ae.camera.far,r.pointShadow[m]=le,r.pointShadowMap[m]=V,r.pointShadowMatrix[m]=O.shadow.matrix,T++}r.point[m]=q,m++}else if(O.isHemisphereLight){const q=n.get(O);q.skyColor.copy(O.color).multiplyScalar(X*S),q.groundColor.copy(O.groundColor).multiplyScalar(X*S),r.hemi[v]=q,v++}}M>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==M||R.hemiLength!==v||R.numDirectionalShadows!==E||R.numPointShadows!==T||R.numSpotShadows!==A||R.numSpotMaps!==C)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=M,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=A+C-P,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=P,R.directionalLength=_,R.pointLength=m,R.spotLength=d,R.rectAreaLength=M,R.hemiLength=v,R.numDirectionalShadows=E,R.numPointShadows=T,R.numSpotShadows=A,R.numSpotMaps=C,r.version=BA++)}function c(u,f){let h=0,p=0,g=0,_=0,m=0;const d=f.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const E=u[M];if(E.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(E.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(E.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function dh(t,e){const n=new zA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function kA(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new dh(t,e),n.set(s,[l])):o>=a.length?(l=new dh(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class GA extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VA extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qA(t,e,n){let i=new Hp;const r=new Ke,s=new Ke,o=new wt,a=new GA({depthPacking:FM}),l=new VA,c={},u=n.maxTextureSize,f={[ui]:Vt,[Vt]:ui,[On]:On},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:WA,fragmentShader:XA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new mn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp;let d=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const P=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),j=t.state;j.setBlending(si),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ce=d!==Nn&&this.type===Nn,O=d===Nn&&this.type!==Nn;for(let D=0,X=T.length;D<X;D++){const te=T[D],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const q=V.getFrameExtents();if(r.multiply(q),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,V.mapSize.y=s.y)),V.map===null||ce===!0||O===!0){const le=this.type!==Nn?{minFilter:Bt,magFilter:Bt}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(r.x,r.y,le),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const ae=V.getViewportCount();for(let le=0;le<ae;le++){const H=V.getViewport(le);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),j.viewport(o),V.updateMatrices(te,le),i=V.getFrustum(),E(A,C,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===Nn&&M(V,C),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(P,S,R)};function M(T,A){const C=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ui(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,C,h,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,C,p,_,null)}function v(T,A,C,P){let S=null;const R=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const j=S.uuid,ce=A.uuid;let O=c[j];O===void 0&&(O={},c[j]=O);let D=O[ce];D===void 0&&(D=S.clone(),O[ce]=D),S=D}if(S.visible=A.visible,S.wireframe=A.wireframe,P===Nn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const j=t.properties.get(S);j.light=C}return S}function E(T,A,C,P,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Nn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const ce=e.update(T),O=T.material;if(Array.isArray(O)){const D=ce.groups;for(let X=0,te=D.length;X<te;X++){const V=D[X],q=O[V.materialIndex];if(q&&q.visible){const ae=v(T,q,P,S);t.renderBufferDirect(C,null,ce,ae,T,V)}}}else if(O.visible){const D=v(T,O,P,S);t.renderBufferDirect(C,null,ce,D,T,null)}}const j=T.children;for(let ce=0,O=j.length;ce<O;ce++)E(j[ce],A,C,P,S)}}function jA(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const ge=new wt;let $=null;const fe=new wt(0,0,0,0);return{setMask:function(xe){$!==xe&&!I&&(t.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){I=xe},setClear:function(xe,$e,at,dt,Wn){Wn===!0&&(xe*=dt,$e*=dt,at*=dt),ge.set(xe,$e,at,dt),fe.equals(ge)===!1&&(t.clearColor(xe,$e,at,dt),fe.copy(ge))},reset:function(){I=!1,$=null,fe.set(-1,0,0,0)}}}function s(){let I=!1,ge=null,$=null,fe=null;return{setTest:function(xe){xe?Ue(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(xe){ge!==xe&&!I&&(t.depthMask(xe),ge=xe)},setFunc:function(xe){if($!==xe){switch(xe){case fM:t.depthFunc(t.NEVER);break;case hM:t.depthFunc(t.ALWAYS);break;case dM:t.depthFunc(t.LESS);break;case Ll:t.depthFunc(t.LEQUAL);break;case pM:t.depthFunc(t.EQUAL);break;case mM:t.depthFunc(t.GEQUAL);break;case gM:t.depthFunc(t.GREATER);break;case _M:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=xe}},setLocked:function(xe){I=xe},setClear:function(xe){fe!==xe&&(t.clearDepth(xe),fe=xe)},reset:function(){I=!1,ge=null,$=null,fe=null}}}function o(){let I=!1,ge=null,$=null,fe=null,xe=null,$e=null,at=null,dt=null,Wn=null;return{setTest:function(rt){I||(rt?Ue(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(rt){ge!==rt&&!I&&(t.stencilMask(rt),ge=rt)},setFunc:function(rt,vn,Dt){($!==rt||fe!==vn||xe!==Dt)&&(t.stencilFunc(rt,vn,Dt),$=rt,fe=vn,xe=Dt)},setOp:function(rt,vn,Dt){($e!==rt||at!==vn||dt!==Dt)&&(t.stencilOp(rt,vn,Dt),$e=rt,at=vn,dt=Dt)},setLocked:function(rt){I=rt},setClear:function(rt){Wn!==rt&&(t.clearStencil(rt),Wn=rt)},reset:function(){I=!1,ge=null,$=null,fe=null,xe=null,$e=null,at=null,dt=null,Wn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,v=null,E=null,T=null,A=null,C=null,P=null,S=!1,R=null,j=null,ce=null,O=null,D=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,V=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),te=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),te=V>=2);let ae=null,le={};const H=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),me=new wt().fromArray(H),_e=new wt().fromArray(J);function Me(I,ge,$,fe){const xe=new Uint8Array(4),$e=t.createTexture();t.bindTexture(I,$e),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<$;at++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(ge,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ge+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return $e}const be={};be[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(t.DEPTH_TEST),l.setFunc(Ll),z(!1),re(Zu),Ue(t.CULL_FACE),N(si);function Ue(I){h[I]!==!0&&(t.enable(I),h[I]=!0)}function Ce(I){h[I]!==!1&&(t.disable(I),h[I]=!1)}function Xe(I,ge){return p[I]!==ge?(t.bindFramebuffer(I,ge),p[I]=ge,i&&(I===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ge),I===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ge)),!0):!1}function yt(I,ge){let $=_,fe=!1;if(I)if($=g.get(ge),$===void 0&&($=[],g.set(ge,$)),I.isWebGLMultipleRenderTargets){const xe=I.texture;if($.length!==xe.length||$[0]!==t.COLOR_ATTACHMENT0){for(let $e=0,at=xe.length;$e<at;$e++)$[$e]=t.COLOR_ATTACHMENT0+$e;$.length=xe.length,fe=!0}}else $[0]!==t.COLOR_ATTACHMENT0&&($[0]=t.COLOR_ATTACHMENT0,fe=!0);else $[0]!==t.BACK&&($[0]=t.BACK,fe=!0);fe&&(n.isWebGL2?t.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function He(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const x={[ir]:t.FUNC_ADD,[eM]:t.FUNC_SUBTRACT,[tM]:t.FUNC_REVERSE_SUBTRACT};if(i)x[tf]=t.MIN,x[nf]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(x[tf]=I.MIN_EXT,x[nf]=I.MAX_EXT)}const L={[nM]:t.ZERO,[iM]:t.ONE,[rM]:t.SRC_COLOR,[gp]:t.SRC_ALPHA,[uM]:t.SRC_ALPHA_SATURATE,[lM]:t.DST_COLOR,[oM]:t.DST_ALPHA,[sM]:t.ONE_MINUS_SRC_COLOR,[_p]:t.ONE_MINUS_SRC_ALPHA,[cM]:t.ONE_MINUS_DST_COLOR,[aM]:t.ONE_MINUS_DST_ALPHA};function N(I,ge,$,fe,xe,$e,at,dt){if(I===si){d===!0&&(Ce(t.BLEND),d=!1);return}if(d===!1&&(Ue(t.BLEND),d=!0),I!==Qy){if(I!==M||dt!==S){if((v!==ir||A!==ir)&&(t.blendEquation(t.FUNC_ADD),v=ir,A=ir),dt)switch(I){case dr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ju:t.blendFunc(t.ONE,t.ONE);break;case Qu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ef:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ju:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ef:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,T=null,C=null,P=null,M=I,S=dt}return}xe=xe||ge,$e=$e||$,at=at||fe,(ge!==v||xe!==A)&&(t.blendEquationSeparate(x[ge],x[xe]),v=ge,A=xe),($!==E||fe!==T||$e!==C||at!==P)&&(t.blendFuncSeparate(L[$],L[fe],L[$e],L[at]),E=$,T=fe,C=$e,P=at),M=I,S=!1}function G(I,ge){I.side===On?Ce(t.CULL_FACE):Ue(t.CULL_FACE);let $=I.side===Vt;ge&&($=!$),z($),I.blending===dr&&I.transparent===!1?N(si):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const fe=I.stencilWrite;c.setTest(fe),fe&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Z(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ue(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function z(I){R!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),R=I)}function re(I){I!==Ky?(Ue(t.CULL_FACE),I!==j&&(I===Zu?t.cullFace(t.BACK):I===Zy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),j=I}function se(I){I!==ce&&(te&&t.lineWidth(I),ce=I)}function Z(I,ge,$){I?(Ue(t.POLYGON_OFFSET_FILL),(O!==ge||D!==$)&&(t.polygonOffset(ge,$),O=ge,D=$)):Ce(t.POLYGON_OFFSET_FILL)}function oe(I){I?Ue(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function ie(I){I===void 0&&(I=t.TEXTURE0+X-1),ae!==I&&(t.activeTexture(I),ae=I)}function ye(I,ge,$){$===void 0&&(ae===null?$=t.TEXTURE0+X-1:$=ae);let fe=le[$];fe===void 0&&(fe={type:void 0,texture:void 0},le[$]=fe),(fe.type!==I||fe.texture!==ge)&&(ae!==$&&(t.activeTexture($),ae=$),t.bindTexture(I,ge||be[I]),fe.type=I,fe.texture=ge)}function b(){const I=le[ae];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function U(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){me.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),me.copy(I))}function pe(I){_e.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),_e.copy(I))}function ve(I,ge){let $=f.get(ge);$===void 0&&($=new WeakMap,f.set(ge,$));let fe=$.get(I);fe===void 0&&(fe=t.getUniformBlockIndex(ge,I.name),$.set(I,fe))}function ze(I,ge){const fe=f.get(ge).get(I);u.get(ge)!==fe&&(t.uniformBlockBinding(ge,fe,I.__bindingPointIndex),u.set(ge,fe))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ae=null,le={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,v=null,E=null,T=null,A=null,C=null,P=null,S=!1,R=null,j=null,ce=null,O=null,D=null,me.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:Ce,bindFramebuffer:Xe,drawBuffers:yt,useProgram:He,setBlending:N,setMaterial:G,setFlipSided:z,setCullFace:re,setLineWidth:se,setPolygonOffset:Z,setScissorTest:oe,activeTexture:ie,bindTexture:ye,unbindTexture:b,compressedTexImage2D:y,compressedTexImage3D:U,texImage2D:we,texImage3D:Te,updateUBOMapping:ve,uniformBlockBinding:ze,texStorage2D:ue,texStorage3D:W,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:ne,compressedTexSubImage3D:de,scissor:Ae,viewport:pe,reset:tt}}function $A(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,y){return d?new OffscreenCanvas(b,y):Oo("canvas")}function v(b,y,U,Q){let ee=1;if((b.width>Q||b.height>Q)&&(ee=Q/Math.max(b.width,b.height)),ee<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=y?Bl:Math.floor,de=ne(ee*b.width),ue=ne(ee*b.height);_===void 0&&(_=M(de,ue));const W=U?M(de,ue):_;return W.width=de,W.height=ue,W.getContext("2d").drawImage(b,0,0,de,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+de+"x"+ue+")."),W}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function E(b){return Pf(b.width)&&Pf(b.height)}function T(b){return a?!1:b.wrapS!==hn||b.wrapT!==hn||b.minFilter!==Bt&&b.minFilter!==en}function A(b,y){return b.generateMipmaps&&y&&b.minFilter!==Bt&&b.minFilter!==en}function C(b){t.generateMipmap(b)}function P(b,y,U,Q,ee=!1){if(a===!1)return y;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=y;return y===t.RED&&(U===t.FLOAT&&(ne=t.R32F),U===t.HALF_FLOAT&&(ne=t.R16F),U===t.UNSIGNED_BYTE&&(ne=t.R8)),y===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(ne=t.R8UI),U===t.UNSIGNED_SHORT&&(ne=t.R16UI),U===t.UNSIGNED_INT&&(ne=t.R32UI),U===t.BYTE&&(ne=t.R8I),U===t.SHORT&&(ne=t.R16I),U===t.INT&&(ne=t.R32I)),y===t.RG&&(U===t.FLOAT&&(ne=t.RG32F),U===t.HALF_FLOAT&&(ne=t.RG16F),U===t.UNSIGNED_BYTE&&(ne=t.RG8)),y===t.RGBA&&(U===t.FLOAT&&(ne=t.RGBA32F),U===t.HALF_FLOAT&&(ne=t.RGBA16F),U===t.UNSIGNED_BYTE&&(ne=Q===Ge&&ee===!1?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)),(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(b,y,U){return A(b,U)===!0||b.isFramebufferTexture&&b.minFilter!==Bt&&b.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function R(b){return b===Bt||b===rf||b===Sa?t.NEAREST:t.LINEAR}function j(b){const y=b.target;y.removeEventListener("dispose",j),O(y),y.isVideoTexture&&g.delete(y)}function ce(b){const y=b.target;y.removeEventListener("dispose",ce),X(y)}function O(b){const y=i.get(b);if(y.__webglInit===void 0)return;const U=b.source,Q=m.get(U);if(Q){const ee=Q[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(b),Object.keys(Q).length===0&&m.delete(U)}i.remove(b)}function D(b){const y=i.get(b);t.deleteTexture(y.__webglTexture);const U=b.source,Q=m.get(U);delete Q[y.__cacheKey],o.memory.textures--}function X(b){const y=b.texture,U=i.get(b),Q=i.get(y);if(Q.__webglTexture!==void 0&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(U.__webglFramebuffer[ee]))for(let ne=0;ne<U.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(U.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(U.__webglFramebuffer[ee]);U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer[ee])}else{if(Array.isArray(U.__webglFramebuffer))for(let ee=0;ee<U.__webglFramebuffer.length;ee++)t.deleteFramebuffer(U.__webglFramebuffer[ee]);else t.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&t.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&t.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ee=0;ee<U.__webglColorRenderbuffer.length;ee++)U.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(U.__webglColorRenderbuffer[ee]);U.__webglDepthRenderbuffer&&t.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,ne=y.length;ee<ne;ee++){const de=i.get(y[ee]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(y[ee])}i.remove(y),i.remove(b)}let te=0;function V(){te=0}function q(){const b=te;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),te+=1,b}function ae(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function le(b,y){const U=i.get(b);if(b.isVideoTexture&&ie(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(U,b,y);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+y)}function H(b,y){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Xe(U,b,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+y)}function J(b,y){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Xe(U,b,y);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+y)}function me(b,y){const U=i.get(b);if(b.version>0&&U.__version!==b.version){yt(U,b,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+y)}const _e={[Dl]:t.REPEAT,[hn]:t.CLAMP_TO_EDGE,[Nl]:t.MIRRORED_REPEAT},Me={[Bt]:t.NEAREST,[rf]:t.NEAREST_MIPMAP_NEAREST,[Sa]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[TM]:t.LINEAR_MIPMAP_NEAREST,[ds]:t.LINEAR_MIPMAP_LINEAR},be={[zM]:t.NEVER,[jM]:t.ALWAYS,[kM]:t.LESS,[VM]:t.LEQUAL,[GM]:t.EQUAL,[qM]:t.GEQUAL,[WM]:t.GREATER,[XM]:t.NOTEQUAL};function Ue(b,y,U){if(U?(t.texParameteri(b,t.TEXTURE_WRAP_S,_e[y.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,_e[y.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,_e[y.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Me[y.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Me[y.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==hn||y.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,R(y.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==Bt&&y.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Bt||y.minFilter!==Sa&&y.minFilter!==ds||y.type===ti&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Ce(b,y){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",j));const Q=y.source;let ee=m.get(Q);ee===void 0&&(ee={},m.set(Q,ee));const ne=ae(y);if(ne!==b.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ee[ne].usedTimes++;const de=ee[b.__cacheKey];de!==void 0&&(ee[b.__cacheKey].usedTimes--,de.usedTimes===0&&D(y)),b.__cacheKey=ne,b.__webglTexture=ee[ne].texture}return U}function Xe(b,y,U){let Q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=Ce(b,y),ne=y.source;n.bindTexture(Q,b.__webglTexture,t.TEXTURE0+U);const de=i.get(ne);if(ne.version!==de.__version||ee===!0){n.activeTexture(t.TEXTURE0+U),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ue=T(y)&&E(y.image)===!1;let W=v(y.image,ue,!1,u);W=ye(y,W);const we=E(W)||a,Te=s.convert(y.format,y.colorSpace);let Ae=s.convert(y.type),pe=P(y.internalFormat,Te,Ae,y.colorSpace);Ue(Q,y,we);let ve;const ze=y.mipmaps,tt=a&&y.isVideoTexture!==!0,I=de.__version===void 0||ee===!0,ge=S(y,W,we);if(y.isDepthTexture)pe=t.DEPTH_COMPONENT,a?y.type===ti?pe=t.DEPTH_COMPONENT32F:y.type===ei?pe=t.DEPTH_COMPONENT24:y.type===wi?pe=t.DEPTH24_STENCIL8:pe=t.DEPTH_COMPONENT16:y.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ri&&pe===t.DEPTH_COMPONENT&&y.type!==Rc&&y.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ei,Ae=s.convert(y.type)),y.format===Ar&&pe===t.DEPTH_COMPONENT&&(pe=t.DEPTH_STENCIL,y.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=wi,Ae=s.convert(y.type))),I&&(tt?n.texStorage2D(t.TEXTURE_2D,1,pe,W.width,W.height):n.texImage2D(t.TEXTURE_2D,0,pe,W.width,W.height,0,Te,Ae,null));else if(y.isDataTexture)if(ze.length>0&&we){tt&&I&&n.texStorage2D(t.TEXTURE_2D,ge,pe,ze[0].width,ze[0].height);for(let $=0,fe=ze.length;$<fe;$++)ve=ze[$],tt?n.texSubImage2D(t.TEXTURE_2D,$,0,0,ve.width,ve.height,Te,Ae,ve.data):n.texImage2D(t.TEXTURE_2D,$,pe,ve.width,ve.height,0,Te,Ae,ve.data);y.generateMipmaps=!1}else tt?(I&&n.texStorage2D(t.TEXTURE_2D,ge,pe,W.width,W.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,W.width,W.height,Te,Ae,W.data)):n.texImage2D(t.TEXTURE_2D,0,pe,W.width,W.height,0,Te,Ae,W.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){tt&&I&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,pe,ze[0].width,ze[0].height,W.depth);for(let $=0,fe=ze.length;$<fe;$++)ve=ze[$],y.format!==dn?Te!==null?tt?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,W.depth,Te,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,pe,ve.width,ve.height,W.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,W.depth,Te,Ae,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,pe,ve.width,ve.height,W.depth,0,Te,Ae,ve.data)}else{tt&&I&&n.texStorage2D(t.TEXTURE_2D,ge,pe,ze[0].width,ze[0].height);for(let $=0,fe=ze.length;$<fe;$++)ve=ze[$],y.format!==dn?Te!==null?tt?n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,ve.width,ve.height,Te,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,$,pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage2D(t.TEXTURE_2D,$,0,0,ve.width,ve.height,Te,Ae,ve.data):n.texImage2D(t.TEXTURE_2D,$,pe,ve.width,ve.height,0,Te,Ae,ve.data)}else if(y.isDataArrayTexture)tt?(I&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,pe,W.width,W.height,W.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Te,Ae,W.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,W.width,W.height,W.depth,0,Te,Ae,W.data);else if(y.isData3DTexture)tt?(I&&n.texStorage3D(t.TEXTURE_3D,ge,pe,W.width,W.height,W.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Te,Ae,W.data)):n.texImage3D(t.TEXTURE_3D,0,pe,W.width,W.height,W.depth,0,Te,Ae,W.data);else if(y.isFramebufferTexture){if(I)if(tt)n.texStorage2D(t.TEXTURE_2D,ge,pe,W.width,W.height);else{let $=W.width,fe=W.height;for(let xe=0;xe<ge;xe++)n.texImage2D(t.TEXTURE_2D,xe,pe,$,fe,0,Te,Ae,null),$>>=1,fe>>=1}}else if(ze.length>0&&we){tt&&I&&n.texStorage2D(t.TEXTURE_2D,ge,pe,ze[0].width,ze[0].height);for(let $=0,fe=ze.length;$<fe;$++)ve=ze[$],tt?n.texSubImage2D(t.TEXTURE_2D,$,0,0,Te,Ae,ve):n.texImage2D(t.TEXTURE_2D,$,pe,Te,Ae,ve);y.generateMipmaps=!1}else tt?(I&&n.texStorage2D(t.TEXTURE_2D,ge,pe,W.width,W.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Ae,W)):n.texImage2D(t.TEXTURE_2D,0,pe,Te,Ae,W);A(y,we)&&C(Q),de.__version=ne.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function yt(b,y,U){if(y.image.length!==6)return;const Q=Ce(b,y),ee=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+U);const ne=i.get(ee);if(ee.version!==ne.__version||Q===!0){n.activeTexture(t.TEXTURE0+U),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const de=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,W=[];for(let $=0;$<6;$++)!de&&!ue?W[$]=v(y.image[$],!1,!0,c):W[$]=ue?y.image[$].image:y.image[$],W[$]=ye(y,W[$]);const we=W[0],Te=E(we)||a,Ae=s.convert(y.format,y.colorSpace),pe=s.convert(y.type),ve=P(y.internalFormat,Ae,pe,y.colorSpace),ze=a&&y.isVideoTexture!==!0,tt=ne.__version===void 0||Q===!0;let I=S(y,we,Te);Ue(t.TEXTURE_CUBE_MAP,y,Te);let ge;if(de){ze&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,I,ve,we.width,we.height);for(let $=0;$<6;$++){ge=W[$].mipmaps;for(let fe=0;fe<ge.length;fe++){const xe=ge[fe];y.format!==dn?Ae!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,xe.width,xe.height,Ae,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,ve,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,xe.width,xe.height,Ae,pe,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,ve,xe.width,xe.height,0,Ae,pe,xe.data)}}}else{ge=y.mipmaps,ze&&tt&&(ge.length>0&&I++,n.texStorage2D(t.TEXTURE_CUBE_MAP,I,ve,W[0].width,W[0].height));for(let $=0;$<6;$++)if(ue){ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,W[$].width,W[$].height,Ae,pe,W[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ve,W[$].width,W[$].height,0,Ae,pe,W[$].data);for(let fe=0;fe<ge.length;fe++){const $e=ge[fe].image[$].image;ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,$e.width,$e.height,Ae,pe,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,ve,$e.width,$e.height,0,Ae,pe,$e.data)}}else{ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,pe,W[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ve,Ae,pe,W[$]);for(let fe=0;fe<ge.length;fe++){const xe=ge[fe];ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,Ae,pe,xe.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,ve,Ae,pe,xe.image[$])}}}A(y,Te)&&C(t.TEXTURE_CUBE_MAP),ne.__version=ee.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function He(b,y,U,Q,ee,ne){const de=s.convert(U.format,U.colorSpace),ue=s.convert(U.type),W=P(U.internalFormat,de,ue,U.colorSpace);if(!i.get(y).__hasExternalTextures){const Te=Math.max(1,y.width>>ne),Ae=Math.max(1,y.height>>ne);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ne,W,Te,Ae,y.depth,0,de,ue,null):n.texImage2D(ee,ne,W,Te,Ae,0,de,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),oe(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(U).__webglTexture,0,Z(y)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(U).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function x(b,y,U){if(t.bindRenderbuffer(t.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let Q=t.DEPTH_COMPONENT16;if(U||oe(y)){const ee=y.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ti?Q=t.DEPTH_COMPONENT32F:ee.type===ei&&(Q=t.DEPTH_COMPONENT24));const ne=Z(y);oe(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,Q,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,Q,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const Q=Z(y);U&&oe(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,y.width,y.height):oe(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const Q=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ee=0;ee<Q.length;ee++){const ne=Q[ee],de=s.convert(ne.format,ne.colorSpace),ue=s.convert(ne.type),W=P(ne.internalFormat,de,ue,ne.colorSpace),we=Z(y);U&&oe(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,W,y.width,y.height):oe(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,W,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,W,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function L(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),le(y.depthTexture,0);const Q=i.get(y.depthTexture).__webglTexture,ee=Z(y);if(y.depthTexture.format===Ri)oe(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Ar)oe(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function N(b){const y=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");L(y.__webglFramebuffer,b)}else if(U){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=t.createRenderbuffer(),x(y.__webglDepthbuffer[Q],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),x(y.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(b,y,U){const Q=i.get(b);y!==void 0&&He(Q.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&N(b)}function z(b){const y=b.texture,U=i.get(b),Q=i.get(y);b.addEventListener("dispose",ce),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=y.version,o.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,de=E(b)||a;if(ee){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let W=0;W<y.mipmaps.length;W++)U.__webglFramebuffer[ue][W]=t.createFramebuffer()}else U.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)U.__webglFramebuffer[ue]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const ue=b.texture;for(let W=0,we=ue.length;W<we;W++){const Te=i.get(ue[W]);Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&oe(b)===!1){const ue=ne?y:[y];U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let W=0;W<ue.length;W++){const we=ue[W];U.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[W]);const Te=s.convert(we.format,we.colorSpace),Ae=s.convert(we.type),pe=P(we.internalFormat,Te,Ae,we.colorSpace,b.isXRRenderTarget===!0),ve=Z(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,pe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,U.__webglColorRenderbuffer[W])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),x(U.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,y,de);for(let ue=0;ue<6;ue++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let W=0;W<y.mipmaps.length;W++)He(U.__webglFramebuffer[ue][W],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,W);else He(U.__webglFramebuffer[ue],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);A(y,de)&&C(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const ue=b.texture;for(let W=0,we=ue.length;W<we;W++){const Te=ue[W],Ae=i.get(Te);n.bindTexture(t.TEXTURE_2D,Ae.__webglTexture),Ue(t.TEXTURE_2D,Te,de),He(U.__webglFramebuffer,b,Te,t.COLOR_ATTACHMENT0+W,t.TEXTURE_2D,0),A(Te,de)&&C(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ue=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,Q.__webglTexture),Ue(ue,y,de),a&&y.mipmaps&&y.mipmaps.length>0)for(let W=0;W<y.mipmaps.length;W++)He(U.__webglFramebuffer[W],b,y,t.COLOR_ATTACHMENT0,ue,W);else He(U.__webglFramebuffer,b,y,t.COLOR_ATTACHMENT0,ue,0);A(y,de)&&C(ue),n.unbindTexture()}b.depthBuffer&&N(b)}function re(b){const y=E(b)||a,U=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,ee=U.length;Q<ee;Q++){const ne=U[Q];if(A(ne,y)){const de=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(ne).__webglTexture;n.bindTexture(de,ue),C(de),n.unbindTexture()}}}function se(b){if(a&&b.samples>0&&oe(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],U=b.width,Q=b.height;let ee=t.COLOR_BUFFER_BIT;const ne=[],de=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(b),W=b.isWebGLMultipleRenderTargets===!0;if(W)for(let we=0;we<y.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let we=0;we<y.length;we++){ne.push(t.COLOR_ATTACHMENT0+we),b.depthBuffer&&ne.push(de);const Te=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Te===!1&&(b.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),W&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[we]),Te===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[de]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[de])),W){const Ae=i.get(y[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,U,Q,0,0,U,Q,ee,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let we=0;we<y.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ue.__webglColorRenderbuffer[we]);const Te=i.get(y[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Z(b){return Math.min(f,b.samples)}function oe(b){const y=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(b){const y=o.render.frame;g.get(b)!==y&&(g.set(b,y),b.update())}function ye(b,y){const U=b.colorSpace,Q=b.format,ee=b.type;return b.isCompressedTexture===!0||b.format===Fl||U!==An&&U!==Pi&&(U===Ge?a===!1?e.has("EXT_sRGB")===!0&&Q===dn?(b.format=Fl,b.minFilter=en,b.generateMipmaps=!1):y=Cp.sRGBToLinear(y):(Q!==dn||ee!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.setTexture2D=le,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=me,this.rebindTextures=G,this.setupRenderTarget=z,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=He,this.useMultisampledRTT=oe}function YA(t,e,n){const i=n.isWebGL2;function r(s,o=Pi){let a;if(s===ai)return t.UNSIGNED_BYTE;if(s===Mp)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Sp)return t.UNSIGNED_SHORT_5_5_5_1;if(s===AM)return t.BYTE;if(s===wM)return t.SHORT;if(s===Rc)return t.UNSIGNED_SHORT;if(s===yp)return t.INT;if(s===ei)return t.UNSIGNED_INT;if(s===ti)return t.FLOAT;if(s===ps)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===RM)return t.ALPHA;if(s===dn)return t.RGBA;if(s===CM)return t.LUMINANCE;if(s===PM)return t.LUMINANCE_ALPHA;if(s===Ri)return t.DEPTH_COMPONENT;if(s===Ar)return t.DEPTH_STENCIL;if(s===Fl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===LM)return t.RED;if(s===Ep)return t.RED_INTEGER;if(s===IM)return t.RG;if(s===bp)return t.RG_INTEGER;if(s===Tp)return t.RGBA_INTEGER;if(s===Ea||s===ba||s===Ta||s===Aa)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ea)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ea)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Aa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sf||s===of||s===af||s===lf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===of)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===af)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===UM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cf||s===uf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===cf)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===uf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ff||s===hf||s===df||s===pf||s===mf||s===gf||s===_f||s===vf||s===xf||s===yf||s===Mf||s===Sf||s===Ef||s===bf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ff)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===df)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_f)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ef)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bf)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wa)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===DM||s===Tf||s===Af||s===wf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===wa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Tf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Af)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wi?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class KA extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZA={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new sr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class JA extends $t{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ri,u!==Ri&&u!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ri&&(i=ei),i===void 0&&u===Ar&&(i=wi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class QA extends Nr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=n.getContextAttributes();let m=null,d=null;const M=[],v=[],E=new tn;E.layers.enable(1),E.viewport=new wt;const T=new tn;T.layers.enable(2),T.viewport=new wt;const A=[E,T],C=new KA;C.layers.enable(1),C.layers.enable(2);let P=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=M[H];return J===void 0&&(J=new Za,M[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=M[H];return J===void 0&&(J=new Za,M[H]=J),J.getGripSpace()},this.getHand=function(H){let J=M[H];return J===void 0&&(J=new Za,M[H]=J),J.getHandSpace()};function R(H){const J=v.indexOf(H.inputSource);if(J===-1)return;const me=M[J];me!==void 0&&(me.update(H.inputSource,H.frame,c||o),me.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ce);for(let H=0;H<M.length;H++){const J=v[H];J!==null&&(v[H]=null,M[H].disconnect(J))}P=null,S=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ce),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),d=new Ui(p.framebufferWidth,p.framebufferHeight,{format:dn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,me=null,_e=null;_.depth&&(_e=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=_.stencil?Ar:Ri,me=_.stencil?wi:ei);const Me={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Me),r.updateRenderState({layers:[h]}),d=new Ui(h.textureWidth,h.textureHeight,{format:dn,type:ai,depthTexture:new JA(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const be=e.properties.get(d);be.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ce(H){for(let J=0;J<H.removed.length;J++){const me=H.removed[J],_e=v.indexOf(me);_e>=0&&(v[_e]=null,M[_e].disconnect(me))}for(let J=0;J<H.added.length;J++){const me=H.added[J];let _e=v.indexOf(me);if(_e===-1){for(let be=0;be<M.length;be++)if(be>=v.length){v.push(me),_e=be;break}else if(v[be]===null){v[be]=me,_e=be;break}if(_e===-1)break}const Me=M[_e];Me&&Me.connect(me)}}const O=new k,D=new k;function X(H,J,me){O.setFromMatrixPosition(J.matrixWorld),D.setFromMatrixPosition(me.matrixWorld);const _e=O.distanceTo(D),Me=J.projectionMatrix.elements,be=me.projectionMatrix.elements,Ue=Me[14]/(Me[10]-1),Ce=Me[14]/(Me[10]+1),Xe=(Me[9]+1)/Me[5],yt=(Me[9]-1)/Me[5],He=(Me[8]-1)/Me[0],x=(be[8]+1)/be[0],L=Ue*He,N=Ue*x,G=_e/(-He+x),z=G*-He;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(z),H.translateZ(G),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const re=Ue+G,se=Ce+G,Z=L-z,oe=N+(_e-z),ie=Xe*Ce/se*re,ye=yt*Ce/se*re;H.projectionMatrix.makePerspective(Z,oe,ie,ye,re,se),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function te(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;C.near=T.near=E.near=H.near,C.far=T.far=E.far=H.far,(P!==C.near||S!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,S=C.far);const J=H.parent,me=C.cameras;te(C,J);for(let _e=0;_e<me.length;_e++)te(me[_e],J);me.length===2?X(C,E,T):C.projectionMatrix.copy(E.projectionMatrix),V(H,C,J)};function V(H,J,me){me===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(me.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const _e=H.children;for(let Me=0,be=_e.length;Me<be;Me++)_e[Me].updateMatrixWorld(!0);H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ol*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let q=null;function ae(H,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let _e=!1;me.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let Me=0;Me<me.length;Me++){const be=me[Me];let Ue=null;if(p!==null)Ue=p.getViewport(be);else{const Xe=f.getViewSubImage(h,be);Ue=Xe.viewport,Me===0&&(e.setRenderTargetTextures(d,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(d))}let Ce=A[Me];Ce===void 0&&(Ce=new tn,Ce.layers.enable(Me),Ce.viewport=new wt,A[Me]=Ce),Ce.matrix.fromArray(be.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(be.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Me===0&&(C.matrix.copy(Ce.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(Ce)}}for(let me=0;me<M.length;me++){const _e=v[me],Me=M[me];_e!==null&&Me!==void 0&&Me.update(_e,J,c||o)}q&&q(H,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const le=new zp;le.setAnimationLoop(ae),this.setAnimationLoop=function(H){q=H},this.dispose=function(){}}}function ew(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Fp(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const E=v.program;i.uniformBlockBinding(M,E)}function c(M,v){let E=r[M.id];E===void 0&&(g(M),E=u(M),r[M.id]=E,M.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(M,T);const A=e.render.frame;s[M.id]!==A&&(h(M),s[M.id]=A)}function u(M){const v=f();M.__bindingPointIndex=v;const E=t.createBuffer(),T=M.__size,A=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,T,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const v=r[M.id],E=M.uniforms,T=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,C=E.length;A<C;A++){const P=E[A];if(p(P,A,T)===!0){const S=P.__offset,R=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let ce=0;ce<R.length;ce++){const O=R[ce],D=_(O);typeof O=="number"?(P.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,S+j,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=O.elements[0],P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=O.elements[0],P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=O.elements[0]):(O.toArray(P.__data,j),j+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,v,E){const T=M.value;if(E[v]===void 0){if(typeof T=="number")E[v]=T;else{const A=Array.isArray(T)?T:[T],C=[];for(let P=0;P<A.length;P++)C.push(A[P].clone());E[v]=C}return!0}else if(typeof T=="number"){if(E[v]!==T)return E[v]=T,!0}else{const A=Array.isArray(E[v])?E[v]:[E[v]],C=Array.isArray(T)?T:[T];for(let P=0;P<A.length;P++){const S=A[P];if(S.equals(C[P])===!1)return S.copy(C[P]),!0}}return!1}function g(M){const v=M.uniforms;let E=0;const T=16;let A=0;for(let C=0,P=v.length;C<P;C++){const S=v[C],R={boundary:0,storage:0},j=Array.isArray(S.value)?S.value:[S.value];for(let ce=0,O=j.length;ce<O;ce++){const D=j[ce],X=_(D);R.boundary+=X.boundary,R.storage+=X.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=E,C>0){A=E%T;const ce=T-A;A!==0&&ce-R.boundary<0&&(E+=T-A,S.__offset=E)}E+=R.storage}return A=E%T,A>0&&(E+=T-A),M.__size=E,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function nw(){const t=Oo("canvas");return t.style.display="block",t}class Xp{constructor(e={}){const{canvas:n=nw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ge,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const v=this;let E=!1,T=0,A=0,C=null,P=-1,S=null;const R=new wt,j=new wt;let ce=null;const O=new it(0);let D=0,X=n.width,te=n.height,V=1,q=null,ae=null;const le=new wt(0,0,X,te),H=new wt(0,0,X,te);let J=!1;const me=new Hp;let _e=!1,Me=!1,be=null;const Ue=new Rt,Ce=new Ke,Xe=new k,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return C===null?V:1}let x=i;function L(w,B){for(let K=0;K<w.length;K++){const F=w[K],Y=n.getContext(F,B);if(Y!==null)return Y}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wc}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",$,!1),n.addEventListener("webglcontextcreationerror",fe,!1),x===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),x=L(B,w),x===null)throw L(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let N,G,z,re,se,Z,oe,ie,ye,b,y,U,Q,ee,ne,de,ue,W,we,Te,Ae,pe,ve,ze;function tt(){N=new hT(x),G=new sT(x,N,e),N.init(G),pe=new YA(x,N,G),z=new jA(x,N,G),re=new mT(x),se=new UA,Z=new $A(x,N,z,se,G,pe,re),oe=new aT(v),ie=new fT(v),ye=new bS(x,G),ve=new iT(x,N,ye,G),b=new dT(x,ye,re,ve),y=new xT(x,b,ye,re),we=new vT(x,G,Z),de=new oT(se),U=new IA(v,oe,ie,N,G,ve,de),Q=new ew(v,se),ee=new NA,ne=new kA(N,G),W=new nT(v,oe,ie,z,y,h,l),ue=new qA(v,y,G),ze=new tw(x,re,G,z),Te=new rT(x,N,re,G),Ae=new pT(x,N,re,G),re.programs=U.programs,v.capabilities=G,v.extensions=N,v.properties=se,v.renderLists=ee,v.shadowMap=ue,v.state=z,v.info=re}tt();const I=new QA(v,x);this.xr=I,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const w=N.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=N.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(X,te,!1))},this.getSize=function(w){return w.set(X,te)},this.setSize=function(w,B,K=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,te=B,n.width=Math.floor(w*V),n.height=Math.floor(B*V),K===!0&&(n.style.width=w+"px",n.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(X*V,te*V).floor()},this.setDrawingBufferSize=function(w,B,K){X=w,te=B,V=K,n.width=Math.floor(w*K),n.height=Math.floor(B*K),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,B,K,F){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,B,K,F),z.viewport(R.copy(le).multiplyScalar(V).floor())},this.getScissor=function(w){return w.copy(H)},this.setScissor=function(w,B,K,F){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,B,K,F),z.scissor(j.copy(H).multiplyScalar(V).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(w){z.setScissorTest(J=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(w=!0,B=!0,K=!0){let F=0;if(w){let Y=!1;if(C!==null){const Ee=C.texture.format;Y=Ee===Tp||Ee===bp||Ee===Ep}if(Y){const Ee=C.texture.type,Pe=Ee===ai||Ee===ei||Ee===Rc||Ee===wi||Ee===Mp||Ee===Sp,Fe=W.getClearColor(),Oe=W.getClearAlpha(),We=Fe.r,Ne=Fe.g,ke=Fe.b;Pe?(p[0]=We,p[1]=Ne,p[2]=ke,p[3]=Oe,x.clearBufferuiv(x.COLOR,0,p)):(g[0]=We,g[1]=Ne,g[2]=ke,g[3]=Oe,x.clearBufferiv(x.COLOR,0,g))}else F|=x.COLOR_BUFFER_BIT}B&&(F|=x.DEPTH_BUFFER_BIT),K&&(F|=x.STENCIL_BUFFER_BIT),x.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",$,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),ee.dispose(),ne.dispose(),se.dispose(),oe.dispose(),ie.dispose(),y.dispose(),ve.dispose(),ze.dispose(),U.dispose(),I.dispose(),I.removeEventListener("sessionstart",rt),I.removeEventListener("sessionend",vn),be&&(be.dispose(),be=null),Dt.stop()};function ge(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=re.autoReset,B=ue.enabled,K=ue.autoUpdate,F=ue.needsUpdate,Y=ue.type;tt(),re.autoReset=w,ue.enabled=B,ue.autoUpdate=K,ue.needsUpdate=F,ue.type=Y}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const B=w.target;B.removeEventListener("dispose",xe),$e(B)}function $e(w){at(w),se.remove(w)}function at(w){const B=se.get(w).programs;B!==void 0&&(B.forEach(function(K){U.releaseProgram(K)}),w.isShaderMaterial&&U.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,K,F,Y,Ee){B===null&&(B=yt);const Pe=Y.isMesh&&Y.matrixWorld.determinant()<0,Fe=Yp(w,B,K,F,Y);z.setMaterial(F,Pe);let Oe=K.index,We=1;if(F.wireframe===!0){if(Oe=b.getWireframeAttribute(K),Oe===void 0)return;We=2}const Ne=K.drawRange,ke=K.attributes.position;let lt=Ne.start*We,ht=(Ne.start+Ne.count)*We;Ee!==null&&(lt=Math.max(lt,Ee.start*We),ht=Math.min(ht,(Ee.start+Ee.count)*We)),Oe!==null?(lt=Math.max(lt,0),ht=Math.min(ht,Oe.count)):ke!=null&&(lt=Math.max(lt,0),ht=Math.min(ht,ke.count));const Kt=ht-lt;if(Kt<0||Kt===1/0)return;ve.setup(Y,F,Fe,K,Oe);let Rn,pt=Te;if(Oe!==null&&(Rn=ye.get(Oe),pt=Ae,pt.setIndex(Rn)),Y.isMesh)F.wireframe===!0?(z.setLineWidth(F.wireframeLinewidth*He()),pt.setMode(x.LINES)):pt.setMode(x.TRIANGLES);else if(Y.isLine){let qe=F.linewidth;qe===void 0&&(qe=1),z.setLineWidth(qe*He()),Y.isLineSegments?pt.setMode(x.LINES):Y.isLineLoop?pt.setMode(x.LINE_LOOP):pt.setMode(x.LINE_STRIP)}else Y.isPoints?pt.setMode(x.POINTS):Y.isSprite&&pt.setMode(x.TRIANGLES);if(Y.isInstancedMesh)pt.renderInstances(lt,Kt,Y.count);else if(K.isInstancedBufferGeometry){const qe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ia=Math.min(K.instanceCount,qe);pt.renderInstances(lt,Kt,ia)}else pt.render(lt,Kt)},this.compile=function(w,B){function K(F,Y,Ee){F.transparent===!0&&F.side===On&&F.forceSinglePass===!1?(F.side=Vt,F.needsUpdate=!0,Cs(F,Y,Ee),F.side=ui,F.needsUpdate=!0,Cs(F,Y,Ee),F.side=On):Cs(F,Y,Ee)}m=ne.get(w),m.init(),M.push(m),w.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(v._useLegacyLights),w.traverse(function(F){const Y=F.material;if(Y)if(Array.isArray(Y))for(let Ee=0;Ee<Y.length;Ee++){const Pe=Y[Ee];K(Pe,w,F)}else K(Y,w,F)}),M.pop(),m=null};let dt=null;function Wn(w){dt&&dt(w)}function rt(){Dt.stop()}function vn(){Dt.start()}const Dt=new zp;Dt.setAnimationLoop(Wn),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(w){dt=w,I.setAnimationLoop(w),w===null?Dt.stop():Dt.start()},I.addEventListener("sessionstart",rt),I.addEventListener("sessionend",vn),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(B),B=I.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,C),m=ne.get(w,M.length),m.init(),M.push(m),Ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),me.setFromProjectionMatrix(Ue),Me=this.localClippingEnabled,_e=de.init(this.clippingPlanes,Me),_=ee.get(w,d.length),_.init(),d.push(_),Dc(w,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,ae),this.info.render.frame++,_e===!0&&de.beginShadows();const K=m.state.shadowsArray;if(ue.render(K,w,B),_e===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(_,w),m.setupLights(v._useLegacyLights),B.isArrayCamera){const F=B.cameras;for(let Y=0,Ee=F.length;Y<Ee;Y++){const Pe=F[Y];Nc(_,w,Pe,Pe.viewport)}}else Nc(_,w,B);C!==null&&(Z.updateMultisampleRenderTarget(C),Z.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,B),ve.resetDefaultState(),P=-1,S=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Dc(w,B,K,F){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||me.intersectsSprite(w)){F&&Xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ue);const Pe=y.update(w),Fe=w.material;Fe.visible&&_.push(w,Pe,Fe,K,Xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||me.intersectsObject(w))){const Pe=y.update(w),Fe=w.material;if(F&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xe.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Xe.copy(Pe.boundingSphere.center)),Xe.applyMatrix4(w.matrixWorld).applyMatrix4(Ue)),Array.isArray(Fe)){const Oe=Pe.groups;for(let We=0,Ne=Oe.length;We<Ne;We++){const ke=Oe[We],lt=Fe[ke.materialIndex];lt&&lt.visible&&_.push(w,Pe,lt,K,Xe.z,ke)}}else Fe.visible&&_.push(w,Pe,Fe,K,Xe.z,null)}}const Ee=w.children;for(let Pe=0,Fe=Ee.length;Pe<Fe;Pe++)Dc(Ee[Pe],B,K,F)}function Nc(w,B,K,F){const Y=w.opaque,Ee=w.transmissive,Pe=w.transparent;m.setupLightsView(K),_e===!0&&de.setGlobalState(v.clippingPlanes,K),Ee.length>0&&$p(Y,Ee,B,K),F&&z.viewport(R.copy(F)),Y.length>0&&Rs(Y,B,K),Ee.length>0&&Rs(Ee,B,K),Pe.length>0&&Rs(Pe,B,K),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function $p(w,B,K,F){const Y=G.isWebGL2;be===null&&(be=new Ui(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?ps:ai,minFilter:ds,samples:Y?4:0})),v.getDrawingBufferSize(Ce),Y?be.setSize(Ce.x,Ce.y):be.setSize(Bl(Ce.x),Bl(Ce.y));const Ee=v.getRenderTarget();v.setRenderTarget(be),v.getClearColor(O),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=oi,Rs(w,K,F),Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be);let Fe=!1;for(let Oe=0,We=B.length;Oe<We;Oe++){const Ne=B[Oe],ke=Ne.object,lt=Ne.geometry,ht=Ne.material,Kt=Ne.group;if(ht.side===On&&ke.layers.test(F.layers)){const Rn=ht.side;ht.side=Vt,ht.needsUpdate=!0,Fc(ke,K,F,lt,ht,Kt),ht.side=Rn,ht.needsUpdate=!0,Fe=!0}}Fe===!0&&(Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be)),v.setRenderTarget(Ee),v.setClearColor(O,D),v.toneMapping=Pe}function Rs(w,B,K){const F=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Ee=w.length;Y<Ee;Y++){const Pe=w[Y],Fe=Pe.object,Oe=Pe.geometry,We=F===null?Pe.material:F,Ne=Pe.group;Fe.layers.test(K.layers)&&Fc(Fe,B,K,Oe,We,Ne)}}function Fc(w,B,K,F,Y,Ee){w.onBeforeRender(v,B,K,F,Y,Ee),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(v,B,K,F,w,Ee),Y.transparent===!0&&Y.side===On&&Y.forceSinglePass===!1?(Y.side=Vt,Y.needsUpdate=!0,v.renderBufferDirect(K,B,F,Y,w,Ee),Y.side=ui,Y.needsUpdate=!0,v.renderBufferDirect(K,B,F,Y,w,Ee),Y.side=On):v.renderBufferDirect(K,B,F,Y,w,Ee),w.onAfterRender(v,B,K,F,Y,Ee)}function Cs(w,B,K){B.isScene!==!0&&(B=yt);const F=se.get(w),Y=m.state.lights,Ee=m.state.shadowsArray,Pe=Y.state.version,Fe=U.getParameters(w,Y.state,Ee,B,K),Oe=U.getProgramCacheKey(Fe);let We=F.programs;F.environment=w.isMeshStandardMaterial?B.environment:null,F.fog=B.fog,F.envMap=(w.isMeshStandardMaterial?ie:oe).get(w.envMap||F.environment),We===void 0&&(w.addEventListener("dispose",xe),We=new Map,F.programs=We);let Ne=We.get(Oe);if(Ne!==void 0){if(F.currentProgram===Ne&&F.lightsStateVersion===Pe)return Oc(w,Fe),Ne}else Fe.uniforms=U.getUniforms(w),w.onBuild(K,Fe,v),w.onBeforeCompile(Fe,v),Ne=U.acquireProgram(Fe,Oe),We.set(Oe,Ne),F.uniforms=Fe.uniforms;const ke=F.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=de.uniform),Oc(w,Fe),F.needsLights=Zp(w),F.lightsStateVersion=Pe,F.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix);const lt=Ne.getUniforms(),ht=go.seqWithValue(lt.seq,ke);return F.currentProgram=Ne,F.uniformsList=ht,Ne}function Oc(w,B){const K=se.get(w);K.outputColorSpace=B.outputColorSpace,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Yp(w,B,K,F,Y){B.isScene!==!0&&(B=yt),Z.resetTextureUnits();const Ee=B.fog,Pe=F.isMeshStandardMaterial?B.environment:null,Fe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:An,Oe=(F.isMeshStandardMaterial?ie:oe).get(F.envMap||Pe),We=F.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ne=!!K.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ke=!!K.morphAttributes.position,lt=!!K.morphAttributes.normal,ht=!!K.morphAttributes.color;let Kt=oi;F.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Kt=v.toneMapping);const Rn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pt=Rn!==void 0?Rn.length:0,qe=se.get(F),ia=m.state.lights;if(_e===!0&&(Me===!0||w!==S)){const Xt=w===S&&F.id===P;de.setState(F,w,Xt)}let mt=!1;F.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ia.state.version||qe.outputColorSpace!==Fe||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||qe.envMap!==Oe||F.fog===!0&&qe.fog!==Ee||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==de.numPlanes||qe.numIntersection!==de.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==Ne||qe.morphTargets!==ke||qe.morphNormals!==lt||qe.morphColors!==ht||qe.toneMapping!==Kt||G.isWebGL2===!0&&qe.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,qe.__version=F.version);let hi=qe.currentProgram;mt===!0&&(hi=Cs(F,B,Y));let Bc=!1,Or=!1,ra=!1;const Nt=hi.getUniforms(),di=qe.uniforms;if(z.useProgram(hi.program)&&(Bc=!0,Or=!0,ra=!0),F.id!==P&&(P=F.id,Or=!0),Bc||S!==w){if(Nt.setValue(x,"projectionMatrix",w.projectionMatrix),G.logarithmicDepthBuffer&&Nt.setValue(x,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,Or=!0,ra=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Xt=Nt.map.cameraPosition;Xt!==void 0&&Xt.setValue(x,Xe.setFromMatrixPosition(w.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Nt.setValue(x,"isOrthographic",w.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Y.isSkinnedMesh)&&Nt.setValue(x,"viewMatrix",w.matrixWorldInverse)}if(Y.isSkinnedMesh){Nt.setOptional(x,Y,"bindMatrix"),Nt.setOptional(x,Y,"bindMatrixInverse");const Xt=Y.skeleton;Xt&&(G.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Nt.setValue(x,"boneTexture",Xt.boneTexture,Z),Nt.setValue(x,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sa=K.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0&&G.isWebGL2===!0)&&we.update(Y,K,hi),(Or||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Nt.setValue(x,"receiveShadow",Y.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(di.envMap.value=Oe,di.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Or&&(Nt.setValue(x,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&Kp(di,ra),Ee&&F.fog===!0&&Q.refreshFogUniforms(di,Ee),Q.refreshMaterialUniforms(di,F,V,te,be),go.upload(x,qe.uniformsList,di,Z)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(go.upload(x,qe.uniformsList,di,Z),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Nt.setValue(x,"center",Y.center),Nt.setValue(x,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(x,"normalMatrix",Y.normalMatrix),Nt.setValue(x,"modelMatrix",Y.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Xt=F.uniformsGroups;for(let oa=0,Jp=Xt.length;oa<Jp;oa++)if(G.isWebGL2){const Hc=Xt[oa];ze.update(Hc,hi),ze.bind(Hc,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function Kp(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Zp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,B,K){se.get(w.texture).__webglTexture=B,se.get(w.depthTexture).__webglTexture=K;const F=se.get(w);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=K===void 0,F.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){const K=se.get(w);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,K=0){C=w,T=B,A=K;let F=!0,Y=null,Ee=!1,Pe=!1;if(w){const Oe=se.get(w);Oe.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(x.FRAMEBUFFER,null),F=!1):Oe.__webglFramebuffer===void 0?Z.setupRenderTarget(w):Oe.__hasExternalTextures&&Z.rebindTextures(w,se.get(w.texture).__webglTexture,se.get(w.depthTexture).__webglTexture);const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Ne=se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?Y=Ne[B][K]:Y=Ne[B],Ee=!0):G.isWebGL2&&w.samples>0&&Z.useMultisampledRTT(w)===!1?Y=se.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?Y=Ne[K]:Y=Ne,R.copy(w.viewport),j.copy(w.scissor),ce=w.scissorTest}else R.copy(le).multiplyScalar(V).floor(),j.copy(H).multiplyScalar(V).floor(),ce=J;if(z.bindFramebuffer(x.FRAMEBUFFER,Y)&&G.drawBuffers&&F&&z.drawBuffers(w,Y),z.viewport(R),z.scissor(j),z.setScissorTest(ce),Ee){const Oe=se.get(w.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,K)}else if(Pe){const Oe=se.get(w.texture),We=B||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Oe.__webglTexture,K||0,We)}P=-1},this.readRenderTargetPixels=function(w,B,K,F,Y,Ee,Pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){z.bindFramebuffer(x.FRAMEBUFFER,Fe);try{const Oe=w.texture,We=Oe.format,Ne=Oe.type;if(We!==dn&&pe.convert(We)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ne===ps&&(N.has("EXT_color_buffer_half_float")||G.isWebGL2&&N.has("EXT_color_buffer_float"));if(Ne!==ai&&pe.convert(Ne)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===ti&&(G.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-F&&K>=0&&K<=w.height-Y&&x.readPixels(B,K,F,Y,pe.convert(We),pe.convert(Ne),Ee)}finally{const Oe=C!==null?se.get(C).__webglFramebuffer:null;z.bindFramebuffer(x.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(w,B,K=0){const F=Math.pow(2,-K),Y=Math.floor(B.image.width*F),Ee=Math.floor(B.image.height*F);Z.setTexture2D(B,0),x.copyTexSubImage2D(x.TEXTURE_2D,K,0,0,w.x,w.y,Y,Ee),z.unbindTexture()},this.copyTextureToTexture=function(w,B,K,F=0){const Y=B.image.width,Ee=B.image.height,Pe=pe.convert(K.format),Fe=pe.convert(K.type);Z.setTexture2D(K,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,K.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,K.unpackAlignment),B.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,F,w.x,w.y,Y,Ee,Pe,Fe,B.image.data):B.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,F,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,Pe,B.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,F,w.x,w.y,Pe,Fe,B.image),F===0&&K.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(w,B,K,F,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=w.max.x-w.min.x+1,Pe=w.max.y-w.min.y+1,Fe=w.max.z-w.min.z+1,Oe=pe.convert(F.format),We=pe.convert(F.type);let Ne;if(F.isData3DTexture)Z.setTexture3D(F,0),Ne=x.TEXTURE_3D;else if(F.isDataArrayTexture)Z.setTexture2DArray(F,0),Ne=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,F.unpackAlignment);const ke=x.getParameter(x.UNPACK_ROW_LENGTH),lt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),ht=x.getParameter(x.UNPACK_SKIP_PIXELS),Kt=x.getParameter(x.UNPACK_SKIP_ROWS),Rn=x.getParameter(x.UNPACK_SKIP_IMAGES),pt=K.isCompressedTexture?K.mipmaps[0]:K.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,pt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,pt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,w.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,w.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,w.min.z),K.isDataTexture||K.isData3DTexture?x.texSubImage3D(Ne,Y,B.x,B.y,B.z,Ee,Pe,Fe,Oe,We,pt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(Ne,Y,B.x,B.y,B.z,Ee,Pe,Fe,Oe,pt.data)):x.texSubImage3D(Ne,Y,B.x,B.y,B.z,Ee,Pe,Fe,Oe,We,pt),x.pixelStorei(x.UNPACK_ROW_LENGTH,ke),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,lt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ht),x.pixelStorei(x.UNPACK_SKIP_ROWS,Kt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Rn),Y===0&&F.generateMipmaps&&x.generateMipmap(Ne),z.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),z.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,z.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ge?Ci:Ap}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ci?Ge:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iw extends Xp{}iw.prototype.isWebGL1Renderer=!0;class rw extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Uc extends Vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new k,h=new k,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const M=[],v=d/i;let E=0;d===0&&o===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let T=0;T<=n;T++){const A=T/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(A+E,1-v),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<n;M++){const v=u[d][M+1],E=u[d][M],T=u[d+1][M],A=u[d+1][M+1];(d!==0||o>0)&&p.push(v,E,A),(d!==i-1||l<Math.PI)&&p.push(E,T,A)}this.setIndex(p),this.setAttribute("position",new En(g,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);const At=6;var Ze,mr,gr,ms,gs,_s,_r,Qn,Qe,vs,xs,vr,Ti,Bo,qp,ys,zl;class ph extends Vn{constructor(){super(...arguments);Ct(this,Bo);Ct(this,ys);Oi(this,"isMeshLineGeometry",!0);Oi(this,"type","MeshLineGeometry");Ct(this,Ze,new Float32Array);Ct(this,mr,new Float32Array);Ct(this,gr,new Float32Array);Ct(this,ms,new Float32Array);Ct(this,gs,new Float32Array);Ct(this,_s,new Float32Array);Ct(this,_r,new Uint16Array);Ct(this,Qn,new Float32Array);Oi(this,"widthCallback",null);Ct(this,Qe,null);Ct(this,vs,[]);Ct(this,xs,null);Ct(this,vr,0);Ct(this,Ti,0)}get points(){return Se(this,vs)}set points(n){this.setPoints(n,this.widthCallback)}setPoints(n,i=null,r=!0){if(Tt(this,vs,n),Tt(this,xs,this.widthCallback),this.widthCallback=i,!("length"in n))throw new Error("not a Vector3 Array, or not a number Array or Float32Array with 3 numbers per point");if(!n.length){this.dispose(),Tt(this,Ti,0),Tt(this,vr,0);return}const s=sw(n);if(s)Tt(this,Ti,n.length);else{if(n.length%3!==0)throw new Error("The array should consist of number triplets, 3 number per point.");Tt(this,Ti,n.length/3)}const o=Se(this,Ti),a=Se(this,vr)!==o,l=Se(this,xs)!==this.widthCallback;(!Se(this,Qe)||a)&&Ps(this,Bo,qp).call(this,o),Tt(this,vr,o);let c,u=0,f=0,h=0,p=0,g=0,_=0,m=0,d=0,M=0,v=0,E=0;if(s)for(let A=0;A<n.length;A++){const C=n[A];if(!C)throw new Error("point missing");({x:u,y:f,z:h}=C),tr(Se(this,Ze),p,u,f,h),p+=At;const P=A/n.length;Se(this,Qn)[g+0]=P,Se(this,Qn)[g+1]=P,g+=2}else for(let A=0;A<n.length;A+=3){const C=n[A+0],P=n[A+1],S=n[A+2];if(C==null||P==null||S==null)throw new Error("point missing");tr(Se(this,Ze),p,C,P,S),p+=At;const R=A/n.length;Se(this,Qn)[g+0]=R,Se(this,Qn)[g+1]=R,g+=2}let T=0;if(Ps(this,ys,zl).call(this,0,o-1)?(T=(o-2)*At,u=Se(this,Ze)[T+0],f=Se(this,Ze)[T+1],h=Se(this,Ze)[T+2]):(T=0,u=Se(this,Ze)[T+0],f=Se(this,Ze)[T+1],h=Se(this,Ze)[T+2]),u==null||f==null||h==null)throw new Error("point missing");tr(Se(this,mr),_,u,f,h),_+=6;for(let A=0;A<o;A++){if(a&&(mh(Se(this,ms),d,1,-1),d+=2),(l||a)&&(this.widthCallback?c=this.widthCallback(A/(o-1)):c=1,mh(Se(this,gs),M,c,c),M+=2),a&&(ow(Se(this,_s),E,A/(o-1),0,A/(o-1),1),E+=4),A<o-1){if(T=A*At,u=Se(this,Ze)[T+0],f=Se(this,Ze)[T+1],h=Se(this,Ze)[T+2],u==null||f==null||h==null)throw new Error("point missing");if(tr(Se(this,mr),_,u,f,h),_+=6,a){const C=A*2;gh(Se(this,_r),v,C+0,C+1,C+2),gh(Se(this,_r),v+3,C+2,C+1,C+3),v+=6}}if(A>0){if(T=A*At,u=Se(this,Ze)[T+0],f=Se(this,Ze)[T+1],h=Se(this,Ze)[T+2],u==null||f==null||h==null)throw new Error("point missing");tr(Se(this,gr),m,u,f,h),m+=6}}if(Ps(this,ys,zl).call(this,o-1,0)?(T=1*At,u=Se(this,Ze)[T+0],f=Se(this,Ze)[T+1],h=Se(this,Ze)[T+2]):(T=(o-1)*At,u=Se(this,Ze)[T+0],f=Se(this,Ze)[T+1],h=Se(this,Ze)[T+2]),u==null||f==null||h==null)throw new Error("point missing");if(tr(Se(this,gr),m,u,f,h),!Se(this,Qe))throw new Error("missing attributes");Se(this,Qe).position.needsUpdate=!0,Se(this,Qe).previous.needsUpdate=!0,Se(this,Qe).next.needsUpdate=!0,Se(this,Qe).side.needsUpdate=a,Se(this,Qe).width.needsUpdate=a,Se(this,Qe).uv.needsUpdate=a,Se(this,Qe).index.needsUpdate=a,r&&(this.computeBoundingSphere(),this.computeBoundingBox())}advance(n){if(!Se(this,Qe))throw new Error("Call setPoints first.");const i=Se(this,Qe).position.array,r=Se(this,Qe).previous.array,s=Se(this,Qe).next.array,o=i.length;Ja(i,0,r,0,o),Ja(i,At,i,0,o-At),i[o-6]=n.x,i[o-5]=n.y,i[o-4]=n.z,i[o-3]=n.x,i[o-2]=n.y,i[o-1]=n.z,Ja(i,At,s,0,o-At),s[o-6]=n.x,s[o-5]=n.y,s[o-4]=n.z,s[o-3]=n.x,s[o-2]=n.y,s[o-1]=n.z,Se(this,Qe).position.needsUpdate=!0,Se(this,Qe).previous.needsUpdate=!0,Se(this,Qe).next.needsUpdate=!0}}Ze=new WeakMap,mr=new WeakMap,gr=new WeakMap,ms=new WeakMap,gs=new WeakMap,_s=new WeakMap,_r=new WeakMap,Qn=new WeakMap,Qe=new WeakMap,vs=new WeakMap,xs=new WeakMap,vr=new WeakMap,Ti=new WeakMap,Bo=new WeakSet,qp=function(n){this.dispose(),Tt(this,Qe,{position:new St(Tt(this,Ze,new Float32Array(n*At)),3),previous:new St(Tt(this,mr,new Float32Array(n*At)),3),next:new St(Tt(this,gr,new Float32Array(n*At)),3),side:new St(Tt(this,ms,new Float32Array(n*2)),1),width:new St(Tt(this,gs,new Float32Array(n*2)),1),uv:new St(Tt(this,_s,new Float32Array(n*4)),2),counters:new St(Tt(this,Qn,new Float32Array(n*2)),1),index:new St(Tt(this,_r,new Uint16Array((n-1)*At)),1)}),this.setAttribute("position",Se(this,Qe).position),this.setAttribute("previous",Se(this,Qe).previous),this.setAttribute("next",Se(this,Qe).next),this.setAttribute("side",Se(this,Qe).side),this.setAttribute("width",Se(this,Qe).width),this.setAttribute("uv",Se(this,Qe).uv),this.setAttribute("counters",Se(this,Qe).counters),this.setIndex(Se(this,Qe).index)},ys=new WeakSet,zl=function(n,i){const r=n*At,s=i*At;return Se(this,Ze)[r+0]===Se(this,Ze)[s+0]&&Se(this,Ze)[r+1]===Se(this,Ze)[s+1]&&Se(this,Ze)[r+2]===Se(this,Ze)[s+2]};function sw(t){return!!(t.length&&t[0]instanceof k)}function Ja(t,e,n,i,r){if(i+r>n.length)throw new Error("Not enough space to copy from src to dst.");for(let s=0,o=e+r;s+e<o;s++){const a=t[s+e];if(a==null)throw new Error("missing src value");n[s+i]=a}}function mh(t,e,n,i){t[e+0]=n,t[e+1]=i}function gh(t,e,n,i,r){t[e+0]=n,t[e+1]=i,t[e+2]=r}function tr(t,e,n,i,r){t[e+0]=n,t[e+1]=i,t[e+2]=r,t[e+3]=n,t[e+4]=i,t[e+5]=r}function ow(t,e,n,i,r,s){t[e+0]=n,t[e+1]=i,t[e+2]=r,t[e+3]=s}Re.meshline_vert=`
	${Re.logdepthbuf_pars_vertex}
	${Re.fog_pars_vertex}
	
	attribute vec3 previous;
	attribute vec3 next;
	attribute float side;
	attribute float width;
	attribute float counters;
	
	uniform vec2 resolution;
	uniform float lineWidth;
	uniform vec3 color;
	uniform float opacity;
	uniform float sizeAttenuation;
	
	varying vec2 vUV;
	varying vec4 vColor;
	varying float vCounters;
	
	vec2 fix( vec4 i, float aspect ) {
	
	    vec2 res = i.xy / i.w;
	    res.x *= aspect;
		 vCounters = counters;
	    return res;
        
	}
	
	void main() {
	
	    float aspect = resolution.x / resolution.y;
	
	    vColor = vec4( color, opacity );
	    vUV = uv;
	
	    mat4 m = projectionMatrix * modelViewMatrix;
	    vec4 finalPosition = m * vec4( position, 1.0 );
	    vec4 prevPos = m * vec4( previous, 1.0 );
	    vec4 nextPos = m * vec4( next, 1.0 );
	
	    vec2 currentP = fix( finalPosition, aspect );
	    vec2 prevP = fix( prevPos, aspect );
	    vec2 nextP = fix( nextPos, aspect );
	
	    float w = lineWidth * width;
	
	    vec2 dir;
	    if( nextP == currentP ) dir = normalize( currentP - prevP );
	    else if( prevP == currentP ) dir = normalize( nextP - currentP );
	    else {
	        vec2 dir1 = normalize( currentP - prevP );
	        vec2 dir2 = normalize( nextP - currentP );
	        dir = normalize( dir1 + dir2 );
	
	        vec2 perp = vec2( -dir1.y, dir1.x );
	        vec2 miter = vec2( -dir.y, dir.x );
	        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );
	
	    }
	
	    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;
	    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );
	    normal.xy *= .5 * w;
	    normal *= projectionMatrix;
	    if( sizeAttenuation == 0. ) {
	        normal.xy *= finalPosition.w;
	        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;
	    }
	
	    finalPosition.xy += normal.xy * side;
	
	    gl_Position = finalPosition;
	
        ${Re.logdepthbuf_vertex}
        ${Re.fog_vertex&&"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );"}
        ${Re.fog_vertex}
	}
`;Re.meshline_frag=`
	${Re.fog_pars_fragment}
	${Re.logdepthbuf_pars_fragment}
	
	uniform sampler2D map;
	uniform sampler2D alphaMap;
	uniform float useMap;
	uniform float useAlphaMap;
	uniform float useDash;
	uniform float dashArray;
	uniform float dashOffset;
	uniform float dashRatio;
	uniform float visibility;
	uniform float alphaTest;
	uniform vec2 repeat;

	varying vec2 vUV;
	varying vec4 vColor;
	varying float vCounters;
	
	void main() {
        ${Re.logdepthbuf_fragment}

	    vec4 c = vColor;
	    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );
	    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;
	    if( c.a < alphaTest ) discard;
	    if( useDash == 1. ){
	        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
	    }
	    gl_FragColor = c;
	    gl_FragColor.a *= step(vCounters, visibility);
	
        ${Re.fog_fragment}
	}
`;class _h extends fi{constructor(n){super({uniforms:Object.assign({},he.fog,{lineWidth:{value:1},map:{value:null},useMap:{value:!1},alphaMap:{value:null},useAlphaMap:{value:!1},color:{value:new it(16777215)},opacity:{value:1},resolution:{value:new Ke(1,1)},sizeAttenuation:{value:!0},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:!1},visibility:{value:1},alphaTest:{value:0},repeat:{value:new Ke(1,1)}}),vertexShader:Re.meshline_vert,fragmentShader:Re.meshline_frag});Oi(this,"isMeshLineMaterial",!0);Oi(this,"type","MeshLineMaterial");Object.defineProperties(this,{fogColor:{enumerable:!0,get:()=>this.uniforms.fogColor.value,set:i=>{this.uniforms.fogColor.value=i}},fogDensity:{enumerable:!0,get:()=>this.uniforms.fogDensity.value,set:i=>{this.uniforms.fogDensity.value=i}},fogNear:{enumerable:!0,get:()=>this.uniforms.fogNear.value,set:i=>{this.uniforms.fogNear.value=i}},fogFar:{enumerable:!0,get:()=>this.uniforms.fogFar.value,set:i=>{this.uniforms.fogFar.value=i}},lineWidth:{enumerable:!0,get:()=>this.uniforms.lineWidth.value,set:i=>{this.uniforms.lineWidth.value=i}},map:{enumerable:!0,get:()=>this.uniforms.map.value,set:i=>{this.uniforms.map.value=i}},useMap:{enumerable:!0,get:()=>this.uniforms.useMap.value,set:i=>{this.uniforms.useMap.value=i}},alphaMap:{enumerable:!0,get:()=>this.uniforms.alphaMap.value,set:i=>{this.uniforms.alphaMap.value=i}},useAlphaMap:{enumerable:!0,get:()=>this.uniforms.useAlphaMap.value,set:i=>{this.uniforms.useAlphaMap.value=i}},color:{enumerable:!0,get:()=>this.uniforms.color.value,set:i=>{this.uniforms.color.value=i}},opacity:{enumerable:!0,get:()=>this.uniforms.opacity.value,set:i=>{this.uniforms.opacity.value=i}},resolution:{enumerable:!0,get:()=>this.uniforms.resolution.value,set:i=>{this.uniforms.resolution.value.copy(i)}},sizeAttenuation:{enumerable:!0,get:()=>this.uniforms.sizeAttenuation.value,set:i=>{this.uniforms.sizeAttenuation.value=i}},dashArray:{enumerable:!0,get:()=>this.uniforms.dashArray.value,set:i=>{this.uniforms.dashArray.value=i,this.useDash=i!==0}},dashOffset:{enumerable:!0,get:()=>this.uniforms.dashOffset.value,set:i=>{this.uniforms.dashOffset.value=i}},dashRatio:{enumerable:!0,get:()=>this.uniforms.dashRatio.value,set:i=>{this.uniforms.dashRatio.value=i}},useDash:{enumerable:!0,get:()=>this.uniforms.useDash.value,set:i=>{this.uniforms.useDash.value=i}},visibility:{enumerable:!0,get:()=>this.uniforms.visibility.value,set:i=>{this.uniforms.visibility.value=i}},alphaTest:{enumerable:!0,get:()=>this.uniforms.alphaTest.value,set:i=>{this.uniforms.alphaTest.value=i}},repeat:{enumerable:!0,get:()=>this.uniforms.repeat.value,set:i=>{this.uniforms.repeat.value.copy(i)}}}),this.setValues(n)}copy(n){return super.copy(this),this.fogColor=n.fogColor,this.fogDensity=n.fogDensity,this.fogNear=n.fogNear,this.fogFar=n.fogFar,this.lineWidth=n.lineWidth,this.map=n.map,this.useMap=n.useMap,this.alphaMap=n.alphaMap,this.useAlphaMap=n.useAlphaMap,this.color.copy(n.color),this.opacity=n.opacity,this.resolution.copy(n.resolution),this.sizeAttenuation=n.sizeAttenuation,this.dashArray=n.dashArray,this.dashOffset=n.dashOffset,this.dashRatio=n.dashRatio,this.useDash=n.useDash,this.visibility=n.visibility,this.alphaTest=n.alphaTest,this.repeat.copy(n.repeat),this}}const aw={class:"flex flex-row w-full h-full justify-between"},lw=nt("div",{class:"w-[40px]"},null,-1),cw={class:"flex flex-col items-center space-y-2 my-2 w-[40px]"},uw=["max"],Qa=3,fw=wn({__name:"ShapeSpinner",setup(t){const e=Je(void 0),n=et(),i=n.$shapes,r=Gt(()=>i.value.length*Qa*2),s=Je(0),o=new rw,a=new tn(75,1,.1,1e3);a.position.z=-7,a.lookAt(0,0,0);const l=new mn(new Uc(.1,32,32),new Pc({color:0})),c=new ph;c.setPoints([new k(0,10,0),new k(0,4,0)]);const u=new _h({color:0,lineWidth:.1,resolution:new Ke(300,300)}),f=new mn(c,u),h=new sr;h.add(a),h.add(l),h.add(f),o.add(h);const p={},g=new sr;Sn(i,()=>{g.clear(),i.value.forEach((d,M)=>{const v=m(d.corners,M*Qa),E=new ph;E.setPoints(v);const T=new _h({color:`hsl(${d.color}, 100%, 50%)`,lineWidth:.5,resolution:new Ke(300,300)}),A=new mn(E,T);A.translateZ(M*Qa),A.rotateZ(Math.PI/2),p[A.uuid]=d,g.add(A)}),o.add(g)},{deep:!0});const _=()=>{const d=new Xp({canvas:e.value,alpha:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(300,300);const M=A=>{h.position.setZ(s.value);const C=T(A),P=g.rotation.z,S=P+C;g.rotation.z+=C,g.children.map(R=>R).forEach(R=>{var ce;const j=p[R.uuid];if(j){const O=P%(Math.PI*2/j.corners),D=S%(Math.PI*2/j.corners);O>D&&((ce=j.pings)==null||ce.playPing())}}),d.render(o,a),requestAnimationFrame(M)},v=new Date().getTime();let E=new Date().getTime();const T=A=>{const C=n.$speed.value,P=A-E;return E=A,P/1e3*C*Math.PI*2};M(v)},m=(d,M,v={x:0,y:0})=>{const E=[],A=2*Math.PI/d;for(let C=0;C<d;C++){const P=v.x+5*Math.cos(A*C),S=v.y+5*Math.sin(A*C);E.push(new k(P,S,M))}return E.length>2?E.push(E[0]):E.length<2&&E.push(new k(0,0,M)),E};return Ni(()=>{_()}),(d,M)=>{const v=Dr;return ct(),Tn("div",aw,[lw,nt("canvas",{class:"z-10 rounded-xl bg-base-100 w-[300px] h-[300px]",ref_key:"canvas",ref:e},null,512),nt("div",cw,[Ie(v,{class:"shrink-0 text-neutral-content",name:"ic:outline-zoom-in",size:"32"}),So(nt("input",{min:"-5",max:Le(r),step:"0.01","onUpdate:modelValue":M[0]||(M[0]=E=>ut(s)?s.value=E:null),type:"range",class:"range-vertical h-full"},null,8,uw),[[Ao,Le(s)]]),Ie(v,{class:"shrink-0 text-neutral-content",name:"ic:outline-zoom-out",size:"32"})])])}}});const hw={class:"flex flex-col w-full space-y-2 px-2"},dw={class:"flex flex-row justify-between items-center"},pw={class:"flex flex-row justify-between items-center"},vh=0,el=100,mw=wn({__name:"MasterControl",setup(t){const e=et(),n=e.$mainVolume,i=e.$speed,r=Je(0),s=Math.log(.1),o=Math.log(10),a=(o-s)/(el-vh),l=()=>{r.value=vh,i.value=0},c=()=>{r.value=el,i.value=u(el)},u=f=>f==0?0:Math.exp(s+a*(f-o));return(f,h)=>{const p=Dr;return ct(),Tn("div",hw,[nt("div",dw,[Ie(p,{id:"volume-off",class:"text-neutral-content cursor-pointer",name:"material-symbols:volume-off",size:"32",onClick:h[0]||(h[0]=g=>n.value=0)}),So(nt("input",{"onUpdate:modelValue":h[1]||(h[1]=g=>ut(n)?n.value=g:null),class:"range range-accent mx-4",max:"1",min:"0",step:"0.01",type:"range"},null,512),[[Ao,Le(n)]]),Ie(p,{id:"volume-up",class:"text-neutral-content cursor-pointer",name:"material-symbols:volume-up",size:"32",onClick:h[2]||(h[2]=g=>n.value=1)})]),nt("div",pw,[Ie(p,{class:"text-neutral-content cursor-pointer",name:"mdi:tortoise",size:"32",onClick:l}),So(nt("input",{type:"range","onUpdate:modelValue":h[3]||(h[3]=g=>ut(r)?r.value=g:null),class:"range range-accent mx-4",onInput:h[4]||(h[4]=g=>i.value=u(Le(r))),min:"0",max:"100",step:"0.01"},null,544),[[Ao,Le(r)]]),Ie(p,{class:"text-neutral-content cursor-pointer",name:"mdi:rabbit",size:"32",onClick:c})])])}}});var jp={exports:{}};(function(t,e){function n(){var o=document.querySelector("[data-toggle-theme]"),a=o?o.getAttribute("data-key"):null;(function(l=localStorage.getItem(a||"theme")){localStorage.getItem(a||"theme")&&(document.documentElement.setAttribute("data-theme",l),o&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(c=>{c.classList.add(o.getAttribute("data-act-class"))}))})(),o&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(l=>{l.addEventListener("click",function(){var c=l.getAttribute("data-toggle-theme");if(c){var u=c.split(",");document.documentElement.getAttribute("data-theme")==u[0]?u.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(a||"theme")):(document.documentElement.setAttribute("data-theme",u[1]),localStorage.setItem(a||"theme",u[1])):(document.documentElement.setAttribute("data-theme",u[0]),localStorage.setItem(a||"theme",u[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(f=>{f.classList.toggle(this.getAttribute("data-act-class"))})})})}function i(){var o=document.querySelector("[data-set-theme='']"),a=o?o.getAttribute("data-key"):null;(function(l=localStorage.getItem(a||"theme")){if(l!=null&&l!="")if(localStorage.getItem(a||"theme")&&localStorage.getItem(a||"theme")!=""){document.documentElement.setAttribute("data-theme",l);var c=document.querySelector("[data-set-theme='"+l.toString()+"']");c&&([...document.querySelectorAll("[data-set-theme]")].forEach(u=>{u.classList.remove(u.getAttribute("data-act-class"))}),c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class")))}else{var c=document.querySelector("[data-set-theme='']");c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(l=>{l.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(a||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(c=>{c.classList.remove(c.getAttribute("data-act-class"))}),l.getAttribute("data-act-class")&&l.classList.add(l.getAttribute("data-act-class"))})})}function r(){var o=document.querySelector("select[data-choose-theme]"),a=o?o.getAttribute("data-key"):null;(function(l=localStorage.getItem(a||"theme")){if(localStorage.getItem(a||"theme")){document.documentElement.setAttribute("data-theme",l);var c=document.querySelector("select[data-choose-theme] [value='"+l.toString()+"']");c&&[...document.querySelectorAll("select[data-choose-theme] [value='"+l.toString()+"']")].forEach(u=>{u.selected=!0})}})(),o&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(l=>{l.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(a||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(a||"theme")+"']")].forEach(c=>{c.selected=!0})})})}function s(o=!0){o===!0?document.addEventListener("DOMContentLoaded",function(a){n(),r(),i()}):(n(),r(),i())}t.exports={themeChange:s}})(jp);var gw=jp.exports;const _w={class:"flex flex-col justify-center items-center w-screen h-screen bg-base-100 space-y-4"},vw=nt("div",{class:"text-4xl bg-base"}," Soundshaper ",-1),xw={class:"flex flex-col items-center rounded-xl shadow-xl p-4 bg-neutral artboard artboard-horizontal phone-5"},yw={class:"flex flex-row w-full h-full"},Mw={class:"flex flex-col basis-1/2 w-full h-full"},Sw={class:"absolute flex flex-row bottom-0 right-0 p-4 items-center space-x-2"},Ew={class:"select max-w-xs","data-choose-theme":""},bw=["value"],Tw=wn({__name:"app",setup(t){Ni(()=>{gw.themeChange(!1)});const e=i=>i.charAt(0).toUpperCase()+i.slice(1),n=["aqua","pastel","dracula","night","coffee"];return(i,r)=>{const s=Yy,o=fw,a=mw,l=Dr,c=l0;return ct(),Tn("div",_w,[vw,nt("div",xw,[nt("div",yw,[Ie(s,{class:"basis-1/2"}),nt("div",Mw,[Ie(o),Ie(a)])])]),nt("div",Sw,[nt("select",Ew,[(ct(),Tn(It,null,sd(n,u=>nt("option",{key:u,value:u},jl(e(u)),9,bw)),64))]),Ie(c,{to:"https://github.com/blackburn32/soundshaper"},{default:ic(()=>[Ie(l,{name:"mdi:github",size:"32"})]),_:1})])])}}}),Aw={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;(n.stack||"").split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=r?Eo(()=>us(()=>import("./error-404.37462279.js"),["./error-404.37462279.js","./error-404.7fc72018.css"],import.meta.url).then(f=>f.default||f)):Eo(()=>us(()=>import("./error-500.fbd6647e.js"),["./error-500.fbd6647e.js","./error-500.c5df6088.css"],import.meta.url).then(f=>f.default||f));return(f,h)=>(ct(),fn(Le(u),hm(Md({statusCode:Le(i),statusMessage:Le(s),description:Le(o),stack:Le(a)})),null,16))}},xh={__name:"nuxt-root",setup(t){const e=()=>null,n=et(),i=n.deferHydration(),r=!1;cd($d,kx()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const s=vc();td((a,l,c)=>{if(n.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),Xx(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>Vx(a)),!1});const{islandContext:o}=!1;return(a,l)=>(ct(),fn(cg,{onResolve:Le(i)},{default:ic(()=>[Le(s)?(ct(),fn(Le(Aw),{key:0,error:Le(s)},null,8,["error"])):Le(o)?(ct(),fn(Le(e),{key:1,context:Le(o)},null,8,["context"])):Le(r)?(ct(),fn(id(Le(r)),{key:2})):(ct(),fn(Le(Tw),{key:3}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=dv.create({baseURL:mv()}));let yh;{let t;yh=async function(){var s,o;if(t)return t;const i=!!((s=window.__NUXT__)!=null&&s.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?w_(xh):A_(xh),r=Cv({vueApp:i});try{await Lv(r,E0)}catch(a){await r.callHook("app:error",a),r.payload.error=r.payload.error||a}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount("#"+Cx),await r.hooks.callHook("app:mounted",i),await nc()}catch(a){await r.callHook("app:error",a),r.payload.error=r.payload.error||a}return i},t=yh().catch(e=>{console.error("Error while mounting app:",e)})}export{Py as _,nt as a,Ie as b,Tn as c,fc as d,l0 as e,Cw as f,wn as g,Pw as h,d0 as i,Gt as j,xr as n,ct as o,Rw as p,jl as t,Lw as u,ic as w};
