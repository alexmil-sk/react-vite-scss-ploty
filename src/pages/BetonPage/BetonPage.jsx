//import { Link } from 'react-router-dom';
import "./BetonPage.scss";
import { Card } from "../../components/Card/Card";
import { motion } from "framer-motion";
import { motionBetonVariant } from "../../framer-motion/motionVariants";
import lamany_kamen from "../../assets/images/ploty/dosky/lamany-kamen.jpg";
import kamen from "../../assets/images/ploty/dosky/kamen.jpg";
import tehla from "../../assets/images/ploty/dosky/tehla.jpg";
import bridlica from "../../assets/images/ploty/dosky/bridlica.jpg";
import drevo from "../../assets/images/ploty/dosky/drevo.jpg";
import skala from "../../assets/images/ploty/dosky/skala.jpg";
import vlna from "../../assets/images/ploty/dosky/vlna.jpg";
import stlp from "../../assets/images/ploty/stlp/stlp.jpg";

const plotItems = [
	{
		title: "Bridlica",
		desc: "Bridlica, je usadená hornina, ktorá vznikla pri spevnením ílovitých sedimentov.",
		rozmer: "0.5m * 2.0 m",
		cena: "13 eur/kus",
		image: bridlica,
	},
	{
		title: "Drevo",
		desc: "Imitácia dreva je určený dizajn  pre náročných klientov.",
		rozmer: "0.5m * 2.0 m",
		cena: "13 eur/kus",
		image: drevo,
	},
	{
		title: "Kameň",
		desc: "Betónový plot so vzhľadom kamenného obkladu",
		rozmer: "0.5m * 2.0 m",
		cena: "13 eur/kus",
		image: kamen,
	},
	{
		title: "Lam. Kameň",
		desc: "Betónový panel so vzorom štiepaného kameňa.",
		rozmer: "0.5m * 2.0 m",
		cena: "13 eur/kus",
		image: lamany_kamen,
	},
	{
		title: "Skala",
		desc: "Betónová doska so vzorom štiepaného kameňa vyzerá ako plot zo kusov skaly.",
		rozmer: "0.5m * 2.0 m",
		cena: "13 eur/kus",
		image: skala,
	},
	{
		title: "Tehla",
		desc: "Betónová doska s imitáciou tehly.",
		rozmer: "0.5m * 2.0 m",
		cena: "13 eur/kus",
		image: tehla,
	},
	{
		title: "Vlna",
		desc: "Betónová doska so vzorom Vlna",
		rozmer: "0.5m * 2.0 m",
		cena: "13 eur/kus",
		image: vlna,
	},
	{
		title: "Stĺp",
		desc: "Betónový stĺp hladký",
		rozmer: "2.0 m",
		cena: "13 eur/kus",
		image: stlp,
	},
];

function BetonPage() {
	return (
		<motion.div className="Beton" initial={"hidden"} animate={"visible"} variants={motionBetonVariant}>
			<div className="beton__row">
				<div className="beton__elements">
					<div className="beton__elements_row">
						{plotItems.map((item) => (
							<Card key={item.title} item={ item} />
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export { BetonPage };
