import { createBrowserRouter } from "react-router-dom";
import { PostsPage } from "../../../pages/PostsPage/ui/PostsPage";
import { PostDetailsPage } from "../../../pages/PostDetailsPage/ui/PostDetailsPage";
import { UserPostsPage } from "../../../pages/UserPostsPage/ui/UserPostsPage";
import { UserAlbumsPage } from "../../../pages/UserAlbumsPage/ui/UserAlbumsPage";
import { AlbumPhotosPage } from "../../../pages/AlbumPhotosPage/ui/AlbumPhotosPage";
import { UserTodosPage } from "../../../pages/UserTodosPage/ui/UserTodosPage";
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
