import P from"./Bbwjhtb2.js";import k from"./C9-VUXU3.js";import b from"./Bu8ZAzcB.js";import{d,u as L,D as g,P as R,s as x,E as S,G as B,r as C,a as N,H as m,I as T,J as j,K as p,L as H,M as O,S as A,T as D,N as E,O as w,Q as u,p as $,R as I,U as M,e as V,i as y,w as _,c as f,V as v}from"./C5B-LcjU.js";import"./C2_Zs9zb.js";import"./76o_WpOd.js";const F=d({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,o){return()=>p(m[t.name],t.layoutProps,o.slots)}}),G=d({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,o){const e=L(),n=g(R),s=n===x()?S():n,r=B(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in m)&&t.fallback&&(a=u(t.fallback)),a}),l=C();o.expose({layoutRef:l});const i=e.deferHydration();if(e.isHydrating){const a=e.hooks.hookOnce("app:error",i);N().beforeEach(a)}return()=>{const a=r.value&&r.value in m,c=s.meta.layoutTransition??T;return j(D,a&&c,{default:()=>p(A,{suspensible:!0,onResolve:()=>{O(i)}},{default:()=>p(J,{layoutProps:H(o.attrs,{ref:l}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!c},o.slots)})}).default()}}}),J=d({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,o){const e=t.name;return t.shouldProvide&&E(w,{isCurrent:n=>e===(n.meta.layout??"default")}),()=>{var n,s;return!e||typeof e=="string"&&!(e in m)?(s=(n=o.slots).default)==null?void 0:s.call(n):p(F,{key:e,layoutProps:t.layoutProps,name:e},o.slots)}}}),K={class:"document-driven-page"},Y=d({__name:"document-driven",setup(t){const{contentHead:o}=$().public.content,{page:e,layout:n}=I();return e.value,o&&M(e),(s,r)=>{const l=P,i=k,a=b,c=G;return f(),V("div",K,[y(c,{name:u(n)||"default"},{default:_(()=>[u(e)?(f(),v(i,{key:u(e)._id,value:u(e)},{empty:_(({value:h})=>[y(l,{value:h},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{Y as default};