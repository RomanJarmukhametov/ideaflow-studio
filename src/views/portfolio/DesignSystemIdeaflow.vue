<script>
import ideaflowHero from "/src/components/portfolio-projects/ideaflowHero.vue";
import ideaflowProblemsAndSolutions from "/src/components/portfolio-projects/ideaflowProblemsAndSolutions.vue";
import ideaflowResults from "/src/components/portfolio-projects/ideaflowResults.vue";
import ContactUs from "@/components/ContactUs.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  name: "DesignSystemIdeaflow",
  components: {
    ideaflowHero,
    ideaflowProblemsAndSolutions,
    ideaflowResults,
    ContactUs,
    FooterComponent,
  },

  mounted() {
    AddTitle(
      "Проект дизайн-системы | ideaflow.studio",
      "Design System Project | ideaflow.studio"
    );

    AddDescription(
      "Дизайн-система ideaflow - это комплексная дизайн-система, созданная нашей веб-студией в рамках внутренней инициативы.",
      "ideaflow Design System is a comprehensive design library created by our web studio as an internal initiative. "
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <ideaflowHero />
    <ideaflowProblemsAndSolutions />
    <ideaflowResults />
    <ContactUs />
    <FooterComponent />
  </main>
</template>
