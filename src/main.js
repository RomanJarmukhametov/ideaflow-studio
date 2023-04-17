import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./features/google-analytics-tag.js";
import "./features/google-ads-tag.js";

import App from "./App.vue";
import router from "./router";

import "@/assets/main.css";

import { languages } from "./i18n";
import { defaultLocale } from "./i18n";
import { createI18n } from "vue-i18n";

const messages = Object.assign(languages);

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
