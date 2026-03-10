import Link from "next/link";

type FooterProps = {
	locale: string;
	t: {
		footer: {
			rights: string;
			projects: string;
			github: string;
			linkedin: string;
		};
	};
};

export function Footer({ locale, t }: FooterProps) {
	return (
		<footer className="border-t border-white/10 bg-neutral-950">
			<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-neutral-400 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
				<p>
					© {new Date().getFullYear()} OleKoder. {t.footer.rights}
				</p>

				<div className="flex flex-wrap items-center gap-4">
					<Link href={`/${locale}`} className="transition hover:text-white">
						OleKoder
					</Link>
					<Link href={`/${locale}/projects`} className="transition hover:text-white">
						{t.footer.projects}
					</Link>
					<a
						href="https://github.com/OleKoderNo"
						target="_blank"
						rel="noreferrer"
						className="transition hover:text-white"
					>
						{t.footer.github}
					</a>
					<a
						href="https://www.linkedin.com/in/ole-h%C3%A5vard-furuseth-bergan-2a1209255/"
						target="_blank"
						rel="noreferrer"
						className="transition hover:text-white"
					>
						{t.footer.linkedin}
					</a>
				</div>
			</div>
		</footer>
	);
}
