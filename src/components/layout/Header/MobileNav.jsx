import { NavigationLinks } from './NavigationLinks'

export const MobileNav = ({ onMobileMenuClicked }) => {
	const navLinkClass =
		' text-yellow transition duration-150 ease-out hover:ease-in hover:bg-theme_hover hover:text-white block px-3 py-2 rounded-md text-base font-medium'

	return (
		<div className='sm:hidden' id='mobile-menu'>
			<div className='px-2 pt-2 pb-3 space-y-1'>
				<NavigationLinks
					navLinkClass={navLinkClass}
					handleClick={onMobileMenuClicked}
				/>
			</div>
		</div>
	)
}
