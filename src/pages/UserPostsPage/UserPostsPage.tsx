import { useParams } from "react-router-dom";
import { PostList } from "../../widgets/PostList/PostList";

export const UserPostsPage = () => {
  const { id } = useParams();
  return <PostList userId={id} />;
};
