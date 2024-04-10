/** @format */

import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: any; props: any }) => {
	const { authDetails } = useSelector((state: RootState) => state.userData);
	const location = useLocation();

	if (authDetails?.token === null)
		return (
			<Navigate
				to={"/webinvent_assingment"}
				state={{ from: location }}
				replace
			/>
		);
	return children;
};

export default ProtectedRoute;
