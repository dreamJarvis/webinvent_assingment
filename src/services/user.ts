/** @format */

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { User } from "./user";

type User = {
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
		// getUserInfo: builder.query<User, string>({
		// 	query: (id) => `pokemon/${id}`,
		// }),
		getUserInfo: builder.mutation<User, any>({
			query: (userInfo: User) => ({
				url: `login`,
				method: "POST",
				body: userInfo,
			}),
			invalidatesTags: ["user"],
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserInfoMutation } = userApi;
