import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logOut } from '../../store/userSlice';
import Search from '../search/Search';
import styles from './Header.module.css';
import Logo from '../logo/Logo';

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
