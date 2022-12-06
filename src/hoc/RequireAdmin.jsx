import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const RequireAuth = ({ children }) => {
	let navigate = useNavigate();
	const user = useSelector((state) => state.user.user);

	console.log(user);

	useEffect(() => {
		if (Object.keys(user).length === 0 || user.isAdmin === false) {
			return navigate('/login');
		}
	}, []);

	return children;
};

export default RequireAuth;
