import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

type DocumentItem = {
	title: string;
	description: string;
	href: string;
};

type DocumentsSectionProps = {
	title: string;
	documents: DocumentItem[];
};

export function DocumentsSection({ title, documents }: DocumentsSectionProps) {
	return (
		<Container>
			<Section title={title}>
				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
					{documents.map((document) => (
						<a
							key={document.href}
							href={document.href}
							target="_blank"
							rel="noreferrer noopener"
							className="flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/3 p-4 transition hover:-translate-y-0.5 hover:bg-white/6"
						>
							<div>
								<h3 className="text-base font-semibold">{document.title}</h3>
								<p className="mt-2 text-sm text-white/70">{document.description}</p>
							</div>
							<span className="rounded-xl border border-white/15 px-3 py-2 text-white/60">↗</span>
						</a>
					))}
				</div>
			</Section>
		</Container>
	);
}
