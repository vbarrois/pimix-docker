var V=Object.defineProperty;var C=(e,n,o)=>n in e?V(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var u=(e,n,o)=>(C(e,typeof n!="symbol"?n+"":n,o),o);import{O as N,S as D,Q as B,I as A,J as T,K as j,U as R,P as x,L as Q,M as z,N as F,V as M,s as J,A as G,u as K,B as U,l as _,Y as d,$ as p,G as Y,_ as H,q as r,b as W,o as i,c as f,d as l,w as X,z as a,t as v,a9 as c,n as I,a0 as Z}from"./index-044614f3.js";import{O as ee}from"./OptionsIcon-9a2a7241.js";var oe=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ne=(e,n,o,s)=>{for(var t=s>1?void 0:s?te(n,o):n,m=e.length-1,h;m>=0;m--)(h=e[m])&&(t=(s?h(n,o,t):h(t))||t);return s&&t&&oe(n,o,t),t};let g=class extends M{constructor(){super(...arguments);u(this,"controller",J(()=>G()));u(this,"song");u(this,"queueitem");u(this,"playlist");u(this,"appStore",K());u(this,"queueStore",U())}created(){var o,s;_.isNil((o=this.currentSong)==null?void 0:o.id)||this.controller.loadInfos((s=this.currentSong)==null?void 0:s.id)}get currentSong(){var o;return _.isNil((o=this.queueitem)==null?void 0:o.song)?this.song:this.queueitem.song}get origin(){return _.isNil(this.queueitem)?"":this.queueitem.origin}getThumb(o){return this.controller.getThumb(o).src}togglePopup(){var s;let o=[];this.queueitem&&!((s=this.queueitem)!=null&&s.executed)&&o.push({label:`${this.$t("command.remove")}`,icon:d(()=>p(()=>import("./index-044614f3.js").then(t=>t.aq),["assets/index-044614f3.js","assets/index-f2dd47f5.css"])),action:()=>{this.appStore.removeQueuedItem(this.queueitem.uuid)}}),this.playlist&&o.push({label:`${this.$t("command.remove")}`,icon:d(()=>p(()=>import("./index-044614f3.js").then(t=>t.aq),["assets/index-044614f3.js","assets/index-f2dd47f5.css"])),action:()=>{Y.emit("playlist",{action:"remove",song:this.controller.song})}}),this.appStore.openPopupProperties([...o,{label:this.$t("command.addqueue"),icon:d(()=>p(()=>import("./index-044614f3.js").then(t=>t.ao),["assets/index-044614f3.js","assets/index-f2dd47f5.css"])),action:()=>{this.appStore.queueSong(this.controller.song)}},{label:this.$t("command.addnext"),icon:d(()=>p(()=>import("./index-044614f3.js").then(t=>t.am),["assets/index-044614f3.js","assets/index-f2dd47f5.css"])),action:()=>{this.appStore.afterSong(this.controller.song)}},{label:this.$t("command.voteup"),icon:d(()=>p(()=>import("./index-044614f3.js").then(t=>t.al),["assets/index-044614f3.js","assets/index-f2dd47f5.css"])),action:()=>{this.appStore.voteSong(this.controller.song)}},{label:this.$t("command.playlistadd"),icon:d(()=>p(()=>import("./index-044614f3.js").then(t=>t.ap),["assets/index-044614f3.js","assets/index-f2dd47f5.css"])),action:()=>{this.appStore.openQuickPlaylist(this.controller.song)}}])}};g=ne([N({props:{song:Object,queueitem:Object,playlist:Object},components:{SongCategories:D,NoteIcon:B,ShuffleIcon:A,BrainIcon:T,VoteIcon:j,LikeOnIcon:R,PlaylistIcon:x,ForgotIcon:Q,PreferedIcon:z,NotLikedIcon:F,OptionsIcon:ee}})],g);const se={class:"flex relative h-full items-center"},re={class:"w-12 h-12 md:w-20 md:h-20 rounded my-auto"},ie={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"w-12 h-12 md:w-20 md:h-20 rounded-bl-[30px] rounded-tr-[30px] bg-[color:var(--font--active--transparent)] text-[color:var(--font--light)] absolute"},ae=l("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1),le=[ae],ce={class:"flex flex-col pl-2 pr-2 flex-1 min-w-0"},ue={class:"grid grid-cols-1"},de={class:"text-left md:text-xl font-bold truncate"},pe={class:"hidden md:block text-left truncate"},he={class:"flex gap-1"},me={class:"hidden md:block"};function _e(e,n,o,s,t,m){const h=r("NoteIcon"),S=r("LikeOnIcon"),y=r("ShuffleIcon"),b=r("PreferedIcon"),k=r("NotLikedIcon"),P=r("ForgotIcon"),O=r("BrainIcon"),w=r("VoteIcon"),$=r("PlaylistIcon"),q=r("SongCategories"),L=r("OptionsIcon"),E=W("lazy");return i(),f("div",{ref:`songcard-${e.currentSong.id}`,class:"relative flex p-2 __card"},[l("div",se,[X(l("img",re,null,512),[[E,e.getThumb(e.currentSong.id)]]),e.appStore.isSongSelected(e.currentSong)?(i(),f("svg",ie,le)):a("",!0)]),l("div",ce,[l("div",ue,[l("span",de,v(e.controller.title),1),l("span",pe,v(e.controller.album),1)]),l("span",he,[l("div",me,[e.origin=="DJ"?(i(),c(h,{key:0,class:"w-5 h-5"})):a("",!0),e.origin=="favorites"?(i(),c(S,{key:1,class:"w-5 h-5"})):a("",!0),e.origin=="shuffle"?(i(),c(y,{key:2})):a("",!0),e.origin=="safelike"?(i(),c(b,{key:3})):a("",!0),e.origin=="probablynotliked"?(i(),c(k,{key:4})):a("",!0),e.origin=="forgot"?(i(),c(P,{key:5})):a("",!0),e.origin=="discover"?(i(),c(O,{key:6})):a("",!0),e.origin=="vote"?(i(),c(w,{key:7})):a("",!0),e.origin=="playlist"?(i(),c($,{key:8})):a("",!0)]),I(q,{reduced:"true",song:e.controller.song},null,8,["song"])])]),l("div",{class:"flex rounded-none items-center",onClick:n[0]||(n[0]=Z(ge=>e.togglePopup(e.song),["stop"]))},[I(L)])],512)}const ye=H(g,[["render",_e]]);export{ye as S};
