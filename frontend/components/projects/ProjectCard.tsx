import Image from "next/image";
import { Chip } from "../ui/Chip";
import { Button } from "../ui/Button";
import { urlFor } from "@/lib/sanity/image";

type Technology = {
	_id: string;
	title: string;
	slug: string;
	skillLevel?: number;
};

type ProjectCardProps = {
	title: string;
	excerpt: string;
	technologies: Technology[];
	liveUrl?: string;
	githubUrl?: string;
	image?: unknown;
	onOpen?: () => void;
};

export function ProjectCard({
	title,
	excerpt,
	technologies,
	liveUrl,
	githubUrl,
	image,
	onOpen,
}: ProjectCardProps) {
	const imageUrl = image ? urlFor(image).width(1200).height(750).url() : null;

	return (
		<article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/3 transition hover:-translate-y-0.5 hover:bg-white/6">
			<button
				type="button"
				onClick={onOpen}
				className="block w-full text-left"
				aria-label={`Open details for ${title}`}
			>
				<div className="relative aspect-16/10 w-full bg-white/10">
					{imageUrl ? (
						<Image
							src={imageUrl}
							alt={title}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
						/>
					) : null}
				</div>
			</button>

			<div className="flex flex-1 flex-col p-4">
				<button
					type="button"
					onClick={onOpen}
					className="block text-left"
					aria-label={`Open details for ${title}`}
				>
					<h3 className="text-lg font-semibold">{title}</h3>
					<p className="mt-3 text-sm leading-6 text-white/70">{excerpt}</p>
				</button>

				<div className="mt-4 flex min-h-22 max-h-22 flex-wrap content-start gap-2 overflow-hidden">
					{technologies.map((tech) => (
						<Chip key={tech._id} label={tech.title} skillLevel={tech.skillLevel} />
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
