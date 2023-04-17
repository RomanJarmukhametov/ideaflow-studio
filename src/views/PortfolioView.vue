<script>
import PortfolioHero from "@/components/PortfolioHero.vue";
import ProjectList from "@/components/ProjectList.vue";
import TechnologyAndTeam from "@/components/TechnologyAndTeam.vue";
import ContactUs from "@/components/ContactUs.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  name: "PortfolioView",
  components: {
    PortfolioHero,
    ProjectList,
    TechnologyAndTeam,
    ContactUs,
    FooterComponent,
  },
  mounted() {
    AddTitle("Портфолио | ideaflow.studio", "Portfolio | ideaflow.studio");

    AddDescription(
      "Ознакомьтесь с нашим впечатляющим портфолио, демонстрирующим наши проекты в области веб-разработки, дизайн-систем и UX/UI-дизайна для клиентов всех размеров и отраслей.",
      "Discover our impressive portfolio showcasing our web development, design systems, and UX/UI design projects for clients of all sizes and industries"
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <PortfolioHero />
    <ProjectList />
    <TechnologyAndTeam />
    <ContactUs />
    <FooterComponent />
  </main>
</template>
