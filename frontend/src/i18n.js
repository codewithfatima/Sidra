// // src/i18n.js
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

// import translationEN from "./i18n/en.json";
// import translationAR from "./i18n/ar.json";

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: translationEN },
//       ar: { translation: translationAR },
//     },
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./i18n/en.json";
import translationAR from "./i18n/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      ar: { translation: translationAR },
    },
    lng: "ar",              // 👈 start in Arabic
    fallbackLng: "ar",      // 👈 fallback also Arabic
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'navigator'], // 👈 use <html lang="ar"> first
      caches: ['localStorage', 'cookie'], // save user preference
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
