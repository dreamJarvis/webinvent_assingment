/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	authDetails: {
		id: null,
		token: null,
		email: null,
		password: null,
	},
};

export const userDataSlice = createSlice({
	name: "userData",
	initialState,
	reducers: {
		addUserAuthData: (state, action) => {
			const newUserData = {
				email: action.payload.email,
				password: action.payload.password,
				token: action.payload.token,
			};

			// console.log("action : ", action);
			// console.log("newUserData : ", newUserData);
			state.authDetails = { ...state.authDetails, ...newUserData };
			// console.log("state.loginDetails : ", state.loginDetails);
		},
	},
});

export const { addUserAuthData } = userDataSlice.actions;
export default userDataSlice.reducer;
