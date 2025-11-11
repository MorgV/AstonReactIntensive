import type { FC } from "react";
import { useState, useMemo, memo } from "react";
import styles from "./PostList.module.css";
import { withLoading } from "../../shared/lib/hoc/withLoading/withLoading";
import { PostCard } from "../../entities/post/ui/PostCard";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter/PostLengthFilter";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import type { Post } from "../../shared/api/api";

export type Comment = {
  id: number;
  text: string;
};

type PostListContentProps = {
  posts: Post[];
};

const PostListContent: FC<PostListContentProps> = memo(({ posts }) => (
  <div className={styles.list}>
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        content={post.body} // передаём body напрямую
        comments={post.comments ?? []}
      />
    ))}
  </div>
));

const EnhancedPostList = withLoading(PostListContent);

export const PostList: FC<{ userId?: number | string }> = ({ userId }) => {
  const [minLength, setMinLength] = useState(25);
  const { posts, isLoading } = usePosts(userId);

  const filteredPosts = useMemo(
    () => filterByLength(posts, minLength),
    [posts, minLength]
  );

  return (
    <>
      <PostLengthFilter minLength={minLength} setMinLength={setMinLength} />
      <EnhancedPostList isLoading={isLoading} posts={filteredPosts} />
    </>
  );
};
