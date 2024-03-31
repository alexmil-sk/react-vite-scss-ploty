import {Link, useMatch} from 'react-router-dom';
import './CustomLink.scss';

function CustomLink ({children, to, classList, ...props}) {

	const match = useMatch(to);
	return (
		<Link
			to={to}
			className={match ? [classList, 'active'].join(' ') : classList}
			{...props}
		>{children}
		</Link>
	);
}

export {CustomLink};
