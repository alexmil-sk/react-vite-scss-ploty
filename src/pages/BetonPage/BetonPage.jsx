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

const plotItems = [
	{
		title: "Bridlica",
		desc: "Bridlica, je usadená hornina, ktorá vznikla pri spevnením ílovitých sedimentov.",
		image: bridlica,
	},
	{
		title: "Drevo",
		desc: "Imitácia dreva je určený dizajn  pre náročných klientov.",
		image: drevo,
	},
	{
		title: "Kameň",
		desc: "Betónový plot so vzhľadom kamenného obkladu",
		image: kamen,
	},
	{
		title: "Lam. Kameň",
		desc: "Betónový panel so vzorom štiepaného kameňa.",
		image: lamany_kamen,
	},
	{
		title: "Skala",
		desc: "Betónová doska so vzorom štiepaného kameňa vyzerá ako plot zo kusov skaly.",
		image: skala,
	},
	{
		title: "Tehla",
		desc: "Betónová doska s imitáciou tehly.",
		image: tehla,
	},
	{
		title: "Vlna",
		desc: "Betónová doska so vzorom Vlna",
		image: vlna,
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
