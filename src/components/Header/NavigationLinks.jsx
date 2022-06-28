import { NavLink } from 'react-router-dom';

export const NavigationLinks = ({ navLinkClass, handleClick = null }) => {
	return (
		<>
			<NavLink onClick={handleClick} exact to="/" className={navLinkClass}>
				Home
			</NavLink>
			<NavLink onClick={handleClick} to="/beers" className={navLinkClass}>
				Beers
			</NavLink>
			<NavLink onClick={handleClick} to="/favorites" className={navLinkClass}>
				Favorites
			</NavLink>
		</>
	);
};
