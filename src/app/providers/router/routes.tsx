import { createBrowserRouter } from "react-router-dom";
import { PostsPage } from "../../../pages/PostsPage/PostsPage";
import { PostDetailsPage } from "../../../pages/PostDetailsPage/PostDetailsPage";
import { UserPostsPage } from "../../../pages/UserPostsPage/UserPostsPage";
import { UserAlbumsPage } from "../../../pages/UserAlbumsPage/UserAlbumsPage";
import { AlbumPhotosPage } from "../../../pages/AlbumPhotosPage/AlbumPhotosPage";
import { UserTodosPage } from "../../../pages/UserTodosPage/UserTodosPage";
import { App } from "../../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "posts",
        element: <PostsPage />,
      },
      {
        path: "posts/:id",
        element: <PostDetailsPage />,
      },

      {
        path: "users/:id/posts",
        element: <UserPostsPage />,
      },
      {
        path: "users/:id/albums",
        element: <UserAlbumsPage />,
      },
      {
        path: "albums/:id/photos",
        element: <AlbumPhotosPage />,
      },
      {
        path: "users/:id/todos",
        element: <UserTodosPage />,
      },
    ],
  },
]);
