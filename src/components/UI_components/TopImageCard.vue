<script>
// Define the TopImageCard component
export default {
  name: "TopImageCard",
  // Declare the component's props
  props: {
    // Image source URL
    image: {
      type: String,
      default: "@/assets/images/default.svg",
    },
    // Title of the card
    title: {
      type: String,
      default: "Title",
    },
    // Description of the card
    description: {
      type: String,
      default: "Description",
    },
  },
};
</script>

<template>
  <!-- Create a card container with a custom style -->
  <div class="card border-0 card-custom h-100 text-center">
    <!-- Display the image with the provided source and alternative text -->
    <img :src="image" class="img-fluid card-img mx-auto" :alt="title" />
    <!-- Create the card body containing the title and description -->
    <div class="card-body">
      <!-- Display the title -->
      <h3>{{ title }}</h3>
      <!-- Display the description -->
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Custom styling for the card container */
.card-custom {
  background-color: var(--neutral10);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

/* Styling for the image */
.card-img {
  max-width: 248px;
  max-height: 208px;
}
</style>
