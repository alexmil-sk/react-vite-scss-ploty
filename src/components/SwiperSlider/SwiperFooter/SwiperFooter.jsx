import './SwiperFooter.scss';


const footer_info = [
	{title: 'Token ID', value: 'AUXPO#66156'},
	{title: 'Creator', value: 'Enzo Tribiani'},
	{title: 'Base Price', value: '46 ETH'},
	{title: 'Limit', value: '5 per wallet'},
	{title: 'Mint Date', value: '5th March 2022'},
];

// eslint-disable-next-line react/prop-types
function SwiperFooter ({page}) {
	return (
		<div className="swiper-footer">
			<div className="footer-info">
				<p className="footer-info__author">Maria Roman
					Generative</p>
				{footer_info.map((i) => (
					<p
						className="footer-info__item"
						key={i.title}
					>
						{i.title}
						<span>{i.value}</span>
					</p>
				))}
			</div>
			<div className="footer-cover">
				{/* eslint-disable-next-line react/prop-types */}
				<img src={page.footerCover} alt="footerCover"/>
			</div>
		</div>
	);
}

export {SwiperFooter};

