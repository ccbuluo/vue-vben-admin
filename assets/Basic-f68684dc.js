import{_ as b}from"./BasicTable.vue_vue_type_script_setup_true_lang-a11877c9.js";import"./TableImg.vue_vue_type_style_index_0_lang-6c16f22c.js";import"./componentMap-e88eaca2.js";import{getBasicData as h,getBasicColumns as k}from"./tableData-eabba52f.js";import{d as B,f as t,a7 as S,Z as z,_ as x,l as e,a9 as o,E as p,a0 as s,u as m}from"./vue-ea98dac5.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-9ab2b52b.js";import"./FormItem.vue_vue_type_script_lang-461cbd5e.js";import"./index.js";import"./antd-c2e94c83.js";import"./helper-ec539efd.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./BasicForm.vue_vue_type_style_index_0_lang-77669a69.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-ee2d8144.js";import"./useWindowSizeFn-844b46eb.js";import"./useForm-3492eae0.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-5129e933.js";import"./useFormItem-1ece48e0.js";import"./useSortable-f230544c.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-8518e10f.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-735f48cd.js";import"./copyTextToClipboard-7819541c.js";import"./index-d2e6a0c2.js";import"./select-10be400c.js";const R={class:"p-4"},pt=B({__name:"Basic",setup(T){const a=t(!1),l=t(!1),i=t(!0),r=t(!0),u=t(!1),c=k(),d=h();function g(){a.value=!a.value}function f(){i.value=!i.value}function _(){l.value=!0,setTimeout(()=>{l.value=!1,u.value={pageSize:20}},3e3)}function v(){r.value=!r.value}function C(y){}return(y,w)=>{const n=S("a-button");return z(),x("div",R,[e(m(b),{title:"基础示例",titleHelpMessage:"温馨提醒",columns:m(c),dataSource:m(d),canResize:a.value,loading:l.value,striped:i.value,bordered:r.value,showTableSetting:"",pagination:u.value,onColumnsChange:C},{toolbar:o(()=>[e(n,{type:"primary",onClick:g},{default:o(()=>[p(s(a.value?"取消自适应":"自适应高度"),1)]),_:1}),e(n,{type:"primary",onClick:v},{default:o(()=>[p(s(r.value?"隐藏边框":"显示边框"),1)]),_:1}),e(n,{type:"primary",onClick:_},{default:o(()=>[p(" 开启loading ")]),_:1}),e(n,{type:"primary",onClick:f},{default:o(()=>[p(s(i.value?"隐藏斑马纹":"显示斑马纹"),1)]),_:1})]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])}}});export{pt as default};
