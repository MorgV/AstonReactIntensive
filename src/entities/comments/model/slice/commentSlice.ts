import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { IComment } from "../IComment";
import { commentsApi } from "../../api/commentsApi";

const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment: IComment) => comment.id,
  sortComparer: (a, b) => a.id - b.id,
});

const initialState = commentsAdapter.getInitialState({
  isLoading: false,
  error: "",
});

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      commentsApi.endpoints.fetchComments.matchFulfilled,
      (state, action) => {
        commentsAdapter.setAll(state, action.payload);
      }
    );
    builder.addMatcher(
      commentsApi.endpoints.fetchCommentsByPost.matchFulfilled,
      (state, action) => {
        commentsAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const commentsSelectors = commentsAdapter.getSelectors(
  (state: any) => state.commentReducer
);
export default commentSlice.reducer;
