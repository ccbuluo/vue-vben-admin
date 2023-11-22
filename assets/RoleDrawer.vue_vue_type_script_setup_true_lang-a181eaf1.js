var D=Object.defineProperty;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(t,a,e)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,w=(t,a)=>{for(var e in a||(a={}))R.call(a,e)&&g(t,e,a[e]);if(h)for(var e of h(a))C.call(a,e)&&g(t,e,a[e]);return t};var p=(t,a,e)=>new Promise((o,u)=>{var c=s=>{try{i(e.next(s))}catch(l){u(l)}},m=s=>{try{i(e.throw(s))}catch(l){u(l)}},i=s=>s.done?o(s.value):Promise.resolve(s.value).then(c,m);i((e=e.apply(t,a)).next())});import{_ as N}from"./BasicForm.vue_vue_type_script_setup_true_lang-9ab2b52b.js";import"./BasicForm.vue_vue_type_style_index_0_lang-77669a69.js";import"./componentMap-e88eaca2.js";import{u as P}from"./useForm-3492eae0.js";import{s as y,d as B}from"./system-f9b163cb.js";import{a as F}from"./index.js";import{m as V,d as L,f as b,c as T,u as n,Z as U,a8 as A,a9 as _,l as v,ac as M}from"./vue-ea98dac5.js";import{a8 as $}from"./antd-c2e94c83.js";import{a as q,B as G}from"./index-24e46776.js";import{_ as O}from"./index-d9c64694.js";const ae=[{title:"角色名称",dataIndex:"roleName",width:200},{title:"角色值",dataIndex:"roleValue",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:120,customRender:({record:t})=>(Reflect.has(t,"pendingStatus")||(t.pendingStatus=!1),V($,{checked:t.status==="1",checkedChildren:"停用",unCheckedChildren:"启用",loading:t.pendingStatus,onChange(a){t.pendingStatus=!0;const e=a?"1":"0",{createMessage:o}=F();y(t.id,e).then(()=>{t.status=e,o.success("已成功修改角色状态")}).catch(()=>{o.error("修改角色状态失败")}).finally(()=>{t.pendingStatus=!1})}}))},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],se=[{field:"roleNme",label:"角色名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]},colProps:{span:8}}],W=[{field:"roleName",label:"角色名称",required:!0,component:"Input"},{field:"roleValue",label:"角色值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"ApiTree"}],oe=L({__name:"RoleDrawer",emits:["success","register"],setup(t,{emit:a}){const e=b(!0),o=b([]),[u,{resetFields:c,setFieldsValue:m,validate:i}]=P({labelWidth:90,baseColProps:{span:24},schemas:W,showActionButtonGroup:!1}),[s,{setDrawerProps:l,closeDrawer:S}]=q(r=>p(this,null,function*(){c(),l({confirmLoading:!1}),n(o).length===0&&(o.value=yield B()),e.value=!!(r!=null&&r.isUpdate),n(e)&&m(w({},r.record))})),I=T(()=>n(e)?"编辑角色":"新增角色");function k(){return p(this,null,function*(){try{const r=yield i();l({confirmLoading:!0}),S(),a("success")}finally{l({confirmLoading:!1})}})}return(r,Z)=>(U(),A(n(G),M(r.$attrs,{onRegister:n(s),showFooter:"",title:I.value,width:"500px",onOk:k}),{default:_(()=>[v(n(N),{onRegister:n(u)},{menu:_(({model:d,field:f})=>[v(n(O),{value:d[f],"onUpdate:value":x=>d[f]=x,treeData:o.value,fieldNames:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{oe as _,ae as c,se as s};
