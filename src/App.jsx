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

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='posts' element={<PostsPage />} />
				<Route path=':department' element={<PostsPage />} />
				<Route path=':department/:id' element={<PostPage />} />
				<Route path=':department/:id/edit' element={<EditorPage />} />
				<Route path=':department/createPost' element={<CreatePost />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</>
	)
);

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
