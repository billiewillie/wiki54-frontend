import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

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
			state.user.isAdmin = action.payload.isAdmin;
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
