// import { LoadingSpinner } from '../components/misc/LoadingSpinner';
import { BeerCard } from '../components/BeerCard/BeerCard';
export const BeersPage = () => {
	// const { beers } = useSelector(beersState);
    console.log('rendered')
	return (
		<div className="container flex flex-col py-4 h-full items-center justify-center ">
			{/* {news ? ( */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
				<BeerCard />
			</div>
			{/* ) : ( */}
			{/* <LoadingSpinner /> */}
			{/* )} */}
		</div>
	);
};
