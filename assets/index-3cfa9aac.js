import{B as n}from"./componentMap-e88eaca2.js";import{a as l}from"./index.js";import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-9ab2b52b.js";import"./BasicForm.vue_vue_type_style_index_0_lang-77669a69.js";import{u as f}from"./useForm-3492eae0.js";import{P as u}from"./index-2e690c94.js";import{u as t}from"./upload-0bcb9c45.js";import{d,Z as g,a8 as _,a9 as h,l as r,u as o}from"./vue-ea98dac5.js";import{x as a}from"./antd-c2e94c83.js";import"./useFormItem-1ece48e0.js";import"./get-3d19de2f.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-5129e933.js";import"./index-ee2d8144.js";import"./useWindowSizeFn-844b46eb.js";import"./isBoolean-9388e2d6.js";import"./uuid-31b8b5a4.js";import"./useSortable-f230544c.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-8518e10f.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-735f48cd.js";import"./copyTextToClipboard-7819541c.js";import"./index-d2e6a0c2.js";import"./FormItem.vue_vue_type_script_lang-461cbd5e.js";import"./helper-ec539efd.js";import"./isNumber-f0336cfd.js";import"./uniqBy-3d1a97d8.js";import"./useContentViewHeight-2c8d1d9b.js";import"./onMountedOrActivated-3eb95ecd.js";const L=d({__name:"index",setup(x){const i=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:t}}],{createMessage:m}=l(),[p]=f({labelWidth:120,schemas:i,actionColOptions:{span:16}});function s(e){m.info(`已上传文件${JSON.stringify(e)}`)}return(e,C)=>(g(),_(o(u),{title:"上传组件示例"},{default:h(()=>[r(o(a),{message:"基础示例"}),r(o(n),{maxSize:20,maxNumber:10,onChange:s,api:o(t),class:"my-5",accept:["image/*"]},null,8,["api"]),r(o(a),{message:"嵌入表单,加入表单校验"}),r(o(c),{onRegister:o(p),class:"my-5"},null,8,["onRegister"])]),_:1}))}});export{L as default};
