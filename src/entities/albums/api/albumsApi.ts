import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IAlbum } from "../model/IAlbums";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Album"],
  endpoints: (build) => ({
    fetchAlbums: build.query<IAlbum[], void>({
      query: () => "albums",
      providesTags: ["Album"],
    }),
    fetchUserAlbums: build.query<IAlbum[], number>({
      query: (userId) => `users/${userId}/albums`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map((album) => ({
                type: "Album" as const,
                id: album.id,
              })),
              { type: "Album", id: `USER-${userId}` },
            ]
          : [{ type: "Album", id: `USER-${userId}` }],
    }),
  }),
});

export const { useFetchAlbumsQuery, useFetchUserAlbumsQuery } = albumsApi;
