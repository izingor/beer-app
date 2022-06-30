import { ModalRow } from './ModalCmps/ModalRow';
import { SmallBtn } from '../buttons/SmallBtn';
import { GenericModal } from './ModalCmps/GenericModal';

export const BeerDetailsModal = ({
	beer,
	onBeerDetailsClicked,
}) => {
	return (
		<>
			<GenericModal
				rows={[
					<ModalRow key="beerDetails" isGrey={true} txt="Beer Details" />,
					<ModalRow key="beerName" txt="Name" data={beer.name} />,
					<ModalRow key="beerAbv" txt="Alcohol %" data={beer.abv} />,
					<ModalRow
						key="firstBrewed"
						txt="First Brewed"
						data={beer.first_brewed}
					/>,

					<ModalRow
						key="backDetailsBtn"
						btn={
							<SmallBtn
								txt="Back"
								type="back"
								handleClick={onBeerDetailsClicked}
							/>
						}
					/>,
				]}
			/>
		</>
	);
};
