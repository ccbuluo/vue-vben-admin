var _=(F,v,l)=>new Promise((u,m)=>{var r=o=>{try{c(l.next(o))}catch(d){m(d)}},b=o=>{try{c(l.throw(o))}catch(d){m(d)}},c=o=>o.done?u(o.value):Promise.resolve(o.value).then(r,b);c((l=l.apply(F,v)).next())});import{P as $}from"./index-2e690c94.js";import{C as w,o as V,d as K,a as P}from"./index.js";import{_ as T}from"./BasicForm.vue_vue_type_script_setup_true_lang-9ab2b52b.js";import"./BasicForm.vue_vue_type_style_index_0_lang-77669a69.js";import"./componentMap-e88eaca2.js";import{u as B}from"./useForm-3492eae0.js";import{w as g}from"./antd-c2e94c83.js";import{d as x,f as h,a7 as D,q as R,n as M,Z as k,a8 as N,a9 as i,$ as S,l as n,E as y,u as f,_ as j,F as E,aa as W,ac as q}from"./vue-ea98dac5.js";import"./useContentViewHeight-2c8d1d9b.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-3eb95ecd.js";import"./isNumber-f0336cfd.js";import"./FormItem.vue_vue_type_script_lang-461cbd5e.js";import"./helper-ec539efd.js";import"./isBoolean-9388e2d6.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-ee2d8144.js";import"./useFormItem-1ece48e0.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-5129e933.js";import"./uuid-31b8b5a4.js";import"./useSortable-f230544c.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-8518e10f.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-735f48cd.js";import"./copyTextToClipboard-7819541c.js";import"./index-d2e6a0c2.js";const A={class:"mb-4"},be=x({name:"TabsFormDemo",__name:"TabsForm",setup(F){const v=g.TabPane,{createMessage:l}=P(),u=h("tabs2"),m=h(!1),r=[],b={showActionButtonGroup:!1,labelWidth:100},c={};for(let a=1;a<=5;++a){const e=`tabs${a}`,s=[],p={};for(let t=1;t<=8;++t)s.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),p[`field${t}`]=`field: ${e}.field${t}, default value`;c[e]=p,r.push({key:e,tab:e,forceRender:!0,Form:B(Object.assign({schemas:s},b))})}function o(){return _(this,null,function*(){for(const a of r){const{resetFields:e}=a.Form[1];yield e()}})}function d(){return _(this,null,function*(){let a="";m.value=!0;try{const e={};for(const s of r){a=s.key;const{validate:p,getFieldsValue:t}=s.Form[1];yield p(),K(e,t())}l.success("提交成功！请打开控制台查看")}catch(e){u.value=a}finally{m.value=!1}})}function C(){return _(this,null,function*(){for(const a of r){const{setFieldsValue:e}=a.Form[1];yield e(c)}})}return(a,e)=>{const s=D("a-button"),p=R("loading");return M((k(),N(f($),{title:"标签页+多级field表单"},{default:i(()=>[S("div",A,[n(s,{onClick:o,class:"mr-2"},{default:i(()=>[y(" 重置表单 ")]),_:1}),n(s,{onClick:C,class:"mr-2"},{default:i(()=>[y(" 设置默认值 ")]),_:1}),n(s,{onClick:d,class:"mr-2",type:"primary"},{default:i(()=>[y(" 提交表单 ")]),_:1})]),n(f(w),{title:"标签页+多级field表单"},{default:i(()=>[n(f(g),{activeKey:u.value,"onUpdate:activeKey":e[0]||(e[0]=t=>u.value=t)},{default:i(()=>[(k(),j(E,null,W(r,t=>n(f(v),q({key:t.key},f(V)(t,["Form","key"])),{default:i(()=>[n(f(T),{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040)),64))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[p,m.value]])}}});export{be as default};
