import './Header.scss';
import logo from '../../assets/images/logo/logo.jpg';
import wallet from '../../assets/images/svg/wallet.svg';
import { CustomLink } from '../UI/CustomLink/CustomLink.jsx';
import { routes } from "../../router/index";

function Header () {
	return (
		<div className="Header">
			<a href="#" className="logo">
				<img src={logo} alt="logo" />
			</a>
			<nav>
				<ul className="menu">
					{routes.map((route) => (
						<li className="menu__item" key={route.title}>
							<CustomLink to={route.path} classList="menu__item_link">
								{route.title}
							</CustomLink>
						</li>
					))}
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

export {Header};
