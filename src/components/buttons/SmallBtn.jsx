export const SmallBtn = ({ txt = null, type = null, handleClick }) => {
	const btnClass = () => {
		if (type === 'generic') {
			return 'font-mono text-xs text-theme bg-yellow rounded hover:bg-yellow_hover  focus:ring-4 mr-2 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center'
		} else if (type === 'details' || type === 'back') {
			return 'font-mono text-xs bg-white rounded hover:bg-gray_hover focus:ring-4 focus:outline-none  mr-2 border border-gray-200 text-sm font-medium px-5 py-2.5  focus:z-10 '
		} else if (type === 'alert') {
			return 'font-mono text-xs bg-red text-white rounded hover:bg-hover_red focus:ring-4 focus:outline-none  mr-2 border border-gray-200 text-sm font-medium px-5 py-2.5  focus:z-10 '
		}
	}

	return (
		<button onClick={handleClick} type='button' className={btnClass()}>
			{txt}
		</button>
	)
}
