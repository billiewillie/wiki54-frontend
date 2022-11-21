import Search from '../search/Search';
import styles from './Header.module.css';
import Logo from '../logo/Logo';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Search />
			<div className='header-tools'>account info</div>
		</header>
	);
};

export default Header;
