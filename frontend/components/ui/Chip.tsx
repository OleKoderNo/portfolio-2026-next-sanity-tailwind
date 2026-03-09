type ChipProps = {
	label: string;
	skillLevel?: number;
};

export function Chip({ label, skillLevel }: ChipProps) {
	return (
		<div className="group relative inline-flex">
			<span className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/5 hover:text-white">
				{label}
			</span>

			{skillLevel ? (
				<div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/15 bg-black px-3 py-2 text-xs text-white opacity-0 shadow-lg transition duration-200 group-hover:opacity-100">
					Skill: {skillLevel}/5
				</div>
			) : null}
		</div>
	);
}
