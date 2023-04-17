<script>
// Import ValueItem component
import ValueItem from "@/components/UI_components/ValueItem.vue";

import integrityImage from "/src/assets/images/integrity.svg";
import clientFocusedImage from "/src/assets/images/client-focused.svg";
import opennessImage from "/src/assets/images/openness.svg";
import motivationImage from "/src/assets/images/motivation.svg";

// Define the OurValues component
export default {
  name: "OurValues",
  components: {
    ValueItem,
  },
  data() {
    return {
      integrityImage: integrityImage,
      clientFocusedImage: clientFocusedImage,
      opennessImage: opennessImage,
      motivationImage: motivationImage,

      // Define an array of value objects
      values: [
        {
          image: integrityImage,
          title: "our-values[1].name",
          description: "our-values[2].name",
        },
        {
          image: clientFocusedImage,
          title: "our-values[3].name",
          description: "our-values[4].name",
        },
        {
          image: opennessImage,
          title: "our-values[5].name",
          description: "our-values[6].name",
        },
        {
          image: motivationImage,
          title: "our-values[7].name",
          description: "our-values[8].name",
        },
      ],
    };
  },
};
</script>
<template>
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="row">
      <div class="col">
        <h2>{{ $t("our-values[0].name") }}</h2>
      </div>
    </div>
    <div class="row">
      <!-- Render a ValueItem component for each value in the values array -->
      <ValueItem
        v-for="(value, index) in values"
        :key="index"
        :image="value.image"
        :title="$t(value.title)"
        :description="$t(value.description)"
      />
    </div>
  </section>
</template>
<style scoped></style>
