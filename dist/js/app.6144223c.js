(function(){"use strict";var t={5324:function(t,e,a){var n=a(9242),o=a(3396),r=a(7718);function i(t,e){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(r.q,{theme:""},{default:(0,o.w5)((()=>[(0,o.Wm)(a)])),_:1})}var l=a(89);const s={},c=(0,l.Z)(s,[["render",i]]);var u=c,d=a(2483),m=a(7139),p=a(3369),h=a(3289);const f=t=>((0,o.dD)("data-v-4d968c65"),t=t(),(0,o.Cn)(),t),g=f((()=>(0,o._)("br",null,null,-1))),w=f((()=>(0,o._)("br",null,null,-1))),v={class:"card"},_={class:"card-title"},b={class:"card-body"},y={class:"footer"},C={class:"by-name"},k={class:"by-name"},j=f((()=>(0,o._)("br",null,null,-1))),z=f((()=>(0,o._)("br",null,null,-1)));function W(t,e,a,n,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[g,w,(0,o.Wm)(p.K,{class:"d-flex flex-column align-center mt-5"},{default:(0,o.w5)((()=>[(0,o._)("div",v,[(0,o._)("div",{class:"card-image",style:(0,m.j5)(`background-image: url(${t.imagePath})`)},null,4),(0,o._)("p",_,(0,m.zw)(t.noticia.title),1),(0,o._)("p",b,(0,m.zw)(t.noticia.description),1),(0,o._)("p",y,[(0,o.Uk)("Escrito por "),(0,o._)("span",C,(0,m.zw)(t.noticia.profileName),1),(0,o.Uk)(" em "),(0,o._)("span",k,(0,m.zw)(t.noticia.postDate),1)])]),j,z,(0,o._)("a",{onClick:e[0]||(e[0]=(...e)=>t.voltar&&t.voltar(...e))},[(0,o.Wm)(h.t,{icon:"mdi-home",color:"blue-grey-darken-2"})])])),_:1})],64)}a(7658);var D=a(4161),Z=(0,o.aZ)({setup(){const t=(0,d.tv)(),e=(0,d.yj)(),a=()=>{"/Inicio"!==e.path&&t.push("/Inicio")};return{voltar:a}},data(){return{noticia:{},imagePath:"https://apidoego.onrender.com/img/post-1.jpg"}},async created(){try{const t=await D.Z.get("https://apidoego.onrender.com/postagem/0");this.noticia=t.data}catch(t){console.error("Error fetching data:",t)}}});const x=(0,l.Z)(Z,[["render",W],["__scopeId","data-v-4d968c65"]]);var E=x;const I=t=>((0,o.dD)("data-v-0ac755bc"),t=t(),(0,o.Cn)(),t),U=I((()=>(0,o._)("br",null,null,-1))),H=I((()=>(0,o._)("br",null,null,-1))),P={class:"card"},A={class:"card-title"},F={class:"card-body"},N={class:"footer"},T={class:"by-name"},K={class:"by-name"},O=I((()=>(0,o._)("br",null,null,-1))),L=I((()=>(0,o._)("br",null,null,-1)));function q(t,e,a,n,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[U,H,(0,o.Wm)(p.K,{class:"d-flex flex-column align-center mt-5"},{default:(0,o.w5)((()=>[(0,o._)("div",P,[(0,o._)("div",{class:"card-image",style:(0,m.j5)(`background-image: url(${t.imagePath})`)},null,4),(0,o._)("p",A,(0,m.zw)(t.noticia.title),1),(0,o._)("p",F,(0,m.zw)(t.noticia.description),1),(0,o._)("p",N,[(0,o.Uk)("Escrito por "),(0,o._)("span",T,(0,m.zw)(t.noticia.profileName),1),(0,o.Uk)(" em "),(0,o._)("span",K,(0,m.zw)(t.noticia.postDate),1)])]),O,L,(0,o._)("a",{onClick:e[0]||(e[0]=(...e)=>t.voltar&&t.voltar(...e))},[(0,o.Wm)(h.t,{icon:"mdi-home",color:"blue-grey-darken-2"})])])),_:1})],64)}var B=(0,o.aZ)({setup(){const t=(0,d.tv)(),e=(0,d.yj)(),a=()=>{"/Inicio"!==e.path&&t.push("/Inicio")};return{voltar:a}},data(){return{noticia:{},imagePath:"https://apidoego.onrender.com/img/post-2.jpg"}},async created(){try{const t=await D.Z.get("https://apidoego.onrender.com/postagem/1");this.noticia=t.data}catch(t){console.error("Error fetching data:",t)}}});const R=(0,l.Z)(B,[["render",q],["__scopeId","data-v-0ac755bc"]]);var Y=R;const S=t=>((0,o.dD)("data-v-daa08e02"),t=t(),(0,o.Cn)(),t),M=S((()=>(0,o._)("br",null,null,-1))),$=S((()=>(0,o._)("br",null,null,-1))),V={class:"card"},G={class:"card-title"},J={class:"card-body"},Q={class:"footer"},X={class:"by-name"},tt={class:"by-name"},et=S((()=>(0,o._)("br",null,null,-1))),at=S((()=>(0,o._)("br",null,null,-1)));function nt(t,e,a,n,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[M,$,(0,o.Wm)(p.K,{class:"d-flex flex-column align-center mt-5"},{default:(0,o.w5)((()=>[(0,o._)("div",V,[(0,o._)("div",{class:"card-image",style:(0,m.j5)(`background-image: url(${t.imagePath})`)},null,4),(0,o._)("p",G,(0,m.zw)(t.noticia.title),1),(0,o._)("p",J,(0,m.zw)(t.noticia.description),1),(0,o._)("p",Q,[(0,o.Uk)("Escrito por "),(0,o._)("span",X,(0,m.zw)(t.noticia.profileName),1),(0,o.Uk)(" em "),(0,o._)("span",tt,(0,m.zw)(t.noticia.postDate),1)])]),et,at,(0,o._)("a",{onClick:e[0]||(e[0]=(...e)=>t.voltar&&t.voltar(...e))},[(0,o.Wm)(h.t,{icon:"mdi-home",color:"blue-grey-darken-2"})])])),_:1})],64)}var ot=(0,o.aZ)({setup(){const t=(0,d.tv)(),e=(0,d.yj)(),a=()=>{"/Inicio"!==e.path&&t.push("/Inicio")};return{voltar:a}},data(){return{noticia:{},imagePath:"https://apidoego.onrender.com/img/post-3.jpg"}},async created(){try{const t=await D.Z.get("https://apidoego.onrender.com/postagem/2");this.noticia=t.data}catch(t){console.error("Error fetching data:",t)}}});const rt=(0,l.Z)(ot,[["render",nt],["__scopeId","data-v-daa08e02"]]);var it=rt;const lt=t=>((0,o.dD)("data-v-8bbdf240"),t=t(),(0,o.Cn)(),t),st=lt((()=>(0,o._)("br",null,null,-1))),ct=lt((()=>(0,o._)("br",null,null,-1))),ut={class:"card"},dt={class:"card-title"},mt={class:"card-body"},pt={class:"footer"},ht={class:"by-name"},ft={class:"by-name"},gt=lt((()=>(0,o._)("br",null,null,-1))),wt=lt((()=>(0,o._)("br",null,null,-1)));function vt(t,e,a,n,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[st,ct,(0,o.Wm)(p.K,{class:"d-flex flex-column align-center mt-5"},{default:(0,o.w5)((()=>[(0,o._)("div",ut,[(0,o._)("div",{class:"card-image",style:(0,m.j5)(`background-image: url(${t.imagePath})`)},null,4),(0,o._)("p",dt,(0,m.zw)(t.noticia.title),1),(0,o._)("p",mt,(0,m.zw)(t.noticia.description),1),(0,o._)("p",pt,[(0,o.Uk)("Escrito por "),(0,o._)("span",ht,(0,m.zw)(t.noticia.profileName),1),(0,o.Uk)(" em "),(0,o._)("span",ft,(0,m.zw)(t.noticia.postDate),1)])]),gt,wt,(0,o._)("a",{onClick:e[0]||(e[0]=(...e)=>t.voltar&&t.voltar(...e))},[(0,o.Wm)(h.t,{icon:"mdi-home",color:"blue-grey-darken-2"})])])),_:1})],64)}var _t=(0,o.aZ)({setup(){const t=(0,d.tv)(),e=(0,d.yj)(),a=()=>{"/Inicio"!==e.path&&t.push("/Inicio")};return{voltar:a}},data(){return{noticia:{},imagePath:"https://apidoego.onrender.com/img/post-4.jpg"}},async created(){try{const t=await D.Z.get("https://apidoego.onrender.com/postagem/3");this.noticia=t.data}catch(t){console.error("Error fetching data:",t)}}});const bt=(0,l.Z)(_t,[["render",vt],["__scopeId","data-v-8bbdf240"]]);var yt=bt;const Ct=t=>((0,o.dD)("data-v-d9125ce2"),t=t(),(0,o.Cn)(),t),kt=Ct((()=>(0,o._)("br",null,null,-1))),jt=Ct((()=>(0,o._)("br",null,null,-1))),zt={class:"card"},Wt={class:"card-title"},Dt={class:"card-body"},Zt={class:"footer"},xt={class:"by-name"},Et={class:"by-name"},It=Ct((()=>(0,o._)("br",null,null,-1))),Ut=Ct((()=>(0,o._)("br",null,null,-1)));function Ht(t,e,a,n,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[kt,jt,(0,o.Wm)(p.K,{class:"d-flex flex-column align-center mt-5"},{default:(0,o.w5)((()=>[(0,o._)("div",zt,[(0,o._)("div",{class:"card-image",style:(0,m.j5)(`background-image: url(${t.imagePath})`)},null,4),(0,o._)("p",Wt,(0,m.zw)(t.noticia.title),1),(0,o._)("p",Dt,(0,m.zw)(t.noticia.description),1),(0,o._)("p",Zt,[(0,o.Uk)("Escrito por "),(0,o._)("span",xt,(0,m.zw)(t.noticia.profileName),1),(0,o.Uk)(" em "),(0,o._)("span",Et,(0,m.zw)(t.noticia.postDate),1)])]),It,Ut,(0,o._)("a",{onClick:e[0]||(e[0]=(...e)=>t.voltar&&t.voltar(...e))},[(0,o.Wm)(h.t,{icon:"mdi-home",color:"blue-grey-darken-2"})])])),_:1})],64)}var Pt=(0,o.aZ)({setup(){const t=(0,d.tv)(),e=(0,d.yj)(),a=()=>{"/Inicio"!==e.path&&t.push("/Inicio")};return{voltar:a}},data(){return{noticia:{},imagePath:"https://apidoego.onrender.com/img/post-5.jpg"}},async created(){try{const t=await D.Z.get("https://apidoego.onrender.com/postagem/4");this.noticia=t.data}catch(t){console.error("Error fetching data:",t)}}});const At=(0,l.Z)(Pt,[["render",Ht],["__scopeId","data-v-d9125ce2"]]);var Ft=At;const Nt=t=>((0,o.dD)("data-v-065e9190"),t=t(),(0,o.Cn)(),t),Tt=Nt((()=>(0,o._)("br",null,null,-1))),Kt=Nt((()=>(0,o._)("br",null,null,-1))),Ot={class:"card"},Lt={class:"card-title"},qt={class:"card-body"},Bt={class:"footer"},Rt={class:"by-name"},Yt={class:"by-name"},St=Nt((()=>(0,o._)("br",null,null,-1))),Mt=Nt((()=>(0,o._)("br",null,null,-1)));function $t(t,e,a,n,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[Tt,Kt,(0,o.Wm)(p.K,{class:"d-flex flex-column align-center mt-5"},{default:(0,o.w5)((()=>[(0,o._)("div",Ot,[(0,o._)("div",{class:"card-image",style:(0,m.j5)(`background-image: url(${t.imagePath})`)},null,4),(0,o._)("p",Lt,(0,m.zw)(t.noticia.title),1),(0,o._)("p",qt,(0,m.zw)(t.noticia.description),1),(0,o._)("p",Bt,[(0,o.Uk)("Escrito por "),(0,o._)("span",Rt,(0,m.zw)(t.noticia.profileName),1),(0,o.Uk)(" em "),(0,o._)("span",Yt,(0,m.zw)(t.noticia.postDate),1)])]),St,Mt,(0,o._)("a",{onClick:e[0]||(e[0]=(...e)=>t.voltar&&t.voltar(...e))},[(0,o.Wm)(h.t,{icon:"mdi-home",color:"blue-grey-darken-2"})])])),_:1})],64)}var Vt=(0,o.aZ)({setup(){const t=(0,d.tv)(),e=(0,d.yj)(),a=()=>{"/Inicio"!==e.path&&t.push("/Inicio")};return{voltar:a}},data(){return{noticia:{},imagePath:"https://apidoego.onrender.com/img/post-6.jpg"}},async created(){try{const t=await D.Z.get("https://apidoego.onrender.com/postagem/5");this.noticia=t.data}catch(t){console.error("Error fetching data:",t)}}});const Gt=(0,l.Z)(Vt,[["render",$t],["__scopeId","data-v-065e9190"]]);var Jt=Gt,Qt=a(650),Xt=a(8497),te=a(9076),ee=a(140),ae=a(2693);const ne=[{path:"/",component:()=>a.e(633).then(a.bind(a,2633))},{path:"",name:ae["default"],component:()=>Promise.resolve().then(a.bind(a,2693))},{path:"/Inicio",name:ae["default"],component:ae["default"]},{path:"/Equipe",name:Qt.Z,component:Qt.Z},{path:"/Footer",name:Xt.Z,component:Xt.Z},{path:"/Header",name:te.Z,component:te.Z},{path:"/Recentes",name:ee.Z,component:ee.Z},{path:"/publi0",name:E,component:E},{path:"/publi1",name:Y,component:Y},{path:"/publi2",name:it,component:it},{path:"/publi3",name:yt,component:yt},{path:"/publi4",name:Ft,component:Ft},{path:"/publi5",name:Jt,component:Jt}],oe=(0,d.p7)({history:(0,d.PO)(),routes:ne});var re=oe,ie=(a(9773),a(8727)),le=(0,ie.Rd)();const se=(0,n.ri)(u);se.use(re),se.use(le),se.mount("#app")},650:function(t,e,a){a.d(e,{Z:function(){return j}});var n=a(3396),o=a(7139),r=a(4475),i=a(6573),l=a(3369),s=a(6824),c=a(8521);const u=t=>((0,n.dD)("data-v-6cef2269"),t=t(),(0,n.Cn)(),t),d=u((()=>(0,n._)("h3",null,"Equipe",-1))),m=u((()=>(0,n._)("hr",{class:"w-25 mt-2 mb-8"},null,-1))),p={class:"d-flex justify-center align-center vh-100"},h={class:"card h-100 w-auto"},f=u((()=>(0,n._)("div",{class:"card-photo",style:"background-image:"},null,-1))),g={class:"card-title"},w=u((()=>(0,n._)("br",null,null,-1))),v=u((()=>(0,n._)("div",{class:"card-socials"},[(0,n._)("button",{class:"card-socials-btn facebook"},[(0,n._)("a",{href:"https://pt-br.facebook.com/login/device-based/regular/login/"},[(0,n._)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg",width:"24",viewBox:"0 0 24 24",id:"Layer_21",height:"24","data-name":"Layer 21"},[(0,n._)("title"),(0,n._)("path",{d:"M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"})])])]),(0,n._)("button",{class:"card-socials-btn github"},[(0,n._)("a",{href:"https://github.com/"},[(0,n._)("svg",{viewBox:"0 0 24 24",height:"33",width:"33",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})])])]),(0,n._)("button",{class:"card-socials-btn linkedin"},[(0,n._)("a",{href:"https://br.linkedin.com/"},[(0,n._)("svg",{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"})])])])],-1)));function _(t,e,a,u,_,b){return(0,n.wg)(),(0,n.j4)(l.K,{id:"Equipe",class:"w-auto mt-15 mb-15"},{default:(0,n.w5)((()=>[d,m,(0,n._)("div",p,[(0,n.Wm)(r.k,{autoplay:!1,"no-swipe":!0,interval:8e3,"hide-delimiters":"",cycle:"","no-controls":"",height:"auto","show-arrows":"hover","hide-delimiter-background":!0,cols:_.carouselCols,class:"carousel-container custom-dot","dot-color":"#FFFFFF"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.slideGroups,((t,e)=>((0,n.wg)(),(0,n.j4)(i.f,{key:e},{default:(0,n.w5)((()=>[(0,n.Wm)(s.o,{justify:"center"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t,((t,a)=>((0,n.wg)(),(0,n.j4)(c.D,{key:a,cols:"12",md:_.carouselCols,xs:"4"},{default:(0,n.w5)((()=>[(0,n._)("div",h,[f,(0,n._)("div",g,[(0,n.Uk)((0,o.zw)(_.name[3*e+a]),1),w,(0,n._)("span",null,(0,o.zw)(_.roles[3*e+a]),1)]),v])])),_:2},1032,["md"])))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["cols"])])])),_:1})}a(7658);var b=a(4161),y={data(){return{carouselCols:1,name:[],roles:["Jornalista Investigativo","Repórter de Campo","Editor de Notícias","Jornalista Esportivo","Repórter de Cultura","Editora-Chefe"],images:[]}},computed:{slideGroups(){const t=[];for(let e=0;e<this.name.length;e+=3)t.push(this.name.slice(e,e+3));return t}},methods:{async fetchData(){try{const t=await b.Z.get("https://apidoego.onrender.com/postagens/");this.name=t.data.map((t=>t.profileName))}catch(t){console.error("Error fetching data:",t)}},adjustCarouselCols(){window.innerWidth>=960?this.carouselCols=4:window.innerWidth>=600?this.carouselCols=2:this.carouselCols=1}},mounted(){this.fetchData(),this.adjustCarouselCols(),window.addEventListener("resize",this.adjustCarouselCols)},beforeUnmount(){window.removeEventListener("resize",this.adjustCarouselCols)}},C=a(89);const k=(0,C.Z)(y,[["render",_],["__scopeId","data-v-6cef2269"]]);var j=k},8497:function(t,e,a){a.d(e,{Z:function(){return Z}});var n=a(3396),o=a(1666),r=a(3369);const i=t=>((0,n.dD)("data-v-b6790438"),t=t(),(0,n.Cn)(),t),l={class:"cardzin"},s={class:"social-link1 mr-10",href:"https://www.instagram.com/"},c={viewBox:"0 0 16 16",class:"bi bi-instagram",fill:"currentColor",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",style:{color:"white"}},u=i((()=>(0,n._)("path",{fill:"white",d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"},null,-1))),d=[u],m={class:"social-link2 mr-10",href:"https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D"},p={viewBox:"0 0 16 16",class:"bi bi-twitter",fill:"currentColor",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",style:{color:"white"}},h=i((()=>(0,n._)("path",{fill:"white",d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"},null,-1))),f=[h],g={class:"social-link3 mr-10",href:"https://discord.com/"},w={viewBox:"0 0 16 16",class:"bi bi-discord",fill:"currentColor",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",style:{color:"white"}},v=i((()=>(0,n._)("path",{fill:"white",d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"},null,-1))),_=[v],b={class:"social-link4",href:"https://web.whatsapp.com/"},y={viewBox:"0 0 16 16",class:"bi bi-whatsapp",fill:"currentColor",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",style:{color:"white"}},C=i((()=>(0,n._)("path",{fill:"white",d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"},null,-1))),k=[C];function j(t,e){return(0,n.wg)(),(0,n.j4)(o.c,{id:"Contato",class:"text-center bg-custom"},{default:(0,n.w5)((()=>[(0,n.Wm)(r.K,{class:"d-flex align-items-center justify-center"},{default:(0,n.w5)((()=>[(0,n._)("div",l,[(0,n._)("a",s,[((0,n.wg)(),(0,n.iD)("svg",c,d))]),(0,n._)("a",m,[((0,n.wg)(),(0,n.iD)("svg",p,f))]),(0,n._)("a",g,[((0,n.wg)(),(0,n.iD)("svg",w,_))]),(0,n._)("a",b,[((0,n.wg)(),(0,n.iD)("svg",y,k))])])])),_:1})])),_:1})}var z=a(89);const W={},D=(0,z.Z)(W,[["render",j],["__scopeId","data-v-b6790438"]]);var Z=D},9076:function(t,e,a){a.d(e,{Z:function(){return b}});var n=a(3396),o=a.p+"img/Logo.a027da75.svg",r=a.p+"img/ImageHome.ab619175.svg",i=a(7128),l=a(1157),s=a(3369),c=a(6824),u=a(8521),d=a(3947),m=a(2078),p=a(5030);const h=t=>((0,n.dD)("data-v-73013838"),t=t(),(0,n.Cn)(),t),f=h((()=>(0,n._)("div",{id:"Inicio"},null,-1)));function g(t,e){return(0,n.wg)(),(0,n.iD)(n.HY,null,[f,(0,n.Wm)(i.L,{class:"custom-app-bar",flat:""},{default:(0,n.w5)((()=>[(0,n.Wm)(s.K,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c.o,{align:"center",class:"mt-15",justify:"space-between"},{default:(0,n.w5)((()=>[(0,n.Wm)(u.D,{cols:"auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(p.q,{class:"custom-title"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.f,{src:o})])),_:1})])),_:1}),(0,n.Wm)(u.D,{cols:"auto",class:"nav-items"},{default:(0,n.w5)((()=>[(0,n.Wm)(l.T,{href:"#Inicio"},{default:(0,n.w5)((()=>[(0,n.Uk)("Início")])),_:1}),(0,n.Wm)(l.T,{href:"#Recentes"},{default:(0,n.w5)((()=>[(0,n.Uk)("Recentes")])),_:1}),(0,n.Wm)(l.T,{href:"#Equipe"},{default:(0,n.w5)((()=>[(0,n.Uk)("Equipe")])),_:1}),(0,n.Wm)(l.T,{href:"#Contato"},{default:(0,n.w5)((()=>[(0,n.Uk)("Contato")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(m.V,{class:"custom-drawer",app:""},{default:(0,n.w5)((()=>[(0,n.Wm)(s.K,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c.o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d.f,{src:o}),(0,n.Wm)(u.D,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l.T,{href:"#Inicio"},{default:(0,n.w5)((()=>[(0,n.Uk)("Início")])),_:1}),(0,n.Wm)(l.T,{href:"#Recentes"},{default:(0,n.w5)((()=>[(0,n.Uk)("Recentes")])),_:1}),(0,n.Wm)(l.T,{href:"#Equipe"},{default:(0,n.w5)((()=>[(0,n.Uk)("Equipe")])),_:1}),(0,n.Wm)(l.T,{href:"#Contato"},{default:(0,n.w5)((()=>[(0,n.Uk)("Contato")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(d.f,{src:r,width:"100%",height:"auto",class:"mt-11"})],64)}var w=a(89);const v={},_=(0,w.Z)(v,[["render",g],["__scopeId","data-v-73013838"]]);var b=_},140:function(t,e,a){a.d(e,{Z:function(){return D}});var n=a(3396),o=a(7139),r=a(4475),i=a(6573),l=a(3369),s=a(6824),c=a(8521);const u=t=>((0,n.dD)("data-v-25416ed2"),t=t(),(0,n.Cn)(),t),d=u((()=>(0,n._)("h3",null,"Recentes",-1))),m=u((()=>(0,n._)("hr",{class:"w-25 mt-2 mb-8"},null,-1))),p={class:"d-flex justify-center align-center vh-100"},h={class:"card h-100 w-auto"},f={class:"card-title"},g=["href"],w={class:"card-body"},v={class:"footer"},_={class:"by-name"},b={class:"date"};function y(t,e,a,u,y,C){return(0,n.wg)(),(0,n.j4)(l.K,{id:"Recentes",class:"w-auto mt-15 mb-15"},{default:(0,n.w5)((()=>[d,m,(0,n._)("div",p,[(0,n.Wm)(r.k,{autoplay:!1,"no-swipe":!0,interval:8e3,"hide-delimiters":"",cycle:"","no-controls":"",height:"auto","show-arrows":"hover","hide-delimiter-background":!0,cols:t.carouselCols,class:"carousel-container custom-dot","dot-color":"#FFFFFF"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.slideGroups,((e,a)=>((0,n.wg)(),(0,n.j4)(i.f,{key:a},{default:(0,n.w5)((()=>[(0,n.Wm)(s.o,{justify:"center"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e,((e,r)=>((0,n.wg)(),(0,n.j4)(c.D,{key:r,cols:"12",md:t.carouselCols,xs:"2"},{default:(0,n.w5)((()=>[(0,n._)("div",h,[(0,n._)("div",{class:"card-image",style:(0,o.j5)(`background-image: url(${t.images[3*a+r]})`)},null,4),(0,n._)("p",f,[(0,n._)("a",{href:`/publi${3*a+r}`},(0,o.zw)(e)+" Slide",9,g)]),(0,n._)("p",w,(0,o.zw)(t.text[3*a+r]),1),(0,n._)("p",v,[(0,n.Uk)(" Escrito por "),(0,n._)("span",_,(0,o.zw)(t.name[3*a+r]),1),(0,n.Uk)(" em "),(0,n._)("span",b,(0,o.zw)(t.date[3*a+r]),1)])])])),_:2},1032,["md"])))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["cols"])])])),_:1})}a(7658);var C=a(2483),k=a(4161),j=(0,n.aZ)({setup(){const t=(0,C.tv)(),e=e=>{t.push(`/publi${e+1}`)};return{openCustomLink:e}},data(){return{carouselCols:1,slides:[],text:[],name:[],date:[],images:[]}},computed:{slideGroups(){const t=[];for(let e=0;e<this.slides.length;e+=3)t.push(this.slides.slice(e,e+3));return t}},methods:{async fetchData(){try{const t=await k.Z.get("https://apidoego.onrender.com/postagens/");this.slides=t.data.map((t=>t.title)),this.text=t.data.map((t=>t.description)),this.name=t.data.map((t=>t.profileName)),this.date=t.data.map((t=>t.postDate)),this.images=t.data.map(((t,e)=>`https://apidoego.onrender.com/img/post-${e+1}.jpg`))}catch(t){console.error("Error fetching data:",t)}},adjustCarouselCols(){window.innerWidth>=960?this.carouselCols=4:window.innerWidth>=600?this.carouselCols=2:this.carouselCols=1}},mounted(){this.adjustCarouselCols(),this.fetchData(),window.addEventListener("resize",this.adjustCarouselCols)},beforeUnmount(){window.removeEventListener("resize",this.adjustCarouselCols)}}),z=a(89);const W=(0,z.Z)(j,[["render",y],["__scopeId","data-v-25416ed2"]]);var D=W},2693:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=a(3396);function o(t,e,a,o,r,i){const l=(0,n.up)("Header"),s=(0,n.up)("Recentes"),c=(0,n.up)("Equipe"),u=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(l),(0,n.Wm)(s),(0,n.Wm)(c),(0,n.Wm)(u)])}var r=a(9076),i=a(650),l=a(8497),s=a(140),c={components:{Header:r.Z,Recentes:s.Z,Footer:l.Z,Equipe:i.Z}},u=a(89);const d=(0,u.Z)(c,[["render",o]]);var m=d}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,r){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],r=t[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[s])}))?n.splice(s--,1):(l=!1,r<i&&(i=r));if(l){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,o,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+".09b5f912.js"}}(),function(){a.miniCssF=function(t){return"css/"+t+".8137909f.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="blog:";a.l=function(n,o,r,i){if(t[n])t[n].push(o);else{var l,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+r){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",e+r),l.src=n),t[n]=[o];var m=function(e,a){l.onerror=l.onload=null,clearTimeout(p);var o=t[n];if(delete t[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,r.parentNode&&r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=i,r.href=e,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},e=function(t,e){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===t||r===e))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],r=o.getAttribute("data-href");if(r===t||r===e)return o}},n=function(n){return new Promise((function(o,r){var i=a.miniCssF(n),l=a.p+i;if(e(i,l))return o();t(n,l,null,o,r)}))},o={143:0};a.f.miniCss=function(t,e){var a={633:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=n(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};a.f.j=function(e,n){var o=a.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));n.push(o[2]=r);var i=a.p+a.u(e),l=new Error,s=function(n){if(a.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,o[1](l)}};a.l(i,s,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,i=n[0],l=n[1],s=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(s)var u=s(a)}for(e&&e(n);c<i.length;c++)r=i[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},n=self["webpackChunkblog"]=self["webpackChunkblog"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5324)}));n=a.O(n)})();
//# sourceMappingURL=app.6144223c.js.map