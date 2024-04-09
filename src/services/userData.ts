/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loginDetails: {
		token: null,
		email: null,
		password: null,
	},
	// userData: {
	// 	id: null,
	// 	firstName: null,
	// 	lastName: null,
	// 	avatar: null,
	// },
	// data: [],
};

export const userDataSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
		addUserLoginData: (state, action) => {
			const newUserData = {
				email: action.payload.email,
				password: action.payload.password,
				token: action.payload.token,
			};

			// console.log("action : ", action);
			// console.log("newUserData : ", newUserData);
			state.loginDetails = { ...newUserData };
			// console.log("state.loginDetails : ", state.loginDetails);
		},
	},
});

export const { addUserLoginData } = userDataSlice.actions;
export default userDataSlice.reducer;
