export default function Sales() {
	return (
		<div className="p-2">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<div className="text-xs font-medium text-gray-700">
						<span className="px-1.5 w-2 h-2 rounded-full bg-orange-500  text-orange-500 mr-2">.</span>Offline
					</div>
					<div className="text-xs ml-4 font-medium text-gray-700">
						<span className="px-1.5 w-2 h-2 rounded-full bg-primary-dark  text-primary-dark mr-2">.</span>Online
					</div>
				</div>

				<button className="p-3 w-32 text-sm font-medium text-gray-700 border border-gray-500 tracking-tight rounded-md">
					View Details
				</button>
			</div>
			<div className="shadow-lg rounded-md mt-6 bg-white">
				<h2 className="border-b border-gray-300 text-sm font-medium text-gray-700 px-2 py-4">Total Sales</h2>
				<img
					src="https://designmodo.com/wp-content/uploads/2015/06/graph.jpg"
					className="h-48 w-full object-cover rounded-b-md"
				/>
			</div>
		</div>
	);
}
