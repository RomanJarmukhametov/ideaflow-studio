<script>
// Define the FAQItem component
export default {
  // Declare the expected props and their types
  props: {
    title: String, // The title of the FAQ item
    description: String, // The description/content of the FAQ item
    image: String, // The image URL to display in the FAQ item
    isOpen: Boolean, // A boolean to indicate whether the FAQ item is open or closed
    onToggle: Function, // A callback function to handle the toggle event
  },
  methods: {
    // Define the toggle method to call the onToggle prop when the FAQ item is clicked
    toggle() {
      this.onToggle();
    },
  },
};
</script>
<template>
  <!-- FAQ item container with a click event listener -->
  <div class="inactive-card" @click="toggle()">
    <!-- Create a row to display the FAQ content -->
    <div class="row py-2">
      <!-- Column for the title and description of the FAQ -->
      <div class="col-10">
        <!-- Display the title -->
        <h3>{{ title }}</h3>
        <!-- Display the description if the isOpen prop is true -->
        <p v-if="isOpen">{{ description }}</p>
      </div>
      <!-- Column for the image -->
      <div class="col-2">
        <!-- Display the image with the provided image URL -->
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Style for the FAQ item container */
.inactive-card {
  border-bottom: 1px solid #dde1e6;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

/* Style for the hover effect on FAQ items */
.active-card:hover,
.inactive-card:hover {
  cursor: pointer;
}
</style>
