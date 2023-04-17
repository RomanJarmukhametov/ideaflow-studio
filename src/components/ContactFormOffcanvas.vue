<script setup>
import FormComponent from "@/components/FormComponent.vue";
</script>

<template>
  <div
    class="offcanvas offcanvas-end decoration"
    tabindex="-1"
    id="contactForm"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <FormComponent />
    </div>
  </div>
</template>

<style scoped>
.decoration {
  background-color: #f8f9fd;
}
</style>
