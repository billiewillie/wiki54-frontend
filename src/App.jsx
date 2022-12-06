import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.css';
import Layout from './components/layout/Layout';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import PostPage from './pages/postPage/PostPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import PostsPage from './pages/postsPage/PostsPage';
import CreatePost from './pages/createPost/CreatePost';
import EditorPage from './pages/editorPage/EditorPage';
import MapOffice from './pages/mapOffice/mapOffice';
import { Provider } from 'react-redux';
import store from './store';

import RequireAuth from './hoc/RequireAuth';
import RequireAdmin from './hoc/RequireAdmin';

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
	return (
		<Provider store={store}>
			<div className='App'>
				<RouterProvider router={router} />
			</div>
		</Provider>
	);
}

export default App;
