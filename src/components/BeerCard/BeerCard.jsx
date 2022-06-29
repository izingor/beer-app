import React from 'react'

export const BeerCard = ({ beer, onBeerDetailsClicked }) => {
	const { name, image_url, description, tagline } = beer
	const backgroundImage = { backgroundImage: `url(${image_url})` }

	return (
		<div
			className='card break-inside-avoid  mb-4 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:bg-gray_hover transition-all duration-200 bg-no-repeat bg-right-bottom bg-[length:50px_125px] bg-origin-content p-3 '
			style={backgroundImage}
			onClick={() => onBeerDetailsClicked(beer.id)}
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
			</div>
		</div>
	)
}
