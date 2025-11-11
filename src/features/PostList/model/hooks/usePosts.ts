import { useQuery } from "@tanstack/react-query";
import {
  fetchPosts,
  fetchUserPosts,
  type Post,
} from "../../../../shared/api/api";

export const usePosts = (userId?: number | string) => {
  const { data, isLoading, error } = useQuery<Post[], Error>({
    queryKey: userId ? ["userPosts", userId] : ["posts"],
    queryFn: () => (userId ? fetchUserPosts(userId) : fetchPosts()),
  });

  return { posts: data ?? [], isLoading, error };
};
