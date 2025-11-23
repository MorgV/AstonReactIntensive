import { useParams } from "react-router-dom";
import { PostList } from "../../widgets/PostList/PostList";
import type { FC } from "react";

export const UserPostsPage: FC = () => {
  const { id } = useParams();
  return <PostList userId={id} />;
};
