import { ModalRow } from './ModalCmps/ModalRow'
import { SmallBtn } from '../buttons/SmallBtn'
import { GenericModal } from './ModalCmps/ModalRow'
export const BeerDetailsModal = ({ beer, onBeerDetailsClicked }) => {
	console.log(beer)
	return (
		<div
			id='medium-modal'
			className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full'
		>
			<div className='relative h-full w-full z-40'>
				<div className='relative  w-9/12 h-min-content  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg translate-x-1/2 translate-y-1/3 flex justify-center items-center'>
					<div className='bg-white shadow rounded overflow-hidden w-full'>
						<ModalRow isGrey={true} txt='Beer Details' />
						<ModalRow txt='Name' data={beer.name} />
						<ModalRow txt='Alcohol %' data={beer.abv} />
						<ModalRow txt='First Brewed' data={beer.first_brewed} />
						<ModalRow
							btn={
								<SmallBtn
									txt='Back'
									type='details'
									handleClick={onBeerDetailsClicked}
								/>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
