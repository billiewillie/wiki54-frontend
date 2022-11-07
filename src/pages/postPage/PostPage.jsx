import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PostPage = () => {
	const [post, setPost] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => response.json())
			.then((json) => setPost(json));
	}, [id]);

	return (
		<div>
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
					<Link to={`/posts/${id}/edit`}>Edit this post</Link>
				</>
			)}
		</div>
	);
};

export default PostPage;
