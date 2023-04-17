<script>
export default {
  data() {
    return {
      isShown: {
        first: true,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
        seventh: false,
      },
    };
  },
  methods: {
    showFirst() {
      if (this.isShown.first) {
        this.isShown.first = false;
      } else {
        this.isShown.first = true;
        this.isShown.second = false;
        this.isShown.third = false;
        this.isShown.fourth = false;
        this.isShown.fifth = false;
        this.isShown.sixth = false;
        this.isShown.seventh = false;
      }
    },
    showSecond() {
      if (this.isShown.second) {
        this.isShown.second = false;
      } else {
        this.isShown.first = false;
        this.isShown.second = true;
        this.isShown.third = false;
        this.isShown.fourth = false;
        this.isShown.fifth = false;
        this.isShown.sixth = false;
        this.isShown.seventh = false;
      }
    },
    showThird() {
      if (this.isShown.third) {
        this.isShown.third = false;
      } else {
        this.isShown.first = false;
        this.isShown.second = false;
        this.isShown.third = true;
        this.isShown.fourth = false;
        this.isShown.fifth = false;
        this.isShown.sixth = false;
        this.isShown.seventh = false;
      }
    },
    showFourth() {
      if (this.isShown.fourth) {
        this.isShown.fourth = false;
      } else {
        this.isShown.first = false;
        this.isShown.second = false;
        this.isShown.third = false;
        this.isShown.fourth = true;
        this.isShown.fifth = false;
        this.isShown.sixth = false;
        this.isShown.seventh = false;
      }
    },
    showFifth() {
      if (this.isShown.fifth) {
        this.isShown.fifth = false;
      } else {
        this.isShown.first = false;
        this.isShown.second = false;
        this.isShown.third = false;
        this.isShown.fourth = false;
        this.isShown.fifth = true;
        this.isShown.sixth = false;
        this.isShown.seventh = false;
      }
    },
    showSixth() {
      if (this.isShown.sixth) {
        this.isShown.sixth = false;
      } else {
        this.isShown.first = false;
        this.isShown.second = false;
        this.isShown.third = false;
        this.isShown.fourth = false;
        this.isShown.fifth = false;
        this.isShown.sixth = true;
        this.isShown.seventh = false;
      }
    },
    showSeventh() {
      if (this.isShown.seventh) {
        this.isShown.seventh = false;
      } else {
        this.isShown.first = false;
        this.isShown.second = false;
        this.isShown.third = false;
        this.isShown.fourth = false;
        this.isShown.fifth = false;
        this.isShown.sixth = false;
        this.isShown.seventh = true;
      }
    },
  },
};
</script>

<template>
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-2">
        <img
          src="/src/assets/images/development-approach.svg"
          class="img-fluid"
          alt="Development Approach"
        />
      </div>

      <div class="col-lg-6 col-md-12 mb-2">
        <div class="row py-2">
          <h2>{{ $t("development-approach[0].name") }}</h2>
        </div>

        <div class="mb-3">
          <div
            :class="isShown.first ? 'active-card' : 'inactive-card'"
            @click="showFirst()"
          >
            <div class="row py-2">
              <div class="col-2">
                <img src="/src/assets/images/requirement-analysis.svg" alt="" />
              </div>
              <div class="col-10">
                <h3>{{ $t("development-approach[1].approaches[0].name") }}</h3>
                <p v-if="isShown.first">
                  {{ $t("development-approach[1].approaches[0].description") }}
                </p>
              </div>
            </div>
          </div>

          <div
            :class="isShown.second ? 'active-card' : 'inactive-card'"
            @click="showSecond()"
          >
            <div class="row py-2">
              <div class="col-2">
                <img src="/src/assets/images/business.svg" alt="" />
              </div>
              <div class="col-10">
                <h3>{{ $t("development-approach[1].approaches[1].name") }}</h3>
                <p v-if="isShown.second">
                  {{ $t("development-approach[1].approaches[1].description") }}
                </p>
              </div>
            </div>
          </div>
          <div
            :class="isShown.third ? 'active-card' : 'inactive-card'"
            @click="showThird()"
          >
            <div class="row py-2">
              <div class="col-2">
                <img src="/src/assets/images/design.svg" alt="" />
              </div>
              <div class="col-10">
                <h3>{{ $t("development-approach[1].approaches[2].name") }}</h3>
                <p v-if="isShown.third">
                  {{ $t("development-approach[1].approaches[2].description") }}
                </p>
              </div>
            </div>
          </div>

          <div
            :class="isShown.fourth ? 'active-card' : 'inactive-card'"
            @click="showFourth()"
          >
            <div class="row py-2">
              <div class="col-2">
                <img src="/src/assets/images/coding.svg" alt="" />
              </div>
              <div class="col-10">
                <h3>{{ $t("development-approach[1].approaches[3].name") }}</h3>
                <p v-if="isShown.fourth">
                  {{ $t("development-approach[1].approaches[3].description") }}
                </p>
              </div>
            </div>
          </div>

          <div
            :class="isShown.fifth ? 'active-card' : 'inactive-card'"
            @click="showFifth()"
          >
            <div class="row py-2">
              <div class="col-2">
                <img src="/src/assets/images/testing.svg" alt="" />
              </div>
              <div class="col-10">
                <h3>{{ $t("development-approach[1].approaches[4].name") }}</h3>
                <p v-if="isShown.fifth">
                  {{ $t("development-approach[1].approaches[4].description") }}
                </p>
              </div>
            </div>
          </div>

          <div
            :class="isShown.sixth ? 'active-card' : 'inactive-card'"
            @click="showSixth()"
          >
            <div class="row py-2">
              <div class="col-2">
                <img src="/src/assets/images/deployment.svg" alt="" />
              </div>
              <div class="col-10">
                <h3>{{ $t("development-approach[1].approaches[5].name") }}</h3>
                <p v-if="isShown.sixth">
                  {{ $t("development-approach[1].approaches[5].description") }}
                </p>
              </div>
            </div>
          </div>

          <div
            :class="isShown.seventh ? 'active-card' : 'inactive-card'"
            @click="showSeventh()"
          >
            <div class="row py-2">
              <div class="col-2">
                <img src="/src/assets/images/maintenance.svg" alt="" />
              </div>
              <div class="col-10">
                <h3>{{ $t("development-approach[1].approaches[6].name") }}</h3>
                <p v-if="isShown.seventh">
                  {{ $t("development-approach[1].approaches[6].description") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.active-card {
  background-color: var(--neutral10);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.inactive-card {
  border-radius: 12px;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.active-card:hover,
.inactive-card:hover {
  cursor: pointer;
}
</style>
