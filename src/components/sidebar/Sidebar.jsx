import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside>
			<nav className='sidebar-menu'>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/posts'>Posts</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
