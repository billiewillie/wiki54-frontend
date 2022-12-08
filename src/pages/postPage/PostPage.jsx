import { Link, useParams } from 'react-router-dom';
import Parser from 'html-react-parser';
import { useSelector } from 'react-redux';

const PostPage = () => {
	const { department, id } = useParams();
	const user = useSelector((state) => state.user.user);
	const [post] = useSelector((state) => state.posts.posts.filter((post) => post._id === id));

	console.log(post);

	return (
		<>
			{post && (
				<div className='post'>
					<h2>{post.title}</h2>
					<div>{Parser(post.body)}</div>
					{user.isAdmin && <Link to={`/${department}/${id}/edit`}>Редактировать пост</Link>}
				</div>
			)}
		</>
	);
};

export default PostPage;
