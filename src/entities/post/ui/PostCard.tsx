import type { FC } from "react";
import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  content: string;
};

export const PostCard: FC<PostCardProps> = ({ title, content }) => {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </article>
  );
};
