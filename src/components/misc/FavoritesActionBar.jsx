import { SmallBtn } from '../buttons/SmallBtn'

export const FavoritesActionBar = ({ onRemoveAllClicked }) => {
	return (
		<div className='flex w-full my-3'>
			<SmallBtn txt='Remove all' type='alert' handleClick={onRemoveAllClicked} />
		</div>
	)
}
