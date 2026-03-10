"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarProps = {
	locale: string;
	t: {
		nav: {
			home: string;
			projects: string;
			about: string;
			contact: string;
		};
	};
};

export function Navbar({ locale, t }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ href: `/${locale}`, label: t.nav.home },
		{ href: `/${locale}/projects`, label: t.nav.projects },
		{ href: `/${locale}/about`, label: t.nav.about },
		{ href: `/${locale}/contact`, label: t.nav.contact },
	];

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const originalOverflow = document.body.style.overflow;

		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = originalOverflow;
		}

		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [isOpen]);

	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link
						href={`/${locale}`}
						className="text-lg font-semibold tracking-tight text-white transition hover:opacity-80"
						onClick={() => setIsOpen(false)}
					>
						OleKoder
					</Link>

					<nav aria-label="Main navigation" className="hidden md:block">
						<ul className="flex items-center gap-6">
							{navLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm font-medium text-neutral-300 transition hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<button
						type="button"
						aria-expanded={isOpen}
						aria-controls="mobile-menu"
						aria-label={isOpen ? "Close menu" : "Open menu"}
						className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white transition hover:bg-white/5 md:hidden"
						onClick={() => setIsOpen((prev) => !prev)}
					>
						<span className="sr-only">
							{isOpen ? "Close navigation menu" : "Open navigation menu"}
						</span>

						<div className="relative h-4 w-5">
							<span
								className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-all duration-200 ${
									isOpen ? "top-[7px] rotate-45" : ""
								}`}
							/>
							<span
								className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-all duration-200 ${
									isOpen ? "opacity-0" : "opacity-100"
								}`}
							/>
							<span
								className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition-all duration-200 ${
									isOpen ? "top-[7px] -rotate-45" : ""
								}`}
							/>
						</div>
					</button>
				</div>
			</div>

			<div
				id="mobile-menu"
				className={`overflow-hidden border-t border-white/10 bg-neutral-950 md:hidden ${
					isOpen ? "block" : "hidden"
				}`}
			>
				<nav aria-label="Mobile navigation" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
					<ul className="flex flex-col gap-2">
						{navLinks.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="block rounded-lg px-3 py-3 text-base font-medium text-neutral-200 transition hover:bg-white/5 hover:text-white"
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
