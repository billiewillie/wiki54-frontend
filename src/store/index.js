import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import usersReducer from './usersSlice';
import postReducer from './postSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		users: usersReducer,
		posts: postReducer,
	},
});
