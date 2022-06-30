import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BeerCard } from '../components/BeerCard/BeerCard'
import {
	beerState,
	getFavorites,
	removeFavorite,
	removeAllFavorites,
	resetAllRemovedStatus,
	updateFavoriteBeer
} from '../store/slices/beers.store'
import { FavoritesActionBar } from '../components/misc/FavoritesActionBar'
import { RemoveConfirmationModal } from '../components/modals/RemoveConfirmationModal'
import { SmallBtn } from '../components/buttons/SmallBtn'
import { SuccessModal } from '../components/modals/SuccessModal'
import { BeerDetailsModal } from '../components/modals/BeerDetailsModal'
import { RatingDropdown } from '../components/misc/RatingDropdown'

export const FavoritesPage = () => {
	const { favoriteBeers, allRemovedStatus } = useSelector(beerState)
	const [isRemoveModal, setIsRemoveModal] = useState(false)
	const dispatch = useDispatch()

	const [beerDetails, setBeerDetails] = useState(null)

	useEffect(() => {
		dispatch(getFavorites())
	}, [dispatch])

	const onRemoveAllConfirmed = () => {
		dispatch(removeAllFavorites())
		setIsRemoveModal(false)
	}

	const onRemoveFavoriteClicked = (favoriteId) => {
		dispatch(removeFavorite(favoriteId))
	}

	const closeSuccessModal = () => {
		dispatch(resetAllRemovedStatus())
	}

	const onRatingChanged = ({ target }) => {

		const beerForUpdate = {...beerDetails}
		beerForUpdate.rating = +target.value;
		
		dispatch(updateFavoriteBeer(beerForUpdate))
	}

	const isThereFavorites = favoriteBeers && favoriteBeers.length > 0

	return (
		<div className='container flex flex-col'>
			{isThereFavorites && (
				<FavoritesActionBar onRemoveAllClicked={() => setIsRemoveModal(true)} />
			)}
			<div className='columns-xs pb-20 '>
				{favoriteBeers.map((favoriteBeer) => (
					<BeerCard
						actionBtn={
							<SmallBtn
								txt='Remove'
								type='generic'
								handleClick={() => onRemoveFavoriteClicked(favoriteBeer?.id)}
							/>
						}
						details={
							<SmallBtn
								txt='Details'
								type='details'
								handleClick={() => setBeerDetails(favoriteBeer)}
							/>
						}
						key={favoriteBeer?.id}
						beer={favoriteBeer}
					/>
				))}
			</div>
			{isRemoveModal && (
				<RemoveConfirmationModal
					onRemoveAllConfirmed={onRemoveAllConfirmed}
					onCloseConfirtmationModal={() => setIsRemoveModal(false)}
				/>
			)}
			{allRemovedStatus && <SuccessModal handleClick={closeSuccessModal} />}
			{beerDetails && (
				<BeerDetailsModal
					rating={<RatingDropdown handleChange={onRatingChanged} />}
					beer={beerDetails}
					onBeerDetailsClicked={() => setBeerDetails(null)}
				/>
			)}
		</div>
	)
}
