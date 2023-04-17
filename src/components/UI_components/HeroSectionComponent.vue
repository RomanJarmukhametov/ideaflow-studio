<script>
import ButtonPrimary from "@/components/UI_components/ButtonPrimary.vue";

export default {
  name: "HomeViewHeroSection",
  components: {
    ButtonPrimary,
  },
  props: {
    heroImageURL: {
      type: String,
      default: "/src/assets/images/hero-image-home.svg",
    },
    title: {
      type: String,
      default: "Hero Section",
    },
    tagline: {
      type: String,
      default: "Tagline",
    },
    description: {
      type: String,
      default: "Description",
    },
    buttonText: {
      type: String,
      default: "Button Text",
    },

    buttonLink: {
      type: String,
      default: "#",
    },
  },
};
</script>

<template>
  <section class="container mt-5 py-lg-5 py-md-3 py-sm-1">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          :src="heroImageURL"
          class="d-block mx-lg-auto img-fluid"
          :alt="title"
        />
      </div>
      <div class="col-lg-6">
        <p class="tagline">{{ tagline }}</p>
        <h1 class="mb-3">
          {{ title }}
        </h1>
        <p>
          {{ description }}
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <ButtonPrimary
            :text="buttonText"
            :link="buttonLink"
            toggle="offcanvas"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
