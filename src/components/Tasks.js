import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Dialog, Transition } from "@headlessui/react";
import { addTodo, deleteTodo } from "../store/features/todoSlice";
import _ from "lodash";

export default function Tasks() {
	const defaultState = {
		type: "add",
		reqFormInfo: {},
		showForm: false,
	};
	const [state, setState] = useState(defaultState);
	const allTodos = useSelector((state) => state.todos.allTodos);
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteTodo({ id }));
	};

	const handleUpdate = (data) => {
		setState((state) => ({ ...state, reqFormInfo: data, type: "update", showForm: !state.showForm }));
	};

	const resetState = () => {
		setState(defaultState);
	};

	return (
		<>
			<div className="p-2">
				<h4 className="text-sm font-medium text-gray-500 tracking-tight">Current Tasks</h4>
				<div className="shadow-lg rounded-md mt-6 bg-white">
					<div className="flex items-center justify-between py-2 px-2 border-b border-gray-300">
						<h2 className=" text-sm font-medium text-gray-700 px-2 py-3">Task List</h2>
						<button
							onClick={() => setState((state) => ({ ...state, showForm: !state.showForm }))}
							className="p-2 w-24 text-xs font-medium  bg-primary-light text-white tracking-tight rounded-md"
						>
							New Task
						</button>
					</div>
					<div className="mt-4 h-52 overflow-y-scroll">
						<div class="container flex flex-col mx-auto w-full items-center justify-center">
							{!_.isEmpty(allTodos) &&
								Object.keys(allTodos)?.map((key) => {
									const { id, user, content, date } = allTodos?.[key];
									return (
										<div
											key={id}
											class="border border-gray-200 rounded flex flex-col p-4 shadow-lg w-full sm:w-4/5 my-2 "
										>
											<div class="text-gray-600 text-xs mb-2">{user}</div>
											<div class="font-medium text-sm">{content}</div>
											<div class="mt-4 flex justify-between items-center">
												<div class="text-gray-600 mt-1 tracking-tight  text-xs">{date}</div>

												<div className="flex items-center gap-x-4">
													<svg
														onClick={() => handleUpdate(allTodos?.[key])}
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5 text-primary-light cursor-pointer"
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
														className="h-5 w-5 text-red-700 cursor-pointer"
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
								})}
						</div>
					</div>
				</div>
			</div>
			<Transition appear show={state.showForm} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 bg-gray-900 bg-opacity-70 overflow-y-auto "
					onClose={() => setState((state) => ({ ...state, showForm: !state.showForm }))}
				>
					<div className="min-h-screen max-w-sm mx-auto px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>
						<span className="inline-block h-screen align-middle" aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-full max-w-2xl p-4  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
								<TodoForm {...{ state, resetState }} />
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

const TodoForm = ({ state, resetState }) => {
	const [todo, setTodo] = useState({
		id: "",
		user: "",
		content: "",
		date: "",
	});
	const dispatch = useDispatch();

	useEffect(() => {
		if (state.type === "update") {
			setTodo({ ...state.reqFormInfo });
		}
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setTodo((todo) => ({ ...todo, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (state.type === "add") {
			const { user, content } = todo;
			const id = uuidv4();
			const date = new Date()?.toISOString()?.split("T")?.[0];
			const finalData = { id, user, content, date };
			dispatch(addTodo(finalData));
			resetState();
		} else {
			dispatch(addTodo(todo));
			resetState();
		}
	};

	const allFieldsInfo = [
		{
			field: "user",
			label: "User",
			placeholder: "Eg: Jagko",
			type: "text",
		},
		{
			field: "content",
			label: "Todo",
			placeholder: "Eg: Meeting with sharon at 2",
			type: "text",
		},
	];

	return (
		<div className=" p-2 rounded-md ">
			<form className="gap-x-6 gap-y-3 ">
				{allFieldsInfo?.map((info) => {
					const { field, label, placeholder, type } = info;
					return (
						<div key={field} className="mb-1 sm:mb-2 ">
							<label htmlFor={field} className="text-sm inline-block mb-1 font-medium">
								{label}
							</label>
							<input
								required
								placeholder={placeholder}
								type="text"
								className="flex-grow w-full h-12 px-4 mb-2 text-sm transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none  focus:outline-none focus:shadow-outline"
								id={field}
								name={field}
								value={todo[field]}
								onChange={handleInputChange}
							/>
						</div>
					);
				})}

				<div className="mb-1">
					<button
						onClick={handleSubmit}
						className="w-full text-sm inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded  bg-primary-light focus:shadow-outline focus:outline-none"
					>
						{state.type === "add" ? "Add todo" : "Update todo"}
					</button>
				</div>
			</form>
		</div>
	);
};
