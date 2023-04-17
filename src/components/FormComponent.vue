<script>
import FormInput from "@/components/form_components/FormInput.vue";
import FormTextarea from "@/components/form_components/FormTextarea.vue";
export default {
  name: "FormComponent",
  components: {
    FormInput,
    FormTextarea,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      success: false,
      emailError: false,
      nameError: false,
      errors: {
        name: "",
        email: "",
      },
    };
  },
  watch: {
    name: function (newValue) {
      if (newValue && !this.validateName(newValue)) {
        this.nameError = true;
      } else {
        this.nameError = false;
      }
    },

    email: function (newValue) {
      if (newValue && !this.validateEmail(newValue)) {
        this.emailError = true;
      } else {
        this.emailError = false;
      }
    },
  },
  methods: {
    //Validate name
    validateName() {
      const regex = /^[a-zA-Zа-яА-Я\s]+$/;
      if (!regex.test(this.name)) {
        const browserLanguage = navigator.language || navigator.userLanguage;
        if (browserLanguage.startsWith("ru")) {
          this.errors.name = "Имя должно содержать только буквы";
        } else {
          this.errors.name = "Name must contain only letters";
        }
        return false;
      } else {
        this.errors.name = "";
      }
      return true;
    },

    //Validate email
    validateEmail() {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(this.email)) {
        const browserLanguage = navigator.language || navigator.userLanguage;
        if (browserLanguage.startsWith("ru")) {
          this.errors.email =
            "Адрес электронной почты должен содержать символ @ и доменное имя";
        } else {
          this.errors.email =
            "Email address must contain @ symbol and domain name";
        }
      } else {
        this.errors.email = "";
        return true;
      }
      return false;
    },
    //Submit form
    async submitForm() {
      this.errors = {}; // Clear any previous errors
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("message", this.message);
      formData.append("_subject", "New submission from " + this.name);

      try {
        const response = await fetch("https://formspree.io/f/xdovzenz", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (response.ok) {
          this.success = true;
          this.name = "";
          this.email = "";
          this.message = "";
        } else {
          const data = await response.json();
          if (data.errors) {
            this.errors = data.errors;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <h2>
      {{ $t("contact-us[0].name") }}
      <span>{{ $t("contact-us[1].name") }}</span>
    </h2>

    <FormInput
      type="text"
      :label="$t(`contact-us[2].name`)"
      v-model="name"
      :class="{ 'is-invalid': nameError }"
      :error="errors.name"
      name="Client name"
      required
    />

    <FormInput
      type="email"
      :label="$t(`contact-us[3].name`)"
      v-model="email"
      :class="{ 'is-invalid': emailError }"
      :error="errors.email"
      name="Client email"
      required
    />

    <FormTextarea
      :label="$t(`contact-us[4].name`)"
      v-model="message"
      name="Client message"
    />

    <!-- Formspree service message -->
    <input
      name="subject"
      type="hidden"
      value="New submission from {{ name }}"
    />

    <!-- Formspree honeypot anti-spam protection -->
    <input type="text" name="_gotcha" style="display: none" />

    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
      <button
        type="submit"
        class="btn btn-primary primary-button"
        v-bind:disabled="!name || !email"
      >
        {{ $t("primary-button[0].name") }}
      </button>
    </div>
  </form>
  <div v-if="success" class="alert alert-success custom-success">
    {{ $t("contact-us[5].name") }}
  </div>
</template>

<style scoped>
.primary-button {
  padding: 0.5rem 0.75rem;
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

.custom-success {
  background-color: #a5d6a7; /* muted green background */
  color: #1b5e20; /* dark green text */
  border-radius: 0.25rem; /* round the corners of the message */
  padding: 1rem; /* same padding as first example */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* add a subtle drop shadow */
  margin-top: 1rem; /* add some space between the message and the form */
}

h2 {
  font-weight: normal;
}

span {
  font-weight: 700;
  background: linear-gradient(180deg, #5d45f9 0%, #267deb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
