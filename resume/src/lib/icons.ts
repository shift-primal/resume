export const iconKeys = [
	"phone",
	"mail",
	"map-pin",
	"globe",
	"github",
	"school",
	"monitor",
	"server",
	"database",
	"cloud",
	"key-round",
	"flask-conical",
	"wrench",
] as const;

export type IconKey = (typeof iconKeys)[number];
