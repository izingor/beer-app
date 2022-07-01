import Lottie from 'lottie-react'
import NotFoundAnimation from '../../assets/lottie-animations/not.found.json'

export const NotFoundMsg = () => {
	return (
		<div className='font-mono mt-40 flex flex-col text-center justify-center items-center w-full h-10'>
			<Lottie animationData={NotFoundAnimation} loop={true} />
			Didn't find any beers for you...
		</div>
	)
}
