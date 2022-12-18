import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import styles from './Layout.module.css';

const Layout = () => {
	let location = useLocation();

	return (
		<div className={styles.wrapper}>
			<Header />
			<Sidebar />
			<main className={location.pathname === '/mapOffice' ? styles.mainMap : styles.main}>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
