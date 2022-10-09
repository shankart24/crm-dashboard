export default function TaskCard({ taskData, handleUpdate, handleDelete }) {
	const { id, user, content, date } = taskData;
	return (
		<div
			key={id}
			class="border border-gray-200 bg-primary-light rounded-md flex flex-col p-4 shadow-lg w-full sm:w-5/6 my-2 "
		>
			<div class="text-gray-200 text-xs mb-2">{user}</div>
			<div class="font-medium text-white text-sm">{content}</div>
			<div class="mt-4 flex justify-between items-center">
				<div class="text-gray-200 mt-1 tracking-tight  text-xs">{date}</div>

				<div className="flex items-center gap-x-4">
					<svg
						onClick={() => handleUpdate(taskData)}
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-gray-200 cursor-pointer"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
						<path
							fillRule="evenodd"
							d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
							clipRule="evenodd"
						/>
					</svg>
					<svg
						onClick={() => handleDelete(id)}
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-red-300 cursor-pointer"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
