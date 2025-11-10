import type { FC } from "react";
import { useState, useEffect, useMemo, memo } from "react";
import styles from "./PostList.module.css";
import { withLoading } from "../../shared/lib/hoc/withLoading/withLoading";
import { PostCard } from "../../entities/post/ui/PostCard";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter/PostLengthFilter";

export type Comment = {
  id: number;
  text: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
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
        content={post.content}
        comments={post.comments}
      />
    ))}
  </div>
));

// HOC для отображения загрузки
const EnhancedPostList = withLoading(PostListContent);

export const PostList: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [minLength, setMinLength] = useState(25);

  useEffect(() => {
    // Симуляция запроса с задержкой 2 секунды
    const timer = setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: "Как я создал блог на React",
          content: "Немного о том, как всё началось...",
          comments: [
            { id: 1, text: "Круто!" },
            { id: 2, text: "Жду продолжения!" },
          ],
        },
        {
          id: 2,
          title: "Актуальные тренды фронтенда",
          content: "React, Vite, TypeScript и Tailwind.",
          comments: [{ id: 1, text: "Полезная статья!" }],
        },
        {
          id: 3,
          title: "Почему важно учиться постоянно",
          content: "Мир IT не стоит на месте.",
          comments: [
            { id: 1, text: "Полностью согласен" },
            { id: 2, text: "Актуально!" },
            { id: 3, text: "Спасибо!" },
          ],
        },
      ]);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
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
