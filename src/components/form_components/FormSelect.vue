<script>
// Import Unique ID generator
import UniqueID from "/src/features/UniqueID.js";
export default {
  name: "FormSelect",
  // Define component properties
  props: {
    // Label text for the form-select element
    label: {
      type: String,
      default: "",
    },
    // The selected value of the form-select element
    modelValue: {
      type: [String, Number],
      default: "",
    },
    // Array of options for the form-select element
    options: {
      type: Array,
      required: true,
    },

    error: {
      type: String,
      default: "",
    },
  },
  // Generate a unique ID for the form-select element
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>

<template>
  <!-- Display the label if it exists -->
  <label :for="uuid" v-if="label" class="label mb-0">{{ label }}</label>

  <!-- Create a form-select element with the provided modelValue -->
  <select
    class="form-select custom-select"
    :value="modelValue"
    :id="uuid"
    v-bind="{
      ...$attrs,
      // Emit an event when the selected value changes
      onChange: ($event) => $emit('update:modelValue', $event.target.value),
    }"
  >
    <!-- Loop through the options array and create an option element for each -->
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>

  <div
    v-if="error"
    class="alert alert-danger"
    role="alert"
    :id="`${uuid}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </div>
</template>
<style scoped>
.custom-select {
  border: none;
  background-color: transparent;
}
.label {
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: #86939c;
}
</style>
