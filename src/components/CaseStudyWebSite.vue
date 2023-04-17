<script>
import "bootstrap-icons/font/bootstrap-icons.css";

//Importing case study images
import caseStudy1Image from "/src/assets/images/itext.webp";

import en from "/src/i18n/en.json";
export default {
  data() {
    return {
      number: 0,
      touchStartX: null, // used to track the start of a touch event
      minSwipeDistance: 50, // in pixels
    };
  },

  methods: {
    nextCaseStudy() {
      if (this.number < this.caseStudyCount - 1) {
        this.number++;
      } else {
        this.number = 0;
      }
    },
    previousCaseStudy() {
      if (this.number > 0) {
        this.number--;
      } else {
        this.number = this.caseStudyCount - 1;
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
    caseStudyCount() {
      const caseStudies = en["case-studies-website"];
      return caseStudies.length;
    },
    currentCaseStudy() {
      return this.number + 1;
    },

    caseStudyImages() {
      // Return an array of imported images
      return [caseStudy1Image];
    },
  },
};
</script>
<template>
  <section
    class="container py-lg-5 py-md-3 py-sm-1"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-2">
        <p class="tagline">
          {{ $t(`case-studies-website[${number}].tagline`) }}
        </p>
        <h2 class="mb-3">
          {{ $t(`case-studies-website[${number}].title`) }}
        </h2>
        <p>
          {{ $t(`case-studies-website[${number}].content`) }}
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <RouterLink
            :to="$t(`case-studies-website[${number}].link`)"
            class="btn btn-secondary secondary-button"
          >
            {{ $t(`case-studies-website[${number}].button`) }}
          </RouterLink>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 mb-2">
        <div class="row">
          <div class="col">
            <img
              :src="caseStudyImages[number]"
              class="img-fluid card-img rounded-3 shadow-lg"
              alt="Project Image"
            />
          </div>
        </div>

        <div class="row align-items-center justify-content-center">
          <div class="col-auto">
            <button class="arrow-button me-2" @click="previousCaseStudy()">
              <i class="bi bi-chevron-left icon"></i>
            </button>
          </div>
          <div class="col-auto">
            <p class="mb-0">{{ currentCaseStudy }} / {{ caseStudyCount }}</p>
          </div>
          <div class="col-auto">
            <button class="arrow-button ms-2" @click="nextCaseStudy()">
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.card-img {
  max-width: 640px;
  max-height: 400px;
}
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
}
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
</style>
