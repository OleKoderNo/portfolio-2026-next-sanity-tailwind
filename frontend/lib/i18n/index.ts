import en from "@/messages/en.json";
import no from "@/messages/no.json";

export const messages = {
	en,
	no,
};

export type Locale = keyof typeof messages;

export function getMessages(locale: Locale) {
	return messages[locale] ?? messages.en;
}
