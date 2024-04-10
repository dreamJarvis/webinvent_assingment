/** @format */

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { User } from "./user";

type User = {
	id: number;
	email: String;
	password: String;
	token: string;
};

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
	tagTypes: ["user"],
	endpoints: (builder) => ({
		getUserInfo: builder.mutation<User, any>({
			query: (userInfo: User) => ({
				url: `login`,
				method: "POST",
				body: userInfo,
			}),
			invalidatesTags: ["user"],
		}),
		getUserSignUpInfo: builder.mutation<User, any>({
			query: (userInfo: User) => ({
				url: `register`,
				method: "POST",
				body: userInfo,
			}),
			invalidatesTags: ["user"],
		}),
		getUsersList: builder.query<any, any>({
			query: (id: Number) => `users?page=${id}`,
			providesTags: ["user"],
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetUserInfoMutation,
	useGetUserSignUpInfoMutation,
	useGetUsersListQuery,
} = userApi;
