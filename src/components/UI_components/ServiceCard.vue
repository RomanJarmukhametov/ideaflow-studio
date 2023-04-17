<script>
export default {
  // Component name
  name: "ServiceCard",
  // Props for data passed from parent component
  props: {
    serviceName: String,
    serviceDescription: String,
    serviceLink: String,
    arrowImage: String,
  },
  methods: {
    // Emit 'mouseenter' event when the mouse enters the card
    onMouseEnter() {
      this.$emit("mouseenter");
    },
    // Emit 'mouseleave' event when the mouse leaves the card
    onMouseLeave() {
      this.$emit("mouseleave");
    },
  },
};
</script>

<template>
  <!-- RouterLink to navigate to the service detail page -->
  <RouterLink :to="serviceLink" style="text-decoration: none">
    <!-- Card element with mouseenter and mouseleave event listeners -->
    <div
      class="card-custom"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div class="row">
        <!-- Display the service name and description -->
        <div class="col-10">
          <h3>{{ serviceName }}</h3>
          <p>{{ serviceDescription }}</p>
        </div>
        <!-- Display the arrow image -->
        <div class="col-2">
          <img :src="arrowImage" class="py-1 icon-custom" alt="" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
/* Card container styles */
.card-custom {
  background-color: var(--neutral10);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

/* Card hover overlay */
.card-custom::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: scale(0.9);
  background: rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

/* Card hover styles */
.card-custom:hover {
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}

/* Card hover overlay styles on hover */
.card-custom:hover::before {
  opacity: 1;
  transform: scale(1);
}

/* Card active state styles */
.card-custom:active {
  background-color: var(--neutral20);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
}

/* Arrow icon styles */
.icon-custom {
  width: 2rem;
  height: 2rem;
}
</style>
