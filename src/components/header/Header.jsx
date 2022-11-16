import Search from '../search/Search';
import styles from './Header.module.css';
import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className={styles.header}>
			<NavLink className={styles.logo} to='/'>
				<img src={Logo} alt='logo' height={34} />
			</NavLink>
			<Search />
			<div>account info</div>
		</header>
	);
};

export default Header;
