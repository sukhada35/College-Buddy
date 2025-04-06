import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "next-themes";
import App from "./App.jsx";
import "./App/globals.css"; // ✅ Ensure the correct path
import "./index.css"; // ✅ Ensure the correct path

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider attribute="class">
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
