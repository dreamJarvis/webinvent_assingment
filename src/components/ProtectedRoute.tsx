/** @format */

import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, ...props }) => {
	const { authDetails } = useSelector((state: RootState) => state.userData);
	const location = useLocation();

	if (authDetails?.token === null)
		return <Navigate to={"/"} state={{ from: location }} replace />;
	return children;
};

export default ProtectedRoute;
