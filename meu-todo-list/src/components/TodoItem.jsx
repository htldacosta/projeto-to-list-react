import React from "react";

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <span>{todo.text}</span>
      <div>
        <button onClick={() => toggleTodo(index)}>
          {todo.isCompleted ? "Desfazer" : "Completar"}
        </button>
        <button onClick={() => removeTodo(index)}>Remover</button>
      </div>
    </div>
  );
}

export default TodoItem;
