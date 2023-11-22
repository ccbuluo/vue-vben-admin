import{_ as i}from"./index-d9c64694.js";import{t as o,a as u,b as D}from"./data-5068b1ab.js";import{P as h}from"./index-2e690c94.js";import{R as g,q as n,a5 as b,ay as k}from"./antd-c2e94c83.js";import{d as N,Z as x,a8 as C,a9 as a,l as t,u as e,E as f,a0 as c,m as d}from"./vue-ea98dac5.js";import"./index.js";import"./useContextMenu-eb0dfce9.js";import"./get-3d19de2f.js";import"./isBoolean-9388e2d6.js";import"./useContentViewHeight-2c8d1d9b.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-3eb95ecd.js";import"./isNumber-f0336cfd.js";const W=N({__name:"EditTree",setup(y){function s(r){const p=[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}];return new Promise(l=>{l(p)})}const m=[{render:r=>d(b,{class:"ml-2",onClick:()=>{}})},{render:()=>d(k)}];function _({level:r}){return r===1?"ion:git-compare-outline":r===2?"ion:home":r===3?"ion:airplane":""}return(r,p)=>(x(),C(e(h),{title:"Tree函数操作示例"},{default:a(()=>[t(e(g),{gutter:[16,16]},{default:a(()=>[t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"右侧操作按钮/自定义图标",helpMessage:"帮助信息",treeData:e(o),actionList:m,renderIcon:_},null,8,["treeData"])]),_:1}),t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"右键菜单",treeData:e(o),beforeRightClick:s},null,8,["treeData"])]),_:1}),t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"工具栏使用",toolbar:"",checkable:"",search:"",treeData:e(o),beforeRightClick:s},null,8,["treeData"])]),_:1}),t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"没有fieldNames，插槽有效",helpMessage:"正确的示例",treeData:e(u)},{title:a(l=>[f(" 插槽："+c(l.name),1)]),_:1},8,["treeData"])]),_:1}),t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"有fieldNames后，插槽失效",helpMessage:"错误的示例, 应该显示插槽的内容才对",fieldNames:{key:"id",title:"name"},treeData:e(D)},{title:a(l=>[f(" 插槽："+c(l.title),1)]),_:1},8,["treeData"])]),_:1}),t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"有fieldNames后，actionList失效",helpMessage:"错误的示例，应该在鼠标移上去时，显示新增和删除按钮才对",treeData:e(u),actionList:m,fieldNames:{key:"key",title:"name"}},null,8,["treeData"])]),_:1})]),_:1})]),_:1}))}});export{W as default};
