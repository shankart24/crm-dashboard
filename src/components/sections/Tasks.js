import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Dialog, Transition } from "@headlessui/react";
import { addTodo, deleteTodo } from "../../store/features/todoSlice";
import _ from "lodash";
import TaskCard from "../TaskCard";
import Modal from "../Modal";

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

	const closeModal = () => setState((state) => ({ ...state, showForm: !state.showForm }));

	const resetState = () => {
		setState(defaultState);
	};

	return (
		<>
			<div className="p-2">
				<h4 className="text-sm font-medium text-gray-500 tracking-tight">Current Tasks</h4>
				<div className="shadow-lg border border-gray-50 rounded-md mt-6 bg-white">
					<div className="flex items-center justify-between py-2 px-2 border-b border-gray-300">
						<h2 className=" text-sm font-medium text-gray-700 px-2 py-3">Task List</h2>
						<button
							onClick={() => setState((state) => ({ ...state, showForm: !state.showForm, type: "add" }))}
							className="p-2 w-24 text-xs font-medium  bg-primary-light text-white tracking-tight rounded-md"
						>
							New Task
						</button>
					</div>
					<div className={`${Object.keys(allTodos).length >= 3 ? "overflow-y-scroll" : ""} h-72 mt-1 `}>
						<div class="container flex flex-col mx-auto w-full items-center justify-center py-2">
							{!_.isEmpty(allTodos) ? (
								Object.keys(allTodos)?.map((key) => {
									const taskData = allTodos?.[key];
									return <TaskCard key={taskData?.id} {...{ taskData, handleDelete, handleUpdate }} />;
								})
							) : (
								<p className="text-xs text-gray-500">No tasks to display!</p>
							)}
						</div>
					</div>
				</div>
			</div>
			<Modal modalState={state.showForm} closeModal={closeModal}>
				<div className="inline-block w-full max-w-2xl p-4  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
					<TodoForm {...{ state, resetState }} />
				</div>
			</Modal>
		</>
	);
}

const TodoForm = ({ state, resetState }) => {
	const defaultTodo = {
		id: "",
		user: "",
		content: "",
		date: "",
	};
	const [todo, setTodo] = useState(defaultTodo);
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

	useEffect(() => {
		if (state.type === "add") {
			setTodo(defaultTodo);
		}
	}, [state.type]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todo.user && todo.content) {
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
						{state.type === "add" ? "Add task" : "Update task"}
					</button>
				</div>
			</form>
		</div>
	);
};
