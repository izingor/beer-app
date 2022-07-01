import {SmallBtn} from '../buttons/SmallBtn'

export const FavoriteActionBtn = ({
	beer,
	onRemoveFavoriteClicked,
	onAddFavoriteClicked,
    favoriteIds
}) => {
	const isFavorite = favoriteIds.includes(beer.id)

	return !isFavorite ? (
		<SmallBtn
			type='generic'
			txt='Add to favorites'
			handleClick={() => onAddFavoriteClicked(beer)}
		/>
	) : (
		<SmallBtn
			type='alert'
			txt='Remove from favorites'
			handleClick={() => onRemoveFavoriteClicked(beer.id)}
		/>
	)
}
