import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo, removeTodo }: TodoItemProps) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <span>{todo.text}</span>
      <div>
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.isCompleted ? "Desfazer" : "Completar"}
        </button>
        <button onClick={() => removeTodo(todo.id)}>Remover</button>
      </div>
    </div>
  );
}

export default TodoItem;
