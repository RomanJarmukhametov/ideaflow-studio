<script>
// Define the ValueItem component
export default {
  name: "ValueItem",
  // Define the props
  props: {
    image: {
      type: String,
      default: "/src/assets/images/default.svg",
    },
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
  },
};
</script>
<template>
  <div class="col-md-6">
    <div class="card border-0 card-values h-100">
      <div class="card-body">
        <div class="row">
          <div class="col-md-2">
            <img class="img-fluid" :src="image" alt="" />
          </div>
          <div class="col-md-10">
            <h3>{{ title }}</h3>
            <p>
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-values {
  background: #f8f9fd;
  border: none;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}
</style>
