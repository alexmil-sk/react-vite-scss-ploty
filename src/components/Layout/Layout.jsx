import { useState, useEffect } from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import { Burger } from "../Burger/Burger.jsx";
import { useWindowSize } from "react-use";
import { AnimatePresence } from "framer-motion";

function Layout() {
	const [isOpenBurger, setIsOpenBurger] = useState(false);
	const [isDisabledBtnBurger, setIsDisabledBtnBurger] = useState(true);
	const { width } = useWindowSize();

	useEffect(() => {
		if (width < 1470) {
			setIsDisabledBtnBurger(false);
		} else {
			setIsDisabledBtnBurger(true);
			setIsOpenBurger(false);
		}
	}, [width]);

	return (
		<div className="content">
			<Sidebar isOpenBurger={isOpenBurger} setIsOpenBurger={setIsOpenBurger} isDisabledBtnBurger={isDisabledBtnBurger} />
			<AnimatePresence >
				{isOpenBurger && <Burger setIsOpenBurger={setIsOpenBurger} />}
			</AnimatePresence>
			<Header />
			<Outlet />
		</div>
	);
}

export { Layout };
