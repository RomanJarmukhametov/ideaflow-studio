<script>
export default {
  name: "ButtonSecondary",
  props: {
    link: {
      type: String,
      default: "/",
    },
    text: {
      type: String,
      default: "Secondary Button",
    },
  },
};
</script>
<template>
  <RouterLink
    v-bind="$attrs"
    v-bind:to="link"
    class="btn btn-secondary secondary-button"
  >
    {{ text }}
  </RouterLink>
</template>
<style scoped>
.secondary-button {
  border: none;
  padding: 0.5rem 0.75rem;
  background: linear-gradient(to right, #e9ebf5 50%, var(--neutral90) 50%);
  background-size: 200% 100%;
  background-position: left bottom;
  color: var(--neutral90);
  border-radius: 6px;
  transition: background 0.3s ease-in-out, transform 0.1s ease-in-out;
}

.secondary-button:hover {
  background-position: right bottom;
  color: var(--neutral10);
}
</style>
