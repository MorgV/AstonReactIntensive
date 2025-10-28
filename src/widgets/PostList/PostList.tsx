import type { FC } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";

export interface Post {
  id: number;
  title: string;
  content: string;
}

export const PostList: FC = () => {
  const posts: Post[] = [
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
  ];

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};
