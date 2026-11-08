import { defineConfig } from "blume";

export default defineConfig({
	title: "Tripwire Docs",
	description: "How to configure and use Tripwire.",
	logo: {
		image: "/tripwire.svg",
		text: "/ docs",
	},
	navigation: {
		sidebar: [
			{ label: "Get started", items: ["/", "/quickstart"] },
			{ label: "Use Tripwire", items: ["/workflows", "/rules", "/human-review"] },
			{ label: "Workflows in code", items: ["/cli", "/typescript-sdk"] },
			{ label: "Open source", items: ["/pilot"] },
		],
	},
	theme: {
		background: { dark: "#101010" },
		fonts: { display: "geist", body: "geist" },
		accent: { light: "#414141", dark: "#d4d4d4" },
		mode: "system",
	},
});
