import footerCover_lamany_kamen from "../../assets/images/ploty/dosky/lamany-kamen.jpg";
import footerCover_tehla from "../../assets/images/ploty/dosky/tehla.jpg";
import footerCover_bridlica from "../../assets/images/ploty/dosky/bridlica.jpg";
import footerCover_drevo from "../../assets/images/ploty/dosky/drevo.jpg";
import footerCover_vlna from "../../assets/images/ploty/dosky/vlna.jpg";
import ploty_lam_kamen from "../../assets/images/ploty/gallery/ploty-lam-kamen.jpg";
import ploty_bridlica from "../../assets/images/ploty/gallery/ploty-bridlica.jpg";
import ploty_tehla from "../../assets/images/ploty/gallery/ploty-tehla.jpeg";
import ploty_zmesany from "../../assets/images/ploty/gallery/ploty-zmiesany.jpg";
import ploty_vlna from "../../assets/images/ploty/gallery/ploty-vlna.jpg";
import { SwiperBody } from "./SwiperBody/SwiperBody.jsx";
import { SwiperFooter } from "./SwiperFooter/SwiperFooter.jsx";
import { motion } from "framer-motion";
import { motionHomeSliderPictureVariant } from "../../framer-motion/motionVariants";

import { Swiper, SwiperSlide } from "swiper/react";

//import 'swiper/css';
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import "./SwiperSlider.scss";

import { Pagination, EffectFade } from "swiper/modules";

const page_thumb = [
	{
		count: "1",
		name: '"Lam. Kameň"',
		image: ploty_lam_kamen,
		footerCover: footerCover_lamany_kamen,
		footerTitle: "Footer_Title_1",
		footerVideo: [
			"https://www.youtube.com/embed/CzI6p5sT25E?si=eC2AglAOjl0toMBZ",
			"https://www.youtube.com/embed/LqCgw0G9AVo?si=0PJbWkFTD73Q7Te4",
			"https://www.youtube.com/embed/eHwq8XwZjB4?si=xGkM7IKnvsP5jrL5",
			"https://www.youtube.com/embed/l2nAa8LlERc?si=QDo5Ex1tEFymFbaR",
			"https://www.youtube.com/embed/0_koLYDRtdM?si=lPlmyzOzievczuoy",
		],
	},
	{
		count: "2",
		name: '"Tehla"',
		image: ploty_tehla,
		footerCover: footerCover_tehla,
		footerTitle: "Footer_Title_2",
		footerVideo: [
			"https://www.youtube.com/embed/OuIrUwsT9x0?si=rALzwpfaXCbRMLsi",
			"https://www.youtube.com/embed/-OMTbWg538c?si=Dy3t2Mwf5W7mQsl3",
			"https://www.youtube.com/embed/Jezyffi-hLM?si=3oc8PR3xUL-BhAlA",
			"https://www.youtube.com/embed/QjdYvmhEMEA?si=4Lwb1WeMeXm3_V2b",
			"https://www.youtube.com/embed/90gEZndw1Gc?si=dkHBzLwilylL6g7o",
		],
	},
	{
		count: "3",
		name: '"Bridlica"',
		image: ploty_bridlica,
		footerCover: footerCover_bridlica,
		footerTitle: "Footer_Title_3",
		footerVideo: [
			"https://www.youtube.com/embed/FP0tJUjtbr8?si=cTc4zni0lgIyE9B8",
			"https://www.youtube.com/embed/o0K4YE0eqUQ?si=yZjMAKLf6WWfleXC",
			"https://www.youtube.com/embed/91aID4w9QB0?si=gUJce3Y0Pboqe2tc",
			"https://www.youtube.com/embed/5zTWNTtAw3M?si=4ZeSUwq2nd8i5Ob3",
			"https://www.youtube.com/embed/M_smQFle3sw?si=dYCdh1YqdlP5Lu1m",
		],
	},
	{
		count: "4",
		name: '"Zmesany"',
		image: ploty_zmesany,
		footerCover: footerCover_drevo,
		footerTitle: "Footer_Title_4",
		footerVideo: [
			"https://www.youtube.com/embed/kLG9rq8usHM?si=Ip8OLKDY0_hghQGv",
			"https://www.youtube.com/embed/wG0a4QfD1SU?si=HtHNYZ8wg4KRy8ye",
			"https://www.youtube.com/embed/-jHunrB947o?si=BciinBwDuhG0LvlE",
			"https://www.youtube.com/embed/ftNq3xRxoTU?si=4KLDLevoX8_SxjI5",
			"https://www.youtube.com/embed/MJAKU5Xgp3o?si=EJm5lLQYzSlU7aT2",
		],
	},
	{
		count: "5",
		name: '"Vlna"',
		image: ploty_vlna,
		footerCover: footerCover_vlna,
		footerTitle: "Footer_Title_5",
		footerVideo: [
			"https://www.youtube.com/embed/E1K_ezuo_ts?si=ppNF0M41b8DYPvq_",
			"https://www.youtube.com/embed/xQxv4d4Z7Co?si=xoS0rztIyMMCLcYB",
			"https://www.youtube.com/embed/oznd-vhys3Y?si=dhKv3_XlUYORHPiW",
			"https://www.youtube.com/embed/k7whFsjA6I4?si=SXuQaEbHLVq6mhZV",
			"https://www.youtube.com/embed/LTkJn9BqC0w?si=KnYVZp0e3BKfCO_h",
		],
	},
];

function SwiperSlider() {
	const swiper_params = {
		modules: [Pagination, EffectFade],
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 1500,
		effect: "fade",
		fadeEffect: { crossFade: true },
		direction: "vertical",
		pagination: {
			clickable: true,
			renderBullet: function (index, className) {
				return `<p	class=${className}>#0${page_thumb[index].count}
							<span class="pagination-art"> ${page_thumb[index].name}</span>
							<img class="pagination-image" src=${page_thumb[index].footerCover} alt={page_thumb[ index ].footerCover} />
						</p>`;
			},
		},
		loop: false,
	};

	return (
		<>
			<Swiper {...swiper_params} className="mySwiper">
				{page_thumb.map((page) => (
					<SwiperSlide key={page.count}>
						<motion.img
							src={page.image}
							alt="page.image"
							initial={"hidden"}
							animate={"visible"}
							variants={motionHomeSliderPictureVariant}
						/>
						<SwiperBody />
						<SwiperFooter page={page} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export { SwiperSlider };
