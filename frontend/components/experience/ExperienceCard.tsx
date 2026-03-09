type ExperienceCardProps = {
	company: string;
	dateLabel: string;
	body: string;
};

export function ExperienceCard({ company, dateLabel, body }: ExperienceCardProps) {
	return (
		<article className="rounded-2xl border border-white/15 p-4">
			<h3 className="text-lg font-semibold">{company}</h3>
			<p className="mt-1 text-sm text-white/60">{dateLabel}</p>
			<p className="mt-3 text-sm leading-6 text-white/70">{body}</p>
		</article>
	);
}
