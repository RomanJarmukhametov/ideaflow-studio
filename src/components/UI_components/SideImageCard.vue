<script>
// Import ButtonSecondary component
import ButtonSecondary from "@/components/UI_components/ButtonSecondary.vue";

export default {
  name: "SideImageCard",
  components: {
    ButtonSecondary,
  },
  // Define props for the SideImageCard component
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
    buttonText: {
      type: String,
      default: "Button",
    },
    buttonLink: {
      type: String,
      default: "/",
    },
    image: {
      type: String,
      default: "/src/assets/images/default.svg",
    },
  },
};
</script>

<template>
  <div class="col-md-6">
    <div class="card border-0 card-custom h-100">
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <!-- Display the image prop with the title as the alt text -->
            <img class="img-fluid" :src="image" :alt="title" />
          </div>
          <div class="col-md-9">
            <!-- Display the title prop -->
            <h2>{{ title }}</h2>
            <hr class="hr hr-blurry" />
            <!-- Display the description prop -->
            <p>
              {{ description }}
            </p>
            <!-- Use the ButtonSecondary component with link and text props -->
            <ButtonSecondary :link="buttonLink" :text="buttonText" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-custom {
  background-color: var(--neutral10);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}
</style>
