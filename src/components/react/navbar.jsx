import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass, Heart, User } from "lucide-react";

export const Navbar = () => {
	const location = useLocation();

	// Optional: Highlight current page
	const isActive = (path) => location.pathname === path;

	return (
		<div className="mb-4 mx-4 rounded-2xl">
			<footer className="p-4 border-t bg-[#E94057] shadow-md rounded-2xl">
				<nav className="flex justify-around">
					<Button
						asChild
						variant="ghost"
						size="lg"
						className="flex flex-col items-center"
					>
						<Link
							to="/discover"
							className={
								isActive("/discover") ? "text-white" : "text-[#e69aa4]"
							}
						>
							<Compass className="h-10 w-10" />
							<span className="text-xs">Discover</span>
						</Link>
					</Button>
					<Button
						asChild
						variant="ghost"
						size="lg"
						className="flex flex-col items-center"
					>
						<Link
							to="/likes"
							className={isActive("/likes") ? "text-white" : "text-[#e69aa4]"}
						>
							<Heart className="h-10 w-10" />
							<span className="text-xs">Likes</span>
						</Link>
					</Button>
					<Button
						asChild
						variant="ghost"
						size="lg"
						className="flex flex-col items-center"
					>
						<Link
							to="/profile"
							className={
								isActive("/profile") ? "text-[#FFF]" : "text-[#e69aa4]"
							}
						>
							<User className="h-10 w-10" />
							<span className="text-xs">Profile</span>
						</Link>
					</Button>
				</nav>
			</footer>
		</div>
	);
};

export default Navbar;
