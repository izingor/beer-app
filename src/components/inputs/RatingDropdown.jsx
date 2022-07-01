export const RatingDropdown = ({handleChange,rating}) => {
	return (
		<>
			<select value={rating} onChange={handleChange} className='bg-white border border-theme text-theme text-sm rounded-lg focus:ring-yellow focus:border-yellow block w-full p-2.5'>
				<option defaultValue>Rate here</option>
				<option value={1}>🍺</option>
				<option value={2}>🍺🍺</option>
				<option value={3}>🍺🍺🍺</option>
				<option value={4}>🍺🍺🍺🍺</option>
				<option value={5}>🍺🍺🍺🍺🍺</option>
			</select>
		</>
	)
}
