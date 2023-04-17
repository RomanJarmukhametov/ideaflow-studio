<script>
import SideImageCard from "@/components/UI_components/SideImageCard.vue";

import technologiesImage from "@/assets/images/technologies.svg";
import meetTheTeamImage from "@/assets/images/meet_the_team.svg";

export default {
  name: "TechnologyAndTeam",
  components: {
    SideImageCard,
  },
  data() {
    return {
      technologiesImage: technologiesImage,
      meetTheTeamImage: meetTheTeamImage,
      sideImageCards: [
        {
          titleKey: "technology-and-team[0].name",
          descriptionKey: "technology-and-team[0].description",
          image: technologiesImage,
          buttonTextKey: "technology-and-team[0].button",
          buttonLink: "/technology",
        },
        {
          titleKey: "technology-and-team[1].name",
          descriptionKey: "technology-and-team[1].description",
          image: meetTheTeamImage,
          buttonTextKey: "technology-and-team[1].button",
          buttonLink: "/about-us",
        },
      ],
    };
  },
};
</script>
<template>
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="row g-4 py-5">
      <SideImageCard
        v-for="(card, index) in sideImageCards"
        :key="index"
        :title="$t(card.titleKey)"
        :description="$t(card.descriptionKey)"
        :image="card.image"
        :buttonText="$t(card.buttonTextKey)"
        :buttonLink="card.buttonLink"
      />
    </div>
  </section>
</template>
<style scoped></style>
