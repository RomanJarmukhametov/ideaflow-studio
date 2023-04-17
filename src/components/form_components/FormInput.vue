<script>
// Import Unique ID generator
import UniqueID from "/src/features/UniqueID.js";
export default {
  name: "FormInput",
  // Define component properties
  props: {
    // Label text for the form-input element
    label: {
      type: String,
      default: "",
    },
    // The value of the form-input element
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
  // Generate a unique ID for the form-input element
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>

<template>
  <!-- Create a form-floating container with input and label -->
  <div class="form-floating mb-3">
    <!-- Create an input element with the provided modelValue -->
    <input
      v-bind="$attrs"
      class="form-control field-decoration"
      placeholder=" "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="uuid"
      :aria-describedby="error ? `${uuid}-error` : null"
      :aria-invalid="error ? true : null"
    />

    <!-- Display the label associated with the input -->
    <label :for="uuid" class="label-decoration"> {{ label }} </label>

    <div
      v-if="error"
      class="invalid-feedback"
      role="alert"
      :id="`${uuid}-error`"
      aria-live="assertive"
    >
      {{ error }}
    </div>
  </div>
</template>

<style scoped>
.field-decoration {
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid var(--neutral100);
  background-color: #f8f9fd;
  border-radius: 0px;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: none;
}

.label-decoration {
  color: var(--neutral90);
}
</style>
