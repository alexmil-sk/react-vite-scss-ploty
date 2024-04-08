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
		desc: "Bridlica, lorem, ipsum dolor sit amet consectetur adipisicing elit. A, neque!",
		image: bridlica,
	},
	{
		title: "Drevo",
		desc: "Drevo, lorem, ipsum dolor sit amet consectetur adipisicing elit. A, neque!",
		image: drevo,
	},
	{
		title: "Kameň",
		desc: "Kameň, lorem, ipsum dolor sit amet consectetur adipisicing elit. A, neque!",
		image: kamen,
	},
	{
		title: "Lam. Kameň",
		desc: "Lam. Kameň, lorem, ipsum dolor sit amet consectetur adipisicing elit. A, neque!",
		image: lamany_kamen,
	},
	{
		title: "Skala",
		desc: "Skala, lorem, ipsum dolor sit amet consectetur adipisicing elit. A, neque!",
		image: skala,
	},
	{
		title: "Tehla",
		desc: "Tehla, lorem, ipsum dolor sit amet consectetur adipisicing elit. A, neque!",
		image: tehla,
	},
	{
		title: "Vlna",
		desc: "Vlna, lorem, ipsum dolor sit amet consectetur adipisicing elit. A, neque!",
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
