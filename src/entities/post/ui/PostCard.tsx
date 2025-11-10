import { memo, type FC } from "react";
import styles from "./PostCard.module.css";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";
import type { Comment } from "../../../widgets/PostList/PostList";

type PostCardProps = {
  title: string;
  content: string;
  comments: Comment[];
};

export const PostCard: FC<PostCardProps> = memo(
  ({ title, content, comments }) => {
    return (
      <article className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        <CommentList comments={comments} />
      </article>
    );
  }
);
