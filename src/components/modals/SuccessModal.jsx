import { GenericModal } from '../modals/ModalCmps/GenericModal';
import { SmallBtn } from '../buttons/SmallBtn';
import { ModalRow } from './ModalCmps/ModalRow';
import Lottie from 'lottie-react';
import SuccessAnimation from '../../assets/lottie-animations/success.json';

export const SuccessModal = ({handleClick}) => {
	return (
		<>
			<GenericModal
				rows={[
					<ModalRow isGrey={true} key="removeMsg" txt="Your favorites has been removed" />,
					<ModalRow
						key="successRemoveAnimation"
						animation={<Lottie animationData={SuccessAnimation} loop={false} />}
					/>,
					<ModalRow
						key="successBackBtn"
						btn={
							<SmallBtn
								txt="Continue"
								type="generic"
								handleClick={handleClick}
							/>
						}
					/>,
				]}
			/>
		</>
	);
};
