<script>
import DesignerHero from "@/components/careers/DesignerHero.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  name: "UxDesigner",
  components: {
    DesignerHero,
    FooterComponent,
  },
  mounted() {
    AddTitle(
      "UX/UI дизайнер | ideaflow.studio",
      "UX/UI Designer | ideaflow.studio"
    );
    AddDescription(
      "Присоединяйтесь к нашей команде в качестве UX/UI-дизайнера и помогайте создавать потрясающие и интуитивно понятные веб-опыты для наших клиентов. Вы будете сотрудничать с нашей талантливой командой дизайнеров и разработчиков, создавая дизайн системы, в которых приоритет отдается потребностям пользователей и которые оказывают длительное воздействие на клиентов",
      "Join our team as a UX/UI Designer and help create stunning and intuitive web experiences for our clients. Collaborate with our talented team of designers and developers to create design systems that prioritize user needs and make a lasting impact"
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <DesignerHero />
    <FooterComponent />
  </main>
</template>
