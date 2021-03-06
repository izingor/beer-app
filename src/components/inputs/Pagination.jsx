export const Pagination = ({
	onNextClicked,
	onPrevClicked,
	page = 1,
	isNextBlocked,
	isBackBlocked,
}) => {
	
	return (
		<nav className='w-full flex justify-end my-3'>
			<ul className='inline-flex items-center -space-x-px '>
				<li
					style={{ cursor: isBackBlocked && 'not-allowed' }}
					onClick={onPrevClicked}
					className='hover:bg-gray_hover hover:cursor-pointer'
				>
					<p className='block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border hover:bg-gray_hover '>
						<span className='sr-only'>Previous</span>
						<svg
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
								clipRule='evenodd'
							></path>
						</svg>
					</p>
				</li>
				<li>
					<p className='py-2 px-3 leading-tight text-gray-500 bg-white border hover:bg-gray_hover '>
						{page}
					</p>
				</li>
				<li
					style={{ cursor: isNextBlocked && 'not-allowed' }}
					onClick={onNextClicked}
					className='hover:bg-gray_hover hover:cursor-pointer'
				>
					<p className='block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border hover:bg-gray_hover '>
						<span className='sr-only'>Next</span>
						<svg
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
								clipRule='evenodd'
							></path>
						</svg>
					</p>
				</li>
			</ul>
		</nav>
	)
}
