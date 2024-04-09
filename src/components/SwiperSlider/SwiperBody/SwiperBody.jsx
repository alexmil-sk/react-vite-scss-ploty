import "./SwiperBody.scss";
// import { CiBoxList as List } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionHomeSliderBodyVariant } from "../../../framer-motion/motionVariants";

function SwiperBody() {
	return (
		<motion.div className="swiper-body" initial={"hidden"} animate={"visible"} variants={motionHomeSliderBodyVariant}>
			<h2 className="swiper-body__title">
				<span>Betónové ploty</span>
			</h2>
			<p className="swiper-body__desc">
				Teraz vám ponúkame použitie týchto a
				<br />
				mnohých ďalších modelov.
			</p>
			<div className="swiper-body__buttons">
				<Link to="/buy" className="btn buy">
					Kúpiť teraz
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
