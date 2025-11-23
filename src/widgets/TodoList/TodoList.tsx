import { type FC, memo } from "react";
import { MemoItemList } from "../../shared/ui/ItemList/ItemList";
import styles from "./TodoList.module.css";
import type { ITodo } from "../../entities/todo/model/types";

interface TodoListProps {
  todos: ITodo[];
  isLoading: boolean;
}

export const TodoList: FC<TodoListProps> = memo(({ todos, isLoading }) => {
  if (isLoading) return <div>Loading...</div>;

  return (
    <MemoItemList
      items={todos}
      getKey={(todo) => todo.id}
      className={styles.list}
      renderItem={(todo) => (
        <div
          className={`${styles.item} ${
            todo.completed ? styles.completed : styles.pending
          }`}
        >
          {todo.title} {todo.completed ? "(Done)" : "(Pending)"}
        </div>
      )}
    />
  );
});
