import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo/logo.jpg";
import wallet from "../../assets/images/svg/wallet.svg";
import { CustomLink } from "../UI/CustomLink/CustomLink.jsx";
import { routes } from "../../router/index";

function Header() {
	return (
		<div className="Header">
			<Link href="/" className="logo">
				<img src={logo} alt="logo" />
			</Link>
			<nav>
				<ul className="menu">
					{routes.map((route) => {
						const { title, path } = route;
						return (<li className="menu__item" key={title}>
							<CustomLink to={path} classList="menu__item_link">
								{title}
							</CustomLink>
						</li>);
					})}
					<li className="menu__item">
						<CustomLink to="/buy" classList="menu__item_link">
							<img src={wallet} alt="wallet" />
						</CustomLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export { Header };
