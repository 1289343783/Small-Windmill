import{bb as p,n as x,_ as o,a4 as h,W as f,q as v}from"./index-CtpKqiTG.js";const g=["xxxl","xxl","xl","lg","md","sm","xs"],b=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`,xxxl:`{min-width: ${e.screenXXXL}px}`});function E(){const[,e]=p();return x(()=>{const i=b(e.value),n=new Map;let d=-1,c={};return{matchHandlers:{},dispatch(s){return c=s,n.forEach(r=>r(c)),n.size>=1},subscribe(s){return n.size||this.register(),d+=1,n.set(d,s),s(c),d},unsubscribe(s){n.delete(s),n.size||this.unregister()},unregister(){Object.keys(i).forEach(s=>{const r=i[s],t=this.matchHandlers[r];t==null||t.mql.removeListener(t==null?void 0:t.listener)}),n.clear()},register(){Object.keys(i).forEach(s=>{const r=i[s],t=m=>{let{matches:u}=m;this.dispatch(o(o({},c),{[s]:u}))},l=window.matchMedia(r);l.addListener(t),this.matchHandlers[r]={mql:l,listener:t},t(l)})},responsiveMap:i}})}const w=()=>h()&&window.document.documentElement;let a;const y=()=>{if(!w())return!1;if(a!==void 0)return a;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),a=e.scrollHeight===1,document.body.removeChild(e),a},X=()=>{const e=f(!1);return v(()=>{e.value=y()}),e};export{X as a,w as c,g as r,E as u};