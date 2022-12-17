import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Logo from '../logo/Logo';
import Search from '../search/Search';
import styles from './Header.module.css';
import { logOut } from '../../store/userSlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const logoutHandler = () => {
		dispatch(logOut());
		navigate('/login');
	};

	return (
		<header className={styles.header}>
			<Logo />
			<Search />
			<div className={styles.Login} onClick={logoutHandler}>
				Log out
			</div>
		</header>
	);
};

export default Header;
