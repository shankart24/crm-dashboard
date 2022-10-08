export default function Followers() {
	return (
		<div className="p-2">
			<h4 className="text-sm font-medium text-gray-500 tracking-tight">Followers Stats</h4>
			<div className="shadow-lg rounded-md mt-6 bg-white">
				<div className="flex items-center justify-between py-2 px-2 border-b border-gray-300">
					<h2 className=" text-sm font-medium text-gray-700 px-2 py-3">Followers</h2>
					<select
						class="block w-32 text-xs text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none "
						name="animals"
					>
						<option value="August 2022">August 2022</option>
					</select>
				</div>
				<img
					src="https://bunifuframework.com/wp-content/uploads/2020/12/ColumnChart_Live.gif"
					className=" w-full object-cover rounded-b-md"
				/>
			</div>
		</div>
	);
}
