<script>
// Import ProjectItem component
import ProjectItem from "@/components/UI_components/ProjectItem.vue";

import itextProject from "/src/assets/images/itext-project.png";
import ideaflowProject from "/src/assets/images/ideaflow-project.png";

// Define the ProjectList component
export default {
  name: "ProjectList",
  components: {
    ProjectItem,
  },

  data() {
    return {
      itextProject: itextProject,
      ideaflowProject: ideaflowProject,

      // Define an array of project objects
      projects: [
        {
          link: "project-list[0].link",
          image: itextProject,
          tool: "project-list[0].tool",
          title: "project-list[0].title",
          description: "project-list[1].description",
        },
        {
          link: "project-list[1].link",
          image: ideaflowProject,
          tool: "project-list[1].tool",
          title: "project-list[1].title",
          description: "project-list[1].description",
        },
      ],
    };
  },
};
</script>
<template>
  <section class="container">
    <div class="row">
      <!-- Render a ProjectItem component for each project in the projects array -->
      <ProjectItem
        v-for="(project, index) in projects"
        :key="index"
        :link="$t(project.link)"
        :image="project.image"
        :tools="$t(project.tool)"
        :title="$t(project.title)"
        :description="$t(project.description)"
      />
    </div>
  </section>
</template>
<style scoped></style>
