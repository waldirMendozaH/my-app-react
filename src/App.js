//import logo from './logo.svg';
import React from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";

function App() {
  return (
    <React.Fragment>
      <TodoItem />
      <TodoCounter />
    </React.Fragment>
  );
}

export default App;
