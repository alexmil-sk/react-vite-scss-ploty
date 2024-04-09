import { Link } from 'react-router-dom';
import styles from "./Sidebar.module.scss";
import { Squash as Hamburger } from "hamburger-react";
import { BiMessageAdd } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";

const social = [
	{ title: "message", src: <BiMessageAdd />, path: "/contacts" },
	{ title: "cart", src: <BsCartPlus />, path: "/buy" },
];

function Sidebar({ isOpenBurger, setIsOpenBurger, isDisabledBtnBurger }) {
	return (
		<div className={styles.Sidebar}>
			<button type="button" className={styles.sidebar__button} disabled={isDisabledBtnBurger}>
				<Hamburger label="Show menu" size={35} style={{ width: "100%" }} toggled={isOpenBurger} toggle={setIsOpenBurger} />
			</button>

			<ul className={styles.list}>
				{social.map((i, idx) => (
					<li className={styles.list__item} key={idx}>
						<Link to={i.path} className={styles.list__item_link}>
							<p>{i.src}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export { Sidebar };
