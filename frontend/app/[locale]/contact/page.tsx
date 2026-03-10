import { getTranslations } from "next-intl/server";

type Props = {
	params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
	await params;
	const t = await getTranslations("contactPage");

	return (
		<main id="page-content" className="pb-10">
			<section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("title")}</h1>

				<p className="mt-3 max-w-2xl text-sm text-neutral-400">{t("description")}</p>
			</section>

			<section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
					<div className="space-y-6">
						<div>
							<h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
								{t("emailLabel")}
							</h2>
							<a
								href="mailto:ohfb96@gmail.com"
								className="mt-2 inline-block text-base text-white transition hover:text-neutral-300"
							>
								ohfb96@gmail.com
							</a>
						</div>

						<div>
							<h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
								{t("githubLabel")}
							</h2>
							<a
								href="https://github.com/OleKoderNo"
								target="_blank"
								rel="noreferrer"
								className="mt-2 inline-block text-base text-white transition hover:text-neutral-300"
							>
								GitHub
							</a>
						</div>

						<div>
							<h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
								{t("linkedinLabel")}
							</h2>
							<a
								href="https://www.linkedin.com/in/ole-h%C3%A5vard-furuseth-bergan-2a1209255/"
								target="_blank"
								rel="noreferrer"
								className="mt-2 inline-block text-base text-white transition hover:text-neutral-300"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
