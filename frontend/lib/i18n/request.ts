import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	// Get locale from the current request
	let locale = await requestLocale;

	// If locale is missing or invalid, use default locale
	if (!locale || !routing.locales.includes(locale as "en" | "no")) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		// Load matching translation file from /messages
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
