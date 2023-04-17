<script setup>
import { RouterView } from "vue-router";
import NavBar from "/src/components/NavBar.vue";
import ContactFormOffcanvas from "/src/components/ContactFormOffcanvas.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>

  <ContactFormOffcanvas />
  <RouterView />
</template>

<style></style>
