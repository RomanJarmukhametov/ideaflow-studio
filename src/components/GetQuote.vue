<script>
import Rocketitem from "@/components/UI_components/RocketItem.vue";
import ButtonPrimary from "@/components/UI_components/ButtonPrimary.vue";

export default {
  name: "GetQuote",
  components: {
    Rocketitem,
    ButtonPrimary,
  },

  data() {
    return {
      items: [
        {
          name: "get-quote[2].name",
        },
        {
          name: "get-quote[3].name",
        },
        {
          name: "get-quote[4].name",
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
        <h2>
          {{ $t("get-quote[0].name") }}
          <span> {{ $t("get-quote[1].name") }}</span>
        </h2>

        <Rocketitem
          v-for="(item, index) in items"
          :key="index"
          :text="$t(item.name)"
        />

        <div class="row py-1">
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <ButtonPrimary
              :text="$t(`primary-button[2].name`)"
              link="#contactForm"
              toggle="offcanvas"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 mb-2">
        <img
          class="img-fluid"
          src="/src/assets/images/phone.webp"
          alt="Get a Call"
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
span {
  background: linear-gradient(180deg, #5d45f9 0%, #267deb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
