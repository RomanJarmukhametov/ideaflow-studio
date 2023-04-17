<script>
import TechnologyHero from "@/components/TechnologyHero.vue";
import ContactUs from "@/components/ContactUs.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  name: "OurTechnologies",
  components: {
    TechnologyHero,
    ContactUs,
    FooterComponent,
  },
  mounted() {
    AddTitle("Технологии | ideaflow.studio", "Technology | ideaflow.studio");

    AddDescription(
      "Откройте для себя возможности нашей технологической линейки, включающей такие передовые инструменты, как Vue.js 3, Node.js и Strapi, и выведите процесс веб-разработки на новый уровень.",
      "Discover the power of our technology stack, featuring cutting-edge tools like Vue.js 3, Node.js, and Strapi, and take your web development to the next level"
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <TechnologyHero />

    <ContactUs />
    <FooterComponent />
  </main>
</template>
