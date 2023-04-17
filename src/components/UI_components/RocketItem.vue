<script>
export default {
  name: "RocketItem",
  props: {
    text: {
      type: String,
      default: "Rocket Item",
    },
  },
};
</script>
<template>
  <div class="row py-1">
    <div class="col-1">
      <img src="/src/assets/images/blue-rocket.svg.svg" alt="" />
    </div>
    <div class="col-11">
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<style></style>
