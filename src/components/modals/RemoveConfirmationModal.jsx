import { SmallBtn } from '../buttons/SmallBtn'
import { ModalRow } from '../modals/ModalCmps/ModalRow'
import { GenericModal } from './ModalCmps/GenericModal'
export const RemoveConfirmationModal = ({ onRemoveAllConfirmed }) => {
	return (
		<>
			<GenericModal
				rows={[
					<ModalRow
						key='removeConfirmationMsg'
						isGrey={true}
						txt='Are you sure you want to continue?'
					/>,
					<ModalRow
						key='removeConfirmationBtn'
						isGrey={false}
						btn={
							<SmallBtn
								type='alert'
								txt='Confirm'
								handleClick={onRemoveAllConfirmed}
							/>
						}
					/>,
				]}
			/>
		</>
		// <div
		// 		id='medium-modal'
		// 		className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full  h-modal h-full'
		// 	>
		// 		<div className='relative h-full w-full z-40'>
		// 			<div className='relative  w-9/12 h-min-content  inset-y-auto right-1/4 t md:w-2/4 md:inset-x-auto bg-white rounded-lg translate-x-1/2 translate-y-1/3 flex justify-center items-center'>
		// 				<div className='bg-white shadow rounded overflow-hidden w-full'>
		// 					<div className=''>
		// 						<ModalRow isGrey={true} txt='Are you sure you want to continue?' />

		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
	)
}
