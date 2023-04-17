<script>
// Import the TopImageCard component
import TopImageCard from "@/components/UI_components/TopImageCard.vue";

//Import images
import webappDevelopmentImage from "@/assets/images/webapp-development.webp";
import websiteDevelopmentImage from "@/assets/images/website-development.webp";
import uxuiDesignImage from "@/assets/images/UXUI-design.webp";

export default {
  // Set the component name
  name: "OurServiceFeatures",

  // Register the imported components
  components: {
    TopImageCard,
  },

  // Define the component data
  data() {
    return {
      // Define an array of features with image, title, and description for each
      features: [
        {
          image: webappDevelopmentImage,
          title: "our-services-features[2].name",
          description: "our-services-features[3].name",
        },
        {
          image: websiteDevelopmentImage,
          title: "our-services-features[4].name",
          description: "our-services-features[5].name",
        },
        {
          image: uxuiDesignImage,
          title: "our-services-features[6].name",
          description: "our-services-features[7].name",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- Create a container with padding for different screen sizes -->
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="row">
      <!-- Add a text-center column for the title and description -->
      <div class="col-12 text-center">
        <h2>{{ $t("our-services-features[0].name") }}</h2>
        <p>{{ $t("our-services-features[1].name") }}</p>
      </div>
    </div>

    <!-- Create a row with cards for each feature -->
    <div class="row g-4 py-5">
      <!-- Loop through the features array and create a column with a TopImageCard for each feature -->
      <div class="col-md-4" v-for="(feature, index) in features" :key="index">
        <TopImageCard
          :image="feature.image"
          :title="$t(feature.title)"
          :description="$t(feature.description)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
