import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

type AboutContent = {
	intro?: string;
	hobbiesTitle?: string;
	hobbiesBody?: string;
	volunteeringTitle?: string;
	volunteeringBody?: string;
};

type AboutSectionProps = {
	title: string;
	about?: AboutContent;
};

export function AboutSection({ title, about }: AboutSectionProps) {
	return (
		<Container>
			<Section title={title}>
				<div className="space-y-6">
					{about?.intro ? <p className="text-sm leading-7 text-white/70">{about.intro}</p> : null}

					{about?.hobbiesTitle ? (
						<div className="space-y-2">
							<h3 className="text-base font-semibold">{about.hobbiesTitle}</h3>
							{about?.hobbiesBody ? (
								<p className="text-sm leading-7 text-white/70">{about.hobbiesBody}</p>
							) : null}
						</div>
					) : null}

					{about?.volunteeringTitle ? (
						<div className="space-y-2">
							<h3 className="text-base font-semibold">{about.volunteeringTitle}</h3>
							{about?.volunteeringBody ? (
								<p className="text-sm leading-7 text-white/70">{about.volunteeringBody}</p>
							) : null}
						</div>
					) : null}
				</div>
			</Section>
		</Container>
	);
}
