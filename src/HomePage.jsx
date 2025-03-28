import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeProvider, useTheme } from "next-themes";

import Matches from "./pages/Matches"; // Ensure this file exists
import Likes from "./pages/Likes"; // Ensure this file exists
import Profile from "./pages/Profile"; // Ensure this file exists

export default function HomePage() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<ThemeProvider attribute="class">
			<div className="min-h-screen bg-background text-foreground">
				<nav className="flex justify-between items-center p-4 border-b shadow-md">
					<h1 className="text-xl font-bold">ShadCN Boilerplate</h1>
					<div className="space-x-4">
						<Button asChild>
							<Link to="/matches">Matches</Link>
						</Button>
						<Button asChild>
							<Link to="/likes">Likes</Link>
						</Button>
						<Button asChild>
							<Link to="/profile">Profile</Link>
						</Button>
						<Button onClick={toggleTheme}>
							{theme === "dark" ? "Light Mode" : "Dark Mode"}
						</Button>
					</div>
				</nav>

				<main className="flex flex-col items-center justify-center py-12 px-4 text-center">
					<h2 className="text-3xl font-semibold mb-4">
						Welcome to the ShadCN Starter!
					</h2>
					<p className="text-muted-foreground max-w-lg">
						This is a simple boilerplate homepage using ShadCN components. Feel
						free to customize it.
					</p>
					<Button className="mt-6">Get Started</Button>
				</main>

				<section className="grid md:grid-cols-3 gap-6 p-8">
					{[
						{
							title: "Fast Development",
							desc: "ShadCN UI makes building React apps faster and more stylish.",
						},
						{
							title: "Customizable",
							desc: "Fully customizable UI with Tailwind and Radix components.",
						},
						{
							title: "Dark Mode Support",
							desc: "Toggle between light and dark themes effortlessly.",
						},
					].map((card, index) => (
						<Card key={index}>
							<CardHeader>
								<CardTitle>{card.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p>{card.desc}</p>
							</CardContent>
						</Card>
					))}
				</section>
				<div className="bg-red-500">This is a div</div>
			</div>
		</ThemeProvider>
	);
}
