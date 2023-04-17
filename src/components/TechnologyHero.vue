<script></script>
<template>
  <section class="container mt-5 py-lg-5 py-md-3 py-sm-1 breadcrumb-container">
    <div class="row mb-3">
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
              {{ $t("technology[0].name") }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-lg-6 col-md-12">
        <h1 class="mb-3">
          {{ $t("technology[1].name") }}
        </h1>
      </div>
    </div>
    <div class="row mb-5">
      <div class="row">
        <div class="col">
          <h2>{{ $t("technology[2].name") }}</h2>
        </div>
      </div>
      <div class="card-custom">
        <div class="row">
          <div class="col-1">
            <img
              src="/src/assets/images/figma.svg"
              alt="Figma"
              class="img-fluid"
              style="width: 48px; height: 48px"
            />
          </div>
          <div class="col-11">
            <h3>{{ $t("technology[3].name") }}</h3>
            <p>{{ $t("technology[4].name") }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-5">
      <div class="row">
        <div class="col">
          <h2>{{ $t("technology[5].name") }}</h2>
        </div>
      </div>
      <div class="card-custom">
        <div class="row mb-5">
          <div class="col-1">
            <img
              src="/src/assets/images/bootstrap.svg"
              alt="Bootstrap"
              class="img-fluid"
              style="width: 48px; height: 48px"
            />
          </div>
          <div class="col-11">
            <h3>{{ $t("technology[6].name") }}</h3>
            <p>{{ $t("technology[7].name") }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-1">
            <img
              src="/src/assets/images/vue-js.svg"
              alt="Vue.js"
              class="img-fluid"
              style="width: 48px; height: 48px"
            />
          </div>
          <div class="col-11">
            <h3>{{ $t("technology[8].name") }}</h3>
            <p>{{ $t("technology[9].name") }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-5">
      <div class="row">
        <div class="col">
          <h2>{{ $t("technology[10].name") }}</h2>
        </div>
      </div>
      <div class="card-custom">
        <div class="row mb-5">
          <div class="col-1">
            <img
              src="/src/assets/images/strapi.svg"
              alt="Strapi"
              class="img-fluid"
              style="width: 48px; height: 48px"
            />
          </div>
          <div class="col-11">
            <h3>{{ $t("technology[11].name") }}</h3>
            <p>{{ $t("technology[12].name") }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-1">
            <img
              src="/src/assets/images/firebase.svg"
              alt="Firebase"
              class="img-fluid"
              style="width: 48px; height: 48px"
            />
          </div>
          <div class="col-11">
            <h3>{{ $t("technology[13].name") }}</h3>
            <p>{{ $t("technology[14].name") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.card-custom {
  background-color: var(--neutral10);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}
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
</style>
