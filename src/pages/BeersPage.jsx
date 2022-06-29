// import { LoadingSpinner } from '../components/misc/LoadingSpinner';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BeerCard } from '../components/BeerCard/BeerCard'
import {
	beerState,
	getBeers,
	addToFavorites,
} from '../store/slices/beers.store'
import { LoadingSpinner } from '../components/misc/LoadingSpinner'
import { Pagination } from '../components/misc/Pagination'
import { useQuery } from '../hooks/useQuery'
import { useHistory } from 'react-router-dom'
import { SearchInput } from '../components/misc/SearchInput'
import { NotFoundMsg } from '../components/misc/NotFoundMsg'
import { BeerDetailsModal } from '../components/modals/BeerDetailsModal'
import { SmallBtn } from '../components/buttons/SmallBtn'

export const BeersPage = () => {
	const history = useHistory()
	const query = useQuery()
	const dispatch = useDispatch()

	const { beers } = useSelector(beerState)
	const currQueryPage = query.get('page')
	const currQueryFood = query.get('food')

	const [page, setPage] = useState(!currQueryPage ? 1 : currQueryPage)
	const [food, setFood] = useState(!currQueryFood ? '' : currQueryFood)
	const [beerDetails, setBeerDetails] = useState(null)

	// const [abv, setAbv] = useState(!currQueryAbv ? null : currQueryAbv);
	// console.log('query', query.get('page'));
	// console.log('location', location.pathname);

	console.log(beers)

	useEffect(() => {
		if (currQueryPage !== page) history.push(`/beers?page=${page}`)
		if (food && currQueryFood !== food)
			history.push(`/beers?page=${page}&food=${food}`)
		if (!food && currQueryFood) history.push(`/beers?page=${page}`)
		// if (currQueryAbv && currQueryFood)
		// 	history.push(`/beers?page=${page}&food=${food}&abv=${currQueryAbv}`);

		dispatch(getBeers({ page, food }))
	}, [dispatch, history, page, food])

	const onNextClicked = () => {
		if (beers.length < 9) return
		setPage(+page + 1)
	}

	const onPrevClicked = () => {
		if (page === 1) return
		setPage(+page - 1)
	}

	const onSearchClicked = (e) => {
		e.preventDefault()
		setFood(e.target[0].value)
	}

	const onBeerDetailsClicked = (beerId = null) => {
		
		if (!beerDetails) {
			const beerForDisplay = beers.find((beer) => beer.id === beerId)
			setBeerDetails(beerForDisplay)
		} else {
			setBeerDetails(null)
		}
	}

	const onAddFavoriteClicked = (beerId) => {
		console.log('beer', beerId)
		const favoriteBeer = beers.find((beer) => beer.id === beerId)
		dispatch(addToFavorites(favoriteBeer))
	}

	const isNoBeers = beers && !beers.length && true

	return (
		<div className='container flex flex-col'>
			<div className='flex w-full'>
				<SearchInput onSearchClicked={onSearchClicked} />
				<Pagination
					onNextClicked={onNextClicked}
					onPrevClicked={onPrevClicked}
					page={page}
				/>
			</div>
			{isNoBeers ? (
				<NotFoundMsg />
			) : beers ? (
				<div className='columns-xs pb-20 '>
					{beers.map((beer) => (
						<BeerCard
							beer={beer}
							key={beer.id}
							onBeerDetailsClicked={onBeerDetailsClicked}
							onAddFavoriteClicked={onAddFavoriteClicked}
							actionBtn={
								<SmallBtn
									type='generic'
									txt='Add to favorites'
									handleClick={() => onAddFavoriteClicked(beer.id)}
								/>
							}
							backBtn={
								<SmallBtn
									type='details'
									txt='Details'
									handleClick={() => onBeerDetailsClicked(beer.id)}
								/>
							}
						/>
					))}
				</div>
			) : (
				<div className='flex justify-center items-center '>
					<LoadingSpinner />
				</div>
			)}
			{beerDetails && (
				<BeerDetailsModal
					onBeerDetailsClicked={onBeerDetailsClicked}
					beer={beerDetails}
				/>
			)}
		</div>
	)
}
