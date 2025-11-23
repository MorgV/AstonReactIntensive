// src/app/providers/store/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postApi } from "../../../entities/post/api/postApi";
import { commentsApi } from "../../../entities/comments/api/commentsApi";
import { albumsApi } from "../../../entities/albums/api/albumsApi";
import { todosApi } from "../../../entities/todo/api/todosApi";
import postReducer from "../../../entities/post/model/slice/postSlice";
import commentReducer from "../../../entities/comments/model/slice/commentSlice";
import albumReducer from "../../../entities/albums/model/slice/albumSlice";
import todoReducer from "../../../entities/todo/model/slice/todoSlice";
import { albumPhotosApi } from "../../../entities/albums/api/albumPhotosApi";
export const rootReducer = combineReducers({
  postReducer,
  commentReducer,
  albumReducer,
  todoReducer,
  [postApi.reducerPath]: postApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [albumsApi.reducerPath]: albumsApi.reducer,
  [albumPhotosApi.reducerPath]: albumPhotosApi.reducer,
  [todosApi.reducerPath]: todosApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(postApi.middleware)
        .concat(commentsApi.middleware)
        .concat(albumPhotosApi.middleware)
        .concat(albumsApi.middleware)
        .concat(todosApi.middleware),
  });

// Типы
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
