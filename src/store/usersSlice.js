import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

export const getUsers = createAsyncThunk('user/getUsers', async () => {
	const { data } = await axios.get('/users');
	return data;
});

const initialState = {
	users: [],
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
	extraReducers: (builder) => {
		builder.addCase(getUsers.pending, (state) => {
			state.status = 'loading';
			state.error = null;
		});
		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.error = null;
			state.users = action.payload;
		});
		builder.addCase(getUsers.rejected, (state, action) => {
			setError(state, action);
		});
	},
});

export default userSlice.reducer;
