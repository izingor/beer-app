export const SmallBtn = ({ txt = null, type = null, handleClick  }) => {
	const btnClass = () => {
		if (type === 'approve') {
			return 'text-theme bg-yellow rounded hover:bg-blue-700 hover:text-amber-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center'
		} else if (type === 'back') {
			return 'text-gray-500 bg-white rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 '
		}
	}

	return (
		<button onClick={handleClick} type='button' className={btnClass()}>
			{txt}
		</button>
	)
}
