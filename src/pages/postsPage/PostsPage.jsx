import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import axios from '../../axios';

const PostsPage = () => {
	const { department } = useParams();
	const [data, setData] = useState([]);
	const user = useSelector((state) => state.user.user);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/posts/${department}`);
			setData(data);
		};
		fetchData();
	}, [department]);

	return (
		<div>
			<h1>Посты</h1>
			{data.map((post) => (
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
