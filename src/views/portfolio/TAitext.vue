<script>
import itextHero from "/src/components/portfolio-projects/itextHero.vue";
import itextProblemsAndSolutions from "/src/components/portfolio-projects/itextProblemsAndSolutions.vue";
import itextResults from "/src/components/portfolio-projects/itextResults.vue";
import ContactUs from "@/components/ContactUs.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  name: "TAitext",
  components: {
    itextHero,
    itextProblemsAndSolutions,
    itextResults,
    ContactUs,
    FooterComponent,
  },

  mounted() {
    AddTitle(
      "Сайт БП iText | ideaflow.studio",
      "iText TA Website | ideaflow.studio"
    );

    AddDescription(
      "Бюро переводов iText - поставщик языковых услуг, предлагающий профессиональные услуги по переводу и локализации для предприятий и частных лиц. У компании был существующий веб-сайт, но он не был ориентирован на мобильные устройства и был сложным в использовании. Это было серьезной проблемой, поскольку все больше пользователей заходили на сайт через мобильные устройства.",
      "iText Translation Agency is a language services provider that offers professional translation and localization services to businesses and individuals. The company had an existing website, but it was not responsive and difficult to use on mobile devices. This was a major issue as an increasing number of users were accessing the site via mobile devices. "
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <itextHero />
    <itextProblemsAndSolutions />
    <itextResults />
    <ContactUs />
    <FooterComponent />
  </main>
</template>
