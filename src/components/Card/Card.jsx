import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

function Card({ item }) {
	return (
		<div className={styles.item__container}>
			<div className={styles.item}>
				<div className={styles.item__img}>
					<img src={item.image} alt={item.image} />
				</div>
				<div className={styles.item__content}>
					<h2>{item.title.toUpperCase()}</h2>
					<p>{item.desc}</p>
				</div>
				<div className={styles.item__btn}>
					<div>
						<p>
							Rozmer:&nbsp;<span>{item.rozmer}</span>
						</p>
						<p>
							Cena:&nbsp;<span>{item.cena}</span>
						</p>
					</div>
					<Link to="/contacts">
						<button>Objednať</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export { Card };
