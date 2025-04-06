import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
// import { useAuth } from "../context/Authcontext";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	// const { signIn, signInWithGoogle } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			await signIn(email, password);
			toast.success("Successfully logged in!");
			navigate("/dashboard");
		} catch (error) {
			toast.error("Failed to log in. Please check your credentials.");
		} finally {
			setIsLoading(false);
		}

		try {
			const token = await signIn(email, password); // Assume this returns a token
			localStorage.setItem("authToken", token);
			toast.success("Successfully logged in!");
			navigate("/dashboard");
		} catch (error) {
			toast.error("Failed to log in. Please check your credentials.");
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			await signInWithGoogle();
			toast.success("Successfully logged in with Google!");
			navigate("/dashboard");
		} catch (error) {
			toast.error("Failed to log in with Google.");
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-primary px-4 py-12 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-400">
						Or{" "}
						<Link
							to="/signup"
							className="font-medium text-accent hover:text-accent/80"
						>
							create a new account
						</Link>
					</p>
				</div>

				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="space-y-4 rounded-md">
						<div>
							<label htmlFor="email" className="sr-only">
								Email address
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								className="input-field"
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								className="input-field"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="btn-primary w-full"
							disabled={isLoading}
						>
							{isLoading ? "Signing in..." : "Sign in"}
						</button>
					</div>
				</form>

				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-600" />
					</div>
					<div className="relative flex justify-center text-sm">
						<span className="bg-primary px-2 text-gray-400">
							Or continue with
						</span>
					</div>
				</div>

				<div>
					<button
						type="button"
						onClick={handleGoogleSignIn}
						className="btn-secondary w-full"
					>
						<div className="flex items-center justify-center gap-3">
							<FcGoogle className="h-5 w-5" />
							<span>Sign in with Google</span>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
