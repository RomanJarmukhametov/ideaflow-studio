<script>
import FormComponent from "@/components/FormComponent.vue";
import contactFormImage from "@/assets/images/contact-form.svg";

export default {
  name: "ContactUs",
  components: {
    FormComponent,
  },
  data() {
    return {
      contactFormImage: contactFormImage,
    };
  },
};
</script>
<template>
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="row g-4 py-5">
      <div class="col-md-6">
        <FormComponent />
      </div>
      <div class="col-md-6">
        <img :src="contactFormImage" class="img-fluid" alt="Contact Form" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
