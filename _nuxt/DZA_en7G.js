import{u as m,M as c,I as p,d as i,aa as u,r as l,N as e,l as d}from"./oDg8nPdj.js";import{u as f}from"./e84pLvaH.js";import y from"./DDrA0PRC.js";import g from"./BI6iSA5U.js";import"./BU9T_h2r.js";import"./kGO6xd0a.js";import"./vD-Cn2EZ.js";import"./CThcwAGY.js";import"./EIrCEyDq.js";import"./DMH13HQT.js";import"./2ETV-d1z.js";import"./DTQJrViW.js";import"./0M3istyu.js";import"./DvHFYjzh.js";import"./BtdYUP0e.js";import"./DA8a228S.js";async function h(o){m();const t=c(o);{const{data:n}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=d(_,[["__scopeId","data-v-b1beaf7b"]]);export{E as default};