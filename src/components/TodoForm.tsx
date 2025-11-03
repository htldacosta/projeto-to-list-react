import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (text: strings) => void;
}
function TodoForm({ addTodo }: TodoFormProps) {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e: React.ChangeEvent<HtmlInputElement>) =>
          setValue(e.target.value)
        }
        placeholder="Adicionar nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
