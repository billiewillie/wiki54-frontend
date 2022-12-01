import Search from '../search/Search';
import styles from './Header.module.css';
import Logo from '../logo/Logo';

const Header = () => {
	const logoutHandler = () => {};

	return (
		<header className={styles.header}>
			<Logo />
			<Search />
			<div className='header-tools' onClick={logoutHandler}>
				Log out
			</div>
		</header>
	);
};

export default Header;
