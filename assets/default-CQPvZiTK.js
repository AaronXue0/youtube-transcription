import{p as V,m as x,a as S,b as I,c as H,g as F,r as B,d as j,t as h,s as w,u as M,e as s,f as P,h as R,i as a,j as z,k as A,w as T,l as p,o as c,n as _,q as u,v as D,F as E,x as N,y as r,z as m,A as Z,B as $,C as q,V as G,D as O,E as U}from"./index-CiVXmEyu.js";import{m as X,a as Y,b as J,u as K,c as Q,d as W,e as ee,V as te,_ as oe}from"./_plugin-vue_export-helper-B1qjv3pZ.js";const se=V({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...X(),...x(),...Y(),...S(),...J(),...I({tag:"footer"}),...H()},"VFooter"),ae=F()({name:"VFooter",props:se(),setup(e,n){let{slots:l}=n;const o=B(),{themeClasses:t}=j(e),{backgroundColorClasses:C,backgroundColorStyles:y}=K(h(e,"color")),{borderClasses:g}=Q(e),{elevationClasses:b}=W(e),{roundedClasses:L}=ee(e),d=w(32),{resizeRef:k}=M(i=>{i.length&&(d.value=i[0].target.clientHeight)}),f=s(()=>e.height==="auto"?d.value:parseInt(e.height,10));return P(()=>e.app,()=>{const i=A({id:e.name,order:s(()=>parseInt(e.order,10)),position:s(()=>"bottom"),layoutSize:f,elementSize:s(()=>e.height==="auto"?void 0:f.value),active:s(()=>e.app),absolute:h(e,"absolute")});T(()=>{o.value=i.layoutItemStyles.value})}),R(()=>a(e.tag,{ref:k,class:["v-footer",t.value,C.value,g.value,b.value,L.value,e.class],style:[y.value,e.app?o.value:{height:z(e.height)},e.style]},l)),{}}}),v=e=>($("data-v-dfb8bf39"),e=e(),q(),e),ne=["href","title"],ie={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},re=v(()=>r("span",{class:"d-none d-sm-inline-block"},"Vuetify, LLC",-1)),le=v(()=>r("a",{class:"text-decoration-none on-surface",href:"https://vuetifyjs.com/about/licensing/",rel:"noopener noreferrer",target:"_blank"}," MIT License ",-1)),ce=p({__name:"AppFooter",setup(e){const n=[{title:"Vuetify Documentation",icon:"$vuetify",href:"https://vuetifyjs.com/"},{title:"Vuetify Support",icon:"mdi-shield-star-outline",href:"https://support.vuetifyjs.com/"},{title:"Vuetify X",icon:["M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z"],href:"https://x.com/vuetifyjs"},{title:"Vuetify GitHub",icon:"mdi-github",href:"https://github.com/vuetifyjs/vuetify"},{title:"Vuetify Discord",icon:["M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"],href:"https://community.vuetifyjs.com/"},{title:"Vuetify Reddit",icon:"mdi-reddit",href:"https://reddit.com/r/vuetifyjs"}];return(l,o)=>(c(),_(ae,{height:"40",app:""},{default:u(()=>[(c(),D(E,null,N(n,t=>r("a",{key:t.title,href:t.href,title:t.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[a(te,{icon:t.icon,size:t.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,ne)),64)),r("div",ie,[m(" © 2016-"+Z(new Date().getFullYear())+" ",1),re,m(" — "),le])]),_:1}))}}),ue=oe(ce,[["__scopeId","data-v-dfb8bf39"]]),he=p({__name:"default",setup(e){return(n,l)=>{const o=O("router-view"),t=ue;return c(),_(G,null,{default:u(()=>[a(U,null,{default:u(()=>[a(o)]),_:1}),a(t)]),_:1})}}});export{he as default};
