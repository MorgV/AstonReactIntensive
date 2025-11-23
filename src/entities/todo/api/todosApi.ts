import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ITodo } from "../model/ITodo";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    fetchTodos: build.query<ITodo[], void>({
      query: () => "todos",
      providesTags: ["Todo"],
    }),
    fetchUserTodos: build.query<ITodo[], number>({
      query: (userId) => `users/${userId}/todos`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map((todo) => ({ type: "Todo" as const, id: todo.id })),
              { type: "Todo", id: `USER-${userId}` },
            ]
          : [{ type: "Todo", id: `USER-${userId}` }],
    }),
  }),
});

export const { useFetchTodosQuery, useFetchUserTodosQuery } = todosApi;
