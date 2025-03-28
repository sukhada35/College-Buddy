// Homepage.jsx
import React from "react";

function HomePage() {
	return (
		<main className="flex flex-col items-center justify-center flex-grow text-center">
			<h2 className="text-3xl font-semibold mb-4">
				Welcome to the ShadCN Starter!
			</h2>
			<p className="text-muted-foreground max-w-lg">
				This is a simple boilerplate homepage using ShadCN components. Feel free
				to customize it.
			</p>
			<Button className="mt-6">Get Started</Button>
		</main>
	);
}

export default Homepage;
