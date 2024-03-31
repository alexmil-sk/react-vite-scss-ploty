import './Layout.scss';
import {Outlet} from 'react-router-dom';
import {Header} from '../Header/Header.jsx';
import {Sidebar} from '../Sidebar/Sidebar.jsx';


function Layout () {
	return (
		<div className="content">
			<Sidebar/>
			<Header/>
			<Outlet/>
		</div>
	);
}

export {Layout};

