var x=Object.defineProperty;var H=(e,t,s)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var d=(e,t,s)=>(H(e,typeof t!="symbol"?t+"":t,s),s);import{_ as w,o as i,c as l,d as o,V as y,a3 as F,u as I,s as m,G as S,aa as L,ab as V,O as B,a4 as k,q as v,t as h,n as u,a0 as g,F as C,e as $}from"./index-044614f3.js";const O={},A={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=o("g",{"clip-path":"url(#clip0_16_151)"},[o("path",{d:"M21 4V6H20L15 13.5V22H9V13.5L4 6H3V4H21ZM6.404 6L11 12.894V20H13V12.894L17.596 6H6.404Z",fill:"currentColor"})],-1),P=o("defs",null,[o("clipPath",{id:"clip0_16_151"},[o("rect",{width:"24",height:"24",fill:"white"})])],-1),D=[G,P];function M(e,t){return i(),l("svg",A,D)}const j=w(O,[["render",M]]);var N=Object.defineProperty,R=Object.getOwnPropertyDescriptor,Z=(e,t,s,a)=>{for(var n=a>1?void 0:a?R(t,s):t,p=e.length-1,c;p>=0;p--)(c=e[p])&&(n=(a?c(t,s,n):c(n))||n);return a&&n&&N(t,s,n),n};let _=class extends y{constructor(){super(...arguments);d(this,"searchStore",F());d(this,"appStore",I());d(this,"genresCtrl",m(()=>L()));d(this,"artistsCtrl",m(()=>V()))}get genres(){var s;return((s=this.searchStore.genreids)==null?void 0:s.length)>0?(this.genresCtrl.getListFromIds(this.searchStore.genreids),this.genresCtrl.genres):[]}get artists(){var s;return((s=this.searchStore.artistids)==null?void 0:s.length)>0?(this.artistsCtrl.getListFromIds(this.searchStore.artistids),this.artistsCtrl.artists):[]}removeGenre(s){const a=s;this.searchStore.removeGenreId(a.id),S.emit("interface",{command:"onFilterChanged"})}removeArtist(s){const a=s;this.searchStore.removeArtistId(a.id),S.emit("interface",{command:"onFilterChanged"})}};_=Z([B({components:{CloseIcon:k,FilterIcon:j}})],_);const q={class:"flex flex-1 items-center"},E={class:"grid grid-cols-1 truncate uppercase"},K={class:"flex"},z=["onClick"],J=["for"],Q={class:"flex"},T=["onClick"],U=["for"],W={class:"truncate"};function X(e,t,s,a,n,p){const c=v("FilterIcon"),f=v("CloseIcon");return e.searchStore.getSearchResults()==null?(i(),l("div",{key:0,class:"flex flex-1 flex-col px-2 py-2 gap-1",onClick:t[1]||(t[1]=(...r)=>e.appStore.toggleSearchHeaderStatusBar&&e.appStore.toggleSearchHeaderStatusBar(...r))},[o("h1",q,[o("div",E,h(e.$t(`library.genius.${e.searchStore.sortingKey}`)),1),u(c,{width:"30",height:"30",class:"cursor-pointer ml-auto",onClick:t[0]||(t[0]=g(r=>e.appStore.openFiltering(),["stop"]))})]),o("div",K,[(i(!0),l(C,null,$(e.genres,r=>(i(),l("div",{key:`genre-${r.id}`,class:"flex __genre__badge text-xs md:text-sm items-center whitespace-nowrap",onClick:g(b=>e.removeGenre(r),["stop"])},[o("label",{for:`genre-${r.id}`},h(r.name),9,J),u(f,{id:"icon-close",class:"mt-auto mb-auto"})],8,z))),128))]),o("div",Q,[(i(!0),l(C,null,$(e.artists,r=>(i(),l("div",{key:`artist-${r.id}`,class:"flex __artist__badge text-xs md:text-sm items-center whitespace-nowrap",onClick:g(b=>e.removeArtist(r),["stop"])},[o("label",{for:`artist-${r.id}`},h(r.name),9,U),u(f,{id:"icon-close",class:"mt-auto mb-auto"})],8,T))),128))])])):(i(),l("div",{key:1,class:"flex flex-1 flex-col px-2 py-2 gap-1 cursor-pointer",onClick:t[2]||(t[2]=(...r)=>e.appStore.toggleSearchHeaderStatusBar&&e.appStore.toggleSearchHeaderStatusBar(...r))},[o("h1",W,h(e.$t("header.searchresults"))+" ("+h(e.searchStore.getSearchResults())+")",1)]))}const se=w(_,[["render",X]]);export{se as default};