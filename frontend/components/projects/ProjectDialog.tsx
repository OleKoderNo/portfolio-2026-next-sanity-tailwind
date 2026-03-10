"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Chip } from "../ui/Chip";
import { urlFor } from "@/lib/sanity/image";

type Technology = {
	_id: string;
	title: string;
	slug: string;
	skillLevel?: number;
};

type ProjectDialogProps = {
	open: boolean;
	onClose: () => void;
	title: string;
	description?: string;
	technologies: Technology[];
	liveUrl?: string;
	githubUrl?: string;
	image?: unknown;
};

export function ProjectDialog({
	open,
	onClose,
	title,
	description,
	technologies,
	liveUrl,
	githubUrl,
	image,
}: ProjectDialogProps) {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const imageUrl = image ? urlFor(image).width(1400).height(900).url() : null;

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (open && !dialog.open) {
			dialog.showModal();
			document.body.classList.add("dialog-open");
		}

		if (!open && dialog.open) {
			dialog.close();
			document.body.classList.remove("dialog-open");
		}
	}, [open]);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		const handleClose = () => {
			document.body.classList.remove("dialog-open");
			onClose();
		};

		dialog.addEventListener("close", handleClose);
		return () => dialog.removeEventListener("close", handleClose);
	}, [onClose]);

	useEffect(() => {
		return () => {
			document.body.classList.remove("dialog-open");
		};
	}, []);

	return (
		<dialog
			ref={dialogRef}
			className="m-auto w-[min(56rem,calc(100%-1rem))] max-w-none rounded-3xl border border-white/15 bg-black p-0 text-white shadow-2xl"
		>
			<div className="relative">
				<button
					type="button"
					onClick={onClose}
					className="absolute right-4 top-4 z-10 rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-white transition hover:bg-black"
					aria-label="Close project dialog"
				>
					✕
				</button>

				<div className="grid md:grid-cols-[1.2fr_0.8fr]">
					<div className="relative aspect-[16/10] bg-white/10 md:aspect-auto md:min-h-[28rem]">
						{imageUrl ? (
							<Image
								src={imageUrl}
								alt={title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 60vw"
							/>
						) : null}
					</div>

					<div className="p-5">
						<h3 className="text-2xl font-semibold tracking-tight">{title}</h3>

						{description ? (
							<p className="mt-4 text-sm leading-7 text-white/70">{description}</p>
						) : null}

						<div className="mt-5 flex flex-wrap gap-2">
							{technologies.map((tech) => (
								<Chip key={tech._id} label={tech.title} skillLevel={tech.skillLevel} />
							))}
						</div>

						<div className="mt-6 flex flex-wrap gap-3">
							{liveUrl ? (
								<Button href={liveUrl} external variant="primary">
									Live demo
								</Button>
							) : null}

							{githubUrl ? (
								<Button href={githubUrl} external>
									GitHub
								</Button>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</dialog>
	);
}
