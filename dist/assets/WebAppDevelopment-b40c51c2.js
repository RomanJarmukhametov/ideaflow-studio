import{H as w,O as F}from"./OurTestimonials-50b8badc.js";import{F as A,_ as I,O,D as $,a as C,G as T}from"./faq-8d0ce5f4.js";import{_ as y}from"./angle-f32a6fcc.js";import{_ as l,r as t,o as p,b as c,a as n,t as D,F as S,d as k,c as Q,e as o}from"./index-0678c724.js";import{C as U}from"./ContactUs-02d71037.js";import{F as L,A as W,a as B}from"./AddMetaTags-02fffdc9.js";import"./ButtonPrimary-f60fec4a.js";const G={name:"FaqUx",components:{FAQItem:A},data(){return{angleImage:y,activeIndex:0,faqs:[{title:"faq-webapp[1].faqs[0].name",description:"faq-webapp[1].faqs[0].description"},{title:"faq-webapp[1].faqs[1].name",description:"faq-webapp[1].faqs[1].description"},{title:"faq-webapp[1].faqs[2].name",description:"faq-webapp[1].faqs[2].description"},{title:"faq-webapp[1].faqs[3].name",description:"faq-webapp[1].faqs[3].description"},{title:"faq-webapp[1].faqs[4].name",description:"faq-webapp[1].faqs[4].description"}]}},methods:{toggle(e){this.activeIndex=e===this.activeIndex?-1:e}}},H={class:"container py-lg-5 py-md-3 py-sm-1"},x={class:"row"},N=n("div",{class:"col-lg-6 col-md-12 mb-2"},[n("img",{src:I,class:"img-fluid",alt:"FAq"})],-1),R={class:"col-lg-6 col-md-12 mb-2"},V={class:"row py-2"},z={class:"mb-3"};function E(e,d,u,f,a,m){const r=t("FAQItem");return p(),c("section",H,[n("div",x,[N,n("div",R,[n("div",V,[n("h2",null,D(e.$t("faq-webapp[0].name")),1)]),n("div",z,[(p(!0),c(S,null,k(a.faqs,(i,s)=>(p(),Q(r,{key:s,title:e.$t(i.title),description:e.$t(i.description),image:a.angleImage,isOpen:a.activeIndex===s,onToggle:()=>m.toggle(s)},null,8,["title","description","image","isOpen","onToggle"]))),128))])])])])}const j=l(G,[["render",E]]),J="/assets/web-app-development-hero-e3a3965d.svg",K={components:{HeroSectionComponent:w,OurServiceFeatures:O,DevelopmentApproach:$,OurAdvantages:C,OurTestimonials:F,GetQuote:T,FaqWebApp:j,ContactUs:U,FooterComponent:L},data(){return{heroImage:J}},mounted(){W("Разработка веб-приложений | ideaflow.studio","Web App Development | ideaflow.studio"),B("Познакомьтесь с ideaflow.studio - командой увлеченных и квалифицированных профессионалов, посвятивших себя созданию потрясающих и эффективных цифровых решений для компаний любого размера. Узнайте о наших ценностях, опыте и стремлении к успеху клиентов","Learn about ideaflow.studio - a team of passionate and skilled professionals dedicated to creating stunning and effective digital solutions for companies of any size. Find out about our values, experience, and commitment to client success."),window.scrollTo(0,0)}};function M(e,d,u,f,a,m){const r=t("HeroSectionComponent"),i=t("OurServiceFeatures"),s=t("DevelopmentApproach"),_=t("OurAdvantages"),g=t("OurTestimonials"),b=t("GetQuote"),v=t("FaqWebApp"),q=t("ContactUs"),h=t("FooterComponent");return p(),c("main",null,[o(r,{heroImageURL:a.heroImage,tagline:e.$t("hero-section-web-app-development[0].name"),title:e.$t("hero-section-web-app-development[1].name"),description:e.$t("hero-section-web-app-development[2].name"),buttonText:e.$t("primary-button[1].name"),buttonLink:"#contactForm"},null,8,["heroImageURL","tagline","title","description","buttonText"]),o(i),o(s),o(_),o(g),o(b),o(v),o(q),o(h)])}const ne=l(K,[["render",M]]);export{ne as default};
