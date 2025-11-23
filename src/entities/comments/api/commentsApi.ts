import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IComment } from "../model/IComment";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Comment"],
  endpoints: (build) => ({
    fetchComments: build.query<IComment[], void>({
      query: () => "comments",
      providesTags: ["Comment"],
    }),
    fetchCommentsByPost: build.query<IComment[], number>({
      query: (postId) => `posts/${postId}/comments`,
      providesTags: (result, error, postId) =>
        result
          ? [
              ...result.map((c) => ({ type: "Comment" as const, id: c.id })),
              { type: "Comment", id: `POST-${postId}` },
            ]
          : [{ type: "Comment", id: `POST-${postId}` }],
    }),
  }),
});

export const { useFetchCommentsQuery, useFetchCommentsByPostQuery } =
  commentsApi;
