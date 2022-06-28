import { Nav } from './Nav';
import { Hamburger } from './Hamburger';
import { useState } from 'react';
import {MobileNav} from './MobileNav'
export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const onMobileMenuClicked = () => {
		console.log('clicked')
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};
	return (
		<section className="sticky  top-0 w-full bg-theme z-50 border-b-1 border-b-white font-mono">
			<nav className="bg-blue-600 container ">
				<div className="max-w-7xl mx-auto ">
					<div className="relative  flex items-center justify-between  h-20">
						<Hamburger onMobileMenuClicked={onMobileMenuClicked} />
						<Nav />
						{/* <UserBadge
						logoutUser={logoutUser}
						userId={user?.uid}
						isUserMenu={isUserMenu}
						userBadgeClicked={userBadgeClicked}
					/> */}
					</div>
				</div>
				{isMobileMenuOpen && <MobileNav onMobileMenuClicked={onMobileMenuClicked} />}
			</nav>
		</section>
	);
};
