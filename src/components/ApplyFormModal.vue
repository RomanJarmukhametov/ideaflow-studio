<script>
// Import custom form components
import FormInput from "@/components/form_components/FormInput.vue";
import FormTextarea from "@/components/form_components/FormTextarea.vue";
export default {
  name: "ApplyFormModal",
  components: {
    FormInput,
    FormTextarea,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      selectedFile: null,
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
    // Watchers to validate name and email fields
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
    // Method to validate the name input field
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

    // Method to validate the email input field
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

    // Method to handle file input change event
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.selectedFile = file.name;
      }
    },

    // Method to remove the selected file
    removeFile() {
      this.selectedFile = null;
      this.$refs.fileInput.value = "";
    },

    // Method to submit the form
    async submitForm() {
      this.errors = {}; // Clear any previous errors
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("message", this.message);
      formData.append("_subject", "New resume from " + this.name);
      formData.append("file", this.file);

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
  <teleport to="body">
    <!-- Modal container -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <!-- Modal dialog -->
      <div class="modal-dialog">
        <div class="modal-content custom-modal">
          <!-- Modal content -->
          <div class="modal-header border-0">
            <h1 class="modal-title fs-3" id="staticBackdropLabel">
              {{ $t("apply-form[0].title") }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <!-- Form container -->
            <form @submit.prevent="submitForm">
              <!-- Name input -->
              <FormInput
                type="text"
                :label="$t(`apply-form[1].name`)"
                v-model="name"
                :class="{ 'is-invalid': nameError }"
                :error="errors.name"
                name="Candidate name"
                required
              />
              <!-- Email input -->
              <FormInput
                type="email"
                :label="$t(`apply-form[2].email`)"
                v-model="email"
                :class="{ 'is-invalid': emailError }"
                :error="errors.email"
                name="Candidate email"
                required
              />
              <!-- Message textarea -->
              <FormTextarea
                :label="$t(`apply-form[3].message`)"
                v-model="message"
                name="Candidate message"
              />

              <!-- CV/resume uploading-->
              <div class="container mb-4">
                <div class="d-flex justify-content-center">
                  <!-- File upload container -->
                  <div
                    class="file-upload-container d-flex align-items-center"
                    @click="$refs.fileInput.click()"
                  >
                    <!-- Hidden file input -->
                    <input
                      type="file"
                      ref="fileInput"
                      @change="onFileChange"
                      name="Resume"
                      hidden
                    />
                    <!-- File name display or default text -->
                    <div class="flex-grow-1 text-center">
                      <span v-if="!selectedFile">{{
                        $t("apply-form[5].resume")
                      }}</span>
                      <span v-else>{{ selectedFile }}</span>
                    </div>
                    <!-- Remove file button or upload icon -->
                    <div v-if="selectedFile" @click.stop="removeFile">
                      <span class="px-3">X</span>
                    </div>
                    <div v-else>
                      <img
                        class="px-3"
                        src="@/assets/images/upload.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Formspree service message -->
              <input
                name="subject"
                type="hidden"
                value="New resume from {{ name }}"
              />

              <!-- Formspree honeypot anti-spam protection -->
              <input type="text" name="_gotcha" style="display: none" />
              <!-- Submit and cancel buttons -->
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="submit"
                  class="btn btn-primary primary-button"
                  v-bind:disabled="!name || !email"
                >
                  {{ $t("primary-button[4].name") }}
                </button>
                <button
                  type="reset"
                  class="btn btn-secondary cancel-button"
                  data-bs-dismiss="modal"
                >
                  {{ $t("apply-form[6].cancel") }}
                </button>
              </div>
            </form>
            <div v-if="success" class="alert alert-success custom-success">
              {{ $t("apply-form[4].success") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.custom-modal {
  background-color: #f8f9fd;
}
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

.cancel-button {
  border: none;
  padding: 0.5rem 0.75rem;
  background: linear-gradient(to right, #e9ebf5 50%, var(--neutral90) 50%);
  background-size: 200% 100%;
  background-position: left bottom;
  color: var(--neutral90);
  border-radius: 6px;
  transition: background 0.3s ease-in-out, transform 0.1s ease-in-out;
}

.cancel-button:hover {
  background-position: right bottom;
  color: var(--neutral10);
}

.custom-success {
  background-color: #a5d6a7; /* muted green background */
  color: #1b5e20; /* dark green text */
  border-radius: 0.25rem; /* round the corners of the message */
  padding: 1rem; /* same padding as first example */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* add a subtle drop shadow */
  margin-top: 1rem; /* add some space between the message and the form */
}

.file-upload-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 2px dashed #0080ff;
  border-radius: 5px;
  cursor: pointer;
}

.file-upload-container span {
  font-size: 1rem;
  background: var(--primary60);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.file-upload-container:hover {
  background: rgba(0, 128, 255, 0.1);
  cursor: pointer;
}
</style>
