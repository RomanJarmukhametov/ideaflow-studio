<script></script>
<template>
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="row g-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="/src/assets/images/ideaflow-project.webp"
          class="d-block mx-lg-auto img-fluid project-image"
          alt=""
        />
      </div>
      <div class="col-lg-6">
        <h2>
          {{ $t("ideaflow-project[3].problems[0].name") }}
        </h2>
        <ul>
          <li>{{ $t("ideaflow-project[3].problems[1].name") }}</li>
          <li>{{ $t("ideaflow-project[3].problems[2].name") }}</li>
          <li>{{ $t("ideaflow-project[3].problems[3].name") }}</li>
        </ul>
        <h2>
          {{ $t("ideaflow-project[4].solutions[0].name") }}
        </h2>
        <ul>
          <li>{{ $t("ideaflow-project[4].solutions[1].name") }}</li>
          <li>{{ $t("ideaflow-project[4].solutions[2].name") }}</li>
          <li>{{ $t("ideaflow-project[4].solutions[3].name") }}</li>
          <li>{{ $t("ideaflow-project[4].solutions[4].name") }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped>
.project-image {
  object-fit: cover;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  filter: grayscale(10%);
  width: auto;
  height: auto;
}
</style>
