const Select = ({ changeHandler, options }) => {
	return (
		<select
			class="block w-32 text-xs text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none "
			onChange={changeHandler}
		>
			{options?.map((option) => {
				return (
					<option key={option.label} value={option.value}>
						{option.name}
					</option>
				);
			})}
		</select>
	);
};

export { Select };
