const LoginPage = () => {
	return (
		<div className='LoginPage'>
			<h1>Данные для входа</h1>
			<form action=''>
				<div className='form-row'>
					<label htmlFor='form-email'>email</label>
					<input id='form-email' type='email' />
				</div>
				<div className='form-row'>
					<label htmlFor='form-password'>пароль</label>
					<input id='form-password' type='password' />
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
