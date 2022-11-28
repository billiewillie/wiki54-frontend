import { useState, useEffect } from 'react';
import axios from '../../axios';
import { Link, useParams } from 'react-router-dom';

const PostsPage = () => {
	const [data, setData] = useState([]);
	const { department } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/api/posts/${department}`);
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
			<Link to={`/${department}/createPost`}>
				<p>Новый пост</p>
			</Link>
		</div>
	);
};

export default PostsPage;
