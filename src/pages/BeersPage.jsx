// import { LoadingSpinner } from '../components/misc/LoadingSpinner';
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BeerCard } from '../components/BeerCard/BeerCard'
import {
	beerState,
	getBeers,
	addToFavorites,
	removeFavorite,
} from '../store/slices/beers.store'
import { LoadingSpinner } from '../components/misc/LoadingSpinner'
import { Pagination } from '../components/misc/Pagination'
import { useQuery } from '../hooks/useQuery'
import { useHistory } from 'react-router-dom'
import { SearchInput } from '../components/misc/SearchInput'
import { NotFoundMsg } from '../components/misc/NotFoundMsg'
import { BeerDetailsModal } from '../components/modals/BeerDetailsModal'
import { SmallBtn } from '../components/buttons/SmallBtn'
import { FavoriteActionBtn } from '../components/buttons/FavoriteActionBtn'

export const BeersPage = () => {
	const history = useHistory()
	const query = useQuery()
	const dispatch = useDispatch()

	const { beers, queryParams, favoriteIds } = useSelector(beerState)
	const [beerDetails, setBeerDetails] = useState(null)

	let page = useRef(1)
	let food = useRef('')

	const currPage = query.get('page')
	const currFood = query.get('food')

	useEffect(() => {
		if (currPage && currPage !== page.current) {
			page.current = currPage
		} else if (currFood && currFood !== food.current) {
			food.current = currFood
		}

		dispatch(getBeers({ page: page.current, food: food.current }))
	}, [dispatch, currPage, currFood])

	const onNextClicked = () => {
		if (beers.length < 9) return

		page.current++

		if (!currFood) {
			history.push(`/beers?page=${page.current}`)
		} else {
			history.push(`/beers?page=${page.current}&food=${food.current}`)
		}
	}

	const onPrevClicked = () => {
		if (currPage < 2) return

		page.current--

		if (!currFood) {
			history.push(`/beers?page=${page.current}`)
		} else {
			history.push(`/beers?page=${page.current}&food=${food.current}`)
		}
	}

	const onSearchClicked = (e) => {
		e.preventDefault()
		food.current = e.target[0].value
		if (!e.target[0].value) {
			history.push(`/beers?page=${1}`)
		} else if (page.current !== 1) {
			page.current = 1
			history.push(`/beers?page=${page.current}&food=${food.current}`)
		} else {
			history.push(`/beers?page=${page.current}&food=${food.current}`)
		}
	}

	const onBeerDetailsClicked = (beerId = null) => {
		if (!beerDetails) {
			const beerForDisplay = beers.find((beer) => beer.id === beerId)
			setBeerDetails(beerForDisplay)
		} else {
			setBeerDetails(null)
		}
	}

	const onAddFavoriteClicked = (beer) => {
		dispatch(addToFavorites(beer))
	}

	const onRemoveFavoriteClicked = (beerId) => {
		dispatch(removeFavorite(beerId))
	}

	const isNoBeers = beers && !beers.length && true

	return (
		<div className='container flex flex-col'>
			<div className='flex w-full'>
				<SearchInput onSearchClicked={onSearchClicked} />
				<Pagination
					onNextClicked={onNextClicked}
					onPrevClicked={onPrevClicked}
					page={queryParams.page}
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
							actionBtn={
								<FavoriteActionBtn
									favoriteIds={favoriteIds}
									beer={beer}
									onRemoveFavoriteClicked={onRemoveFavoriteClicked}
									onAddFavoriteClicked={onAddFavoriteClicked}
								/>
							}
							details={
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
