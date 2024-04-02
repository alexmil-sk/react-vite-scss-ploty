import "./BuyPage.scss";
import buy_collage from "../../assets/images/ploty/buy/buy-collage.jpg";
import { motion } from "framer-motion";
import { motionContactsVariant } from "../../framer-motion/motionVariants";

function BuyPage() {

	return (
		<motion.div className="Buy" initial={"hidden"} animate={"visible"} variants={motionContactsVariant}>
			<div className="content__row">
				<div className="content__image">
					<img src={buy_collage} alt="buy_collage" />
				</div>
			</div>
		</motion.div>
	);
}

export { BuyPage };
