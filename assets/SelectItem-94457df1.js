import{h as i,e as l}from"./index.js";import{b as r}from"./index-9f7a614d.js";import{d as p,c as m,a7 as d,Z as c,_ as u,$ as f,a0 as g,l as _,ac as b,a1 as C}from"./vue-ea98dac5.js";import{r as h}from"./antd-c2e94c83.js";import"./uniq-e2f49495.js";import"./isBoolean-9388e2d6.js";import"./index-8eca3b28.js";import"./useContentViewHeight-2c8d1d9b.js";import"./useWindowSizeFn-844b46eb.js";import"./uniqBy-3d1a97d8.js";import"./get-3d19de2f.js";import"./useSortable-f230544c.js";import"./index-24e46776.js";import"./isNumber-f0336cfd.js";import"./lock-20c67b64.js";const y=p({name:"SelectItem",components:{Select:h},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=i("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});return{prefixCls:t,handleChange:n=>{e.event&&r(e.event,n)},getBindValue:a}}});function S(e,t,a,s,n,v){const o=d("Select");return c(),u("div",{class:C(e.prefixCls)},[f("span",null,g(e.title),1),_(o,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}const w=l(y,[["render",S],["__scopeId","data-v-5dab0529"]]);export{w as default};
