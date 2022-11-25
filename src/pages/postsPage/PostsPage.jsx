import { useState, useEffect } from 'react';
import axios from '../../axios';
import { Link, useParams } from 'react-router-dom';

const PostsPage = () => {
	const [data, setData] = useState([]);
	const { department } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/${department}`);
			setData(data);
		};
		fetchData();
	}, [data]);

	return (
		<div>
			<h1>Посты</h1>
			{data.map((post) => (
				<Link key={post.id} to={`/${department}/${post.id}`}>
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
