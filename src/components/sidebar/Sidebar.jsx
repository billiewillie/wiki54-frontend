import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	const user = useSelector((state) => state.user.user);

	return (
		<aside className={styles.aside}>
			<nav className='sidebar-menu'>
				<ul className={styles.list}>
					{user.departments?.map((item) => (
						<li className={styles.listItem} key={item._id}>
							<Link to={`/${item.pathName}`}>{item.title}</Link>
						</li>
					))}
					{user?.isMapOpened && (
						<li className={styles.listItem}>
							<Link to='/mapOffice'>Карта офиса</Link>
						</li>
					)}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
