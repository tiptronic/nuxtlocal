import{d,ay as _,z as x,I as o,c as z,e as f,a2 as I,M as a,l as S}from"./oDg8nPdj.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;_(s=>({d063b23c:a(m)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const n=l,p=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(z(),f("span",{style:I({width:a(c),height:a(c)})},null,4))}}),b=S(y,[["__scopeId","data-v-4e1022b0"]]);export{b as default};