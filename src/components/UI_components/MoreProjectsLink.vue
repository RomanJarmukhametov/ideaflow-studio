<script>
export default {
  name: "MoreProjectsLink",
  // Define the props that this component expects to receive
  props: {
    link: String,
    text: String,
    arrowImage: Object,
  },
  methods: {
    // Method to emit 'mouseenter' event when the mouse enters the link
    handleMouseEnter() {
      this.$emit("mouseenter");
    },
    // Method to emit 'mouseleave' event when the mouse leaves the link
    handleMouseLeave() {
      this.$emit("mouseleave");
    },
  },
};
</script>

<template>
  <!-- Use RouterLink component to create a navigational link -->
  <RouterLink
    :to="link"
    style="text-decoration: none"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="custom-link d-flex align-items-center">
      <p class="more-projects">{{ text }}</p>
      <img :src="arrowImage.default" alt="" class="py-1 icon-custom ml-2" />
    </div>
  </RouterLink>
</template>

<style scoped>
.custom-link p {
  margin: 0;
}
.more-projects {
  background: var(--primary60);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
}

.icon-custom {
  width: 2rem;
  height: 2rem;
}
</style>
