import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
	return (
		<>
			<Header />
			<Sidebar />
			<main className='main'>
				<div className='container'>
					<Outlet />
				</div>
			</main>
		</>
	);
};

export default Layout;
