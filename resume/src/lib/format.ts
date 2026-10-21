export function formatPeriod({ start, end }: { start: number; end?: number }) {
	return `${start} – ${end ?? "nå"}`;
}

/**
 * Split text into runs, marking words that contain a hyphen ("AI-assistert"),
 * so they can be kept on one line. (A non-breaking hyphen, U+2011, would be
 * simpler, but Poppins has no glyph for it and falls back to another font.)
 */
export function splitHyphenated(text: string) {
	return text
		.split(/(\S*-\S*)/)
		.filter(Boolean)
		.map((run) => ({ text: run, hyphenated: run.includes("-") }));
}
