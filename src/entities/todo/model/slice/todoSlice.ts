import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { ITodo } from "../ITodo";
import { todosApi } from "../../api/todosApi";

const todosAdapter = createEntityAdapter<ITodo>({
  selectId: (todo: ITodo) => todo.id,
  sortComparer: (a, b) => a.id - b.id,
});

const initialState = todosAdapter.getInitialState({
  isLoading: false,
  error: "",
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      todosApi.endpoints.fetchTodos.matchFulfilled,
      (state, action) => {
        todosAdapter.setAll(state, action.payload);
      }
    );
    builder.addMatcher(
      todosApi.endpoints.fetchUserTodos.matchFulfilled,
      (state, action) => {
        todosAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const todosSelectors = todosAdapter.getSelectors(
  (state: any) => state.todoReducer
);
export default todoSlice.reducer;
