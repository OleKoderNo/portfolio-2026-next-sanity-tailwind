import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getMessages, type Locale } from "../../lib/i18n/index";
import "../globals.css";

function isLocale(value: string): value is Locale {
	return value === "en" || value === "no";
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const safeLocale: Locale = isLocale(locale) ? locale : "en";
	const t = getMessages(safeLocale);

	return {
		title: t.metadata.siteTitle,
		description: t.metadata.siteDescription,
	};
}

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	const safeLocale: Locale = isLocale(locale) ? locale : "en";
	const t = getMessages(safeLocale);

	return (
		<html lang={safeLocale}>
			<body className="min-h-screen bg-neutral-950 text-white antialiased">
				<div className="flex min-h-screen flex-col">
					<Navbar locale={safeLocale} t={t} />
					<main className="flex-1">{children}</main>
					<Footer locale={safeLocale} t={t} />
				</div>
			</body>
		</html>
	);
}
