import{d as n,D as o,bM as c,bA as h,p,ai as l,c as u,L as d,a9 as a,bg as f}from"./BI090OCk.js";import{_ as m}from"./BvvOD7J0.js";const b=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=c(h(p().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return l(e,t.src)}return t.src});return(s,e)=>(u(),d(f(a(m)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{b as default};