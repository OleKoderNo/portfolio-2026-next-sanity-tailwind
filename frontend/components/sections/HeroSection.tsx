import { Container } from "../layout/Container";

export function HeroSection() {
	return (
		<Container>
			<header className="pt-8">
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
					Ole Håvard Furuseth Bergan
				</h1>
				<p className="mt-3 text-sm text-white/70 sm:text-base">
					Frontend • React / Next.js • Tailwind • JavaScript / TypeScript
				</p>
			</header>
		</Container>
	);
}
