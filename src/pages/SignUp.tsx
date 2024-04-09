/** @format */

import { useGetUserSignUpInfoMutation } from "../services/user";
import FormAction from "../components/FormAction";

const SignUp = () => {
	const [userSignUpInfo, { data, status, ...restOfData }] =
		useGetUserSignUpInfoMutation();

	return (
		<FormAction
			userInfo={userSignUpInfo}
			data={data}
			status={status}
			authData={restOfData}
			authType={"Sign Up"}
		/>
	);
};

export default SignUp;
