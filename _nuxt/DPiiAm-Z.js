import k from"./RtaVe_MZ.js";import v from"./KGIPr6TO.js";import w from"./CThcwAGY.js";import{u as I}from"./e84pLvaH.js";import{d as A,Y as C,I as S,M as c,c as a,e as r,f as o,h as i,F as g,Z as B,k as e,w as u,p as L,j as N,s as P,$ as V,X as F,l as T}from"./oDg8nPdj.js";import"./BcWussCh.js";const Y=t=>(L("data-v-3078ea1d"),t=t(),N(),t),$={key:0,class:"articles-list"},b={class:"featured"},j={class:"layout"},q={key:1,class:"tour"},z=Y(()=>o("p",null,"Seems like there are no articles yet.",-1)),D=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=C(async()=>I(_.path,async()=>await P(V(_.path)).sort({date:-1}).find(),"$OvzkhduPCd")),s=await s,l(),s),n=S(()=>m.value||[]);return(E,M)=>{var d;const p=k,h=v,f=w;return(d=c(n))!=null&&d.length?(a(),r("div",$,[o("div",b,[i(p,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",j,[(a(!0),r(g,null,B(c(n).slice(1),(y,x)=>(a(),F(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",q,[z,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),K=T(D,[["__scopeId","data-v-3078ea1d"]]);export{K as default};