import "./SwiperFooter.scss";
import { motion } from "framer-motion";
import { swiperFooterVariant } from "../../../framer-motion/motionVariants";

// const footer_info = [
// 	{ title: "Token ID", value: "AUXPO#66156" },
// 	{ title: "Creator", value: "Enzo Tribiani" },
// 	{ title: "Base Price", value: "46 ETH" },
// 	{ title: "Limit", value: "5 per wallet" },
// 	{ title: "Mint Date", value: "5th March 2022" },
// ];

// function SwiperFooter({ footerTitle, footerVideo, footerCover, ...page }) {
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
				{/* <p className="footer-info__author">{footerTitle}</p> */}
				{footerVideo.map((video, idx) => (
					<p className="footer-info__video" key={idx}>
						<iframe src={video}></iframe>
					</p>
				))}
			</div>
			<div className="footer-cover">
				<img src={footerCover} alt="footerCover" />
			</div>
		</motion.div>
	);
}

export { SwiperFooter };
