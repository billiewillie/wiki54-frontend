import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (department, { rejectWithValue }) => {
	try {
		const { data } = await axios.get(`/posts/${department}`);
		return data;
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

export const editPost = createAsyncThunk('posts/editPost', async ({ id, department, title, body }, { rejectWithValue }) => {
	try {
		axios.patch(`/posts/${department}/${id}`, {
			title,
			body,
		});
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

const initialState = {
	posts: [],
	status: 'loading',
	error: null,
};

const setError = (state, action) => {
	state.status = 'rejected';
	state.error = action.payload;
};

const postSlice = createSlice({
	name: 'posts',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state) => {
			state.status = 'loading';
			state.error = null;
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.error = null;
			state.posts = action.payload;
		});
		builder.addCase(fetchPosts.rejected, (state, action) => {
			setError(state, action);
		});
		builder.addCase(editPost.pending, (state) => {
			state.status = 'loading';
			state.error = null;
		});
		builder.addCase(editPost.fulfilled, (state, action) => {
			console.log(action);
			// const objIndex = state.posts.findIndex((obj) => obj._id === action.payload.id);
			// state.status = 'resolved';
			// state.error = null;
			// state.posts[objIndex].title = action.payload.title;
			// state.posts[objIndex].body = action.payload.body;
			// state.posts.splice(index, 1);
		});
		builder.addCase(editPost.rejected, (state, action) => {
			setError(state, action);
		});
	},
});

export default postSlice.reducer;
