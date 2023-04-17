<script>
export default {
  name: "ProjectBriefCard",
  // Define the props that this component expects to receive
  props: {
    title: String,
    description: String,
    link: String,
    arrowImage: Object,
    onHover: Function,
    onLeave: Function,
  },
  methods: {
    // Method to handle 'mouseenter' event and call the provided 'onHover' function
    onMouseEnter() {
      this.onHover();
    },
    // Method to handle 'mouseleave' event and call the provided 'onLeave' function
    onMouseLeave() {
      this.onLeave();
    },
  },
};
</script>

<template>
  <!-- Use RouterLink component to create a navigational link -->
  <RouterLink :to="link" style="text-decoration: none">
    <!-- Create a custom card element with specific styling -->
    <div
      class="card-custom"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div class="row">
        <div class="col-10">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
        <div class="col-2">
          <img :src="arrowImage.default" class="py-1 icon-custom" alt="" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card-custom {
  background-color: var(--neutral10);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

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

.card-custom:hover {
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}

.card-custom:hover::before {
  opacity: 1;
  transform: scale(1);
}

.card-custom:active {
  background-color: var(--neutral20);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
}

.icon-custom {
  width: 2rem;
  height: 2rem;
}
</style>
