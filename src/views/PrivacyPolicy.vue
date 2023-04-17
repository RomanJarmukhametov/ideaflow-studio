<script>
import FooterComponent from "@/components/FooterComponent.vue";
import { AddTitle, AddDescription } from "@/features/AddMetaTags.js";

export default {
  name: "PrivacyPolicy",
  components: {
    FooterComponent,
  },

  mounted() {
    AddTitle(
      "Политика конфиденциальности | ideaflow.studio",
      "Privacy Policy | ideaflow.studio"
    );

    AddDescription(
      "Защита вашей конфиденциальности очень важна для нас. Наша политика конфиденциальности описывает, как мы собираем, используем и защищаем ваши данные.",
      "Protecting your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your data"
    );

    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <section class="container mt-5 py-lg-5 py-md-3 py-sm-1">
      <div class="row py-5">
        <div class="col py-2">
          <h1 class="text-break fs-2 fs-md-3 fs-lg-4">
            {{ $t("privacy-policy[0].title") }}
          </h1>
          <p>{{ $t("privacy-policy[0].effective-date") }}</p>
          <h3>{{ $t("privacy-policy[0].purpose-title") }}</h3>
          <p>{{ $t("privacy-policy[0].purpose-text") }}</p>
          <h3>{{ $t("privacy-policy[0].data-collected-title") }}</h3>
          <p>{{ $t("privacy-policy[0].data-collected-text") }}</p>
          <h3>{{ $t("privacy-policy[0].data-used-title") }}</h3>
          <p>{{ $t("privacy-policy[0].data-used-text") }}</p>
          <h3>{{ $t("privacy-policy[0].cookies-title") }}</h3>
          <p>{{ $t("privacy-policy[0].cookies-text") }}</p>
          <h3>{{ $t("privacy-policy[0].third-party-links-title") }}</h3>
          <p>{{ $t("privacy-policy[0].third-party-links-text") }}</p>
          <h3>{{ $t("privacy-policy[0].personal-info-title") }}</h3>
          <p>{{ $t("privacy-policy[0].personal-info-text") }}</p>
          <h3>{{ $t("privacy-policy[0].data-controller-title") }}</h3>
          <p>{{ $t("privacy-policy[0].data-controller-text") }}</p>
        </div>
      </div>
    </section>

    <FooterComponent />
  </main>
</template>

<style scoped>
.h1-responsive {
  word-break: break-word;
}
@media (max-width: 767px) {
  .h1-responsive {
    font-size: 1.5rem;
  }
}
</style>
