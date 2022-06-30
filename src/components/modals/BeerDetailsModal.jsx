import { ModalRow } from './ModalCmps/ModalRow'
import { SmallBtn } from '../buttons/SmallBtn'
import { GenericModal } from './ModalCmps/GenericModal'

export const BeerDetailsModal = ({
	beer,
	onBeerDetailsClicked,
	rating = null,
}) => {
	return (
		<>
			<GenericModal key = 'beerdetailsmodal'
				rows={[
					<ModalRow key='beerDetails' isGrey={true} txt='Beer Details' />,
					<ModalRow key='beerName' txt='Name' data={beer.name} />,
					<ModalRow key='beerAbv' txt='Alcohol %' data={beer.abv} />,
					<ModalRow
						key='firstBrewed'
						txt='First Brewed'
						data={beer.first_brewed}
					/>,
					<div key='rating'>
						{rating && (
							<ModalRow txt='Rating' data={rating} />
						)}
					</div>,
					<ModalRow
						key='backDetailsBtn'
						btn={
							<SmallBtn
								txt='Back'
								type='back'
								handleClick={onBeerDetailsClicked}
							/>
						}
					/>,
				]}
			/>
		</>
	)
}
