import{h as i,e as r}from"./index.js";import{d as l,a7 as c,Z as s,_ as a,F as d,aa as _,a8 as u,a9 as f,$ as n,a1 as o,a2 as m,a3 as y}from"./vue-ea98dac5.js";import{T as C}from"./antd-c2e94c83.js";const h=l({name:"MenuTypePicker",components:{Tooltip:C},props:{menuTypeList:{type:Array,default:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=i("setting-menu-type-picker");return{prefixCls:e}}});const k=e=>(m("data-v-e25c4abd"),e=e(),y(),e),v=["onClick"],$=k(()=>n("div",{class:"mix-sidebar"},null,-1)),T=[$];function b(e,g,x,B,I,S){const p=c("Tooltip");return s(),a("div",{class:o(e.prefixCls)},[(s(!0),a(d,null,_(e.menuTypeList||[],t=>(s(),u(p,{key:t.title,title:t.title,placement:"bottom"},{default:f(()=>[n("div",{onClick:F=>e.handler(t),class:o([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},T,10,v)]),_:2},1032,["title"]))),128))],2)}const z=r(h,[["render",b],["__scopeId","data-v-e25c4abd"]]);export{z as default};
