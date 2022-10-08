export default function Tasks() {
	return (
		<div className="p-2">
			<h4 className="text-sm font-medium text-gray-500 tracking-tight">Current Tasks</h4>
			<div className="shadow-lg rounded-md mt-6 bg-white">
				<div className="flex items-center justify-between py-2 px-2 border-b border-gray-300">
					<h2 className=" text-sm font-medium text-gray-700 px-2 py-3">Task List</h2>
					<button className="p-2 w-24 text-xs font-medium  bg-primary-light text-white tracking-tight rounded-md">
						New Task
					</button>
				</div>
				<div>
					<div class="container flex flex-col mx-auto w-full items-center justify-center">
						<div class="border border-gray-200 rounded flex flex-row p-4 shadow-lg w-4/5 my-2 ">
							<div class="flex-1 pl-1 md:mr-16">
								<div class="font-medium text-sm">Jean Marc</div>
								<div class="text-gray-600 text-sm">Developer</div>
							</div>
							<div class="text-gray-600  text-xs">6:00 AM</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
