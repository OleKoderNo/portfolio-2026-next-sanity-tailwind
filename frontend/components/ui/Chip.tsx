type ChipProps = {
	children: React.ReactNode;
};

export function Chip({ children }: ChipProps) {
	return (
		<span className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">
			{children}
		</span>
	);
}
