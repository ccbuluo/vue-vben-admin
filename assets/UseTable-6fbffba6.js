import{_ as B}from"./BasicTable.vue_vue_type_script_setup_true_lang-a11877c9.js";import"./TableImg.vue_vue_type_style_index_0_lang-6c16f22c.js";import"./componentMap-e88eaca2.js";import{u as P}from"./useTable-2707d1b1.js";import{getBasicShortColumns as v,getBasicColumns as l}from"./tableData-eabba52f.js";import{a as D}from"./index.js";import{d as I}from"./table-b1f4ce3d.js";import{d as M,a7 as N,Z as V,_ as E,$ as r,l as e,a9 as o,E as n,u as m}from"./vue-ea98dac5.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-9ab2b52b.js";import"./FormItem.vue_vue_type_script_lang-461cbd5e.js";import"./helper-ec539efd.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./antd-c2e94c83.js";import"./BasicForm.vue_vue_type_style_index_0_lang-77669a69.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-ee2d8144.js";import"./useWindowSizeFn-844b46eb.js";import"./useForm-3492eae0.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-5129e933.js";import"./useFormItem-1ece48e0.js";import"./useSortable-f230544c.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-8518e10f.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-735f48cd.js";import"./copyTextToClipboard-7819541c.js";import"./index-d2e6a0c2.js";import"./select-10be400c.js";const $={class:"p-4"},z={class:"mb-4"},A={class:"mb-4"},Le=M({__name:"UseTable",setup(H){const{createMessage:a}=D();function u(){}const[p,{setLoading:s,setProps:i,getColumns:U,getDataSource:Z,getRawDataSource:j,reload:c,getPaginationRef:q,setPagination:f,getSelectRows:F,getSelectRowKeys:G,setSelectedRowKeys:d,clearSelectedRowKeys:g}]=P({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:I,columns:l(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:u,rowSelection:{type:"checkbox"},onColumnsChange:L=>{}});function _(){s(!0),setTimeout(()=>{s(!1)},1e3)}function C(){i({columns:v(),rowSelection:{type:"checkbox"},showIndexColumn:!0})}function k(){i({columns:l(),rowSelection:{type:"checkbox"},showIndexColumn:!0}),c({page:1})}function w(){a.info("请在控制台查看！")}function b(){a.info("请在控制台查看！")}function h(){a.info("请在控制台查看！")}function S(){a.info("请在控制台查看！")}function R(){f({current:2}),c()}function T(){a.info("请在控制台查看！")}function y(){a.info("请在控制台查看！")}function x(){d(["0","1","2"])}function K(){g()}return(L,J)=>{const t=N("a-button");return V(),E("div",$,[r("div",z,[e(t,{class:"mr-2",onClick:k},{default:o(()=>[n(" 还原 ")]),_:1}),e(t,{class:"mr-2",onClick:_},{default:o(()=>[n(" 开启loading ")]),_:1}),e(t,{class:"mr-2",onClick:C},{default:o(()=>[n(" 更改Columns ")]),_:1}),e(t,{class:"mr-2",onClick:w},{default:o(()=>[n(" 获取Columns ")]),_:1}),e(t,{class:"mr-2",onClick:b},{default:o(()=>[n(" 获取表格数据 ")]),_:1}),e(t,{class:"mr-2",onClick:h},{default:o(()=>[n(" 获取接口原始数据 ")]),_:1}),e(t,{class:"mr-2",onClick:R},{default:o(()=>[n(" 跳转到第2页 ")]),_:1})]),r("div",A,[e(t,{class:"mr-2",onClick:T},{default:o(()=>[n(" 获取选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:y},{default:o(()=>[n(" 获取选中行Key ")]),_:1}),e(t,{class:"mr-2",onClick:x},{default:o(()=>[n(" 设置选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:K},{default:o(()=>[n(" 清空选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:S},{default:o(()=>[n(" 获取分页信息 ")]),_:1})]),e(m(B),{onRegister:m(p)},null,8,["onRegister"])])}}});export{Le as default};
