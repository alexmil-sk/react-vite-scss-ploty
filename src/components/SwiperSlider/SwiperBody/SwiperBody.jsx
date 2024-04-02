import "./SwiperBody.scss";
// import { CiBoxList as List } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionHomeSliderBodyVariant } from "../../../framer-motion/motionVariants";

function SwiperBody() {
	return (
		<motion.div className="swiper-body" initial={"hidden"} animate={"visible"} variants={motionHomeSliderBodyVariant}>
			<h2 className="swiper-body__title">
				Win <span>3D printed</span>
				<br />
				miniature model
			</h2>
			<p className="swiper-body__desc">
				Bid now to avail these models and many
				<br />
				other rewards on exclusive pieces.
			</p>
			<div className="swiper-body__buttons">
				<Link to="/buy" className="btn buy">
					Buy Now
				</Link>
				<Link to="/contacts" className="btn catalog">
					{/* <List className="list" /> */}
					<span>Poslat List</span>
				</Link>
			</div>
		</motion.div>
	);
}

export { SwiperBody };
