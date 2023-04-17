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
            <li class="breadcrumb-item">
              <RouterLink to="/portfolio" style="text-decoration: none">
                {{ $t("ideaflow-project[0].breadcrumbs[0].name") }}
              </RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ $t("ideaflow-project[0].breadcrumbs[1].name") }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="/src/assets/images/ideaflow.webp"
          class="d-block mx-lg-auto img-fluid project-image"
          :alt="$t(`ideaflow-project[0].breadcrumbs[1].name`)"
        />
      </div>
      <div class="col-lg-6">
        <h1>
          {{ $t("ideaflow-project[1].hero[0].name") }}
        </h1>
        <p>
          {{ $t("ideaflow-project[1].hero[1].name") }}
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start"></div>
      </div>
    </div>

    <div class="container my-5 tools">
      <div class="row">
        <div class="col-md-3">
          <p class="fw-bold colored">
            {{ $t("ideaflow-project[2].tools[0].name") }}
          </p>
          <p>{{ $t("ideaflow-project[2].tools[1].name") }}</p>
        </div>
        <div class="col-md-3">
          <p class="fw-bold colored">
            {{ $t("ideaflow-project[2].tools[2].name") }}
          </p>
          <p>{{ $t("ideaflow-project[2].tools[3].name") }}</p>
        </div>
        <div class="col-md-3">
          <p class="fw-bold colored">
            {{ $t("ideaflow-project[2].tools[4].name") }}
          </p>
          <p>{{ $t("ideaflow-project[2].tools[5].name") }}</p>
        </div>
        <div class="col-md-3">
          <p class="fw-bold colored">
            {{ $t("ideaflow-project[2].tools[6].name") }}
          </p>
          <div>
            <a
              :href="$t(`ideaflow-project[2].tools[7].name`)"
              target="_blank"
              >{{ $t("ideaflow-project[2].tools[8].name") }}</a
            >
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

.project-image {
  object-fit: cover;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  filter: grayscale(10%);
  width: auto;
  height: auto;
}
.colored {
  background: linear-gradient(180deg, #5d45f9 0%, #267deb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.tools {
  background-color: var(--neutral10);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}
</style>
