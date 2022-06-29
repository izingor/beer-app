import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BeerCard } from '../components/BeerCard/BeerCard'
import { beerState, getFavorites } from '../store/slices/beers.store'
import { FavoritesActionBar } from '../components/misc/FavoritesActionBar'
import { RemoveConfirmationModal } from '../components/modals/RemoveConfirmationModal'
export const FavoritesPage = () => {
	const { favoriteBeers } = useSelector(beerState)
	const [isRemoveModal, setIsRemoveModal] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getFavorites())
	}, [dispatch])

	const onRemoveAllConfirmed = () => {
		console.log('remove all clicked')
	}

	// console.log(favoriteBeers)

	return (
		<div className='container flex flex-col'>
			<FavoritesActionBar onRemoveAllClicked={() => setIsRemoveModal(true)} />
			<div className='columns-xs pb-20 '>
				{favoriteBeers &&
					favoriteBeers.map((beer) => (
						<BeerCard
							beer={beer}
							key={beer.id}
							// onBeerDetailsClicked={onBeerDetailsClicked}
							// onAddFavoriteClicked={onAddFavoriteClicked}
						/>
					))}
			</div>
			{isRemoveModal && (
				<RemoveConfirmationModal onRemoveAllConfirmed={onRemoveAllConfirmed} />
			)}
		</div>
	)
}
