import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { ProjectCard } from "../projects/ProjectCard";

type Technology = {
	_id: string;
	title: string;
	slug: string;
};

type Project = {
	_id: string;
	title: string;
	excerpt: string;
	technologies: Technology[];
	liveUrl?: string;
	githubUrl?: string;
};

type ProjectsSectionProps = {
	title: string;
	projects: Project[];
};

export function ProjectsSection({ title, projects }: ProjectsSectionProps) {
	return (
		<Container>
			<Section title={title}>
				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard
							key={project._id}
							title={project.title}
							excerpt={project.excerpt}
							technologies={project.technologies}
							liveUrl={project.liveUrl}
							githubUrl={project.githubUrl}
						/>
					))}
				</div>
			</Section>
		</Container>
	);
}
