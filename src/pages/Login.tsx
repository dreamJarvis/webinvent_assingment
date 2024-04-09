/** @format */

import { useGetUserInfoMutation } from "../services/user";
import FormAction from "../components/FormAction";

const Login = () => {
	const [userInfo, { data, status, ...restOfData }] = useGetUserInfoMutation();
	return (
		<FormAction
			userInfo={userInfo}
			data={data}
			status={status}
			authData={restOfData}
			authType={"Sign In"}
		/>
	);
};

export default Login;

/* 
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
*/
