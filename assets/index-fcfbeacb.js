import{bj as u,w as d}from"./index.js";import{d as r,f as n,o as p,Z as o,_ as f,N as m,a8 as _,a9 as i,l as k,u as s,$ as x,a0 as C}from"./vue-ea98dac5.js";import{P as O}from"./index-2e690c94.js";import"./antd-c2e94c83.js";import"./useContentViewHeight-2c8d1d9b.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-3eb95ecd.js";import"./isNumber-f0336cfd.js";const h=r({__name:"ClickOutSide",emits:["mounted","clickOutside"],setup(c,{emit:e}){const t=n(null);return u(t,()=>{e("clickOutside")}),p(()=>{e("mounted")}),(a,l)=>(o(),f("div",{ref_key:"wrap",ref:t},[m(a.$slots,"default")],512))}}),w=d(h),I=r({__name:"index",setup(c){const e=n("Click");function t(){e.value="Click Out Side"}function a(){e.value="Click Inner"}return(l,v)=>(o(),_(s(O),{title:"点内外部触发事件"},{default:i(()=>[k(s(w),{onClickOutside:t,class:"flex justify-center"},{default:i(()=>[x("div",{onClick:a,class:"flex items-center justify-center w-full h-300px border-10px bg-blue-500 text-white text-24px"},C(e.value),1)]),_:1})]),_:1}))}});export{I as default};
