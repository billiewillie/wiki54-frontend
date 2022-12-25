import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchPosts } from '../../store/postSlice';
import styles from './PostsPage.module.css';

const PostsPage = () => {
	const dispatch = useDispatch();
	const { department } = useParams();
	const user = useSelector((state) => state.user.user);
	const posts = useSelector((state) => state.posts.posts);

	return (
		<div>
			<h1>Посты</h1>
			{posts &&
				posts.map((post) => (
					<Link key={post._id} to={`/${post.department.pathName}/${post._id}`}>
						<p>{post.title}</p>
					</Link>
				))}
			{user.isAdmin && (
				<Link to={`/${department.pathName}/createPost`} className={styles.CreatePostButton}>
					<p>Новый пост</p>
				</Link>
			)}
		</div>
	);
};

export default PostsPage;
