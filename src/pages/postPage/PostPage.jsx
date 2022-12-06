import { Link, useParams } from 'react-router-dom';
import Parser from 'html-react-parser';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import axios from '../../axios';

const PostPage = () => {
	const [data, setData] = useState(null);
	const { department, id } = useParams();
	const user = useSelector((state) => state.user.user);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/posts/${department}/${id}`);
			setData(data);
		};
		fetchData();
	}, []);

	return (
		<>
			{data && (
				<div className='post'>
					<h2>{data.title}</h2>
					<div>{Parser(data.body)}</div>
					{user.isAdmin && <Link to={`/${department}/${id}/edit`}>Редактировать пост</Link>}
				</div>
			)}
		</>
	);
};

export default PostPage;
