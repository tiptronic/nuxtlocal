import{d as g,R as N,s as V,x as D,r as I,B as A,G as P,c as a,e as s,i as n,w as b,K as e,f as c,t as i,h as l,a3 as R,ax as S,C as $,g as j,a4 as E,k as G}from"./BTZxoaoe.js";import H from"./T0oogvD2.js";import{f as K}from"./BcWussCh.js";const L={key:0,class:"title"},M=["datetime"],q={class:"prose"},z={key:0,class:"back-to-top"},F=g({__name:"article",setup(J){const{page:o}=N(),x=V(),r=D().alpine,p=I(null);o.value&&o.value.cover&&A({meta:[{property:"og:image",content:o.value.cover}]});const w=P(()=>{const t=x.path.split("/");return t.pop(),t.join("/")}),y=()=>{var t;(t=p.value)==null||t.scrollIntoView({behavior:"smooth"})};return(t,_)=>{var u,d,f;const m=E,B=$,C=H;return a(),s("article",{ref_key:"article",ref:p},[n(B,{to:e(w),class:"back"},{default:b(()=>[n(m,{name:"ph:arrow-left"}),_[0]||(_[0]=c("span",null," Back ",-1))]),_:1},8,["to"]),c("header",null,[(u=e(o))!=null&&u.title?(a(),s("h1",L,i(e(o).title),1)):l("",!0),(d=e(o))!=null&&d.date?(a(),s("time",{key:1,datetime:e(o).date},i(("formatDate"in t?t.formatDate:e(K))(e(o).date)),9,M)):l("",!0)]),c("div",q,[R(t.$slots,"default",{},void 0,!0),(f=e(r))!=null&&f.backToTop?(a(),s("div",z,[n(C,{onClick:S(y,["prevent","stop"])},{default:b(()=>{var k,h,v,T;return[j(i(((h=(k=e(r))==null?void 0:k.backToTop)==null?void 0:h.text)||"Back to top")+" ",1),n(m,{name:((T=(v=e(r))==null?void 0:v.backToTop)==null?void 0:T.icon)||"material-symbols:arrow-upward"},null,8,["name"])]}),_:1})])):l("",!0)])],512)}}}),W=G(F,[["__scopeId","data-v-87697b94"]]);export{W as default};
