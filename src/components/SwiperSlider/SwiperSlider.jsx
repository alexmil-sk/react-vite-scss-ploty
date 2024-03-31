import footerCover_1 from '../../assets/images/footer/footer-cover-1.jpg';
import footerCover_2 from '../../assets/images/footer/footer-cover-2.jpg';
import footerCover_3 from '../../assets/images/footer/footer-cover-3.jpg';
import ploty_1 from '../../assets/images/ploty/ploty-1.webp'
import ploty_2 from '../../assets/images/ploty/ploty-2.jpeg';
import ploty_3 from '../../assets/images/ploty/ploty-3.jpg';
import {SwiperBody} from './SwiperBody/SwiperBody.jsx';
import { SwiperFooter } from './SwiperFooter/SwiperFooter.jsx';


import {Swiper, SwiperSlide} from 'swiper/react';

//import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import './SwiperSlider.scss'

import {Pagination, EffectFade} from 'swiper/modules';

const page_thumb = [
	{
		count: '1',
		name: 'Julius Caesar',
		price: '221',
		footerCover: footerCover_1,
		image: ploty_1,
	},
	{
		count: '2',
		name: 'Into the Abyss',
		price: '157',
		footerCover: footerCover_2,
		image: ploty_2,
	},
	{
		count: '3',
		name: 'Discobolus',
		price: '95',
		footerCover: footerCover_3,
		image: ploty_3
	},
];





function SwiperSlider () {

const swiper_params = {
	modules: [Pagination, EffectFade],
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1500,
	effect: 'fade',
	fadeEffect: {crossFade: true},
	direction: 'vertical',
	pagination: {
		clickable: true,
		renderBullet: function (index, className) {
			return `<p class=${className}>#0${page_thumb[ index ].count}
						<span class="pagination-art"> ${page_thumb[ index ].name}</span>
						<span class="pagination-price"><span>${page_thumb[ index ].price}</span>&nbsp;ETH</span>
						<img class="pagination-image" src=${page_thumb[ index ].footerCover} alt={page_thumb[ index ].footerCover} />
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
						<img src={page_thumb[idx].image} alt="page_thumb[idx].image"/>

						<SwiperBody />

						<SwiperFooter page={page}/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export {SwiperSlider};