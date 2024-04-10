/** @format */

import { useGetUsersListQuery } from "../services/user";
import AuthError from "../Errors/AuthError";
import UserCard from "../components/UserCard";
import { UserProfile } from "../services/types";

const Dashboard = () => {
	const { data, isLoading, isSuccess, refetch, status } =
		useGetUsersListQuery(1);

	/* 
		TODO: creat an query error type & component to hadle query errors
	*/
	// temp sol^n
	const queryError = {
		data: {
			error: "error",
		},
		status: status,
	};

	if (isLoading) return <div>Loading...</div>;
	return isSuccess ? (
		data?.data?.map((user: UserProfile) => (
			<UserCard key={user?.id.toString()} userData={user} />
		))
	) : (
		<AuthError error={queryError} reset={refetch} />
	);
};

export default Dashboard;
/* 
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
*/
