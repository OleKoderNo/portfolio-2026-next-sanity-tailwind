import { Button } from "../ui/Button";
import { Chip } from "../ui/Chip";

type Technology = {
	_id: string;
	title: string;
	slug: string;
};

type ProjectCardProps = {
	title: string;
	excerpt: string;
	technologies: Technology[];
	liveUrl?: string;
	githubUrl?: string;
};

export function ProjectCard({
	title,
	excerpt,
	technologies,
	liveUrl,
	githubUrl,
}: ProjectCardProps) {
	return (
		<article className="overflow-hidden rounded-2xl border border-white/15 bg-white/3 transition hover:-translate-y-0.5 hover:bg-white/6">
			<div className="aspect-[16/10] w-full bg-white/10" />

			<div className="p-4">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="mt-3 text-sm leading-6 text-white/70">{excerpt}</p>

				<div className="mt-4 flex flex-wrap gap-2">
					{technologies.map((tech) => (
						<Chip key={tech._id}>{tech.title}</Chip>
					))}
				</div>

				<div className="mt-5 flex flex-wrap gap-3">
					{liveUrl ? (
						<Button href={liveUrl} external variant="primary">
							Live demo
						</Button>
					) : null}

					{githubUrl ? (
						<Button href={githubUrl} external>
							GitHub
						</Button>
					) : null}
				</div>
			</div>
		</article>
	);
}
