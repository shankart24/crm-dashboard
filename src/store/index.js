import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";

export const myStore = configureStore({
	reducer: { todos: todoSlice },
});
