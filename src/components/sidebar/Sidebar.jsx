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
						<li className={styles.listItem} key={item}>
							<NavLink to={`/${item}`}>{item}</NavLink>
						</li>
					))}
					<a href='skype:live:.cid.2dc3482c3a972332?chat' style={{ color: 'white' }}>
						user's skype
					</a>
					{user?.isMapOpened && (
						<li className={styles.listItem}>
							<NavLink to='/mapOffice'>Карта офиса</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
