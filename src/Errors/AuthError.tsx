/** @format */

import React, { useEffect } from "react";
import { ERROR_INTERVAL } from "../utils/constants";
/* 
	error : {
		data: {
			error: '',
		},
		status: 401
	}
*/
const AuthError = ({ error, reset }: { error: any; reset: any }) => {
	const { data, status } = error;

	useEffect(() => {
		const errTimeOut = setTimeout(() => {
			reset();
		}, ERROR_INTERVAL);

		return () => {
			clearTimeout(errTimeOut);
		};
	});

	return (
		<div data-testid='error-msg'>
			<div style={{ textAlign: "center" }}>
				<h1>
					{status} : {data?.error}
				</h1>
			</div>
		</div>
	);
};

export default AuthError;
