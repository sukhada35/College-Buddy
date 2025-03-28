import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeProvider, useTheme } from "next-themes";
import Matches from "./pages/Matches";
import Likes from "./pages/Likes";
import Profile from "./pages/Profile";

function Navbar({ toggleTheme, theme }) {
	return (
		<nav className="flex justify-between items-center p-4 border-b shadow-md w-full">
			<h1 className="text-xl font-bold">
				<Link to="/">ShadCN Boilerplate</Link>
			</h1>
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
				<Button onClick={toggleTheme}></Button>
			</div>
		</nav>
	);
}

// function HomePage() {
// 	return (
// 		<main className="flex flex-col items-center justify-center flex-grow text-center">
// 			<h2 className="text-3xl font-semibold mb-4">
// 				Welcome to the ShadCN Starter!
// 			</h2>
// 			<p className="text-muted-foreground max-w-lg">
// 				This is a simple boilerplate homepage using ShadCN components. Feel free
// 				to customize it.
// 			</p>
// 			<Button className="mt-6">Get Started</Button>
// 		</main>
// 	);
// }

export default function App() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<ThemeProvider attribute="class">
			<Router>
				<div className="h-screen w-screen flex flex-col bg-background text-foreground">
					<Navbar toggleTheme={toggleTheme} theme={theme} />
					<div className="flex-grow">
						<Routes>
							{/* <Route path="/" element={<HomePage />} /> */}
							<Route path="/matches" element={<Matches />} />
							<Route path="/likes" element={<Likes />} />
							<Route path="/profile" element={<Profile />} />
						</Routes>
					</div>

					{/* Cards Section */}
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

					{/* <div className="bg-red-500 w-full text-center p-4">This is a div</div> */}
				</div>
			</Router>
		</ThemeProvider>
	);
}
