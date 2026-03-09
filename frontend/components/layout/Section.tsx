type SectionProps = {
	title: string;
	children: React.ReactNode;
	className?: string;
};

export function Section({ title, children, className = "" }: SectionProps) {
	return (
		<section className={`mt-8 ${className}`}>
			<h2 className="mb-6 text-lg font-semibold tracking-tight">{title}</h2>
			{children}
		</section>
	);
}
