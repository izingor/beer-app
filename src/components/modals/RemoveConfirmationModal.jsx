import { SmallBtn } from '../buttons/SmallBtn';
import { ModalRow } from '../modals/ModalCmps/ModalRow';
import { GenericModal } from './ModalCmps/GenericModal';
import Lottie from 'lottie-react';
import WarningAnimation from '../../assets/lottie-animations/warning.json';

export const RemoveConfirmationModal = ({
	onRemoveAllConfirmed,
	onCloseConfirtmationModal,
}) => {
	return (
		<>
			<GenericModal
				rows={[
					<ModalRow
						key="removeConfirmationMsg"
						isGrey={true}
						txt="Are you sure you want to continue?"
					/>,
					<ModalRow
						key="warningAnimation"
						animation={<Lottie animationData={WarningAnimation} loop={true} />}
					/>,
					<ModalRow
						key="removeConfirmationBtn"
						isGrey={false}
						btn={[
							<SmallBtn
								key="removeConfirm"
								type="alert"
								txt="Confirm"
								handleClick={onRemoveAllConfirmed}
							/>,
							<SmallBtn
								key="closeConfirtmation"
								type="details"
								txt="Back"
								handleClick={onCloseConfirtmationModal}
							/>,
						]}
					/>,
				]}
			/>
		</>
	);
};
