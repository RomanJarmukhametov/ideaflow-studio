<script>
// Import ProjectBriefCard and MoreProjectsLink components
import ProjectBriefCard from "./UI_components/ProjectBriefCard.vue";
import MoreProjectsLink from "./UI_components/MoreProjectsLink.vue";

//Import images
import arrowRight from "@/assets/images/arrow-right.svg";
import arrowRightFilled from "@/assets/images/arrow-right-filled.svg";
import itextImage from "@/assets/images/itext.webp";
import ideaflowImage from "@/assets/images/ideaflow.webp";

export default {
  name: "OurProjects",
  // Register ProjectBriefCard and MoreProjectsLink components
  components: {
    ProjectBriefCard,
    MoreProjectsLink,
  },
  data() {
    return {
      arrowRight: arrowRight,
      arrowRightFilled: arrowRightFilled,
      itextImage: itextImage,
      ideaflowImage: ideaflowImage,

      // Define arrow image data for each component instance
      arrowImage1: {
        default: arrowRight,
        pathOne: arrowRight,
        pathTwo: arrowRightFilled,
      },
      arrowImage2: {
        default: arrowRight,
        pathOne: arrowRight,
        pathTwo: arrowRightFilled,
      },
      arrowImage3: {
        default: arrowRight,
        pathOne: arrowRight,
        pathTwo: arrowRightFilled,
      },
      projectImage: {
        pathDefault: itextImage,
        pathOne: itextImage,
        pathTwo: ideaflowImage,
      },
    };
  },
};
</script>

<template>
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-2">
        <h2>{{ $t("our-projects[0].name") }}</h2>
        <p>{{ $t("our-projects[1].name") }}</p>

        <!-- Use ProjectBriefCard component for the first project -->
        <ProjectBriefCard
          :title="$t('our-projects[2].projects[0].name')"
          :description="$t('our-projects[2].projects[0].description')"
          link="/portfolio/itext"
          :arrowImage="arrowImage1"
          :onHover="
            () => {
              arrowImage1.default = arrowImage1.pathTwo;
              projectImage.pathDefault = projectImage.pathOne;
            }
          "
          :onLeave="
            () => {
              arrowImage1.default = arrowImage1.pathOne;
            }
          "
        />

        <!-- Add a separator line between projects -->
        <hr class="hr hr-blurry" />

        <!-- Use ProjectBriefCard component for the second project -->
        <ProjectBriefCard
          :title="$t('our-projects[2].projects[1].name')"
          :description="$t('our-projects[2].projects[1].description')"
          link="/portfolio/ideaflow"
          :arrowImage="arrowImage2"
          :onHover="
            () => {
              arrowImage2.default = arrowImage2.pathTwo;
              projectImage.pathDefault = projectImage.pathTwo;
            }
          "
          :onLeave="
            () => {
              arrowImage2.default = arrowImage2.pathOne;
            }
          "
        />

        <!-- Add a separator line between projects -->
        <hr class="hr hr-blurry" />

        <!-- Use MoreProjectsLink component for the "More Projects" link -->
        <MoreProjectsLink
          link="/portfolio"
          :text="$t('our-projects[3].name')"
          :arrowImage="arrowImage3"
          @mouseenter="
            () => {
              arrowImage3.default = arrowImage3.pathTwo;
            }
          "
          @mouseleave="
            () => {
              arrowImage3.default = arrowImage3.pathOne;
            }
          "
        />
      </div>

      <div class="col-lg-6 col-md-12">
        <img
          :src="projectImage.pathDefault"
          class="img-fluid project-image"
          alt="Our Projects"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-image {
  object-fit: cover;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  border-radius: 12px;
  filter: grayscale(10%);
  width: auto;
  height: auto;
}
</style>
