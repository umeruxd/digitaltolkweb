var $e=Object.defineProperty,ye=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var te=(e,t,s)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,N=(e,t)=>{for(var s in t||(t={}))Se.call(t,s)&&te(e,s,t[s]);if(ee)for(var s of ee(t))Me.call(t,s)&&te(e,s,t[s]);return e},U=(e,t)=>ye(e,De(t));import{o as n,c as l,a as o,u as H,b as se,r as I,F as E,d as V,e as u,w as y,t as v,f as d,g as b,m as xe,h as k,T as Z,i as A,j as D,k as He,V as Ie,l as Ee,n as S,p as B,q as oe,s as L,v as ae,x as q,E as O,y as Ve,z as ne,A as ie,B as ce,C as Le,D as qe,G as Oe,H as We,I as re,J as Pe,K as ze,L as Ne}from"./vendor.56d973cf.js";const Ke=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}};Ke();const Re=(e,t)=>`<svg width="${t&&t.width?t.width:18}" height="${t&&t.height?t.height:24}" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.125 14.2909H5.625C5.32663 14.2909 5.04048 14.4115 4.8295 14.6264C4.61853 14.8412 4.5 15.1325 4.5 15.4363C4.5 15.7401 4.61853 16.0315 4.8295 16.2463C5.04048 16.4611 5.32663 16.5818 5.625 16.5818H10.125C10.4234 16.5818 10.7095 16.4611 10.9205 16.2463C11.1315 16.0315 11.25 15.7401 11.25 15.4363C11.25 15.1325 11.1315 14.8412 10.9205 14.6264C10.7095 14.4115 10.4234 14.2909 10.125 14.2909ZM14.625 2.83632H13.2975C13.0654 2.16789 12.6359 1.58892 12.0679 1.17878C11.5 0.768635 10.8213 0.547403 10.125 0.54541H7.875C7.17869 0.547403 6.50002 0.768635 5.93205 1.17878C5.36408 1.58892 4.9346 2.16789 4.7025 2.83632H3.375C2.47989 2.83632 1.62145 3.19836 0.988515 3.84281C0.355579 4.48725 0 5.3613 0 6.27268V20.0181C0 20.9295 0.355579 21.8036 0.988515 22.448C1.62145 23.0925 2.47989 23.4545 3.375 23.4545H14.625C15.5201 23.4545 16.3786 23.0925 17.0115 22.448C17.6444 21.8036 18 20.9295 18 20.0181V6.27268C18 5.3613 17.6444 4.48725 17.0115 3.84281C16.3786 3.19836 15.5201 2.83632 14.625 2.83632ZM6.75 3.98177C6.75 3.67798 6.86853 3.38663 7.0795 3.17182C7.29048 2.957 7.57663 2.83632 7.875 2.83632H10.125C10.4234 2.83632 10.7095 2.957 10.9205 3.17182C11.1315 3.38663 11.25 3.67798 11.25 3.98177V5.12723H6.75V3.98177ZM15.75 20.0181C15.75 20.3219 15.6315 20.6133 15.4205 20.8281C15.2095 21.0429 14.9234 21.1636 14.625 21.1636H3.375C3.07663 21.1636 2.79048 21.0429 2.5795 20.8281C2.36853 20.6133 2.25 20.3219 2.25 20.0181V6.27268C2.25 5.96889 2.36853 5.67754 2.5795 5.46272C2.79048 5.24791 3.07663 5.12723 3.375 5.12723H4.5V6.27268C4.5 6.57648 4.61853 6.86783 4.8295 7.08264C5.04048 7.29746 5.32663 7.41814 5.625 7.41814H12.375C12.6734 7.41814 12.9595 7.29746 13.1705 7.08264C13.3815 6.86783 13.5 6.57648 13.5 6.27268V5.12723H14.625C14.9234 5.12723 15.2095 5.24791 15.4205 5.46272C15.6315 5.67754 15.75 5.96889 15.75 6.27268V20.0181ZM12.375 9.70905H5.625C5.32663 9.70905 5.04048 9.82973 4.8295 10.0445C4.61853 10.2594 4.5 10.5507 4.5 10.8545C4.5 11.1583 4.61853 11.4496 4.8295 11.6645C5.04048 11.8793 5.32663 12 5.625 12H12.375C12.6734 12 12.9595 11.8793 13.1705 11.6645C13.3815 11.4496 13.5 11.1583 13.5 10.8545C13.5 10.5507 13.3815 10.2594 13.1705 10.0445C12.9595 9.82973 12.6734 9.70905 12.375 9.70905Z" fill="${e}"/>
    </svg>
`,Je=(e,t)=>`<svg width="${t&&t.width?t.width:18}" height="${t&&t.height?t.height:24}" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9,0.5c-2.4,0-4.7,1-6.4,2.7C0.9,4.9,0,7.3,0,9.7c0,6.2,7.9,13.2,8.3,13.5c0.2,0.2,0.5,0.3,0.7,0.3
	s0.5-0.1,0.7-0.3c0.4-0.3,8.3-7.3,8.3-13.5c0-2.4-0.9-4.8-2.6-6.5C13.7,1.5,11.4,0.5,9,0.5z M9,20.8c-2.4-2.3-6.8-7.2-6.8-11.1
	c0-1.8,0.7-3.6,2-4.9s3-2,4.8-2c1.8,0,3.5,0.7,4.8,2c1.3,1.3,2,3,2,4.9C15.8,13.5,11.4,18.5,9,20.8z M9,5.1c-0.9,0-1.8,0.3-2.5,0.8
	C5.8,6.4,5.2,7.1,4.8,8c-0.3,0.8-0.4,1.8-0.3,2.6c0.2,0.9,0.6,1.7,1.2,2.3c0.6,0.6,1.4,1.1,2.3,1.3c0.9,0.2,1.8,0.1,2.6-0.3
	c0.8-0.3,1.5-0.9,2-1.7c0.5-0.8,0.8-1.6,0.8-2.5c0-1.2-0.5-2.4-1.3-3.2C11.3,5.6,10.2,5.1,9,5.1z M9,12c-0.4,0-0.9-0.1-1.3-0.4
	c-0.4-0.3-0.7-0.6-0.8-1S6.7,9.7,6.8,9.3c0.1-0.4,0.3-0.9,0.6-1.2c0.3-0.3,0.7-0.5,1.2-0.6c0.4-0.1,0.9,0,1.3,0.1
	c0.4,0.2,0.8,0.5,1,0.8c0.2,0.4,0.4,0.8,0.4,1.3c0,0.6-0.2,1.2-0.7,1.6C10.2,11.8,9.6,12,9,12z" fill="${e}"/>
    </svg>
`,Ue=[{id:"sidebar-1",title:"Tasks",slug:"/tasks",icon:Re},{id:"sidebar-2",title:"Locations",slug:"/locations",icon:Je}],le="login",de="logout",ue="fetchAccessToken",pe="setAccessToken",F="getLocation",he="checkIn",K="getLocations",Ze="storeLocation",me="deleteLocation",R="showToast",j="hideToast",W="getTasks",fe="createTasks",J="updateTasks",_e="deleteTasks";var T=(e,t)=>{const s=e.__vccOpts||e;for(const[i,a]of t)s[i]=a;return s};const Be={},Fe={width:"20",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 24 24",style:{"enable-background":"new 0 0 24 24"},"xml:space":"preserve"},je=o("path",{class:"st0",d:"M10.5,3h-5c-1.1,0-2,0.9-2,2v14c0,1.1,0.9,2,2,2h5 M20.5,12l-4-4 M20.5,12l-4,4 M20.5,12h-10"},null,-1),Ye=[je];function Qe(e,t){return n(),l("svg",Fe,Ye)}var Ge=T(Be,[["render",Qe]]);const Xe={class:"sidebar vh-100 d-flex flex-column justify-content-between"},et={class:"navigation"},tt=["innerHTML"],st={class:"sidebar-title"},ot=["onClick"],at=o("span",{class:"logout-title"},"Logout",-1),nt={setup(e){const t=H(),s=se(),i=()=>{t.dispatch(de).then(a=>{a&&s.push("/")})};return(a,c)=>{const r=I("router-link");return n(),l("div",Xe,[o("ul",et,[(n(!0),l(E,null,V(d(Ue),p=>(n(),l("li",{key:p.id},[u(r,{to:p.slug},{default:y(()=>[o("span",{class:"sidebar-icon",innerHTML:p.icon()},null,8,tt),o("span",st,v(p.title),1)]),_:2},1032,["to"])]))),128))]),o("ul",null,[o("li",null,[o("a",{href:"",onClick:b(i,["prevent"])},[u(Ge,{class:"logout-icon me-3"}),at],8,ot)])])])}}},it={class:"app-wrapper d-flex"},ct={class:"container-fluid main min-vh-100"},rt={setup(e){return(t,s)=>{const i=I("router-view");return n(),l("div",it,[u(nt),o("div",ct,[u(i)])])}}};var ge="/assets/time.aa4a3bc9.svg";const lt={data:()=>({defaultIcon:ge}),computed:N({},xe(["toastData","showToast"])),methods:{triggerClose(){this.$store.dispatch(j),this.$emit("",!1)}}},dt={class:"toast-container position-fixed p-3 top-0 end-0"},ut={key:0,class:"toast show",role:"alert","aria-live":"assertive","aria-atomic":"true"},pt={class:"toast-body d-flex justify-content-between align-items-center"},ht={class:"toast-body-text"},mt={class:"fw-bold"},ft={class:"toast-copy"},_t={class:"toast-body-icon"},gt=["src"],vt={class:"toast-footer d-flex justify-content-end"};function Ct(e,t,s,i,a,c){return n(),l("div",dt,[u(Z,{name:"fade",mode:"out-in"},{default:y(()=>[e.showToast?(n(),l("div",ut,[o("div",pt,[o("div",ht,[o("div",mt,v(e.toastData.toastHeading),1),o("span",ft,v(e.toastData.toastCopy),1)]),o("div",_t,[o("img",{src:e.toastData.icon?e.toastData.icon:e.defaultIcon},null,8,gt)])]),o("div",vt,[o("span",{class:"toast-close cursor-pointer",onClick:t[0]||(t[0]=(...r)=>c.triggerClose&&c.triggerClose(...r)),"data-bs-dismiss":"toast","aria-label":"Close"},v(e.toastData.closeText?e.toastData.closeText:"Close"),1),e.toastData.callback?(n(),l("span",{key:0,onClick:t[1]||(t[1]=r=>e.toastData.callback()),class:"toast-action","aria-label":"other"},v(e.toastData.callbackText?e.toastData.callbackText:"Action"),1)):k("",!0)])])):k("",!0)]),_:1})])}var kt=T(lt,[["render",Ct]]);const wt={class:"app-container flex items-center min-h-screen"},Tt={setup(e){const t=H(),s=A(()=>t.getters.isAuthenticated);return t.dispatch(F),(i,a)=>{const c=I("router-view");return n(),l("div",wt,[u(kt),d(s)?(n(),D(rt,{key:0})):(n(),D(c,{key:1}))])}}},bt="https://todo-test.digitaltolk.com/api/";var $=He.create({baseURL:bt,headers:{Accept:"application/json","Content-Type":"application/json"}});const M={query(e,t){return Vue.axios.get(e,t).catch(s=>{throw s&&s.response?new Error(`DigitalTolk ApiService on API:${e} with ${t}, error: ${s.data.message}`):new Error(`DigitalTolk ApiService on API:${e} with ${t}, error: ${s}`)})},get(e,t){return t=t?`${e}/${t}`:`${e}`,$.get(t).catch(s=>{throw s&&s.data?new Error(`DigitalTolk ApiService on API: ${t}, error: ${s.data.message}`):new Error(`DigitalTolk ApiService on API: ${t}, error: ${s}`)})},post(e,t){return $.post(e,t).catch(s=>{throw s&&s.data?new Error(`DigitalTolk ApiService on API: ${t}, error: ${s.data.message}`):new Error(`DigitalTolk ApiService on API: ${t}, error: ${s}`)})},delete(e,t){return $.delete(e,t).catch(s=>{throw s&&s.data?new Error(`DigitalTolk ApiService on API: ${t}, error: ${s.data.message}`):new Error(`DigitalTolk ApiService on API: ${t}, error: ${s}`)})},put(e,t){return $.put(e,t).catch(s=>{throw s&&s.data?new Error(`DigitalTolk ApiService on API: ${t}, error: ${s.data.message}`):new Error(`DigitalTolk ApiService on API: ${t}, error: ${s}`)})}},Y="updateAccessToken",ve="setLocation",Ce="setLocations",ke="setLocationFromStoragae",Q="setToastData",we="setTasks",At={namespaced:!1,state:()=>({tasks:[],completedTasks:[],incompleteTasks:[],inprogressTasks:[]}),getters:{tasks:e=>e.tasks,completedTasks:e=>e.completedTasks,incompleteTasks:e=>e.incompleteTasks,inprogressTasks:e=>e.inprogressTasks},mutations:{[we](e,t){e.tasks=t,e.completedTasks=t.filter(s=>s.status==="completed"),e.incompleteTasks=t.filter(s=>s.status==="incomplete"),e.inprogressTasks=t.filter(s=>s.status==="inprogress")}},actions:{[W]({commit:e}){return M.get("tasks").then(t=>(e(we,t.data.tasks),t.data.tasks))},[fe]({commit:e,dispatch:t},s){return M.post("tasks",s).then(i=>{t(W)})},[J]({commit:e,dispatch:t},s){return M.put(`tasks/${s.id}`,s).then(i=>{t(W)})},[_e]({commit:e,dispatch:t},s){return M.delete(`tasks/${s}`).then(i=>{t(W)})}}},$t={namespaced:!1,state:()=>({locations:[],currentLocation:{address:"",latitude:"",longitude:""}}),getters:{locations:e=>e.locations,currentLocation:e=>e.currentLocation},actions:{[F]({commit:e}){let t=localStorage.getItem("location");t?e(ke,JSON.parse(t)):fetch("https://api.ipstack.com/check?access_key=8b7a02c5dd6f7816ab9061e51d6255a5&format=1").then(s=>s.json()).then(s=>{e(ve,s)})},[he]({commit:e,getters:t,dispatch:s},i){return M.post("checkins",t.currentLocation).then(a=>(s(K),a.data))},[K]({commit:e}){return M.get("checkins").then(t=>(e(Ce,t.data.checkins),t.data.checkins))},[me]({dispatch:e},t){return M.delete(`checkins/${t}`).then(s=>(e(K),!0))}},mutations:{[ve](e,t){let s={address:`${t.city} ${t.region_name}, ${t.country_name} ${t.zip}`,latitude:t.latitude,longitude:t.longitude};e.currentLocation=s,localStorage.setItem("location",JSON.stringify(s))},[Ze](e,t){e.locations.unshift(e.currentLocation)},[ke](e,t){e.currentLocation=t},[Ce](e,t){e.locations=t.reverse()}}},yt={namespaced:!1,state:()=>({accessToken:null,isAuthenticated:!!localStorage.getItem("accessToken")}),getters:{isAuthenticated:e=>e.isAuthenticated},mutations:{[Y]:(e,t)=>{t?(e.accessToken=`Bearer ${t}`,e.isAuthenticated=!0):(e.accessToken=null,e.isAuthenticated=!1)}},actions:{[le]({dispatch:e},t){return new Promise((s,i)=>{e(pe,"Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK"),e(F),s(!0)})},[de]({commit:e},t){return new Promise((s,i)=>{localStorage.removeItem("accessToken"),localStorage.removeItem("location"),e(Y,null),s(!0)})},[ue]({commit:e,dispatch:t}){let s=localStorage.getItem("accessToken");s!==null&&e(Y,s)},[pe]({commit:e},t){t&&(e("updateAccessToken",t||localStorage.getItem("accessToken")),localStorage.setItem("accessToken",t))}}},Dt={namespaced:!1,state:()=>({showToast:!1,toastData:{}}),getters:{showToast:e=>e.showToast,toastData:e=>e.toastData},mutations:{[Q](e,t){e.toastData=t,e.showToast=!!t.duration}},actions:{[R]({commit:e,dispatch:t},s){e(Q,s),s.duration&&setTimeout(()=>{t(j)},+s.duration*1e3)},[j]({commit:e}){e(Q,{})}}};var P=Ie.createStore({modules:{auth:yt,general:Dt,tasks:At,locations:$t}}),St="/assets/user.a11cfa9a.svg";const Mt={class:"container-fluid"},xt={class:"d-flex vh-100 align-items-center justify-content-center"},Ht={class:"login-page mx-auto"},It=o("h1",{class:"heading mb-5 text-center"},"Log In",-1),Et={class:"form-field mb-3"},Vt={class:"form-field mb-3 position-relative"},Lt=["onClick"],qt={setup(e){const t=H(),s=se(),i=Ee({email:"",password:""});let a=S({type:"password",text:"Show"}),c=S(!1);const r=A(()=>t.getters.isAuthenticated);B(r,(f,h)=>{f&&(t.dispatch(R,{duration:5,toastHeading:"Welcome",toastCopy:"you are now logged in",icon:St}),s.replace("/tasks"))});const p=()=>{t.dispatch(le,i)},m=()=>{a.value.type=="password"?(a.value.type="text",a.value.text="Hide"):(a.value.type="password",a.value.text="Show")},_=oe({email:L().required().email(),password:L().required().min(8)});return(f,h)=>(n(),l("div",Mt,[o("div",xt,[o("div",Ht,[It,u(d(ae),{class:"login-form",onSubmit:p,"validation-schema":d(_),autocomplete:"nope"},{default:y(()=>[o("div",Et,[u(d(q),{type:"email",modelValue:d(i).email,"onUpdate:modelValue":h[0]||(h[0]=x=>d(i).email=x),class:"form-control",name:"email",placeholder:"Email",autocomplete:"off"},null,8,["modelValue"]),d(c)?(n(),D(d(O),{key:0,name:"email"})):k("",!0)]),o("div",Vt,[u(d(q),{type:d(a).type,modelValue:d(i).password,"onUpdate:modelValue":h[1]||(h[1]=x=>d(i).password=x),class:"form-control",name:"password",placeholder:"Password",autocomplete:"off"},null,8,["type","modelValue"]),d(c)?(n(),D(d(O),{key:0,name:"password"})):k("",!0),o("span",{class:"show-password",onClick:b(m,["prevent"])},v(d(a).text),9,Lt)]),o("button",{onClick:h[2]||(h[2]=x=>Ve(c)?c.value=!0:c=!0),class:"btn btn-primary btn-pill w-100 login-submit"}," Submit ")]),_:1},8,["validation-schema"])])])]))}},Ot={},Wt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Pt=o("path",{fill:"#6563ff",d:"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"},null,-1),zt=[Pt];function Nt(e,t){return n(),l("svg",Wt,zt)}var Te=T(Ot,[["render",Nt]]),Kt="data:image/png;base64,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";const Rt=ne({props:{location:{type:Object,required:!0}},computed:{limit(){return{lat:+this.location.latitude,long:+this.location.longitude}},mapUrl(){return`https://www.google.com/maps/search/?api=1&query=${this.limit.lat},${this.limit.long}`}},setup(e){const{location:t}=ie(e);return{location:t}},components:{Delete:Te},methods:{deleteCheckin(){this.$store.dispatch(me,this.location.id)}}}),Jt={class:"location-card fz-18 mb-3"},Ut={class:"location-address d-flex align-items-start"},Zt=o("img",{class:"location-icon",src:Kt,alt:""},null,-1),Bt={class:"text-gray ms-3"},Ft={class:"text-gray lat-long ms-3 d-flex align-items-center"},jt=["href"];function Yt(e,t,s,i,a,c){const r=I("Delete");return n(),l("div",Jt,[o("div",Ut,[Zt,o("div",null,[o("div",Bt,v(e.location.address),1),o("div",Ft,[o("a",{href:e.mapUrl,target:"_blank"},v(e.limit.lat.toFixed(4))+", "+v(e.limit.long.toFixed(4)),9,jt),u(r,{onClick:e.deleteCheckin,class:"action-delete ms-1"},null,8,["onClick"])])])])])}var be=T(Rt,[["render",Yt]]),Qt="/assets/edit.9a803ac0.svg",Gt="/assets/clock.df9fcd56.png";const Xt={},es={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ts=o("path",{fill:"#6563ff",d:"M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"},null,-1),ss=[ts];function os(e,t){return n(),l("svg",es,ss)}var as=T(Xt,[["render",os]]);const ns=ne({data:()=>({editIcon:Qt,clockIcon:Gt}),created:function(){this.moment=ce},props:{task:{type:Object,required:!0}},computed:{formattedDate(){return this.moment(this.task.due_at).calendar(null,{sameDay:"[Today]",nextDay:"[Tomorrow]",nextWeek:"dddd",lastDay:"[Yesterday]",lastWeek:"[Last] dddd",sameElse:"DD MMM, HH:mm"})}},setup(e){const{task:t}=ie(e);let s=new Date("Dec 3 2021 10:16:19 GMT-0800");return{task:t,todaysDate:s}},methods:{handleChangeStatus(){let e=U(N({},this.task),{status:this.task.status=="incomplete"?"inprogress":"incomplete"});this.$store.dispatch(J,e).then(()=>{this.$emit("request",e.status)})},handleTaskDone(){this.$emit("handleTaskDone",this.task);let e=U(N({},this.task),{status:"completed"});this.$store.dispatch(J,e).then(()=>{this.$emit("request",e.status)})},handleTaskDelete(){this.$emit("handleTaskDelete",this.task),this.$store.dispatch(_e,this.task.id).then(()=>{this.$emit("request","deleteTask")})},handleTaskEdit(){this.$emit("edit",this.task)}},components:{CheckIcon:as,Delete:Te}}),is={class:"task-card fz-18 mb-3",ref:"mode"},cs={class:"checkbox"},rs={class:"form-check"},ls=["id","disabled","checked","name"],ds=["for"],us={class:"d-flex align-items-center text-light-gray-1 mt-1"},ps=["src"],hs={class:"fz-14 fw-600"},ms=["src"],fs=Le(" Done ");function _s(e,t,s,i,a,c){const r=I("Delete"),p=I("CheckIcon");return n(),l("div",is,[o("div",cs,[o("div",rs,[o("input",{class:"form-check-input",onChange:t[0]||(t[0]=b((...m)=>e.handleChangeStatus&&e.handleChangeStatus(...m),["prevent"])),type:"checkbox",value:"",id:`tasks-${e.task.id}`,disabled:e.task.status==="completed",checked:e.task.status!=="incomplete",name:`tasks-${e.task.id}`},null,40,ls),o("label",{class:"form-check-label fw-500 text-gray",for:`tasks-${e.task.id}`},v(e.task.description),9,ds),o("div",us,[o("img",{width:"16",class:"me-1",src:e.clockIcon,alt:""},null,8,ps),o("span",hs,v(e.formattedDate),1),o("div",{class:"edit ms-2 cursor-pointer",onClick:t[1]||(t[1]=b((...m)=>e.handleTaskEdit&&e.handleTaskEdit(...m),["prevent"]))},[o("img",{src:e.editIcon,width:"14",alt:""},null,8,ms)]),o("div",{class:"task-delete ms-2 cursor-pointer text-danger",onClick:t[2]||(t[2]=b((...m)=>e.handleTaskDelete&&e.handleTaskDelete(...m),["prevent"]))},[u(r)]),e.task.status==="inprogress"?(n(),l("div",{key:0,class:"task-done ms-2 cursor-pointer",onClick:t[3]||(t[3]=b((...m)=>e.handleTaskDone&&e.handleTaskDone(...m),["prevent"]))},[u(p),fs])):k("",!0)])])])],512)}var G=T(ns,[["render",_s]]);const gs={},vs={width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Cs=o("path",{d:"M15.0282 7H5.02819C4.76297 7 4.50862 7.10536 4.32108 7.29289C4.13354 7.48043 4.02819 7.73478 4.02819 8C4.02819 8.26522 4.13354 8.51957 4.32108 8.70711C4.50862 8.89464 4.76297 9 5.02819 9H15.0282C15.2934 9 15.5478 8.89464 15.7353 8.70711C15.9228 8.51957 16.0282 8.26522 16.0282 8C16.0282 7.73478 15.9228 7.48043 15.7353 7.29289C15.5478 7.10536 15.2934 7 15.0282 7ZM11.0282 11H5.02819C4.76297 11 4.50862 11.1054 4.32108 11.2929C4.13354 11.4804 4.02819 11.7348 4.02819 12C4.02819 12.2652 4.13354 12.5196 4.32108 12.7071C4.50862 12.8946 4.76297 13 5.02819 13H11.0282C11.2934 13 11.5478 12.8946 11.7353 12.7071C11.9228 12.5196 12.0282 12.2652 12.0282 12C12.0282 11.7348 11.9228 11.4804 11.7353 11.2929C11.5478 11.1054 11.2934 11 11.0282 11ZM10.0282 0C8.71497 0 7.41461 0.258658 6.20135 0.761205C4.9881 1.26375 3.8857 2.00035 2.95712 2.92893C1.08175 4.8043 0.0281864 7.34784 0.0281864 10C0.0194442 12.3091 0.818979 14.5485 2.28819 16.33L0.288186 18.33C0.149429 18.4706 0.0554325 18.6492 0.0180584 18.8432C-0.0193158 19.0372 0.0016069 19.2379 0.0781863 19.42C0.161244 19.5999 0.29589 19.7511 0.465033 19.8544C0.634176 19.9577 0.830187 20.0083 1.02819 20H10.0282C12.6804 20 15.2239 18.9464 17.0993 17.0711C18.9746 15.1957 20.0282 12.6522 20.0282 10C20.0282 7.34784 18.9746 4.8043 17.0993 2.92893C15.2239 1.05357 12.6804 0 10.0282 0ZM10.0282 18H3.43819L4.36819 17.07C4.55444 16.8826 4.65898 16.6292 4.65898 16.365C4.65898 16.1008 4.55444 15.8474 4.36819 15.66C3.05877 14.352 2.24336 12.6305 2.06088 10.7888C1.87839 8.94705 2.34013 7.09901 3.36741 5.55952C4.3947 4.02004 5.92398 2.88436 7.6947 2.34597C9.46543 1.80759 11.368 1.8998 13.0784 2.60691C14.7888 3.31402 16.201 4.59227 17.0746 6.22389C17.9482 7.85551 18.2291 9.73954 17.8693 11.555C17.5096 13.3705 16.5315 15.005 15.1017 16.1802C13.672 17.3554 11.8789 17.9985 10.0282 18Z",fill:"#575767"},null,-1),ks=[Cs];function ws(e,t){return n(),l("svg",vs,ks)}var Ts=T(gs,[["render",ws]]);const bs={},As={width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$s=o("path",{d:"M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 16H9C8.73478 16 8.48043 16.1054 8.29289 16.2929C8.10536 16.4804 8 16.7348 8 17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17C20 16.7348 19.8946 16.4804 19.7071 16.2929C19.5196 16.1054 19.2652 16 19 16ZM19 8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10H19C19.2652 10 19.5196 9.89464 19.7071 9.70711C19.8946 9.51957 20 9.26522 20 9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8ZM19 12H1C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H19C19.2652 14 19.5196 13.8946 19.7071 13.7071C19.8946 13.5196 20 13.2652 20 13C20 12.7348 19.8946 12.4804 19.7071 12.2929C19.5196 12.1054 19.2652 12 19 12ZM19 4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H19C19.2652 6 19.5196 5.89464 19.7071 5.70711C19.8946 5.51957 20 5.26522 20 5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4Z",fill:"#575767"},null,-1),ys=[$s];function Ds(e,t){return n(),l("svg",As,ys)}var Ss=T(bs,[["render",Ds]]);const Ms={},xs={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Hs=o("path",{d:"M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM10 4C9.73479 4 9.48043 4.10536 9.2929 4.29289C9.10536 4.48043 9 4.73478 9 5V9.42L6.9 10.63C6.70736 10.7392 6.5564 10.9092 6.47078 11.1134C6.38517 11.3176 6.36975 11.5444 6.42695 11.7583C6.48414 11.9722 6.61072 12.1611 6.78682 12.2953C6.96292 12.4296 7.17859 12.5015 7.4 12.5C7.57518 12.5012 7.7476 12.4564 7.9 12.37L10.5 10.87L10.59 10.78L10.75 10.65C10.7891 10.6005 10.8226 10.5468 10.85 10.49C10.8826 10.4363 10.9094 10.3793 10.93 10.32C10.9572 10.2564 10.9741 10.1889 10.98 10.12L11 10V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4Z",fill:"#575767"},null,-1),Is=[Hs];function Es(e,t){return n(),l("svg",xs,Is)}var Vs=T(Ms,[["render",Es]]);const Ls={class:"check-in"},qs=["onClick"],Os={class:"modal-dialog"},Ws={class:"modal-content"},Ps=o("h3",{class:"fz-20 fw-600"},"New Task",-1),zs={class:"modal-body"},Ns={class:"form-field-lg"},Ks={class:"field-icon"},Rs={class:"form-field-lg"},Js={class:"field-icon"},Us={class:"form-field-lg"},Zs={class:"field-icon"},Bs=["value"],Fs={class:"task-footer"},js={class:"d-flex justify-content-center mb-2"},Ys={key:0,class:"modal-backdrop d-block"},Qs={props:{task:Object},emits:["closeModal","request"],setup(e,{emit:t}){const s=e,i=S(),a=S(!1),c={description:"",due_at:"",status:"incomplete",title:""},r=S(c),p=S(!1),m=H();B(s,(w,g)=>{s.task&&s.task.due_at&&(r.value=s.task,p.value=!0,i.value=new Date(r.value.due_at))}),B(i,(w,g)=>{r.value.due_at=ce(i.value).format("yyyy-MM-DD HH:mm:ss")});let _=document.querySelector("body");const f=w=>{w==="form-submission"||w&&p.value&&w.target.getAttribute("data-event")?(typeof w!="string"&&w.stopPropagation(),_.classList.remove("modal-open"),p.value=!1,r.value=c,t("closeModal")):(_.classList.add("modal-open"),p.value=!0)},h=w=>{s.task?m.dispatch(J,r.value).then(()=>{f("form-submission"),t("request","updateTask")}):m.dispatch(fe,r.value).then(()=>{f("form-submission"),t("request","createTask")})},x=oe({title:L().required(),description:L().required(),date:L().required()});return(w,g)=>(n(),l("div",null,[o("div",Ls,[o("a",{href:"",onClick:b(f,["prevent"]),class:"fz-18 fw-bold text-gray"}," + Add new task ",8,qs)]),u(Z,{name:"slide"},{default:y(()=>[p.value?(n(),l("div",{key:0,class:"modal d-block","data-event":"close-modal",tabindex:"-1",onClick:f},[o("div",Os,[o("div",Ws,[Ps,o("div",zs,[u(d(ae),{class:"login-form",onSubmit:h,"validation-schema":d(x),autocomplete:"nope"},{default:y(()=>[o("div",Ns,[o("div",Ks,[u(Ts)]),u(d(q),{type:"text",modelValue:r.value.title,"onUpdate:modelValue":g[0]||(g[0]=C=>r.value.title=C),class:"form-control border-darker fz-16 fw-500",name:"title",placeholder:"Summary",autocomplete:"off"},null,8,["modelValue"]),a.value?(n(),D(d(O),{key:0,name:"title"})):k("",!0)]),o("div",Rs,[o("div",Js,[u(Ss)]),u(d(q),{type:"textarea",as:"textarea",modelValue:r.value.description,"onUpdate:modelValue":g[1]||(g[1]=C=>r.value.description=C),class:"form-control border-darker fz-16 fw-500","border-darker":"","fz-16":"","fw-500":"",name:"description",placeholder:"Description",autocomplete:"off"},null,8,["modelValue"]),a.value?(n(),D(d(O),{key:0,name:"description"})):k("",!0)]),o("div",Us,[o("div",Zs,[u(Vs)]),u(d(qe),{modelValue:i.value,"onUpdate:modelValue":g[2]||(g[2]=C=>i.value=C),mode:"dateTime",popover:{placement:"top-start"},"is-required":!0},{default:y(({inputValue:C,inputEvents:Ae})=>[o("input",Oe({class:"form-control border-darker fz-16 fw-500",value:C},We(Ae),{placeholder:"Due date"}),null,16,Bs)]),_:1},8,["modelValue"]),u(d(q),{type:"hidden",modelValue:r.value.due_at,"onUpdate:modelValue":g[3]||(g[3]=C=>r.value.due_at=C),name:"date"},null,8,["modelValue"]),a.value?(n(),D(d(O),{key:0,name:"date"})):k("",!0)]),o("div",Fs,[o("div",js,[o("button",{type:"submit",onClick:g[4]||(g[4]=C=>a.value=!0),class:"btn modal-btn btn-primary btn-pill"}," Save changes ")]),o("div",{class:"d-flex justify-content-center"},[o("button",{onClick:f,"data-event":"close-modal",type:"button",class:"btn modal-btn btn-default btn-pill"}," Cancel ")])])]),_:1},8,["validation-schema"])])])])])):k("",!0)]),_:1}),u(Z,{name:"fade"},{default:y(()=>[p.value?(n(),l("div",Ys)):k("",!0)]),_:1})]))}},Gs={class:"tasks"},Xs={class:"row"},e1={class:"col-lg-4"},t1=o("h3",{class:"text-gray fz-18 fw-bold"},"Incomplete",-1),s1={class:"tasks-wrapper card p-4"},o1={class:"col-lg-4"},a1=o("h3",{class:"text-gray fz-18 fw-bold"},"Inprogress",-1),n1={class:"tasks-wrapper card p-4"},i1={class:"col-lg-4"},c1=o("h3",{class:"text-gray fz-18 fw-bold"},"Completed",-1),r1={class:"tasks-wrapper card p-4"},l1={setup(e){const t=H();A(()=>t.getters.tasks);const s=S(),i=A(()=>t.getters.completedTasks),a=A(()=>t.getters.incompleteTasks),c=A(()=>t.getters.inprogressTasks);re(()=>{t.dispatch(W)});const r=_=>{s.value=_},p=_=>{s.value={}},m=_=>{let f="created";_==="updateTask"?f="updated":_==="deleteTask"?f="deleted":_==="incomplete"?f="moved to incomplete list":_==="completed"?f="moved to completed list":_==="inprogress"&&(f="moved to inprogress list"),t.dispatch(R,{duration:5,toastHeading:"Tasks Status",toastCopy:`The task has been ${f} successfully`,icon:ge})};return(_,f)=>(n(),l("div",Gs,[u(Qs,{task:s.value,onRequest:m,onCloseModal:p},null,8,["task"]),o("div",Xs,[o("div",e1,[t1,o("div",s1,[(n(!0),l(E,null,V(d(a),h=>(n(),l("div",{key:`tasks-${h.id}`,class:"incomplete-tasks"},[u(G,{onRequest:m,task:h,onEdit:r},null,8,["task"])]))),128))])]),o("div",o1,[a1,o("div",n1,[(n(!0),l(E,null,V(d(c),h=>(n(),l("div",{key:`tasks-${h.id}`,class:"inprogress-tasks"},[u(G,{onRequest:m,task:h,onEdit:r},null,8,["task"])]))),128))])]),o("div",i1,[c1,o("div",r1,[(n(!0),l(E,null,V(d(i),h=>(n(),l("div",{key:`tasks-${h.id}`,class:"completed-tasks"},[u(G,{onRequest:m,task:h,onEdit:r},null,8,["task"])]))),128))])])])]))}};var d1="/assets/marker.8bb38ff5.svg";const u1={class:"locations"},p1={class:"check-in"},h1=["onClick"],m1={class:"current-location"},f1=o("p",{class:"fw-bold text-gray fz-18 mb-3"},"Current Location",-1),_1={class:"previous-location"},g1=o("p",{class:"fw-bold text-gray fz-18 mb-3"},"Previous Location",-1),v1={setup(e){const t=H(),s=A(()=>t.getters.currentLocation),i=A(()=>t.getters.locations);re(()=>{t.dispatch(K)});const a=()=>{t.dispatch(he).then(c=>{t.dispatch(R,{duration:5,toastHeading:"Checked in successfully",toastCopy:`From ${s.value.address}`,icon:d1})})};return(c,r)=>(n(),l("div",u1,[o("div",p1,[o("a",{href:"",onClick:b(a,["prevent"]),class:"fw-bold text-gray fz-18"}," + Check in ",8,h1)]),o("div",m1,[f1,u(be,{location:d(s)},null,8,["location"])]),o("div",_1,[g1,(n(!0),l(E,null,V(d(i),p=>(n(),l("div",{key:p.id},[u(be,{location:p},null,8,["location"])]))),128))])]))}},C1=[{path:"/",component:qt},{path:"/tasks",component:l1},{path:"/locations",component:v1}],X=Pe({mode:"history",history:ze(),routes:C1});X.beforeEach((e,t,s)=>{if(P.dispatch(ue,null,{root:!0}),e.fullPath!=="/"&&!P.state.auth.accessToken){s("/");return}if(e.fullPath==="/"&&P.state.auth.accessToken){s("/tasks");return}s()});const k1=e=>{e.config.globalProperties.$axios=$,$.defaults.timeout=1e4;const t=()=>{X.replace({path:"/"})};$.interceptors.request.use(s=>{const i=localStorage.getItem("accessToken");return i&&(s.headers.common.Authorization=`Bearer ${i}`),s},s=>Promise.reject(s)),$.interceptors.response.use(s=>s.status===200||s.status===201?Promise.resolve(s):Promise.reject(s),s=>{if(s.response.status){switch(s.response.status){case 400:break;case 401:case 403:case 502:t();break;case 404:alert("page not exist");break}return Promise.reject(s.response)}})},z=Ne(Tt);k1(z);z.config.globalProperties.$store=P;z.use(P);z.use(X);z.mount("#app");
