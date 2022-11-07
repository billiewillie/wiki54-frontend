import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div>
			This page doesnt exists. Go to <Link to='/'>home page</Link>
		</div>
	);
};

export default NotFoundPage;
