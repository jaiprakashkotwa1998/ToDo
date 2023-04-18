import { StrictMode } from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
  rootElement
);
