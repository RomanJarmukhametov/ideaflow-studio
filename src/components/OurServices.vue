<script>
// Import the ServiceCard component to use in this component
import ServiceCard from "./UI_components/ServiceCard.vue";

import arrowRight from "@/assets/images/arrow-right.svg";
import arrowRightFilled from "@/assets/images/arrow-right-filled.svg";
import servicesImage from "@/assets/images/services.svg";

export default {
  name: "OurServices",
  // Register the imported ServiceCard component
  components: {
    ServiceCard,
  },
  data() {
    return {
      arrowRight: arrowRight,
      arrowRightFilled: arrowRightFilled,
      servicesImage: servicesImage,

      // Array of services with required data for each service card
      services: [
        {
          serviceNameKey: "professional-services[2].services[0].name",
          serviceDescriptionKey:
            "professional-services[2].services[0].description",
          serviceLink: "/service/website-development",
          arrowImage: {
            default: arrowRight,
            pathOne: arrowRight,
            pathTwo: arrowRightFilled,
          },
        },
        // Similar structure for other services
        {
          serviceNameKey: "professional-services[2].services[1].name",
          serviceDescriptionKey:
            "professional-services[2].services[1].description",
          serviceLink: "/service/webapp-development",
          arrowImage: {
            default: arrowRight,
            pathOne: arrowRight,
            pathTwo: arrowRightFilled,
          },
        },
        // Similar structure for other services
        {
          serviceNameKey: "professional-services[2].services[2].name",
          serviceDescriptionKey:
            "professional-services[2].services[2].description",
          serviceLink: "/service/ux-design",
          arrowImage: {
            default: arrowRight,
            pathOne: arrowRight,
            pathTwo: arrowRightFilled,
          },
        },
      ],
    };
  },
};
</script>

<template>
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <!-- Display the services image -->
        <img :src="servicesImage" class="img-fluid" alt="Our Services" />
      </div>

      <div class="col-lg-6 col-md-12 mb-2">
        <!-- Display the tagline -->
        <p class="tagline">
          {{ $t("professional-services[0].name") }}
        </p>
        <!-- Display the services heading -->
        <h2>{{ $t("professional-services[1].name") }}</h2>

        <!-- Loop through the services array -->
        <div v-for="(service, index) in services" :key="index">
          <!-- Use the ServiceCard component with props for service data -->
          <ServiceCard
            :serviceName="$t(service.serviceNameKey)"
            :serviceDescription="$t(service.serviceDescriptionKey)"
            :serviceLink="service.serviceLink"
            :arrowImage="service.arrowImage.default"
            @mouseenter="
              service.arrowImage.default = service.arrowImage.pathTwo
            "
            @mouseleave="
              service.arrowImage.default = service.arrowImage.pathOne
            "
          />

          <!-- Add the hr element conditionally if it's not the last item in the services array -->
          <hr v-if="index < services.length - 1" class="hr hr-blurry" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
