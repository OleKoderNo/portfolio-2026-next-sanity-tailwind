import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getMessages, type Locale } from "../../lib/i18n/index";
import "../globals.css";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = getMessages(locale);

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
	params: Promise<{ locale: Locale }>;
}>) {
	const { locale } = await params;
	const t = getMessages(locale);

	return (
		<html lang={locale}>
			<body className="min-h-screen bg-neutral-950 text-white antialiased">
				<div className="flex min-h-screen flex-col">
					<Navbar locale={locale} t={t} />
					<main className="flex-1">{children}</main>
					<Footer locale={locale} t={t} />
				</div>
			</body>
		</html>
	);
}
