export const locales = ["tr", "en", "de", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";
