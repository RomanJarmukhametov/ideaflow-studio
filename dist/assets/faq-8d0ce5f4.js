import{_ as m,o as n,b as a,a as s,t,r as u,F as w,d as g,e as S,n as _,f as l,p as $,g as y,c as b,i as x}from"./index-0678c724.js";import{B as C}from"./ButtonPrimary-f60fec4a.js";const F={name:"TopImageCard",props:{image:{type:String,default:"@/assets/images/default.svg"},title:{type:String,default:"Title"},description:{type:String,default:"Description"}}},T={class:"card border-0 card-custom h-100 text-center"},B=["src","alt"],D={class:"card-body"},A={class:"card-text"};function O(e,i,c,f,o,h){return n(),a("div",T,[s("img",{src:c.image,class:"img-fluid card-img mx-auto",alt:c.title},null,8,B),s("div",D,[s("h3",null,t(c.title),1),s("p",A,t(c.description),1)])])}const R=m(F,[["render",O],["__scopeId","data-v-c5d77702"]]),q="/assets/webapp-development-13b898ce.webp",G="/assets/website-development-1b61903e.webp",Q="/assets/UXUI-design-2337e765.webp",N={name:"OurServiceFeatures",components:{TopImageCard:R},data(){return{features:[{image:q,title:"our-services-features[2].name",description:"our-services-features[3].name"},{image:G,title:"our-services-features[4].name",description:"our-services-features[5].name"},{image:Q,title:"our-services-features[6].name",description:"our-services-features[7].name"}]}}},V={class:"container py-lg-5 py-md-3 py-sm-1"},P={class:"row"},U={class:"col-12 text-center"},j={class:"row g-4 py-5"};function z(e,i,c,f,o,h){const r=u("TopImageCard");return n(),a("section",V,[s("div",P,[s("div",U,[s("h2",null,t(e.$t("our-services-features[0].name")),1),s("p",null,t(e.$t("our-services-features[1].name")),1)])]),s("div",j,[(n(!0),a(w,null,g(o.features,(p,v)=>(n(),a("div",{class:"col-md-4",key:v},[S(r,{image:p.image,title:e.$t(p.title),description:e.$t(p.description)},null,8,["image","title","description"])]))),128))])])}const pe=m(N,[["render",z]]),E="/assets/development-approach-009d4499.svg",L="/assets/requirement-analysis-e0e445d9.svg",X="/assets/business-64683635.svg",H="/assets/design-3c68bb53.svg",J="/assets/coding-f678136c.svg",K="/assets/testing-c5b2306d.svg",M="/assets/deployment-a8c4dcee.svg",W="/assets/maintenance-1249b14e.svg";const Y={data(){return{isShown:{first:!0,second:!1,third:!1,fourth:!1,fifth:!1,sixth:!1,seventh:!1}}},methods:{showFirst(){this.isShown.first?this.isShown.first=!1:(this.isShown.first=!0,this.isShown.second=!1,this.isShown.third=!1,this.isShown.fourth=!1,this.isShown.fifth=!1,this.isShown.sixth=!1,this.isShown.seventh=!1)},showSecond(){this.isShown.second?this.isShown.second=!1:(this.isShown.first=!1,this.isShown.second=!0,this.isShown.third=!1,this.isShown.fourth=!1,this.isShown.fifth=!1,this.isShown.sixth=!1,this.isShown.seventh=!1)},showThird(){this.isShown.third?this.isShown.third=!1:(this.isShown.first=!1,this.isShown.second=!1,this.isShown.third=!0,this.isShown.fourth=!1,this.isShown.fifth=!1,this.isShown.sixth=!1,this.isShown.seventh=!1)},showFourth(){this.isShown.fourth?this.isShown.fourth=!1:(this.isShown.first=!1,this.isShown.second=!1,this.isShown.third=!1,this.isShown.fourth=!0,this.isShown.fifth=!1,this.isShown.sixth=!1,this.isShown.seventh=!1)},showFifth(){this.isShown.fifth?this.isShown.fifth=!1:(this.isShown.first=!1,this.isShown.second=!1,this.isShown.third=!1,this.isShown.fourth=!1,this.isShown.fifth=!0,this.isShown.sixth=!1,this.isShown.seventh=!1)},showSixth(){this.isShown.sixth?this.isShown.sixth=!1:(this.isShown.first=!1,this.isShown.second=!1,this.isShown.third=!1,this.isShown.fourth=!1,this.isShown.fifth=!1,this.isShown.sixth=!0,this.isShown.seventh=!1)},showSeventh(){this.isShown.seventh?this.isShown.seventh=!1:(this.isShown.first=!1,this.isShown.second=!1,this.isShown.third=!1,this.isShown.fourth=!1,this.isShown.fifth=!1,this.isShown.sixth=!1,this.isShown.seventh=!0)}}},d=e=>($("data-v-eb68f107"),e=e(),y(),e),Z={class:"container py-lg-5 py-md-3 py-sm-1"},ss={class:"row"},es=d(()=>s("div",{class:"col-lg-6 col-md-12 mb-2"},[s("img",{src:E,class:"img-fluid",alt:"Development Approach"})],-1)),ts={class:"col-lg-6 col-md-12 mb-2"},os={class:"row py-2"},is={class:"mb-3"},ns={class:"row py-2"},as=d(()=>s("div",{class:"col-2"},[s("img",{src:L,alt:""})],-1)),cs={class:"col-10"},hs={key:0},rs={class:"row py-2"},ls=d(()=>s("div",{class:"col-2"},[s("img",{src:X,alt:""})],-1)),ds={class:"col-10"},ps={key:0},_s={class:"row py-2"},ms=d(()=>s("div",{class:"col-2"},[s("img",{src:H,alt:""})],-1)),fs={class:"col-10"},vs={key:0},us={class:"row py-2"},ws=d(()=>s("div",{class:"col-2"},[s("img",{src:J,alt:""})],-1)),gs={class:"col-10"},Ss={key:0},$s={class:"row py-2"},ys=d(()=>s("div",{class:"col-2"},[s("img",{src:K,alt:""})],-1)),bs={class:"col-10"},ks={key:0},Is={class:"row py-2"},xs=d(()=>s("div",{class:"col-2"},[s("img",{src:M,alt:""})],-1)),Cs={class:"col-10"},Fs={key:0},Ts={class:"row py-2"},Bs=d(()=>s("div",{class:"col-2"},[s("img",{src:W,alt:""})],-1)),Ds={class:"col-10"},As={key:0};function Os(e,i,c,f,o,h){return n(),a("section",Z,[s("div",ss,[es,s("div",ts,[s("div",os,[s("h2",null,t(e.$t("development-approach[0].name")),1)]),s("div",is,[s("div",{class:_(o.isShown.first?"active-card":"inactive-card"),onClick:i[0]||(i[0]=r=>h.showFirst())},[s("div",ns,[as,s("div",cs,[s("h3",null,t(e.$t("development-approach[1].approaches[0].name")),1),o.isShown.first?(n(),a("p",hs,t(e.$t("development-approach[1].approaches[0].description")),1)):l("",!0)])])],2),s("div",{class:_(o.isShown.second?"active-card":"inactive-card"),onClick:i[1]||(i[1]=r=>h.showSecond())},[s("div",rs,[ls,s("div",ds,[s("h3",null,t(e.$t("development-approach[1].approaches[1].name")),1),o.isShown.second?(n(),a("p",ps,t(e.$t("development-approach[1].approaches[1].description")),1)):l("",!0)])])],2),s("div",{class:_(o.isShown.third?"active-card":"inactive-card"),onClick:i[2]||(i[2]=r=>h.showThird())},[s("div",_s,[ms,s("div",fs,[s("h3",null,t(e.$t("development-approach[1].approaches[2].name")),1),o.isShown.third?(n(),a("p",vs,t(e.$t("development-approach[1].approaches[2].description")),1)):l("",!0)])])],2),s("div",{class:_(o.isShown.fourth?"active-card":"inactive-card"),onClick:i[3]||(i[3]=r=>h.showFourth())},[s("div",us,[ws,s("div",gs,[s("h3",null,t(e.$t("development-approach[1].approaches[3].name")),1),o.isShown.fourth?(n(),a("p",Ss,t(e.$t("development-approach[1].approaches[3].description")),1)):l("",!0)])])],2),s("div",{class:_(o.isShown.fifth?"active-card":"inactive-card"),onClick:i[4]||(i[4]=r=>h.showFifth())},[s("div",$s,[ys,s("div",bs,[s("h3",null,t(e.$t("development-approach[1].approaches[4].name")),1),o.isShown.fifth?(n(),a("p",ks,t(e.$t("development-approach[1].approaches[4].description")),1)):l("",!0)])])],2),s("div",{class:_(o.isShown.sixth?"active-card":"inactive-card"),onClick:i[5]||(i[5]=r=>h.showSixth())},[s("div",Is,[xs,s("div",Cs,[s("h3",null,t(e.$t("development-approach[1].approaches[5].name")),1),o.isShown.sixth?(n(),a("p",Fs,t(e.$t("development-approach[1].approaches[5].description")),1)):l("",!0)])])],2),s("div",{class:_(o.isShown.seventh?"active-card":"inactive-card"),onClick:i[6]||(i[6]=r=>h.showSeventh())},[s("div",Ts,[Bs,s("div",Ds,[s("h3",null,t(e.$t("development-approach[1].approaches[6].name")),1),o.isShown.seventh?(n(),a("p",As,t(e.$t("development-approach[1].approaches[6].description")),1)):l("",!0)])])],2)])])])])}const _e=m(Y,[["render",Os],["__scopeId","data-v-eb68f107"]]),Rs="/assets/blue-rocket.svg-8e5dfd46.svg",qs={name:"RocketItem",props:{text:{type:String,default:"Rocket Item"}}},Gs={class:"row py-1"},Qs=s("div",{class:"col-1"},[s("img",{src:Rs,alt:""})],-1),Ns={class:"col-11"};function Vs(e,i,c,f,o,h){return n(),a("div",Gs,[Qs,s("div",Ns,[s("p",null,t(c.text),1)])])}const k=m(qs,[["render",Vs]]),Ps="/assets/advantages-d425035e.svg",Us={name:"OurAdvantages",components:{RocketItem:k},data(){return{items:[{name:"our-advanatges[1].name"},{name:"our-advanatges[2].name"},{name:"our-advanatges[3].name"},{name:"our-advanatges[4].name"},{name:"our-advanatges[5].name"}]}}},js={class:"container py-lg-5 py-md-3 py-sm-1"},zs={class:"row"},Es={class:"col-lg-6 col-md-12 mb-2"},Ls=s("div",{class:"col-lg-6 col-md-12 mb-2"},[s("img",{class:"img-fluid",src:Ps,alt:"Our Advantages"})],-1);function Xs(e,i,c,f,o,h){const r=u("RocketItem");return n(),a("section",js,[s("div",zs,[s("div",Es,[s("h2",null,t(e.$t("our-advanatges[0].name")),1),(n(!0),a(w,null,g(o.items,(p,v)=>(n(),b(r,{key:v,text:e.$t(p.name)},null,8,["text"]))),128))]),Ls])])}const me=m(Us,[["render",Xs]]),Hs="/assets/phone-0046f440.webp";const Js={name:"GetQuote",components:{Rocketitem:k,ButtonPrimary:C},data(){return{items:[{name:"get-quote[2].name"},{name:"get-quote[3].name"},{name:"get-quote[4].name"}]}}},Ks=e=>($("data-v-25a420be"),e=e(),y(),e),Ms={class:"container py-lg-5 py-md-3 py-sm-1"},Ws={class:"row"},Ys={class:"col-lg-6 col-md-12 mb-2"},Zs={class:"row py-1"},se={class:"d-grid gap-2 d-md-flex justify-content-md-start"},ee=Ks(()=>s("div",{class:"col-lg-6 col-md-12 mb-2"},[s("img",{class:"img-fluid",src:Hs,alt:"Get a Call"})],-1));function te(e,i,c,f,o,h){const r=u("Rocketitem"),p=u("ButtonPrimary");return n(),a("section",Ms,[s("div",Ws,[s("div",Ys,[s("h2",null,[x(t(e.$t("get-quote[0].name"))+" ",1),s("span",null,t(e.$t("get-quote[1].name")),1)]),(n(!0),a(w,null,g(o.items,(v,I)=>(n(),b(r,{key:I,text:e.$t(v.name)},null,8,["text"]))),128)),s("div",Zs,[s("div",se,[S(p,{text:e.$t("primary-button[2].name"),link:"#contactForm",toggle:"offcanvas"},null,8,["text"])])])]),ee])])}const fe=m(Js,[["render",te],["__scopeId","data-v-25a420be"]]);const oe={props:{title:String,description:String,image:String,isOpen:Boolean,onToggle:Function},methods:{toggle(){this.onToggle()}}},ie={class:"row py-2"},ne={class:"col-10"},ae={key:0},ce={class:"col-2"},he=["src"];function re(e,i,c,f,o,h){return n(),a("div",{class:"inactive-card",onClick:i[0]||(i[0]=r=>h.toggle())},[s("div",ie,[s("div",ne,[s("h3",null,t(c.title),1),c.isOpen?(n(),a("p",ae,t(c.description),1)):l("",!0)]),s("div",ce,[s("img",{src:c.image,alt:""},null,8,he)])])])}const ve=m(oe,[["render",re],["__scopeId","data-v-b5a7e5a5"]]),ue="/assets/faq-a89f698f.webp";export{_e as D,ve as F,fe as G,pe as O,ue as _,me as a};