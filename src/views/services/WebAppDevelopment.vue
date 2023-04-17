<script>
import HeroSectionComponent from "@/components/UI_components/HeroSectionComponent.vue";
import OurServiceFeatures from "@/components/OurServiceFeatures.vue";
// import CaseStudyWebApp from "@/components/CaseStudyWebApp.vue";
import DevelopmentApproach from "@/components/DevelopmentApproach.vue";
import OurAdvantages from "@/components/OurAdvantages.vue";
import OurTestimonials from "@/components/OurTestimonials.vue";
import GetQuote from "@/components/GetQuote.vue";
import FaqWebApp from "@/components/FaqWebApp.vue";
import ContactUs from "@/components/ContactUs.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import heroImage from "@/assets/images/web-app-development-hero.svg";

import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  components: {
    HeroSectionComponent,
    OurServiceFeatures,
    // CaseStudyWebApp,
    DevelopmentApproach,
    OurAdvantages,
    OurTestimonials,
    GetQuote,
    FaqWebApp,
    ContactUs,
    FooterComponent,
  },
  data() {
    return {
      heroImage: heroImage,
    };
  },
  mounted() {
    AddTitle(
      "Разработка веб-приложений | ideaflow.studio",
      "Web App Development | ideaflow.studio"
    );

    AddDescription(
      "Познакомьтесь с ideaflow.studio - командой увлеченных и квалифицированных профессионалов, посвятивших себя созданию потрясающих и эффективных цифровых решений для компаний любого размера. Узнайте о наших ценностях, опыте и стремлении к успеху клиентов",
      "Learn about ideaflow.studio - a team of passionate and skilled professionals dedicated to creating stunning and effective digital solutions for companies of any size. Find out about our values, experience, and commitment to client success."
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <HeroSectionComponent
      :heroImageURL="heroImage"
      :tagline="$t(`hero-section-web-app-development[0].name`)"
      :title="$t(`hero-section-web-app-development[1].name`)"
      :description="$t(`hero-section-web-app-development[2].name`)"
      :buttonText="$t(`primary-button[1].name`)"
      buttonLink="#contactForm"
    />

    <OurServiceFeatures />
    <!-- <CaseStudyWebApp /> -->
    <DevelopmentApproach />
    <OurAdvantages />
    <OurTestimonials />
    <GetQuote />
    <FaqWebApp />
    <ContactUs />
    <FooterComponent />
  </main>
</template>
