import{h as m,e as l}from"./index.js";import{b as c}from"./index-9f7a614d.js";import{d,a7 as f,Z as r,_ as o,F as u,aa as _,a1 as a,af as C,l as k}from"./vue-ea98dac5.js";import{ar as h}from"./antd-c2e94c83.js";import"./uniq-e2f49495.js";import"./isBoolean-9388e2d6.js";import"./index-8eca3b28.js";import"./useContentViewHeight-2c8d1d9b.js";import"./useWindowSizeFn-844b46eb.js";import"./uniqBy-3d1a97d8.js";import"./get-3d19de2f.js";import"./useSortable-f230544c.js";import"./index-24e46776.js";import"./isNumber-f0336cfd.js";import"./lock-20c67b64.js";const v=d({name:"ThemeColorPicker",components:{CheckOutlined:h},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:n}=m("setting-theme-picker");function s(i){e.event&&c(e.event,i)}return{prefixCls:n,handleClick:s}}});const y=["onClick"];function $(e,n,s,i,g,b){const p=f("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(u,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:C({background:t})},[k(p)],14,y))),128))],2)}const j=l(v,[["render",$]]);export{j as default};
