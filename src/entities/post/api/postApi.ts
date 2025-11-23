import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPost } from "../model/types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], void>({
      query: () => "posts",
      providesTags: ["Post"],
    }),

    fetchPostByUser: build.query<IPost[], number | string>({
      query: (userId) => `users/${userId}/posts`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map((post) => ({ type: "Post" as const, id: post.id })),
              { type: "Post", id: `USER-${userId}` },
            ]
          : [{ type: "Post", id: `USER-${userId}` }],
    }),
  }),
});
