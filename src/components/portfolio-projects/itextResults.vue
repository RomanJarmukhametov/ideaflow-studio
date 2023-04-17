<script></script>
<template>
  <section class="container py-lg-5 py-md-3 py-sm-1">
    <div class="card-custom">
      <div class="row">
        <div class="col">
          <h2>
            {{ $t("itext-project[5].results[0].name") }}
          </h2>
          <ul>
            <li>{{ $t("itext-project[5].results[1].name") }}</li>
            <li>{{ $t("itext-project[5].results[2].name") }}</li>
            <li>{{ $t("itext-project[5].results[3].name") }}</li>
            <li>{{ $t("itext-project[5].results[4].name") }}</li>
          </ul>
          <p>{{ $t("itext-project[5].results[5].name") }}</p>
          <p>{{ $t("itext-project[5].results[6].name") }}</p>
          <p>{{ $t("itext-project[5].results[7].name") }}</p>
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
</style>
