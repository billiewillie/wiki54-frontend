import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {},
	},
	reducers: {
		getUser(state, action) {
			state.user.firstName = action.payload.firstName;
			state.user.lastName = action.payload.lastName;
			state.user.email = action.payload.email;
			state.user.role = action.payload.role;
			state.user.departments = action.payload.departments;
			state.user.isMapOpened = action.payload.isMapOpened;
		},
		removeUser(state) {
			state.user = {};
		},
	},
});

export const { getUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
