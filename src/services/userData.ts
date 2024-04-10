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
			state.authDetails = { ...state.authDetails, ...newUserData };
		},
	},
});

export const { addUserAuthData } = userDataSlice.actions;
export default userDataSlice.reducer;
