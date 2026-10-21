export function formatPeriod({ start, end }: { start: number; end?: number }) {
	return `${start} – ${end ?? "nå"}`;
}
