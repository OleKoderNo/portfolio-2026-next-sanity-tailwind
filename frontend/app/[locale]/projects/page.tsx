import { getTranslations } from "next-intl/server";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { sanityClient } from "@/lib/sanity/client";
import { projectsPageQuery } from "@/lib/sanity/queries";

type Props = {
	params: Promise<{ locale: string }>;
};

type Technology = {
	_id: string;
	title: string;
	slug: string;
	skillLevel?: number;
};

type Project = {
	_id: string;
	title: string;
	slug: string;
	excerpt: string;
	description?: string;
	technologies: Technology[];
	liveUrl?: string;
	githubUrl?: string;
	cardImage?: unknown;
};

export default async function ProjectsPage({ params }: Props) {
	const { locale } = await params;
	const t = await getTranslations("projectsPage");

	const projects = await sanityClient.fetch<Project[]>(projectsPageQuery, { locale });

	return (
		<main id="page-content" className="pb-10">
			<section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("title")}</h1>

				<p className="mt-3 max-w-2xl text-sm text-neutral-400">{t("description")}</p>
			</section>

			<ProjectsSection
				title={t("sectionTitle")}
				projects={projects ?? []}
				showViewAllButton={false}
			/>
		</main>
	);
}
