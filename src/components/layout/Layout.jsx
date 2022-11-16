import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import styles from './Layout.module.css';

const Layout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Sidebar />
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
