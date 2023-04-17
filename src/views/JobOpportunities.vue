<script>
import CareerHero from "@/components/CareerHero.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  name: "JobOpening",
  components: {
    CareerHero,
    FooterComponent,
  },
  mounted() {
    AddTitle("Карьера | ideaflow.studio", "Career | ideaflow.studio");

    AddDescription(
      "Присоединяйтесь к нашей команде талантливых профессионалов и выведите свою карьеру на новый уровень. Мы всегда ищем талантливых людей, которые разделяют наше видение создания передовых веб-решений с использованием новейших технологий.",
      "Join our team of passionate professionals and take your career to the next level. We are always looking for talented individuals who share our vision of creating cutting-edge web solutions using the latest technologies."
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <CareerHero />
    <FooterComponent class="fixed-bottom" />
  </main>
</template>

<style scoped>
/* Define the fixed-bottom class for non-mobile devices */
.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

/* Set the position of the footer to relative on mobile devices */
@media (max-width: 767px) {
  .fixed-bottom {
    position: relative;
  }
}
</style>
