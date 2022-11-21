import LogoIcon from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
	return (
		<div className='logo'>
			<NavLink className={styles.logo} to='/'>
				<img src={LogoIcon} alt='logo' height={34} />
			</NavLink>
		</div>
	);
}

export default Logo;
