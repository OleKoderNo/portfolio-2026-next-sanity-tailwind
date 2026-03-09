import Link from "next/link";

type ButtonLinkProps = {
	href: string;
	children: React.ReactNode;
	variant?: "default" | "primary";
	external?: boolean;
};

export function Button({ href, children, variant = "default", external = false }: ButtonLinkProps) {
	const baseClasses =
		"inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm transition";
	const variantClasses =
		variant === "primary"
			? "border-sky-400/40 bg-sky-400/15 hover:bg-sky-400/20"
			: "border-white/15 bg-white/5 hover:bg-white/10";

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noreferrer noopener"
				className={`${baseClasses} ${variantClasses}`}
			>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} className={`${baseClasses} ${variantClasses}`}>
			{children}
		</Link>
	);
}
