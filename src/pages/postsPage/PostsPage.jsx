import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { fetchPosts } from '../../store/postSlice';

const PostsPage = () => {
	const { department } = useParams();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const posts = useSelector((state) => state.posts.posts);

	useEffect(() => {
		dispatch(fetchPosts(department));
	}, [department]);

	return (
		<div>
			<h1>Посты</h1>
			{posts &&
				posts.map((post) => (
					<Link key={post._id} to={`/${department}/${post._id}`}>
						<p>{post.title}</p>
					</Link>
				))}
			{user.isAdmin && (
				<Link to={`/${department}/createPost`}>
					<p>Новый пост</p>
				</Link>
			)}
		</div>
	);
};

export default PostsPage;
