import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	const departments = [
		{
			title: 'studia54',
			link: '/studia54',
		},
		{
			title: 'architecture',
			link: '/architecture',
		},
	];

	return (
		<aside className={styles.aside}>
			<nav className='sidebar-menu'>
				<ul className={styles.list}>
					{departments.map((item) => (
						<li className={styles.listItem} key={item.title}>
							<NavLink to={item.link}>{item.title}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
