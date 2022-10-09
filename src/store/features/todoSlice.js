import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	allTodos: {
		"b5cbd590-7ab4-499d-aaad-9e4b5bb164bb": {
			content: "Meeting with henry about work!",
			date: "2022-10-09",
			id: "b5cbd590-7ab4-499d-aaad-9e4b5bb164bb",
			user: "Jason Bourne",
		},
		"a2056514-540f-4b6f-8798-1af70d8fe9a9": {
			content: "Report submission by 2 pm",
			date: "2022-10-09",
			id: "a2056514-540f-4b6f-8798-1af70d8fe9a9",
			user: "Minlo Ching",
		},
	},
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, { payload }) => {
			state.allTodos[payload.id] = { ...payload };
		},
		deleteTodo: (state, { payload }) => {
			delete state.allTodos[payload.id];
		},
	},
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
