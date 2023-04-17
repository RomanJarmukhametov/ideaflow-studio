<script>
import NodeDeveloperHero from "@/components/careers/NodeDeveloperHero.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  name: "NodeDeveloper",
  components: {
    NodeDeveloperHero,
    FooterComponent,
  },
  mounted() {
    AddTitle(
      "Node.js разработчик | ideaflow.studio",
      "Node.js Developer | ideaflow.studio"
    );
    AddDescription(
      "Вы опытный Node.js разработчик, который ищет свой следующий вызов? Присоединяйтесь к нам и работайте над захватывающими проектами, которые расширяют границы технологий",
      "Are you a skilled Node.js Developer looking for your next challenge? Join us and work on exciting projects that push the boundaries of technology"
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <NodeDeveloperHero />
    <FooterComponent />
  </main>
</template>
