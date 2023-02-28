var q=Object.defineProperty;var z=(e,t,s)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var d=(e,t,s)=>(z(e,typeof t!="symbol"?t+"":t,s),s);import{V as U,u as W,W as X,X as Y,a3 as J,s as Q,l as g,G as O,Y as D,O as Z,a4 as x,a5 as ee,a6 as se,a7 as te,a8 as re,$ as N,_ as oe,q as m,b as ne,o,c as i,d as a,F as V,e as G,t as n,z as p,n as S,g as K,w as ie,a9 as ae}from"./index-044614f3.js";import{S as le}from"./SongsController-35202972.js";import{S as ce}from"./SongCard-060c8499.js";import"./OptionsIcon-9a2a7241.js";var he=Object.defineProperty,de=Object.getOwnPropertyDescriptor,pe=(e,t,s,r)=>{for(var l=r>1?void 0:r?de(t,s):t,u=e.length-1,h;u>=0;u--)(h=e[u])&&(l=(r?h(t,s,l):h(l))||l);return r&&l&&he(t,s,l),l};let f=class extends U{constructor(){super(...arguments);d(this,"appStore",W());d(this,"mixmeStore",X());d(this,"trackStore",Y());d(this,"searchStore",J());d(this,"songsController",Q(()=>le()));d(this,"genreids");d(this,"artistids")}mounted(){g.isNil(this.genreids)&&g.isNil(this.artistids)&&this.searchStore.getCookie(),O.on("interface",s=>{switch(s.command){case"onFilterChanged":{this.loadContent();break}case"onFavoriteUpdate":{this.searchStore.sortingKey==="favorites"&&this.loadContent();break}}}),this.loadContent()}unmounted(){O.off("interface")}async loadContent(){this.appStore.startLoading(),this.searchStore.setSearchResults(null),this.$router.currentRoute.value.name==="genre"&&(this.searchStore.clear(),this.searchStore.sortingKey="lastadded",this.searchStore.genreids=g.map(this.genreids.split(","),r=>parseInt(r))),this.$router.currentRoute.value.name==="artist"&&(this.searchStore.clear(),this.searchStore.sortingKey="lastadded",this.searchStore.artistids=g.map(this.artistids.split(","),r=>parseInt(r))),this.searchStore.keywords.length===0&&this.songsController.clearResults();const s={keywords:this.searchStore.keywords,genreids:this.searchStore.genreids,artistids:this.searchStore.artistids,period:{from:this.searchStore.yearFrom,to:this.searchStore.yearTo},sortKey:this.searchStore.sortingKey,sincehours:this.searchStore.sincehours,activeSong:this.trackStore.song,notplayedsinceminutes:this.searchStore.notplayedsinceminutes,limit:this.searchStore.limit};console.debug(">> Get library list",s),await this.songsController.getList(s),s.keywords.length>0?this.searchStore.setSearchResults(this.songsController.songs.length):this.searchStore.setSearchResults(null),this.$router.currentRoute.value.name==="library"&&this.searchStore.setCookie(),this.appStore.endLoading()}longclick(){this.appStore.activeSelectionMode(!0)}songSelected(s){this.appStore.isSelectionActive?this.appStore.selectSong(s):this.appStore.openSongIDCard(s)}cleanKeyword(s){var l;const r=(l=this.searchStore.keywords)==null?void 0:l.trim().split(" ");this.searchStore.keywords=g.remove(r,u=>u.trim()!==s.trim()||u.trim().length===0).join(" "),this.songsController.clearResults(),this.loadContent()}cleanPeriod(){this.searchStore.yearFrom=null,this.searchStore.yearTo=null,this.loadContent()}cleanSinceHours(){this.searchStore.sincehours=0,this.loadContent()}cleanNotPlayedSinceMinutes(){this.searchStore.notplayedsinceminutes=0,this.loadContent()}popupArtists(){this.appStore.openPopupProperties(g.map(this.songsController.searchResults.artists,s=>({label:s.name,icon:D(()=>N(()=>import("./index-044614f3.js").then(r=>r.an),["assets/index-044614f3.js","assets/index-f2dd47f5.css"])),action:()=>{this.$router.push({name:"artist",params:{artistids:s.id}})}})))}popupGenres(){this.appStore.openPopupProperties(g.map(this.songsController.searchResults.genres,s=>({label:s.name,icon:D(()=>N(()=>import("./index-044614f3.js").then(r=>r.an),["assets/index-044614f3.js","assets/index-f2dd47f5.css"])),action:()=>{this.$router.push({name:"genre",params:{genreids:s.id}})}})))}};f=pe([Z({components:{SongCard:ce,CloseIcon:x,TitreIcon:ee,ArtistIcon:se,GenreIcon:te,ScoreIcon:re},props:{genreids:String,artistids:String,song:Object}})],f);const ue={class:"flex flex-col w-full h-full mt-0"},ge={class:"flex flex-col md:flex-row text-center px-1 gap-1 py-1 __container__navigation"},Se={class:"flex flex-wrap gap-1"},me={key:0,class:"flex gap-1 items-center __badge__label"},fe={key:0},ye={key:1},_e={key:1,class:"flex gap-1 items-center __badge__label"},Ce={key:2,class:"flex gap-1 items-center __badge__label"},ve={class:"flex flex-wrap gap-1 justify-end"},be={class:"__badge__label2 flex gap-1 items-center"},ke={class:"hidden md:flex"},we={class:"hidden md:flex"},$e={class:"md:hidden"},Ie={class:"hidden md:flex"},Re={class:"md:hidden"},Pe={class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 __container__list"},Te={key:0,class:"inline-flex m-2 p-10 text-xl justify-center text-center bg-[color:var(--font--active)] text-[color:var(--font--light)] truncate"};function Ae(e,t,s,r,l,u){var y,_,C,v,b,k,w,$,I,R,P,T,A,F;const h=m("CloseIcon"),j=m("TitreIcon"),E=m("ArtistIcon"),B=m("GenreIcon"),M=m("SongCard"),H=ne("longpress");return o(),i("div",ue,[a("div",ge,[a("div",Se,[(o(!0),i(V,null,G(e.songsController.keywords,c=>(o(),i("div",{key:`kw-${c}`,class:"flex items-center __badge__label"},[K(n(c)+" ",1),S(h,{class:"cursor-pointer w-4 h-4",onClick:L=>e.cleanKeyword(c)},null,8,["onClick"])]))),128)),((y=e.searchStore.yearFrom)==null?void 0:y.length)>0||((_=e.searchStore.yearTo)==null?void 0:_.length)>0?(o(),i("div",me,[((C=e.searchStore.yearFrom)==null?void 0:C.length)>0?(o(),i("span",fe,n(e.$tc(((v=e.searchStore.yearTo)==null?void 0:v.length)>0?"library.filtering.periodfrom":"library.filtering.periodafter"))+" "+n(e.searchStore.yearFrom),1)):p("",!0),((b=e.searchStore.yearTo)==null?void 0:b.length)>0?(o(),i("span",ye,n(e.$tc(((k=e.searchStore.yearFrom)==null?void 0:k.length)>0?"library.filtering.periodfromto":"library.filtering.periodto"))+" "+n(e.searchStore.yearTo),1)):p("",!0),S(h,{class:"cursor-pointer",onClick:e.cleanPeriod},null,8,["onClick"])])):p("",!0),e.searchStore.sincehours>0?(o(),i("div",_e,[a("span",null,n(e.$tc("library.filtering.history",{hours:e.searchStore.sincehours})),1),S(h,{class:"cursor-pointer",onClick:e.cleanSinceHours},null,8,["onClick"])])):p("",!0),e.searchStore.notplayedsinceminutes>0?(o(),i("div",Ce,[a("span",null,n(e.$tc("library.filtering.notplayedsince",{minutes:e.searchStore.notplayedsinceminutes})),1),S(h,{class:"cursor-pointer",onClick:e.cleanNotPlayedSinceMinutes},null,8,["onClick"])])):p("",!0)]),a("div",ve,[a("span",be,[S(j,{class:"w-4 h-4"}),a("span",ke,n(e.$t("stats.songs")),1),K(" "+n((w=e.songsController.songs)==null?void 0:w.length),1)]),(($=e.songsController.searchResults.artists)==null?void 0:$.length)>0?(o(),i("span",{key:0,class:"__badge__label2 flex gap-1 items-center cursor-pointer",onClick:t[0]||(t[0]=c=>e.popupArtists())},[S(E,{class:"w-4 h-4"}),a("span",we,n(e.$tc("library.filtering.resultartist",((I=e.songsController.searchResults.artists)==null?void 0:I.length)||0)),1),a("span",$e,n(((R=e.songsController.searchResults.artists)==null?void 0:R.length)||0),1)])):p("",!0),((P=e.songsController.searchResults.genres)==null?void 0:P.length)>0?(o(),i("span",{key:1,class:"__badge__label2 flex gap-1 items-center cursor-pointer",onClick:t[1]||(t[1]=c=>e.popupGenres())},[S(B,{class:"w-4 h-4"}),a("span",Ie,n(e.$tc("library.filtering.resultgenre",((T=e.songsController.searchResults.genres)==null?void 0:T.length)||0)),1),a("span",Re,n(((A=e.songsController.searchResults.genres)==null?void 0:A.length)||0),1)])):p("",!0)])]),a("div",Pe,[(o(!0),i(V,null,G(e.songsController.songs,(c,L)=>(o(),i("div",{key:L,class:"flex truncate cursor-pointer"},[ie((o(),ae(M,{key:c.id,class:"w-full",song:c,onClick:Fe=>e.songSelected(c)},null,8,["song","onClick"])),[[H,e.longclick]])]))),128)),((F=e.songsController.songs)==null?void 0:F.length)==0?(o(),i("div",Te,n(e.$t("library.filtering.noresult")),1)):p("",!0)])])}const Ke=oe(f,[["render",Ae]]);export{Ke as default};