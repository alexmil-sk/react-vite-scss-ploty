//hamburger-react.netlify.app/-burger
import { NavLink } from "react-router-dom";
import wallet from "../../assets/images/svg/wallet.svg";
import { routes } from "../../router/index";
import "./Burger.scss";
import { motion } from "framer-motion";
import { motionBurgerMenuVariant, motionBurgerItemVariant } from "../../framer-motion/motionVariants";

function Burger({ setIsOpenBurger }) {
	return (
		<motion.nav
			className="Burger"
			key="burger"
			initial={"hidden"}
			animate={"visible"}
			exit={"exit"}
			variants={motionBurgerMenuVariant}
		>
			<ul className="menu">
				{routes.map((route, idx) => {
					const { title, path } = route;

					return (
						<motion.li
							onClick={() => setIsOpenBurger(false)}
							className="menu__item"
							key={title}
							whileTap={"whileTap"}
							whileHover={"whileHover"}
							initial={"hidden"}
							animate={"visible"}
							exit={{ opacity: 0, transition: { delay: 0.05 * idx } }}
							transition={{ duration: 1, type: "spring", stiffness: 260, damping: 20, delay: 0.2 * idx }}
							variants={motionBurgerItemVariant}
						>
							<NavLink to={path} className={({ isActive }) => (isActive ? "active" : "")}>
								{title}
							</NavLink>
						</motion.li>
					);
				})}
				<motion.li
					onClick={() => setIsOpenBurger(false)}
					className="menu__item"
					key="buy"
					whileTap={"whileTap"}
					whileHover={"whileHover"}
					initial={"hidden"}
					animate={"visible"}
					exit={{ opacity: 0, transition: { delay: 0.05 * 7 } }}
					transition={{ duration: 1, type: "spring", stiffness: 260, damping: 20, delay: 0.2 * 4 }}
					variants={motionBurgerItemVariant}
				>
					<NavLink to="/buy" className="menu__item_link">
						<img src={wallet} alt="wallet" />
					</NavLink>
				</motion.li>
			</ul>
		</motion.nav>
	);
}

export { Burger };
