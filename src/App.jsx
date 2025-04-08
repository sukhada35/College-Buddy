import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Importing pages
import LikesPage from "./pages/LikesPage";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Message from "./pages/Messages";
import ProtectedRoute from "./components/react/ProtectedRoute";

// Importing icons
import {
	Heart,
	X,
	Settings,
	Send,
	Star,
	Instagram,
	LinkedinIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import person1 from "@/assets/images/person1.jpg";
import person2 from "@/assets/images/person2.jpg";
import person3 from "@/assets/images/person3.avif";
import person4 from "@/assets/images/person4.jpg";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "./components/react/navbar";

import "../dist/output.css";

export default function App() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(null);

	const profiles = [
		{
			id: 1,
			name: "Alex Johnson",
			age: 28,
			location: "New York, NY",
			bio: "Coffee enthusiast, hiking lover, and tech professional. Looking for someone to explore the city with!",
			image: person1,
			distance: "2 miles away",
		},
		{
			id: 2,
			name: "Taylor Smith",
			age: 26,
			location: "Brooklyn, NY",
			bio: "Art curator with a passion for photography. Let's visit museums and take pictures of the sunset.",
			image: person2,
			distance: "5 miles away",
		},
		{
			id: 3,
			name: "Jordan Rivera",
			age: 30,
			location: "Manhattan, NY",
			bio: "Foodie and amateur chef. I know all the best restaurants in town and can cook a mean pasta dish.",
			image: person3,
			distance: "3 miles away",
		},
		{
			id: 4,
			name: "Casey Morgan",
			age: 27,
			location: "Queens, NY",
			bio: "Music lover and concert-goer. Always on the lookout for new bands and sounds.",
			image: person4,
			distance: "7 miles away",
		},
	];

	const activeProfile = profiles[currentIndex];

	const handleSwipe = (dir) => {
		setDirection(dir);
		setTimeout(() => {
			setDirection(null);
			setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
		}, 300);
	};

	return (
		<Router>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />

				{/* Protected Routes */}
				<Route
					path="/discover"
					element={
						<Discover
							activeProfile={activeProfile}
							handleSwipe={handleSwipe}
							direction={direction}
						/>
					}
				/>
				<Route path="/likes" element={<LikesPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route
					path="/messages"
					element={
						// <ProtectedRoute>
						// 	<Message />
						// </ProtectedRoute>
						<Message />
					}
				/>
			</Routes>
		</Router>
	);
}

function Discover({ activeProfile, handleSwipe, direction }) {
	return (
		<div className="flex flex-col h-screen max-w-md mx-auto bg-background">
			<header className="flex items-center justify-between p-4 border-b">
				<Button variant="ghost" size="icon">
					<Settings className="h-6 w-6" />
				</Button>
				<h1 className="text-xl font-bold text-primary">Discover</h1>
				<Button variant="ghost" size="icon">
					<Link to="/messages">
						<Send className="h-6 w-6" />
					</Link>
				</Button>
			</header>
			<main className="flex-1 p-4 overflow-hidden">
				<AnimatePresence>
					{activeProfile && (
						<motion.div
							key={activeProfile.id}
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{
								scale: direction ? (direction === "right" ? 1.1 : 0.9) : 1,
								opacity: 1,
								x:
									direction === "right" ? 100 : direction === "left" ? -100 : 0,
								rotate:
									direction === "right" ? 5 : direction === "left" ? -5 : 0,
							}}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="h-full"
						>
							<Card className="h-full p-0 overflow-hidden">
								<div className="relative h-full">
									<img
										src={activeProfile.image || "/placeholder.svg"}
										alt={activeProfile.name}
										className="w-full h-full object-cover"
									/>
									<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
										<h2 className="text-2xl font-bold">
											{activeProfile.name}, {activeProfile.age}
										</h2>
										<p className="text-sm opacity-90">
											{activeProfile.location}
										</p>
										<p className="text-xs mt-1 opacity-75">
											{activeProfile.distance}
										</p>
										<p className="text-sm text-muted-foreground">
											{activeProfile.bio}
										</p>
										<div className="flex place-content-between gap-4">
											<div className="h-14 w-[50%] rounded-xl border-2 border-red-500 flex justify-center items-center gap-2 bg-[#0f0f0f]">
												<Instagram />
												Instagram
											</div>
											<div className="h-14 w-[50%] rounded-xl border-2 border-red-500 flex justify-center items-center gap-2 bg-[#0f0f0f]">
												<LinkedinIcon />
												Instagram
											</div>
										</div>
										{/* Like/Dislike Buttons */}
										<div className="flex justify-center space-x-4 p-4">
											<Button
												onClick={() => handleSwipe("left")}
												variant="outline"
												size="icon"
												className="h-14 w-14 rounded-full border-2 border-destructive"
											>
												<X className="h-8 w-8 text-destructive" />
											</Button>
											<Button
												onClick={() => handleSwipe("right")}
												variant="outline"
												size="icon"
												className="h-14 w-14 rounded-full border-2 border-red-500"
											>
												<Heart className="h-8 w-8 text-red-500" />
											</Button>
											<Button
												variant="outline"
												size="icon"
												className="h-14 w-14 rounded-full border-2 border-blue-500"
											>
												<Star className="h-8 w-8 text-blue-500" />
											</Button>
										</div>
									</div>
								</div>
							</Card>
						</motion.div>
					)}
				</AnimatePresence>
			</main>
			<Navbar />
		</div>
	);
}
