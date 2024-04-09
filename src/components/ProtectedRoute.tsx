/** @format */

import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, ...props }) => {
	const { loginDetails } = useSelector((state: RootState) => state.userData);
	const location = useLocation();

	console.log("protected route ");
	console.log("loginDetails : ", loginDetails);

	if (loginDetails?.token === null)
		return <Navigate to={"/"} state={{ from: location }} replace />;
	return children;
};

export default ProtectedRoute;
