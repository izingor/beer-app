import Lottie from 'lottie-react';
import LoadingSpinnerAnimation from '../../assets/lottie-animations/loading.spinner.json';
export const LoadingSpinner = () => {
	return (
		<div className="p-0 m-0 text-center justify-center items-center w-16 h-16">
			<Lottie animationData={LoadingSpinnerAnimation} loop={true} />
		</div>
	);
};
