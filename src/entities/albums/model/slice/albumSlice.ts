import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { IAlbum } from "../IAlbums";
import { albumsApi } from "../../api/albumsApi";

const albumsAdapter = createEntityAdapter<IAlbum>({
  selectId: (album: IAlbum): number => album.id,
  sortComparer: (a, b) => a.id - b.id,
});

const initialState = albumsAdapter.getInitialState({
  isLoading: false,
  error: "",
});

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      albumsApi.endpoints.fetchAlbums.matchFulfilled,
      (state, action) => {
        albumsAdapter.setAll(state, action.payload);
      }
    );
    builder.addMatcher(
      albumsApi.endpoints.fetchUserAlbums.matchFulfilled,
      (state, action) => {
        albumsAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const albumsSelectors = albumsAdapter.getSelectors(
  (state: any) => state.albumReducer
);
export default albumSlice.reducer;
