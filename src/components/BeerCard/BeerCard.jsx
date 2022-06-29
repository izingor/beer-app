export const BeerCard = ({ beer, actionBtn, backBtn }) => {
	const { name, image_url, description, tagline } = beer
	const backgroundImage = { backgroundImage: `url(${image_url})` }

	return (
		<div
			className='card break-inside-avoid  mb-4  border border-gray-400 rounded-lg   bg-no-repeat bg-right-bottom bg-[length:50px_125px] bg-origin-content p-3 '
			style={backgroundImage}
		>
			<div className='m-4 w-3/4 '>
				<h2 className='text-lg mb-2'>{name}</h2>
				<p className='font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200'>
					{description}
				</p>
				<div className='flex flex-col mt-3'>
					<p className='font-light font-mono text-xs text-gray-500 hover:text-gray-900 transition-all duration-200'>
						{tagline}
					</p>
				</div>
				<div className='flex  mt-10 w-full '>
					{actionBtn}
					{backBtn}
				</div>
			</div>
		</div>
	)
}
