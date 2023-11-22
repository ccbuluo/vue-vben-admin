import{_ as P}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-9b7227a8.js";import{a2 as U,m as g,bs as s,e as k}from"./index.js";import{A as m}from"./index-9a9a0b5f.js";import{P as B}from"./index-2e690c94.js";import{d as C,c as v,a7 as b,q as h,Z as l,a8 as u,a9 as t,l as o,$ as _,E as a,a0 as d,u as e,ab as f,n as S}from"./vue-ea98dac5.js";import{x as D,u as N,E as y}from"./antd-c2e94c83.js";import"./useContentViewHeight-2c8d1d9b.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-3eb95ecd.js";import"./isNumber-f0336cfd.js";const V={class:"mt-4"},$=C({__name:"Btn",setup(w){const{changeRole:E,hasPermission:n}=U(),i=g(),T=v(()=>i.getRoleList.includes(s.SUPER)),x=v(()=>i.getRoleList.includes(s.TEST));return(A,c)=>{const r=b("a-button"),p=h("auth");return l(),u(e(B),{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:t(()=>[o(P),_("p",null,[a(" 当前角色: "),_("a",null,d(e(i).getRoleList),1)]),o(e(D),{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),_("div",V,[a(" 权限切换(请先切换权限模式为前端角色权限模式): "),o(e(N),null,{default:t(()=>[o(r,{onClick:c[0]||(c[0]=R=>e(E)(e(s).SUPER)),type:T.value?"primary":"default"},{default:t(()=>[a(d(e(s).SUPER),1)]),_:1},8,["type"]),o(r,{onClick:c[1]||(c[1]=R=>e(E)(e(s).TEST)),type:x.value?"primary":"default"},{default:t(()=>[a(d(e(s).TEST),1)]),_:1},8,["type"])]),_:1})]),o(e(y),null,{default:t(()=>[a("组件方式判断权限(有需要可以自行全局注册)")]),_:1}),o(e(m),{value:e(s).SUPER},{default:t(()=>[o(r,{type:"primary",class:"mx-4"},{default:t(()=>[a(" 拥有super角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(e(m),{value:e(s).TEST},{default:t(()=>[o(r,{color:"success",class:"mx-4"},{default:t(()=>[a(" 拥有test角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(e(m),{value:[e(s).TEST,e(s).SUPER]},{default:t(()=>[o(r,{color:"error",class:"mx-4"},{default:t(()=>[a(" 拥有[test,super]角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(e(y),null,{default:t(()=>[a("函数方式方式判断权限(适用于函数内部过滤)")]),_:1}),e(n)(e(s).SUPER)?(l(),u(r,{key:0,type:"primary",class:"mx-4"},{default:t(()=>[a(" 拥有super角色权限可见 ")]),_:1})):f("",!0),e(n)(e(s).TEST)?(l(),u(r,{key:1,color:"success",class:"mx-4"},{default:t(()=>[a(" 拥有test角色权限可见 ")]),_:1})):f("",!0),e(n)([e(s).TEST,e(s).SUPER])?(l(),u(r,{key:2,color:"error",class:"mx-4"},{default:t(()=>[a(" 拥有[test,super]角色权限可见 ")]),_:1})):f("",!0),o(e(y),null,{default:t(()=>[a("指令方式方式判断权限(该方式不能动态修改权限.)")]),_:1}),S((l(),u(r,{type:"primary",class:"mx-4"},{default:t(()=>[a(" 拥有super角色权限可见 ")]),_:1})),[[p,e(s).SUPER]]),S((l(),u(r,{color:"success",class:"mx-4"},{default:t(()=>[a(" 拥有test角色权限可见 ")]),_:1})),[[p,e(s).TEST]]),S((l(),u(r,{color:"error",class:"mx-4"},{default:t(()=>[a(" 拥有[test,super]角色权限可见 ")]),_:1})),[[p,[e(s).TEST,e(s).SUPER]]])]),_:1})}}});const J=k($,[["__scopeId","data-v-303c9f2b"]]);export{J as default};
