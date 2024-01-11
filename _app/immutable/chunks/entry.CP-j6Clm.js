import{y as tt}from"./scheduler.qOnLfXBV.js";import{w as de}from"./index.6Xnhqn1T.js";import{a as nt,b as R}from"./paths.-OMsm_Jf.js";new URL("sveltekit-internal://");function at(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function rt(e){return e.split("%25").map(decodeURI).join("%25")}function ot(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function se({href:e}){return e.split("#")[0]}const st=["href","pathname","search","toString","toJSON"];function it(e,t,n){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return s=>(n(s),r[o](s));t();const i=Reflect.get(r,o);return typeof i=="function"?i.bind(r):i}}),enumerable:!0,configurable:!0});for(const r of st)Object.defineProperty(a,r,{get(){return t(),e[r]},enumerable:!0,configurable:!0});return a}const ct="/__data.json",lt=".html__data.json";function ft(e){return e.endsWith(".html")?e.replace(/\.html$/,lt):e.replace(/\/$/,"")+ct}function ut(...e){let t=5381;for(const n of e)if(typeof n=="string"){let a=n.length;for(;a;)t=t*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)t=t*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}const xe=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&$.delete(he(e)),xe(e,t));const $=new Map;function dt(e){const t=atob(e),n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n.buffer}function ht(e,t){const n=he(e,t),a=document.querySelector(n);if(a?.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&$.set(n,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=dt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,t)}function pt(e,t,n){if($.size>0){const a=he(e,n),r=$.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(r.body,r.init);$.delete(a)}}return window.fetch(t,n)}function he(e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const r=[];t.headers&&r.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&r.push(t.body),a+=`[data-hash="${ut(...r)}"]`}return a}const gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function _t(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${yt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ie(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ie(String.fromCharCode(...c.slice(2).split("-").map(p=>parseInt(p,16))));const d=gt.exec(c),[,g,u,f,h]=d;return t.push({name:f,matcher:h,optional:!!g,rest:!!u,chained:u?l===1&&i[0]==="":!1}),u?"(.*?)":g?"([^/]*)?":"([^/]+?)"}return ie(c)}).join("")}).join("")}/?$`),params:t}}function mt(e){return!/^\([^)]+\)$/.test(e)}function yt(e){return e.slice(1).split("/").filter(mt)}function wt(e,t,n){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<t.length;s+=1){const c=t[s];let l=r[s-i];if(c.chained&&c.rest&&i&&(l=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){a[c.name]=l;const d=t[s+1],g=r[s+1];d&&!d.rest&&d.optional&&g&&c.chained&&(i=0),!d&&!g&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function ie(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function vt({nodes:e,server_loads:t,dictionary:n,matchers:a}){const r=new Set(t);return Object.entries(n).map(([s,[c,l,d]])=>{const{pattern:g,params:u}=_t(s),f={id:s,exec:h=>{const p=g.exec(h);if(p)return wt(p,u,a)},errors:[1,...d||[]].map(h=>e[h]),layouts:[0,...l||[]].map(i),leaf:o(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function Te(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Ae(e,t,n=JSON.stringify){const a=n(t);try{sessionStorage[e]=a}catch{}}const bt="1704993328132",Ne="sveltekit:snapshot",Oe="sveltekit:scroll",je="sveltekit:states",Et="sveltekit:pageurl",T="sveltekit:history",V="sveltekit:navigation",K={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},q=location.origin;function De(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function pe(){return{x:pageXOffset,y:pageYOffset}}function x(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Se={...K,"":K.hover};function $e(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Ce(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=$e(e)}}function le(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!a||ee(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=n?.origin===q&&e.hasAttribute("download");return{url:n,external:r,target:a,download:o}}function Y(e){let t=null,n=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=x(s,"preload-code")),r===null&&(r=x(s,"preload-data")),t===null&&(t=x(s,"keepfocus")),n===null&&(n=x(s,"noscroll")),o===null&&(o=x(s,"reload")),i===null&&(i=x(s,"replacestate")),s=$e(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Se[a??"off"],preload_data:Se[r??"off"],keepfocus:c(t),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Re(e){const t=de(e);let n=!0;function a(){n=!0,t.update(i=>i)}function r(i){n=!1,t.set(i)}function o(i){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}function kt(){const{set:e,subscribe:t}=de(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==bt;return i&&(e(!0),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:a}}function ee(e,t){return e.origin!==q||!e.pathname.startsWith(t)}const At=-1,St=-2,Rt=-3,It=-4,Lt=-5,Pt=-6;function Ut(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,a=Array(n.length);function r(o,i=!1){if(o===At)return;if(o===Rt)return NaN;if(o===It)return 1/0;if(o===Lt)return-1/0;if(o===Pt)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=n[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=t?.[c];if(l)return a[o]=l(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let f=1;f<s.length;f+=1)d.add(r(s[f]));break;case"Map":const g=new Map;a[o]=g;for(let f=1;f<s.length;f+=2)g.set(r(s[f]),r(s[f+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const u=Object.create(null);a[o]=u;for(let f=1;f<s.length;f+=2)u[s[f]]=r(s[f+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==St&&(c[l]=r(d))}}else{const c={};a[o]=c;for(const l in s){const d=s[l];c[l]=r(d)}}return a[o]}return r(0)}const Ve=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ve];const xt=new Set([...Ve]);[...xt];function Tt(e){return e.filter(t=>t!=null)}class te{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Fe{constructor(t,n){this.status=t,this.location=n}}class ge extends Error{constructor(t,n,a){super(a),this.status=t,this.text=n}}const Nt="x-sveltekit-invalidated",Ot="x-sveltekit-trailing-slash";function J(e){return e instanceof te||e instanceof ge?e.status:500}function jt(e){return e instanceof ge?e.text:"Internal Error"}const U=Te(Oe)??{},F=Te(Ne)??{},Dt=history.pushState,_e=history.replaceState,L={url:Re({}),page:Re({}),navigating:de(null),updated:kt()};function me(e){U[e]=pe()}function $t(e,t){let n=e+1;for(;U[n];)delete U[n],n+=1;for(n=t+1;F[n];)delete F[n],n+=1}function O(e){return location.href=e.href,new Promise(()=>{})}function Ie(){}let ne,fe,W,I,ue,j;const Ge=[],z=[];let N=null;const Me=[],Ct=[];let C=[],y={branch:[],error:null,url:null},ye=!1,X=!1,Le=!0,G=!1,D=!1,qe=!1,we=!1,ve,w,k,A,Z;async function zt(e,t,n){document.URL!==location.href&&(location.href=location.href),j=e,ne=vt(e),I=document.documentElement,ue=t,fe=e.nodes[0],W=e.nodes[1],fe(),W(),w=history.state?.[T],k=history.state?.[V],w||(w=k=Date.now(),_e.call(history,{...history.state,[T]:w,[V]:k},""));const a=U[w];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await Bt(ue,n):qt(location.href,{replaceState:!0}),Ht()}function He(e){z.some(t=>t?.snapshot)&&(F[e]=z.map(t=>t?.snapshot?.capture()))}function Be(e){F[e]?.forEach((t,n)=>{z[n]?.snapshot?.restore(t)})}function Pe(){me(w),Ae(Oe,U),He(k),Ae(Ne,F)}async function Ke(e,t,n,a){return B({type:"goto",url:De(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:a,accept:()=>{t.invalidateAll&&(we=!0)}})}async function Vt(e){return N={id:e.id,promise:Je(e).then(t=>(t.type==="loaded"&&t.state.error&&(N=null),t))},N.promise}async function ce(e){const t=ne.find(n=>n.exec(We(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function Ye(e,t){y=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),A=e.props.page,ve=new j.root({target:t,props:{...e.props,stores:L,components:z},hydrate:!0}),Be(k);const a={from:null,to:{params:y.params,route:{id:y.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};C.forEach(r=>r(a)),X=!0}async function Q({url:e,params:t,branch:n,status:a,error:r,route:o,form:i}){let s="never";if(R&&(e.pathname===R||e.pathname===R+"/"))s="always";else for(const f of n)f?.slash!==void 0&&(s=f.slash);e.pathname=at(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:r,route:o},props:{constructors:Tt(n).map(f=>f.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},d=!A,g=0;for(let f=0;f<Math.max(n.length,y.branch.length);f+=1){const h=n[f],p=y.branch[f];h?.data!==p?.data&&(d=!0),h&&(l={...l,...h.data},d&&(c.props[`data_${g}`]=l),g+=1)}return(!y.url||e.href!==y.url.href||y.error!==r||i!==void 0&&i!==A.form||d)&&(c.props.page={error:r,params:t,route:{id:o?.id??null},state:{},status:a,url:new URL(e),form:i??null,data:d?l:A.data}),c}async function be({loader:e,parent:t,url:n,params:a,route:r,server_data_node:o}){let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...u){for(const f of u){const{href:h}=new URL(f,n);c.dependencies.add(h)}};const g={route:new Proxy(r,{get:(u,f)=>(s&&(c.route=!0),u[f])}),params:new Proxy(a,{get:(u,f)=>(s&&c.params.add(f),u[f])}),data:o?.data??null,url:it(n,()=>{s&&(c.url=!0)},u=>{s&&c.search_params.add(u)}),async fetch(u,f){let h;u instanceof Request?(h=u.url,f={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...f}):h=u;const p=new URL(h,n);return s&&d(p.href),p.origin===n.origin&&(h=p.href.slice(n.origin.length)),X?pt(h,p.href,f):ht(h,f)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),t()},untrack(u){s=!1;try{return u()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??o?.data??null,slash:l.universal?.trailingSlash??o?.slash}}function Ue(e,t,n,a,r,o){if(we)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==y.params[i])return!0;for(const i of r.dependencies)if(Ge.some(s=>s(new URL(i))))return!0;return!1}function Ee(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function Ft(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const a of n){const r=e.searchParams.getAll(a),o=t.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&n.delete(a)}return n}async function Je({id:e,invalidating:t,url:n,params:a,route:r}){if(N?.id===e)return N.promise;const{errors:o,layouts:i,leaf:s}=r,c=[...i,s];o.forEach(_=>_?.().catch(()=>{})),c.forEach(_=>_?.[1]().catch(()=>{}));let l=null;const d=y.url?e!==y.url.pathname+y.url.search:!1,g=y.route?r.id!==y.route.id:!1,u=Ft(y.url,n);let f=!1;const h=c.map((_,m)=>{const v=y.branch[m],b=!!_?.[0]&&(v?.loader!==_[1]||Ue(f,g,d,u,v.server?.uses,a));return b&&(f=!0),b});if(h.some(Boolean)){try{l=await Ze(n,h)}catch(_){return ae({status:J(_),error:await M(_,{url:n,params:a,route:{id:r.id}}),url:n,route:r})}if(l.type==="redirect")return l}const p=l?.nodes;let S=!1;const E=c.map(async(_,m)=>{if(!_)return;const v=y.branch[m],b=p?.[m];if((!b||b.type==="skip")&&_[1]===v?.loader&&!Ue(S,g,d,u,v.universal?.uses,a))return v;if(S=!0,b?.type==="error")throw b;return be({loader:_[1],url:n,params:a,route:r,parent:async()=>{const re={};for(let oe=0;oe<m;oe+=1)Object.assign(re,(await E[oe])?.data);return re},server_data_node:Ee(b===void 0&&_[0]?{type:"skip"}:b??null,_[0]?v?.server:void 0)})});for(const _ of E)_.catch(()=>{});const P=[];for(let _=0;_<c.length;_+=1)if(c[_])try{P.push(await E[_])}catch(m){if(m instanceof Fe)return{type:"redirect",location:m.location};let v=J(m),b;if(p?.includes(m))v=m.status??v,b=m.error;else if(m instanceof te)b=m.body;else{if(await L.updated.check())return await O(n);b=await M(m,{params:a,url:n,route:{id:r.id}})}const H=await Gt(_,P,o);return H?await Q({url:n,params:a,branch:P.slice(0,H.idx).concat(H.node),status:v,error:b,route:r}):await Xe(n,{id:r.id},b,v)}else P.push(void 0);return await Q({url:n,params:a,branch:P,status:200,error:null,route:r,form:t?void 0:null})}async function Gt(e,t,n){for(;e--;)if(n[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ae({status:e,error:t,url:n,route:a}){const r={};let o=null;if(j.server_loads[0]===0)try{const l=await Ze(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==q||n.pathname!==location.pathname||ye)&&await O(n)}const s=await be({loader:fe,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Ee(o)}),c={node:await W(),loader:W,universal:null,server:null,data:null};return await Q({url:n,params:r,branch:[s,c],status:e,error:t,route:null})}function ke(e,t){if(!e||ee(e,R))return;let n;try{n=j.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const a=We(n);for(const r of ne){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:t,route:r,params:ot(o),url:e}}}function We(e){return rt(e.slice(R.length)||"/")}function ze({url:e,type:t,intent:n,delta:a}){let r=!1;const o=et(y,n,e,t);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return G||Me.forEach(s=>s(i)),r?null:o}async function B({type:e,url:t,popped:n,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ie,block:d=Ie}){const g=ke(t,!1),u=ze({url:t,type:e,delta:n?.delta,intent:g});if(!u){d();return}const f=w,h=k;l(),G=!0,X&&L.navigating.set(u.navigation),Z=c;let p=g&&await Je(g);if(!p){if(ee(t,R))return await O(t);p=await Xe(t,{id:null},await M(new ge(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=g?.url||t,Z!==c)return u.reject(new Error("navigation aborted")),!1;if(p.type==="redirect")if(s>=20)p=await ae({status:500,error:await M(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Ke(new URL(p.location,t).href,{},s+1,c),!1;else p.props.page.status>=400&&await L.updated.check()&&await O(t);if(Ge.length=0,we=!1,me(f),He(h),p.props.page.url.pathname!==t.pathname&&(t.pathname=p.props.page.url.pathname),i=n?n.state:i,!n){const _=o?0:1,m={[T]:w+=_,[V]:k+=_,[je]:i};(o?_e:Dt).call(history,m,"",t),o||$t(w,k)}if(N=null,p.props.page.state=i,X){y=p.state,p.props.page&&(p.props.page.url=t);const _=(await Promise.all(Ct.map(m=>m(u.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){C=C.filter(v=>!_.includes(v))};_.push(m),callbacks.after_navigate.push(..._)}ve.$set(p.props),qe=!0}else Ye(p,ue);const{activeElement:S}=document;await tt();const E=n?n.scroll:r?pe():null;if(Le){const _=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));E?scrollTo(E.x,E.y):_?_.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==S&&document.activeElement!==document.body;!a&&!P&&Kt(),Le=!0,p.props.page&&(A=p.props.page),G=!1,e==="popstate"&&Be(k),u.fulfil(void 0),C.forEach(_=>_(u.navigation)),L.navigating.set(null)}async function Xe(e,t,n,a){return e.origin===q&&e.pathname===location.pathname&&!ye?await ae({status:a,error:n,url:e,route:t}):await O(e)}function Mt(){let e;I.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function t(o){a(o.composedPath()[0],1)}I.addEventListener("mousedown",t),I.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ce(i.target.href),n.unobserve(i.target))},{threshold:0});function a(o,i){const s=Ce(o,I);if(!s)return;const{url:c,external:l,download:d}=le(s,R);if(l||d)return;const g=Y(s);if(!g.reload)if(i<=g.preload_data){const u=ke(c,!1);u&&Vt(u)}else i<=g.preload_code&&ce(c.pathname)}function r(){n.disconnect();for(const o of I.querySelectorAll("a")){const{url:i,external:s,download:c}=le(o,R);if(s||c)continue;const l=Y(o);l.reload||(l.preload_code===K.viewport&&n.observe(o),l.preload_code===K.eager&&ce(i.pathname))}}C.push(r),r()}function M(e,t){if(e instanceof te)return e.body;const n=J(e),a=jt(e);return j.hooks.handleError({error:e,event:t,status:n,message:a})??{message:a}}function qt(e,t={}){return e=De(e),e.origin!==q?Promise.reject(new Error("goto: invalid URL")):Ke(e,t,0)}function Ht(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Pe(),!G){const a=et(y,void 0,null,"leave"),r={...a.navigation,cancel:()=>{n=!0,a.reject(new Error("navigation cancelled"))}};Me.forEach(o=>o(r))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Pe()}),navigator.connection?.saveData||Mt(),I.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Ce(t.composedPath()[0],I);if(!n)return;const{url:a,external:r,target:o,download:i}=le(n,R);if(!a)return;if(o==="_parent"||o==="_top"){if(window.parent!==window)return}else if(o&&o!=="_self")return;const s=Y(n);if(!(n instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(r||s.reload){ze({url:a,type:"link"})?G=!0:t.preventDefault();return}const[l,d]=a.href.split("#");if(d!==void 0&&l===se(location)){const[,g]=y.url.href.split("#");if(g===d){t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):n.ownerDocument.getElementById(d)?.scrollIntoView();return}if(D=!0,me(w),e(a),!s.replace_state)return;D=!1}t.preventDefault(),B({type:"link",url:a,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??a.href===location.href})}),I.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if((a?.formMethod||n.method)!=="get")return;const o=new URL(a?.hasAttribute("formaction")&&a?.formAction||n.action);if(ee(o,R))return;const i=t.target,s=Y(i);if(s.reload)return;t.preventDefault(),t.stopPropagation();const c=new FormData(i),l=a?.getAttribute("name");l&&c.append(l,a?.getAttribute("value")??""),o.search=new URLSearchParams(c).toString(),B({type:"form",url:o,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??o.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[T]){const n=t.state[T];if(Z={},n===w)return;const a=U[n],r=t.state[je]??{},o=new URL(t.state[Et]??location.href),i=t.state[V],s=se(location)===se(y.url);if(i===k&&(qe||s)){e(o),U[w]=pe(),a&&scrollTo(a.x,a.y),r!==A.state&&(A={...A,state:r},ve.$set({page:A})),w=n;return}const l=n-w;await B({type:"popstate",url:o,popped:{state:r,scroll:a,delta:l},accept:()=>{w=n,k=i},block:()=>{history.go(-l)},nav_token:Z})}else if(!D){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{D&&(D=!1,_e.call(history,{...history.state,[T]:++w,[V]:k},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&L.navigating.set(null)});function e(t){y.url=t,L.page.set({...A,url:t}),L.page.notify()}}async function Bt(e,{status:t=200,error:n,node_ids:a,params:r,route:o,data:i,form:s}){ye=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=ke(c,!1)||{});let l;try{const d=a.map(async(f,h)=>{const p=i[h];return p?.uses&&(p.uses=Qe(p.uses)),be({loader:j.nodes[f],url:c,params:r,route:o,parent:async()=>{const S={};for(let E=0;E<h;E+=1)Object.assign(S,(await d[E]).data);return S},server_data_node:Ee(p)})}),g=await Promise.all(d),u=ne.find(({id:f})=>f===o.id);if(u){const f=u.layouts;for(let h=0;h<f.length;h++)f[h]||g.splice(h,0,void 0)}l=await Q({url:c,params:r,branch:g,status:t,error:n,form:s,route:u??null})}catch(d){if(d instanceof Fe){await O(new URL(d.location,location.href));return}l=await ae({status:J(d),error:await M(d,{url:c,params:r,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),Ye(l,e)}async function Ze(e,t){const n=new URL(e);n.pathname=ft(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Ot,"1"),n.searchParams.append(Nt,t.map(r=>r?"1":"0").join(""));const a=await xe(n.href);if(!a.ok){let r;throw a.headers.get("content-type")?.includes("application/json")?r=await a.json():a.status===404?r="Not Found":a.status===500&&(r="Internal Error"),new te(a.status,r)}return new Promise(async r=>{const o=new Map,i=a.body.getReader(),s=new TextDecoder;function c(d){return Ut(d,{Promise:g=>new Promise((u,f)=>{o.set(g,{fulfil:u,reject:f})})})}let l="";for(;;){const{done:d,value:g}=await i.read();if(d&&!l)break;for(l+=!g&&l?`
`:s.decode(g,{stream:!0});;){const u=l.indexOf(`
`);if(u===-1)break;const f=JSON.parse(l.slice(0,u));if(l=l.slice(u+1),f.type==="redirect")return r(f);if(f.type==="data")f.nodes?.forEach(h=>{h?.type==="data"&&(h.uses=Qe(h.uses),h.data=c(h.data))}),r(f);else if(f.type==="chunk"){const{id:h,data:p,error:S}=f,E=o.get(h);o.delete(h),S?E.reject(c(S)):E.fulfil(c(p))}}}})}function Qe(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Kt(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function et(e,t,n,a){let r,o;const i=new Promise((c,l)=>{r=c,o=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:a,complete:i},fulfil:r,reject:o}}export{zt as a,qt as g,L as s};
