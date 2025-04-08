"use client";

import { useState } from "react";
import {
	Heart,
	X,
	Settings,
	Send,
	ChevronRight,
	MessageCircle,
	Bell,
	Clock,
} from "lucide-react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Navbar from "@/components/react/navbar";

// Sample data for likes and requests
const likesData = [
	{
		id: 1,
		name: "Emma Wilson",
		age: 27,
		location: "2 miles away",
		image: "/placeholder.svg?height=100&width=100",
		matchPercentage: 92,
		lastActive: "Just now",
		bio: "Love hiking and photography",
		isNew: true,
	},
	{
		id: 2,
		name: "Michael Chen",
		age: 29,
		location: "5 miles away",
		image: "/placeholder.svg?height=100&width=100",
		matchPercentage: 85,
		lastActive: "2h ago",
		bio: "Foodie and coffee enthusiast",
		isNew: false,
	},
	{
		id: 3,
		name: "Sophia Rodriguez",
		age: 26,
		location: "3 miles away",
		image: "/placeholder.svg?height=100&width=100",
		matchPercentage: 78,
		lastActive: "1d ago",
		bio: "Artist and music lover",
		isNew: true,
	},
	{
		id: 4,
		name: "James Taylor",
		age: 31,
		location: "7 miles away",
		image: "/placeholder.svg?height=100&width=100",
		matchPercentage: 73,
		lastActive: "3d ago",
		bio: "Tech enthusiast and gamer",
		isNew: false,
	},
];

const requestsData = [
	{
		id: 5,
		name: "Olivia Parker",
		age: 28,
		location: "4 miles away",
		image: "/placeholder.svg?height=100&width=100",
		matchPercentage: 89,
		lastActive: "5h ago",
		bio: "Travel addict and yoga instructor",
		requestTime: "2 days ago",
	},
	{
		id: 6,
		name: "Daniel Kim",
		age: 30,
		location: "6 miles away",
		image: "/placeholder.svg?height=100&width=100",
		matchPercentage: 82,
		lastActive: "1d ago",
		bio: "Chef and fitness enthusiast",
		requestTime: "1 day ago",
	},
	{
		id: 7,
		name: "Ava Johnson",
		age: 25,
		location: "8 miles away",
		image: "/placeholder.svg?height=100&width=100",
		matchPercentage: 76,
		lastActive: "3h ago",
		bio: "Bookworm and coffee lover",
		requestTime: "5 hours ago",
	},
];

