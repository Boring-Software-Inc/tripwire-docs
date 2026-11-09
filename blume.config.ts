import { defineConfig } from "blume";

export default defineConfig({
	title: "Tripwire Docs",
	description: "How to configure and use Tripwire.",
	deployment: { site: "https://docs.tripwire.sh" },
	logo: {
		image: "/tripwire.svg",
		text: "/ docs",
	},
	navigation: {
		sidebar: [
			{ label: "Get started", items: ["/", "/quickstart", "/concepts"] },
			{ label: "Use Tripwire", items: ["/workflows", "/rules", "/human-review"] },
			{ label: "Developer tools", items: ["/ai-tools", "/agent-auth", "/cli", "/typescript-sdk"] },
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
