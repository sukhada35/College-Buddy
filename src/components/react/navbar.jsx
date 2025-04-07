import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass, Heart, User } from "lucide-react";

export const Navbar = () => {
	const location = useLocation();

	// Optional: Highlight current page
	const isActive = (path) => location.pathname === path;

	return (
		<footer className="p-4 border-t bg-white dark:bg-gray-900 shadow-md">
			<nav className="flex justify-around">
				<Button
					asChild
					variant="ghost"
					size="lg"
					className="flex flex-col items-center"
				>
					<Link
						to="/discover"
						className={isActive("/discover") ? "text-blue-500" : ""}
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
						className={isActive("/likes") ? "text-blue-500" : ""}
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
						className={isActive("/profile") ? "text-blue-500" : ""}
					>
						<User className="h-10 w-10" />
						<span className="text-xs">Profile</span>
					</Link>
				</Button>
			</nav>
		</footer>
	);
};

export default Navbar;
