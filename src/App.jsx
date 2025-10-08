import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Tasks />
    </div>
  );
}

export default App;
