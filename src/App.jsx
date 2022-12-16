import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import { getMe } from './store/userSlice';
import Layout from './components/layout/Layout';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import PostPage from './pages/postPage/PostPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import PostsPage from './pages/postsPage/PostsPage';
import CreatePost from './pages/createPost/CreatePost';
import EditorPage from './pages/editorPage/EditorPage';
import MapOffice from './pages/mapOffice/MapOffice';
import RequireAuth from './hoc/RequireAuth';
import RequireAdmin from './hoc/RequireAdmin';
import { useEffect } from 'react';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Layout />}>
				<Route
					index
					element={
						<RequireAuth>
							<HomePage />
						</RequireAuth>
					}
				/>
				<Route
					path=':department'
					element={
						<RequireAuth>
							<PostsPage />
						</RequireAuth>
					}
				/>
				<Route
					path=':department/:id'
					element={
						<RequireAuth>
							<PostPage />
						</RequireAuth>
					}
				/>
				<Route
					path=':department/:id/edit'
					element={
						<RequireAdmin>
							<EditorPage />
						</RequireAdmin>
					}
				/>
				<Route
					path=':department/createPost'
					element={
						<RequireAdmin>
							<CreatePost />
						</RequireAdmin>
					}
				/>
				<Route path='mapOffice' element={<MapOffice />} />
				<Route path='login' element={<LoginPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</>
	)
);

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMe());
	}, []);

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
