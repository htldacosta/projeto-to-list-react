import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Tasks from "./components/Tasks.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Tasks />
  </StrictMode>
);
