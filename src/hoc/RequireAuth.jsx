import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
	let navigate = useNavigate();
	const user = useSelector((state) => state.user.user);

	// useEffect(() => {
	// 	if (Object.keys(user).length === 0) {
	// 		return navigate('/login');
	// 	}
	// }, []);

	console.log(user);

	return children;
};

export default RequireAuth;
