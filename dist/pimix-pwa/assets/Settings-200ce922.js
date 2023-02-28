var y=Object.defineProperty;var C=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var r=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{V as c,W as w,u as V,ac as k,G as S,O as U,p as M,ad as j,_ as D,q as v,o as _,c as b,d as s,t as l,w as i,ae as u,n as m,x as g}from"./index-044614f3.js";var O=Object.defineProperty,T=Object.getOwnPropertyDescriptor,B=(e,t,n,p)=>{for(var d=p>1?void 0:p?T(t,n):t,f=e.length-1,a;f>=0;f--)(a=e[f])&&(d=(p?a(t,n,d):a(d))||d);return p&&d&&O(t,n,d),d};let h=class extends c{constructor(){super(...arguments);r(this,"mixMeStore",w());r(this,"appStore",V());r(this,"server",k(()=>this.mixMeStore.server));r(this,"playmode_options",["shuffle"]);r(this,"filter_genres",!1)}publishChanges(){this.$nextTick(()=>{const n={...this.server};S.emit("send",{command:"mixer",params:n})})}};h=B([U({components:{Toggle:M,Slider:j}})],h);const P={key:0,class:"flex-col __container__screen text-[color:var(--font--button)]"},N={class:"mt-2 mb-5 flex flex-wrap gap-1"},q={for:"server_name",class:"__badge__label2"},A={for:"session_id",class:"__badge__label truncate"},E={class:"grid grid-cols-1 md:grid-cols-2 gap-2"},G={class:"flex"},L={class:"min-w-[140px] __field__label inline-flex rounded-l-md justify-end px-2"},W={value:"stop-now"},z={value:"play-next",selected:""},F={value:"repeat-same"},H={value:"repeat-same"},I={class:"flex"},J={class:"min-w-[140px] __field__label inline-flex rounded-l-md justify-end px-2"},K={value:"shuffle"},Q={value:"favorites"},R={value:"safelike"},X={value:"discover"},Y={value:"forgot"},Z={value:"probablynotliked"},x={class:"flex"},ee={class:"min-w-[140px] __field__label inline-flex rounded-l-md justify-end px-2"},se={value:"0"},te={value:"30"},oe={value:"60"},le={value:"120"},ne={value:"240"},ie={value:"720"},de={value:"1440"},ae={value:"10080"},re={value:"40320"},pe={class:"flex items-center"},ue={for:"play_on_start",class:"w-full font-medium text-right mr-2"},fe={class:"flex items-center"},me={for:"wait_4_freetrack",class:"w-full font-medium text-right mr-2"},ge={for:"player_volume",class:"font-medium"},he={class:"mt-2 flex"},ve={class:"mt-4"},_e={class:"align-middle font-medium whitespace-nowrap"},be={class:"md:grid md:grid-cols-2"},$e={class:"flex"},ye={class:"min-w-[140px] __field__label inline-flex rounded-l-md justify-end px-2"},Ce={class:"__field__label inline-flex rounded-r-md px-2"},ce={class:"flex mt-1 md:mt-0 md:ml-2"},we={class:"min-w-[140px] __field__label inline-flex justify-end rounded-l-md px-2"},Ve=["placeholder"],ke={class:"__field__label inline-flex rounded-r-md px-2"},Se={class:"mt-2"},Ue={class:"align-middle font-medium whitespace-nowrap"},Me={class:"md:grid md:grid-cols-2"},je={class:"flex"},De={class:"min-w-[140px] __field__label inline-flex justify-end rounded-l-md px-2"},Oe={value:"0"},Te={value:"1"},Be={value:"2"},Pe={class:"flex mt-1 md:mt-0 md:ml-2"},Ne={class:"min-w-[140px] __field__label inline-flex justify-end rounded-l-md px-2"},qe={value:"0"},Ae={value:"1"},Ee={value:"2"},Ge={class:"flex w-full items-center mt-4"},Le={for:"play_on_start",class:"w-full font-medium text-right mr-2"},We={key:1};function ze(e,t,n,p,d,f){const a=v("Toggle"),$=v("Slider");return e.mixMeStore.isMixMeConnected?(_(),b("div",P,[s("h1",null,l(e.$t("settings.title")),1),s("div",N,[s("span",q,l(e.server.name),1),s("span",A,l(e.server.sessionid),1)]),s("div",E,[s("div",G,[s("span",L,l(e.$t("settings.playmode.title")),1),i(s("select",{id:"playmode","onUpdate:modelValue":t[0]||(t[0]=o=>e.server.playmode=o),class:"__select__field",onChange:t[1]||(t[1]=(...o)=>e.publishChanges&&e.publishChanges(...o))},[s("option",W,l(e.$t("settings.playmode.stopafter")),1),s("option",z,l(e.$t("settings.playmode.playnext")),1),s("option",F,l(e.$t("settings.playmode.repeatsame")),1),s("option",H,l(e.$t("settings.playmode.repeatlist")),1)],544),[[u,e.server.playmode]])]),s("div",I,[s("span",J,l(e.$t("settings.nextmode")),1),i(s("select",{id:"nextmode","onUpdate:modelValue":t[2]||(t[2]=o=>e.server.nextmode=o),class:"__select__field",onChange:t[3]||(t[3]=(...o)=>e.publishChanges&&e.publishChanges(...o))},[s("option",K,l(e.$t("library.genius.shuffle")),1),s("option",Q,l(e.$t("library.genius.favorites")),1),s("option",R,l(e.$t("library.genius.safelike")),1),s("option",X,l(e.$t("library.genius.discover")),1),s("option",Y,l(e.$t("library.genius.forgot")),1),s("option",Z,l(e.$t("library.genius.probablynotliked")),1)],544),[[u,e.server.nextmode]])]),s("div",x,[s("div",ee,l(e.$t("library.filtering.notplayedsince")),1),i(s("select",{"onUpdate:modelValue":t[4]||(t[4]=o=>e.server.notplayedsince=o),class:"justify-end __select__field w-full",onChange:t[5]||(t[5]=(...o)=>e.publishChanges&&e.publishChanges(...o))},[s("option",se,l(e.$t("periods.disabled")),1),s("option",te,l(e.$tc("periods.minutes",30)),1),s("option",oe,l(e.$tc("periods.hours",1)),1),s("option",le,l(e.$tc("periods.hours",2)),1),s("option",ne,l(e.$tc("periods.hours",4)),1),s("option",ie,l(e.$tc("periods.hours",12)),1),s("option",de,l(e.$tc("periods.days",1)),1),s("option",ae,l(e.$tc("periods.weeks",1)),1),s("option",re,l(e.$tc("periods.months",1)),1)],544),[[u,e.server.notplayedsince]])]),s("div",pe,[s("label",ue,l(e.$t("settings.playonstart")),1),m(a,{modelValue:e.server.playonstart,"onUpdate:modelValue":t[6]||(t[6]=o=>e.server.playonstart=o),"on-label":e.$t("settings.yes"),"off-label":e.$t("settings.no"),class:"float-right ml-1 custom-control",onChange:e.publishChanges},null,8,["modelValue","on-label","off-label","onChange"])]),s("div",fe,[s("label",me,l(e.$t("settings.wait4freetrack")),1),m(a,{modelValue:e.server.wait4freetrack,"onUpdate:modelValue":t[7]||(t[7]=o=>e.server.wait4freetrack=o),"on-label":e.$t("settings.yes"),"off-label":e.$t("settings.no"),class:"float-right ml-1 custom-control",onChange:e.publishChanges},null,8,["modelValue","on-label","off-label","onChange"])])]),s("label",ge,l(e.$tc("settings.volume",e.server.volume)),1),s("div",he,[m($,{modelValue:e.server.volume,"onUpdate:modelValue":t[8]||(t[8]=o=>e.server.volume=o),class:"slider-volume w-full mt-10 ml-10 mr-10",onChange:e.publishChanges},null,8,["modelValue","onChange"])]),s("div",ve,[s("label",_e,l(e.$t("settings.effects.duration")),1),s("div",be,[s("div",$e,[s("span",ye,l(e.$t("settings.effects.fadein")),1),i(s("input",{id:"fade-in-length","onUpdate:modelValue":t[9]||(t[9]=o=>e.server.fadeinduration=o),type:"text",class:"__select__field text-center",placeholder:"seconds",onChange:t[10]||(t[10]=(...o)=>e.publishChanges&&e.publishChanges(...o))},null,544),[[g,e.server.fadeinduration]]),s("span",Ce,l(e.$t("settings.effects.seconds")),1)]),s("div",ce,[s("span",we,l(e.$t("settings.effects.fadeout")),1),i(s("input",{id:"fade-out-length","onUpdate:modelValue":t[11]||(t[11]=o=>e.server.fadeoutduration=o),type:"text",class:"__input__field text-center",placeholder:e.$t("settings.effects.seconds"),onChange:t[12]||(t[12]=(...o)=>e.publishChanges&&e.publishChanges(...o))},null,40,Ve),[[g,e.server.fadeoutduration]]),s("span",ke,l(e.$t("settings.effects.seconds")),1)])])]),s("div",Se,[s("label",Ue,l(e.$t("settings.effects.skip")),1),s("div",Me,[s("div",je,[s("span",De,l(e.$t("settings.effects.skipstart")),1),i(s("input",{id:"seek-length","onUpdate:modelValue":t[13]||(t[13]=o=>e.server.seeklength=o),type:"text",class:"__input__field text-right",placeholder:"value",onChange:t[14]||(t[14]=(...o)=>e.publishChanges&&e.publishChanges(...o))},null,544),[[g,e.server.seeklength]]),i(s("select",{"onUpdate:modelValue":t[15]||(t[15]=o=>e.server.seekmode=o),class:"__select__field rounded-r-md",onChange:t[16]||(t[16]=(...o)=>e.publishChanges&&e.publishChanges(...o))},[s("option",Oe,l(e.$t("settings.effects.disabled")),1),s("option",Te,l(e.$t("settings.effects.seconds")),1),s("option",Be,l(e.$t("settings.effects.percent")),1)],544),[[u,e.server.seekmode]])]),s("div",Pe,[s("span",Ne,l(e.$t("settings.effects.skipend")),1),i(s("input",{id:"leave-length","onUpdate:modelValue":t[17]||(t[17]=o=>e.server.leavelength=o),type:"text",class:"__input__field text-right",placeholder:"value",onChange:t[18]||(t[18]=(...o)=>e.publishChanges&&e.publishChanges(...o))},null,544),[[g,e.server.leavelength]]),i(s("select",{"onUpdate:modelValue":t[19]||(t[19]=o=>e.server.leavemode=o),class:"__select__field rounded-r-md",onChange:t[20]||(t[20]=(...o)=>e.publishChanges&&e.publishChanges(...o))},[s("option",qe,l(e.$t("settings.effects.disabled")),1),s("option",Ae,l(e.$t("settings.effects.seconds")),1),s("option",Ee,l(e.$t("settings.effects.percent")),1)],544),[[u,e.server.leavemode]])])])]),s("div",Ge,[s("label",Le,l(e.$t("settings.theme")),1),m(a,{modelValue:e.appStore.isDarkMode,"onUpdate:modelValue":t[21]||(t[21]=o=>e.appStore.isDarkMode=o),"on-label":"Dark","off-label":"Light",class:"ml-1 items-center custom-control"},null,8,["modelValue"])])])):(_(),b("div",We," No player detected "))}const Je=D(h,[["render",ze]]);export{Je as default};