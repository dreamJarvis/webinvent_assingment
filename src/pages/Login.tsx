/** @format */

import React, { useEffect, useState } from "react";
import { useGetUserInfoMutation } from "../services/user";
import { useDispatch } from "react-redux";
import { addUserLoginData } from "../services/userData";
import { User } from "../services/types";

/* 
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
*/
/* 
   status :
      1) "uninitialized"
      2) "pending"
      3) "fulfilled"
*/

const Login = () => {
	const [userInfo, { data, status }] = useGetUserInfoMutation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	console.log("data : ", data);

	useEffect(() => {
		if (status === "fulfilled") {
			const { token }: User | any = data;
			dispatch(addUserLoginData({ email, password, token }));
		}
	});

	const getUserInfo = (e: any) => {
		e.preventDefault();
		userInfo({
			email,
			password,
		});
	};

	return (
		<div className='login-form'>
			<form className='input-form' onSubmit={getUserInfo}>
				<div className='input-form-container'>
					<div className='input-containers'>
						<label className='input-name'>Sign-In</label>
						<input
							className='input-name'
							type='email'
							placeholder='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className='input-email'
							type='text'
							placeholder='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type='submit' className='btn-submit'>
						Sign-In
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
