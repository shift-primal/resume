import type { CollectionEntry } from "astro:content";

export type Cv = CollectionEntry<"cv">["data"];

type SidebarSection = Cv["sidebar"][number];
type MainSection = Cv["main"][number];

export type ContactSection = Extract<SidebarSection, { type: "contact" }>;
export type EducationSection = Extract<SidebarSection, { type: "education" }>;
export type SkillsSection = Extract<SidebarSection, { type: "skills" }>;

export type TextSection = Extract<MainSection, { type: "text" }>;
export type EntriesSection = Extract<MainSection, { type: "entries" }>;

export type Entry = EntriesSection["items"][number];
