import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchPosts } from '../../store/postSlice';

import { logIn } from '../../store/userSlice';
import styles from './LoginPage.module.css';

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const fromPage = location.state?.from?.pathname || '/';
	const status = useSelector((state) => state.user.status);
	const user = useSelector((state) => state.user.user);

	const formHandler = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		await dispatch(logIn({ email, password }));
	};

	useEffect(() => {
		if (user._id) {
			dispatch(fetchPosts(user._id));
			navigate(fromPage, { replace: true });
		}
	}, [user]);

	return (
		<div className={styles.LoginPage}>
			<h1>Данные для входа</h1>
			<form action='' onSubmit={formHandler}>
				<div className='form-row'>
					<input id='form-email' type='email' name='email' placeholder='Email' />
				</div>
				<div className='form-row'>
					<input id='form-password' name='password' type='password' placeholder='Password' />
				</div>
				<div className='form-row'>
					<button type='submit'>Log In</button>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
