var S=Object.defineProperty;var v=(t,s,e)=>s in t?S(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var l=(t,s,e)=>(v(t,typeof s!="symbol"?s+"":s,e),e);import{V as A,a3 as B,u as I,s as b,l as V,ab as $,O as k,p as w,ag as _,a5 as H,ah as O,ai as y,a8 as D,af as N,_ as P,q as p,o as d,c as T,d as f,n as g,a0 as m,t as G,a9 as j,z as E}from"./index-044614f3.js";var q=Object.defineProperty,z=Object.getOwnPropertyDescriptor,M=(t,s,e,a)=>{for(var r=a>1?void 0:a?z(s,e):s,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=(a?o(s,e,r):o(r))||r);return a&&r&&q(s,e,r),r};let c=class extends A{constructor(){super(...arguments);l(this,"searchStore",B());l(this,"appStore",I());l(this,"artistCtrl",b(()=>$()));l(this,"artistids")}mounted(){var a;const e=parseInt((a=this.artistids)==null?void 0:a.split(",")[0]);V.isNil(e)||this.artistCtrl.getDetails(e)}toggleArtist(){this.artistCtrl.saveArtistState(this.artistCtrl.artist)}closeArtist(){var e;this.searchStore.removeArtistId((e=this.artistCtrl.artist)==null?void 0:e.id),this.$router.go(-1)}};c=M([k({props:{artistids:String},components:{Toggle:w,BackIcon:_,TitreIcon:H,HeadsetIcon:O,RatioIcon:y,ScoreIcon:D,StatsGroup:N}})],c);const R={class:"flex items-center"},U={class:"overflow-hidden whitespace-nowrap truncate"};function F(t,s,e,a,r,i){var u;const o=p("BackIcon"),C=p("Toggle"),h=p("StatsGroup");return d(),T("div",{class:"flex flex-1 flex-col px-2 py-2",onClick:s[1]||(s[1]=(...n)=>t.appStore.toggleSearchHeaderStatusBar&&t.appStore.toggleSearchHeaderStatusBar(...n))},[f("h1",R,[g(o,{class:"mr-2 items-center cursor-pointer w-10 h-10",onClick:m(t.closeArtist,["stop"])},null,8,["onClick"]),f("span",U,G((u=t.artistCtrl.artist)==null?void 0:u.name),1),t.artistCtrl.artist?(d(),j(C,{key:t.artistCtrl.artist.state,modelValue:t.artistCtrl.artist.state,"onUpdate:modelValue":s[0]||(s[0]=n=>t.artistCtrl.artist.state=n),"true-value":"1","false-value":"0","on-label":t.$t("settings.yes"),"off-label":t.$t("settings.no"),class:"ml-auto custom-control",onClick:m(t.toggleArtist,["stop"])},null,8,["modelValue","on-label","off-label","onClick"])):E("",!0)]),g(h,{group:t.artistCtrl.artist},null,8,["group"])])}const Q=P(c,[["render",F]]);export{Q as default};