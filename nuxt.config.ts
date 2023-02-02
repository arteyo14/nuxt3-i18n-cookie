import { requireModulePkg } from "@nuxt/kit";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/i18n",
    [
      "@dargmuesli/nuxt-cookie-control",
      {
        barPosition: "bottom-right",
        colors: {
          barBackground: "#5632F8",
          barTextColor: "#fff",
          barButtonColor: "#000",
          barButtonHoverBackground: "#333",
          // modalBackground: "#5632F8",
          // modalButtonBackground: "#fff",
          // modalButtonColor: "#000",
          // modalTextColor: "#fff",
          checkboxInactiveBackground: "#d9d9d9",
        },
        cookies: {
          necessary: [
            {
              description: {
                en: "This is cookie does something",
              },
              name: {
                en: "Necessary Cookie1",
              },
              targetCookieIds: ["NEC"],
            },
            {
              description: {
                en: "This is cookie does something",
              },
              name: {
                en: "Necessary Cookie2",
              },
              targetCookieIds: ["NEC"],
            },
            {
              description: {
                en: "This is cookie does something",
              },
              name: {
                en: "Necessary Cookie3",
              },
              targetCookieIds: ["NEC"],
            },
          ],
          optional: [
            {
              name: "Optional Cookie",
              id: "op",
              targetCookieIds: ["_o", "_p", "_t"],
            },
            {
              name: "Optional Cookie2",
              id: "op2",
              targetCookieIds: ["_o", "_p", "_t"],
            },
            {
              name: "Optional Cookie3",
              id: "op3",
              targetCookieIds: ["_o", "_p", "_t"],
            },
            {
              description: {
                en: "Used for cookie control.",
              },
              id: "ga", // if unset, `getCookieId(cookie)` returns the cookie's slugified name instead, which e.g. is used to fill the state's `enabledCookieIds` list
              name: {
                en: "Google Analytics", // you always have to specify a cookie name (in English)
              },
              src: "https://www.googletagmanager.com/gtag/js?id=<API-KEY>",
              targetCookieIds: [
                "cookie_control_consent",
                "cookie_control_enabled_cookies",
              ],
            },
          ],
        },
      },
    ],
  ],
  i18n: {
    locales: [
      { code: "en", name: "EN", file: "en.json" },
      { code: "th", name: "TH", file: "th.json" },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    vueI18n: {
      legacy: false,
      locale: "en",
    },
  },
});
