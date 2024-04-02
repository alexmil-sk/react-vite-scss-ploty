import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import { Burger } from "../Burger/Burger.jsx";

function Layout() {


	
	return (
		<div className="content">
			<Sidebar />
			<Burger />
			<Header />
			<Outlet />
		</div>
	);
}

export { Layout };
