<script>
import ButtonPrimary from "@/components/UI_components/ButtonPrimary.vue";
import ApplyFormModal from "@/components/ApplyFormModal.vue";

export default {
  name: "NodeDeveloperHero",
  components: {
    ButtonPrimary,
    ApplyFormModal,
  },
};
</script>

<template>
  <main>
    <section
      class="container mt-5 py-lg-5 py-md-3 py-sm-1 breadcrumb-container"
    >
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
                <RouterLink
                  to="/job-opportunities"
                  style="text-decoration: none"
                >
                  {{ $t("node-developer[0].breadcrumbs[0].name") }}
                </RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ $t("node-developer[0].breadcrumbs[1].name") }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col">
          <h1>
            {{ $t("node-developer[1].job-title[0].name") }}
          </h1>
          <p class="tagline">
            {{ $t("node-developer[1].job-title[1].location") }}
          </p>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col">
          <h2>{{ $t("node-developer[2].overview[0].title") }}</h2>
          <p>{{ $t("node-developer[2].overview[1].description") }}</p>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col">
          <h2>{{ $t("node-developer[3].requirements[0].title") }}</h2>
          <ul class="custom-list">
            <li>
              <p>{{ $t("node-developer[3].requirements[1].description") }}</p>
            </li>
            <li>
              <p>{{ $t("node-developer[3].requirements[2].description") }}</p>
            </li>
            <li>
              <p>{{ $t("node-developer[3].requirements[3].description") }}</p>
            </li>
            <li>
              <p>{{ $t("node-developer[3].requirements[4].description") }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="row mb-2">
        <div class="row">
          <div class="col">
            <h2>
              {{ $t("node-developer[4].willBeAPlus[0].title") }}
            </h2>
            <ul class="custom-list">
              <li>
                <p>{{ $t("node-developer[4].willBeAPlus[1].description") }}</p>
              </li>
              <li>
                <p>{{ $t("node-developer[4].willBeAPlus[2].description") }}</p>
              </li>
              <li>
                <p>{{ $t("node-developer[4].willBeAPlus[3].description") }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col">
          <h2>{{ $t("node-developer[5].benefits[0].title") }}</h2>
          <ul class="custom-list">
            <li>
              <p>{{ $t("node-developer[5].benefits[1].description") }}</p>
            </li>
            <li>
              <p>{{ $t("node-developer[5].benefits[2].description") }}</p>
            </li>
            <li>
              <p>{{ $t("node-developer[5].benefits[3].description") }}</p>
            </li>
            <li>
              <p>{{ $t("node-developer[5].benefits[4].description") }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col">
          <h2>{{ $t("node-developer[6].responsibility[0].title") }}</h2>
          <ul class="custom-list">
            <li>
              <p>{{ $t("node-developer[6].responsibility[1].description") }}</p>
            </li>
            <li>
              <p>{{ $t("node-developer[6].responsibility[2].description") }}</p>
            </li>
            <li>
              <p>{{ $t("node-developer[6].responsibility[3].description") }}</p>
            </li>
            <li>
              <p>{{ $t("node-developer[6].responsibility[4].description") }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col">
          <h2>{{ $t("node-developer[7].about-us[0].title") }}</h2>
          <p>{{ $t("node-developer[7].about-us[1].description") }}</p>
        </div>
      </div>
      <div class="mb-2">
        <ButtonPrimary
          :text="$t(`primary-button[3].name`)"
          toggle="modal"
          modalTarget="#staticBackdrop"
        />
        <ApplyFormModal />
      </div>
    </section>
  </main>
</template>

<style scoped>
.breadcrumb-container {
  margin-top: 72px;
}
.breadcrumb {
  margin-top: 40px;
}

.custom-list {
  list-style: none; /* Removes the default list item bullet points */
  padding-left: 0; /* Removes the default list item padding */
}

.custom-list li {
  position: relative; /* Sets the position property so that the pseudo-element (the image) is positioned relative to the list item */
  padding-left: 1.5em; /* Adds some left padding to the list item for proper spacing between the image and the list item text */
}

.custom-list li::before {
  content: ""; /* Creates an empty content for the pseudo-element */
  display: inline-block; /* Sets the display property to inline-block */
  position: absolute; /* Sets the position property to absolute so the image is positioned relative to the list item */
  left: 0; /* Positions the image at the left side of the list item */
  top: 50%; /* Centers the image vertically within the list item */
  transform: translateY(
    -50%
  ); /* Adjusts the image's vertical position for better centering */
  width: 1em; /* Sets the width of the image */
  height: 1em; /* Sets the height of the image */
  background-image: url("/src/assets/images/list-item.svg"); /* Sets the image as the background */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-size: contain; /* Ensures that the image is properly scaled */
}
</style>
