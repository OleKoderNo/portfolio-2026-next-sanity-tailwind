import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Chip } from "../ui/Chip";

type Technology = {
	_id: string;
	title: string;
	slug: string;
};

type TechStackSectionProps = {
	title: string;
	technologies: Technology[];
};

export function TechStackSection({ title, technologies }: TechStackSectionProps) {
	return (
		<Container>
			<Section title={title}>
				<div className="flex flex-wrap gap-3">
					{technologies.map((tech) => (
						<Chip key={tech._id}>{tech.title}</Chip>
					))}
				</div>
			</Section>
		</Container>
	);
}
