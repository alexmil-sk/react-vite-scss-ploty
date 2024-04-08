import "./MinePage.scss";
//import { Card } from "../../components/Card/Card";
//import { motion } from "framer-motion";
//import { motionBetonVariant } from "../../framer-motion/motionVariants";
import { UnderConstruction } from "../../pages/UnderConstruction/UnderConstruction";

// const mineItems = [
// 	{
// 		title: "Bridlica",
// 		desc: "Bridlica, lorem, ipsum dolor sit amet consectetur adipisicing elit. A, neque!",
// 		image: "",
// 	}];

function MinePage() {
	return (
		<div>
			<UnderConstruction />
		</div>

		// <motion.div className="Mine" initial={"hidden"} animate={"visible"} variants={motionBetonVariant}>
		// 	<div className="mine__row">
		// 		<div className="mine__elements">
		// 			<div className="mine__elements_row">
		// 				{mineItems.map((item) => (
		// 					<Card key={item.title} item={item} />
		// 				))}
		// 			</div>
		// 		</div>
		// 	</div>
		// </motion.div>
	);
}

export { MinePage };
