import './Header.scss';
import logo from '../../assets/images/logo/logo.jpg';
import wallet from '../../assets/images/svg/wallet.svg';
import {CustomLink} from '../UI/CustomLink/CustomLink.jsx';

function Header () {
	return (
		<div className="Header">
			<a href="#" className="logo">
				<img src={logo} alt="logo" />
			</a>
			<nav>
				<ul className="menu">
					<li className="menu__item">
						<CustomLink to="/" classList="menu__item_link">
							Home
						</CustomLink>
					</li>
					<li className="menu__item">
						<CustomLink to="/gallery" classList="menu__item_link">
							Galéria
						</CustomLink>
					</li>
					<li className="menu__item">
						<CustomLink to="/beton" classList="menu__item_link">
							Betónové
						</CustomLink>
					</li>
					<li className="menu__item">
						<CustomLink to="/brick" classList="menu__item_link">
							Murované
						</CustomLink>
					</li>
					<li className="menu__item">
						<CustomLink to="/contacts" classList="menu__item_link">
							Kontaktujte Nás
						</CustomLink>
					</li>
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
