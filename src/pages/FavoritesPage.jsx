import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BeerCard } from '../components/BeerCard/BeerCard';
import {
	beerState,
	getFavorites,
	removeFavorite,
	removeAllFavorites,
	resetAllRemovedStatus,
} from '../store/slices/beers.store';
import { FavoritesActionBar } from '../components/misc/FavoritesActionBar';
import { RemoveConfirmationModal } from '../components/modals/RemoveConfirmationModal';
import { LoadingSpinner } from '../components/misc/LoadingSpinner';
import { SmallBtn } from '../components/buttons/SmallBtn';
import { SuccessModal } from '../components/modals/SuccessModal';

export const FavoritesPage = () => {
	const { favoriteBeers, allRemovedStatus } = useSelector(beerState);
	const [isRemoveModal, setIsRemoveModal] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFavorites());
	}, [dispatch]);

	const onRemoveAllConfirmed = () => {
		dispatch(removeAllFavorites());
		setIsRemoveModal(false);
	};

	const onRemoveFavoriteClicked = (favoriteId) => {
		dispatch(removeFavorite(favoriteId));
	};

	const closeSuccessModal = () => {
		dispatch(resetAllRemovedStatus());
	};

	return (
		<div className="container flex flex-col">
			<FavoritesActionBar onRemoveAllClicked={() => setIsRemoveModal(true)} />
			<div className="columns-xs pb-20 ">
				{favoriteBeers ? (
					favoriteBeers.map((favoriteBeer) => (
						<BeerCard
							actionBtn={
								<SmallBtn
									txt="Remove"
									type="alert"
									handleClick={() => onRemoveFavoriteClicked(favoriteBeer?.id)}
								/>
							}
							key={favoriteBeer.id}
							beer={favoriteBeer}
						/>
					))
				) : (
					<LoadingSpinner />
				)}
			</div>
			{isRemoveModal && (
				<RemoveConfirmationModal
					onRemoveAllConfirmed={onRemoveAllConfirmed}
					onCloseConfirtmationModal={() => setIsRemoveModal(false)}
				/>
			)}
			{allRemovedStatus && <SuccessModal handleClick={closeSuccessModal} />}
		</div>
	);
};
