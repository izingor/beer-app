import Logo from '../../../assets/images/logo.png';
import { NavigationLinks } from './NavigationLinks';


export const Nav = () => {
	const navLinkClass =
		'hover:cursor-pointer hover:text-yellow_hover active:text-yellow_active text-yellow';

	return (
		<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
			<div className="flex-shrink-0 flex items-center ">
				<img className="block  h-20 w-auto" src={Logo} alt="Logo" />
			</div>
			<div className="hidden  sm:ml-6 sm:flex justify-center items-center ">
				<div className="flex space-x-4">
					<NavigationLinks navLinkClass={navLinkClass} />
				</div>
			</div>
		</div>
	);
};
