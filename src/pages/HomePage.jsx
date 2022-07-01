import Lottie from 'lottie-react'
import HomePageAnimation from '../assets/lottie-animations/homepage.json'

export const HomePage = () => {
	return (
		<div className='w-full h-full container grid grid-cols-4 grid-rows-3 sm:grid-rows-3  sm:grid-cols-6 gap-4 font-mono'>
			<div className='ml-5 mt-5 col-start-1 col-end-5 row-start-1 row-end-2 sm:row-start-1 sm:row-end-2 flex flex-col items-start justify-center z-10'>
				<h1 className='font-bold text-3xl mb-2 text-theme'>Welcome to Beery</h1>
				<h3 className='mb-4'>Home place of your future favorite beer</h3>
			</div>
			<div className='col-start-1 col-end-5 row-start-1 row-end-5  sm:col-start-2 sm:col-end-6 sm:row-start-1 sm:row-end-4  flex flex-col items-start justify-center'>
				<Lottie animationData={HomePageAnimation} loop={true} />
			</div>
		</div>
	)
}
