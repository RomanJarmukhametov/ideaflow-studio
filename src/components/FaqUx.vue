<script>
// Import the FAQItem component
import FAQItem from "@/components/UI_components/FAQItem.vue";
import angleImage from "/src/assets/images/angle.svg";

// Define the FaqUx component
export default {
  name: "FaqUx",
  components: {
    FAQItem, // Register the FAQItem component
  },
  data() {
    return {
      angleImage: angleImage,
      activeIndex: 0, // Initialize the activeIndex to manage the open FAQ item

      // Define an array of FAQ items with their data
      faqs: [
        {
          title: "faq-ux[1].faqs[0].name",
          description: "faq-ux[1].faqs[0].description",
          
        },
        {
          title: "faq-ux[1].faqs[1].name",
          description: "faq-ux[1].faqs[1].description",
          
        },
        {
          title: "faq-ux[1].faqs[2].name",
          description: "faq-ux[1].faqs[2].description",
          
        },
        {
          title: "faq-ux[1].faqs[3].name",
          description: "faq-ux[1].faqs[3].description",
         
        },
        {
          title: "faq-ux[1].faqs[4].name",
          description: "faq-ux[1].faqs[4].description",
          
        },
      ],
    };
  },
  methods: {
    // Define a toggle method to update the activeIndex based on the clicked FAQ item
    toggle(index) {
      this.activeIndex = index === this.activeIndex ? -1 : index;
    },
  },
};
</script>

<template>
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-2">
        <img src="/src/assets/images/faq.webp" class="img-fluid" alt="FAq" />
      </div>
      <div class="col-lg-6 col-md-12 mb-2">
        <div class="row py-2">
          <h2>{{ $t("faq-ux[0].name") }}</h2>
        </div>
        <div class="mb-3">
          <!-- Loop through the faqs data array and render an FAQItem component for each item -->
          <FAQItem
            v-for="(faq, index) in faqs"
            :key="index"
            :title="$t(faq.title)"
            :description="$t(faq.description)"
            :image="angleImage"
            :isOpen="activeIndex === index"
            :onToggle="() => toggle(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
