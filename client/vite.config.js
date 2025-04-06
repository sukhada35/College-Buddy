import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(process.cwd(), "src"), // Use process.cwd() instead of __dirname
		},
	},
});
