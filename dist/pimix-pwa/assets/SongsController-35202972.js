import{u as m,r as w,ac as u,a3 as S,W as p,X as R,R as h,ak as i,l as d}from"./index-044614f3.js";const k=o=>new Promise(s=>{i("api/songs/all",o).then(t=>{s(d.map(t.data,n=>n))}).catch(()=>{s([])})}),y=o=>new Promise(s=>{i("api/search",{keywords:o}).then(t=>{console.debug("search",t.data),s(t.data)}).catch(()=>{s([])})}),x=o=>{let s=i("api/quiz/next",o);return new Promise(t=>{s.then(n=>{t(d.map(n.data,g=>g))}).catch(()=>{t([])})})},f=()=>{const o=m(),s=w({songs:[],searchResults:{},count:u(()=>s.songs.length)});async function t(e){var c,a;if(((c=e.keywords)==null?void 0:c.length)>0){s.searchResults=await y(e.keywords),s.keywords=s.searchResults.keywords,s.songs=s.searchResults.songs;const r=S();r.artistids=[],r.genreids=[]}else s.keywords="",s.songs=await k({...e,userids:[((a=o.user)==null?void 0:a.id)|0]})}async function n(){var r;const e=p(),c=R(),a={sessionid:(r=e.server)==null?void 0:r.sessionid,current:c.song,nextmode:"samegenre",count:4};s.songs=await x(a)}const g=e=>`${h}/api/song/thumb/${e}`,l=e=>`${h}/api/song/cover/${e}`;return{songs:u(()=>s.songs),searchResults:u(()=>s.searchResults),keywords:u(()=>s.keywords),getPages:e=>{var a,r;return Math.floor(((a=s.songs)==null?void 0:a.length)/e)+(((r=s.songs)==null?void 0:r.length)%e>0?1:0)},clearResults:()=>{s.keywords="",s.searchResults={}},getList:t,getQuiz:n,getCover:l,getThumb:g}};export{f as S};