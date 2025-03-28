import { useState } from "react";
import { Link } from "react-router-dom"; // Optional
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // ShadCN Button
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white dark:bg-gray-900 shadow-md">
			<div className="container mx-auto flex justify-between items-center p-4">
				{/* Logo */}
				<h1 className="text-2xl font-bold">My Website</h1>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-6">
					<Button asChild variant="ghost">
						<Link to="/">Home</Link>
					</Button>
					<Button asChild variant="ghost">
						<Link to="/about">About</Link>
					</Button>
					<Button asChild variant="ghost">
						<Link to="/contact">Contact</Link>
					</Button>
				</div>

				{/* Dropdown for Mobile */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="md:hidden">
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-40">
						<DropdownMenuItem>
							<Link
								to="/"
								className="w-full block"
								onClick={() => setIsOpen(false)}
							>
								Home
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link
								to="/about"
								className="w-full block"
								onClick={() => setIsOpen(false)}
							>
								About
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link
								to="/contact"
								className="w-full block"
								onClick={() => setIsOpen(false)}
							>
								Contact
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default Navbar;
