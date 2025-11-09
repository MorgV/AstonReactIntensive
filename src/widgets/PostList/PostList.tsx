import type { FC } from "react";
import { useState, useEffect } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";
import { withLoading } from "../../shared/lib/hoc/withLoading/withLoading";

export type Post = {
  id: number;
  title: string;
  content: string;
};

type PostListContentProps = {
  posts: Post[];
};

const PostListContent: FC<PostListContentProps> = ({ posts }) => (
  <div className={styles.list}>
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} content={post.content} />
    ))}
  </div>
);

// HOC для отображения загрузки
const EnhancedPostList = withLoading(PostListContent);

export const PostList: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Симуляция запроса с задержкой 2 секунды
    const timer = setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: "Как я создал блог на React",
          content: "Немного о том, как всё началось...",
        },
        {
          id: 2,
          title: "Актуальные тренды фронтенда",
          content: "React, Vite, TypeScript, Tailwind и модульные стили.",
        },
        {
          id: 3,
          title: "Почему важно учиться постоянно",
          content: "Мир IT не стоит на месте — и это круто!",
        },
      ]);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <EnhancedPostList isLoading={isLoading} posts={posts} />;
};
