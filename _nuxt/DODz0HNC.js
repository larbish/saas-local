import{_ as w,a as x}from"./gcH1MiIu.js";import B from"./C_owBPxw.js";import{_ as P,a as S}from"./Cv3ZxqBN.js";import{d as U,s as D,af as d,ag as H,ah as R,D as T,a9 as t,c as r,L as p,$ as b,w as c,h as l,aj as m,aC as q,an as A,i,e as E,q as f,al as M}from"./Dhe2OiAM.js";import"./UkcLEOq3.js";import"./Dnd51l0P.js";const N={key:1},J=U({__name:"[...slug]",async setup(V){let a,o;const s=D(),{data:e}=([a,o]=d(()=>m(s.path,()=>f(s.path).findOne(),"$BiR4XG95H5")),a=await a,o(),a);if(!e.value)throw H({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:u}=([a,o]=d(()=>m(`${s.path}-surround`,()=>f("/docs").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(M(s.path)),{default:()=>[]})),a=await a,o(),a);R({title:e.value.title,ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description});const h=T(()=>q(e.value));return(j,G)=>{const g=w,k=B,y=P,v=x,C=S,$=A;return t(e)?(r(),p($,{key:0},b({default:c(()=>[i(g,{title:t(e).title,description:t(e).description,links:t(e).links,headline:t(h)},null,8,["title","description","links","headline"]),i(v,{prose:""},{default:c(()=>{var n;return[t(e).body?(r(),p(k,{key:0,value:t(e)},null,8,["value"])):l("",!0),(n=t(u))!=null&&n.length?(r(),E("hr",N)):l("",!0),i(y,{surround:t(u)},null,8,["surround"])]}),_:1})]),_:2},[t(e).toc!==!1?{name:"right",fn:c(()=>{var n,_;return[i(C,{links:(_=(n=t(e).body)==null?void 0:n.toc)==null?void 0:_.links},null,8,["links"])]}),key:"0"}:void 0]),1024)):l("",!0)}}});export{J as default};
