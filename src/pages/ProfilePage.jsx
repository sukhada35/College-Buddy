import { Button } from "@/components/ui/button";
import { Navbar } from "../components/react/navbar";
import { Settings, Send, Camera } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Messages from "./Messages";

function ProfilePage() {
	return (
		<div className="flex flex-col h-screen max-w-md mx-auto bg-background">
			<header className="flex items-center justify-between p-4 border-b">
				<Button variant="ghost" size="icon">
					<Settings className="h-6 w-6" />
				</Button>
				<h1 className="text-xl font-bold text-primary">Profile</h1>
				<Button variant="ghost" size="icon">
					<Link to="/messages">
						<Send className="h-6 w-6" />
					</Link>
				</Button>
			</header>

			<main className="flex-1 p-4 overflow-hidden">
				<div className="flex flex-col items-center space-y-4">
					{/* Profile Image */}
					<div className="relative w-full h-80 mb-4">
						<img
							src="../assets/images/person2.jpg" // Replace with actual image URL
							alt="Profile"
							className="w-full h-full object-cover rounded-xl bg-gray-700"
						/>
					</div>

					{/* Profile Information */}
					<div className="w-full text-center space-y-2">
						<h2 className="text-2xl font-bold">Alex Johnson, 28</h2>
						<p className="text-sm text-gray-500">New York, NY</p>
						<p className="text-sm mt-1 opacity-75">
							Coffee enthusiast, hiking lover, and tech professional. Looking
							for someone to explore the city with!
						</p>
					</div>

					{/* Social Media Links */}
					<div className="w-full space-y-2 mt-6">
						<div className="flex items-center justify-center space-x-4">
							<a
								href="https://instagram.com/alexjohnson"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button
									variant="outline"
									size="icon"
									className="h-14 w-14 rounded-full border-2 border-[#E94057]"
								>
									<Camera className="h-8 w-8 text-[#E94057]" />
								</Button>
							</a>
							<a
								href="https://linkedin.com/in/alexjohnson"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button
									variant="outline"
									size="icon"
									className="h-14 w-14 rounded-full border-2 border-[#0077B5]"
								>
									<Settings className="h-8 w-8 text-[#0077B5]" />
								</Button>
							</a>
						</div>
					</div>

					{/* Edit Profile Button */}
					<div className="pt-6">
						<Link to="/edit-profile">
							<Button
								variant="outline"
								size="lg"
								className="w-full py-3 bg-[#E94057] text-white font-semibold rounded-lg hover:bg-[#d9374e] transition"
							>
								Edit Profile
							</Button>
						</Link>
					</div>
				</div>
			</main>

			{/* Navbar */}
			<Navbar />
		</div>
	);
}

export default ProfilePage;
