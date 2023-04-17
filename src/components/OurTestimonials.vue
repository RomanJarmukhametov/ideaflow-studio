<script>
import "bootstrap-icons/font/bootstrap-icons.css";
import en from "/src/i18n/en.json";
export default {
  data() {
    return {
      number: 1,
      touchStartX: null, // used to track the start of a touch event
      minSwipeDistance: 50, // in pixels
    };
  },

  methods: {
    // called when the user clicks the next button
    nextTestimonial() {
      if (this.number < this.testimonialCount - 1) {
        this.number++;
      } else {
        this.number = 0;
      }
    },

    // called when the user clicks the previous button
    previousTestimonial() {
      if (this.number > 0) {
        this.number--;
      } else {
        this.number = this.testimonialCount - 1;
      }
    },

    // called when the user touches the screen
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },

    // called when the user moves their finger across the screen
    handleTouchMove(e) {
      if (this.touchStartX === null) {
        return;
      }
      const touchEndX = e.touches[0].clientX;
      const touchDistance = touchEndX - this.touchStartX;
      if (Math.abs(touchDistance) >= this.minSwipeDistance) {
        if (touchDistance > 0) {
          this.previousTestimonial();
        } else {
          this.nextTestimonial();
        }
        this.touchStartX = null;
      }
    },

    // called when the user lifts their finger off the screen
    handleTouchEnd() {
      this.touchStartX = null;
    },
  },

  computed: {
    testimonialCount() {
      const testimonials = en["our-testimonials"][1].testimonials;
      return testimonials.length;
    },
  },
};
</script>

<template>
  <section
    class="container-fluid decoration"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="container py-5">
      <div class="row">
        <div class="col">
          <h2>{{ $t("our-testimonials[0].name") }}</h2>
          <img src="/src/assets/images/commas.svg" alt="" class="py-3" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 h-100">
          <p class="content">
            <span>{{
              $t(`our-testimonials[1].testimonials[${number}].spanText`)
            }}</span>
            {{ $t(`our-testimonials[1].testimonials[${number}].content`) }}
          </p>
        </div>
        <div class="col-md-6 text-center">
          <img
            src="/src/assets/images/avatar.svg"
            alt="Client Logo"
            class="avatar"
          />
          <h5>
            {{ $t(`our-testimonials[1].testimonials[${number}].author`) }}
          </h5>
          <p>
            {{ $t(`our-testimonials[1].testimonials[${number}].position`) }}
          </p>
        </div>
      </div>

      <hr class="hr hr-blurry" />

      <div class="row">
        <div class="col d-flex justify-content-end text-end">
          <button class="arrow-button" @click="previousTestimonial()">
            <i class="bi bi-chevron-left icon"></i>
          </button>
          <button class="arrow-button" @click="nextTestimonial()">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Remove all styles from arrow-button */
.arrow-button {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 1rem;
  font-size: 1.5rem;
}

.arrow-button:hover {
  background: linear-gradient(180deg, #5d45f9 0%, #267deb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.decoration {
  background-image: url(/src/assets/images/background.svg);
  background-repeat: no-repeat;
  background-size: cover;
}

.content {
  font-size: 1.25rem;
  line-height: 1.875rem;
}
.avatar {
  padding: 1rem;
}

span {
  background: linear-gradient(180deg, #5d45f9 0%, #267deb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
