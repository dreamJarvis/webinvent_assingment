/** @format */

import { RootState } from "../store";
import React from "react";
// import { useGetUserInfoMutation } from "../services/user";
import { useSelector } from "react-redux";

const Dashboard = () => {
	const { authDetails } = useSelector((state: RootState) => state.userData);

	console.log("authDetails : ", authDetails);

	return <div>Dashboard</div>;
};

export default Dashboard;
