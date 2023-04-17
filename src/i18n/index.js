import ru from "./ru.json";
import en from "./en.json";

const browserLanguage = navigator.language || navigator.userLanguage;
const languageWithoutRegionCode = browserLanguage.split("-")[0];
const supportedLanguages = ["en", "ru"];
const defaultLanguage = supportedLanguages.includes(languageWithoutRegionCode)
  ? languageWithoutRegionCode
  : "en";

export const defaultLocale = defaultLanguage;

export const languages = {
  en,
  ru,
};
