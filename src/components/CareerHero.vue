<script>
export default {
  data() {
    return {
      isShown: {
        first: false,
        second: false,
        third: false,
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
      }
    },
    showSecond() {
      if (this.isShown.second) {
        this.isShown.second = false;
      } else {
        this.isShown.first = false;
        this.isShown.second = true;
        this.isShown.third = false;
      }
    },
    showThird() {
      if (this.isShown.third) {
        this.isShown.third = false;
      } else {
        this.isShown.first = false;
        this.isShown.second = false;
        this.isShown.third = true;
      }
    },
  },
};
</script>
<template>
  <section class="container mt-5 py-lg-5 py-md-3 py-sm-1 breadcrumb-container">
    <div class="row mb-2">
      <div class="col-lg-6 col-md-12">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/" style="text-decoration: none">
                <img
                  src="/src/assets/images/house.svg"
                  alt=""
                  class="icon-custom"
                />
              </RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ $t("career-hero[0].breadcrumbs") }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h1 class="mb-3">
          {{ $t("career-hero[0].title") }}
        </h1>

        <div class="inactive-card border-bottom" @click="showFirst()">
          <div class="row py-2">
            <div class="col-11">
              <h3>{{ $t("career-hero[0].position-one") }}</h3>
              <div v-if="isShown.first">
                <p>
                  {{ $t("career-hero[0].position-one-description") }}
                </p>
                <RouterLink to="/career/ux-designer" class="btn sec-button">
                  {{ $t("career-hero[0].button") }}
                </RouterLink>
              </div>
            </div>
            <div class="col-1">
              <img src="/src/assets/images/angle.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="inactive-card border-bottom" @click="showSecond()">
          <div class="row py-2">
            <div class="col-11">
              <h3>{{ $t("career-hero[0].position-two") }}</h3>
              <div v-if="isShown.second">
                <p>
                  {{ $t("career-hero[0].position-two-description") }}
                </p>
                <RouterLink to="/career/vue-developer" class="btn sec-button">
                  {{ $t("career-hero[0].button") }}
                </RouterLink>
              </div>
            </div>
            <div class="col-1">
              <img src="/src/assets/images/angle.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="inactive-card border-bottom" @click="showThird()">
          <div class="row py-2">
            <div class="col-11">
              <h3>{{ $t("career-hero[0].position-three") }}</h3>
              <div v-if="isShown.third">
                <p>
                  {{ $t("career-hero[0].position-three-description") }}
                </p>
                <RouterLink to="/career/node-developer" class="btn sec-button">
                  {{ $t("career-hero[0].button") }}
                </RouterLink>
              </div>
            </div>
            <div class="col-1">
              <img src="/src/assets/images/angle.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.breadcrumb-container {
  margin-top: 72px;
}
.breadcrumb {
  margin-top: 40px;
}

.icon-custom {
  width: 16px;
  height: 16px;
}

.icon-custom:hover {
  opacity: 0.7;
}

.inactive-card:hover {
  cursor: pointer;
}

.sec-button {
  border: 2px solid #5d45f9;
  border-radius: 6px;
  color: #5d45f9;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
}

.sec-button:hover {
  opacity: 0.7;
}
</style>
