import{u as v}from"./Bs1R3ejm.js";import{d as _,r as f,G as y,c as e,f as d,h as t,H as a,F as k,Y as C,e as o,t as g,k as h}from"./BzfZUhdA.js";const x={key:0,class:"copied"},B={class:"window"},b={class:"content"},w={key:1,class:"prompt"},T=_({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(l){const i=l,{copy:p}=v(),n=f("init"),c=y(()=>typeof i.content=="string"?[i.content]:i.content),u=m=>{p(c.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(m,s)=>(o(),e("div",{class:"terminal",onClick:u},[a(n)==="copied"?(o(),e("div",x,s[0]||(s[0]=[t("div",{class:"scrim"},null,-1),t("div",{class:"content"}," Copied! ",-1)]))):d("",!0),s[2]||(s[2]=t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),t("div",B,[(o(!0),e(k,null,C(a(c),r=>(o(),e("span",{key:r,class:"line"},[s[1]||(s[1]=t("span",{class:"sign"},"$",-1)),t("span",b,g(r),1)]))),128))]),a(n)!=="copied"?(o(),e("div",w," Click to copy ")):d("",!0)]))}}),S=h(T,[["__scopeId","data-v-f662c293"]]);export{S as default};
