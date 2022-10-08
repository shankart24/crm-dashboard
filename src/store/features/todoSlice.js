import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	allTodos: {},
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
