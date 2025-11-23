// src/entities/post/model/slice/postSlice.ts
import {
  createSlice,
  createEntityAdapter,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { IPost } from "../IPost";
import { postApi } from "../../api/postApi";

const postsAdapter = createEntityAdapter<IPost>({
  selectId: (post: IPost) => post.id,
  sortComparer: (a, b) => a.id - b.id,
});

const initialState = postsAdapter.getInitialState({
  isLoading: false,
  error: "",
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // RTK Query — fetchAllPosts
    builder.addMatcher(
      postApi.endpoints.fetchAllPosts.matchFulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        postsAdapter.setAll(state, action.payload);
      }
    );

    // RTK Query — fetchPostByUser
    builder.addMatcher(
      postApi.endpoints.fetchPostByUser.matchFulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        postsAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const postsSelectors = postsAdapter.getSelectors(
  (state: any) => state.postReducer
);

export default postSlice.reducer;
