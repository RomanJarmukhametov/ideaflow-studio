<script>
import AboutUsHero from "@/components/AboutUsHero.vue";
import OurValues from "@/components/OurValues.vue";
import ContactUs from "@/components/ContactUs.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  name: "AboutUs",
  components: {
    AboutUsHero,
    OurValues,
    ContactUs,
    FooterComponent,
  },
  mounted() {
    AddTitle("О нас | ideaflow.studio", "About Us | ideaflow.studio");

    AddDescription(
      "Познакомьтесь с ideaflow.studio - командой увлеченных и квалифицированных профессионалов, посвятивших себя созданию потрясающих и эффективных цифровых решений для компаний любого размера. Узнайте о наших ценностях, опыте и стремлении к успеху клиентов",
      "Learn about ideaflow.studio - a team of passionate and skilled professionals dedicated to creating stunning and efficient digital solutions for businesses of all sizes. Discover our values, experience, and commitment to client success"
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <AboutUsHero />
    <OurValues />
    <ContactUs />
    <FooterComponent />
  </main>
</template>
