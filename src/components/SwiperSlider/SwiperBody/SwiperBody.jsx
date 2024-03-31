import './SwiperBody.scss';
import {CiBoxList as List} from 'react-icons/ci';
import {Link} from 'react-router-dom';

function SwiperBody () {
	return (
		<div className="swiper-body">
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
				<Link to="/contacts" className="btn buy">
					Buy Now
				</Link>
				<Link to="/gallery" className="btn catalog">
					<List className="list" />
					<span>Galéria</span>
				</Link>
			</div>
		</div>
	);
}

export {SwiperBody};
