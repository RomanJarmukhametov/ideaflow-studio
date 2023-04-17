<script>
export default {
  // Define the ProjectItem component
  name: "ProjectItem",
  props: {
    // Define prop types and default values for the project item
    link: {
      type: String,
      default: "/",
    },
    image: {
      type: String,
      default: "/src/assets/images/default.svg",
    },
    tools: {
      type: String,
      default: "Tools",
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
  <!-- Project item card -->
  <RouterLink :to="link" style="text-decoration: none" class="col-md-6">
    <div class="card card-project h-100">
      <img :src="image" class="card-img-top img-fluid" :alt="title" />
      <p class="tool mb-2">{{ tools }}</p>

      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped>
.card-project {
  background: #f8f9fd;
  border: none;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.card-project:hover .card-img-top {
  opacity: 0.8;
  transition: all 0.3s ease;
}

.tool {
  background: linear-gradient(180deg, #5d45f9 0%, #267deb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding: 0.5rem 1rem;
}
</style>
