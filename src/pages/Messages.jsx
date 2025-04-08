import React from "react";
import { Navbar } from "../components/react/navbar";

const Messages = () => {
	return (
		<div className="flex flex-col h-screen">
			<header className="p-4 border-b">
				<h1 className="text-xl font-bold">Messages</h1>
			</header>
			<main className="flex-1 p-4">
				<p>This is the Messages page.</p>
			</main>
			a
			<Navbar />
		</div>
	);
};

export default Messages;
