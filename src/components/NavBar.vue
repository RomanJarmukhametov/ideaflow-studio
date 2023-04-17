<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        <img src="@/assets/logo.svg" alt="logo" />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t("navbar[0].name") }}
            </a>
            <ul class="dropdown-menu border-0">
              <li>
                <RouterLink
                  :class="{
                    'dropdown-item': true,
                    active: $route.path === '/service/website-development',
                  }"
                  to="/service/website-development"
                  class="dropdown-item"
                >
                  {{ $t("navbar[0].items[0].name") }}
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :class="{
                    'dropdown-item': true,
                    active: $route.path === '/service/webapp-development',
                  }"
                  to="/service/webapp-development"
                  class="dropdown-item"
                  >{{ $t("navbar[0].items[1].name") }}</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  :class="{
                    'dropdown-item': true,
                    active: $route.path === '/service/ux-design',
                  }"
                  to="/service/ux-design"
                  class="dropdown-item"
                  >{{ $t("navbar[0].items[2].name") }}
                </RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <RouterLink
              :class="{
                'nav-link': true,
                active: $route.path === '/portfolio',
              }"
              to="/portfolio"
              class="nav-link"
              >{{ $t("navbar[1].name") }}</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink
              :class="{
                'nav-link': true,
                active: $route.path === '/technology',
              }"
              to="/technology"
              class="nav-link"
              >{{ $t("navbar[2].name") }}</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink
              :class="{
                'nav-link': true,
                active: $route.path === '/about-us',
              }"
              to="/about-us"
              class="nav-link"
              >{{ $t("navbar[3].name") }}</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink
              :class="{
                'nav-link': true,
                active: $route.path === '/job-opportunities',
              }"
              to="/job-opportunities"
              class="nav-link"
              >{{ $t("navbar[4].name") }}</RouterLink
            >
          </li>

          <a
            class="nav-link contact-link"
            data-bs-toggle="offcanvas"
            href="#contactForm"
            role="button"
            aria-controls="offcanvasExample"
          >
            {{ $t("navbar[5].name") }}
            <img
              class="image-icon"
              src="@/assets/images/mail-icon.svg"
              alt="Mail icon"
            />
          </a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  background: var(--neutral10);
  box-shadow: 0px 6px 25px rgba(11, 18, 44, 0.1);
}

.image-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.25rem;
}

.contact-link {
  font-size: 1rem;
  font-weight: 500 !important;
  line-height: 1.75rem;
  letter-spacing: -0.011em;
  background: var(--primary60);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-link:hover {
  color: var(--primary50);
  opacity: 0.7;
}

/* .nav-link {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: var(--neutral80);
  letter-spacing: -0.011em;
} */

.nav-link:hover {
  color: var(--neutral70);
}

.nav-link.active {
  border-bottom: 2px solid #597ef7;
}

.dropdown-item {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: var(--neutral80);
  letter-spacing: -0.011em;
}

.dropdown-item:hover {
  color: var(--neutral80);
  background-color: var(--neutral20);
}

.dropdown-item:focus {
  background-color: var(--neutral30);
}

.dropdown-item.active {
  background-color: var(--neutral30);
  color: var(--neutral90);
}

.dropdown-menu {
  background: var(--neutral10);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}
</style>
