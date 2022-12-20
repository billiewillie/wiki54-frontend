import { useEffect } from 'react';
import Parser from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

import TableOfContent from '../../components/tableOfContent/TableOfContent';
import styles from './PostPage.module.css';
import { fetchPosts } from '../../store/postSlice';

const PostPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { state } = location;
	const { department, id } = useParams();
	const user = useSelector((state) => state.user.user);
	const [post] = useSelector((state) => state.posts.posts.filter((post) => post._id === id));

	useEffect(() => {
		dispatch(fetchPosts(department));
	}, [department]);

	useEffect(() => {
		const anchor = document.getElementById('imhere');
		setTimeout(() => {
			if (anchor) {
				console.log(anchor);
				anchor.scrollIntoView(true);
			}
		});
	}, []);

	console.log(state);

	const Result = () => {
		if (state?.query) {
			return (
				<div>
					{Parser(
						post.body.replace(
							state.query,
							`<a id="imhere" style="width: 3px; height: 10px; display: inline-block;background-color: red;"></a>${state.query}`
						)
					)}
				</div>
			);
		} else {
			return <div>{Parser(post.body)}</div>;
		}
	};

	return (
		<>
			{post && (
				<div className={styles.post}>
					<h1>{post.title}</h1>
					<Result />
					<TableOfContent />
					{user.isAdmin && (
						<Link to={`/${department}/${id}/edit`} className={styles.EditPostButton}>
							Редактировать пост
						</Link>
					)}
				</div>
			)}
		</>
	);
};

export default PostPage;
