<script></script>
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
              {{ $t("portfolio-hero[0].name") }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <h1 class="mb-3">
          {{ $t("portfolio-hero[1].name") }}
        </h1>
        <p>{{ $t("portfolio-hero[2].name") }}</p>
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
</style>
