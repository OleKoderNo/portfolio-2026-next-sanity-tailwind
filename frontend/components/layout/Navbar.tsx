"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const locales = ["en", "no"] as const;
type Locale = (typeof locales)[number];

function isLocale(value: string): value is Locale {
	return locales.includes(value as Locale);
}

type NavbarProps = {
	locale: Locale;
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
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ href: `/${locale}`, label: t.nav.home },
		{ href: `/${locale}/projects`, label: t.nav.projects },
		{ href: `/${locale}/about`, label: t.nav.about },
		{ href: `/${locale}/contact`, label: t.nav.contact },
	];

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) setIsOpen(false);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = isOpen ? "hidden" : "";

		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [isOpen]);

	function isActive(href: string) {
		if (!pathname) return false;

		if (href === `/${locale}`) {
			return pathname === `/${locale}`;
		}

		return pathname.startsWith(href);
	}

	function getLocalePath(targetLocale: Locale) {
		if (!pathname) return `/${targetLocale}`;

		const segments = pathname.split("/").filter(Boolean);

		if (segments.length === 0) {
			return `/${targetLocale}`;
		}

		if (isLocale(segments[0])) {
			segments[0] = targetLocale;
			return `/${segments.join("/")}`;
		}

		return `/${targetLocale}/${segments.join("/")}`;
	}

	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link
						href={`/${locale}`}
						className="text-lg font-semibold text-white"
						onClick={() => setIsOpen(false)}
					>
						OleKoder
					</Link>

					<div className="hidden items-center gap-6 md:flex">
						<nav aria-label="Main navigation">
							<ul className="flex items-center gap-6">
								{navLinks.map((link) => {
									const active = isActive(link.href);

									return (
										<li key={link.href}>
											<Link
												href={link.href}
												onClick={() => setIsOpen(false)}
												aria-current={active ? "page" : undefined}
												className={[
													"relative text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:bg-white after:transition-transform after:duration-200",
													active
														? "text-white after:scale-x-100"
														: "text-neutral-300 after:scale-x-0 hover:text-white hover:after:scale-x-100",
												].join(" ")}
											>
												{link.label}
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>

						<div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1">
							{locales.map((item) => {
								const active = locale === item;

								return (
									<Link
										key={item}
										href={getLocalePath(item)}
										locale={false}
										className={[
											"rounded-full px-3 py-1 text-xs font-semibold uppercase transition",
											active ? "bg-white text-black" : "text-neutral-300 hover:text-white",
										].join(" ")}
									>
										{item}
									</Link>
								);
							})}
						</div>
					</div>

					<button
						type="button"
						onClick={() => setIsOpen((prev) => !prev)}
						className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 md:hidden"
						aria-label={isOpen ? "Close menu" : "Open menu"}
						aria-expanded={isOpen}
						aria-controls="mobile-menu"
					>
						<div className="relative h-4 w-5">
							<span
								className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${
									isOpen ? "top-1.75 rotate-45" : ""
								}`}
							/>
							<span
								className={`absolute left-0 top-1.75 h-0.5 w-5 bg-white transition ${
									isOpen ? "opacity-0" : ""
								}`}
							/>
							<span
								className={`absolute left-0 top-3.5 h-0.5 w-5 bg-white transition ${
									isOpen ? "top-1.75 -rotate-45" : ""
								}`}
							/>
						</div>
					</button>
				</div>
			</div>

			<div
				className={`overflow-hidden border-t border-white/10 bg-neutral-950 transition-all duration-300 md:hidden ${
					isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div id="mobile-menu" className="px-4 py-4">
					<ul className="flex flex-col gap-2">
						{navLinks.map((link) => {
							const active = isActive(link.href);

							return (
								<li key={link.href}>
									<Link
										href={link.href}
										onClick={() => setIsOpen(false)}
										aria-current={active ? "page" : undefined}
										className={[
											"relative block px-3 py-3 text-base font-medium transition-colors after:absolute after:left-3 after:right-3 after:bottom-2 after:h-0.5 after:bg-white after:transition-transform after:duration-200",
											active
												? "text-white after:scale-x-100"
												: "text-neutral-200 after:scale-x-0 hover:text-white hover:after:scale-x-100",
										].join(" ")}
									>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ul>

					<div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
						{locales.map((item) => {
							const active = locale === item;

							return (
								<Link
									key={item}
									href={getLocalePath(item)}
									locale={false}
									onClick={() => setIsOpen(false)}
									className={[
										"rounded-full px-3 py-2 text-xs font-semibold uppercase transition",
										active
											? "bg-white text-black"
											: "border border-white/10 text-neutral-300 hover:text-white",
									].join(" ")}
								>
									{item}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</header>
	);
}
