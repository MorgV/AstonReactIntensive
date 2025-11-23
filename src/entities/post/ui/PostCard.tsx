// src/entities/post/ui/PostCard.tsx
import { memo, type FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PostCard.module.css";
import {
  CommentList,
  type Comment,
} from "../../../widgets/CommentList/ui/CommentList";

type PostCardProps = {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
};

export const PostCard: FC<PostCardProps> = memo(
  ({ id, title, content, comments }) => {
    const navigate = useNavigate();

    const handleClick: React.MouseEventHandler<HTMLElement> = () => {
      navigate(`/posts/${id}`);
    };

    return (
      <article
        className={styles.card}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        <CommentList comments={comments} />
      </article>
    );
  }
);
