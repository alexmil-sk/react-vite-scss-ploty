import { NavLink } from "react-router-dom";
import wallet from "../../assets/images/svg/wallet.svg";
import { routes } from "../../router/index";

import "./Burger.scss";

function Burger() {
	return (
		<div className="Burger">
			<nav>
				<ul className="menu">
					{routes.map((route) => (
						<li className="menu__item" key={route.title}>
							<NavLink to={route.path} className={({ isActive }) => (isActive ? "active" : "")}>
								{route.title}
							</NavLink>
						</li>
					))}
					<li className="menu__item">
						<NavLink to="/buy" className="menu__item_link">
							<img src={wallet} alt="wallet" />
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export { Burger };
