import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    if (!value) return; // Não adiciona tarefa vazia
    addTodo(value);
    setValue(""); // Limpa o campo de input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Adicionar nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
