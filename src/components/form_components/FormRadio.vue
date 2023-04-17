<script>
// Import Unique ID generator
import UniqueID from "/src/features/UniqueID.js";
export default {
  name: "FormRadio",
  // Define component properties
  props: {
    // Label text for the form-radio element
    label: {
      type: String,
      default: "",
    },
    // The selected value of the form-radio element
    modelValue: {
      type: [String, Number],
      default: "",
    },
    // The value associated with the radio input
    value: {
      type: [String, Number],
      required: true,
    },
  },
  // Generate a unique ID for the form-radio element
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>

<template>
  <!-- Create a radio input element with the provided value and modelValue -->
  <input
    class="form-check-input"
    type="radio"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
    v-bind="$attrs"
    :id="uuid"
  />
  <!-- Display the label if it exists -->
  <label v-if="label" :for="uuid" class="form-check-label">
    {{ label }}
  </label>
</template>

<style scoped>
/* Add space between input and label */
.form-check-input + .form-check-label {
  margin-left: 0.5rem;
}
</style>
