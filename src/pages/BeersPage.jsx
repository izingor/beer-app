// import { LoadingSpinner } from '../components/misc/LoadingSpinner';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BeerCard } from '../components/BeerCard/BeerCard'
import { beerState, getBeers } from '../store/slices/beers.store'
import { LoadingSpinner } from '../components/misc/LoadingSpinner'

export const BeersPage = () => {
	const dispatch = useDispatch()
	const { beers } = useSelector(beerState)

	useEffect(() => {
		dispatch(getBeers())
	}, [])

	// const { beers } = useSelector(beersState);
	console.log(beers)
	return (
		<div className='container'>
			{beers ? (
				<div className='py-10 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
					{beers.map((beer) => (
						<BeerCard beer={beer} key={beer.image_url}/>
					))}
				</div>
			) : (
				<LoadingSpinner />
			)}
		</div>
	)
}
