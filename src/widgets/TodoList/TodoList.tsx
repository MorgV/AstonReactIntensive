import { type FC, memo } from "react";
import type { ITodo } from "../../entities/todo/model/ITodo";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: ITodo[];
  isLoading: boolean;
}

export const TodoList: FC<TodoListProps> = memo(({ todos, isLoading }) => {
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`${styles.item} ${
            todo.completed ? styles.completed : styles.pending
          }`}
        >
          {todo.title} {todo.completed ? "(Done)" : "(Pending)"}
        </li>
      ))}
    </ul>
  );
});
