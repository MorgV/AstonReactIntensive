// src/entities/albums/api/albumPhotosApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPhoto } from "../model/types";

export const albumPhotosApi = createApi({
  reducerPath: "albumPhotosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    fetchAlbumPhotos: build.query<IPhoto[], number>({
      query: (albumId) => `albums/${albumId}/photos`,
    }),
  }),
});

export const { useFetchAlbumPhotosQuery } = albumPhotosApi;
