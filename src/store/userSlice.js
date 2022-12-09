import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

export const logIn = createAsyncThunk('user/logIn', async ({ email, password }, { rejectWithValue }) => {
	try {
		const { data } = await axios.post(`/users/login`, {
			email,
			password,
		});
		console.log(data);
		return data;
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

const initialState = {
	user: {},
	status: 'loading',
	error: null,
};

const setError = (state, action) => {
	state.status = 'rejected';
	state.error = action.payload;
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logOut: (state) => {
			state.user = {};
			state.status = 'loading';
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(logIn.pending, (state) => {
			state.status = 'loading';
			state.error = null;
		});
		builder.addCase(logIn.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.error = null;
			state.user = action.payload;
			if ('token' in action.payload) {
				window.localStorage.setItem('token', action.payload.token);
			}
		});
		builder.addCase(logIn.rejected, (state, action) => {
			setError(state, action);
		});
	},
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
