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
		footerCover: footerCover_lamany_kamen,
		image: ploty_lam_kamen,
	},
	{
		count: "2",
		name: '"Tehla"',
		footerCover: footerCover_tehla,
		image: ploty_tehla,
	},
	{
		count: "3",
		name: '"Bridlica"',
		footerCover: footerCover_bridlica,
		image: ploty_bridlica,
	},
	{
		count: "4",
		name: '"Zmesany"',
		footerCover: footerCover_drevo,
		image: ploty_zmesany,
	},
	{
		count: "5",
		name: '"Vlna"',
		footerCover: footerCover_vlna,
		image: ploty_vlna,
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
				{page_thumb.map((page, idx) => (
					<SwiperSlide key={page.count}>
						<motion.img
							src={page_thumb[idx].image}
							alt="page_thumb[idx].image"
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
