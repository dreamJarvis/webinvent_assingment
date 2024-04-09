/** @format */

import React, { useEffect } from "react";
import { ERROR_INTERVAL } from "../utils/constants";

const AuthError = ({ error, reset }) => {
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
		<div>
			<div style={{ textAlign: "center" }}>
				<h1>
					{status} : {data?.error}
				</h1>
			</div>
		</div>
	);
};

export default AuthError;
