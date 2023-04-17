<script>
// Exporting the ButtonPrimary component
export default {
  // Component name for better readability and debugging
  name: "ButtonPrimary",
  // Define component properties (props)
  props: {
    // Text to be displayed on the button
    text: {
      type: String,
      default: "Button",
    },
    // URL the button should link to when clicked
    link: {
      type: String,
      default: "#",
    },
    // Bootstrap toggle for the button
    toggle: {
      type: String,
      default: "",
    },
    // Modal target ID if it should open a modal
    modalTarget: {
      type: String,
      default: "",
    },
  },
  computed: {
    toggleAttribute() {
      return this.modalTarget ? "modal" : this.toggle;
    },
  },
};
</script>

<template>
  <a
    v-bind="$attrs"
    class="btn btn-primary primary-button"
    :data-bs-toggle="toggle"
    :data-bs-target="modalTarget"
    v-bind:href="link"
    role="button"
    aria-controls="offcanvasExample"
  >
    {{ text }}
  </a>
</template>

<style scoped>
.primary-button {
  border: none;
  padding: 1rem 1.75rem;
  background: var(--primary60);
  color: var(--neutral10);
  border-radius: 6px;
  transition: background 0.3s ease-in-out, transform 0.1s ease-in-out;
}

.primary-button:hover {
  background: var(--primary70);
  cursor: pointer;
}

.primary-button:active {
  background: var(--primary80);
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
</style>
