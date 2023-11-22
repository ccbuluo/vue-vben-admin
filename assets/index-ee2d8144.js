var me=Object.defineProperty,he=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var te=(n,l,s)=>l in n?me(n,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[l]=s,H=(n,l)=>{for(var s in l||(l={}))ve.call(l,s)&&te(n,s,l[s]);if(ee)for(var s of ee(l))be.call(l,s)&&te(n,s,l[s]);return n},E=(n,l)=>he(n,ye(l));var A=(n,l,s)=>new Promise((c,t)=>{var u=i=>{try{r(s.next(i))}catch(p){t(p)}},e=i=>{try{r(s.throw(i))}catch(p){t(p)}},r=i=>i.done?c(i.value):Promise.resolve(i.value).then(u,e);r((s=s.apply(n,l)).next())});import{l as re,L as Me,y as He,a9 as Ce,Z as Se,D as ke,aa as Be,ab as Fe,h as ie,ac as we,o as I,n as ce,d as Oe,r as Te,B as Pe,Y as ue,t as _e,w as $e}from"./index.js";import{h as V,u as o,d as N,G as Ne,l as C,i as De,f as h,c as S,w as de,o as Re,b as pe,x as T,q as We,Z as M,a8 as _,a9 as y,n as xe,_ as z,N as P,af as Ee,F as je,ab as U,a1 as Le,a7 as Ae,E as Z,a0 as G,ac as j,J as Ie,g as K,y as qe,ad as oe,aa as ne,ai as ae,aj as le,r as fe,H as q}from"./vue-ea98dac5.js";import{M as ze,ad as Ve,T as X,ae as Ye,af as Xe}from"./antd-c2e94c83.js";import{u as Ue}from"./useWindowSizeFn-844b46eb.js";const{t:se}=re(),Ze={open:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:se("common.cancelText")},okText:{type:String,default:se("common.okText")},closeFunc:Function},Q=Object.assign({},Ze,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},open:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Ge(n){const l=(t,u)=>getComputedStyle(t)[u],s=t=>{if(!t)return;t.setAttribute("data-drag",o(n.draggable));const u=t.querySelector(".ant-modal-header"),e=t.querySelector(".ant-modal");!u||!e||!o(n.draggable)||(u.style.cursor="move",u.onmousedown=r=>{if(!r)return;const i=r.clientX,p=r.clientY,w=document.body.clientWidth,f=document.documentElement.clientHeight,d=e.offsetWidth,g=e.offsetHeight,m=e.offsetLeft,v=w-e.offsetLeft-d,k=e.offsetTop,B=f-e.offsetTop-g,b=l(e,"left"),D=l(e,"top");let R=+b,W=+D;b.includes("%")?(R=+document.body.clientWidth*(+b.replace(/%/g,"")/100),W=+document.body.clientHeight*(+D.replace(/%/g,"")/100)):(R=+b.replace(/px/g,""),W=+D.replace(/px/g,"")),document.onmousemove=function(L){let O=L.clientX-i,a=L.clientY-p;-O>m?O=-m:O>v&&(O=v),-a>k?a=-k:a>B&&(a=B),e.style.cssText+=`;left:${O+R}px;top:${a+W}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},c=()=>{const t=document.querySelectorAll(".ant-modal-wrap");for(const u of Array.from(t)){if(!u)continue;const e=l(u,"display"),r=u.getAttribute("data-drag");e!=="none"&&(r===null||o(n.destroyOnClose))&&s(u)}};V(()=>{!o(n.open)||!o(n.draggable)||Me(()=>{c()},30)})}function Je(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!De(n)}const Ke=N({name:"Modal",inheritAttrs:!1,props:Q,emits:["cancel"],setup(n,{slots:l,emit:s}){const{open:c,draggable:t,destroyOnClose:u}=Ne(n),e=He();Ge({open:c,destroyOnClose:u,draggable:t});const r=i=>{s("cancel",i)};return()=>{let i;const p=E(H(H({},o(e)),n),{onCancel:r});return C(ze,p,Je(i=Ce(l))?i:{default:()=>[i]})}}}),ge=Symbol();function Qe(n){return ke(n,ge)}function pt(){return Se(ge)}const et=["loading-tip"],tt=N({name:"ModalWrapper",inheritAttrs:!1,__name:"ModalWrapper",props:{loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},open:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},emits:["height-change","ext-height"],setup(n,{expose:l,emit:s}){const c=n,t=h(null),u=h(null),e=h(0),r=h(0),i=h(0);Ue(f.bind(null)),Be(u,()=>{f()},{attributes:!0,subtree:!0}),Qe({redoModalHeight:f});const p=S(()=>({minHeight:`${c.minHeight}px`,[c.fullScreen?"height":"maxHeight"]:`${o(e)}px`}));V(()=>{c.useWrapper&&f()}),de(()=>c.fullScreen,d=>{f(),d?r.value=e.value:e.value=r.value}),Re(()=>{const{modalHeaderHeight:d,modalFooterHeight:g}=c;s("ext-height",d+g)}),pe(()=>{});function w(){return A(this,null,function*(){T(()=>{var g;const d=o(t);d&&((g=d==null?void 0:d.scrollTo)==null||g.call(d,0))})})}function f(){return A(this,null,function*(){if(!c.open)return;const d=o(t);if(!d)return;const g=d.$el.parentElement;if(g){g.style.padding="0",yield T();try{const m=g.parentElement&&g.parentElement.parentElement;if(!m)return;const v=getComputedStyle(m).top,k=Number.parseInt(v);let B=window.innerHeight-k*2+(c.footerOffset||0)-c.modalFooterHeight-c.modalHeaderHeight;k<40&&(B-=26),yield T();const b=o(u);if(!b)return;yield T(),i.value=b.scrollHeight,c.fullScreen?e.value=window.innerHeight-c.modalFooterHeight-c.modalHeaderHeight-28:e.value=c.height?c.height:i.value>B?B:i.value,s("height-change",o(e))}catch(m){}}})}return l({scrollTop:w}),(d,g)=>{const m=We("loading");return M(),_(o(Fe),{ref_key:"wrapperRef",ref:t,scrollHeight:i.value},{default:y(()=>[xe((M(),z("div",{ref_key:"spinRef",ref:u,style:Ee(p.value),"loading-tip":n.loadingTip},[P(d.$slots,"default")],12,et)),[[m,n.loading]])]),_:3},8,["scrollHeight"])}}}),ot=N({name:"ModalClose",__name:"ModalClose",props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(n,{emit:l}){const s=n,{prefixCls:c}=ie("basic-modal-close"),{t}=re(),u=S(()=>[c,`${c}--custom`,{[`${c}--can-full`]:s.canFullscreen}]);function e(i){l("cancel",i)}function r(i){i==null||i.stopPropagation(),i==null||i.preventDefault(),l("fullscreen")}return(i,p)=>(M(),z("div",{class:Le(u.value)},[n.canFullscreen?(M(),z(je,{key:0},[n.fullScreen?(M(),_(o(X),{key:0,title:o(t)("component.modal.restore"),placement:"bottom"},{default:y(()=>[C(o(Ve),{role:"full",onClick:r})]),_:1},8,["title"])):(M(),_(o(X),{key:1,title:o(t)("component.modal.maximize"),placement:"bottom"},{default:y(()=>[C(o(Ye),{role:"close",onClick:r})]),_:1},8,["title"]))],64)):U("",!0),C(o(X),{title:o(t)("component.modal.close"),placement:"bottom"},{default:y(()=>[C(o(Xe),{onClick:e})]),_:1},8,["title"])],2))}});const nt=N({name:"BasicModalFooter",__name:"ModalFooter",props:Q,emits:["ok","cancel"],setup(n,{emit:l}){function s(t){l("ok",t)}function c(t){l("cancel",t)}return(t,u)=>{const e=Ae("a-button");return M(),z("div",null,[P(t.$slots,"insertFooter"),t.showCancelBtn?(M(),_(e,j({key:0},t.cancelButtonProps,{onClick:c}),{default:y(()=>[Z(G(t.cancelText),1)]),_:1},16)):U("",!0),P(t.$slots,"centerFooter"),t.showOkBtn?(M(),_(e,j({key:1,type:t.okType,onClick:s,loading:t.confirmLoading},t.okButtonProps),{default:y(()=>[Z(G(t.okText),1)]),_:1},16,["type","loading"])):U("",!0),P(t.$slots,"appendFooter")])}}}),at=N({name:"BasicModalHeader",__name:"ModalHeader",props:{helpMessage:{type:[String,Array]},title:{type:String}},setup(n){return(l,s)=>(M(),_(o(we),{helpMessage:n.helpMessage},{default:y(()=>[Z(G(n.title),1)]),_:1},8,["helpMessage"]))}});function lt(n){const l=h(!1),s=S(()=>{const t=o(n.wrapClassName)||"";return o(l)?`fullscreen-modal ${t} `:o(t)});function c(t){t&&t.stopPropagation(),l.value=!o(l)}return{getWrapClassName:s,handleFullScreen:c,fullScreenRef:l}}const st=N({name:"BasicModal",inheritAttrs:!1,__name:"BasicModal",props:Q,emits:["open-change","height-change","cancel","ok","register","update:open"],setup(n,{emit:l}){const s=n,c=Ie(),t=h(!1),u=h(null),e=h(null),{prefixCls:r}=ie("basic-modal"),i=h(0),p={setModalProps:D,emitOpen:void 0,redoModalHeight:()=>{T(()=>{o(e)&&o(e).setModalHeight()})}},w=K();w&&l("register",p,w.uid);const f=S(()=>H(H({},s),o(u))),{handleFullScreen:d,getWrapClassName:g,fullScreenRef:m}=lt({modalWrapperRef:e,extHeightRef:i,wrapClassName:qe(f.value,"wrapClassName")}),v=S(()=>{const a=E(H({},o(f)),{open:o(t),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return E(H({},a),{wrapClassName:o(g)})}),k=S(()=>{const a=E(H(H({},c),o(f)),{open:o(t)});return a.wrapClassName=`${(a==null?void 0:a.wrapClassName)||""} ${o(g)}vben-basic-modal-wrap`,o(m)?I(a,["height","title"]):I(a,"title")}),B=S(()=>{if(!o(m))return o(v).height});V(()=>{t.value=!!s.open,m.value=!!s.defaultFullscreen}),de(()=>o(t),a=>{l("open-change",a),l("update:open",a),T(()=>{s.scrollTop&&a&&o(e)&&o(e).scrollTop()})},{immediate:!1});function b(a){return A(this,null,function*(){var Y,F;if(a==null||a.stopPropagation(),!((F=(Y=a.target)==null?void 0:Y.classList)!=null&&F.contains(r+"-close--custom"))){if(s.closeFunc&&ce(s.closeFunc)){const x=yield s.closeFunc();t.value=!x;return}t.value=!1,l("cancel",a)}})}function D(a){u.value=Oe(o(u)||{},a),Reflect.has(a,"open")&&(t.value=!!a.open),Reflect.has(a,"defaultFullscreen")&&(m.value=!!a.defaultFullscreen)}function R(a){l("ok",a)}function W(a){l("height-change",a)}function L(a){i.value=a}function O(a){s.canFullscreen&&(a.stopPropagation(),d(a))}return(a,Y)=>(M(),_(o(Ke),j(k.value,{onCancel:b}),oe({default:y(()=>[C(tt,j({useWrapper:v.value.useWrapper,footerOffset:a.wrapperFooterOffset,fullScreen:o(m),ref_key:"modalWrapperRef",ref:e,loading:v.value.loading,"loading-tip":v.value.loadingTip,minHeight:v.value.minHeight,height:B.value,open:t.value,modalFooterHeight:a.footer!==void 0&&!a.footer?0:void 0},o(I)(v.value.wrapperProps,"open","height","modalFooterHeight"),{onExtHeight:L,onHeightChange:W}),{default:y(()=>[P(a.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","open","modalFooterHeight"])]),_:2},[a.$slots.closeIcon?void 0:{name:"closeIcon",fn:y(()=>[C(ot,{canFullscreen:v.value.canFullscreen,fullScreen:o(m),onCancel:b,onFullscreen:o(d)},null,8,["canFullscreen","fullScreen","onFullscreen"])]),key:"0"},a.$slots.title?void 0:{name:"title",fn:y(()=>[C(at,{helpMessage:v.value.helpMessage,title:f.value.title,onDblclick:O},null,8,["helpMessage","title"])]),key:"1"},a.$slots.footer?void 0:{name:"footer",fn:y(()=>[C(nt,j(k.value,{onOk:R,onCancel:b}),oe({_:2},[ne(Object.keys(a.$slots),F=>({name:F,fn:y(x=>[P(a.$slots,F,ae(le(x||{})))])}))]),1040)]),key:"2"},ne(Object.keys(o(I)(a.$slots,"default")),F=>({name:F,fn:y(x=>[P(a.$slots,F,ae(le(x||{})))])}))]),1040))}}),$=fe({}),J=fe({});function ft(){const n=h(null),l=h(!1),s=h(0);function c(e,r){if(!K())throw new Error("useModal() can only be used inside setup() or functional components!");s.value=r,pe(()=>{n.value=null,l.value=!1,$[String(o(s))]=null}),!(o(l)&&Pe()&&e===o(n))&&(n.value=e,l.value=!0,e.emitOpen=(i,p)=>{J[p]=i})}const t=()=>{const e=o(n);return e||ue("useModal instance is undefined!"),e},u={setModalProps:e=>{var r;(r=t())==null||r.setModalProps(e)},getOpen:S(()=>J[~~o(s)]),redoModalHeight:()=>{var e,r;(r=(e=t())==null?void 0:e.redoModalHeight)==null||r.call(e)},openModal:(e=!0,r,i=!0)=>{var f;if((f=t())==null||f.setModalProps({open:e}),!r)return;const p=o(s);if(i){$[p]=null,$[p]=q(r);return}Te(q($[p]),q(r))||($[p]=q(r))},closeModal:()=>{var e;(e=t())==null||e.setModalProps({open:!1})}};return[c,u]}const gt=n=>{const l=h(null),s=K(),c=h(0),t=()=>{const e=o(l);return e||ue("useModalInner instance is undefined!"),e},u=(e,r)=>{_e(()=>{l.value=null}),c.value=r,l.value=e,s==null||s.emit("register",e,r)};return V(()=>{const e=$[o(c)];e&&(!n||!ce(n)||T(()=>{n(e)}))}),[u,{changeLoading:(e=!0)=>{var r;(r=t())==null||r.setModalProps({loading:e})},getOpen:S(()=>J[~~o(c)]),changeOkLoading:(e=!0)=>{var r;(r=t())==null||r.setModalProps({confirmLoading:e})},closeModal:()=>{var e;(e=t())==null||e.setModalProps({open:!1})},setModalProps:e=>{var r;(r=t())==null||r.setModalProps(e)},redoModalHeight:()=>{var r;const e=(r=t())==null?void 0:r.redoModalHeight;e&&e()}}]},mt=$e(st);export{mt as B,gt as a,ft as b,pt as u};
