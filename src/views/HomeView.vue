<script>
import HeroSectionComponent from "@/components/UI_components/HeroSectionComponent.vue";
import OurServices from "@/components/OurServices.vue";
import OurProjects from "@/components/OurProjects.vue";
import OurTestimonials from "@/components/OurTestimonials.vue";
import TechnologyAndTeam from "@/components/TechnologyAndTeam.vue";
import ContactUs from "@/components/ContactUs.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import heroImageHome from "@/assets/images/hero-image-home.svg";

import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  components: {
    HeroSectionComponent,
    OurServices,
    OurProjects,
    OurTestimonials,
    TechnologyAndTeam,
    ContactUs,
    FooterComponent,
  },

  data() {
    return {
      heroImageHome: heroImageHome,
    };
  },
  mounted() {
    AddTitle("Главная | ideaflow.studio", "Home | ideaflow.studio");

    AddDescription(
      "Веб-студия ideaflow: Расширение возможностей малого и среднего бизнеса с помощью передовых решений в области веб-разработки и дизайна. Индивидуальная веб-разработка, UX/UI дизайн и создание дизайн-систем для компаний, стремящихся к инновациям и росту.",
      "ideaflow.studio: Empowering Small and Medium Businesses with Cutting-Edge Web Development and Design Solutions. Custom web development, UX/UI design, and design system creation for businesses looking to innovate and grow"
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <HeroSectionComponent
      :heroImageURL="heroImageHome"
      :tagline="$t(`hero-section-home[0].name`)"
      :title="$t(`hero-section-home[1].name`)"
      :description="$t(`hero-section-home[2].name`)"
      :buttonText="$t(`primary-button[0].name`)"
      buttonLink="#contactForm"
    />

    <OurServices />
    <OurProjects />
    <OurTestimonials />
    <TechnologyAndTeam />
    <ContactUs />
    <FooterComponent />
  </main>
</template>
<style></style>
