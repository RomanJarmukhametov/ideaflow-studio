<script>
import HeroSectionComponent from "@/components/UI_components/HeroSectionComponent.vue";
import OurServiceFeatures from "@/components/OurServiceFeatures.vue";
import CaseStudyWebSite from "@/components/CaseStudyWebSite.vue";
import DevelopmentApproach from "@/components/DevelopmentApproach.vue";
import OurAdvantages from "@/components/OurAdvantages.vue";
import OurTestimonials from "@/components/OurTestimonials.vue";
import GetQuote from "@/components/GetQuote.vue";
import FaqWebsite from "@/components/FaqWebsite.vue";
import ContactUs from "@/components/ContactUs.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import heroImageHome from "@/assets/images/web-site-development-hero.svg";

import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  components: {
    HeroSectionComponent,
    OurServiceFeatures,
    CaseStudyWebSite,
    DevelopmentApproach,
    OurAdvantages,
    OurTestimonials,
    GetQuote,
    FaqWebsite,
    ContactUs,
    FooterComponent,
  },

  data() {
    return {
      heroImageHome: heroImageHome,
    };
  },

  mounted() {
    AddTitle(
      "Разработка веб-сайтов | ideaflow.studio",
      "Web Site Development | ideaflow.studio"
    );

    AddDescription(
      "Воспользуйтесь нашими услугами по разработке веб-сайтов на заказ. Мы создаем потрясающие, удобные для пользователей веб-сайты, адаптированные к потребностям вашего бизнеса",
      "Transform your online presence with our custom web development services. We build stunning, user-friendly websites tailored to your business needs"
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <HeroSectionComponent
      :heroImageURL="heroImageHome"
      :tagline="$t(`hero-section-web-site-development[0].name`)"
      :title="$t(`hero-section-web-site-development[1].name`)"
      :description="$t(`hero-section-web-site-development[2].name`)"
      :buttonText="$t(`primary-button[1].name`)"
      buttonLink="#contactForm"
    />

    <OurServiceFeatures />
    <CaseStudyWebSite />
    <DevelopmentApproach />
    <OurAdvantages />
    <OurTestimonials />
    <GetQuote />
    <FaqWebsite />
    <ContactUs />
    <FooterComponent />
  </main>
</template>
