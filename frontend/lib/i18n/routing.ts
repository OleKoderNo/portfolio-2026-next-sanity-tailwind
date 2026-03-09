import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "no"], // supported language
	defaultLocale: "en", // fallback language
});
