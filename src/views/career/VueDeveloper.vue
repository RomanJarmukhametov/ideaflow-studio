<script>
import VueDeveloperHero from "@/components/careers/VueDeveloperHero.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  name: "VueDeveloper",
  components: {
    VueDeveloperHero,
    FooterComponent,
  },
  mounted() {
    AddTitle(
      "Vue.js разработчик | ideaflow.studio",
      "Vue.js Developer | ideaflow.studio"
    );

    AddDescription(
      "Присоединяйтесь к нашей команде в качестве опытного Vue.js разработчика! Мы ищем талантливого и увлеченного человека, который поможет нам создавать передовые веб-приложения с использованием новейших технологий. Благодаря нашей атмосфере сотрудничества и захватывающим проектам у вас будет возможность повысить свою квалификацию и оказать значимое влияние на индустрию веб-разработки.",
      "Join our team as a skilled Vue.js Developer! We're looking for a talented and passionate individual who can help us create cutting-edge web applications using the latest technology. With our collaborative environment and exciting projects, you'll have the opportunity to grow your skills and make a meaningful impact on the web development industry"
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <VueDeveloperHero />
    <FooterComponent />
  </main>
</template>

<style></style>
