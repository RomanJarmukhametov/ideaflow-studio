<script>
import RocketItem from "@/components/UI_components/RocketItem.vue";
export default {
  name: "OurAdvantages",
  components: {
    RocketItem,
  },

  data() {
    return {
      items: [
        {
          name: "our-advanatges[1].name",
        },
        {
          name: "our-advanatges[2].name",
        },
        {
          name: "our-advanatges[3].name",
        },
        {
          name: "our-advanatges[4].name",
        },
        {
          name: "our-advanatges[5].name",
        },
      ],
    };
  },
};
</script>
<template>
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-2">
        <h2>{{ $t("our-advanatges[0].name") }}</h2>

        <RocketItem
          v-for="(item, index) in items"
          :key="index"
          :text="$t(item.name)"
        />
      </div>
      <div class="col-lg-6 col-md-12 mb-2">
        <img
          class="img-fluid"
          src="/src/assets/images/advantages.svg"
          alt="Our Advantages"
        />
      </div>
    </div>
  </section>
</template>
<style></style>
