import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo, removeTodo }: TodoListProps) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          index={todo}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
