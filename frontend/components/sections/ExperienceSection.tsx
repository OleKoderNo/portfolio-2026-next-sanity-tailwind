import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ExperienceCard } from "../experience/ExperienceCard";

type ExperienceItem = {
	_id: string;
	company: string;
	dateLabel: string;
	body: string;
};

type ExperienceSectionProps = {
	title: string;
	items: ExperienceItem[];
};

export function ExperienceSection({ title, items }: ExperienceSectionProps) {
	return (
		<Container>
			<Section title={title}>
				<div className="grid gap-4">
					{items.map((item) => (
						<ExperienceCard
							key={item._id}
							company={item.company}
							dateLabel={item.dateLabel}
							body={item.body}
						/>
					))}
				</div>
			</Section>
		</Container>
	);
}
