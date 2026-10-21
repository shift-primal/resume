import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { iconKeys } from "./lib/icons";

const period = z
	.object({
		start: z.number().int(),
		end: z.number().int().optional(),
	})
	.refine((p) => p.end === undefined || p.end >= p.start, {
		message: "end kan ikke være før start",
	});

const list = z.object({
	type: z.literal("list"),
	title: z.string(),
	items: z.array(z.string()).min(1),
});

const text = z.object({
	type: z.literal("text"),
	title: z.string(),
	body: z.string(),
});

const link = z.object({ href: z.string(), label: z.string() });

const entry = z.object({
	title: z.string(),
	subtitle: z.string(),
	description: z.string(),
	period: period.optional(),
	status: z.string().optional(),
	link: link.optional(),
	tech: z.array(z.string()).optional(),
});

const entries = z.object({
	type: z.literal("entries"),
	title: z.string(),
	items: z.array(entry),
});

const icon = z.enum(iconKeys);

const contact = z.object({
	type: z.literal("contact"),
	title: z.string(),
	items: z.array(
		z.object({
			icon,
			label: z.string(),
			href: z.string().optional(),
		}),
	),
});

const education = z.object({
	type: z.literal("education"),
	title: z.string(),
	items: z.array(
		z.object({
			icon,
			title: z.string(),
			description: z.string(),
			period: period.optional(),
		}),
	),
});

const skills = z.object({
	type: z.literal("skills"),
	title: z.string(),
	groups: z.array(
		z.object({
			icon,
			label: z.string(),
			items: z.array(z.string()).min(1),
		}),
	),
});

const cv = defineCollection({
	loader: glob({ pattern: "*.yaml", base: "./src/content/cv" }),
	schema: ({ image }) =>
		z.object({
			lang: z.string(),
			name: z.object({ first: z.string(), last: z.string() }),
			role: z.string(),
			photo: z.object({ src: image(), alt: z.string() }),
			sidebar: z.array(
				z.discriminatedUnion("type", [
					contact,
					list,
					education,
					skills,
				]),
			),
			main: z.array(z.discriminatedUnion("type", [text, entries])),
		}),
});

export const collections = { cv };
