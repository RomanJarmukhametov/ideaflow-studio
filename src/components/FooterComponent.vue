<script>
import "bootstrap-icons/font/bootstrap-icons.css";
</script>
<template>
  <footer class="py-lg-5 py-md-3 py-sm-1">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img src="/src/assets/images/footer.svg" alt="" />
        </div>
        <div class="col-md-3">
          <p>{{ $t("footer[0].name") }}</p>
          <div class="py-1">
            <RouterLink to="/service/website-development" class="link-custom">{{
              $t("footer[1].name")
            }}</RouterLink>
          </div>
          <div class="py-1">
            <RouterLink to="/service/webapp-development" class="link-custom">{{
              $t("footer[2].name")
            }}</RouterLink>
          </div>
          <div class="py-1">
            <RouterLink to="/service/ux-design" class="link-custom">{{
              $t("footer[3].name")
            }}</RouterLink>
          </div>
        </div>
        <div class="col-md-3">
          <p>{{ $t("footer[4].name") }}</p>
          <div class="py-1">
            <RouterLink to="/career/ux-designer" class="link-custom">{{
              $t("footer[5].name")
            }}</RouterLink>
          </div>
          <div class="py-1">
            <RouterLink to="/career/vue-developer" class="link-custom">{{
              $t("footer[6].name")
            }}</RouterLink>
          </div>
          <div class="py-1">
            <RouterLink to="/career/node-developer" class="link-custom">{{
              $t("footer[7].name")
            }}</RouterLink>
          </div>
        </div>
        <div class="col-md-3">
          <p>{{ $t("footer[8].name") }}</p>
          <div class="d-flex gap-1">
            <i class="bi bi-telephone-fill icon-custom"></i>
            <a href="tel:+77182764060" class="link-custom">+7 7182 76 40 60</a>
          </div>

          <div class="d-flex gap-1">
            <i class="bi bi-envelope-at-fill icon-custom"></i>
            <a href="mailto:hello@ideaflow.studio" class="link-custom"
              >hello@ideaflow.studio</a
            >
          </div>

          <div class="py-1">
            <RouterLink to="/privacy-policy" class="link-custom">{{
              $t("footer[9].name")
            }}</RouterLink>
          </div>
          <div class="py-1">
            <a
              href="https://www.linkedin.com/company/ideaflowstudio/"
              class="text-light me-3"
              target="_blank"
              ><i class="bi bi-linkedin"></i
            ></a>
            <a
              href="https://www.instagram.com/ideaflow.studio/"
              class="text-light"
              target="_blank"
              ><i class="bi bi-instagram"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background-color: var(--neutral100);
}

p {
  font-weight: 600;
  color: var(--neutral20);
}
.link-custom {
  color: var(--neutral70);
  font-weight: 400;
  text-decoration: none;
}

.link-custom:hover {
  color: var(--neutral20);
  text-decoration: none;
}

.icon-custom {
  color: var(--neutral70);
}
</style>
