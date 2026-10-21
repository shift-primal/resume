import type { CollectionEntry } from "astro:content";

export type Cv = CollectionEntry<"cv">["data"];

export type ContactSection = Extract<
	Cv["sidebar"][number],
	{ type: "contact" }
>;
