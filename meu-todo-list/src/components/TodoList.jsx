import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index} // Chave única para o React identificar cada item
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
