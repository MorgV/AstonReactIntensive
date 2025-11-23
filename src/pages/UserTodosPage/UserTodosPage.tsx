// src/widgets/TodoList/TodoListContainer.tsx
import { type FC } from "react";
import { withLoading } from "../../shared/lib/hoc/withLoading/withLoading";
import { todosApi } from "../../entities/todo/api/todosApi";
import { useParams } from "react-router-dom";
import { TodoList } from "../../widgets/TodoList/TodoList";
import type { ITodo } from "../../entities/todo/model/types";

const TodoListContent: FC<{ todos: ITodo[]; isLoading: boolean }> = ({
  todos,
  isLoading,
}) => {
  return <TodoList todos={todos} isLoading={isLoading} />;
};

const EnhancedTodoList = withLoading(TodoListContent);

export const UserTodosPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: todos = [], isLoading } = todosApi.useFetchUserTodosQuery(
    Number(id)
  );

  return <EnhancedTodoList isLoading={isLoading} todos={todos} />;
};
