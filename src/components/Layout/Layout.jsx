import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import { motion } from "framer-motion";

function Layout() {
	const motionVariants = {
		hidden: {
			x: -2000,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<motion.div
			className="content"
			initial={'hidden'}
			animate={'visible'}
			transition={{
				delay: 0.5,
			}}
			variants = {motionVariants}
		>
			<Sidebar />
			<Header />
			<Outlet />
		</motion.div>
	);
}

export { Layout };
