import { useTranslations } from "next-intl";

export default function HomePage() {
	const t = useTranslations("home");

	return (
		<main>
			<h1>Ole Håvard Furuseth Bergan</h1>
			<p>Frontend • React / Next.js • Tailwind • JavaScript / TypeScript</p>

			<section>
				<h2>{t("projects")}</h2>
			</section>

			<section>
				<h2>{t("experience")}</h2>
			</section>

			<section>
				<h2>{t("techstack")}</h2>
			</section>

			<section>
				<h2>{t("about")}</h2>
			</section>

			<section>
				<h2>{t("documents")}</h2>
			</section>
		</main>
	);
}
