import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../../store/userSlice';
import axios from '../../axios';

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const fromPage = location.state?.from?.pathname || '/';

	const formHandler = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		const { data } = await axios.post(`/users/login`, {
			email,
			password,
		});
		dispatch(getUser(data));
		navigate(fromPage, { replace: true });
	};

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
