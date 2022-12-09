import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../store/userSlice';
import { useEffect } from 'react';

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
		<div className='LoginPage'>
			<h1>Данные для входа</h1>
			<form action='' onSubmit={formHandler}>
				<div className='form-row'>
					<label htmlFor='form-email'>email</label>
					<input id='form-email' type='email' name='email' />
				</div>
				<div className='form-row'>
					<label htmlFor='form-password'>пароль</label>
					<input id='form-password' name='password' type='password' />
				</div>
				<div className='form-row'>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
