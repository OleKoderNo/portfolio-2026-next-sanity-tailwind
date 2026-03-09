import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { ProjectCard } from "../projects/ProjectCard";
import { Button } from "../ui/Button";

type Technology = {
	_id: string;
	title: string;
	slug: string;
	skillLevel?: number;
};

type Project = {
	_id: string;
	title: string;
	excerpt: string;
	technologies: Technology[];
	liveUrl?: string;
	githubUrl?: string;
	cardImage?: unknown;
	slug: string;
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
					{projects.map((project, index) => {
						const visibilityClass = index < 3 ? "block" : index < 6 ? "hidden md:block" : "hidden";

						return (
							<div key={project._id} className={visibilityClass}>
								<ProjectCard
									title={project.title}
									excerpt={project.excerpt}
									technologies={project.technologies}
									liveUrl={project.liveUrl}
									githubUrl={project.githubUrl}
									image={project.cardImage}
								/>
							</div>
						);
					})}
				</div>

				<div className="mt-6">
					<Button href="/projects">View all projects</Button>
				</div>
			</Section>
		</Container>
	);
}
