/** @format */

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { addUserAuthData } from "../services/userData";
import { User } from "../services/types";
import AuthError from "../Errors/AuthError";
import Form from "./Form";

const FormAction = ({ userInfo, data, status, authData, authType }) => {
	const { isError, isSuccess, isLoading, error, reset } = authData;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		if (status === "fulfilled" || isSuccess) {
			const { id, token }: User | any = data;
			dispatch(addUserAuthData({ email, password, token, id }));
		}
	});

	const getUserInfo = (e: any) => {
		e.preventDefault();
		userInfo({
			email,
			password,
		});
	};

	if (isLoading) return <div>Loading...</div>;

	return isError ? (
		<AuthError error={error} reset={reset} />
	) : isSuccess ? (
		<Navigate to='/dashboard' state={{ from: location }} replace />
	) : (
		<Form
			getUserInfo={getUserInfo}
			email={email}
			setEmail={setEmail}
			password={password}
			setPassword={setPassword}
			authType={authType}
		/>
	);
};

export default FormAction;
