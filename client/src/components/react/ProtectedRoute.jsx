import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
	const isAuthenticated = !!localStorage.getItem("authToken"); // Example: Check if user is logged in

	return isAuthenticated ? children : <Navigate to="/login" replace />;
}
