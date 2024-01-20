import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { languages } from "./i18n";
import { defaultLocale } from "./i18n";
import { createI18n, useI18n } from "vue-i18n";

const messages = Object.assign(languages);

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "uz",
  messages,
});

const app = createApp(App, AOS.init());
app.use(router);
app.use(store);
app.use(i18n);
app.mount("#app");
