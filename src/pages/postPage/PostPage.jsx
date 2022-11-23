import { Link, useParams } from 'react-router-dom';
import Parser from 'html-react-parser';
import axios from '../../axios';
import { useState, useEffect } from 'react';

const PostPage = () => {
	const [data, setData] = useState(null);
	const { department, id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/${department}/${id}`);
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
					<Link to={`/${department}/${id}/edit`}>Edit this post</Link>
				</div>
			)}
		</>
	);
};

export default PostPage;
