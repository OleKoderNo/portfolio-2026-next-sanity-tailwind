import { getTranslations } from "next-intl/server";
import { AboutSection } from "@/components/sections/AboutSection";
import { sanityClient } from "@/lib/sanity/client";
import { aboutPageQuery } from "@/lib/sanity/queries";

type Props = {
	params: Promise<{ locale: string }>;
};

type AboutData = {
	intro?: string;
	hobbiesTitle?: string;
	hobbiesBody?: string;
	volunteeringTitle?: string;
	volunteeringBody?: string;
};

export default async function AboutPage({ params }: Props) {
	const { locale } = await params;
	const t = await getTranslations("aboutPage");

	const about = await sanityClient.fetch<AboutData>(aboutPageQuery, { locale });

	return (
		<main id="page-content" className="pb-10">
			<section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("title")}</h1>

				{t("description") ? (
					<p className="mt-3 max-w-2xl text-sm text-neutral-400">{t("description")}</p>
				) : null}
			</section>

			<AboutSection title={t("sectionTitle")} about={about} />
		</main>
	);
}
