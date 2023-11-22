import{_ as f,p as b,h as O,m as R,l as E,s as N,e as P}from"./index.js";import{D as V}from"./siteSetting-efd6ab5b.js";import{c as h,u as x}from"./index-9f7a614d.js";import{b as v}from"./index-ee2d8144.js";import{h as B}from"./header-55b09394.js";import{D as T,d as A}from"./antd-c2e94c83.js";import{d as F,c as z,a7 as t,Z as n,_ as H,l as r,a9 as k,a8 as a,ab as s,$ as i,a1 as p,a0 as W,F as Z}from"./vue-ea98dac5.js";import"./uniq-e2f49495.js";import"./isBoolean-9388e2d6.js";import"./index-8eca3b28.js";import"./useContentViewHeight-2c8d1d9b.js";import"./useWindowSizeFn-844b46eb.js";import"./uniqBy-3d1a97d8.js";import"./get-3d19de2f.js";import"./useSortable-f230544c.js";import"./index-24e46776.js";import"./isNumber-f0336cfd.js";import"./lock-20c67b64.js";const j=F({name:"UserDropdown",components:{Dropdown:T,Menu:A,MenuItem:h(()=>f(()=>import("./DropMenuItem-cb35b3d0.js"),["assets/DropMenuItem-cb35b3d0.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-c2e94c83.js","assets/index-d02cfe16.css"])),MenuDivider:A.Divider,LockAction:h(()=>f(()=>import("./LockModal-cd2865fb.js"),["assets/LockModal-cd2865fb.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-c2e94c83.js","assets/index-d02cfe16.css","assets/index-ee2d8144.js","assets/useWindowSizeFn-844b46eb.js","assets/index-81b08c04.css","assets/BasicForm.vue_vue_type_script_setup_true_lang-9ab2b52b.js","assets/FormItem.vue_vue_type_script_lang-461cbd5e.js","assets/componentMap-e88eaca2.js","assets/useFormItem-1ece48e0.js","assets/get-3d19de2f.js","assets/RadioButtonGroup.vue_vue_type_script_setup_true_lang-5129e933.js","assets/isBoolean-9388e2d6.js","assets/uuid-31b8b5a4.js","assets/useSortable-f230544c.js","assets/download-4dc1f19b.js","assets/base64Conver-39fc0d26.js","assets/index-8518e10f.js","assets/index-74456602.css","assets/IconPicker.vue_vue_type_script_setup_true_lang-735f48cd.js","assets/copyTextToClipboard-7819541c.js","assets/index-d2e6a0c2.js","assets/index-7f5b8959.css","assets/componentMap-6528b260.css","assets/helper-ec539efd.js","assets/isNumber-f0336cfd.js","assets/BasicForm.vue_vue_type_style_index_0_lang-77669a69.js","assets/BasicForm-a35f51a7.css","assets/uniqBy-3d1a97d8.js","assets/useForm-3492eae0.js","assets/lock-20c67b64.js","assets/header-55b09394.js","assets/LockModal-ca58db68.css"])),ChangeApi:h(()=>f(()=>import("./index-ed628cea.js"),["assets/index-ed628cea.js","assets/index.js","assets/vue-ea98dac5.js","assets/antd-c2e94c83.js","assets/index-d02cfe16.css","assets/index-ee2d8144.js","assets/useWindowSizeFn-844b46eb.js","assets/index-81b08c04.css","assets/BasicForm.vue_vue_type_script_setup_true_lang-9ab2b52b.js","assets/FormItem.vue_vue_type_script_lang-461cbd5e.js","assets/componentMap-e88eaca2.js","assets/useFormItem-1ece48e0.js","assets/get-3d19de2f.js","assets/RadioButtonGroup.vue_vue_type_script_setup_true_lang-5129e933.js","assets/isBoolean-9388e2d6.js","assets/uuid-31b8b5a4.js","assets/useSortable-f230544c.js","assets/download-4dc1f19b.js","assets/base64Conver-39fc0d26.js","assets/index-8518e10f.js","assets/index-74456602.css","assets/IconPicker.vue_vue_type_script_setup_true_lang-735f48cd.js","assets/copyTextToClipboard-7819541c.js","assets/index-d2e6a0c2.js","assets/index-7f5b8959.css","assets/componentMap-6528b260.css","assets/helper-ec539efd.js","assets/isNumber-f0336cfd.js","assets/BasicForm.vue_vue_type_style_index_0_lang-77669a69.js","assets/BasicForm-a35f51a7.css","assets/uniqBy-3d1a97d8.js","assets/useForm-3492eae0.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=O("header-user-dropdown"),{t:C}=E(),{getShowDoc:D,getUseLockPage:w,getShowApi:y}=x(),l=R(),o=z(()=>{const{realName:_="",avatar:S,desc:U}=l.getUserInfo||{};return{realName:_,avatar:S||B,desc:U}}),[c,{openModal:d}]=v(),[u,{openModal:m}]=v();function g(){d(!0)}function L(){m(!0,{})}function M(){l.confirmLoginOut()}function I(){N(V)}function $(_){switch(_.key){case"logout":M();break;case"doc":I();break;case"lock":g();break;case"api":L();break}}return{prefixCls:e,t:C,getUserInfo:o,handleMenuClick:$,getShowDoc:D,getShowApi:y,register:c,registerApi:u,getUseLockPage:w}}});const q=["src"];function G(e,C,D,w,y,l){const o=t("MenuItem"),c=t("MenuDivider"),d=t("Menu"),u=t("Dropdown"),m=t("LockAction"),g=t("ChangeApi");return n(),H(Z,null,[r(u,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:k(()=>[r(d,{onClick:e.handleMenuClick},{default:k(()=>[e.getShowDoc?(n(),a(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):s("",!0),e.getShowDoc?(n(),a(c,{key:1})):s("",!0),e.getShowApi?(n(),a(o,{key:"api",text:e.t("layout.header.dropdownChangeApi"),icon:"ant-design:swap-outlined"},null,8,["text"])):s("",!0),e.getUseLockPage?(n(),a(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):s("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:k(()=>[i("span",{class:p([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[i("img",{class:p(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,q),i("span",{class:p(`${e.prefixCls}__info hidden md:block`)},[i("span",{class:p([`${e.prefixCls}__name`,"truncate"])},W(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"]),r(g,{onRegister:e.registerApi},null,8,["onRegister"])],64)}const me=P(j,[["render",G]]);export{me as default};