export default function Likes() {
	const [activeTab, setActiveTab] = useState("likes");
	const [likes, setLikes] = useState(likesData);
	const [requests, setRequests] = useState(requestsData);

	const handleAccept = (id) => {
		const acceptedRequest = requests.find((request) => request.id === id);
		if (acceptedRequest) {
			setLikes([...likes, { ...acceptedRequest, isNew: true }]);
			setRequests(requests.filter((request) => request.id !== id));
		}
	};

	const handleReject = (id) => {
		setRequests(requests.filter((request) => request.id !== id));
	};

	return (
		<div className="w-full max-w-md mx-auto bg-background min-h-screen flex flex-col place-content-between">
			<div className="sticky top-0 z-10 bg-background">
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
				<Tabs
					defaultValue="likes"
					className="w-full"
					onValueChange={setActiveTab}
				>
					<TabsList className="grid grid-cols-2 w-full gap-4 my-4">
						<TabsTrigger value="likes" className="text-white">
							Likes ({likes.length})
						</TabsTrigger>
						<TabsTrigger value="requests" className="py-3 text-white">
							Requests ({requests.length})
						</TabsTrigger>
					</TabsList>

					<TabsContent value="likes" className="mt-0">
						<div className="p-4 bg-gray-50 rounded-xl">
							<p className="text-sm text-gray-500">Search</p>
						</div>

						<div className="divide-y">
							{likes.length > 0 ? (
								likes.map((like) => (
									<div
										key={like.id}
										className="p-4 hover:bg-gray-50 transition-colors"
									>
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-3">
												<div className="relative border-2 border-[#E94057] rounded-full">
													<Avatar className="h-14 w-14">
														<AvatarImage src={like.image} alt={like.name} />
														<AvatarFallback>
															{like.name.charAt(0)}
														</AvatarFallback>
													</Avatar>
													{like.isNew && (
														<span className="absolute -top-1 -right-1 bg-[#E94057] h-4 w-4 rounded-full border-2 border-background"></span>
													)}
												</div>
												<div>
													<div className="flex items-center">
														<h3 className="font-semibold">
															{like.name}, {like.age}
														</h3>
														{like.matchPercentage > 85 && (
															<Badge className="ml-2 bg-[#E94057]">
																{like.matchPercentage}% Match
															</Badge>
														)}
													</div>
													<p className="text-sm text-gray-500">
														{like.location}
													</p>
													<p className="text-xs text-gray-400 mt-1 flex items-center">
														<Clock className="h-3 w-3 mr-1" /> {like.lastActive}
													</p>
												</div>
											</div>
											<div className="flex space-x-2">
												<Button
													variant="outline"
													size="icon"
													className="rounded-full border-[#E94057] text-[#E94057] hover:bg-[#E94057] hover:text-white"
												>
													<MessageCircle className="h-5 w-5" />
												</Button>
												<Button
													variant="outline"
													size="icon"
													className="rounded-full border-[#E94057] text-[#E94057] hover:bg-[#E94057] hover:text-white"
												>
													<ChevronRight className="h-5 w-5" />
												</Button>
											</div>
										</div>
										<p className="text-sm text-gray-600 mt-2 line-clamp-1">
											{like.bio}
										</p>
									</div>
								))
							) : (
								<div className="p-8 text-center">
									<div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
										<Heart className="h-8 w-8 text-gray-400" />
									</div>
									<h3 className="font-medium text-gray-900">No likes yet</h3>
									<p className="text-sm text-gray-500 mt-1">
										When someone likes your profile, they'll appear here
									</p>
								</div>
							)}
						</div>
					</TabsContent>

					<TabsContent value="requests" className="mt-0">
						<div className="p-4 bg-gray-50">
							<p className="text-sm text-gray-500">
								People waiting for your response
							</p>
						</div>

						<div className="divide-y">
							{requests.length > 0 ? (
								requests.map((request) => (
									<div
										key={request.id}
										className="p-4 hover:bg-gray-50 transition-colors"
									>
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-3">
												<Avatar className="h-14 w-14">
													<AvatarImage src={request.image} alt={request.name} />
													<AvatarFallback>
														{request.name.charAt(0)}
													</AvatarFallback>
												</Avatar>
												<div>
													<div className="flex items-center shrink-0">
														<h3 className="font-semibold">
															{request.name}, {request.age}
														</h3>
														{request.matchPercentage > 85 && (
															<Badge className="ml-2 bg-[#E94057]">
																{request.matchPercentage}% Match
															</Badge>
														)}
													</div>
													<p className="text-sm text-gray-500">
														{request.location}
													</p>
													<p className="text-xs text-gray-400 mt-1">
														Request sent {request.requestTime}
													</p>
												</div>
											</div>
											<div className="flex space-x-2">
												<Button
													variant="outline"
													size="icon"
													className="rounded-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
													onClick={() => handleAccept(request.id)}
												>
													<Heart className="h-5 w-5" />
												</Button>
												<Button
													variant="outline"
													size="icon"
													className="rounded-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
													onClick={() => handleReject(request.id)}
												>
													<X className="h-5 w-5" />
												</Button>
											</div>
										</div>
										<p className="text-sm text-gray-600 mt-2 line-clamp-1">
											{request.bio}
										</p>
									</div>
								))
							) : (
								<div className="p-8 text-center">
									<div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
										<Bell className="h-8 w-8 text-gray-400" />
									</div>
									<h3 className="font-medium text-gray-900">
										No pending requests
									</h3>
									<p className="text-sm text-gray-500 mt-1">
										When someone sends you a request, they'll appear here
									</p>
								</div>
							)}
						</div>
					</TabsContent>
				</Tabs>
			</div>
			<Navbar></Navbar>
		</div>
	);
}
