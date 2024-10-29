import{I as ye,r as R,aQ as F,d as Y,D as y,aY as G,A as H,aZ as Ne,a_ as We,a$ as Je,b0 as oe,b1 as Qe,b2 as ue,o as re,B as he,as as $e,aR as Ge,aS as Ye,aT as Ke,aU as ve,aV as Ze,F as se,aO as Oe,aP as Xe,b3 as xe,b4 as Ce,b as Be,b5 as _e,b6 as X,az as et,b7 as tt,aW as L,P as ke,Q as W,k as Se,S as de,U as x,b8 as Le,aq as Re,X as K,c as p,e as w,f as q,Y as at,b9 as lt,N as z,n as f,M as V,g as ee,t as Q,h as B,ba as nt,bb as it,E as we,G as De,V as ot,bc as ut,bd as rt,W as st,be as dt,bf as ct,H as vt,J as pt,L as D,w as P,bg as te,i as Z,T as ft,K as ge,O as bt,bh as mt,aa as gt,ab as yt,aF as ht,bi as Ot,bj as kt,a9 as M,$ as Ae,bk as ae,R as St,bl as wt,bm as $t}from"./CZPrPKSw.js";import{_ as Ct}from"./DDs9Xh91.js";import{f as At,c as j,a as It,l as Vt,n as Mt,u as Bt,r as Lt,i as Rt}from"./Bkv73LCD.js";import{d as Dt,e as Ft}from"./BHFK9Oc4.js";const Tt=ye,jt={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}};let Ie=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Ve(e){var r,s;let u=(r=e.innerText)!=null?r:"",c=e.cloneNode(!0);if(!(c instanceof HTMLElement))return u;let l=!1;for(let b of c.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))b.remove(),l=!0;let t=l?(s=c.innerText)!=null?s:"":u;return Ie.test(t)&&(t=t.replace(Ie,"")),t}function Et(e){let r=e.getAttribute("aria-label");if(typeof r=="string")return r.trim();let s=e.getAttribute("aria-labelledby");if(s){let u=s.split(" ").map(c=>{let l=document.getElementById(c);if(l){let t=l.getAttribute("aria-label");return typeof t=="string"?t.trim():Ve(l).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return Ve(e).trim()}function zt(e){let r=R(""),s=R("");return()=>{let u=F(e);if(!u)return"";let c=u.innerText;if(r.value===c)return s.value;let l=Et(u).trim().toLowerCase();return r.value=c,s.value=l,l}}function Pt(e,r){return e===r}var Ut=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ut||{}),qt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(qt||{}),Ht=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ht||{});function Nt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Fe=Symbol("ListboxContext");function pe(e){let r=et(Fe,null);if(r===null){let s=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,pe),s}return r}let Wt=Y({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Pt},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:r,attrs:s,emit:u}){let c=R(1),l=R(null),t=R(null),b=R(null),m=R([]),h=R(""),a=R(null),n=R(1);function i(o=v=>v){let v=a.value!==null?m.value[a.value]:null,g=tt(o(m.value.slice()),A=>F(A.dataRef.domRef)),O=v?g.indexOf(v):null;return O===-1&&(O=null),{options:g,activeOptionIndex:O}}let C=y(()=>e.multiple?1:0),[S,$]=Dt(y(()=>e.modelValue),o=>u("update:modelValue",o),y(()=>e.defaultValue)),E=y(()=>S.value===void 0?G(C.value,{1:[],0:void 0}):S.value),I={listboxState:c,value:E,mode:C,compare(o,v){if(typeof e.by=="string"){let g=e.by;return(o==null?void 0:o[g])===(v==null?void 0:v[g])}return e.by(o,v)},orientation:y(()=>e.horizontal?"horizontal":"vertical"),labelRef:l,buttonRef:t,optionsRef:b,disabled:y(()=>e.disabled),options:m,searchQuery:h,activeOptionIndex:a,activationTrigger:n,closeListbox(){e.disabled||c.value!==1&&(c.value=1,a.value=null)},openListbox(){e.disabled||c.value!==0&&(c.value=0)},goToOption(o,v,g){if(e.disabled||c.value===1)return;let O=i(),A=At(o===j.Specific?{focus:j.Specific,id:v}:{focus:o},{resolveItems:()=>O.options,resolveActiveIndex:()=>O.activeOptionIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.disabled});h.value="",a.value=A,n.value=g??1,m.value=O.options},search(o){if(e.disabled||c.value===1)return;let v=h.value!==""?0:1;h.value+=o.toLowerCase();let g=(a.value!==null?m.value.slice(a.value+v).concat(m.value.slice(0,a.value+v)):m.value).find(A=>A.dataRef.textValue.startsWith(h.value)&&!A.dataRef.disabled),O=g?m.value.indexOf(g):-1;O===-1||O===a.value||(a.value=O,n.value=1)},clearSearch(){e.disabled||c.value!==1&&h.value!==""&&(h.value="")},registerOption(o,v){let g=i(O=>[...O,{id:o,dataRef:v}]);m.value=g.options,a.value=g.activeOptionIndex},unregisterOption(o){let v=i(g=>{let O=g.findIndex(A=>A.id===o);return O!==-1&&g.splice(O,1),g});m.value=v.options,a.value=v.activeOptionIndex,n.value=1},theirOnChange(o){e.disabled||$(o)},select(o){e.disabled||$(G(C.value,{0:()=>o,1:()=>{let v=H(I.value.value).slice(),g=H(o),O=v.findIndex(A=>I.compare(g,H(A)));return O===-1?v.push(g):v.splice(O,1),v}}))}};Ne([t,b],(o,v)=>{var g;I.closeListbox(),We(v,Je.Loose)||(o.preventDefault(),(g=F(t))==null||g.focus())},y(()=>c.value===0)),oe(Fe,I),Qe(y(()=>G(c.value,{0:ue.Open,1:ue.Closed})));let U=y(()=>{var o;return(o=F(t))==null?void 0:o.closest("form")});return re(()=>{he([U],()=>{if(!U.value||e.defaultValue===void 0)return;function o(){I.theirOnChange(e.defaultValue)}return U.value.addEventListener("reset",o),()=>{var v;(v=U.value)==null||v.removeEventListener("reset",o)}},{immediate:!0})}),()=>{let{name:o,modelValue:v,disabled:g,form:O,...A}=e,d={open:c.value===0,disabled:g,value:E.value};return $e(se,[...o!=null&&E.value!=null?Ft({[o]:E.value}).map(([T,fe])=>$e(Ge,Ye({features:Ke.Hidden,key:T,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:O,disabled:g,name:T,value:fe}))):[],ve({ourProps:{},theirProps:{...s,...Ze(A,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:d,slots:r,attrs:s,name:"Listbox"})])}}}),Jt=Y({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:r,slots:s,expose:u}){var c;let l=(c=e.id)!=null?c:`headlessui-listbox-button-${Oe()}`,t=pe("ListboxButton");u({el:t.buttonRef,$el:t.buttonRef});function b(n){switch(n.key){case L.Space:case L.Enter:case L.ArrowDown:n.preventDefault(),t.openListbox(),X(()=>{var i;(i=F(t.optionsRef))==null||i.focus({preventScroll:!0}),t.value.value||t.goToOption(j.First)});break;case L.ArrowUp:n.preventDefault(),t.openListbox(),X(()=>{var i;(i=F(t.optionsRef))==null||i.focus({preventScroll:!0}),t.value.value||t.goToOption(j.Last)});break}}function m(n){switch(n.key){case L.Space:n.preventDefault();break}}function h(n){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),X(()=>{var i;return(i=F(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})})):(n.preventDefault(),t.openListbox(),Nt(()=>{var i;return(i=F(t.optionsRef))==null?void 0:i.focus({preventScroll:!0})})))}let a=Xe(y(()=>({as:e.as,type:r.type})),t.buttonRef);return()=>{var n,i;let C={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{...S}=e,$={ref:t.buttonRef,id:l,type:a.value,"aria-haspopup":"listbox","aria-controls":(n=F(t.optionsRef))==null?void 0:n.id,"aria-expanded":t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(i=F(t.labelRef))==null?void 0:i.id,l].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:b,onKeyup:m,onClick:h};return ve({ourProps:$,theirProps:S,slot:C,attrs:r,slots:s,name:"ListboxButton"})}}}),Qt=Y({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:r,slots:s,expose:u}){var c;let l=(c=e.id)!=null?c:`headlessui-listbox-options-${Oe()}`,t=pe("ListboxOptions"),b=R(null);u({el:t.optionsRef,$el:t.optionsRef});function m(n){switch(b.value&&clearTimeout(b.value),n.key){case L.Space:if(t.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),t.search(n.key);case L.Enter:if(n.preventDefault(),n.stopPropagation(),t.activeOptionIndex.value!==null){let i=t.options.value[t.activeOptionIndex.value];t.select(i.dataRef.value)}t.mode.value===0&&(t.closeListbox(),X(()=>{var i;return(i=F(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})}));break;case G(t.orientation.value,{vertical:L.ArrowDown,horizontal:L.ArrowRight}):return n.preventDefault(),n.stopPropagation(),t.goToOption(j.Next);case G(t.orientation.value,{vertical:L.ArrowUp,horizontal:L.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),t.goToOption(j.Previous);case L.Home:case L.PageUp:return n.preventDefault(),n.stopPropagation(),t.goToOption(j.First);case L.End:case L.PageDown:return n.preventDefault(),n.stopPropagation(),t.goToOption(j.Last);case L.Escape:n.preventDefault(),n.stopPropagation(),t.closeListbox(),X(()=>{var i;return(i=F(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})});break;case L.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(t.search(n.key),b.value=setTimeout(()=>t.clearSearch(),350));break}}let h=xe(),a=y(()=>h!==null?(h.value&ue.Open)===ue.Open:t.listboxState.value===0);return()=>{var n,i;let C={open:t.listboxState.value===0},{...S}=e,$={"aria-activedescendant":t.activeOptionIndex.value===null||(n=t.options.value[t.activeOptionIndex.value])==null?void 0:n.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(i=F(t.buttonRef))==null?void 0:i.id,"aria-orientation":t.orientation.value,id:l,onKeydown:m,role:"listbox",tabIndex:0,ref:t.optionsRef};return ve({ourProps:$,theirProps:S,slot:C,attrs:r,slots:s,features:Ce.RenderStrategy|Ce.Static,visible:a.value,name:"ListboxOptions"})}}}),Gt=Y({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:r,attrs:s,expose:u}){var c;let l=(c=e.id)!=null?c:`headlessui-listbox-option-${Oe()}`,t=pe("ListboxOption"),b=R(null);u({el:b,$el:b});let m=y(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===l:!1),h=y(()=>G(t.mode.value,{0:()=>t.compare(H(t.value.value),H(e.value)),1:()=>H(t.value.value).some(o=>t.compare(H(o),H(e.value)))})),a=y(()=>G(t.mode.value,{1:()=>{var o;let v=H(t.value.value);return((o=t.options.value.find(g=>v.some(O=>t.compare(H(O),H(g.dataRef.value)))))==null?void 0:o.id)===l},0:()=>h.value})),n=zt(b),i=y(()=>({disabled:e.disabled,value:e.value,get textValue(){return n()},domRef:b}));re(()=>t.registerOption(l,i)),Be(()=>t.unregisterOption(l)),re(()=>{he([t.listboxState,h],()=>{t.listboxState.value===0&&h.value&&G(t.mode.value,{1:()=>{a.value&&t.goToOption(j.Specific,l)},0:()=>{t.goToOption(j.Specific,l)}})},{immediate:!0})}),_e(()=>{t.listboxState.value===0&&m.value&&t.activationTrigger.value!==0&&X(()=>{var o,v;return(v=(o=F(b))==null?void 0:o.scrollIntoView)==null?void 0:v.call(o,{block:"nearest"})})});function C(o){if(e.disabled)return o.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),X(()=>{var v;return(v=F(t.buttonRef))==null?void 0:v.focus({preventScroll:!0})}))}function S(){if(e.disabled)return t.goToOption(j.Nothing);t.goToOption(j.Specific,l)}let $=It();function E(o){$.update(o)}function I(o){$.wasMoved(o)&&(e.disabled||m.value||t.goToOption(j.Specific,l,0))}function U(o){$.wasMoved(o)&&(e.disabled||m.value&&t.goToOption(j.Nothing))}return()=>{let{disabled:o}=e,v={active:m.value,selected:h.value,disabled:o},{value:g,disabled:O,...A}=e,d={id:l,ref:b,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":h.value,disabled:void 0,onClick:C,onFocus:S,onPointerenter:E,onMouseenter:E,onPointermove:I,onMousemove:I,onPointerleave:U,onMouseleave:U};return ve({ourProps:d,theirProps:A,slot:v,attrs:s,slots:r,name:"ListboxOption"})}}});const Me=ke(W.ui.strategy,W.ui.checkbox,jt),Yt=Y({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>Me.default.color,validator(e){return W.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:s,attrs:u}=de("checkbox",x(e,"ui"),Me,x(e,"class")),{emitFormChange:c,color:l,name:t,inputId:b}=Le(e),m=b.value??Tt(),h=y({get(){return e.modelValue},set(i){r("update:modelValue",i)}}),a=i=>{r("change",i.target.checked),c()},n=y(()=>Re(K(s.value.base,s.value.form,s.value.rounded,s.value.background,s.value.border,l.value&&s.value.ring.replaceAll("{color}",l.value),l.value&&s.value.color.replaceAll("{color}",l.value)),e.inputClass));return{ui:s,attrs:u,toggle:h,inputId:m,name:t,inputClass:n,onChange:a}}}),Kt=["data-n-ids"],Zt=["id","name","required","value","disabled","indeterminate"],Xt=["for"];function xt(e,r,s,u,c,l){return p(),w("div",{class:f(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[q("div",{class:f(e.ui.container)},[at(q("input",z({id:e.inputId,"onUpdate:modelValue":r[0]||(r[0]=t=>e.toggle=t),name:e.name,required:e.required,value:e.value,disabled:e.disabled,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:r[1]||(r[1]=(...t)=>e.onChange&&e.onChange(...t))}),null,16,Zt),[[lt,e.toggle]])],2),e.label||e.$slots.label?(p(),w("div",{key:0,class:f(e.ui.inner)},[q("label",{for:e.inputId,class:f(e.ui.label)},[V(e.$slots,"label",{label:e.label},()=>[ee(Q(e.label),1)]),e.required?(p(),w("span",{key:0,class:f(e.ui.required)},"*",2)):B("",!0)],10,Xt),e.help||e.$slots.help?(p(),w("p",{key:0,class:f(e.ui.help)},[V(e.$slots,"help",{help:e.help},()=>[ee(Q(e.help),1)])],2)):B("",!0)],2)):B("",!0)],10,Kt)}const _t=Se(Yt,[["render",xt]]),N=ke(W.ui.strategy,W.ui.select,nt),ie=ke(W.ui.strategy,W.ui.selectMenu,it),ea=Y({components:{HCombobox:Vt,HComboboxButton:Mt,HComboboxOptions:Bt,HComboboxOption:Lt,HComboboxInput:Rt,HListbox:Wt,HListboxButton:Jt,HListboxOptions:Qt,HListboxOption:Gt,UIcon:we,UAvatar:De},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array,Boolean],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>N.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>N.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>ie.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},searchableLazy:{type:Boolean,default:!1},clearSearchOnClose:{type:Boolean,default:()=>ie.default.clearSearchOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},showCreateOptionWhen:{type:[String,Function],default:()=>ie.default.showCreateOptionWhen},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(N.size).includes(e)}},color:{type:String,default:()=>N.default.color,validator(e){return[...W.ui.colors,...Object.keys(N.color)].includes(e)}},variant:{type:String,default:()=>N.default.variant,validator(e){return[...Object.keys(N.variant),...Object.values(N.color).flatMap(r=>Object.keys(r))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:r,slots:s}){const{ui:u,attrs:c}=de("select",x(e,"ui"),N,x(e,"class")),{ui:l}=de("selectMenu",x(e,"uiMenu"),ie),t=y(()=>ot({},e.popper,l.value.popper)),[b,m]=ut(t.value),{size:h,rounded:a}=rt({ui:u,props:e}),{emitFormBlur:n,emitFormChange:i,inputId:C,color:S,size:$,name:E}=Le(e,N),I=y(()=>h.value??$.value),U=R(""),o=y({get(){return e.query??U.value},set(k){U.value=k,r("update:query",k)}}),v=y(()=>e.multiple?!Array.isArray(e.modelValue)||!e.modelValue.length?[]:e.valueAttribute?_.value.filter(k=>e.modelValue.includes(k[e.valueAttribute])):_.value.filter(k=>e.modelValue.includes(k)):e.valueAttribute?_.value.find(k=>k[e.valueAttribute]===e.modelValue):_.value.find(k=>k===e.modelValue)),g=y(()=>{var k;return e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length?`${v.value.length} selected`:null:e.modelValue!==void 0&&e.modelValue!==null?e.valueAttribute?((k=v.value)==null?void 0:k[e.optionAttribute])??null:["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]:null}),O=y(()=>{var J,ne;const k=((ne=(J=u.value.color)==null?void 0:J[S.value])==null?void 0:ne[e.variant])||u.value.variant[e.variant];return Re(K(u.value.base,l.value.select,a.value,u.value.size[I.value],u.value.gap[I.value],e.padded?u.value.padding[I.value]:"p-0",k==null?void 0:k.replaceAll("{color}",S.value),(A.value||s.leading)&&u.value.leading.padding[I.value],(d.value||s.trailing)&&u.value.trailing.padding[I.value]),e.placeholder&&(!e.modelValue||Array.isArray(e.modelValue)&&!e.modelValue.length)&&u.value.placeholder,e.selectClass)}),A=y(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),d=y(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),T=y(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),fe=y(()=>e.loading&&!A.value?e.loadingIcon:e.trailingIcon||e.icon),Te=y(()=>K(u.value.icon.leading.wrapper,u.value.icon.leading.pointer,u.value.icon.leading.padding[I.value])),je=y(()=>K(u.value.icon.base,S.value&&W.ui.colors.includes(S.value)&&u.value.icon.color.replaceAll("{color}",S.value),u.value.icon.size[I.value],e.loading&&u.value.icon.loading)),Ee=y(()=>K(u.value.icon.trailing.wrapper,u.value.icon.trailing.pointer,u.value.icon.trailing.padding[I.value])),ze=y(()=>K(u.value.icon.base,S.value&&W.ui.colors.includes(S.value)&&u.value.icon.color.replaceAll("{color}",S.value),u.value.icon.size[I.value],e.loading&&!A.value&&u.value.icon.loading)),be=e.searchable&&typeof e.searchable=="function"?st(e.searchable,e.debounce):void 0,_=dt(async()=>be?await be(o.value):e.options||[],[],{lazy:e.searchableLazy}),le=y(()=>!o.value||be?_.value:_.value.filter(k=>{var J;return((J=e.searchAttributes)!=null&&J.length?e.searchAttributes:[e.optionAttribute]).some(ne=>{if(["string","number"].includes(typeof k))return String(k).search(new RegExp(o.value,"i"))!==-1;const me=ct(k,ne);return me!=null&&String(me).search(new RegExp(o.value,"i"))!==-1})})),Pe=y(()=>o.value===""||e.showCreateOptionWhen==="empty"&&le.value.length||e.showCreateOptionWhen==="always"&&le.value.find(J=>["string","number"].includes(typeof J)?J===o.value:J[e.optionAttribute]===o.value)||typeof e.showCreateOptionWhen=="function"&&!e.showCreateOptionWhen(o.value,le.value)?null:["string","number"].includes(typeof e.modelValue)?o.value:{[e.optionAttribute]:o.value});function Ue(){e.clearSearchOnClose&&(o.value="")}he(m,k=>{k?r("open"):(Ue(),r("close"),n())});function qe(k){r("update:modelValue",k),r("change",k),i()}function He(k){o.value=k.target.value}return vt(()=>ye()),{ui:u,uiMenu:l,attrs:c,name:E,inputId:C,popper:t,trigger:b,container:m,selected:v,label:g,isLeading:A,isTrailing:d,selectClass:O,leadingIconName:T,leadingIconClass:je,leadingWrapperIconClass:Te,trailingIconName:fe,trailingIconClass:ze,trailingWrapperIconClass:Ee,filteredOptions:le,createOption:Pe,query:o,onUpdate:qe,onQueryChange:He}}}),ta=["value","required"],aa=["id","disabled"],la={class:"truncate"};function na(e,r,s,u,c,l){const t=we,b=pt("HComboboxInput"),m=De;return p(),D(te(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.multiple?Array.isArray(e.modelValue)?e.modelValue:[]:e.modelValue,multiple:e.multiple,disabled:e.disabled,as:"div",class:f(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:P(({open:h})=>[e.required?(p(),w("input",{key:0,value:e.modelValue,required:e.required,class:f(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,ta)):B("",!0),(p(),D(te(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:f(e.uiMenu.trigger)},{default:P(()=>[V(e.$slots,"default",{open:h,disabled:e.disabled,loading:e.loading},()=>[q("button",z({id:e.inputId,class:e.selectClass,disabled:e.disabled,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(p(),w("span",{key:0,class:f(e.leadingWrapperIconClass)},[V(e.$slots,"leading",{selected:e.selected,disabled:e.disabled,loading:e.loading},()=>[Z(t,{name:e.leadingIconName,class:f(e.leadingIconClass)},null,8,["name","class"])])],2)):B("",!0),V(e.$slots,"label",{selected:e.selected},()=>[e.label?(p(),w("span",{key:0,class:f(e.uiMenu.label)},Q(e.label),3)):(p(),w("span",{key:1,class:f(e.uiMenu.label)},Q(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(p(),w("span",{key:1,class:f(e.trailingWrapperIconClass)},[V(e.$slots,"trailing",{selected:e.selected,disabled:e.disabled,loading:e.loading},()=>[Z(t,{name:e.trailingIconName,class:f(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):B("",!0)],16,aa)])]),_:2},1032,["class"])),h?(p(),w("div",{key:1,ref:"container",class:f([e.uiMenu.container,e.uiMenu.width])},[Z(ft,z({appear:""},e.uiMenu.transition),{default:P(()=>[q("div",null,[e.popper.arrow?(p(),w("div",{key:0,"data-popper-arrow":"",class:f(Object.values(e.uiMenu.arrow))},null,2)):B("",!0),(p(),D(te(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:f([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:P(()=>{var a,n;return[e.searchable?(p(),D(b,{key:0,"display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:f(e.uiMenu.input),onChange:e.onQueryChange},null,8,["display-value","placeholder","class","onChange"])):B("",!0),(p(!0),w(se,null,ge(e.filteredOptions,(i,C)=>(p(),D(te(e.searchable?"HComboboxOption":"HListboxOption"),{key:C,as:"template",value:e.valueAttribute?i[e.valueAttribute]:i,disabled:i.disabled},{default:P(({active:S,selected:$,disabled:E})=>[q("li",{class:f([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,S?e.uiMenu.option.active:e.uiMenu.option.inactive,$&&e.uiMenu.option.selected,E&&e.uiMenu.option.disabled])},[q("div",{class:f(e.uiMenu.option.container)},[V(e.$slots,"option",{option:i,active:S,selected:$},()=>[i.icon?(p(),D(t,{key:0,name:i.icon,class:f([e.uiMenu.option.icon.base,S?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,i.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):i.avatar?(p(),D(m,z({key:1,ref_for:!0},{size:e.uiMenu.option.avatar.size,...i.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):i.chip?(p(),w("span",{key:2,class:f(e.uiMenu.option.chip.base),style:bt({background:`#${i.chip}`})},null,6)):B("",!0),q("span",la,Q(["string","number"].includes(typeof i)?i:i[e.optionAttribute]),1)])],2),$?(p(),w("span",{key:0,class:f([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[Z(t,{name:e.selectedIcon,class:f(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):B("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.createOption?(p(),D(te(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.createOption,as:"template"},{default:P(({active:i,selected:C})=>[q("li",{class:f([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,i?e.uiMenu.option.active:e.uiMenu.option.inactive])},[q("div",{class:f(e.uiMenu.option.container)},[V(e.$slots,"option-create",{option:e.createOption,active:i,selected:C},()=>[q("span",{class:f(e.uiMenu.option.create)},'Create "'+Q(e.createOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!((a=e.filteredOptions)!=null&&a.length)?(p(),w("p",{key:2,class:f(e.uiMenu.option.empty)},[V(e.$slots,"option-empty",{query:e.query},()=>[ee(' No results for "'+Q(e.query)+'". ',1)])],2)):(n=e.filteredOptions)!=null&&n.length?B("",!0):(p(),w("p",{key:3,class:f(e.uiMenu.empty)},[V(e.$slots,"empty",{query:e.query},()=>[r[0]||(r[0]=ee(" No options. "))])],2))]}),_:3},8,["class"]))])]),_:3},16)],2)):B("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const ia=Se(ea,[["render",na]]);class ce extends Error{constructor(r){super(r),this.message=r,Object.setPrototypeOf(this,ce.prototype)}}const oa=Y({props:{schema:{type:[Object,Function],default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:r,emit:s}){const u=ye(),c=Ot(`form-${u}`);re(()=>{c.on(async a=>{var n;a.type!=="submit"&&((n=e.validateOn)!=null&&n.includes(a.type))&&await m(a.path,{silent:!0})})}),Be(()=>{c.reset()});const l=R([]);oe("form-errors",l),oe("form-events",c);const t=R({});oe("form-inputs",t);async function b(){let a=await e.validate(e.state);if(e.schema)if(da(e.schema))a=a.concat(await ca(e.state,e.schema));else if(ua(e.schema))a=a.concat(await sa(e.state,e.schema));else if(va(e.schema))a=a.concat(await fa(e.state,e.schema));else if(ba(e.schema))a=a.concat(await ma(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return a}async function m(a,n={silent:!1}){let i=a;if(a&&!Array.isArray(a)&&(i=[a]),i){const C=l.value.filter($=>!i.includes($.path)),S=(await b()).filter($=>i.includes($.path));l.value=C.concat(S)}else l.value=await b();if(l.value.length>0){if(n.silent)return!1;throw new ce(`Form validation failed: ${JSON.stringify(l.value,null,2)}`)}return e.state}async function h(a){var i;const n=a;try{(i=e.validateOn)!=null&&i.includes("submit")&&await m(),n.data=e.state,s("submit",n)}catch(C){if(!(C instanceof ce))throw C;const S={...n,errors:l.value.map($=>({...$,id:t.value[$.path]}))};s("error",S)}}return r({validate:m,errors:l,setErrors(a,n){n?l.value=l.value.filter(i=>i.path!==n).concat(a):l.value=a},async submit(){await h(new Event("submit"))},getErrors(a){return a?l.value.filter(n=>n.path===a):l.value},clear(a){a?l.value=l.value.filter(n=>n.path!==a):l.value=[]}}),{onSubmit:h,errors:mt(l)}}});function ua(e){return e.validate&&e.__isYupSchema__}function ra(e){return e.inner!==void 0}async function sa(e,r){try{return await r.validate(e,{abortEarly:!1}),[]}catch(s){if(ra(s))return s.inner.map(u=>({path:u.path??"",message:u.message}));throw s}}function da(e){return e.parse!==void 0}async function ca(e,r){const s=await r.safeParseAsync(e);return s.success===!1?s.error.issues.map(u=>({path:u.path.join("."),message:u.message})):[]}function va(e){return e.validateAsync!==void 0&&e.id!==void 0}function pa(e){return e.isJoi===!0}async function fa(e,r){try{return await r.validateAsync(e,{abortEarly:!1}),[]}catch(s){if(pa(s))return s.details.map(u=>({path:u.path.join("."),message:u.message}));throw s}}function ba(e){return"_parse"in e||"_run"in e||typeof e=="function"&&"schema"in e}async function ma(e,r){var u;return((u=(await("_parse"in r?r._parse(e):"_run"in r?r._run({typed:!1,value:e},{}):r(e))).issues)==null?void 0:u.map(c=>{var l;return{path:((l=c.path)==null?void 0:l.map(t=>t.key).join("."))||"",message:c.message}}))||[]}function ga(e,r,s,u,c,l){return p(),w("form",{onSubmit:r[0]||(r[0]=ht((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"]))},[V(e.$slots,"default",gt(yt({errors:e.errors})))],32)}const ya=Se(oa,[["render",ga]]),wa=Y({inheritAttrs:!1,__name:"AuthForm",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},align:{type:String,default:"bottom"},loading:{type:Boolean,default:!1},fields:{type:Array,default:()=>[]},providers:{type:Array,default:()=>[]},submitButton:{type:Object,default:()=>({})},passwordToggle:{type:Object,default:()=>({})},schema:{type:Object,default:void 0},validate:{type:[Function,Array],default:void 0},validateOn:{type:Array,default:()=>["submit"]},divider:{type:String,default:"or"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["submit"],setup(e,{expose:r}){const s=e,u=y(()=>({wrapper:"w-full max-w-sm space-y-6",base:"",container:K("gap-y-6 flex flex-col",s.align==="top"&&"flex-col-reverse"),title:"text-2xl text-gray-900 dark:text-white font-bold",description:"text-gray-500 dark:text-gray-400 mt-1",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},providers:"space-y-3",form:"space-y-6",footer:"text-sm text-gray-500 dark:text-gray-400 mt-2",passwordToggle:{showIcon:"i-heroicons-eye",hideIcon:"i-heroicons-eye-slash"},default:{submitButton:{label:"Continue"},passwordToggle:{color:"gray",variant:"link"}}})),c=R(),{ui:l,attrs:t}=de("auth.form",x(s,"ui"),u,x(s,"class"),!0),b=kt(Object.values(s.fields).reduce((a,{name:n,value:i})=>(a[n]=i,a),{})),m=R(!1);function h(){m.value=!m.value}return r({formRef:c,state:b}),(a,n)=>{var v,g,O,A;const i=we,C=St,S=Ct,$=_t,E=ia,I=wt,U=$t,o=ya;return p(),w("div",z({class:M(l).wrapper},M(t)),[e.icon||a.$slots.icon||e.title||a.$slots.title||e.description||a.$slots.description?(p(),w("div",{key:0,class:f(M(l).base)},[e.icon||a.$slots.icon?(p(),w("div",{key:0,class:f(M(l).icon.wrapper)},[V(a.$slots,"icon",{},()=>[Z(i,{name:e.icon,class:f(M(l).icon.base)},null,8,["name","class"])])],2)):B("",!0),e.title||a.$slots.title?(p(),w("div",{key:1,class:f(M(l).title)},[V(a.$slots,"title",{},()=>[ee(Q(e.title),1)])],2)):B("",!0),e.description||a.$slots.description?(p(),w("div",{key:2,class:f(M(l).description)},[V(a.$slots,"description",{},()=>[ee(Q(e.description),1)])],2)):B("",!0)],2)):B("",!0),q("div",{class:f(M(l).container)},[(v=e.providers)!=null&&v.length?(p(),w("div",{key:0,class:f(M(l).providers)},[(p(!0),w(se,null,ge(e.providers,(d,T)=>(p(),D(C,z({key:T,ref_for:!0},d,{block:"",onClick:d.click}),null,16,["onClick"]))),128))],2)):B("",!0),(g=e.providers)!=null&&g.length&&((O=e.fields)!=null&&O.length)?(p(),D(S,{key:1,label:e.divider},null,8,["label"])):B("",!0),(A=e.fields)!=null&&A.length?(p(),D(o,{key:2,ref_key:"formRef",ref:c,state:b,schema:e.schema,validate:e.validate,"validate-on":e.validateOn,class:f(M(l).form),onSubmit:n[0]||(n[0]=d=>a.$emit("submit",d.data))},{default:P(()=>[(p(!0),w(se,null,ge(e.fields,d=>(p(),D(U,{key:d.name,label:d.type==="checkbox"?"":d.label??"",description:d.description,help:d.help,hint:d.hint,name:d.name,size:d.size},Ae({default:P(()=>[V(a.$slots,`${d.name}-field`,z({ref_for:!0},{state:b,field:M(ae)(d,["description","help","hint","size"])}),()=>[d.type==="checkbox"?(p(),D($,z({key:0,modelValue:b[d.name],"onUpdate:modelValue":T=>b[d.name]=T,ref_for:!0},M(ae)(d,["description","help","hint","size"])),null,16,["modelValue","onUpdate:modelValue"])):d.type==="select"?(p(),D(E,z({key:1,modelValue:b[d.name],"onUpdate:modelValue":T=>b[d.name]=T,ref_for:!0},M(ae)(d,["description","help","hint","size"])),null,16,["modelValue","onUpdate:modelValue"])):d.type==="password"?(p(),D(I,z({key:2,modelValue:b[d.name],"onUpdate:modelValue":T=>b[d.name]=T,type:m.value?"text":"password",ref_for:!0},M(ae)(d,["label","description","help","hint","size","type"]),{ui:{icon:{trailing:{pointer:""}}}}),Ae({_:2},[e.passwordToggle?{name:"trailing",fn:P(()=>[Z(C,z({ref_for:!0},{...M(l).default.passwordToggle,...e.passwordToggle},{icon:m.value?M(l).passwordToggle.hideIcon:M(l).passwordToggle.showIcon,padded:!1,onClick:h}),null,16,["icon"])]),key:"0"}:void 0]),1040,["modelValue","onUpdate:modelValue","type"])):(p(),D(I,z({key:3,modelValue:b[d.name],"onUpdate:modelValue":T=>b[d.name]=T,ref_for:!0},M(ae)(d,["label","description","help","hint","size"])),null,16,["modelValue","onUpdate:modelValue"]))])]),_:2},[a.$slots[`${d.name}-label`]?{name:"label",fn:P(()=>[V(a.$slots,`${d.name}-label`)]),key:"0"}:void 0,a.$slots[`${d.name}-description`]?{name:"description",fn:P(()=>[V(a.$slots,`${d.name}-description`)]),key:"1"}:void 0,a.$slots[`${d.name}-hint`]?{name:"hint",fn:P(()=>[V(a.$slots,`${d.name}-hint`)]),key:"2"}:void 0,a.$slots[`${d.name}-help`]?{name:"help",fn:P(()=>[V(a.$slots,`${d.name}-help`)]),key:"3"}:void 0]),1032,["label","description","help","hint","name","size"]))),128)),V(a.$slots,"validation"),Z(C,z({type:"submit",block:"",loading:e.loading},{...M(l).default.submitButton,...e.submitButton}),null,16,["loading"])]),_:3},8,["state","schema","validate","validate-on","class"])):B("",!0)],2),a.$slots.footer?(p(),w("div",{key:1,class:f(M(l).footer)},[V(a.$slots,"footer")],2)):B("",!0)],16)}}});export{wa as _};