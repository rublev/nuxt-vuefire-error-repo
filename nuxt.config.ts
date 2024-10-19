// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // having ssr allows us to use `nuxt generate` like for netlify
  ssr: true,
  // devtools + compat
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  // firebase
  modules: ["nuxt-vuefire"],
  vuefire: {
    emulators: {
      auth: {
        options: {
          disableWarnings: true,
        },
      },
    },
    auth: true,
    appCheck: {
      provider: "ReCaptchaV3",
      // site key, NOT secret key
      key: process.env.FIREBASE_APP_CHECK_KEY,
      isTokenAutoRefreshEnabled: true,
      // allows you to use a debug token in development
      debug:
        process.env.NODE_ENV !== "production" &&
        process.env.NODE_ENV !== "staging",
    },
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    },
  },
  // routing
  routeRules: {
    "/login": { ssr: false },
  },
});
