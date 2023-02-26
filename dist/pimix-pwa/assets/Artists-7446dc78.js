var E=Object.defineProperty;var L=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var f=(e,t,o)=>(L(e,typeof t!="symbol"?t+"":t,o),o);import{O as I,p as T,a9 as K,a0 as N,V as F,s as B,a5 as D,_ as k,q as _,o as n,c as p,n as g,d as r,t as c,a3 as U,U as G,u as M,M as P,Q as x,w as S,a8 as V,F as h,e as b,v as j,z as y}from"./index-b74e3224.js";import{O as z}from"./OptionsIcon-5fedd612.js";import{S as R}from"./SortFiltertBar-7776ec66.js";var q=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,H=(e,t,o,a)=>{for(var s=a>1?void 0:a?Q(t,o):t,d=e.length-1,i;d>=0;d--)(i=e[d])&&(s=(a?i(t,o,s):i(s))||s);return a&&s&&q(t,o,s),s};let A=class extends F{constructor(){super(...arguments);f(this,"controller",B(()=>D()));f(this,"artist")}gotoArtist(){const o=this.artist;this.$router.push({name:"artist",params:{artistids:o.id}})}toggleArtist(){this.controller.saveArtistState(this.artist)}};A=H([I({props:{artist:Object},components:{Toggle:T,StatsGroup:K,ArtistIcon:N}})],A);const J={class:"flex flex-col pl-2 pr-2 flex-1 min-w-0"},W={class:"text-left md:text-xl font-bold truncate"},X={class:"text-left flex truncate justify-between"},Y={class:"flex gap-1 __badge__label"};function Z(e,t,o,a,s,d){const i=_("ArtistIcon"),v=_("StatsGroup"),$=_("Toggle");return n(),p("div",{class:"flex p-2",onClick:t[1]||(t[1]=u=>e.gotoArtist())},[g(i),r("div",J,[r("span",W,c(e.artist.name),1),r("span",X,[r("span",Y,[r("span",null,c(e.artist.yearfrom)+" - "+c(e.artist.yearto),1)])]),g(v,{group:e.artist,reduced:"true"},null,8,["group"])]),r("div",null,[(n(),U($,{key:e.artist.state,modelValue:e.artist.state,"onUpdate:modelValue":t[0]||(t[0]=u=>e.artist.state=u),"true-value":"1","false-value":"0","on-label":"ON","off-label":"OFF",class:"float-right ml-1 mt-4 mb-1 custom-control",onClick:G(e.toggleArtist,["stop"])},null,8,["modelValue","onClick"]))])])}const ee=k(A,[["render",Z]]);var te=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,se=(e,t,o,a)=>{for(var s=a>1?void 0:a?oe(t,o):t,d=e.length-1,i;d>=0;d--)(i=e[d])&&(s=(a?i(t,o,s):i(s))||s);return a&&s&&te(t,o,s),s};let w=class extends F{constructor(){super(...arguments);f(this,"controller",B(()=>D()));f(this,"appStore",M())}created(){this.controller.initFromCookie("artists"),this.controller.getList()}unmounted(){this.controller.saveCookie("artists")}only(o){this.controller.setOnly(o)}except(o){this.controller.setAllExcept(o)}togglePopup(o){this.appStore.openPopupProperties([{label:`${this.$t("library.filtering.only")} ${o.name}`,icon:P(()=>x(()=>import("./OnlyIcon-621dd92c.js"),["assets/OnlyIcon-621dd92c.js","assets/index-b74e3224.js","assets/index-f7d88844.css"])),action:()=>{this.only(o)}},{label:`${this.$t("library.filtering.allexcept")} ${o.name}`,icon:P(()=>x(()=>import("./AllExcept-f6c8ba88.js"),["assets/AllExcept-f6c8ba88.js","assets/index-b74e3224.js","assets/index-f7d88844.css"])),action:()=>{this.except(o)}}])}};w=se([I({components:{ArtistCard:ee,SortFilterBar:R,OptionsIcon:z}})],w);const re={class:"flex flex-col w-full"},le={class:"flex justify-center py-1 gap-1 __container__navigation"},ne={class:"__badge__label2"},ae={class:"__badge__label2"},ie={class:"__badge__label2"},pe={key:0,class:"flex justify-center ml-auto mr-auto md:w-[50%] mt-1 mb-1 text-[color:var(--font--button)]"},ce={class:"inline-flex w-[70px] rounded-l-md justify-end px-2 __field__label"},de=["value"],_e={key:0,class:"hidden md:inline-flex w-[140px] justify-end px-2 __field__label whitespace-nowrap"},ue=["value"],me=["onClick"];function fe(e,t,o,a,s,d){var u,O,C;const i=_("SortFilterBar"),v=_("ArtistCard"),$=_("OptionsIcon");return n(),p("div",re,[r("div",le,[r("span",ne,c((u=e.controller)==null?void 0:u.total)+" artistes",1),r("span",ae,c((O=e.controller)==null?void 0:O.active)+" actifs",1),r("span",ie,c((C=e.controller)==null?void 0:C.activesongs)+" morceaux",1)]),g(i,{navigator:e.controller.navigator},null,8,["navigator"]),e.controller.isFiltered?y("",!0):(n(),p("div",pe,[r("span",ce,c(e.$t("library.filtering.sort.page")),1),S(r("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.controller.pageIndex=l),class:j(["w-[80px] md:w-[140px] __select__field",{"rounded-r-md":e.controller.sortKey=="name"}])},[(n(!0),p(h,null,b(e.controller.pages,(l,m)=>(n(),p("option",{key:`page-${m}`,value:m},c(l),9,de))),128))],2),[[V,e.controller.pageIndex]]),e.controller.sortKey!="name"?(n(),p("span",_e,c(e.$t("library.filtering.sort.itemsperpage")),1)):y("",!0),e.controller.sortKey!="name"?S((n(),p("select",{key:1,"onUpdate:modelValue":t[1]||(t[1]=l=>e.controller.perPage=l),class:"w-[90px] md:w-[140px] __select__field rounded-r-md"},[(n(),p(h,null,b([10,20,50,100],(l,m)=>r("option",{key:`itemsperpage-${m}`,value:l},c(l),9,ue)),64))],512)),[[V,e.controller.perPage]]):y("",!0)])),(n(),p("div",{key:`list-${e.controller.sortKey}`,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-1 gap-1 __container__list"},[(n(!0),p(h,null,b(e.controller.getListByPage(),l=>(n(),p("div",{key:`${l.id}`,class:j(["flex",{disabled:l.state==0}])},[g(v,{class:"truncate w-full __card rounded-l-xl",artist:l},null,8,["artist"]),r("div",{class:"flex __icon__action rounded-r-xl items-center",onClick:m=>e.togglePopup(l)},[g($)],8,me)],2))),128))]))])}const Ae=k(w,[["render",fe]]);export{Ae as default};