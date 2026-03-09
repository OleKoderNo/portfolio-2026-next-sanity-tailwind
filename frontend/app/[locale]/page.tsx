import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DocumentsSection } from "@/components/sections/DocumentsSection";
import { sanityClient } from "@/lib/sanity/client";
import { homePageQuery } from "@/lib/sanity/queries";

type Props = {
	params: Promise<{ locale: string }>;
};

const documents = [
	{
		title: "CV",
		description: "My latest CV",
		href: "/documents/CV.pdf",
	},
	{
		title: "Cover Letter",
		description: "Why you should hire me",
		href: "/documents/cover-letter.pdf",
	},
];

export default async function HomePage({ params }: Props) {
	const { locale } = await params;
	const t = await getTranslations("home");

	const data = await sanityClient.fetch(homePageQuery, { locale });

	return (
		<main className="pb-10">
			<HeroSection />

			<ProjectsSection title={t("projects")} projects={data.projects ?? []} />

			<ExperienceSection title={t("experience")} items={data.experience ?? []} />

			<TechStackSection title={t("techstack")} technologies={data.technologies ?? []} />

			<AboutSection title={t("about")} about={data.about} />

			<DocumentsSection title={t("documents")} documents={documents} />
		</main>
	);
}
