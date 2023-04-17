<script>
// Import Unique ID generator
import UniqueID from "/src/features/UniqueID.js";
export default {
  name: "FormCheckbox",
  // Define component properties
  props: {
    // Label text for the form-checkbox element
    label: {
      type: String,
      default: "",
    },
    // The checked status of the form-checkbox element
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  // Generate a unique ID for the form-checkbox element
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>

<template>
  <!-- Create a form-check container with input and label -->
  <div class="form-check">
    <!-- Create a checkbox element with the provided modelValue -->
    <input
      class="form-check-input"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update.modelValue', $event.target.checked)"
      v-bind="$attrs"
      :id="uuid"
    />
    <!-- Display the label if it exists -->
    <label :for="uuid" v-if="label" class="form-check-label">
      {{ label }}
    </label>
  </div>
</template>

<style></style>
