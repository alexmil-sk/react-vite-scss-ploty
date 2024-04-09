import "./SwiperFooter.scss";
import { motion } from "framer-motion";
import { swiperFooterVariant } from "../../../framer-motion/motionVariants";

function SwiperFooter({ page }) {
	const { footerVideo, footerCover } = page;

	return (
		<motion.div
			className="swiper-footer"
			initial={"hidden"}
			animate={"visible"}
			exit={"exit"}
			variants={swiperFooterVariant}
		>
			<div className="footer-info">
				<div className="footer-info__row">
					{footerVideo.map((video, idx) => (
						<p className="footer-info__video" key={idx}>
							<iframe src={video}></iframe>
						</p>
					))}
				</div>
			</div>
			<div className="footer-cover">
				<img src={footerCover} alt="footerCover" />
			</div>
		</motion.div>
	);
}

export { SwiperFooter };
