import{r as g,al as G,ak as D,ai as F,K as k,G as M,a5 as K,o as H,a7 as J,d as $,x as Q,c as h,e as A,f as P,i as O,w as U,V as B,T as X,n as L,a4 as Y,k as W,t as Z,h as ee,a3 as te}from"./BTZxoaoe.js";function N(e){return D()?(F(e),!0):!1}function b(e){return typeof e=="function"?e():k(e)}const S=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ne=Object.prototype.toString,oe=e=>ne.call(e)==="[object Object]",C=()=>{},se=ae();function ae(){var e,t;return S&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function ie(e){let t;function s(){return t||(t=e()),t}return s.reset=async()=>{const n=t;t=void 0,n&&await n},s}function re(e,t,s={}){const{immediate:n=!0}=s,i=g(!1);let o=null;function d(){o&&(clearTimeout(o),o=null)}function c(){i.value=!1,d()}function l(...p){d(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...p)},b(t))}return n&&(i.value=!0,S&&l()),N(c),{isPending:G(i),start:l,stop:c}}function w(e){var t;const s=b(e);return(t=s==null?void 0:s.$el)!=null?t:s}const R=S?window:void 0,V=S?window.navigator:void 0;function _(...e){let t,s,n,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,n,i]=e,t=R):[t,s,n,i]=e,!t)return C;Array.isArray(s)||(s=[s]),Array.isArray(n)||(n=[n]);const o=[],d=()=>{o.forEach(u=>u()),o.length=0},c=(u,m,a,r)=>(u.addEventListener(m,a,r),()=>u.removeEventListener(m,a,r)),l=K(()=>[w(t),b(i)],([u,m])=>{if(d(),!u)return;const a=oe(m)?{...m}:m;o.push(...s.flatMap(r=>n.map(v=>c(u,r,v,a))))},{immediate:!0,flush:"post"}),p=()=>{l(),d()};return N(p),p}let T=!1;function ce(e,t,s={}){const{window:n=R,ignore:i=[],capture:o=!0,detectIframe:d=!1}=s;if(!n)return C;se&&!T&&(T=!0,Array.from(n.document.body.children).forEach(a=>a.addEventListener("click",C)),n.document.documentElement.addEventListener("click",C));let c=!0;const l=a=>i.some(r=>{if(typeof r=="string")return Array.from(n.document.querySelectorAll(r)).some(v=>v===a.target||a.composedPath().includes(v));{const v=w(r);return v&&(a.target===v||a.composedPath().includes(v))}}),u=[_(n,"click",a=>{const r=w(e);if(!(!r||r===a.target||a.composedPath().includes(r))){if(a.detail===0&&(c=!l(a)),!c){c=!0;return}t(a)}},{passive:!0,capture:o}),_(n,"pointerdown",a=>{const r=w(e);c=!l(a)&&!!(r&&!a.composedPath().includes(r))},{passive:!0}),d&&_(n,"blur",a=>{setTimeout(()=>{var r;const v=w(e);((r=n.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(v!=null&&v.contains(n.document.activeElement))&&t(a)},0)})].filter(Boolean);return()=>u.forEach(a=>a())}function ue(){const e=g(!1),t=J();return t&&H(()=>{e.value=!0},t),e}function j(e){const t=ue();return M(()=>(t.value,!!e()))}function I(e,t={}){const{controls:s=!1,navigator:n=V}=t,i=j(()=>n&&"permissions"in n);let o;const d=typeof e=="string"?{name:e}:e,c=g(),l=()=>{o&&(c.value=o.state)},p=ie(async()=>{if(i.value){if(!o)try{o=await n.permissions.query(d),_(o,"change",l),l()}catch{c.value="prompt"}return o}});return p(),s?{state:c,isSupported:i,query:p}:c}function le(e={}){const{navigator:t=V,read:s=!1,source:n,copiedDuring:i=1500,legacy:o=!1}=e,d=j(()=>t&&"clipboard"in t),c=I("clipboard-read"),l=I("clipboard-write"),p=M(()=>d.value||o),u=g(""),m=g(!1),a=re(()=>m.value=!1,i);function r(){d.value&&x(c.value)?t.clipboard.readText().then(f=>{u.value=f}):u.value=z()}p.value&&s&&_(["copy","cut"],r);async function v(f=b(n)){p.value&&f!=null&&(d.value&&x(l.value)?await t.clipboard.writeText(f):q(f),u.value=f,m.value=!0,a.start())}function q(f){const y=document.createElement("textarea");y.value=f??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function z(){var f,y,E;return(E=(y=(f=document==null?void 0:document.getSelection)==null?void 0:f.call(document))==null?void 0:y.toString())!=null?E:""}function x(f){return f==="granted"||f==="prompt"}return{isSupported:p,text:u,copied:m,copy:v}}const de={class:"icon-wrapper"},pe=$({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const t=e,s=g(),{copy:n}=le();ce(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:i}=Q(),o=g("init"),d=c=>{n(t.content).then(()=>{o.value="copied"}).catch(l=>{console.warn("Couldn't copy to clipboard!",l)})};return(c,l)=>{const p=Y;return h(),A("button",{ref_key:"copyButtonRef",ref:s,class:L([(e.show||o.value==="copied")&&"show"]),onClick:d},[l[0]||(l[0]=P("span",{class:"sr-only"},"Copy to clipboard",-1)),P("span",de,[O(X,{name:"fade"},{default:U(()=>{var u,m;return[o.value==="copied"?(h(),B(p,{key:0,name:(u=k(i).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),B(p,{key:1,name:(m=k(i).copyButton)==null?void 0:m.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),fe=W(pe,[["__scopeId","data-v-75c1e753"]]),me={key:0,class:"filename"},ve=$({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const t=g(!1);return(s,n)=>{const i=fe;return h(),A("div",{class:L([[`highlight-${e.language}`],"prose-code"]),onMouseenter:n[0]||(n[0]=o=>t.value=!0),onMouseleave:n[1]||(n[1]=o=>t.value=!1)},[e.filename?(h(),A("span",me,Z(e.filename),1)):ee("",!0),te(s.$slots,"default",{},void 0,!0),O(i,{show:t.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),ge=W(ve,[["__scopeId","data-v-8828f2cc"]]);export{ge as default};
