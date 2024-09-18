import{K as N,W as j,q as Se,a0 as Me,o as we,g as ie,m as le,_ as v,e as se,l as Ne,x as Ee,d as k,u as H,n as x,w as Q,a2 as q,aB as Ce,a as b,b as _,P as W,af as Le,r as ee,t as je,c as X,ac as ke,ap as pe,aE as te,X as xe,v as He,ab as Fe,aq as Z,h as B,aC as Ge,al as me,$ as ve,aI as ge,ag as We}from"./index-5PpaRQ4V.js";import{u as Xe,r as Ue,a as Ve}from"./useFlexGapSupport-DreIYkeg.js";import{k as Ke,R as Ye,l as Oe,m as qe,n as Ze,t as Je,o as Pe,p as Qe,h as et,c as oe,r as tt,a as ot,b as nt,d as at,e as rt,i as fe,q as it,E as lt,v as st,w as ct,D as ut}from"./index-DqOc7EMi.js";import{i as ce,d as $e}from"./useState-Cj3IvW2q.js";import{b as dt,B as ne,a as pt,C as ae}from"./index-Bj9HVelq.js";import{R as be}from"./RightOutlined-BZ_LZo5C.js";const mt=new N("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),vt=new N("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),gt=new N("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),ft=new N("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),$t=new N("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),bt=new N("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),ht=new N("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),yt=new N("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),St={"move-up":{inKeyframes:ht,outKeyframes:yt},"move-down":{inKeyframes:mt,outKeyframes:vt},"move-left":{inKeyframes:gt,outKeyframes:ft},"move-right":{inKeyframes:$t,outKeyframes:bt}},he=(e,t)=>{const{antCls:o}=e,n=`${o}-${t}`,{inKeyframes:a,outKeyframes:s}=St[t];return[Ke(n,a,s,e.motionDurationMid),{[`
        ${n}-enter,
        ${n}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${n}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]};function wt(){const e=j({});let t=null;const o=Xe();return Se(()=>{t=o.value.subscribe(n=>{e.value=n})}),Me(()=>{o.value.unsubscribe(t)}),e}function Ct(e){const t=j();return we(()=>{t.value=e()},{flush:"sync"}),t}const xt=e=>{const{antCls:t,componentCls:o,iconCls:n,avatarBg:a,avatarColor:s,containerSize:d,containerSizeLG:r,containerSizeSM:g,textFontSize:f,textFontSizeLG:m,textFontSizeSM:w,borderRadius:c,borderRadiusLG:u,borderRadiusSM:y,lineWidth:S,lineType:l}=e,i=($,p,h)=>({width:$,height:$,lineHeight:`${$-S*2}px`,borderRadius:"50%",[`&${o}-square`]:{borderRadius:h},[`${o}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${o}-icon`]:{fontSize:p,[`> ${n}`]:{margin:0}}});return{[o]:v(v(v(v({},se(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:s,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:a,border:`${S}px ${l} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),i(d,f,c)),{"&-lg":v({},i(r,m,u)),"&-sm":v({},i(g,w,y)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},Ot=e=>{const{componentCls:t,groupBorderColor:o,groupOverlapping:n,groupSpace:a}=e;return{[`${t}-group`]:{display:"inline-flex",[`${t}`]:{borderColor:o},"> *:not(:first-child)":{marginInlineStart:n}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:a}}}},ze=ie("Avatar",e=>{const{colorTextLightSolid:t,colorTextPlaceholder:o}=e,n=le(e,{avatarBg:o,avatarColor:t});return[xt(n),Ot(n)]},e=>{const{controlHeight:t,controlHeightLG:o,controlHeightSM:n,fontSize:a,fontSizeLG:s,fontSizeXL:d,fontSizeHeading3:r,marginXS:g,marginXXS:f,colorBorderBg:m}=e;return{containerSize:t,containerSizeLG:o,containerSizeSM:n,textFontSize:Math.round((s+d)/2),textFontSizeLG:r,textFontSizeSM:a,groupSpace:f,groupOverlapping:-g,groupBorderColor:m}}),_e=Symbol("AvatarContextKey"),Pt=()=>Ne(_e,{}),zt=e=>Ee(_e,e),_t=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:W.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),G=k({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:_t(),slots:Object,setup(e,t){let{slots:o,attrs:n}=t;const a=j(!0),s=j(!1),d=j(1),r=j(null),g=j(null),{prefixCls:f}=H("avatar",e),[m,w]=ze(f),c=Pt(),u=x(()=>e.size==="default"?c.size:e.size),y=wt(),S=Ct(()=>{if(typeof e.size!="object")return;const p=Ue.find(C=>y.value[C]);return e.size[p]}),l=p=>S.value?{width:`${S.value}px`,height:`${S.value}px`,lineHeight:`${S.value}px`,fontSize:`${p?S.value/2:18}px`}:{},i=()=>{if(!r.value||!g.value)return;const p=r.value.offsetWidth,h=g.value.offsetWidth;if(p!==0&&h!==0){const{gap:C=4}=e;C*2<h&&(d.value=h-C*2<p?(h-C*2)/p:1)}},$=()=>{const{loadError:p}=e;(p==null?void 0:p())!==!1&&(a.value=!1)};return Q(()=>e.src,()=>{q(()=>{a.value=!0,d.value=1})}),Q(()=>e.gap,()=>{q(()=>{i()})}),Se(()=>{q(()=>{i(),s.value=!0})}),()=>{var p,h;const{shape:C,src:O,alt:I,srcset:z,draggable:R,crossOrigin:D}=e,T=(p=c.shape)!==null&&p!==void 0?p:C,A=Ce(o,e,"icon"),P=f.value,E={[`${n.class}`]:!!n.class,[P]:!0,[`${P}-lg`]:u.value==="large",[`${P}-sm`]:u.value==="small",[`${P}-${T}`]:!0,[`${P}-image`]:O&&a.value,[`${P}-icon`]:A,[w.value]:!0},M=typeof u.value=="number"?{width:`${u.value}px`,height:`${u.value}px`,lineHeight:`${u.value}px`,fontSize:A?`${u.value/2}px`:"18px"}:{},U=(h=o.default)===null||h===void 0?void 0:h.call(o);let L;if(O&&a.value)L=b("img",{draggable:R,src:O,srcset:z,onError:$,alt:I,crossorigin:D},null);else if(A)L=A;else if(s.value||d.value!==1){const F=`scale(${d.value}) translateX(-50%)`,K={msTransform:F,WebkitTransform:F,transform:F},Y=typeof u.value=="number"?{lineHeight:`${u.value}px`}:{};L=b(Ye,{onResize:i},{default:()=>[b("span",{class:`${P}-string`,ref:r,style:v(v({},Y),K)},[U])]})}else L=b("span",{class:`${P}-string`,ref:r,style:{opacity:0}},[U]);return m(b("span",_(_({},n),{},{ref:g,class:E,style:[M,l(!!A),n.style]}),[L]))}}}),It=e=>{const{componentCls:t,popoverBg:o,popoverColor:n,width:a,fontWeightStrong:s,popoverPadding:d,boxShadowSecondary:r,colorTextHeading:g,borderRadiusLG:f,zIndexPopup:m,marginXS:w,colorBgElevated:c}=e;return[{[t]:v(v({},se(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:m,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":c,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:o,backgroundClip:"padding-box",borderRadius:f,boxShadow:r,padding:d},[`${t}-title`]:{minWidth:a,marginBottom:w,color:g,fontWeight:s},[`${t}-inner-content`]:{color:n}})},qe(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",[`${t}-content`]:{display:"inline-block"}}}]},At=e=>{const{componentCls:t}=e;return{[t]:Ze.map(o=>{const n=e[`${o}-6`];return{[`&${t}-${o}`]:{"--antd-arrow-background-color":n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}})}},Rt=e=>{const{componentCls:t,lineWidth:o,lineType:n,colorSplit:a,paddingSM:s,controlHeight:d,fontSize:r,lineHeight:g,padding:f}=e,m=d-Math.round(r*g),w=m/2,c=m/2-o,u=f;return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${w}px ${u}px ${c}px`,borderBottom:`${o}px ${n} ${a}`},[`${t}-inner-content`]:{padding:`${s}px ${u}px`}}}},Bt=ie("Popover",e=>{const{colorBgElevated:t,colorText:o,wireframe:n}=e,a=le(e,{popoverBg:t,popoverColor:o,popoverPadding:12});return[It(a),At(a),n&&Rt(a),Oe(a,"zoom-big")]},e=>{let{zIndexPopupBase:t}=e;return{zIndexPopup:t+30,width:177}}),Tt=()=>v(v({},et()),{content:pe(),title:pe()}),Dt=k({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:ce(Tt(),v(v({},Je()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(e,t){let{expose:o,slots:n,attrs:a}=t;const s=ee();je(e.visible===void 0),o({getPopupDomNode:()=>{var c,u;return(u=(c=s.value)===null||c===void 0?void 0:c.getPopupDomNode)===null||u===void 0?void 0:u.call(c)}});const{prefixCls:d,configProvider:r}=H("popover",e),[g,f]=Bt(d),m=x(()=>r.getPrefixCls()),w=()=>{var c,u;const{title:y=te((c=n.title)===null||c===void 0?void 0:c.call(n)),content:S=te((u=n.content)===null||u===void 0?void 0:u.call(n))}=e,l=!!(Array.isArray(y)?y.length:y),i=!!(Array.isArray(S)?S.length:y);return!l&&!i?null:b(xe,null,[l&&b("div",{class:`${d.value}-title`},[y]),b("div",{class:`${d.value}-inner-content`},[S])])};return()=>{const c=X(e.overlayClassName,f.value);return g(b(Qe,_(_(_({},Pe(e,["title","content"])),a),{},{prefixCls:d.value,ref:s,overlayClassName:c,transitionName:ke(m.value,"zoom-big",e.transitionName),"data-popover-inject":!0}),{title:w,default:n.default}))}}}),Mt=Le(Dt),Nt=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),re=k({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:Nt(),setup(e,t){let{slots:o,attrs:n}=t;const{prefixCls:a,direction:s}=H("avatar",e),d=x(()=>`${a.value}-group`),[r,g]=ze(a);return we(()=>{const f={size:e.size,shape:e.shape};zt(f)}),()=>{const{maxPopoverPlacement:f="top",maxCount:m,maxStyle:w,maxPopoverTrigger:c="hover",shape:u}=e,y={[d.value]:!0,[`${d.value}-rtl`]:s.value==="rtl",[`${n.class}`]:!!n.class,[g.value]:!0},S=Ce(o,e),l=He(S).map(($,p)=>oe($,{key:`avatar-key-${p}`})),i=l.length;if(m&&m<i){const $=l.slice(0,m),p=l.slice(m,i);return $.push(b(Mt,{key:"avatar-popover-key",content:p,trigger:c,placement:f,overlayClassName:`${d.value}-popover`},{default:()=>[b(G,{style:w,shape:u},{default:()=>[`+${i-m}`]})]})),r(b("div",_(_({},n),{},{class:y,style:n.style}),[$]))}return r(b("div",_(_({},n),{},{class:y,style:n.style}),[l]))}}});G.Group=re;G.install=function(e){return e.component(G.name,G),e.component(re.name,re),e};const Ie=()=>({arrow:Fe([Boolean,Object]),trigger:{type:[Array,String]},menu:Z(),overlay:W.any,visible:B(),open:B(),disabled:B(),danger:B(),autofocus:B(),align:Z(),getPopupContainer:Function,prefixCls:String,transitionName:String,placement:String,overlayClassName:String,overlayStyle:Z(),forceRender:B(),mouseEnterDelay:Number,mouseLeaveDelay:Number,openClassName:String,minOverlayWidthMatchTrigger:B(),destroyPopupOnHide:B(),onVisibleChange:{type:Function},"onUpdate:visible":{type:Function},onOpenChange:{type:Function},"onUpdate:open":{type:Function}}),J=dt(),Et=()=>v(v({},Ie()),{type:J.type,size:String,htmlType:J.htmlType,href:String,disabled:B(),prefixCls:String,icon:W.any,title:String,loading:J.loading,onClick:Ge()}),Lt=e=>{const{componentCls:t,antCls:o,paddingXS:n,opacityLoading:a}=e;return{[`${t}-button`]:{whiteSpace:"nowrap",[`&${o}-btn-group > ${o}-btn`]:{[`&-loading, &-loading + ${o}-btn`]:{cursor:"default",pointerEvents:"none",opacity:a},[`&:last-child:not(:first-child):not(${o}-btn-icon-only)`]:{paddingInline:n}}}}},jt=e=>{const{componentCls:t,menuCls:o,colorError:n,colorTextLightSolid:a}=e,s=`${o}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${o} ${s}`]:{[`&${s}-danger:not(${s}-disabled)`]:{color:n,"&:hover":{color:a,backgroundColor:n}}}}}},kt=e=>{const{componentCls:t,menuCls:o,zIndexPopup:n,dropdownArrowDistance:a,dropdownArrowOffset:s,sizePopupArrow:d,antCls:r,iconCls:g,motionDurationMid:f,dropdownPaddingVertical:m,fontSize:w,dropdownEdgeChildPadding:c,colorTextDisabled:u,fontSizeIcon:y,controlPaddingHorizontal:S,colorBgElevated:l,boxShadowPopoverArrow:i}=e;return[{[t]:v(v({},se(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:n,display:"block","&::before":{position:"absolute",insetBlock:-a+d/2,zIndex:-9999,opacity:1e-4,content:'""'},[`${t}-wrap`]:{position:"relative",[`${r}-btn > ${g}-down`]:{fontSize:y},[`${g}-down::before`]:{transition:`transform ${f}`}},[`${t}-wrap-open`]:{[`${g}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`
        &-show-arrow${t}-placement-topLeft,
        &-show-arrow${t}-placement-top,
        &-show-arrow${t}-placement-topRight
      `]:{paddingBottom:a},[`
        &-show-arrow${t}-placement-bottomLeft,
        &-show-arrow${t}-placement-bottom,
        &-show-arrow${t}-placement-bottomRight
      `]:{paddingTop:a},[`${t}-arrow`]:v({position:"absolute",zIndex:1,display:"block"},tt(d,e.borderRadiusXS,e.borderRadiusOuter,l,i)),[`
        &-placement-top > ${t}-arrow,
        &-placement-topLeft > ${t}-arrow,
        &-placement-topRight > ${t}-arrow
      `]:{bottom:a,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft > ${t}-arrow`]:{left:{_skip_check_:!0,value:s}},[`&-placement-topRight > ${t}-arrow`]:{right:{_skip_check_:!0,value:s}},[`
          &-placement-bottom > ${t}-arrow,
          &-placement-bottomLeft > ${t}-arrow,
          &-placement-bottomRight > ${t}-arrow
        `]:{top:a,transform:"translateY(-100%)"},[`&-placement-bottom > ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateY(-100%) translateX(-50%)"},[`&-placement-bottomLeft > ${t}-arrow`]:{left:{_skip_check_:!0,value:s}},[`&-placement-bottomRight > ${t}-arrow`]:{right:{_skip_check_:!0,value:s}},[`&${r}-slide-down-enter${r}-slide-down-enter-active${t}-placement-bottomLeft,
          &${r}-slide-down-appear${r}-slide-down-appear-active${t}-placement-bottomLeft,
          &${r}-slide-down-enter${r}-slide-down-enter-active${t}-placement-bottom,
          &${r}-slide-down-appear${r}-slide-down-appear-active${t}-placement-bottom,
          &${r}-slide-down-enter${r}-slide-down-enter-active${t}-placement-bottomRight,
          &${r}-slide-down-appear${r}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:ot},[`&${r}-slide-up-enter${r}-slide-up-enter-active${t}-placement-topLeft,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-placement-topLeft,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-placement-top,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-placement-top,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-placement-topRight,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-placement-topRight`]:{animationName:nt},[`&${r}-slide-down-leave${r}-slide-down-leave-active${t}-placement-bottomLeft,
          &${r}-slide-down-leave${r}-slide-down-leave-active${t}-placement-bottom,
          &${r}-slide-down-leave${r}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:at},[`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-placement-topLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-placement-top,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-placement-topRight`]:{animationName:rt}})},{[`${t} ${o}`]:{position:"relative",margin:0},[`${o}-submenu-popup`]:{position:"absolute",zIndex:n,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul,li":{listStyle:"none"},ul:{marginInline:"0.3em"}},[`${t}, ${t}-menu-submenu`]:{[o]:v(v({padding:c,listStyleType:"none",backgroundColor:l,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},me(e)),{[`${o}-item-group-title`]:{padding:`${m}px ${S}px`,color:e.colorTextDescription,transition:`all ${f}`},[`${o}-item`]:{position:"relative",display:"flex",alignItems:"center",borderRadius:e.borderRadiusSM},[`${o}-item-icon`]:{minWidth:w,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${o}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${f}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${o}-item, ${o}-submenu-title`]:v(v({clear:"both",margin:0,padding:`${m}px ${S}px`,color:e.colorText,fontWeight:"normal",fontSize:w,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${f}`,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},me(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:u,cursor:"not-allowed","&:hover":{color:u,backgroundColor:l,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${e.marginXXS}px 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:y,fontStyle:"normal"}}}),[`${o}-item-group-list`]:{margin:`0 ${e.marginXS}px`,padding:0,listStyle:"none"},[`${o}-submenu-title`]:{paddingInlineEnd:S+e.fontSizeSM},[`${o}-submenu-vertical`]:{position:"relative"},[`${o}-submenu${o}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:u,backgroundColor:l,cursor:"not-allowed"}},[`${o}-submenu-selected ${t}-menu-submenu-title`]:{color:e.colorPrimary}})}},[fe(e,"slide-up"),fe(e,"slide-down"),he(e,"move-up"),he(e,"move-down"),Oe(e,"zoom-big")]]},Ae=ie("Dropdown",(e,t)=>{let{rootPrefixCls:o}=t;const{marginXXS:n,sizePopupArrow:a,controlHeight:s,fontSize:d,lineHeight:r,paddingXXS:g,componentCls:f,borderRadiusOuter:m,borderRadiusLG:w}=e,c=(s-d*r)/2,{dropdownArrowOffset:u}=it({sizePopupArrow:a,contentRadius:w,borderRadiusOuter:m}),y=le(e,{menuCls:`${f}-menu`,rootPrefixCls:o,dropdownArrowDistance:a/2+n,dropdownArrowOffset:u,dropdownPaddingVertical:c,dropdownEdgeChildPadding:g});return[kt(y),Lt(y),jt(y)]},e=>({zIndexPopup:e.zIndexPopupBase+50}));var Ht=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const Ft=ne.Group,Gt=k({compatConfig:{MODE:3},name:"ADropdownButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:ce(Et(),{trigger:"hover",placement:"bottomRight",type:"default"}),slots:Object,setup(e,t){let{slots:o,attrs:n,emit:a}=t;const s=c=>{a("update:visible",c),a("visibleChange",c),a("update:open",c),a("openChange",c)},{prefixCls:d,direction:r,getPopupContainer:g}=H("dropdown",e),f=x(()=>`${d.value}-button`),[m,w]=Ae(d);return()=>{var c,u;const y=v(v({},e),n),{type:S="default",disabled:l,danger:i,loading:$,htmlType:p,class:h="",overlay:C=(c=o.overlay)===null||c===void 0?void 0:c.call(o),trigger:O,align:I,open:z,visible:R,onVisibleChange:D,placement:T=r.value==="rtl"?"bottomLeft":"bottomRight",href:A,title:P,icon:E=((u=o.icon)===null||u===void 0?void 0:u.call(o))||b(lt,null,null),mouseEnterDelay:M,mouseLeaveDelay:U,overlayClassName:L,overlayStyle:F,destroyPopupOnHide:K,onClick:Y,"onUpdate:open":Yt}=y,Te=Ht(y,["type","disabled","danger","loading","htmlType","class","overlay","trigger","align","open","visible","onVisibleChange","placement","href","title","icon","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","onClick","onUpdate:open"]),De={align:I,disabled:l,trigger:l?[]:O,placement:T,getPopupContainer:g==null?void 0:g.value,onOpenChange:s,mouseEnterDelay:M,mouseLeaveDelay:U,open:z??R,overlayClassName:L,overlayStyle:F,destroyPopupOnHide:K},ue=b(ne,{danger:i,type:S,disabled:l,loading:$,onClick:Y,htmlType:p,href:A,title:P},{default:o.default}),de=b(ne,{danger:i,type:S,icon:E},null);return m(b(Ft,_(_({},Te),{},{class:X(f.value,h,w.value)}),{default:()=>[o.leftButton?o.leftButton({button:ue}):ue,b(Re,De,{default:()=>[o.rightButton?o.rightButton({button:de}):de],overlay:()=>C})]}))}}}),Re=k({compatConfig:{MODE:3},name:"ADropdown",inheritAttrs:!1,props:ce(Ie(),{mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft",trigger:"hover"}),slots:Object,setup(e,t){let{slots:o,attrs:n,emit:a}=t;const{prefixCls:s,rootPrefixCls:d,direction:r,getPopupContainer:g}=H("dropdown",e),[f,m]=Ae(s),w=x(()=>{const{placement:l="",transitionName:i}=e;return i!==void 0?i:l.includes("top")?`${d.value}-slide-down`:`${d.value}-slide-up`});st({prefixCls:x(()=>`${s.value}-menu`),expandIcon:x(()=>b("span",{class:`${s.value}-menu-submenu-arrow`},[b(be,{class:`${s.value}-menu-submenu-arrow-icon`},null)])),mode:x(()=>"vertical"),selectable:x(()=>!1),onClick:()=>{},validator:l=>{}});const c=()=>{var l,i,$;const p=e.overlay||((l=o.overlay)===null||l===void 0?void 0:l.call(o)),h=Array.isArray(p)?p[0]:p;if(!h)return null;const C=h.props||{};$e(!C.mode||C.mode==="vertical","Dropdown",`mode="${C.mode}" is not supported for Dropdown's Menu.`);const{selectable:O=!1,expandIcon:I=($=(i=h.children)===null||i===void 0?void 0:i.expandIcon)===null||$===void 0?void 0:$.call(i)}=C,z=typeof I<"u"&&ve(I)?I:b("span",{class:`${s.value}-menu-submenu-arrow`},[b(be,{class:`${s.value}-menu-submenu-arrow-icon`},null)]);return ve(h)?oe(h,{mode:"vertical",selectable:O,expandIcon:()=>z}):h},u=x(()=>{const l=e.placement;if(!l)return r.value==="rtl"?"bottomRight":"bottomLeft";if(l.includes("Center")){const i=l.slice(0,l.indexOf("Center"));return $e(!l.includes("Center"),"Dropdown",`You are using '${l}' placement in Dropdown, which is deprecated. Try to use '${i}' instead.`),i}return l}),y=x(()=>typeof e.visible=="boolean"?e.visible:e.open),S=l=>{a("update:visible",l),a("visibleChange",l),a("update:open",l),a("openChange",l)};return()=>{var l,i;const{arrow:$,trigger:p,disabled:h,overlayClassName:C}=e,O=(l=o.default)===null||l===void 0?void 0:l.call(o)[0],I=oe(O,v({class:X((i=O==null?void 0:O.props)===null||i===void 0?void 0:i.class,{[`${s.value}-rtl`]:r.value==="rtl"},`${s.value}-trigger`)},h?{disabled:h}:{})),z=X(C,m.value,{[`${s.value}-rtl`]:r.value==="rtl"}),R=h?[]:p;let D;R&&R.includes("contextmenu")&&(D=!0);const T=ct({arrowPointAtCenter:typeof $=="object"&&$.pointAtCenter,autoAdjustOverflow:!0}),A=Pe(v(v(v({},e),n),{visible:y.value,builtinPlacements:T,overlayClassName:z,arrow:!!$,alignPoint:D,prefixCls:s.value,getPopupContainer:g==null?void 0:g.value,transitionName:w.value,trigger:R,onVisibleChange:S,placement:u.value}),["overlay","onUpdate:visible"]);return f(b(ut,A,{default:()=>[I],overlay:c}))}}});Re.Button=Gt;const Wt={small:8,middle:16,large:24},Xt=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:W.oneOf(ge("horizontal","vertical")).def("horizontal"),align:W.oneOf(ge("start","end","center","baseline")),wrap:B()});function Ut(e){return typeof e=="string"?Wt[e]:e||0}const V=k({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:Xt(),slots:Object,setup(e,t){let{slots:o,attrs:n}=t;const{prefixCls:a,space:s,direction:d}=H("space",e),[r,g]=pt(a),f=Ve(),m=x(()=>{var i,$,p;return(p=(i=e.size)!==null&&i!==void 0?i:($=s==null?void 0:s.value)===null||$===void 0?void 0:$.size)!==null&&p!==void 0?p:"small"}),w=ee(),c=ee();Q(m,()=>{[w.value,c.value]=(Array.isArray(m.value)?m.value:[m.value,m.value]).map(i=>Ut(i))},{immediate:!0});const u=x(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),y=x(()=>X(a.value,g.value,`${a.value}-${e.direction}`,{[`${a.value}-rtl`]:d.value==="rtl",[`${a.value}-align-${u.value}`]:u.value})),S=x(()=>d.value==="rtl"?"marginLeft":"marginRight"),l=x(()=>{const i={};return f.value&&(i.columnGap=`${w.value}px`,i.rowGap=`${c.value}px`),v(v({},i),e.wrap&&{flexWrap:"wrap",marginBottom:`${-c.value}px`})});return()=>{var i,$;const{wrap:p,direction:h="horizontal"}=e,C=(i=o.default)===null||i===void 0?void 0:i.call(o),O=te(C),I=O.length;if(I===0)return null;const z=($=o.split)===null||$===void 0?void 0:$.call(o),R=`${a.value}-item`,D=w.value,T=I-1;return b("div",_(_({},n),{},{class:[y.value,n.class],style:[l.value,n.style]}),[O.map((A,P)=>{let E=C.indexOf(A);E===-1&&(E=`$$space-${P}`);let M={};return f.value||(h==="vertical"?P<T&&(M={marginBottom:`${D/(z?2:1)}px`}):M=v(v({},P<T&&{[S.value]:`${D/(z?2:1)}px`}),p&&{paddingBottom:`${c.value}px`})),r(b(xe,{key:E},[b("div",{class:R,style:M},[A]),P<T&&z&&b("span",{class:`${R}-split`,style:M},[z])]))})])}}});V.Compact=ae;V.install=function(e){return e.component(V.name,V),e.component(ae.name,ae),e};var Vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};function ye(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable}))),n.forEach(function(a){Kt(e,a,o[a])})}return e}function Kt(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var Be=function(t,o){var n=ye({},t,o.attrs);return b(We,ye({},n,{icon:Vt}),null)};Be.displayName="UserOutlined";Be.inheritAttrs=!1;export{G as A,Re as D,Mt as P,V as S,Be as U,Gt as a,he as i,wt as u};
