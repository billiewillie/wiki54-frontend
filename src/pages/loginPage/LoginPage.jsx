import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../store/userSlice';
import { useEffect } from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const fromPage = location.state?.from?.pathname || '/';
	const status = useSelector((state) => state.user.status);

	const formHandler = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		dispatch(logIn({ email, password }));
	};

	useEffect(() => {
		if (status === 'resolved') {
			navigate(fromPage, { replace: true });
		}
	}, [status]);

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
