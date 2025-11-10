import { type FC, useState, memo } from "react";
import styles from "./CommentList.module.css";

export type Comment = {
  id: number;
  text: string;
};

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: FC<CommentListProps> = memo(({ comments }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={toggle} className={styles.toggleBtn}>
        {isCollapsed
          ? `Показать комментарии (${comments.length})`
          : "Скрыть комментарии"}
      </button>

      {!isCollapsed && (
        <ul className={styles.list}>
          {comments.map((c) => (
            <li key={c.id} className={styles.comment}>
              {c.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
