<script>
import HeroSectionComponent from "@/components/UI_components/HeroSectionComponent.vue";
import OurServiceFeatures from "@/components/OurServiceFeatures.vue";
import CaseStudyUx from "@/components/CaseStudyUx.vue";
import DevelopmentApproach from "@/components/DevelopmentApproach.vue";
import OurAdvantages from "@/components/OurAdvantages.vue";
import OurTestimonials from "@/components/OurTestimonials.vue";
import GetQuote from "@/components/GetQuote.vue";
import FaqUx from "@/components/FaqUx.vue";
import ContactUs from "@/components/ContactUs.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

import heroImageUx from "@/assets/images/ux-hero.svg";

export default {
  components: {
    HeroSectionComponent,
    OurServiceFeatures,
    CaseStudyUx,
    DevelopmentApproach,
    OurAdvantages,
    OurTestimonials,
    GetQuote,
    FaqUx,
    ContactUs,
    FooterComponent,
  },
  data() {
    return {
      heroImageUx: heroImageUx,
    };
  },
  mounted() {
    AddTitle(
      "UX/UI  дизайн | ideaflow.studio",
      "UX/UI Design | ideaflow.studio"
    );

    AddDescription(
      "Раскройте силу великолепного дизайна с помощью нашей услуги UX/UI дизайна. Мы работаем в тесном сотрудничестве с вами, создавая привлекательные, интуитивно понятные интерфейсы, которые помогут вашему бизнесу достичь процветания.",
      "Discover the power of great design with our UX/UI services. From user research to final implementation, we work closely with you to create engaging, intuitive interfaces that help your business thrive."
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <HeroSectionComponent
      :heroImageURL="heroImageUx"
      :tagline="$t(`hero-section-ux-design[0].name`)"
      :title="$t(`hero-section-ux-design[1].name`)"
      :description="$t(`hero-section-ux-design[2].name`)"
      :buttonText="$t(`primary-button[1].name`)"
      buttonLink="#contactForm"
    />

    <OurServiceFeatures />
    <CaseStudyUx />
    <DevelopmentApproach />
    <OurAdvantages />
    <OurTestimonials />
    <GetQuote />
    <FaqUx />
    <ContactUs />
    <FooterComponent />
  </main>
</template>
